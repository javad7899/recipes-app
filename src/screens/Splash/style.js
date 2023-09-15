import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  imageContainer: {
    height: "100%",
    width: "100%",
  },
  splashContainer: {
    flex: 1,
  },
  splashContent: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    gap: 12,
  },
  splashTitle: {
    fontSize: 42,
    fontWeight: "700",
    color: colors.white,
  },
  splashsubTitle: {
    color: colors.white,
    fontSize: 20,
  },
  splashText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default styles;
