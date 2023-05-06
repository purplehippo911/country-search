import { IoIosSearch } from "react-icons/io"

const Search = () => {
    return ( 
        <form action="">
            <section className="flex items-center content-center bg-DarkBlue">
                <IoIosSearch className="cursor-pointer"/>
                <input
                 className="w-full bg-DarkBlue text-DarkGray px-20 py-5 outline-none"
                 type="text"
                 value="Search for a country..."
                 id="searchInput"
                 />
            </section>

            <section className="mt-5">
                <select name="filter" value="Filter by Region" className="bg-DarkBlue w-1/2 py-5 text-center">
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </section>
        </form>

        
     );
}
 
export default Search;