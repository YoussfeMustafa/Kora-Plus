import { GuessMatchQuestion } from '../types/game';

export const guessMatchQuestions: GuessMatchQuestion[] = [
  {
    id: 'gm_1',
    mode: 'guess_match',
    category: 'Epic Comeback',
    difficulty: 3,
    prompt: {
      en: 'Which iconic match had this unbelievable scoreline and goalscorer breakdown?',
      ar: 'ما هي المباراة الأسطورية صاحبة هذه النتيجة ومسجلي الأهداف التاريخيين؟'
    },
    homeTeam: { en: 'Barcelona', ar: 'برشلونة' },
    awayTeam: { en: 'Paris Saint-Germain', ar: 'باريس سان جيرمان' },
    score: '6 - 1',
    competition: { en: 'UEFA Champions League', ar: 'دوري أبطال أوروبا' },
    year: 2017,
    scorers: [
      { player: { en: 'Luis Suárez', ar: 'لويس سواريز' }, minute: "3'", team: 'home' },
      { player: { en: 'Layvin Kurzawa (OG)', ar: 'كورزاوا (هدف في مرماه)' }, minute: "40'", team: 'home' },
      { player: { en: 'Lionel Messi', ar: 'ليونيل ميسي' }, minute: "50' (pen)", team: 'home' },
      { player: { en: 'Edinson Cavani', ar: 'إدينسون كافاني' }, minute: "62'", team: 'away' },
      { player: { en: 'Neymar Jr.', ar: 'نيمار جونيور' }, minute: "88', 91' (pen)", team: 'home' },
      { player: { en: 'Sergi Roberto', ar: 'سيرجي روبيرتو' }, minute: "95'", team: 'home' }
    ],
    optionsTeams: [
      { en: 'Barcelona vs Paris Saint-Germain (La Remontada)', ar: 'برشلونة ضد باريس سان جيرمان (الريمونتادا)' },
      { en: 'Real Madrid vs Paris Saint-Germain', ar: 'ريال مدريد ضد باريس سان جيرمان' },
      { en: 'Barcelona vs Bayern Munich', ar: 'برشلونة ضد بايرن ميونخ' },
      { en: 'Liverpool vs Barcelona', ar: 'ليفربول ضد برشلونة' }
    ],
    optionsComp: [
      { en: 'UEFA Champions League 2017', ar: 'دوري أبطال أوروبا 2017' },
      { en: 'UEFA Europa League 2016', ar: 'الدوري الأوروبي 2016' },
      { en: 'FIFA Club World Cup 2015', ar: 'كأس العالم للأندية 2015' },
      { en: 'UEFA Super Cup 2017', ar: 'السوبر الأوروبي 2017' }
    ]
  },
  {
    id: 'gm_2',
    mode: 'guess_match',
    category: 'World Cup Shock',
    difficulty: 2,
    prompt: {
      en: 'Identify the match that shocked the football world with this devastating score:',
      ar: 'ما هي المباراة التي صدمت كوكب الأرض بهذه النتيجة الكارثية غير المتوقعة؟'
    },
    homeTeam: { en: 'Brazil', ar: 'البرازيل' },
    awayTeam: { en: 'Germany', ar: 'ألمانيا' },
    score: '1 - 7',
    competition: { en: 'FIFA World Cup', ar: 'كأس العالم' },
    year: 2014,
    scorers: [
      { player: { en: 'Thomas Müller', ar: 'توماس مولر' }, minute: "11'", team: 'away' },
      { player: { en: 'Miroslav Klose', ar: 'ميروسلاف كلوزه' }, minute: "23'", team: 'away' },
      { player: { en: 'Toni Kroos', ar: 'توني كروس' }, minute: "24', 26'", team: 'away' },
      { player: { en: 'Sami Khedira', ar: 'سامي خضيرة' }, minute: "29'", team: 'away' },
      { player: { en: 'André Schürrle', ar: 'أندريه شورله' }, minute: "69', 79'", team: 'away' },
      { player: { en: 'Oscar', ar: 'أوسكار' }, minute: "90'", team: 'home' }
    ],
    optionsTeams: [
      { en: 'Brazil vs Germany (The Mineirazo)', ar: 'البرازيل ضد ألمانيا (المينيراتزو)' },
      { en: 'Argentina vs Germany', ar: 'الأرجنتين ضد ألمانيا' },
      { en: 'Spain vs Netherlands', ar: 'إسبانيا ضد هولندا' },
      { en: 'Brazil vs France', ar: 'البرازيل ضد فرنسا' }
    ]
  },
  {
    id: 'gm_3',
    mode: 'guess_match',
    category: 'Anfield Miracle',
    difficulty: 3,
    prompt: {
      en: 'Name this famous European comeback highlighted by "Corner taken quickly...":',
      ar: 'ما هي الريمونتادا التاريخية في أنفيلد التي خُلدت بجملة "ركنية لُعبت بسرعة..."؟'
    },
    homeTeam: { en: 'Liverpool', ar: 'ليفربول' },
    awayTeam: { en: 'Barcelona', ar: 'برشلونة' },
    score: '4 - 0',
    competition: { en: 'UEFA Champions League Semi-Final', ar: 'نصف نهائي دوري أبطال أوروبا' },
    year: 2019,
    scorers: [
      { player: { en: 'Divock Origi', ar: 'ديفوك أوريغي' }, minute: "7', 79'", team: 'home' },
      { player: { en: 'Georginio Wijnaldum', ar: 'جورجينيو فاينالدوم' }, minute: "54', 56'", team: 'home' }
    ],
    optionsTeams: [
      { en: 'Liverpool vs Barcelona', ar: 'ليفربول ضد برشلونة' },
      { en: 'Roma vs Barcelona', ar: 'روما ضد برشلونة' },
      { en: 'Liverpool vs Real Madrid', ar: 'ليفربول ضد ريال مدريد' },
      { en: 'Manchester City vs Real Madrid', ar: 'مانشستر سيتي ضد ريال مدريد' }
    ]
  },
  {
    id: 'gm_4',
    mode: 'guess_match',
    category: 'Greatest Final in History',
    difficulty: 2,
    prompt: {
      en: 'Which breathtaking final featured hat-trick heroics, extra-time drama, and penalties?',
      ar: 'أي نهائي أسطوري حبس أنفاس الملايين بهاتريك وسيناريو جنوني وركلات ترجيح؟'
    },
    homeTeam: { en: 'Argentina', ar: 'الأرجنتين' },
    awayTeam: { en: 'France', ar: 'فرنسا' },
    score: '3 - 3 (4 - 2 pens)',
    competition: { en: 'FIFA World Cup Final', ar: 'نهائي كأس العالم' },
    year: 2022,
    scorers: [
      { player: { en: 'Lionel Messi', ar: 'ليونيل ميسي' }, minute: "23' (pen), 108'", team: 'home' },
      { player: { en: 'Ángel Di María', ar: 'أنخيل دي ماريا' }, minute: "36'", team: 'home' },
      { player: { en: 'Kylian Mbappé', ar: 'كيليان مبابي' }, minute: "80' (pen), 81', 118' (pen)", team: 'away' }
    ],
    optionsTeams: [
      { en: 'Argentina vs France (Lusail 2022)', ar: 'الأرجنتين ضد فرنسا (لوسيل 2022)' },
      { en: 'France vs Croatia (Moscow 2018)', ar: 'فرنسا ضد كرواتيا (موسكو 2018)' },
      { en: 'Germany vs Argentina (Rio 2014)', ar: 'ألمانيا ضد الأرجنتين (ريو 2014)' },
      { en: 'Italy vs France (Berlin 2006)', ar: 'إيطاليا ضد فرنسا (برلين 2006)' }
    ]
  },
  {
    id: 'gm_5',
    mode: 'guess_match',
    category: 'Miracle of Istanbul',
    difficulty: 3,
    prompt: {
      en: 'Name this unforgettable final where a team bounced back from 0-3 down in 6 wild minutes:',
      ar: 'ما هو النهائي الخالد الذي عاد فيه الخاسر من 0-3 إلى 3-3 في 6 دقائق مجنونة؟'
    },
    homeTeam: { en: 'AC Milan', ar: 'إيه سي ميلان' },
    awayTeam: { en: 'Liverpool', ar: 'ليفربول' },
    score: '3 - 3 (2 - 3 pens)',
    competition: { en: 'UEFA Champions League Final', ar: 'نهائي دوري أبطال أوروبا' },
    year: 2005,
    scorers: [
      { player: { en: 'Paolo Maldini', ar: 'باولو مالديني' }, minute: "1'", team: 'home' },
      { player: { en: 'Hernán Crespo', ar: 'هيرنان كريسبو' }, minute: "39', 44'", team: 'home' },
      { player: { en: 'Steven Gerrard', ar: 'ستيفن جيرارد' }, minute: "54'", team: 'away' },
      { player: { en: 'Vladimír Šmicer', ar: 'فلاديمير سميتشر' }, minute: "56'", team: 'away' },
      { player: { en: 'Xabi Alonso', ar: 'تشابي ألونسو' }, minute: "60'", team: 'away' }
    ],
    optionsTeams: [
      { en: 'AC Milan vs Liverpool (Istanbul)', ar: 'إيه سي ميلان ضد ليفربول (إسطنبول)' },
      { en: 'Juventus vs Real Madrid', ar: 'يوفنتوس ضد ريال مدريد' },
      { en: 'Manchester United vs Bayern Munich', ar: 'مانشستر يونايتد ضد بايرن ميونخ' },
      { en: 'Chelsea vs Bayern Munich', ar: 'تشيلسي ضد بايرن ميونخ' }
    ]
  },
  {
    id: 'gm_6',
    mode: 'guess_match',
    category: 'Arab World Cup Triumph',
    difficulty: 3,
    prompt: {
      en: 'Which massive World Cup upset produced the quote "Where is Messi?":',
      ar: 'ما هي الملحمة المونديالية التي صنعت مفاجأة العصر وأطلقت هتاف "ميسي وينه"؟'
    },
    homeTeam: { en: 'Argentina', ar: 'الأرجنتين' },
    awayTeam: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
    score: '1 - 2',
    competition: { en: 'FIFA World Cup Group Stage', ar: 'دور المجموعات بكأس العالم' },
    year: 2022,
    scorers: [
      { player: { en: 'Lionel Messi', ar: 'ليونيل ميسي' }, minute: "10' (pen)", team: 'home' },
      { player: { en: 'Saleh Al-Shehri', ar: 'صالح الشهري' }, minute: "48'", team: 'away' },
      { player: { en: 'Salem Al-Dawsari', ar: 'سالم الدوسري' }, minute: "53'", team: 'away' }
    ],
    optionsTeams: [
      { en: 'Argentina vs Saudi Arabia (Lusail)', ar: 'الأرجنتين ضد السعودية (لوسيل)' },
      { en: 'Poland vs Saudi Arabia', ar: 'بولندا ضد السعودية' },
      { en: 'Argentina vs Mexico', ar: 'الأرجنتين ضد المكسيك' },
      { en: 'Germany vs Japan', ar: 'ألمانيا ضد اليابان' }
    ]
  },
  {
    id: 'gm_7',
    mode: 'guess_match',
    category: 'Premier League Title Decider',
    difficulty: 3,
    prompt: {
      en: 'Name the legendary Premier League finale immortalized by Martin Tyler’s "AGUEROOOO!":',
      ar: 'ما هي المباراة الأيقونية في ختام البريميرليغ الخالدة بصرخة "أغويروووو!" الشهيرة؟'
    },
    homeTeam: { en: 'Manchester City', ar: 'مانشستر سيتي' },
    awayTeam: { en: 'Queens Park Rangers', ar: 'كوينز بارك رينجرز' },
    score: '3 - 2',
    competition: { en: 'Premier League Matchday 38', ar: 'الجولة 38 من الدوري الإنجليزي الممتاز' },
    year: 2012,
    scorers: [
      { player: { en: 'Pablo Zabaleta', ar: 'بابلو زاباليتا' }, minute: "39'", team: 'home' },
      { player: { en: 'Djibril Cissé', ar: 'جبريل سيسيه' }, minute: "48'", team: 'away' },
      { player: { en: 'Jamie Mackie', ar: 'جيمي ماكي' }, minute: "66'", team: 'away' },
      { player: { en: 'Edin Džeko', ar: 'إدين دجيكو' }, minute: "91'", team: 'home' },
      { player: { en: 'Sergio Agüero', ar: 'سيرخيو أغويرو' }, minute: "93'", team: 'home' }
    ],
    optionsTeams: [
      { en: 'Manchester City vs Queens Park Rangers (2012)', ar: 'مانشستر سيتي ضد كوينز بارك رينجرز (2012)' },
      { en: 'Manchester City vs Aston Villa (2022)', ar: 'مانشستر سيتي ضد أستون فيلا (2022)' },
      { en: 'Manchester United vs Sunderland (2012)', ar: 'مانشستر يونايتد ضد سندرلاند (2012)' },
      { en: 'Arsenal vs Liverpool (1989)', ar: 'أرسنال ضد ليفربول (1989)' }
    ]
  },
  {
    id: 'gm_8',
    mode: 'guess_match',
    category: 'Champions League Demolition',
    difficulty: 3,
    prompt: {
      en: 'Which quarter-final single-leg clash ended in this historic eight-goal rout in Lisbon?',
      ar: 'ما هي مواجهة ربع النهائي التاريخية في لشبونة التي انتهت باكتساح كاسح بثمانية أهداف؟'
    },
    homeTeam: { en: 'Barcelona', ar: 'برشلونة' },
    awayTeam: { en: 'Bayern Munich', ar: 'بايرن ميونخ' },
    score: '2 - 8',
    competition: { en: 'UEFA Champions League Quarter-Final', ar: 'ربع نهائي دوري أبطال أوروبا' },
    year: 2020,
    scorers: [
      { player: { en: 'Thomas Müller', ar: 'توماس مولر' }, minute: "4', 31'", team: 'away' },
      { player: { en: 'David Alaba (OG)', ar: 'دافيد ألابا (في مرماه)' }, minute: "7'", team: 'home' },
      { player: { en: 'Ivan Perišić', ar: 'إيفان بيريشيتش' }, minute: "21'", team: 'away' },
      { player: { en: 'Serge Gnabry', ar: 'سيرج غنابري' }, minute: "27'", team: 'away' },
      { player: { en: 'Luis Suárez', ar: 'لويس سواريز' }, minute: "57'", team: 'home' },
      { player: { en: 'Joshua Kimmich', ar: 'جوشوا كيميش' }, minute: "63'", team: 'away' },
      { player: { en: 'Robert Lewandowski', ar: 'روبرت ليفاندوفسكي' }, minute: "82'", team: 'away' },
      { player: { en: 'Philippe Coutinho', ar: 'فيليبي كوتينيو' }, minute: "85', 89'", team: 'away' }
    ],
    optionsTeams: [
      { en: 'Barcelona vs Bayern Munich (Lisbon 2020)', ar: 'برشلونة ضد بايرن ميونخ (لشبونة 2020)' },
      { en: 'Arsenal vs Bayern Munich', ar: 'أرسنال ضد بايرن ميونخ' },
      { en: 'Roma vs Manchester United', ar: 'روما ضد مانشستر يونايتد' },
      { en: 'Tottenham vs Bayern Munich', ar: 'توتنهام ضد بايرن ميونخ' }
    ]
  },
  {
    id: 'gm_9',
    mode: 'guess_match',
    category: 'African Final of the Century',
    difficulty: 3,
    prompt: {
      en: 'Name this historic Cairo derby final settled by the iconic "El Qadya Momken" in the 86th minute:',
      ar: 'ما هو نهائي القرن الإفريقي الذي حسمته "القاضية ممكن" لمحمد مجدي أفشة في الدقيقة 86؟'
    },
    homeTeam: { en: 'Zamalek', ar: 'الزمالك' },
    awayTeam: { en: 'Al Ahly', ar: 'الأهلي المصري' },
    score: '1 - 2',
    competition: { en: 'CAF Champions League Final', ar: 'نهائي دوري أبطال إفريقيا' },
    year: 2020,
    scorers: [
      { player: { en: 'Amr El Solia', ar: 'عمرو السولية' }, minute: "5'", team: 'away' },
      { player: { en: 'Shikabala', ar: 'محمود شيكابالا' }, minute: "31'", team: 'home' },
      { player: { en: 'Mohamed Magdy Afsha', ar: 'محمد مجدي أفشة (القاضية)' }, minute: "86'", team: 'away' }
    ],
    optionsTeams: [
      { en: 'Zamalek vs Al Ahly (Final of the Century 2020)', ar: 'الزمالك ضد الأهلي (نهائي القرن 2020)' },
      { en: 'Al Ahly vs Wydad Casablanca', ar: 'الأهلي ضد الوداد البيضاوي' },
      { en: 'Al Ahly vs Espérance de Tunis', ar: 'الأهلي ضد الترجي التونسي' },
      { en: 'Zamalek vs RS Berkane', ar: 'الزمالك ضد نهضة بركان' }
    ]
  },
  {
    id: 'gm_10',
    mode: 'guess_match',
    category: 'Late Treble Winner',
    difficulty: 4,
    prompt: {
      en: 'Identify the 1999 Champions League final where two injury-time goals stunned Bayern Munich:',
      ar: 'ما هو نهائي 1999 الذي حُسم بهدفين في الوقت بدل الضائع ليمنح مانشستر يونايتد الثلاثية؟'
    },
    homeTeam: { en: 'Manchester United', ar: 'مانشستر يونايتد' },
    awayTeam: { en: 'Bayern Munich', ar: 'بايرن ميونخ' },
    score: '2 - 1',
    competition: { en: 'UEFA Champions League Final', ar: 'نهائي دوري أبطال أوروبا' },
    year: 1999,
    scorers: [
      { player: { en: 'Mario Basler', ar: 'ماريو باسلر' }, minute: "6'", team: 'away' },
      { player: { en: 'Teddy Sheringham', ar: 'تيدي شيرنغهام' }, minute: "91'", team: 'home' },
      { player: { en: 'Ole Gunnar Solskjær', ar: 'أولي غونار سولشاير' }, minute: "93'", team: 'home' }
    ],
    optionsTeams: [
      { en: 'Manchester United vs Bayern Munich (Camp Nou 1999)', ar: 'مانشستر يونايتد ضد بايرن ميونخ (كامب نو 1999)' },
      { en: 'Real Madrid vs Bayer Leverkusen', ar: 'ريال مدريد ضد باير ليفركوزن' },
      { en: 'Borussia Dortmund vs Juventus', ar: 'بوروسيا دورتموند ضد يوفنتوس' },
      { en: 'Chelsea vs Bayern Munich', ar: 'تشيلسي ضد بايرن ميونخ' }
    ]
  },
  {
    id: 'gm_11',
    mode: 'guess_match',
    category: 'La Décima Header',
    difficulty: 3,
    prompt: {
      en: 'Which Madrid Derby final was dramatically revived at minute 92:48 by Sergio Ramos?',
      ar: 'ما هو ديربي مدريد الأوروبي الذي أحيته رأسية سيرخيو راموس الأسطورية في الدقيقة 92:48؟'
    },
    homeTeam: { en: 'Real Madrid', ar: 'ريال مدريد' },
    awayTeam: { en: 'Atlético Madrid', ar: 'أتلتيكو مدريد' },
    score: '4 - 1 (AET)',
    competition: { en: 'UEFA Champions League Final', ar: 'نهائي دوري أبطال أوروبا' },
    year: 2014,
    scorers: [
      { player: { en: 'Diego Godín', ar: 'دييغو غودين' }, minute: "36'", team: 'away' },
      { player: { en: 'Sergio Ramos', ar: 'سيرخيو راموس (92:48)' }, minute: "93'", team: 'home' },
      { player: { en: 'Gareth Bale', ar: 'غاريث بيل' }, minute: "110'", team: 'home' },
      { player: { en: 'Marcelo', ar: 'مارسيلو' }, minute: "118'", team: 'home' },
      { player: { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' }, minute: "120' (pen)", team: 'home' }
    ],
    optionsTeams: [
      { en: 'Real Madrid vs Atlético Madrid (Lisbon 2014)', ar: 'ريال مدريد ضد أتلتيكو مدريد (لشبونة 2014)' },
      { en: 'Real Madrid vs Atlético Madrid (Milan 2016)', ar: 'ريال مدريد ضد أتلتيكو مدريد (ميلانو 2016)' },
      { en: 'Real Madrid vs Juventus (Cardiff 2017)', ar: 'ريال مدريد ضد يوفنتوس (كارديف 2017)' },
      { en: 'Real Madrid vs Liverpool (Kyiv 2018)', ar: 'ريال مدريد ضد ليفربول (كييف 2018)' }
    ]
  },
  {
    id: 'gm_12',
    mode: 'guess_match',
    category: 'World Cup Headbutt',
    difficulty: 4,
    prompt: {
      en: 'Name the 2006 World Cup final marked by Zidane’s Panenka, Materazzi’s header, and the red card:',
      ar: 'ما هو نهائي مونديال 2006 الذي شهد بانينكا زيدان، ورأسية ماتيراتزي، والبطاقة الحمراء التاريخية؟'
    },
    homeTeam: { en: 'Italy', ar: 'إيطاليا' },
    awayTeam: { en: 'France', ar: 'فرنسا' },
    score: '1 - 1 (5 - 3 pens)',
    competition: { en: 'FIFA World Cup Final', ar: 'نهائي كأس العالم' },
    year: 2006,
    scorers: [
      { player: { en: 'Zinedine Zidane', ar: 'زين الدين زيدان' }, minute: "7' (pen)", team: 'away' },
      { player: { en: 'Marco Materazzi', ar: 'ماركو ماتيراتزي' }, minute: "19'", team: 'home' }
    ],
    optionsTeams: [
      { en: 'Italy vs France (Berlin 2006)', ar: 'إيطاليا ضد فرنسا (برلين 2006)' },
      { en: 'France vs Brazil (Paris 1998)', ar: 'فرنسا ضد البرازيل (باريس 1998)' },
      { en: 'Brazil vs Germany (Yokohama 2002)', ar: 'البرازيل ضد ألمانيا (يوكوهاما 2002)' },
      { en: 'Spain vs Netherlands (Johannesburg 2010)', ar: 'إسبانيا ضد هولندا (جوهانسبرغ 2010)' }
    ]
  },
  {
    id: 'gm_13',
    mode: 'guess_match',
    category: 'The Flying Dutchman',
    difficulty: 4,
    prompt: {
      en: 'Which 2014 World Cup showdown featured Van Persie’s iconic flying header and Robben’s blitz?',
      ar: 'ما هي مواجهة مونديال 2014 التي شهدت رأسية روبين فان بيرسي الطائرة وسرعة روبن الصاعقة؟'
    },
    homeTeam: { en: 'Spain', ar: 'إسبانيا' },
    awayTeam: { en: 'Netherlands', ar: 'هولندا' },
    score: '1 - 5',
    competition: { en: 'FIFA World Cup Group Stage', ar: 'دور المجموعات بكأس العالم' },
    year: 2014,
    scorers: [
      { player: { en: 'Xabi Alonso', ar: 'تشابي ألونسو' }, minute: "27' (pen)", team: 'home' },
      { player: { en: 'Robin van Persie', ar: 'روبين فان بيرسي' }, minute: "44', 72'", team: 'away' },
      { player: { en: 'Arjen Robben', ar: 'آريين روبن' }, minute: "53', 80'", team: 'away' },
      { player: { en: 'Stefan de Vrij', ar: 'ستيفان دي فري' }, minute: "64'", team: 'away' }
    ],
    optionsTeams: [
      { en: 'Spain vs Netherlands (Salvador 2014)', ar: 'إسبانيا ضد هولندا (سلفادور 2014)' },
      { en: 'Spain vs Chile (2014)', ar: 'إسبانيا ضد تشيلي (2014)' },
      { en: 'Netherlands vs Mexico (2014)', ar: 'هولندا ضد المكسيك (2014)' },
      { en: 'Germany vs Portugal (2014)', ar: 'ألمانيا ضد البرتغال (2014)' }
    ]
  },
  {
    id: 'gm_14',
    mode: 'guess_match',
    category: 'Bicycle Kick Wonder',
    difficulty: 3,
    prompt: {
      en: 'Name the 2018 Kyiv Champions League final featuring Gareth Bale’s breathtaking overhead kick:',
      ar: 'ما هو نهائي دوري أبطال أوروبا 2018 في كييف الذي خطفه غاريث بيل بدبل كيك مقصي خرافي؟'
    },
    homeTeam: { en: 'Real Madrid', ar: 'ريال مدريد' },
    awayTeam: { en: 'Liverpool', ar: 'ليفربول' },
    score: '3 - 1',
    competition: { en: 'UEFA Champions League Final', ar: 'نهائي دوري أبطال أوروبا' },
    year: 2018,
    scorers: [
      { player: { en: 'Karim Benzema', ar: 'كريم بنزيما' }, minute: "51'", team: 'home' },
      { player: { en: 'Sadio Mané', ar: 'ساديو ماني' }, minute: "55'", team: 'away' },
      { player: { en: 'Gareth Bale', ar: 'غاريث بيل' }, minute: "64', 83'", team: 'home' }
    ],
    optionsTeams: [
      { en: 'Real Madrid vs Liverpool (Kyiv 2018)', ar: 'ريال مدريد ضد ليفربول (كييف 2018)' },
      { en: 'Real Madrid vs Juventus (2017)', ar: 'ريال مدريد ضد يوفنتوس (2017)' },
      { en: 'Liverpool vs Tottenham (2019)', ar: 'ليفربول ضد توتنهام (2019)' },
      { en: 'Barcelona vs Juventus (2015)', ar: 'برشلونة ضد يوفنتوس (2015)' }
    ]
  },
  {
    id: 'gm_15',
    mode: 'guess_match',
    category: 'Battle of the Bridge',
    difficulty: 4,
    prompt: {
      en: 'Name the fierce London derby where Eden Hazard’s curling strike crowned Leicester City champions:',
      ar: 'ما هو ديربي لندن العنيف (معركة الجسر) الذي أهدى فيه إيدين هازارد لقب الدوري لليستر سيتي؟'
    },
    homeTeam: { en: 'Chelsea', ar: 'تشيلسي' },
    awayTeam: { en: 'Tottenham Hotspur', ar: 'توتنهام هوتسبير' },
    score: '2 - 2',
    competition: { en: 'Premier League', ar: 'الدوري الإنجليزي الممتاز' },
    year: 2016,
    scorers: [
      { player: { en: 'Harry Kane', ar: 'هاري كين' }, minute: "35'", team: 'away' },
      { player: { en: 'Son Heung-min', ar: 'سون هيونغ مين' }, minute: "44'", team: 'away' },
      { player: { en: 'Gary Cahill', ar: 'غاري كاهيل' }, minute: "58'", team: 'home' },
      { player: { en: 'Eden Hazard', ar: 'إيدين هازارد' }, minute: "83'", team: 'home' }
    ],
    optionsTeams: [
      { en: 'Chelsea vs Tottenham (Battle of the Bridge 2016)', ar: 'تشيلسي ضد توتنهام (معركة ستامفورد بريدج 2016)' },
      { en: 'Arsenal vs Chelsea (2016)', ar: 'أرسنال ضد تشيلسي (2016)' },
      { en: 'Tottenham vs Leicester City (2016)', ar: 'توتنهام ضد ليستر سيتي (2016)' },
      { en: 'Chelsea vs Leicester City (2016)', ar: 'تشيلسي ضد ليستر سيتي (2016)' }
    ]
  }
];

