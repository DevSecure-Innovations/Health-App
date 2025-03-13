import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Search } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const services = [
  {
    id: 1,
    title: 'Find Blood Donors',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    color: '#fee2e2',
  },
  {
    id: 2,
    title: 'Order Ambulance',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    color: '#dbeafe',
  },
  {
    id: 3,
    title: 'Buy Medicine',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    color: '#dcfce7',
  },
  {
    id: 4,
    title: 'Find Hospitals',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    color: '#fef9c3',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, John</Text>
          <Text style={styles.subtitle}>How are you feeling today?</Text>
        </View>
        <Pressable style={styles.iconButton}>
          <Bell size={24} color="#1f2937" />
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#64748b" />
        <Text style={styles.searchPlaceholder}>Search for services, doctors...</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Quick Services</Text>
        <View style={styles.servicesGrid}>
          {services.map((service, index) => (
            <Animated.View
              key={service.id}
              entering={FadeInUp.delay(index * 100)}
              style={[styles.serviceCard, { backgroundColor: service.color }]}>
              <Image
                source={{ uri: service.image }}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceTitle}>{service.title}</Text>
            </Animated.View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Nearby Hospitals</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.hospitalsScroll}>
          {[1, 2, 3].map((_, index) => (
            <Animated.View
              key={index}
              entering={FadeInUp.delay(index * 100)}
              style={styles.hospitalCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }}
                style={styles.hospitalImage}
              />
              <View style={styles.hospitalInfo}>
                <Text style={styles.hospitalName}>City General Hospital</Text>
                <Text style={styles.hospitalDistance}>2.5 km away</Text>
              </View>
            </Animated.View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  iconButton: {
    padding: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  searchPlaceholder: {
    marginLeft: 8,
    color: '#64748b',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#1f2937',
    marginBottom: 16,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  serviceCard: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  serviceImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1f2937',
  },
  hospitalsScroll: {
    marginBottom: 24,
  },
  hospitalCard: {
    width: 280,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hospitalImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  hospitalInfo: {
    padding: 16,
  },
  hospitalName: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#1f2937',
    marginBottom: 4,
  },
  hospitalDistance: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter_400Regular',
  },
});