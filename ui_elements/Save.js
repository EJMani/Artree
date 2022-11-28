import React, { Component, useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

//const [iconName, setIconName] = useState("bookmark-outline");
class Save extends Component {
  constructor() {
    super();
    this.state = { iconName: "bookmark-outline", iconColor: "#fff" };
  }
  render() {
    return (
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <Ionicons
          name={this.state.iconName}
          size={30}
          color={this.state.iconColor}
          style={{ margin: 5, alignItems: "flex-end" }}
          onPress={() => {
            if (this.state.iconName == "bookmark") {
              this.setState({
                iconName: "bookmark-outline",
                iconColor: "#fff",
              });
            }
            if (this.state.iconName == "bookmark-outline") {
              this.setState({ iconName: "bookmark", iconColor: "#00E0FF" });
            }
          }}
        />
      </View>
    );
  }
}

export default Save;
