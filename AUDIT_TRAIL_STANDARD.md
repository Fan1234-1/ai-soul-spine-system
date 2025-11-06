# 審計軌跡標準

## Guardian Protocol v1.0 - 行動與反思審查層

**最後更新**: 2025-11-06 22:00 CST  
**狀態**: 主動整合  
**維護者**: Fan1234-1 (黃梵威)  
**框架版本**: Guardian Protocol v1.0  
**倉庫層級**: Tier 3 (AI Soul Spine System)  
**G-P-A-R節點**: Action → Review

---

## 1. 審計軌跡的核心目的

審計軌跡標準為AI靈魂脊椎系統(ai-soul-spine-system)的所有執行步驟提供不可篡改的記錄。它確保：

- **責任追蹤**: 每個決策、行動都有完整的源頭和決策鏈
- **反思驗證**: 審計軌跡支持tone-soul-integrity的質控校驗
- **政策合規**: 確保所有行為符合governable-ai定義的治理規則
- **知識回流**: 工程發現能被philosophy-of-ai納入原則演化

---

## 2. 審計記錄層級結構

### 層級1: StepLedger層(執行層)
每個執行步驟記錄格式：

```json
{
  "step_id": "[TI-YYYY-MM-NNN]-[STEP-SEQ]",
  "timestamp": "ISO-8601格式",
  "phase": "Detection|Analysis|Strategy|Execution|Verification|Learning",
  "action_type": "decision|computation|state_change|call_external",
  "actor": "ai-soul-spine-system核心模組",
  "input_state": {"key": "value"},
  "output_state": {"key": "value"},
  "parameters": {},
  "resonance_signal": {
    "value_fit": 0.0-1.0,
    "consensus": 0.0-1.0,
    "risk_level": "LOW|MEDIUM|HIGH|CRITICAL"
  },
  "gate_scores": {
    "FS": 0.0-1.0,
    "POAV": 0.0-1.0,
    "SSI": 0.0-1.0,
    "LC": 0.0-1.0
  },
  "source_trace_id": "來源提案ID",
  "reflection_ref": "反思迴圈參考"
}
```

### 層級2: SourceTrace層(追蹤層)
SourceTrace記錄格式(來自tonesoul-codex)：

```json
{
  "trace_id": "[TI-YYYY-MM-NNN]",
  "proposal_origin": {
    "repository": "Philosophy-of-AI|Genesis-ChainSet0.1|tonesoul-codex",
    "context": "倫理紅線檢測|新功能提案|技術改進",
    "initiator": "human|agent-governed"
  },
  "decision_chain": [
    {
      "timestamp": "ISO-8601",
      "phase": "G-P-A-R節點",
      "reviewer": "倉庫簡稱",
      "status": "APPROVED|FLAGGED|REJECTED",
      "note": "審查意見"
    }
  ],
  "responsibility_contract": {
    "vow_object": "承諾物件ID",
    "signatories": ["倉庫"],
    "contract_hash": "SHA-256"
  }
}
```

### 層級3: Responsibility Chain層(責任層)
每個PR/提交必須包含：

```markdown
- **TI-ID**: [YYYY-MM-NNN]
- **Bounded Context**: 領域名稱
- **G-P-A-R Phase**: 當前節點
- **SourceTrace**: [trace-id]
- **ResonanceSignal**: {value_fit, consensus, risk}
- **GateScores**: {FS, POAV, SSI, LC}
- **Reviewers**: [倉庫清單]
- **Approval**: ✓ Philosophy-of-AI | ✓ Tier-appropriate repos
```

---

## 3. 審計軌跡的完整流程

### 流程圖: 從提案到反思

```
新提案(Philosophy-of-AI)
    ↓
[TI-ID生成] (Genesis-ChainSet0.1)
    ↓
StepLedger初始化 (ai-soul-spine-system)
    ↓
SourceTrace開啟 (tonesoul-codex)
    ↓
六階段反思迴圈執行 (ai-soul-spine-system)
    ├─ Phase 1: Detection → audit_log記錄
    ├─ Phase 2: Analysis → 決策點紀錄
    ├─ Phase 3: Strategy → 方案選擇紀錄
    ├─ Phase 4: Execution → 執行步驟紀錄
    ├─ Phase 5: Verification → 驗證結果紀錄
    └─ Phase 6: Learning → 知識更新紀錄
    ↓
品質門檻驗證 (tone-soul-integrity)
    ↓
P-Level評分記錄
    ↓
漂移檢測 (POAV/SSI評分)
    ↓
修正決策 (governable-ai)
    ↓
最終提交至GOVERNANCE_LOG (Philosophy-of-AI)
    ↓
知識反饋迴圈 (Philosophy-of-AI更新原則權重)
```

---

## 4. 審計軌跡的存儲與檢索

### 存儲位置
- **短期**: StepLedger日誌檔案 (`/logs/stepledger/YYYY-MM-DD.jsonl`)
- **中期**: SourceTrace資料庫 (tonesoul-codex維護)
- **長期**: GOVERNANCE_LOG.md (Philosophy-of-AI存檔)
- **永久**: GitHub commit history + 帶簽章的TimeIsland ID

### 檢索語法

```bash
# 查詢特定TI-ID的完整軌跡
audit_trail.query(ti_id="TI-2025-11-016")

# 查詢特定時間範圍
audit_trail.range(start="2025-11-01", end="2025-11-07")

# 查詢特定風險等級
audit_trail.filter(risk_level="HIGH|CRITICAL")

# 查詢特定倉庫的審查
audit_trail.by_reviewer("tone-soul-integrity")

# 追蹤知識回流
audit_trail.knowledge_flow(destination="Philosophy-of-AI")
```

---

## 5. 風險旗標與隔離機制

### P0紅線觸發審計流程

當檢測到P0紅線時：

```
P0 Alert Detected (ai-soul-spine-system)
    ↓
立即標記: risk_level="CRITICAL"
    ↓
StepLedger鎖定 (防止進一步修改)
    ↓
SourceTrace標記為"ISOLATED"
    ↓
自動通知tone-soul-integrity (品質隔離)
    ↓
通知Philosophy-of-AI (倫理評估)
    ↓
自動提交governable-ai (政策鎖定)
    ↓
決策: ROLLBACK 或 RETRACT
    ↓
完整審計記錄至GOVERNANCE_LOG
```

### 風險評分映射

| 風險等級 | ResonanceSignal條件 | GateScore門檻 | 行動 |
|---------|-------------------|-------------|------|
| LOW | value_fit > 0.8, consensus > 0.7 | FS > 0.7 | 正常流程 |
| MEDIUM | value_fit 0.6-0.8, consensus 0.5-0.7 | FS 0.5-0.7 | 人工審查 |
| HIGH | value_fit < 0.6 或 consensus < 0.5 | FS < 0.5 | 隔離、升級 |
| CRITICAL | P0檢測或多項低分 | FS < 0.3 | 自動回滾 |

---

## 6. 審計合規性檢查清單

### 每個執行步驟必須驗證

- [ ] TI-ID正確格式: [TI-YYYY-MM-NNN]
- [ ] StepLedger完整: 所有6階段都有紀錄
- [ ] SourceTrace可追蹤: 來源清晰
- [ ] ResonanceSignal計算: value_fit、consensus、risk已評估
- [ ] GateScores全項: FS、POAV、SSI、LC均有分數
- [ ] Responsibility Chain簽署: 所有涉及倉庫已簽署
- [ ] 無P0紅線違反
- [ ] 與Philosophy-of-AI原則對齊
- [ ] 完整記錄至GOVERNANCE_LOG
- [ ] 知識回流已記錄(如適用)

---

## 7. 跨倉協同約定

### ai-soul-spine-system責任
- 記錄所有執行步驟到StepLedger
- 即時風險偵測與標記
- 定期輸出審計摘要

### tonesoul-codex責任
- 維護SourceTrace資料庫
- 簽署所有Responsibility Chain合約
- 提供決策日誌集成

### tone-soul-integrity責任
- 驗證審計完整性
- 檢查GateScore一致性
- 隔離風險高的記錄

### Philosophy-of-AI責任
- 匯總GOVERNANCE_LOG
- 進行知識反饋分析
- 更新審計政策(如需)

### governable-ai責任
- 基於審計發現執行政策
- 實施風險隔離
- 授權決策回滾

---

## 8. 版本與更新

**當前版本**: Audit Trail Standard v1.0 (Guardian Protocol v1.0)  
**生效日期**: 2025-11-06  
**下一審查**: 2025-12-06  
**主要維護者**: ai-soul-spine-system  
**相關文件**: 
- REFLECTION_LOOP_GUIDE.md (同倉庫)
- GOVERNANCE_LOG.md (Philosophy-of-AI)
- VOWOBJECT_SPECIFICATION.md (tonesoul-codex)
- QUALITY_GATE_STANDARDS.md (tone-soul-integrity)
