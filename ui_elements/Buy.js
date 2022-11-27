import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { POSTS } from "../tempData/postData";

export default function Buy({ post, currentPrice, onPress, disabled }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={styles.button}>
        <Text style={styles.title}>Buy: ${currentPrice}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    //fontFamily: 'intra',
    color: "#000",
  },
  button: {
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff70fb",
    width: 125,
    height: 40,
  },
});