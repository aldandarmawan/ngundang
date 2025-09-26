import { defineDb, defineTable, column, NOW } from 'astro:db';

const GuestBook = defineTable({
  columns: {
    id: column.number({ primaryKey: true  }),
    nama: column.text(),
    pesan: column.text(),
    dibuat_pada: column.date({default: NOW})
  },
  indexes: [
    { on: ["id"], unique: true }
  ]
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    GuestBook
  }
});
