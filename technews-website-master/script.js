let btn=document.getElementById("search");
let city="Riyadh";
let weatherkey=`d73666192d8d4c66a8526156bc6749e0`;
btn.addEventListener("click",(event)=>{
    event.preventDefault()
    city=document.getElementById("Weathe-Input").value;
    console.log(city)
    weatherFun();
})

function weatherFun(){
    fetch(`http://api.weatherbit.io/v2.0/current?key=${weatherkey}&city=${city}&include=minutley&units=s"`).then(res=>{
res.json().then(data=>{
console.log(data.data[0])
let temp=data.data[0].app_temp;
let cityName=data.data[0].city_n
ame;
let status=data.data[0].weather.description;
let code=data.data[0].weather.icon 
document.querySelector(".weather").innerHTML=`${temp} <br> ${status} <br> ${cityName} <img src="https://www.weatherbit.io/static/img/icons/${code}.png"/>`;
    })
})
}   


let heading = document.querySelectorAll("#heading a");
for(let head of heading){
    head.addEventListener("click",(event)=>{
        pageNum=1;
        prev.disabled=true;
        next.disabled=false;
        let category=event.target.id;
        console.log(category);
        categoryURL=`https://newsapi.org/v2/everything?categroy=${category}&apikey=b7d54ca968d441ec9bd110ffd2d45c95`
        fetchcategory()


    })
}



function fetchcategory(){
    fetch(categoryURL).then(res=>{
        res.json().then(data=>{
            console.log(data.articles,"cat");
            let temp= data.articles.map(article=>`
            <div class="col-md-6 my-2">
            <div class="card"> 
            <img src="${article.urlToImage}" class="card-img-top" style="height:200px" alt="...">
            <div class="card-body">
            <div style="height:150px;overflow:hidden">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-title">${article.author}</p>
            <h5 class="card-title">${article.content}</h5>
            </div>
            <a href="${article.url}"class="btn btn-primary mt-3" target=_blank">Further more</a> 
</div> 
</div>
</div>

            `
            
            )
        })
    })
}








