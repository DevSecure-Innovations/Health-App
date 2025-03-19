import React, { 
	useEffect, 
	useState 
} from "react";
import { 
    BackHandler,
	Keyboard, 
	StatusBar 
} from "react-native";
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
	const [isKeyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
		const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
		const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));

		const backAction = () => {
			if (isKeyboardVisible) {
				Keyboard.dismiss();
				return true;
			}
			return false;
		};

		BackHandler.addEventListener("hardwareBackPress", backAction);

		return () => {
			keyboardShowListener.remove();
			keyboardHideListener.remove();
			BackHandler.removeEventListener("hardwareBackPress", backAction);
		};
	}, [isKeyboardVisible]);

	return(
		<>
			<StatusBar barStyle="dark-content" backgroundColor={Color.baseWhite}/>
			<SearchBar profileButton="ProfileStack"/>
			<Tab.Navigator 
				tabBar={(props) => <TabBar {...props} isVisible={isKeyboardVisible}/>}
				initialRouteName="Home"
				screenOptions={{ 
					headerShown: false,
				}}
			>
				<Tab.Screen name="Medicine" component={MedicineScreen} />
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="BloodDonation" component={BloodDonationScreen} />
			</Tab.Navigator>
		</>
	);
};

export default MainTabsLayout;
