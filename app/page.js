"use client"
import React, { useState } from 'react'
import Header from "@/Components/Header"
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import Skills from '@/Components/Skills'

const page = () => {  
  return (
    <>
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
    </>
  )
}

export default page