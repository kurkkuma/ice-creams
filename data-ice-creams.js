import { additions } from "./data-additions";

export const iceCreams = [
  {
    id: 1,
    img: "./images/ice_creams/Strawberry-Bliss.png",
    name: "Strawberry Bliss",
    description:
      "Incredible strawberry ice cream in a waffle cone is a real paradise for lovers of fruit flavors.",
    calories: 298,
    weight: 120,
    fatContent: 17,
    price: 1.7,
    amountElements: 2,
    elements: ["Strawberry Fields", "Waffle Cone"],
    scoops: [
      {
        id: 4,
        img: "./images/scoops/Strawberry-Fields.png",
        name: "Strawberry Fields",
        price: 1.2,
      },
    ],

    // cone: "Waffle Cone",
    // scoops: {
    //   count: 1,
    //   firstScoop: "Strawberry Fields",
    //   secondScoop: "",
    //   thirdScoop: "",
    // },
    // addition: {
    //   count: 0,
    //   firstAddition: "",
    //   secondAddition: "",
    // },
  },
  {
    id: 2,
    img: "./images/ice_creams/Classic-Choco-Swirl.png",
    name: "Classic Choco Swirl",
    description:
      "White ice cream with delicate chocolate syrup is a classic of the genre that will never let you down.",
    calories: 279,
    weight: 140,
    fatContent: 15,
    price: 1.5,
    amountElements: 3,
    elements: ["Chocolate Fudge", "Classic White", "Plastic Cup"],
    scoops: [
      {
        id: 6,
        img: "./images/scoops/Classic-White.png",
        name: "Classic White",
        price: 0.8,
      },
    ],
    additions: [
      {
        id: 2,
        img: "./images/additions/Chocolate-Fudge.png",

        name: "Chocolate Fudge",
        price: 0.5,
      },
    ],
    // cone: "Plastic Cup",
    // scoops: {
    //   count: 1,
    //   firstScoop: "Classic White",
    //   secondScoop: "",
    //   thirdScoop: "",
    // },
    // addition: {
    //   count: 1,
    //   firstAddition: "Chocolate Fudge",
    //   secondAddition: "",
    // },
  },
  {
    id: 3,
    img: "./images/ice_creams/Triple-Treat-Delight.png",

    name: "Triple Treat Delight",
    description:
      "Strawberry, vanilla and chocolate ice cream in a convenient waffle cone - three flavors in one!",
    calories: 441,
    weight: 220,
    fatContent: 23,
    price: 4.2,
    amountElements: 4,
    elements: [
      "Chocolate Dream",
      "Vanilla Cloud",
      "Strawberry Fields",
      "Waffle Cone",
    ],
    scoops: [
      {
        id: 2,
        img: "./images/scoops/Chocolate-Dream.png",
        name: "Chocolate Dream",
        price: 1.5,
      },
      {
        id: 3,
        img: "./images/scoops/Vanilla-Cloud.png",
        name: "Vanilla Cloud",
        price: 1,
      },
      {
        id: 4,
        img: "./images/scoops/Strawberry-Fields.png",
        name: "Strawberry Fields",
        price: 1.2,
      },
    ],
    // cone: "Waffle Cone",
    // scoops: {
    //   count: 3,
    //   firstScoop: "Strawberry Fields",
    //   secondScoop: "Vanilla Cloud",
    //   thirdScoop: "Chocolate Dream",
    // },
    // addition: {
    //   count: 0,
    //   firstAddition: "",
    //   secondAddition: "",
    // },
  },
  {
    id: 4,
    img: "./images/ice_creams/Berry-Choco-Fusion.png",

    name: "Berry Choco Fusion",
    description:
      "Berry, vanilla and mint ice cream with chocolate chips - a combination that will leave an unforgettable taste experience.",
    calories: 416,
    weight: 220,
    fatContent: 22,
    price: 4.45,
    amountElements: 5,
    elements: [
      "Chocolate Sprinkles",
      "Mint Bliss",
      "Vanilla Cloud",
      "Berry Blast",
      "Waffle Cone",
    ],
    scoops: [
      {
        id: 1,
        img: "./images/scoops/Mint-Bliss.png",
        name: "Mint Bliss",
        price: 1,
      },
      {
        id: 3,
        img: "./images/scoops/Vanilla-Cloud.png",
        name: "Vanilla Cloud",
        price: 1,
      },
      {
        id: 10,
        img: "./images/scoops/Berry-Blast.png",
        name: "Berry Blast",
        price: 1.2,
      },
    ],
    additions: [
      {
        id: 4,
        img: "./images/additions/Chocolate-Sprinkles.png",

        name: "Chocolate Sprinkles",
        price: 0.75,
      },
    ],

    // cone: "Waffle Cone",
    // scoops: {
    //   count: 3,
    //   firstScoop: "Berry Blast",
    //   secondScoop: "Vanilla Cloud",
    //   thirdScoop: "Mint Bliss",
    // },
    // addition: {
    //   count: 1,
    //   firstAddition: "Chocolate Sprinkles",
    //   secondAddition: "",
    // },
  },
  {
    id: 5,
    img: "./images/ice_creams/Caramel-Nut-Crave.png",

    name: "Caramel Nut Crave",
    description:
      "White ice cream with caramel syrup and nuts - the perfect combination of caramelized flavor and crunchy nuts in a convenient plastic cup.",
    calories: 302,
    weight: 150,
    fatContent: 18,
    price: 2.5,
    amountElements: 4,
    elements: [
      "Nutty Delight",
      "Caramel Drizzle",
      "Classic White",
      "Plastic Cup",
    ],
    scoops: [
      {
        id: 6,
        img: "./images/scoops/Classic-White.png",
        name: "Classic White",
        price: 0.8,
      },
    ],
    additions: [
      {
        id: 5,
        img: "./images/additions/Nutty-Delight.png",

        name: "Nutty Delight",
        price: 1,
      },
      {
        id: 1,
        img: "./images/additions/Caramel-Drizzle.png",

        name: "Caramel Drizzle",
        price: 0.5,
      },
    ],
    // cone: "Plastic Cup",
    // scoops: {
    //   count: 1,
    //   firstScoop: "Classic White",
    //   secondScoop: "",
    //   thirdScoop: "",
    // },
    // addition: {
    //   count: 2,
    //   firstAddition: "Caramel Drizzle",
    //   secondAddition: "Nutty Delight",
    // },
  },
];
