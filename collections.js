var x = document.getElementById("closeof")
var offer = document.getElementById("offer")
x.addEventListener("click",function(){
    offer.style.display = "none"
})
var menu = document.getElementById("menu")
var sidenav = document.querySelector(".sidenav")
var Close = document.getElementById("x")
menu.addEventListener("click",function(){
    sidenav.style.left="0px"
})
Close.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

const products = [
    {
        id:1,
        name:"Floral Summer Shirt",
        src:"image/f1 (1).jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },

    {
        id:2,
        name:"Summer Green",
        src:"image/f2.jpg",
        desc:"",
        price:260,
        tags:["new","green","beach"]
    },

    {
        id:3,
        name:"Party Floral Shirt",
        src:"image/f3.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },

    {
        id:4,
        name:"Floral Summer Shirt",
        src:"image/f4.jpg",
        desc:"",
        price:399,
        tags:["old","white","beach"]
    },
    {
        id:5,
        name:"Beach Shirt",
        src:"image/f5.jpg",
        desc:"",
        price:579,
        tags:["old","white","beach"]
    }
,
    {
        id:6,
        name:"Shirt Party Red",
        src:"image/f6.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },

    {
        id:7,
        name:"Party Floral Shirt",
        src:"image/f7.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },
    {
        id:8,
        name:"Shirt Party Red",
        src:"image/f8.jpgf6.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },
    {
        id:9,
        name:"Floral Summer Shirt",
        src:"image/f1.jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },


]

var container=document.querySelector(".products")
products.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img style="width: 20vw;" src="img/${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})

var filterList =[]
var tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }

        
       
    })
})

// var searchInput = document.getElementById("searchInput")
// searchInput.addEventListener("keyup",function(){
//     update()
// })

function update()
{

    

    

    
    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        console.log(product)
        var temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)
        

        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}