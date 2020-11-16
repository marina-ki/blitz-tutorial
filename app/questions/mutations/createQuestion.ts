import { Ctx } from "blitz"
import db, { QuestionCreateArgs } from "db"

type CreateQuestionInput = Pick<QuestionCreateArgs, "data">
export default async function createQuestion({ data }: CreateQuestionInput, ctx: Ctx) {
  ctx.session.authorize()

  const question = await db.question.create({ data })

  return question
}
