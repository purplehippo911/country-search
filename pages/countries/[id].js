import useStore from "@store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from 'next/link';

import CountryDetail from "@comps/CountryDetail";

export default function Country() {

    const router = useRouter();
    const id = router.query;

    const searchedCountries = useStore(state => state.searchedCountries)
    
    const mainCountry = searchedCountries.find((country) => country[0].toLowerCase() == id.id.toLowerCase());

    if (!mainCountry) {
        return (
          <div className="p-5">
            <p>Country not found</p> 
            <Link href="/">
              <button className="btn">Back</button>
            </Link>
          </div>
        )
    }
    
    return (
       <article className="w-full p-5 m-0-auto grid justify-items-center">
        <Link href="/" className="btn justify-self-start flex items-center">
          <picture className="w-10">
            <img src="../left-arrow.png" className="scale-[0.5] w-full"/>
          </picture>
          <button>Back</button>
       </Link>
       <CountryDetail countries={searchedCountries} country={mainCountry}/>
       </article>
    )

}