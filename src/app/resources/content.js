import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Justin",
  lastName: "Yu",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Day Dreamer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Shanghai", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
     Life is like a game of chess; once you make a move, there’s no turning back.
  
   </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "none",
    icon: "none",
    link: "none",
  },
  {
    name: "none",
    icon: "none",
    link: "none",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "none",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Day Dreamer</>,
  subline: (
    <>
      天下风云出我辈，一入江湖岁月催.
    
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "none",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
         我不明白，为什么大家都在谈论着项羽被困垓下，仿佛这中原古战场对我们决定了凶多吉少。
      二十年前，我从徐州踏上征途，开始了第二次北伐，中华秋叶海棠遂归于一统。
      本党本军所到之处，民众竭诚欢迎，真可谓占尽天时，那种勃勃生机、万物竟发的境界，犹在眼前。
      短短二十年之后，这里竟至于一变而成为我们的葬身之地了么？无论怎么样，会战兵力是以八十万对六十万，优势在我！
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Recommended Games",
    experiences: [
      {
        company: "Destiny 2",
        timeframe: "2020 - Present",
        role: "RPG",
        achievements: [
          <>
            《命运2》的故事发生在未来，人类在“黄金时代”后遭遇了“黑暗时代”，幸存者在“旅行者”（The Traveler）的庇护下重建文明。
          玩家扮演“守护者”（Guardian），通过使用“光能”（Light）和“暗影”（Darkness）的力量，对抗各种外星种族和威胁。
          </>,
          <>
            游戏探讨了光明与黑暗的平衡、人类的生存与希望，以及守护者的使命与责任。
          
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Valorant",
        timeframe: "2022 - 2025",
        role: "FPS",
        achievements: [
          <>
            世界观：游戏设定在近未来的地球，玩家扮演“特工”（Agent），隶属于两个敌对组织：攻击方（Attackers）和防守方（Defenders）。
            核心主题：围绕战术配合、技能运用和团队协作展开，强调策略与枪法的结合。
          </>,
          <>
            每个特工拥有四个独特技能，包括一个终极技能（Ultimate），需要根据战局灵活使用。
              
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "待更新",
    institutions: [
      {
        name: "待更新",
        description: <>待更新.</>,
      },
      {
        name: "待更新",
        description: <>待更新.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "待更新",
    skills: [
      {
        title: "待更新",
        description: <>待更新.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "待更新",
        description: <>待更新.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "待更新",
  title: "待更新",
  description: `待更新`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "待更新",
  title: "待更新",
  description: `待更新`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
