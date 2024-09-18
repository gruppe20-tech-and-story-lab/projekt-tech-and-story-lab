window.addEventListener("DOMContentLoaded", init);

function init() {
    const url = "https://ujxzkvnhvuxvwlulmyti.supabase.co/rest/v1/tsl-assets";
    const urlcat = "https://uihgaqtyehbbzlxkyijf.supabase.co/rest/v1/categories";
    const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqeHprdm5odnV4dndsdWxteXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NzAxNDUsImV4cCI6MjA0MTQ0NjE0NX0.cUAoN7YYUYG-lxz4-Tb9OxRRxNzl2qJZTSI2e7tVCsQ";
    
    const options = {
        headers: {
            apikey: key,
        },
    };
    
    fetch(url, options)
    .then((res) => res.json())
    .then(vis);

    fetch(urlcat, options)
    .then((response) => response.json())
    .then(viscat);
    
}

function viscat(data) {
    console.log(data);
}

function vis(data) {
  console.log(data);
}

