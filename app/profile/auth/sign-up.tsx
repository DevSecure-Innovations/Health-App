import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Image,
} from "react-native";
import { Text, TextInput, Button, Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { AuthStackParam } from "@/data/navigation-type";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Color from "@/constants/color";

type NavigationProp = StackNavigationProp<AuthStackParam>;

const SignUpScreen = () => {
    const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSignUp = () => {
        console.log(
            "Signing up with:",
            fullName,
            phoneNumber,
            phoneNumber,
            password
        );
    };

    const navigation = useNavigation<NavigationProp>();
    const backPressHandler = () => {
        navigation.goBack();
    };
    const signInOnPressHandler = () => {
        navigation.pop(1);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={backPressHandler}>
                    <Ionicons name="chevron-back" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Sign Up</Text>
            </View>
            <View style={styles.card}>

                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Sign up to get started</Text>

                <TextInput
                    label="Full Name"
                    value={fullName}
                    onChangeText={setFullName}
                    mode="outlined"
                    style={styles.input}
                    left={<TextInput.Icon icon="account-outline" color="#555" />}
                    outlineStyle={styles.inputOutline}
                    theme={{ colors: { primary: "#2E7D32" } }}
                />
                <TextInput
                    label="Phone Number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    mode="outlined"
                    style={styles.input}
                    keyboardType="phone-pad"
                    left={<TextInput.Icon icon="phone-outline" color="#555" />}
                    outlineStyle={styles.inputOutline}
                    theme={{ colors: { primary: "#2E7D32" } }}
                />

                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    mode="outlined"
                    style={styles.input}
                    secureTextEntry={!passwordVisible}
                    left={<TextInput.Icon icon="lock-outline" color="#555" />}
                    right={
                        <TextInput.Icon
                            icon={passwordVisible ? "eye-off" : "eye"}
                            color="#555"
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                    }
                    outlineStyle={styles.inputOutline}
                    theme={{ colors: { primary: "#2E7D32" } }}
                />

                <TextInput
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    mode="outlined"
                    style={styles.input}
                    secureTextEntry={!confirmPasswordVisible}
                    left={<TextInput.Icon icon="lock-check-outline" color="#555" />}
                    right={
                        <TextInput.Icon
                            icon={confirmPasswordVisible ? "eye-off" : "eye"}
                            color="#555"
                            onPress={() =>
                                setConfirmPasswordVisible(!confirmPasswordVisible)
                            }
                        />
                    }
                    outlineStyle={styles.inputOutline}
                    theme={{ colors: { primary: "#2E7D32" } }}
                />

                <View style={styles.termsContainer}>
                    <Checkbox.Android
                        status={termsAccepted ? "checked" : "unchecked"}
                        onPress={() => setTermsAccepted(!termsAccepted)}
                        color="#2E7D32"
                    />
                    <View style={styles.termsTextContainer}>
                        <Text style={styles.termsText}>
                            I agree to the{" "}
                            <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
                            <Text style={styles.termsLink}>Privacy Policy</Text>
                        </Text>
                    </View>
                </View>

                <Button
                    mode="contained"
                    onPress={handleSignUp}
                    style={styles.signupButton}
                    labelStyle={styles.buttonText}
                    contentStyle={styles.buttonContent}
                    disabled={
                        !fullName ||
                        !phoneNumber ||
                        !password ||
                        !confirmPassword ||
                        !termsAccepted
                    }
                >
                    SIGN UP
                </Button>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <TouchableOpacity onPress={signInOnPressHandler}>
                        <Text style={styles.loginLink}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    header: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 10,
        left: 10
        
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
        fontWeight: 900,
        textTransform: "capitalize",
        textAlignVertical: "center",
        marginLeft: 10,
    },
    card: {
        width: "95%",
        marginVertical: 50,
        padding: 20,
        borderRadius: 24,
        backgroundColor: Color.baseWhite,
        elevation: 6,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "#2E7D32",
        marginBottom: 8,
        marginTop: 10,
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 15,
        textAlign: "center",
        color: "#666",
        marginBottom: 25,
        letterSpacing: 0.2,
    },
    input: {
        marginBottom: 16,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    inputOutline: {
        borderRadius: 12,
        borderWidth: 1,
    },
    termsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 5,
        gap: 10,
    },
    termsTextContainer: {
        flex: 1,
        marginLeft: -8,
        justifyContent: "center",
        textAlign: "center",
    },
    termsText: {
        color: "#555",
        fontSize: 14,
    },
    termsLink: {
        color: "#2E7D32",
        fontWeight: "bold",
    },
    signupButton: {
        backgroundColor: "#2E7D32",
        borderRadius: 12,
        elevation: 4,
        shadowColor: "#2E7D32",
        shadowOpacity: 1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    buttonContent: {
        paddingVertical: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    divider: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#E0E0E0",
    },
    dividerText: {
        marginHorizontal: 10,
        color: "#888",
        fontSize: 14,
        fontWeight: "600",
    },
    loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 5,
    },
    loginText: {
        fontSize: 15,
        color: "#555",
    },
    loginLink: {
        color: "#2E7D32",
        fontWeight: "bold",
        fontSize: 15,
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: "center",
        marginBottom: 20,
        resizeMode: "contain",
    },
});

export default SignUpScreen;