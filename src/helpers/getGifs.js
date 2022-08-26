export const getGifs = async(category) =>{
    const url= `https://api.giphy.com/v1/gifs/search?api_key=dguCsI5BsDkSMdlTy4Y41TQM19I8N5Uz&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    // console.log(resp);
    // console.log(data);

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return(gifs);
}