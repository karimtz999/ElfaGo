// index.tsx (or App.tsx)
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splash}>
        <Image
          source={require('../../assets/uber.png')} // put your logo in /assets
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/uber.png')}
        style={styles.smallLogo}
        resizeMode="contain"
      />
      <Text style={styles.welcome}>Welcome to Uber Eats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#06C167', // Uber Eats green
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
