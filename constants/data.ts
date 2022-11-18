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
			imgUrl: '/Reminder.png',
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
						type: 'mobile',
						image: `/Reminder-home.png`,
						text: `Construction d'une petite App de gestion de notes et projet`,
					},
					{
						type: 'mobile',
						image: `/Reminder-ajoutprojet.png`,
						text: `Permet à l'utilisateur d'ajouter des projets avec image et des notes`,
					},
					{
						type: 'mobile',
						image: `/reminder-page.png`,
						text: `Liste des projets et notes`,
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
					{
						image: ``,
						text: `Gestion de l'authentification via Firebase.`,
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
			imgUrl: '/jp-placeholder.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'/react-native.svg',
				'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png',
				'/redux.svg',
			],
			descriptionFront: {
				title: `Front app: Petit jeu du juste prix parametrable`,
				description: [
					{
						type: 'mobile',
						image: `/jp-home.png`,
						text: `Jeu du juste prix - Page d'accueil`,
					},
					{
						type: 'mobile',
						image: `/jp-histo.png`,
						text: `Suivi des historiques`,
					},
					{
						type: 'mobile',
						image: `/jp-param.png`,
						text: `Parametrage des nombres stockés via redux`,
					},
				],
			},
			descriptionBack: {
				title: `API app`,
				description: [
					{
						image: ``,
						text: `Connecter l'appli au backend de Firebase.`,
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
			imgUrl: '/construction.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'React-Native',
				'Firebase',
				'Redux',
			],
			descriptionFront: {
				title: `Front app: App mobile de gestion d'activité sportive ainsi que de suivi du poids`,
				description: [
					{
						image: ``,
						text: `Construction de l'architecture de l'application, de la structure des données et des fonctionnalités. Construction également de maquettes légères pour la réalisation de l'application`,
					},
					{
						image: ``,
						text: `L'app est en cours de développement, les images seront disponibles plus tard`,
					},
				],
			},
			descriptionBack: {
				title: `Backend sur Firebase`,
				description: [
					{
						image: ``,
						text: `Connecter l'appli au backend de Firebase.`,
					},
					{
						image: ``,
						text: `Gestion de l'authentification via Firebase.`,
					},
				],
			},
		},
		{
			title: 'MERN Blog',
			slug: 'mern-blog',
			description: `Il s'agit d'un blog ou je compte publier des articles sur la MERN stack et technos complémentaires, réalisé en Next JS + Typescript`,
			type: `Web App`,
			link: `/projects/mern-blog`,
			imgUrl: '/blog-placeholder.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'/nextjs.png',
				'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
			],
			descriptionFront: {
				title: `Front app: Blog sur la stack MERN`,
				description: [
					{
						image: `/blog-placeholder.png`,
						text: `Page d'accueil.`,
					},
					{
						image: ``,
						text: `Ajout et rédaction d'articles au format .mdx.`,
					},
				],
			},
		},
		{
			title: 'MERN Ecom',
			slug: 'mern-ecom',
			description: `Application e-commerce avec ReactJs (+Helmet) et backend nodeJS Express, permettant de gérer les paiements via Paypal`,
			type: `Web App`,
			link: '/projects/mern-ecom',
			imgUrl: '/ecom-placeholder.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'ReactJS',
				'NodeJs',
				'Redux',
				'NodeJS',
			],
			descriptionFront: {
				title: `Front app: Site vitrine et back office pour ajouter de nouveaux produits + suivi des commandes`,
				description: [
					{
						image: `/ecom-placeholder.png`,
						text: `Construction d'une boutique simple.`,
					},
					{
						image: `/ecom-search.png`,
						text: `Rechercher dans les titres.`,
					},
					{
						image: `/list-products.png`,
						text: `Liste des produits dans l'admin.`,
					},
					{
						type: 'mobile',
						image: `/add-product.png`,
						text: `Ajouter, modifier, supprimer les produits.`,
					},
					{
						image: `/user-profile.png`,
						text: `Gestion du profil utilisateur et des commandes en cours.`,
					},
					{
						image: `/product.png`,
						text: `Fiche produit avec possibilité d'ajouter des commentaires avec une note.`,
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
						text: `Requetes CRUD à l'API`,
					},
					{
						image: ``,
						text: `Gestion des utilisateurs et de l'authentification.`,
					},
				],
			},
		},
		{
			title: 'Taskify',
			slug: 'taskify',
			description: `Petite application de gestion des tâches avec Drag & Drop en Typescript`,
			type: `Web App`,
			link: `/projects/taskify`,
			imgUrl: '/taskify-placeholder.png',
			technos: [
				`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`,
				'ReactJS',
				'Typescript',
			],
			descriptionFront: {
				title: `Front app: Site vitrine et back office pour une app de gestion locative`,
				description: [
					{
						image: `/taskify-placeholder.png`,
						text: `Ajouter, modifier, supprimer, valider une tache. Possibilité de la basculer en tache terminée via un drag & drop.`,
					},
				],
			},
		},
	],
	about: {
		title: "Ancien comptable reconverti, je me suis pris de passion pour le code. Je continue de me former en permanence en pratiquant. Je m’intéresse également beaucoup à tout ce qui est lié au Software Craftmanship en général et à la qualité de code, car coder c’est bien, mais bien coder c’est mieux.",
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
			title: 'Software Engineer',
			slug: '',
			company: 'Marvin, Freelance',
			year: 'juin 2022 à dec 2022',
			companyLink: 'https://marvin-bot.com/',
			desc: `Développement de features pour la création d'un robot de gestion de bien immobilier.`,
		},
		{
			title: 'Frontend Developer',
			slug: '',
			company: 'Organigram.io, Freelance',
			year: 'mars 2022 à mai 2022',
			companyLink: 'https://organigram.io/',
			desc: `Réalisation de test E2E pour une application de gestion d'organigrammes déployés sur la blockchain.`,
		},
		{
			title: 'Fullstack Developer',
			slug: '',
			company: 'WAO, Freelance',
			year: 'fev. 2020 à fev. 2022',
			companyLink: 'https://gites-wao.fr',
			desc: `Creation de l'application web compléte, API, front et asministration.`,
		},
	],
	resumeUrlFR:
		'https://drive.google.com/file/d/12wFXDGanvwdzG1Kw9e4zz4lCFJSLHtrP/view?usp=share_link',
	resumeUrlEN:
		'https://drive.google.com/file/d/1pFZyao6AMLYM0JknlN-xEqnaWNzj8j9l/view?usp=sharing',
	socialLinks: {
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
