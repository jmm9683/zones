import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import LandingPage from "./components/landingPage";
import AlbumsPage from "./components/albumsPage";
import Album from "./components/album";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Album" component={Album} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
