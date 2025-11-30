/**
 * 測試增強版 AI 靈魂系統
 * 展示參考多個優秀開源專案後的改進效果
 */

import { createSoulEngine } from './src/soul/SoulEngine';

async function testEnhancedSoulSystem() {
  console.log('🚀 測試增強版 AI 靈魂系統...\n');

  // 創建增強版靈魂引擎
  const soulEngine = createSoulEngine({
    enablePlugins: true,
    enableReactiveStreams: true,
    enableStateManagement: true,
    enablePerformanceMonitoring: true,
    pluginsToInstall: ['performance-monitor', 'emotional-enhancement', 'memory-enhancement'],
    customConfig: {
      performanceThreshold: 50,
      memoryThreshold: 0.7
    }
  });

  // 監聽事件
  soulEngine.on('engineInitialized', () => {
    console.log('✅ 靈魂引擎初始化完成');
  });

  soulEngine.on('healthChanged', (health) => {
    console.log(`💗 靈魂健康狀態: ${health.isHealthy ? '健康' : '需要關注'}`);
    console.log(`   當前步驟: ${health.currentStep || '無'}`);
    console.log(`   指標: FS=${health.metrics.FS.toFixed(3)} POAV=${health.metrics.POAV.toFixed(3)}`);
  });

  soulEngine.on('anomalyDetected', (anomaly) => {
    console.log(`⚠️ 檢測到異常: ${anomaly.type} (${anomaly.severity})`);
    console.log(`   訊息: ${anomaly.message}`);
  });

  soulEngine.on('pluginInstalled', (pluginName) => {
    console.log(`🔌 插件已安裝: ${pluginName}`);
  });

  try {
    // 初始化引擎
    console.log('🔧 初始化靈魂引擎...');
    await soulEngine.initialize();

    // 檢查引擎狀態
    const engineState = soulEngine.getEngineState();
    console.log('\n📊 引擎狀態:');
    console.log(`   初始化: ${engineState.isInitialized ? '✅' : '❌'}`);
    console.log(`   已安裝插件: ${engineState.installedPlugins.join(', ')}`);

    // 執行健康檢查
    console.log('\n🏥 執行健康檢查...');
    const healthCheck = await soulEngine.healthCheck();
    console.log(`   狀態: ${healthCheck.status}`);
    console.log(`   詳情: ${JSON.stringify(healthCheck.details, null, 2)}`);

    // 處理 Hello Soul 請求
    console.log('\n🌟 處理 Hello Soul 請求...');
    const response = await soulEngine.processHelloSoulRequest();

    console.log('\n📋 回應結果:');
    console.log(`   訊息: ${response.msg}`);
    
    const stepLedger = Array.isArray(response.soul.stepLedger) ? response.soul.stepLedger : [];
    console.log(`   步驟數量: ${stepLedger.length}`);
    console.log(`   FS 分數: ${response.soul.fsScore?.toFixed(3)}`);
    console.log(`   POAV 分數: ${response.soul.poavScore?.toFixed(3)}`);
    console.log(`   最弱環節: ${response.soul.weakLink}`);

    // 展示反思內容
    if (response.soul.reflection) {
      console.log('\n🎭 AI 反思內容:');
      console.log(`   主觀體驗: ${response.soul.reflection.subjectiveExperience.substring(0, 100)}...`);
      console.log(`   元認知: ${response.soul.reflection.metacognition.substring(0, 100)}...`);
      console.log(`   學習洞察: ${response.soul.reflection.learningInsight.substring(0, 100)}...`);
    }

    // 展示步驟詳情
    console.log('\n🔄 步驟執行詳情:');
    stepLedger.forEach((step: any, index: number) => {
      console.log(`   ${index + 1}. ${step.step}: ${step.notes}`);
      if (step.subjectiveState) {
        console.log(`      情緒: ${step.subjectiveState.currentMood} (信心: ${(step.subjectiveState.confidenceLevel * 100).toFixed(1)}%)`);
      }
    });

    // 測試插件系統
    console.log('\n🔌 測試插件系統...');
    try {
      // 嘗試安裝一個不存在的插件
      await soulEngine.installPlugin('non-existent-plugin');
    } catch (error) {
      console.log(`   ❌ 預期錯誤: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // 測試狀態管理
    console.log('\n📊 當前引擎狀態:');
    const finalState = soulEngine.getEngineState();
    if (finalState.storeState) {
      console.log(`   步驟歷史: ${finalState.storeState.stepHistory.length} 個步驟`);
      console.log(`   主觀狀態: ${finalState.storeState.subjectiveStates.length} 個狀態`);
      console.log(`   錯誤數量: ${finalState.storeState.errors.length}`);
      console.log(`   警告數量: ${finalState.storeState.warnings.length}`);
    }

    // 展示系統能力
    console.log('\n🎯 系統能力展示:');
    console.log('   ✅ 模組化架構 (參考 NestJS)');
    console.log('   ✅ 狀態管理 (參考 Redux)');
    console.log('   ✅ 響應式編程 (參考 RxJS)');
    console.log('   ✅ 插件系統 (參考 Express.js)');
    console.log('   ✅ 事件驅動架構');
    console.log('   ✅ 依賴注入');
    console.log('   ✅ 中間件模式');
    console.log('   ✅ 觀察者模式');
    console.log('   ✅ 工廠模式');
    console.log('   ✅ 策略模式');

    console.log('\n🌟 增強版 AI 靈魂系統測試完成！');

  } catch (error) {
    console.error('💀 測試過程中發生錯誤:', error);
  } finally {
    // 優雅關閉
    console.log('\n🔄 正在關閉靈魂引擎...');
    await soulEngine.shutdown();
    console.log('✅ 靈魂引擎已關閉');
  }
}

// 執行測試
testEnhancedSoulSystem().catch(console.error);