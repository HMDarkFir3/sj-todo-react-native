//React
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, FlatList } from "react-native";

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
  const [tasks, setTasks] = useState([
    { key: "1", name: "Comprar pão" },
    { key: "2", name: "Aprender React Native" },
    { key: "3", name: "Lavar a louça" },
  ]);

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

        <TouchableOpacity style={styles.buttonAdd}>
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
