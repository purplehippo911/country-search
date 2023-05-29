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
              <button className="bg-White dark:bg-DarkBlue p-5 mt-4">Back</button>
            </Link>
          </div>
        )
    }
    
    return (
      
       <CountryDetail countries={searchedCountries} country={mainCountry}/>
    )

}