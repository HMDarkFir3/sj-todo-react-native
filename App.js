import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

//Firebase
import firebase from "./src/services/firebaseConnection";

//Style
import { styles } from "./src/styles/styles";

//Icon
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="O que vai fazer hoje?"
          underlineColorAndroid="transparent"
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.buttonAdd}>
          <Feather name="plus" color="#ffffff" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
