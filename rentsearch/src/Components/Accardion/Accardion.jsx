import React from 'react'
import {
    Accordion,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
    AccordionItem,
  } from "@chakra-ui/react";

const Accardion = ({title,text,btnclassName, titleclass,textclass }) => {
  return (
    <Accordion allowToggle>
  
    <AccordionItem  >
      <h2>
        <AccordionButton className={btnclassName}>
          <Box className={titleclass} as="span" flex='1' textAlign='left'>
          {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel className={textclass} pb={4}>
      {text}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  )
}

export default Accardion
