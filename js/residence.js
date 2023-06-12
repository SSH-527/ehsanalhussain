let fileInput=document.getElementById("input-files");
let imageContent=document.getElementById("images");
let num=document.getElementById("num-of-files");

function preview(){
    imageContent.innerHTML="";
    
        num.textContent="";
        for(i of fileInput.files){
            let reader=new FileReader();
            let figure = document.createElement("figure");
            let figCap =document.createElement("figcaption");
            let del=document.createElement("span");
            del.innerText=`حذف فایل`;
            del.classList="deleteImg";
            figCap.innerText=i.name;
            figure.appendChild(figCap);
            figure.appendChild(del);
            figure.classList="fig";
            reader.onload=()=>{
                let img =document.createElement("img");
                img.classList="preview";
                img.setAttribute("src",reader.result);
                figure.insertBefore(img,figCap,del);
            }
            imageContent.appendChild(figure);
            reader.readAsDataURL(i);
        
    } 
}