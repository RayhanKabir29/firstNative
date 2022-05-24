import React from "react";
import { View, StyleSheet } from "react-native";
import { space } from "../themes/spacing";
import Text from "./text/text";

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      padding:space[5],
  },
});
