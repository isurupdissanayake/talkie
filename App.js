import { StatusBar } from "expo-status-bar";
import React, { createContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import { SplashScreen, LoginScreen } from "./src/screens/index.js";
import { StackNavigator } from "./src/navigation/stackNavigator.js";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
