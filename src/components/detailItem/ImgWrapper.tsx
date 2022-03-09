import { useEffect, useState } from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ImagesGallery = ({ id }: { id: number }) => {
  const [images, setImages] = useState<any>("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://shoestory-server.herokuapp.com/photos/${id}`, {
      signal,
    })
      .then((res) => res.json())
      .then((images) => setImages(images));
    return () => controller.abort();
  }, []);

  const imagesEntries = Object.values<any>(images)?.map((img: string) => {
    return {
      original: img,
      thumbnail: img,
    };
  });

  imagesEntries.shift();

  return (
    <>
      {images ? (
        <ImageGallery
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={false}
          items={imagesEntries}
          showNav={false}
        />
      ) : null}
    </>
  );
};

export default ImagesGallery;
