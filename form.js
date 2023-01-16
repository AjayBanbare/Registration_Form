const source =this.document.getElementById('form').innerHTML;
const clickButton =this.document.getElementById('submit')
clickButton.addEventListener('click', getResponse);
function getResponse()
 {
    const template =  Handlebars.compile(source);
     var v1 = document.getElementById('name').value;
     var v2 = document.getElementById('address').value;
     var v3 = document.getElementById('aadhar').value;
     var v4 = document.getElementById('pan').value;
     var v5 = document.getElementById('mobile').value;
const replace = {};
replace.Name = v1;
replace.Address = v2;
replace.Aadhar = v3;
replace.Pan = v4;
replace.Mobile = v5;

    const compiledHtml = template(replace);
    const result = document.getElementById('msg');
     result.innerHTML = compiledHtml;
 }

 async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Thank You !!");}, 5000);
    });
    document.getElementById("greeting").innerHTML = await myPromise;
  }
  
  myDisplay();