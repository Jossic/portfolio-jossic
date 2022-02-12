import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<div className='flex justify-between items-center h-20 w-screen'>
				<h1>Jossic Lapierre</h1>
				<nav>
					<ul className='flex flex-row list-none gap-5 pr-2'>
						<li>
							<Link href='/about'>
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href='/projects'>
								<a>Projects</a>
							</Link>
						</li>
						<li>
							<Link href='/experiences'>
								<a>Experiences</a>
							</Link>
						</li>
						<li>
							<Link href='/contact'>
								<a>Contact</a>
							</Link>
						</li>
					</ul>
					{/* Rajouter les socials */}
				</nav>
			</div>
		</header>
	);
};

export default Header;
