# 先に ../myapp-server をセットアップしてください。

----------------------------------------------------------------------------------

# 参考環境

Ubuntu 20.04 (WSL2, Windows10)

# (Linux) TypeScript言語で開発に必要なソフトをインストールする

```
sudo apt update
sudo apt install nodejs npm
sudo npm install -g yarn
sudo npm install -g n
sudo n latest
```

# このプロジェクトをgitでクローン（ダウンロード）する。

```
git clone git@github.com:friendslight/graphql-tutorial.git
```

# このプロジェクトの初期設定を行う。

```
cd graphql-by-nodejs/myapp-client
npm install

# 開発用ローカルサーバーを起動する
npx webpack serve

# ブラウザで https://localhost:8088/ にアクセスしてみる
```

## helloWorld と表示されたら成功

その helloWorld は、graphqlサーバー http://localhost:4000/graphql にクエリした結果を表示したものです！
おめでとう！