//Style
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 10,
    padding: 10,

    backgroundColor: "#121212",
    borderRadius: 10,
  },
  tasks: {
    marginRight: 10,
  },
  containerTaskName: {
    paddingRight: 15,
  },
  taskNameText: {
    paddingRight: 10,

    color: "#ffffff",
  },
});
