import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

const CustomButton = ({ onPress, children, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
      <Text style={styles.ButtonText}>{children}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
