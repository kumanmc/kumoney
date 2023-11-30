export async function fetchData(url, saveData) {
  const response = await fetch(url);
  const data = await response.json();
  saveData(data);
  return;
}