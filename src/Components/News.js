import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';


export default class News extends Component {
   
    constructor() {
        super()
        console.log('Constructor from News called')
        this.state = {
            article: [],
            loading: false,
            page:1,
            maxpage:-1,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1deeafb4537240ad886460fb6dc15596&page=${this.state.page}&pageSize=${this.props.pageSize}`
        console.log(url)
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()
        console.log("Data from api",parseddata)
        this.setState({article:parseddata.articles,maxpage: Math.ceil(parseddata.totalResults/this.props.pageSize),loading:false })
    }
    
    handlenextclick = async () =>{
        

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1deeafb4537240ad886460fb6dc15596&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()
        console.log("Data from api",parseddata)
        this.setState({
            page: this.state.page+1,
            article:parseddata.articles,
            loading:false
        })

    }

    handlepreviousclick = async () =>{
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1deeafb4537240ad886460fb6dc15596&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        this.setState({loading:true})
        let parseddata = await data.json()
        console.log("Data from api",parseddata)
        this.setState({
            page: this.state.page-1,
            article:parseddata.articles,
            loading:false
        })
    }
   
    


    render() {
        
        return (
            <>
                <div className="container my-3">
                    <h1 className="text-center">Bira News - Top News Headlines</h1>
                    {this.state.loading && <Spinner/>}
                    <div className="row mt-3">
                       {
                           !this.state.loading && this.state.article.map((article)=>{
                               return(
                                <div className="col-md-4 mt-2" key={article.url}>
                                <NewsItem  title={article.title && article.title.slice(0,45)} description={article.description && article.description.slice(0,88)} url={article.urlToImage} newsurl={article.url} author={article.author} time={article.publishedAt} source={article.source.name} />
                            </div>
                               )
                           })
                       }

                        
                    </div>
                    <div className="container d-flex justify-content-between my-2">
                    <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlepreviousclick}> &larr; Previous</button>
                    <button type="button" disabled={this.state.page>=this.state.maxpage} class="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
                </div>

                </div>
                



            </>
        )
    }
}
