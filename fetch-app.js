document.querySelector('#users').addEventListener('click', () => {

    const username = 'https://jsonplaceholder.typicode.com/users'
    
    // fetch information
    console.log("entered")
    const getcurrency = async () => {
      try {
        const response = await fetch(username)
        const obj = await response.json();
        console.log(`FETCHED. Response JSON ${obj}`)
        const x=document.getElementById("name").value;
        console.log("x value"+x);
        const indiacurrency=x*obj.rates["INR"];
        document.getElementById("Result1").innerHTML=`Indian currency in dollar rate: ${indiacurrency}`;
      } catch (error) { console.error(error) }
    }
    getcurrency()
    })