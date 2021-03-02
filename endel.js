let obj = JSON.parse($response.body);
obj.subscription.type = "ACTIVE";
obj.subscription.store = "APP_STORE";
$done({body: JSON.stringify(obj)});
