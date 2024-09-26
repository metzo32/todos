import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const Stack = createStackNavigator();

  const [courseGoals, setCourseGoals] = useState<any[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  // 함수 자체를 props로 넘겨줌
  const addGoalHandler = (enteredGoalText: string) => {
    //enteredGoalText를 받아올 때마다 addGoalHandler함수 실행
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler(); //목록을 추가하면 모달이 닫힘
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id); //등록된 id와 현재 선택한 id가 일치하면 filter
    });
  };

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Pressable style={styles.button} onPress={startAddGoalHandler}>
        <Text style={styles.buttonText}>Add a new goal</Text>
      </Pressable>

      {modalIsVisible && (
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      )}

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDelete={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#bfe0e2",
  },

  goalsContainer: {
    flex: 5,
  },

  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 100,
  },

  buttonText: {
    color: "#fff",
  },
});
