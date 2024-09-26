import { StyleSheet, View, Text, Pressable } from "react-native";

interface typeOfProps {
  text: string;
  id: string;
  onDelete: (id: string) => void;
}

export default function GoalItem(props: typeOfProps) {
  const handleItemPress = () => {
    props.onDelete(props.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={handleItemPress}
        android_ripple={{ color: "#000" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#438e96",
  },

  goalText: {
    color: "white",
  },

  pressedItem: {
    opacity: 0.5,
  },
});
