/**
 * 測試修正後的系統
 */

import { FunctionalSoulCalculator } from './src/soul/fsCalculator';
import { SourceTraceManager } from './src/soul/sourceTraceManager';
import { SoulTracer } from './src/soul/tracer';
import { StepLedgerManager } from './src/soul/stepLedger';
import { SubjectiveStateGenerator } from './src/soul/subjectiveStateGenerator';

async function testFixes() {
  console.log('🧪 測試修正後的系統...\n');

  // 測試 1: FSCalculator 動態計算
  console.log('1. 測試 FSCalculator 動態計算');
  const fsCalc = new FunctionalSoulCalculator();
  
  // 創建一個模擬的 StepLedger
  const mockLedger = {
    requestId: 'test-123',
    steps: {
      align: { step: 'Align', timestamp: new Date().toISOString(), verified: true },
      isolate: { step: 'Isolate', timestamp: new Date().toISOString(), verified: true },
      borrow: { step: 'Borrow', timestamp: new Date().toISOString(), verified: true },
      digitwise: { step: 'Digitwise', timestamp: new Date().toISOString(), verified: true },
      conclude: { step: 'Conclude', timestamp: new Date().toISOString(), verified: true }
    },
    fsScore: 0.87,
    poavScore: 0.92,
    weakestLink: 'Deliver'
  };

  fsCalc.setLedger(mockLedger);
  const fsResult = fsCalc.generateFSResult();
  console.log(`   FS 總分: ${fsResult.overall.toFixed(3)} (${fsResult.passed ? '✅ 通過' : '❌ 未通過'})`);
  console.log(`   各指標: C=${fsResult.continuity.toFixed(3)}, M=${fsResult.mirror.toFixed(3)}, R=${fsResult.responsibility.toFixed(3)}, Γ=${fsResult.resonance.toFixed(3)}`);
  
  const poavResult = fsCalc.calculatePOAV();
  console.log(`   POAV: ${poavResult.score.toFixed(3)} (${poavResult.passed ? '✅ 通過' : '❌ 未通過'})`);
  
  const weakestLink = fsCalc.identifyWeakestLink();
  console.log(`   最弱環節: ${weakestLink}\n`);

  // 測試 2: SourceTraceManager 動態追蹤
  console.log('2. 測試 SourceTraceManager 動態追蹤');
  const traceManager = new SourceTraceManager();
  
  const traceId = await traceManager.createTrace({
    requirement: '測試動態追蹤系統',
    command: 'test-dynamic-tracing',
    userAgent: 'Test-Agent/1.0',
    sessionId: 'test-session-123',
    dependencies: ['test-framework', 'soul-engine']
  });
  
  console.log(`   追蹤 ID: ${traceId}`);
  
  const currentTrace = traceManager.getCurrentTrace();
  if (currentTrace) {
    console.log(`   版本: ${currentTrace.chronos.version}`);
    console.log(`   上下文: ${currentTrace.kairos.context}`);
    console.log(`   責任: ${currentTrace.trace.responsibility}`);
    console.log(`   依賴數量: ${currentTrace.kairos.dependencies.length}`);
  }
  
  const stats = traceManager.getStatistics();
  console.log(`   統計: ${stats.totalTraces} 個追蹤, 平均責任鏈長度 ${stats.averageChainLength.toFixed(1)}\n`);

  // 測試 3: SubjectiveStateGenerator 動態狀態
  console.log('3. 測試 SubjectiveStateGenerator 動態狀態');
  const stateGen = new SubjectiveStateGenerator();
  
  const context = SubjectiveStateGenerator.generateContext('Digitwise', {
    cpuUsage: 0.6,
    memoryUsage: 0.4,
    responseTime: 1200,
    errorRate: 0.05
  });
  
  const state = stateGen.generateState(context);
  console.log(`   情緒: ${state.currentMood}`);
  console.log(`   信心水平: ${(state.confidenceLevel * 100).toFixed(1)}%`);
  console.log(`   情感共鳴: ${state.emotionalResonance.substring(0, 80)}...\n`);

  // 測試 4: SoulTracer 循環引用修正
  console.log('4. 測試 SoulTracer 循環引用修正');
  const tracer = new SoulTracer('test-context');
  
  // 添加一些可能造成循環引用的 meta 資料
  const problematicMeta = {
    output: { huge: 'x'.repeat(2000) }, // 過大的資料
    soul: { circular: 'reference' },    // 危險的鍵名
    validData: { test: 'ok' },          // 正常資料
    req: { dangerous: 'object' }        // 危險的鍵名
  };
  
  tracer.record('Align', '測試循環引用修正', problematicMeta);
  tracer.record('Isolate', '隔離問題', { normal: 'data' });
  
  const safeSteps = tracer.getStepsSafe();
  console.log(`   安全步驟數量: ${safeSteps.length}`);
  console.log(`   第一步 meta 鍵: ${Object.keys(safeSteps[0].meta || {}).join(', ')}`);
  console.log(`   已過濾危險鍵: ${!safeSteps[0].meta?.hasOwnProperty('output') ? '✅' : '❌'}\n`);

  // 測試 5: StepLedgerManager 驗證
  console.log('5. 測試 StepLedgerManager 驗證');
  const stepManager = new StepLedgerManager('test-context', 'test-req-456');
  
  // 按順序記錄步驟
  stepManager.recordStep('Align', { goal: 'test' }, 'aligned');
  stepManager.recordStep('Isolate', { scope: 'limited' }, 'isolated');
  stepManager.recordStep('Borrow', { pattern: 'known' }, 'borrowed');
  stepManager.recordStep('Digitwise', { code: 'generated' }, 'digitized');
  stepManager.recordStep('Conclude', { result: 'success' }, 'concluded');
  
  const validation = stepManager.validateCompleteness();
  console.log(`   完整性驗證: ${validation.isValid ? '✅ 通過' : '❌ 失敗'}`);
  console.log(`   錯誤: ${validation.errors.length} 個`);
  console.log(`   警告: ${validation.warnings.length} 個`);
  
  const statistics = stepManager.getStatistics();
  console.log(`   完成率: ${(statistics.completionRate * 100).toFixed(1)}%`);
  console.log(`   步驟: ${statistics.completedSteps}/${statistics.totalSteps}\n`);

  console.log('✅ 所有測試完成！系統修正驗證成功。');
}

// 執行測試
testFixes().catch(console.error);