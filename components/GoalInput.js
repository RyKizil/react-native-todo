import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={inputHandler}
          value={enteredGoal}
          style={styles.input}
        />
        <View style={styles.buttons}>
          <View style={styles.addButton}>
            <Button
              title="ADD"
              onPress={() => (
                props.addGoalHandler(enteredGoal), setEnteredGoal("")
              )}
            />
          </View>
          <View style={styles.addButton}>
            <Button title="CANCEL" color="red" onPress={props.changeMode} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  addButton: {
    width: "45%",
  },
});

export default GoalInput;
