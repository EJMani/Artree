import React, { Component, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

class SellingPicker extends Component {
  state = { user: "" };
  updateUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <View
        style={{
          borderRadius: 25,
          height: 50,
          overflow: "hidden",
          translateX: -10,
        }}
      >
        <Picker
          selectedValue={this.props.value}
          onValueChange={this.props.onValueChange}
          style={styles.picker}
        >
          <Picker.Item
            style={styles.Text}
            label="Not for Sale"
            value={parseInt(0)}
          />
          <Picker.Item
            style={styles.Text}
            label="Auction"
            value={parseInt(1)}
          />
          <Picker.Item
            style={styles.Text}
            label="Buy Now"
            value={parseInt(2)}
          />
        </Picker>
      </View>
    );
  }
}
export default SellingPicker;

const styles = StyleSheet.create({
  picker: {
    overflow: "hidden",
    backgroundColor: "#fff",
    width: 200,
    bottom: 5,
  },
  Text: {
    fontSize: 20,
    fontFamily: "inter",
  },
});
