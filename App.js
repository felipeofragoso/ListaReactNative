import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ItemLista from "./src/components/Lista.js";

export default function App() {
  return (
    <View style={styles.container}>
      <ItemLista item="Produto 01 - Caderno" />
      <ItemLista item="Produto 02 - Lapis" />
      <ItemLista item="Produto 03 - Folha A4" />
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
});
