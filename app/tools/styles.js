import { StyleSheet } from "react-native";
import colors from "./colors";

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
  subText: {
    fontFamily: colors.font,
    color: colors.button,
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  together: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
const line = StyleSheet.create({
  line: {
    backgroundColor: colors.button,
    height: 5,
    borderRadius: 100,
  },
});

const safe = StyleSheet.create({
  container: {},
});

export default { styles, line, safe };
