import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';

import styles from '../styles/WeatherDashboardStyle';

export default function WeatherDashboard() {
  const [city, setCity] = useState('Manila');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather('Manila');
  }, []);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);

      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cityName
        )}&count=1&language=en&format=json`
      );

      const locationData = await locationResponse.json();

      if (
        !locationData.results ||
        locationData.results.length === 0
      ) {
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
      console.log('Weather Error:', error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim() === '') {
      return;
    }

    fetchWeather(city);
  };

  return (
    <View style={styles.container}>

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

          <Text style={styles.info}>
            💧 Humidity: {weather.humidity}%
          </Text>

          <Text style={styles.info}>
            💨 Wind: {weather.wind} km/h
          </Text>

          <Text style={styles.info}>
            Weather Code: {weather.weatherCode}
          </Text>

        </View>

      ) : (

        <Text style={styles.errorText}>
          City not found.
        </Text>

      )}

    </View>
  );
}