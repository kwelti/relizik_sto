import sqlite3


def create_table():
    conn = sqlite3.connect("data_base.db")
    cur = conn.cursor()
    cur.execute('''CREATE TABLE IF NOT EXISTS stravy (
         id INTEGER PRIMARY KEY,
         request TEXT)''')
    
def fill_quiz(path_to_db):
    n = int(input("Введіть проблеми з транспортним засобом"))
    conn = sqlite3.connect(path_to_db)
    cur = conn.cursor()
    

    for i in range(n):
        a = int(input("Введіть 1 поле"))2
        b = int(input("Введіть 2 поле"))
        c = int(input("Введіть 3 поле"))

        cur.execute('''INSERT INTO quiz (a,b,c) VALUES (?)''', [a,b,c])
        conn.commit()
    conn.close()
    
    

    
    conn.commit()
    conn.close()
create_table()
fill_quiz("data_base.db")