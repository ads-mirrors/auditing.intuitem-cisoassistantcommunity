import { BASE_API_URL } from '$lib/utils/constants';
import { safeTranslate } from '$lib/utils/i18n';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const endpoint = `${BASE_API_URL}/applied-controls`;

	const res = await fetch(endpoint);
	const json = await res.json();

	const data = json.results;

	// const applied_controls = {
	// 	headers: ['ref_id', 'name', 'priority', 'status', 'category', 'eta', 'domain', 'owner', 'labels'],
	// 	ids: [
	// 		'ref_id',
	// 		'name',
	// 		'priority',
	// 		'status',
	// 		'category',
	// 		'eta',
	// 		'folder',
	// 		'owner',
	// 		'filtering_labels'
	// 	]
	// }

	// const columns = applied_controls.ids.map((id, i) => {
	//     // Utilise le header correspondant si présent, sinon retombe sur l'id
	//     const headerKey = applied_controls.headers[i] ?? id;
	//     const title = safeTranslate(headerKey)

	//     return {
	//         id,
	//         header: {title},
	//         footer: title,
	//         flexgrow: 1,
	//     };
	// });

	const columns = [
		{ id: 'ref_id', header: 'Ref Id', footer: 'Ref Id', flexgrow: 1 },
		{ id: 'name', header: ['Name', { filter: "text" }], footer: 'Name', flexgrow: 1, sort: true },
		{ id: 'priority', header: 'Priority', footer: 'Priority', flexgrow: 1, sort: true },
		{ id: 'status', header: ['Status', { filter: "text" }], footer: 'Status', flexgrow: 1, sort: true },
		{ id: 'category', header: 'Category', footer: 'Category', flexgrow: 1, sort: true },
		{ id: 'eta', header: 'Eta', footer: 'Eta', flexgrow: 1 },
		{ id: 'folder', header: 'Domain', footer: 'Domain', flexgrow: 1 },
		{ id: 'owner', header: 'Owner', footer: 'Owner', flexgrow: 1 },
		{ id: 'filtering_labels', header: 'Labels', footer: 'Labels', flexgrow: 1 }
	];

	return { data, columns, title: 'data-grid' };
};
