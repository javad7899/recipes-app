import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  ButtonContainer: {
    flexDirection: "row",
    backgroundColor: colors.green,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    gap: 8,
    width: "80%",
    position: "absolute",
    left: "10%",
    bottom: "20%",
  },
  ButtonText: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default styles;
