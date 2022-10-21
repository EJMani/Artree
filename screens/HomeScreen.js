import { useEffect, useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    newake: require("artree/assets/newake-demo-400.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      await NavigationBar.setBackgroundColorAsync('#ffffff00')

    }
    prepare();
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar
          style="light" //this took me an hour to figure out :(
          translucent={true}
      />
      <Text style={{ fontFamily: "newake", fontSize: 30, color: "#1FCEC6" }}>
        shitty art
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1f1e49",
  },
});
