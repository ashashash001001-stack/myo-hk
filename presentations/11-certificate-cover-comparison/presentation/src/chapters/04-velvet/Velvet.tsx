import "./Velvet.css";

interface Props { step: number; }

const COLORS = [
  { name: "深藍色", hex: "#1a237e" },
  { name: "酒紅色", hex: "#722F37" },
  { name: "墨綠色", hex: "#1B5E20" },
  { name: "貴族紫", hex: "#4a148c" },
];

const CARE_TIPS = [
  { step: "1", text: "用柔軟刷子輕刷表面除塵" },
  { step: "2", text: "避免潮濕，否則絨毛會塌落" },
  { step: "3", text: "存放時放入塵套防潮防塵" },
];

function VelvetIcon({ animated }: { animated: boolean }) {
  return (
    <svg className={`lv-icon-svg${animated ? " lv-icon-animated" : ""}`} viewBox="0 0 80 60" width="80" height="60">
      <rect x="4" y="4" width="72" height="52" rx="4" fill="var(--text-muted)" stroke="var(--text)" strokeWidth="2"/>
      <ellipse cx="40" cy="30" rx="24" ry="16" fill="none" stroke="var(--surface)" strokeWidth="1.5" opacity="0.4"/>
      <path d="M20 30 Q40 18 60 30" fill="none" stroke="var(--surface)" strokeWidth="1" opacity="0.3"/>
      <path d="M20 30 Q40 42 60 30" fill="none" stroke="var(--surface)" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

function CheckCircle({ animated }: { animated: boolean }) {
  return (
    <svg className={`lv-check-circle${animated ? " lv-check-animated" : ""}`} viewBox="0 0 32 32" width="32" height="32">
      <circle cx="16" cy="16" r="14" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" opacity="0.3"/>
      <path className="lv-check-path" d="M9 16l5 5 9-9" fill="none" stroke="var(--text-muted)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="30" strokeDashoffset={animated ? "0" : "30"}/>
    </svg>
  );
}

function EmbossIcon({ animated }: { animated: boolean }) {
  return (
    <svg className={`lv-emboss-icon${animated ? " lv-emboss-animated" : ""}`} viewBox="0 0 64 64" width="64" height="64">
      <rect x="12" y="12" width="40" height="40" rx="4" fill="var(--text-muted)" stroke="var(--text)" strokeWidth="2"/>
      <path d="M22 32 L28 26 L34 32 L28 38 Z" fill="none" stroke="var(--surface)" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="44" cy="24" r="4" fill="none" stroke="var(--surface)" strokeWidth="1" opacity="0.4"/>
      <line x1="20" y1="44" x2="28" y2="44" stroke="var(--surface)" strokeWidth="1" opacity="0.3"/>
      <line x1="20" y1="48" x2="24" y2="48" stroke="var(--surface)" strokeWidth="1" opacity="0.2"/>
    </svg>
  );
}

export function Velvet({ step }: Props) {
  /* ─── Step 0: Title card ─── */
  if (step === 0) {
    return (
      <div className="Velvet lv-scene">
        <div className="lv-scene-inner">
          <p className="lv-chapter-label">第四章</p>
          <h2 className="lv-step-title">絨布證書套</h2>
          <p className="lv-step-subtitle">外觀高貴，手感柔軟</p>
          <VelvetIcon animated />
        </div>
      </div>
    );
  }

  /* ─── Step 1: Luxurious appearance ─── */
  if (step === 1) {
    return (
      <div className="Velvet lv-scene">
        <div className="lv-scene-inner">
          <h2 className="lv-step-title">奢華外觀</h2>
          <p className="lv-step-subtitle">絨布係用密集纖維織成嘅布料</p>
          <div className="lv-texture-desc">
            <p>表面有短毛絨，喺光線下會呈現微微嘅光澤感。</p>
            <p>呢種獨特嘅質感係其他材質冇辦法比擬嘅。</p>
          </div>
          <div className="lv-luxury-indicator">
            <div className="lv-luxury-bar" style={{ animationDelay: "200ms" }} />
            <span className="lv-luxury-label">奢華感</span>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: Deep, rich colors ─── */
  if (step === 2) {
    return (
      <div className="Velvet lv-scene">
        <div className="lv-scene-inner">
          <h2 className="lv-step-title">深色調為主</h2>
          <p className="lv-step-subtitle">深藍、酒紅、墨綠、貴族紫</p>
          <div className="lv-colors-grid">
            {COLORS.map((c, i) => (
              <div key={c.name} className="lv-color-card" style={{ animationDelay: `${i * 300}ms` }}>
                <div className="lv-color-swatch" style={{ backgroundColor: c.hex }} />
                <span className="lv-color-name">{c.name}</span>
              </div>
            ))}
          </div>
          <p className="lv-colors-note">呢啲顏色特別有氣派，適合營造高貴典雅嘅氛圍。</p>
        </div>
      </div>
    );
  }

  /* ─── Step 3: Embossing technique ─── */
  if (step === 3) {
    return (
      <div className="Velvet lv-scene">
        <div className="lv-scene-inner">
          <h2 className="lv-step-title">壓印工藝</h2>
          <p className="lv-step-subtitle">金色壓印logo或者幾何圖案</p>
          <div className="lv-emboss-showcase">
            <EmbossIcon animated />
            <div className="lv-emboss-text">
              <p>絨布可以用壓印工藝整出精緻花紋。</p>
              <p>金色壓印喺深色絨布上特別搶眼，</p>
              <p>令證書套瞬間升格為藝術品。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 4: Maintenance needs care ─── */
  if (step === 4) {
    return (
      <div className="Velvet lv-scene">
        <div className="lv-scene-inner">
          <h2 className="lv-step-title">需要細心打理</h2>
          <p className="lv-step-subtitle">避免潮濕，定期除塵</p>
          <div className="lv-tips-list">
            {CARE_TIPS.map((tip, i) => (
              <div key={tip.step} className="lv-tip-item" style={{ animationDelay: `${i * 400}ms` }}>
                <span className="lv-tip-step">{tip.step}</span>
                <span className="lv-tip-text">{tip.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: Perfect for grand occasions ─── */
  if (step === 5) {
    return (
      <div className="Velvet lv-scene">
        <div className="lv-scene-inner">
          <h2 className="lv-step-title">適合隆重場合</h2>
          <p className="lv-step-subtitle">教堂婚禮、星級酒店擺酒</p>
          <div className="lv-occasions-row">
            <div className="lv-occasion-card" style={{ animationDelay: "200ms" }}>
              <span className="lv-occasion-icon">⛪</span>
              <span className="lv-occasion-label">教堂婚禮</span>
            </div>
            <div className="lv-occasion-card" style={{ animationDelay: "500ms" }}>
              <span className="lv-occasion-icon">🏨</span>
              <span className="lv-occasion-label">星級酒店</span>
            </div>
            <div className="lv-occasion-card" style={{ animationDelay: "800ms" }}>
              <span className="lv-occasion-icon">🏛️</span>
              <span className="lv-occasion-label">高級會所</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 6: Premium presentation value ─── */
  if (step === 6) {
    return (
      <div className="Velvet lv-scene">
        <div className="lv-scene-inner lv-transition-center">
          <div className="lv-big-check-wrap">
            <svg className="lv-big-check-svg" viewBox="0 0 120 120" width="120" height="120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="var(--text-muted)" strokeWidth="4" opacity="0.15"/>
              <path className="lv-big-check-path" d="M30 60l20 20 40-40" fill="none" stroke="var(--text-muted)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="200"/>
            </svg>
          </div>
          <h2 className="lv-transition-title">絨布：奢華感十足</h2>
          <p className="lv-transition-sub">令愛情見證更顯珍貴</p>
        </div>
      </div>
    );
  }

  return null;
}