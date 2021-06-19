//React
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";

//Firebase
import firebase from "./src/services/firebaseConnection";

//Component
import TaskList from "./src/components/TaskList";

//Style
import { styles } from "./src/styles/styles";

//Icon
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTask() {
      await firebase
        .database()
        .ref("tasks")
        .on("value", (snapshot) => {
          setTasks([]);

          snapshot.forEach((childItem) => {
            let data = {
              key: childItem.key,
              name: childItem.val().name,
            };

            setTasks((oldArray) => [...oldArray, data]);
          });
        });
    }

    loadTask();
  }, []);

  async function handleAdd() {
    if (newTask === "") {
      alert("Campo em branco");
      return;
    }

    let send = await firebase.database().ref("tasks");
    let uid = send.push().key;

    send.child(uid).set({
      name: newTask,
    });

    Keyboard.dismiss();

    setNewTask("");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="O que vai fazer hoje?"
          underlineColorAndroid="transparent"
          onChangeText={(t) => setNewTask(t)}
          value={newTask}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Feather name="plus" color="#ffffff" size={24} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <TaskList data={item} />}
      />
    </View>
  );
}
