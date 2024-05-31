import { useEffect, useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const hours = date.getHours().toLocaleString('fr', {minimumIntegerDigits : 2});
    const minutes = date.getMinutes().toLocaleString('fr', {minimumIntegerDigits : 2});
    const seconds = date.getSeconds().toLocaleString('fr', {minimumIntegerDigits : 2});
    console.log(hours, minutes , seconds)

    useEffect(() => {
        // console.log('Effect', seconds);
        const timeoutId = setTimeout(() => {
            setDate(new Date())
        }, 1000);

        //* Effet de nettoyage 🧹
        return(() => {
            // console.log('Clear', seconds);
            clearTimeout(timeoutId);
        })
    })

    // Render l'horloge
    return (
        <>
        <p>Il est actuellement {hours} : {minutes} : {seconds}</p>
        </>
    )
}
export default Clock