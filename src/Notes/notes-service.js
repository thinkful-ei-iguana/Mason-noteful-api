const NotesService = {
  //   getAllNotes(knex) {
  //     return knex.select('*').from('blogful_users');
  //   },

  //   insertNotes(knex, newUser) {
  //     return knex
  //       .insert(newUser)
  //       .into('blogful_users')
  //       .returning('*')
  //       .then(rows => {
  //         return rows[0];
  //       });
  //   },

  //   getById(knex, id) {
  //     return knex
  //       .from('blogful_users')
  //       .select('*')
  //       .where('id', id)
  //       .first();
  //   },

  //   deleteNotes(knex, id) {
  //     return knex('blogful_users')
  //       .where({ id })
  //       .delete();
  //   },

  //   updateNotes(knex, id, newUserFields) {
  //     return knex('blogful_users')
  //       .where({ id })
  //       .update(newUserFields);
  //   },
};

module.exports = NotesService;