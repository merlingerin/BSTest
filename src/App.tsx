import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

// Components
import DefaultAppLayout from './layouts/DefaultAppLayout';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<DefaultAppLayout />
			</Router>
		</Provider>
	);
};

export default App;
