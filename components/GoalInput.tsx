import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  Modal,
  Image,
} from "react-native";

interface goalProps {
  onAddGoal: (enteredGoalText: string) => void;
  visible: boolean;
  onCancel: () => void;
}

const GoalInput = (props: goalProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredGoalText: string) => {
    setEnteredGoalText(enteredGoalText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); //추가한 뒤 인풋 영역 초기화. 실제로는 초기화되지만 시각적으로 초기화 시키려면 TextInput태그에 value 사용
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        {/* <Image source={goalImage} /> */}

        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={props.onCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={addGoalHandler}>
            <Text style={styles.buttonText}>Add Goal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92cace",
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 100,
    padding: 16,
    color: "#fff",
    backgroundColor: "#bfe0e2",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },

  button: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 100,
  },

  buttonText: {
    color: "#fff",
  },
});
