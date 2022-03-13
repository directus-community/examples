import { getDirectusClient } from '$lib/client';
import { formatRelativeTime } from '../../../shared/utils/format-relative-time';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const directus = await getDirectusClient();

	let response;
	try {
		response = await directus.items('articles').readMany({
			fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
			sort: '-publish_date'
		});
	} catch (err) {
		if (err.parent.code === 'ECONNREFUSED') {
			console.error(
				'Unable to connect to the Directus instance. Make sure the .env file is present and the VITE_DIRECTUS_URL variable is pointing the correct URL.'
			);
		}
		return {
			status: 404
		};
	}

	const formattedArticles = response.data.map((article) => {
		return {
			...article,
			publish_date: formatRelativeTime(new Date(article.publish_date))
		};
	});

	if (!formattedArticles) {
		return {
			status: 404
		};
	}

	const [hero, ...articles] = formattedArticles;

	return {
		body: {
			hero,
			articles
		}
	};
}
