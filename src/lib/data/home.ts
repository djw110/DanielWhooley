import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Daniel';

export const lastName = 'Whooley';

export const description =
	'Motivated Software Developer and Student of Computer Science.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/daniel-whooley/'
	},
	{
		platform: Platform.GitHub,
		link: 'https://github.com/djw110'
	},
	{
		platform: Platform.Email,
		link: 'danieljwhooley@gmail.com'
	},
];

export const skills = getSkills('cpp','py','java','html','css');
