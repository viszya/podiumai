import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { createTRPCRouter, publicProcedure } from "@/src/server/api/trpc";
import { TRPCError } from '@trpc/server'
import { db } from '@/src/server/db'
import { z } from 'zod'

export const authRouter = createTRPCRouter({
    authCallback: publicProcedure.query(async () => {
        const { getUser } = getKindeServerSession()
        const user = await getUser()

        if (!user.id || !user.email)
            throw new TRPCError({ code: 'UNAUTHORIZED' })

        // check if the user is in the database
        const dbUser = await db.user.findFirst({
            where: {
                id: user.id,
            },
        })

        if (!dbUser) {
            // create user in db
            await db.user.create({
                data: {
                    id: user.id,
                    email: user.email,
                },
            })
        }

        return { success: true }
    }),
})


// import { z } from "zod";

// import { createTRPCRouter, publicProcedure } from "@/src/server/api/trpc";

// export const postRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),

//   create: publicProcedure
//     .input(z.object({ name: z.string().min(1) }))
//     .mutation(async ({ ctx, input }) => {
//       // simulate a slow db call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       return ctx.db.post.create({
//         data: {
//           name: input.name,
//         },
//       });
//     }),

//   getLatest: publicProcedure.query(({ ctx }) => {
//     return ctx.db.post.findFirst({
//       orderBy: { createdAt: "desc" },
//     });
//   }),
// });
