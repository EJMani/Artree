import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, Image, Modal, TextInput } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import BoxContainer from "../ui_elements/BoxContainer";
import UserContext from "../context/UserContext";
import { ScrollView } from "react-native-gesture-handler";
import RequestCommission from "../ui_elements/RequestCommission";
import CustomButton from "../ui_elements/CustomButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "../ui_elements/Checkbox";
import RequestCommissionButton from "../ui_elements/RequestCommissionButton";

export default function ProfileScreen({ navigation }) {
  const [ModalOpen, setModalOpen] = useState(false);
  const [customComm, setCustomComm] = useState("");
  const queryClient = useQueryClient();

  const { userInstance } = useContext(UserContext);
  let [user, updateUser] = React.useState({});
  var [artArray, updateArray] = React.useState([]);

  function getUserInfo() {
    fetch("http://54.236.91.239:3000/getUser/" + userInstance)
      .then((response) => response.json())
      .then((data) => {
        /*console.log(JSON.stringify(data));*/ updateUser(data[0]);
      });
    return;
  }

  function getUserPics() {
    fetch("http://54.236.91.239:3000/getUserArt/" + userInstance)
      .then((response) => response.json())
      .then((data) => {
        /*console.log(JSON.stringify(data));*/ updateArray(data);
      });
    return;
  }

  useEffect(() => {
    getUserInfo();
    getUserPics();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Modal visible={ModalOpen} transparent={true} animationType={"slide"}>
          <View style={styles.modalBack}>
            <View style={styles.modal}>
              <View style={{ justifyContent: "space-around" }}>
                <Ionicons
                  name="arrow-back-outline"
                  size={35}
                  color="#000000"
                  style={{ margin: 15, alignItems: "flex-end" }}
                  onPress={() => setModalOpen(false)}
                />
                <Text
                  style={{
                    paddingLeft: 55,
                    fontSize: 35,
                    alignItems: "center",
                  }}
                >
                  Commission Form
                </Text>
                <View style={styles.CheckBox}>
                  <CheckBox />
                  <Text style={{ fontSize: 25 }}>Preset 1: $10</Text>
                </View>
                <View style={styles.CheckBox}>
                  <CheckBox />
                  <Text style={{ fontSize: 25 }}>Preset 2: $10</Text>
                </View>
                <View style={styles.CheckBox}>
                  <CheckBox />
                  <Text style={{ fontSize: 25 }}>Preset 3: $20</Text>
                </View>
                <View style={styles.CheckBox}>
                  <CheckBox />
                  <Text style={{ fontSize: 25 }}>Preset 4: $40</Text>
                </View>
                <View style={styles.CheckBox}>
                  <CheckBox />
                  <Text style={{ fontSize: 25 }}>Custom: Artist quote</Text>
                </View>
                <View style={{ paddingLeft: 30 }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={(val) => {
                      setCustomComm(val), console.log(customComm);
                    }}
                    placeholder="If custom, describe what your looking for from the artist, try to be as specific as possible..."
                  />
                </View>

                <View style={{ paddingTop: 0, alignItems: "center" }}>
                  <CustomButton
                    title="Request"
                    onPress={() => setModalOpen(false)}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <BoxContainer style={styles.container1}>
        <View style={{ borderRadius: 100, overflow: "hidden" }}>
          <Image
            source={{ uri: user.link }}
            style={{ width: 95, height: 95 }}
          />
        </View>
        <Text
          style={{
            fontSize: 26,
            color: "#FFFFFF",
            fontFamily: "inter",
            marginLeft: -18,
          }}
        >
          {user.username}
        </Text>
        <RequestCommission
          onPress={() => setModalOpen(true)}
        ></RequestCommission>
      </BoxContainer>
      <BoxContainer style={styles.container2}>
        <Text
          style={{
            fontSize: 23,
            color: "#FFFFFF",
            fontFamily: "inter",
            alignSelf: "flex-start",
            paddingLeft: 13,
          }}
        >
          About Me:{" "}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            fontFamily: "inter",
            marginTop: -5,
          }}
        >
          {user.aboutMe}
        </Text>
      </BoxContainer>
      <BoxContainer style={styles.container3}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {artArray.map((art) => (
            <View style={styles.pictures} key={art.artID}>
              <Image
                source={{ uri: art.link }}
                style={{ width: 150, height: 150 }}
              />
            </View>
          ))}
        </ScrollView>
      </BoxContainer>

      <StatusBar
        style="light" //this took me an hour to figure out :(
      />
    </View>
  );
  useEffect(() => {
    getUserInfo();
    getUserPics();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        style="light" //this took me an hour to figure out :(
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1f1e49",
    height: "100%",
  },
  container1: {
    height: 125,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container2: {
    height: 80,
    width: 321,
    backgroundColor: "#383CF4",
    borderRadius: 10,
  },
  container3: {
    width: "auto",
    height: "69%",
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 27,
  },
  pictures: {
    // alignContent: "stretch",
    padding: 8,
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
    height: "80%",
    backgroundColor: "white",
  },
  CheckBox: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingLeft: 20,
    color: "black",
    height: 80,
    width: "85%",
    margin: 12,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 30,
    padding: 10,
    backgroundColor: "white",
  },
});
