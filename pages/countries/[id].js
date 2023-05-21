import { useRouter } from "next/router";

import CountryDetail from "@comps/CountryDetail";

export const getServerSideProps = async () => {

  const res = await fetch("https://restcountries.com/v3.1/all?fields=flag,name,region,population,capital,alpha3Code,tld,subregion,currencies,languages,borders,cioc");
  const data = await res.json();

  return {
    props: { countries:data }
  };
}

export default function Country({countries}) {
    const router = useRouter();
    const id = router.query;

    const mainCountry = countries.find((country) => country.name.common.toLowerCase() == id.id.toLowerCase());

    if (!mainCountry) {
        return <div>Country not found</div>;
    }
    
    return (
       <CountryDetail countries={countries} country={mainCountry}/>
    )

}