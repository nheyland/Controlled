import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../tools/colors";

const AppButton = ({ title, onPress, color }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: typeof color !== "undefined" ? color : colors.button,
      margin: 10,
      padding: 10,
      borderRadius: 15,
      maxWidth: 200,
    },
    text: {
      fontFamily: colors.font,
      color: colors.light,
      textAlign: "center",
      fontSize: 20,
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
