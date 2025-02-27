import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text, TextInput, Button, Checkbox } from "react-native-paper";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    console.log("Logging in with:", phoneNumber, password);
    // Add your authentication logic here
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop",
      }}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Sign in to your account to continue
          </Text>

          <TextInput
            label="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            mode="outlined"
            style={styles.input}
            keyboardType="phone-pad"
            left={<TextInput.Icon icon="phone-outline" />}
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
            left={<TextInput.Icon icon="lock-outline" />}
            right={
              <TextInput.Icon
                icon={passwordVisible ? "eye-off" : "eye"}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
            outlineStyle={styles.inputOutline}
            theme={{ colors: { primary: "#2E7D32" } }}
          />

          <View style={styles.rememberContainer}>
            <Checkbox.Android
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
              color="#2E7D32"
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>

          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.loginButton}
            labelStyle={styles.buttonText}
            contentStyle={styles.buttonContent}
          >
            LOGIN
          </Button>

          <TouchableOpacity
            onPress={() => router.push("/forgot-password")}
            style={styles.forgotContainer}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Need an account?</Text>
            <TouchableOpacity onPress={() => router.replace("/sign-up")}>
              <Text style={styles.signupLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  card: {
    width: "88%",
    padding: 25,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E7D32",
    marginBottom: 8,
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
    marginBottom: 18,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  inputOutline: {
    borderRadius: 16,
    borderWidth: 1,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  rememberText: {
    color: "#555",
    fontSize: 14,
    marginLeft: 8,
  },
  loginButton: {
    backgroundColor: "#2E7D32",
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#2E7D32",
    shadowOpacity: 0.4,
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
  forgotContainer: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  forgotText: {
    color: "#2E7D32",
    fontWeight: "600",
    fontSize: 14,
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
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  signupText: {
    fontSize: 15,
    color: "#555",
  },
  signupLink: {
    color: "#2E7D32",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default LoginScreen;