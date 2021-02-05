import React /**/ from "react"
//
import { Paragraph, View, StyleSheet } from "../elements"

const AnswerList = ({ answers }) => (
  <View style={styles.answersContainer}>
    {answers.map((answer, _idx) => (
      <Paragraph key={answer} style={styles.answerStyle}>
        &#8226; {answer}
      </Paragraph>
    ))}
  </View>
)

export default AnswerList

const styles = StyleSheet.create({
  answersContainer: {
    paddingHorizontal: 16,
  },
  answerStyle: {
    fontSize: 18,
    marginVertical: 15,
  },
})
