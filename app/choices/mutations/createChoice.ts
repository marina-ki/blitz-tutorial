import { Ctx } from "blitz"
import db, { ChoiceCreateArgs } from "db"

type CreateChoiceInput = Pick<ChoiceCreateArgs, "data">
export default async function createChoice({ data }: CreateChoiceInput, ctx: Ctx) {
  ctx.session.authorize()

  const choice = await db.choice.create({ data })

  return choice
}
