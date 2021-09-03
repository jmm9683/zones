import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import LandingPage from "./components/landingPage";
import AlbumsPage from "./components/albumsPage";
import Album from "./components/album";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "react-navigation-stack";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Album"
          component={Album}
          options={{
            title: "",
            headerTransparent: true,
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
            headerStyle: {
              position: "absolute",
              backgroundColor: "transparent",
              color: "white",
              zIndex: 100,
              top: 0,
              left: 0,
              right: 0,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
