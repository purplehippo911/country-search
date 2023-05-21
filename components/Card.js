import Link from "next/link";

const Card = ({country}) => {

    return ( 
        <Link 
            href={`countries/${country.name.common}`}
            className="bg-DarkBlue p-5">
                <picture className="w-[120]">
                    <span className="w-full text-5xl">{country.flag}</span>
                </picture>
                <section>
                    <h3 className="font-bold text-2xl">{country.name.common}</h3>
                    <p>
                        <strong> Population: </strong>
                        {country.population}
                    </p>
                    <p>
                        <strong> Region: </strong>
                        {country.region}</p>
                    <p>
                        <strong> Capital: </strong>
                        {country.capital[0]}
                    </p>
                </section>
        </Link>
    );
}
 
export default Card;