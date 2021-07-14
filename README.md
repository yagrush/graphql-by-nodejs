# graphql-by-nodejs

## 1. graphqlサーバーを起動する

./myapp-server/README.md 参照。

## 2. graphqlクライアント(React-TypeScript WEBアプリ)を起動する

./myapp-client/README.md 参照。

## 3. https://localhost:8088 にアクセス（勝手にブラウザで開く）

無理やりhttpsで動かしているのでセキュリティ警告が出るが、詳細→気にせず開く、をクリック。<br />
このWEBアプリを開くことで、1. で起動したgqlサーバーに gqlクエリ
```
  query helloWorld {
    helloWorld
  }
```
を投げるようになっている。

## 4. helloWorld と表示されたら成功

その helloWorld は、graphqlサーバー http://localhost:4000/graphql にクエリした結果を表示したものです！
おめでとう！
