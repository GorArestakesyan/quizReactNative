import Header from "./components/header";
import { SafeAreaView } from "react-native";
import { _QuestionsTitles } from "./components/questTexts";
import { useState } from "react";
import QuizPage from "./pages/quizPage";
function App() {
  const [page, setPage] = useState(0);

  return (
    <>
      <SafeAreaView>
        <Header page={page} />
      </SafeAreaView>
      <QuizPage page={page} setPage={setPage} />
    </>
  );
}

export default App;
