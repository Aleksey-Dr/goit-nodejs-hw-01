const contacts = require('./contacts');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;
        case 'get':
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;
        case 'remove':
            const deleteContact = await contacts.removeContact(id);
            console.log(deleteContact);
            break;
        case 'add':
            const newContact = await contacts.addContact(name, email, phone);
            console.log(newContact);
            break;
        default:
            console.warn('\x1B[31m Unknown action type!');
    };
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);