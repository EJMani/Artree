import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default function Loading(){
    return(
    <><View style={styles.view}>
    </View><Text style={styles.text}>Loading...</Text></>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#090820', 
        padding:'100%', 
        position:'absolute'
    },
    text:{
        color:'white', 
        textAlign: 'center',
        paddingTop:275,
        position:'relative',
        fontSize:30,
        alignItems:'center'
    }
  });