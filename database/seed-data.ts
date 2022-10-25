interface SeedData {
  users: SeedUser[];
}

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role?: Role;
  department?: Department;
  userInfo?: IUserInfo;
}

interface IUserInfo {
  position: string;
  presentation: string;
  image: string;
  areaOfExpertise: string[];
  skills: string[];
  assignments: IUserAssignments;
  examenDegree: string;
}

interface IUserAssignments {
  asgmtName: string;
  companyName: string;
  asgmtLocation: string;
  asgmtStartDate: Date;
  asgmtEndDate: Date;
  asgmtDescr: string;
}

enum Role {
  ADMIN = "admin",
  USER = "user",
}

export enum Department {
  ALL = "all",
  DESIGN = "design",
  FINANCE = "finance",
  MANAGMENT = "managment",
  MARKETING = "marketing",
  SALES = "sales",
  TECH = "tech",
}

export const seedData: SeedData = {
  users: [
    {
      name: "Adam Tollin",
      email: "adam.tollin@blacklizzy.se",
      password: "grillkorv",
      role: Role.ADMIN,
      department: Department.TECH,
      userInfo: {
        position: "Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT", "UX/UI"],
        skills: ["React", "MongoDB", "Grillkorv"],
        examenDegree: "Frontend Developer",
        assignments: {
          asgmtName: "Write a cool code to Apotek Hjärtat",
          companyName: "Apotek Hjärtat",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write a cool code to Apotek Hjärtat",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Valesca Sarrocchi",
      email: "valesca.sarrocchi@blacklizzy.se",
      password: "voff-voff",
      role: Role.ADMIN,
      department: Department.TECH,
      userInfo: {
        position: "Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT"],
        skills: ["React", "Next", "Grillkorv"],
        examenDegree: "Frontend Developer",
        assignments: {
          asgmtName: "Black Vault",
          companyName: "Black Lizzy",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write a cool code to Black Vault",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Romina Rebolledo",
      email: "romina.rebolledo@blacklizzy.se",
      password: "falukorv",
      role: Role.ADMIN,
      department: Department.TECH,
      userInfo: {
        position: "Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT"],
        skills: ["React", "Javascript", "Grillkorv"],
        examenDegree: "Frontend Developer",
        assignments: {
          asgmtName: "Black Vault",
          companyName: "Black Lizzy",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write cool code :)",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Felix Bridell",
      email: "felix.bridell@blacklizzy.se",
      password: "admin-admin",
      role: Role.ADMIN,
      department: Department.TECH,
      userInfo: {
        position: "Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT", "UX/UI"],
        skills: ["React", "Typescript", "Grillkorv"],
        examenDegree: "Fullstack Developer",
        assignments: {
          asgmtName: "Write a cool code to H&M",
          companyName: "H&M",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write cool code :)",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Felicia Häggqvist",
      email: "felicia.haggqvist@blacklizzy.se",
      password: "PasswordIsPassword",
      role: Role.USER,
      department: Department.TECH,
      userInfo: {
        position: "Frontend Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT", "UX/UI"],
        skills: ["Vue", "Javascript", "Grillkorv"],
        examenDegree: "Frontend Developer",
        assignments: {
          asgmtName: "Black Vault",
          companyName: "Black Lizzy",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write cool code :)",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Magnus Hansson",
      email: "magnus.hansson@blacklizzy.se",
      password: "KurtCobainWasHere",
      role: Role.USER,
      department: Department.TECH,
      userInfo: {
        position: "Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT", "UX/UI"],
        skills: ["React", "Javascript", "Grillkorv"],
        examenDegree: "Frontend Developer",
        assignments: {
          asgmtName: "Write a cool code to Duni",
          companyName: "Duni Group",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write cool code :)",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Andreas Hedman Bergsvik",
      email: "andreas.bergsvik@blacklizzy.se",
      password: "SayMyName",
      role: Role.USER,
      department: Department.TECH,
      userInfo: {
        position: "Web Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT"],
        skills: ["React", "Typescript", "Next"],
        examenDegree: "Frontend Developer",
        assignments: {
          asgmtName: "Write a cool code to Duni",
          companyName: "Duni Group",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write cool code :)",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Andreas Granér",
      email: "andreas.graner@blacklizzy.se",
      password: "CrazyCatLady",
      role: Role.USER,
      department: Department.TECH,
      userInfo: {
        position: "Frontend Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT"],
        skills: ["React", "Javascript", "Grillkorv"],
        examenDegree: "Frontend Developer",
        assignments: {
          asgmtName: "Black Vault",
          companyName: "Black Lizzy",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write cool code :)",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Guido Guidos",
      email: "guido.guidos@blacklizzy.se",
      password: "ClickToDonate",
      role: Role.USER,
      department: Department.TECH,
      userInfo: {
        position: "System Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT"],
        skills: ["React", "Javascript", "System design"],
        examenDegree: "Frontend Developer",
        assignments: {
          asgmtName: "Black Vault",
          companyName: "Black Lizzy",
          asgmtLocation: "Malmö",
          asgmtDescr:"Write cool code :)",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Oskar Ingberg",
      email: "oskar.ingberg@blacklizzy.se",
      password: "BondageClub",
      role: Role.USER,
      department: Department.TECH,
      userInfo: {
        position: "Frontend Developer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT"],
        skills: ["React", "Javascript"],
        examenDegree: "Frontend Developer",
        assignments: {
          asgmtName: "Black Vault",
          companyName: "Black Lizzy",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write cool code :)",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },

    {
      name: "Robin Grönholm",
      email: "robin.gronholm@blacklizzy.se",
      password: "PappaLedig",
      role: Role.USER,
      department: Department.TECH,
      userInfo: {
        position: "Technical UX-designer",
        presentation:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Sed hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed libero.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Facebook_default_female_avatar.gif",
        areaOfExpertise: ["IT", "UX/UI"],
        skills: ["Javascript", "Leadership"],
        examenDegree: "System Engineering",
        assignments: {
          asgmtName: "Ta hand om Otis",
          companyName: "Föräldrarsmyndighet",
          asgmtLocation: "Stockholm",
          asgmtDescr:"Write cool code with Otis :)",
          asgmtStartDate: new Date(),
          asgmtEndDate: new Date(),
        },
      },
    },
  ],
};
