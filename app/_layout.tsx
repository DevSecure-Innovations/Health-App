import { createStackNavigator } from "@react-navigation/stack";
import MainTabsLayout from "./main-tabs/_layout";

const Stack = createStackNavigator();

export default function RootLayout() {
	return(
		<Stack.Navigator screenOptions={{headerShown: false}} >
			<Stack.Screen name="MainTabs" component={MainTabsLayout}/>
		</Stack.Navigator>
	);
};
