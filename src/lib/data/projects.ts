import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'PGYM-portfolio-FLUTTER',
		color: '#5e95e3',
		description:
			'I developed an innovative gym app that caters to the needs of members, coaches, and administrators through dedicated login portals. The app has been well-received, with over 3,000 downloads to date.Member Features Nutrition and Training Schedules Members can access personalized nutrition and training schedules tailored to their fitness goals.QR Code Scanning: Members can scan QR codes to watch instructional videos on how to use gym equipment effectively.Class and Offer Listings The app provides an up-to-date list of available classes and special gym offers, ensuring members never miss out on opportunities to enhance their fitness journey.Subscription Management Members can manage their subscriptions directly through the app.This app has significantly improved the gym experience by providing a seamless, user-friendly platform for managing fitness schedules, accessing training resources, and staying informed about gym activities and offers.',
		shortDescription:
			'Developed a gym app with three portals for members, coaches, and admins. Members access schedules, QR training videos, classes, and offers. Coaches manage member schedules, and admins view app statistics. The app has 3K+ downloads.',
		links: [{ to: 'https://play.google.com/store/apps/details?id=com.arrowitjo.pgym', label: 'Play Store' }, { to: 'https://apps.apple.com/jo/app/p-gym/id6450760357', label: 'App Store' }],
		logo: Assets.Flutter,
		name: 'PGYM',
		period: {
			from: new Date(2023, 6),
		},
		skills: getSkills('dart', 'firebase', 'flutter'),
		type: 'Mobile App',
		screenshots: [
			{
				label: 'Splash',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/e6/2f/c4/e62fc469-2708-5025-e7c8-731d054e6ad9/554e2125-c32b-44f2-8576-6a9699dd0123_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-06-29_at_04.29.53.png/400x800bb.png'
			},
			{
				label: 'Home',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/93/b9/2c/93b92ce7-437e-adc7-6551-452c285bf1b3/b975355b-d803-4375-9b64-15d28d1bdc33_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-08-27_at_20.46.04.png/400x800bb.png'
			},
			{
				label: 'Nutrition',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/17/0e/f4/170ef4f0-ed1b-dc03-699c-91ceb1693f6c/6daa2f0e-c205-48f5-bae8-567111f6363e_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-07-14_at_21.19.21.png/400x800bb.png'
			},
			{
				label: 'Training schedule',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/17/0e/f4/170ef4f0-ed1b-dc03-699c-91ceb1693f6c/6daa2f0e-c205-48f5-bae8-567111f6363e_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-07-14_at_21.19.21.png/400x800bb.png'
			},
			{
				label: 'Exercise',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/fc/da/c0/fcdac065-f439-49c8-f11c-1da364be048c/c549e638-573e-4d00-a2fe-79d46b099171_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-07-14_at_21.19.25.png/400x800bb.png'
			}
		]
	},
	{
		slug: 'farhtey-portfolio',
		color: '#ff3e00',
		description:
			'Farhtey An occasion mobile application that saves time and effort in searching for anything that suits you, everything that interests you about celebrations, breaks, arrangements, photographers, weddings, banquets, and others. You can now search and browse for any occasion that belongs to you and at competitive prices.',
		shortDescription:
			'Farhtey An occasion mobile application that saves time and effort in searching for anything that suits you, everything that interests you about celebrations, breaks, arrangements, photographers, weddings, banquets, and others.',
		links: [{ to: 'https://play.google.com/store/apps/details?id=com.arrowitjo.farhtey', label: 'Play Store' }, { to: 'https://apps.apple.com/jo/app/farhtey/id6470155925', label: 'App Store' }],
		logo: Assets.Flutter,
		name: 'Farhtey',
		period: {
			from: new Date(2023, 10)
		},
		skills: getSkills('dart', 'firebase', 'flutter'),
		type: 'Mobile App',
		screenshots: [
			{
				label: 'Splash',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/73/53/3a/73533ada-b867-14d5-39fb-6aaaebfa197c/ac76ab81-ab0a-4686-aee0-ca2f0c88df23_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-10-22_at_16.08.19.png/400x800bb.png'
			},
			{
				label: 'Home',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/cd/7a/a0/cd7aa041-5cf2-cc65-87c3-e2eff1ce57eb/35bc455e-9f51-4925-b0d9-0d80ba5baf24_Simulator_Screenshot_-_iPhone_11_pro_max_-_2024-02-15_at_00.51.26.png/400x800bb.png'
			},
			{
				label: 'Services',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/93/2d/c3/932dc3cb-347e-e522-a655-9a5748ea2979/d27a5b7f-f6e7-43bd-a704-eba5a8aa20f7_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-11-21_at_23.48.19.png/400x800bb.png'
			}

		]
	},
	{
		slug: 'qreeb-portfolio',
		color: '#ff3e00',
		description:
			'I was responsible for implementing the new design, adding new features, deploying the application, the real challenge was to understand the codebase and adding new the features on the existing code base, the codebase had no documentation, and the codebase was written using and old version of Flutter and a lot of bad practices were used in the codebase, I’ve managed to understand the code base added the new features Without resulting in breaking bugs in the Application',
		shortDescription:
			'Qreeb is ride haling app mainly used in Qatar',
		links: [],
		logo: Assets.Flutter,
		name: 'Qreeb',
		period: {
			from: new Date(2023, 4),
			to: new Date(2023, 12)
		},
		skills: getSkills('dart', 'firebase', 'flutter'),
		type: 'Mobile App',
		screenshots: [
			{
				label: 'Home',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/d9/08/dd/d908dd19-5279-5cbe-4f70-0540f65ababa/6b436b3e-a458-4594-8bb2-3e305fb5c3bb_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-11-08_at_02.24.42.png/400x800bb.png'
			},
			{
				label: 'Take a ride',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/9c/bf/cd/9cbfcd18-809a-2c13-1266-25d54d7d4ffc/39aa160a-66dd-4a67-b08b-20da8f73a1ce_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-06-25_at_14.56.13.png/400x800bb.png'
			},
			{
				label: 'History',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/90/c0/d0/90c0d054-7984-403f-bafa-17bd036117e3/eaccccae-8773-4f1c-837a-31e2576e4849_Simulator_Screenshot_-_iPhone_11_pro_max_-_2023-06-25_at_15.01.51.png/400x800bb.png'
			}

		],
	},
	{
		slug: 'alrazi-portfolio',
		color: '#ff3e00',
		description:
			'I was responsible for implementing transactions logic in the application and in the admin panel using Firebase, maintained the application and deployed the application on Play store and App store, And for my part in the admin panel, I have developed it from scratch using clean architecture and providers as a state management, in the admin panel the teacher can add courses, flash cards, files, and exams, when added the data will appear For the students on the applications. Technologies used: “Firebase phone auth, Firestore, cloud storage, cloud functions for notification”.',
		shortDescription:
			'An E-learning Application and admin panel used by university students.',
		links: [{ to: 'https://play.google.com/store/apps/details?id=com.yousef.sciophile', label: 'Play Store' }, { to: 'https://apps.apple.com/jo/app/alrazi-%D8%A7%D9%84%D8%B1%D8%A7%D8%B2%D9%8A/id6445819822', label: 'App Store' }, { to: 'https://alrazi-academy.com/landing', label: 'Website' }],
		logo: Assets.Flutter,
		name: 'الرازي - Alrazi',
		period: {
			from: new Date(2023, 4),
			to: new Date(2023, 12)
		},
		skills: getSkills('dart', 'firebase', 'flutter', 'css', 'html', 'js'),
		type: 'Mobile App & Website',
		screenshots: [
			{
				label: 'Leaderboards',
				src: 'https://play-lh.googleusercontent.com/74tnOIx9lYm8rUM10aq8glGBoKzZjJHGJiLQGuUSRRjtwQECz27OocAloSCJVPr4rw=w526-h296'
			},
			{
				label: 'Lessons',
				src: 'https://play-lh.googleusercontent.com/qq5Zkd9HZ5sY-JkuC84_7nJuoJh6rSzcIlICQ-OleMusBHMalrNdNFw3-qRINWKghUo=w526-h296'
			},
			{
				label: 'Home',
				src: 'https://play-lh.googleusercontent.com/lJhdDloA4NBKScSVpaM31l9YMckqvb_maUSnWvAGTkCziqa3fVkpsvGqxTTwJNFW0g=w526-h296'
			}

		],
	},

];

export const title = 'Projects';
