import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParam } from "@/data/navigation-type";
import MainTabsLayout from "./main-tabs/_layout";
import ProfileStack from "./profile/_layout";
import AmbulanceScreen from "./ambulance/ambulance";
import HospitalScreen from "./hospitals/hospital";
import MedicalChatbot from "./chat-bot/chat-bot";

const Stack = createStackNavigator<RootStackParam>();

 const RootStack = () => {
	return(
		<Stack.Navigator screenOptions={{headerShown: false}} >
			<Stack.Screen name="MainTabs" component={MainTabsLayout}/>
			<Stack.Screen name="ProfileStack" component={ProfileStack}/>
			<Stack.Screen name="Ambulance" component={AmbulanceScreen}/>
			<Stack.Screen name="Hospital" component={HospitalScreen}/>
			<Stack.Screen name="ChatBot" component={MedicalChatbot}/>
		</Stack.Navigator>
	);
};

export default RootStack;