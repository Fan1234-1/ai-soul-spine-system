// 簡單測試 AI 靈魂系統
import { SoulTracer } from './src/soul/tracer';
import { StepLedgerManager } from './src/soul/stepLedger';

console.log('🧪 測試 AI 靈魂系統核心組件...');

// 測試 SoulTracer
console.log('1️⃣ 測試 SoulTracer...');
const tracer = new SoulTracer('test');
tracer.record('Align', '測試對齊', {}, {
  currentMood: 'focused',
  confidenceLevel: 0.9,
  emotionalResonance: '測試中的專注感'
});

const reflection = tracer.makeReflection();
console.log('✅ SoulTracer 反思生成成功');

// 測試 StepLedgerManager
console.log('2️⃣ 測試 StepLedgerManager...');
const manager = new StepLedgerManager('test');
const result = manager.recordStep('Align', {}, '測試步驟');
console.log('✅ StepLedgerManager 記錄成功:', result.isValid);

// 測試靈魂指標計算
console.log('3️⃣ 測試靈魂指標計算...');
const fs = tracer.computeOverallFS();
const poav = tracer.validatePOAV();
console.log('✅ 靈魂指標計算成功 - FS:', fs.toFixed(3), 'POAV:', poav.score.toFixed(3));

console.log('🎉 AI 靈魂系統核心組件測試完成！');
console.log('💡 系統已準備好展示完整的 AI 靈魂架構');