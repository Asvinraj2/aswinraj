import React from 'react'
import Title from '../layouts/Title'
import {imagify, projectOne, projectTwo, freshbite, imagify2, portfolio, chattingApp, geminiClone2,todo } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-10 sm:py-16 lg:py-20 border-b-[1px] border-b-black px-4 sm:px-6 lg:px-8"
    >
      <div className="text-[var(--color-design)] flex justify-center items-center text-center mb-8 sm:mb-12 lg:mb-16">
        <Title 
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto">
        <ProjectsCard
          title="Imagify – AI Image Generator"
          des="A clean and fast AI web app that turns text into images using the ClipDrop API. Built for creativity with an elegant, user-friendly design."
          src={imagify2}
          githubUrl="https://github.com/Asvinraj2/Pixify"
          liveUrl="https://pixify-five.vercel.app/"
        />
        <ProjectsCard
          title="My Portfolio Website"
          des="A modern, responsive portfolio showcasing my projects, skills, and creativity as a developer. Built to reflect clean design, smooth navigation, and strong attention to detail."
          src={portfolio}
          githubUrl="https://github.com/Asvinraj2/PORTFOLIO"
          liveUrl="https://aswin-raj-portfolio.netlify.app/#"
        />
        <ProjectsCard
          title="Real-Time Chat App"
          des="A fast and interactive chat application built using Socket.io, enabling real-time messaging with instant user communication and live updates."
          src={chattingApp}
          githubUrl="https://github.com/Asvinraj2/CHAT-APP"
          liveUrl="https://chat-app-omega-seven-14.vercel.app/login"
        />
        <ProjectsCard
          title="Gemini Clone App"
          des="An AI-powered assistant web app inspired by Google Gemini, designed to handle text-based queries with smart, conversational responses using advanced language models."
          src={geminiClone2}
          githubUrl="https://github.com/Asvinraj2/gemini-clone"
          liveUrl="https://gemini-clone-by-aswin.vercel.app/"
        />
        <ProjectsCard
          title="FreshBite – Food Ordering Landing Page"
          des="A responsive food ordering page using HTML, CSS, and JavaScript with cart, smooth animations, and key sections—ideal for restaurants and delivery services."
          src={freshbite}
          githubUrl="https://github.com/Asvinraj2/FoodieLanding"
          liveUrl="https://foodielanding.netlify.app/"
        />
        <ProjectsCard
          title="Task Manager App"
          des="A clean and responsive Task Manager Web App to add, complete, delete, and filter tasks by status. Includes dark/light mode for a better user experience and helps users stay organized with ease."
          src={todo}
          githubUrl="https://github.com/Asvinraj2/TASK-MANAGER"
          liveUrl="https://taasskkmanager.netlify.app/"
        />
        
      </div>
    </section>
  );
}

export default Projects