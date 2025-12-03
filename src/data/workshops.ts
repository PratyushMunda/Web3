import image1 from '@/assets/img/background-22-1-2.png';
import image2 from '@/assets/img/background-22-1.png';
import image3 from '@/assets/img/background-22-1-1.png';
import image4 from '@/assets/img/ChairDeck1.png';
import image5 from '@/assets/img/bookholder5.png';
import image6 from '@/assets/img/VaseCover1.png';
import image7 from '@/assets/img/VaseStick1.png';
import image8 from '@/assets/img/PlantHanger1.png';
import image9 from '@/assets/img/Swing1.png';
import image10 from '@/assets/img/Bag1.png';
import image11 from '@/assets/img/Footwear1.png';
import image12 from '@/assets/img/KeyChain1.png';
import image13 from '@/assets/img/BookMark1.png';
import image14 from '@/assets/img/EarRing1.png';
import image15 from '@/assets/img/WatchStap.png';
import image16 from '@/assets/img/CarDecor1.png';
import image17 from '@/assets/img/Belt1.png';
import image18 from '@/assets/img/Chandelier1.png';
import image19 from '@/assets/img/StandingLamp1.png';
import image20 from '@/assets/img/HangingLamp1.png';
import image21 from '@/assets/img/TableLamp1.png';
import image22 from '@/assets/img/WallLamps1.png';
import image23 from '@/assets/img/Chandelier2.png';
import image24 from '@/assets/img/lampCenter.png';
import image25 from '@/assets/img/Chandelier3.png';
import image26 from '@/assets/img/Chandelier4.png';
import image27 from '@/assets/img/Chandelier5.png';
import image28 from '@/assets/img/Chandelier6.png';

export interface Workshop {
  id: number;
  title: string;
  description: string;
  image: string;
  Category: 'Decor' | 'Lamps' | 'Accesories';
  price: number;
  articleNo: string;
}

export const workshops: Workshop[] = [
  // =======================
  // DECOR
  // =======================
  {
    id: 1,
    title: "WALL DECOR",
    description: "WALLS ARE THE CANVAS OF YOUR HOME",
    image: image1,
    Category: "Decor",
    price: 0,
    articleNo: "D00WD001",
  },
  {
    id: 2,
    title: "CURTAIN TIE",
    description: "ELEGANCE WHILE KEEPING YOUR CURTAINS STYLISHLY GATHERED",
    image: image2,
    Category: "Decor",
    price: 0,
    articleNo: "D00CT001",
  },
  {
    id: 3,
    title: "MAT",
    description: "AS BEAUTIFUL AS THEY ARE FUNCTIONAL",
    image: image3,
    Category: "Decor",
    price: 0,
    articleNo: "D00MT010",
  },
  {
    id: 4,
    title: "DECK CHAIR",
    description: "OUR HANDCRAFTED MACRAMÉ DECK CHAIRS REDEFINE RELAXATION ",
    image: image4,
    Category: "Decor",
    price: 0,
    articleNo: "D00WD001",
  },
  {
    id: 5,
    title: "BOOK HOLDER",
    description: "FOR BOOK LOVERS WHO APPRECIATE BOTH FUNCTIONALITY AND STYLE",
    image: image5,
    Category: "Decor",
    price: 0,
    articleNo: "D00BH003",
  },
  {
    id: 6,
    title: "VASE COVER",
    description: "VASE STICKS AND COVERS",
    image: image6,
    Category: "Decor",
    price: 0,
    articleNo: "D00VC002",
  },
  {
    id: 7,
    title: "VASE STICKS",
    description: "ELEVATE YOUR FLORAL ARRANGEMENTS",
    image: image7,
    Category: "Decor",
    price: 0,
    articleNo: "D00WD001",
  },
  {
    id: 8,
    title: "PLANT HANGER",
    description: "BRING NATURE INDOORS WITH OUR BEAUTIFULLY WOVEN PLANT HANGERS",
    image: image8,
    Category: "Decor",
    price: 0,
    articleNo: "D00PH002",
  },
  {
    id: 9,
    title: "SWING",
    description: "HANDCRAFTED MACRAMÉ SWINGS",
    image: image9,
    Category: "Decor",
    price: 0,
    articleNo: "D00SW002",
  },

  // =======================
  // ACCESSORIES
  // =======================
  {
    id: 10,
    title: "BAGS",
    description: "HANDWOVEN ELEGANCE",
    image: image10,
    Category: "Accesories",
    price: 0,
    articleNo: "D00BG002",
  },
  {
    id: 11,
    title: "FOOTWEAR",
    description: "FOOTWEAR COLLECTION",
    image: image11,
    Category: "Accesories",
    price: 0,
    articleNo: "D00FW004",
  },
  {
    id: 12,
    title: "KEY CHAINS",
    description: "EXPRESS YOUR PERSONALITY",
    image: image12,
    Category: "Accesories",
    price: 0,
    articleNo: "D00KY009",
  },
  {
    id: 13,
    title: "BOOK MARK",
    description: "WOVEN FOR READERS",
    image: image13,
    Category: "Accesories",
    price: 0,
    articleNo: "D00BM002",
  },
  {
    id: 14,
    title: "EAR RINGS",
    description: "ELEGANT ADORNMENTS",
    image: image14,
    Category: "Accesories",
    price: 0,
    articleNo: "D00ER008",
  },
  {
    id: 15,
    title: "WATCH STRAP",
    description: "ELEVATE YOUR TIMEPIECE",
    image: image15,
    Category: "Accesories",
    price: 0,
    articleNo: "D00WS004",
  },
  {
    id: 16,
    title: "CAR DECOR",
    description: "ENHANCE YOUR VEHICLE’S INTERIOR",
    image: image16,
    Category: "Accesories",
    price: 0,
    articleNo: "D00CD002",
  },
  {
    id: 17,
    title: "BELT",
    description: "HANDCRAFTED BESPOKE MACRAMÉ BELTS",
    image: image17,
    Category: "Accesories",
    price: 0,
    articleNo: "D00BL003",
  },

  // =======================
  // LAMPS
  // =======================
  {
    id: 18,
    title: "CHANDELIER",
    description: "STATEMENT ELEGANCE",
    image: image18,
    Category: "Lamps",
    price: 0,
    articleNo: "D00CL003",
  },
  {
    id: 19,
    title: "STANDING LAMP",
    description: "EACH LAMP STANDS AS A HANDCRAFTED STATEMENT PIECE",
    image: image19,
    Category: "Lamps",
    price: 0,
    articleNo: "D00SL006",
  },
  {
    id: 20,
    title: "HANGING LAMP",
    description: "PERFECT FOR ACCENTUATING WALLS",
    image: image20,
    Category: "Lamps",
    price: 0,
    articleNo: "D00HL007",
  },
  {
    id: 21,
    title: "TABLE LAMP",
    description: "DESIGNED TO SHINE",
    image: image21,
    Category: "Lamps",
    price: 0,
    articleNo: "D00TL003",
  },
  {
    id: 22,
    title: "WALL LAMP",
    description: "THESE WOVEN BEAUTIES ADD DEPTH AND TEXTURE",
    image: image22,
    Category: "Lamps",
    price: 0,
    articleNo: "D00WL005",
  },

  // =======================
  // LAMPS → CHANDELIER SUBCATEGORY
  // =======================
  {
    id: 23,
    title: "CHANDELIER",
    description: "STATEMENT ELEGANCE",
    image: image23,
    Category: "Lamps",
    price: 0,
    articleNo: "D00CL001",
  },
  {
    id: 24,
    title: "CHANDELIER",
    description: "EACH LAMP STANDS AS A HANDCRAFTED STATEMENT PIECE",
    image: image24,
    Category: "Lamps",
    price: 0,
    articleNo: "D00SL006",
  },
  {
    id: 25,
    title: "CHANDELIER",
    description: "PERFECT FOR ACCENTUATING WALLS",
    image: image25,
    Category: "Lamps",
    price: 0,
    articleNo: "D00CL003",
  },
  {
    id: 26,
    title: "CHANDELIER",
    description: "DESIGNED TO SHINE",
    image: image26,
    Category: "Lamps",
    price: 0,
    articleNo: "D00CL004",
  },
  {
    id: 27,
    title: "CHANDELIER",
    description: "THESE WOVEN BEAUTIES ADD DEPTH AND TEXTURE",
    image: image27,
    Category: "Lamps",
    price: 0,
    articleNo: "D00CL005",
  },
  {
    id: 28,
    title: "CHANDELIER",
    description: "THESE WOVEN BEAUTIES ADD DEPTH AND TEXTURE",
    image: image28,
    Category: "Lamps",
    price: 0,
    articleNo: "D00CL006",
  },
];