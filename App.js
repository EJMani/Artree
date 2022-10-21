import * as React from 'react';
import { useEffect, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/NewPostScreen';
import SearchScreen from './screens/SearchScreen';
import NewPostScreen from './screens/NewPostScreen';
import CommerceScreen from './screens/CommerceScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#090820",
            height: 55,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = "home-sharp"
            } else if (route.name === 'Search') {
              iconName = "search"
            } else if (route.name === 'NewPost') {
              iconName = "add-circle";
            } else if (route.name === 'Commerce') {
              iconName = "pricetag";
            } else if (route.name === 'Profile') {
              iconName = "person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1FCEC6',
          tabBarInactiveTintColor: '#fff',
        })}
        >
        <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        />
        <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        />
        <Tab.Screen 
        name="NewPost" 
        component={NewPostScreen} 
        />
        <Tab.Screen 
        name="Commerce" 
        component={CommerceScreen} 
        />
        <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

