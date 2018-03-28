<template>
	<div class='index' :style="{height: windowHeight + 'px'}">
	    <HeadBar MenuSlideFrom='right' background-color="#000" color="#b58c8c">
	      <a href="https://udn.com/upf/newmedia/2018_data/childabuse/page/mental/index.html" target="_blank">壞掉的大人</a>
	      <a href="https://udn.com/upf/newmedia/2018_data/childabuse/page/solution/index.html" target="_blank">兒虐漏洞怎麼補</a>
	      <a href="https://udn.com/upf/newmedia/2018_data/childabuse/page/help/index.html" target="_blank">我想幫孩子</a>
	    </HeadBar>		
		<FlashChair></FlashChair>
		<div class="videoLayer">
	    	<EmbededVideo :poster='Poster' :poster-web='PosterPC' :src="indexVideo" :srcWeb="indexVideoPc" customControl='yes' controlColor="#e50012"></EmbededVideo>  	
		</div>
		<Content class="contentLayer" background-color='#000' style="color: #fff">
			<p>「為什麼你們的命會這樣？｣照顧受虐兒的寄養家庭，媽媽每講一句就哭。</p>
			<p><br></p>
			<p>從去年的雲林殺子案、邱姓女童案，到近期的保母虐嬰案，一樁樁兒虐案件讓社會心碎，但受虐兒的數字從沒減少過。平均每3天就有一個孩子來不及長大，每天都有孩子被打到進加護病房。</p>
			<p><br></p>
			<p>心寒的是，多數的施虐者不是外人，6成以上都是親生爸媽。為何爸媽會成為這些孩子的噩夢？每天在兒童加護病房看診的醫師呂立告訴我們，台灣對暴力的容忍度太高了，讓爸媽以愛為名施虐。養一個孩子需要全村的力量，對孩子施虐也來自全村的姑息，我們還能沉默下去嗎。</p>
		</Content>
		<ClipImg class="contentLayer"></ClipImg>
		<Content class="contentLayer" background-color='#fff'>
			<Share href='https://udn.com/upf/newmedia/2018_data/childabuse/index.html'></Share>
			<p><br/></p>
			<h2>佈滿青紫傷痕的孩子</h2>
			<p><br></p>
			<p>阿邦（化名）今年21歲，在9歲來到安置機構之前，他的童年幾乎都在流浪。</p>
			<p><br></p>
			<p>阿邦剛出生時就因父母無力撫養被送到寄養家庭，前後轉換過兩個寄養家庭，5歲時和父母一起生活，但返回原生家庭後，反而是噩夢的開始。</p>
			<p><br></p>
			<p>「出門買個糖果回家就會被打。」在阿邦記憶中，媽媽不論清醒或酒醉時都會打人，打人的工具是一隻細掃把，細但堅硬的掃把柄就這樣朝他身上揮來，他不記得自己受過多重的傷，但直到現在，他都記得那個痛，想忘都忘不了。</p>
			<p><br></p>
		</Content>
		<ClipImgTop class="contentLayer"></ClipImgTop>
<!-- 		<ClipImg class="contentLayer" style='transform: rotateX(180deg)'></ClipImg> -->
		<BlackCandy></BlackCandy>
		<ClipImg class="contentLayer"></ClipImg>
		<Content class="contentLayer" background-color="#fff">
			<p>社工說，5歲的阿邦被媽媽打到頭部、全身嚴重瘀青，青一塊紫一塊，新傷舊傷全混在一起。若社工未及時將孩子從家中帶出，可能哪天就變成社會新聞頭條。</p>
			<p><br></p>
			<p>年幼的阿邦曾想過母親是不是討厭他，才會打得這麼重；又或者是他真的很不乖，才會動不動就被打，「為什麼其他同學都可以住在家裡，我不行？」不信任人、懷疑自我、覺得人生不公平，種種情緒讓他像隻刺蝟，剛到安置機構時常與其他院童、老師爆發衝突。</p>
			<p><br></p>
			<p>被媽媽毒打的陰影更是難以抹去，每當返家日到來、與媽媽會面時，阿邦還是不自主的感到害怕，擔心「媽媽會不會再打我？」</p>
			<p><br></p>
			<Quote text='純粹感謝她把我生下來，中間的事情就沒什麼好說的' color='#720101'></Quote>
			<p><br/></p>
			<p>他低著頭說，現在雖然可以和媽媽正常相處，但內心深處還沒有辦法真正放下那段過去，他不知道會不會有真正放下的一天，「或許會有，但還沒到。」</p>
			<p><br/></p>
			<ColumnOne imgsay="有段時間阿邦很怕人家問他「家在哪？」「爸爸媽媽呢？」只能笑而帶過。" :img1="imgsay_1" :imgweb1="imgsay_1PC"></ColumnOne>
			<p><br/></p>
			<h2>被禁錮在家中的男孩</h2>
			<p><br/></p>
			<p>在陽陽（化名）的記憶中，小學六年級以前爸爸像天使，會帶他去釣魚、陪他到處玩。但小學六年級後一切全變了，天使般的爸爸變成噩夢般的存在。</p>
			<p><br/></p>
			<p>陽陽到現在還是搞不清楚，到底是什麼改變了爸爸，只知道爸爸當時一直找不到工作，失業讓全家的經濟捉襟見肘，爸爸愈來愈暴躁，覺得身邊的每個人都會害他。</p>
			<p><br/></p>
			<Quote text="那時候覺得爸爸很奇怪，完全變了一個人" color="#720101"></Quote>
			<p><br/></p>
			<p>陽陽12歲那年，整整一年時間都被爸爸要求待在家中，只要偷跑出門，回來就是一陣毒打，寶特瓶、石頭直接朝陽陽砸來。</p>
			<p><br/></p>
			<p>陽陽家門口的空地總是堆滿寶特瓶，因為父親不肯讓自來水公司的人踏進家門，家裡沒有水，只能用寶特瓶去外面提水擦洗身體，那一年他渾身髒兮兮。吃飯也有問題，他曾經天天只吃後院種的楊桃。</p>
			<p><br/></p>
			<p>待在家的這一年，陽陽唯一的說話對象是家中養的鴿子、野貓、桌椅，還有以愛和保護為名，卻關閉他童年的爸爸。</p>
		</Content>
		<ClipImgTop class="contentLayer"></ClipImgTop>
		<Dove></Dove>
		<ClipImg class="contentLayer"></ClipImg>		
		<Content class="contentLayer" background-color="#fff">
			<p>那一年的軟禁，對陽陽的人生產生深遠影響。他不習慣與人接觸，想說話時不會開口叫人，只會點點別人的肩膀，來表達「我想和你說話」，受過不少人際挫折。我們見到陽陽這天，他已經好了許多，表達或許仍有些凌亂，但很努力想與人親近，拿著自己的小箱子，想表演他最喜歡的魔術給大家看。</p>
			<p><br/></p>
			<p>陽陽花了一些時間，才真正擺脫父親的糾纏。受不了父親打罵、疏忽照顧的他，國中時忍不住和父親大吵一架，帶著肚子上被父親拿竹棍猛戳的傷痕衝出家門，跑到學校向老師求救，由社工介入安置。</p>
			<p><br/></p>
			<p>安置後父親曾來找過陽陽，向社工叫囂「孩子是我的，你們憑什麼帶走？」想要強行帶走陽陽，靠著替代役男、警衛才勉強將他拉開。4年前，陽陽父親卻突然人間蒸發。</p>
			<p><br></p>
			<ColumnOne imgsay="封閉害羞的「陽陽」藉由魔術表演建立自信心，逐漸走出陰暗。" :img1="imgsay_3" :imgweb1="imgsay_3PC"></ColumnOne>
			<p><br/></p>
			<p><br/></p>
			<h2>愛恨都難 孩子心裡難自處</h2>
			<p><br/></p>
			<p>我們問陽陽，若有天父親出現，希望接他回去一起住，他願意嗎？陽陽連問題都沒聽完，便急忙搖頭「不要、不用」，他會想聽到父親的消息，但希望不要再碰面，深怕噩夢重演。</p>
			<p><br/></p>
			<p>陽陽希望自己有一天能真正遺忘這段過去，但他知道很難，對他來說，這是他原生家庭回憶的一部分，父親帶給他傷痛的記憶，但也給了他一小段開心的童年，「對爸爸就是又愛又恨啊，沒辦法。」</p>
			<p><br></p>
		</Content>
		<SectionFixedBg text="第一層傷：不是外人才打得兇" menu-text="父母打最兇" :bg="Cover_3" :bgweb="Cover_3PC" position="center"></SectionFixedBg>
		<Content class="contentLayer" background-color='#fff'>
			<p>阿邦、陽陽對父母複雜的情感，是許多孩子一生都面臨的難題。根據衛福部統計，最大宗的施虐者不是新聞中常看到的同居人、保母，<b>而是與孩子血緣連結最深的親生父母，比率近年來都在6到8成不等，顛覆「外人打得兇」迷思。</b></p>
			<p><br></p>
			<p>「會施虐的家庭，不一定是青面獠牙的形象。」台大社工系副教授劉淑瓊直言，大部份的施虐者就是「一般人」，當父母無力、疲憊應付小孩的調皮，有時氣急攻心，選擇用暴力來對待孩子，打下去不知輕重，一條生命可能就這樣消逝。</p>
			<p><br></p>
			<p>台大醫院兒童加護病房主治醫師呂立則觀察，兒虐案件增加跟整體社會環境也有關，<b>「20年前台灣很有錢，但現在薪資凍漲，吸毒、弱勢家庭愈來愈多，台灣現在不幸福。」</b>當父母經濟遇到問題，生活、情緒壓力大，虐待就容易發生。</p>
			<p><br></p>
			<p>高社經家長的「白領虐待」則是被掩蓋住的黑數。醫師、心理諮商師發現，家長因望子成龍、對孩子有高度期許，常以辱罵、情緒勒索的方式來對待孩子，帶來的往往是看不到傷的精神傷害，卻因為擁有眾多資源，加上社會總是信任高社經父母，不易被察覺也容易被「逃脫」。</p>
			<p><br></p>
			<p>更嚴重的問題是，<b>華人社會的父母習慣將孩子當成自己的所有物，</b>去年金馬獎最佳劇情片《血觀音》裡的一句「我是為你好」，是父母暴力被忽視與包容的其中一個原因。有時連社工訪視、司法判案，都會對父母抱持同情，但誰來可憐孩子？</p>
			<p><br></p>
			<ColumnOne imgsay="「孩子是父母的所有物」，是台灣社會對父母暴力高度容忍的原因。":img1="imgsay_5" :imgweb1="imgsay_5PC"></ColumnOne>
			<p><br/></p>
			<h2>小爸媽施虐比率攀升</h2>
			<p><br/></p>
			<p>毒品家庭、小爸媽的問題也值得重視。第一線社工碰過的毒品媽媽中，生5個、7個孩子的都有，每個孩子的爸爸都不一樣；毒品父母通常經濟不穩定、作息不正常，吸毒後意識不清，一個個孩子生下來，父母卻沒辦法好好照顧他們長大。</p>
			<p><br/></p>
			<p>小爸爸、小媽媽施虐的比率也在逐年攀升。衛福部統計的施虐者中，<b>年齡未滿20歲的比率從93年的5.2％增加到105年的14％，是10年前的3倍。</b></p>
			<p><br/></p>
			<p>對小爸媽而言，孩子的到來往往在預料之外，經濟、心態不穩定是兒虐的危險因子。劉淑瓊舉例，年輕的小爸爸不小心將女方肚子搞大，心不甘情不願進入家庭，但這種不甘與憤怒，讓他與孩子的依附關係淡薄，遇到不如意時直覺認為是孩子誤了他的一生。</p>
			<p><br/></p>
			<p>更危險的是，這些毒品家庭、年輕父母很容易陷入被社會孤立的困境，成為人際「孤島」。吸毒開銷大，親朋好友因為怕被借錢、惹上麻煩，避之唯恐不及；年輕小爸媽無預警懷上孩子，許多人因此與原生家庭決裂，孤島般的處境成了暴力溫床。</p>
			<p><br></p>
		</Content>
		<SectionFixedBg text="第二層傷：進加護病房的孩子15年增5倍" menu-text="打進加護病房" :bg="Cover_2" :bgweb="Cover_2PC" position="center"></SectionFixedBg>
		<Content class="contentLayer" background-color="#fff">
			<p>2016年行政院核定《兒童權利公約》國家報告，蔡英文總統說，這代表兒童的事就是大家的事。然而，同年兒少受虐通報後的死亡人數達127人，平均每3天有一個孩子來不及長大，創歷年新高。去年前三季就有4萬多件兒少保護通報案，平均8.8分鐘就有1位疑似受虐兒。</p>
			<p><br></p>
			<p>兒少虐待的型態中，身體虐待占多數，比率歷年來都在3到4成，傷害的嚴重程度，近年更是有增無減。</p>
			<p><br></p>
			<p>林口長庚醫院的急診室，平均每天就會收治一名遭受虐待的兒少；這些孩子中，被「打」進加護病房的比率15年來上升5倍，其中有10%的孩子死亡、26％的孩子被打到重殘，未來須臥病在床或長期有人在旁照顧。</p>
			<p><br></p>
			<p>2016年開始，衛福部新增「不當管教」，身體虐待的比率看似下降，但從第一線社工、醫師的接觸經驗中，不當管教的方式多還是透過肢體暴力，實際上遭受身體虐待的人數並沒有減少，只是表面上數字下降。</p>
			<p><br></p>
			<h3>2017年受虐類型分布</h3>
			<ColumnOne imgsay="資料來源／衛福部" :img1="Chart" :imgweb1="ChartPC" style="text-align: right"></ColumnOne>
			<p><br></p>
			<p>疏忽是最容易被忽略的虐待型態。像陽陽的父親不讓他上課、正常吃飯，或第一線社工碰到家長不願意讓孩子就醫、剝奪孩子生存權利，這些都是疏忽照顧。呂立直言「沒有好好照顧孩子，就是虐待」。</p>
			<p><br></p>
			<p><b>性虐待則是近年增長幅度最為明顯的虐待型態，</b>從93年的5.9％激增到105年的17.44％。林口長庚醫院統計，進入青春期的受虐兒少中，女性比率大幅提高，多數都是在家中遭到性侵。</p>
			<p><br></p>
			<p>家扶基金會觀察，性虐待其實一直都存在，只是過去大家意識不足，對「性」的觀念較保守，父母一句「因為你不乖」或「我是因為喜歡你」，就讓孩子不敢啟齒遭受過的傷害。但現在大家認知愈來愈進步，孩子自己開口、學校察覺後通報的比率都提高。</p>
			<p><br></p>
			<p>社工感嘆，遭受過性虐待的孩子，需要很長時間復原創傷，有時候還要面對檢察官調查、親友指責的二度傷害。曾有一位從小遭父親性侵的孩子，案件曝光後卻被所有親友罵，「都是因為你去講，爸爸才被關、家才支離破碎」，年僅13歲的孩子很自責，甚至跟社工說自己不要安置，寧願留在家中。</p>
			<p><br></p>
			<p><b>另一個值得關注的虐待型態是「精神虐待」，比率雖一直都只有1成上下，不過醫師、學者都認為其中有大量黑數，</b>因為精神虐待的傷外觀看不到，不容易舉證也難以定義嚴重程度，是虐待裡的灰色地帶。</p>
			<p><br></p>
			<p>但沒有驗傷單不代表傷不存在。日本厚生勞動省2016年受理的兒虐案件中，有半數以上屬心理虐待，型態包括怒罵、羞辱、差別待遇等，是最難察覺也最棘手的處置案件。</p>
			<p><br/></p>
			<Diversion href="https://udn.com/upf/newmedia/2018_data/childabuse/page/mental.html" text="情緒勒索：壞掉的大人 長歪的小孩" :img="outlink_1"></Diversion>	
		</Content>
		<SectionFixedBg text="第三層傷：斷不了的暴力輪迴" menu-text="暴力世襲" :bg="Cover_4" :bgweb="Cover_4PC" position="center"></SectionFixedBg>
		<Content class="contentLayer" background-color="#fff">
			<p>追溯施虐者的童年，許多都是暴力的受害者。陽陽的父親失蹤後，社工曾試圖向鄰居打探消息，意外得知陽陽父親兒時也曾經遭受過虐待，曾經被鎖在房間內，甚至還曾被埋進沙堆中，遭受以「管教」為由的暴力。長大後，父親複製了祖父的行為，將陽陽關在了家中。</p>
			<p><br/></p>
			<p>也有曾遭受暴力的孩子，在親密關係中受了傷。一位受虐兒少，青春期時交了人生第一個女朋友，但沒過多久，他難過地向社工傾訴「我在我身上看到爸爸的影子」，因為他在與女友爭執時動了粗。</p>
			<p><br/></p>
			<p>衛福部每年統計施虐者的樣貌，發現<b>每年都有100到300個施虐者，兒時也曾經受過虐待，</b>長大後不自覺複製暴力，成為可怕的「暴力世襲」。</p>
			<p><br/></p>
			<p>「大家都覺得心理的傷，時間是最好的解藥，但其實不是，傷只是被壓得很下面。」劉淑瓊曾經在課堂上提過「暴力的世代傳遞」，她注意到有些學生的表情耐人尋味，也有些學生，聽到後就默默低下頭。</p>
			<p><br/></p>
			<p>劉淑瓊觀察，台灣小孩童年暴露在各種型態暴力裡的比率其實不低，都傷害了孩子對人純然的信任，成長過程中若沒有適當處理、好好被重視，長大後難再對人產生信任感，經營親密關係、養兒育女時就會遇到很大挑戰。</p>
			<p><br/></p>
			<Quote text="因為他／她的人生中沒有參考範本，被愛過，才知道怎麼愛人" color="#720101"></Quote>
			<p><br/></p>
			<p>暢銷書《情緒勒索》作者、心理諮商師周慕姿從來求助的人身上發現，在原生家庭遇過創傷的孩子，<b>長大後常會希望自己變得更好、當理想又完美的父母，</b>「但沒有得到過的要怎麼給？」當狀況不好時，壓抑許久的情緒透過錯誤的管教方式「暴衝」出來，之後又再陷入「我怎麼跟爸媽一樣」的懊悔情緒，問題不斷複製、循環。</p>
			<p><br/></p>
			<ColumnOne imgsay="沒有孩子想走上父母的後路，但若未正視創傷、沒有好的人生範本可學習，暴力就在不自覺間被複製。" :img1="imgsay_4" :imgweb1="imgsay_4PC"></ColumnOne>
			<p><br/></p>
			<h2>在孩子被弄壞前接住他／她</h2>
			<p><br/></p>
			<p>周慕姿觀察，華人社會裡的父母往往被要求完美，要替孩子存錢買房，還要成為孩子生命中的典範，但沒有人是完美的，「接受自己有時候沒有做得那麼好，但不代表自己不好」，練習療癒自己、適時尋求協助，才不會將情緒與傷痕轉嫁到孩子身上。</p>
			<p><br/></p>
			<p>政府則需要結合社區、醫療、學校、警政、司法等力量，編織出一張綿密的防護網，在父母無法構築一個正常的家時，及早介入並提供父母協助，保護孩子不要被「弄壞」。當虐待已經發生，至少在孩子支離破碎前，設法集全社會的力量，縫補孩子的碎片。</p>					
		</Content>
		<SpotChair class="contentLayer"></SpotChair>
		<Victim></Victim>
		<Content class="contentLayer" background-color="#000" style="color: #fff">
<!-- 			<p><b>希望每個人身邊，都不要再有下一個受虐的兒少。</b></p> -->
			<Diversion text="兒少保護網現在有什麼問題？如何補洞？" href="./#/solution" :img="outlink_2"></Diversion>
			<p><br></p>
			<p><br></p>
			<p>《聯合晚報》將於3月26日至30日，連續5天刊出兒虐悲歌系列報導，深入探訪每個受虐兒的故事，從他們的故事中，一環一環盤點現有制度的問題，更將眼光借鏡美、日等國，試圖為這塊兒少破網找出解方，邀請一起來關心台灣的孩子。</p>
		</Content>	
		<Content class="contentLayer" style="z-index: 20; position: relative;" background-color="#fff">
			<Share href='https://udn.com/upf/newmedia/2018_data/childabuse/index.html'></Share>
			<Logo>
		        <div class="logo">
		            <a href="https://udn.com/news/index" target="_blank"><img :src="nightlogo"></a>
		        </div>				
			</Logo>
			<p><br/></p>
			<Editor>
                <div>製作人&文字：洪欣慈、林秀姿</div>
                <div>插畫：許藹雯、黃微庭</div>
                <div>網頁設計&影音：許瑋琳</div>
                <div>攝影：高彬原</div>
                <div>網頁製作：廖克樸</div>
                <div>採訪團隊：蔡維斌、王敏旭、王慧瑛、翁禎霞、鄭維真、林敬家、李樹人、林秀姿、洪欣慈</div>
                <div>監製：林新輝、謝蕙蓮、林文義、董谷音、潘如瑩、蔡幸怡</div>
                <div>2018.03.26</div>
			</Editor>
			<p><br/></p>	
			<Question text="填寫閱讀體驗問卷" href="https://www.surveycake.com/s/KpQKN"></Question>
			<p><br/></p>
            <Relate title="延伸閱讀" 
                href1="https://udn.com/upf/newmedia/2018_data/childabuse/page/help.html" :img1="relate_1" text1="我想幫孩子" 
                href2="https://udn.com/news/story/7272/2872246" :img2="relate_2" text2="家扶公布十大兒保新聞 半數與性侵相關" 
                href3="https://udn.com/news/story/7266/2805019" :img3="relate_3" text3="兒虐6成腦傷 每4人有1人重殘" 
                href4="https://health.udn.com/health/story/5999/2769721" :img4="relate_4" text4="尋找幽靈受虐兒 漏打疫苗挖線索" > 
            </Relate>
            <FbComment href="https://udn.com/upf/newmedia/2018_data/childabuse/index.html"></FbComment>
		</Content>
		<Foot class="theFoot contentLayer" style="position: relative; z-index: 9999;width: 100%"></Foot>
	</div>
</template>

<script>
import {Cover, Content, ColumnOne, Editor, Foot, HeadBar, Logo, Quote, Question, Relate, SectionBg, SectionFixedBg, Share, FbComment} from 'udn-newmedia-vue-components'
import ClipImg from '../components/clipImg.vue'
import ClipImgTop from '../components/clipimgTop.vue'
import EmbededVideo from '../components/EmbededVideo.vue'
import Victim from '../components/victim.vue'
import SpotChair from '../components/spotchair.vue'
import FlashChair from '../components/flashchair.vue'
import BlackCandy from '../components/blackCandy.vue'
import Dove from '../components/dove.vue'
import Diversion from '../components/diversion.vue'

import relate_1 from '../assets/relation/helpkid.jpg'
import relate_2 from '../assets/relation/badinkid.jpg'
import relate_3 from '../assets/relation/braindead.jpg'
import relate_4 from '../assets/relation/ghost.jpg'

import Cover_2 from '../assets/mobile/cover_2.jpg'
import Cover_3 from '../assets/mobile/cover_3.jpg'
import Cover_4 from '../assets/mobile/cover_4.jpg'

import Cover_2PC from '../assets/web/cover_2.jpg'
import Cover_3PC from '../assets/web/cover_3.jpg'
import Cover_4PC from '../assets/web/cover_4.jpg'

import imgsay_1 from '../assets/mobile/imgsay_1.jpg'
import imgsay_2 from '../assets/mobile/imgsay_2.jpg'
import imgsay_3 from '../assets/mobile/imgsay_3.jpg'
import imgsay_4 from '../assets/mobile/imgsay_4.jpg'
import imgsay_5 from '../assets/mobile/imgsay_5.jpg'
import imgsay_1PC from '../assets/web/imgsay_1.jpg'
import imgsay_2PC from '../assets/web/imgsay_2.jpg'
import imgsay_3PC from '../assets/web/imgsay_3.jpg'
import imgsay_4PC from '../assets/web/imgsay_4.jpg'
import imgsay_5PC from '../assets/web/imgsay_5.jpg'

import outlink_1 from '../assets/outlink1.jpg'
import outlink_2 from '../assets/outlink2.jpg'

import Chart from '../assets/mobile/chartmob.svg'
import ChartPC from '../assets/web/chartweb.svg'

import Poster from '../assets/mobile/index_poster.jpg'
import PosterPC from '../assets/web/index_poster_pc.jpg'

import indexVideo from '../assets/mobile/index_mobile.mp4'
import indexVideoPc from '../assets/web/index_web.mp4' 

import nightlogo from '../assets/nightlogo.svg'

export default {

  name: 'index',
  components: {
  	BlackCandy,
  	Cover,
  	Content,
  	ClipImg,
  	ClipImgTop,
  	ColumnOne,
  	Dove,
  	Diversion,
  	Editor,
  	EmbededVideo,
  	Foot,
  	FlashChair,
  	FbComment,
  	HeadBar,
  	Logo,
  	// ParallaxData,
  	Quote,
  	Question,
  	Relate,
  	SectionBg,
  	SectionFixedBg,
  	SpotChair,
  	Share,
  	Victim
  },
  computed: {
  	windowHeight: function() {
  		return window.innerHeight
  	}
  },
  metaInfo: {
  	title: '兒虐告白 爸媽是我的噩夢'
  },
  data () {
    return {
    	nightlogo: nightlogo,
    	Cover_2: Cover_2,
    	Cover_3: Cover_3,
    	Cover_4: Cover_4,
    	Cover_2PC: Cover_2PC,
    	Cover_3PC: Cover_3PC,
    	Cover_4PC: Cover_4PC,
    	relate_1: relate_1,
    	relate_2: relate_2,
    	relate_3: relate_3,
    	relate_4: relate_4,
    	imgsay_1: imgsay_1,
    	imgsay_2: imgsay_2,
    	imgsay_3: imgsay_3,
    	imgsay_4: imgsay_4,
    	imgsay_5: imgsay_5,
    	imgsay_1PC: imgsay_1PC,
    	imgsay_2PC: imgsay_2PC,
    	imgsay_3PC: imgsay_3PC,
    	imgsay_4PC: imgsay_4PC,
    	imgsay_5PC: imgsay_5PC,
    	Poster: Poster,
    	PosterPC: PosterPC,
    	indexVideo: indexVideo,
    	indexVideoPc: indexVideoPc,
    	Chart: Chart,
    	ChartPC: ChartPC,
    	outlink_1: outlink_1,
    	outlink_2: outlink_2
    }
  },
  mounted() {
  	console.log(document.querySelector('meta[name="description"]').content)
    setTimeout(function() {
      FB.XFBML.parse();
    }, 333)
  },
}
</script>

<style lang="scss" scoped>
	.index{
		width: 100%;
		position: relative;
		z-index: 0;
		top: 0;
		left: 0;
	}
	.videoWrapper{
	  background-size: 100% 100%;
	  background-repeat: no-repeat;
	  background-position: center center;
	}	
	.contentLayer{
	  position: relative;
	  z-index: 9;
	  background-color: #fff;
	}	
	.videoLayer{
		position: relative;
		z-index: 20;
		background-color: #000;
	}
</style>