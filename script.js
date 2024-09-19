window.addEventListener("DOMContentLoaded", init);

const params = new URLSearchParams(document.location.search);
// const category = params.get("name");
let categoryURI=undefined;

function init() {
    const urlcat = "https://uihgaqtyehbbzlxkyijf.supabase.co/rest/v1/categories";
    const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpaGdhcXR5ZWhiYnpseGt5aWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU1NjIsImV4cCI6MjA0MTU0MTU2Mn0.aSQ02uWSHbNbarVsY3v4WZZu6TJqc8ALMnhz32Lb3jA";
    
    const options = {
        headers: {
            apikey: key,
        },
    };

    if(params.has("name")){
        categoryURI=`https://uihgaqtyehbbzlxkyijf.supabase.co/rest/v1/categories=eq.${name}`;
    }else{categoryURI=`https://uihgaqtyehbbzlxkyijf.supabase.co/rest/v1/tsl-assets?limit=6`;}
    

    fetch(urlcat, options)
    .then((res) => res.json())
    .then(viscat);
}

function viscat(cats) {
    cats.forEach((cat) => handlecat(cat));
}

function handlecat(catitem) {
    console.log("catitem", catitem)
    const catlist = document.querySelector(".categorieslist");
    const templatecat = document.querySelector("#caticon").content;
    const clone = templatecat.cloneNode(true);

    clone.querySelector("img").src=`img/${catitem.img}`;
    clone.querySelector("a").href=`index.html?name=${catitem.name}`;
    clone.querySelector("a").textContent=catitem.name; 

    catlist.appendChild(clone);

}

function vis(product) {
  console.log("product", product);
  product.forEach(showProduct);

}

