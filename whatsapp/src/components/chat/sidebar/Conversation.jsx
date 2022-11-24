import { Box,Divider,styled } from '@mui/material'
import { useContext } from 'react'
import  { useEffect,useState } from 'react'
import { AccContext } from '../../../context/Provider'

import { getUser } from '../../../services/api'
import { Conversations } from './Conversations'


const Component = styled(Box)`
    height : 81vh;
    overflow: scroll;
`
const CustomDivider = styled(Divider)`
    margin: 0 0 0 80px;
    background-color: #e9edef;
    opacity : 0.6

`
export const Conversation = () => {
    const [data, setData] = useState([])
    const {acc} = useContext(AccContext)
    
    useEffect(() => {
        const fetchData = async () => {
            let res =  await getUser();
            setData(res)
        }
        fetchData();
    }, [])
    return (
        <Component>
            {data.map((el)=> (
                acc.sub !== el.sub &&
                <>
                <Conversations user={el}/>
                <CustomDivider/>
                </>
            ))}
        </Component>
    )
}