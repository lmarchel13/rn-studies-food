import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: "bold"
  },
  infoStyle: {}
});

export default ({ result: { name, image_url, review_count, rating } }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image_url }} style={styles.imageStyle}></Image>
      <Text style={styles.nameStyle}>{name}</Text>
      <Text style={styles.infoStyle}>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};
