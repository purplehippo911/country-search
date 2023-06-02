import { useRouter } from "next/router";
import { useState } from "react" ;

// search-icon and store for stage manegment
import { IoIosSearch } from "react-icons/io"
import useStore from '@store/store';

const Search = ({countries}) =>  {

    const [searchValue, setSearchValue] = useState("");
    const setSearchedCountries = useStore(state => state.setSearchedCountries);
    const searchedCountries = useStore(state => state.searchedCountries);

    const router = useRouter();

    // for search functions to search for countries
    function filterCountry(e) {
        const value = e.target.value.toLowerCase().trim();
        setSearchValue(value);

        if (value && value.length > 0) {
            const filteredCountries = countries.filter(country => 
                country[0].toLowerCase().includes(value)
            );
            setSearchedCountries(filteredCountries)
        } else {
            setSearchedCountries(countries)
        }
        return value;
    }

    // filter functions
    function filterRegions(e) {
        const value = e.target.value;

        if (value === "Filter by Region") {
            setSearchedCountries(countries);
        } else {
            const filteredCountries = countries.filter(
                (country) => country[10] === value
            );    
            setSearchedCountries(filteredCountries);
            console.log(filteredCountries)
        }
    }

    function handleEnter(e) {
        e.preventDefault();

        // checking if the value of the searchbar is not empty
        if(searchValue != "") {
            // Check if searchvalue matches any country name
            const searchValueExists = searchedCountries.find((country) => 
                country[0].toLowerCase().includes(searchValue)
            );
            
            if(searchValueExists) {
                // for if there's only one country left, so that countries page will be rendered, when the 'enter'-button is clicked
                if(searchedCountries.length == 1) {
                    const countryValue = searchedCountries.map(c => c[0])
                    router.push(`/countries/${countryValue}`);
                } else {
                    // Take the first country, if there's multiple left
                    router.push(`/countries/${searchedCountries[0]}`);
                }
            }
        } else {
            return searchValue
        }

    }

    return ( 
        <form action="" 
            onSubmit={(e) => handleEnter(e)}
            className="grid lg:grid-cols-2"
            >
                <section className="flex items-center content-center shadow-sm bg-White dark:bg-DarkBlue">
                    <IoIosSearch className="cursor-pointer ml-4 scale-150" onClick={(e) => handleEnter(e)}/>
                    <input
                     className="w-full px-20 py-5 outline-none bg-White dark:bg-DarkBlue"
                     type="text"
                     placeholder="Search for a country..."
                     id="searchInput"
                     defaultValue={searchValue}
                     onChange={filterCountry}
                     />
                </section>
                <section className="mt-5 md:mt-0 md:w-full md:grid md:justify-end">
                    <select name="filter" id="filter"
                     defaultValue="Filter by Region"
                      className="bg-White shadow-sm dark:bg-DarkBlue w-1/2 py-5 text-center justify-self-end md:w-full md:px-10"
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
     );
}
 
export default Search;