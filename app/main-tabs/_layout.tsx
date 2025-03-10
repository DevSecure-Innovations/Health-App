import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./home";
import MedicineScreen from "./medicine";
import BloodDonationScreen from "./blood-donation";

import { MainTabsParam } from "./../../data/navigation-type";
import TabBar from "@/components/bottom-tab-bar";
import SearchBar from "@/components/search-bar";
import Color from "@/constants/color";

const Tab = createBottomTabNavigator<MainTabsParam>();

const MainTabsLayout = () => {
	return(
		<>
			<StatusBar barStyle="dark-content" backgroundColor={Color.baseWhite}/>
			<SearchBar profileButton="Profile"/>
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
