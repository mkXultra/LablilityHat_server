# LablilityHat_server
LablilityHat_server

## 起動方法
```
npm run start
```

[ローカルホスト](http://localhost:8080/api/v1/)からアクセスできる

confデータ構造
```
{
  アプリケーションメタ情報
  uuid
    各デバイスごとのメタ情報
    サービスリスト
      サービスメタ情報
      アクションリスト
          名前
          trigger(サービス名から後ろのパラメータ)
          アクション
            連携サービス名
            連携サービス名に渡すパラメータ
}

```
サンプル
```
{
  "info":{
    "version":"1.0.0",
    "mode":"memory"
  },
  "uuidConfLists":{
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx":{
      "services":{
        "LabilityCore":{
          "info":{
            "apiKey":"xxx"
          },
          "actions":{
            "core_example":{
              "triggerType":"url_get",
              "triggerParam":"buttons/1/pushed",
              "action":{
                "type":"execute_action",
                "serviceName":"ifttt",
                "params":"ifttt_example"
              }
            }
          }
        },
        "ifttt":{
          "info":{
            "apiKey":"xxx"
          },
          "actions":{
            "ifttt_example":{
              "trigger":"",
              "triggerType":"",
              "action":{
                "type":"url_get",
                "serviceName":"",
                "params":"example_ifttt_service_name"
              }
            }
          }
        }
      }
    }
  }
}
```