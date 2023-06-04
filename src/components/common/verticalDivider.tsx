import { COLORS } from "constants/theme";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  verticalDivider: {
    width: 0.5,
    height: "100%",
    backgroundColor: COLORS.gray[100],
  },
});

export const VerticalDivider = () => {
  return <View style={styles.verticalDivider}/>;
};
