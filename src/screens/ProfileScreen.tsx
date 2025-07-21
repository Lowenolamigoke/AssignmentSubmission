import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppStore } from '../store/appStore';

const ProfileScreen: React.FC = () => {
  // Get the visited count using the selector function from the store
  const visitedCount = useAppStore(state => state.getVisitedCount());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>Unique Countries Visited:</Text>
        <Text style={styles.statValue}>{visitedCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 40 },
  statContainer: { alignItems: 'center' },
  statLabel: { fontSize: 18, color: 'gray' },
  statValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 10,
  },
});

export default ProfileScreen;
