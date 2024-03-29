import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { slice_msg } from '../Actions/actions'
import React from 'react'
import { connect } from 'react-redux'

function SliceComponent({contents, slice_msg}) {

  return (
    <Flex p={10} border={'1px solid white'} columnGap={5}>
        
        {contents.map(content=>{
            return <Box key={content.id} >
                        <Box p={8} w={'400px'} borderRadius={'20px'} h={'300px'} color={'black'} textAlign={'left'} bg={'white'}>
                            <Heading as={'h2'} mb={'10px'} textTransform={'uppercase'}>{content.title}</Heading>
                            <Text fontSize={'24px'} fontFamily={'fantasy'} lineHeight={'2.5rem'}>{content.details}</Text>
                            <p></p>
                        </Box>
                        {/* <Image src={slide.pic} w={'300px'} h={'300px'}/> */}
                        {/* <Button colorScheme='blue.700' color={'white'}  */}
                        {/* bgColor={'blue.500'} onClick={()=>{slice_msg(slide.id); console.log(slides)}}> */}
                            {/* Slice */}
                        {/* </Button> */}
                   </Box>
        }
        )}
        {/* {console.log(slides)} */}
    </Flex>
  )
}

const mapStateToProps = (state) =>{
    const { slideInfo } = state

    return { contents: slideInfo.contentBody }
}

export default connect(mapStateToProps, { slice_msg } )(SliceComponent)