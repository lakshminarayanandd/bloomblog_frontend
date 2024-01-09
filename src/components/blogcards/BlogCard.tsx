import React, { useEffect, useState } from 'react'
import './BlogCard.css'

interface ParagraphData {
    title: string;
    description: string;
    image: File | null;
    imageUrl: string;
    position: string;
    createdAt: Number | null;
}
interface Blog {
    _id: string;
    title: string;
    description: string;
    image: File | null;
    imageUrl: string;
    paragraphs: ParagraphData[];
    category: string;
}

const BlogCard = (data: Blog) => {
    const { title, imageUrl, _id } = data;

    const handleCardClick = () => {
        if (typeof window !== 'undefined') {
            window.location.href = `/pages/blogpage?blogid=${_id}`;
        }
    };


    return (
        <div className='blogcard' onClick={handleCardClick}>
            <div
                className='blogimg'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></div>
            <p>{title}</p>
        </div>
    );
};

export default BlogCard