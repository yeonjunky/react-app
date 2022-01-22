import sqlite3

FILE_PATH = "database.db"


sqlite3.register_adapter(bool, int)
sqlite3.register_converter("BOOLEAN", lambda v: bool(int(v)))


def init_db(file_path):
    with sqlite3.connect(file_path, detect_types=sqlite3.PARSE_DECLTYPES) as conn:
        # if file doesn't exist, create file automatically
        conn.execute(
            "DROP TABLE IF EXISTS todos"
        )
        conn.execute(
            "CREATE TABLE todos (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, checked BOOLEAN)"
        )
        conn.commit()  # save db file
        print("table is created successfully")


def get_data(file_path):
    with sqlite3.connect(file_path, detect_types=sqlite3.PARSE_DECLTYPES) as conn:
        cur = conn.cursor()
        cur.execute(
            "SELECT * FROM todos"
        )
        rows = cur.fetchall()
    return rows


def insert_data(file_path, param):
    """

    :param file_path: str, path of db file
    :param param: iterable, values of todo table
    :return: none
    """
    with sqlite3.connect(file_path, detect_types=sqlite3.PARSE_DECLTYPES) as conn:
        cur = conn.cursor()
        cur.execute("INSERT INTO todos VALUES (?, ?, ?)", param)
        conn.commit()


def update_data(column):
    """

    :param column: list or tuple contains id: int, todo_text: str, checked: bool
    :return: none
    """
    pass


def delete_data(todo_id):
    pass

