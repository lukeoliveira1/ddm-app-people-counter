import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

import { AntDesign } from "@expo/vector-icons";

interface ButtonProps {
  positive: boolean;
  handle: () => void;
}

const Button = ({ positive, handle }: ButtonProps) => {
  const icon = positive ? (
    <AntDesign name="plus" size={36} color="black" />
  ) : (
    <AntDesign name="minus" size={36} color="black" />
  );
  return (
    <TouchableOpacity style={styles.container} onPress={handle}>
      <Text>{icon}</Text>
    </TouchableOpacity>
  );
};

export default Button;
