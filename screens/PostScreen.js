import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useState, useContext } from "react";
import { useRoute } from "@react-navigation/native";
import Upvote from "../ui_elements/Upvote";
import Downvote from "../ui_elements/Downvote";
import Share from "../ui_elements/Share";
import Save from "../ui_elements/Save";
import Bid from "../ui_elements/Bid";
import ReportButton from "../ui_elements/ReportButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { deleteComment, getComments, postComment } from "../Hooks/getComments";
import UserContext from '../context/UserContext';

export default function PostScreen() {
  const route = useRoute();
  const post = route.params.post;
  const {userInstance} = useContext(UserContext);
  const queryClient = useQueryClient()

  return (
    <SafeAreaView style={styles.container} flexDirection="column">
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
        {/* <Comments post={post} /> */}
        <CommentBox post={route.params.post} userInstance={userInstance} queryClient={queryClient}/>
        <Comments post={route.params.post} userInstance={userInstance} queryClient={queryClient}/>
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
        height: 55,
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

const CommentBox = ({ post, userInstance,queryClient }) => {
  const mutation = useMutation({
    mutationFn: newComment =>{return postComment(newComment)},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })
  let[comment, setComment] = useState("");

  return (
  <View flexDirection="row">
    <TextInput
      style={styles.input}
      onChangeText={setComment} 
      value={comment}
      placeholder="add a comment..."
    />
    <Ionicons
      name="arrow-redo-outline"
      size={35}
      color="#1FCEC6"
      style={{ marginTop: 10, marginLeft: 0 }}
      onPress={() => { mutation.mutate({
        userID:userInstance,
        artID:post.artID,
        comment:comment,
        ParentID:-1
        });
        setComment("");

    }}
    />
  </View>
)};

// basic code for pulling comments, I cant really test this without database access
const Comments = ({ post, userInstance, queryClient }) => { 

  const id = post.artID
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['comments', id], queryFn: () => getComments(id) })

  const mutation = useMutation({
    mutationFn: Comment =>{return deleteComment(Comment)},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })


  if (isLoading) {
    return <Text>Loading...</Text>
  }
  if (isError) {
    return <Text>Error: {error.message}</Text>
  }

    //console.log(data)
    return (
  <>
    {data?.map((comment, index) => (
      <View key={index}>
        {/* <View>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setComment(val)}
            //value={text}
            placeholder="add a comment..."
          />
        </View> */}
        <View>
          <Text style={{ color: "white" }}>
          <Image
            source={{ uri: comment.link }} //source={require("../assets/adaptive-icon.png")}
            style={{ height: 40, width:40 , borderRadius:20 }}
          />
            {/* <Text style={{ fontWeight: "600" }}>{comment.userID}</Text> */}
            {comment.comm}
          </Text>
          <ReportButton />
          {userInstance===comment.userID? <Button title="delete" onPress={()=>{
            mutation.mutate({
              commentID: comment.commentID,
            })
          }
            
          }></Button>: <></>}
          
        </View>
      </View>
    ))}
  </>
);}

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
  input: {
    color: "black",
    height: 40,
    width: "82%",
    margin: 12,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 10,
    backgroundColor: "white",
  },
});
