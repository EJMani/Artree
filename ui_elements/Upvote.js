import React, { Component, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Downvote from "./Downvote";

export default function Upvote({ artID, onPress1, onPress2 }) {
  const [iconColor, setIconColor] = useState("#fff");
  const [iconName, setIconName] = useState("thumbs-up-outline");
  async function upvote() {
    await fetch("http://54.236.91.239:3000/upvote/" + artID, {
      method: "POST",
    });
  }

  return (
    <TouchableOpacity>
      <Ionicons
        name={iconName}
        size={30}
        color={iconColor}
        style={{ marginTop: 5, marginLeft: 10 }}
        // onPress={() => {
        //   upvote();
        //   onPress();
        //   console.log(artID + " Upvoted");
        // }}
        onPress={() => {
          if (iconName == "thumbs-up-outline") {
            setIconName("thumbs-up");
            setIconColor("#00E0FF");
            upvote();
            onPress1();
            console.log(artID + " Upvoted");
          }
          if (iconName == "thumbs-up") {
            setIconName("thumbs-up-outline");
            setIconColor("#fff");
            upvote();
            onPress2();
          }
        }}
      />
    </TouchableOpacity>
  );
}
