import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Phone, MapPin, Clock, Search } from 'lucide-react-native';

const ambulanceData = [
  { id: 1, name: "Uttarpara Health Club", image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=500", distance: "0.5 km", contact: "+91 98765 43210", available: true, eta: "5 minutes", location: "Uttarpara" },
  { id: 2, name: "Kolkata Emergency Services", image: "https://images.unsplash.com/photo-1612277635895-b2a4f39de1d5?w=500", distance: "3 km", contact: "+91 87654 32109", available: true, eta: "10 minutes", location: "Kolkata" },
  { id: 3, name: "Howrah First Response", image: "https://images.unsplash.com/photo-1576765607924-1c7eaa13086e?w=500", distance: "2 km", contact: "+91 78965 12340", available: false, eta: "15 minutes", location: "Howrah" },
];

export default function AmbulanceScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAmbulances, setFilteredAmbulances] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = ambulanceData.filter(ambulance =>
        ambulance.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredAmbulances(filtered);
    } else {
      setFilteredAmbulances([]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Emergency Ambulance Services</Text>
        <Text style={styles.instruction}>Search for ambulance services in your area</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Search size={20} color="#64748b" />
          <TextInput
            placeholder="Enter your location"
            placeholderTextColor="#94a3b8"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      {filteredAmbulances.length === 0 ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1576765607924-1c7eaa13086e?w=500" }} style={styles.ambulanceImage} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredAmbulances.map((ambulance, index) => (
            <Animated.View key={ambulance.id} entering={FadeInUp.delay(index * 100)} style={styles.ambulanceCard}>
              <Image source={{ uri: ambulance.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{ambulance.name}</Text>
                <View style={styles.infoGrid}>
                  <View style={styles.infoItem}><MapPin size={16} color="#64748b" /><Text style={styles.infoText}>{ambulance.distance}</Text></View>
                  <View style={styles.infoItem}><Clock size={16} color="#64748b" /><Text style={styles.infoText}>ETA: {ambulance.eta}</Text></View>
                  <View style={styles.infoItem}><Phone size={16} color="#64748b" /><Text style={styles.infoText}>{ambulance.contact}</Text></View>
                </View>
                <Pressable style={styles.callButton}><Text style={styles.callButtonText}>Call Now</Text></Pressable>
              </View>
            </Animated.View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  header: { padding: 16, alignItems: 'center' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1f2937' },
  instruction: { fontSize: 16, color: '#64748b', marginTop: 4 },
  searchContainer: { padding: 16 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f5f9', paddingHorizontal: 12, borderRadius: 12 },
  searchInput: { flex: 1, padding: 10, fontSize: 16, color: '#1e293b' },
  imageContainer: { alignItems: 'center', marginTop: 20 },
  ambulanceImage: { width: 300, height: 200, borderRadius: 10 },
  ambulanceCard: { backgroundColor: '#ffffff', margin: 16, borderRadius: 16, shadowOpacity: 0.1, elevation: 3 },
  cardImage: { width: '100%', height: 180, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  cardContent: { padding: 16 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#1f2937' },
  infoGrid: { marginTop: 10 },
  infoItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  infoText: { marginLeft: 6, fontSize: 14, color: '#64748b' },
  callButton: { backgroundColor: '#ef4444', padding: 12, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  callButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
});
