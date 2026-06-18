class EmployeePayrollData {

    constructor(id, name, salary, gender, startDate) {

        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    get id() {
        return this._id;
    }

    set id(id) {

        if (id > 0)
            this._id = id;
        else
            throw "Employee ID must be positive";
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {

        if (salary > 0)
            this._salary = salary;
        else
            throw "Salary must be positive";
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {

        if (gender === 'M' || gender === 'F')
            this._gender = gender;
        else
            throw "Gender must be M or F";
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(date) {

        let today = new Date();

        if (date <= today)
            this._startDate = date;
        else
            throw "Future Date Not Allowed";
    }

    toString() {

        return `
Employee Id = ${this.id}
Salary = ${this.salary}
Gender = ${this.gender}
Start Date = ${this.startDate.toDateString()}
`;
    }
}

try {

    let employee =
        new EmployeePayrollData(
            101,
            "Abinaya",
            25000,
            "F",
            new Date()
        );

    console.log(employee.toString());

}
catch (e) {

    console.error(e);

}