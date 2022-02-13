const userData = {
	githubUsername: 'Jossic',
	name: 'Jossic Lapierre',
	designation: 'Full-Stack Developer',
	avatarUrl: '/avatar.jpg',
	email: 'jossic.lapierre@gmail.com',
	phone: '+33 613385655',
	address: 'Reims, Grand Est, France',
	projects: [
		{
			title: 'Les gîtes WAO',
			link: 'https://tailwindmasterkit.com',
			imgUrl: '/tmk.jpg',
			technos: ['NextJs', 'NodeJs'],
			descriptionFront: [`Build an app`],
			descriptionBack: [`Build an API from scratch`],
		},
		{
			title: 'Reminder App',
			link: 'https://placeholdertech.in',
			imgUrl: '/placeholdertech.png',
			technos: ['React-Native', 'Firebase'],
		},
	],
	about: {
		title: "Ancien comptable reconverti, je me suis pris de passion pour le code. Je ne cesse d'apprendre et de me perfectionner par la pratique au quotidien",
		description: [
			`J'ai suivi un DUT informatique en 2007-2009 pour lequel je n'ai pas passé l'examen car je manquait de maturité et souhaitais travailler. J'ai donc travaillé en tant que vendeur et commercial pendant quelques années, puis, je me suis retrouvé au chômage`,
			`Pôle Emploi m'a fait passé des tests d'intérêts psychologiques qui m'ont orienté vers la comptabilité, j'ai donc repris mes études (bac+2 puis bac+3) et ai commencé à travaillé en tant qu'assistant comptable, puis je suis très vite passé comptable. Seulement, j'ai rapidement fais le tour du métier, et j'étais frustré de n'avoir besoin d'aucune créativité, aucune liberté`,
			`J'ai décidé de changer d'entreprise au bout de 3 ans, tout en reprennant le code à partir de zéro (tous les soirs et week-ends), j'ai donc choisi Javascript qui me permettrait à terme de pouvoir développer des applications fullstack, web, mobiles et logicielles. J'ai suivi des cours Udemy sur les thèmes suivants: HTML, CSS, Javascript, Git, SASS, NodeJs, MongoDB, ReactJs, NextJs.`,
			`Cependant, le métier restant le même, ma frustration était identique. J'ai pu bénéficier d'une rupture conventionnelle au bout d'un an`,
			`Fin 2020, j'ai donc pu continuer d'apprendre à temps plein, et, début 2021, j'ai pu trouver un client en freelance pour une application qui avait besoin de changer complétement son app. C'était un très gros projet pour un junior, mais celui-ci m'a permi d'apprendre énormément, de me confronter à beaucoup d'obstacles et de me perfectionner, et d'apprécier le challenge.`,
			`Depuis, je continue de pratiquer au quotidien, sur des projets personnels, actuellement je travaille sur une app React-Native.`,
			`Je suis très sensible aux bonnes pratiques de code, à la qualité de celui-ci, je m'intéresse à tout ce qui à trait à cela (clean code, principes SOLID, design patterns, TDD) et essai d'appliquer au maximum ces principes sur mes projets tout en ajoutant typescript pour renforcer la qualité.`,
		],
		currentProject: 'simple-workout',
		currentProjectUrl: 'https://github.com/Jossic/simple-workout-frontend',
	},
	experience: [
		{
			title: 'Mobile Developer',
			company: 'Freelance',
			year: '2022',
			companyLink: 'https://lapi-dev.com',
			desc: `Creation d'une app mobile pour le suivi sportif`,
		},
		{
			title: 'Fullstack Developer',
			company: 'WAO/Freelance',
			year: '2021',
			companyLink: 'https://gites-wao.fr',
			desc: `Creation de l'application web compléte, API et front, réalisé en NextJs pour l'aspect SEO`,
		},
	],
	resumeUrlFR:
		'https://drive.google.com/file/d/1b2d3HKQJtYs0MJ2tixZv_ZDmeefoGKxa/view?usp=sharing',
	resumeUrlEN:
		'https://drive.google.com/file/d/1pFZyao6AMLYM0JknlN-xEqnaWNzj8j9l/view?usp=sharing',
	socialLinks: {
		// instagram: 'https://instagram.com/jossic',
		twitter: 'https://twitter.com/LapierreJossic',
		linkedin: 'https://linkedin.com/in/jossic',
		github: 'https://github.com/jossic',
		facebook: 'https://www.facebook.com/LAPI-DEV-107384917848838',
	},
};

export default userData;
