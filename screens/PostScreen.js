import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import Upvote from "../ui_elements/Upvote";
import Downvote from "../ui_elements/Downvote";
import Share from "../ui_elements/Share";
import Save from "../ui_elements/Save";
import Bid from "../ui_elements/Bid";

export default function PostScreen() {
  const route = useRoute();
  const post = route.params.post;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
        <View
          style={{
            width: "100%",
            height: 450,
          }}
        >
          <PostHeader post={route.params.post} />
          <Image
            source={{ uri: post.link }}
            style={{ height: "100%", resizeMode: "cover" }}
          />
        </View>
        <PostFooter post={route.params.post} />
      </ScrollView>
    </SafeAreaView>
  );
}

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
        {post.title}
      </Text>
    </View>

    <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
      <Image
        source={{ uri: post.userLink }} //source={require("../assets/adaptive-icon.png")}
        style={styles.proPic}
      />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.username}
      </Text>
    </View>
  </View>
);

const PostFooter = ({ post }) => {
  let [upvotes, setUpvotes] = useState(post.upvotes);
  function upvote() {
    setUpvotes(upvotes + 1);
  }
  function downvote() {
    setUpvotes(upvotes - 1);
  }
  return (
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
        <Upvote artID={post.artID} onPress={upvote} />
        <Downvote artID={post.artID} onPress={downvote} />
        <Text style={{ color: "white", marginTop: 10 }}>{upvotes}</Text>
      </View>

      <View>
        <Bid post={post} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          marginRight: 5,
          flexDirection: "row-reverse",
        }}
      >
        <Save />
        <Share />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  proPic: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "fff",
  },
  container: {
    flex: 1,
    widthValues: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#090820",
  },
});
