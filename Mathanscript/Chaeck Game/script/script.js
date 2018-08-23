
document.getElementById("val").addEventListener('click',create_tabel)
function create_tabel(event){
 var data="<tr>"
 var text;	
 var block =  Number(document.getElementById("count").value);	
 var button_total = block*block;
 
 if(event.target.getAttribute("disable")=="true"){
		return;
		
	}
    event.target.setAttribute("disable","true");
 var button = document.getElementsByClassName("but");	
 	  var tab = document.getElementById("tab");
 for(var j = 1;j<=block;j++){
     text += "<tr>"
     for( var k=1; k<=block;k++)
	 {
	  data+="<td><button class='btn' id='but"+(k+(j-1)*block)+"' onclick='mainFunction(event)' >"+(k+(j-1)*block)+"</button></td>";
	 	  	 	  		
	 }
	 data+="</tr>";
	 tab.innerHTML =data;
	//console.log(tab.innerHTML =data)
 }       
 } 

 
 
 	var totalBox = button_total;   //3*3=9,4*4=16;
  var currentPlayer = "O";
  	 
  function mainFunction(event){
var currentClick = event.srcElement.innerHTML;
 console.log("click num"+" "+currentClick)
	// console.log(total)
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
	   
 	 
		
  function winPop(){
	
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
  
  
 
 function container(event){
  
 
 var currentClickVal = event.srcElement.innerHTML;
 console.log("click value"+" "+currentClickVal) 

 var block = Number(document.getElementById("count").value); 
 
   function row(arg1,arg2){
  var row = Math.ceil(arg1/arg2);
	  console.log("which row  "+row)
	  return row;
	    }
  function rowStartBtn(arg1,arg2,arg3){
	  var startcolumnVal = (row(currentClick,block)-1)*3+1;
	  console.log("row value "+startcolumnVal)
	  // return startcolumnVal;
	  var currentButNum = startcolumnVal;
	  for(var count=0;count<block;count++){
		  
		  if(arg3==document.getElementById("but"+currentButNum).innerHTML){}		
			else{
			  return false;
		  }
		  currentButNum = currentButNum+1;
	  }
	  
	  return true;
	}
	
	function columnStartBtn(arg1,arg2,arg3){
	  var column = Math.ceil(arg1/arg2)-1;
	  var finalVal = arg1-column*arg2;
	  console.log("column value "+finalVal)
	  // return finalVal;
	  var currentButNum = finalVal;
	  for(var count=0;count<block;count++){
		  
		  if(arg3==document.getElementById("but"+currentButNum).innerHTML){}
		  else{
			  return false;
		  }
		  currentButNum = currentButNum+block;
	  }
	  return true;
	}
	
	
	function crossBtn(arg1,arg3){  
	  var cross = Math.ceil(1/arg1);
	  console.log("dig val "+cross)
	  // return cross;
	  var currentButNum = cross;
	  for(var count=0;count<block;count++){
		  
		  if(arg3==document.getElementById("but"+currentButNum).innerHTML){}
		  else{
			  return false;
		  }
		  currentButNum = currentButNum+block+1;
		  
	  }
	  return true;
	}
	  
	 function cross2Btn(arg1,arg2,arg3){
	  var cross2 = Math.ceil(arg2/arg1)+2; //block/currentClick;
	  console.log("dignl val2 "+cross2);
	  var currentButNum = cross2;
	  
	  for(var count=0;count<block;count++){
		
		  if(arg3==document.getElementById("but"+currentButNum).innerHTML){}
		  else{
			  return false;
		  }
			currentButNum = currentButNum+(block-1);  
	  
	  }
	  return true;
	  
	 }
	 
	 if(cross2Btn(currentClick,block,currentClickVal)==true || crossBtn(currentClick,currentClickVal)==true || columnStartBtn(currentClick,block,currentClickVal)==true || rowStartBtn(currentClick,block,currentClickVal)==true){
		 
		 return true;
	 }
	 else
	 {
		 return false;
	 }
	
	 
 }
 
	win()
	 
	 function win(){
		if(container(event)==true){
		winPop();}
		 draw(total);
			
		 
	 }
  }