import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import LandingPage from "./LandingPage";

function ModalPage({isOpen, handleClose}) {
  return (
          <Modal size={'2xl'} isOpen={isOpen} onClose={handleClose} returnFocusOnClose={false}
          trapFocus isCentered blockScrollOnMount closeOnOverlayClick={false}>
            <ModalOverlay bgColor={'rgba(0, 0, 0, 0.9)'}/>
            <ModalContent >
              <ModalHeader ml={8}>Welcome to Our Website</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <LandingPage onClose={handleClose}/>
                {/* <Button colorScheme="blue" ml={8} mt={2} mb={8} onClick={handleClose}>Continue to Main Page</Button> */}
              </ModalBody>
            </ModalContent>
          </Modal>
  )
}

export default ModalPage