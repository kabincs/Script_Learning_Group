
var button_count = 4;
function create_tabel(){
	
 var button_total = button_count*button_count;
 for(var j = 1;j<=button_total;j++){
	 
	  var tab = document.getElementById("tab");
	 
	   tab.innerHTML +=+"<button>"+j+"</button>"+""; 
	   
	    
	 
 }
}

create_tabel()
  var button = document.getElementsByClassName("but");
 for(var i = 0;i<button.length;i++){
	 
	  button[i].addEventListener('click',mainFunction)
	 
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
	   
	   
	   var but1 = document.getElementById("but1").innerHTML;
	   var but2 = document.getElementById("but2").innerHTML;
	   var but3 = document.getElementById("but3").innerHTML;
	   var but4 = document.getElementById("but4").innerHTML;
	   var but5 = document.getElementById("but5").innerHTML;
	   var but6 = document.getElementById("but6").innerHTML;
	   var but7 = document.getElementById("but7").innerHTML;
	   var but8 = document.getElementById("but8").innerHTML;
	   var but9 = document.getElementById("but9").innerHTML;
	  
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

 /*document.getElementById("click").addEventListener('click',buttonFunction)
function buttonFunction(){
	
	var num = Number(document.getElementById("count").value);
    var get = num*num;
	 
	  for(var j=1;j<get;j++){
		 
		 document.getElementById("tab").innerHTML += "<tr><td><button>"+j+"</button></td></tr>"
		                                               "<tr><td><button>""</button></td></tr>"
													   "<tr><td><button>""</button></td></tr>";
		 
		 
		
	  }
	
	
	
	console.log(get);
	
}*/


document.getElementById("refresh").addEventListener('click',refresh)
 function refresh(){

  window.location.reload();
   
 }