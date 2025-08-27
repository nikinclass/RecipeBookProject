        export async function getAllRecipes(){
    const alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w', 'y']//some letters omitted
    let recipesArray = [];

    for (let i = 0; i < alphaArray.length; i++){

        await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphaArray[i]}`)
            .then( response => response.json())
            .then( data => {
                for (let j = 0; j < data.meals.length; j++){
                    recipesArray.push(data.meals[j]);
                }
            })
    }
    return recipesArray
}
