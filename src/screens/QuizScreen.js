import React                       /**/ from "react"
import _                                from "lodash"
//
import Theme                            from "../utils/Theme"
import { useToggler }                   from "../utils/hooks"
import {
  Button, Paragraph, ScreenContainer,
  StyleSheet, Title, View }             from "../elements"
//
import AnswerList                       from "../components/AnswerList"
import AnswerEntry                      from "../components/AnswerEntry"
import Questions                        from "../../data/questions"

function randomIndex() {
  return _.random(0, Questions.length - 1)
}

const QuizScreen = () => {
  const [shown, toggleShown, setShown] = useToggler()
  const [idx, setIdx] = React.useState(randomIndex())
  const [guess, setGuess] = React.useState("")
  const textInput = React.useRef(null)
  const { section, subsection, question, answers } = Questions[idx]
  //
  const nextQuestion = () => {
    setIdx(randomIndex())
    setShown(false)
    setGuess("")
    if (textInput.current) { textInput.current.focus() }
  }
  //
  return (
    <ScreenContainer>
      <Title>{question}</Title>

      <AnswerEntry
        ref={textInput}
        guess={guess}
        answers={answers}
        setGuess={setGuess}
        onSubmitEditing={() => (shown ? nextQuestion() : setShown(true))}
      />

      <Button onPress={toggleShown} title={shown ? "Hide Answers" : "Show Answers"} />

      {shown && <AnswerList answers={answers} />}

      <Button onPress={nextQuestion} title="Next Question" />

      <View style={Theme.s.centered}>
        <Paragraph style={styles.questionIndexBox}>
          {section}: {subsection} {idx}
        </Paragraph>
      </View>
    </ScreenContainer>
  )
}

export default QuizScreen

const styles = StyleSheet.create({
  questionIndexBox: {
    paddingTop: 10,
    paddingBottom: 80,
    fontStyle: "italic",
  },
})
