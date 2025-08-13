import Image from "next/image";
import React from "react";

const clients = [
  { src: "/logos/1.jpeg", alt: "1" },
  { src: "/logos/2.jpeg", alt: "2" },
  { src: "/logos/3.png", alt: "3" },
  { src: "/logos/4.jpg", alt: "4" },
  { src: "/logos/5.jpg", alt: "5" },
  { src: "/logos/6.jpg", alt: "6" },
  { src: "/logos/7.jpg", alt: "7" },
  { src: "/logos/8.jpg", alt: "8" },
  { src: "/logos/9.jpg", alt: "9" },
  { src: "/logos/10.jpg", alt: "10" },
  { src: "/logos/11.jpg", alt: "11" },
  { src: "/logos/12.jpg", alt: "12" },
  { src: "/logos/13.jpg", alt: "13" },
  { src: "/logos/14.jpg", alt: "14" },
  { src: "/logos/15.jpg", alt: "15" },
  { src: "/logos/16.jpg", alt: "16" },
  { src: "/logos/17.jpg", alt: "17" },
  { src: "/logos/18.jpg", alt: "18" },
  { src: "/logos/19.jpg", alt: "19" },
  { src: "/logos/20.jpg", alt: "20" },
  { src: "/logos/21.jpg", alt: "21" },
  { src: "/logos/22.jpg", alt: "22" },
  { src: "/logos/23.jpg", alt: "23" },
  { src: "/logos/24.jpg", alt: "24" },
  { src: "/logos/25.jpg", alt: "25" },
  { src: "/logos/26.jpg", alt: "26" },
  { src: "/logos/27.jpg", alt: "27" },
  { src: "/logos/28.png", alt: "28" },
  { src: "/logos/29.jpg", alt: "29" },
  { src: "/logos/30.jpg", alt: "30" },
  { src: "/logos/31.png", alt: "31" },
  { src: "/logos/32.png", alt: "32" },
  { src: "/logos/33.png", alt: "33" },
  { src: "/logos/34.png", alt: "34" },
  { src: "/logos/35.png", alt: "35" },
  { src: "/logos/36.png", alt: "36" },
  { src: "/logos/37.png", alt: "37" },
  { src: "/logos/38.png", alt: "38" },
  { src: "/logos/39.png", alt: "39" },
  { src: "/logos/40.png", alt: "40" },
  { src: "/logos/41.png", alt: "41" },
  { src: "/logos/42.png", alt: "42" },
  { src: "/logos/43.png", alt: "43" },
  { src: "/logos/44.png", alt: "44" },
  { src: "/logos/45.png", alt: "45" },
  { src: "/logos/46.png", alt: "46" },
  { src: "/logos/47.png", alt: "47" },
  { src: "/logos/48.png", alt: "48" },
];
const Clients = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-full aspect-[3/2] flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={450} // bigger width
                height={300} // 3:2 aspect ratio
                className="object-contain max-h-44" // bigger max height
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
