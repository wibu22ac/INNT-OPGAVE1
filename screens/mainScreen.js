import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

const MainScreen = ({ navigation, user }) => {
  const auth = getAuth();

  const handleLogOut = async () => {
    await signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
        navigation.navigate('LogIn');
      })
      .catch(error => {
        console.error('An error happened during sign-out:', error);
      });
  };

  return (
    <View style={styles.container}>
      {user.loggedIn && (
        <>
          <Text>Logged in as: {user.email}</Text>
          <Button title="Log Out" onPress={handleLogOut} />
        </>
      )}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Go to Log In" onPress={() => navigation.navigate('LogIn')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default MainScreen;

