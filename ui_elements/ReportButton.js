import React, { Component } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

class ReportButton extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => console.log("Report")}>
        <View>
          <Text style={{ color: "white" }}>Report</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ReportButton;
