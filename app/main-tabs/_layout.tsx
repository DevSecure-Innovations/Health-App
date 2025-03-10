import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./home";
import MedicineScreen from "./medicine";
import BloodDonationScreen from "./blood-donation";
import ProfileScreen from "./../profile";

import TabBar from "@/components/bottom-tab-bar";
import SearchBar from "@/components/search-bar";
import Color from "@/constants/color";

type BottomTabParam = {
	Medicine: undefined;
	Home: undefined;
	BloodDonation: undefined;
};

const Tab =createBottomTabNavigator<BottomTabParam>();

const MainTabsLayout = () => {
	return(
		<>
			<SearchBar linkProfile="./../profile"/>
			<StatusBar barStyle="dark-content" backgroundColor={Color.baseWhite}/>
			<Tab.Navigator 
				tabBar={(props) => <TabBar {...props}/>}
				initialRouteName="Home"
				screenOptions={{ headerShown: false }}
			>
				<Tab.Screen name="Medicine" component={MedicineScreen} />
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="BloodDonation" component={BloodDonationScreen} />
			</Tab.Navigator>
		</>
	);
};

export default MainTabsLayout;
