// -- INTERFACE MULTIPLE INHERITANCE --

interface Person_2 {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}
interface SoftwareDeveloper extends Person_2, Employee {
  title: string;
  level: "Junior" | "Mid level" | "Senior";
  skills: string[];
}

const newEmplopyee: SoftwareDeveloper = {
  name: "Chris Allen",
  id: 8374013,
  email: "example@email.com",
  title: "Frontend Developer",
  level: "Mid level",
  skills: ["React", "JavaScript", "Tailwind"],
};
