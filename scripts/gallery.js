imgs=[
{
    src:"imgs/gallery-imgs/yatch1.jpg",
    caption:"Paradise catamaran charters through exotic island waters. Pure tropical bliss with dramatic peaks and swaying palms."
},
{
    src:"imgs/gallery-imgs/yatch2.jpg",
    caption:"Tropical sailing adventures in crystal-clear lagoons. Modern yachts, pristine waters, and lush mountain backdrops"
},
{
    src:"imgs/gallery-imgs/yatch3.jpg",
    caption:"Coastal town discoveries aboard elegant sailing vessels. Experience authentic Mediterranean charm from the water"
},
{
    src:"imgs/gallery-imgs/yatch4.jpg",
    caption:"Urban sailing experiences with stunning city skylines. Where modern architecture meets maritime tradition."
},
{
    src:"imgs/gallery-imgs/yatch5.jpg",
    caption:"Traditional yacht adventures among towering limestone cliffs. Explore pristine waters and dramatic natural landscapes."
},
{
    src:"imgs/gallery-imgs/yatch6.jpg",
    caption:"Classic sailing through peaceful inland waterways. Discover hidden gems where autumn meets tranquil waters."
},
{
    src:"imgs/gallery-imgs/yatch7.jpg",
    caption:"Luxury superyacht charters along dramatic Mediterranean coastlines. Experience golden hour sailing at its finest."
},
{
    src:"imgs/gallery-imgs/yatch8.jpg",
    caption:"High-performance motor yacht expeditions. Sleek design meets luxury for the ultimate ocean adventure."
},
]

let imgTemplateString = "";
imgs.forEach(img => {
    imgTemplateString += `
    <div class="gallery-card">
        <img src=${img.src}>
        <p class="caption">${img.caption}</p>
    </div> 
    `
});



document.querySelector(".gallery-body").innerHTML = imgTemplateString;


