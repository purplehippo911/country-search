import Image from 'next/image'
import { Inter } from 'next/font/google'

import Search from '@comps/search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='container m-auto'>
        <Search/>
        <p>Welcome</p>
      </div>
    </main> 
  )
}
