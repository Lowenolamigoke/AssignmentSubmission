import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from 'react-native';
import { countries, Country } from '../data/countries';
import { useAppStore } from '../store/appStore';

const CountriesScreen: React.FC = () => {
  // State for managing the modal visibility and selected country
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  // Get functions and state from the Zustand store
  const { addFavorite, removeFavorite, isFavorite, markAsVisited } =
    useAppStore();

  /**
   * Handles tapping on a country item.
   * It marks the country as visited and opens the details modal.
   */
  const handleCountryPress = (country: Country) => {
    markAsVisited(country);
    setSelectedCountry(country);
    setModalVisible(true);
  };

  /**
   * Handles the favorite button press.
   * It toggles the country's favorite status.
   */
  const handleFavoriteToggle = (country: Country) => {
    if (isFavorite(country.countryId)) {
      removeFavorite(country.countryId);
    } else {
      addFavorite(country);
    }
  };

  // Render item function for the FlatList
  const renderCountry = ({ item }: { item: Country }) => {
    const favorite = isFavorite(item.countryId);
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => handleCountryPress(item)}
          style={styles.itemDetails}
        >
          <Text style={styles.countryName}>
            {item.countryName} (ID: {item.countryId})
          </Text>
          <Text style={styles.capital}>{item.capital}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.favoriteButton,
            favorite ? styles.removeFavorite : styles.addFavorite,
          ]}
          onPress={() => handleFavoriteToggle(item)}
        >
          <Text style={styles.favoriteButtonText}>
            {favorite ? 'Remove' : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        renderItem={renderCountry}
        keyExtractor={item => item.countryId}
        contentContainerStyle={styles.list}
      />
      {/* Modal for displaying full country details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedCountry && (
              <>
                <Text style={styles.modalTitle}>
                  {selectedCountry.countryName}
                </Text>
                <Text style={styles.modalText}>
                  ID: {selectedCountry.countryId}
                </Text>
                <Text style={styles.modalText}>
                  Capital: {selectedCountry.capital}
                </Text>
                <Text style={styles.modalText}>
                  Population: {selectedCountry.population.toLocaleString()}
                </Text>
                <Text style={styles.modalText}>
                  Continent: {selectedCountry.continent}
                </Text>
                <Text style={styles.modalText}>
                  Country Code: {selectedCountry.countryCode}
                </Text>
              </>
            )}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  list: { padding: 10 },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemDetails: { flex: 1 },
  countryName: { fontSize: 18, fontWeight: 'bold' },
  capital: { fontSize: 14, color: 'gray' },
  favoriteButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addFavorite: { backgroundColor: '#007AFF' },
  removeFavorite: { backgroundColor: '#E53935' },
  favoriteButtonText: { color: '#fff', fontWeight: 'bold' },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  modalText: { fontSize: 16, marginBottom: 8 },
});

export default CountriesScreen;
