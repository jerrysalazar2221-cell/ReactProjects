import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  weatherCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 16,
    elevation: 4,
  },

  cityName: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  countryName: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },

  temperature: {
    fontSize: 52,
    fontWeight: 'bold',
    marginTop: 15,
  },

  weatherText: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },

  infoContainer: {
    marginTop: 20,
  },

  info: {
    fontSize: 16,
    marginTop: 10,
  },

  favoriteButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },

  favoriteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  refreshButton: {
    backgroundColor: '#555',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  refreshButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;