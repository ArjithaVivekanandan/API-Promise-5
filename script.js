//Search Button and keyboard event handling

document.getElementById("search_submit").innerHTML="Search";
document.getElementById("search_text").addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    
    apiCall();
  }
});


//Error Handling
var Missing =document.createElement("h2")
Missing.setAttribute("class","text-danger");
Missing.innerHTML="Not Available!!";


//Api Search for Advice
 async function apiCall()
 {
   content.innerHTML="";
  var search_str=document.getElementById("search_text").value;
  if(search_str)
  {
  var data= await (await fetch("https://api.adviceslip.com/advice/search/"+search_str)).json();

  if(data.total_results>0)
  {

  return handleResponse(data);
 
  }
  else
  document.getElementById("content").append(Missing);  
 
}
else{
    document.getElementById("content").append("Please Enter Input to Search!!")
}
 }
 function handleResponse(data) {
  
  try{
        
        var card = document.createElement("div");
        card.setAttribute("class","card");

        data.slips.forEach(function(slip){
        
       var NumberData=document.createElement("h2");
        NumberData.setAttribute("class","card-title text-dark p-2");
        NumberData.innerHTML=slip.advice+"<hr>";

        var br=document.createElement("br");
        card.append(NumberData);
        document.getElementById("content").append(card,br);

        })
        
    }
 
  
  catch{
    var error_me=document.createElement("div");
    error_me.setAttribute("class","text-danger h2");
    error_me.innerHTML="Oooops..No Records Found!!!";
    document.getElementById("content").innerHTML = error_me.outerHTML;
  }
  
}
