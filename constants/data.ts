// JS : https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png
// TS: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png
// REACT: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png
// FIREBASE: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png
// MONGO: https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png
// NEXT: /nextjs.png
// Node: /nodejs.png
// React N : /react-native.svg
// Redux : /redux.svg

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
			slug: 'gites-wao',
			description: `Réalisation d'un app fullstack`,
			type: `Web App`,
			link: `/projects/gites-wao`,
			imgUrl: '/backoffice.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'/nextjs.png',
				'/nodejs.png',
				'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png',
			],
			descriptionFront: {
				title: `Front app: Site vitrine et back office pour une app de gestion locative`,
				description: [
					{
						image: ``,
						text: `Construire une application entière avec Next.js et Material-ui.`,
					},
					{
						image: ``,
						text: `Une partie vitrine => Présentation des gites, contacts, devis, réservation, FAQ, alentours.`,
					},
					{
						image: `/backoffice.png`,
						text: `Une partie back-office (pour l’admin) => Permet la gestion des réservations, facturations, messages, mails
						automatiques, utilisateurs, clients, statistiques.`,
					},
					{
						image: `/backoffice-cgh-img.png`,
						text: `Permettre à l’admin de changer les images, fichiers et certains textes du site`,
					},
					{
						image: `/page-paiement.png`,
						text: `Permettre au client de payer via PayPal`,
					},
					{
						image: `/notif.png`,
						text: `Notifications en temps réel (socket.io)`,
					},
					{
						image: `/mailer.png`,
						text: `Création de mail personnalisés intégrant des variables.`,
					},
				],
			},
			descriptionBack: {
				title: `API app`,
				description: [
					{
						image: ``,
						text: `Construire une API complète, avec Express / Mongo DB.`,
					},
					{
						image: ``,
						text: `Construction des modèles en fonction des besoins du projet.`,
					},
					{
						image: ``,
						text: `Échanges en temps réels entre le serveur et le client avec Mongo DB change Stream et socket.io`,
					},
					{
						image: ``,
						text: `Gestion automatique de taches (node-cron).`,
					},
					{
						image: ``,
						text: `Création d’un script pour importer l’ancienne base de données MySQL.`,
					},
					{
						image: ``,
						text: `Création de PDF (contrats et factures).`,
					},
					{
						image: ``,
						text: `Stockage des fichiers et images sur Amazon S3`,
					},
					{
						image: ``,
						text: `Construction de l’algorithme permettant le calcul des tarif spécifiques`,
					},
				],
			},
		},
		{
			title: 'Reminder App',
			slug: 'reminder',
			description: `Il s'agit d'une app de prise de note liées à des projets mise en place via un cours sur React Native`,
			type: `Mobile App`,
			link: `/projects/reminder`,
			imgUrl: '/placeholdertech.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'/react-native.svg',
				'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png',
				'/redux.svg',
			],
			descriptionFront: {
				title: `Fontend : Création d'une app React Native (Expo) permettant la gestion des notes avec la possibilité d'ajouter des images`,
				description: [
					{
						image: ``,
						text: `Construire une application entière avec Next.js et Material-ui.`,
					},
				],
			},
			descriptionBack: {
				title: `Backend : La gestion du backend se fait via Firebase, ainsi que le système d'authentification`,
				description: [
					{
						image: ``,
						text: `Connecter l'appli au backend de Firebase.`,
					},
				],
			},
		},
		{
			title: 'Juste Prix App',
			slug: 'juste-prix',
			description: ``,
			type: `Mobile App`,
			link: `/projects/juste-prix`,
			imgUrl: '/placeholdertech.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'React-Native',
				'Firebase',
				'Redux',
			],
			descriptionFront: {
				title: `Front app: Site vitrine et back office pour une app de gestion locative`,
				description: [
					{
						image: ``,
						text: `Construire une application entière avec Next.js et Material-ui.`,
					},
				],
			},
			descriptionBack: {
				title: `API app`,
				description: [
					{
						image: ``,
						text: `Construire une API complète, avec Express / Mongo DB.`,
					},
				],
			},
		},
		{
			title: 'Simple-Workout App',
			slug: 'simple-workout',
			description: `Il s'agit d'un projet personnel que je mets en place afin de suivre mon activité sportive (Cardio, musculation, divers exercices), Cette application est faite en React Native et est connectée à un backend Firebase`,
			type: `Mobile App`,
			link: `/projects/simple-workout`,
			imgUrl: '/placeholdertech.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'React-Native',
				'Firebase',
				'Redux',
			],
			descriptionFront: {
				title: `Front app: App mobile de gestion d'activité sportive ainsi qui le suivi du poids`,
				description: [
					{
						image: ``,
						text: `Construction de l'architecture de l'application, de la structure des données et des fonctionnalités. Construction également de maquettes légères pour la réalisation de l'application`,
					},
					{
						image: ``,
						text: `Construction de l'application mobile avec le framework Tailwind CSS.`,
					},
				],
			},
			descriptionBack: {
				title: `API app`,
				description: [
					{
						image: ``,
						text: `Construction .`,
					},
					{
						image: ``,
						text: `Construire une application entière avec Next.js et Material-ui.`,
					},
				],
			},
		},
		{
			title: 'MERN Blog',
			slug: 'mern-blog',
			description: ``,
			type: `Web App`,
			link: `/projects/mern-blog`,
			imgUrl: '/placeholdertech.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'NextJS',
				'Typescript',
			],
			descriptionFront: {
				title: `Front app: Site vitrine et back office pour une app de gestion locative`,
				description: [
					{
						image: `/mailer.png`,
						text: `Création de mail personnalisés intégrant des variables.`,
					},
				],
			},
			descriptionBack: {
				title: `API app`,
				description: [
					{
						image: ``,
						text: `Construire une API complète, avec Express / Mongo DB.`,
					},
				],
			},
		},
		{
			title: 'MERN Ecom',
			slug: 'mern-ecom',
			description: ``,
			type: `Web App`,
			link: '/projects/mern-ecom',
			imgUrl: '/tmk.jpg',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'ReactJS',
				'NodeJs',
				'Redux',
				'NodeJS',
			],
			descriptionFront: {
				title: `Front app: Site vitrine et back office pour une app de gestion locative`,
				description: [
					{
						image: ``,
						text: `Construire une application entière avec Next.js et Material-ui.`,
					},
				],
			},
			descriptionBack: {
				title: `API app`,
				description: [
					{
						image: ``,
						text: `Construire une API complète, avec Express / Mongo DB.`,
					},
				],
			},
		},
		{
			title: 'Taskify',
			slug: 'taskify',
			description: ``,
			type: `Web App`,
			link: `/projects/taskify`,
			imgUrl: '/placeholdertech.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'ReactJS',
				'Typescript',
			],
			descriptionFront: {
				title: `Front app: Site vitrine et back office pour une app de gestion locative`,
				description: [
					{
						image: ``,
						text: `Construire une application entière avec Next.js et Material-ui.`,
					},
				],
			},
			descriptionBack: {
				title: `API app`,
				description: [
					{
						image: ``,
						text: `Construire une API complète, avec Express / Mongo DB.`,
					},
				],
			},
		},
		{
			title: 'DevConnector',
			slug: 'devconnector',
			description: ``,
			type: `Web App`,
			link: `/projects/devconnector`,
			imgUrl: '/placeholdertech.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'ReactJS',
				'NodeJS',
			],
			descriptionFront: {
				title: `Front app: Site vitrine et back office pour une app de gestion locative`,
				description: [
					{
						image: ``,
						text: `Construire une application entière avec Next.js et Material-ui.`,
					},
				],
			},
			descriptionBack: {
				title: `API app`,
				description: [
					{
						image: ``,
						text: `Construire une API complète, avec Express / Mongo DB.`,
					},
				],
			},
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
			slug: '',
			company: 'Freelance',
			year: '2022',
			companyLink: 'https://lapi-dev.com',
			desc: `Creation d'une app mobile pour le suivi sportif`,
		},
		{
			title: 'Fullstack Developer',
			slug: '',
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

export const images = [
	{
		title: 'ReactJS',
		image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png',
	},
];

export default userData;
