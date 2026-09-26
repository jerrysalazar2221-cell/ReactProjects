import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },

  header: {
    backgroundColor: '#2196F3',
    padding: 30,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },

  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },

  searchContainer: {
    padding: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },

  searchButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
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
    borderRadius: 15,
    elevation: 4,
  },

  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  countryName: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },

  temperature: {
    fontSize: 50,
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
    marginTop: 8,
  },

  favoriteButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  favoriteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  favoriteContainer: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
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
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
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
    color: 'red',
  },
});

export default styles;