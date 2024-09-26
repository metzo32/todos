import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Home() {
//   const handleButton = () => {
//     navigation.navigate("Details");
//   };

  return (
    <View>
      <Text>홈화면</Text>
      <Button title="세부화면으로"/>
    </View>
  );
}
