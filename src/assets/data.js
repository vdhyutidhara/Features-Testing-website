import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Vinay Gupta",
  title: "Web Developer",
  social: {
    github: "https://github.com/",
    dribbble: "https://github.com/",
    twitter: "https://github.com/",
    email: "someone@example.com",
  },
  about: {
    title: "My Background",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet. Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum. Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie. Nullam luctus sit amet felis quis ullamcorper. ",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "React portfolio",
      description: "👨‍🎨 An portfolio built with React.",
      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React"
      ],
      link: "https://github.com/"
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with React.",
      tags: [
        "HTML5",
        "CSS#",
        "JavaScript",
        "React"
      ],
      link: "https://github.com/"
    }
  ]
};
export default data;
