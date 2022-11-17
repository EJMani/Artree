import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, Button, View, Image} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import React, { useEffect, Component } from 'react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import BoxContainer from '../ui_elements/BoxContainer';

export default function ProfileScreen({navigation}) {
    const queryClient = useQueryClient()


    const UserInstance = 4;
    let [user, updateUser] = React.useState({});
    var [artArray, updateArray] = React.useState([]);

    function getUserInfo(){
        fetch('http://54.236.91.239:3000/getUser/'+UserInstance)
        .then(response => response.json())
        .then(data => {/*console.log(JSON.stringify(data));*/ updateUser(data[0]);});
        return;
        }
        
    function getUserPics(){
        fetch('http://54.236.91.239:3000/getUserArt/'+UserInstance)
        .then(response => response.json())
        .then(data => {/*console.log(JSON.stringify(data));*/ updateArray(data);});
        return;
        }

    useEffect(() => {
        getUserInfo();
        getUserPics();
      }, []);
    return (
        <View style={styles.container}>            
            <BoxContainer style = {styles.container1}>   
            <Image  source={{ uri: user.link }} style={{ width: 50, height: 50, translateX: -50 }}/>
            <Text style ={{translateX:-25,fontSize: 24, color: "#FFFFFF"}}>{user.username}</Text>                        
            </BoxContainer>
            <BoxContainer style = {styles.container2}>
            <Text style = {{fontsize: 26, color: "#FFFFFF",translateX:-120, translateY: -20}}>About Me: </Text>
            <Text style = {{fontsize: 20, color: "#FFFFFF",translateX:-120, translateY: -20}}>{user.aboutMe}</Text>
            </BoxContainer>
            <BoxContainer style = {styles.container3}>                
                {artArray.map((art) =>(
                <View key={art.artID}>
                    <Text style = {{color: "#FFFFFF"}}>{art.title}</Text>
                    <Image  source={{ uri: art.link }} style={{ width: 150, height: 150 }}/>
                </View>
                ))}
            </BoxContainer>   
            
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
    container1 :{
        height: 40,
        width: 375,
        flexDirection: "row"
    },
    container2 :{
        height: 80,
        width: 321,
        backgroundColor: '#383CF4',
        borderRadius: 10    
    },
    container3:{
        height: 200,
        width: 365,
    }
});