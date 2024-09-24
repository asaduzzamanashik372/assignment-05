// nowakhali donation start
document.getElementById('donate-noakhali-btn').addEventListener('click', function(event){
    event.preventDefault();

    const donateNoakhali = inputFieldById('input-donate-noakhali');
    const balance = innerTextById('balance');
    

    if(!isNaN(donateNoakhali) && donateNoakhali > 1){
        const newBalance = balance - donateNoakhali;
        document.getElementById('balance').innerText = newBalance;
        alert('tnx for your donation')
        
        const p = document.createElement('p')
        p.innerText = `${donateNoakhali} Tk Is Donated For Flood At Noakhali, Bangladesh`
        p.classList.add('text-3xl')
        p.classList.add('border-2')
        p.classList.add('p-10')
        p.classList.add('mt-10')
        document.getElementById('history').appendChild(p);

        
    }

    

    
    else{
        alert('wrong input')
    }
})


document.getElementById('donate-noakhali-btn').addEventListener('click', function(event){
    event.preventDefault();

    const donateNoakhali = inputFieldById('input-donate-noakhali');
    const donationBalance = innerTextById('noakhali-donation');
    

    if(!isNaN(donateNoakhali)){
        const newDonationBalance = donationBalance + donateNoakhali;
        document.getElementById('noakhali-donation').innerText = newDonationBalance;

        
    }
    
})
// nowakhali donation end

// feni donation start

document.getElementById('feni-donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const donatefeni = inputFieldById('input-donation-feni');
    const balance = innerTextById('balance');
    

    if(!isNaN(donatefeni) && donatefeni > 1){
        const newBalance = balance - donatefeni;
        document.getElementById('balance').innerText = newBalance;
        alert('Tnx for your donation')

        const p = document.createElement('p')
        p.innerText = `${donatefeni} Tk Is Donated For Flood At Feni, Bangladesh`
        p.classList.add('text-3xl')
        p.classList.add('border-2')
        p.classList.add('p-10')
        p.classList.add('mt-10')
        document.getElementById('history').appendChild(p);
        

        
    }
    else{
        alert('wrong input')
    }
})


document.getElementById('feni-donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const donatefeni = inputFieldById('input-donation-feni');
    const donationBalance = innerTextById('feni-donation-money');
    

    if(!isNaN(donatefeni)){
        const newDonationBalance = donationBalance + donatefeni;
        document.getElementById('feni-donation-money').innerText = newDonationBalance;

        
    }
    
})

// feni donation end

// quota donation start
document.getElementById('quota-donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const quotaDonation = inputFieldById('input-quota-donation');
    const balance = innerTextById('balance');

    if(!isNaN(quotaDonation) && quotaDonation > 1){
        const newDonationBalance = balance - quotaDonation;
        document.getElementById('balance').innerText = newDonationBalance
        alert('Tnx for your donation')

        const p = document.createElement('p')
        p.innerText = `${quotaDonation} Tk Is Donated For Quota Movement, Bangladesh`
        p.classList.add('text-3xl')
        p.classList.add('border-2')
        p.classList.add('p-10')
        p.classList.add('mt-10')
        document.getElementById('history').appendChild(p);
    }
    else{
        alert('Wrong input')
    }
})

document.getElementById('quota-donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const quotaDonation = inputFieldById('input-quota-donation');
    const donationBalance = innerTextById('quota-donation-balance');

    if(!isNaN(quotaDonation)){
        const newDonationBalance = donationBalance + quotaDonation;
        document.getElementById('quota-donation-balance').innerText = newDonationBalance
        
    }
    
})




// quota donation end