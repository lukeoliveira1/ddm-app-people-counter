import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

interface CounterProps {
  number: number;
}

const Counter = ({ number }: CounterProps) => {
  return (
    <SafeAreaView style={styles.counter}>
      <Text style={styles.text}>{number}</Text>
    </SafeAreaView>
  );
};

export default Counter;
