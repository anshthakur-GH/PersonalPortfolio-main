// Define types for our skill data
interface ProgressSkill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  type: 'progress' | 'list';
  skills?: ProgressSkill[];
  listSkills?: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "fa-code",
    type: "list",
    listSkills: ["Python", "Java"]
  },
  {
    title: "Technical Interests",
    icon: "fa-laptop-code",
    type: "progress",
    skills: [
      { name: "Data Analytics", level: 95 },
      { name: "Web Development", level: 75 },
      { name: "Data Structures and Algorithms", level: 70 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "fa-tools",
    type: "list",
    listSkills: ["Git & GitHub", "SQL", "Pandas", "Excel"]
  }
];

export const otherSkills = [
];
