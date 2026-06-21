import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

export default function Login() {
  return (
    <ImageBackground
      source={require("../../assets/login.png")} // your food collage background
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Title */}
        <Text style={styles.title}>Welcome to Uber Eats</Text>

        {/* Phone number input with flag */}
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/maroc.png")} // add your flag image here
            style={styles.flag}
          />
          <Text style={styles.countryCode}>+212</Text>
          <TextInput
            placeholder="Mobile number"
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        {/* Continue button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        {/* Divider line with "or" */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        {/* Alternative login options */}
        <TouchableOpacity style={styles.altButton}>
          <Image
            source={require("../../assets/google.png")} // Google logo
            style={styles.icon}
          />
          <Text style={styles.altText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.altButton}>
          <Image
            source={require("../../assets/gmail.png")} // Gmail logo
            style={styles.icon}
          />
          <Text style={styles.altText}>Continue with Email</Text>
        </TouchableOpacity>

        {/* Divider line with "or" */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        
        <TouchableOpacity>
          <Text style={styles.link}>Find my account</Text>
        </TouchableOpacity>

        {/* Disclaimer */}
        <Text style={styles.disclaimer}>
          You consent to receive a verification code by text or Whatsapp. Message and data rates may apply.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  overlay: {
    flex: 1,
    marginTop: 230,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0)", // semi-transparent overlay
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" ,marginRight: 120},

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  flag: { width: 24, height: 24, marginRight: 8 ,borderRadius: 12},
  countryCode: { fontSize: 16, marginRight: 10 },
  input: { flex: 1, paddingVertical: 12 },

  continueButton: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  continueText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ccc" },
  orText: { marginHorizontal: 10, color: "#666", fontSize: 14 },

  altButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  icon: { width: 20, height: 20, marginRight: 10 },
  altText: { fontSize: 15 },

  link: { color: "#06C167", fontSize: 15, textAlign: "center", marginTop: 10 },

  disclaimer: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
});
