const triangleButton=document.getElementById('triangle-btn').addEventListener('click',function(){

    const triangleBottom= getValueFromInput('t-bottom');
    const triangleHeight= getValueFromInput('height');
    const triangleArea=0.5*triangleBottom*triangleHeight;
   setInnerText('triangle-area', triangleArea);
   addCalculationArea('Triangle',triangleArea);
})
const rButton= document.getElementById("r-button" ).addEventListener('click', function(){
    const rBottom= getValueFromInput('r-bottom');
    const rHeight= getValueFromInput('r-height');
    const rArea= rBottom*rHeight;
    setInnerText('r-area', rArea);
    addCalculationArea('Rectangle',rArea);
})

const pButton= document.getElementById("p-button" ).addEventListener('click', function(){
    const pBottom= getValueFromInput('p-bottom');
    const pHeight= getValueFromInput('p-height');
    const pArea= pBottom*pHeight;
    setInnerText('p-area', pArea);
    addCalculationArea('Parallelogram',pArea);
})

const eButton= document.getElementById('Ellipse-button').addEventListener('click',function(){
    const rhBottom= getValueFromInput('Ellipse-bottom');
    const rhHeight= getValueFromInput('Ellipse-height');
    const rhArea= (3.1416*rhBottom*rhHeight).toFixed(2);
    setInnerText('Ellipse-area', rhArea);
    addCalculationArea('Ellipse',rhArea);
})

function handleClick(bottomId,  heightId, areaId, shapeId){
    const Bottom=getValueFromInput(bottomId);
    const height= getValueFromInput(heightId);
    const calculatedArea= 0.5*Bottom*height;
    setInnerText(areaId,calculatedArea);
    const shapeName= document.getElementById(shapeId).innerText
    addCalculationArea(shapeName,calculatedArea);
}