import React from 'react';
import { Box, Heading, Text, Button, FormControl, FormLabel, Input, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { loginsave } from '../Actions/actions';


let timerId;

const LandingPage = ({loginsave, onClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async() => {
    setIsLoading(true)
    // Implement your sign-in logic here
    const asynclogin = () =>{
        try{
            
            loginsave(email, password)
            // const response = await (()=>console.log('Signing in with:', { email, password }));
            // console.log(response.toString())
        }
        catch(err){
            console.log('Signing in with:', { email, password });
        }
        finally{

            setIsLoading(false)
            clearTimeout(timerId)
            onClose(); // Close the modal after sign-in
        }

        
    }

    timerId = setTimeout( asynclogin, 3000)
    
  };
  return (
    <Box p={8} size='xl' width={'98%'}>
      <Heading as="h1" size="2xl" mb={8}>Login to WebChaka</Heading>
        <FormControl id="email" mb={4}>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mb={6}>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input type="password" value={password} required={'true'} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
          <Button colorScheme="blue" onClick={handleSignIn} isLoading={isLoading}>Sign in</Button>
    </Box>
  );
};

// const mapDisPatchtoProps = (dispatch) =>{
//     return {submitInfo: dispatch(loginsave)}
// }

export default connect(null, {loginsave})(LandingPage)