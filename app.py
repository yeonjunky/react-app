from flask import Flask, jsonify, request, abort, make_response
import database

app = Flask(__name__)

FILE_PATH = "database.db"
IS_UPDATE = False

todos = database.get_data(FILE_PATH)


@app.errorhandler(404)
def not_found(e):
    return "{}".format(e.description)


@app.after_request
def cors(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS')
    return response


@app.route('/')
def hello():
    return "Hello world!"


@app.route('/todos', methods=['GET'])
def get_todos():
    if IS_UPDATE:
        global todos
        todos = database.get_data(FILE_PATH)
    response = jsonify(todos)
    return response


@app.route('/todos', methods=['POST'])
def add_todo():
    global todos

    text = request.get_json()['text']

    database.insert_data(FILE_PATH, (text, False))
    todos = database.get_data(FILE_PATH)

    response = jsonify(todos)
    return response


@app.route('/todos/<int:todo_id>', methods=['PUT'])
def modify_todo(todo_id):
    global todos
    content = request.get_json()
    print(content)

    for i, todo in enumerate(todos):
        if todo["id"] == todo_id:
            database.update_data(FILE_PATH, content)
            todos = database.get_data(FILE_PATH)
            response = make_response(jsonify(content), 200)
            return response

    return abort(404, description="todo id {} does not exist".format(todo_id))


@app.route('/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    global todos
    database.delete_data(FILE_PATH, todo_id)
    todos = database.get_data(FILE_PATH)
    return jsonify(todos)
    # return abort(404, description="todo id {} does not exist".format(todo_id))


if __name__ == '__main__':
    app.run(debug=True)
