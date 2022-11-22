import React, { useEffect, useCallback, useRef } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import SortingPicker from "../ui_elements/SortingPicker";
import Post from "../ui_elements/Post";
import { useQueryClient } from "@tanstack/react-query";
import getFeed from "../Hooks/getFeed";
import { POSTS } from "../tempData/postData";

export default function HomeScreen({ navigation }) {
  const queryClient = useQueryClient();
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  //React query fetches posts on load
  const {
    isLoading,
    isError,
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = getFeed();
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    newake: require("artree/assets/newake-demo-400.otf"),
  });


  let sorting = "popular";
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      // await NavigationBar.setBackgroundColorAsync('#ffffff00');
    }
    prepare();

    nav.setOptions({
      headerRight: () => <SortingPicker/>,
    });
    //console.log(sorting);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  //If Posts have not fully loaded yet
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  //If Posts have error loading
  if (isError) {
    return <Text>Error: {error.message}</Text>;
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
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (
            isCloseToBottom(nativeEvent) &&
            hasNextPage &&
            !isFetchingNextPage
          ) {
            fetchNextPage();
          }
        }}
        scrollEventThrottle={400}
      >
        {data?.pages.map((posts, page) => (
          <View key={page}>
            {posts.posts.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </View>
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
