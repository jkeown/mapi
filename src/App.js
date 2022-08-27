import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import QuickSearch from './QuickSearch';
import ComicCard from './ComicCard';
import Footer from './Footer';

function App() {
  const [useAPI, setUseAPI] = useState('QS')
  const [APIData, setAPIData] = useState([])
  const [searchCategory, setSearchCategory] = useState('events')
  const [searchBy, setSearchBy] = useState('name')
  const [searchValue, setSearchValue] = useState('')
  const [totalSearchResults, setTotalSearchResults] = useState(0)
  const [searchLimit, setSearchLimit] = useState(20)
  const [searchOffset, setSearchOffset] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState('dark-mode')
  const [showListView, setShowListView] = useState(false)

  
  const quickSearch = `https://gateway.marvel.com/v1/public/${searchCategory}?limit=${searchLimit}&offset=${searchOffset}&apikey=6dcd2fabf253caa768b0998df68dca90`
  const advancedSearch = `https://gateway.marvel.com/v1/public/${searchCategory}?${searchBy}StartsWith=${searchValue}&limit=${searchLimit}&offset=${searchOffset}&apikey=6dcd2fabf253caa768b0998df68dca90`

  
  const searchMarvel = async() =>{
    let api = useAPI === 'QS' ? quickSearch : advancedSearch
    const response = await fetch(api)
    const data = await response.json()

    setAPIData(data.data.results)
    setTotalSearchResults(data.data.total)
  }

  useEffect(() => {
    searchMarvel()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCategory, searchOffset, searchValue, searchLimit, useAPI])

  return (
    <div className={`App ${viewMode}`}>
      <Header
      setCurrentPage={setCurrentPage}
      setSearchOffset={setSearchOffset}
      searchLimit={searchLimit}
      setSearchLimit={setSearchLimit}
      viewMode={viewMode}
      setViewMode={setViewMode}
      showListView={showListView}
      setShowListView={setShowListView}
      />
      <QuickSearch 
        setCurrentPage={setCurrentPage}
        setUseAPI={setUseAPI}
        setSearchOffset={setSearchOffset}
        totalSearchResults={totalSearchResults}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
       
         { (!APIData.length) && <p className='no-results'>NO API DATA</p> }
         
      <main className={`container ${showListView ? 'list' : ''}`}>

          {
          APIData.map(comic => (
            <ComicCard comic={comic} key={comic.id} />
          ))
        }

      </main>
      <Footer
      APIData={APIData}
      totalResults={totalSearchResults}
      searchLimit={searchLimit}
      searchOffset={searchOffset}
      setSearchOffset={setSearchOffset}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
