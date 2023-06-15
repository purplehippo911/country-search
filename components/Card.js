import Link from "next/link";
import Image from "next/image";

const Card = ({country}) => {

    return ( 
        <Link 
            href={`countries/${country[0]}`}
            className="bg-White hover:bg-DarkBlue hover:text-White shadow-sm p-5 dark:bg-DarkBlue dark:hover:bg-White dark:hover:text-black">
                <picture className="max-w-md">
                    <Image 
                        src={country[23].medium}
                        alt="a flag of the country or state"/>
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
