import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, Button, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
          style="light" //this took me an hour to figure out :(
          translucent={true}
      />
      <Text>profile screen bitches!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});