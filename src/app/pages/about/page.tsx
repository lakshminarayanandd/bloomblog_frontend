"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import './About.css'

export default function About() {
    return (
        <main>
            <Navbar />
            {/* About content for the Bloom Blog website */}
            <div className='aboutContainer'>
                <h1>Welcome to Bloom Blog</h1>
                <p>At Bloom Blog, we embrace the beauty of words and the profound impact they carry. This platform is not just a space; it's a garden where ideas bloom, stories flourish, and voices resonate. Here, we celebrate the art of expression in all its forms.</p>
                <p>Our mission is to provide a nurturing space for writers of every background, experience, and perspective. Whether you're a seasoned wordsmith or just starting your journey, Bloom Blog is where your creativity takes root and grows.</p>
                <p>Join a community passionate about the written word. Share your thoughts, experiences, and reflections. Connect with fellow writers, offer insights, and let the collective wisdom of this vibrant community inspire you.</p>
                <p>Every contribution adds to the rich tapestry of ideas that make Bloom Blog a unique and diverse platform. As you navigate through this garden of words, remember that your voice matters, and your stories have the power to resonate and bloom in the hearts of others.</p>
                <p>So, welcome to Bloom Blog — a place where thoughts become flowers, stories become gardens, and every writer plays a crucial role in making this platform a flourishing haven of creativity.</p>
            </div>
        </main>
    )
}