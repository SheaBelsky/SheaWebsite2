import { Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { Fragment, useCallback, useState } from "react";
import PHOTO_DATA, { ImageShape } from "../../lib/photo_data";
import dynamic from "next/dynamic";
import Image from "next/image";

const DynamicPhotoModal = dynamic(import("../photo_modal"));

const PhotographyComponent = () => {
  const [activePhoto, setActivePhoto] = useState<ImageShape | null>(null);
  const handleClickPhoto = useCallback((photo: ImageShape) => {
    setActivePhoto(photo);
  }, []);
  const handleCloseModal = useCallback(() => {
    setActivePhoto(null);
  }, []);
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
              layout="fill"
              objectFit="cover"
              priority
              src={photo.src}
            />
          </Button>
        ))}
      </SimpleGrid>
      <DynamicPhotoModal
        activePhoto={activePhoto}
        handleClose={handleCloseModal}
        isOpen={!!activePhoto}
      />
    </Fragment>
  );
};

export default PhotographyComponent;
