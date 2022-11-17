import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, Button, View, Image, ScrollView} from 'react-native';
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
import * as ImagePicker from 'expo-image-picker';
import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

export default function NewPostScreen({navigation}) {
    const {userInstance} = useContext(UserContext);

    //New Post variables
    let [image, setImage] = useState(null);
    let [bidPrice, setPrice] = useState(0);
    let [title, setTitle] = useState("");
    let [tags, setTags] = useState(""); 
    let [sale, isForSale] = useState(0);


    //gets image from camera roll -- hopefully works on android
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        //console.log(result);
    
        if (!result.cancelled) {
          setImage(result);
        }
      };
      const createFormData = (photo, body) => {
        const data = new FormData();
      
        data.append("mypic", {
          name: photo.fileName,
          type: photo.type,
          uri:
            Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
        });
      
        Object.keys(body).forEach(key => {
          data.append(key, body[key]);
        });
        return data;
      };

      async function uploadPost(){
        if(title == "" || image == null){
            return;
        }

        try {
            await fetch("http://54.236.91.239:3000/NewPost",{
              method: 'POST',
              body: createFormData(image, 
                {
                    userID:userInstance,
                    title:title,
                    sale:sale,
                    bidPrice:bidPrice,
                    tags:tags
                })
            }) 
          } catch (error) {
            console.log(error);
          } 


        setImage(null);
        setPrice(0);
        setTitle("");
        setTags(""); 
        isForSale(0);
      }


    return (
        
            <View style={styles.container}>
                <StatusBar
                    style="light" //this took me an hour to figure out :(
                />  
                <BoxContainer style = {styles.container1}>
                    <Text style={{fontSize: 28, color: "#FFFFFF",translateX: -75 }}> Title:</Text>
                    <TitleBox onChangeText={setTitle} value={title}/>
                </BoxContainer>
                <BoxContainer style = {styles.container2}>
                     {image?.uri == null ? <Text >uploaded image</Text>  : <Image source={{ uri: image?.uri }} style={{ width: "100%",height: 450, }} />}
                </BoxContainer>
                <BoxContainer style = {styles.container3}>
                    <Button
                        onPress={pickImage}
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
                    <TagBox onChangeText={setTags} value={tags}/>
                </BoxContainer>             
                <BoxContainer style = {styles.container5}>
                    <SellingPicker></SellingPicker>
                </BoxContainer>   
                <BoxContainer style = {styles.container6}>
                    <Text style = {{fontsize:20, color: "#FFFFFF", translateX: -25}}> Starting Bid/Price </Text>
                    <PriceBox onChangeText={setPrice} value={bidPrice}/>
                </BoxContainer>             
                <BoxContainer style = {styles.container7}>
                    <Button
                        onPress={uploadPost}
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
        height: 450,
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