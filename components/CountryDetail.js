import Link from "next/link";
// ?fields=flag,name,region,population,capital,alpha3Code, tld, subregion, currencies, languages, borders, cioc

const CountryDetail = ({countries, country}) => {

    const languageObject = Object.values(country.languages);
    const currencyObject = Object.values(country.currencies);
    
    const rawBorderCountries = country.borders.map((border) => border) 
    const borderCountries = countries.filter((borderCountry) => 
        rawBorderCountries.includes(borderCountry.cioc)   
    );


    console.log(rawBorderCountries);
    console.log(borderCountries);

    return ( 
        <article className="m-auto">
                <div className="container flex flex-col gap-5">
                    <Link href="/">
                        <button>Back</button>
                    </Link>

                    <picture>
                        <span>{country.flag}</span>
                    </picture>

                    <section>
                        <h2>{country.name?.common}</h2>
                        {/* <p>Population:{country.name.nativeName[0].common}</p> */}
                        <p>Population:{country.population}</p>
                        <p>Region:{country.region}</p>
                        <p>Population:{country.subregion}</p>
                        <p>Capital:{country.capital[0]}</p>
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
                                <button key={borderCountry.name.common}>{borderCountry.name.common}</button>
                            ))}
                        </section>
                    </section>

                </div>
        </article>
     );
}
 
export default CountryDetail;