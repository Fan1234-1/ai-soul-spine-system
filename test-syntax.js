try {
  console.log('測試 server.ts 語法...');
  require('tsx/cjs').register();
  require('./src/api/server.ts');
  console.log('✅ 語法正確');
} catch (error) {
  console.error('❌ 語法錯誤:', error);
}