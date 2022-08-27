
const Button = (props) => {
  const {btnName, setUseAPI, api, setSearchOffset, setCurrentPage, setSearchCategory} = props

  const handleSearchClick = () => {
    setUseAPI(api)
    setCurrentPage(1)
    setSearchOffset(0)

    btnName !== 'Search' &&
    setSearchCategory(btnName.toLowerCase())
  }
  
  return(
    <button
      className="btn" 
      onClick={handleSearchClick}
    >
      {btnName}
    </button>
  )
}

export default Button