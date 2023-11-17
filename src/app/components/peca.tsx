"use client";
import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import Link from "next/link";

const Peca = ({ title, img, classificacao }: any) => {
  return (
    <>
      <main className="bg-black text-lg font-extralight">
        <div className="flex w-full pl-4 sm:pl-24 pr-8 sm:pr-24 pt-6 sm:pt-8">
          <Navbar />
        </div>

        <div className="flex flex-col space-y-10 p-4 sm:p-14 sm:px-24 sm:w-2/3 pt-12">
          <h1 className="text-5xl font-tt">{title}</h1>

          <div className="bg-white p-px my-4 w-1/2"></div>
          <p className="font-parag text-sm  tracking-wide sm:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pellentesque blandit sodales. Aliquam semper mi tortor, quis egestas
            risus vehicula in. Donec sit amet convallis nisl, sit amet varius
            lorem. Morbi dignissim eros ac metus tincidunt lacinia. Duis eget
            scelerisque ipsum. Donec gravida eu justo at rhoncus. Quisque mattis
            leo ligula, in fermentum massa bibendum non. Pellentesque tristique
            dui sed risus auctor dignissim. Integer non urna in neque lacinia
            tincidunt. Donec justo libero, efficitur in justo eu, sagittis
            posuere elit.
          </p>
          <div>
            <p>Classificação</p>
            <p className="font-parag text-sm  tracking-wide sm:w-1/2">
              {classificacao}
            </p>
          </div>
          <Link href="https://wa.me/5531991398356" target="_blank">
            <div className="flex w-fit font-parag text-black bg-neutral-200 hover:bg-emerald-400 px-2">
              <h2>INFORMAÇÕES E RESERVAS</h2>
            </div>
          </Link>
          <div className="relative h-72 mt-12 sm:mt-0 w-96">
            <Image
              src={img}
              alt="Highlighted"
              fill
              className="object-contain transition-opacity duration-700"
            />
          </div>
        </div>
        <div className="flex justify-center bg-neutral-200 text-black font-parag text-sm py-0.5">
          <p>© 2023 Trupe Trickster</p>
        </div>
      </main>
    </>
  );
};

export default Peca;
