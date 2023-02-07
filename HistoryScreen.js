import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function HistoryScreen({ route, navigation }) {
  //
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>History</Text>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
  list: {
    alignSelf: "center",
    textAlign: "left",
    padding: 2,
  },
});
