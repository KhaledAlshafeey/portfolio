import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Jordan - Amman',
		logo: Assets.Ju,
		name: '',
		organization: 'JU',
		period: { from: new Date(2018, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: []
	},

];

export const title = 'Education';
