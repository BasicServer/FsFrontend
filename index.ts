function cleanPath(path: string): string {
	return path.replace(/^\/\//g, '/');	
}

export async function readdir(path: string) {
	path = cleanPath(path);
	return await (
		await fetch(`/dir/${path}`, {
			method: 'GET',
		})
	).text();
}

export async function readFile(path: string) {
	path = cleanPath(path);
	return await (
		await fetch(`/file/${path}`, {
			method: 'GET',
		})
	).text();
}

export async function mkdir(path: string) {
	path = cleanPath(path);
	return await (
		await fetch(`/dir/${path}`, {
			method: 'PUT',
		})
	).text();
}

export async function writeFile(path: string, content: string) {
	path = cleanPath(path);
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
	path = cleanPath(path);
	return await (
		await fetch(`/file/${path}`, {
			method: 'DELETE',
		})
	).text();
}

export async function cp(src: string, dest: string) {
	src = cleanPath(src);
	dest = cleanPath(dest);
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
	src = cleanPath(src);
	dest = cleanPath(dest);
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
