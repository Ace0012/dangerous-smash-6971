import { Flex } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import React from 'react'
import { Button, Container, Box, Grid } from '@chakra-ui/react';
import {Link, Navigate} from 'react-router-dom';

const links = [{
  to :'/product',
  title:'Product',

}
,
{
  to:'/pricing',
  title:'Pricing'

},
{
  to:'/solutions',
  title:'Solutions'
},
{
  to:'/customers',
  title:'Customers'
},
{
  to:'/resources',
  title:'Resources'
},
{
  to:'/partners',
  title:'Partners'

}
]

const links2=[
  {to:'/login',
title:'Login'},
{
  to:'/demo',
  title:'Get A Demo'
}
]
const Navbar = () => {


  return (
    <Box  w={'100%'} boxShadow='sm' mt='2' >

    <Flex  padding={3} justifyContent='space-between' >
      <Flex gap={5} alignItems='center'>

        <Link to ='/'>Icon</Link>
{links.map((el)=>{
  return <Link to={el.to}>{el.title}</Link>
})}


   
      </Flex>
      <Flex alignItems='center' gap={2}>

      <Popover>
  <PopoverTrigger>
    <Button>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton onMouseLeave/>
  
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>



      </Flex>
    </Flex>
    </Box>
  )
}

export default Navbar