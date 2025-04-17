import React from "react";

import MarketItem from "@/components/shared/MarketItem";
import Pets from "@/components/shared/Pets";
import RestaurantItem from "@/components/shared/Restaurants";
import BlogCard from "@/components/shared/BlogCard";
import ActivityCard from "@/components/shared/ActivityCard";
import ReviewCard from "@/components/shared/ReviewCard";
import CommentCard from '@/components/shared/CommentCard';

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

import avatar from "../../assets/images/avatar.jpg"


// restaurant data

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

// pet data
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

// market data
const marketData = [
  { img: market1, title: "Luna", price: "$80.99" },
  { img: market2, title: "Bella", price: "$75.50" },
  { img: market3, title: "Bella", price: "$75.50" },
  { img: market4, title: "Bella", price: "$75.50" },
  { img: market1, title: "Luna", price: "$80.99" },
];

// comments data
const reviewData = [
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


// recent Activity data

const activityData = [
  {
    date: "Mar 30, 2025",
    time: "11:32 pm",
    title: "Started a new discussion regarding What are some indoor places I can take my 2-year old Golden Retriever to? on the PawTalk Forum",
    point: "+10",
  },
  {
    date: "Mar 30, 2025",
    time: "11:32 pm",
    title: "Started a new discussion regarding What are some indoor places I can take my 2-year old Golden Retriever to? on the PawTalk Forum",
    point: "+10",
  },
];

// comment data

const comments = [
  {
    user: { name: "John Smith", avatar: avatar },
    time: "51 mins ago",
    text:
      "Getting a new pet can be both exciting and overwhelming. Here are some essential tips to help you prepare for your new family member...",
    likes: 165,
    replies: [
      {
        user: { name: "John Smith", avatar: avatar },
        time: "5 hours ago",
        text:
          "Getting a new pet can be both exciting and overwhelming. Here are some essential tips to help you prepare for your new family member...",
        likes: 165,
        replies: [
          {
            user: { name: "John Smith", avatar: avatar },
            time: "6 hours ago",
            text:
              "Getting a new pet can be both exciting and overwhelming. Here are some essential tips to help you prepare for your new family member...",
            likes: 165,
            replies: [],
            share:100,
          },
        ],
        share: 165,
      },
    ],
    share: 165,
  },
  {
    user: { name: "John Smith", avatar: avatar },
    time: "5 hours ago",
    text:
      "Getting a new pet can be both exciting and overwhelming. Here are some essential tips to help you prepare for your new family member...",
    likes: 165,
    replies: [],
    share: 165,
  },
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
        Review Card Component ⤵️
      </h1>

      <div className="commentsWrapper">
      {reviewData.map((comment, index) => (
        <ReviewCard key={index} comment={comment} />
      ))}
    </div>

    <h1 className="text-[#2F2F2F] font-noto text-[28px] not-italic font-semibold leading-[36.4px] my-8 border-b-[1px] border-[red] border-dashed w-fit mx-auto">
        Blog Card Component ⤵️
      </h1>

      <div className="py-8 space-y-4">
      {blogData.map((item, idx) => (
        <BlogCard key={idx} data={item} />
      ))}
    </div>

    <h1 className="text-[#2F2F2F] font-noto text-[28px] not-italic font-semibold leading-[36.4px] my-8 border-b-[1px] border-[red] border-dashed w-fit mx-auto">
        Recent Activity Component ⤵️
      </h1>

      <div className="flex flex-col gap-3">
        {activityData.map((item,index)=>(
          <ActivityCard key={index} data={item}/>)
          )}
      </div>


    <h1 className="text-[#2F2F2F] font-noto text-[28px] not-italic font-semibold leading-[36.4px] my-8 border-b-[1px] border-[red] border-dashed w-fit mx-auto">
        Comment Card Component ⤵️
      </h1>

      <div className="p-4 max-w-2xl mx-auto">
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} isReply={false} />
      ))}
    </div>

    </div>
  );
};

export default allComponentData;
