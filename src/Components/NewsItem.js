import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,url,newsurl,author,time,source}=this.props
    return (
      <div className="card my-2" >
        <img src={!url?'https://static.dw.com/image/60255983_6.jpg':url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <span className='position-absolute top-0  translate-middle badge rounded-pill bg-danger' style={{zIndex:1,left:'95%'}}>
              {source}
              <span>
                hello

              </span>
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description} {!description?'':'...'}</p>
            <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(time).toGMTString()}</small></p>
            <a href={newsurl} target='_blank' rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
          </div>
      </div>
    )
  }
}
