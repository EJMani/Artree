import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class Upvote extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Ionicons
          name="thumbs-up-outline"
          size={25}
          color="#ffffff"
          style={{ marginTop: 5, marginLeft: 5 }}
          onPress={() => console.log("Upvote")}
        />
      </TouchableOpacity>
    );
  }
}

export default Upvote;
