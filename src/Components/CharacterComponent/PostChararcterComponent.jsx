import React from 'react'
import './PostCharacterComponent.css'
const PostChararcterComponent = ({charData}) => {
  return (
    <React.Fragment>
    <div className='character-card'>
        <img src={charData.image} alt="img" />
        <div className="card-details">
            <h1 className="name">{charData.name}</h1>
            <p className="status">{charData.status} - {charData.species}</p>
            <p className="last-seen">Last seen on</p>
            <p className="location">{charData.location.name}</p>
        </div>
    </div>
    </React.Fragment>
  )
}

export default PostChararcterComponent