import React, { Component } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Share as Sharing} from 'react-native';

class Share extends Component {

  render() {
    return (
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <Ionicons
          name="share-social-outline"
          size={25}
          color="#ffffff"
          style={{ margin: 5, alignItems: "flex-end" }}
          onPress={async () => {
              try {
                  console.log("Sharing");
                  const result = await Sharing.share({
                      message:
                          'artree.com/post/' + Math.floor(Math.random() * (99999999 - 10000000 + 1) ),
                  });
                  if (result.action === Sharing.sharedAction) {
                      if (result.activityType) {
                          // shared with activity type of result.activityType
                      } else {
                          // shared
                      }
                  } else if (result.action === Sharing.dismissedAction) {
                      // dismissed
                  }
              } catch (error) {
                  console.log("Sharing failed");
              }
          }}
        />
      </View>
    );
  }
}

export default Share;
