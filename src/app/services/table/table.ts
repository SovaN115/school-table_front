
import { Group } from "../groups/group";
import { Section } from "./section";
export interface Table {
    class: Group,
    day: {
        id: number,
        day: string
    },
    sections: Section[]
}