/**
 * 測試完整的監控系統
 * 展示即時 FS 分數監控、儀表板和告警功能
 */

import { createSoulEngine } from './src/soul/SoulEngine';
import { MetricsCollector } from './src/soul/monitoring/MetricsCollector';
import { SoulDashboard } from './src/soul/monitoring/SoulDashboard';
import { globalSoulEventStream } from './src/soul/reactive/SoulObservable';

async function testMonitoringSystem() {
  console.log('🚀 測試完整的 AI 靈魂監控系統...\n');

  // 創建增強版靈魂引擎
  const soulEngine = createSoulEngine({
    enablePlugins: true,
    enableReactiveStreams: true,
    enableStateManagement: true,
    enablePerformanceMonitoring: true,
    enableMetricsCollection: true,
    enableDashboard: true,
    pluginsToInstall: ['performance-monitor', 'emotional-enhancement', 'memory-enhancement'],
    metricsConfig: {
      retentionDays: 7,
      collectionInterval: 2000 // 2 秒收集一次
    },
    dashboardConfig: {
      updateInterval: 3000, // 3 秒更新一次
      enableRealtime: true
    }
  });

  // 監聽各種事件
  soulEngine.on('engineInitialized', () => {
    console.log('✅ 靈魂引擎初始化完成');
  });

  soulEngine.on('healthChanged', (health) => {
    console.log(`💗 健康狀態變更: ${health.isHealthy ? '✅ 健康' : '⚠️ 需要關注'}`);
    if (health.metrics) {
      console.log(`   FS: ${health.metrics.FS.toFixed(3)}, POAV: ${health.metrics.POAV.toFixed(3)}`);
    }
  });

  soulEngine.on('alertTriggered', (alert) => {
    console.log(`🚨 告警觸發: ${alert.ruleName}`);
    console.log(`   嚴重程度: ${alert.severity}`);
    console.log(`   指標: ${alert.metric} = ${alert.currentValue.toFixed(3)} (閾值: ${alert.threshold})`);
  });

  soulEngine.on('anomalyDetected', (anomaly) => {
    console.log(`🔍 異常檢測: ${anomaly.type} (${anomaly.severity})`);
    console.log(`   訊息: ${anomaly.message}`);
  });

  try {
    // 初始化引擎
    console.log('🔧 初始化靈魂引擎...');
    await soulEngine.initialize();

    // 等待一下讓系統穩定
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('\n📊 開始監控測試...');

    // 模擬多次請求來生成監控數據
    for (let i = 1; i <= 5; i++) {
      console.log(`\n🌟 執行第 ${i} 次 Hello Soul 請求...`);
      
      const response = await soulEngine.processHelloSoulRequest(`test-${i}`);
      
      console.log(`   回應: ${response.msg}`);
      console.log(`   步驟數量: ${Array.isArray(response.soul.stepLedger) ? response.soul.stepLedger.length : 'N/A'}`);
      console.log(`   FS 分數: ${response.soul.fsScore?.toFixed(3)}`);
      console.log(`   最弱環節: ${response.soul.weakLink}`);

      // 等待一下讓監控系統收集數據
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // 獲取監控摘要
    console.log('\n📈 監控系統摘要:');
    const summary = soulEngine.getMetricsSummary();
    console.log(`   整體健康狀態: ${summary.currentHealth}`);
    console.log(`   活躍告警數量: ${summary.activeAlerts}`);
    console.log(`   最近趨勢數量: ${summary.recentTrends.length}`);

    // 展示趨勢分析
    console.log('\n📊 趨勢分析:');
    const trends = soulEngine.getTrends();
    trends.forEach(trend => {
      const arrow = trend.trend === 'improving' ? '📈' : 
                   trend.trend === 'declining' ? '📉' : '➡️';
      console.log(`   ${arrow} ${trend.metric}: ${trend.trend} (變化率: ${(trend.changeRate * 100).toFixed(1)}%, 信心: ${(trend.confidence * 100).toFixed(0)}%)`);
    });

    // 獲取儀表板數據
    console.log('\n🖥️ 儀表板數據:');
    const dashboardData = soulEngine.getDashboardData();
    console.log(`   最後更新: ${dashboardData.timestamp.toLocaleString('zh-TW')}`);
    console.log(`   系統運行時間: ${Math.floor(dashboardData.systemInfo.uptime / 60)} 分鐘`);
    console.log(`   記憶體使用: ${dashboardData.systemInfo.memoryUsage}`);
    console.log(`   發現的問題: ${dashboardData.healthSummary.issues.length} 個`);
    
    if (dashboardData.healthSummary.issues.length > 0) {
      console.log('   問題列表:');
      dashboardData.healthSummary.issues.forEach((issue: string) => {
        console.log(`     - ${issue}`);
      });
    }

    // 測試自定義告警規則
    console.log('\n🚨 測試自定義告警規則...');
    soulEngine.addAlertRule({
      id: 'custom-test',
      name: '測試告警規則',
      metric: 'FS',
      operator: 'lt',
      threshold: 0.95, // 設置一個很高的閾值來觸發告警
      severity: 'medium',
      enabled: true,
      cooldownMs: 5000
    });

    // 再執行一次請求來觸發告警
    console.log('🌟 執行請求來觸發自定義告警...');
    await soulEngine.processHelloSoulRequest('alert-test');
    
    // 等待告警處理
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 生成 HTML 儀表板預覽
    console.log('\n🖥️ 生成 HTML 儀表板...');
    const html = soulEngine.generateDashboardHTML();
    console.log(`   HTML 長度: ${html.length} 字符`);
    console.log('   包含內容: 健康狀態、指標圖表、趨勢分析、系統資訊');

    // 引擎狀態檢查
    console.log('\n🔧 引擎狀態檢查:');
    const engineState = soulEngine.getEngineState();
    console.log(`   初始化狀態: ${engineState.isInitialized ? '✅' : '❌'}`);
    console.log(`   已安裝插件: ${engineState.installedPlugins.join(', ')}`);
    console.log(`   指標收集器: ${engineState.metricsCollector ? '✅ 運行中' : '❌ 未啟用'}`);
    console.log(`   儀表板: ${engineState.dashboard ? '✅ 運行中' : '❌ 未啟用'}`);

    if (engineState.metricsCollector) {
      console.log(`   最近快照數量: ${engineState.metricsCollector.recentSnapshots}`);
    }

    // 健康檢查
    console.log('\n🏥 系統健康檢查:');
    const healthCheck = await soulEngine.healthCheck();
    console.log(`   狀態: ${healthCheck.status}`);
    console.log(`   詳情: ${JSON.stringify(healthCheck.details, null, 2)}`);

    console.log('\n🎯 監控系統功能展示:');
    console.log('   ✅ 即時 FS 分數監控');
    console.log('   ✅ 自動指標收集和存儲');
    console.log('   ✅ 趨勢分析和異常檢測');
    console.log('   ✅ 可配置的告警規則');
    console.log('   ✅ Web 監控儀表板');
    console.log('   ✅ 響應式事件流');
    console.log('   ✅ 健康狀態監控');
    console.log('   ✅ 系統性能監控');

    console.log('\n🌟 監控系統測試完成！');

  } catch (error) {
    console.error('💀 測試過程中發生錯誤:', error);
  } finally {
    // 優雅關閉
    console.log('\n🔄 正在關閉監控系統...');
    await soulEngine.shutdown();
    console.log('✅ 監控系統已關閉');
  }
}

// 執行測試
testMonitoringSystem().catch(console.error);