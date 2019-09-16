

function getCities(w,h){
    const city_names = ['A','B','C','D','E','F','G','H','I',"J","K","L","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let cities = [] 
    city_names.forEach((name)=>{
        const x = 20 + Math.floor(Math.random() * Math.floor(( w - 40)));
        const y = 20 + Math.floor(Math.random() * Math.floor(( h - 40 )));
        const v = Math.floor(Math.random() * Math.floor(10));
        let city = {
            x:x, y:y, v:v, name:name
        };
        cities.push(city)        
    })
    return cities;
}
export { getCities } 