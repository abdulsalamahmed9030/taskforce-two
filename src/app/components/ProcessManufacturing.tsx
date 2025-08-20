"use client";

import { motion } from "framer-motion";
import React from "react";

type Step = {
  id: number;
  label: string;
  x: number; // SVG coordinate system (0–1200)
  y: number; // SVG coordinate system (0–600)
  side?: "left" | "right"; // which side to place the label
};

const STEPS: Step[] = [
  { id: 1, label: "Approval of Material", x: 250, y: 330, side: "left" },
  { id: 2, label: "Measurements as requirement", x: 420, y: 210, side: "left" },
  { id: 3, label: "Submission of Shop Drawings", x: 560, y: 290, side: "left" },
  {
    id: 4,
    label: "Procurement of material as per approved",
    x: 740,
    y: 190,
    side: "right",
  },
  {
    id: 5,
    label: "Quality Inspection of raw material",
    x: 900,
    y: 330,
    side: "right",
  },
  {
    id: 6,
    label: "Production as per approval/Technical Specs",
    x: 820,
    y: 420,
    side: "right",
  },
  {
    id: 7,
    label: "Quality Inspection of semi-finished product",
    x: 950,
    y: 520,
    side: "right",
  },
  { id: 8, label: "Final Finishing", x: 720, y: 520, side: "right" },
  {
    id: 9,
    label: "Packaging and Transportation",
    x: 620,
    y: 460,
    side: "left",
  },
  {
    id: 10,
    label: "Final Assembly at the site location",
    x: 480,
    y: 560,
    side: "left",
  },
];

// Build a polyline string from the points
const PATH_POINTS = STEPS.map((s) => `${s.x},${s.y}`).join(" ");

// Animation configs
const duration = 2.2; // seconds for the path draw
const circleStagger = 0.12;

export default function ProcessManufacturing() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 text-center">
          <h2 className="text-3xl md:text-5xl text-gray-800 text-center">
            <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">
              {" "}
              Standard Operating Process –
            </span>
            <span className="text-black"> Manufacturing</span>
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center pt-5">
            Follow the journey from material approval to final on-site assembly.
          </h3>
        </header>

        {/* Aspect box for responsive SVG */}
        <div className="relative w-full">
          <div className="relative w-full" style={{ aspectRatio: "12 / 6" }}>
            <motion.svg
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 h-full w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Soft background accent (optional) */}
              <defs>
                <filter
                  id="softShadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="6"
                    floodOpacity="0.15"
                  />
                </filter>
              </defs>

              {/* Drawn Path */}
              <motion.polyline
                points={PATH_POINTS}
                fill="none"
                stroke="#c28b2c" // Tailwind red-500
                strokeWidth={16}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#softShadow)"
                variants={{
                  hidden: { pathLength: 0 },
                  visible: {
                    pathLength: 1,
                    transition: { duration, ease: "easeInOut" },
                  },
                }}
              />

              {/* Step circles + numbers */}
              {STEPS.map((s, i) => (
                <g key={s.id}>
                  <motion.circle
                    cx={s.x}
                    cy={s.y}
                    r={26}
                    fill="#ffffff"
                    stroke="#e6f0ef"
                    strokeWidth={12}
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: duration + i * circleStagger,
                          type: "spring",
                          stiffness: 320,
                          damping: 18,
                        },
                      },
                    }}
                  />
                  <motion.text
                    x={s.x}
                    y={s.y + 7}
                    textAnchor="middle"
                    className="select-none"
                    style={{
                      fontWeight: 800,
                      fontFamily: "ui-sans-serif, system-ui",
                      fontSize: 18,
                    }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delay: duration + i * circleStagger + 0.05,
                        },
                      },
                    }}
                  >
                    {s.id}
                  </motion.text>
                </g>
              ))}

              {/* Labels */}
              {STEPS.map((s, i) => {
  const dx = s.side === 'right' ? 60 : -60;
  const anchor = s.side === 'right' ? 'start' : 'end';
  const labelDelay = duration + i * circleStagger + 0.15;

  // Special case for step 3 & 8 → put label below circle
  const isBelow = s.id === 3 || s.id === 8;

  return (
    <motion.g
      key={`label-${s.id}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: labelDelay, duration: 0.4, ease: 'easeOut' }}
    >
      {isBelow ? (
        <>
          {/* Background box below the circle */}
          <rect
            x={s.x - 110} // center rect under circle
            y={s.y + 35}
            width={220}
            height={34}
            rx={6}
            className="fill-amber-50"
            stroke="#d97706"
            strokeWidth={0.8}
          />
          <text
            x={s.x}
            y={s.y + 57} // aligned vertically inside box
            textAnchor="middle"
            className="fill-amber-900"
            style={{ fontSize: 14, fontWeight: 600, fontFamily: 'ui-sans-serif, system-ui' }}
          >
            {s.label}
          </text>
        </>
      ) : (
        <>
          {/* Default left/right labels */}
          <rect
            x={s.x + dx - (s.side === 'right' ? 0 : 220)}
            y={s.y - 20}
            width={220}
            height={34}
            rx={6}
            className="fill-amber-50"
            stroke="#d97706"
            strokeWidth={0.8}
          />
          <text
            x={s.x + dx}
            y={s.y + 5}
            textAnchor={anchor}
            className="fill-amber-900"
            style={{ fontSize: 14, fontWeight: 600, fontFamily: 'ui-sans-serif, system-ui' }}
          >
            {s.label}
          </text>
        </>
      )}
    </motion.g>
  );
})}

            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
}
