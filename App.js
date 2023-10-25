import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import AccountScreen from "./components/screens/AccountScreen";
import CharityScreen from "./components/screens/CharityScreen";
import CharityListScreen from "./components/screens/CharityListScreen";
import AppCard from "./components/compon/AppCard";
import { CharityProvider } from "./components/config/CharityContext";
import AddCharityScreen from "./components/screens/AddCharityScreen";
import AuthNavigator from "./components/navigation/AuthNavigator";
import StackNavigator from "./components/navigation/StackNavigator";



export default function App() {
  return (
    //<WelcomeScreen />

   
    // //<Account />
    
  //    <CharityProvider>
  //     <AddCharityScreen />
  
  //  </CharityProvider>

  

  
       <StackNavigator />
   
    
  );
}

