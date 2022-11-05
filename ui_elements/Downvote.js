import React, { Component } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class Downvote extends Component {
  render() {
    return (
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <Ionicons
          name="thumbs-down-outline"
          size={25}
          color="#ffffff"
          style={{ margin: 5 }}
          onPress={() => console.log("Downvote")}
        />
      </View>
    );
  }
}

export default Downvote;
