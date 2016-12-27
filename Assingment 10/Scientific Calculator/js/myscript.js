

function myfunction(val){
    
    cform.screen.value = cform.screen.value+val; 
    
 //   cform.screen.value += val;   (another way to write this)
    
}

function total(){
    
    var a = cform.screen.value;
    var ans;
    var ary = [];
    var j = 0;
    var temp = 0;
    
    for(var i=4; i<a.length-1; i++){
    
     ary[j] = a[i];
     j++;
   
    }
    
    
    for(var k=0; k<ary.length; k++){
        
        temp = temp + ary[k];
        
    }
     
     if(a[0] == 'S'){
         
       ans = Math.sin(temp);   
       document.getElementById("solscreen").innerHTML = ans ;
     }
     
      if(a[0] == 'C'){
         
       ans = Math.cos(temp);   
       document.getElementById("solscreen").innerHTML = ans ;
     }
     
      if(a[0] == 'T'){
         
       ans = Math.tan(temp);   
       document.getElementById("solscreen").innerHTML = ans ;
     }
    
     else{     
       
        ans = eval(a);   
        document.getElementById("solscreen").innerHTML = ans;
    
      } 
    
     
 }
