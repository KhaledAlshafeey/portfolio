import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Khaled';

export const lastName = 'Alshafeey';

export const description = 'I am a passionate Flutter developer with a track record of delivering high-quality applications and websites. Over the years, I have worked on numerous projects, some of which have gained significant traction with over 3,000 active users. My expertise spans both mobile and web development, and I am dedicated to creating seamless and engaging user experiences. Whether it\'s developing a new application from scratch or enhancing an existing website, I bring creativity, technical skill, and a commitment to excellence to every project I undertake.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/KhaledAlshafeey' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/khaled-alshafeey/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/18131398/khaled-alshafeey'
	},
	{
		platform: Platform.Email,
		link: 'khaled.mo.sh531@gmail.com'
	}

];

export const skills = getSkills('flutter', 'firebase', 'dart');
