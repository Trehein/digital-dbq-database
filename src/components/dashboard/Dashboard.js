import React, { useEffect } from 'react'
import locomotiveScroll from "locomotive-scroll";
import './dashboard.css';
import './locomotive-scroll.css'

const Dashboard = () => {
    const scrollRef = React.createRef();

    useEffect(() => {
        const scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            getDirection: true,
            getSpeed: true
        })
        console.log(scroll)
    })

    return (
        <div className="dashboard">
            <div className="scroll" ref={scrollRef}>
                <h1 
                    data-scroll 
                    data-scroll-speed="1" 
                    data-scroll-position="bottom"
                    data-scroll-direction="horizontal"
                >
                    Coming in from the Top
                </h1>
                <h2
                    data-scroll
                    data-scroll-speed="2"
                    data-scroll-position="bottom"
                    data-scroll-direction="horizontal"
                >
                    Scrolling Sideways
                </h2>
            </div>
        </div>
    )
}

export default Dashboard