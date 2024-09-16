const url = "https://ujxzkvnhvuxvwlulmyti.supabase.co/rest/v1/tsl-assets";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqeHprdm5odnV4dndsdWxteXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NzAxNDUsImV4cCI6MjA0MTQ0NjE0NX0.cUAoN7YYUYG-lxz4-Tb9OxRRxNzl2qJZTSI2e7tVCsQ";

const options = {
        headers: {
            apikey: key,
        },
};

fetch(url, options)
.then((res) => res.json())
.then(vis);

function vis(data) {
    console.log(data);
}

fetch("https://uihgaqtyehbbzlxkyijf.supabase.co/rest/v1/tsl-assets", {
    method:"GET",
    headers: {
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpaGdhcXR5ZWhiYnpseGt5aWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU1NjIsImV4cCI6MjA0MTU0MTU2Mn0.aSQ02uWSHbNbarVsY3v4WZZu6TJqc8ALMnhz32Lb3jA"
    }
})
.then(res=>res.json())
.then(showData)

function showData(items){
    console.log(items);
////items.forEach()

}



// window.addEventListener("DOMContentLoaded", init);

// function init() {

// }