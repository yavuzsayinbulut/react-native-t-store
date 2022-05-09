import React from "react";
import { Text, SafeAreaView, TouchableOpacity, Image, View ,TextInput} from "react-native";
import styles from "./Cards_Style";

const Cards = ({ myData }) => {


    return (

        <SafeAreaView style={styles.container}>

            <TouchableOpacity>
            <Image style={styles.img} source={{ uri: myData.imgURL }}></Image>
                <View style={styles.innerContainer}>
                    
                    <Text style={styles.title} >{myData.title}</Text>
                    <Text style={styles.price} >{myData.price}</Text>
                    {myData.inStock == true ? (<></>) : (<Text style={styles.in_stock}>Stokta Yok</Text>)}
                </View>
            </TouchableOpacity>
       
        </SafeAreaView>


    )

}

export default Cards;