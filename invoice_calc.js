var sub_lip = '';
var sub_coff = '';
var sub_bis = '';


function price(){    
    var item = document.getElementById('prod').value;
    if (item == "tea"){
    //    alert('tea');
        document.getElementById('price_txt').innerHTML = '100';
    }
    if (item == 'coff'){
        // alert('coffee');
        document.getElementById('price_txt').innerHTML = '70';
    }

    if (item == 'bisc'){
        // alert('biscuit');
        document.getElementById('price_txt').innerHTML = '30';
    }

    if(item == 'none'){
        document.getElementById('price_txt').innerHTML = '0';
    }
}


function subtotal(){
    var item = document.getElementById('prod').value;
    var amount = Number(document.getElementById('quant').value);
    
    document.getElementById('subtotal_txt').innerHTML = 'Subtotal';

    if (item == 'tea'){
        sub = amount * 100;

        sub_lip = sub;

        document.getElementById('subtotal_txt').innerHTML = sub;
        
        var row = document.getElementById('tableBody').insertRow(0);
        var cellOne = row.insertCell(0);
        var cellTwo = row.insertCell(1);
        var cellThree = row.insertCell(2);
        cellOne.innerText = 'Lipton';
        cellTwo.innerText = amount;
        cellThree.innerText = sub;
        
        var total = sub_lip + sub_coff + sub_bis; 
        // document.getElementById('total').innerText = total;

        temp =  total * 0.8;
        flatDisc = total - temp;

        tempTax = total * 0.16;
        addTax = +total + +tempTax; 

        addTax = +addTax - +flatDisc
        
        document.getElementById('disc').innerText = flatDisc;
        document.getElementById('tax').innerText = tempTax;
        document.getElementById('total').innerText = addTax;

    }
    //  document.getElementById('test').innerHTML = amount;   

    if (item == 'coff'){
        sub = amount * 70;

        sub_coff = sub;

        document.getElementById('subtotal_txt').innerHTML = sub;

        var row = document.getElementById('tableBody').insertRow(0);
        var cellOne = row.insertCell(0);
        var cellTwo = row.insertCell(1);
        var cellThree = row.insertCell(2);
        cellOne.innerText = 'Coffee';
        cellTwo.innerText = amount;
        cellThree.innerText = sub;


        var total = sub_lip + sub_coff + sub_bis; 
        // document.getElementById('total').innerText = total;

        temp =  total * 0.8;
        flatDisc = total - temp;

        tempTax = total * 0.16;
        addTax = +total + +tempTax; 

        addTax = +addTax - +flatDisc
        
        document.getElementById('disc').innerText = flatDisc;
        document.getElementById('tax').innerText = tempTax;
        document.getElementById('total').innerText = addTax;

    }
    
    if (item == 'bisc'){
        sub = amount * 30;

        sub_bis= sub;
        
        document.getElementById('subtotal_txt').innerHTML = sub;
        
        var row = document.getElementById('tableBody').insertRow(0);
        var cellOne = row.insertCell(0);
        var cellTwo = row.insertCell(1);
        var cellThree = row.insertCell(2);
        cellOne.innerText = 'Biscuit';
        cellTwo.innerText = amount;
        cellThree.innerText = sub;

        var total = sub_lip + sub_coff + sub_bis; 
        // document.getElementById('total').innerText = total;

        temp =  total * 0.8;
        flatDisc = total - temp;

        tempTax = total * 0.16;
        

        addTax = +total + +tempTax; 

        addTax = +addTax - +flatDisc
        
        document.getElementById('disc').innerText = flatDisc;
        document.getElementById('tax').innerText = tempTax;
        document.getElementById('total').innerText = addTax;

    }   




    // 1) NEED TO RESET THE AMOUNT WHEN ITEM CHANGES AFTER CALCULATION
    // 2) FIND A WAY TO ROUND OFF TO 2 DECIMAL PLACES
    // 3) ADD FUNCTION THAT INCREMENTS THE REPEATED ITEM RATHER THAN MAKING A COPY 
}

