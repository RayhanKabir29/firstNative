import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/themes/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Rayhan!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkOrange,
    alignItems: "center",
    justifyContent: "center",
  },
});
