"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  { name: "1", role: "Founder & CEO", image: "/team/1.jpg" },
  { name: "2", role: "Business Analyst", image: "/team/12.jpg" },
  { name: "3", role: "Chief Marketing Officer", image: "/team/3.jpg" },
  { name: "wahas", role: "director of projects", image: "/team/4.jpg" },
  { name: "azmath", role: "director", image: "/team/5.jpg" },
  { name: "6", role: "Head of Operations", image: "/team/6.jpg" },
  { name: "Taj", role: "General Mangaer", image: "/team/7.jpg" },
  { name: "mustafa", role: "manager", image: "/team/8.jpg" },
  { name: "9", role: "Front-End Developer", image: "/team/9.jpg" },
  { name: "10", role: "Back-End Developer", image: "/team/10.jpg" },
  { name: "11", role: "QA Specialist", image: "/team/11.jpg" },
  { name: "12", role: "Content Strategist", image: "/team/13.jpg" },
  { name: "13", role: "Digital Marketing Lead", image: "/team/14.jpg" },
  { name: "samreen", role: "HR", image: "/team/15.jpg" },
  { name: "15", role: "Mobile App Developer", image: "/team/16.jpg" },
  { name: "Chandra shekar", role: "finanace manager", image: "/team/17.jpg" },
  { name: "17", role: "Graphic Designer", image: "/team/18.jpg" },
  { name: "18", role: "Social Media Manager", image: "/team/19.jpg" },
  { name: "19", role: "DevOps Engineer", image: "/team/20.jpg" },
  { name: "20", role: "Support Engineer", image: "/team/22.jpg" },
];

export default function Team() {
  return (
    <section className="py-16 px-8 md:px-40 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Meet Our <span className="text-yellow-600">Team</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We’re a group of passionate professionals dedicated to delivering
            excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center space-x-3">
                  {member.socials?.facebook && (
                    <Link
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  )}
                  {member.socials?.twitter && (
                    <Link
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-sky-500 p-2 rounded-full hover:bg-sky-600 transition"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  )}
                  {member.socials?.linkedin && (
                    <Link
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  )}
                  {member.socials?.instagram && (
                    <Link
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-yellow-600">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
