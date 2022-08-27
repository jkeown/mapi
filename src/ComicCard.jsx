const ComicCard = ({comic}) => {
  return(
  <div className="img-card">
      <img src={comic.thumbnail?.path +'.'+ comic.thumbnail?.extension} alt={comic.title} 
      className={comic.thumbnail?.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ? 'no-img' : ''}
      />
    <a href={comic.urls[0].url} target="_blank" rel="noreferrer">
    <div className="img-overlay">
      {/* This probably can be done better */}
      <p>{comic.title}</p> 
      <p>{comic.name}</p> 
      <p>{comic.fullName}</p> 
    </div>
    </a>
  </div>
  )
}

export default ComicCard