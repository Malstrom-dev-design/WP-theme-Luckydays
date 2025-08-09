export async function fetchFunction({method = "get", formData, url}){
	let data = {success: false, data: false}
	const response = await fetch( blockData.url, { method, body: formData });
	if (!response.ok) { 
		return data; 
	}

	return data = await response.json();
}