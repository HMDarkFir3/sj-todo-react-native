//React
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//Style
import { styles } from "./styles";

//Icon
import { Feather } from "@expo/vector-icons";

export default function TaskList(props) {
  const { name } = props.data;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tasks}>
        <Feather name="trash" color="#ffffff" size={24} />
      </TouchableOpacity>

      <View style={styles.containerTaskName}>
        <Text style={styles.taskNameText}>{name}</Text>
      </View>
    </View>
  );
}
