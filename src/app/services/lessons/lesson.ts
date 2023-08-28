import Teacher from "../teachers/teacher";
import { TeacherDTO } from "../teachers/teacherDTO";

export default class Lesson {
    readonly id: number;
    readonly lesson: string;
    readonly teacher: Teacher | null;

    constructor(id: number, lesson: string, teacher: TeacherDTO | null) {
        this.id = id;
        this.lesson = lesson;
        if(teacher) {
            this.teacher = new Teacher(teacher.id!, teacher.name!, teacher.surname!, teacher.patronymic!)
        } else {
            this.teacher = null;
        }

    }
}