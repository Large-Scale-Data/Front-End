import { useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import { Data } from '../../Data'

export const SearchBar = props => {
  const { setSearchInput } = props

  const handleChange = e => {
    e.preventDefault()
    setSearchInput(e.target.value.toLowerCase())
  }

  return  <div class="search-box">
        <input type="text" name="" placeholder="Search Product"
          onChange={handleChange} 
          // value={}
          />
        <a class="search-btn" href="#">
          <CgSearch></CgSearch>
        </a>
      </div>
}
