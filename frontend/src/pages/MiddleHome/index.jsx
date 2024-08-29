import React from "react";
import ScrollCarousel from 'scroll-carousel-react';
import Card from "../../components/Card";
import "./index.css";

const cards = [
    {
        id:1,
        name:"Talent",
        title: "Hire Top Talent Fast!",
        description: "Connect with skilled freelancers ready to bring your projects to life—quickly and efficiently"
    },
    {
        id:2,
        name:"Community",
        title: "Trusted by Businesses Worldwide",
        description: "Join a community of clients who trust our freelancers to deliver results that exceed expectations."
    },
    {
        id:3,
        name:"Work",
        title:"Get More Done, Stress-Free",
        description:"Let our freelancers handle the heavy lifting—focus on growing your business while we manage the details."
    }, 
    {
        id:4,
        name:"Business",
        title:"Boost Your Business with Freelance Talent",
        description:"Access a global network of experts ready to elevate your business with fresh ideas and expert skills."
    }
]

const MiddleHome = () => {
    return(
        <div style={{marginTop:"5rem", zIndex:"10"}}>
            <ScrollCarousel
                autoplay
                autoplaySpeed={2}
                speed={3}
                smartSpeed
                onReady={() => console.log("Ready")}
                className="carousel"                
            >
                {cards.map((card) => {
                    return(
                        <Card name={card.name} key={card.id} title={card.title} desc={card.description} />
                    )
                })}
            </ScrollCarousel>
        </div>
    )
}

export default MiddleHome;