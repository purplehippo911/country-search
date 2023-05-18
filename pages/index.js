import Image from 'next/image'
import { Inter } from 'next/font/google'
import useStore from '../store/store';

import Search from '@comps/search'
import Card from '@comps/Card'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async () => {

  const res = await fetch("https://restcountries.com/v3.1/all?fields=flag,name,region,population,capital,alpha3Code");
  const data = await res.json();

  return {
    props: { countries:data }
  };
}

export default function Home({countries}) {
  const setSearchedCountries = useStore(state => state.setSearchedCountries);
  
  useEffect(() => {
    setSearchedCountries(countries)
  }, [countries]);

  const searchedCountries = useStore(state => state.searchedCountries)
  
  return (
    <main>
      <div className='container m-auto'>
        <Search countries={countries}/>
        {searchedCountries.map(country => (
            <Card key={country.name.common} country={country}/>
        ))}

      </div>
    </main> 
  )
}