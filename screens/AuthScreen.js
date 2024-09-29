import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';
import { getApps, initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

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

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.componentsBox}>
        <SignUpComponent />
      </View>
      <View style={styles.componentsBox}>
        <LogInComponent />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentsBox: {
    width: '90%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
