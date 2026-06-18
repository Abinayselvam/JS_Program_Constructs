let emailRegex =
    /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2})?$/;

let emails = [

    "abc@yahoo.com",
    "abc-100@yahoo.com",
    "abc.100@yahoo.com",
    "abc111@abc.com",
    "abc-100@abc.net",
    "abc.100@abc.com.au",
    "abc@gmail.com",
    "abc+100@gmail.com",

    "abc",
    "abc@.com",
    ".abc@abc.com",
    "abc..2002@gmail.com",
    "abc@gmail.com.1a"
];

emails.forEach(email => {

    console.log(
        email,
        "=>",
        emailRegex.test(email)
    );

});