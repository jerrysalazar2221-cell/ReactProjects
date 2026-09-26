import { Text, View, Pressable } from 'react-native';

import styles from '../styles/FavoriteListStyle';

export default function FavoriteList({
  favorites,
  onRemove,
  onSelect,
}) {
  return (
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

            <Text style={styles.favoriteCity}>
              {favorite.city}
            </Text>

            <Text style={styles.favoriteCountry}>
              {favorite.country}
            </Text>

            <Text style={styles.favoriteTemperature}>
              {favorite.temperature}°C
            </Text>

            <Text style={styles.favoriteCondition}>
              {favorite.condition}
            </Text>

            <Pressable
              style={styles.loadButton}
              onPress={() => onSelect(favorite.city)}
            >
              <Text style={styles.loadButtonText}>
                VIEW WEATHER
              </Text>
            </Pressable>

            <Pressable
              style={styles.removeButton}
              onPress={() => onRemove(favorite.city)}
            >
              <Text style={styles.removeButtonText}>
                REMOVE
              </Text>
            </Pressable>

          </View>

        ))

      )}

    </View>
  );
}