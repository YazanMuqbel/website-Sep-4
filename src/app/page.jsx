"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="flex flex-col items-center p-8 font-sans">
      <h1 className="text-4xl font-bold mb-2 text-center">Yazan Muqbel</h1>

      <img
        src="https://ucarecdn.com/901be5e0-5de3-41a7-b39b-baa51bd5409d/"
        alt="Circular profile image of Yazan Muqbel"
        className="w-[150px] h-[150px] rounded-full mb-4"
      />

      <p className="text-lg mb-6 text-center">
        Building my CV on the Internet through writing about my thoughts,
        findings and things I build. Placing small bets towards the good life
      </p>
      <p className="text-lg mb-6 text-center">
        I write on{" "}
        <a
          href="https://substack.com/@yazanmuqbel/p-134636433"
          className="text-blue-600 hover:underline font-medium"
        >
          Substack
        </a>{" "}
        and{" "}
        <a
          href="https://substack.com/@yazanmuqbel/p-134636433"
          className="text-blue-600 hover:underline font-medium"
        >
          Medium
        </a>
      </p>

      <div className="space-y-4 w-full max-w-2xl text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start">
          <a
            href="https://substack.com/@yazanmuqbel/p-134636433"
            className="text-blue-600 hover:underline font-medium"
          >
            The Abundance of Choice, and How it’s Contributing to Your
            Unhappiness.
          </a>
          <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded">
            NEW
          </span>
        </div>

        <div>
          <a
            href="https://yazanmuqbel.gumroad.com/l/xidpk?_gl=1*1uar40u*_ga*NTA0ODEyNjEyLjE3MjMxOTMxMzQ.*_ga_6LJN6D94N6*MTcyNTA0NTQ4My44LjEuMTcyNTA0NTY1NC4wLjAuMA.."
            className="text-blue-600 hover:underline font-medium"
          >
            How I Made my First $1 Online (and How You Can Do it too)
          </a>
        </div>

        <div>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            No Meetings, No Deadlines, No Full-Time Employees
          </a>
          <span className="ml-2 text-gray-500">2021</span>
        </div>

        <div>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Reflecting on My Failure to Build a Billion-Dollar Company
          </a>
          <span className="ml-2 text-gray-500">2019</span>
        </div>

        <div>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Across the Border
          </a>
          <span className="ml-2 text-gray-500">2018</span>
        </div>
      </div>

      <p className="text-lg mt-8 mb-4 text-center">Painter</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="https://www.instagram.com/p/Ciw7ayJghRA/">
          <img
            src="https://ucarecdn.com/59d7dd35-2151-4e22-9352-dd44d6925a0f/"
            alt="Painting of electronic devices in a dimly lit room"
            className="w-full h-auto"
          />
        </a>
        <a href="https://ucarecdn.com/901be5e0-5de3-41a7-b39b-baa51bd5409d/">
          <img
            src="https://ucarecdn.com/901be5e0-5de3-41a7-b39b-baa51bd5409d/"
            alt="Landscape painting with rocky terrain and vibrant vegetation"
            className="w-full h-auto"
          />
        </a>
        <a href="https://ucarecdn.com/901be5e0-5de3-41a7-b39b-baa51bd5409d/">
          <img
            src="https://ucarecdn.com/901be5e0-5de3-41a7-b39b-baa51bd5409d/"
            alt="Portrait painting of a person with long dark hair"
            className="w-full h-auto"
          />
        </a>
      </div>

      <div className="mt-8 w-full text-center mb-[100px]">
        <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/yazanmuqbel/"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://x.com/muqbel_yazan"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fas fa-rss fa-2x"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;