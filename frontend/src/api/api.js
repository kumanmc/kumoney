export async function fetchData(url, saveData, setError) {
  try {
    const response = await fetch(url);
    console.log('response', response)
    if (!response.ok) {
          //Study about throw error better than execute dispatcher

      setError(response)
    }

    const data = await response.json();
    saveData(data);
  } catch (error) {
    //Study about throw error better than execute dispatcher
    setError(error)
  }
}