const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Ramon',
    email: 'ramon@mail.com',
    phone: '(21) XXXX-XXX',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'José',
    email: 'ramon@mail.com',
    phone: '(21) XXXX-XXX',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }
}

module.exports = new ContactsRepository();
