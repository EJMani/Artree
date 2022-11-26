import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function CommissionsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1f1e49" }}>
            <Text>Feed!</Text>
        </View>
    );
}

function AuctionsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1f1e49", }}>
            <Text>Notifications!</Text>
        </View>
    );
}


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#1FCEC6',
                tabBarInactiveTintColor: '#fff',
                tabBarLabelStyle: { fontSize: 16 , fontFamily: 'inter'},
                tabBarStyle: { backgroundColor: '#383CF4' },
            }}
        >
            <Tab.Screen
                name="Feed"
                component={CommissionsScreen}
                options={{ tabBarLabel: 'Commissions' }}
            />
            <Tab.Screen
                name="Notifications"
                component={AuctionsScreen}
                options={{ tabBarLabel: 'Auctions' }}
            />
        </Tab.Navigator>
    );
}

export default function CommerceScreen({navigation}) {

    return (
        <NavigationContainer independent={true} style={styles.container}>
            <MyTabs />
            <StatusBar
                style="light" //this took me an hour to figure out :(
            />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#1f1e49",
    },
});