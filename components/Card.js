const Card = ({country}) => {
    return ( 
        <article>
            <picture>
                <span>{country.flag}</span>
            </picture>

            <section>
                <h3>{country.name.common}</h3>
                <p>Population:{country.population}</p>
                <p>Region:{country.region}</p>
                <p>Capital:{country.capital[0]}</p>
            </section>
        </article>
    );
}
 
export default Card;