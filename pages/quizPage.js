import { Text, Pressable, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { _QuestionsTitles } from "../components/questTexts";
import FinishPage from "./finishPage";
export default function QuizPage({ page, setPage }) {
  const [questions, setQuestions] = useState(
    Object.assign({}, _QuestionsTitles)
  );
  const newQuestions = Object.assign({}, questions);
  const onQuestPressHandeler = (quest) => {
    newQuestions[page].questions.map((quest) => {
      quest.checked = false;
    });
    newQuestions[page].questions.find(
      (qst) => qst.id === quest.id
    ).checked = true;
    setQuestions(newQuestions);
  };

  return (
    <View>
      <View style={styles.questionsList}>
        {page > 9 ? (
          <FinishPage
            onGoBack={() => setPage(page - 1)}
            newQuestions={newQuestions}
            page={page}
          />
        ) : (
          <>
            {questions[page]?.questions.map((quest) => {
              return (
                <Pressable
                  key={quest.id}
                  onPress={() => onQuestPressHandeler(quest)}
                  style={!quest.checked ? styles.dontChecked : styles.Checked}
                >
                  <Text
                    style={
                      !quest.checked
                        ? styles.textColor
                        : styles.checkedTextColor
                    }
                  >
                    {quest.text.toUpperCase()}
                  </Text>
                </Pressable>
              );
            })}
            <View style={styles.pageBtns}>
              {page > 0 && (
                <Pressable onPress={() => setPage(page - 1)}>
                  <Text>PREVIOUS</Text>
                </Pressable>
              )}
              <Pressable
                style={page > 0 ? styles.nextPage : styles.firstPage}
                onPress={() => {
                  setPage(page + 1);
                }}
              >
                <Text>{page > 0 ? "NEXT" : "NEXT QUESTION"}</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  questionsList: {
    width: "100%",
    height: "85%",
    display: "flex",
    padding: "8%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
  },
  dontChecked: {
    borderWidth: 1,
    padding: 14,
    width: "110%",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderColor: "black",
  },
  Checked: {
    borderWidth: 1,
    padding: 12,
    backgroundColor: "black",
    width: "110%",
    alignItems: "flex-start",
    borderColor: "black",
  },
  textColor: {
    fontFamily: "Avenir",
    color: "black",
  },
  checkedTextColor: {
    fontFamily: "Avenir",
    color: "white",
  },
  firstPage: {
    width: "100%",
    alignItems: "flex-end",
  },
  pageBtns: {
    width: "109%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
