export default class Course {
    #code
    #name
    #dateStart
    #dateEnd

    constructor(code, name, dateStart, dateEnd) {
        this.#code = code;
        this.#name = name;
        this.#dateStart = dateStart;
        this.#dateEnd = dateEnd;
    }

    get code() {
        return this.#code;
    }
    set code(code) {
        this.#code = code;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }

    get dateStart() {
        return this.#dateStart;
    }
    set dateStart(dateStart) {
        this.#dateStart = dateStart;
    }

    get dateEnd() {
        return this.#dateEnd;
    }
    set dateEnd(dateEnd) {
        this.#dateEnd = dateEnd;
    }
}