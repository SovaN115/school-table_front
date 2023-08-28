import { TeacherDTO } from "../teachers/teacherDTO";

export interface LessonDTO {
    template_id?: number;
    id?: number;
    name?: string;
    teacher?: TeacherDTO;
    oldTeacherId?: number;
    teacherLessonsId?: 0,
    teacherId?: 0,
    lessonId?: 0,
    teacherName?: '',
    lesson?: '',
    teacherSurname?: '',
    teacherPatronymic?: ''
}