import React, {Component} from 'react'
import './login.css'
import $ from 'jquery'

$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

class Login extends Component{
	constructor(props){
		super(props)
		this.state= {
			userName: "",
			passWord: ""
		}
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChangeUser(event) {
     this.setState({userName: event.target.value});
  	}
  	handleChangePassword(event){
  	  this.setState({passWord: event.target.value});
  	}
  	handleSubmit(event){

    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => console.log("asdfasdfa"))
      event.preventDefault();
  	}
	render(){
		return (
		<div>
			<div className='image-wrapper'><img className="toImage" src="https://www.bestbuddies.org/wp-content/uploads/2017/01/best-buddies-logo2.png" alt=""/></div>
			<div className="container">
		    	<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-login">
							<div className="panel-heading">
								<div className="row">
									<div className="col-xs-6">
										<a href="#" className="active" id="login-form-link">Login</a>
									</div>
									<div className="col-xs-6">
										<a href="#" id="register-form-link">Register</a>
									</div>
								</div>
								<hr />
							</div>
							<div className="panel-body">
								<div className="row">
									<div className="col-lg-12">
										<form onSubmit={this.handleSubmit} id="login-form" action="https://phpoll.com/login/process" method="post" role="form" style={{display: "block"}}>
											<div className="form-group">
												<input onChange={this.handleChangeUser} value={this.state.userName} type="text" name="username" id="username2" tabIndex="1" className="form-control" placeholder="username"/>
											</div>
											<div className="form-group">
												<input onChange={this.handleChangePassword} value={this.state.passWord} type="password" name="password" id="password1" tabIndex="2" className="form-control" placeholder="Password" />
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-sm-6 col-sm-offset-3">
														<input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
													</div>
												</div>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-lg-12">
														<div className="text-center">
															<a href="https://phpoll.com/recover" tabIndex="5" className="forgot-password">Forgot Password?</a>
														</div>
													</div>
												</div>
											</div>
										</form>
										<form id="register-form" action="https://phpoll.com/register/process" method="post" role="form" style={{display: "none"}}>
											<div className="form-group">
												<input type="text" name="username" id="username1" tabIndex="1" className="form-control" placeholder="Username" value="" />
											</div>
											<div className="form-group">
												<input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value="" />
											</div>
											<div className="form-group">
												<input type="password" name="password" id="password2" tabIndex="2" className="form-control" placeholder="Password" />
											</div>
											<div className="form-group">
												<input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password" />
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-sm-6 col-sm-offset-3">
														<input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now" />
													</div>
												</div>
											</div>
										</form>
									</div>
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

export default Login