function result() {
    const cardholder = document.getElementById('cardholder').value;
    const cardnumber = document.getElementById('cardnumber').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const cvc = document.getElementById('cvc').value;

    let cardname_style = document.getElementById('cardholder');
    let cardnumber_style = document.getElementById('cardnumber');
    let month_style = document.getElementById('month');
    let year_style = document.getElementById('year');
    let cvc_style = document.getElementById('cvc_style');  

    let cardholder_display = document.getElementById('cardname');
    let cardnumber_display = document.getElementById('cardnum');
    let date_display = document.getElementById('date');
    let month_display = document.getElementById('month_display');
    let year_display = document.getElementById('year_display');
    let cvc_display = document.getElementById('cvc_display');

    let cardname_error = document.getElementById("cardname_error");
    let cardnumber_error = document.getElementById('cardnumber_error');
    let date_error = document.getElementById('date_error');
    let cvc_error = document.getElementById('cvc_error');

    let month_error_display = false;
    let year_error_display = false;

    let cardholder_final_error = false;
    let cardnumber_final_error = false;
    let month_final_error = false;
    let year_final_error = false;
    let cvc_final_error = false;

    let error = false;

    try {
      let cardnumber_error_display = false;

      let part1 = cardnumber.slice(0,4);
      let part2 = cardnumber.slice(4,8);
      let part3 = cardnumber.slice(8,12);
      let part4 = cardnumber.slice(12,16);

      let final_display = part1 + ' ' + part2 + ' ' + part3 + ' ' + part4;

      cardnumber_display.innerHTML = final_display;

      if (isNaN(cardnumber)) {
        throw 'Wrong format, numbers only.';
        cardnumber_error_display = true;
      }
      else if (cardnumber.length == 0) {
        throw "Can't be blank";
        document.getElementById('cardnumber').style.borderColor = 'hsl(0, 100%, 66%)';
        cardnumber_display.innerHTML = '0000 0000 0000 0000';
        cardnumber_style.style.borderColor = 'hsl(0, 100%, 66%)';
        cardnumber_error_display = true;
      }
      else if (cardnumber.length > 16) {
        throw 'Maximum numbers is 16'
        cardnumber_style.style.borderColor = 'hsl(0, 100%, 66%)';
        cardnumber_error_display = true;
      }
      else if (cardnumber.length < 16) {
        throw 'Minimum numbers is 16';
        cardnumber_error_display = true;
        cardnumber_style.style.borderColor = 'hsl(0, 100%, 66%)';
      }
      else {
        cardnumber_error_display = false;
        throw '';
      }

    }catch(err) {
      cardnumber_error.innerHTML = err;
      console.log('error');
      if (err) {
        document.getElementById('cardnumber').style.borderColor = 'hsl(0, 100%, 66%)';
        cardnumber_final_error = true;
      }
      else if (!(err)) {
        document.getElementById('cardnumber').style.borderColor = 'hsl(249, 99%, 64%)';
        cardnumber_final_error = false;      
      }
    }
    
    try {
      let cardholder_error_display = false;

      cardholder_display.innerHTML = cardholder;

      if (cardholder.length == 0) {
        throw "Can't be blank";
        cardholder_error_display = true;
      }
      else if (!(isNaN(cardholder))) {
        throw 'Please enter your name';
        cardholder_error_display = true;
      }
      else {
        throw '';
        cardholder_error_display = false;
      }


    }catch(err) {
      cardname_error.innerHTML = err;
      if (err) {
        document.getElementById('cardholder').style.borderColor = 'hsl(0, 100%, 66%)';
        cardholder_final_error = true;
      }
      else if (!(err)) {
        document.getElementById('cardholder').style.borderColor = 'hsl(249, 99%, 64%)';
        cardholder_final_error = false;      
      }
    }

    try {
      month_display.innerHTML = month;
      if (isNaN(month)) {
        throw 'Wrong format, numbers only';
      }
      else if (month.length == 0) {
        throw "Can't be blank";
      }
      else {
        throw '';
      }

    } catch(err) {
        date_error.innerHTML = err;
        
        if (err) {
            document.getElementById('month').style.borderColor = 'hsl(0, 100%, 66%)';
            month_final_error = true;
        } else if (!(err)) {
            document.getElementById('month').style.borderColor = 'hsl(249, 99%, 64%)';
            month_final_error = false;
        }
    }


    try {
        year_display.innerHTML = year;
        if (isNaN(year)) {
          throw 'Wrong format, numbers only';
        }
        else if (year.length == 0) {
          throw "Can't be blank";
        }
        else {
          throw '';
        }
  
      } catch(err) {
          date_error.innerHTML = err;
          
          if (err) {
              document.getElementById('year').style.borderColor = 'hsl(0, 100%, 66%)';
              year_final_error = true;
          } else if (!(err)) {
              document.getElementById('year').style.borderColor = 'hsl(249, 99%, 64%)';
              year_final_error = false;
          }
      }

      

    try {
      let cvc_error_display = false;

      cvc_display.innerHTML = cvc;

      if (isNaN(cvc)) {
        throw 'Wrong format, numbers only';
        cvc_error_display = true;
      }
      else if (cvc.length == 0) {
        throw "Can't be blank";
        cvc_error_display = true
      }
      else {
        throw '';
        cvc_error_display = false;
      }

    }catch(err) {
      cvc_error.innerHTML = err;

      if (err) {
        document.getElementById('cvc').style.borderColor = 'hsl(0, 100%, 66%)';
        cvc_final_error = true;
      }
      else if (!(err)) {
        document.getElementById('cvc').style.borderColor = 'hsl(249, 99%, 64%)';     
        cvc_final_error = false; 
      }
    }


    if ((cardnumber_final_error) || (cardholder_final_error) || (month_final_error) || (year_final_error) || (cvc_final_error)) {
        error = true;
    } else if  (!(cardnumber_final_error) || !(cardholder_final_error) || !(month_final_error) || !(year_final_error) || !(cvc_final_error)) {
        error = false;
    }


    if (!(error)) {
      document.getElementById('forms').style.display = 'none';
      document.getElementById('completed').style.display = 'block';
      console.log('no_error');
    }




  }