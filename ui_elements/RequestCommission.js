import React from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

export default function CustomButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.title}>Request Commission</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "30%",
    height: 75,
    borderRadius: 35,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#FF70FB",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#000000",
    textAlign: "center",
  },
});
