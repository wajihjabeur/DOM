let plusbtn=document.getElementsByClassName('plus-btn')
for (let i=0;i<plusbtn.length;i++){
    let plus=plusbtn[i]
    plus.addEventListener('click',function(){
        plus.previousElementSibling.value++;
        price() ;
        price2();
        price3();
        somme();

        

    })
}


let minusbtn=document.getElementsByClassName('minus-btn')
for (let i=0;i<minusbtn.length;i++){
    let minus=minusbtn[i]
    minus.addEventListener('click',function(){
        if (minus.nextElementSibling.value==0){
            minus.nextElementSibling.value=0
        }
    else
        {minus.nextElementSibling.value--};
        price();
        price2();
        price3();
        somme();

    })
        
}


function remove() {
    var parent=document.getElementById('parent');
    var child=document.getElementById('child');
    parent.removeChild(child)
}
function remove2() {
    var parent=document.getElementById('parent');
    var child1=document.getElementById('child1');
    parent.removeChild(child1)
}
function remove3() {
    var parent=document.getElementById('parent');
    var child2=document.getElementById('child2');
    parent.removeChild(child2)
}







function heart1() {
    var icone1=document.getElementById('ic1');
    if (icone1.style.color=="black"){
        icone1.style.color="red";
} 
    else {
        icone1.style.color="black";
}

}


function heart2() {
    var icone2=document.getElementById('ic2')
    if (icone2.style.color=="black"){
        icone2.style.color="red";
} 
    else {
        icone2.style.color="black";
}

}


function heart3() {
    var icone3=document.getElementById('ic3')
    if (icone3.style.color=='black'){
        icone3.style.color='red';
} 
    else {
        icone3.style.color='black';
}

}
function price() {
    let price1=document.getElementById('price1')
    let quantité=document.getElementById('quant').value
      resu =quantité*1379
     price1.innerHTML=resu
 
}
function price2() {
    let price1=document.getElementById('price2')
    let quantité=document.getElementById('quant2').value
      resu =quantité*176.8
     price1.innerHTML=resu
 
}
function price3() {
    let price1=document.getElementById('price3')
    let quantité=document.getElementById('quant3').value
      resu =quantité*249
     price1.innerHTML=resu
 
}

function somme(){
     let A1=document.getElementById('price1').innerHTML
     let A2=document.getElementById('price2').innerHTML
     let A3=document.getElementById('price3').innerHTML
    let S=document.getElementById('finalPrice')
    S.value=parseInt(A1)+parseInt(A2)+parseInt(A3)

}
