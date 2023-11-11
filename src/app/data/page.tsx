import { Box, Container } from '@chakra-ui/react'

export default function Home() {
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
            <Box bg={'black'} style={{
                height: '100vh',
                width: '80vw'
            }}>

            </Box>
        </Container>
    )
}


