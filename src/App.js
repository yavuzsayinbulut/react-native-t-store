import React from "react";
import { Text, View, SafeAreaView, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import products from "./assets/products.json"
import Cards from "./components/Cards"
import Scroolbar from "./components/Scrollbar"

const App = () => {
const r_item=({item})=><Cards myData={item}/>;
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
      ListHeaderComponent={<Scroolbar/>}
        numColumns={2}
        horizontal={false}
        data={products}
        renderItem={r_item}
      
      />



    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    container: { flex: 1 ,backgroundColor:"white"}
  }
);

export default App;
