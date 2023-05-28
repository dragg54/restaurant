import React from 'react'
import { Box, FooterWrapper, Heading, List,  } from './Footer'

const index = () => {
  return (
   <FooterWrapper>
    <Box>
        <Heading>Help</Heading>
        <ul >
            <List>Delivery</List>
            <List>Payment</List>
            <List>FAQ</List>
            <List>Accessibility</List>
        </ul>
    </Box>
    <Box>
        <Heading>Contact Us</Heading>
    </Box>
    <Box>
        <Heading>Stay Connected</Heading>
    </Box>
    </ FooterWrapper>
  )
}

export default index