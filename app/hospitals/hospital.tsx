import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import color from "@/constants/color";
import { RootStackParam } from "@/data/navigation-type";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type NavigationProp = StackNavigationProp<RootStackParam>;

const HospitalScreen = () => {
  const [location, setLocation] = useState<Region | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProp>();

  const backPressHandler = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Location access is required.");
      setLoading(false);
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={backPressHandler}>
          <Ionicons name="chevron-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hospitals</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={location}
            showsUserLocation={true}
            showsMyLocationButton={true}
          >
            {location && <Marker coordinate={location} title="You are here" />}
          </MapView>
        </View>
      )}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search Hospitals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: color.baseWhite,
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  backButton: {
    height: 50,
  },
  backIcon: {
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 40,
  },
  headerText: {
    height: "100%",
    fontSize: 24,
    fontWeight: 500,
    textTransform: "capitalize",
    textAlignVertical: "center",
    marginLeft: 10,
  },
  mapContainer: {
    height: "50%",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: color.baseBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  map: {
    height: "100%",
    width: "100%",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    height: 50,
    width: "48%",
    backgroundColor: color.baseGreen,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
    color: color.seaweed20LTint,
    shadowColor: color.baseBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default HospitalScreen;
