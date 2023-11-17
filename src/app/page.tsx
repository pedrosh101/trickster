"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";

interface Images {
  [key: string]: string;
}

const images: Images = {
  image1: "https://i.imgur.com/24T8W4e.jpg",
  image2: "https://i.imgur.com/5Pqfobq.jpg",
  image3: "https://i.imgur.com/OJwAXYW.jpg",
  image4: "https://i.imgur.com/bN6kmnc.jpg",
};

export default function Home() {
  const [highlightedImage, setHighlightedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (image: string) => {
    setHighlightedImage(images[image]);
    setIsHovered(true);
    handleMouseLeave();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <main className="bg-black text-lg font-extralight">
        <div className="flex w-full pl-4 sm:pl-24 pr-8 sm:pr-24 pt-6 sm:pt-8">
          <Navbar />
        </div>
        <div className="flex flex-col sm:flex-row justify-between h-screen p-4 sm:px-24">
          <div className="flex flex-col justify-center sm:space-y-12 space-y-8 flex-1 sm:pt-0 pt-6">
            <Link href="/pecas/1">
              <div
                className="cursor-pointer"
                onMouseEnter={() => handleHover("image1")}
              >
                <h1 className="text-5xl mb-2 font-bembo">Peça 1</h1>
                <h4>ESPECIFICAÇÕES DA PEÇA</h4>
              </div>
            </Link>
            <div
              className="cursor-pointer"
              onMouseEnter={() => handleHover("image2")}
            >
              <h1 className="text-5xl mb-2 font-bembo ">Peça 2</h1>
              <h4>ESPECIFICAÇÕES DA PEÇA</h4>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => handleHover("image3")}
            >
              <h1 className="text-5xl mb-2 font-bembo ">Peça 3</h1>
              <h4>ESPECIFICAÇÕES DA PEÇA</h4>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => handleHover("image4")}
            >
              <h1 className="text-5xl mb-2 font-bembo ">Peça 4</h1>
              <h4>ESPECIFICAÇÕES DA PEÇA</h4>
            </div>
          </div>

          <div
            className="flex-2 relative sm:w-2/3 h-full mt-12 sm:mt-0"
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={highlightedImage || images.image1}
              alt="Highlighted"
              fill
              sizes="100"
              className={`object-cover transition-opacity duration-700 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
      </main>
    </>
  );
}
