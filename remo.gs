function getNatureRemoData(endpoint) {　　　　　
  const REMO_ACCESS_TOKEN = 'gJi78m9undQyShLXCMqvzV6jk7_aiJFJa9tNlFzofWA.FjunNdlxM-H4FE45UdF8qeNgXTvig1CZMKf9-c99VH8'
  const headers = {
    "Content-Type" : "application/json;",
    'Authorization': 'Bearer ' + REMO_ACCESS_TOKEN,
  };

  const options = {
    "method" : "get",
    "headers" : headers,
  };
  
  return JSON.parse(UrlFetchApp.fetch("https://api.nature.global/1/" + endpoint, options));
}
