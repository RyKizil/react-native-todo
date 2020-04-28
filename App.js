import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((prevState) => [
      ...prevState,
      { key: Math.random().toString(), text: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const changeMode = () => {
    setIsAddMode((prevState) => !prevState);
  };

  const removeGoalhandler = (goalId) => {
    setCourseGoals((prevState) => {
      return prevState.filter((goal) => goal.key !== goalId);
    });
  };
  return (
    <View style={{ padding: 50 }}>
      <Button title="Add New Goal" onPress={changeMode} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        showModal={isAddMode}
        changeMode={changeMode}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            styles={styles}
            itemData={itemData}
            onDelete={removeGoalhandler}
            id={itemData.item.key}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
