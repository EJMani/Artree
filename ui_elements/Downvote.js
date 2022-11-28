import React, { Component, useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Downvote({ artID, onPress1, onPress2 }) {
  const [iconColor, setIconColor] = useState("#fff");
  const [iconName, setIconName] = useState("thumbs-down-outline");
  async function downvote() {
    await fetch("http://54.236.91.239:3000/downvote/" + artID, {
      method: "POST",
    });
  }

  return (
    <View style={{ borderRadius: 8, overflow: "hidden", paddingLeft: 3 }}>
      <Ionicons
        name={iconName}
        size={30}
        color={iconColor}
        style={{ margin: 5 }}
        onPress={() => {
          if (iconName == "thumbs-down-outline") {
            setIconName("thumbs-down");
            setIconColor("#00E0FF");
            downvote();
            onPress1();
            console.log(artID + " Downvoted");
          }
          if (iconName == "thumbs-down") {
            setIconName("thumbs-down-outline");
            setIconColor("#fff");
            downvote();
            onPress2();
          }
        }}
      />
    </View>
  );
}
