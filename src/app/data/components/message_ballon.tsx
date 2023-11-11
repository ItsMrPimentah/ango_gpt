import { Box } from "@chakra-ui/react";

interface MessageBallonProps {
    id: Number;
    message: String;
    sentByMe: Boolean;
}

export function MessageBallon({ message, sentByMe }: MessageBallonProps) {

    return (
        <Box style={{
            borderRadius: sentByMe ? '10px 0px 10px 10px' : '10px 10px 10px 0px',
            background: sentByMe ? 'rgb(223, 204, 251)' :
                'rgb(54, 48, 98)',
            width: 'fit-content',
            padding: '8px',
            margin: '8px',
            alignSelf: sentByMe ? 'flex-end' : 'flex-start',
            color: sentByMe ? 'black' : 'white',
        }} >
            {message}
        </Box>
    );
}


const messages = [
    {
        id: 1,
        message: 'Hello',
        sentByMe: true
    },
    {
        id: 2,
        message: 'Hi',
        sentByMe: false
    },
    {
        id: 3,
        message: 'How are you?',
        sentByMe: true
    },
    {
        id: 4,
        message: 'I am fine',
        sentByMe: false
    },
    {
        id: 5,
        message: 'What about you?',
        sentByMe: false
    },
    {
        id: 6,
        message: 'I am fine too',
        sentByMe: true
    },
    {
        id: 7,
        message: 'How is your family?',
        sentByMe: true
    },
    {
        id: 8,
        message: 'They are fine',
        sentByMe: false
    },
    {
        id: 9,
        message: 'What about yours?',
        sentByMe: false
    },
    {
        id: 10,
        message: 'They are fine too',
        sentByMe: true
    },
    {
        id: 11,
        message: 'Where are you from?',
        sentByMe: true
    },
    {
        id: 12,
        message: 'I am from India',
        sentByMe: false
    },
    {
        id: 13,
        message: 'What about you?',
        sentByMe: false
    },
    {
        id: 14,
        message: 'I am from USA',
        sentByMe: true
    },
    {
        id: 15,
        message: 'What is your name?',
        sentByMe: true
    },
    {
        id: 16,
        message: 'My name is John',
        sentByMe: false
    },
    {
        id: 17,
        message: 'What about you?',
        sentByMe: false
    },
    {
        id: 18,
        message: 'My name is Ravi',
        sentByMe: true
    },
    {
        id: 19,
        message: 'Nice to meet you',
        sentByMe: true
    },
    {
        id: 20,
        message: 'Nice to meet you too',
        sentByMe: false
    },
    {
        id: 21,
        message: 'Have a nice day',
        sentByMe: true
    },
    {
        id: 22,
        message: 'You too',
        sentByMe: false
    },
    {
        id: 23,
        message: 'Bye',
        sentByMe: true
    },
    {
        id: 24,
        message: 'Bye',
        sentByMe: false
    },
    {
        id: 25,
        message: 'Bye',
        sentByMe: true
    },
    {
        id: 26,
        message: 'Bye',
        sentByMe: false
    }];


export const getMessages = () => {
    return messages;
}