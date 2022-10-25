import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, Button, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

export default function SearchScreen({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar
                style="light" //this took me an hour to figure out :(
            />
            <Text>search screen bitches!</Text>
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