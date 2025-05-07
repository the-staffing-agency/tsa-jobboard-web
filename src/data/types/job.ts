export interface Job {
	id: number;
	title: string;
	company: string;
	location: string;
	type: string;
	description: string;
	requirements: string[];
	url_avatar: string;
	salary: string;
	created_at: string;
	featured: boolean;
}
