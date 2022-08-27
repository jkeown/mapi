import Settings from "./Settings"

const Header = (props) => {
  const {setCurrentPage,setSearchOffset, searchLimit, setSearchLimit, viewMode,setViewMode,showListView, setShowListView} = props
  return(
    <header>
      <h1><span>Marvel</span>OUS Data</h1>
      <Settings
      setCurrentPage={setCurrentPage}
      setSearchOffset={setSearchOffset}
      searchLimit={searchLimit}
      setSearchLimit={setSearchLimit}
      viewMode={viewMode}
      setViewMode={setViewMode}
      showListView={showListView}
      setShowListView={setShowListView}
      />
    </header>
  )
}

export default Header