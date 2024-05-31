import { useEffect, useState } from "react";
import GuestForm from "../../components/GuestForm/GuestForm"
import { nanoid } from "nanoid";
import GuestList from "../../components/GuestList/GuestList";

const GuestApp = () => {

    //* State pour stocker les invités
    const [guests, setGuests] = useState([]);

    //! Effet pour modifier le title du site
    //* => Afficher le nombre d'invités
    //* L'effet se déclenche uniquement quand le nombre d'invité change
    //* Si un autre state, cela n'aura paas d'impact
    useEffect(() => {
        //* Le code de l'effet
        console.log('EFFET : GuestApp');

        //* Modification du DOM
        document.title = `Invités : ${guests.length}`
        
        //* La dépendance de l'effet
    }, [guests.length]) 

    //! Gestion de l'ajout des invités
    const handleAddGuest = (data) => {


        //* Objet à ajouter dans la liste
        const newGuest = {
            ...data, //* Toutes les données du formulaire
            id: nanoid(7) //* Id unique généré par "nanoid" (7 caractères (optionnel))
        }

        //* Ajout (au début) de l'invité à la liste
        setGuests(guests => [ newGuest, ...guests ])
    }

    //! Gestion de la suppression de tous les invités 
    const handleClearGuest = () => {
        
        setGuests([]);
    }

    //! Rendu
    return (
        <div>
            <h2>Ajouter un invité</h2>
            <GuestForm onAddGuest={handleAddGuest}/>

            <h2>Liste des invités</h2>
            <button onClick={handleClearGuest}>Vider la liste</button>
            <GuestList guests={guests} />
        </div>
    )
}

export default GuestApp;