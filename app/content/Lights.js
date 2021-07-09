import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../tools/colors";

const Lights = () => {
  const [lights, setLights] = useState();
  const getStatus = () =>
    fetch(
      "http://192.168.0.11/api/C-8WLQ3NSpqwg5M4FnUmFIJZlrzlG7Y6dANqGoD5/lights"
    )
      .then((data) => data.json())
      .then((data) => setLights(data));

  const allOn = (temp) => {
    if (temp.on === undefined) temp.on = true;
    const data = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        on: temp.on,
        sat: temp.sat,
        bri: temp.bri,
        hue: temp.hue,
      }),
    };
    Object.keys(lights).forEach((i) =>
      fetch(
        `http://192.168.0.11/api/C-8WLQ3NSpqwg5M4FnUmFIJZlrzlG7Y6dANqGoD5/lights/${i}/state`,
        data
      )
    );
    getStatus();
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <>
      <Text style={styles.text}>Lights</Text>
      <View style={styles.section}>
        <View style={styles.container}>
          <AppButton
            title="Hot"
            onPress={() => allOn({ sat: 254, hue: 50969 })}
          />
          <AppButton
            title="Med"
            onPress={() => allOn({ sat: 128, hue: 8910 })}
          />
          <AppButton
            title="Cool"
            onPress={() => allOn({ sat: 254, hue: 46920 })}
          />
        </View>
        <View style={styles.line}></View>
        <View style={styles.container}>
          <AppButton title="0%" onPress={() => allOn({ on: false })} />
          <AppButton title="25%" onPress={() => allOn({ bri: 64 })} />
          <AppButton title="50%" onPress={() => allOn({ bri: 128 })} />
          <AppButton title="75%" onPress={() => allOn({ bri: 192 })} />
          <AppButton title="100%" onPress={() => allOn({ bri: 254 })} />
        </View>
        <View style={styles.container}>
          <AppButton title="Refresh Lights" onPress={() => getStatus()} />
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
export default Lights;
