import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Information</Text>
      <Text style={styles.text}>For any inquiries, please contact:</Text>
      <Text style={styles.info}>Student Name: Lowen Olamigoke Daniel</Text>
      <Text style={styles.info}>Student ID: 8698392</Text>
      <Text style={styles.info}>Email: ldaniel392@my.conestogac.on.ca</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 15 },
  info: { fontSize: 16, fontWeight: '500', marginBottom: 10 },
});

export default ContactScreen;
