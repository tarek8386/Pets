import React from "react";
import MarketItem from "@/components/shared/MarketItem";
import Pets from "@/components/shared/Pets";
import RestaurantItem from "@/components/shared/Restaurants";

import restaurantsImg1 from "../../assets/images/restaurant.jpg";
import restaurantsImg2 from "../../assets/images/restaurant-1.jpg";
import restaurantsImg3 from "../../assets/images/restaurant-2.jpg";
import restaurantsImg4 from "../../assets/images/restaurant-3.jpg";

import pet1 from "../../assets/images/pet-1.jpg";
import pet2 from "../../assets/images/pet-2.jpg";
import pet3 from "../../assets/images/pet-3.jpg";
import pet4 from "../../assets/images/pet-4.jpg";

import market1 from "../../assets/images/marketItem-1.png";
import market2 from "../../assets/images/marketItem-2.png";
import market3 from "../../assets/images/marketItem-3.png";
import market4 from "../../assets/images/marketItem-4.png";

import blogImg from "../../assets/images/blogImg.jpg"

import CommentCard from "@/components/shared/CommentCard";
import BlogCard from "@/components/shared/BlogCard";

const restaurantData = [
  {
    img: restaurantsImg1,
    alt: "restaurants Img 1",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
  {
    img: restaurantsImg2,
    alt: "restaurants Img 2",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
  {
    img: restaurantsImg3,
    alt: "restaurants Img 3",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
  {
    img: restaurantsImg4,
    alt: "restaurants Img 4",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
  {
    img: restaurantsImg4,
    alt: "restaurants Img 5",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
];

const petData = [
  {
    img: pet1,
    title: "Luna",
    type: "Golden Retriever",
    age: "1",
  },
  {
    img: pet2,
    title: "Luna",
    type: "Golden Retriever",
    age: "1",
  },
  {
    img: pet3,
    title: "Luna",
    type: "Golden Retriever",
    age: "1",
  },
  {
    img: pet4,
    title: "Luna",
    type: "Golden Retriever",
    age: "1",
  },
  {
    img: pet4,
    title: "Luna",
    type: "Golden Retriever",
    age: "1",
  },
];

const marketData = [
  { img: market1, title: "Luna", price: "$80.99" },
  { img: market2, title: "Bella", price: "$75.50" },
  { img: market3, title: "Bella", price: "$75.50" },
  { img: market4, title: "Bella", price: "$75.50" },
  { img: market1, title: "Luna", price: "$80.99" },
];

// comments data

const commentsData = [
    {
      avatar: 'https://i.pravatar.cc/40?img=3',
      name: 'Scott William',
      date: '2 days ago',
      rating: 5,
      title: 'Great atmosphere and pet-friendly service!',
      content: 'The staff was incredibly welcoming to both us and our dog. The outdoor seating area is perfect for pets, and the food was delicious. Will definitely come back!',
      translated: 'Chinese',
      source: 'FurryToon Community',
    },
    {
      avatar: 'https://i.pravatar.cc/40?img=5',
      name: 'Eve Arden',
      date: '4 days ago',
      rating: 4,
      title: 'Great atmosphere and pet-friendly service!',
      content: 'The staff was incredibly welcoming to both us and our dog. The outdoor seating area is perfect for pets, and the food was delicious. Will definitely come back!',
      translated: 'Chinese',
      source: 'Google Review',
    },
    // more comments can go here...
  ];

//   blog card data
  
const blogData = [
    {
      thumbnail: blogImg,
      category: "Lifestyle",
      date: "March 24, 2024",
      title: "The Ultimate Guide to Keeping Your Pet",
      excerpt:
        "This blog explores how processes facilitate communication...This blog explores how processes facilitate communication...",
      author: "Dr. Sarah Wilson",
      readTime: "5 min",
    },
    // Add more blog entries as needed...
  ];

const allComponentData = () => {
  return (
    <div className="container">
      <h1 className="text-[#2F2F2F] font-noto text-[28px] not-italic font-semibold leading-[36.4px] my-8 border-b-[1px] border-[red] border-dashed w-fit mx-auto">
        Restaurant Card Component ⤵️
      </h1>

      {/* Restaurant Card Component Section */}
      <div className="restaurants-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {restaurantData.map((item, idx) => (
          <RestaurantItem key={idx} data={item} />
        ))}
      </div>

      <h1 className="text-[#2F2F2F] font-noto text-[28px] not-italic font-semibold leading-[36.4px] my-8 border-b-[1px] border-[red] border-dashed w-fit mx-auto">
        Pet Card Component ⤵️
      </h1>

      {/* pet Card Component Section */}
      <div className="restaurants-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {petData.map((item, index) => (
          <Pets key={index} data={item} />
        ))}
      </div>

      <h1 className="text-[#2F2F2F] font-noto text-[28px] not-italic font-semibold leading-[36.4px] my-8 border-b-[1px] border-[red] border-dashed w-fit mx-auto">
        Market Item Card Component ⤵️
      </h1>

      {/* Market Item Card Component Section */}
      <div className="restaurants-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {marketData.map((item, index) => (
          <MarketItem key={index} data={item} />
        ))}
      </div>

      <h1 className="text-[#2F2F2F] font-noto text-[28px] not-italic font-semibold leading-[36.4px] my-8 border-b-[1px] border-[red] border-dashed w-fit mx-auto">
        Comment Card Component ⤵️
      </h1>

      <div className="commentsWrapper">
      {commentsData.map((comment, index) => (
        <CommentCard key={index} comment={comment} />
      ))}
    </div>

    <h1 className="text-[#2F2F2F] font-noto text-[28px] not-italic font-semibold leading-[36.4px] my-8 border-b-[1px] border-[red] border-dashed w-fit mx-auto">
        Blog Card Component ⤵️
      </h1>

      <div className="container py-8 space-y-4">
      {blogData.map((item, idx) => (
        <BlogCard key={idx} data={item} />
      ))}
    </div>
    </div>
  );
};

export default allComponentData;
