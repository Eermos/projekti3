document.getElementById('btn').onclick = tarkistus;
const char = "@";
function tarkistus(event){
    event.preventDefault()

    let kaid = document.getElementById('kID').value
    if (kaid.length >= 6){
      console.log(kaid)
    } else {
      alert ('ID puuttuu')
    }
    let paid = document.getElementById('pasID').value
    if (paid.length > 1){
      console.log(paid)
    } else {
      alert ('Salasana puuttuu')
    }
    let naid = document.getElementById('namID').value
    if (naid.length > 1){
      console.log(naid)
    } else {
      alert ('Nimi puuttuu')
    }
    let adid = document.getElementById('addID').value
    if(adid.length > 1){
      console.log(adid)
    } else {
      alert ('Osoite puuttuu')
    }
    let poid = document.getElementById('poID').value
    if (poid.length == 5){
      console.log(poid)
    } else if (poid.lenght < 5){
      alert ('Postinumero puuttuu')
    }
    let posti = document.getElementById('spost').value
    if(posti.includes(char)){
      console.log(posti)
  } else {
    alert ('Sähköposti puuttuu')
    
  }
  var checked_gender = document.querySelector('input[name = "man"]:checked');

  if(checked_gender != null){  
    console.log(checked_gender)
  } else {
  alert('Sukupuoli puuttuu'); 
  }
  var ma = document.getElementById('maita').value;
    if (ma == 'alku'){
      alert ('Valitse maa')
    }
  if(document.getElementById('suomikiel').checked == false && document.getElementById('muukiel').checked == false){
    alert ('Kieltä ei ole valittu')
  }
}

