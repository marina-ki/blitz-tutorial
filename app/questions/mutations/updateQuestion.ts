import { Ctx } from "blitz"
import db, { QuestionUpdateArgs } from "db"

type UpdateQuestionInput = Pick<QuestionUpdateArgs, "where" | "data">

export default async function updateQuestion({ where, data }: UpdateQuestionInput, ctx: Ctx) {
  ctx.session.authorize()

  const question = await db.question.update({ where, data })

  return question
}
