const FolderService = {
  //   getAllFolder(knex) {
  //     return knex.select('*').from('blogful_users');
  //   },

  //   insertFolder(knex, newUser) {
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

  //   deleteFolder(knex, id) {
  //     return knex('blogful_users')
  //       .where({ id })
  //       .delete();
  //   },

  //   updateFolder(knex, id, newUserFields) {
  //     return knex('blogful_users')
  //       .where({ id })
  //       .update(newUserFields);
  //   },
};

module.exports = FolderService;