import React, { useState, useRef } from "react";
import style from "../../components/Styles/HomeCarouselMobile.module.css";
import sacEnd from "../../assets/home/LV_Personalization_WW_HP_Services_Push_1104_DII.jpg";
import cadeauxEnd from "../../assets/home/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg";
import serviceEnd from "../../assets/home/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg";

export default function HomeCarouselMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const items = [
    {
      img: sacEnd,
      title: "Personnalisation",
      links: [
        { href: "#", label: "Explorer" }
      ]
    },
    {
      img: cadeauxEnd,
      title: "L'Art d'offrir",
      links: [
        { href: "#", label: "Pour Elle" },
        { href: "#", label: "Pour Lui", variant: 'secondary' }
      ]
    },
    {
      img: serviceEnd,
      title: "Services",
      links: [
        { href: "#", label: "Nous contacter" }
      ]
    },
  ];

  const handleScroll = () => {
    const index = Math.round(
      carouselRef.current.scrollLeft / carouselRef.current.clientWidth
    );
    setActiveIndex(index);
  };

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.clientWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className={style.carouselContainer}>
      <h1 className={style.EndTitle}>Les Services Louis Vuitton</h1>
      <h2 className={style.carouselText}>
        Louis Vuitton offre un emballage signature pour <br />
        toute commande, présentée dans les boîtes iconiques de la Maison.
      </h2>

      <div
        className={style.carousel}
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <div className={style.carouselItem} key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <div className={style.carouselLinksRow}>
              {item.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={link.variant === 'secondary' ? style.carouselLinkSecondary : style.carouselLink}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={style.dots}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${
              activeIndex === index ? style.active : ""
            }`}
            onClick={() => scrollToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}