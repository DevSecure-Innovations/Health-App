import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Linking } from "react-native";

const donors = [
  { id: "1", name: "Rahul Sen", bloodGroup: "A+", phone: "9876543210" },
  { id: "2", name: "Anjali Das", bloodGroup: "B+", phone: "9876543220" },
  { id: "3", name: "Suman Roy", bloodGroup: "O-", phone: "9876543230" },
  { id: "4", name: "Priya Ghosh", bloodGroup: "AB+", phone: "9876543240" },
];

export default function BloodDonorSearch() {
  const [search, setSearch] = useState("");
  const [filteredDonors, setFilteredDonors] = useState(donors);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = donors.filter(
      (donor) =>
        donor.name.toLowerCase().includes(text.toLowerCase()) ||
        donor.bloodGroup.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredDonors(filtered);
  };

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Blood Donors</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or blood group..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredDonors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.donorCard} onPress={() => handleCall(item.phone)}>
            <Text style={styles.donorName}>{item.name}</Text>
            <Text style={styles.donorDetails}>Blood Group: {item.bloodGroup}</Text>
            <Text style={styles.donorPhone}>📞 {item.phone}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noResults}>No donors found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#d32f2f",
    textAlign: "center",
  },
  searchInput: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  donorCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  donorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  donorDetails: {
    fontSize: 16,
    color: "#555",
  },
  donorPhone: {
    fontSize: 16,
    color: "#d32f2f",
    fontWeight: "bold",
    marginTop: 5,
  },
  noResults: {
    textAlign: "center",
    fontSize: 16,
    color: "#777",
    marginTop: 20,
  },
});
