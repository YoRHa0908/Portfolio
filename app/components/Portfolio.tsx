"use client";

import { useState } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    category: "mobile",
    image: [
      "/portfolio/food-mobile-1.png",
      "/portfolio/food-mobile-2.png",
    ],
    link:"/portfolio/1"

  },
  {
    id: 2,
    title: "Kindertales(React)",
    category: "web",
    image: [
      "/portfolio/kinder1.png",
      "/portfolio/kinder2.png",
      "/portfolio/kinder3.png",
      "/portfolio/kinder4.png",
      "/portfolio/kinder5.png",
      "/portfolio/kinder6.png",
    ],
    link:"https://www.kindertales.com/"
  },
  {
    id: 3,
    title: "CONSTRUKTED",
    category: "web",
    image: [
      "/portfolio/const1.png",
      "/portfolio/const2.png",
      "/portfolio/const3.png",
      "/portfolio/const4.png",
      "/portfolio/const5.png",
      "/portfolio/const6.png",
    ],
    link:"https://construkted.com/"
  },
  {
    id: 4,
    title: "AI-Powered Chat Application",
    category: "mobile",
    image: [
      "/portfolio/chatApp-1.png",
      "/portfolio/chatApp-2.png",
      "/portfolio/chatApp-3.png",
    ],
    link:"/portfolio/4"
  },
  {
    id: 5,
    title: "Hudl",
    category: "web",
    image: [
      "/portfolio/hudl1.jpg",
      "/portfolio/hudl2.png",
      "/portfolio/hudl3.png",
      "/portfolio/hudl4.png",
      "/portfolio/hudl5.png",
      "/portfolio/hudl6.png",
    ],
    link:"https://auth.balltime.com/"
  },
  {
    id: 6,
    title: "NextJs + NodeJs + AI",
    category: "web",
    image: [
      "/portfolio/myaiwiz1.png",
      "/portfolio/myaiwiz2.png",
      "/portfolio/myaiwiz3.png",
      "/portfolio/myaiwiz4.png",
      "/portfolio/myaiwiz5.png",
    ],
    link:"http://myaiwiz.com/"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  const openGallery = (images: string[]) => {
    setSelectedImages(images);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setSelectedImages(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (!selectedImages) return;
    setCurrentIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedImages) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section-title">Portfolio</h2>

      {/* FILTER */}
      <div className="portfolio-filter">
        {["all", "web", "mobile"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat === "mobile" ? "Mobile App" : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="portfolio-grid">
        {filtered.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <span className="badge">
              {item.category === "mobile" ? "Mobile App" : "Web"}
            </span>

            <Image
              src={item.image[0]} // 
              alt={item.title}
              width={800}
              height={500}
              className="portfolio-img"
            />

            <div className="overlay-portfolio">
              <div className="overlay-portfolio-icons">
                <div
                  className="icon-btn"
                  onClick={() => openGallery(item.image)}
                >
                  <Search size={17} />
                </div>


                <Link href={item.link} style = {{textDecoration: "none"}}>
                  <div className="icon-btn">
                    🔗
                  </div>
                </Link>
              </div>

              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* GALLERY MODAL */}
      {selectedImages && (
        <div className="modal" onClick={closeGallery}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <X className="close-btn" size={30} onClick={closeGallery} />

            <ChevronLeft
              className="nav-btn left"
              size={40}
              onClick={prevImage}
            />

            <Image
              src={selectedImages[currentIndex]}
              alt="Preview"
              width={1200}
              height={800}
              className="modal-img"
            />

            <ChevronRight
              className="nav-btn right"
              size={40}
              onClick={nextImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}