let body = JSON.parse($response.body)
if (body.subscription) {
    body.subscription.type = "ACTIVE"
    body.subscription.store = "APP_STORE"
    $done({body:JSON.stringify(body)})
} else {
    $done({})
}
