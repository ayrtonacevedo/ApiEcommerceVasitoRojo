const { Categories } = require("../../db");

const createCategory = async(category, description, image)=>{
  try {
    // Search if the category already exists
    let existingCategory = await Categories.findOne({
      where:{
        name:category.toUpperCase() 
      }
    })
    // If the category already exists, return it
    if(existingCategory){
      return existingCategory
    }
    // If the category does not exist, create it
    let newCategory = await Categories.create({
      name: category.toUpperCase(),
      description:description || null,
      image:image || null 
    })
    return newCategory
  } catch (error) {
    //Handle any errors here
    console.error("Error creating category:", error);
    throw new Error("Error creating category");
  }
}
module.exports = { createCategory };
