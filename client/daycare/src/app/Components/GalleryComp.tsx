import Gallery from "../Components/Gallery";

export default function GalleryComp() {
  const galleryItems = [
    {
      imageUrl: "/images/gal1.jpg",
      title: "Fun Activities",
    },
    {
      imageUrl: "/images/gal2.jpg",
      title: "Outdoor Play",
    },
    {
      imageUrl: "/images/gal3.jpeg",
      title: "Art & Creativity",
    },
    {
      imageUrl: "/images/gal4.jpeg",
      title: "Learning Time",
    },
    {
      imageUrl: "/images/gal5.avif",
      title: "Emotional Support",
    },
  ];

  return (
    <>
      <Gallery items={galleryItems} />
    </>
  );
}
