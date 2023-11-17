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
        <div className="flex flex-col sm:flex-row justify-between h-screen p-4 pb-16 sm:px-24">
          <div className="flex flex-col justify-center sm:space-y-12 space-y-8 flex-1 sm:pt-0 pt-6">
            <Link href="/pecas/1">
              <div onMouseEnter={() => handleHover("image1")}>
                <h1 className="text-5xl mb-3 font-parag">Peça 1</h1>
                <h4>ESPECIFICAÇÕES DA PEÇA</h4>
              </div>
            </Link>
            <Link href="/pecas/2">
              <div onMouseEnter={() => handleHover("image2")}>
                <h1 className="text-5xl mb-3 font-parag">Peça 2</h1>
                <h4>ESPECIFICAÇÕES DA PEÇA</h4>
              </div>
            </Link>
            <Link href="/pecas/3">
              <div onMouseEnter={() => handleHover("image3")}>
                <h1 className="text-5xl mb-3 font-parag">Peça 3</h1>
                <h4>ESPECIFICAÇÕES DA PEÇA</h4>
              </div>
            </Link>
            <Link href="/pecas/4">
              <div onMouseEnter={() => handleHover("image4")}>
                <h1 className="text-5xl mb-3 font-parag">Peça 4</h1>
                <h4>ESPECIFICAÇÕES DA PEÇA</h4>
              </div>
            </Link>
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
        <div className="flex bg-clr1 text-black font-parag text-4xl pl-4 sm:pl-24 py-28">
          <p>Proin aliquet a urna eget suscipit. Suspendisse ac enim vitae lacus sodales blandit. Aliquam erat volutpat. Fusce eleifend diam non lobortis vulputate. Sed egestas aliquet condimentum. Etiam facilisis lorem sed neque iaculis dictum. Morbi vulputate dictum tellus eu mollis. Maecenas ornare ante nec luctus tempus.</p>
        </div>
      </main>
    </>
  );
}
