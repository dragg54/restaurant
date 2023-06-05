import React from 'react'
import { Box, FooterWrapper, Heading, List,  } from './Footer'
import Phone from '../../../commons/icons/Phone'
import Email from '../../../commons/icons/Email'
import LocationIcon from '../../../commons/icons/Location'
import FaceBook from '../../../commons/icons/FaceBook'
import Instagram from '../../../commons/icons/Instagram'
import Twitter from '../../../commons/icons/Twitter'


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
        <List>
            <Phone /> +123 456 789
        </List>
        <List>
            <Email /> beccabakehouse@yahoo.com
        </List>
        <List>
            <LocationIcon /> No 3, Mark Gills Street, Michigan, USA.
        </List>
    </Box>
    <Box>
        <Heading>Stay Connected</Heading>
        <div style={{display: "flex", width: "100px", justifyContent:"space-between"}}>
            <FaceBook />
            <Instagram />
            <Twitter />
        </div>
    </Box>
    </ FooterWrapper>
  )
}

export default index