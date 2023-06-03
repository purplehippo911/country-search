import useStore from '../store/store';
import { useEffect } from 'react';
import { useState } from 'react';

import Search from '@comps/search'
import Card from '@comps/Card'

// fields=flag,name,region,population,capital,alpha3Code 
export const getServerSideProps = async () => {
  const key = "6dbtGyWkDunGozjumEHsSrSkdpQ1yr5kbEfJ5mUC"
  const res = await fetch(`https://countryapi.io/api/all?apikey=${key}`);
  const data = await res.json();
  
  return {
    props: { countries:data }
  };
}

export default function Home({countries}) {
  const [isLoading, setIsLoading] = useState(true);
  const setSearchedCountries = useStore(state => state.setSearchedCountries);
  const searchedCountries = useStore(state => state.searchedCountries)
  const countriesArray = Object.values(countries).map(country => Object.values(country))
  
  useEffect(() => {
    setSearchedCountries(countriesArray)
    setIsLoading(false)
  }, [countries]);

  
  return (
    <main>
      <article className='container m-auto flex flex-col gap-10'>
        <Search countries={countriesArray}/>

        {isLoading && <div>Countries are loading...</div>}

        {!isLoading && <div className="grid grid-col-1 gap-8 md:grid-cols-4">
          {searchedCountries.map(country => (
              <Card key={country[0]} country={country}/>
          ))}
        </div>}

      </article>
    </main> 
    
  )
}