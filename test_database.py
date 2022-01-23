import database

FILE_PATH = "database.db"

# database.init_db(FILE_PATH)
database.insert_data(FILE_PATH, ("This is jun", True))
print(database.get_data(FILE_PATH))
