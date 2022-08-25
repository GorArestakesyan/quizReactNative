import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function FinishPage({ onGoBack, newQuestions, page }) {
  const array = Object.keys(newQuestions).map(function (key) {
    return newQuestions[key];
  });
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let elem of newQuestions[i].questions) {
      if (elem.checked) {
        newArr.push(elem.text.slice(0, 1));
      }
    }
  }
  const bestAnswer = newArr
    .sort(
      (a, b) =>
        newArr.filter((v) => v === a).length -
        newArr.filter((v) => v === b).length
    )
    .pop();

  const answers = [
    { A: "CREATIVE" },
    { B: "DRAMATIC" },
    { C: "ROMANTIC" },
    { D: "CLASSIC" },
    { E: "NATURAL" },
    { F: "CITY CHIC" },
  ];
  const Answer = () => {
    return (
      <View style={styles.answer}>
        {answers.map((answer) => {
          if (bestAnswer?.toString() === Object.keys(answer).toString()) {
            return (
              <Text key={Math.random().toString()} style={styles.answerText}>
                YOUR STYLE IS {Object.values(answer).toString()}
              </Text>
            );
          }
        })}
      </View>
    );
  };
  return (
    <View>
      <Answer />
      <View style={styles.pages}>
        <Pressable style={styles.lastPage} onPress={() => onGoBack?.()}>
          <Text>PREVIOUS</Text>
        </Pressable>
        {page > 9 ? (
          <Pressable>
            <Text>GET THE RESULTS</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  answerText: {
    borderWidth: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 150,
    paddingTop: 150,
  },
  answer: {
    height: "96%",
    alignItems: "center",
    justifyContent: "center",
  },
  lastPage: {
    width: "95%",
    alignItems: "flex-start",
  },
  pages: {
    width: "73%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
