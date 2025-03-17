import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParam } from "@/data/navigation-type";
import SignInScreen from "./sign-in";
import SignUpScreen from "./sign-up";
import Color from "@/constants/color";
import { StatusBar } from "react-native";

const Stack = createStackNavigator<AuthStackParam>();

const AuthStack = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={Color.baseWhite10Tint} />
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{
                        cardStyle: { backgroundColor: Color.baseWhite10Tint }
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        cardStyle: { backgroundColor: Color.baseWhite10Tint }
                    }}
                />
            </Stack.Navigator>
        </>
    );
};

export default AuthStack;