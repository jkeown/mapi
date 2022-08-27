import { useState } from "react";
import SettingsIcon from "./SettingsIcon";
import CloseIcon from './CloseIcon'
import LightMode from './SunIcon'
import DarkMode from './MoonIcon'
import ListViewIcon from "./ListViewIcon";
import GridViewIcon from './GridViewIcon'


const Settings = (props) => {
  const {setCurrentPage, setSearchOffset, searchLimit, setSearchLimit, viewMode, setViewMode, showListView, setShowListView} = props
  const [showSettings, setShowSettings] = useState(false)
  const [isActive, setIsActive] = useState({
    light: false,
    dark: true
  })

  const handleSettingsClick = () => {
    setShowSettings(!showSettings)
  }
  const handleActiveClick = () => {
    setIsActive({
      ...isActive, light: !isActive.light, dark: !isActive.dark
    })
    setViewMode(viewMode === '' ? 'dark-mode' : '')
  }

  const handlePageResultsChange = (e) =>{
    setSearchLimit(Number(e.target.value))
    setCurrentPage(1)
    setSearchOffset(0)
  }

  return(
    <>
    <div className="settings-toggle" onClick={handleSettingsClick}>
      {showSettings ? <CloseIcon /> : <SettingsIcon /> }
    </div>
    <div className={`settings container ${showSettings ? 'open' : ''}`}>
      <div className="settings-options">
        <div className="view-mode">
          <LightMode isActive={isActive}
          handleActiveClick={handleActiveClick}
           />
          <DarkMode isActive={isActive}
          handleActiveClick={handleActiveClick}
           />
        </div>
        <div className="list-mode">
          <ListViewIcon showListView={showListView} setShowListView={setShowListView} />
          <GridViewIcon showListView={showListView} setShowListView={setShowListView} />
        </div>
        <p>Results per page:</p>
        <input type="text" name="pade-results" id="" value={searchLimit}
        onChange={handlePageResultsChange}
        />
      </div>
    </div>
    </>
  )
}

export default Settings