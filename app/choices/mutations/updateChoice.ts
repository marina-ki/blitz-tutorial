import { Ctx } from "blitz"
import db, { ChoiceUpdateArgs } from "db"

type UpdateChoiceInput = Pick<ChoiceUpdateArgs, "where" | "data">

export default async function updateChoice({ where, data }: UpdateChoiceInput, ctx: Ctx) {
  ctx.session.authorize()

  const choice = await db.choice.update({ where, data })

  return choice
}
