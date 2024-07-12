"use client";

import { Carousel } from "flowbite-react";

export function Header() {
  return (
    <div className=" h-56  mb-5 sm:h-64 xl:h-48 2xl:h-96">
      <Carousel
      >
        <div className="flex  rounded-lg  h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white">
          <img
            className="w-screen rounded-lg"
            src="https://images.olx.com.pk/thumbnails/461235937-800x600.webp"
            alt=""
          />
        </div>
        <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white">
          <img
            className="w-screen rounded-lg"
            src="https://images.olx.com.pk/thumbnails/461235937-800x600.webp"
            alt=""
          />
        </div>
        {/* <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div> */}
      </Carousel>
    </div>
  );
}
