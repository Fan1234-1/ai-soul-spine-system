export type SoulIntegrity = 'verified' | 'pending' | 'failed';
export interface SoulVow {
    vowId: string;
    content: string;
    source: string;
    timestamp: string;
    integrityHash: string;
    status: SoulIntegrity;
}
export interface SoulCheckpoint {
    checkpointId: string;
    vowId: string;
    verificationTime: string;
    result: boolean;
    checker: string;
    notes?: string;
}
export interface ToneSoulEvent {
    eventType: 'vow_created' | 'vow_verified' | 'chain_updated' | 'vow_failed';
    data: any;
}
export interface ToneSoulModule {
    createVow(content: string, source: string): SoulVow;
    verifyVow(vowId: string, checker: string): boolean;
    addToResponsibilityChain(actor: string): void;
    getVow(vowId: string): SoulVow | undefined;
    getVowHistory(vowId: string): {
        vow: SoulVow;
        checkpoints: SoulCheckpoint[];
        responsibilityChain: string[];
    } | undefined;
    registerListener(callback: (event: ToneSoulEvent) => void): void;
}
export declare class ToneSoulCore implements ToneSoulModule {
    vows: Map<string, SoulVow>;
    checkpoints: Map<string, SoulCheckpoint>;
    responsibilityChain: string[];
    private listeners;
    createVow(content: string, source: string): SoulVow;
    verifyVow(vowId: string, checker: string): boolean;
    addToResponsibilityChain(actor: string): void;
    getVow(vowId: string): SoulVow | undefined;
    getVowHistory(vowId: string): {
        vow: SoulVow;
        checkpoints: SoulCheckpoint[];
        responsibilityChain: string[];
    } | undefined;
    registerListener(callback: (event: ToneSoulEvent) => void): void;
    private _generateId;
    private _computeIntegrity;
    private _notifyListeners;
}
//# sourceMappingURL=tonesoul-core.d.ts.map