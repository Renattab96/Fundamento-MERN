const Personcard =({lastName, firstName, age, hairColor} ) => {
    return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>{age}</p>
            <p>{hairColor}</p>
        </div>
    );
}

export default Personcard;