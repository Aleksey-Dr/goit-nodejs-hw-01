const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, './db/contacts.json');

// functions
async function listContacts() {
  // returning array of the contacts
  const data = await fs.readFile(contactsPath); // 'utf-8'
  return JSON.parse(data);
};

async function getContactById(contactId) {
  // returning object of contact with such id. Returning null, if contact with such id not found
  const id = String(contactId);
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === id);
  return result || null;
};

async function removeContact(contactId) {
  // returning object of removed contact. Returning null, if contact with such id not found
  const id = String(contactId);
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

async function addContact(name, email, phone) {
  // returning object of added contact
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};