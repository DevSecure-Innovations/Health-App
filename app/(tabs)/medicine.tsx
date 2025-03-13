import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MedicineOrderScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialIcons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Order Medicine</Text>
      </View>    <ScrollView contentContainerStyle={styles.content}>
      {[
        {
          id: 'med1',
          title: 'Pain Reliever',
          description: 'Fast acting pain relief tablets.',
          image: `https://api.a0.dev/assets/image?text=pain%20reliever&aspect=16:9&seed=101`
        },
        {
          id: 'med2',
          title: 'Cough Syrup',
          description: 'Soothe your cough with our herbal formula.',
          image: `https://api.a0.dev/assets/image?text=cough%20syrup&aspect=16:9&seed=202`
        },
        {
          id: 'med3',
          title: 'Vitamin C',
          description: 'Boost your immunity with our vitamin C supplements.',
          image: `https://api.a0.dev/assets/image?text=vitamin%20c&aspect=16:9&seed=303`
        }
      ].map((medicine) => (
        <View key={medicine.id} style={styles.medicineCard}>
          <Image source={{ uri: medicine.image }} style={styles.medicineImage} resizeMode="cover" />
          <View style={styles.medicineInfo}>
            <Text style={styles.medicineTitle}>{medicine.title}</Text>
            <Text style={styles.medicineDescription}>{medicine.description}</Text>
            <TouchableOpacity style={styles.orderButton} onPress={()=>{}}>
              <Text style={styles.orderButtonText}>{`Order Now`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },  content: {
    padding: 16,
  },    text: {
      fontSize: 16,
      color: '#666',
    },
    medicineCard: {
      backgroundColor: '#fff',
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    medicineImage: {
      width: '100%',
      height: 150,
    },
    medicineInfo: {
      padding: 12,
    },
    medicineTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      marginBottom: 4,
    },
    medicineDescription: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    orderButton: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    orderButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
});