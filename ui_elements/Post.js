import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Divider, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import Upvote from "../ui_elements/Upvote";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1000} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#383CF4",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text
        style={{
          color: "white",
          marginLeft: 5,
          fontWeight: "700",
          fontSize: 25,
          padding: 10,
        }}
      >
        {post.Title}
      </Text>
    </View>

    <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
      <Image
        source={require("../assets/adaptive-icon.png")}
        style={styles.proPic}
      />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      //stand-in post image
      source={{ uri: post.imageURL }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View
    style={{
      backgroundColor: "#383CF4",
      height: 50,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Ionicons
        name="thumbs-up-outline"
        size={25}
        color="#ffffff"
        style={{ marginTop: 5, marginLeft: 5 }}
        onPress={() => console.log("upvote")}
      />
      <Ionicons
        name="thumbs-down-outline"
        size={25}
        color="#ffffff"
        style={{ margin: 5 }}
        onPress={() => console.log("downvote")}
      />
      <Text style={{ color: "white", marginTop: 10 }}>{post.votes}</Text>
    </View>
    <View
      style={{
        flex: 1,
        alignItems: "flex-end",
        marginRight: 5,
        flexDirection: "row-reverse",
      }}
    >
      <Ionicons
        name="share-social-outline"
        size={25}
        color="#ffffff"
        style={{ margin: 5, alignItems: "flex-end" }}
        onPress={() => console.log("share")}
      />
      <Ionicons
        name="bookmark-outline"
        size={25}
        color="#ffffff"
        style={{ margin: 5, alignItems: "flex-end" }}
        onPress={() => console.log("save")}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  proPic: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "fff",
  },
});

export default Post;
