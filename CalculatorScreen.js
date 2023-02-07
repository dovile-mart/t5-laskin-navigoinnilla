import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function CalculatorScreen({ navigation }) {
  const [eka, setEka] = useState("");
  console.log(eka);
  const [toka, setToka] = useState("");
  console.log(toka);
  const [tulos, setTulos] = useState("");
  const [data, setData] = useState([]);
  const initialFocus = useRef(null);

  let rivi = "";
  const sumNumbers = () => {
    let tulos = Number(eka) + Number(toka);
    console.log("Summa: " + tulos);
    setTulos(tulos);
    rivi = eka + " + " + toka + " = " + tulos;
    console.log(rivi);
    setData([{ key: rivi }, ...data]);
    setEka("");
    setToka("");
    initialFocus.current.focus();
  };
  const minusNumbers = () => {
    let tulos = Number(eka) - Number(toka);
    rivi = eka + " - " + toka + " = " + tulos;
    setTulos(tulos);
    setData([{ key: rivi }, ...data]);
    setEka("");
    setToka("");
    initialFocus.current.focus();
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.inrow}>
          <Text>Result: {tulos}</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={eka}
            onChangeText={(eka) => setEka(eka)}
            ref={initialFocus}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={toka}
            onChangeText={(toka) => setToka(toka)}
          />
        </View>

        <View style={styles.inrow}>
          <View style={styles.button}>
            <Button title="+" onPress={sumNumbers} />
          </View>
          <View style={styles.button}>
            <Button title="-" onPress={minusNumbers} />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => navigation.navigate("History", { data })}
              title="History"
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
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

  input: {
    width: 150,
    border: "grey",
    borderWidth: 1,
    margin: 1,
    paddingStart: 15,
  },
  inrow: {
    flexDirection: "row",
    margin: 3,
  },
  button: {
    margin: 5,
  },
});
