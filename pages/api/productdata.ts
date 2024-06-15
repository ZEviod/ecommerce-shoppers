// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}[];
const productData = [
  {
    _id: 101,
    title: "Canon EOS Rebel T100",
    description:
      "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
    oldPrice: 700.0,
    price: 559.99,
    brand: "Canon",
    image: "https://i.ibb.co/1r28gMk/1.webp",
    isNew: true,
    category: "Electronics",
  },

  {
    _id: 102,
    title: "DJI Air",
    description:
      "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
    oldPrice: 1050.0,
    price: 999.0,
    brand: "DJI",
    image: "https://i.ibb.co/qdfB3s6/2.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 103,
    title: "Apple 10.2-inch iPad",
    description:
      "2021 Apple 10.2-inch iPad Wi-Fi 64GB - Space Gray (9th Generation)",
    oldPrice: 329.0,
    price: 269.0,
    brand: "Apple",
    image: "https://i.ibb.co/VL1Dnv1/4.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 104,
    title: "iPhone 14",
    description: "AT&T iPhone 14 128GB Midnight",
    oldPrice: 1745.99,
    price: 1200.0,
    brand: "Apple",
    image: "https://i.ibb.co/5F3nWv6/7.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 105,
    title: "Apple Watch SE",
    description:
      "Apple Watch SE (2nd Gen) GPS 40mm Midnight Aluminum Case with Midnight Sport Band - S/M",
    oldPrice: 350.0,
    price: 249.0,
    brand: "Apple",
    image: "https://i.ibb.co/xgZWmdq/8.jpg",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 106,
    title: "Beats Solo3",
    description:
      "Beats Solo3 Wireless On-Ear Headphones with Apple W1 Headphone Chip, Black, MX432LL/A",
    oldPrice: 120.99,
    price: 130.09,
    brand: "Beats by Dr. Dre",
    image: "https://i.ibb.co/rQKjVC2/5.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 107,
    title: "uhomepro TV Stand Cabinet",
    description:
      "uhomepro TV Stand Cabinet for Living Room up to 55 Television, Entertainment Center with RGB LED Lights and Storage Shelves Furniture, Black High Gloss TV Cabinet Console Table, Q15709",
    oldPrice: 219.99,
    price: 125.99,
    brand: "uhomepro",
    image: "https://i.ibb.co/Ycz8hkV/6.webp",
    isNew: true,
    category: "Home Decoration",
  },
  {
    _id: 108,
    title: "T-Shirt Men",
    description:
      "St Patricks Day T-Shirt Men -Image by Shutterstock, Male XX-Large",
    oldPrice: 15.0,
    price: 18.99,
    brand: "Smartprints",
    image: "https://i.ibb.co/BLCDw7v/3.webp",
    isNew: true,
    category: "Fashion",
  },
  {
    _id: 109,
    title: "Picnic Table Bench Set",
    description:
      "Costway Picnic Table Bench Set Outdoor Backyard Patio Garden Party Dining All Weather Black",
    oldPrice: 169.99,
    price: 298.0,
    brand: "Costway",
    image: "https://i.ibb.co/qCXcPhq/8.webp",
    isNew: true,
    category: "Home Decoration",
  },
  {
    _id: 110,
    title: "Grill Heavy Duty",
    description: "Expert Grill Heavy Duty 24-Inch Charcoal Grill, Black",
    oldPrice: 120.99,
    price: 107.0,
    brand: "Expert Grill",
    image: "https://i.ibb.co/TTS9wY4/9.webp",
    isNew: true,
    category: "Equipments",
  },
  {
    _id: 111,
    title: "Girls Cropped",
    description:
      "Free Assembly Girls Cropped Mixed Cable Knit Fair Isle Sweater, Sizes 4-18",
    oldPrice: 20.0,
    price: 15.31,
    brand: "Free Assembly",
    image: "https://i.ibb.co/BVzsqvz/10.webp",
    isNew: true,
    category: "Fashion",
  },
  {
    _id: 112,
    title: "Night of Olay Firming Night Cream Face Moisturizer, 1.9 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 12.99,
    price: 7.98,
    brand: "Olay",
    image: "https://i.ibb.co/zPDcCQY/top4.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 113,
    title: "Face LiquidSweet Lightweight Beauty Products for Women",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 9.59,
    price: 7.62,
    brand: "unknown",
    image: "https://i.ibb.co/QC4L3RF/top8.jpg",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 114,
    title:
      "L'Oreal Paris Revitalift Triple Power Anti-Aging Cream Face Moisturizer 1.7 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 35.0,
    price: 21.91,
    brand: "L'Oreal Paris",
    image: "https://i.ibb.co/dKmw2sC/top2.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 115,
    title:
      "L'Oreal Paris 55+ Moisturizer Anti-Aging Face Moisturizer, Wrinkle Expert, 1.7 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 23.65,
    price: 10.63,
    brand: "L'Oreal Paris",
    image: "https://i.ibb.co/sJwg0YF/top1.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 116,
    title:
      "Vaseline Intensive Care™ Advanced Repair Unscented Body Lotion, 20.3 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 9.99,
    price: 6.98,
    brand: "Vaseline",
    image: "https://i.ibb.co/v1sPXLq/top5.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 117,
    title: "CeraVe Healing Ointment, Protects and Soothes Cracked Skin, 12 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 25.35,
    price: 20.87,
    brand: "CeraVe",
    image: "https://i.ibb.co/yPJjB3r/top6.webp",
    isNew: false,
    category: "Beauty Product",
  },
  {
    _id: 118,
    title:
      "Neutrogena Hydro Boost Hyaluronic Acid Water Gel Face Moisturizer, 1.7 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 29.0,
    price: 19.97,
    brand: "Neutrogena",
    image: "https://i.ibb.co/zmw8xFY/top7.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 119,
    title:
      "L'Oreal Paris Collagen Moisture Filler Facial Treatment Day Night Cream, Anti-Aging, 1.7 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 14.0,
    price: 8.98,
    brand: "L'Oreal Paris",
    image: "https://i.ibb.co/vHJkwzt/top3.webp",
    isNew: false,
    category: "Beauty Product",
  },
  {
    _id: 120,
    title: "Girls Sleeveless Cutout",
    description: "Free Assembly Girls Sleeveless Cutout Jumpsuit, Sizes 4-18",
    oldPrice: 52.0,
    price: 22.0,
    brand: "Free Assembly",
    image: "https://i.ibb.co/BNXTLkq/12.webp",
    isNew: false,
    category: "Fashion",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productData);
}
