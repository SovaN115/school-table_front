export default class Teacher {
    readonly id: number;
    readonly name: string;
    readonly surname: string;
    readonly patronymic: string;

    constructor(id: number, name: string, surname: string, patronymic: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
    }
}