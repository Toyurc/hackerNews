import React from 'react';
import './landingPage.css';
import NavBar from '../../components/NavBar/navBar';
import Axios from 'axios';
import Card from '../../components/Card/card';

class LandingPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            news: [],
        };
        this.fetchNews = this.fetchNews.bind(this);
    }

    componentWillMount () {
        this.fetchNews();
    }

    fetchNews() {
        Axios
            .get('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=a97f73800a884fdcb3a1abf8a3d229f8')
            .then(response =>  {
                this.setState ({
                    news: response.data.articles,
                  });
                console.log(this.state.news[0]);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }

    render () {
        return (
            <React.Fragment>
                <NavBar/>
                <React.Fragment>
                    <div className="background" >
                        {this.state.news.map((props, index) => (
                            <div className="card card-width" key={index}>
                                <div className="image">
                                    <img src={props.urlToImage} alt="alt" height="160px;" width="180px;" />
                                </div>
                                <div className="details">
                                    <h4>{props.title}</h4>
                                    <p>{props.description}</p>
                                    <h6>{props.publishedAt}</h6>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </React.Fragment>
                <footer />
            </React.Fragment>
        );
    }

}

export default LandingPage;