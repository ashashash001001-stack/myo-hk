import "./Leather.css";

interface Props { step: number; }

const COLORS = [
  { name: "棕色", hex: "#8B4513" },
  { name: "黑色", hex: "#2C2C2C" },
  { name: "酒紅色", hex: "#722F37" },
];

const FEATURES = [
  { label: "頭層真皮", desc: "最高級別皮料" },
  { label: "天然粒面", desc: "紋理獨一無二" },
  { label: "耐用持久", desc: "可保存數十年" },
];

function LeatherIcon({ animated }: { animated: boolean }) {
  return (
    <svg className={`le-icon-svg${animated ? " le-icon-animated" : ""}`} viewBox="0 0 80 60" width="80" height="60">
      <rect x="4" y="4" width="72" height="52" rx="6" fill="var(--accent2-light)" stroke="var(--accent2)" strokeWidth="2"/>
      <path d="M15 20 Q40 12 65 20 Q40 28 15 20" fill="var(--accent2)" opacity="0.2"/>
      <line x1="15" y1="32" x2="65" y2="32" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <line x1="15" y1="38" x2="55" y2="38" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      <line x1="15" y1="44" x2="45" y2="44" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
    </svg>
  );
}

function ColorSwatch({ color, animated }: { color: { name: string; hex: string }; animated: boolean }) {
  return (
    <div className="le-color-swatch" style={{ animationDelay: animated ? "0ms" : "9999ms" }}>
      <div className="le-swatch-circle" style={{ backgroundColor: color.hex }} />
      <span className="le-swatch-name">{color.name}</span>
    </div>
  );
}

function CheckCircle({ animated }: { animated: boolean }) {
  return (
    <svg className={`le-check-circle${animated ? " le-check-animated" : ""}`} viewBox="0 0 32 32" width="32" height="32">
      <circle cx="16" cy="16" r="14" fill="none" stroke="var(--accent2)" strokeWidth="2.5" opacity="0.3"/>
      <path className="le-check-path" d="M9 16l5 5 9-9" fill="none" stroke="var(--accent2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="30" strokeDashoffset={animated ? "0" : "30"}/>
    </svg>
  );
}

function AgingIcon({ animated }: { animated: boolean }) {
  return (
    <svg className={`le-aging-icon${animated ? " le-aging-animated" : ""}`} viewBox="0 0 64 64" width="64" height="64">
      <circle cx="32" cy="32" r="28" fill="var(--accent2-light)" stroke="var(--accent2)" strokeWidth="2"/>
      <path d="M20 32 Q32 20 44 32 Q32 44 20 32" fill="none" stroke="var(--accent2)" strokeWidth="2" opacity="0.5"/>
      <path d="M24 28 L28 32 L24 36" fill="none" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M40 28 L36 32 L40 36" fill="none" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

export function Leather({ step }: Props) {
  /* ─── Step 0: Title card ─── */
  if (step === 0) {
    return (
      <div className="Leather le-scene">
        <div className="le-scene-inner">
          <p className="le-chapter-label">第二章</p>
          <h2 className="le-step-title">皮革證書套</h2>
          <p className="le-step-subtitle">最傳統、最經典嘅選擇</p>
          <LeatherIcon animated />
        </div>
      </div>
    );
  }

  /* ─── Step 1: Premium genuine leather ─── */
  if (step === 1) {
    return (
      <div className="Leather le-scene">
        <div className="le-scene-inner">
          <h2 className="le-step-title">真皮係最高級別</h2>
          <p className="le-step-subtitle">質感溫潤，每塊都獨一無二</p>
          <div className="le-features-grid">
            {FEATURES.map((f, i) => (
              <div key={f.label} className="le-feature-card" style={{ animationDelay: `${i * 400}ms` }}>
                <CheckCircle animated />
                <div className="le-feature-text">
                  <span className="le-feature-label">{f.label}</span>
                  <span className="le-feature-desc">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: Natural texture ─── */
  if (step === 2) {
    return (
      <div className="Leather le-scene">
        <div className="le-scene-inner">
          <h2 className="le-step-title">天然粒面紋理</h2>
          <p className="le-step-subtitle">頭層皮保留皮膚最表面嘅天然粒面</p>
          <div className="le-texture-showcase">
            <div className="le-texture-card le-from-left" style={{ animationDelay: "200ms" }}>
              <div className="le-texture-visual">
                <svg viewBox="0 0 120 80" width="120" height="80">
                  <path d="M10 40 Q30 20 60 40 Q90 60 110 40" fill="none" stroke="var(--accent2)" strokeWidth="2" opacity="0.4"/>
                  <path d="M10 50 Q30 30 60 50 Q90 70 110 50" fill="none" stroke="var(--accent2)" strokeWidth="1.5" opacity="0.3"/>
                  <path d="M10 30 Q30 10 60 30 Q90 50 110 30" fill="none" stroke="var(--accent2)" strokeWidth="1" opacity="0.2"/>
                </svg>
              </div>
              <span className="le-texture-label">自然生長紋路</span>
            </div>
            <div className="le-texture-info le-from-right" style={{ animationDelay: "500ms" }}>
              <p>每一塊真皮都有獨特嘅毛孔同紋理，係大自然嘅作品，唔會有兩件完全一樣。</p>
              <p>頭層皮係皮革中最優質嘅部分，耐用且會隨使用時間變得更有味道。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 3: Common colors ─── */
  if (step === 3) {
    return (
      <div className="Leather le-scene">
        <div className="le-scene-inner">
          <h2 className="le-step-title">常用顏色</h2>
          <p className="le-step-subtitle">棕色最百搭，黑色最型格，酒紅最搶眼</p>
          <div className="le-colors-row">
            {COLORS.map((c, i) => (
              <ColorSwatch key={c.name} color={c} animated={false} />
            ))}
          </div>
          <div className="le-color-meanings">
            <p className="le-color-meaning">棕色 — 經典穩重，百搭任何風格</p>
            <p className="le-color-meaning">黑色 — 型格時尚，適合現代婚禮</p>
            <p className="le-color-meaning">酒紅色 — 高貴優雅，最搶眼嘅選擇</p>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 4: Ages beautifully ─── */
  if (step === 4) {
    return (
      <div className="Leather le-scene">
        <div className="le-scene-inner">
          <h2 className="le-step-title">皮革會變色</h2>
          <p className="le-step-subtitle">愈用愈有味道，呢個係皮革獨有嘅樂趣</p>
          <div className="le-aging-showcase">
            <AgingIcon animated />
            <div className="le-aging-text">
              <p>真皮會隨住時間慢慢氧化，產生獨特嘅歲月痕跡。</p>
              <p>呢個過程叫「養皮」，係皮革爱好者最享受嘅部分。</p>
              <p>你嘅證書套會變成世界上唯一嘅作品。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: Maintenance ─── */
  if (step === 5) {
    return (
      <div className="Leather le-scene">
        <div className="le-scene-inner">
          <h2 className="le-step-title">保養方法</h2>
          <p className="le-step-subtitle">每半年護理一次就可以</p>
          <div className="le-tips-list">
            <div className="le-tip-item le-from-left" style={{ animationDelay: "200ms" }}>
              <span className="le-tip-step">1</span>
              <span className="le-tip-text">用柔軟乾布輕擦表面灰塵</span>
            </div>
            <div className="le-tip-item le-from-right" style={{ animationDelay: "400ms" }}>
              <span className="le-tip-step">2</span>
              <span className="le-tip-text">每半年用皮革護理油擦拭</span>
            </div>
            <div className="le-tip-item le-from-left" style={{ animationDelay: "600ms" }}>
              <span className="le-tip-step">3</span>
              <span className="le-tip-text">避免陽光直射同潮濕環境</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 6: Elegant for formal occasions ─── */
  if (step === 6) {
    return (
      <div className="Leather le-scene">
        <div className="le-scene-inner le-transition-center">
          <div className="le-big-check-wrap">
            <svg className="le-big-check-svg" viewBox="0 0 120 120" width="120" height="120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="var(--accent2)" strokeWidth="4" opacity="0.15"/>
              <path className="le-big-check-path" d="M30 60l20 20 40-40" fill="none" stroke="var(--accent2)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="200"/>
            </svg>
          </div>
          <h2 className="le-transition-title">皮革：高貴大方</h2>
          <p className="le-transition-sub">最適合正式場合，擺喺屋企或者寫字樓都一樣得體</p>
        </div>
      </div>
    );
  }

  return null;
}