// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Pavel Litwin",
    jobTitle: "Frontend Developer",
    location: "Poland",
    email: "your-email@example.com",
    linkedin: "your-linkedin-url",
    twitter: "your-twitter-handle",
    github: "your-github-handle",
    website: "your-website.com",
    aboutme:
      "I am a Frontend Developer with experience in HTML, CSS, JavaScript, React, and Vue. I also work with ASP.NET and PHP. I am passionate about building modern and user-friendly web applications.",

    toolsAndTechSkills: ["HTML", "CSS", "JavaScript", "React", "Vue", "ASP.NET", "PHP"],
    industryKnowledge: ["Web Development", "Frontend Development", "Responsive Design"],
    languages: ["Polish (Fluent)", "English (Intermediate)"],
    projects: [
      {
        title: "My Portfolio",
        summary: "A dynamic portfolio website built with React and Tailwind CSS.",
      },
    ],
    experience: [
      {
        title: "Software Developer Intern",
        company: "Your Company Name",
        from: new Date(2024, 6, 1),
        to: new Date(2024, 9, 1),
        current: false,
        summary: "Worked on web development projects using React and Next.js.",
      },
    ],

    displayEducation: true,
    displayProjects: true,
    activeColor: "#5B21B6",
  });
}
