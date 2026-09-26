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

import WeatherCard from '../components/WeatherCard';
import FavoriteList from '../components/FavoriteList';
import { searchWeather } from '../services/WeatherAPI';

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

      const result = await searchWeather(cityName);

      setWeather(result);
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

    const updatedFavorites = [
      ...favorites,
      weather,
    ];

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

        <WeatherCard
          weather={weather}
          onAddFavorite={addToFavorites}
        />

      ) : (

        <Text style={styles.errorText}>
          City not found. Please try another city.
        </Text>

      )}

      <FavoriteList
        favorites={favorites}
        onRemove={removeFavorite}
      />

      <StatusBar style="auto" />

    </ScrollView>
  );
}