//Style
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight() + 25,
    marginHorizontal: 10,
  },
  containerEditMessage: {
    flexDirection: "row",

    marginBottom: 10,
  },
  editText: {
    paddingLeft: 10,

    fontSize: 18,
  },
  containerTask: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 40,

    marginBottom: 10,
    padding: 10,

    fontSize: 17,

    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: "#121212",
  },
  buttonAdd: {
    height: 40,

    alignItems: "center",
    justifyContent: "center",

    paddingLeft: 14,
    paddingRight: 14,

    backgroundColor: "#121212",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
});
