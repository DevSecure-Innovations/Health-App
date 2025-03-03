import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, Animated, StyleSheet, Dimensions } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const scaleValue = useRef(new Animated.Value(isFocused ? 1.5 : 1)).current;

        useEffect(() => {
          Animated.timing(scaleValue, {
            toValue: isFocused ? 1.5 : 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }, [isFocused]);

       
        const iconName =
          route.name === "medicine"
            ? "medkit"
            : route.name === "index"
            ? "home"
            : "heart";

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}
          >
            <Animated.View style={[styles.iconWrapper, { transform: [{ scale: scaleValue }] }]}>
              <Ionicons
                name={isFocused ? iconName : `${iconName}-outline`}
                size={isFocused ? 32 : 24}
                color="black"
              />
            </Animated.View>
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
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="blood" options={{ title: "Blood" }} />
    
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 70,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
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
  },
  iconWrapper: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 20,
  },
});

export default TabLayout;
