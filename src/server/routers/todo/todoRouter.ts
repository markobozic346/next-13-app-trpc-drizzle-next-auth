import { z } from "zod";
import { and, eq } from "drizzle-orm";

import {
  router,
  protectedProcedure,
  protectedAdminProcedure,
} from "@/server/trpc";
import { todos } from "@/db/schema";

export const todoRouter = router({
  createTodo: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(todos).values({
        isComplete: 0,
        text: input.text,
        userId: ctx.session?.user.id || "",
      });
    }),

  removeTodo: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      //admin can remove any todo      }
      if (ctx.session?.user.role === "ADMIN") {
        return ctx.db.delete(todos).where(eq(todos.id, input.id));
      }
      //removing user todo
      return ctx.db
        .delete(todos)
        .where(
          and(
            eq(todos.id, input.id),
            eq(todos.userId, ctx.session?.user.id || "")
          )
        );
    }),

  updateTodo: protectedProcedure
    .input(z.object({ id: z.number(), isComplete: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db
        .update(todos)
        .set({ isComplete: Number(input.isComplete) })
        .where(
          and(
            eq(todos.id, input.id),
            eq(todos.userId, ctx.session?.user.id || "")
          )
        );
    }),

  getUserTodos: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db
      .select()
      .from(todos)
      .where(eq(todos.userId, ctx.session?.user.id || ""));
  }),

  //gets all todos from all users
  getAllUsersTodos: protectedAdminProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(todos);
  }),
});
