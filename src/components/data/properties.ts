// src/components/data/properties.ts
import img1 from "../../assets/images/image1 (1).jpg"
import img2 from "../../assets/images/image1 (2).jpg"
import img3 from "../../assets/images/image1 (3).jpg"
import img4 from "../../assets/images/image1 (4).jpg"
import img5 from "../../assets/images/image1 (1).jpg"
import img6 from "../../assets/images/image1 (2).jpg"
import img7 from "../../assets/images/image1 (3).jpg"
import img8 from "../../assets/images/image1 (4).jpg"

export type PropertyImage = {
  url: string
  label: string
}

export type Property = {
  id: number
  title: string
  subtitle: string
  slug: string
  price: string
  rating: number
  isFavorite?: boolean
  description: string
  images: PropertyImage[]
  location: {
    lat: number
    lng: number
  }
  photoSections?: {
    title: string
    images: PropertyImage[]
  }[]
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Room in Camberwell",
    subtitle: "South Bank living for 1",
    slug: "room-in-paddington",
    price: "$232 for 2 nights",
    rating: 4.9,
    isFavorite: true,
    description:
      "Cozy room in central London with modern amenities, great transport links, and nearby cafes.",
    images: [
      { url: img1, label: "Shared full kitchen" },
      { url: img2, label: "Bedroom" },
      { url: img3, label: "Shared full bathroom" },
      { url: img4, label: "Balcony" },
      { url: img5, label: "Shared exterior" },
      { url: img6, label: "Additional photos" },
      { url: img7, label: "Living space" },
      { url: img8, label: "Neighborhood view" },
    ],
    photoSections: [
      {
        title: "Shared full kitchen",
        images: [
          { url: img1, label: "Shared full kitchen" },
          { url: img2, label: "Kitchen view 2" },
          { url: img3, label: "Dining area" },
          { url: img4, label: "Kitchen details" },
          { url: img5, label: "Utensils and decor" },
        ],
      },
      {
        title: "Shared full bathroom",
        images: [
          { url: img6, label: "Bathroom sink" },
          { url: img7, label: "Shower area" },
          { url: img8, label: "Mirror and lighting" },
        ],
      },
      {
        title: "Balcony",
        images: [
          { url: img1, label: "Balcony view" },
          { url: img2, label: "Balcony seating" },
          { url: img3, label: "Outdoor plants" },
        ],
      },
      {
        title: "Shared exterior",
        images: [
          { url: img4, label: "Building front" },
          { url: img5, label: "Neighborhood" },
          { url: img6, label: "Street view" },
        ],
      },
      {
        title: "Additional Photos",
        images: [
          { url: img4, label: "Building front" },
          { url: img5, label: "Neighborhood" },
          
        ],
      },
    ],
    location: { lat: 51.515, lng: -0.175 },
  },

  {
    id: 2,
    title: "Room in Paddington",
    subtitle: "Beautiful Mews House",
    slug: "room-in-camberwell",
    price: "$152 for 2 nights",
    rating: 4.94,
    isFavorite: false,
    description: "1 bed. Shared Bathroom.",
    images: [
      { url: img2, label: "Living area" },
      { url: img3, label: "Bedroom" },
      { url: img4, label: "Bathroom" },
      { url: img1, label: "Kitchen" },
      { url: img5, label: "Balcony" },
      { url: img6, label: "Street view" },
    ],
    location: { lat: 51.470, lng: -0.09 },
  },

  {
    id: 3,
    title: "Room in Greater London, United Kingdom",
    subtitle: "Cozy room in Kensal Green",
    slug: "room-in-camden",
    price: "$180 for 2 nights",
    rating: 4.98,
    isFavorite: true,
    description: "1 double bed. Dedicated bathroom.",
    images: [
      { url: img3, label: "Bedroom" },
      { url: img4, label: "Bathroom" },
      { url: img1, label: "Kitchen" },
      { url: img2, label: "View" },
      { url: img5, label: "Exterior" },
    ],
    photoSections: [
      {
        title: "Bedroom",
        images: [
          { url: img3, label: "Main bed" },
          { url: img4, label: "Desk area" },
          { url: img5, label: "Window view" },
        ],
      },
      {
        title: "Bathroom",
        images: [
          { url: img1, label: "Shower" },
          { url: img2, label: "Sink and mirror" },
        ],
      },
      {
        title: "Kitchen",
        images: [
          { url: img3, label: "Fridge" },
          { url: img4, label: "Cooking area" },
        ],
      },
    ],
    location: { lat: 51.54, lng: -0.145 },
  },

  {
    id: 4,
    title: "Room in Hackney",
    subtitle: "Quiet private room with outside space",
    slug: "room-in-hackney",
    price: "$164 for 2 nights",
    rating: 4.97,
    isFavorite: true,
    description:
      "Stylish room in a vibrant area with cafes, street art, and nightlife nearby.",
    images: [
      { url: img4, label: "Bedroom" },
      { url: img1, label: "Bathroom" },
      { url: img2, label: "Balcony" },
      { url: img3, label: "Kitchen" },
      { url: img5, label: "Courtyard" },
    ],
    location: { lat: 51.545, lng: -0.055 },
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
      "Chic studio with open-plan layout and close proximity to trendy bars and restaurants.",
    images: [
      { url: img5, label: "Main room" },
      { url: img6, label: "Kitchenette" },
      { url: img7, label: "Bathroom" },
      { url: img8, label: "Street view" },
    ],
    location: { lat: 51.523, lng: -0.078 },
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
    images: [
      { url: img6, label: "Living room" },
      { url: img7, label: "Bedroom" },
      { url: img8, label: "Kitchen" },
      { url: img1, label: "Neighborhood" },
    ],
    
    location: { lat: 51.49, lng: -0.17 },
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
    images: [
      { url: img7, label: "Bedroom" },
      { url: img8, label: "Living space" },
      { url: img5, label: "Exterior" },
      { url: img6, label: "Balcony" },
    ],
    location: { lat: 51.515, lng: -0.205 },
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
    images: [
      { url: img8, label: "Living room" },
      { url: img5, label: "Bedroom" },
      { url: img6, label: "Bathroom" },
      { url: img7, label: "Neighborhood" },
    ],
    location: { lat: 51.462, lng: -0.114 },
  },
]
