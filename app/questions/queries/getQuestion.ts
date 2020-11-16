import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstQuestionArgs } from "db"

type GetQuestionInput = Pick<FindFirstQuestionArgs, "where">

export default async function getQuestion({ where }: GetQuestionInput, ctx: Ctx) {
  ctx.session.authorize()

  const question = await db.question.findFirst({ where })

  if (!question) throw new NotFoundError()

  return question
}
