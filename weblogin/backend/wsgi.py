from flask import Flask, request, jsonify, abort
from flask_restful import Api, Resource

PORT = 63000

app = Flask('ಠ_ಠ')
api = Api(app)

valid_login = {
    "user": "AKaczus",
    "password": "1"
}

valid_sign_in = {
    "user": "AKaczus",
    "password":"1",
    "password_verificatioin": "1"
}

class LoginResource(Resource):
    def post(self):
        try:
            data = request.get_json(force=True)
            print(data)
            if data == valid_login:
                return '', 200
            else:
                return '', 403
        except:
            abort(422)

api.add_resource(LoginResource, '/login')

class SignInResource(Resource):
    def post(self):
        try:
            data = request.get_json(force=True)
            print(data)
            user = data.get('user')
            pass1 = data.get('password')
            pass2 = data.get('password_verification')
            if pass1 == pass2:
                return '', 200
            else:
                return '', 403
        except:
            abort(422)

api.add_resource(SignInResource, '/sign_in')

if __name__ == '__main__':
    app.run(port=PORT)


