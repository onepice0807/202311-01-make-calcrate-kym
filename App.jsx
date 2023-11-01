import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import { ButtonTypes } from "./src/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calc App</Text>
      <Button
        title='1'
        onPress={() => console.log(1)}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.NUMBER}
      ></Button>

      <Button
        title='0'
        onPress={() => console.log(1)}
        buttonStyle={{ width: 200, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      ></Button>
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
    fontSize: 30,
    fontWeight: "700",
    color: "green",
  },
  error: {
    color: "red",
  },
});
