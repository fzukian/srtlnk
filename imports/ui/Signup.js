import React from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

//import PropTypes from 'prop-types';

export default	class Signup extends React.Component {
	constructor(props) {
			super(props);
				this.state = {
						error: ''
				};
	}

	onSubmit(e){
		e.preventDefault();
		let email = this.refs.email.value.trim();
		let password  = this.refs.password.value.trim();

		Accounts.createUser({email, password}, (err) => {
			console.log('consola', err);
		});
//		this.setState({
//				error: 'algo esta mal'
//		});
	}

		render() {
			return (
				<div>
					<h1>Signup component here</h1>
					{this.state.error ? <p>{this.state.error}</p>: undefined}
					<form onSubmit={this.onSubmit.bind(this)}>
							<input type='email' ref='email' name='email' placeholder='Email'/ >
							<input type='password' ref='password' name='password' placeholder='Password'/>
							<button>Crear Cuenta</button>
					</form>
					<Link to="/">Already have an account</Link>
				</div>
			);
		}
};
