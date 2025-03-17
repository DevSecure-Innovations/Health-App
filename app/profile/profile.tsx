import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet 
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParam, RootStackParam } from '@/data/navigation-type';

import Color from "../../constants/color";
import MenuItem from '@/components/menu-item';

type NavigationProp = StackNavigationProp<ProfileStackParam>;

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const backPressHandler = () => {
    navigation.goBack();
  };
  const singInOnPressHandler = () => {
    navigation.navigate("AuthStack");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={backPressHandler}>
          <Ionicons name="chevron-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <FontAwesome5 name="user-circle" size={100} color="black" />
        <Text style={styles.username}>Guest</Text>

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="user-edit" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={singInOnPressHandler}>rr
            <FontAwesome5 name="sign-in-alt" style={styles.icon} />
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
        <MenuItem icon="sign-out-alt" text="Log Out" underline={false} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.baseWhite,
    paddingHorizontal: 10,
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
    fontSize: 40
  },
  headerText: { 
    height: "100%",
    fontSize: 24,
    fontWeight: 500,
    textTransform: "capitalize",
    textAlignVertical: "center",
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
  },
  iconRow: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  iconButton: {
    height: 70,
    width: 70,
    backgroundColor: Color.baseGreen,
    borderRadius: "50%",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
    color: Color.seaweed,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#6E9F60',
    marginBottom: 5,
  },
});

export default ProfileScreen;