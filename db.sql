CREATE TABLE watchlist(stock_id SERIAL PRIMARY KEY, symbol VARCHAR(10) UNIQUE, name VARCHAR(200), last NUMERI
C, change NUMERIC, username VARCHAR(100));