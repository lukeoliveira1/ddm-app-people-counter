import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import { useState } from "react";

import Button from "./src/components/button";
import Counter from "./src/components/counter";

import { theme } from "./src/theme/styles";

export default function App() {
  let [number, setNumber] = useState<number>(0);

  const handlePositive = () => {
    setNumber(number + 1);
  };

  const handleNegative = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      Alert.alert("Erro", "O número não pode ser menor do que 0");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> People{"\n"}Counter</Text>

      <Counter number={number} />

      <SafeAreaView style={styles.buttons}>
        <Button positive={false} handle={handleNegative} />
        <Button positive={true} handle={handlePositive} />
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 50,
    color: theme.colors.white_purple,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.purple,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    minWidth: 250,
    margin: 15,
    gap: 10,
  },
});
