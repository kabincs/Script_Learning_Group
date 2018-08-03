

 
 var row = "<tr>";
 document.getElementById("val").addEventListener('click',buttonFunction)
function buttonFunction(event){
 var button_count =  Number(document.getElementById("count").value);
 var totalbut = button_count*button_count;
 console.log(totalbut)
  if(event.target.getAttribute("disable")=="true"){
		return;
		
	}
    event.target.setAttribute("disable","true");
	
 var tab = document.getElementById("tab");
 for(var j = 1;j<=totalbut;j++){
	 
	  row +="<td><button class='but' onclick='mainFunction(event)'>"+j+"</button></td>";
	  console.log(j)
	   tab.innerHTML = row;
	    // button = document.getElementsByClassName("but");
	    // button[j-1].addEventListener('click',mainFunction)
		console.log(row)

   if(j%button_count==0){
		row +="</tr>";
		
   }
  if(button_count==3){
	  mainFunction(event);
	  
  }
 }

}

 	var totalBox = 9;
  var currentPlayer = "O";
  function mainFunction(event){
	 
    
	console.log(total)
	  if(event.target.getAttribute("disable")=="true"){
		return;
		
	}
    event.target.setAttribute("disable","true");
	
    var total = --totalBox;
	 
	   console.log(total)
	
	   if(currentPlayer== "O"){
		currentPlayer= "X";
        event.srcElement.innerHTML = "X";
	   }
	   else{ 
		    currentPlayer = "O"
		     event.srcElement.innerHTML = "O";
		   
	   }
	   
	   
	   var but = document.getElementsByClassName("but").innerHTML;
	   but-1;
	   console.log(but)
	   for(var i=0;i<but.length;i++){
		    
			but[i].addEventListener('click',fun)
	   }
function fun(event){
	console.log(i)
  if(but1==currentPlayer && but4==currentPlayer && but7==currentPlayer){
	win();
  }
 else if(but1==currentPlayer && but5==currentPlayer && but9==currentPlayer){
	win();
 }
else if(but2==currentPlayer && but5==currentPlayer && but8==currentPlayer){
	win();
	}		
else if(but3==currentPlayer && but6==currentPlayer && but9==currentPlayer){
	win();
	} 
else if(but7==currentPlayer && but8==currentPlayer && but9==currentPlayer){
	win();
	}
else if(but4==currentPlayer && but5==currentPlayer && but6==currentPlayer){
	win();
	}
else if(but3==currentPlayer&& but5==currentPlayer&& but7==currentPlayer){
	win();
	}    
else if(but1==currentPlayer&& but2==currentPlayer && but3==currentPlayer){
	win();
	}	
else{
	draw(total)
}	
  }
  }
  
function win(){
	
	if(currentPlayer=="O"){
	document.getElementById('id02').style.display='block';}
	else{
	document.getElementById('id01').style.display='block';}	
	
}

 function draw(total){
      if(total==0){	 
	   document.getElementById('id03').style.display='block';
 }	 
 } 
	
 
document.getElementById('id01').addEventListener('click',tabClose)
document.getElementById('id02').addEventListener('click',tabClose)
document.getElementById('id03').addEventListener('click',tabClose)
function tabClose(){
	
 document.getElementById('id01').style.display='none';
 document.getElementById('id02').style.display='none';
 document.getElementById('id03').style.display='none';
 window.location.reload();

}



document.getElementById("refresh").addEventListener('click',refresh)
 function refresh(){

  window.location.reload();
   
 }