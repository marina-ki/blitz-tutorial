import { Ctx } from "blitz"
import db, { ChoiceDeleteArgs } from "db"

type DeleteChoiceInput = Pick<ChoiceDeleteArgs, "where">

export default async function deleteChoice({ where }: DeleteChoiceInput, ctx: Ctx) {
  ctx.session.authorize()

  const choice = await db.choice.delete({ where })

  return choice
}
