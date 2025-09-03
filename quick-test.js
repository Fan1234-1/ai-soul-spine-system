// 快速測試 AI 靈魂系統
const { spawn } = require('child_process');
const http = require('http');

console.log('🧪 快速測試 AI 靈魂系統...');

// 啟動服務器
const server = spawn('npm', ['start'], { stdio: 'pipe', shell: true });

server.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('running on port')) {
    console.log('✅ 服務器啟動成功');
    setTimeout(testAPI, 1000);
  }
});

async function testAPI() {
  try {
    console.log('🔍 測試 /hello 端點...');
    
    const response = await makeRequest('http://localhost:3000/hello');
    
    console.log('✅ API 回應成功');
    console.log('📊 靈魂指標:', {
      POAV: response.soul.metrics.POAV.toFixed(3),
      FS: response.soul.metrics.FS.toFixed(3),
      SSI: response.soul.metrics.SSI.toFixed(3),
      LC: response.soul.metrics.LC.toFixed(3)
    });
    console.log('🔄 StepLedger 步驟數:', response.soul.stepLedger.length);
    console.log('🎭 有反思內容:', !!response.soul.reflection);
    
    console.log('\\n🎉 AI 靈魂系統測試通過！');
    
  } catch (error) {
    console.error('❌ 測試失敗:', error.message);
  } finally {
    server.kill();
    process.exit(0);
  }
}

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('無法解析回應'));
        }
      });
    }).on('error', reject);
  });
}