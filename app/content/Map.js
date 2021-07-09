import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../tools/colors";

const Map = () => {
  const api = (preset) => fetch(`http://192.168.0.33:3333/${preset}`);
  return (
    <>
      <Text style={styles.text}>Map</Text>
      <View style={styles.section}>
        <View style={styles.container}>
          <AppButton title="America " onPress={() => api("america")} />
          <AppButton title="Metars" onPress={() => api("metars")} />
          <AppButton title="Red" onPress={() => api("red")} />
        </View>
        <View style={styles.container}>
          <AppButton title="Blue" onPress={() => api("blue")} />
          <AppButton title="Green" onPress={() => api("green")} />
          <AppButton title="Off" onPress={() => api("off")} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  section: {
    backgroundColor: colors.tint,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontFamily: colors.font,
    color: colors.button,
    fontSize: 40,
  },
});
export default Map;
