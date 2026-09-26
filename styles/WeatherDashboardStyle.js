import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },

  header: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },

  subtitle: {
    fontSize: 16,
    color: '#e3f2fd',
    marginTop: 6,
  },

  searchContainer: {
    padding: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
  },

  searchButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  loading: {
    marginTop: 40,
  },

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

  favoriteContainer: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  favoriteText: {
    color: '#777',
    marginTop: 15,
  },

  favoriteItem: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 15,
    marginTop: 12,
  },

  favoriteCity: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  favoriteCountry: {
    color: '#666',
    marginTop: 3,
  },

  favoriteTemperature: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },

  removeButton: {
    backgroundColor: '#e53935',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },

  errorText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#e53935',
    fontSize: 16,
  },
  condition: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 5,
},

});

export default styles;