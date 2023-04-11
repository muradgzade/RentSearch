import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    FormControl,
    FormLabel,
    Input,
    Image
    
    
  } from '@chakra-ui/react'
import { color } from 'framer-motion';


const Modal1 = ( {btntext1,btntext2,btnclass1,btnclass2,title,bodytext,total,modalclass,homemodal,src} ) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>

<Image src={src} className={btnclass1} onClick={onOpen}/>



<Modal  blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent className={modalclass}>
    <ModalHeader>{title}</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
   

        
     
    </ModalBody>
    <Button className={btnclass2}>
          {btntext2}

         </Button>

  
  </ModalContent>
</Modal>



      
    </>
  )
}

export default Modal1
