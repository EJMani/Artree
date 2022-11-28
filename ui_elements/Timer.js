import {useState, useEffect} from "react";
import {Text, StyleSheet, View, Button} from 'react-native';

export default function Timer({deadline}){

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = (deadline) => {
        if(seconds <= -1){
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        }else{
            const time = Date.parse(deadline) - Date.now();
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);


    return(
        <Text>{days}d-{hours}h-{minutes}m-{seconds}s</Text>
    )
}