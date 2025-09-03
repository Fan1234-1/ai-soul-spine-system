// 簡單的 server 測試
const { spawn } = require('child_process');
const http = require('http');

// 啟動 server
const server = spawn('npm', ['run', 'dev'], { stdio: 'pipe' });

// 等待 server 啟動
setTimeout(() => {
  // 測試 API
  const req = http.request('http://localhost:3000/', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log('API Response:', JSON.parse(data));
      server.kill();
      process.exit(0);
    });
  });
  
  req.on('error', (err) => {
    console.error('Request failed:', err);
    server.kill();
    process.exit(1);
  });
  
  req.end();
}, 3000);

// 處理 server 輸出
server.stdout.on('data', (data) => {
  console.log('Server:', data.toString());
});

server.stderr.on('data', (data) => {
  console.error('Server Error:', data.toString());
});