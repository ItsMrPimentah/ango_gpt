'use client';

import { Box, Container, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { MessageBallon, getMessages } from './data/components/message_ballon'


export default function Home() {
  const [input, setInput] = useState('');

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  }
  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }} >
      <Box bg={'tomato'} style={{
        height: '100vh',
        width: '20vw'
      }}>
      </Box>
      <Box bg={'white'} style={{
        height: '100vh',
        width: '80vw',
        alignSelf: 'center',
      }}>
        <Box bg={'white'} style={{
          height: '90%',
          width: '100%',
          backgroundColor: 'white',
          alignSelf: 'center',
          overflowY: 'scroll',
          display: 'list-item',
        }}>
          {getMessages().map(m => {
            return (
              <div key={m.id} style={{
                display: 'flex',
                justifyContent: m.sentByMe ? 'flex-end' : 'flex-start',
              }}>
                <MessageBallon {...m} />
              </div>
            )
          })
          }
        </Box>
        <FormControl style={{
          position: 'fixed',
          margin: '8px',
          bottom: '0',
          height: '10vh',
          width: '78%',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.40)',

        }}>
          <Input type='email' value={input} onChange={handleInputChange} placeholder='Email'
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.40)',
              border: 'none',
              outline: 'none',
              padding: '8px',
              fontSize: '24px',
              fontWeight: 'lighter',
              fontFamily: 'sans-serif',
              color: 'blue',
            }}
          />
          {
            <FormErrorMessage>Email is required.</FormErrorMessage>
          }
        </FormControl>
      </Box>
    </Container>
  )
}


