var addButton=document.getElementById("add");

addButton.addEventListener("click",function(){
    var num1=document.getElementById('num1').value
    var num2=document.getElementById('num2').value
    if(num1==""|| num2==""){
        alert("ENTER PROPER INPUT")
    }else {
            var resultField=document.getElementById("result");
            var result=Number(num1) +Number(num2);
            resultField.value=result;
        }
    
});