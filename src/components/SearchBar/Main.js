import { useState } from 'react'

export const SearchBar = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
    if (searchInput.length > 0) {
    //       countries.filter((country) => {
    //       return country.name.match(searchInput);
    //   });
    }
    return <div>
        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
            
    </div>
}