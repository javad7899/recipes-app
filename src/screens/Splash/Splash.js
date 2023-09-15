import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
const Splash = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require("../../assets/splash.png")}
    >
      <View style={styles.splashContainer}>
        <View style={styles.splashContent}>
          <Image source={require("../../assets/logo.png")} />
          <Text style={styles.splashText}>100K+ Premium Recipe</Text>
        </View>
        <View style={styles.splashContent}>
          <Text style={styles.splashTitle}> Get Cooking</Text>
          <Text style={styles.splashsubTitle}>
            Simple way to find Tasty Recipe
          </Text>
        </View>
        <CustomButton
          onPress={() => navigation.navigate("home")}
          icon={<AntDesign name="arrowright" size={24} color="#fff" />}
        >
          Start Cooking
        </CustomButton>
      </View>
    </ImageBackground>
  );
};

export default React.memo(Splash);
