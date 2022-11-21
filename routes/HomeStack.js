import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: "artree",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#090820",
            borderBottomWidth: 0,
          },
          headerTintColor: "#1FCEC6",
          headerTitleStyle: {
            fontSize: 32,
            fontFamily: "newake",
            marginTop: 4,
          },
        }}
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          headerShown: true,
          headerTitle: "artree",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#090820",
            borderBottomWidth: 0,
          },
          headerTintColor: "#1FCEC6",
          headerTitleStyle: {
            fontSize: 32,
            fontFamily: "newake",
            marginTop: 4,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack };
