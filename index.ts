export async function readdir(path: string) {
	return await (
		await fetch(`/dir/${path}`, {
			method: 'GET',
		})
	).text();
}

export async function readFile(path: string) {
	return await (
		await fetch(`/file/${path}`, {
			method: 'GET',
		})
	).text();
}

export async function mkdir(path: string) {
	return await (
		await fetch(`/dir/${path}`, {
			method: 'PUT',
		})
	).text();
}

export async function writeFile(path: string, content: string) {
	return await (
		await fetch(`/file/${path}`, {
			method: 'PUT',
			body: JSON.stringify({ content }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	).text();
}

export async function rm(path: string) {
	return await (
		await fetch(`/file/${path}`, {
			method: 'DELETE',
		})
	).text();
}

export async function cp(src: string, dest: string) {
	return await (
		await fetch(`/copyfile`, {
			method: 'POST',
			body: JSON.stringify({ src, dest}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	).text();
}

export async function rename(src: string, dest: string) {
	return await (
		await fetch(`/movefile`, {
			method: 'POST',
			body: JSON.stringify({ src, dest}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	).text();
}
