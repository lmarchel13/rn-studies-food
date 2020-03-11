import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultCard from "./ResultCard";

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

const ResultsList = ({ title, results = [], navigation }) => {
  return results.length ? (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResultDetail", { id: item.id });
              }}
            >
              <ResultCard result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  ) : null;
};

export default withNavigation(ResultsList);
