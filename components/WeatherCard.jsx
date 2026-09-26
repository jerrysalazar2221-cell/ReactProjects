import { Text, View, Pressable } from 'react-native';

import styles from '../styles/WeatherCardStyle';

export default function WeatherCard({ weather, onAddFavorite }) {
  return (
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
        {weather.condition}
      </Text>

      <View style={styles.infoContainer}>

        <Text style={styles.info}>
          💧 Humidity: {weather.humidity}%
        </Text>

        <Text style={styles.info}>
          💨 Wind: {weather.wind} km/h
        </Text>

      </View>

      <Pressable
        style={styles.favoriteButton}
        onPress={onAddFavorite}
      >
        <Text style={styles.favoriteButtonText}>
          ❤️ Add to Favorites
        </Text>
      </Pressable>

    </View>
  );
}