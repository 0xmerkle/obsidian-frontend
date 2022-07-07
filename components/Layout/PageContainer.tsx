import React, { ReactNode } from 'react';
import {Box} from "@chakra-ui/react"
const PageContainer = (props: { children: ReactNode }) => {
  return (
    <Box
      display={'grid'}
      gridTemplateAreas={`
      'a a a b b b c c'
      'x x x e e e e e'
      'd d d e e e e e'
      'd d d e e e e e'`}
      gap="100px"
    >
    {props.children}
    </Box>
  )
}

export default PageContainer;