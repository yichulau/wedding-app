import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Flex,
    VStack,Box, useBreakpointValue,useColorModeValue
  } from '@chakra-ui/react'

const ShowDetails = () =>{

    const [user, userLists] = useState([]);
    const fetchUsers = async ()=>{
        const res = await axios.get('http://localhost:4000/api/forms');
    
        userLists(res.data);
    }
    
    useEffect(() => {
        fetchUsers();
    }, []);
    
    const userList = user.map(user => {
        return (
            <Tr key={user.id}>
            <Td>{user.fullName}</Td>
            <Td>{user.age}</Td>
            <Td>
            {/* <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
                <a>View</a>
            </Link> */}View
            </Td>
        </Tr>
        );
    })

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
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
        
                            {userList}
 
                        </Tbody>
                    </Table>
                    </TableContainer>


               
            </Box>
        </VStack>
      </Flex>
        // <div>
        //     <div>
        //     <h1>List of records</h1>
        //         <table className='table'>
        //             <thead>
        //                 <tr>
        //                 <th>Full Name</th>
        //                 <th>Age</th>
        //                 <th>Link</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //             { userList }
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
}

export default ShowDetails;