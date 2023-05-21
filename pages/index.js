import Image from 'next/image'
import { Inter } from 'next/font/google'

import useStore from '../store/store';
import { useEffect } from 'react';
import { useState } from 'react';

import Search from '@comps/search'
import Card from '@comps/Card'

const inter = Inter({ subsets: ['latin'] })


export const getServerSideProps = async () => {
  
  const res = await fetch("https://restcountries.com/v3.1/all?fields=flag,name,region,population,capital,alpha3Code");
  const data = await res.json();
  
  return {
    props: { countries:data }
  };
}

export default function Home({countries}) {
  const [isLoading, setIsLoading] = useState(true);
  const setSearchedCountries = useStore(state => state.setSearchedCountries);
  
  useEffect(() => {
    setSearchedCountries(countries)
    setIsLoading(false)
  }, [countries]);

  const searchedCountries = useStore(state => state.searchedCountries)
  
  return (
    <main>
      <article className='container m-auto flex flex-col gap-10'>
        <Search countries={countries}/>

        {isLoading && <div>Countries are loading...</div>}

        {!isLoading && <div class="grid grid-col-1 gap-8 md:grid-cols-4">
          {searchedCountries.map(country => (
              <Card key={country.name.common} country={country}/>
          ))}
        </div>}

      </article>
    </main> 
    
  )
}