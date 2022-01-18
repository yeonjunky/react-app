def get_new_id(todos):
    if todos:
        new_id = todos[-1]["id"] + 1
        return new_id
    else:
        return 0
