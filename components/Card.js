import Link from "next/link";

const Card = ({country}) => {

    return ( 
        <Link 
            href={`countries/${country[0]}`}
            className="bg-White dark:bg-DarkBlue p-5">
                <picture className="max-w-md">
                    <img src={country[23].medium} className=""/>
                </picture>
                <section>
                    <h3 className="font-bold text-2xl">{country[0]}</h3>
                    <p>
                        <strong> Population: </strong>
                        {country[12]}
                    </p>
                    <p>
                        <strong> Region: </strong>
                        {country[10]}</p>
                    <p>
                        <strong> Capital: </strong>
                        {country[8]}
                    </p>
                </section>
        </Link>
    );
}
 
export default Card;