"use client";
import React from "react";
import Navbar from "./navbar";
import Image from "next/image";

const Peca = ({ title, img }: any) => {
  return (
    <>
      <main className="bg-black text-lg font-extralight">
        <div className="flex w-full pl-4 sm:pl-24 pr-8 sm:pr-24 pt-6 sm:pt-8">
          <Navbar />
        </div>

        <div className="flex flex-col space-y-10 p-4 sm:p-14 sm:px-24 sm:w-2/3 pt-12">
          <h1 className="text-5xl font-tt">{title}</h1>
          <p className="font-parag text-base tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pellentesque blandit sodales. Aliquam semper mi tortor, quis egestas
            risus vehicula in. Donec sit amet convallis nisl, sit amet varius
            lorem. Morbi dignissim eros ac metus tincidunt lacinia. Duis eget
            scelerisque ipsum. Donec gravida eu justo at rhoncus. Quisque mattis
            leo ligula, in fermentum massa bibendum non. Pellentesque tristique
            dui sed risus auctor dignissim. Integer non urna in neque lacinia
            tincidunt. Donec justo libero, efficitur in justo eu, sagittis
            posuere elit. Morbi eros dolor, eleifend sit amet erat vel,
            porttitor consequat lacus. In non tortor tristique, eleifend nulla
            ut, accumsan ligula. Nam consectetur metus nec orci maximus
            interdum. In viverra velit sed dolor blandit ultrices. Nam mollis
            aliquam luctus. Donec iaculis lorem in leo fringilla fringilla.
            Nulla venenatis purus at diam eleifend viverra. Nunc quis est
            iaculis, laoreet turpis et, venenatis purus. Maecenas elit sapien,
            tincidunt ut ipsum eget, elementum commodo ex. Suspendisse ut
            fringilla libero. Quisque sollicitudin est at leo posuere, non
            sodales massa placerat. Sed eleifend dui non neque eleifend, non
            dapibus metus convallis. Aliquam ullamcorper est ut eros consectetur
            venenatis. Quisque sollicitudin nunc nec consequat blandit. Aliquam
            sit amet magna nec diam posuere commodo vehicula ut sapien.
            Pellentesque at lobortis erat. In a metus quam. Integer eleifend
            pharetra lectus, non dignissim lectus. Curabitur commodo libero
            lacinia vehicula euismod. Fusce mauris lacus, blandit ut nisl ac,
            posuere suscipit eros. Nullam elementum venenatis ipsum in
            vulputate. Suspendisse congue mi in scelerisque dictum. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Donec viverra lectus sit amet arcu dignissim, sit
            amet mattis sapien dignissim. Nullam eget est lorem. Cras malesuada
            mollis odio eget rutrum. Cras eget lorem a enim interdum mattis.
            Praesent sed finibus lorem, ut suscipit nibh.
          </p>
          <div className="relative h-screen mt-12 sm:mt-0">
            <Image
              src={img}
              alt="Highlighted"
              fill
              sizes="100"
              className="object-cover transition-opacity duration-700"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Peca;
