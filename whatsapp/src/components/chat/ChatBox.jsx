

import { Box } from '@mui/material'
import React from 'react'
import { ChatHeader } from './ChatHeader'
import { Messages } from './Messages'


export const ChatBox = () => {
    return (
        <Box>
            <ChatHeader/>
            <Messages/>
        </Box>
    )
}
