export function readdir(path: string) {
	fetch(`/dir/${path}`, {
		method: 'GET',
	});
}

export function readFile(path: string) {
	fetch(`/file/${path}`, {
		method: 'GET',
	});
}

export function mkdir(path: string) {
	fetch(`/dir/${path}`, {
		method: 'PUT',
	});
}

export function writeFile(path: string, content: string) {
	fetch(`/file/${path}`, {
		method: 'PUT',
		body: JSON.stringify({ content }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

export function rm(path: string) {
	fetch(`/file/${path}`, {
		method: 'DELETE',
	});
}
