import { useState } from "react";
import {
    Flex,
    VStack,
    useBreakpointValue,
    FormControl,
    FormLabel, Box,
    Input, InputGroup,
    useColorModeValue,
    Button, BeatLoader
  } from '@chakra-ui/react';
  import axios from 'axios';


const CreateForm = () =>{
    const [fullName, setName] = useState('')
    const [age, setAge] = useState('');
      
    const onSubmit = async (event)=>{
        event.preventDefault();
        await axios.post('http://localhost:4000/api/forms', {
            fullName, age
        });
        setName('');
        setAge('');
    }
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
            <Box 
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="lg"
            p={8}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow="base">
                <form onSubmit={onSubmit}>
                    <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <InputGroup>
                                <Input
                                value={fullName} 
                                onChange={e => setName(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>
                    <br/>
                    <FormControl isRequired>
                        <FormLabel>Age</FormLabel>
                        <InputGroup>
                                <Input
                                value={age} 
                                onChange={e => setAge(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>
                    <br/>
                    <Button
                    spinner={<BeatLoader size={8} color='white' />}
                         type="submit"
                        colorScheme="blue"
                        bg="blue.400"
                        color="white"
                        _hover={{
                        bg: 'blue.500',
                        }}
                        width="100%"
                        isFullWidth>
                            Submit
                    </Button>
                </form>
               
            </Box>
   


            {/* <div>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label>fullName</label>
                        <input 
                        value={fullName} 
                        onChange={e => setName(e.target.value)} 
                        className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>age</label>
                        <input 
                        value={age} 
                        onChange={e => setAge(e.target.value)} 
                        className='form-control' />
                    </div>
                    <br />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>  */}
        </VStack>
      </Flex>

       
    );
}

export default CreateForm;