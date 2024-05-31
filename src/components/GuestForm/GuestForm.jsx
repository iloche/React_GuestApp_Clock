import { useForm } from "react-hook-form";
import { useId } from "react"

const GuestForm = ({
    onAddGuest = () => {} //* Communication avec le composant parent (default :Noop)
}) => {

    //! "useForm" un "hook" de la librairie "React-Hook-Form"
    //* Son objectif -> Gestion du formulaire (càd, pas de gestion des states à la main)
    //* - register va permettre d'enregistrer l'input dans "React-Hook-Form"
    //* - handleSubmit va désactiver le comportement par défaut et envoyer les données du form (formaté)
    //* - reset va permettre de reset le formulaire
    //* - setFocus va nous permettre de manipuler le focus des balises
    //* - formState va permettre de retenir l'état du formulaire (Interaction ? Erreur ? Loading ? ...)
   const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm();

   //* Id pour l'accessibilité du formulaire
   const formId = useId();

   //* Gestion des données du formulaire
   //* - Les données sont déjà traitées par "React-Hook-Form"
    const handleGuestSubmit = (data) => {
        //* Traitement...
        onAddGuest(data);

        //* CleanUp 
        //! Attention, d'abord le setFocus ensuite le reset sinon ça ne fonctionne pas
        setFocus('firstname')
        reset();
    }
    
    //* Rendu
    return (
        <form onSubmit={handleSubmit(handleGuestSubmit)}>
            <div>
                <label htmlFor={formId+'-fname'}>Prénom: </label>
                <input id={formId+'-fname'} type="text" {...register('firstname', { required: true})} />
                {errors.firstname && (
                <span> Le prénom est obligatoire !</span>
                )}
                
            </div>
            <div>
                <label htmlFor={formId+'-lname'}>Nom: </label>
                <input id={formId+'-lname'} type="text" {...register('lastname', { required: true})}/>
                {errors.lastname && (
                <span> Le nom est obligatoire !</span>
                )}
            </div>
            <div>
                <button type="submit">Valider</button>
            </div>
        </form>
    )
}
export default GuestForm;