import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'prog-instructor',
		company: 'Amazon, Inc. & iDTech, Inc.',
		description: '\tTaught Python programming to high school students in project-based courses held at Amazon HQ in Crystal City, VA.\n' +
			'\tDemonstrated and guided students through the use of various machine learning tools like TensorFlow to implement models like ChatGPT into their programs.\n' +
			'\tCreated lesson plans and helped struggling students understand core computer concepts.\n' +
			'\tAided students in debugging code and taught them valuable programming practices. Ensured they were prepared to develop a unique final project to present at the end of the course.\n',
		contract: ContractType.FullTime,
		type: 'Instruction',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Programming Instructor',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Teaching high-schoolers Python and Machine Learning.'
	}
];

export const title = 'Experience';
