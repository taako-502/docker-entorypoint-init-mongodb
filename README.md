# Docker Entorypoint Init MongoDB

## Usage

Docker 初回起動時に`docker-entrypoint-initdb.d`が一度だけ実行される

```bash
docker-compose up -d
```

もし再度実行したい場合は Volume を削除し、再度上記のコマンドを実行すると`docker-entrypoint-initdb.d`が再度実行される
