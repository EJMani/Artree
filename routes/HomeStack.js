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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack };
