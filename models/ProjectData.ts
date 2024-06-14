interface ProjectData {
  title: string;
  description: string;
  imageSrc: string;
  demoLink?: string;
  gitLink?: string;
  articleLink?: string;
  featured?: boolean;
}

const projectData: ProjectData[] = [
  {
    title: "Diro's World",
    description:
      "Winner of HackDIRO Université de Montreal. A never-ending fantasy world role-playing game (RPG) that is personalized to you and your interests. Powered by Artificial Intelligence.",
    imageSrc: "/diro.gif",
    demoLink: "https://diro-world-jcz.vercel.app/",
    gitLink: "https://github.com/jolsoncruz/DiroWorld",
    articleLink:
      "https://www.vaniercollege.qc.ca/newsroom/vanier-students-win-at-udm-hackathon-du-diro/",
    featured: true,
  },
  {
    title: "HeyU",
    description:
      "A university-exclusive social media platform, inspired by Instagram, promoting a fun and inclusive environment for students to connect, network, and engage in relatable conversations.",
    imageSrc: "/heyu.png",
    demoLink: "https://heyu-jcz.vercel.app",
    gitLink: "https://github.com/jolsoncruz/heyu-socmed-app",
    featured: true,
  },
  {
    title: "Mobility Invoicing",
    description:
      "Billing and invoicing app created for companies like Bell and Rogers to manage customer plans and payments.",
    imageSrc: "/mobinvoicing.png",
    demoLink: "https://mobility-invoicing.vercel.app/",
    gitLink: "https://github.com/jolsoncruz/MobilityInvoicing",
    featured: true,
  },
  {
    title: "TransferSafe",
    description:
      "A secure file-sharing web application that allows users to upload and share files with anyone through a system-generated passkey.",
    imageSrc: "/transfersafe.png",
    demoLink: "https://transfer-safe.vercel.app/",
    gitLink: "https://github.com/centinna-l/transfersafe-be",
  },
  // {
  //   title: "CashFlow360",
  //   description:
  //     "A C# banking system that offers valuable assistance to financial institutions seeking to streamline their operations and improve efficiency.",
  //   imageSrc: "/usap.png",
  //   gitLink: "https://github.com/jolsoncruz/CashFlow360",
  //   featured: false,
  // },
  {
    title: "PennyHopper",
    description:
      "A web-based travel search engine that will allow consumers to find the cheapest available flight itineraries for their dream destinations.",
    imageSrc: "/pennyhopper.png",
    featured: false,
  },
  {
    title: "Key Management Protocol",
    description:
      "Undergraduate thesis: A lightweight, secure, and efficient key management protocol for IoT devices. Programmed using MicroPython and ESP32s.",
    imageSrc: "/akms.png",
    articleLink: "https://animorepository.dlsu.edu.ph/etdb_comtech/3/",
    featured: false,
  },
  {
    title: "DLSU Community Forum",
    description:
      "Engaging community forum designed for De La Salle University (DLSU) students to gain insights about professors before enrolling in their classes.",
    imageSrc: "/commforum.png",
    demoLink: "https://dlsu-commforum.onrender.com/",
    gitLink: "https://github.com/jolsoncruz/CommForum",
    featured: true,
  },
  {
    title: "De La Salle Usap (Web)",
    description:
      'A Web App rendition of the Java chat application designed to be the "official" chat client of De La Salle University.',
    imageSrc: "/usap2.png",
    gitLink: "https://github.com/jolsoncruz/Usap-Web",
    featured: false,
  },
  {
    title: "De La Salle Usap",
    description:
      'A socket-based Java chat application designed to be the "official" chat client of De La Salle University.',
    imageSrc: "/usap1.png",
    gitLink: "https://github.com/jolsoncruz/Usap-Jar",
    featured: false,
  },
  {
    title: "My First Website",
    description:
      "The project that started it all: my very first website, created when I was just 14 years old, purely through self-study and watching YouTube videos.",
    imageSrc: "/firstwebsite.png",
    demoLink:
      "https://web.archive.org/web/20140513011039/http://jolsoncruz.com:80/",
    featured: false,
  },
];

export { projectData };
