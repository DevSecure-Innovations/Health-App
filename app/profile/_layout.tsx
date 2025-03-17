import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileStackParam } from "@/data/navigation-type";
import ProfileScreen from "./profile";
import AuthStack from "./auth/_layout";
import color from "@/constants/color";

const Stack = createStackNavigator<ProfileStackParam>();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
    );
};

export default ProfileStack;