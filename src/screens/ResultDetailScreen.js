import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { getRestaurantById } from "../providers";
import { FlatList } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300
  }
});

export default ({ navigation }) => {
  const id = navigation.getParam("id");
  const [restaurant, setRestaurant] = useState(null);

  const getResult = async id => setRestaurant(await getRestaurantById(id));

  useEffect(() => {
    getResult(id);
  }, []);

  return restaurant ? (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => (
          <Image style={styles.imageStyle} source={{ uri: item }}></Image>
        )}
      />
    </View>
  ) : (
    <Text>LOADING</Text>
  );
};
