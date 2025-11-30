// 簡單的 API 測試
const express = require('express');

// 嘗試導入 server
try {
  const { app } = require('./dist/api/server.js');
  console.log('✅ Server module loaded successfully');
  
  // 啟動測試
  const server = app.listen(3001, () => {
    console.log('🌟 Test server running on port 3001');
    
    // 測試 API
    const http = require('http');
    const req = http.request('http://localhost:3001/', (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log('✅ API Response received');
        console.log('Status:', res.statusCode);
        server.close();
      });
    });
    
    req.on('error', (err) => {
      console.error('❌ Request failed:', err);
      server.close();
    });
    
    req.end();
  });
  
} catch (error) {
  console.error('❌ Failed to load server module:', error.message);
  
  // 嘗試編譯
  console.log('🔨 Attempting to build...');
  const { spawn } = require('child_process');
  const build = spawn('npx', ['tsc'], { stdio: 'inherit' });
  
  build.on('close', (code) => {
    if (code === 0) {
      console.log('✅ Build successful, retrying...');
      // 重新嘗試
      try {
        const { app } = require('./dist/api/server.js');
        console.log('✅ Server module loaded after build');
      } catch (err) {
        console.error('❌ Still failed after build:', err.message);
      }
    } else {
      console.error('❌ Build failed with code:', code);
    }
  });
}