//React
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  ActivityIndicator,
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
  //State
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(true);

  //Ref
  const inputRef = useRef(null);

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

    setLoading(false);
    loadTask();
  }, []);

  async function handleAdd() {
    if (newTask === "") {
      alert("Campo em branco");
      return;
    }

    if (key !== "") {
      await firebase.database().ref("tasks").child(key).update({
        name: newTask,
      });

      Keyboard.dismiss();

      setNewTask("");
      setKey("");

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

  function handleEdit(data) {
    setNewTask(data.name);
    setKey(data.key);

    inputRef.current.focus();
  }

  async function handleDelete(key) {
    await firebase.database().ref("tasks").child(key).remove();
  }

  function cancelEdit() {
    setKey("");
    setNewTask("");

    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {key.length > 0 && (
        <View style={styles.containerEditMessage}>
          <TouchableOpacity onPress={cancelEdit}>
            <Feather name="x-circle" color="#ff0000" size={24} />
          </TouchableOpacity>

          <Text style={styles.editText}>Você está editando uma tarefa!</Text>
        </View>
      )}

      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="O que vai fazer hoje?"
          underlineColorAndroid="transparent"
          onChangeText={(t) => setNewTask(t)}
          value={newTask}
          ref={inputRef}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Feather name="plus" color="#ffffff" size={24} />
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator size="large" color="#121212" />}

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TaskList
            data={item}
            editItem={handleEdit}
            deleteItem={handleDelete}
          />
        )}
      />
    </View>
  );
}
