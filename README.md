# Twilio Super SIM と M5Stack で SMS を送信する（サーバーサイド）

M5Stack に M5Stack 3G ボードを組み合わせ、SIM には Twilio SuperSIM を使います。  
こちらはサーバー側のレポジトリになります。M5Stack 側のレポジトリは、[こちら](https://github.com/mobilebiz/SuperSim)にございます。

## インストール

```sh
git clone https://github.com/mobilebiz/super-sim-send-sms
cd super-sim-send-sms
npm install
cp .env.example .env
```

コピーした.env をエディタで開き、以下の内容を更新します。

| 変数名      | 設定値                                                                                                      |
| :---------- | :---------------------------------------------------------------------------------------------------------- |
| ACCOUNT_SID | AC から始まる Twilio の AccountSid                                                                          |
| AUTH_TOKEN  | Twilio の AuthToken                                                                                         |
| URL         | Twilio 上にデプロイしたときに割り当てられる URL（例：https://super-sim-send-sms-XXXX-dev.twil.io/send-sms） |
| TO          | SMS を送信する電話番号（例：+81XXXXXXXXXX）                                                                 |

## デプロイ

Twilio CLI と Serverless プラグインがインストールされている必要があります。

```sh
twilio serverless:deploy
```

## 署名の作成

デプロイによって払い出された URL（例：`https://super-sim-send-sms-XXXX-dev.twil.io/send-sms`）を、`.env`ファイルに書き込みます。

```sh
node calcSign.js
```

生成された署名と、払い出された URL が、クライアント（M5Stack）側で必要になります。
