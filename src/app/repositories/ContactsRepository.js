const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Ramon',
    email: 'ramon@mail.com',
    phone: '(21) XXXX-XXX',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
