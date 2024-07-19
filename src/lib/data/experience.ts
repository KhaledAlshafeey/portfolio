import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'ovu',
		company: 'OVU',
		description: 'Developing & maintaining OVU App',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Jordan - Amman',
		period: { from: new Date(2024, 2) },
		skills: getSkills('flutter', 'dart', 'firebase'),
		name: 'Flutter Mobile developer',
		color: 'pink',
		links: [],
		logo: Assets.Ovu,
		shortDescription: 'Developing & maintaining OVU App.'
	},
	{
		slug: 'qreeb',
		company: 'Qreeb Technology',
		description: 'I was responsible for implementing the new design, adding new features, deploying the application, the real challenge was to understand the codebase and adding new the features on the existing code base, the codebase had no documentation, and the codebase was written using and old version of Flutter and a lot of bad practices were used in the codebase, I’ve managed to understand the code base added the new features Without resulting in breaking bugs in the Application. I\'ve successfully migrated the code base to the latest Flutter version.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remotly',
		period: { from: new Date(2023, 2), to: new Date(2023, 12) },
		skills: getSkills('flutter', 'dart', 'firebase', 'js'),
		name: 'Flutter Mobile developer',
		color: 'green',
		links: [],
		logo: Assets.Qreeb,
		shortDescription: 'Design revamp, adding new features, deploying the application, and maintaining Qreeb Rider & Driver App'
	},
	{
		slug: 'aramex-junior',
		company: 'Aramex',
		description: 'Courier delivery Application for Aramex, Developed with Flutter the main responsibility for the application is to make the process of delivering shipments more easier and time efficient. Refactored the existing codebase using Clean Code architecture principles to improve maintainability, readability, and scalability. Worked closely with the team to implement new features and fix bugs. Used Getx as a state management, Google maps integration, Firebase & PubNub for the notifications, Geolocator, location providers, many different payments integrations, localizations, and RESTful APIs.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Jordan - Amman',
		period: { from: new Date(2022, 8, 1), to: new Date(2023, 3) },
		skills: getSkills('dart', 'flutter', 'firebase'),
		name: 'Flutter Mobile developer',
		color: 'red',
		links: [],
		logo: Assets.Aramex,
		shortDescription: 'Developing & maintaining Delivery Champion app'
	},
	{
		slug: 'arrow-junior',
		company: 'Arrow It solutions',
		description: 'Developing & maintaining Applications for the company clients',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Jordan - Amman',
		period: { from: new Date(2022, 1, 1) },
		skills: getSkills('dart', 'flutter', 'firebase'),
		name: 'Flutter Mobile developer',
		color: 'white',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developing & maintaining Applications for the company clients'
	}
];

export const title = 'Experience';
