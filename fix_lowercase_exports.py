#!/usr/bin/env python3
"""
Fix lowercase export function names and generic content across all presentations.
"""
import os, re, glob

def get_presentations():
    dirs = []
    for d in sorted(glob.glob("presentations/*/"), key=lambda x: int(re.match(r'\d+', os.path.basename(x.rstrip('/'))).group())):
        dirs.append((os.path.basename(d.rstrip('/')), d))
    return dirs

def has_lowercase(path):
    ch = os.path.join(path, "presentation/src/chapters")
    if not os.path.exists(ch): return False
    for f in glob.glob(f"{ch}/*/*.tsx"):
        if 'narrations' not in f:
            with open(f) as h: content = h.read()
            if re.search(r'^export function [a-z]', content, re.MULTILINE): return True
    return False

def pascal(s): return ''.join(w.capitalize() for w in re.split(r'[-_]', s))

def ch_name(d): m = re.match(r'\d+-(.+)', os.path.basename(d)); return m.group(1) if m else os.path.basename(d)

CTITLES = {
    'size':'標準尺寸','content':'內容話你知','care':'保養心得','myo':'MYO證書套',
    'legal':'法律權益','property':'財產安排','prenup':'婚前協議','tax':'稅務須知',
    'procedure':'改名程序','documents':'所需文件','timeline':'時間流程','cost':'費用預算',
    'material':'材質比較','texture':'手感質地','durability':'耐用程度','price':'價格分析',
    'design':'設計選擇','color':'顏色建議','font':'字體款式','proof':'確認稿樣',
    'appearance':'外觀比較','clean':'清潔方法','store':'存放方式','protect':'保護技巧','repair':'維修須知',
    'cut':'切割grading','color':'成色grading','clarity':'淨度grading','carat':'克拉重量',
    'tiffany':'Tiffany對戒','cartier':'Cartier對戒','piaget':'Piaget對戒','local':'本地品牌',
    'timing':'時機選擇','location':'地點建議','ring':'戒指揀選','words':'求婚台詞',
    'daily':'日常護理','professional':'專業保養','storage':'存放方法',
    'definition':'定義分別','style':'風格比較','cost':'費用預算',
    'convenience':'方便程度','custom':'定制選項',
    'prep':'準備工作','treatment':'療程安排','weddingday':'婚禮日',
    'rent':'租借方案','buy':'購買方案','accessories':'配飾搭配',
    'trial':'試妝安排','style':'造型建議',
    'hotel':'酒店選擇','restaurant':'餐廳選擇','outdoor':'戶外場地',
    'candid':'紀實風格','traditional':'傳統風格','artistic':'藝術風格',
    'ceremony':'婚禮儀式','banquet':'婚宴拍攝','prep':'準備環節',
    'booking':'預訂流程','reception':'接待安排',
    'weather':'天氣應對','deco':'場地佈置',
    'rituals':'禮儀細節','taboo':'禁忌習俗',
    'meaning':'習俗意義','etiquette':'禮儀規範','vows':'誓詞環節',
    'morning':'早上流程','dressing':'著裝禁忌',
    'yearly':'週年慶祝','milestone':'重要里程碑','ideas':'禮物推薦',
    'asia':'亞洲目的地','europe':'歐洲目的地','island':'海島度假',
    'account':'帳戶管理','investment':'投資規劃',
    'conflict':'衝突處理','intimacy':'親密關係',
    'creative':'創意主意','budget':'預算考慮',
}

CONTENT = {
    'size':['香港結婚證書常用A4尺寸','不同證書套有唔同尺寸要求','量度時要預留摺位空間','標準尺寸便於印刷同展示','訂造前先確認證書大小'],
    'content':['證書內容包括新人中英文名','結婚日期同地點必須準確','見證人簽名位置要預留','可加入愛情宣言或詩句','排版設計影響整體美感'],
    'care':['避免陽光直射以防褪色','保持乾燥防止發霉','定期用軟布擦拭表面','惡劣天氣要放入防潮箱','運輸時要用軟墊保護'],
    'myo':['MYO提供自家定制證書套','可選擇亞麻布或磨砂材質','熱轉印工藝確保持久靚','新人名字同日期燙印','有多種顏色同款式選擇'],
    'legal':['香港婚姻條例第181章','外國註冊婚姻可於香港生效','涉及財產轉移需小心處理','可透過婚前協議保障','建議結婚前了解法律權益'],
    'property':['結婚後財產制度會改變','可透過協議分配各自財產','聯名戶口管理需要共識','房產分配常見爭議話題','建議婚前作出明確安排'],
    'prenup':['婚前協議並非不浪漫','外國註冊結婚常見做法','可列明財產分配方式','並非所有條款都有法律效力','建議找律師草擬確保有效'],
    'tax':['結婚後夫婦分開報稅','居所貸款利息可合併扣稅','遺產稅豁免額不受影響','強積金可指定受益人','建議咨詢稅務顧問'],
    'procedure':['準備身份證同出世紙','填寫改名申請表格','親身到入境事務處辦理','需時約2-4週完成','通知所有相關機構'],
    'documents':['身份證明文件副本','結婚證書正本','住址證明','良民證（如需要）','各機構特定表格'],
    'timeline':['結婚後14日內通知入境處','銀行戶口改名約1週','護照改名約2-3週','駕駛執照需另行處理','所有更改需時約1-3個月'],
    'cost':['結婚費用預算要做好','婚禮預算包括場地同餐飲','戒指費用視乎選擇','婚紗禮服預算差異大','總預算要預10-20%緩衝'],
    'material':['真皮耐用但較貴','帆布休閒時尚','PVC防水易清潔','木質結婚證書框別具風格','紙質環保但易損'],
    'texture':['磨砂手感高貴','啞面不易留指紋','光面時尚醒目','壓紋增加層次感','觸感影響整體檔次'],
    'durability':['真皮可用10年以上','帆布約5年需更換','金屬框最耐用','紙質需避免潮濕','材質影響保存年限'],
    'price':['淘寶款式最便宜','本地品牌性價比高','設計師款式較貴','預算有限可考慮租借','特價時優惠多'],
    'design':['簡約風格永不過時','中式傳統圖案受歡迎','提供相片定制服務','字體選擇影響格調','可要求看效果圖再確認'],
    'color':['紅色喜慶吉祥','金色高貴大氣','藍色浪漫溫馨','粉色少女心爆棚','根據婚禮主題揀選'],
    'font':['書法字體最有味道','正楷清晰易讀','藝術字體創意十足','考慮印刷效果揀字體','中英文字型要配合'],
    'proof':['收到設計稿後仔細檢查','確認新人名字拼音正確','日期數字要多次核實','印刷前可要求打樣','留充足時間作修改'],
    'appearance':['天鵝絨高級感滿分','亞麻布文青風格','皮革耐用有質感','絲綢光澤動人','外觀影響第一印象'],
    'clean':['軟毛刷輕擦表面','避免使用化學清潔劑','潮濕天要用除濕劑','污跡要即時處理','定期保養延長壽命'],
    'store':['膠袋密封防潮防蟲','紙盒支撐形狀不變','陰涼乾爽處存放','避免疊放壓壞証書套','入倉前確保完全乾燥'],
    'protect':['遠離陽光直射','控制室內濕度','避免接觸尖銳物件','定期檢查存放狀況','惡劣天氣額外保護'],
    'repair':['輕微磨損可用皮膏修復','嚴重損壞需找專業','維修後色差難避免','太舊建議更換','平時保養好可避免'],
    'cut':['切割決定火光效果','圓形最經典明亮','心形浪漫可愛','公主方時尚幾何','揀形狀要看手型決定'],
    'color':['D色最白越貴','H色性價比高','K色以下偏黃','彩鑽夠特別夠搶眼','顏色影響價格好多'],
    'clarity':['FL無瑕最貴','VVS極細微瑕肉眼看不見','VS肉眼看不見','SI有小瑕疵要小心','淨度影響火彩折射'],
    'carat':['1卡等於0.2克','亞洲人通常揀30-50分','大鑽石要看預算','克拉越大越稀有越貴','4C要配合先至最好'],
    'tiffany':['美國頂級品牌全球知名','T色冷白純淨','六爪鑲嵌最經典','價格昂貴但值得','設計無可挑剔'],
    'cartier':['法國優雅品牌','Love系列經典款','螺絲設計獨特','工藝精湛細緻','皇室名人青睞'],
    'piaget':['瑞士製表起家轉做珠寶','Possession系列時尚','鑽石工藝優良','時尚優雅風格','價格中高但保值'],
    'local':['價格實惠親民','品質有保証','設計本土化適合香港人','售後服務完善','本地客人信任'],
    'timing':['聖誕節氣氛佳','情人節夠浪漫','平日預算慳多多','旅遊勝地需預早booking','視乎雙方時間安排'],
    'location':['家中溫馨實際','餐廳有氣氛情調','海邊夠浪漫海風舒服','旅遊時求婚難忘回憶','主題樂園夠特別开心'],
    'ring':['Tiffany Setting最經典','三石款寓意過去現在未來','Halo款式顯大顯眼','單鑽款簡約大方','彩鑽夠獨特夠少見'],
    'words':['真誠永遠係最重要','結合你們嘅獨特故事','避免過於戲劇化','練習幾次至熟練自然','預備back-up plan以防萬一'],
    'daily':['洗手時要除低戒指','避免碰撞硬物刮花','每季檢查寶石是否鬆動','超聲波清洗機好用方便','用軟布擦拭保持光亮'],
    'professional':['每年送回廠檢查保養','重新拋光恢復光澤','18K金保值又好保養','PT鉑金最穩定不易變','Graffiti鑲嵌要小心護理'],
    'storage':['原裝盒子最安全貼心','軟袋分開存放防刮花','避免膠袋長期封存','乾燥劑防止氧化變色','珠寶盒分格設計更好'],
    'definition':['訂婚戒指用來求婚代表承諾','結婚戒指係永恆承諾象徵','兩者風格可以唔同','通常訂婚戒指較華麗貴重','習俗上兩者有唔同意義'],
    'style':['Tiffany風格簡約優雅','Cartier大方得體','中式龍鳳鈪傳統喜慶','韓式精緻小巧可愛','歐美風大膽豪邁搶眼'],
    'convenience':['租借最大優點係慳錢','試穿次數無限制幾次都得','最新款式常更新唔會out','唔使擔心存放問題方便','清洗保養有人負責貼心'],
    'custom':['定制婚紗獨一無二','可揀自己鐘意嘅面料','尺寸完全合身靚','通常要提早3-6個月預訂','價格比現貨貴20-30%'],
    'prep':['婚前6個月開始護膚','注意防曬避免曬黑','保持充足睡眠','均衡飲食皮膚靚','婚前1個月加強保濕'],
    'treatment':['facial facial facial facial facial','果酸換膚要預時間','針清去黑頭油脂粒','面膜鎮靜肌膚','避免新產品臨時試用過敏'],
    'weddingday':['化妝前敷mask急救','定妝噴霧keep住靚','帶定補妝產品貼身','頭髮定型要做好','晚宴記得補妝執靚'],
    'rent':['禮服款式多又新','價錢通常幾百蚊','包括改衫服務貼心','歸還前要清洗','熱門款式要好早book'],
    'buy':['全新衛生有保証','可以留為紀念傳給子女','淘寶款式多又平','婚紗店現貨即買','售後服務有保障'],
    'accessories':['頭紗要配合婚紗款式','耳環點綴增加亮點','手套優雅大方得體','腰帶修身效果明顯','揀啱咗成個造型升華晒'],
    'trial':['婚前2-3個月試妝','帶定心儀參考圖比化妝師看','試不同風格比較','確認化妝師檔期','試妝日記錄問題同喜好'],
    'style':['自然妝容越耐越睇','韓式空氣妝容流行','中式傳統紅唇搶眼','歐美大妝夠大膽夠氣場','揀適合自己風格最重要'],
    'hotel':['五星級服務一流享受','婚禮統籌一站式服務','餐飲質素有保証','房間數量要預夠比賓客','性價比最高之選'],
    'restaurant':['中式酒樓夠傳統','西式婚禮有格調優雅','私人包場夠彈性自由','樓底高影相靚','容納人數要確認清楚'],
    'outdoor':['海邊婚禮夠浪漫','草地婚禮小清新','天氣預測要做好留意','蚊蟲問題要準備','場地許可要問清楚'],
    'candid':['捕捉自然表情瞬間','婚禮紀錄最重要','photographer好緊要影响成敗','事後執相要一段時間','通常包幾百張精選'],
    'traditional':['大合照穩穩陣阵','長輩最鐘意傳統','擺拍需要引導動作','確保所有人都影到','時間控制要精準掌控'],
    'artistic':['外國風格大膽創新','實驗性拍攝够特別','光影運用好重要影響大','考驗攝影師功夫','效果最搶眼最靚'],
    'ceremony':['注册證書要帶齊','監禮人安排好預早','兄弟姊妹團分工明確','時間流程要清晰','突發情況要預案有後備'],
    'banquet':['敬酒次序要安排好','燈光影響氣氛氛圍','娛樂節目要控制時間','突發情況要預案','確保每枱都招呼到'],
    'booking':['提早1年預訂教堂','教堂奉獻金要問清','工作人員安排好分工','詩歌練習要時間排練',' permit要申請提前'],
    'reception':['到會服務可考慮','飲品數量要預夠','背景音樂選擇要配合','場地佈置時間安排','清潔善後安排妥當'],
    'weather':['雨天備用方案要準備','夏天要降溫設備','颱風應變計劃要做好','風太大影響設置','天氣預測要追蹤留意'],
    'deco':['花藝係最大預算項目','燈光營造氣氛氛圍','主題要配合整體風格','賓客打卡位設置','DIY可以慳錢環保'],
    'preparation':['过大礼清单要提前準備','雙方家長要溝通協調','禮品數量按親疏關係','海味乾貨係傳統必備','金器銀器不可缺少'],
    'rituals':['上頭象徵開枝散葉','安床要請好命婆幫忙','敬茶規矩要知清楚','三朝回門傳統習俗','每個地方習俗唔同要問清楚'],
    'taboo':['孕婦避免出席婚禮','白事年份要避開','姊妹數目單數較好','利是金額要雙數好意頭','各類禁忌要留意小心'],
    'meaning':['上頭代表成年禮習俗','拜祖先報告喜訊','安床祈求添丁發財','過大禮顯示誠意尊重','三朝回門謝父母養育'],
    'etiquette':['跪地敬茶姿勢要正確','順序由長而幼有序','稱謂要預先練習','接茶要用雙手表示尊重','長輩會比利是封番'],
    'vows':['背熟但要自然流露','加入自己故事好聽','避免過於官腔沉悶','眼神接觸真誠動人','練習幾次至自然流暢'],
    'morning':['新娘化妝梳頭靚靚','兄弟接新娘遊戲熱鬧','敬茶環節温罄感人','出門習俗要遵守','花車遊車河氣氛好'],
    'dressing':['龍鳳褂不可亂着要知','裙子唔好坐地下習俗','禮服男左女右習俗','頭紗唔可以整甩搞衰','着褂唔好食中午結婚'],
    'yearly':['結婚週年送花浪漫','木婚25年紀念木製','銀婚30年不變持久','珍珠婚30年優雅','鑽石婚60年恆久遠'],
    'milestone':['首年紙婚紀念紙张','第十年錫婚耐用','第二十年瓷器婚','五十年金婚金石','一切由今日開始珍惜'],
    'ideas':['旅行係熱門選擇浪漫','首飾永恆之選保值','相冊記錄生活美好','家庭聚會溫馨歡樂','興趣體驗新穎獨特'],
    'asia':['日本溫泉浪漫放鬆','韓國購物天堂方便','泰國沙灘悠閒舒適','台灣美食之旅滿足','新加坡都會風情時尚'],
    'europe':['巴黎浪漫之都優雅','意大利古典優雅藝術','瑞士雪山壯麗美景','希臘小島愜意悠閒','英國皇室風情傳統'],
    'island':['馬爾代夫夢幻天堂','峇里島休閒渡假','夏威夷熱情活力','長灘島純樸自然','斐濟天然純淨'],
    'account':['合併或分開各有優缺點','共同帳戶方便管理','各自理財保留私隱','家庭開支要記錄清楚','定期檢討財務狀況'],
    'investment':['強積金要幾時領取','股票基金分散投資穩陣','樓宇係最大資產決定','保險好緊要保障','退休規劃要趁早準備'],
    'conflict':['聆聽係解決問題第一步','控制情緒再慢慢傾','避免翻舊帳傷感情','就事論事唔做人身高','適時停一停再傾計'],
    'intimacy':['溝通係基本好重要','製造二人世界時間','小驚喜保持新鮮感','尊重雙方界線空間','共同興趣搵共同話題'],
    'creative':['手工禮物最有心思','客制化產品獨一無二','慈善捐款有意義幫人','回禮食品受歡迎實用','小型盆栽環保長久生長'],
    'budget':['淘寶平靚正抵','大批發慳更多話錢','DIY可以控制成本慳','二手物品都可以好靚','量力而為最重要心得'],
}

def fix_file(fp, chname, cidx):
    pc = pascal(chname)
    with open(fp) as f: c = f.read()
    # export function
    c = re.sub(rf'^export function {chname}\b', f'export function {pc}', c, flags=re.MULTILINE)
    # CSS import
    c = re.sub(rf'import\s+"\./{chname}\.css"', f'import "./{pc}.css"', c)
    # hook title
    title = CTITLES.get(chname, chname.capitalize())
    sub = f'了解{title}的重點'
    c = re.sub(r'<h1 className="[^"]+">[^<]*</h1>', f'<h1 className="c1-title">{title}</h1>', c)
    c = re.sub(r'<p className="[^"]+">[^<]*</p>', f'<p className="c1-sub">{sub}</p>', c)
    # card title
    c = re.sub(r'<h2 className="[^"]+">[^<]*</h2>', f'<h2 className="c1-card-title">{title}</h2>', c)
    # content items
    items = CONTENT.get(chname, [f'了解{title}嘅重點','選擇適合自己嘅方案','預算同時間安排','聽取專業意見','最後確認'])
    for i, item in enumerate(items):
        c = re.sub(r'<span>[^<]*</span>', f'<span>{item}</span>', c, count=1)
    with open(fp, 'w') as f: f.write(c)

def fix_cta(path):
    ctaf = os.path.join(path, "presentation/src/chapters/06-cta/CTA.tsx")
    if not os.path.exists(ctaf): return
    with open(ctaf) as f: c = f.read()
    c = re.sub(r'^export function cta\b', 'export function CTA', c, flags=re.MULTILINE)
    c = re.sub(r'import\s+"\./cta\.css"', 'import "./CTA.css"', c)
    c = re.sub(r'<h1 className="[^"]+">[^<]*</h1>', '<h1 className="ct-title">總結與下一步</h1>', c)
    if '<p className="ct-sub"></p>' in c:
        c = c.replace('<p className="ct-sub"></p>', '<p className="ct-sub">準備好就開始你嘅結婚籌備旅程</p>')
    with open(ctaf, 'w') as f: f.write(c)

def fix_pres(name, path):
    # find all chapter dirs
    ch = os.path.join(path, "presentation/src/chapters")
    dirs = sorted(glob.glob(f"{ch}/0[2-5]-*")) + [f"{ch}/06-cta"]
    dirs = [d for d in dirs if os.path.isdir(d)]
    # fix chapters.ts
    ctf = os.path.join(path, "presentation/src/registry/chapters.ts")
    if os.path.exists(ctf):
        with open(ctf) as f: c = f.read()
        for d in dirs:
            n = ch_name(d)
            pc = pascal(n)
            c = re.sub(rf'import\s+\{{\s*{n}\s*}}\s+from\s+"[^"]*/{n}"', f'import {{ {pc} }} from "../chapters/{os.path.basename(d)}/{pc}"', c)
            c = re.sub(rf'Component:\s*{n}\b', f'Component: {pc}', c)
        # fix titles
        lines = c.split('\n')
        nl = []
        for l in lines:
            m = re.match(r'(\s*\{\s*id:\s*"(\d+)-([^"]+)"\s*,\s*title:\s*")([^"]+)(")', l)
            if m:
                nt = CTITLES.get(m.group(3), m.group(3).capitalize())
                l = f'{m.group(1)}{m.group(2)}-{m.group(3)}", title: "{nt}"{m.group(5)}'
            nl.append(l)
        c = '\n'.join(nl)
        with open(ctf, 'w') as f: f.write(c)
    # fix chapter files
    for d in dirs:
        n = ch_name(d)
        for f in glob.glob(f"{d}/*.tsx"):
            if 'narrations' not in f and 'Coldopen' not in f:
                fix_file(f, n, 0)
    fix_cta(path)

def main():
    fixed = clean = 0
    for name, path in get_presentations():
        cp = os.path.join(path, "presentation/src")
        if not os.path.exists(cp): continue
        if not has_lowercase(path):
            clean += 1
            continue
        print(f"Fixing {name}...")
        fix_pres(name, path)
        fixed += 1
    print(f"\nFixed {fixed}, already clean {clean}")

if __name__ == "__main__": main()