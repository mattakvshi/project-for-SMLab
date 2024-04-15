export default class Student {
    #code
    #fullName
    #dateTime

    constructor(code, fullName, dateTime) {
        this.#code = code;
        this.#fullName = fullName;
        this.#dateTime = dateTime;
    }

    get code() {
        return this.#code;
    }
    set code(code) {
        this.#code = code;
    }

    get fullName() {
        return this.#fullName;
    }
    set fullName(fullName) {
        this.#fullName = fullName;
    }

    get dateTime() {
        return this.#dateTime;
    }
    set dateTime(dateTime) {
        this.#dateTime = dateTime;
    }
}