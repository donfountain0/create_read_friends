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
    query = "INSERT INTO friends (first_name, last_name, occupation) VALUES (%(first_name)s, %(last_name)s, %(occupation)s);"
    data = request.get_json()

    print(data)
    new_friend_id = mysql.query_db(query, data)
    # print("this is the friend id: ")
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)