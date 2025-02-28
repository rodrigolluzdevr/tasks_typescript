// Interface
interface course {
    title: string;
    NumbersOfStudents: number;
}

interface courseProg extends course {
    languages: string;
}

interface courseArt extends course {
    panels: string;
}

let courseJavascript: courseProg;
let courseGolang: courseProg;
let Design: courseArt;

courseJavascript = {title: "javascript", NumbersOfStudents: 20, languages: "js"};
courseGolang = {title: "golang", NumbersOfStudents: 25, languages: "go"};
Design = {title: "Design", NumbersOfStudents: 10, panels: "figma"};

console.log(courseJavascript);
console.log(courseGolang);
console.log(Design);