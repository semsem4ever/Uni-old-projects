//zeichnenzähler

window.addEventListener("DOMContentLoaded", function () {

    const textarea = document.querySelector('#bewertungBeschreibung')
    const score = document.getElementById('score')
    

    // Die max. Anzahl der Zeichen im Feld einstellen
    const maxLength = 800;

    textarea.setAttribute('maxlength', maxLength)

    textarea.addEventListener('keyup', (e) => {
        let count = e.target.value.length;

        // Die Farbe und Änderungsgrenzen einstellen
       let color = (count <= 4) ? 'red' : count > 10 ? 'green' : 'orange';
        score.style.color = color;
        score.innerText = count > 0 ? `${count}/${maxLength}` : '';
    })
});





