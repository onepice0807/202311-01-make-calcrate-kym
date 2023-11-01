import { StyleSheet, View } from "react-native";
import Button, { ButtonTypes } from "./components/Button";

const Calculator = () => {
  return (
    <View style={styles.container}>
      <Button
        title='1'
        onPress={() => console.log(1)}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.NUMBER}
      ></Button>
      <Button
        title='0'
        onPress={() => console.log(0)}
        buttonStyle={{ width: 200, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      ></Button>
      <Button
        title='0'
        onPress={() => console.log(0)}
        buttonStyle={{ width: 200, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Calculator;
