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










