import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParam } from "@/data/navigation-type";
import MainTabsLayout from "./main-tabs/_layout";
import ProfileStack from "./profile/_layout";

const Stack = createStackNavigator<RootStackParam>();

 const RootStack = () => {
	return(
		<Stack.Navigator screenOptions={{headerShown: false}} >
			<Stack.Screen name="MainTabs" component={MainTabsLayout}/>
			<Stack.Screen name="ProfileStack" component={ProfileStack}/>
		</Stack.Navigator>
	);
};

export default RootStack;