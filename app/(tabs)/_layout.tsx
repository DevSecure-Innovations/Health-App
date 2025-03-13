import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"; // Added FontAwesome5 for better icons

const { width } = Dimensions.get("window");

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        let iconName;
        switch (route.name) {
          case "medicine":
            iconName = "medkit";
            break;
          case "index":
            iconName = "home";
            break;
          case "blood":
            iconName = "heart"; // Blood drop icon
            break;
          case "ambulance":
            iconName = "ambulance"; // Ambulance icon
            break;
          case "hospital":
            iconName = "hospital"; // Hospital icon
            break;
          default:
            iconName = "hospital";
        }

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => navigation.navigate(route.name)}
            style={[styles.tabButton, isFocused && styles.activeTab]}
          >
            <FontAwesome5
              name={iconName}
              size={24}
              color={isFocused ? "#3498db" : "#888"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="medicine" options={{ title: "Medicine" }} />
      <Tabs.Screen name="blood" options={{ title: "Blood" }} />
      <Tabs.Screen name="index" options={{ title: "Home" }} /> 
      <Tabs.Screen name="ambulance" options={{ title: "Ambulance" }} />
      <Tabs.Screen name="hospital" options={{ title: "Hospital" }} />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: width,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#3498db",
  },
});

export default TabLayout;
