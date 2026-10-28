function click_event(){
     const lainjie=document.querySelectorAll('.daohang a')//所有链接
     const url=window.location.href;//url为当前网页网址
     lainjie.forEach( item=> {
          if(item.href===url){
                item.style.backgroundColor='yellowgreen';
                item.style.transform='scale(1.4)';
  
               }
               
                }
          )
     }
     



async function loadSkeleton() {
     var box=document.querySelectorAll(".nav");
     const res=await fetch("1.nav.html");
     const htmlText=await res.text();
     box.forEach(jiemian=>{
           jiemian.innerHTML=htmlText;
           click_event();
           kind_select();
           
     } )  
        }
window.onload=function(){loadSkeleton()}
 
function kind_select(){
     const bts=document.querySelectorAll('#bt button');
     bts.forEach(bn=>{
          bn.onclick=function(e){
               e.stopPropagation();
               if(this.style.backgroundColor==='rgb(213, 129, 129)'){
               this.style.backgroundColor='';
               this.style.transform='scale(1)';}
               else{ 
               this.style.backgroundColor='rgb(213, 129, 129)'
               this.style.transform='scale(1.1)';
               }
          }

          })
     }
          
     



     
        
     