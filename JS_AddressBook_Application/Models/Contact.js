class Contact {

    constructor(firstName, lastName, address,
                city, state, zip, phone, email) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    set firstName(firstName) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;

        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid First Name";
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;

        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid Last Name";
    }

    get lastName() {
        return this._lastName;
    }

    set address(address) {
        if (address.length >= 4)
            this._address = address;
        else
            throw "Invalid Address";
    }

    get address() {
        return this._address;
    }

    set city(city) {
        if (city.length >= 4)
            this._city = city;
        else
            throw "Invalid City";
    }

    get city() {
        return this._city;
    }

    set state(state) {
        if (state.length >= 4)
            this._state = state;
        else
            throw "Invalid State";
    }

    get state() {
        return this._state;
    }

    set zip(zip) {
        let zipRegex = /^[1-9][0-9]{5}$/;

        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid Zip";
    }

    get zip() {
        return this._zip;
    }

    set phone(phone) {
        let phoneRegex = /^[6-9][0-9]{9}$/;

        if (phoneRegex.test(phone))
            this._phone = phone;
        else
            throw "Invalid Phone";
    }

    get phone() {
        return this._phone;
    }

    set email(email) {
        let emailRegex =
            /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2})?$/;

        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid Email";
    }

    get email() {
        return this._email;
    }

    toString() {
        return `${this.firstName} ${this.lastName},
${this.address}, ${this.city},
${this.state}, ${this.zip},
${this.phone}, ${this.email}`;
    }
}

module.exports = Contact;