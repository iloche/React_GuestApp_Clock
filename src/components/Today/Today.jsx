
const Today = () => {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    const mySuperFormatedDate = date.toLocaleDateString('fr-FR', options)
    console.log(mySuperFormatedDate);

    // Render de la date (Today)
    return (
        <>
        <p>La date du jour est le {mySuperFormatedDate}</p>
        </>
    )
}

export default Today;