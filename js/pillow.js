let body = JSON.parse($response)
if (body.subscriber) {
    body.subscriber.entitlements = {
        "premium": {
            "expires_date": "2055-02-22T07:07:58Z",
            "product_identifier": "com.neybox.pillow.premium.year",
            "purchase_date": "2020-02-15T07:07:58Z"
        }
    };
    body.subscriber.subscriptions = {
        "com.neybox.pillow.premium.year": {
            "billing_issues_detected_at": null,
            "expires_date": "2055-02-22T07:07:58Z",
            "is_sandbox": false,
            "original_purchase_date": "2020-02-15T07:07:58Z",
            "period_type": "trial",
            "purchase_date": "2020-02-15T07:07:58Z",
            "store": "app_store",
            "unsubscribe_detected_at": null
        }
    };
}
$done({body:JSON.stringify(body)})