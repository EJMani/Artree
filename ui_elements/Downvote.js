import React, { Component } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Downvote({artID}){

    async function downvote(){
      await fetch('http://54.236.91.239:3000/downvote/'+artID,{ method: 'POST'})
    }


    return (
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <Ionicons
          name="thumbs-down-outline"
          size={25}
          color="#ffffff"
          style={{ margin: 5 }}
          onPress={() => { downvote();console.log(artID+" Downvoted")}}
        />
      </View>
    );
}
