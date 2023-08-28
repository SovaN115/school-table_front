
import { Cabinet } from "../cabinets/cabinet"
import { Call } from "../calls/call"
import { LessonDTO } from "../lessons/lessonDTO"
import { TeacherDTO } from "../teachers/teacherDTO"


export interface Section {
    section_id: number
    call: Call,
    teacher: TeacherDTO
    lesson: LessonDTO
    cabinet: Cabinet
}