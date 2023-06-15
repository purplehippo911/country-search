import Link from "next/link";
import Image from "next/image";

const CountryDetail = ({countries, country}) => {
    
    const nativeNameObject = Object.values(country[19]);
    const languageObject = Object.values(country[21]);
    const currencyObject = Object.values(country[20]).map(currency => currency);
    const rawBorderCountries = Object.values(country[18]);
    const borderCountries = countries.filter((borderCountry) => 
        rawBorderCountries.includes(borderCountry[4])
        );

    return ( 
        <article className="mt-10 container grid gap-5 lg:grid-cols-2 items-center">
                    <picture className="justify-self-center scale-12">
                        <Image
                            src={country[23].large}
                            alt="A large flag of the country or state"
                        />
                    </picture>

                    <section className="flex flex-col md:grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <h2 className="font-bold text-xl md:col-span-2 md:text-2xl">{country[0]}</h2>
                        <section>
                            <p>
                                <strong> Native Name: </strong>
                                {nativeNameObject[0].common}
                            </p>
                            <p>
                                <strong> Population: </strong>
                                {country[12]}
                            </p>
                            <p>
                                <strong> Region: </strong>
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
                            <div className="flex gap-2"><strong>Languages:</strong>
                                {Object.values(languageObject).map( language => (
                                    <p key={language}>{language};</p>
                                ))}
                            </div>
                        </section>
                        <section className="col-span-2 flex flex-col">
                                <h3 className="font-bold md:col-span-2 md:justify-self-center">Border Countries:</h3>
                            <section className="grid grid-cols-3 gap-4 md:grid-cols-5 grid-flow-dense">
                                {borderCountries.map((borderCountry) => (
                                    <Link 
                                        className="btn"
                                        href={`/countries/${borderCountry[0]}`}
                                        key={borderCountry}
                                    >
                                        <button key={borderCountry}>{borderCountry[0]}</button></Link>
                                ))}
                            </section>
                        </section>
                    </section>

        </article>
     );
}
 
export default CountryDetail;
