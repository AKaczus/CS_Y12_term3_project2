import requests

un = input('Please enter your user username: \n')
pw = input('Please enter your password: \n')

data = {
  "login": un,
  "password": pw,
}

resp = requests.post("http://localhost:63342/CS_Y12_Term3_Project2/weblogin/frontend/index.html?_ijt=84eg3h7jmhm2it5fm796th5p58", json=data)
print(resp)
