"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
const Gallery = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="py-16 text-center">
      <h2 className="text-center text-2xl font-semibold">
        Poolscapes Showcase
      </h2>
      <h3 className="text-xl">
        Explore Our Portfolio of Exquisite Miami Pool Designs
      </h3>

      <div className="w-full px-16 mt-10">
        <Carousel
          plugins={[plugin.current]}
          className="w-full m-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {data.map((item, index) => {
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src={"/image.jpg"}
                    alt="img"
                    width={1280}
                    height={1280}
                    className="rounded shadow-md"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center mt-5">
        {" "}
        <Link
          href={"/contact"}
          className="px-8 py-2  text-sky-950 rounded flex items-center w-fit gap-3 "
        >
          Explore More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.6}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
