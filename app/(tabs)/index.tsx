import React, { useState } from "react";
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const services = [
  { id: "1", title: "Tap Order Ambulance", image: require("../../assets/images/ambulance.jpg"), screen: "medicine" },
  { id: "2", title: "Need Urgent Blood? Find Donors in Just One Click.", image: require("../../assets/images/blood.jpg"), screen: "blood" },
  { id: "3", title: "Find Nearby Hospitals", image: require("../../assets/images/hospital.jpg"), screen: "hospitals" },
];

export default function Index() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to EmergiMed</Text>
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Ionicons name="person-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>All Your Emergency Needs in One Place</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search services..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredServices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <Card style={styles.card}>
              <Card.Cover source={item.image} style={styles.cardImage} />
              <Card.Content>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  welcomeText: {
    fontFamily: "outfit",
    fontSize: 25,
    color: "white",
  },
  subtitle: {
    color: "white",
    marginBottom: 20,
    fontFamily: "regular",
  },
  searchBar: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "outfit",
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  cardImage: {
    height: 150,
  },
  cardTitle: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "outfit",
  },
});