import { GlobalStyle } from './assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Welcome } from './components/Welcome';
import { InfiniteScroll } from './episodes/InfiniteLoading/InfiniteScroll';
import { AccordionFaq } from './episodes/AccordionFaq/AccordionFaq';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Navigation />
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/infinite-scroll' element={<InfiniteScroll />} />
					<Route path='/accordion-faq' element={<AccordionFaq />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
