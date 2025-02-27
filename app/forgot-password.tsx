"use client"
import React, { useState } from "react"
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, ImageBackground } from "react-native"
import { Text, TextInput, Button } from "react-native-paper"
import { useRouter } from "expo-router"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const ForgotPasswordScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const router = useRouter()

  const handleResetPassword = () => {
    console.log("Reset password for:", phoneNumber)
  }

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
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color="#2E7D32"
            />
          </TouchableOpacity>

          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.subtitle}>
            Enter your Phone Number and we'll send you a Link to reset your
            password
          </Text>

          {/* <TextInput
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            left={<TextInput.Icon icon="email-outline" color="#555" />}
            outlineStyle={styles.inputOutline}
            theme={{ colors: { primary: "#2E7D32" } }}
          /> */}
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

          <Button
            mode="contained"
            onPress={handleResetPassword}
            style={styles.resetButton}
            labelStyle={styles.buttonText}
            contentStyle={styles.buttonContent}
            disabled={!phoneNumber}
          >
            SEND THE LINK
          </Button>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Remember your password?</Text>
            <TouchableOpacity onPress={() => router.navigate("/sign-in")}>
              <Text style={styles.loginLink}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
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
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E7D32",
    marginBottom: 12,
    marginTop: 10,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#666",
    marginBottom: 25,
    letterSpacing: 0.2,
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  inputOutline: {
    borderRadius: 12,
    borderWidth: 1,
  },
  resetButton: {
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
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
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
})

export default ForgotPasswordScreen

