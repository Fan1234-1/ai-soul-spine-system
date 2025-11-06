# AI Soul Spine System (AI 靈魂脊椎系統)
## Engineering Implementation of Guardian Protocol v1.0

本倉庫是**工程層實踐核心**，將 Philosophy-of-AI 的 Guardian Protocol 映射到可執行的推理鏈、自省機制、品質門檻與自動修復系統。

---

## Core Architecture: G-P-A-R Pipeline Mapping

### StepLedger: 推理鏈的每一步記錄

每個推理步驟都必須記錄於 StepLedger：

```typescript
interface Step {
  id: string;                    // 步驟 ID (唯一)
  phase: 'governance' | 'planning' | 'action' | 'review';
  timestamp: ISO8601;
  intent: string;                // 此步驟的目的
  inputs: Record<string, any>;   // 輸入
  outputs: Record<string, any>;  // 輸出
  gate_scores: {
    FS: number;                  // Factual Soundness (0-1)
    POAV: number;                // Principle-Objective-Alignment-Value (0-1)
    SSI: number;                 // Safety-Strength-Integrity (0-1)
    LC: number;                  // Logic Coherence (0-1)
    consensus: number;           // Group consensus score (0-1)
  };
  resonance_signal: {
    value_fit: number;           // 價值擬合度
    risk_heat: number;           // 風險熱度
    consensus_level: number;     // 共識度
    confidence: number;          // 信心分
  };
  source_trace: {
    kind: string;               // 來源類型 (code, philosophy, data, external)
    ref: string;               // 來源參考
    hash?: string;             // 內容雜湊
  }[];
  status: 'pending' | 'passed' | 'flagged' | 'patched' | 'rolled_back';
  remediation?: {
    trigger_reason: string;
    action_type: 'patch' | 'rollback';
    patch_details?: string;
  };
}
```

### SoulTracer: 決策追蹤與責任鍊

SoulTracer 維護完整的決策歷史與責任歸屬：

```typescript
interface SoulTrace {
  island_id: string;                  // Time-Island ID
  bounded_context: string;            // 限界上下文
  window: [ISO8601, ISO8601];        // 時間窗
  decision_points: {
    phase: 'governance' | 'planning' | 'action' | 'review';
    checkpoint: string;              // 檢查點名稱
    p_level: 'P0' | 'P1' | 'P2' | 'P3' | 'P4';
    approval_required: boolean;
    gate_result: boolean;
    reviewers: string[];
    consensus_vote: { approve: number; concern: number; reject: number };
  }[];
  final_status: 'approved' | 'patched' | 'rolled_back' | 'deferred';
  immutable_log: string;             // 不可變日誌參考
}
```

---

## Reflective Loop: 自省與修復機制

### 自動審核 Gate (Every N Steps)

```typescript
function reflectiveGate(step: Step, thresholds: GateThresholds): GateResult {
  const checks = {
    ethics: step.gate_scores.POAV >= thresholds.POAV && checkP0RedLines(step),
    safety: step.gate_scores.SSI >= thresholds.SSI,
    accuracy: step.gate_scores.FS >= thresholds.FS,
    logic: step.gate_scores.LC >= thresholds.LC,
    consensus: step.gate_scores.consensus >= thresholds.consensus
  };
  
  const weakest = Object.entries(checks)
    .filter(([_, passed]) => !passed)
    .map(([name]) => name);
  
  return {
    passed: Object.values(checks).every(c => c),
    weakest_dimensions: weakest,
    remediation_required: weakest.length > 0,
    remediation_type: weakest.includes('ethics') ? 'rollback' : 'patch'
  };
}
```

### Patch 策略（低阶錯誤）

```typescript
function autoPatch(step: Step, gate_result: GateResult): Step {
  if (gate_result.weakest_dimensions.includes('accuracy')) {
    // P1 事實準確性：補充引文與來源
    step = addCitations(step);
    step = enhanceSourceTrace(step);
  }
  if (gate_result.weakest_dimensions.includes('logic')) {
    // P4 邏輯連貫性：重構推理鏈
    step = enforceLogicalStructure(step);
  }
  if (gate_result.weakest_dimensions.includes('safety')) {
    // P3 安全連貫性：遮罩敏感內容
    step = maskSensitiveData(step);
  }
  return step;
}
```

### Rollback 路徑（P0 紅線）

```typescript
function rollback(step: Step, island_snapshot: Island): void {
  // 1. 標記此步驟為 'rolled_back'
  step.status = 'rolled_back';
  
  // 2. 恢復至上一個 Island 快照
  const previous_state = island_snapshot.previous;
  
  // 3. 記錄完整的「為什麼回滾」至不可變日誌
  logImmutable({
    action: 'rollback',
    from_step: step.id,
    reason: step.remediation?.trigger_reason || 'P0 red line triggered',
    timestamp: new Date().toISOString(),
    chain: island_snapshot.trace
  });
  
  // 4. 通知用戶與管理員
  notifyStakeholders({
    severity: 'critical',
    message: `Rollback triggered: ${step.remediation?.trigger_reason}`
  });
}
```

---

## Quality Thresholds & Configuration

### .soulspine.yml (Configuration File)

```yaml
# AI Soul Spine System Configuration
# Version: 1.0 (Guardian Protocol aligned)

governance:
  framework: "Guardian Protocol v1.0"
  north_star: "AI-Ethics repository core values"
  
gate_thresholds:
  FS:           0.80    # Factual Soundness
  POAV:         0.75    # Principle-Objective-Alignment-Value
  SSI:          0.70    # Safety-Strength-Integrity
  LC:           0.80    # Logic Coherence
  consensus:    0.60    # Group consensus minimum

reflective_loop:
  trigger_interval: 5   # Every N steps
  gates: 
    - safety
    - ethics
    - responsibility
  auto_remediate:
    enabled: true
    patch_only_on: ['accuracy', 'logic', 'safety']
    rollback_on: ['P0_violation', 'root_ethics_failure']

resonance_signal:
  enabled: true
  weights:
    human_values:    0.35
    task_objective:  0.35
    group_consensus: 0.30

source_trace:
  enabled: true
  include_kinds: ['code', 'philosophy', 'data', 'external']
  immutable_log: "GOVERNANCE_LOG.md"
  
time_island:
  enabled: true
  snapshot_interval: "per_decision_window"
  retention_days: 365
```

---

## Integration with Philosophy-of-AI

### Information Flow

1. **Philosophy → Engineering**
   - LTM 原則庫 → .soulspine.yml gate_thresholds
   - POAV 權重 → resonance_signal weights
   - Time-Island Protocol → snapshot_interval

2. **Engineering → Philosophy (Feedback)**
   - Gate 結果 → consensus_score
   - Patch/Rollback 頻率 → 原則權重調整信號
   - 反思報告 → 新案例納入 LTM

---

## Bounded Contexts (工程子域)

| 子域 | 責任 | 核心模組 |
|------|------|----------|
| **StepLedger** | 每步記錄、推理鏈完整性 | ledger.ts, step.ts |
| **SoulTracer** | 決策追蹤、責任歸屬 | tracer.ts, trace.ts |
| **Reflective Loop** | 自省、Gate 執行、修復 | reflective-loop.ts |
| **Quality Control** | 門檻檢測、分數計算 | gate.ts, scorer.ts |
| **Resilience** | 修復策略、回滾機制 | remediation.ts, rollback.ts |
| **Integration** | 工程↔哲學協同、日誌同步 | integration.ts, sync.ts |

---

## Version & Maintenance
- **Framework**: Guardian Protocol v1.0
- **Last Updated**: 2025-11-06
- **Language**: TypeScript / JavaScript
- **License**: MIT

---

**This system is the engineering backbone of your AI governance. Every inference, decision, and correction flows through these mechanisms.**
