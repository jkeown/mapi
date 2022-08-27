import Pagination from "./Pagination"

const Footer = (props) => {
  const {APIData, totalResults, searchOffset, searchLimit, setSearchOffset, currentPage, setCurrentPage} = props
  return(
    <footer>
      { (APIData.length > 0) && <Pagination 
          totalResults={totalResults}
          searchLimit={searchLimit}
          searchOffset={searchOffset}
          setSearchOffset={setSearchOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />}
      <h6>Data provided by Marvel. © 2014 Marvel</h6>
    </footer>
  )
}

export default Footer