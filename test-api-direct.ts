// 直接測試 API
import express from 'express';
import { SoulTracer } from './src/soul/tracer';
import { StepLedgerManager } from './src/soul/stepLedger';

const app = express();

app.get('/test', async (req, res) => {
  try {
    const tracer = new SoulTracer('test');
    tracer.record('Align', 'Test alignment');
    tracer.record('Isolate', 'Test isolation');
    tracer.record('Borrow', 'Test borrowing');
    tracer.record('Digitwise', 'Test digitization');
    tracer.record('Conclude', 'Test conclusion');
    
    const metrics = tracer.validatePOAV();
    const fs = tracer.computeOverallFS();
    
    res.json({
      msg: 'Test successful',
      soul: {
        steps: tracer.getSteps(),
        metrics: {
          POAV: metrics.score,
          FS: fs
        }
      }
    });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
});

if (require.main === module) {
  app.listen(3003, () => {
    console.log('Test API running on port 3003');
  });
}

export { app };