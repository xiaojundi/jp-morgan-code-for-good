import React, { Component } from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaInstagram from 'react-icons/lib/fa/instagram';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/journal/bootstrap.css";

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                firstName: 'Xiaojun',
                lastName: 'Di',
                description: 'A long description about me',
                joined: '2.13.2014',
                username: 'Shawn',
                gender: 'Male',
                age: 24,
                bestTimeToSocialize: 'Weekends',    
                borough: 'Queens',
                zipCode: 11428,
                preferredCommunication: 'train',
                interests: [
                    {name: 'Acting / Drama', description: 'I love and enjoy doing teather'},
                    {name: 'Cooking', description: 'Handmade pastas are my favorite'},
                    {name: 'Painting', description: 'Enjoy painting comic superheroes'}
                ]
            }
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/buddyInfo')
            .then(response => response.json())
            .then(data => this.setState({data}, () => console.log(data)));
    }
    render() {
        const {firstName,
            lastName,
            description, 
            username, 
            gender, 
            joined, 
            age, 
            interests, 
            bestTimeToSocialize, 
            travelIndependent, 
            zipCode, 
            borough, 
            preferredCommunication, 
            role} = this.state.data;
        return (
            <div className="container target">
            <div className="row">
                <div className="col-sm-8">
                    <br />
                    <br />
                    <h1 >{firstName} {lastName}({role})</h1>
                    <br />
                </div>
                <div className="col-sm-2">
                    <a href="/users" className="pull-right">
                        <img title="profile image" className="profile-img img-circle img-responsive" src={require('./default-profile.png')} />
                        <br />
                    </a>

            </div>
            <br />
            <div className="row">
                <div className="col-sm-3">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">Profile</div>
                        <ul className="list-group">
                            <li className="list-group-item text-right"><span className="pull-left"><strong className="">Username</strong></span> {username}</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong className="">Gender</strong></span> {gender}</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong className="">Age</strong></span> {age}</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong className="">Best Time To Socialize</strong></span> {bestTimeToSocialize}</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong className="">Location</strong></span>{borough}, {zipCode}</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong className="">Transportation</strong></span>{preferredCommunication}</li>
                        </ul>
                    </div>
            
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">Website <i className="fa fa-link fa-1x"></i>

                        </div>
                        <div className="panel-body"><a href="https://www.bestbuddies.org/" className="" target='_blank'>Best Buddies</a>

                        </div>
                    </div>
                    
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">Activities</div>
                    </div>
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">Social Media</div>
                        <span><FaFacebookSquare size={40} color='blue'/></span>
                        &emsp;
                        <span><FaTwitter size={40} color='aqua'/></span>
                        &emsp;
                        <span><FaInstagram size={40} color='#cd486b'/></span>
                        <div className="panel-body">
                        </div>
                    </div>
                </div>
    
                <div className="col-sm-9" contenteditable="false">
                    <div className="panel panel-default">
                        <div className="panel-heading">{firstName}</div>
                        <div className="panel-body"> {description}

                        </div>
                    </div>
                    <div className="panel panel-default target">
                        <div className="panel-heading" contenteditable="false">Hobbies and Interests</div>
                        <div className="panel-body">
                            <div className="row">
                        {interests && interests.map((interest) => (
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <div className="caption">
                                        <h3>
                                            {interest.name}
                                        </h3>
                                        <p>
                                            {interest.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            )
                        )
                        }
                            
                    </div>
                                
                    </div>
                            
                </div>
                        
            </div>
                    
            </div>

                </div>
                
            </div>
        )
    }
}