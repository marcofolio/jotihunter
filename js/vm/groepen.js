function ApplyGroepen(map) {
	
	var names = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot'];
    var colors = ['red','green','blue','#40e0d0','purple','yellow'];
    var deelgebieden = [];

    // Configure value by extrating data from KML
    /* alpha */     deelgebieden[0] = [{"lng":5.3173828125,"lat":52.298821667009},{"lng":5.4036855697632,"lat":52.246748056732},{"lng":5.393208861351,"lat":52.220353097699},{"lng":5.406896173954,"lat":52.213500459012},{"lng":5.4095542430878,"lat":52.218558695934},{"lng":5.420667976141,"lat":52.213436364595},{"lng":5.4287776350975,"lat":52.208602721745},{"lng":5.4362656921148,"lat":52.205278362599},{"lng":5.4368014633656,"lat":52.205583277099},{"lng":5.4395896196365,"lat":52.204615104697},{"lng":5.4389016330242,"lat":52.184048376728},{"lng":5.440032184124,"lat":52.17330004306},{"lng":5.438441298902,"lat":52.173016702574},{"lng":5.4402407258749,"lat":52.169574937976},{"lng":5.4462109878659,"lat":52.167769848291},{"lng":5.4550565779209,"lat":52.167017603152},{"lng":5.4728865623474,"lat":52.163903197643},{"lng":5.4731065034866,"lat":52.162948925179},{"lng":5.4723823070526,"lat":52.162889693799},{"lng":5.4726934432983,"lat":52.161876166873},{"lng":5.4754088446498,"lat":52.162172329726},{"lng":5.4790254682302,"lat":52.161652398078},{"lng":5.480346120894,"lat":52.161013992683},{"lng":5.4807655513287,"lat":52.160270271758},{"lng":5.4800204001367,"lat":52.160066239951},{"lng":5.4792323336005,"lat":52.158466861451},{"lng":5.4802311211824,"lat":52.157295263776},{"lng":5.4827319458127,"lat":52.158374714436},{"lng":5.4842457175255,"lat":52.158216747682},{"lng":5.4826404154301,"lat":52.151568471867},{"lng":5.4812067747116,"lat":52.15058101949},{"lng":5.4837746545672,"lat":52.149451182531},{"lng":5.4872866719961,"lat":52.148637320081},{"lng":5.4928800836205,"lat":52.147783941758},{"lng":5.4965565539896,"lat":52.14729141076},{"lng":5.4989455640316,"lat":52.147404565815},{"lng":5.4973724484444,"lat":52.14146250783},{"lng":5.4998705908656,"lat":52.141139046187},{"lng":5.5021541565657,"lat":52.139735705744},{"lng":5.5097682774067,"lat":52.13824589419},{"lng":5.5125115066767,"lat":52.137098458396},{"lng":5.5139672756195,"lat":52.135977334042},{"lng":5.5124035477638,"lat":52.134298064167},{"lng":5.5123847723007,"lat":52.132131383234},{"lng":5.5017015337944,"lat":52.129740667712},{"lng":5.4979705810547,"lat":52.130221455518},{"lng":5.4969352483749,"lat":52.124899569881},{"lng":5.4963277280331,"lat":52.124557050521},{"lng":5.4947331547737,"lat":52.124741484349},{"lng":5.4951341450214,"lat":52.12221203958},{"lng":5.4966864734888,"lat":52.120525663309},{"lng":5.4963934421539,"lat":52.119708801863},{"lng":5.5037480592728,"lat":52.116678378624},{"lng":5.5074897408485,"lat":52.115716505566},{"lng":5.5077981948853,"lat":52.113884936469},{"lng":5.506320297718,"lat":52.114313187782},{"lng":5.5038553476334,"lat":52.113687280629},{"lng":5.5024203658104,"lat":52.114972027924},{"lng":5.4987967014313,"lat":52.116230385535},{"lng":5.4924935102463,"lat":52.115769211477},{"lng":5.4892989993095,"lat":52.116250150031},{"lng":5.4862761497498,"lat":52.115413445371},{"lng":5.4914286732674,"lat":52.114458133449},{"lng":5.4941779375076,"lat":52.11271216566},{"lng":5.4936850816011,"lat":52.110964482256},{"lng":5.4893298447132,"lat":52.108584162343},{"lng":5.4841384291649,"lat":52.106406346587},{"lng":5.4848277568817,"lat":52.093244936547},{"lng":5.476590692997,"lat":52.090364330404},{"lng":5.4719585180283,"lat":52.089382113252},{"lng":5.4638502001762,"lat":52.083310344797},{"lng":5.4596672952175,"lat":52.082014795408},{"lng":5.4602795094252,"lat":52.080997779274},{"lng":5.4593467712402,"lat":52.080349975716},{"lng":5.4917907714844,"lat":52.000524113477},{"lng":5.6658554077148,"lat":52.015317436634},{"lng":5.8515930175781,"lat":52.021233396705},{"lng":5.9291839599609,"lat":52.467305322033},{"lng":5.9118461608887,"lat":52.496368550507},{"lng":5.8780288696289,"lat":52.521234766556},{"lng":5.8606910705566,"lat":52.516638711004},{"lng":5.8561849594116,"lat":52.545878132539},{"lng":5.8420658111572,"lat":52.560907969366},{"lng":5.8073472976685,"lat":52.581774203121},{"lng":5.7588958740234,"lat":52.581774203121},{"lng":5.3173828125,"lat":52.298821667009}];
    /* bravo */     deelgebieden[1] = [{"lng":5.9291839599609,"lat":52.467305322033},{"lng":5.9355998039246,"lat":52.477722724204},{"lng":5.9571218490601,"lat":52.483956301052},{"lng":5.9658336639404,"lat":52.47676866072},{"lng":6.0217094421387,"lat":52.509639248363},{"lng":6.0445189476013,"lat":52.504062386025},{"lng":6.0588043928146,"lat":52.49775654482},{"lng":6.0669100284576,"lat":52.483923632616},{"lng":6.0879278182983,"lat":52.477997176991},{"lng":6.101907491684,"lat":52.467468725669},{"lng":6.1021542549133,"lat":52.4448021179},{"lng":6.1133015155792,"lat":52.43850413057},{"lng":6.1186122894287,"lat":52.432833209816},{"lng":6.1160038411617,"lat":52.430502001192},{"lng":6.1183735728264,"lat":52.427856653713},{"lng":6.1173268407583,"lat":52.424702063523},{"lng":6.1133618652821,"lat":52.419139376142},{"lng":6.114529967308,"lat":52.414399312963},{"lng":6.1109626293182,"lat":52.407792639093},{"lng":6.1302638053894,"lat":52.399813573205},{"lng":6.1256048083305,"lat":52.393707205903},{"lng":6.1255069077015,"lat":52.38405329771},{"lng":6.1219757795334,"lat":52.380475208925},{"lng":6.1178317666054,"lat":52.378662723873},{"lng":6.1027195304632,"lat":52.375380168285},{"lng":6.080397516489,"lat":52.371678148381},{"lng":6.0776388645172,"lat":52.368885155263},{"lng":6.0775288939476,"lat":52.36392758747},{"lng":6.0803338140249,"lat":52.361849485389},{"lng":6.0910351574421,"lat":52.360819611388},{"lng":6.0945850610733,"lat":52.35687269902},{"lng":6.0896377265453,"lat":52.354183617004},{"lng":6.0785105824471,"lat":52.35296229545},{"lng":6.0759081691504,"lat":52.350647753474},{"lng":6.0758832748979,"lat":52.345344707931},{"lng":6.0750859044492,"lat":52.344550663283},{"lng":6.0757905710489,"lat":52.344464483464},{"lng":6.0753794386983,"lat":52.341756467211},{"lng":6.0758909862489,"lat":52.34176204902},{"lng":6.0766600258648,"lat":52.339879812924},{"lng":6.0754978749901,"lat":52.334824597248},{"lng":6.0738636553288,"lat":52.334463052951},{"lng":6.0754454880953,"lat":52.333419428696},{"lng":6.0744461975992,"lat":52.33272581674},{"lng":6.0731035843492,"lat":52.328832639678},{"lng":6.0710160713643,"lat":52.322990899595},{"lng":6.0704872990027,"lat":52.322745323171},{"lng":6.0709884949028,"lat":52.322080054477},{"lng":6.0690726432949,"lat":52.321956123992},{"lng":6.0675353603438,"lat":52.321658079743},{"lng":6.0665130615234,"lat":52.320730479419},{"lng":6.0661911754869,"lat":52.319453886063},{"lng":6.0663842735812,"lat":52.317862457324},{"lng":6.07183448039,"lat":52.317093000096},{"lng":6.073379390873,"lat":52.317818854678},{"lng":6.0795591585338,"lat":52.317600302815},{"lng":6.0799400112592,"lat":52.317228690437},{"lng":6.0798729455564,"lat":52.316177159473},{"lng":6.0808358481154,"lat":52.311977300134},{"lng":6.0848591197282,"lat":52.311758719424},{"lng":6.0830459045246,"lat":52.308470295897},{"lng":6.0832148732152,"lat":52.303134751769},{"lng":6.0840704874136,"lat":52.303257229382},{"lng":6.0841938480735,"lat":52.301612732392},{"lng":6.0864334716462,"lat":52.30200531116},{"lng":6.0880722803995,"lat":52.300455900911},{"lng":6.0909207444638,"lat":52.300086361474},{"lng":6.0989351011813,"lat":52.300292057362},{"lng":6.0988384578377,"lat":52.301285053249},{"lng":6.1014025658369,"lat":52.301490743568},{"lng":6.1019496945664,"lat":52.299828714879},{"lng":6.1042134370655,"lat":52.297904173232},{"lng":6.1051038885489,"lat":52.29513965915},{"lng":6.10556518659,"lat":52.292873689526},{"lng":6.1105003673583,"lat":52.289404547233},{"lng":6.1117448285222,"lat":52.287195222276},{"lng":6.1115729995072,"lat":52.279756917492},{"lng":6.1131822410971,"lat":52.277376439314},{"lng":6.1166797578335,"lat":52.275521004345},{"lng":6.240961253643,"lat":52.263687554905},{"lng":6.2701410055161,"lat":52.249470765781},{"lng":6.2709979712963,"lat":52.225854984811},{"lng":6.2938275933266,"lat":52.231885163789},{"lng":6.2981177866459,"lat":52.225087702652},{"lng":6.3381135463715,"lat":52.227543123183},{"lng":6.3499554991722,"lat":52.241704527605},{"lng":6.3817101716995,"lat":52.246613394891},{"lng":6.416554749012,"lat":52.242693242442},{"lng":6.427366733551,"lat":52.225315259879},{"lng":6.4399811625481,"lat":52.216608105553},{"lng":6.4546555280685,"lat":52.202218417418},{"lng":6.4707541465759,"lat":52.200124086907},{"lng":6.4259719848633,"lat":52.147816036321},{"lng":6.108226776123,"lat":52.044467094924},{"lng":6.0102081298828,"lat":52.006970376876},{"lng":5.9446334838867,"lat":51.985884478059},{"lng":5.9347200393677,"lat":52.004936205492},{"lng":5.8961391448975,"lat":52.011989365279},{"lng":5.8515930175781,"lat":52.021233396705},{"lng":5.9291839599609,"lat":52.467305322033}];
    /* charlie */   deelgebieden[2] = [{"lng":6.4259719848633,"lat":52.147816036321},{"lng":6.4707541465759,"lat":52.200124086907},{"lng":6.4728516340256,"lat":52.186677910138},{"lng":6.494175195694,"lat":52.177438500146},{"lng":6.5142971277237,"lat":52.181356191757},{"lng":6.5266942977905,"lat":52.179905600587},{"lng":6.5549218654633,"lat":52.177004276306},{"lng":6.5891575813293,"lat":52.18262912054},{"lng":6.606211066246,"lat":52.172770371715},{"lng":6.6027530282736,"lat":52.169938908227},{"lng":6.6029184870422,"lat":52.169059925265},{"lng":6.604199744761,"lat":52.167391259585},{"lng":6.607191413641,"lat":52.164580225095},{"lng":6.6092875599861,"lat":52.165234209025},{"lng":6.6120207309723,"lat":52.16301473773},{"lng":6.6145734395832,"lat":52.164231789638},{"lng":6.6186281852424,"lat":52.166001599611},{"lng":6.6215671319515,"lat":52.168245136042},{"lng":6.6232511820272,"lat":52.168129746205},{"lng":6.6251927241683,"lat":52.168804010363},{"lng":6.6264357604086,"lat":52.171527284791},{"lng":6.6252755373716,"lat":52.172197513542},{"lng":6.6255269944668,"lat":52.172457007282},{"lng":6.6292914748192,"lat":52.172081131547},{"lng":6.630184315145,"lat":52.173470910072},{"lng":6.635239943862,"lat":52.171991891437},{"lng":6.6402013599873,"lat":52.167875548201},{"lng":6.6448885202408,"lat":52.174145530214},{"lng":6.6655710339546,"lat":52.167484827435},{"lng":6.6653122007847,"lat":52.166852263806},{"lng":6.6713190078735,"lat":52.16574587277},{"lng":6.6733065247536,"lat":52.163602110437},{"lng":6.6725045442581,"lat":52.161431918899},{"lng":6.6736337542534,"lat":52.161446727237},{"lng":6.6739046573639,"lat":52.158670900589},{"lng":6.6705840826035,"lat":52.15638363414},{"lng":6.6736015677452,"lat":52.154976660063},{"lng":6.6728787124157,"lat":52.152851304371},{"lng":6.6736330837011,"lat":52.152051904108},{"lng":6.6728086397052,"lat":52.150519920155},{"lng":6.6713833808899,"lat":52.1503045289},{"lng":6.6736096143723,"lat":52.148352588149},{"lng":6.6743338108063,"lat":52.143319280367},{"lng":6.6720780730247,"lat":52.138866517877},{"lng":6.6665607690811,"lat":52.134834778872},{"lng":6.6627359390259,"lat":52.129826287838},{"lng":6.6767022013664,"lat":52.12607037339},{"lng":6.697878241539,"lat":52.123368092698},{"lng":6.7161977291107,"lat":52.118173852363},{"lng":6.7600464820862,"lat":52.119379418013},{"lng":6.7550012469292,"lat":52.095457999028},{"lng":6.7498775571585,"lat":52.095592707216},{"lng":6.7437238991261,"lat":52.093618182257},{"lng":6.7452819272876,"lat":52.089994147493},{"lng":6.750959828496,"lat":52.087846531621},{"lng":6.7496126890182,"lat":52.084605856579},{"lng":6.7347827553749,"lat":52.074384136644},{"lng":6.7132915556431,"lat":52.073282042378},{"lng":6.6948902606964,"lat":52.06985853493},{"lng":6.6962823271751,"lat":52.06815533906},{"lng":6.6899402439594,"lat":52.056749837412},{"lng":6.6871125251055,"lat":52.056535023584},{"lng":6.6865569725633,"lat":52.05262758181},{"lng":6.6887480020523,"lat":52.052520165114},{"lng":6.6884422302246,"lat":52.039821321105},{"lng":6.7136549949646,"lat":52.040098497293},{"lng":6.7536413669586,"lat":52.028198172691},{"lng":6.7641073465347,"lat":52.022669351597},{"lng":6.7663335800171,"lat":52.019041413452},{"lng":6.7728513479233,"lat":52.018371252554},{"lng":6.8116414546967,"lat":51.998258454124},{"lng":6.8078541755676,"lat":51.99490929573},{"lng":6.8265545368195,"lat":51.993303988981},{"lng":6.8301567435265,"lat":51.986348646465},{"lng":6.8298979103565,"lat":51.97620935365},{"lng":6.8330723047256,"lat":51.972413239813},{"lng":6.8286037445068,"lat":51.963995377183},{"lng":6.8138301372528,"lat":51.963922660057},{"lng":6.8121939897537,"lat":51.962035278827},{"lng":6.7992281913757,"lat":51.958666882639},{"lng":6.7972433567047,"lat":51.943094265039},{"lng":6.7943438887596,"lat":51.934940454991},{"lng":6.7856079339981,"lat":51.93144267611},{"lng":6.7880487442017,"lat":51.929315760953},{"lng":6.7701423168182,"lat":51.91590361988},{"lng":6.764163672924,"lat":51.91546188403},{"lng":6.754065155983,"lat":51.913114158779},{"lng":6.7537808418274,"lat":51.910324524386},{"lng":6.751007437706,"lat":51.907375861222},{"lng":6.7369043827057,"lat":51.904638825542},{"lng":6.7323875427246,"lat":51.898740559021},{"lng":6.7223024368286,"lat":51.896436648659},{"lng":6.702926158905,"lat":51.906300262499},{"lng":6.7040526866913,"lat":51.909536909404},{"lng":6.6998094320297,"lat":51.909248996278},{"lng":6.6955661773682,"lat":51.91573817625},{"lng":6.6839361190796,"lat":51.917882278445},{"lng":6.6372656822205,"lat":51.904340951862},{"lng":6.6338431835175,"lat":51.900852373071},{"lng":6.6264671087265,"lat":51.901544152639},{"lng":6.6221809387207,"lat":51.900964912099},{"lng":6.5843081474304,"lat":51.893669151874},{"lng":6.5684616565704,"lat":51.888537576458},{"lng":6.5605115890503,"lat":51.882345799094},{"lng":6.5549111366272,"lat":51.882253081508},{"lng":6.5517139434814,"lat":51.886398695252},{"lng":6.5286898612976,"lat":51.876451229355},{"lng":6.5248167514801,"lat":51.873861348187},{"lng":6.515793800354,"lat":51.873179078453},{"lng":6.5020394325256,"lat":51.86778679619},{"lng":6.500655412674,"lat":51.862652265693},{"lng":6.4822822809219,"lat":51.857116254038},{"lng":6.4746406674385,"lat":51.856150446734},{"lng":6.4735221862793,"lat":51.853912278431},{"lng":6.4615702629089,"lat":51.855940053714},{"lng":6.4513349533081,"lat":51.865388546502},{"lng":6.4325165748596,"lat":51.859889314505},{"lng":6.4122927188873,"lat":51.871344185193},{"lng":6.4021807909012,"lat":51.869227672008},{"lng":6.3913822174072,"lat":51.873470534752},{"lng":6.3875412940979,"lat":51.861744552245},{"lng":6.4005553722382,"lat":51.856092464504},{"lng":6.4091062545776,"lat":51.854044815554},{"lng":6.4014887809753,"lat":51.843798544729},{"lng":6.4081513881683,"lat":51.836128884499},{"lng":6.4027279615402,"lat":51.836642666612},{"lng":6.4079475402832,"lat":51.827821374272},{"lng":6.4011253416538,"lat":51.826898867649},{"lng":6.392243206501,"lat":51.832023389112},{"lng":6.380678191781,"lat":51.835619654346},{"lng":6.3684265315533,"lat":51.833699941627},{"lng":6.3617759943008,"lat":51.835376431728},{"lng":6.3596329092979,"lat":51.846471349612},{"lng":6.346846818924,"lat":51.850777661681},{"lng":6.3253945112228,"lat":51.85196725125},{"lng":6.3063454627991,"lat":51.849127426872},{"lng":6.2986314296722,"lat":51.868257156129},{"lng":6.2837076187134,"lat":51.872119221443},{"lng":6.2782479822636,"lat":51.874668632136},{"lng":6.2700417637825,"lat":51.874674427969},{"lng":6.2615257501602,"lat":51.868114723709},{"lng":6.2458670139313,"lat":51.870045803938},{"lng":6.2412133812904,"lat":51.86883847447},{"lng":6.2324398756027,"lat":51.870174981303},{"lng":6.2145495414734,"lat":51.867760296892},{"lng":6.1983825266361,"lat":51.873264362736},{"lng":6.1835888028145,"lat":51.882370634129},{"lng":6.1818104982376,"lat":51.885746415561},{"lng":6.1913618445396,"lat":51.887426761539},{"lng":6.1887560784817,"lat":51.888902599809},{"lng":6.1913001537323,"lat":51.8918615799},{"lng":6.1796513199806,"lat":51.895448512973},{"lng":6.1693757772446,"lat":51.901577251873},{"lng":6.1654517054558,"lat":51.898278793351},{"lng":6.1584377288818,"lat":51.905783965962},{"lng":6.1249852180481,"lat":51.898568431871},{"lng":6.1179953813553,"lat":51.901795706204},{"lng":6.1147820949554,"lat":51.898244036603},{"lng":6.1124271154404,"lat":51.899141083107},{"lng":6.1098763346672,"lat":51.895140647163},{"lng":6.1028623580933,"lat":51.893046772662},{"lng":6.1055780947208,"lat":51.891602521733},{"lng":6.1161902546883,"lat":51.892700818787},{"lng":6.1223083734512,"lat":51.890447915255},{"lng":6.1376345157623,"lat":51.885729860116},{"lng":6.1435809731483,"lat":51.876005793663},{"lng":6.1447209119797,"lat":51.86945953277},{"lng":6.1672568321228,"lat":51.861665043625},{"lng":6.1639335751534,"lat":51.859755138094},{"lng":6.1637002229691,"lat":51.852755875469},{"lng":6.1680400371552,"lat":51.84129958546},{"lng":6.1011403799057,"lat":51.850628546564},{"lng":6.0631656646729,"lat":51.865574051041},{"lng":6.0562133789062,"lat":51.885921902906},{"lng":6.0497760772705,"lat":51.913938110162},{"lng":6.0416221618652,"lat":51.942148492442},{"lng":6.0102081298828,"lat":52.006970376876},{"lng":6.108226776123,"lat":52.044467094924},{"lng":6.4259719848633,"lat":52.147816036321}];
    /* delta */     deelgebieden[3] = [{"lng":5.8505630493164,"lat":51.89026582407},{"lng":5.8531379699707,"lat":51.966057850188},{"lng":5.8706903457642,"lat":51.97297173071},{"lng":5.9253215789795,"lat":51.984642267058},{"lng":5.9446334838867,"lat":51.985884478059},{"lng":6.0102081298828,"lat":52.006970376876},{"lng":6.0416221618652,"lat":51.942148492442},{"lng":6.0497760772705,"lat":51.913938110162},{"lng":6.0562133789062,"lat":51.885921902906},{"lng":6.0631656646729,"lat":51.865574051041},{"lng":6.0598263144493,"lat":51.857586725558},{"lng":6.0506504774094,"lat":51.857020171221},{"lng":6.0553014278412,"lat":51.852494106777},{"lng":6.0323309898376,"lat":51.842380054367},{"lng":6.0294637084007,"lat":51.84555171054},{"lng":6.0176700353622,"lat":51.841511704101},{"lng":6.0046747326851,"lat":51.83344054831},{"lng":5.9865295886993,"lat":51.830672488244},{"lng":5.962700843811,"lat":51.836785198676},{"lng":5.9450840950012,"lat":51.8237631985},{"lng":5.9577333927155,"lat":51.817038553528},{"lng":5.9470769762993,"lat":51.816365370588},{"lng":5.947750210762,"lat":51.811022660694},{"lng":5.96405133605,"lat":51.806971263847},{"lng":5.9789791703224,"lat":51.797824016691},{"lng":5.9717248007655,"lat":51.789697332897},{"lng":5.9747701138258,"lat":51.785179847797},{"lng":5.9897871315479,"lat":51.783153033607},{"lng":5.9818890318274,"lat":51.773669436454},{"lng":5.992187038064,"lat":51.770132958045},{"lng":5.9908129088581,"lat":51.76613370239},{"lng":5.9743325784802,"lat":51.759584117168},{"lng":5.955792311579,"lat":51.752289703966},{"lng":5.9520149230957,"lat":51.744356390187},{"lng":5.943421125412,"lat":51.740974983081},{"lng":5.9331107139587,"lat":51.741845271177},{"lng":5.9324133396149,"lat":51.748773760806},{"lng":5.9142065048218,"lat":51.752088165767},{"lng":5.9024906158447,"lat":51.76895531521},{"lng":5.8924269676208,"lat":51.779032753222},{"lng":5.8682870864868,"lat":51.77572696427},{"lng":5.8661198616028,"lat":51.757441179942},{"lng":5.8451235294342,"lat":51.7592408722},{"lng":5.8200073242188,"lat":51.757640411398},{"lng":5.804386138916,"lat":51.813443706414},{"lng":5.8367443084717,"lat":51.849644374405},{"lng":5.8505630493164,"lat":51.89026582407}];
    /* echo */      deelgebieden[4] = [{"lng":5.8505630493164,"lat":51.89026582407},{"lng":5.8367443084717,"lat":51.849644374405},{"lng":5.804386138916,"lat":51.813443706414},{"lng":5.8200073242188,"lat":51.757640411398},{"lng":5.7766628265381,"lat":51.752008463491},{"lng":5.753960609436,"lat":51.755090182378},{"lng":5.7437038421631,"lat":51.760137371097},{"lng":5.7320308685303,"lat":51.772487321682},{"lng":5.7179546356201,"lat":51.775687134011},{"lng":5.7076549530029,"lat":51.775587558209},{"lng":5.7013034820557,"lat":51.77835568364},{"lng":5.6973230838776,"lat":51.784515314987},{"lng":5.6893944740295,"lat":51.79046174733},{"lng":5.6708228588104,"lat":51.792585283192},{"lng":5.6632375717163,"lat":51.794602549651},{"lng":5.6563550233841,"lat":51.7985306517},{"lng":5.6513607501984,"lat":51.803732206156},{"lng":5.6459373235703,"lat":51.814027391129},{"lng":5.6401705741882,"lat":51.818696596697},{"lng":5.6314118206501,"lat":51.819843926852},{"lng":5.6178465485573,"lat":51.819930141232},{"lng":5.6030756235123,"lat":51.826468689637},{"lng":5.5939735472202,"lat":51.829207170815},{"lng":5.5838415026665,"lat":51.82961162971},{"lng":5.5730228126049,"lat":51.827576037428},{"lng":5.5618607997894,"lat":51.82851096257},{"lng":5.5524368584156,"lat":51.825613294564},{"lng":5.5478194355965,"lat":51.819320005145},{"lng":5.5383954942226,"lat":51.816103390272},{"lng":5.5303448438644,"lat":51.818192558028},{"lng":5.5180884897709,"lat":51.818371625043},{"lng":5.5099520087242,"lat":51.823431632037},{"lng":5.4971122741699,"lat":51.830791833265},{"lng":5.4853749275208,"lat":51.829359672136},{"lng":5.4736697673798,"lat":51.813894736176},{"lng":5.4633378982544,"lat":51.810525169439},{"lng":5.4494762420654,"lat":51.809994506046},{"lng":5.4358050227165,"lat":51.809553387346},{"lng":5.4259103536606,"lat":51.81208395702},{"lng":5.4191055893898,"lat":51.817161250813},{"lng":5.4143607616425,"lat":51.821813552684},{"lng":5.4060244560242,"lat":51.82280828048},{"lng":5.3997105360031,"lat":51.81991024562},{"lng":5.3944265842438,"lat":51.813616159503},{"lng":5.384202003479,"lat":51.806120473996},{"lng":5.3621864318848,"lat":51.778249475725},{"lng":5.3596758842468,"lat":51.759579551653},{"lng":5.346919298172,"lat":51.753854863421},{"lng":5.3269529342651,"lat":51.74770433176},{"lng":5.2962899208069,"lat":51.736995360582},{"lng":5.2826750278473,"lat":51.740569728705},{"lng":5.2711200714111,"lat":51.73989208212},{"lng":5.2485251426697,"lat":51.733540312269},{"lng":5.2416238188744,"lat":51.735536963752},{"lng":5.2360957860947,"lat":51.739659553989},{"lng":5.2209198474884,"lat":51.743864806447},{"lng":5.2101373672485,"lat":51.742496315433},{"lng":5.1965492963791,"lat":51.740323916903},{"lng":5.1685416698456,"lat":51.743041059541},{"lng":5.1266026496887,"lat":51.737633186771},{"lng":5.1253232359886,"lat":51.744067419312},{"lng":5.1369573175907,"lat":51.749622311491},{"lng":5.1430982351303,"lat":51.754645205787},{"lng":5.137737840414,"lat":51.757143991387},{"lng":5.135124027729,"lat":51.761448883713},{"lng":5.1397669315338,"lat":51.769632525838},{"lng":5.1381093263626,"lat":51.772454127419},{"lng":5.11908441782,"lat":51.777847874787},{"lng":5.1061387360096,"lat":51.784580026477},{"lng":5.0988075882196,"lat":51.787574075847},{"lng":5.0923347473145,"lat":51.78738244273},{"lng":5.0835907459259,"lat":51.781143552},{"lng":5.0750184059143,"lat":51.779046028994},{"lng":5.0691443681717,"lat":51.779271716531},{"lng":5.0644719600677,"lat":51.781515254766},{"lng":5.0587320327759,"lat":51.787594815313},{"lng":5.0451493263245,"lat":51.799141069271},{"lng":5.0190353393555,"lat":51.806545041699},{"lng":5.0138318538666,"lat":51.808069140469},{"lng":5.011031627655,"lat":51.811503563689},{"lng":5.0085210800171,"lat":51.818159397392},{"lng":5.00075340271,"lat":51.821070808274},{"lng":5.0264167785645,"lat":51.818829237515},{"lng":5.0312232971191,"lat":51.840855458818},{"lng":5.0069546699524,"lat":51.843071076867},{"lng":4.9988222122192,"lat":51.844809357548},{"lng":5.0007694959641,"lat":51.848047534143},{"lng":4.9985110759735,"lat":51.851391513706},{"lng":4.9972558021545,"lat":51.856276350748},{"lng":4.993662647903,"lat":51.860950520892},{"lng":4.994355160743,"lat":51.861723782184},{"lng":4.9959059804678,"lat":51.861807962339},{"lng":5.0017659366131,"lat":51.858858237198},{"lng":5.0072202086449,"lat":51.857888429397},{"lng":5.0172704458237,"lat":51.859182399103},{"lng":5.0268486142159,"lat":51.858462013135},{"lng":5.038400888443,"lat":51.859172874098},{"lng":5.0420781970024,"lat":51.860374044159},{"lng":5.0471817702055,"lat":51.85881904979},{"lng":5.0541736185551,"lat":51.857635076996},{"lng":5.0587622076273,"lat":51.858279947681},{"lng":5.0628358125687,"lat":51.859825953472},{"lng":5.0631560012698,"lat":51.861476857136},{"lng":5.0599571317434,"lat":51.862809674676},{"lng":5.0534735620022,"lat":51.865316187102},{"lng":5.0515390187502,"lat":51.867239572169},{"lng":5.0517502427101,"lat":51.869692841456},{"lng":5.0526712462306,"lat":51.871701093736},{"lng":5.0554805248976,"lat":51.873444297552},{"lng":5.0641889870167,"lat":51.874704959573},{"lng":5.0711345672607,"lat":51.874152800064},{"lng":5.0741010904312,"lat":51.874368489796},{"lng":5.0792133808136,"lat":51.875432019625},{"lng":5.0823944807053,"lat":51.87697241663},{"lng":5.0842881202698,"lat":51.879095602431},{"lng":5.0868737697601,"lat":51.8820436384},{"lng":5.0872278213501,"lat":51.88536232766},{"lng":5.0869810581207,"lat":51.887740474346},{"lng":5.0925707817078,"lat":51.889323904253},{"lng":5.0952664017677,"lat":51.888713259835},{"lng":5.0974470376968,"lat":51.888076119794},{"lng":5.1051208376884,"lat":51.889160638903},{"lng":5.1125371456146,"lat":51.887914298442},{"lng":5.1174563169479,"lat":51.892109463234},{"lng":5.118511095643,"lat":51.896457389759},{"lng":5.1166476309299,"lat":51.896991637868},{"lng":5.1170157641172,"lat":51.898479213061},{"lng":5.1189288496971,"lat":51.898483816239},{"lng":5.1233196258545,"lat":51.903586329698},{"lng":5.1233196258545,"lat":51.903586329698},{"lng":5.1233196258545,"lat":51.903586329698},{"lng":5.1233196258545,"lat":51.903586329698},{"lng":5.1233196258545,"lat":51.903586329698},{"lng":5.1233196258545,"lat":51.903586329698},{"lng":5.4094791412354,"lat":51.886703309937},{"lng":5.469388961792,"lat":51.896516095811},{"lng":5.5153298377991,"lat":51.9062870242},{"lng":5.5890798568726,"lat":51.911820292963},{"lng":5.7424807548523,"lat":51.900832513213},{"lng":5.8505630493164,"lat":51.89026582407}];
    /* foxtrot */   deelgebieden[5] = [{"lng":5.8515930175781,"lat":52.021233396705},{"lng":5.8961391448975,"lat":52.011989365279},{"lng":5.9347200393677,"lat":52.004936205492},{"lng":5.9446334838867,"lat":51.985884478059},{"lng":5.9253215789795,"lat":51.984642267058},{"lng":5.8706903457642,"lat":51.97297173071},{"lng":5.8531379699707,"lat":51.966057850188},{"lng":5.8505630493164,"lat":51.89026582407},{"lng":5.7424807548523,"lat":51.900832513213},{"lng":5.5890798568726,"lat":51.911820292963},{"lng":5.5153298377991,"lat":51.9062870242},{"lng":5.469388961792,"lat":51.896516095811},{"lng":5.4094791412354,"lat":51.886703309937},{"lng":5.1233196258545,"lat":51.903586329698},{"lng":5.132063627243,"lat":51.91482822539},{"lng":5.1360011100769,"lat":51.914315335871},{"lng":5.13547539711,"lat":51.918196605809},{"lng":5.1459360122681,"lat":51.927582399403},{"lng":5.1480670273304,"lat":51.929346772299},{"lng":5.1487999409437,"lat":51.930460478887},{"lng":5.1483097672462,"lat":51.930952303758},{"lng":5.1476620137691,"lat":51.93202855241},{"lng":5.1484324783087,"lat":51.933122346865},{"lng":5.1494389772415,"lat":51.933726599501},{"lng":5.1506754755974,"lat":51.933471090313},{"lng":5.1511609554291,"lat":51.933652179499},{"lng":5.1536124944687,"lat":51.937077025482},{"lng":5.1556134223938,"lat":51.939152311944},{"lng":5.1752471923828,"lat":51.962144359065},{"lng":5.180139541626,"lat":51.967432779465},{"lng":5.1829826831818,"lat":51.96940255656},{"lng":5.1930356025696,"lat":51.967564981981},{"lng":5.1993978023529,"lat":51.965991746756},{"lng":5.2073049545288,"lat":51.968040907807},{"lng":5.2127766609192,"lat":51.97026182817},{"lng":5.2215850353241,"lat":51.974465411801},{"lng":5.2263110876083,"lat":51.979488044897},{"lng":5.2371311187744,"lat":51.983241434598},{"lng":5.2437521517277,"lat":51.984296192831},{"lng":5.2571967244148,"lat":51.98101620146},{"lng":5.2676063776016,"lat":51.974640552561},{"lng":5.2779972553253,"lat":51.967069220537},{"lng":5.2964615821838,"lat":51.962104693555},{"lng":5.3055220842361,"lat":51.959661891562},{"lng":5.3163702785969,"lat":51.954819692711},{"lng":5.3309950232506,"lat":51.956113145711},{"lng":5.3399884700775,"lat":51.960815545357},{"lng":5.3497356176376,"lat":51.968949779891},{"lng":5.3610277175903,"lat":51.970949233595},{"lng":5.3766167163849,"lat":51.968867155918},{"lng":5.3941959142685,"lat":51.971633323718},{"lng":5.4189848899841,"lat":51.977148625326},{"lng":5.4330289363861,"lat":51.98479424153},{"lng":5.48415184021,"lat":51.98250135448},{"lng":5.4917907714844,"lat":52.000524113477},{"lng":5.6658554077148,"lat":52.015317436634},{"lng":5.8515930175781,"lat":52.021233396705}];

    var polygons = [];
    for(i=0;i<6;i++) {
        var poly = new google.maps.Polygon({
            map: map,
            path: deelgebieden[i],
            strokeWeight: 1,
            strokeColor: colors[i],
            fillColor: colors[i],
            fillOpacity: .2
        });
        polygons.push(poly);
    }

    var markers = [];
    $('tbody tr').each(function(){
    	var coordinates = $("td:eq(3)", this).html();
    	var latlng = coordinates.split("<br>");
    	var icon = "https://maps.google.com/mapfiles/kml/paddle/wht-circle-lv.png";

    	var $blokhut = $("td:eq(2)", this);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latlng[0],latlng[1]),
            map: map,
			icon : icon,
			// label: { text: $("a", $blokhut).html() }
        });

		google.maps.event.addListener(marker, 'click', function() {
			$("#selectedgroup").html($blokhut.html());
		});

        markers.push(marker);

    });

    var pms = { polygons: polygons, markers: markers };
    return pms;

};