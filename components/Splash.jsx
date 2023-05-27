import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLOR } from "../utils/constants";

const Splash = ({ text = "CRKT.de" }) => {
  console.log("Splash");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default React.memo(Splash);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.yellow,
    color: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
});
