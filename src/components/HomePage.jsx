import React from 'react';
import NewsDiv from "./NewsDiv";
import WatchLater from "./WatchLater";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
      }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.interval = setInterval(() => {
          this.fetch(`${this.props.state.api}&from-date=${this.props.state.date}`)
          .then(res => {                                                                                                      
            if(res.results[0]) {
              alert("There are new articles to read")
              this.saveArticles(res.results, true)
            }
          })
        }, 30000)


        this.fetch(this.props.state.api)
        .then(res => {
          let new_date = new Date().toISOString()
          this.saveArticles(res.results)
          this.props.NEW_DATE(new_date)
        })
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        clearInterval(this.interval)
      }


      fetch(api) {
        return new Promise((resolve, reject) =>{
          fetch(api)
          .then(results => {
            return results.json();
          })
          .then(data => {
            resolve(data.response)
          })
          .catch(err => {
            reject(err)
          })
        })
      }

      saveArticles(results, highlighted = false) {
        let articles = [];
        results.map((item) => {
          let html_text = []
          if(!item.webTitle || !item.sectionName || !item.fields || !item.fields.thumbnail) {
            return
          } else {
            item.blocks.body.map((text) => {
              html_text.push(text.bodyHtml)
            })
            articles.push({
              title: item.webTitle, 
              category: item.sectionName, 
              img: item.fields.thumbnail, 
              html_text, 
              highlighted, 
              watched: 0, 
              watch_later: false
            })
          }
        });

          if(highlighted) {
            let new_date = new Date().toISOString()
            this.props.SAVE_HIGHLIGHTED_ARTICLES(articles, new_date)
          } else {
            this.props.SAVE_NEW_ARTICLES(articles);
          }
        }




      handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        this.fetch(`${this.props.state.api}&page=${this.props.state.page}`)
        .then(res => {
          this.saveArticles(res.results)
        })
      }
  
      render() {
        let watch_later = [];
        let articles = [];
        this.props.state.articles.map((item, i) => {
          if(item.watch_later) {
            watch_later.push(<WatchLater WATCHED = {this.props.WATCHED} WATCH_LATER = {this.props.WATCH_LATER} img = {item.img} title = {item.title} key = {i} i = {i}/>)
          }
          articles.push(<NewsDiv WATCHED = {this.props.WATCHED} item = {item} key = {i} i = {i}/>)
        })
        return (
          <div className = "container">
            {watch_later[0]?
            <div>
              <h3>Watch Later</h3>
              <ul className = "watch_later_ul">
              {watch_later}
              </ul>
            </div>: null}
            {articles}
          </div>
          );
      }
};


export default HomePage;