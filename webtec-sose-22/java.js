

function checkAndSubmitKontaktForm(e) {





    const kundennummer = document.getElementById('kundennummer').value

    if(!/^[0-9]{7}([0-9]|p)$/.test(kundennummer) ){

        e.preventDefault()

        let error = document.createElement("P");

        error.setAttribute("id", "kundennummer-error")

        let errorText = document.createTextNode("Kundennummer ist nicht gültig!");

        error.appendChild(errorText);

        document.getElementById("kundennummer-td").appendChild(errorText);

    }

}



function deleteForm() {

    e.preventDefault()

    document.forms["kontakt-form"].clear

}