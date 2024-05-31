import { useEffect } from "react"

//* Représente un seul invité
const GuestListItem = ({ id, firstname, lastname }) => {

    useEffect(() => {
        //* Effet
        console.log(`EFFET : GuestListItem (${id} - ${firstname})`);

        //* Exemple d'un timer qui se déclenche...
        // const timerId = setInterval(() => { console.log(id, firstname)}, 500)

        return () => {
            //* CleanUp de l'effet
            console.log(`CLEAN : GuestListItem (${id})`);

            //* On vire le timer
            // clearInterval(timerId);
        }
    }, [id])

    return (
        <article>
            <span>{firstname}</span> <span>{lastname}</span>
        </article>
    )
}

//* Représente la liste des invités
const GuestList = ({
    guests = [] //! Props "guests" qui est l'ensemble des invités à afficher
}) => {
    return (
        <section>
            {guests.map(
                guest => <GuestListItem key={guest.id} {...guest} />
            )}
        </section>
    )
}

export default GuestList;