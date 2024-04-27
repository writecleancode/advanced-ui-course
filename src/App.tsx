import { GlobalStyle } from './assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { InfiniteScroll } from './episodes/InfiniteLoading/InfiniteScroll';
import { Welcome } from './components/Welcome';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Navigation />
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/infinite-scroll' element={<InfiniteScroll />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
