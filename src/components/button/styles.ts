import { StyleSheet } from "react-native";
import { theme } from "../../theme/styles";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 120,
    minHeight: 120,
    borderRadius: 5,
    backgroundColor: theme.colors.gray,
  },
});
