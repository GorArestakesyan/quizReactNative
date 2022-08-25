import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { _QuestionsTitles } from "./questTexts";
function Header({ page }) {
  return (
    <>
      <View style={styles.header}>
        <Icon name="ios-menu" size={40} color="white" />
        <Image source={require("../assets/logo.png")} />
        <Icon name="settings-outline" size={40} color="white" />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          {page !== 10
            ? _QuestionsTitles[page]?.title
            : "Thanks for completing the quiz, Now, you are 1 step closer to your own style"}
        </Text>
      </View>
      <Text
        style={
          page !== 10 ? styles.questionProgress : styles.questionProgressHide
        }
      >
        {page}/{_QuestionsTitles.length}
      </Text>
      <ProgressBar progress={(page + 1) / 10} vcolor={MD3Colors.primary40} />
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    height: 150,
    width: "100%",
  },
  title: {
    width: "100%",
    paddingTop: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Avenir",
    fontSize: 17,
    color: "white",
  },
  titleView: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  questionProgress: {
    color: "white",
    backgroundColor: "black",
    fontSize: 15,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  questionProgressHide: {
    color: "black",
    backgroundColor: "black",
    fontSize: 15,
    paddingLeft: 15,
    paddingBottom: 10,
  },
});

export default Header;
