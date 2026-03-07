import reactSticker from '../assets/Img/react-sticker.png'; import nodeSticker from '../assets/Img/node-sticker.png'; import gitSticker from '../assets/Img/git-sticker.png'; import gitHubSticker from '../assets/Img/github-sticker.png'; import jsSticker from '../assets/Img/js-sticker.png'; import htmlSticker from '../assets/Img/html-sticker.png'; import cssSticker from '../assets/Img/css-sticker.png'; import mongoSticker from '../assets/Img/mongo-sticker.png';
import tierImg from '../assets/Img/tierList.png'
import tekzyImg from '../assets/Img/tekzy.png'
import animeInfoImg from '../assets/Img/animeInfo.png'
import pianoImg from '../assets/Img/piano.png'
import magicStudioImg from '../assets/Img/magicStudio.png'
import colorGeneratorImg from '../assets/Img/colorGenerator.png'
import solusImg from '../assets/Img/solus.png'
import luxeDentalImg from '../assets/Img/luxeDental.png'
import kanbanBoardImg from '../assets/Img/kanbanBoard.png'
import HungryTigerImg from '../assets/Img/hungryTiger.png'
import ochiImg from '../assets/Img/ochi.png'
import foodReelImg from '../assets/Img/foodReel.png'

export const projects = [
  {
    id: 1,
    name: "Tier List",
    image: tierImg,
    github: "https://github.com/Shubham-front384/Tier-List",
    language: ["react", "tailwind css"],
    liveLink: "https://tier-list-app.netlify.app/"
  },
  {
    id: 2,
    name: "tekzy",
    image: tekzyImg,
    github: "https://github.com/Shubham-front384/Tekzy",
    language: ["react", "gsap", "scss"],
    liveLink: "https://tekzy.netlify.app/"
  },
  {
    id: 3,
    name: "anime info",
    image: animeInfoImg,
    github: "https://github.com/Shubham-front384/Anime-Info",
    language: ["react"],
    liveLink: "https://all-anime-info.netlify.app/"
  },
  {
    id: 4,
    name: "piano",
    image: pianoImg,
    github: "https://github.com/Shubham-front384/Piano",
    language: ["html", "css", "js"],
    liveLink: "https://chimerical-empanada-c55f5f.netlify.app/"
  },
  {
    id: 5,
    name: "magic studio",
    image: magicStudioImg,
    github: "https://github.com/Shubham-front384/Magic-Studio",
    language: ["react", "tailwind css"],
    liveLink: "https://magic-stud.netlify.app/"
  },
  {
    id: 6,
    name: "color generator",
    image: colorGeneratorImg,
    github: "https://github.com/Shubham-front384/Color-Generator",
    language: ["html", "css", "js"],
    liveLink: "https://benevolent-clafoutis-93517e.netlify.app/"
  },
  {
    id: 7,
    name: "solus",
    image: solusImg,
    github: "https://github.com/Shubham-front384/Solus",
    language: ["html", "css", "js"],
    liveLink: "https://celadon-cranachan-cceb94.netlify.app/"
  },
  {
    id: 8,
    name: "luxe dental",
    image: luxeDentalImg,
    github: "https://github.com/Shubham-front384/Dentist-Website",
    language: ["html", "css"],
    liveLink: "https://moonlit-kangaroo-2a9af9.netlify.app/"
  },
  {
    id: 9,
    name: "kanban",
    image: kanbanBoardImg,
    github: "https://github.com/Shubham-front384/Kanban",
    language: ["html", "css", "js"],
    liveLink: "https://kanban-task-proj.netlify.app/"
  },
  // {
  //   id: 10,
  //   name: "snake game",
  //   image: "https://images.pexels.com/photos/36076127/pexels-photo-36076127.jpeg",
  //   github: "https://github.com/Shubham-front384/Tekzy",
  //   language: ["html", "css", "js"],
  //   liveLink: "https://tekzy.netlify.app/"
  // },
  // {
  //   id: 11,
  //   name: "image editor",
  //   image: "https://images.pexels.com/photos/36076127/pexels-photo-36076127.jpeg",
  //   github: "https://github.com/Shubham-front384/Tekzy",
  //   language: ["html", "css", "js"],
  //   liveLink: "https://tekzy.netlify.app/"
  // },
  {
    id: 12,
    name: "hungry tiger",
    image: HungryTigerImg,
    github: "https://github.com/Shubham-front384/Hungry-Tiger",
    language: ["react", "gsap", "scss"],
    liveLink: "https://hungry-website.netlify.app/"
  },
  {
    id: 13,
    name: "ouchi",
    image: ochiImg,
    github: "https://github.com/Shubham-front384/Ouchi-Design",
    language: ["react", "gsap", "scss"],
    liveLink: "https://ouchi-design.netlify.app/"
  },
  // {
  //   id: 14,
  //   name: "game wala",
  //   image: "https://images.pexels.com/photos/36076127/pexels-photo-36076127.jpeg",
  //   github: "https://github.com/Shubham-front384/Tekzy",
  //   language: ["react", "gsap"],
  //   liveLink: "https://tekzy.netlify.app/"
  // },
  // {
  //   id: 15,
  //   name: "task",
  //   image: "https://images.pexels.com/photos/36076127/pexels-photo-36076127.jpeg",
  //   github: "https://github.com/Shubham-front384/URL-Shortner",
  //   language: ["react", "scss", "node", "express"],
  //   liveLink: "https://url-shortner-qs1f.onrender.com"
  // },
  {
    id: 16,
    name: "food reel",
    image: foodReelImg,
    github: "https://github.com/Shubham-front384/Food-Reel",
    language: ["react", "scss", "node", "express"],
    liveLink: "https://food-reel-2cry.onrender.com/"
  },
];

export const languageImg = [
  { id: 1, image: reactSticker },
  { id: 2, image: nodeSticker },
  { id: 3, image: jsSticker },
  { id: 4, image: htmlSticker },
  { id: 5, image: cssSticker },
  { id: 6, image: mongoSticker },
  { id: 7, image: gitSticker },
  { id: 8, image: gitHubSticker },
];
