import Clock from "../../components/Clock/Clock";
import Today from "../../components/Today/Today";
import { useState } from "react";


const ClockOrToday = () => {

    const [clockOrDay, setClockOrDay] = useState(false);

    const handelChange = () => {
        setClockOrDay ( clockOrDay => !clockOrDay)
    }

    return (
        <>
        <button onClick={handelChange}>Clock Or Today</button>
        { clockOrDay ? (
            <Today/>
        ) : (
            <Clock/>
        ) }
        </>
    )
};

export default ClockOrToday;