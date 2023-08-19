function getValueFromInput(inputId){
    const inputElement= document.getElementById(inputId);
    const inputValueString=inputElement.value;
    const inputValue=parseFloat(inputValueString);
    inputElement.value='';
    return inputValue; 
}

function setInnerText(textId,newValue){
    const areaElement= document.getElementById(textId);
    areaElement.innerText=newValue;
}

function addCalculationArea(name, area){
    const calculationArea=document.getElementById("calculation-area");
    const count= calculationArea.childElementCount;
    const p=document.createElement('p');
    p.classList.add("my-4")
    p.innerHTML=`${count+1} ${name} ${area} cm <sup>2</sup> <button class="btn btn-sm btn-success">convert</button>`
    calculationArea.appendChild(p);

}
