//var cors = require('cors');
//app.use(cors());

handle_response = (response) => {
    console.log(response);
    if (response.ok) {
        console.log('OK');
    } else {
        console.log('NOT OK');
    }
};

handle_button_click_login = (event) => {
    var url = "http://localhost:63342/CS_Y12_Term3_Project2/weblogin/frontend/index.html?_ijt=84eg3h7jmhm2it5fm796th5p58";
    var user_input = document.getElementById("user");
    var pass_input = document.getElementById("pass");
    var header = document.getElementById("header");
    var user = user_input.value;
    var pass = pass_input.value;
    console.log(`Button clicked with user: [${user}], password: [${pass}].`);
    var credentials = {user: user, password: pass};
    var options = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(credentials)
    };

handle_button_click_signup = (event) => {
    var url = "http://localhost:63342/CS_Y12_Term3_Project2/weblogin/frontend/index.html?_ijt=84eg3h7jmhm2it5fm796th5p58";
    var user_input = document.getElementById("user");
    var pass_input = document.getElementById("pass");
    var pass_ver_input = document.getElementById("pass_ver");
    var header = document.getElementById("header");
    var user = user_input.value;
    var pass = pass_input.value;
    var pass_ver = pass_ver_input.value;
    console.log(`Button clicked with user: [${user}], password: [${pass}], password_ver: [${pass_ver}].`);
    var credentials = {user: user, password: pass, password_verification: pass_ver};
    var options = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(credentials)
    };


    fetch(url, options).then(console.log);
}