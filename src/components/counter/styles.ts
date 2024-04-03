import { StyleSheet } from "react-native";
import { theme } from "../../theme/styles";

export default StyleSheet.create({
  counter: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 250,
    minHeight: 250,
    borderRadius: 5,
    backgroundColor: theme.colors.white_purple,
  },
  text: {
    fontSize: 128,
    color: theme.colors.purple,
  },
});
