import {
    logo,
    backend,
    creator,
    mobile,
    web,
    github,
    menu,
    close,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    redux,
    tailwind,
    typescript,
    threejs,
    fossip,
    androidvitc,
    carrent,
    jobit,
    tripguide,
} from '../assets/assets'

export const link = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Projects',
        url: '/projects',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    // {
    //     id: 6,
    //     title: 'Dashboard',
    //     url: '/dashboard',
    // }
]

export const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];


export const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Fossip",
    icon: fossip,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Contributed to the development, deployment, and maintenance of the Fossip Merchant app..",
      "Implemented 12 new features and functionalities, incorporating state management, controllers, and accessibility features to enhance the app’s capabilities and user experience.",
      "Designed and created UI components for the app, ensuring an intuitive and user-friendly experience.",
      "Assisted in app deployment and conducted maintenance tasks to ensure optimal performance.",
      "Collaborated with the development team to troubleshoot and resolve issues promptly.",
    ],
  },
  {
    title: "Joint Secretary",
    company_name: "Android Club VITC",
    icon: androidvitc,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Recruited and mentored new members, fostering increased club participation",
      "Successfully organized events of a huge scale with over 400+ participants, showcasing strong event management.",
      "Managed event logistics, budgeting, and stakeholder coordination for seamless execution, ensuring a successful and impactful event experience",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Android Club VITC",
    icon: androidvitc,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Created 9 responsive websites, prioritizing the club website and demonstrating strong design skills.",
      "Designed and implemented 4 robust websites and mobile apps using React and Flutter, ensuring an exceptional user experience",
      "Demonstrated effective teamwork, organizing engaging Hackathons, and fostering innovation through 8 diverse tech and non-technical events.",
    ],
  },
];


export const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export const projects = {
  applications: [
      {
          id: 1,
          title: "Creative Portfolio",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
      },
      {
          id: 2,
          title: "Minimal Single Product",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
              "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
      },
      {
          id: 3,
          title: "Strong Together Charity",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
              "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
      }
  ],
  designs: [
      {
          id: 1,
          title: "Creative Portfolio",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
      },
      {
          id: 2,
          title: "Minimal Single Product",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
              "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
      },
      {
          id: 3,
          title: "Strong Together Charity",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
              "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
      }
  ],
  websites: [
      {
          id: 1,
          title: "Creative Portfolio",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
      },
      {
          id: 2,
          title: "Minimal Single Product",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
              "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
      },
      {
          id: 3,
          title: "Strong Together Charity",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
              "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
      }
  ],
};