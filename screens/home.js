import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "title 1", rating: 5, body: "body1", key: "1" },
    { title: "title 2", rating: 4, body: "body2", key: "2" },
    { title: "title 3", rating: 3, body: "body3", key: "3" },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
