import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'prog-instructor',
		company: 'Amazon, Inc. & iDTech, Inc.',
		description: 'Taught Python programming to high school students in project-based courses held at Amazon HQ. Demonstrated and guided students through the use of various machine learning tools like TensorFlow to implement models like ChatGPT into their programs. Created lesson plans and helped struggling students understand core computer concepts. Aided students in debugging code and taught them valuable programming practices. Ensured they were prepared to develop a unique final project to present at the end of the course.',
		contract: ContractType.FullTime,
		type: 'Instruction',
		location: 'Crystal City, VA',
		period: { from: new Date(2024,5), to: new Date(2024,8) },
		skills: getSkills('ts', 'js'),
		name: 'Programming Instructor',
		color: 'orange',
		links: [],
		logo: Assets.Amazon,
		shortDescription: 'Teaching high-schoolers Python and Machine Learning.'
	}
];

export const title = 'Experience';
