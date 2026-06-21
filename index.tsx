import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Intro() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splash}>
        <Image
          source={require("../../assets/uber.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcome}>Welcome to Uber Eats</Text>
        {/* Link to login.tsx */}
        <Link href="./Login" asChild>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splash: { flex: 1, backgroundColor: "#06C167", justifyContent: "center", alignItems: "center" },
  logo: { width: 200, height: 200 },
  background: { flex: 1, resizeMode: "cover" },
  overlay: { flex: 1, justifyContent: "flex-end", alignItems: "center", paddingBottom: 40, backgroundColor: "rgba(0,0,0,0.3)" },
  welcome: { fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 30 },
  continueButton: { backgroundColor: "#06C167", paddingVertical: 16, paddingHorizontal: 100, borderRadius: 30, marginBottom: 40 },
  buttonText: { color: "#fff", fontSize: 20, fontWeight: "600" },
});
