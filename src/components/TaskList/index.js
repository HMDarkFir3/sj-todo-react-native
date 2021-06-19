//React
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

//Style
import { styles } from "./styles";

//Icon
import { Feather } from "@expo/vector-icons";

export default function TaskList(props) {
  const { name, key } = props.data;
  const { editItem, deleteItem } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tasks} onPress={() => deleteItem(key)}>
        <Feather name="trash" color="#ffffff" size={24} />
      </TouchableOpacity>

      <View style={styles.containerTaskName}>
        <TouchableWithoutFeedback onPress={() => editItem(props.data)}>
          <Text style={styles.taskNameText}>{name}</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
