function inputFieldById (id){
    const donateNoakhali = document.getElementById(id).value;
    const donateNoakhaliNumber = parseFloat(donateNoakhali);
    return donateNoakhaliNumber;
}

function innerTextById(id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber =  parseFloat(balance);
    return balanceNumber;
}