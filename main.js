function calcolaEta(dataDiNascita) {
    var oggi = new Date();
    var dataNascita = new Date(dataDiNascita);
    
    var anni = oggi.getFullYear() - dataNascita.getFullYear();
    var mesi = oggi.getMonth()+1 - dataNascita.getMonth();
    var giorni = oggi.getDate() - dataNascita.getDate();
    
    if (mesi < 0 || (mesi === 0 && giorni < 0)) {
      anni--;
      if (mesi < 0) {
        mesi += 12;
      }
      if (giorni < 0) {
        var ultimoGiornoMesePrecedente = new Date(oggi.getFullYear(), oggi.getMonth(), 0).getDate();
        giorni += ultimoGiornoMesePrecedente;
      }
    }
    
    return {
      anni: anni,
      mesi: mesi,
      giorni: giorni
    };
  }
  
  let loginForm = document.getElementById("form");
  
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var error = false;
    const form = e.target;
    const formFields = form.elements;
    const year = (formFields.year).value;
    const month = (formFields.month).value;
    const day = (formFields.day).value;

    const today = new Date();
    const dataNascita = new Date(year, month, day);
    var eta = calcolaEta(dataNascita);
    if(today.getFullYear() < year || eta.anni<0){
        var inputYear = document.getElementById("year");
        inputYear.classList.add("input-error");

        var labelYear = document.getElementsByClassName("input-date-label");
        labelYear[2].classList.add("label-error");

        var errorMessageYear = document.getElementById("error-message-year");
        errorMessageYear.style.display = "inline-block";

        document.getElementById("output-years-value").textContent = "- -";
        document.getElementById("output-months-value").textContent = "- -";
        document.getElementById("output-days-value").textContent = "- -";
        error = true;
    }
    else{
        var inputYear = document.getElementById("year");
        inputYear.classList.remove("input-error");
        var labelYear = document.getElementsByClassName("input-date-label");
        labelYear[2].classList.remove("label-error");
        var errorMessageYear = document.getElementById("error-message-year");
        errorMessageYear.style.display = "none";
    }
    if(month > 12 || month<=0){
        var inputMonth = document.getElementById("month");
        inputMonth.classList.add("input-error");

        var labelYear = document.getElementsByClassName("input-date-label");
        labelYear[1].classList.add("label-error");

        var errorMessageMonth = document.getElementById("error-message-month");
        errorMessageMonth.style.display = "inline-block";

        document.getElementById("output-years-value").textContent = "- -";
        document.getElementById("output-months-value").textContent = "- -";
        document.getElementById("output-days-value").textContent = "- -";
        error = true;
    }
    else{
        var inputMonth = document.getElementById("month");
        inputMonth.classList.remove("input-error");
        var labelMonth = document.getElementsByClassName("input-date-label");
        labelMonth[1].classList.remove("label-error");
        var errorMessageMonth = document.getElementById("error-message-month");
        errorMessageMonth.style.display = "none";
    }
    if(day > 30 || day<=0){
        var inputDay = document.getElementById("day");
        inputDay.classList.add("input-error");

        var labelDay = document.getElementsByClassName("input-date-label");
        labelDay[0].classList.add("label-error");

        var errorMessageDay = document.getElementById("error-message-day");
        errorMessageDay.style.display = "inline-block";

        document.getElementById("output-years-value").textContent = "- -";
        document.getElementById("output-months-value").textContent = "- -";
        document.getElementById("output-days-value").textContent = "- -";
        error = true;
    }
    else{
        var inputDay = document.getElementById("day");
        inputDay.classList.remove("input-error");
        var labelDay = document.getElementsByClassName("input-date-label");
        labelDay[0].classList.remove("label-error");
        var errorMessageDay = document.getElementById("error-message-day");
        errorMessageDay.style.display = "none";
    }
    if(!error){
        document.getElementById("output-years-value").textContent = eta.anni;
        document.getElementById("output-months-value").textContent = eta.mesi;
        document.getElementById("output-days-value").textContent = eta.giorni;   
    }
  });
  
  