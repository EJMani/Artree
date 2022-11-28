import { useState,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, Button, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { useQueryClient,useQuery } from "@tanstack/react-query";
import BoxContainer from "../ui_elements/BoxContainer";


export default function SearchScreen({ navigation }) {
  let [search, updateSearch] = useState("");
  const QueryClient = useQueryClient();

  const { 
    isLoading,
    isError,
    data,
    error,
    hasNextPage,
    fetchNextPage,
    refetch,
    isFetching,
    isFetchingNextPage,} = useQuery({ 
    queryKey: ['search'], 
    queryFn: async ()=>{
        const res  = await fetch(`http://54.236.91.239:3000/searchArt/${search}`,{
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        const data = res.json();
        return data;
    },
    refetchOnWindowFocus:false,
    enabled:false
  })

  useEffect(()=>{
    if(search!== "")
      refetch();
    if(search!== "" || search!== " ")
      QueryClient.invalidateQueries(['search']);
  },[search]);

  return (
    
    <View style={styles.container}>
      <SearchBar
        style={styles.SearchBar} 
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search} 
      />
      <View style={styles.Results}>
        <Text style={{color: "white", fontSize: 18}}>
         {data !== undefined? data.map((post, key)=>(           
              <Text key={key}>{post.title}{"\n"}{"\n"}</Text>            
          )): <></>}
          </Text>
      </View>
      <StatusBar
        style="light" //this took me an hour to figure out :(
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1e49",
  },
  SearchBar:{
    width:'100%'
  },
  Results:{    
    flexDirection: 'row',
    justifyContent: "space-around", 
    alignItems: "center", 
    color: "white"    
  },

});
