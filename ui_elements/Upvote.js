import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

    export default function Upvote({artID, onPress}) {
      async function upvote(){
      await fetch('http://54.236.91.239:3000/upvote/'+artID,{ method: 'POST'})
    }
  

    return (
      <TouchableOpacity>
        <Ionicons
          name="thumbs-up-outline"
          size={25}
          color="#ffffff"
          style={{ marginTop: 5, marginLeft: 5 }}
          onPress={() => {upvote(); onPress(); console.log(artID+" Upvoted")}}
        />
      </TouchableOpacity>
    );
}
