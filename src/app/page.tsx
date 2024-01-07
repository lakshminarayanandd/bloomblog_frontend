"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import HomeSlider from '@/components/HomeSlider/HomeSlider'
import CategoriesSlider from '@/components/Categories/CategoriesSlider'
import BlogsSlider from '@/components/blogcards/BlogsSlider'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSlider />
      <CategoriesSlider />
      <BlogsSlider />
      <Footer />
    </main>
  )
}