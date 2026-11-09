import { PasswordLinkQuestion } from '../types/game';

export const passwordLinkQuestions: PasswordLinkQuestion[] = [
  {
    id: 'pl_1',
    mode: 'password_link',
    category: 'Managers & Transfers',
    difficulty: 4,
    prompt: {
      en: 'What is the secret common link connecting these three superstars?',
      ar: 'ما هو الرابط المشترك السري الذي يجمع هؤلاء النجوم الثلاثة؟'
    },
    items: [
      { en: 'Mohamed Salah', ar: 'محمد صلاح' },
      { en: 'Kevin De Bruyne', ar: 'كيفين دي بروين' },
      { en: 'Romelu Lukaku', ar: 'روميلو لوكاكو' }
    ],
    answer: {
      en: 'All played for Chelsea under José Mourinho before becoming world superstars',
      ar: 'جميعهم لعبوا في تشيلسي تحت قيادة جوزيه مورينيو وتخلت عنهم الإدارة قبل التألق العالمي'
    },
    options: [
      { en: 'All played for Chelsea under José Mourinho', ar: 'جميعهم لعبوا لتشيلسي تحت قيادة جوزيه مورينيو' },
      { en: 'All won the Bundesliga Golden Boot', ar: 'جميعهم فازوا بالحذاء الذهبي في الدوري الألماني' },
      { en: 'All graduated from Basel academy', ar: 'جميعهم تخرجوا من أكاديمية نادي بازل' },
      { en: 'All played in the Italian Serie A first', ar: 'جميعهم بدأوا مسيرتهم في الدوري الإيطالي' }
    ],
    aliases: ['Chelsea', 'Mourinho', 'تشيلسي', 'مورينيو', 'تشلسي'],
    hint: {
      en: 'Think about a London club and a Portuguese manager in 2013–2014.',
      ar: 'فكر في نادٍ لندني ومدرب برتغالي شهير بين 2013 و2014.'
    }
  },
  {
    id: 'pl_2',
    mode: 'password_link',
    category: 'Legendary Trios',
    difficulty: 3,
    prompt: {
      en: 'What links these three lethal attackers?',
      ar: 'ما الرابط المشترك بين هذا الثلاثي الهجومي الفتاك؟'
    },
    items: [
      { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
      { en: 'Wayne Rooney', ar: 'واين روني' },
      { en: 'Carlos Tevez', ar: 'كارلوس تيفيز' }
    ],
    answer: {
      en: 'Formed Manchester United’s feared front three in 2007–2009',
      ar: 'شكلوا ثلاثي هجوم مانشستر يونايتد المرعب وتوجوا بدوري الأبطال 2008'
    },
    options: [
      { en: 'Formed Manchester United’s front three (2007–2009)', ar: 'شكلوا ثلاثي هجوم مانشستر يونايتد المرعب (2007-2009)' },
      { en: 'All played for Real Madrid', ar: 'جميعهم لعبوا لريال مدريد' },
      { en: 'All played under Pep Guardiola', ar: 'جميعهم تدربوا تحت قيادة بيب غوارديولا' },
      { en: 'All won the World Cup', ar: 'جميعهم فازوا بكأس العالم' }
    ],
    aliases: ['Manchester United', 'Man Utd', 'مانشستر يونايتد', 'اليونايتد']
  },
  {
    id: 'pl_3',
    mode: 'password_link',
    category: 'World Cup & Management',
    difficulty: 4,
    prompt: {
      en: 'What unique historic football achievement connects these three French icons?',
      ar: 'ما هو الإنجاز التاريخي الفريد الذي يربط بين هؤلاء الرموز الثلاثة لفرنسا؟'
    },
    items: [
      { en: 'Zinedine Zidane', ar: 'زين الدين زيدان' },
      { en: 'Didier Deschamps', ar: 'ديدييه ديشان' },
      { en: 'Laurent Blanc', ar: 'لوران بلان' }
    ],
    answer: {
      en: 'All won the 1998 World Cup as players and later won major league titles as managers',
      ar: 'توجوا بكأس العالم 1998 كلاعبين، وأصبحوا جميعاً مدربين فائزين ببطولات كبرى'
    },
    options: [
      { en: '1998 World Cup winners who managed top teams', ar: 'أبطال كأس العالم 1998 الذين دربوا كبرى الأندية والمنتخبات' },
      { en: 'All won the Ballon d’Or', ar: 'جميعهم فازوا بالكرة الذهبية' },
      { en: 'All played for Juventus and Marseille', ar: 'جميعهم مثلوا يوفنتوس ومارسيليا كلاعبين' },
      { en: 'All scored in World Cup finals', ar: 'جميعهم سجلوا في نهائيات كأس العالم' }
    ],
    aliases: ['1998 World Cup', 'كأس العالم 1998', 'فرنسا 98']
  },
  {
    id: 'pl_4',
    mode: 'password_link',
    category: 'Club Stepping Stones',
    difficulty: 3,
    prompt: {
      en: 'Which European club served as the launchpad for all three of these world stars?',
      ar: 'ما هو النادي الأوروبي الذي كان نقطة انطلاق هؤلاء النجوم الثلاثة نحو العالمية؟'
    },
    items: [
      { en: 'Erling Haaland', ar: 'إيرلينغ هالاند' },
      { en: 'Sadio Mané', ar: 'ساديو ماني' },
      { en: 'Dominik Szoboszlai', ar: 'دومينيك سوبوسلاي' }
    ],
    answer: {
      en: 'All played for Red Bull Salzburg in Austria',
      ar: 'جميعهم تألقوا في صفوف ريد بول سالزبورغ النمساوي'
    },
    options: [
      { en: 'All played for Red Bull Salzburg', ar: 'جميعهم لعبوا لنادي ريد بول سالزبورغ النمساوي' },
      { en: 'All started at Ajax', ar: 'جميعهم تخرجوا من أياكس أمستردام' },
      { en: 'All played for Southampton', ar: 'جميعهم مثلوا نادي ساوثهامبتون' },
      { en: 'All played for Borussia Dortmund', ar: 'جميعهم لعبوا لبوروسيا دورتموند' }
    ],
    aliases: ['Salzburg', 'Red Bull Salzburg', 'سالزبورغ', 'ريد بول سالزبورغ']
  },
  {
    id: 'pl_5',
    mode: 'password_link',
    category: 'Direct Transfers',
    difficulty: 3,
    prompt: {
      en: 'What controversial transfer path connects these three Bundesliga stars?',
      ar: 'ما هو المسار الانتقالي الشهير الذي جمع هؤلاء النجوم الثلاثة في ألمانيا؟'
    },
    items: [
      { en: 'Robert Lewandowski', ar: 'روبرت ليفاندوفسكي' },
      { en: 'Mario Götze', ar: 'ماريو غوتزه' },
      { en: 'Mats Hummels', ar: 'ماتس هوملز' }
    ],
    answer: {
      en: 'All transferred directly from Borussia Dortmund to Bayern Munich',
      ar: 'جميعهم انتقلوا مباشرة من بوروسيا دورتموند إلى الغريم بايرن ميونخ'
    },
    options: [
      { en: 'Transferred directly from Dortmund to Bayern Munich', ar: 'انتقلوا مباشرة من بوروسيا دورتموند إلى بايرن ميونخ' },
      { en: 'All won the World Cup with Germany', ar: 'جميعهم فازوا بكأس العالم مع ألمانيا' },
      { en: 'All were coached by Thomas Tuchel only', ar: 'جميعهم لعبوا فقط تحت قيادة توخيل' },
      { en: 'All played in the Premier League', ar: 'جميعهم احترفوا في الدوري الإنجليزي' }
    ],
    aliases: ['Dortmund to Bayern', 'بايرن ودورتموند', 'دورتموند الى بايرن']
  },
  {
    id: 'pl_6',
    mode: 'password_link',
    category: 'Elite Managers',
    difficulty: 4,
    prompt: {
      en: 'What ultra-exclusive European Cup milestone connects these three managers?',
      ar: 'ما هو الرقم القياسي الاستثنائي في دوري الأبطال الذي يجمع هؤلاء المدربين الثلاثة؟'
    },
    items: [
      { en: 'Carlo Ancelotti', ar: 'كارلو أنشيلوتي' },
      { en: 'Pep Guardiola', ar: 'بيب غوارديولا' },
      { en: 'Zinedine Zidane', ar: 'زين الدين زيدان' }
    ],
    answer: {
      en: 'Won the UEFA Champions League / European Cup as both player and manager',
      ar: 'توجوا بدوري أبطال أوروبا كلاعبين وكمدربين'
    },
    options: [
      { en: 'Won the Champions League as both player and manager', ar: 'توجوا بدوري أبطال أوروبا كلاعبين وكمدربين' },
      { en: 'All won the Treble twice', ar: 'جميعهم حققوا الثلاثية مرتين' },
      { en: 'All managed Real Madrid', ar: 'جميعهم أشرفوا على تدريب ريال مدريد' },
      { en: 'All managed Chelsea', ar: 'جميعهم دربوا نادي تشيلسي' }
    ],
    aliases: ['Player and manager', 'لاعب ومدرب', 'أبطال أوروبا لاعبا ومدربا']
  },
  {
    id: 'pl_7',
    mode: 'password_link',
    category: 'Miracle Title',
    difficulty: 3,
    prompt: {
      en: 'What historic sporting fairy tale binds these three players forever?',
      ar: 'ما هي المعجزة الرياضية التي خلدت أسماء هؤلاء النجوم الثلاثة في كتب التاريخ؟'
    },
    items: [
      { en: 'Riyad Mahrez', ar: 'رياض محرز' },
      { en: 'Jamie Vardy', ar: 'جيمي فاردي' },
      { en: 'N\'Golo Kanté', ar: 'نغولو كانتي' }
    ],
    answer: {
      en: 'Key pillars of Leicester City’s impossible 5000-to-1 Premier League title in 2015–16',
      ar: 'أعمدة ملحمة ليستر سيتي والتتويج التاريخي بالدوري الإنجليزي 2015-2016'
    },
    options: [
      { en: 'Leicester City’s 2015–16 Premier League miracle champions', ar: 'أبطال معجزة ليستر سيتي في البريميرليغ 2015-2016' },
      { en: 'All won the Champions League with Chelsea', ar: 'جميعهم فازوا بدوري الأبطال مع تشيلسي' },
      { en: 'All scored 20+ goals in that single season', ar: 'جميعهم سجلوا 20 هدفاً في ذلك الموسم' },
      { en: 'All played for Caen in France', ar: 'جميعهم لعبوا لنادي كاين الفرنسي' }
    ],
    aliases: ['Leicester City', 'Leicester', 'ليستر سيتي', 'ليستر']
  },
  {
    id: 'pl_8',
    mode: 'password_link',
    category: 'North London Departures',
    difficulty: 4,
    prompt: {
      en: 'What transfer destination and background links these stars?',
      ar: 'ما الرابط المشترك في مسيرة هذا الثلاثي قبل رحيلهم إلى مدريد؟'
    },
    items: [
      { en: 'Luka Modrić', ar: 'لوكا مودريتش' },
      { en: 'Gareth Bale', ar: 'غاريث بيل' },
      { en: 'Jonathan Woodgate', ar: 'جوناثان وودغيت' }
    ],
    answer: {
      en: 'All moved directly from Tottenham Hotspur to Real Madrid',
      ar: 'جميعهم انتقلوا مباشرة من توتنهام هوتسبير إلى ريال مدريد'
    },
    options: [
      { en: 'Transferred directly from Tottenham to Real Madrid', ar: 'انتقلوا مباشرة من توتنهام إلى ريال مدريد' },
      { en: 'All won the PFA Player of the Year', ar: 'جميعهم فازوا بجائزة لاعب العام في إنجلترا' },
      { en: 'All scored in an El Clásico on their debut', ar: 'جميعهم سجلوا في الكلاسيكو في أول ظهور' },
      { en: 'All won the Europa League with Tottenham', ar: 'جميعهم فازوا بالدوري الأوروبي مع توتنهام' }
    ],
    aliases: ['Tottenham to Real Madrid', 'توتنهام لريال مدريد', 'سبيرز لمدريد']
  },
  {
    id: 'pl_9',
    mode: 'password_link',
    category: 'National Heritage',
    difficulty: 3,
    prompt: {
      en: 'What iconic national strike force connects these three deadly finishers?',
      ar: 'ما هو الهجوم القاتل للمنتخب الوطني الذي يجمع هؤلاء الهدافين التاريخيين؟'
    },
    items: [
      { en: 'Luis Suárez', ar: 'لويس سواريز' },
      { en: 'Edinson Cavani', ar: 'إدينسون كافاني' },
      { en: 'Diego Forlán', ar: 'دييغو فورلان' }
    ],
    answer: {
      en: 'All are the top 3 all-time goalscorers for the Uruguay national team',
      ar: 'الهدافون التاريخيون الثلاثة الأوائل لمنتخب الأوروغواي'
    },
    options: [
      { en: 'Top all-time scorers for the Uruguay national team', ar: 'الهدافون التاريخيون الأوائل لمنتخب الأوروغواي' },
      { en: 'All played for Atlético Madrid', ar: 'جميعهم لعبوا لأتلتيكو مدريد' },
      { en: 'All won the Premier League Golden Boot', ar: 'جميعهم توجوا بالحذاء الذهبي للبريميرليغ' },
      { en: 'All won the Copa Libertadores', ar: 'جميعهم فازوا بكوبا ليبرتادوريس' }
    ],
    aliases: ['Uruguay', 'اوروغواي', 'الاوروغواي', 'هدافين الاوروغواي']
  },
  {
    id: 'pl_10',
    mode: 'password_link',
    category: 'Golden Era Spain',
    difficulty: 3,
    prompt: {
      en: 'What unique international golden sweep binds these Spanish legends?',
      ar: 'ما هو الإنجاز الدولي الذهبي غير المسبوق لمنتخب إسبانيا الذي حققه هذا الثلاثي؟'
    },
    items: [
      { en: 'Xavi Hernández', ar: 'تشافي هيرنانديز' },
      { en: 'Andrés Iniesta', ar: 'أندريس إنييستا' },
      { en: 'Iker Casillas', ar: 'إيكر كاسياس' }
    ],
    answer: {
      en: 'Won the historic treble of Euro 2008, World Cup 2010, and Euro 2012',
      ar: 'حققوا الثلاثية الدولية التاريخية: يورو 2008، ومونديال 2010، ويورو 2012'
    },
    options: [
      { en: 'Won Euro 2008, World Cup 2010, and Euro 2012 consecutively', ar: 'توجوا بيورو 2008 ومونديال 2010 ويورو 2012 على التوالي' },
      { en: 'All won the Ballon d’Or', ar: 'جميعهم فازوا بالكرة الذهبية' },
      { en: 'All played for Barcelona', ar: 'جميعهم لعبوا لبرشلونة' },
      { en: 'All played under José Mourinho', ar: 'جميعهم تدربوا تحت قيادة جوزيه مورينيو' }
    ],
    aliases: ['Spain golden era', 'Euro 2008 2012 World Cup 2010', 'اسبانيا 2008 2010 2012']
  },
  {
    id: 'pl_11',
    mode: 'password_link',
    category: 'Arab World Cup Heroes',
    difficulty: 3,
    prompt: {
      en: 'What historic World Cup glory connects this heroic trio?',
      ar: 'ما المجد المونديالي التاريخي غير المسبوق الذي صنعه هذا الثلاثي العربي الإفريقي؟'
    },
    items: [
      { en: 'Yassine Bounou', ar: 'ياسين بونو' },
      { en: 'Achraf Hakimi', ar: 'أشرف حكيمي' },
      { en: 'Sofyan Amrabat', ar: 'سفيان أمرابط' }
    ],
    answer: {
      en: 'Led Morocco to the historic World Cup Semi-Finals in Qatar 2022',
      ar: 'قادوا منتخب المغرب للإنجاز التاريخي والوصول لنصف نهائي مونديال قطر 2022'
    },
    options: [
      { en: 'Led Morocco to the World Cup semi-finals (first African/Arab team)', ar: 'قادوا المغرب لنصف نهائي كأس العالم كأول منتخب عربي وإفريقي' },
      { en: 'All play in the Spanish La Liga', ar: 'جميعهم يلعبون في الدوري الإسباني' },
      { en: 'All graduated from Wydad Casablanca academy', ar: 'جميعهم تخرجوا من مدرسة الوداد البيضاوي' },
      { en: 'All won the UEFA Europa League', ar: 'جميعهم فازوا بالدوري الأوروبي' }
    ],
    aliases: ['Morocco 2022', 'نصف نهائي كأس العالم', 'المغرب 2022']
  },
  {
    id: 'pl_12',
    mode: 'password_link',
    category: 'Free-kick Masters',
    difficulty: 4,
    prompt: {
      en: 'What specialized football artistry links these three legendary figures?',
      ar: 'ما المهارة الخارقة والتاريخية في الضربات الثابتة التي تجمع هذا الثلاثي؟'
    },
    items: [
      { en: 'Juninho Pernambucano', ar: 'جونينهو برنامبوكانو' },
      { en: 'David Beckham', ar: 'دافيد بيكهام' },
      { en: 'Siniša Mihajlović', ar: 'سينيشا ميهايلوفيتش' }
    ],
    answer: {
      en: 'Widely considered the greatest direct free-kick specialists in football history',
      ar: 'أعظم مسددي الركلات الحرة المباشرة في تاريخ كرة القدم'
    },
    options: [
      { en: 'Greatest direct free-kick masters in history (60+ direct free-kick goals)', ar: 'أعظم مسددي الركلات الحرة المباشرة في تاريخ كرة القدم' },
      { en: 'All played for AC Milan', ar: 'جميعهم لعبوا لميلان' },
      { en: 'All won the World Cup', ar: 'جميعهم فازوا بكأس العالم' },
      { en: 'All managed in the Premier League', ar: 'جميعهم دربوا في الدوري الإنجليزي' }
    ],
    aliases: ['Free kick', 'ركلات حرة', 'ضربات حرة']
  },
  {
    id: 'pl_13',
    mode: 'password_link',
    category: 'World Cup Goalkeepers',
    difficulty: 4,
    prompt: {
      en: 'What captaincy and silverware link unites these legendary shot-stoppers?',
      ar: 'ما هو الإنجاز القيادي الذهبي الذي يوحد بين عمالقة حراسة المرمى هؤلاء؟'
    },
    items: [
      { en: 'Iker Casillas (2010)', ar: 'إيكر كاسياس (2010)' },
      { en: 'Gianluigi Buffon (2006)', ar: 'جانلويجي بوفون (2006)' },
      { en: 'Dino Zoff (1982)', ar: 'دينو زوف (1982)' }
    ],
    answer: {
      en: 'World Cup winning goalkeepers who conceded only 2 goals throughout the tournament',
      ar: 'حراس مرمى توجوا بكأس العالم واستقبلت شباكهم هدفين فقط طوال البطولة'
    },
    options: [
      { en: 'World Cup winning goalkeepers who conceded only 2 goals all tournament', ar: 'حراس توجوا بالمونديال ولم تستقبل شباكهم سوى هدفين طوال البطولة' },
      { en: 'All played for Real Madrid', ar: 'جميعهم مثلوا ريال مدريد' },
      { en: 'All won the Ballon d’Or', ar: 'جميعهم فازوا بالكرة الذهبية' },
      { en: 'All scored a goal from their penalty box', ar: 'جميعهم سجلوا هدفاً من مرماهم' }
    ],
    aliases: ['World Cup 2 goals', 'استقبلوا هدفين فقط', 'كأس العالم']
  },
  {
    id: 'pl_14',
    mode: 'password_link',
    category: 'Ballon d\'Or Defenders',
    difficulty: 5,
    prompt: {
      en: 'What ultra-rare individual accolade link unites these legends?',
      ar: 'ما هو الإنجاز الفردي النادر جداً الذي يجمع بين هؤلاء المدافعين العظماء؟'
    },
    items: [
      { en: 'Franz Beckenbauer', ar: 'فرانز بيكنباور' },
      { en: 'Matthias Sammer', ar: 'ماتياس زامر' },
      { en: 'Fabio Cannavaro', ar: 'فابيو كانافارو' }
    ],
    answer: {
      en: 'The only dedicated defenders in history to win the Ballon d’Or',
      ar: 'المدافعون الوحيدون في تاريخ كرة القدم الذين توجوا بالكرة الذهبية (Ballon d’Or)'
    },
    options: [
      { en: 'The only defenders to ever win the Ballon d’Or', ar: 'المدافعون الوحيدون في التاريخ المتوجون بجائزة الكرة الذهبية' },
      { en: 'All played for Juventus', ar: 'جميعهم لعبوا ليوفنتوس' },
      { en: 'All won 3 World Cups', ar: 'جميعهم فازوا بـ 3 كؤوس عالم' },
      { en: 'All played as sweepers for Bayern Munich', ar: 'جميعهم لعبوا في بايرن ميونخ' }
    ],
    aliases: ['Defenders Ballon d\'Or', 'مدافعين الكرة الذهبية', 'كرة ذهبية دفاع']
  },
  {
    id: 'pl_15',
    mode: 'password_link',
    category: 'Egyptian Legends',
    difficulty: 4,
    prompt: {
      en: 'What African continental dominance binds these Egyptian national team icons?',
      ar: 'ما هي الهيمنة القارية الإفريقية المطلقة التي صنعت مجد هذا الثلاثي المصري؟'
    },
    items: [
      { en: 'Essam El Hadary', ar: 'عصام الحضري' },
      { en: 'Ahmed Hassan', ar: 'أحمد حسن (الصقر)' },
      { en: 'Wael Gomaa', ar: 'وائل جمعة (الصخرة)' }
    ],
    answer: {
      en: 'All won the historic three consecutive AFCON titles (2006, 2008, 2010)',
      ar: 'حققوا الثلاثية التاريخية المتتالية لكأس أمم إفريقيا (2006، 2008، 2010)'
    },
    options: [
      { en: 'Won 3 consecutive AFCON titles together (2006, 2008, 2010)', ar: 'توجوا بثلاثية أمم إفريقيا التاريخية المتتالية (2006، 2008، 2010)' },
      { en: 'All played for Anderlecht', ar: 'جميعهم احترفوا في أندرلخت البلجيكي' },
      { en: 'All scored in the 2008 AFCON Final', ar: 'جميعهم سجلوا في نهائي أمم إفريقيا 2008' },
      { en: 'All won the African Player of the Year', ar: 'جميعهم فازوا بجائزة أفضل لاعب إفريقي' }
    ],
    aliases: ['Three consecutive AFCON', 'ثلاثية أمم إفريقيا', '2006 2008 2010']
  }
];

