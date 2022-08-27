const Pagination = (props)=>{
  const {totalResults, searchOffset, searchLimit, setSearchOffset, currentPage, setCurrentPage} = props
  const resultPages = Math.ceil(totalResults / searchLimit)

  const searchBack = () =>{
    setSearchOffset(searchOffset - searchLimit)
    setCurrentPage(currentPage - 1)
  }
  const searchForward = () =>{
    setSearchOffset(searchOffset + searchLimit)
    setCurrentPage(currentPage + 1)
  }
  
  return(
    <div className="pagination">
      <div>
      {
        currentPage > 1 ? 
        <>
        <div className="red-triangle"></div>
        <button className="btn" onClick={searchBack}>Prev</button> 
        </>
        : ''
      }
      </div>

      <div>
        <p>{currentPage} of {resultPages}</p>
      </div>

      <div>
      {
        currentPage === resultPages ? '' :
        <>
        <button className="btn" onClick={searchForward}>Next</button>
        <div className="blue-triangle"></div>
        </>
      }
      </div>
    </div>
  )
}

export default Pagination