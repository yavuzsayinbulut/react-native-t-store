import React from "react";
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create(
    {
        container: { flex: 1,  margin: 10, padding: 10, backgroundColor: "#eee",borderRadius:10, },
        img: {
            width: "100%",
            height: Dimensions.get('window').height / 4,
            borderRadius: 10,
            resizeMode: "contain",
        },
        title: {
            marginTop: 5,
            color: "#000",
            fontWeight: "bold",
            fontSize: 20,
        },
        price: {
            marginTop: 5,
            color: "#444",
            fontWeight: "bold",
            fontSize: 18,
        },
        innerContainer: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
         
        },
    }
);

