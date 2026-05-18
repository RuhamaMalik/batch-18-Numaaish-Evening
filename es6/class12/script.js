// console.log('hi');
// console.log('hi2');
// setTimeout(()=>{
//   console.log('hi3');
  
// },2000)
// console.log('hi4');


// const myPromise = new Promise((resolve,reject)=>{

// setTimeout(()=>{
//  if(5 == 6){
//     resolve('good ')
    
//  }else{
// reject('bad');
//  }
  
// },2000)

// })

// myPromise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// console.log(myPromise);


// fetch('https://fakestoreapi.com/products/10')
// .then(res=>res.json())
// .then((res)=>console.log('resss----->',res))     
// .catch(err=>console.log(err))       

//pyramid of DOOM // callback hell

// ()=>()=>()=>()=>()=>()=>

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then((res)=>console.log('resss----->',res))     
.catch(err=>console.log(err))   
                  
           
            


