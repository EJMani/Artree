import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, Button, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { TextInput } from 'react-native';
import {onChangeText} from 'react-native';
import SellingPicker from "../ui_elements/SellingPicker";
import { Header } from 'react-native-elements';
import Container from 'react-native-elements';
import BoxContainer from '../ui_elements/BoxContainer';
import TitleBox from '../ui_elements/TitleBox';
import TagBox from '../ui_elements/TagBox';
import PriceBox from '../ui_elements/PriceBox';

export default function NewPostScreen({navigation}) {
    return (
        
            <View style={styles.container}>
                <StatusBar
                    style="light" //this took me an hour to figure out :(
                />  
                <BoxContainer style = {styles.container1}>
                    <Text style={{fontSize: 28, color: "#FFFFFF",translateX: -75 }}> Title:</Text>
                    <TitleBox></TitleBox> 
                </BoxContainer>
                <BoxContainer style = {styles.container2}>
                     <Text>uploaded image</Text>
                </BoxContainer>
                <BoxContainer style = {styles.container3}>
                    <Button
                        onPress={console.log('click')}
                        title="Select From Gallery"
                        color="#ff70fb"
                        accessibilityLabel="Select From Gallery"                                               
                />             
                    <Button style= {{translateX: -15}}
                        onPress={console.log('click')}
                        title="Take a Photo"
                        color="#ff70fb"
                        accessibilityLabel="Take a Photo"                                                                
                />  
                </BoxContainer>                                                           
                <BoxContainer style = {styles.container4}>
                    <Text style = {{fontsize: 20, color: "#FFFFFF", translateX: -75}}>Tags:</Text>
                    <TagBox></TagBox> 
                </BoxContainer>             
                <BoxContainer style = {styles.container5}>
                    <SellingPicker></SellingPicker>
                </BoxContainer>   
                <BoxContainer style = {styles.container6}>
                    <Text style = {{fontsize:20, color: "#FFFFFF", translateX: -25}}> Starting Bid/Price </Text>
                    <PriceBox></PriceBox>
                </BoxContainer>             
                <BoxContainer style = {styles.container7}>
                    <Button
                        onPress={console.log('click')}
                        title="Post"
                        color="#ff70fb"
                        accessibilityLabel="Post"
                    />   
                </BoxContainer>
                
            </View>
        );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around", 
        alignItems: "center",       
        backgroundColor: "#1f1e49"
        
    },
    container1: {
        backgroundColor: '#383CF4',
        height : 57,
        width: 375, 
        flexDirection: 'row'             
    }, 
    container2: {
        height: 250,
        width: 375
    },
    container3: {
        backgroundColor: '#383CF4',
        height: 80,
        width: 375,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    container4: {
        height: 39,
        width: 375,
        flexDirection: 'row'
    },
    container5: {
        height: 40,
        width: 375

    },
    container6: {
        height: 35,
        width: 375,
        flexDirection: 'row'
    },
    container7:{
        height : 49,
        width: 375
    }
});