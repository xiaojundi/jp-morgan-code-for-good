import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/journal/bootstrap.css";


const API_ENDPOINTS = [

];

const ButtonNames = [
    {name: 'Volunteer Waitlist', url: 'volunteerWaitlist'},
    {name: 'Buddies Waitlist', url: 'buddyWaitlist'},
    {name: 'Already Paired', url: 'alreadyPaired'},
    {name: 'Potential Matches', url: 'potentialPairs'},
]

class ShowDetails extends Component {
    constructor(){
        super();
        this.state = {
            data: {

            }
        }
    }

    componentDidMount() {
        const URL = 'http://localhost:5000/'+this.props.info.url;
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({data}))
    }

    render() {
        return(
            <div>
                <h1 className='text-center'>{this.props.info.name}</h1>
                
            </div>
        );
    }
}
export class AdminProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Chris',
            lastName: '',
            currentIndex: 0
        }
    }

    render() {
        const {firstName, lastName} = this.state;
        return (
            <div className="container target">
            <div className="row">
                <div className="col-sm-8">
                    <br />
                    <br />
                    <h1 >{firstName} {lastName}</h1>
                    <br />
                </div>
                <div className="col-sm-2">
                    <a href="/users" className="pull-right">
                        <img title="profile image" className="profile-img img-circle img-responsive" src={require('./default-profile.png')} />
                        <br />
                    </a>
            </div>
            <br />
            </div>

            <div className='panel panel-default'>
                <div className='panel-heading text-center'>
                    {
                        ButtonNames.map((option, index) => (
                            <button className="btn btn-primary button-name" 
                                onClick = {() => this.setState({currentIndex: index})}
                            >
                                {option.name}
                            </button>
                        ))
                    }
                    
                </div>
            </div>

            <ShowDetails key={this.state.currentIndex} info={ButtonNames[this.state.currentIndex]} />
                
            </div>
        )
    }
}
