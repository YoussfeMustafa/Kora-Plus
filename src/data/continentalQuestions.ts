import { ContinentalTournamentsQuestion } from '../types/game';

export const continentalQuestions: ContinentalTournamentsQuestion[] = [
  {
    id: 'ct_1',
    mode: 'continental_tournaments',
    category: 'FIFA World Cup',
    difficulty: 3,
    prompt: {
      en: 'Which country hosted the first ever FIFA World Cup in the Arab world in 2022?',
      ar: 'أي دولة استضافت أول بطولة لكأس العالم في التاريخ على أرض عربية عام 2022؟'
    },
    tournamentName: { en: 'FIFA World Cup 2022', ar: 'كأس العالم قطر 2022' },
    answer: { en: 'Qatar', ar: 'قطر' },
    options: [
      { en: 'Qatar', ar: 'قطر' },
      { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' },
      { en: 'Egypt', ar: 'مصر' }
    ]
  },
  {
    id: 'ct_2',
    mode: 'continental_tournaments',
    category: 'Africa Cup of Nations (AFCON)',
    difficulty: 3,
    prompt: {
      en: 'Which national team won the 2023 Africa Cup of Nations (held in early 2024) on home soil in miraculous fashion?',
      ar: 'أي منتخب توج بلقب كأس أمم إفريقيا 2023 (المقامة في 2024) على أرضه بسيناريو إعجازي؟'
    },
    tournamentName: { en: 'AFCON 2023', ar: 'كأس أمم إفريقيا 2023' },
    answer: { en: 'Ivory Coast (Côte d\'Ivoire)', ar: 'كوت ديفوار (ساحل العاج)' },
    options: [
      { en: 'Nigeria', ar: 'نيجيريا' },
      { en: 'Ivory Coast (Côte d\'Ivoire)', ar: 'كوت ديفوار (ساحل العاج)' },
      { en: 'Senegal', ar: 'السنغال' },
      { en: 'Morocco', ar: 'المغرب' }
    ]
  },
  {
    id: 'ct_3',
    mode: 'continental_tournaments',
    category: 'AFC Asian Cup',
    difficulty: 3,
    prompt: {
      en: 'Which nation won back-to-back AFC Asian Cup titles in 2019 and 2023?',
      ar: 'أي منتخب عربي حقق لقب كأس آسيا مرتين متتاليتين في نسختي 2019 و2023؟'
    },
    tournamentName: { en: 'AFC Asian Cup', ar: 'كأس أمم آسيا' },
    answer: { en: 'Qatar', ar: 'قطر' },
    options: [
      { en: 'Japan', ar: 'اليابان' },
      { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      { en: 'Qatar', ar: 'قطر' },
      { en: 'South Korea', ar: 'كوريا الجنوبية' }
    ]
  },
  {
    id: 'ct_4',
    mode: 'continental_tournaments',
    category: 'FIFA Arab Cup',
    difficulty: 3,
    prompt: {
      en: 'Which nation won the 2021 FIFA Arab Cup held in Qatar after a thrilling final against Tunisia?',
      ar: 'أي منتخب توج بلقب كأس العرب فيفا 2021 في قطر بعد نهائي مثير أمام تونس؟'
    },
    tournamentName: { en: 'FIFA Arab Cup 2021', ar: 'كأس العرب 2021' },
    answer: { en: 'Algeria', ar: 'الجزائر' },
    options: [
      { en: 'Algeria', ar: 'الجزائر' },
      { en: 'Morocco', ar: 'المغرب' },
      { en: 'Egypt', ar: 'مصر' },
      { en: 'Qatar', ar: 'قطر' }
    ]
  },
  {
    id: 'ct_5',
    mode: 'continental_tournaments',
    category: 'UEFA Champions League',
    difficulty: 4,
    prompt: {
      en: 'Which manager won three consecutive UEFA Champions League titles between 2016 and 2018?',
      ar: 'من هو المدرب الأسطوري الذي قاد ريال مدريد لثلاثة ألقاب متتالية في دوري أبطال أوروبا (2016-2018)؟'
    },
    tournamentName: { en: 'UEFA Champions League', ar: 'دوري أبطال أوروبا' },
    answer: { en: 'Zinedine Zidane', ar: 'زين الدين زيدان' },
    options: [
      { en: 'Pep Guardiola', ar: 'بيب غوارديولا' },
      { en: 'Zinedine Zidane', ar: 'زين الدين زيدان' },
      { en: 'Carlo Ancelotti', ar: 'كارلو أنشيلوتي' },
      { en: 'José Mourinho', ar: 'جوزيه مورينيو' }
    ]
  },
  {
    id: 'ct_6',
    mode: 'continental_tournaments',
    category: 'CAF Champions League',
    difficulty: 4,
    prompt: {
      en: 'Which Moroccan club won the 2022 CAF Champions League title defeating Al Ahly 2-0 in the final in Casablanca?',
      ar: 'أي نادٍ مغربي توج بلقب دوري أبطال إفريقيا 2022 بعد فوزه على الأهلي المصري 2-0 في الدار البيضاء؟'
    },
    tournamentName: { en: 'CAF Champions League 2022', ar: 'دوري أبطال إفريقيا 2022' },
    answer: { en: 'Wydad Casablanca', ar: 'الوداد البيضاوي' },
    options: [
      { en: 'Raja Casablanca', ar: 'الرجاء البيضاوي' },
      { en: 'Wydad Casablanca', ar: 'الوداد البيضاوي' },
      { en: 'FAR Rabat', ar: 'الجيش الملكي' },
      { en: 'RS Berkane', ar: 'نهضة بركان' }
    ]
  },
  {
    id: 'ct_7',
    mode: 'continental_tournaments',
    category: 'AFC Champions League',
    difficulty: 3,
    prompt: {
      en: 'Which Saudi club holds the record for the most AFC Champions League titles (4 titles)?',
      ar: 'ما هو النادي السعودي الأكثر تتويجاً بلقب دوري أبطال آسيا عبر التاريخ (4 ألقاب)؟'
    },
    tournamentName: { en: 'AFC Champions League', ar: 'دوري أبطال آسيا' },
    answer: { en: 'Al Hilal SFC', ar: 'الهلال السعودي (الزعيم)' },
    options: [
      { en: 'Al Nassr', ar: 'النصر السعودي' },
      { en: 'Al Hilal SFC', ar: 'الهلال السعودي (الزعيم)' },
      { en: 'Al Ittihad', ar: 'الاتحاد السعودي' },
      { en: 'Al Ahli', ar: 'الأهلي السعودي' }
    ]
  },
  {
    id: 'ct_8',
    mode: 'continental_tournaments',
    category: 'AFCON Historic',
    difficulty: 3,
    prompt: {
      en: 'Which country achieved the unprecedented historic "Three-peat" winning AFCON 2006, 2008, and 2010?',
      ar: 'أي منتخب حقق الإنجاز التاريخي غير المسبوق بالفوز بكأس أمم إفريقيا 3 مرات متتالية (2006، 2008، 2010)؟'
    },
    tournamentName: { en: 'Africa Cup of Nations', ar: 'كأس أمم إفريقيا' },
    answer: { en: 'Egypt (under Hassan Shehata)', ar: 'مصر (بقيادة المعلم حسن شحاتة)' },
    options: [
      { en: 'Cameroon', ar: 'الكاميرون' },
      { en: 'Ghana', ar: 'غانا' },
      { en: 'Egypt (under Hassan Shehata)', ar: 'مصر (بقيادة المعلم حسن شحاتة)' },
      { en: 'Nigeria', ar: 'نيجيريا' }
    ]
  },
  {
    id: 'ct_9',
    mode: 'continental_tournaments',
    category: 'FIFA World Cup',
    difficulty: 4,
    prompt: {
      en: 'Who scored the dramatic 116th-minute winning goal for Spain in the 2010 FIFA World Cup Final?',
      ar: 'من هو النجم الإسباني صاحب هدف التتويج التاريخي بكأس العالم 2010 في الدقيقة 116 ضد هولندا؟'
    },
    tournamentName: { en: 'FIFA World Cup 2010', ar: 'كأس العالم 2010' },
    answer: { en: 'Andrés Iniesta', ar: 'أندريس إنييستا' },
    options: [
      { en: 'David Villa', ar: 'دافيد فيا' },
      { en: 'Andrés Iniesta', ar: 'أندريس إنييستا' },
      { en: 'Fernando Torres', ar: 'فيرناندو توريس' },
      { en: 'Xavi Hernández', ar: 'تشافي هيرنانديز' }
    ]
  },
  {
    id: 'ct_10',
    mode: 'continental_tournaments',
    category: 'UEFA European Championship',
    difficulty: 3,
    prompt: {
      en: 'Which underdog nation shocked Europe by winning Euro 2004 in Portugal at massive odds?',
      ar: 'أي منتخب فجر كبرى مفاجآت القرن وتوج بلقب كأس أمم أوروبا (يورو 2004) في البرتغال؟'
    },
    tournamentName: { en: 'UEFA Euro 2004', ar: 'يورو 2004' },
    answer: { en: 'Greece', ar: 'اليونان' },
    options: [
      { en: 'Czech Republic', ar: 'التشيك' },
      { en: 'Greece', ar: 'اليونان' },
      { en: 'Portugal', ar: 'البرتغال' },
      { en: 'Denmark', ar: 'الدنمارك' }
    ]
  },
  {
    id: 'ct_11',
    mode: 'continental_tournaments',
    category: 'AFC Asian Cup Historic',
    difficulty: 4,
    prompt: {
      en: 'Which underdog national team united its war-torn nation to win the 2007 AFC Asian Cup in Jakarta?',
      ar: 'أي منتخب عربي سطر ملحمة تاريخية ووحد شعبه وتوج بلقب كأس آسيا 2007 في جاكرتا؟'
    },
    tournamentName: { en: 'AFC Asian Cup 2007', ar: 'كأس أمم آسيا 2007' },
    answer: { en: 'Iraq (The Lions of Mesopotamia)', ar: 'العراق (أسود الرافدين بقيادة يونس محمود)' },
    options: [
      { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      { en: 'Iraq (The Lions of Mesopotamia)', ar: 'العراق (أسود الرافدين بقيادة يونس محمود)' },
      { en: 'Jordan', ar: 'الأردن' },
      { en: 'Syria', ar: 'سوريا' }
    ]
  },
  {
    id: 'ct_12',
    mode: 'continental_tournaments',
    category: 'Copa América',
    difficulty: 3,
    prompt: {
      en: 'At which historic stadium did Lionel Messi and Argentina win the 2021 Copa América against Brazil?',
      ar: 'على أي ملعب تاريخي في البرازيل توج ليونيل ميسي والأرجنتين بلقب كوبا أمريكا 2021؟'
    },
    tournamentName: { en: 'Copa América 2021', ar: 'كوبا أمريكا 2021' },
    answer: { en: 'Maracanã Stadium (Rio de Janeiro)', ar: 'ملعب الماراكانا (ريو دي جانيرو)' },
    options: [
      { en: 'Maracanã Stadium', ar: 'ملعب الماراكانا' },
      { en: 'Monumental de Núñez', ar: 'ملعب المونومنتال' },
      { en: 'Morumbi Stadium', ar: 'ملعب مورومبي' },
      { en: 'Centenario Stadium', ar: 'ملعب سنتيناريو' }
    ]
  },
  {
    id: 'ct_13',
    mode: 'continental_tournaments',
    category: 'CAF Champions League Rivalry',
    difficulty: 4,
    prompt: {
      en: 'Which Tunisian giant won back-to-back CAF Champions League titles in 2018 and 2019?',
      ar: 'أي عملاق تونسي حقق لقب دوري أبطال إفريقيا في نسختين متتاليتين عامي 2018 و2019؟'
    },
    tournamentName: { en: 'CAF Champions League', ar: 'دوري أبطال إفريقيا' },
    answer: { en: 'Espérance Sportive de Tunis (EST)', ar: 'الترجي الرياضي التونسي' },
    options: [
      { en: 'Étoile du Sahel', ar: 'النجم الساحلي' },
      { en: 'Club Africain', ar: 'النادي الإفريقي' },
      { en: 'Espérance Sportive de Tunis (EST)', ar: 'الترجي الرياضي التونسي' },
      { en: 'CS Sfaxien', ar: 'النادي الصفاقسي' }
    ]
  },
  {
    id: 'ct_14',
    mode: 'continental_tournaments',
    category: 'World Cup Golden Ball',
    difficulty: 3,
    prompt: {
      en: 'Who is the only player in football history to win the FIFA World Cup Golden Ball (Best Player) TWICE?',
      ar: 'من هو اللاعب الوحيد في التاريخ الذي فاز بجائزة الكرة الذهبية لأفضل لاعب في المونديال مرتين؟'
    },
    tournamentName: { en: 'FIFA World Cup (2014 & 2022)', ar: 'كأس العالم (2014 و2022)' },
    answer: { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
    options: [
      { en: 'Diego Maradona', ar: 'دييغو مارادونا' },
      { en: 'Pelé', ar: 'بيليه' },
      { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
      { en: 'Ronaldo Nazário', ar: 'رونالدو الظاهرة' }
    ]
  },
  {
    id: 'ct_15',
    mode: 'continental_tournaments',
    category: 'Arab Club Championship',
    difficulty: 3,
    prompt: {
      en: 'Which club won the 2023 Arab Club Champions Cup (King Salman Club Cup) led by Cristiano Ronaldo?',
      ar: 'أي نادٍ توج بكأس الملك سلمان للأندية الأبطال (كأس العرب) 2023 بقيادة كريستيانو رونالدو؟'
    },
    tournamentName: { en: 'King Salman Club Cup 2023', ar: 'كأس الملك سلمان للأندية 2023' },
    answer: { en: 'Al Nassr FC', ar: 'النصر السعودي' },
    options: [
      { en: 'Al Hilal', ar: 'الهلال السعودي' },
      { en: 'Al Nassr FC', ar: 'النصر السعودي' },
      { en: 'Al Ittihad', ar: 'الاتحاد السعودي' },
      { en: 'Al Shabab', ar: 'الشباب السعودي' }
    ]
  }
];

