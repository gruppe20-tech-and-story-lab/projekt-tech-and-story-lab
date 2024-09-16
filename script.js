//https://uihgaqtyehbbzlxkyijf.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpaGdhcXR5ZWhiYnpseGt5aWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjU1NjIsImV4cCI6MjA0MTU0MTU2Mn0.aSQ02uWSHbNbarVsY3v4WZZu6TJqc8ALMnhz32Lb3jA
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

function(){}