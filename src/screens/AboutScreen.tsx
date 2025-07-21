import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About InfoHub</Text>
      <Text style={styles.text}>InfoHub Version: 1.0.0</Text>
      <Text style={styles.text}>
        This application is developed for Assignment 2 of the Mobile Application
        Development course.
      </Text>
      <Text style={styles.text}>
        It demonstrates the use of React Native, TypeScript, Drawer and Tab
        Navigation, and Zustand for state management.
      </Text>
      <Text style={styles.studentName}>Student: Lowen Olamigoke Daniel</Text>
      <Text style={styles.studentId}>ID: 8698392</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10, lineHeight: 24 },
  studentName: { fontSize: 16, fontWeight: 'bold', marginTop: 30 },
  studentId: { fontSize: 16, fontStyle: 'italic' },
});

export default AboutScreen;
