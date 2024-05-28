function myFunc(element){
  for(let i of document.querySelectorAll("button")){
    i.classList.remove("red")
  }
  element.classList.add("red");
  
}


const board=document.getElementById("board");

window.addEventListener("load",
function (){
  
  
  let matrix=Number(prompt("enter n for nxn matrix"));
 
  while(isNaN(matrix) || matrix==0){
    matrix=(prompt("entera number for n for nxn matrix"));
   
  }
  rows=matrix;
  columns=matrix;
  let row;
  let col;
  let isWhite;
  for(let i=0;i<rows;i++){
    row=document.createElement("tr");
    i%2===0?isWhite=true:isWhite=false;
    
    
    
    for(let j=0;j<columns;j++){
      col=document.createElement("td");
      col.setAttribute("style","")
      
      col.setAttribute("class",isWhite?"box white":"box black")
      isWhite=!isWhite;
      col.setAttribute("data-index",`${i}-${j}`)
     
      row.appendChild(col);

      
    }
     
    board.appendChild(row);
    
   

  }
  let boxes=document.querySelectorAll(".box")
  document.getElementById("board").addEventListener("mouseleave",()=>{
    
    for(let i=0;i<boxes.length;i++){
      boxes[i].classList.remove("yellow")

    }
  })


 document.querySelector(".bishop").addEventListener("click",(e)=>{hover(boxes,rows-1,rows-1,[[-1,-1],[1,-1],[1,1],[-1,1]])})
 document.querySelector(".king").addEventListener("click",(e)=>{hover(boxes,rows-1,1,[[-1,-1],[1,-1],[1,1],[-1,1],[1,0],[-1,0],[0,1],[0,-1]])})
 document.querySelector(".queen").addEventListener("click",(e)=>{hover(boxes,rows-1,rows-1,[[-1,-1],[1,-1],[1,1],[-1,1],[1,0],[-1,0],[0,1],[0,-1]])})
 document.querySelector(".horse").addEventListener("click",(e)=>{hover(boxes,rows-1,1,[[-2,-1],[-1,-2],[-2,1],[-1,2],[1,-2],[2,-1],[2,1],[1,2]])})
 document.querySelector(".soldier").addEventListener("click",(e)=>{hover(boxes,rows-1,1,[[-1,0]])})
 document.querySelector(".elephant").addEventListener("click",(e)=>{hover(boxes,rows-1,rows-1,[[1,0],[-1,0],[0,1],[0,-1]])})

 

function hover(boxes,maxLimit,maxStep,directions){
  // const boxes=document.querySelectorAll(".box");

for(let i=0;i<boxes.length;i++){
  boxes[i].addEventListener("mouseover",(e)=>{
    for(let i of document.querySelectorAll(".box")){
      i.classList.remove("yellow")
    }  
    const [row,col]=e.target.dataset.index.split("-").map((idx)=>Number(idx))
  
    changeColor(row,col,directions,maxLimit,maxStep)
  });
}

}
function changeColor(row,col,directions,maxLimit,maxStep){

  let ans=[]


  for( let direction of directions){
    for(let radius=0;radius<=maxStep;radius++){
      nextRow=row+(radius*(direction[0]));
      nextCol=col+(radius*(direction[1]));

      if(nextRow>=0 && nextRow<=maxLimit && nextCol>=0 && nextRow<=maxLimit){
        ans.push(`${nextRow}-${nextCol}`);
      }
    }
  }
  let boxes=document.querySelectorAll(".box");


  

  for(let i=0;i<boxes.length;i++){
    
    if(ans.includes(boxes[i].dataset.index)){
      
      boxes[i].classList.add("yellow")
    }
   

  }



  


}



  }
  

)


