"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval;

export default function Newsroom({ offset, scaleFactor }) {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;

  // 📰 Static News Data
  const newsData = {
    2024: [
      {
        id: 1,
        content:
          "Tapi Tubes is excited to announce a significant expansion of its partnership network, aiming to accelerate the transition toward more sustainable steel manufacturing...",
        name: "Mumbai",
        designation: "September 2024",
      },
      {
        id: 2,
        content:
          "Tapi Tubes has introduced a new line of premium-grade tubes, setting a new standard for quality and performance...",
        name: "Delhi",
        designation: "August 2024",
      },
      {
        id: 3,
        content:
          "Tapi Tubes, with a strong presence in the Bangalore region, is expanding its partnership network to spearhead new sustainable steel manufacturing initiatives...",
        name: "Bangalore",
        designation: "March 2024",
      },
    ],
    2025: [
      {
        id: 4,
        content:
          "Tapi Tubes has introduced a new line of premium-grade tubes, setting a new standard for quality and performance...",
        name: "Delhi",
        designation: "February 2025",
      },
      {
        id: 5,
        content:
          "Tapi Tubes is excited to announce a significant expansion of its partnership network, aiming to accelerate the transition toward more sustainable steel manufacturing...",
        name: "Mumbai",
        designation: "June 2025",
      },
      {
        id: 6,
        content:
          "Tapi Tubes, with a strong presence in the Bangalore region, is expanding its partnership network to spearhead new sustainable steel manufacturing initiatives...",
        name: "Bangalore",
        designation: "October 2025",
      },
    ],
  };

  // 🔹 Create one card per year
  const yearCards = Object.entries(newsData).map(([year, articles]) => ({
    year,
    articles,
  }));

  const [cards, setCards] = useState(yearCards);

  useEffect(() => {
    if (cards.length === 0) return;
    startFlipping();
    return () => clearInterval(interval);
  }, [cards]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()); // rotate cards
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center p-5 md:p-10">
      {/* Header Section */}
      <div className="w-full max-w-6xl flex items-center justify-center mb-2 md:mb-12">
        <h1 className="text-[#405FFC] text-4xl md:text-4xl font-normal font-poppins tracking-wide">
          NEWSROOM
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="relative 
                        h-[28rem] w-[20rem]       /* 📱 Mobile */
                        md:h-[22rem] md:w-[28rem] /* 💻 Tablet */
                        lg:h-[36rem] lg:w-[52rem]">
          {cards.map((card, index) => (
            <motion.div
              key={card.year}
              className="absolute bg-black 
                         h-full w-full 
                         rounded-3xl p-6 md:p-8 
                         shadow-xl border border-gray-800 shadow-white/[0.1] 
                         flex flex-col"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
            >
              {/* Year at Top Center */}
              <div className="w-full flex justify-center">
                <p className="text-[#405FFC] text-xl md:text-4xl font-bold mb-4">
                  {card.year}
                </p>
              </div>

              {/* Articles inside the card */}
              <div className="flex-1 overflow-y-auto space-y-4">
                {card.articles.map((article) => (
                  <div
                    key={article.id}
                    className="border-b border-blue-700 pb-3 last:border-b-0"
                  >
                    <p className="text-white text-sm md:text-lg leading-relaxed text-justify">
                      {article.content}
                    </p>
                    <div className="flex justify-end mt-2">
                      <div className="text-right">
                        <p className="text-white font-medium text-xs md:text-base">
                          {article.name}
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm">
                          {article.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
