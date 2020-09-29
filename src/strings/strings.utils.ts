import {Lesson} from "./interfaces/lessons";

export default class StringsUtils {

    static isPalindrome(str: string): boolean {

        return str.split('').reverse().join('') === str;
    }

    static oddLessons(lessons: Lesson[]) {

        return lessons.filter(lesson => {
            return lesson.startMinute % 2 !== 0
        })
    }

    static numbersOfWorlds(str: string) {
        const strWithoutDotAndComma = str.replace(/[,. ]+/g, " ").trim();

        const words = strWithoutDotAndComma.split(' ');

        const map: Map<string, number> = new Map<string, number>();

        words.forEach(word => {
            if (map.has(word)) {
                const value = map.get(word);
                // @ts-ignore
                map.set(word, value + 1);
            } else {
                map.set(word, 1);
            }
        })

        return [...map];
    }
}

