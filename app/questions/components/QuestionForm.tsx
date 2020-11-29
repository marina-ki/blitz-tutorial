import { Choice, Question } from "@prisma/client"
import React from "react"

type QuestionFormProps = {
  initialValues?: Question & {
    choices: Choice[]
  }
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const QuestionForm = ({ initialValues, onSubmit }: QuestionFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      <input placeholder="Name" defaultValue={initialValues?.text} />
      <input placeholder="Choice 1" defaultValue={initialValues?.choices[0].text} />
      <input placeholder="Choice 2" defaultValue={initialValues?.choices[1].text} />
      <input placeholder="Choice 3" defaultValue={initialValues?.choices[2].text} />
      <button>Submit</button>
    </form>
  )
}

export default QuestionForm
