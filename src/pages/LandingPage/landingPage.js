import React from 'react';
import './landingPage.scss';
import NavBar from '../../components/NavBar/navBar';
import Axios from 'axios';

const Card = () => {
    <div className="card">
        <div>
            <img src="" alt="alt" />
        </div>
        <div>
            <h4>Title</h4>
            <p>Description Lorem ipsm blah blah</p>
            <h6>date</h6>
        </div>
    </div>
};

class LandingPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            News: [],
        };
    }

    componentWillMount () {
        this.fetchNews();
    }

    fetchNews() {
        Axios
            .get('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=a97f73800a884fdcb3a1abf8a3d229f8')
            .then(function (response) {
                if(response.data && response.status === 200){
                    this.setState ({
                      News:response.data.articles,
                    });
                }
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render () {
        return (
            <div>
                <NavBar/>
                <Card />
                <footer />
            </div>
        );
    }

}

export default LandingPage;