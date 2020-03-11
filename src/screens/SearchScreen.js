import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "./components/ResultsList";

const styles = StyleSheet.create({});

export default () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [onSubmit, restaurants, errorMessage] = useRestaurants(searchTerm);

  const filterRestaurantsByPrice = price =>
    restaurants.filter(restaurant => restaurant.price === price);

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSubmit={() => onSubmit(searchTerm)}
      ></SearchBar>
      <ScrollView>
        <ResultsList
          results={filterRestaurantsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterRestaurantsByPrice("$$")}
          title="Bit Pricer"
        />
        <ResultsList
          results={filterRestaurantsByPrice("$$$")}
          title="Big Spender"
        />
        <ResultsList
          results={filterRestaurantsByPrice("$$$$")}
          title="Expensive"
        />
      </ScrollView>

      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </>
  );
};
