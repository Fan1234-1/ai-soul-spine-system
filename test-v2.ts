import request from 'supertest';
import { app } from './src/api/server';

(async () => {
  console.log('🧪 測試全新 v0.2 實作');
  
  const res = await request(app).get('/hello');
  
  console.log('Status:', res.status);
  console.log('Body:', JSON.stringify(res.body, null, 2));
  
  // 檢查 v0.2 功能
  const soul = res.body.soul;
  
  console.log('\n=== v0.2 功能檢查 ===');
  console.log('✅ stepLedger 長度:', soul?.stepLedger?.length || 0);
  console.log('✅ 有 Reflect 步驟:', soul?.stepLedger?.some((s: any) => s.step === 'Reflect') ? 'YES' : 'NO');
  console.log('✅ 有 SSI 指標:', soul?.metrics?.SSI !== undefined ? 'YES' : 'NO');
  console.log('✅ 有 LC 指標:', soul?.metrics?.LC !== undefined ? 'YES' : 'NO');
  console.log('✅ 有 reflection:', soul?.reflection !== undefined ? 'YES' : 'NO');
  
  if (soul?.metrics?.SSI !== undefined) {
    console.log('📊 SSI 分數:', soul.metrics.SSI);
  }
  if (soul?.metrics?.LC !== undefined) {
    console.log('📊 LC 分數:', soul.metrics.LC);
  }
})().catch(console.error);