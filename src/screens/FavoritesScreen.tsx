import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAppStore } from '../store/appStore';

const FavoritesScreen: React.FC = () => {
  // Get the list of favorite countries from the store
  const favorites = useAppStore(state => state.favorites);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            You have no favorite countries yet.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.countryId}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.countryName}>{item.countryName}</Text>
              <Text style={styles.capital}>{item.capital}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: 'gray' },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  countryName: { fontSize: 18, fontWeight: 'bold' },
  capital: { fontSize: 14, color: 'gray' },
});

export default FavoritesScreen;
