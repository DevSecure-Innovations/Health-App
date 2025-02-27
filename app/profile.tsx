import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.profileContainer}>
        <Icon name="user-circle" size={80} color="black" />
        <Text style={styles.username}>Guest</Text>

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="user-edit" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="sign-in-alt" size={24} color="green" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>YOUR INFORMATION</Text>
        <MenuItem icon="shopping-bag" text="Your Orders" />
        <MenuItem icon="map-marker-alt" text="Address Book" />
        <MenuItem icon="credit-card" text="Payments" />
        <MenuItem icon="cogs" text="Payment Settings" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SETTINGS</Text>
        <MenuItem icon="cog" text="Settings" />
        <MenuItem icon="info-circle" text="About Us" />
        <MenuItem icon="question-circle" text="Help & Feedback" />
        <MenuItem icon="sign-out-alt" text="Log Out" />
      </View>
    </View>
  );
};

const MenuItem = ({ icon, text }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Icon name={icon} size={20} color="black" />
    <Text style={styles.menuText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDE1E7',
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 10,
    padding: 8,
    backgroundColor: '#E8F5E9',
    borderRadius: 50,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfileScreen;
