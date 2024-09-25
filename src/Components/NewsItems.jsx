import React from 'react'
import image from '/src/assets/News.png'
export const NewsItems = ({title, description, src, url, author}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <h6 className='card-heading'>{author}</h6>
  <img src={src?src:image} style={{height:"200px",width:"326px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is object"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
