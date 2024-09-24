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


function showSectionById (id){
    const donationHomePage = document.getElementById('donation-page').classList.add('hidden')
    const historyPage = document.getElementById('history').classList.add('hidden')

    const showSection = document.getElementById(id).classList.remove('hidden')
}