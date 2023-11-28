function slugify(title){
   const titleWords = title.toLowerCase().split(` `); 
   const slug = titleWords.join(`-`);
   return slug;
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 