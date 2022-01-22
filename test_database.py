import database

FILE_PATH = "database.db"

database.init_db(FILE_PATH)
# database.insert_data(FILE_PATH, (2, "haha", False))
print(database.get_data(FILE_PATH))
