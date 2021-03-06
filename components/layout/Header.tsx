import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import userData from 'constants/data';
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	return (
		<div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
			<div className='flex  md:flex-row justify-between items-center'>
				{/* Logo / Home / Text */}

				<div className='flex flex-col'>
					<Link href='/'>
						<a>
							<h1 className='font-semibold text-xl dark:text-gray-100'>
								{userData.name}
							</h1>
							<p className='text-base font-light text-gray-500 dark:text-gray-300'>
								{userData.designation}
							</p>
						</a>
					</Link>
				</div>

				<div className='space-x-8 hidden md:block'>
					<div className='flex gap-7'>
						<Link href='/About'>
							<a
								className={`text-base group ${
									router.asPath === '/About'
										? 'text-gray-800 font-bold dark:text-gray-400'
										: 'text-gray-600 dark:text-gray-300 font-normal'
								}`}>
								<p className='relative overflow-hidden'>
									<div className='absolute h-0.5 w-full bg-gray-600 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
									About
								</p>
							</a>
						</Link>
						<Link href='/projects'>
							<a
								className={`text-base group ${
									router.asPath === '/projects'
										? 'text-gray-800 font-bold dark:text-gray-400'
										: 'text-gray-600 dark:text-gray-300 font-normal'
								}`}>
								<p className='relative overflow-hidden'>
									<div className='absolute h-0.5 w-full bg-gray-600 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
									Projects
								</p>
							</a>
						</Link>
						<Link href='/Experiences'>
							<a
								className={`text-base group ${
									router.asPath === '/Experiences'
										? 'text-gray-800 font-bold dark:text-gray-400'
										: 'text-gray-600 dark:text-gray-300 font-normal '
								}`}>
								<p className='relative overflow-hidden'>
									<div className='absolute h-0.5 w-full bg-gray-600 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
									Experiences
								</p>
							</a>
						</Link>
						<Link href='/Contact'>
							<a
								className={`text-base group ${
									router.asPath === '/Contact'
										? 'text-gray-800 font-bold dark:text-gray-400'
										: 'text-gray-600 dark:text-gray-300 font-normal '
								}`}>
								<p className='relative overflow-hidden'>
									<div className='absolute h-0.5 w-full bg-gray-600 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
									Contact
								</p>
							</a>
						</Link>
					</div>
				</div>

				<div className='space-x-4 flex flex-row items-center'>
					<a
						href={userData.socialLinks.twitter}
						className='text-base font-normal text-gray-600 dark:text-gray-300'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-twitter h-5 w-5'
							viewBox='0 0 16 16'>
							<path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
						</svg>
					</a>
					<a
						href={userData.socialLinks.linkedin}
						className='text-base font-normal text-gray-600 dark:text-gray-300'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-linkedin h-5 w-5'
							viewBox='0 0 16 16'>
							<path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
						</svg>
					</a>
					<button
						aria-label='Toggle Dark Mode'
						type='button'
						className='w-10 h-10 p-3 rounded focus:outline-none'
						onClick={() =>
							setTheme(theme === 'dark' ? 'light' : 'dark')
						}>
						{mounted && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								stroke='currentColor'
								className='w-4 h-4 text-yellow-500 dark:text-yellow-500'>
								{theme === 'dark' ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
									/>
								)}
							</svg>
						)}
					</button>
				</div>
			</div>
			<div className='space-x-8 block md:hidden mt-4'>
				<Link href='/About'>
					<a className='text-base font-normal text-gray-600 dark:text-gray-300'>
						About
					</a>
				</Link>
				<Link href='/projects'>
					<a className='text-base font-normal text-gray-600 dark:text-gray-300'>
						Projects
					</a>
				</Link>
				<Link href='/Experiences'>
					<a className='text-base font-normal text-gray-600 dark:text-gray-300'>
						Experiences
					</a>
				</Link>
				<Link href='/Contact'>
					<a className='text-base font-normal text-gray-600 dark:text-gray-300'>
						Contact
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
