# 魔方陣・テスト

## 実行方法

```shell
# node main.js

# パイプでデータを渡す
echo -n "1 2 3\n4 5 6\n7 8 9" | node main.js
# テストデータが入っているファイルパスで渡す。
node main.js ./data/3x3.tsv
# フォルダパスで渡す。フォルダ内に入っているテストデータをまとめてテストする
node main.js ./data
```

## テストデータの形について

テストデータは以下の形式で記述する。

```
1 2 3
4 5 6
7 8 9
```

## テスト環境

Node.js v22.13.1
