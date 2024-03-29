"use client";
import type { ImageShape } from "../lib/photo_data";
import { Image } from "@chakra-ui/next-js";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";

// TODO: Get larger version of these photos?

interface Props {
  activePhoto: ImageShape | null;
  handleClose: () => void;
  isOpen: boolean;
}

const PhotoModal = (props: Props) => (
  <Modal isOpen={props.isOpen} onClose={props.handleClose} size="xl">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{props.activePhoto?.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {props.activePhoto && (
          <Image
            alt={props.activePhoto.alt}
            placeholder="blur"
            src={props.activePhoto.src}
          />
        )}
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default PhotoModal;
