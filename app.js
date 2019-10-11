const con = (i,j)=>{
  return i/j;
}

function myFunction(){
    console.log("enterddd");
var dollar=parseFloat(document.getElementsByClassName("amount")[0].value);
localStorage.setItem("split1",dollar);
var people=parseInt(document.getElementsByClassName("people")[0].value);
localStorage.setItem("split2",people);
var total=con((localStorage.getItem("split1")),(localStorage.getItem("split2")));
document.getElementsByClassName("total")[0].innerHTML=`Each person have a share of ${total}`;

}
document.querySelector(".calculate").addEventListener('click', myFunction);
var i=0;
const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const obj = await response.json()
    //console.log(`FETCHED. Response JSON ${obj}`)
    //const joke = obj.value.joke || 'No joke for you.'
    //return joke
    document.getElementById("resultt").innerHTML=`your username is ${obj[i].name}`;
    i++;
  } catch (error) { console.error(error) }
}
document.querySelector("#username").addEventListener('click', getData)