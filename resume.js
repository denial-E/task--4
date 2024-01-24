const resume = {
    "personalInformation": {
      "name": "Shem Peter Augustus. E",
      "email": "shempeter221992@gmail.com",
      "phone": "9865751923",
      "address": "NO.1 Anna Street, karaikudi"
    },
    "education": [
      {
        "degree": "diploma in Computer Science",
        "school": "AP govt higher secondary school for boys",
        "graduationYear": 2013
      },
      {
        "degree": "Bachelor of computer science Engineering",
        "school": "AP govt higher secondary school for boys",
        "graduationYear": 2018
      }
    ],
    "experience": [
      {
        "position": "FRESHER",
      },
    ],
    "skills": [
      "Natural Language Processing",
      "Software Development",
      "Communication",
      "software testing",
      "Problem Solving"
    ],
    "languages": ["English", "Programming Languages:Javascript"],
    "certifications": ["Certified cyber security Specialist"],
   };
   
  
  for (let i = 0; i < resume.education.length; i++) {
    console.log(resume.education[i].degree);
  }

  for (let key in resume.personalInformation) {
    console.log(key , ": " , resume.personalInformation[key]);
  }
  
  for (let skill of resume.skills) {
    console.log(skill);
   }

   resume.certifications.forEach(certification => {
    console.log(certification);
  });
  
  