export function getName(id, recipe, featured){
  if( id === undefined ){ return featured.name }
  return recipe.name;
}
export function getPicture(id, recipe, featured){
  if( id === undefined ){ return featured.picture_url }
  return recipe.picture_url;
}
export function getInstructions(id, recipe, featured){
  if( id === undefined ){ return featured.instructions }
  return recipe.instructions;
}