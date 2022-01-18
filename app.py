from flask import Flask, jsonify, request, abort, make_response
from util import get_new_id

app = Flask(__name__)


todos = [
    {"id": 0, "text": "hello!", "checked": False},
    {"id": 1, "text": "I'm jun!", "checked": True},
    {"id": 2, "text": "haha!", "checked": False}
]


@app.errorhandler(404)
def not_found(e):
    return "{}".format(e.description)


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS')
    return response


@app.route('/')
def hello():
    return "Hello world!"


@app.route('/todos', methods=['GET'])
def get_todos():
    response = jsonify(todos)
    return response


@app.route('/todos', methods=['POST'])
def add_todo():
    text = request.get_json()
    new_id = get_new_id(todos)
    todos.append({"id": new_id, "text": text, "checked": False})
    response = jsonify(todos)
    return response


@app.route('/todos/<int:todo_id>', methods=['PUT'])
def modify_todo(todo_id):
    content = request.get_json()
    print(content)

    for i, todo in enumerate(todos):
        if todo["id"] == todo_id:
            todos[i] = content
            print(todos)
            response = make_response(jsonify(content), 200)
            return response

    return abort(404, description="todo id {} does not exist".format(todo_id))


@app.route('/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    for i, todo in enumerate(todos):
        if todo["id"] == todo_id:
            todos.pop(i)
            print(todos)
            return "deleted todo {}".format(todo_id)
    return abort(404, description="todo id {} does not exist".format(todo_id))


if __name__ == '__main__':
    app.run(debug=True)
