import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Image
  } from '@chakra-ui/react';
import Link from 'next/link';

const Landing = () =>{

    return (
        <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        '/images/just-married-couple.png'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Simple Wedding Website
          </Text>
          <Stack direction={'row'}>
            <Button colorScheme='teal' variant='solid'>
                <Link href="/wedding/create">
                    <a>Register</a>
                </Link>
            </Button>
            <Button colorScheme='teal' variant='solid'>
                <Link href="/wedding/display">
                    <a>Display</a>
                </Link>
                
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    );
}

export default Landing;