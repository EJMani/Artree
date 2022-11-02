import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, Button, View, Image} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import React, { useEffect, Component } from 'react';

export default function ProfileScreen({navigation}) {
    const UserID = 2;
    let [user, updateUser] = React.useState({});
    var [artArray, updateArray] = React.useState([]);

    function getUserInfo(){
        fetch('http://54.236.91.239:3000/getUser/'+UserID)
        .then(response => response.json())
        .then(data => {/*console.log(JSON.stringify(data));*/ updateUser(data[0]);});
        return;
        }
        
    function getUserPics(){
        fetch('http://54.236.91.239:3000/getUserArt/'+UserID)
        .then(response => response.json())
        .then(data => {/*console.log(JSON.stringify(data));*/ updateArray(data);});
        return;
        }
    //Still have a problem with excessive callbacks
    useEffect(() => {
        getUserInfo();
        getUserPics();
      });
    return (
        <View style={styles.container}>
            <View>
            <Image  source={{ uri: user.link }} style={{ width: 50, height: 50 }}/>
                <Text>User: {user.username}</Text>
                <Text>About Me: {user.aboutMe}</Text>
            </View>
            <View>
                <Text>pics</Text>
                {artArray.map((art) =>(
                <View key={art.artID}>
                    <Text>{art.title}</Text>
                    <Image  source={{ uri: art.link }} style={{ width: 150, height: 150 }}/>
                </View>
                ))}
            </View>
            <StatusBar
                style="light" //this took me an hour to figure out :(
            />
            
            
        </View>
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