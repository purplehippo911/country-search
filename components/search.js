import { IoIosSearch } from "react-icons/io"
import { useState } from "react" ;
import useStore from '../store/store';

const Search = ({countries}) =>  {

    const [searchValue, setSearchValue] = useState("");
    const setSearchedCountries = useStore(state => state.setSearchedCountries);

    // for search functions to search for countries
    function filterCountry(e) {
        const value = e.target.value.toLowerCase().trim();
        setSearchValue(value);

        if (value && value.length > 0) {
            const filteredCountries = countries.filter(country => 
                country.name.common.toLowerCase().includes(value)
            );
            // console.log(filteredCountries)
            setSearchedCountries(filteredCountries)
        } else {
            setSearchedCountries(countries)
        }
    }

    // filter functions
    
    function filterRegions(e) {
        // const filterOptions = document.querySelectorAll("#filter > *")
        const value = e.target.value.toLowerCase().trim();

        if (value === "filter by region") {
            setSearchedCountries(countries);
        } else {
            const filteredCountries = countries.filter(
                (country) => country.region.toLowerCase() === value
            );    
            setSearchedCountries(filteredCountries);
        }
    }

    return ( 
        <div className="div">
            <form action="" onSubmit={((e) => e.preventDefault())}>
                <section className="flex items-center content-center bg-DarkBlue">
                    <IoIosSearch className="cursor-pointer"/>
                    <input
                     className="w-full bg-DarkBlue text-DarkGray px-20 py-5 outline-none"
                     type="text"
                     placeholder="Search for a country..."
                     id="searchInput"
                     value={searchValue}
                     onChange={filterCountry}
                     />
                </section>
                <section className="mt-5">
                    <select name="filter" id="filter"
                     defaultValue="Filter by Region"
                      className="bg-DarkBlue w-1/2 py-5 text-center"
                      onChange={filterRegions}>
                        <option value="Filter by Region">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </section>
            </form>
            
        </div>
     );
}
 
export default Search;