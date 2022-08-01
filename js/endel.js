let body = JSON.parse($response.body)
if (body.subscription) {
    body.subscription.type = "ACTIVE"
    body.subscription.time_left = 999999
    body.subscription.valid_until = 4089196800
    body.subscription.store = "APP_STORE"
    $done({body:JSON.stringify(body)})
} else {
    $done({})
}
