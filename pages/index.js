import Image from 'next/image'
import { Inter } from 'next/font/google'

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
  return (
    <main>
      <div className='container m-auto'>
        <Search/>
        {countries.map(country => (
            <Card key={country} country={country}/>
        ))}

      </div>
    </main> 
  )
}