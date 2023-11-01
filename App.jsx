import { StyleSheet, Text, View } from "react-native";
import Calculator from "./src/Calculator";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calc App</Text>
      <Calculator />
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
    paddingTop: 35,
    fontSize: 30,
    fontWeight: "700",
    color: "green",
  },
  error: {
    color: "red",
  },
});
