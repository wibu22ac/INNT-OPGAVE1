import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import HomeScreen from './screens/HomeScreen';
import SignUpComponent from './components/SignUpComponent';
import LogInComponent from './components/LogInComponent';
import MainScreen from './screens/MainScreen';

const firebaseConfig = {
  apiKey: "AIzaSyDpk1w41mXSefRa0ish4driL1V-f8r9W80",
  authDomain: "innt-ca025.firebaseapp.com",
  databaseURL: "https://innt-ca025-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "innt-ca025",
  storageBucket: "innt-ca025.appspot.com",
  messagingSenderId: "890831225309",
  appId: "1:890831225309:web:976d585fd1e6601b59f634",
  measurementId: "G-Z9QRQC4XZT"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({ loggedIn: false });

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ loggedIn: true, email: user.email });
        console.log("You are logged in!");
      } else {
        setUser({ loggedIn: false });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpComponent} />
        <Stack.Screen name="LogIn" component={LogInComponent} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

