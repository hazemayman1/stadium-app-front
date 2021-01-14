import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Matches from './Matches';

const MyComponent = () => {
    useEffect(async () => {
        const fetchData = async () => {
            return(
            axios.get(`http://localhost:3000/user/viewMatch/?id=5ffe4d68db3dd732449bce46`)
                .then(res => {
                    return (res.data.data);
                })
            )
        }
        setData(await fetchData());

    }, []);
    const [data, setData] = useState(null);
    if (data !== null) {
        return (
            <Matches data={data} />
        )
    }
    return (<div></div>);
}
export default MyComponent;

