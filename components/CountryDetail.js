import Link from "next/link";
// ?fields=flag,name,region,population,capital,alpha3Code, tld, subregion, currencies, languages, borders, cioc

const CountryDetail = ({countries, country}) => {

    const languageObject = Object.values(country.languages);
    const currencyObject = Object.values(country.currencies);

    const nativeNames = Object.values(country.name.nativeName)
    const nativeName = nativeNames.map(nativeName => nativeName.common)
    
    const rawBorderCountries = country.borders.map((border) => border) 
    const borderCountries = countries.filter((borderCountry) => 
        rawBorderCountries.includes(borderCountry.cioc)   
    );

    return ( 
        <article className="ml-auto">
                <div className="container flex flex-col gap-5">
                    <Link href="/">
                        <button className="bg-DarkBlue p-5">Back</button>
                    </Link>

                    <picture>
                        <span>{country.flag}</span>
                    </picture>

                    <section>
                        <h2 className="font-bold text-xl">{country.name?.common}</h2>
                        <p>
                            <strong> Native Name: </strong>
                            {nativeName[0]}
                        </p>
                        <p>
                            <strong> Population: </strong>
                            {country.population}
                        </p>
                        <p>
                            <strong> Region:</strong>
                            {country.region}
                        </p>
                        <p><strong> Subregion: </strong>{country.subregion}</p>
                        <p> <strong>Capital:</strong> {country.capital[0]}</p>
                    </section>

                    <section> 
                        <p><strong>Top Level Domain:</strong> {country.tld}</p>
                        <div className="flex gap-2 flex-wrap"><strong>Currencies:</strong> 
                            {currencyObject.map((currency, index) => (
                                <p key={index}>{currency.name},</p>
                            ))}
                        </div>
                        <div className="flex gap-2 flex-"><strong>Languages:</strong>
                            {languageObject.map((language, index) => (
                                <p key={index}>{language},</p>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="font-bold">Border Countries:</h3>
                        <section className="flex gap-4">
                            {borderCountries.map((borderCountry) => (
                                <Link href={`/countries/${borderCountry.name.common}`}>
                                    <button key={borderCountry.name.common}>{borderCountry.name.common}</button></Link>
                            ))}
                        </section>
                    </section>

                </div>
        </article>
     );
}
 
export default CountryDetail;