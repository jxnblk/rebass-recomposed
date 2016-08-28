
import React from 'react'
import { Flex, Box } from 'reflexbox'

const Grid = ({
  children,
  gutter = 3,
  ...props
}) => {
  const chx = React.Children.map(children, (child, i) => {
    return (
      <Box
        col={12}
        sm={6}
        mb={gutter}
        px={gutter}>
        {child}
      </Box>
    )
  })
  return (
    <Flex
      wrap
      gutter={gutter}>
      {chx}
    </Flex>
  )
}

export default Grid

