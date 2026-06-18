const Contact = require("../Models/Contact");
const AddressBook = require("../Service/AddressBook");

try {

    let addressBook = new AddressBook();

    let person1 = new Contact(
        "Abinaya",
        "Selvam",
        "AnnaNagar",
        "Chennai",
        "TamilNadu",
        "600001",
        "9876543210",
        "abinaya@gmail.com"
    );

    let person2 = new Contact(
        "Karthik",
        "Kumar",
        "Velachery",
        "Chennai",
        "TamilNadu",
        "600002",
        "9123456789",
        "karthik@gmail.com"
    );

    addressBook.addContact(person1);
    addressBook.addContact(person2);

    console.log("Contact Count:",
        addressBook.countContacts());

    console.log(
        addressBook.searchByCity("Chennai")
    );

    console.log(
        addressBook.sortByName()
    );

}
catch (error) {

    console.error(error);

}