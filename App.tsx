// @ React
import React from 'react';

// @ React Native
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Image, View, StatusBar, Platform, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// @ constants
import Constants from 'expo-constants';
import { ANDROID } from './src/utils/constants';
import MainGame from './src/components/MainGame';

const Stack = createNativeStackNavigator();
const statusBarHeightIOS = Constants.statusBarHeight;
const statusBarHeightAndroid = StatusBar.currentHeight;

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <MainGame />
  </View>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ title: 'Game Screen' }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)


const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == ANDROID ? statusBarHeightAndroid : statusBarHeightIOS,
    flex: 1,
    backgroundColor: 'grey'
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  brick: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    aspectRatio: 1
  },
  button: {
    flex: 1,
  },
  test: {
    flex: 1,
    backgroundColor: 'red',
  },
  centerContainer: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  image: {
    // backgroundColor: 'blue',
    height: 100,
    width: 100,
  }
});

export default App
