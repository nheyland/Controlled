import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../tools/styles";

const Money = () => {
  const [bit, setBit] = useState("");
  const [eth, setEth] = useState("");

  const grabber = () => {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD")
      .then((data) => data.json())
      .then((data) => setBit(data.USD.toFixed(2)) && data.USD.toFixed(2))
      .catch((err) => console.log(err));

    fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
      .then((data) => data.json())
      .then((data) => setEth(data.USD.toFixed(2)) && data.USD.toFixed(2))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    grabber();
  }, []);
  return (
    <View>
      <Text style={styles.styles.text}>Crypto</Text>
      <View style={styles.styles.section}>
        <View style={styles.styles.row}>
          <View style={styles.styles.together}>
            <Text style={styles.styles.subText}>BIT </Text>
            <Text style={styles.styles.subText}>${bit && bit}</Text>
          </View>
          <View style={styles.styles.together}>
            <Text style={styles.styles.subText}>ETH </Text>
            <Text style={styles.styles.subText}>${eth && eth}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Money;
