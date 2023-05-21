import Link from "next/link";

const Card = ({country}) => {

    return ( 
        <Link href={`countries/${country.name.common}`}>
            <article className="p-10 bg-white">
                
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
        </Link>
    );
}
 
export default Card;