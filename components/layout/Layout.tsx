import Footer from './Footer';
import Header from './Header';

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
