import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Gambar di bagian atas */}
      <Image 
        source={require('../(tabs)/welcome.png')} // Ganti dengan nama gambar Anda
        style={styles.image}
      />
      
      {/* Judul */}
      <Text style={styles.title}>Selamat Datang di Aplikasi Kami</Text>
      
      {/* Deskripsi */}
      <Text style={styles.description}>
        Aplikasi ini menawarkan berbagai fitur menarik untuk memudahkan hidup Anda.
      </Text>
      
      {/* Tombol untuk Aksi */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Tombol diklik!')}>
        <Text style={styles.buttonText}>Mulai Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
