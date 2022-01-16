from flask import Flask, jsonify, request, abort

app = Flask(__name__)

todos = [
    {"id": 0, "text": "hello!", "checked": False},
    {"id": 1, "text": "I'm jun!", "checked": True},
    {"id": 2, "text": "haha!", "checked": False}
]


@app.errorhandler(404)
def not_found(e):
    return "{}".format(e.description)


@app.route('/')
def hello():
    return "Hello world!"


@app.route('/todos', methods=['GET'])
def get_todos():
    response = jsonify(todos)
    response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
    return response


@app.route('/todos', methods=['POST'])
def add_todo(todo_id):
    pass


@app.route('/todos/<int:todo_id>', methods=['PUT'])
def modify_todo(todo_id):
    content = request.get_json()

    for i, todo in enumerate(todos):
        if todo["id"] == todo_id:
            todos[i] = content
            print(todos)
            return content

    return abort(404, description="todo id {} does not exist".format(todo_id))


@app.route('/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    pass


if __name__ == '__main__':
    app.run(debug=True)
