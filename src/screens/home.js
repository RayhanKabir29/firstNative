import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-web";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { PLANET_LIST } from "../data/planet-list";
import { colors } from "../themes/colors";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        data={PLANET_LIST}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
