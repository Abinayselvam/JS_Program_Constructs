class AddressBook {

    constructor() {
        this.contacts = [];
    }

    addContact(contact) {

        let duplicate =
            this.contacts.find(
                person =>
                    person.firstName === contact.firstName &&
                    person.lastName === contact.lastName
            );

        if (duplicate)
            throw "Duplicate Contact";

        this.contacts.push(contact);
    }

    editContact(name, updatedContact) {

        let index =
            this.contacts.findIndex(
                person => person.firstName === name
            );

        if (index !== -1)
            this.contacts[index] = updatedContact;
    }

    deleteContact(name) {

        this.contacts =
            this.contacts.filter(
                person => person.firstName !== name
            );
    }

    countContacts() {

        return this.contacts.reduce(
            count => count + 1,
            0
        );
    }

    searchByCity(city) {

        return this.contacts.filter(
            person => person.city === city
        );
    }

    searchByState(state) {

        return this.contacts.filter(
            person => person.state === state
        );
    }

    countByCity(city) {

        return this.contacts.filter(
            person => person.city === city
        ).length;
    }

    countByState(state) {

        return this.contacts.filter(
            person => person.state === state
        ).length;
    }

    sortByName() {

        return this.contacts.sort(
            (a, b) =>
                a.firstName.localeCompare(b.firstName)
        );
    }

    sortByCity() {

        return this.contacts.sort(
            (a, b) =>
                a.city.localeCompare(b.city)
        );
    }

    sortByState() {

        return this.contacts.sort(
            (a, b) =>
                a.state.localeCompare(b.state)
        );
    }

    sortByZip() {

        return this.contacts.sort(
            (a, b) =>
                a.zip.localeCompare(b.zip)
        );
    }
}

module.exports = AddressBook;