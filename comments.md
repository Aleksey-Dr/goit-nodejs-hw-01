Step I
1. Initialized "npm" by command: "npm init" (-y).
2. In the root of the project created a file index.js.
3. Installed the "nodemon" package as  development dependency (devDependencies).
4. In the package.json file added script for start index.js.
   - Script "start";
   - Script "start:dev".

   Step II
1. In the root of the project created a "db" folder.
2. Created contacts.json file.
3. In the root of the project created a contacts.js file.
4. Add import "fs" module ("fs/promises" version).
5. Add import "path" module.
6. Created "contactsPath" variable.
7. Created functions for work with the contacts colection:
   - listContacts;
   - getContactById;
   - removeContact;
   - addContact.
8. Added "nanoid@3.3.4" library for generate id of a new contact.

Step III
1. Added impotr of contacts.js to the index.js.

Step IV
1. Add import "yargs" module.