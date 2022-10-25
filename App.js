import * as React from 'react';
import {useFonts} from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import NewPostScreen from './screens/NewPostScreen';
import CommerceScreen from './screens/CommerceScreen';
import {StatusBar} from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {

    const [fontsLoaded] = useFonts({
        newake: require("artree/assets/newake-demo-400.otf"),
    });

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#090820",
                        height: 55,
                        borderTopWidth: 0,
                    },
                    tabBarIcon: ({color, size}) => {
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
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: '#1FCEC6',
                    tabBarInactiveTintColor: '#fff',
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: 'artree',
                        headerStyle: {
                            backgroundColor: '#090820',
                        },
                        headerTintColor: '#1FCEC6',
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: 'newake',
                        },
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#090820',
                        },
                        headerTintColor: '#1FCEC6',
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: 'newake',
                        },
                    }}
                />
                <Tab.Screen
                    name="NewPost"
                    component={NewPostScreen}
                    options={{
                        headerTitle: 'New Post',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#090820',
                        },
                        headerTintColor: '#1FCEC6',
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: 'newake',
                        },
                    }}
                />
                <Tab.Screen
                    name="Commerce"
                    component={CommerceScreen}
                    options={{
                        headerTitle: 'Buying',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#090820',
                        },
                        headerTintColor: '#1FCEC6',
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: 'newake',
                        },
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        headerTitle: 'artree',
                        headerStyle: {
                            backgroundColor: '#090820',
                        },
                        headerTintColor: '#1FCEC6',
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: 'newake',
                        },
                    }}
                />
            </Tab.Navigator>
            <StatusBar
                style="light" //this took me an hour to figure out :(
            />
        </NavigationContainer>
    );
}

