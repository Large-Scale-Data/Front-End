import { useState } from 'react'
import { CgSearch } from 'react-icons/cg';
import { Data } from '../../Data';

export const SearchBar = (setData, data) => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        // console.log(Data)
        Data.filter((product) => {
            // console.log(product.product)
            // console.log(product.product.match(searchInput))
            // setData(product.product.match(searchInput))
        });
        // const newItem = Data.filter(newVal => {
  //     //   return newVal.region === filters[0]
  //     // })
    }

    const updateData = (e, searchInput) => {
        console.log(e)

        alert('clicked ' + searchInput)
    }

    return <div class="search-box">
        <input
            class="search-txt"
            type="text"
            name=""
            placeholder="Search Product"
            onChange={handleChange}
            value={searchInput} />
        <a class="search-btn" href="#">
            <CgSearch onClick={e => updateData(e, searchInput)}></CgSearch>
        </a>
    </div>
}