import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

  favoriteCondition: {
    color: '#666',
    marginTop: 5,
    fontSize: 15,
  },

  loadButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  loadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },

  removeButton: {
    backgroundColor: '#e53935',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },

  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default styles;