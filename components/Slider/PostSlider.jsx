import React from "react";
import Slider from "react-slick";
import Div from "../Div";
import Post from "../Post";

export default function PostSlider() {
  const postData = [
    {
      url: "/blog/blog-details",
      src: "/images/post_1.jpeg",
      alt: "Post",
      date: "07 Mar 2023",
      title: "AI Predictions for 2024",
    },
    {
      url: "/blog/blog-details",
      src: "/images/post_2.jpeg",
      alt: "Post",
      date: "10 Feb 2023",
      title: "What the top AI models for your business solutions",
    },
    {
      url: "/blog/blog-details",
      src: "/images/post_3.jpeg",
      alt: "Post",
      date: "05 Mar 2023",
      title: "AI, job killer or ultimate career tool?",
    },
    {
      url: "/blog/blog-details",
      src: "/images/post_1.jpeg",
      alt: "Post",
      date: "07 Mar 2023",
      title: "AI Blogs vs Blog Writers, who wins?",
    },
    {
      url: "/blog/blog-details",
      src: "/images/post_2.jpeg",
      alt: "Post",
      date: "10 Feb 2023",
      title: "Are your AI models getting too expensive?",
    },
    {
      url: "/blog/blog-details",
      src: "/images/post_3.jpeg",
      alt: "Post",
      date: "05 Mar 2023",
      title: "How to build an AI Chatbot quick with no code.",
    },
  ];

  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24">
      {postData.map((item, index) => (
        <Div key={index}>
          <Post
            url={item.url}
            src={item.src}
            alt={item.alt}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
