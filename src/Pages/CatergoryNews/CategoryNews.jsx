import React from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
    const newsData = useLoaderData();
    const { id } = useParams();
    const filteredNews = newsData.filter((news) => {
        if (id == 0) {
            return news;
        } else if (id == 1) {
            return news.others.is_today_pick;
        } else {
            return news.category_id == id;
        }
    });
    return (
        <div>
            <h1>
                Category: {id} has {filteredNews.length} news
            </h1>
        </div>
    );
};

export default CategoryNews;
