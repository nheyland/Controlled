import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Lights from "./content/Lights";
import Map from "./content/Map";
import Money from "./content/Money";
import styles from "./tools/styles";
import Plugs from "./content/Plugs";

const Content = () => {
  return (
    <SafeAreaView style={styles.safe.container}>
      <Text style={styles.styles.text}>Home Controls</Text>
      <View></View>
      <View style={styles.line.line}></View>

      <ScrollView>
        <Lights />
        <View style={styles.line.line}></View>
        <Map />
        <View style={styles.line.line}></View>
        <Plugs />
        <View style={styles.line.line}></View>
        <Money />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Content;
