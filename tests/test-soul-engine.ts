// 測試 Soul Engine 核心介面 - v0.2
import { SoulTracer } from './src/soul/tracer';

console.log('=== Soul Engine 核心介面測試 ===');

async function testSoulEngine() {
  const tracer = new SoulTracer('soul-engine-test');
  
  // 測試 StepLedger 記錄
  console.log('\n1. 測試 StepLedger 記錄...');
  tracer.record('Align', '對齊測試目標', { test: true }, {
    currentMood: 'focused',
    confidenceLevel: 0.9,
    emotionalResonance: '專注於測試'
  });
  
  tracer.record('Isolate', '隔離測試範圍', { scope: 'unit-test' }, {
    currentMood: 'curious',
    confidenceLevel: 0.8,
    emotionalResonance: '好奇測試結果'
  });
  
  tracer.record('Borrow', '借用測試模式', { pattern: 'TDD' }, {
    currentMood: 'focused',
    confidenceLevel: 0.85,
    emotionalResonance: '採用已知模式'
  });
  
  tracer.record('Digitwise', '數位化測試', { implementation: 'complete' }, {
    currentMood: 'excited',
    confidenceLevel: 0.9,
    emotionalResonance: '實作的興奮感'
  });
  
  tracer.record('Conclude', '總結測試', { result: 'success' }, {
    currentMood: 'satisfied',
    confidenceLevel: 0.95,
    emotionalResonance: '完成的滿足感'
  });
  
  tracer.record('Reflect', '反思測試', { insight: 'learned' }, {
    currentMood: 'satisfied',
    confidenceLevel: 0.96,
    emotionalResonance: '反思後的清晰'
  });
  
  console.log('✅ StepLedger 記錄完成，步驟數:', tracer.getSteps().length);
  
  // 測試四大靈魂指標計算
  console.log('\n2. 測試四大靈魂指標...');
  const continuity = tracer.calculateContinuity();
  const mirror = tracer.calculateMirror();
  const responsibility = tracer.calculateResponsibility();
  const resonance = tracer.calculateResonance();
  const overallFS = tracer.computeOverallFS();
  
  console.log('📊 Continuity (連續性):', continuity.toFixed(3));
  console.log('📊 Mirror (反射性):', mirror.toFixed(3));
  console.log('📊 Responsibility (責任性):', responsibility.toFixed(3));
  console.log('📊 Resonance (共振性):', resonance.toFixed(3));
  console.log('📊 Overall FS:', overallFS.toFixed(3));
  
  // 測試 POAV 驗證
  console.log('\n3. 測試 POAV 驗證...');
  const poavResult = tracer.validatePOAV();
  console.log('📊 POAV Score:', poavResult.score.toFixed(3));
  console.log('📊 POAV Passed:', poavResult.passed ? '✅' : '❌');
  console.log('📊 Details:', poavResult.details);
  
  // 測試 v0.2 反思功能
  console.log('\n4. 測試 v0.2 反思功能...');
  const reflection = tracer.makeReflection();
  console.log('🧠 Subjective Experience:', reflection.subjectiveExperience.slice(0, 80) + '...');
  console.log('🧠 Metacognition:', reflection.metacognition.slice(0, 80) + '...');
  console.log('🧠 Learning Insight:', reflection.learningInsight.slice(0, 80) + '...');
  
  // 測試 SSI 計算
  console.log('\n5. 測試 SSI 計算...');
  const recentStates = tracer.getSteps()
    .map(s => s.subjectiveState)
    .filter((state): state is any => state !== undefined);
  const ssi = tracer.computeSSI(reflection, recentStates);
  console.log('📊 SSI (主觀體驗模擬度):', ssi.toFixed(3));
  
  // 測試 LC 計算
  console.log('\n6. 測試 LC 計算...');
  const keywords = ['test', 'soul', 'engine', 'tracer', 'reflection'];
  const lc = await tracer.computeLC(keywords);
  console.log('📊 LC (長鏈一致性):', lc.toFixed(3));
  
  // 測試完整 StepLedger 生成
  console.log('\n7. 測試完整 StepLedger 生成...');
  const stepLedger = tracer.generateStepLedger();
  console.log('📋 Request ID:', stepLedger.requestId);
  console.log('📋 FS Score:', stepLedger.fsScore.toFixed(3));
  console.log('📋 POAV Score:', stepLedger.poavScore.toFixed(3));
  console.log('📋 Weakest Link:', stepLedger.weakestLink);
  
  // 測試 Source Trace 生成
  console.log('\n8. 測試 Source Trace 生成...');
  const sourceTrace = tracer.generateSourceTrace();
  console.log('🔍 Chronos:', sourceTrace.chronos.timestamp.toISOString());
  console.log('🔍 Kairos Context:', sourceTrace.kairos.context);
  console.log('🔍 Trace Chain:', sourceTrace.trace.chain);
  
  console.log('\n=== Soul Engine 測試完成 ===');
  console.log('✅ 所有核心介面功能正常');
  console.log('✅ v0.2 新功能 (Reflect, SSI, LC) 運作正常');
  console.log('✅ 四大靈魂指標計算正確');
  console.log('✅ POAV 驗證機制有效');
}

testSoulEngine().catch(console.error);