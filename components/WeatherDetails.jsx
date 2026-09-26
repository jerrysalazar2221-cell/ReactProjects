import { Text, View } from 'react-native';

import styles from '../styles/WeatherDetailsStyle';

export default function WeatherDetails({ weather }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Weather Details
      </Text>

      <View style={styles.row}>

        <View style={styles.detailBox}>

          <Text style={styles.icon}>
            💧
          </Text>

          <Text style={styles.label}>
            Humidity
          </Text>

          <Text style={styles.value}>
            {weather.humidity}%
          </Text>

        </View>

        <View style={styles.detailBox}>

          <Text style={styles.icon}>
            💨
          </Text>

          <Text style={styles.label}>
            Wind Speed
          </Text>

          <Text style={styles.value}>
            {weather.wind} km/h
          </Text>

        </View>

      </View>

      <View style={styles.row}>

        <View style={styles.detailBox}>

          <Text style={styles.icon}>
            🌡️
          </Text>

          <Text style={styles.label}>
            Temperature
          </Text>

          <Text style={styles.value}>
            {weather.temperature}°C
          </Text>

        </View>

        <View style={styles.detailBox}>

          <Text style={styles.icon}>
            ☁️
          </Text>

          <Text style={styles.label}>
            Condition
          </Text>

          <Text style={styles.condition}>
            {weather.condition}
          </Text>

        </View>

      </View>

    </View>
  );
}