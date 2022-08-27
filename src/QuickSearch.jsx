import Button from './Button'
import AdvancedSearch from './AdvancedSearch'


const QuickSearch = (props) => {
  const {setCurrentPage, setUseAPI, setSearchOffset, totalSearchResults, searchCategory, setSearchCategory, searchBy, setSearchBy, searchValue, setSearchValue} = props
  return(
    
    <div className="quickSearch">
      <div className="btns">
      <Button 
        btnName={'Characters'}
        setCurrentPage={setCurrentPage}
        setUseAPI={setUseAPI}
        setSearchOffset={setSearchOffset}
        setSearchCategory={setSearchCategory}
        api={'QS'} />
      <Button 
        btnName={'Comics'}
        setCurrentPage={setCurrentPage}
        setUseAPI={setUseAPI}
        setSearchOffset={setSearchOffset}
        setSearchCategory={setSearchCategory}
        api={'QS'} />
        <Button 
        btnName={'Creators'}
        setCurrentPage={setCurrentPage}
        setUseAPI={setUseAPI}
        setSearchOffset={setSearchOffset}
        setSearchCategory={setSearchCategory}
        api={'QS'} />
        <Button 
        btnName={'Events'}
        setCurrentPage={setCurrentPage}
        setUseAPI={setUseAPI}
        setSearchOffset={setSearchOffset}
        setSearchCategory={setSearchCategory}
        api={'QS'} />
        <Button 
        btnName={'Series'}
        setCurrentPage={setCurrentPage}
        setUseAPI={setUseAPI}
        setSearchOffset={setSearchOffset}
        setSearchCategory={setSearchCategory}
        api={'QS'} />
      </div>
      <h2 className='searchTitle'>{searchCategory}: {totalSearchResults}</h2>
      <AdvancedSearch
        setCurrentPage={setCurrentPage}
        setUseAPI={setUseAPI}
        setSearchOffset={setSearchOffset}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  
  )
}


export default QuickSearch