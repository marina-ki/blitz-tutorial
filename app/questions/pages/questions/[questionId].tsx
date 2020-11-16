import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import getQuestion from "app/questions/queries/getQuestion"
import deleteQuestion from "app/questions/mutations/deleteQuestion"

export const Question = () => {
  const router = useRouter()
  const questionId = useParam("questionId", "number")
  const [question] = useQuery(getQuestion, { where: { id: questionId } })
  const [deleteQuestionMutation] = useMutation(deleteQuestion)

  return (
    <div>
      <h1>Question {question.id}</h1>
      <pre>{JSON.stringify(question, null, 2)}</pre>

      <Link href={`/questions/${question.id}/edit`}>
        <a>Edit</a>
      </Link>

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteQuestionMutation({ where: { id: question.id } })
            router.push("/questions")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowQuestionPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/questions">
          <a>Questions</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Question />
      </Suspense>
    </div>
  )
}

ShowQuestionPage.getLayout = (page) => <Layout title={"Question"}>{page}</Layout>

export default ShowQuestionPage
