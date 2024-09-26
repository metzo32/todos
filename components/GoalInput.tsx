import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

interface goalProps {
  onAddGoal: (enteredGoalText: string) => void;
  visible: boolean;
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
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
            {/* <Button title="Add Goal" onPress={() => props.onAddGoal(enteredGoalText)} /> */}
            {/* 화살표 함수를 쓰지 않으면 인자를 받지 않고 즉시 실행되는 함수가 된다. 입력값을 받고 실행해야 하므로 화살표 함수 */}
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
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
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 24,
  },

  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
