// src/data/properties.ts
import img1 from "../../assets/images/image1 (1).jpg"
import img2 from "../../assets/images/image1 (2).jpg"
import img3 from "../../assets/images/image1 (3).jpg"
import img4 from "../../assets/images/image1 (4).jpg"
import img5 from "../../assets/images/image1 (1).jpg"
import img6 from "../../assets/images/image1 (2).jpg"
import img7 from "../../assets/images/image1 (3).jpg"
import img8 from "../../assets/images/image1 (4).jpg"

export type Property = {
  id: number
  title: string
  subtitle: string
  slug: string
  price: string
  rating: number
  isFavorite?: boolean
  description: string
  images: string[]
  location: {
    lat: number
    lng: number
  }
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Room in Paddington",
    subtitle: "South Bank living for 1",
    slug: "room-in-paddington",
    price: "$232 for 2 nights",
    rating: 4.9,
    isFavorite: true,
    description:
      "Cozy room in central London with modern amenities, great transport links, and nearby cafes.",
    images: [img1, img2, img3, img4, img5,img6,img7,img8],
    location: { lat: 51.515, lng: -0.175 }
  },
  {
    id: 2,
    title: "Room in Camberwell",
    subtitle: "Quiet neighborhood for solo travelers",
    slug: "room-in-camberwell",
    price: "$152 for 2 nights",
    rating: 4.94,
    isFavorite: false,
    description:
      "Bright and comfortable room in a quiet neighborhood, perfect for solo travelers.",
    images: [img2, img3, img4,img1, img2, img3, img4, img5],
    location: { lat: 51.470, lng: -0.090 }
  },
  {
    id: 3,
    title: "Room in Camden",
    subtitle: "Modern style near Camden Market",
    slug: "room-in-camden",
    price: "$180 for 2 nights",
    rating: 4.98,
    isFavorite: true,
    description:
      "Modern room with easy access to Camden Market and public transport.",
    images: [img3, img4, img1,img1, img2, img3, img4, img5],
    location: { lat: 51.540, lng: -0.145 }
  },
  {
    id: 4,
    title: "Room in Hackney",
    subtitle: "Vibrant area with street art",
    slug: "room-in-hackney",
    price: "$164 for 2 nights",
    rating: 4.97,
    isFavorite: true,
    description:
      "Stylish room in a vibrant area with cafes, street art, and nightlife nearby.",
    images: [img4, img1, img2,img1, img2, img3, img4, img5],
    location: { lat: 51.545, lng: -0.055 }
  },
  {
    id: 5,
    title: "Studio in Shoreditch",
    subtitle: "Chic studio close to trendy bars",
    slug: "studio-in-shoreditch",
    price: "$198 for 2 nights",
    rating: 4.92,
    isFavorite: false,
    description:
      "Chic studio with open-plan layout and close to trendy bars and restaurants.",
    images: [img5, img6, img7,img1, img2, img3, img4, img5],
    location: { lat: 51.523, lng: -0.078 }
  },
  {
    id: 6,
    title: "Loft in Chelsea",
    subtitle: "Quiet upscale neighborhood",
    slug: "loft-in-chelsea",
    price: "$270 for 2 nights",
    rating: 4.96,
    isFavorite: true,
    description:
      "Spacious loft with modern furnishings in a quiet, upscale neighborhood.",
    images: [img6, img7, img8,img1, img2, img3, img4, img5],
    location: { lat: 51.490, lng: -0.170 }
  },
  {
    id: 7,
    title: "Flat in Notting Hill",
    subtitle: "Iconic area near Portobello Road",
    slug: "flat-in-notting-hill",
    price: "$310 for 2 nights",
    rating: 4.99,
    isFavorite: true,
    description:
      "Beautiful flat in the iconic Notting Hill area with easy access to Portobello Road.",
    images: [img7, img8, img5,img1, img2, img3, img4, img5],
    location: { lat: 51.515, lng: -0.205 }
  },
  {
    id: 8,
    title: "Apartment in Brixton",
    subtitle: "Modern style with local culture",
    slug: "apartment-in-brixton",
    price: "$200 for 2 nights",
    rating: 4.89,
    isFavorite: false,
    description:
      "Comfortable apartment in Brixton with a mix of modern style and local culture.",
    images: [img8, img5, img6,img1, img2, img3, img4, img5],
    location: { lat: 51.462, lng: -0.114 }
  },
]
