<template>
	<div class="solution">
	  <HeadBar MenuSlideFrom='right' background-color="#000" color="#b58c8c" :isSolution='true'>
      <a href="https://udn.com/upf/newmedia/2018_data/childabuse/index.html" target="_blank">爸媽是我的噩夢</a>
      <a href="https://udn.com/upf/newmedia/2018_data/childabuse/page/mental/index.html" target="_blank">壞掉的大人</a>
      <a href="https://udn.com/upf/newmedia/2018_data/childabuse/page/help/index.html" target="_blank">我想幫孩子</a>
    </HeadBar>
    <!-- 開場動畫 -->
    <div class="frontLayer">
      <img class="TopFg" :src="srcRWD(MobTopFg, PcTopFg)" style="margin-bottom: 25vh;">
      <div class="titleImg" ref='title'>
        <img :src="srcRWD(TitleImg, PcTitleImg)" alt="每個人都能成為，接住孩子的那雙手">
      </div>
      <img class="TopFg" :src="srcRWD(MobMidFg, PcMidFg)" alt="">
      <Content background-color="#000" style="color: #fff">
        <p>一樁兒虐案件最後變成無法挽回的悲劇，過程中都有無數拯救機會被錯過。《聯合報》盤點目前兒少保護網，發現有五大漏洞，從第一線社工、醫師、司法、教育人員，到你我每個人，各自都還需要努力，更需互相連結，一起成為接住孩子的那雙手。</p>
      </Content> 
      <img class="TopFg" :src="srcRWD(MobBottomFg, PcBottomFg)" style="margin-top: 30vh">    
    </div>
    <div class="backLayer">
      <img class="TopFg" :src="srcRWD(MobTopBg, PcTopBg)" style="margin-bottom: 25vh;">
      <div class="titleImg" style="visibility: hidden">
        <img :src="srcRWD(TitleImg, PcTitleImg)" alt="每個人都能成為，接住孩子的那雙手">
      </div>      
      <img class="TopFg" :src="srcRWD(MobMidBg, PcMidBg)" alt="">
      <Content style="opacity: 0;">
        <p>一樁兒虐案件最後變成無法挽回的悲劇，過程中都有無數拯救機會被錯過。《聯合報》盤點目前兒少保護網，發現有五大漏洞，從第一線社工、醫師、司法、教育人員，到你我每個人，各自都還需要努力，更需互相連結，一起成為接住孩子的那雙手。</p>
      </Content>
      <img class="TopFg" :src="srcRWD(MobBottom, PcBottom)" style="margin-top: 30vh;">       
    </div>
    <div class="childDrop">
      <div :class="{shake: letShake}">
        <img :src="ChildImg" alt="" :class="{ChildFade: childFade}">
      </div>
    </div>
    <!-- 開場動畫 -->
    <div class="videoWrapper contentLayer" style="padding-top: 5vh;padding-bottom: 15vh;background-color:#fff" :style="{backgroundImage: 'url('+ videoBg_2 +')'}" ref="video_1">
      <EmbededVideo :src="MobOp" :srcWeb="PcOp" :poster="MobPosterOp" :posterWeb="PcPosterOp" controlColor="#cd5903" customControl="yes"></EmbededVideo>  
    </div>
    <Content background-color="#fff" class="contentLayer">
      <Share href="https://udn.com/upf/newmedia/2018_data/childabuse/page/solution/index.html"></Share>
      <p><br/></p>
      <h2>破網一：關鍵的社工不夠力</h2>
      <p><br/></p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>問題：社工人數不足、流動率高、資源不到位</p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>解方：增加經費、提高社工津貼、穩定補足人力</p>
      <p><br/></p>
      <p>社工在兒少保護網裡，扮演訪視、評估、銜接資源、擬定保護計畫的關鍵角色，但台灣兒少保護家庭處遇社工目前遇到人力不足、流動率高、專業知識待強化等困境。</p>
      <p><br/></p>
      <p>當社工手上得負擔大量的個案，服務品質自然下降；年輕的新手社工缺乏經驗、專業知識及敏感度，無法準確判斷家長話中的真偽、傷害的嚴重程度，錯失了在第一時間阻止兒虐悲劇發生的機會。</p>
      <p><br/></p>
      <p>台大醫院兒科加護病房主任呂立就曾碰過一名才剛滿3個月的寶寶被送至急診室，全身淤青、大腿骨折、腦部受創，媽媽聲淚俱下地說，是寶寶頑皮、動來動去，從沙發上摔下才受傷。沒有醫學專業背景的年輕女社工相信家長說法，在一旁安慰家長，頻頻點頭、陪著流淚。</p>
      <p><br/></p>
      <p>但醫護人員認為事有蹊蹺，才出生3個多月，連坐都不會，怎可能會傷得如此嚴重？經過進一步調查，確定為兒虐個案，小寶寶已遍體鱗傷。 </p>
      <p><br/></p>
      <p><br/></p>
      <h3>1打30 怎麼hold得住</h3>
      <p><br/></p>
      <p>2011年，監察院通過國內首宗對社政機關的彈劾案，引起社工界震撼，凸顯出社工經驗、專業知能不足，以及兒少保護制度失靈等問題。但時隔6年多，問題點卻還是一樣。</p>
      <p><br/></p>
      <p>台大社工系副教授劉淑瓊直指，兒保社工缺乏敏感度、相關知能不足，關鍵就是<b>流動率太高、經驗不夠，以及人力不足。</b></p>
      <p><br/></p>
      <Quote
      color="#cd5903"
      text="第一線兒保社工長期來錢少、事多、責任大、人身安全遭受威脅，讓社工人力永遠補不齊"
      refer="台大教授劉淑瓊"
      ></Quote>
      <p><br/></p>
      <ColumnOne :img1="imgsay_1" :imgweb1="imgsay_1pc" imgsay="兒少保社工長期面臨人數不足、流動率高等問題，面對孩子與家庭時力不從心。"></ColumnOne>
      <p><br/></p>
      <p>台灣世界展望會事工發展處處長胡婉雯指出，現行台灣的兒童保護家庭處遇社工<b>每人平均得負擔25至30戶個案，但其他國家大多在18戶以下，</b>「這才是較合理的員額」。</p>
      <p><br/></p>
      <p>社工人力之所以不足，與兒少保護案件難度高、危險性大等因素有關，第一線人員將兒少保社工稱為「重案組」，是高工時、高案量、高危險、高壓的「四高」工作。劉淑瓊直言，「被打到差點斷腿、差點被強暴，這些都曾發生過，我女兒說要做兒保社工，我也會阻止她。」。</p>
      <p><br/></p>
      <p>家扶基金會執行長何素秋表示，<b>目前政府部門的兒童保護社工大多的資歷是1至2年，</b>只要能夠調動的，都選擇調動至非兒保業務或是行政工作，補進來的多是新人，導致目前雖然有兒保社工津貼，仍無法吸引足夠的人久任。</p>
      <p><br/></p>
      <Content background-color="#f1f1f1">
        <div class="letSolve">
        <p><b>怎麼解決：</b></p>
        <p><br/></p>
          <p><b>增加經費、提高社工津貼、穩定增加人力，</b>是學者與社福團體共同的建議與呼籲。何素秋說，國內兒虐樣態漸趨複雜，如能建立社工久任機制、提高津貼等，讓更多社工願意投入兒保並久留，才能把經驗傳承給下一代。</p>
          <p><br/></p>
          <p>此外，何素秋也建議，「應以戶為單位建立個管師的概念」，目前一個家庭內，可能有兒保、老人、高風險、藥酒癮等多名社工在服務，將一個家庭拆成多種業務，雖分工明確，但缺乏整體評估。</p>
          <p><br/></p>
          <p>以日本為例，厚生勞動省為加強兒童養護機構的運作效能，2018年相關預算增列36億日圓達1230億日圓，更是23年來首度擴增地方公務員人數，增加社福人力。</p>
        </div>
      </Content>
      <p><br></p>
      <p><br></p>
      <h3>高風險淪為高危險</h3>
      <p><br/></p>
      <p>社工的角色除了「救援」孩子，「預防」兒虐發生也是工作重要環節。台灣目前設有高風險家庭方案，目的是及早撈出有藥酒癮、經濟困難、婚姻失和等風險因子的家庭，讓社福單位及早介入、協助解決風險因子，<b>但現行的高風險家庭方案，卻被學者直言是「高危險」。</b></p>
      <p><br/></p>
      <p>去年的雲林虐死3子女案，案發家庭早就落入高風險家庭方案的保護網中，但卻無法有效預防悲劇發生。（相關報導：<a href="https://udn.com/news/story/7321/2961322" target="_blank">「令人髮指」虐死3兒女 狠父判14年）</a></p>
      <p><br/></p>
      <p>呂立和劉淑瓊分析100年到105年的104件重大兒虐案，發現其中有3分之1的個案曾經落入高風險家庭方案的網子中，但卻沒辦法接住這些家庭與孩子。</p>
      <p><br/></p>
      <Quote
      color="#cd5903"
      text="問題點在於，把這些高風險家庭找出來後，背後卻沒有十萬大軍和足夠的資源去接住他們"
      refer="台大教授劉淑瓊"
      ></Quote> 
      <p><br/></p>
      <p>劉淑瓊指出，《兒童及少年福利與權益保障法》現在將責任通報範圍拉得很廣，全民皆通報沒什麼不好，但若後面沒有資源和人力承接，通報只是「卸責」，沒有辦法解決問題。</p>
      <p><br/></p>
      <p>劉淑瓊表示，高風險的判斷因子包括貧窮、失業、藥酒癮等，需要連結經濟扶助、就業輔導、戒癮機制等資源協助，但政府資源根本不到位；此外，高風險方案多是委託民間單位執行，缺乏公權力的民間社工沒錢又沒權，除非社福團體本身資源足夠，否則根本hold不住這些家庭。</p>
      <p><br/></p>
      <p>劉淑瓊說，政府在公部門資源不足、員額管控的考量下選擇將高風險方案委託民間團體經營，才會出現高風險預防方案與兒少保護案件分開運作的狀況，但兒虐的嚴重程度通常是「流動」的，可能好轉也可能隨時加重，兩套系統無法有效的轉接案件，「丟來丟去的結果就是掉出網外。」</p>
      <p><br></p>
      <Content background-color="#f1f1f1">
        <div class="letSolve">
          <p><b>怎麼解決：</b></p>
          <p><br/></p>
          <p>行政院現規畫將兒少保護及高風險家庭方案合併在「社會安全網」中，由公部門統一管理，未來將由統一的派案中心來分派案件（相關報導：<a href="https://udn.com/news/story/6656/2955708" target="_blank">衛福部拚變革 部長陳時中提五政策</a>）。劉淑瓊認為，合併可以解決過去推案、資源不足、公權力不夠等問題，但公部門社工人力需求會大幅增加，「人力有沒有辦法補上、培訓機制是否足夠？」</p>
          <p><br/></p>
          <p>過去承接不少縣市高風險方案的家扶基金會，今年開始已陸續退出高風險方案，但政府的「社會安全網」卻還未有明確的執行計畫。劉淑瓊認為，家扶、兒盟等團體負責高風險方案已10多年，有很多經驗可傳承，應有緩衝期銜接。</p>
          <p><br/></p>
          <p>兒福聯盟執行長陳麗如也擔心，兩項方案合併後如果未有效銜接，恐怕會有部分個案變成三不管，反而讓更多個案流出網外。</p>          
        </div>
      </Content>
      <p><br></p>
    </Content>
    <SectionFixedBg :bg="fixBg_1" :bgweb="fixBg_Pc_1" menu-text="醫師當柯南" ref='section_1'></SectionFixedBg>
    <Content background-color="#fff" ref='section_1_end' class="contentLayer">
      <h2>破網二：醫生要用專業幫小孩申冤</h2>
      <p><br></p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>問題：敏感度不足、兒保吃力不討好</p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>解方：觀念普及、政府支持</p>
      <p><br/></p>
      <p>「小孩應該有人替他們伸冤」。彰化基督教醫院神經科醫師張通銘，曾因為在病歷上寫了一句關鍵的文字，成為法官判斷兒虐非常有利的證據。嘉義基督教醫院去年也曾因察覺3歲男童的傷「不對勁」，緊急通報社會局後安置兩兄妹。</p>
      <p><br/></p>
      <p>一樁樁案件，都凸顯出醫生在兒少保護網裡的重要性，<b>能運用醫學專業知識準確判斷兒虐、避免孩子遭二度傷害，更能協助檢察官搜集證據。</b></p>
      <p><br/></p>
      <p>張通銘說，這名5歲女童到院時，爸爸說是摔下樓梯，但一般從樓梯摔下，額頭、驅側近端比較容易受傷，身體遠端、彎曲手肘、眼窩等較不可能受傷。但這名女童傷痕分布不尋常，都在身體凹陷、彎曲等不易受傷部位，且通常摔下樓梯會往前倒、不會往後仰，她卻是膝蓋後方處受傷。</p>
      <p><br/></p>
      <p>在拍照、錄影後，他還發現小女孩腦腫、腦部出現空氣，最後爸爸脫口而出，「老闆說不能講孩子讓他帶」，張通銘就把這句話寫在女童的病歷上，最後成了工廠老闆被判刑兒虐的最直接證據。</p>
      <p><br/></p>
      <p>原來，這名爸爸帶孩子上班不方便，工廠老闆自告奮勇要幫他帶小孩，沒想到卻虐待女童，造成女童全身是傷、腦部出血。但父親因為家計不敢對老闆提告，最後由檢察官提告，將這位惡老闆判刑。</p>
      <p><br/></p>
      <ColumnOne imgsay="醫師是第一線接觸孩子傷勢的人，若能建立兒虐敏感度，因受虐死亡的兒少在病歷上就不會只是一句輕描淡寫的「猝死」、「心臟衰竭」，也能在孩子傷重前拯救他們。"
                 :img1="imgsay_2" :imgweb1="imgsay_2pc"
      ></ColumnOne>
      <p><br/></p>
      <p><br></p>
      <h3>多點警覺 可以救下無數孩子</h3>
      <p><br/></p>
      <p><b>2017年前三季，統計共有4萬多件疑似兒虐通報案件，其中由醫事人員通報的只有2692件，比率僅6％。</b>張通銘直言，若醫師能在第一時間從醫院發現個案，就能讓更多個案曝光，「看醫師想不想做而已」。</p>
      <p><br/></p>
      <p>急診室通常是醫院碰到兒虐個案的第一現場，急診醫師具有高度警覺、敏感度相當關鍵。彰化基督教醫院兒少保小組召集人、兒童急診科醫師楊文傑指出，患者若有超過三次急診外傷紀錄，且病史不一致、甚至延遲就醫；或1歲以下幼兒有骨折、頭部外傷等，就必須提高警覺。</p>
      <p><br/></p>
      <p>根據他的經驗，很多個案家長會說孩子是撞到跌倒，但詢問後會發現親屬間描述的前因後果都不一樣，例如媽媽說是走樓梯跌倒，但爸爸說撞到頭，由於家屬並非刻意、有經驗的加害者，說法之間會前後矛盾，若醫師仔細盤問，就很容易突破心防發現個案。 </p>
      <p><br/></p>
      <Quote
      color="#cd5903"
      text="醫師不能一口咬定家長虐兒，因此必須旁敲側擊，再像柯南般嘗試判斷，找到可能的蛛絲馬跡"
      refer="彰基醫師楊文傑"
      ></Quote>
      <p><br/></p>
      <p>但不是每位醫生，都能有這樣的警覺性和投入意願。「除了兒科以外，現在其他科針對兒虐的訓練幾乎是零。」呂立指出，現在兒科醫師在兒科醫學會的推動下，慢慢建立兒虐判斷的能力，但除了兒科之外，若今天孩子到了外科、影像醫學科等非兒科的科別，「很多醫師是看不懂的」，是現在醫療在兒少保護網絡裡面臨到的一大問題。</p>
      <p><br></p>
      <Content background-color="#f1f1f1">
        <div class="letSolve">
          <p><b>怎麼解決：</b></p>
          <p><br/></p>
          <p>嘉義基督教醫院兒童急診科主任黃信儒指出，目前兒科醫學會都有相關訓練課程，可一步一步推動所有醫師建立判斷能力。除了醫師本身，醫院的參與和投入也很重要，嘉基去年成立「兒少保護小組」，遇到兒虐個案時，會視個案狀況邀集相關科別醫師一起判斷，目的是做到早期辨識，讓孩子不要受更重的傷。</p>
          <p><br/></p>
          <p>此外，由於醫師沒有調查權，家屬或個案關係人可以不理會醫師提問，有時候還須面對家屬威脅，張通銘建議，每個區域最好都能訓練一批有檢調資格的醫師，醫界與法界也必須多互動，若彼此都沒有追根究柢的精神，個案很容易不了了之。</p>          
        </div>
      </Content>
      <p><br/></p>
      <p><br></p>
      <h3>做兒保吃力不討好</h3>
      <p><br/></p>
      <p>無奈的是，有時就算醫師有心投入，現有制度、政府資源也不支持。醫院要撐起完整的兒少保護體系，需要額外聘請社工師、個案管理師等，還有訪談間等硬體建設經費，都需要經費，卻沒有辦法在健保制度中獲得支持，讓醫院感嘆「兒少保是門吃力不討好的生意」。</p>
      <p><br/></p>
      <p>衛福部心口司前司長陳快樂3年前曾成立「兒少保護醫療服務示範中心」，在台大林口長庚、彰基、雲林台大分院、高雄榮總、花蓮慈濟等6家醫學中心設置平台，由兒科、骨科、精神科、急診等醫師，以及社工、心理諮商師及個案管理師組成醫療團隊。</p>
      <p><br/></p>
      <p>但後來經費卻無預警斷炊，讓許多醫師焦急不已。因經費有限、缺人缺錢，其中1家醫院幾個月後主動退場，另4家醫院則各憑本事找尋資源。</p>
      <p><br/></p>
      <p>台大醫院當時差點由醫師拿薪水出來倒貼，只為了讓中心可以延續，後來所幸獲得民間團體贊助，才能繼續運作，但維持還是相當辛苦。兒科加護病房主任呂立苦笑說，院內20多名醫師、醫護人員均屬義務參與並未支薪，真的是在做功德。</p>
      <p><br/></p>
      <Content background-color="#f1f1f1">
        <div class="letSolve">
          <p><b>怎麼解決：</b></p>
          <p><br/></p>
          <p>政府提供支持，讓有心的醫院能繼續運作。此外，醫院常碰到一些精明的施虐者，會透過搬家、換醫院來避免醫護人員因病歷起疑心，需要公部門協助建立醫院間互通的系統或資料庫，讓醫院在碰到疑似受虐兒的個案時，能有更完整的判斷資訊。</p>          
        </div>
      </Content>
      <p><br></p>
    </Content>
    <SectionBg :bg="fixBg_2" :bgweb="fixBg_Pc_2" ref='section_2' menu-text="司法別置身事外">
      <div class="branket" :style="{backgroundImage: 'url('+ srcRWD(fixBg_2_Fg, fixBg_Pc_2_Fg) +')'}"></div>
    </SectionBg>
    <Content background-color="#fff" class="contentLayer">
      <h2>破網三：不夠重視兒少的司法</h2>
      <p><br></p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>問題：施虐者難辦、專業養成不足</p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>解方：與醫療社政緊密合作、培養兒虐專業司法人員</p>
      <p><br/></p>
      <p>今年1月，高檢署確定為2011年發生的王昊虐死案提起再審，王昊姑姑、兒童權益促進協會理事長王薇君聽到消息激動落淚。之所以提起再審，是因為王薇君認為司法始終不夠重視兒童的生存權、被虐殺的兒童司法權。</p>
      <p><br/></p>
      <p>「很多案子最後斷在檢察官身上，」第一線醫師有很深的感慨。呂立說，兒虐案件最後有起訴的已是少數，判刑的就更少了。</p>
      <p><br/></p>
      <Quote
      color="#cd5903"
      text="不是一定要判多重的刑，但要告訴施虐者：「傷害孩子要負責任」"
      refer="台大醫師呂立"
      ></Quote>
      <p><br/></p>
      <ColumnOne imgsay="王昊姑姑王薇君去年11月到最高法院遞狀，為王昊遭虐死案聲請再審。" :img1="imgsay_3" :imgweb1="imgsay_3pc"></ColumnOne>
      <p><br/></p>
      <p><br></p>
      <h3>施虐者不好抓</h3>
      <p><br/></p>
      <p><b>難起訴、定刑，原因在於難以證明「誰是施虐者」。</b>嘉義基督教醫院兒童急診科主任黃信儒指出，刑事訴訟要有明確的被告人，醫師可以舉證孩子受多重的傷，但無法證明傷害是誰造成的，「我們一直希望街坊鄰居能夠多出來作證，但在東方人的文化裡還是相對難。」</p>
      <p><br/></p>
      <p>沒有人可以作證的情況下，警方第一時間的採證、孩子的證詞，就變成檢察官起訴的重要關鍵，但孩子年幼，證詞易反覆，也容易因緊張、害怕，無法還原事件樣貌。</p>
      <p><br/></p>
      <p><b>警方則是容易錯失搜證時機。</b>呂立觀察，常見的情況是警察接到報案，但到個案家中孩子已經停止哭泣，也看不出任何異樣，無法強行進入，「有時進門了也不會看，沒有一套針對兒少保護案件的搜證標準流程、專業訓練。」</p>
      <p><br/></p>
      <p>一名家事庭法官說，刑事訴訟法雖規定「有事實足認被告或犯罪嫌疑人確實在內」可逕行搜索，但員警很少只因小孩哭鬧就強行破門，因為很可能只是父母在管教小孩。</p>
      <p><br/></p>
      <p><br/></p>
      <h3>司法還可以做很多</h3>
      <p><br/></p>
      <p><b>「司法應該要負很多責任，現在我們做得太少了。」</b>日前行政院通過刑法修正案，提高施虐者刑責（<a href="https://udn.com/news/story/7315/3020822" target="_blank">相關報導</a>），但一名資深法官感嘆，提高刑責是最簡單、最情緒性的做法，嚴刑峻罰辦得是「壞透了」的案子，但這類重案畢竟是少數，更多案子需要的是幫助。</p>
      <p><br/></p>
      <p>這名法官以美國為例，美國有專門的法官、法庭在處理兒少虐待案件，除了審判，更重要的是替受虐孩子做處遇規畫，例如是否安置、安置到哪裡、安置多久等，以及後續的處遇監督，「司法是最後的守門人」，但台灣的法官只做「准／不准安置」的裁定，其他全交給社工。</p>
      <p><br></p>
      <p><b>司法能著力的少，與現有法規、長期以來的司法人員養成都有關。</b>這名法官指出，許多國家都有針對兒少虐待訂定專法，裡面對虐待型態、定義、後續處遇等都有明確規範，台灣的《兒童及少年福利與權益保障法》涵蓋範圍太廣，且以社政為主體，司法力量不足。也因為沒有法源，司法人員自然不會有相關專業訓練。</p>
      <p><br></p>
      <Content background-color="#f1f1f1">
        <div class="letSolve">
          <p><b>怎麼解決：</b></p>
          <p><br/></p>
          <p>目前各地檢署設有婦幼專組，各地方法院則設有家事法庭，但呂立認為，兒少保護案件在搜證、偵訊、審判等各司法程序上，都與一般案件不一樣，受害者是孩童、施虐者多是主要照顧者，涉及的問題很複雜，但目前法官、檢察官的養成過程裡沒有這一塊，經驗無法累積。</p>
          <p><br></p>
          <p>呂立與資深法官都建議，應設立兒少保護專業法庭，培養專責兒少保護檢察官和法官，讓未來兒少保護案件由專責司法人員處理。當法律裡明確要求設立，司法體系才會「動起來」，開始編制人員、展開專業訓練。</p>
          <p><br></p>
          <p>第一線警察則需建立一套完整的處理機制。嘉義市政府警察局婦幼隊副隊長林婉婷表示，警政署現編有「警政婦幼安全工作手冊」，內有作業流程供執勤參考。每年舉辦的婦幼安全訓練課程內容，也包含兒虐案件處理，好讓外勤有做法可循。</p>
          <p><br></p>
          <p>當警員接獲疑似兒虐報案，會先查證兒少成傷狀況，若目視未成傷，初步了解現場狀況後，24小時內上線通報系統，交由社工後續訪視；若已成傷、致死，或有立即危險，案件可能提升為刑事案件，這時就要保全現場證據，偵查隊會加進來處理，嚴重案件需由檢察官指揮偵辦，最後案件調查完移送地檢，警政端才算結案。</p>
          <p><br></p>
          <p>部分檢察官也開始和醫院合作，到醫院特別設置的諮商室與心理師、社工一同問孩子問題，在放鬆的空間裡與孩子自然談天，可以減少孩子恐懼，也能避免反複詢問造成二度傷害。</p> 
        </div>
      </Content>
      <p><br></p>
    </Content>
<!--     <SectionBg ref='section_3' style="z-index: 8">
      <div class="bigHand" :style="{backgroundImage: 'url('+ fixBg_3 +')', backgroundPosition: handMove + '% center'}"></div>
    </SectionBg> -->
    <SectionFixedBg ref='section_3' style="z-index: 8" :useDouble="true" menu-text="寄養家庭的難">
      <div class="bigHand" :style="{backgroundImage: 'url('+ srcRWD(fixBg_3, fixBg_Pc_3) +')', backgroundPosition: handMove + '% center'}"></div>
    </SectionFixedBg>
    <div style="width: 100%;height: 100vh;"></div>
    <Content background-color="#fff" class="contentLayer">
      <h2>破網四：把孩子拉出家庭之後？</h2>
      <p><br></p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>問題：寄養、安置資源不足</p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>解方：增加寄養家庭誘因、協助原生家庭重建</p>
      <p><br/></p>
      <p>受虐孩子離開原生家庭後，許多會在寄養家庭短暫停留，寄養家庭形同他們生命中第二個家，許多孩子在寄養家庭中才真正感受到「家」的樣貌，是機構難取代的環境氛圍。但<b>目前寄養制度面臨到寄養家庭難招募、原生家庭難修復等問題。</b></p>
      <p><br/></p>
      <p>根據家扶基金會105年度《兒童少年家庭寄養服務工作》報告，民國93年時每年還能新增200戶寄養家庭，但到105年時，每年僅招募到84戶，差了一倍以上，需要寄養的孩子數量卻沒有減少。且寄養家庭的平均年齡逐漸老化，凸顯出沒有新血加入的困境。</p>
      <p><br/></p>
    </Content> 
    <div class="videoWrapper contentLayer" style="padding: 10vh 0;background-color:#fff" ref="video_1" :style="{backgroundImage: 'url('+ videoBg +')'}">
      <EmbededVideo :src="MobEp" :srcWeb="PcEp" :poster="MobPosterEp" :posterWeb="PcPosterEp" controlColor="#cd5903" customControl="yes"></EmbededVideo>  
    </div>
    <Content background-color="#fff" class="contentLayer">
      <p><br/></p>
      <h3>寄養家庭10年少1倍</h3>
      <p><br/></p>
      <p><b>「以前寄養兒少多是因家庭經濟困難、養不起而安置，現在多是受虐兒少，較難帶養。」</b>家扶社會資源處長林秀鳳觀察，現在有6成以上的寄養童都是受虐兒少，這些孩子的身心狀況往往較為複雜，因疏忽被安置的孩子容易有重大傷病、受暴的孩子容易出現偏差行為，是讓寄養家庭卻步的原因。</p>
      <p><br/></p>
      <p>有10年寄養家庭經驗的勞媽媽曾照顧一名移轉過4個家庭的孩子，是社工眼中的問題人物。剛開始孩子不是偷竊、就是鬧情緒，有次因偷錢被她訓斥，憤怒之下竟拿了刀說要跟她「拼輸贏」。</p>
      <p><br/></p>
      <p>「當下一定會怕的，但我想，我不能被小朋友打倒。」勞媽媽說，她知道一切都是因孩子的情緒沒有出口，她給自己的期許是「讓他們覺得在我家是安全的」，孩子做錯事她不會直接懲罰，會耐心告知哪裡做錯、自己為什麼生氣，慢慢的孩子會發現「這個媽媽不一樣」。</p>
      <p><br/></p>
      <p>此外，<b>現代媽媽愈來愈忙碌、房屋空間變小、寄養兒少生活費補助不足、退休後追求個人生活</b>等社會變遷因素，也是寄養家庭愈來遇難招募的原因。</p>
      <p><br/></p>
      <ColumnOne imgsay="寄養家庭是受虐兒離家後的重要避風港，目前招募遇到困境。" :img1="imgsay_4" :imgweb1="imgsay_4pc"></ColumnOne>
      <p><br></p>
      <p><br></p>
      <h3>孩子被一次次連根拔起</h3>
      <p><br></p>
      <p>依規定，每個孩子在寄養家庭安置的時間最多2年，特殊狀況可經過評估會延長。當初會制定年限，是希望原生家庭能積極修復，但在修復無法發揮成效時，一次次離別，對寄養家庭和孩子而言，都是撕心裂肺。</p>
      <p><br></p>
      <p>一談到孩子有天終要離開，寄養家庭陳媽媽不禁哽咽落淚。她說，想到孩子要離開，不管是回原生家庭或到下個安置處，心都像從冰箱中拿出來一樣，「總是告訴自己要理性，要祝福、要放手，但就是很難啊！」</p>
      <p><br></p>
      <p>她感嘆，孩子若回不去原生家庭，就得繼續流浪，如果能快速找到收養家庭算運氣好，但若一直到處移轉，「會覺得孩子像沒人買的東西」，不斷從一個環境中連根拔起、再重新種下，對孩子是很大的折磨。</p>
      <p><br></p>
      <p>「寄養家庭的最初目標，是希望孩子最後能重返經過重建的原生家庭，但談何容易？」台大社工系副教授劉淑瓊感嘆，安置若無法永久安置，對孩子來說其實很殘忍；若只是暫時安頓，就應該要好好重建原生家庭，但沒有豐富的人力、資源，根本做不到，「我們政府說要保護孩子，都是假的。」</p>
      <p><br></p>
      <p>林秀鳳以多年社工經驗觀察，原生家庭難重建有幾個原因，<b>一是本身沒有改變意願，或沒有能力改變，二是縣市政府對原生家庭的家庭處遇計畫成效不佳，</b>要重整家庭需要重建經濟、戒藥酒癮，還需提供親職教育等，但現在沒有一塊到位，孩子通常回不了家。</p>
      <p><br></p>
      <Content background-color="#f1f1f1">
        <div class="letSolve">
          <p><b>怎麼解決：</b></p>
          <p><br></p>
          <p>林秀鳳認為，政府若真的有心要重建原生家庭，需要投入人力與成本好好做，以家扶為例，每個個案都需要投入大量資源，協助銜接基金會內經濟重建、家庭輔導等部門，才能讓家重新撐起。</p>
          <p><br/></p>
          <p>寄養家庭的存在仍有其必要性。面對寄養家庭可能「斷炊」，家扶希望更多有能力的家庭投入，也呼籲政府提高給寄養家庭的兒少生活費，目前多數縣市每月的生活費補助僅1萬6千元左右，很多時候光帶孩子看病、諮商都不夠，今年雖有略微調升，但還不足。</p>
          <p><br></p>          
        </div>
      </Content>
    </Content>  
    <SectionFixedBg :bg="fixBg_4" :bgweb="fixBg_Pc_4" ref='section_4' style="z-index: 8;" :useDouble="true" menu-text='鄰里發揮力量'>
      <div class="holdSection">
        <div class="nestedChild" :style="{top:'-' + section_4_pos + '%'}">
          <img :src="srcRWD(fixBg_4_Child, fixBg_Pc_4_Child)">
        </div>
        <img class="leftHand" :src="srcRWD(fixBg_4_LeftHand, fixBg_Pc_4_LeftHand)" :style="{bottom: '-' + section_4_pos + '%'}">
        <img class="rightHand" :src="srcRWD(fixBg_4_RightHand, fixBg_Pc_4_RightHand)" :style="{bottom: '-' + section_4_pos + '%'}">
      </div>
      <img class="section_4_Fg" :src="srcRWD(fixBg_4_Fg, fixBg_Pc_4_Fg)">
    </SectionFixedBg>
    <div style="width: 100%;height: 50vh;"></div>
    <Content background-color="#fff" class="contentLayer">
      <h2>破網五：集全社區的力量守護孩子</h2>
      <p><br></p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>問題：別人家管小孩我別管</p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i>解方：打破觀念、用全社會的力量保護孩子</p>
      <p><br/></p>
      <p>根據衛福部統計，近10年兒虐案通報量急遽增加2.84倍，但其中親友及鄰居、社會人士的通報量卻幾乎逐年遞減，偏偏重大兒虐案中，有9成都是學齡前兒童，是學校、教師無法察覺的死角，更仰賴鄰里及社區的關注。（相關報導：<a href="https://udn.com/news/story/7266/3017026" target="_blank">兒虐通報增加緩 家扶籲關心</a>）</p>
      <p><br></p>
      <p><br></p>
      <h3>為什麼大家不報？</h3>
      <p><br></p>
      <p>兒童福利聯盟執行長陳麗如觀察，鄰里、親友不通報的原因，大多是擔心通報後會造成家庭破碎，不想破壞家庭。還有些情況是擔心被報復，怕通報暴露身分。</p>
      <p><br></p>
      <p>此外，<b>華人社會「管教是家務事」的觀念根深蒂固，</b>也是鄰里通報比率低的原因之一。劉淑瓊指出，傳統觀念認為管教孩子是家務事，曾有熱心鄰居被打人的父母嗆「若我不管，將來變陳進興怎麼辦？」</p>
      <p><br></p>
      <Quote
      color="#cd5903"
      text="印地安部落有ㄧ句名言，集一個部落的力量照顧一個孩子，但台灣沒有這個觀念"
      refer="台大教授劉淑瓊"
      ></Quote>
      <p><br></p>
      <p>劉淑瓊直言，台灣社會總是認為別人家的孩子死不了，講兒童是國家的主人翁，只是嘴上說說，社會其實對教養暴力高度容忍，「兒童應該得到什麼樣的對待，我們的社會還開發中。」</p>
      <p><br></p>
      <p>陳麗如呼籲，並不是每個被通報的兒童都會被帶離家中，唯有會造成兒童生命危害的情況才會緊急安置，且使用113保護專線都是匿名，不用擔心要上法院等問題。</p>
      <p><br></p>
      <p>「兒童是社會的公共財。」台灣世界展望會事工發展處長胡婉雯認為，許多重大兒虐都是人際關係封閉的家庭，除了敏銳察覺，更需「主動關懷」，如鄰里長就是關鍵角色，呼籲民眾發揮「雞婆心」。</p>
      <p><br></p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i><b>如果你家隔壁鄰居孩子有以下徵狀，請多注意：</b></p>
      <p><br></p>
      <p>1. 身上有不符天氣的穿著（如夏天穿長袖等）</p>
      <p>2. 外型過於清瘦、營養缺乏</p>
      <p>3. 在住家聽到孩子哭喊聲、夫妻衝突聲長</p>
      <p>4. 達20分鐘以上</p>
      <p>5. 學齡階段孩子在上學時間遊蕩在外</p>
      <p>6. 常看到孩子落單</p>
      <p><br></p>
      <p>很多人會擔心自己錯報，但社福團體呼籲，判斷的責任並不在通報者身上，報錯沒有關係，但若有異樣卻未通報，可能錯失拯救孩子的機會。</p>
      <p><br></p>
      <p><i class="fa fa-circle fa-x" aria-hidden="true" style="color: #cd5903;margin-right: 5px;"></i><b>有異樣時可以打這些電話：</b></p>
      <p><br></p>
      <p>113保護專線（24小時）</p>
      <p>110報案專線</p>
      <p><br></p>
      <p><b>小提醒：</b>通報時若能儘可能提供相關「人、事、時、地、物」資訊，以及詳細舉報內容，例如：被害人目前意識狀態、事件發生的原因、時間、頻率等，有助線上社工判斷；若當下通報個案無人身安全危險，可先撥113諮詢，但若判斷有立即危險，應立刻撥打110報警。</p>
      <p><br></p>
      <Content background-color="#f1f1f1">
        <div class="letSolve">
          <p><b>怎麼解決：日本借鏡</b></p>
          <p><br></p>
          <p>如何增加通報管道效能一直是日本政府研議的重要課題，2015年日本政府將全國通用諮詢專線由10碼縮減為「189」三碼後，當年兒童諮詢所受理的通報件數增加16％、達10萬3286件。數字爆增除了反應問題日益嚴重，也代表通報系統改善，使案件湧入增加。</p>
          <p><br></p>
          <p><b>日本政府現正研議建置LINE等交流網站（SNS）受虐兒通報機制，</b>除希望提高鄰里通報率，也希望進入學齡、有通訊設備的受虐兒也能有求助管道，早日發現甚至提前預防可能出現的兒虐事件。</p>
          <p><br></p>
          <p>日本文部科學省去年已編列預算，補助地方自治體設置SNS諮詢窗口，作為校園霸凌通報的另一個新管道。部分地區已經早一步試行，例如千葉縣柏市去年6月開始試導入「STOPit」App做為霸凌通報管道，兩個月便收到逾50件；相較市政府電話窗口2015年全年受理24件，通報量成效是電話的12.5倍，通訊軟體在校園霸凌通報展現初步效果。</p>          
        </div>
      </Content>
    </Content>
    <div class="contentLayer" ref="takeChild">
      <div class="takeChild" :style="{opacity: takeChildShow}">
        <p><br></p>
        <ColumnOne :class="{scaleUp: scaleUpGo}" :img1="endingBg" :imgweb1="endingBgPc" style="background-color: #fff"></ColumnOne>  
      </div>      
    </div>     
    <Content class="contentLayer" background-color="#fff">       
      <Share href='https://udn.com/upf/newmedia/2018_data/childabuse/page/solution/index.html'></Share>
      <Logo>
        <div class="logo">
            <a href="https://udn.com/news/index" target="_blank"><img :src="nightlogo"></a>
        </div>               
      </Logo>
      <p><br/></p>
      <Editor>
        <div>文字：洪欣慈</div>
        <div>插畫：許藹雯、黃微庭</div>
        <div>網頁設計&影音：許瑋琳</div>
        <div>攝影：高彬原、報系資料照</div>
        <div>網頁製作：廖克樸</div>
        <div>採訪團隊：李樹人、彭宣雅、林良齊、王宏舜、王慧瑛、翁禎霞、林敬家、蔡佩芳、張加、林秀姿、洪欣慈</div>
        <div>監製：林新輝、謝蕙蓮、林文義、董谷音、潘如瑩、蔡幸怡</div>
        <div>2018.03.26</div>
      </Editor>      
      <p><br></p>  
      <Question text="填寫閱讀體驗問卷" href="https://www.surveycake.com/s/KpQKN"></Question>
      <p><br/></p>      
      <Relate title="延伸閱讀" 
          href1="https://udn.com/upf/newmedia/2018_data/childabuse/index.html" text1="兒虐告白 爸媽是我的噩夢" :img1="relate_1"
          href2="https://udn.com/upf/newmedia/2018_data/childabuse/page/mental.html" text2="情緒勒索：壞掉的大人 長歪的小孩" :img2="relate_2"
          href3="https://udn.com/upf/newmedia/2018_data/childabuse/page/help.html" text3="你可以怎麼幫孩子？" :img3="relate_3"
          href4="https://health.udn.com/health/story/5999/2772562" text4="減少兒虐 社區需要你「雞婆」" :img4="relate_4"> 
      </Relate>
      <FbComment href="https://udn.com/upf/newmedia/2018_data/childabuse/page/solution/index.html"></FbComment>            
    </Content>
    <Foot class="theFoot" style="position: relative; z-index: 9999;width: 100%"></Foot>
	</div>
</template>

<script>
// 手機板 START
import MobTopFg from '../assets/solution/mobile/mob_ill01/mob_ill01_top_fg.png'
import MobTopBg from '../assets/solution/mobile/mob_ill01/mob_ill01_top_bg.jpg'
import MobMidFg from '../assets/solution/mobile/mob_ill01/mob_ill01_middom_fg.png'
import MobMidBg from '../assets/solution/mobile/mob_ill01/mob_ill01_middom_bg.jpg'
import MobBottom from '../assets/solution/mobile/mob_ill01/mob_ill01_bottom.jpg'
import MobBottomFg from '../assets/solution/mobile/mob_ill01/ill01_bottom_fg.png'

import TitleImg from '../assets/solution/mobile/mob_ill01/mob_title.png'

import imgsay_1 from '../assets/solution/mobile/imgsay/pic1.jpg'
import imgsay_2 from '../assets/solution/mobile/imgsay/pic2.jpg'
import imgsay_3 from '../assets/solution/mobile/imgsay/pic3.jpg'
import imgsay_4 from '../assets/solution/mobile/imgsay/pic4.jpg'

import imgsay_1pc from '../assets/solution/web/pic1_pc.jpg'
import imgsay_2pc from '../assets/solution/web/pic2_pc.jpg'
import imgsay_3pc from '../assets/solution/web/pic3_pc.jpg'
import imgsay_4pc from '../assets/solution/web/pic4_pc.jpg'

import fixBg_1 from '../assets/solution/mobile/mob_ill02/mob_ill02.jpg'
import fixBg_2 from '../assets/solution/mobile/mob_ill03/mob_ill03_00.jpg'
import fixBg_2_Fg from '../assets/solution/mobile/mob_ill03/mob_ill03_01.png'
import fixBg_3 from '../assets/solution/mobile/mob_ill04/mob_ill04.jpg'
import fixBg_4 from '../assets/solution/mobile/mob_ill05/mob_ill05_00.png'
import fixBg_4_Fg from '../assets/solution/mobile/mob_ill05/mob_ill05_front.png'
import fixBg_4_Child from '../assets/solution/mobile/mob_ill05/mob_ill05_child.png'
import fixBg_4_LeftHand from '../assets/solution/mobile/mob_ill05/mob_ill05_Lhand.png'
import fixBg_4_RightHand from '../assets/solution/mobile/mob_ill05/mob_ill05_Rhand.png'

import endingBg from '../assets/solution/mobile/mob_ill06/mob_ill06.png'

import Child from '../assets/solution/mobile/mob_ill01/mob_child.png'
import ChildEgg from '../assets/solution/mobile/mob_ill01/mob_childBall.png'
// 手機板 END
import PcTopFg from '../assets/solution/web/ill01/ill01_top.png'
import PcTopBg from '../assets/solution/web/ill01/ill01_top.jpg'
import PcMidFg from '../assets/solution/web/ill01/ill01_middom.png'
import PcMidBg from '../assets/solution/web/ill01/ill01_middom.jpg'
import PcBottom from '../assets/solution/web/ill01/ill01_bottom.jpg'
import PcBottomFg from '../assets/solution/web/ill01/ill01_bottom_fg.png'
import PcTitleImg from '../assets/solution/web/ill01/p3_title01.png'

import fixBg_Pc_1 from '../assets/solution/web/ill02/ill02.jpg'
import fixBg_Pc_2 from '../assets/solution/web/ill03/ill03.jpg'
import fixBg_Pc_2_Fg from '../assets/solution/web/ill03/ill03_01.png'
import fixBg_Pc_3 from '../assets/solution/web/ill04/ill04_00.jpg'
import fixBg_Pc_4 from '../assets/solution/web/ill05/ill05_bg.jpg'
import fixBg_Pc_4_Fg from '../assets/solution/web/ill05/ill05_front.png'
import fixBg_Pc_4_Child from '../assets/solution/web/ill05/ill05_ch.png'
import fixBg_Pc_4_LeftHand from '../assets/solution/web/ill05/ill05_01_left.png'
import fixBg_Pc_4_RightHand from '../assets/solution/web/ill05/ill05_02_right.png'

import endingBgPc from '../assets/solution/web/ill06/ill06.png'

import MobEp from '../assets/solution/mobile/solution_op_mobile.mp4'
import MobOp from '../assets/solution/mobile/solution_ep_mobile.mp4'
import PcEp from '../assets/solution/web/solution_op_web.mp4'
import PcOp from '../assets/solution/web/solution_ep_web.mp4'
import MobPosterOp from '../assets/poster/poster_op.jpg'
import PcPosterOp from '../assets/poster/poster_op_pc.jpg'
import MobPosterEp from '../assets/poster/poster_ep.jpg'
import PcPosterEp from '../assets/poster/poster_ep_pc.jpg'

import videoBg from '../assets/videoBg.jpg'
import videoBg_2 from '../assets/videoBg_2.png'

import relate_1 from '../assets/relation/noparent.jpg'
import relate_2 from '../assets/relation/curvekid.jpg'
import relate_3 from '../assets/relation/helpkid.jpg'
import relate_4 from '../assets/relation/chickengril.jpg'

import nightlogo from '../assets/nightlogo.svg'

import EmbededVideo from '../components/EmbededVideo.vue'
import {HeadBar, Content, SectionFixedBg, Share, Quote, ColumnOne, Logo, Editor, Foot, Relate, FbComment, Question, SectionBg} from 'udn-newmedia-vue-components'
export default {

  name: 'solution',
  components: {
    ColumnOne,
    Content,
    Editor,
    EmbededVideo,
    FbComment,
    Foot,
    HeadBar,
    Logo,
    Relate,
    SectionFixedBg,
    Share,
    Quote,
    Question,
    SectionBg
  },
  metaInfo: {
    title: '兒虐五大漏洞 社會一起補',
  },  
  data () {
    return {
      metaDes: '一樁兒虐案件最後變成無法挽回的悲劇，過程中都有無數拯救機會被錯過。《聯合報》盤點目前兒少保護網，發現有五大漏洞，從第一線社工、醫師、司法、教育人員，到你我每個人，各自都還需要努力，更需互相連結，一起成為接住孩子的那雙手。',
      nightlogo: nightlogo,
      relate_1: relate_1,
      relate_2: relate_2,
      relate_3: relate_3,
      relate_4: relate_4,      
      videoBg: videoBg,
      videoBg_2: videoBg_2,
      PcTopFg: PcTopFg,
      PcTopBg: PcTopBg,
      PcMidFg: PcMidFg,
      PcMidBg: PcMidBg,
      PcBottom: PcBottom,
      PcBottomFg: PcBottomFg, 
      PcTitleImg: PcTitleImg,
      PcOp: PcOp,
      PcEp: PcEp,
      MobOp: MobOp,
      MobEp: MobEp,
      MobPosterOp: MobPosterOp,
      PcPosterOp: PcPosterOp,
      MobPosterEp: MobPosterEp,
      PcPosterEp: PcPosterEp,      
      MobTopFg: MobTopFg,
      MobTopBg: MobTopBg,
      MobMidFg: MobMidFg,
      MobMidBg: MobMidBg,
      MobBottom: MobBottom,
      MobBottomFg: MobBottomFg,
      ChildImg: Child,
      TitleImg: TitleImg,
      imgsay_1: imgsay_1,
      imgsay_2: imgsay_2,
      imgsay_3: imgsay_3,
      imgsay_4: imgsay_4,
      imgsay_1pc: imgsay_1pc,
      imgsay_2pc: imgsay_2pc,
      imgsay_3pc: imgsay_3pc,
      imgsay_4pc: imgsay_4pc,    
      fixBg_Pc_1: fixBg_Pc_1,
      fixBg_Pc_2: fixBg_Pc_2,
      fixBg_Pc_2_Fg: fixBg_Pc_2_Fg,
      fixBg_Pc_3: fixBg_Pc_3,
      fixBg_Pc_4: fixBg_Pc_4,
      fixBg_Pc_4_Fg: fixBg_Pc_4_Fg,
      fixBg_Pc_4_RightHand: fixBg_Pc_4_RightHand,
      fixBg_Pc_4_LeftHand: fixBg_Pc_4_LeftHand,
      fixBg_Pc_4_Child: fixBg_Pc_4_Child,
      fixBg_1: fixBg_1,
      fixBg_2: fixBg_2,
      fixBg_2_Fg: fixBg_2_Fg,
      fixBg_3: fixBg_3,
      fixBg_4: fixBg_4,
      fixBg_4_Fg: fixBg_4_Fg,
      fixBg_4_Child: fixBg_4_Child,
      fixBg_4_RightHand: fixBg_4_RightHand,
      fixBg_4_LeftHand: fixBg_4_LeftHand,
      endingBg: endingBg,
      endingBgPc: endingBgPc,
      childFade: false,
      letShake: false,
      childPostion: null,
      handMove: 0,
      takeChildShow: 0,
      scaleUpGo: false,
      section_4_pos: 50,
    }
  },
  methods: {
    handle_scroll: function () {
      const windowHeight = window.innerHeight
      if(window.pageYOffset > 10 && window.pageYOffset < this.$refs.title.offsetTop) {
        this.childFade = true
        this.childPosition = 80
      }
      if(window.pageYOffset > this.$refs.title.offsetTop) {
        this.ChildImg = ChildEgg
        this.childFade = false
        this.letShake = true
      }
      if(window.pageYOffset > this.$refs.section_3.$el.offsetTop - windowHeight * 0.2 && window.pageYOffset < this.$refs.section_3.$el.offsetTop + windowHeight * 2) {
        if((window.pageYOffset - (this.$refs.section_3.$el.offsetTop - windowHeight * 0.2)) / windowHeight * 50 >= 100) {
          this.handMove = 100
        } else {
          this.handMove = (window.pageYOffset - (this.$refs.section_3.$el.offsetTop - windowHeight * 0.2)) / windowHeight * 50
        }
      }
      if(window.pageYOffset > this.$refs.section_4.$el.offsetTop - windowHeight * 0.9 && window.pageYOffset < this.$refs.section_4.$el.offsetTop + windowHeight * 2){
        if(window.pageYOffset < this.$refs.section_4.$el.offsetTop + windowHeight * 2) {
          this.section_4_pos =  50 - ((this.$refs.section_4.$el.offsetTop - windowHeight * 0.9) - window.pageYOffset) / ((this.$refs.section_4.$el.offsetTop - window.innerHeight * 0.9) - (this.$refs.section_4.$el.offsetTop + window.innerHeight * 0.5)) * 50
        }
        
      }
      if(window.pageYOffset > this.$refs.takeChild.offsetTop - windowHeight * 0.9 && this.scaleUpGo === false) {
        this.takeChildShow = 1
        setTimeout(()=>{
          this.scaleUpGo = true
        }, 666)
      }      
    },
    srcRWD: function(mob, pc){
        if(window.innerWidth <= 768){
            if(window.matchMedia("(orientation: landscape)").matches){
                return pc
            }
            else{
                return mob
            }
        }
        else{
            return pc
        }
    }     
  },
  beforeMount() {
   document.querySelector('meta[name="description"]').content = this.metaDes
   document.querySelector('meta[property="og:description"]').content = this.metaDes
  },
  mounted: function() {
    window.scrollTo(0, 0)
    setTimeout(() => {
      FB.XFBML.parse();
    }, 666)
    window.addEventListener('scroll', this.handle_scroll)
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.handle_scroll)    
  }
}
</script>

<style lang="scss" scoped>
.solution{
  margin-top: 46px;
  position: relative;
  width: 100%;
  height: 100vh;
}
.contentLayer{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.frontLayer{
  position: relative;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
}
.backLayer{
  position: absolute;
  background-color: #000;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
}
.titleImg{
  position: absolute;
  top: 70vh;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeUp 1500ms ease-out;
  animation-fill-mode: both;  
}
.introduction{
  padding: 0 15px;
  background-color: #000;
  color: #fff; 
}
.childDrop{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: dropStart 1500ms ease-out 222ms;
  animation-fill-mode: both;
  img{
    width: 120px;
    height: 120px;
    opacity: 1;
    transition: opacity 888ms ease-out;    
  }
}
.TopFg{
  width: 100%;
  height: auto;
}
.ChildFade{
  opacity: 0 !important;
}
.branket{
  position: absolute;
  z-index: 7;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 700ms ease;
  background-color: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;  
}
.bigHand{
  // position: absolute;
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;    
}
.takeChild{
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  opacity: 0;
  transition: opacity 1645ms ease-in-out;
}
.scaleUp{
  animation: scaleUp 1645ms ease-in-out;
  animation-fill-mode: both;
}
.holdSection{
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.section_4_Fg{
  // position: absolute;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto; 
}
.leftHand{
  position: fixed;
  // position: absolute;
  z-index: 8;
  bottom: 0;
  left: 10%;
  width: 30%;
  height: auto;
}
.rightHand{
  position: fixed;
  // position: absolute;
  z-index: 8;
  bottom: 0;
  right: 10%;
  width: 30%;
  height: auto;
}
.nestedChild{
  position: fixed;
  // position: absolute;
  z-index: 8;
  top: -50%;
  left: 0;
  width: 100%;
  img{
    display: block;
    margin: auto;
    width: 25%;
    height: auto;
  }
}
.videoWrapper{
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.shake{
  animation: shake 10s infinite ease-in;
  transform-origin: 50% 50%;
}
@media screen and (min-width: 1024px) {

  .childDrop{
    img{
      width: 30vh;
      height: 30vh;
    }
  }
  .titleImg{
    img{
      width: 33%;
    }
  }
  .rightHand{
    right: 35%;
    width: 12.5%;
    max-width: 450px;
  }
  .leftHand{
    left: 35%;
    width: 12.5%;
    max-width: 500px
  }
  .nestedChild{
    img{
      width: 10%;
      max-width: 120px;
    }
  }
  .takeChild{
    width: 70%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1025px){
  .solution{
    margin-top: 50px;
  }
  .letSolve{
    padding: 0 40px;
  }  
}
@keyframes dropStart{
  from{
    transform: translate(0, 0);
    opacity: 0;
  }
  to{
    transform: translate(0, 35vh);
    opacity: 1
  }
}
@keyframes fadeUp {
  from {
    transform: translate(0, 20px);
    opacity: 0;
  }
  to{
    transform: translate(0, 0);
    opacity: 1;
  }
}
@keyframes scaleUp {
  from {
    // transform : scale(1);
    transform: translate(0, 0);
  }
  to{
    transform: translate(0, -20px);
  }
}
@keyframes shake{
  0% {
    transform:  rotate(0deg) ;
  }
  27% {
    transform:  rotate(6deg) ;
  }
  43% {
    transform:  rotate(-2deg) ;
  }
  65% {
    transform:  rotate(4deg) ;
  }
  83% {
    transform:  rotate(-2deg) ;
  }
  100% {
    transform:  rotate(0deg) ;
  }
}
</style>