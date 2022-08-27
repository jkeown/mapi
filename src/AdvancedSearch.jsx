import { useState } from "react";
import Button from "./Button";
import SearchIcon from './SearchIcon'

const Search = (props) => {
  const {searchBy, setSearchBy, searchValue, setSearchValue, setCurrentPage, setUseAPI, setSearchOffset, setSearchCategory} = props
  // const [searchBy, setSearchBy] = useState('characters')
  // const [searchValue, setSearchValue] = useState('')
  const [showForm, setShowForm] = useState(false)
 
  const handleClick = (event) => {
    setShowForm(current => !current)
  }
  const handleSelectChange = (e) => {
    setSearchBy(e.target.value)
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setSearchCategory(
      searchBy === 'name' ? 'characters' : 'comics'
    )
  }

  return(
    <div className="advanced-search">
      <div className="advanced-search-top" onClick={handleClick}>
        <h3>Advanced Search</h3>
        <SearchIcon />
        {/* <img src={SearchIcon} alt="Search" /> */}
      </div>
    <form onSubmit={handleSubmit} className={showForm ? 'show-form' : ''}>
      <label htmlFor="">Search by: </label>
      <select
        onChange={handleSelectChange}
      >
        <option value="name">Character</option>
        <option value="title">Comic</option>
      </select>
      <label htmlFor="">&nbsp;{searchBy}:&nbsp;</label>  
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <Button 
        btnName='Search'
        setCurrentPage={setCurrentPage}
        setUseAPI={setUseAPI}
        setSearchOffset={setSearchOffset}
        setSearchCategory={setSearchCategory}
        api={'AS'}
      />
    </form>
    </div>
  )
}

export default Search