import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BuyingButton from "../ui_elements/BuyingButton";
import { useQueryClient, useQuery,useQueries } from "@tanstack/react-query";
import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import Loading from '../ui_elements/Loading';

function CommissionsScreen() {
    const {userInstance} = useContext(UserContext);
    const QueryClient = useQueryClient();
    const buyerCommisions = useQuery({ 
        queryKey: ['buyer'], 
        queryFn: async ()=>{
            const res  = await fetch(`http://54.236.91.239:3000/getBuyerCommisions/${userInstance}`,{
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
            const data = res.json();
            return data;
        }
      })

      const sellerCommisions = useQuery({ 
        queryKey: ['seller'], 
        queryFn: async ()=>{
            const res  = await fetch(`http://54.236.91.239:3000/getSellerCommisions/${userInstance}`,{
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
            const data = res.json();
            return data;
        }
      })

      useEffect(()=>{
      },[])

      if (buyerCommisions.isLoading || buyerCommisions.isLoading) {
        return <Loading/>
      }
    
      //If Posts have error loading
      if (buyerCommisions.isError) {
        return <Text>Error: {buyerCommisions.error.message}</Text>;
      }
      if (sellerCommisions.isError) {
        return <Text>Error: {sellerCommisions.error.message}</Text>;
      }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1f1e49" }}>
            <BuyingButton></BuyingButton>
            {console.log(buyerCommisions.data)}
            {console.log(sellerCommisions.data)}
        </View>
    );
}

function AuctionsScreen() {
    const {userInstance} = useContext(UserContext);
    const auctionPast = useQuery({ 
        queryKey: ['auctionPast'], 
        queryFn: async ()=>{
            const res  = await fetch(`http://54.236.91.239:3000/getAuctionUserInfo/${userInstance}`,{
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
            const data = res.json();
            return data;
        }
      })

    if (auctionPast.isLoading) {
    return <Loading/>
    }
    if (auctionPast.isError) {
        return <Text>Error: {auctionPast.error.message}</Text>;
      }
      if (auctionPast.isError) {
        return <Text>Error: {auctionPast.error.message}</Text>;
      }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1f1e49", }}>
            <Text>Notifications!</Text>
            {console.log(auctionPast.data)}
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
                tabBarLabelStyle: { fontSize: 20 , fontFamily: 'inter', textTransform: "capitalize"},
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