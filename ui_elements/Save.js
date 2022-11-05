import React, { Component } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class Save extends Component {
  render() {
    return (
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <Ionicons
          name="bookmark-outline"
          size={25}
          color="#ffffff"
          style={{ margin: 5, alignItems: "flex-end" }}
        />
      </View>
    );
  }
}

export default Save;
