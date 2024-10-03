import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'BS : Computer Science',
		description: 'Graduating May of 2027.',
		location: 'Burlington, VT',
		logo: Assets.UVM,
		name: '',
		organization: 'University of Vermont',
		period: { from: new Date(2023, 8), to: new Date(2027, 6) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Algorithm Design & Analysis', 'Probability Theory', 'Multivariable Calculus', 'Complexity Theory',
			'Data Structures', 'Linear Algebra', 'Object Oriented Programming']
	}
];

export const title = 'Education';
