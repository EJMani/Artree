import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BuyingButton from "../ui_elements/BuyingButton";
import { useQueryClient, useQuery, useQueries } from "@tanstack/react-query";
import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import Loading from '../ui_elements/Loading';
import Post from "../ui_elements/Post";
import BidAgain from "../ui_elements/BidAgain";
import Timer from '../ui_elements/Timer'
import CustomButton from '../ui_elements/CustomButton';

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
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#1f1e49", }}>

                {buyerCommisions.data?.map((com, index) => (
                    <Text key={index} style={styles.text}>You Commissioned #{index + 1}{"\n\t\t\t\t"} Artist: {com.seller} {"\n\t\t\t\t"} {com.progress} {"\n\t\t\t\t"} cost: ${com.commisionPrice}</Text>
                ))}
            <View></View>
            {sellerCommisions.data?.map((com, index) => (
                <Text key={index} style={styles.text}>Your Job #{index + 1}{"\n\t\t\t\t"} Customer: {com.buyer} {"\n\t\t\t\t"} {com.progress} {"\n\t\t\t\t"} cost: ${com.commisionPrice}{"\n\t\t\t\t"} <CustomButton title={"Complete"}/></Text>
            ))}
        </View>
    );
}

function AuctionsScreen() {
    const {userInstance} = useContext(UserContext);
    const QueryClient = useQueryClient();
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
        },
        refetchOnWindowFocus: true,
        // enabled: false,
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
            {console.log(auctionPast.data)}
            {auctionPast.data?.map((auc, index) => (
                    <Text key={index} style={styles.text}>Auction Bid {index + 1}{"\n\t\t\t\t"} auctioneer: {auc.auctioneer} {"\n\t\t\t\t"}  Highest Bid: ${auc.currrentBid} {"\n\t\t\t\t"} Time Left: <Timer deadline={auc.endDate}/> {"\n\t\t\t\t"}
                        {userInstance==auc.highestBidderID? <Text>You are winning</Text> : <BidAgain/>}</Text>
                ))}
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
    text: {
        alignSelf: "flex-start",
        paddingTop: 10,
        paddingLeft: 15,
        fontFamily: "inter",
        color: '#fff',
        textAlign: "justify",
        fontSize: 25,
    },
    otherText: {
        alignSelf: "flex-start",
        translateY: -5,
        paddingLeft: 21,
        fontFamily: "inter",
        color: '#1FCEC6',
        textAlign: "justify",
        fontSize: 24,
    },
    buySellButton: {
        flex: 1,
        alignSelf: "flex-end",
        paddingRight: 10,
        position: "absolute",
        bottom: 10,
    },
    otherButtons: {
        alignSelf: "flex-start",
        paddingTop: 5,
        paddingLeft: 45,
    }
});