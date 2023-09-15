import "react-native-gesture-handler";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Spalsh from "./src/screens/Splash/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home/Home";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            gestureEnabled: false,
          }}
        >
          <Stack.Screen
            name="splash"
            component={Spalsh}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerLeft: null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
});
