import React, { Component } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class Upvote extends Component {
  render() {
    return (
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <Ionicons
          name="thumbs-up-outline"
          size={25}
          color="#ffffff"
          style={{ marginTop: 5, marginLeft: 5 }}
        />
      </View>
    );
  }
}

export default Upvote;
