import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-4 p-4 bg-base-200">
            <p className="text-white py-1 px-4 bg-secondary font-medium">Latest</p>
            <Marquee className="flex gap-10" pauseOnHover={true} speed={100}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    recusandae praesentium placeat tenetur ad in obcaecati
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    recusandae praesentium placeat tenetur ad in obcaecati
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    recusandae praesentium placeat tenetur ad in obcaecati
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
