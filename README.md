コンテナ作成
```
docker-compose build
```

コンテナ起動
```
docker-compose up -d
```

コンテナ停止
```
docker-compose down
```

コンテナ削除
```
docker system prune -a
```

Volumeの削除1
```
docker volume prune
```

Volumeの削除2
```
$ docker volume rm $(docker volume ls -qf dangling=true)
```

Build cahcheのクリア
```
docker builder prune
```

一覧表示
```
docker system df
```

使用していないイメージを一括削除
```
docker image prune
```

イメージの一覧
```
docker images
```

イメージの個別削除
```
docker rmi [IMAGE ID]
```

mysqlコンテナに入る
```
docker exec -it mysql /bin/bash
```

backコンテナに入る
```
docker exec -it back /bin/bash
```

frontコンテナに入る
```
docker exec -it front /bin/bash
```

```
PS1='\W $ '
```

MySQLへ接続
```
 mysql -h 127.0.0.1 -P 3306 -uroot -proot
```

データベース確認
```
show databases;
```

使用するデータベースを変更する
```
use testdb;
```

テーブルを確認する
```
show tables;
```

データ確認
```
select * from user;
```

Javaのバージョン確認
```
java -version
```

Node.jsのバージョン確認
```
npm -version
```

```
npm install vue-router@4
```

```
npm install axios
```

```
npm run serve
```



