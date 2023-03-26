// let listIcons = [
//      {
//           name: "Supermarket",
//           icon: "fab fa-apple"
//      }, 

//      {
//           name: "Health & Beauty",
//           icon: "fas fa-vials"
//      },

//      {
//           name: "Home & Office",
//           icon: "fas fa-home"
//      },

//      {
//           name: "Phone & Tablet",
//           icon: "fas fa-tablet-android"
//      },

//      {
//           name: "Computing",
//           icon: "fas fa-television"
//      },

//      {
//           name: "Electronics",
//           icon: "fas fa-satellite"
//      },

//      {
//           name: "Fashion",
//           icon: "fas fa-shirt"
//      }, 

//      {
//           name: "Baby Product",
//           icon: "fas fa-baby"
//      },

//      {
//           name: "Gaming",
//           icon: "fas fa-gamepad"
//      },
  
//      {
//           name: "Sporting Goods",
//           icon: "fas fa-dumbbell"
//      },
     
//      {
//           name: "Automobile",
//           icon: "fas fa-car"
//      },

//      {
//           name: "Other",
//           icon: "fas fa-ellipsis-h"
//      },
// ]


// let texddt = ""
// for(let i of listIcons){
//      text +=`<div>
//           <a href="#"><i class="${i.icon}" style="padding-top: .5rem"></i> ${i.name}</a>
//      </div>`
// }

// document.getElementById('aside').innerHTML = text



// // Third section 
// let flash = [
//      {
//           name: "Men's 2 in Short Sleeve...",
//           price: "&#8358 2,900 - &#8358 3,000",
//           flashpic: "./image/Men's short sleeve.jpg"
//      },

//      {
//           name: "2 in 1 Short Sleeve...",
//           price: "&#8358 3,399 - &#8358 4,500",
//           flashpic: "./image/3.jpg"
//      },

//      {
//           name: "Fasfion Men Business...",
//           price: "&#8358 5,200 - &#8358 5,847",
//           flashpic: "./image/4.jpg"
//      },
     
//      {
//           name: "2021 Men Causal Classic...",
//           price: "&#8358 6,400 -&#8358 7, 499",
//           flashpic: "./image/6.jpg"
//      },

//      {
//           name: "2022 Men Causal Classic...",
//           price: "&#8358 5,500 -&#8358 7,199",
//           flashpic: "./image/Mens causal.jpg"
          
//      },
   
//      {
//           name: "Apple Apple Airpod",
//           price: "&#8358 59,000",
//           flashpic: "./image/7.jpg"
//      },
    
    

// ]

// text = ""
// for(k of flash){
//      text +=`<div class="flash">
//           <img src="${k.flashpic}" alt> <br> 
//           <div style="font-weight: 400; paddding: .5rem;">${k.name}</div>
//           <div style="font-weight: 500; font-size: 14px; paddding: 1rem;">${k.price}</div>
//      </div>`
// }

// document.getElementById("flash-innerImg").innerHTML = text

// // Top Deal 
// let topDeal = [
//      {
//           pic:"./image/Oraimo.jpg",
//           name:"Oraimo 2700mAh Massi...", 
//           price:"&#8358 12,312"
//      },

//      {
//           pic:"./image/Nivea.jpg",
//           name:"Nivea OPPO Combo - Coc", 
//           price:"&#8358 3,345"
//      },
     
//      {
//           pic:"./image/Master chef.jpg",
//           name:"Master Chef 9pcs Non sti...", 
//           price:"&#8358 21,500"
//      },
     
//      {
//           pic:"./image/Nexus 3.jpg",
//           name:"Nexus 3 Tap Water Dispe...", 
//           price:"&#8358 49,410"
//      },
     
//      {
//           pic:"./image/Iron.jpg",
//           name:"Philip Classic Dry Iron - ....", 
//           price:"&#8358 9,500"
//      },
     
//      {
//           pic:"./image/Wardrobe.jpg",
//           name:"Wooden Wardrobe 4 Colou...", 
//           price:"&#8358 49,410"
//      },
// ]

// text =" "
// for(let m of topDeal){
//      text+= `<div class="topdeal">
//       <img src="${m.pic}" alt=""> <br> 
//           <div style="font-weight: 400; ">${m.name}</div>
//           <div style="font-weight: 500; font-size: 14px;">${m.price}</div>
//      </div>
//      `
// }

// document.getElementById("topdealImg_container").innerHTML = text


// // Shop From Our Collection Now!
// let collections = [
//      {
//           name: "Free Delivery",
//           col: "./image/free-delivery.png"
//      }, 

//      {
//           name: "Groceries Supersavers",
//           col: "./image/groceries.png"
//      },

//      {
//           name: "Home Makeover",
//           col: "./image/Home Makeover.png"
//      },

//      {
//           name: "Top Brands",
//           col: "./image/top-brands.png"
//      },

//      {
//           name: "Perfect for Dinner",
//           col: "./image/perfect for dinner.png"
//      },

//      {
//           name: "Warehouse",
//           col: "./image/Warehouse.png"
//      },

//      {
//           name: "Sneaker",
//           col: "./image/sneakers.png"
//      }, 

//      {
//           name: "Let's Get Talking",
//           col: "./image/Let's Get Talking.png"
//      },

//      {
//           name: "Half Price Store",
//           col: "./image/Half Price Store.png"
//      },
  
//      {
//           name: "iPhones, iOS Devices",
//           col: "./image/iPhones, iOS Devices.png"
//      },
     
//      {
//           name: "Exclusive Deals",
//           col: "./image/Exclusive Deals.png"
//      },

//      {
//           name: "The Good Times",
//           col: "./image/the good times.png"
//      },
// ]

// text = " "
// for(i of collections){
//      text +=`
//      <div class="link_container">
//           <a href="#" style="text-decoration: none;  color:black; font-weight: 600;background-color: #efefef;">
//                <img src="${i.col}" alt="">
//                </a>
//                <div style="padding: 1rem; text-align: center;">${i.name}</div>
//      </div>
//      `
// }

// document.getElementById("collection-gallery").innerHTML = text


// // Top Categories | The Budget Store
// let budgetstore = [
//      {
//           name: "Phone Accessories",
//           bud: "./image/phone-accessories.png"
//      }, 

//      {
//           name: "Groceries",
//           bud: "./image/groceries_1.png"
//      },

//      {
//           name: "Baby Products",
//           bud: "./image/baby-products.png"
//      },

//      {
//           name: "Men's Fashion",
//           bud: "./image/mens-fashion.png"
//      },

//      {
//           name: "Womens Fashion",
//           bud: "./image/womens-fashion.png"
//      },

//      {
//           name: "Kids-Fashion",
//           bud: "./image/kids-fashion.png"
//      },

//      {
//           name: "Watches",
//           bud: "./image/watches.png"
//      }, 

//      {
//           name: "Beauty",
//           bud: "./image/beauty-trends.png"
//      },

//      {
//           name: "Toys Games",
//           bud: "./image/toys-games.png"
//      },
  
//      {
//           name: "Computing",
//           bud: "./image/computing.png"
//      },
     
//      {
//           name: "Electronics",
//           bud: "./image/electronics.png"
//      },

//      {
//           name: "Home Office",
//           bud: "./image/home-office.png"
//      },
// ]

// text = ""
// for(i of budgetstore){
//      text += `
//           <div class="budgetstores">
//           <a href="#" style="text-decoration: none;  color:black; font-weight: 600;background-color: #efefef;">
//                <img src="${i.bud}" alt="">
//                </a>
//                <div style="padding: 1rem; text-align: center;">${i.name}</div>
//           </div>
//      `
// }

// document.getElementById("budgetstore-gallery").innerHTML = text


// let budtopdeal = [
     
// ]


const containerHolder = {
     'listItem': [
          {
               name: "Supermarket",
               icon: "fab fa-apple"
               }, 

          {
               name: "Health & Beauty",
               icon: "fas fa-vials"
          },

          {
               name: "Home & Office",
               icon: "fas fa-home"
          },

          {
               name: "Phone & Tablet",
               icon: "fas fa-tablet-android"
          },

          {
               name: "Computing",
               icon: "fas fa-television"
          },

          {
               name: "Electronics",
               icon: "fas fa-satellite"
          },

          {
               name: "Fashion",
               icon: "fas fa-shirt"
          }, 

          {
               name: "Baby Product",
               icon: "fas fa-baby"
          },

          {
               name: "Gaming",
               icon: "fas fa-gamepad"
          },
     
          {
               name: "Sporting Goods",
               icon: "fas fa-dumbbell"
          },
          
          {
               name: "Automobile",
               icon: "fas fa-car"
          },

          {
               name: "Other",
               icon: "fas fa-ellipsis-h"
          },
     ], 
     
     
     'flash': [
          {
               name: "Men's 2 in Short Sleeve...",
               price: "&#8358 2,900 - &#8358 3,000",
               flashpic: "./image/Men's short sleeve.jpg"
          },
     
          {
               name: "2 in 1 Short Sleeve...",
               price: "&#8358 3,399 - &#8358 4,500",
               flashpic: "./image/3.jpg"
          },
     
          {
               name: "Fasfion Men Business...",
               price: "&#8358 5,200 - &#8358 5,847",
               flashpic: "./image/4.jpg"
          },
          
          {
               name: "2021 Men Causal Classic...",
               price: "&#8358 6,400 -&#8358 7, 499",
               flashpic: "./image/6.jpg"
          },
     
          {
               name: "2022 Men Causal Classic...",
               price: "&#8358 5,500 - &#8358 7,199",
               flashpic: "./image/Mens causal.jpg"
               
          },
          
          {
               name: "Apple Apple Airpod",
               price: "&#8358 59,000",
               flashpic: "./image/7.jpg"
          },
     ],             
}


const newlistItem = containerHolder.listItem.map(({name, icon}) => {
     return `${name} and ${icon}`
})

console.log(newlistItem);