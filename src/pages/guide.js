import { updateSEO } from '../seo.js';

export function renderGuide() {
    updateSEO('初めての温泉旅行ガイド', '温泉の入り方・マナー・持ち物・泉質の選び方など、温泉旅行が初めての方に向けた完全ガイド。');
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>温泉旅行ガイド</span>
                </nav>
                <h1 class="page-title">初めての温泉旅行ガイド</h1>
                <p class="page-desc">温泉の入り方・マナー・持ち物・泉質の選び方を徹底解説</p>
            </div>
        </div>

        <section class="section">
            <div class="container" style="max-width:800px">

                <div class="onsen-info-card" style="margin-bottom:2rem">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">温泉の入り方・基本マナー</h2>
                        <ol style="line-height:2;padding-left:1.5rem;color:var(--color-text-muted)">
                            <li><strong>かけ湯をする</strong> — 浴槽に入る前に、洗い場のお湯を全身にかけて身体を慣らす。清潔のためでもあり、心臓への負担を減らすためでもある。</li>
                            <li><strong>タオルは浴槽に入れない</strong> — タオルは浴槽の外に置くか、頭の上に乗せる。湯の汚染を防ぐため。</li>
                            <li><strong>長湯しすぎない</strong> — 一般的に1回10〜15分が目安。のぼせを感じたらすぐに出る。</li>
                            <li><strong>入浴前後に水分補給</strong> — 温泉は発汗を促すため、入浴前後にコップ1杯の水を飲む。</li>
                            <li><strong>食事直後・飲酒後は避ける</strong> — 消化器官や心臓への負担になる。</li>
                            <li><strong>浴槽内での洗髪・石鹸使用はNG</strong> — 洗い場で行い、浴槽は温浴専用に。</li>
                        </ol>
                    </div>
                </div>

                <div class="onsen-info-card" style="margin-bottom:2rem">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">温泉旅行の持ち物リスト</h2>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;color:var(--color-text-muted)">
                            <div>
                                <strong>必需品</strong>
                                <ul style="line-height:2;padding-left:1.2rem;margin-top:0.5rem">
                                    <li>タオル（大・小）</li>
                                    <li>着替え</li>
                                    <li>洗面用具（シャンプー等）</li>
                                    <li>保険証</li>
                                </ul>
                            </div>
                            <div>
                                <strong>あると便利</strong>
                                <ul style="line-height:2;padding-left:1.2rem;margin-top:0.5rem">
                                    <li>ボディクリーム・乳液</li>
                                    <li>湯上がり用ドリンク</li>
                                    <li>防水バッグ</li>
                                    <li>スリッパ</li>
                                </ul>
                            </div>
                        </div>
                        <p style="margin-top:1rem;font-size:0.9rem;color:var(--color-text-muted)">※ 多くの温泉宿ではタオル・シャンプー・ドライヤーが備え付けられています。事前に宿へ確認を。</p>
                    </div>
                </div>

                <div class="onsen-info-card" style="margin-bottom:2rem">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">泉質の選び方</h2>
                        <p style="color:var(--color-text-muted);margin-bottom:1rem">温泉の種類（泉質）によって、効能や適した人が異なります。目的に合わせて選びましょう。</p>
                        <div style="display:grid;gap:0.75rem">
                            <div style="padding:0.75rem;border-left:3px solid var(--color-primary);background:rgba(255,255,255,0.03)">
                                <strong>美肌目的なら</strong> — 炭酸水素塩泉（重曹泉）・アルカリ性単純泉。肌をやわらかくしっとり整える。
                            </div>
                            <div style="padding:0.75rem;border-left:3px solid var(--color-accent);background:rgba(255,255,255,0.03)">
                                <strong>疲労回復・体を温めるなら</strong> — 塩化物泉。保温効果が高く、入浴後もポカポカが続く。
                            </div>
                            <div style="padding:0.75rem;border-left:3px solid #c8a84b;background:rgba(255,255,255,0.03)">
                                <strong>名湯・秘湯を楽しみたいなら</strong> — 硫黄泉。独特の香りと乳白色の湯が「いかにも温泉」な体験を。
                            </div>
                            <div style="padding:0.75rem;border-left:3px solid #88aacc;background:rgba(255,255,255,0.03)">
                                <strong>初心者・肌が弱いなら</strong> — 単純泉。刺激が少なく誰でも入りやすい。
                            </div>
                        </div>
                        <p style="margin-top:1rem">
                            <a href="/onsen/spring-types" style="color:var(--color-primary)">→ 泉質から温泉を探す</a>
                        </p>
                    </div>
                </div>

                <div class="onsen-info-card">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">温泉宿の選び方ポイント</h2>
                        <ul style="line-height:2.2;padding-left:1.5rem;color:var(--color-text-muted)">
                            <li><strong>源泉かけ流しか確認する</strong> — 湯の新鮮さと成分の濃さが異なる。こだわるなら源泉かけ流し指定で検索。</li>
                            <li><strong>日帰り入浴で下見する</strong> — 泊まる前に日帰り入浴で宿の雰囲気を確認できる宿も多い。</li>
                            <li><strong>食事の内容を確認する</strong> — 地産地消・会席料理など食事に力を入れている宿は満足度が高い傾向。</li>
                            <li><strong>露天風呂の有無</strong> — 自然の景色を楽しみたいなら露天付き客室または展望露天風呂がある宿を。</li>
                            <li><strong>交通手段を確認する</strong> — 車がない場合、送迎サービスや公共交通機関へのアクセスを確認。</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
