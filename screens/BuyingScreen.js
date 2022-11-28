import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SellingButton from "../ui_elements/SellingButton";
import SubmitProduct from "../ui_elements/SubmitProduct";
import BidAgain from "../ui_elements/BidAgain";

function CommissionsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#1f1e49",
      }}
    >
      <Text style={styles.text}>
        Commission 1{"\n\t\t\t\t"} artist: nick {"\n\t\t\t\t"} in progress...{" "}
        {"\n\t\t\t\t"} cost: $35.00
      </Text>
      <View style={styles.otherButtons}>
        <SubmitProduct></SubmitProduct>
      </View>
      <Text style={styles.text}>
        Commission 2{"\n\t\t\t\t"} artist: joeP82 {"\n\t\t\t\t"} completed{" "}
        {"\n\t\t\t\t"} cost: $872.55
      </Text>
      <View style={styles.buySellButton}>
        <SellingButton></SellingButton>
      </View>
    </View>
  );
}

function AuctionsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#1f1e49",
      }}
    >
      <Text style={styles.text}>
        Auction 1{"\n\t\t\t\t"} buyer: alphaDavee42 {"\n\t\t\t\t"} current bid:
        $18.50 {"\n\t\t\t\t"} time remaining: 5hrs 10min
      </Text>
      <Text style={styles.otherText}>
        {"\t\t\t\t"}you are winning this auction
      </Text>
      <Text style={styles.text}>
        Auction 2{"\n\t\t\t\t"} buyer: beyondReality5 {"\n\t\t\t\t"} current
        bid: $156.00 {"\n\t\t\t\t"} time remaining:{"\n\t\t\t\t"} 3days 4hrs{" "}
      </Text>
      <View style={styles.otherButtons}>
        <BidAgain></BidAgain>
      </View>
      <Text style={styles.text}>
        Auction 3{"\n\t\t\t\t"} buyer: NOTANDY {"\n\t\t\t\t"} final bid: $36.66{" "}
      </Text>
      <Text style={styles.otherText}>
        {"\t\t\t\t"}you won this {"\n\t\t\t"} auction!
      </Text>
      <View style={styles.buySellButton}>
        <SellingButton></SellingButton>
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#1FCEC6",
        tabBarInactiveTintColor: "#fff",
        tabBarLabelStyle: {
          fontSize: 20,
          fontFamily: "inter",
          textTransform: "capitalize",
        },
        tabBarStyle: { backgroundColor: "#383CF4" },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={CommissionsScreen}
        options={{ tabBarLabel: "Commissions" }}
      />
      <Tab.Screen
        name="Notifications"
        component={AuctionsScreen}
        options={{ tabBarLabel: "Auctions" }}
      />
    </Tab.Navigator>
  );
}

export default function BuyingScreen({ navigation }) {
  return (
    <NavigationContainer independent={true} style={styles.container}>
      <MyTabs />
      <StatusBar
        style="light" //this took me an hour to figure out :(
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1f1e49",
  },
  text: {
    alignSelf: "flex-start",
    paddingTop: 10,
    paddingLeft: 15,
    fontFamily: "inter",
    color: "#fff",
    textAlign: "justify",
    fontSize: 25,
  },
  otherText: {
    alignSelf: "flex-start",
    translateY: -5,
    paddingLeft: 21,
    fontFamily: "inter",
    color: "#1FCEC6",
    textAlign: "justify",
    fontSize: 24,
  },
  buySellButton: {
    flex: 1,
    alignSelf: "flex-end",
    paddingRight: 10,
    position: "absolute",
    bottom: 10,
  },
  otherButtons: {
    alignSelf: "flex-start",
    paddingTop: 5,
    paddingLeft: 45,
  },
});
