import React from "react";
import {SafeAreaView,ScrollView,Image,StyleSheet,Dimensions,Text,TextInput} from "react-native";
import products from "../assets/products.json"

const Scroolbar =()=>{
    return(
        <SafeAreaView style={styles.container}>

            <Text numberOfLines={50} style={styles.header}>T STORE</Text>
              <TextInput style={styles.searchBox} maxLength={40} placeholder="Ara"> </TextInput>
     
            <ScrollView style={styles.scrol}horizontal showsHorizontalScrollIndicator={false}>
            {
                products.map(BannerLive=><Image style={styles.img} key={BannerLive.id} source={{uri:BannerLive.imgURL}}/>)
            }
            </ScrollView>
             </SafeAreaView>
    );
}

export default Scroolbar;


const styles=StyleSheet.create(
    {
        container:{flex:1,margin:15 },
       header:{   marginLeft:15,color:"#800080",fontSize:40,fontWeight:"bold"},
        img:{
            height:Dimensions.get("screen").height/4,
            width:Dimensions.get("screen").width,
            padding:5,margin:10
        },
        
        searchBox: {height: 40,
            margin: 12,
            borderWidth: 1,borderRadius:10,  backgroundColor:"#eee"
   },
        scroll:{}

    }
);