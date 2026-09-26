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
    marginTop: 30,
  },

  weatherCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 16,
    elevation: 3,
  },

  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  countryName: {
    color: '#666',
    marginTop: 5,
  },

  temperature: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 15,
  },

  info: {
    fontSize: 16,
    marginTop: 12,
  },

  errorText: {
    textAlign: 'center',
    color: '#e53935',
    fontSize: 16,
    marginTop: 30,
  },
});

export default styles;