import { StealRoundQuestion } from '../types/game';

export const stealRoundQuestions: StealRoundQuestion[] = [
  {
    id: 'sr_1',
    mode: 'steal_round',
    category: 'World Cup Heartbreak',
    difficulty: 4,
    prompt: {
      en: 'Which European powerhouse has reached THREE FIFA World Cup Finals (1974, 1978, 2010) without ever winning one?',
      ar: 'أي عملاق أوروبي وصل إلى نهائي كأس العالم 3 مرات (1974، 1978، 2010) ولم يتوج باللقب قط؟'
    },
    answer: { en: 'Netherlands', ar: 'هولندا (الطواحين الهولندية)' },
    options: [
      { en: 'Netherlands', ar: 'هولندا' },
      { en: 'Hungary', ar: 'المجر' },
      { en: 'Sweden', ar: 'السويد' },
      { en: 'Croatia', ar: 'كرواتيا' }
    ]
  },
  {
    id: 'sr_2',
    mode: 'steal_round',
    category: 'Europa League Kings',
    difficulty: 3,
    prompt: {
      en: 'Which Spanish club has won the UEFA Europa League / UEFA Cup a record 7 times?',
      ar: 'ما هو النادي الإسباني صاحب الرقم القياسي التاريخي بالفوز بالدوري الأوروبي 7 مرات؟'
    },
    answer: { en: 'Sevilla FC', ar: 'إشبيلية' },
    options: [
      { en: 'Atlético Madrid', ar: 'أتلتيكو مدريد' },
      { en: 'Sevilla FC', ar: 'إشبيلية' },
      { en: 'Valencia', ar: 'فالنسيا' },
      { en: 'Villarreal', ar: 'فياريال' }
    ]
  },
  {
    id: 'sr_3',
    mode: 'steal_round',
    category: 'World Cup Golden Boot',
    difficulty: 3,
    prompt: {
      en: 'Who won the Golden Boot (Top Scorer) at the 2018 FIFA World Cup in Russia with 6 goals?',
      ar: 'من هو مهاجم إنجلترا الفائز بالحذاء الذهبي لهداف كأس العالم 2018 في روسيا برصيد 6 أهداف؟'
    },
    answer: { en: 'Harry Kane', ar: 'هاري كين' },
    options: [
      { en: 'Kylian Mbappé', ar: 'كيليان مبابي' },
      { en: 'Antoine Griezmann', ar: 'أنطوان غريزمان' },
      { en: 'Harry Kane', ar: 'هاري كين' },
      { en: 'Romelu Lukaku', ar: 'روميلو لوكاكو' }
    ]
  },
  {
    id: 'sr_4',
    mode: 'steal_round',
    category: 'Manager Origins',
    difficulty: 4,
    prompt: {
      en: 'Which German club did Jürgen Klopp manage for 7 years before taking over Borussia Dortmund in 2008?',
      ar: 'ما هو النادي الألماني الذي دربه يورغن كلوب لمدة 7 سنوات قبل تدريب بوروسيا دورتموند عام 2008؟'
    },
    answer: { en: 'Mainz 05', ar: 'ماينز 05' },
    options: [
      { en: 'Mainz 05', ar: 'ماينز 05' },
      { en: 'Eintracht Frankfurt', ar: 'آينتراخت فرانكفورت' },
      { en: 'Hannover 96', ar: 'هانوفر 96' },
      { en: 'VfB Stuttgart', ar: 'شتوتغارت' }
    ]
  },
  {
    id: 'sr_5',
    mode: 'steal_round',
    category: 'AFCON Historic Host',
    difficulty: 3,
    prompt: {
      en: 'Which North African nation won the 2004 Africa Cup of Nations on home soil, defeating Morocco 2-1 in the final?',
      ar: 'أي منتخب عربي شقيق فاز بكأس أمم إفريقيا 2004 على أرضه بعد فوزه على المغرب 2-1 في النهائي؟'
    },
    answer: { en: 'Tunisia', ar: 'تونس (نسور قرطاج)' },
    options: [
      { en: 'Tunisia', ar: 'تونس' },
      { en: 'Algeria', ar: 'الجزائر' },
      { en: 'Egypt', ar: 'مصر' },
      { en: 'Morocco', ar: 'المغرب' }
    ]
  },
  {
    id: 'sr_6',
    mode: 'steal_round',
    category: 'Glove-less Hero',
    difficulty: 5,
    prompt: {
      en: 'Which goalkeeper famously took off his gloves to save Darius Vassell’s penalty before scoring the winning penalty himself in Euro 2004?',
      ar: 'من هو الحارس البرتغالي الذي خلع قفازيه وتصدى لركلة جزاء ثم سجل ركلة الفوز بنفسه ضد إنجلترا بيورو 2004؟'
    },
    answer: { en: 'Ricardo (Portugal)', ar: 'ريكاردو (حارس البرتغال)' },
    options: [
      { en: 'Ricardo (Portugal)', ar: 'ريكاردو (حارس البرتغال)' },
      { en: 'Vítor Baía', ar: 'فيتور بايا' },
      { en: 'Quim', ar: 'كيم' },
      { en: 'Eduardo', ar: 'إدواردو' }
    ]
  },
  {
    id: 'sr_7',
    mode: 'steal_round',
    category: 'Legendary Venues',
    difficulty: 4,
    prompt: {
      en: 'Which stadium is the only venue to have hosted TWO FIFA World Cup Finals (1970 and 1986)?',
      ar: 'ما هو الملعب الوحيد في العالم الذي استضاف نهائيين لكأس العالم (نهائي 1970 لبيليه ونهائي 1986 لمارادونا)؟'
    },
    answer: { en: 'Estadio Azteca (Mexico City)', ar: 'استاد أزتيكا (مكسيكو سيتي)' },
    options: [
      { en: 'Estadio Azteca (Mexico City)', ar: 'استاد أزتيكا (مكسيكو سيتي)' },
      { en: 'Maracanã Stadium', ar: 'ملعب الماراكانا' },
      { en: 'Wembley Stadium', ar: 'ملعب ويمبلي' },
      { en: 'Santiago Bernabéu', ar: 'سانتياغو برنابيو' }
    ]
  },
  {
    id: 'sr_8',
    mode: 'steal_round',
    category: 'AFCON Origins',
    difficulty: 4,
    prompt: {
      en: 'Which country won the inaugural Africa Cup of Nations held in Sudan in 1957?',
      ar: 'أي منتخب فاز بالنسخة الافتتاحية الأولى لكأس أمم إفريقيا التي أقيمت في السودان عام 1957؟'
    },
    answer: { en: 'Egypt', ar: 'مصر' },
    options: [
      { en: 'Egypt', ar: 'مصر' },
      { en: 'Sudan', ar: 'السودان' },
      { en: 'Ethiopia', ar: 'إثيوبيا' },
      { en: 'Ghana', ar: 'غانا' }
    ]
  },
  {
    id: 'sr_9',
    mode: 'steal_round',
    category: 'Disciplinary Record',
    difficulty: 5,
    prompt: {
      en: 'Which Colombian defensive midfielder holds the notorious world record for receiving 46 RED CARDS in his career?',
      ar: 'من هو اللاعب الكولومبي صاحب الرقم القياسي العالمي غير المرغوب بنيل 46 بطاقة حمراء طوال مسيرته؟'
    },
    answer: { en: 'Gerardo Bedoya', ar: 'خيراردو بيدويا' },
    options: [
      { en: 'Gerardo Bedoya', ar: 'خيراردو بيدويا' },
      { en: 'Sergio Ramos', ar: 'سيرخيو راموس' },
      { en: 'Pepe', ar: 'بيبي' },
      { en: 'Cyril Rool', ar: 'سيريل رول' }
    ]
  },
  {
    id: 'sr_10',
    mode: 'steal_round',
    category: 'Youngest World Cup Goalscorer',
    difficulty: 4,
    prompt: {
      en: 'Who remains the youngest goalscorer in FIFA World Cup history (aged 17 years and 239 days in 1958)?',
      ar: 'من هو أصغر لاعب في تاريخ كأس العالم يسجل هدفاً (في سن 17 عاماً و239 يوماً سنة 1958)؟'
    },
    answer: { en: 'Pelé', ar: 'بيليه' },
    options: [
      { en: 'Pelé', ar: 'بيليه' },
      { en: 'Kylian Mbappé', ar: 'كيليان مبابي' },
      { en: 'Michael Owen', ar: 'مايكل أوين' },
      { en: 'Lionel Messi', ar: 'ليونيل ميسي' }
    ]
  },
  {
    id: 'sr_11',
    mode: 'steal_round',
    category: 'Copa Libertadores',
    difficulty: 4,
    prompt: {
      en: 'Which Argentine club has won the most Copa Libertadores titles in history (7 titles)?',
      ar: 'ما هو النادي الأرجنتيني الأكثر تتويجاً ببطولة كوبا ليبرتادوريس عبر التاريخ (7 ألقاب)؟'
    },
    answer: { en: 'Independiente', ar: 'إنديبندينتي (Independiente)' },
    options: [
      { en: 'Boca Juniors', ar: 'بوكا جونيورز' },
      { en: 'River Plate', ar: 'ريفر بليت' },
      { en: 'Independiente', ar: 'إنديبندينتي' },
      { en: 'Estudiantes', ar: 'إستوديانتيس' }
    ]
  },
  {
    id: 'sr_12',
    mode: 'steal_round',
    category: 'Champions League Red Cards',
    difficulty: 5,
    prompt: {
      en: 'Who was the Arsenal goalkeeper sent off in the 18th minute of the 2006 Champions League Final against Barcelona?',
      ar: 'من هو حارس أرسنال الذي طُرد بالبطاقة الحمراء في الدقيقة 18 من نهائي دوري الأبطال 2006 أمام برشلونة؟'
    },
    answer: { en: 'Jens Lehmann', ar: 'ينس ليمان' },
    options: [
      { en: 'Manuel Almunia', ar: 'مانويل ألمونيا' },
      { en: 'Jens Lehmann', ar: 'ينس ليمان' },
      { en: 'David Seaman', ar: 'دافيد سيمان' },
      { en: 'Łukasz Fabiański', ar: 'لوكاس فابيانسكي' }
    ]
  },
  {
    id: 'sr_13',
    mode: 'steal_round',
    category: 'World Cup Hat-tricks',
    difficulty: 4,
    prompt: {
      en: 'Besides Kylian Mbappé in 2022, who is the ONLY other player to score a hat-trick in a FIFA World Cup Final (1966)?',
      ar: 'بجانب كيليان مبابي 2022، من هو اللاعب الآخر الوحيد في تاريخ كأس العالم الذي سجل هاتريك في النهائي (1966)؟'
    },
    answer: { en: 'Geoff Hurst (England)', ar: 'جيف هيرست (إنجلترا)' },
    options: [
      { en: 'Bobby Charlton', ar: 'بوبي تشارلتون' },
      { en: 'Geoff Hurst (England)', ar: 'جيف هيرست (إنجلترا)' },
      { en: 'Gerd Müller', ar: 'غيرد مولر' },
      { en: 'Pelé', ar: 'بيليه' }
    ]
  },
  {
    id: 'sr_14',
    mode: 'steal_round',
    category: 'Transfer Landmarks',
    difficulty: 4,
    prompt: {
      en: 'In 2001, who became the most expensive player in the world when Real Madrid paid 150 billion Italian lire (€77.5M)?',
      ar: 'في عام 2001، من هو النجم الذي أصبح أغلى لاعب في العالم بصفقة انتقال قياسية لريال مدريد بلغت 77.5 مليون يورو؟'
    },
    answer: { en: 'Zinedine Zidane (from Juventus)', ar: 'زين الدين زيدان (من يوفنتوس)' },
    options: [
      { en: 'Zinedine Zidane', ar: 'زين الدين زيدان' },
      { en: 'Luís Figo', ar: 'لويس فيغو' },
      { en: 'Ronaldo Nazário', ar: 'رونالدو الظاهرة' },
      { en: 'David Beckham', ar: 'دافيد بيكهام' }
    ]
  },
  {
    id: 'sr_15',
    mode: 'steal_round',
    category: 'Invincible Seasons',
    difficulty: 4,
    prompt: {
      en: 'Which Italian club went the entire 2011–12 Serie A season undefeated under Antonio Conte?',
      ar: 'أي نادٍ إيطالي أنهى موسم الدوري الإيطالي 2011-2012 كاملاً بدون أي هزيمة تحت قيادة أنطونيو كونتي؟'
    },
    answer: { en: 'Juventus', ar: 'يوفنتوس' },
    options: [
      { en: 'AC Milan', ar: 'إيه سي ميلان' },
      { en: 'Inter Milan', ar: 'إنتر ميلان' },
      { en: 'Juventus', ar: 'يوفنتوس' },
      { en: 'Napoli', ar: 'نابولي' }
    ]
  }
];

