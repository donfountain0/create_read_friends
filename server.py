from flask import Flask, render_template, request, redirect, jsonify, json
from mysqlconnection import connectToMySQL
from flask_cors import CORS,  cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
mysql = connectToMySQL('c_r_friends')
# print("all the users", mysql.query_db("SELECT * FROM users;"))

@app.route("/members")
@cross_origin()
def index():
    mysql = connectToMySQL("c_r_friends")
    all_friends = mysql.query_db("SELECT * FROM friends")
    print(all_friends)
    return jsonify(all_friends)

@app.route('/users', methods=['POST'])
def create_user():
    mysql = connectToMySQL("c_r_friends")
    
    data = request.get_json()
    first_name = data['user']['first_name']
    last_name = data['user']['last_name']
    occupation = data['user']['occupation']

    query = "INSERT INTO friends (first_name, last_name, occupation) VALUES('%s', '%s', '%s');" % (first_name, last_name, occupation)

    

    # print(data)
    new_friend_id = mysql.query_db(query, data)
    # print("this is the friend id: ")
    return redirect('/users')


if __name__ == "__main__":
    app.run(debug=True)