//get elements by its id
const emoji = document.getElementById("emoji");
// using async function
const get = async () => {
 //fetching data and performs asynchronous function operation
  const api = await fetch("https://emojihub.yurace.pro/api/all");
  const data1 = await api.json();
  const data = data1.slice(0, 1000); //getting data from 0th index to 1000th index elements
 console.log(data);
  
data.forEach((element) => {
    emoji.innerHTML += ` <div class="col-auto me-auto col-sm-3 col-md-2 mb-4">
<div class="card">    
    <div class="card-body">
        <div class="emo"> ${element.htmlCode[0]}</div>
        <button class="btn btn-danger but">View Details</button>
    </div>
</div>
</div>`;
    let button = document.querySelectorAll("button"); //getting all the button elements
    button.forEach((btn, res) => {
      btn.addEventListener("click", () => {
        alert(
          `Name: ${data[res].name}\nCategory: ${data[res].category}\nGroup: ${data[res].group} \nunicode: ${data[res].unicode}`
        );
      });
    });
  });
};
get(); //calling the function
   emoji.innerHTML = "";
   



