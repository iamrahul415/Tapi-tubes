import React, { useState } from "react";

const pressReleases = [
  {
    year: 2025,
    items: [
      {
        date: "Delhi / Mumbai | 25 July, 2025",
        title:
          "Metal Fairs 2024 Showcases Strong Industry Growth with Impressive Turnout, Highlighting Positive Trends and Developments",
        description:
          "Mumbai, December 2024: The four renowned metal trade fairs—wire India, Tube India, METEC India, and India Essen Welding & Cutting - successfully concluded at the Bombay Exhibition Center from 27-29 November, after a two-year hiatus. The enthusiasm displayed by industry participants was an encouraging sign of the sector’s recovery and growth. Organized by Messe Düsseldorf India, these fairs have long been a prominent gathering for professionals from the wire, cable, tube, metallurgical processes, cutting, and welding industries in both India and internationally. This year, the event garnered a significant response, with 21,086 attendees visiting to witness the latest innovations and trends in the metal industry. The high turnout was a testament to the enduring importance of these fairs in facilitating business connections, showcasing technological advancements, and highlighting industry trends.",
        img: "/assets/Tapi1Img.png",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        date: "Delhi / Mumbai | 25 July, 2025",
        title:
          "Metal Fairs 2024 Showcases Strong Industry Growth with Impressive Turnout, Highlighting Positive Trends and Developments",
        description:
          "Mumbai, December 2024: The four renowned metal trade fairs—wire India, Tube India, METEC India, and India Essen Welding & Cutting - successfully concluded at the Bombay Exhibition Center from 27-29 November, after a two-year hiatus. The enthusiasm displayed by industry participants was an encouraging sign of the sector’s recovery and growth. Organized by Messe Düsseldorf India, these fairs have long been a prominent gathering for professionals from the wire, cable, tube, metallurgical processes, cutting, and welding industries in both India and internationally. This year, the event garnered a significant response, with 21,086 attendees visiting to witness the latest innovations and trends in the metal industry. The high turnout was a testament to the enduring importance of these fairs in facilitating business connections, showcasing technological advancements, and highlighting industry trends.",
        img: "/assets/Tapi2Img.png",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        date: "Delhi / Mumbai | 25 July, 2025",
        title:
          "Metal Fairs 2024 Showcases Strong Industry Growth with Impressive Turnout, Highlighting Positive Trends and Developments",
        description:
          "Mumbai, December 2024: The four renowned metal trade fairs—wire India, Tube India, METEC India, and India Essen Welding & Cutting - successfully concluded at the Bombay Exhibition Center from 27-29 November, after a two-year hiatus. The enthusiasm displayed by industry participants was an encouraging sign of the sector’s recovery and growth. Organized by Messe Düsseldorf India, these fairs have long been a prominent gathering for professionals from the wire, cable, tube, metallurgical processes, cutting, and welding industries in both India and internationally. This year, the event garnered a significant response, with 21,086 attendees visiting to witness the latest innovations and trends in the metal industry. The high turnout was a testament to the enduring importance of these fairs in facilitating business connections, showcasing technological advancements, and highlighting industry trends.",
        img: "/assets/Tapi3Img.png",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        date: "Delhi / Mumbai | 25 July, 2025",
        title:
          "Metal Fairs 2024 Showcases Strong Industry Growth with Impressive Turnout, Highlighting Positive Trends and Developments",
        description:
          "Mumbai, December 2024: The four renowned metal trade fairs—wire India, Tube India, METEC India, and India Essen Welding & Cutting - successfully concluded at the Bombay Exhibition Center from 27-29 November, after a two-year hiatus. The enthusiasm displayed by industry participants was an encouraging sign of the sector’s recovery and growth. Organized by Messe Düsseldorf India, these fairs have long been a prominent gathering for professionals from the wire, cable, tube, metallurgical processes, cutting, and welding industries in both India and internationally. This year, the event garnered a significant response, with 21,086 attendees visiting to witness the latest innovations and trends in the metal industry. The high turnout was a testament to the enduring importance of these fairs in facilitating business connections, showcasing technological advancements, and highlighting industry trends.",
        img: "/assets/Tapi4Img.png",
      },
    ],
  },
];

const PressReleaseMain = () => {
  const [overlay, setOverlay] = useState({ open: false, item: null });

  const openOverlay = (item) => setOverlay({ open: true, item });
  const closeOverlay = () => setOverlay({ open: false, item: null });

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Middle timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-600 -translate-x-1/2"></div>

          {pressReleases.map((yearBlock, index) => {
            const isOdd = index % 2 === 0;

            return (
              <React.Fragment key={yearBlock.year}>
                {/* Left column */}
                <div className={`flex justify-end ${isOdd ? "mt-0" : "mt-16"}`}>
                  {isOdd && (
                    <div className="bg-black p-6 space-y-4 w-full md:max-w-md">
                      <p className="text-blue-400 font-medium">
                        {yearBlock.items[0].date}
                      </p>
                      <p className="text-sm md:text-base leading-relaxed text-gray-300">
                        {yearBlock.items[0].title}
                      </p>
                      <img
                        src={yearBlock.items[0].img}
                        alt="Press release"
                        className="w-full bg-[#565050b4] cursor-pointer"
                        onClick={() => openOverlay(yearBlock.items[0])}
                      />
                    </div>
                  )}
                </div>

                {/* Middle column (year) */}
                <div className="flex items-start justify-center relative">
                  <span className="bg-black px-3 py-1 font-bold text-xl md:text-3xl">
                    {yearBlock.year}
                  </span>
                </div>

                {/* Right column */}
                <div
                  className={`flex justify-start ${!isOdd ? "mt-0" : "mt-16"}`}
                >
                  {!isOdd && (
                    <div className="bg-black p-6 space-y-4 w-full md:max-w-md">
                      <p className="text-blue-400 font-medium">
                        {yearBlock.items[0].date}
                      </p>
                      <p className="text-sm md:text-base leading-relaxed text-gray-300">
                        {yearBlock.items[0].title}
                      </p>
                      <img
                        src={yearBlock.items[0].img}
                        alt="Press release"
                        className="w-full bg-[#565050b4] cursor-pointer"
                        onClick={() => openOverlay(yearBlock.items[0])}
                      />
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Overlay */}
      {overlay.open && overlay.item && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
          <div className="bg-blue-900/90 max-w-6xl w-full flex flex-col md:flex-row relative rounded-lg overflow-hidden shadow-lg">
            {/* Left side: Image, centered vertically */}
            <div className="md:w-1/2 w-full flex items-center justify-center p-4">
              <img
                src={overlay.item.img}
                alt="Press release"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right side: Details */}
            <div className="md:w-1/2 w-full p-10 relative text-white flex flex-col justify-start">
              {/* Close button at top-right */}
              <button
                onClick={closeOverlay}
                className="absolute top-4 right-4 text-[#dfce7c] px-4 py-2 font-normal"
              >
                CLOSE
              </button>

              <div className="mt-8 md:mt-0 flex flex-col h-[60vh] md:h-[70vh] relative">
                <h2 className="text-2xl md:text-4xl font-semibold font-poppins mb-2">
                  {overlay.item.title}
                </h2>
                <p className="text-[#dfce7c] mb-4">{overlay.item.date}</p>

                {/* Scrollable description */}
                {/* Scrollable description */}
                <div className="overflow-y-auto text-[#ffffff] flex-1 relative custom-scroll">
                  <p className="mb-4">{overlay.item.description}</p>
                  {/* Add more content if needed to enable scrolling */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PressReleaseMain;
