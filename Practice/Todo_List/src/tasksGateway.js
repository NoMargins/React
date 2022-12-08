const baseUrl = 'https://633aeb89e02b9b64c61ad82e.mockapi.io/tasksList';

export const fetchTasksList = () => {
	return fetch(baseUrl).then((resp) => {
		if (resp.ok) {
			return resp.json();
		}
	});
};

export const createTask = (taskData) => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(taskData),
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Failed to create task');
		}
	});
};

export const updateTask = (taskId, taskData) => {
	return fetch(`${baseUrl}/${taskId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(taskData),
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Failed to create task');
		}
	});
};

export const deleteTask = (taskId) => {
	return fetch(`${baseUrl}/${taskId}`, {
		method: 'DELETE',
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Failed to create task');
		}
	});
};

// { text: 'Buy milk', id: 1, done: false },
// 			{ text: 'Buy sugar', id: 2, done: true },
// 			{ text: 'Learn English', id: 3, done: false },
// 			{ text: 'Meet a friend', id: 4, done: true },
// 			{ text: 'Go for a walk', id: 5, done: false },
