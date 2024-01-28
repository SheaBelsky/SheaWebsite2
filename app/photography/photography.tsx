"use client";
import { Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { Image } from "@chakra-ui/next-js";
import PHOTO_DATA, { type ImageShape } from "../../lib/photo_data";
// Dynamic imports don't work well in Next.js 13. Need to debug this more.
import PhotoModal from "../../components/photo_modal";

const PhotographyComponent = () => {
  const [activePhoto, setActivePhoto] = useState<ImageShape | null>(null);
  const handleClickPhoto = (photo: ImageShape) => {
    setActivePhoto(photo);
  };
  const handleCloseModal = () => {
    setActivePhoto(null);
  };
  return (
    <Fragment>
      <Heading as="h1">Photography</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} marginTop="20px" spacing={10}>
        {Object.values(PHOTO_DATA).map((photo) => (
          <Button
            aria-label={`Open the "${photo.title}" photo in a modal`}
            display="block"
            height="200px"
            key={photo.alt}
            onClick={() => handleClickPhoto(photo)}
            position="relative"
            width="200px"
            _focus={{
              opacity: 0.7
            }}
            _hover={{
              opacity: 0.7
            }}
          >
            <Image
              alt={photo.alt}
              placeholder="blur"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{ height: "100%", objectFit: "cover" }}
              src={photo.src}
            />
          </Button>
        ))}
      </SimpleGrid>
      <PhotoModal
        activePhoto={activePhoto}
        handleClose={handleCloseModal}
        isOpen={!!activePhoto}
      />
    </Fragment>
  );
};

export default PhotographyComponent;
