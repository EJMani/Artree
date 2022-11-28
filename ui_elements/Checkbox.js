import React, { Component, useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

class Checkbox extends Component {
  constructor() {
    super();
    this.state = { iconName: "check-box-outline-blank", iconColor: "#000" };
  }
  render() {
    return (
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <MaterialIcons
          name={this.state.iconName}
          size={40}
          color={this.state.iconColor}
          style={{ margin: 5, alignItems: "flex-end" }}
          onPress={() => {
            if (this.state.iconName == "check-box") {
              this.setState({
                iconName: "check-box-outline-blank",
                iconColor: "#000",
              });
            }
            if (this.state.iconName == "check-box-outline-blank") {
              this.setState({ iconName: "check-box", iconColor: "#00E0FF" });
            }
          }}
        />
      </View>
    );
  }
}

export default Checkbox;
