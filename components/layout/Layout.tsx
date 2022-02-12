// Composants
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
	return (
		<div
			style={{
				display: 'flex',
				height: '100vh',
				flexDirection: 'column',
			}}>
			<Header />

			<div style={{ flexGrow: 1 }}>
				<div className='container'>{children}</div>
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
