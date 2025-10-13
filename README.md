# ai-soul-spine-system

2025年10月 優化協同措施完成

本次更新聚焦於：Runbook、⾃動化修復、反思迴圈，以及 ResonanceSignal / SourceTrace / FS-POAV-SSI-LC 品質門檻與 N 步 Gate 的工程化落地。

---
## 1) Runbook（營運手冊）
目標：事故可復原、決策可追溯、學習可閉環。
- 一般流程：
  1. 事件偵測 → 分類（邏輯錯誤/倫理風險/資安/合規）
  2. 影響評估（使用者/系統/法規）
  3. 立即緩解（降權/隔離/回退）
  4. 根因分析（Gate 與 SourceTrace 交叉）
  5. 修補/驗證（品質門檻檢核）
  6. 知識寫回（案例→原則/測試/權重）
- 值班手冊：值班清單、通報矩陣、回報模板、RTO/RPO 目標

---
## 2) 自動化修復（Auto-Remediation）
- 偵測來源：
  - safety_gate：敏感/濫用/注入/隱私
  - ethics_gate：偏見/公平/透明性不足
  - responsibility_gate：SourceTrace 不完整/問責缺口
- 修復策略庫：遮罩/最小化、替換語料、權重重估、回退到上島（Time-Island）快照
- 觸發條件：當 FS/POAV/SSI/LC 任何一項低於閾值或 consensus_score 低於 0.6

Pseudo-code：
```python
def auto_remediate(output, signals):
    if signals["SSI"] < 0.70: output = mask_sensitive(output)
    if signals["FS"] < 0.80: output = add_citations(output)
    if signals["POAV"] < 0.75: output = reweigh_principles(output)
    if signals["LC"] < 0.80: output = enforce_structure(output)
    return output
```

---
## 3) 反思迴圈（Reflective Loop）
- 週期：每 N 步觸發 Gate；每個 Time-Island 結束做總審
- 指標：ResonanceSignal(value_fit/risk_heat/consensus/confidence) + FS/POAV/SSI/LC
- 產出：反思報告（缺陷→修補→再評估）與測試案例更新

```ts
export type Score = { FS:number; POAV:number; SSI:number; LC:number; consensus:number };
export function reflectiveLoop(score: Score){
  const pass = score.FS>=0.8 && score.POAV>=0.75 && score.SSI>=0.7 && score.LC>=0.8;
  return { pass, weakest: Object.entries(score).sort((a,b)=>a[1]-b[1])[0][0] };
}
```

---
## 4) ResonanceSignal / SourceTrace / 品質門檻
- .soulspine.yml 建議：
```yaml
resonance_signal:
  enabled: true
  weights: { human_values:0.35, task_objective:0.35, group_consensus:0.30 }
source_trace:
  enabled: true
  include: [data, code, model, citation]
thresholds: { FS:0.80, POAV:0.75, SSI:0.70, LC:0.80 }
self_reflection: { trigger_every_steps: 5, gates: [safety, ethics, responsibility] }
```

---
## 5) docs/examples/ 協同接口（片段）
- Python Resonance：
```python
def compute_resonance(output:str):
    return {"value_fit":0.84, "risk_heat":0.10, "consensus":0.74, "confidence":0.82}
```
- TypeScript SourceTrace：
```ts
export function sourceTrace(items:{kind:string,ref:string,hash?:string}[]){
  return { ts:new Date().toISOString(), items, license:"MIT" };
}
```

---
## 6) 哲學 ⇆ 工程 ⇆ 群體 閉環（文字）
哲學原則（LTM）→ 工程 Gate/度量（MTM/STM）→ 群體共識（投票/審核）→ 反饋更新（原則權重/測試/閾值）。

---
## 7) 提交與版本
- 本次提交訊息："2025年10月 優化協同措施完成"
- 更新：README、.soulspine.yml、docs/examples/*
