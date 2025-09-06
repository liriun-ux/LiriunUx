
import Image from "next/image";

const images = [
  "/img/phones/tekken8.png",
    "/img/tkk/tkk.webp",
  "/img/tkk/tkk1.webp",
  "/img/tkk/tkk2.webp",
  "/img/tkk/tkk3.webp",
  "/img/tkk/tkk4.jpg",
  "/img/tkk/tkk5.jpg",
  "/img/tkk/tkk6.webp",
  "/img/tkk/tkk7.webp",
  "/img/tkk/tkk8.jpg",
  "/img/tkk/tkk9.jpg",
  "/img/phones/tekken8.png",
    "/img/tkk/tkk.webp",
  "/img/tkk/tkk1.webp",
  "/img/tkk/tkk2.webp",
  "/img/tkk/tkk3.webp",
];

export default function Slider() {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {images.concat(images).map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Imagen ${index}`}
            width={200}
            height={50}
          />
        ))}
      </div>
    </div>
  );
}
