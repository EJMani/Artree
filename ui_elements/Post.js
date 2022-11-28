import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
} from "react-native";
import { Divider } from "react-native-elements";
import Upvote from "../ui_elements/Upvote";
import Downvote from "../ui_elements/Downvote";
import Share from "../ui_elements/Share";
import Save from "../ui_elements/Save";
import Bid from "../ui_elements/Bid";
import Buy from "./Buy";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "./CustomButton";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import UserContext from "../context/UserContext";

const Post = ({ post }) => {
  const navigation = useNavigation();
  const { userInstance } = useContext(UserContext);
  let [newBidPrice, setBidPrice] = useState(post.bidPrice);
  return (
    <View style={{ marginBottom: 14 }}>
      <Divider width={1000} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} navigation={navigation} />
      <PostFooter
        post={post}
        user={userInstance}
        price={{ newBidPrice, setBidPrice }}
      />
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

const PostImage = ({ post, navigation }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("PostScreen", {
          post,
        })
      }
    >
      <Image
        source={{ uri: post.link }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
    </TouchableWithoutFeedback>
  </View>
);

const PostFooter = ({ post, user, price }) => {
  const QueryClient = useQueryClient();
  const { isLoading, isRefetching, data, refetch, isError, isFetched } =
    useQuery({
      queryKey: ["bidInfo", post.artID],
      queryFn: async () => {
        const res = await fetch(
          `http://54.236.91.239:3000/getAuctionInfo/${post.artID}`
        );
        const data = res.json();
        return data;
      },
      refetchOnWindowFocus: false,
      enabled: false,
    });

  const [ModalOpenBid, setModalOpenBid] = useState(false);
  const [ModalOpenBuy, setModalOpenBuy] = useState(false);
  let [upvotes, setUpvotes] = useState(post.upvotes);
  function upvote() {
    setUpvotes(upvotes + 1);
  }
  function downvote() {
    setUpvotes(upvotes - 1);
  }
  let [disable, disableButton] = useState(false);
  //timer variables
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let deadline = null;

  const getTime = (deadline) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  if (isFetched) {
    deadline = data[0].endDate;
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  useEffect(() => {
    price.setBidPrice(post.bidPrice);
  }, []);

  function handleBidModal() {
    refetch();
    setModalOpenBid(true);
  }
  function handleBuyModal() {
    setModalOpenBuy(true);
  }

  async function handleBid() {
    if (parseFloat(price.newBidPrice) > post.bidPrice) {
      try {
        await fetch("http://54.236.91.239:3000/updateAuctionBid", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            newBidPrice: price.newBidPrice,
            userID: user,
            artID: post.artID,
          }),
        });
      } catch (error) {
        console.log(error);
      }
      setModalOpenBid(false);
    }
  }

  async function handleBuy() {
    try {
      await fetch("http://54.236.91.239:3000/buyNow", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          userID: user,
          artID: post.artID,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    setModalOpenBuy(false);
    disableButton(true);
  }

  return (
    <View>
      <View>
        <Modal
          visible={ModalOpenBid && deadline !== null}
          transparent={true}
          animationType={"slide"}
        >
          <View style={styles.modalBack}>
            <View style={styles.modal}>
              <Ionicons
                name="arrow-back-outline"
                size={35}
                color="#000000"
                style={{ margin: 15, alignItems: "flex-end" }}
                onPress={() => setModalOpenBid(false)}
              />
              <Text style={{ paddingLeft: 10, fontSize: 45 }}>
                Current Bid: ${post.bidPrice}
              </Text>
              <Text style={{ paddingLeft: 10, paddingTop: 30, fontSize: 35 }}>
                Time Remaining: {days}d-{hours}h-{minutes}m-{seconds}s
              </Text>
              <View
                style={{
                  paddingTop: 30,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ paddingLeft: 10, fontSize: 35 }}>
                  Enter your bid: $
                </Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={price.setBidPrice}
                  value={price.newBidPrice}
                  placeholder=""
                />
              </View>
              <View style={{ paddingTop: 40, alignItems: "center" }}>
                <CustomButton title="Place Bid" onPress={handleBid} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal
          visible={ModalOpenBuy}
          transparent={true}
          animationType={"slide"}
        >
          <View style={styles.modalBack}>
            <View style={styles.modal}>
              <Ionicons
                name="arrow-back-outline"
                size={35}
                color="#000000"
                style={{ margin: 15, alignItems: "flex-end" }}
                onPress={() => setModalOpenBuy(false)}
              />
              <Text style={{ paddingLeft: 10, fontSize: 45 }}>
                Buy Now Price: ${post.bidPrice}
              </Text>
              <View style={{ paddingTop: 40, alignItems: "center" }}>
                <CustomButton title="Buy Now" onPress={handleBuy} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View
        style={{
          backgroundColor: "#383CF4",
          height: 50,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", paddingLeft: 5 }}>
          <Upvote artID={post.artID} onPress1={upvote} onPress2={downvote} />
          <Downvote artID={post.artID} onPress1={downvote} onPress2={upvote} />
          <Text style={{ color: "white", marginTop: 10 }}>{upvotes}</Text>
        </View>

        <View>
          {post.forSale === 1 ? (
            <Bid
              post={post}
              currentPrice={price.newBidPrice}
              onPress={handleBidModal}
            />
          ) : (
            <></>
          )}
          {post.forSale === 2 ? (
            <Buy
              post={post}
              currentPrice={price.newBidPrice}
              onPress={handleBuyModal}
              disabled={disable}
            />
          ) : (
            <></>
          )}
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
  modalBack: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modal: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    //alignItems:'flex-start'
  },
  button: {
    backgroundColor: "#FF70FB",
    height: 45,
    width: "50%",
    borderRadius: "25",
  },
  input: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    height: 40,
    width: "25%",
    margin: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "white",
  },
});

export default Post;
