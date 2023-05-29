import Link from "next/link";

const CountryDetail = ({countries, country}) => {
    
    const languageObject = Object.values(country[21]);
    const currencyObject = Object.values(country[20]).map(currency => currency);
    const rawBorderCountries = Object.values(country[18]);
    const borderCountries = countries.filter((borderCountry) => 
        rawBorderCountries.includes(borderCountry[4])
    
    );

    return ( 
        <article className="ml-auto m-auto px-5">
                <div className="container flex flex-col gap-5">
                    <Link href="/" className="w-1/4">
                        <button className="bg-White w-full py-5 dark:bg-DarkBlue dark:text-white">Back</button>
                    </Link>

                    <picture>
                        <img src={country[23].large}/>
                    </picture>

                    <section>
                        <h2 className="font-bold text-xl">{country[0]}</h2>
                        <p>
                            <strong> Native Name: </strong>
                            {country[19][0]}
                        </p>
                        <p>
                            <strong> Population: </strong>
                            {country[12]}
                        </p>
                        <p>
                            <strong> Region:</strong>
                            {country[10]}
                        </p>
                        <p><strong> Subregion: </strong>{country[11]}</p>
                        <p> <strong>Capital:</strong> {country[8]}</p>
                    </section>

                    <section> 
                        <p><strong>Top Level Domain:</strong> {country[2]}</p>
                        <div className="flex gap-2 flex-wrap">
                            <strong>Currencies:</strong> 
                            <p>{currencyObject[0].name}, {currencyObject[0].symbol}</p>
                        </div>
                        <div className="flex gap-2 flex-"><strong>Languages:</strong>
                            {Object.values(languageObject).map( language => (
                                <p key={language}>{language};</p>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="font-bold">Border Countries:</h3>
                        <section className="flex gap-4">
                            {borderCountries.map((borderCountry) => (
                                <Link href={`/countries/${borderCountry[0]}`}>
                                    <button key={borderCountry[0]}>{borderCountry[0]}</button></Link>
                            ))}
                        </section>
                    </section>

                </div>
        </article>
     );
}
 
export default CountryDetail;