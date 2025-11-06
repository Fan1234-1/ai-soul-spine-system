# Reflection Loop Guide
## Guardian Protocol v1.0 - Self-Reflection & Correction Framework

**Last Updated**: 2025-11-06 21:00 CST
**Framework**: Guardian Protocol v1.0
**Repository**: ai-soul-spine-system (Tier 3)
**Purpose**: Guide the self-reflection and correction loop for continuous improvement

---

## Overview

The Reflection Loop is the core self-correction mechanism in the Guardian Protocol. It enables the AI system to:
1. **Detect** deviations from intended behavior
2. **Analyze** root causes and contributing factors
3. **Generate** correction strategies
4. **Execute** patches or rollbacks
5. **Learn** from outcomes and update future behavior

---

## Loop Structure

### Phase 1: Detection (偵測)
- Monitor execution against defined intent
- Measure drift from north-star principles
- Threshold: θ = 0.2 (20% deviation)
- Trigger points:
  - Internal drift > threshold
  - External feedback from users/reviewers
  - P0 red line violations
  - Quality gate failures

### Phase 2: Analysis (分析)
- Trace which G-P-A-R phase introduced error
- Identify root cause in the system
- Assess scope and severity
- Determine if patch or rollback needed

### Phase 3: Strategy Selection (策略選擇)
- **PATCH**: For low-risk, correctable errors
  - P1/P2 level issues
  - Localized to single component
  - Repair cost < benefit
- **ROLLBACK**: For critical issues
  - P0 red line violations
  - System integrity compromised
  - Uncertainty too high

### Phase 4: Execution (執行)
- Apply selected strategy
- Document changes in StepLedger
- Update SourceTrace with correction
- Log in immutable chronicle

### Phase 5: Verification (驗證)
- Test corrected behavior
- Measure new drift score
- Confirm intent alignment
- Check gate scores (FS/POAV/SSI/LC)

### Phase 6: Learning (學習)
- Record pattern in SELF-RAG patterns
- Update principle weights if needed
- Feed insights back to Philosophy-of-AI
- Prevent recurrence

---

## Implementation Checklist

- [ ] Drift detection running continuously
- [ ] All phases logged in StepLedger
- [ ] Feedback loops operational
- [ ] Pattern recognition active
- [ ] Weight adjustment mechanism working
- [ ] Cross-repo synchronization verified

---

## Performance Targets

- Detection latency: < 1 second
- Analysis time: < 5 seconds
- Execution time: < 10 seconds
- Full cycle time: < 20 seconds
- Success rate: > 95%

---

**Version**: 1.0
**Status**: Operational
**Last Review**: 2025-11-06
