import React, { Component } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class Share extends Component {
  render() {
    return (
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <Ionicons
          name="share-social-outline"
          size={25}
          color="#ffffff"
          style={{ margin: 5, alignItems: "flex-end" }}
          onPress={() => console.log("Share")}
        />
      </View>
    );
  }
}

export default Share;
