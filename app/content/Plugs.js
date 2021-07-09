import React from "react";
import { View, Text } from "react-native";
import AppButton from "../components/AppButton";
import styles from "../tools/styles";

const Plugs = () => {
  const toggle = (device) => fetch(`http://192.168.0.33:3333/plug/${device}`);
  return (
    <>
      <Text style={styles.styles.text}>Plugs</Text>
      <View style={styles.styles.section}>
        <View style={styles.styles.row}>
          <AppButton title="Printer" onPress={() => toggle("printer")} />
        </View>
      </View>
    </>
  );
};

export default Plugs;
