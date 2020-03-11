import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row",
    marginHorizontal: 15,
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 14
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default ({ searchTerm, setSearchTerm, onSubmit }) => {
  return (
    <View style={styles.viewStyle}>
      <Feather name="search" style={styles.iconStyle}></Feather>
      <TextInput
        value={searchTerm}
        onChangeText={value => setSearchTerm(value)}
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onSubmit}
      />
    </View>
  );
};
