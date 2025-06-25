async function fetchAndProcessData(url){
    const responce = await fetch(url);
    try{
        if(!responce.ok){
            throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await responce.json();
        return data;
    }catch(error){
        return `${error.message}`;
    }
}

(async () => {
  const result = await fetchAndProcessData('https://jsonplaceholder.typicode.com/posts/1');
  console.log(result); 
})();
