import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">
					<div style={{ padding: '0 15px' }} className="logo">
						BS
					</div>
				</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/passenger">Passenger</Link>
					</li>
					<li>
						<Link to="/rooming">Rooming</Link>
					</li>
					<li>
						<Link to="/transfer">Transfer</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
