//var cors = require('cors');
//app.use(cors());

console.log('Starting');

handle_response = (response) => {
    console.log(response);
    if (response.ok) {
        console.log('OK');
    } else {
        console.log('NOT OK');
    }
};

handle_button_click_login = (event) => {
    var url = "http://localhost:63100/login";
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
    fetch(url, options).then(console.log);
}

handle_button_click_signin = (event) => {
    var url = "http://localhost:63100/sign_in";
    var user_input = document.getElementById("user");
    var pass_input = document.getElementById("pass");
    var pass_ver_input = document.getElementById("pass_ver");
    var header = document.getElementById("header");
    var user = user_input.value;
    var pass = pass_input.value;
    var pass_ver = pass_ver_input.value;
    console.log(`Button clicked with s_user: [${user}], s_password: [${pass}], s_password_ver: [${pass_ver}].`);
    var credentials = {user: user, password: pass, password_verification: pass_ver};
    var options = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(credentials)
    };
    fetch(url, options).then(console.log);
}


