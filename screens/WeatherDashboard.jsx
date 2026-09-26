import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import styles from '../styles/WeatherDashboardStyle';

export default function WeatherDashboard() {
  const [city, setCity] = useState('Manila');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    searchCity('Manila');
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const savedFavorites = await AsyncStorage.getItem(
        'favoriteCities'
      );

      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.log('Load Favorites Error:', error);
    }
  };

  const searchCity = async (cityName) => {
    try {
      setLoading(true);

      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cityName
        )}&count=1&language=en&format=json`
      );

      const locationData = await locationResponse.json();

      if (!locationData.results) {
        setWeather(null);
        return;
      }

      const location = locationData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
      );

      const weatherData = await weatherResponse.json();

      setWeather({
        city: location.name,
        country: location.country,
        temperature: weatherData.current.temperature_2m,
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m,
        weatherCode: weatherData.current.weather_code,
      });
    } catch (error) {
      console.log('Weather API Error:', error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim() === '') {
      return;
    }

    searchCity(city);
  };

  const addToFavorites = async () => {
    if (!weather) {
      return;
    }

    const alreadyFavorite = favorites.some(
      (favorite) => favorite.city === weather.city
    );

    if (alreadyFavorite) {
      return;
    }

    const updatedFavorites = [...favorites, weather];

    setFavorites(updatedFavorites);

    try {
      await AsyncStorage.setItem(
        'favoriteCities',
        JSON.stringify(updatedFavorites)
      );
    } catch (error) {
      console.log('Save Favorites Error:', error);
    }
  };

  const removeFavorite = async (cityName) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.city !== cityName
    );

    setFavorites(updatedFavorites);

    try {
      await AsyncStorage.setItem(
        'favoriteCities',
        JSON.stringify(updatedFavorites)
      );
    } catch (error) {
      console.log('Remove Favorite Error:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>
          GLOBAL WEATHER
        </Text>

        <Text style={styles.subtitle}>
          Live Weather Dashboard
        </Text>
      </View>

      <View style={styles.searchContainer}>

        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
        />

        <Pressable
          style={styles.searchButton}
          onPress={handleSearch}
        >
          <Text style={styles.buttonText}>
            SEARCH
          </Text>
        </Pressable>

      </View>

      {loading ? (

        <ActivityIndicator
          size="large"
          style={styles.loading}
        />

      ) : weather ? (

        <View style={styles.weatherCard}>

          <Text style={styles.cityName}>
            {weather.city}
          </Text>

          <Text style={styles.countryName}>
            {weather.country}
          </Text>

          <Text style={styles.temperature}>
            {weather.temperature}°C
          </Text>

          <Text style={styles.weatherText}>
            Current Weather
          </Text>

          <View style={styles.infoContainer}>

            <Text style={styles.info}>
              💧 Humidity: {weather.humidity}%
            </Text>

            <Text style={styles.info}>
              💨 Wind: {weather.wind} km/h
            </Text>

            <Text style={styles.info}>
              🌤️ Weather Code: {weather.weatherCode}
            </Text>

          </View>

          <Pressable
            style={styles.favoriteButton}
            onPress={addToFavorites}
          >
            <Text style={styles.favoriteButtonText}>
              ❤️ Add to Favorites
            </Text>
          </Pressable>

        </View>

      ) : (

        <Text style={styles.errorText}>
          City not found. Please try another city.
        </Text>

      )}

      <View style={styles.favoriteContainer}>

        <Text style={styles.sectionTitle}>
          ❤️ Favorite Cities
        </Text>

        {favorites.length === 0 ? (

          <Text style={styles.favoriteText}>
            No favorite cities yet.
          </Text>

        ) : (

          favorites.map((favorite, index) => (

            <View
              key={index}
              style={styles.favoriteItem}
            >

              <View>
                <Text style={styles.favoriteCity}>
                  {favorite.city}
                </Text>

                <Text style={styles.favoriteCountry}>
                  {favorite.country}
                </Text>

                <Text style={styles.favoriteTemperature}>
                  {favorite.temperature}°C
                </Text>
              </View>

              <Pressable
                style={styles.removeButton}
                onPress={() => removeFavorite(favorite.city)}
              >
                <Text style={styles.removeButtonText}>
                  REMOVE
                </Text>
              </Pressable>

            </View>

          ))

        )}

      </View>

      <StatusBar style="auto" />

    </ScrollView>
  );
}