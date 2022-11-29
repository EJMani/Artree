import React, { Component, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

class TagBox extends Component {
  state = { user: "" };
  updateUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <View style={{ borderRadius: 25 }}>
        <TextInput
          placeholder="Select your tags"
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          style={styles.TitleBox}
        ></TextInput>
      </View>
    );
  }
}
export default TagBox;

const styles = StyleSheet.create({
  TitleBox: {
    overflow: "hidden",
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 5,
  },
});
