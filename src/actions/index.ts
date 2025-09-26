import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, GuestBook } from "astro:db";

export const server = {
    save: defineAction({
        accept: "json",
        input: z.object({
            nama: z.string(),
            pesan: z.string()
        }),
        handler: async (input, ctx) => {
            const data = await db
                .insert(GuestBook)
                .values({
                    nama: input.nama,
                    pesan: input.pesan
                })
                .returning();

            return data;
        }
    }),

    getData: defineAction({
        input: z.object({
            page: z.number().optional(),
            per_page: z.number().optional()
        }),
        handler: async (input) => {
            const data = await db
                .select()
                .from(GuestBook);

            return data;
        }
    })
}