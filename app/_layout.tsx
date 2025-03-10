import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParam } from "@/data/navigation-type";
import MainTabsLayout from "./main-tabs/_layout";
import ProfileScreen from "./profile";

const Stack = createStackNavigator<RootStackParam>();

 const RootStack = () => {
	return(
		<Stack.Navigator screenOptions={{headerShown: false}} >
			<Stack.Screen name="MainTabs" component={MainTabsLayout}/>
			<Stack.Screen name="Profile" component={ProfileScreen}/>
		</Stack.Navigator>
	);
};

export default RootStack;