import { useState, useEffect, useCallback, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import SortingPicker from "../ui_elements/SortingPicker";
import BidButton from "../ui_elements/BidButton";
import { Header } from "react-native-elements";
import Post from "../ui_elements/Post";
import { POSTS } from "../tempData/postData";

export default function HomeScreen() {
  //DB Connection setup
  //const [text, setText] = useState("shitty art");
  const nav = useNavigation();

  // function dbTest() {
  //     fetch('http://54.236.91.239:3000/getUser/nick')
  //         .then(response => response.json())
  //         .then(data => {
  //             setText(data[0])
  //         });
  //     fetch('http://54.236.91.239:3000/getRandomArtPiece')
  //         .then(response => response.json())
  //         .then(data => {
  //             setText(data[0])
  //         });
  // }

  // dbTest();

  const [fontsLoaded] = useFonts({
    newake: require("artree/assets/newake-demo-400.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      // await NavigationBar.setBackgroundColorAsync('#ffffff00');
    }
    prepare();

    nav.setOptions({
      headerRight: () => <SortingPicker />,
    });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar
        style="light" //this took me an hour to figure out :(
      />
      {/* <Text style={{ fontFamily: "newake", fontSize: 30, color: "#1FCEC6" }}>
        {text}
      </Text> */}
      {/* <Header /> */}
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    widthValues: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#090820",
  },
});
