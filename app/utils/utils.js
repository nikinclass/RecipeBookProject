export function getName(id, recipe, featured){

  if( id === undefined ){ return featured.name }
  return recipe[findIndex(id,recipe)].name;
}
export function getPicture(id, recipe, featured){
  if( id === undefined ){ return featured.picture_url }
  return recipe[findIndex(id,recipe)].picture_url;
}
export function getInstructions(id, recipe, featured){
  if( id === undefined ){ return featured.instructions }
  return recipe[findIndex(id,recipe)].instructions;
}
function findIndex(id, recipe){
  return recipe.findIndex(e=>e.id==id);
}