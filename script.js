async function getData(){
    let fetchData = await fetch("data.json")
    let ogData = await fetchData.json()
    console.log(ogData)
    ogData.map((index,value)=>{
        var div =document.createElement('div')
        div.setAttribute("class","cardDiv")

        div.innerHTML = '<div class="imgDiv"><a href="'+index.img+'"><img src="'+index.img+'"/></a> </div><h2>'+index.title+'</h2><h1>'+index.price+'</h1>'
        var productSec = document.getElementById('productSec')
        productSec.appendChild(div)
        // document.body.appendChild(productSec)
        
    })
}
getData()

// dark mode fn

function darkMode(){
    document.body.classList.toggle('darkMode');

    if(document.body.classList.contains('darkMode')){
        var Btn = document.getElementById('dBtn');
        Btn.style.backgroundColor = "white"
        Btn.style.color = "black"
        Btn.innerHTML="Light Mode"
    }
    else{
        var Btn = document.getElementById('dBtn');
        Btn.style.backgroundColor = "black"
        Btn.style.color = "white"
        Btn.innerHTML="Dark Mode"
    }
    
}