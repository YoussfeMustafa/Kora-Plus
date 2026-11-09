import { JokerDoubleQuestion } from '../types/game';

export const jokerDoubleQuestions: JokerDoubleQuestion[] = [
  {
    id: 'jd_1',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 5,
    prompt: {
      en: 'Who is the only footballer to have won the UEFA Champions League with THREE different clubs?',
      ar: 'من هو اللاعب الوحيد في تاريخ كرة القدم الذي فاز بدوري أبطال أوروبا مع 3 أندية مختلفة؟'
    },
    answer: { en: 'Clarence Seedorf (Ajax, Real Madrid, Milan)', ar: 'كلارنس سيدورف (أياكس، ريال مدريد، ميلان)' },
    options: [
      { en: 'Clarence Seedorf', ar: 'كلارنس سيدورف (أياكس، ريال مدريد، ميلان)' },
      { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
      { en: 'Samuel Eto\'o', ar: 'صامويل إيتو' },
      { en: 'Zlatan Ibrahimović', ar: 'زلاتان إبراهيموفيتش' }
    ]
  },
  {
    id: 'jd_2',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 4,
    prompt: {
      en: 'Who was the first ever African player to win the Ballon d’Or (in 1995)?',
      ar: 'من هو أول لاعب إفريقي في التاريخ يتوج بجائزة الكرة الذهبية (عام 1995)؟'
    },
    answer: { en: 'George Weah', ar: 'جورج وياه' },
    options: [
      { en: 'Roger Milla', ar: 'روجيه ميلا' },
      { en: 'George Weah', ar: 'جورج وياه' },
      { en: 'Abedi Pele', ar: 'عبيدي بيليه' },
      { en: 'Samuel Eto\'o', ar: 'صامويل إيتو' }
    ]
  },
  {
    id: 'jd_3',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 4,
    prompt: {
      en: 'Who scored 5 goals in just 9 unbelievable minutes coming off the bench in 2015?',
      ar: 'من هو المهاجم الذي سجل 5 أهداف في 9 دقائق إعجازية بعد نزوله كبديل عام 2015؟'
    },
    answer: { en: 'Robert Lewandowski (vs Wolfsburg)', ar: 'روبرت ليفاندوفسكي (ضد فولفسبورغ)' },
    options: [
      { en: 'Erling Haaland', ar: 'إيرلينغ هالاند' },
      { en: 'Robert Lewandowski', ar: 'روبرت ليفاندوفسكي' },
      { en: 'Sergio Agüero', ar: 'سيرخيو أغويرو' },
      { en: 'Karim Benzema', ar: 'كريم بنزيما' }
    ]
  },
  {
    id: 'jd_4',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 4,
    prompt: {
      en: 'Who won the very first FIFA Puskás Award in 2009 for his 40-yard missile against Porto?',
      ar: 'من هو الفائز بالنسخة الأولى في تاريخ جائزة بوشكاش 2009 بتسديدة صاروخية من 40 ياردة ضد بورتو؟'
    },
    answer: { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
    options: [
      { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
      { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
      { en: 'Fernando Torres', ar: 'فيرناندو توريس' },
      { en: 'Zlatan Ibrahimović', ar: 'زلاتان إبراهيموفيتش' }
    ]
  },
  {
    id: 'jd_5',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 3,
    prompt: {
      en: 'Which goalkeeper holds the all-time record for most clean sheets in Premier League history (202)?',
      ar: 'من هو الحارس صاحب الرقم القياسي لأكثر شباك نظيفة في تاريخ البريميرليغ (202 كلين شيت)؟'
    },
    answer: { en: 'Petr Čech', ar: 'بيتر تشيك' },
    options: [
      { en: 'David de Gea', ar: 'دافيد دي خيا' },
      { en: 'Peter Schmeichel', ar: 'بيتر شمايكل' },
      { en: 'Petr Čech', ar: 'بيتر تشيك' },
      { en: 'Edwin van der Sar', ar: 'أدوين فان در سار' }
    ]
  },
  {
    id: 'jd_6',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 4,
    prompt: {
      en: 'Who scored the extra-time winner for Portugal in the Euro 2016 Final against France?',
      ar: 'من هو اللاعب البديل صاحب هدف الفوز الصاعق للبرتغال في نهائي يورو 2016 ضد فرنسا؟'
    },
    answer: { en: 'Éder', ar: 'إيدير (Éder)' },
    options: [
      { en: 'Nani', ar: 'ناني' },
      { en: 'Éder', ar: 'إيدير' },
      { en: 'Ricardo Quaresma', ar: 'ريكاردو كواريزما' },
      { en: 'Renato Sanches', ar: 'ريناتو سانشيز' }
    ]
  },
  {
    id: 'jd_7',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 3,
    prompt: {
      en: 'Which country won the 2015 and 2016 back-to-back Copa América titles on penalties against Argentina?',
      ar: 'أي منتخب حقق لقبي كوبا أمريكا المتتاليين 2015 و2016 بركلات الترجيح أمام الأرجنتين؟'
    },
    answer: { en: 'Chile', ar: 'تشيلي' },
    options: [
      { en: 'Uruguay', ar: 'الأوروغواي' },
      { en: 'Colombia', ar: 'كولومبيا' },
      { en: 'Chile', ar: 'تشيلي' },
      { en: 'Brazil', ar: 'البرازيل' }
    ]
  },
  {
    id: 'jd_8',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 5,
    prompt: {
      en: 'Who won the Golden Boot at the 2014 FIFA World Cup in Brazil with 6 goals?',
      ar: 'من هو النجم الكولومبي الفائز بالحذاء الذهبي لهداف كأس العالم 2014 في البرازيل بـ 6 أهداف؟'
    },
    answer: { en: 'James Rodríguez', ar: 'خاميس رودريغيز' },
    options: [
      { en: 'Thomas Müller', ar: 'توماس مولر' },
      { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
      { en: 'James Rodríguez', ar: 'خاميس رودريغيز' },
      { en: 'Neymar Jr.', ar: 'نيمار جونيور' }
    ]
  },
  {
    id: 'jd_9',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 4,
    prompt: {
      en: 'Which club did Arsène Wenger manage directly before taking over Arsenal in 1996?',
      ar: 'ما هو النادي الذي كان يدربه الفرنسي أرسين فينغر مباشرة قبل تدريب أرسنال عام 1996؟'
    },
    answer: { en: 'Nagoya Grampus Eight (Japan)', ar: 'ناغويا غرامبوس إيت (اليابان)' },
    options: [
      { en: 'AS Monaco', ar: 'موناكو' },
      { en: 'Nagoya Grampus Eight', ar: 'ناغويا غرامبوس إيت (اليابان)' },
      { en: 'Paris Saint-Germain', ar: 'باريس سان جيرمان' },
      { en: 'Nancy', ar: 'نانسي' }
    ]
  },
  {
    id: 'jd_10',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 3,
    prompt: {
      en: 'Which nation has won the FIFA World Cup the most times in history (5 titles)?',
      ar: 'ما هو المنتخب الأكثر تتويجاً ببطولة كأس العالم عبر التاريخ (5 مرات)؟'
    },
    answer: { en: 'Brazil (Pentacampeão)', ar: 'البرازيل (5 ألقاب)' },
    options: [
      { en: 'Germany', ar: 'ألمانيا' },
      { en: 'Italy', ar: 'إيطاليا' },
      { en: 'Brazil (Pentacampeão)', ar: 'البرازيل (5 ألقاب)' },
      { en: 'Argentina', ar: 'الأرجنتين' }
    ]
  },
  {
    id: 'jd_11',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 5,
    prompt: {
      en: 'Who is the only player to score in 5 different FIFA World Cup editions?',
      ar: 'من هو اللاعب الوحيد في التاريخ الذي سجل أهدافاً في 5 نسخ مختلفة من كأس العالم؟'
    },
    answer: { en: 'Cristiano Ronaldo (2006, 2010, 2014, 2018, 2022)', ar: 'كريستيانو رونالدو (2006، 2010، 2014، 2018، 2022)' },
    options: [
      { en: 'Pelé', ar: 'بيليه' },
      { en: 'Miroslav Klose', ar: 'ميروسلاف كلوزه' },
      { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
      { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' }
    ]
  },
  {
    id: 'jd_12',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 4,
    prompt: {
      en: 'Which club did Diego Maradona play for when he won two historic Italian Serie A titles in 1987 and 1990?',
      ar: 'أي نادٍ قاده الأسطورة دييغو مارادونا للقبين تاريخيين في الدوري الإيطالي (1987 و1990)؟'
    },
    answer: { en: 'Napoli', ar: 'نابولي' },
    options: [
      { en: 'Roma', ar: 'روما' },
      { en: 'Napoli', ar: 'نابولي' },
      { en: 'Lazio', ar: 'لاتسيو' },
      { en: 'Fiorentina', ar: 'فيورنتينا' }
    ]
  },
  {
    id: 'jd_13',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 4,
    prompt: {
      en: 'Who scored Manchester United’s winning goal in the 2008 UEFA Champions League semi-final against Barcelona?',
      ar: 'من سجل صاروخ الفوز لمانشستر يونايتد في نصف نهائي دوري أبطال أوروبا 2008 أمام برشلونة؟'
    },
    answer: { en: 'Paul Scholes', ar: 'بول سكولز' },
    options: [
      { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
      { en: 'Wayne Rooney', ar: 'واين روني' },
      { en: 'Paul Scholes', ar: 'بول سكولز' },
      { en: 'Carlos Tevez', ar: 'كارلوس تيفيز' }
    ]
  },
  {
    id: 'jd_14',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 3,
    prompt: {
      en: 'Who was named the Best Young Player at the 2022 FIFA World Cup in Qatar?',
      ar: 'من هو النجم الأرجنتيني الشاب المتوج بجائزة أفضل لاعب شاب في مونديال قطر 2022؟'
    },
    answer: { en: 'Enzo Fernández', ar: 'إنزو فيرنانديز' },
    options: [
      { en: 'Julián Álvarez', ar: 'خوليان ألفاريز' },
      { en: 'Jude Bellingham', ar: 'جود بيلينغهام' },
      { en: 'Enzo Fernández', ar: 'إنزو فيرنانديز' },
      { en: 'Gavi', ar: 'بيدري غافي' }
    ]
  },
  {
    id: 'jd_15',
    mode: 'joker_double',
    category: 'Double Points Jackpot',
    difficulty: 4,
    prompt: {
      en: 'Which English stadium is known as "The Theatre of Dreams"?',
      ar: 'أي ملعب إنجليزي شهير يُعرف بلقب "مسرح الأحلام" (The Theatre of Dreams)؟'
    },
    answer: { en: 'Old Trafford (Manchester United)', ar: 'أولد ترافورد (مانشستر يونايتد)' },
    options: [
      { en: 'Anfield', ar: 'أنفيلد' },
      { en: 'Old Trafford', ar: 'أولد ترافورد (مانشستر يونايتد)' },
      { en: 'Wembley', ar: 'ويمبلي' },
      { en: 'Stamford Bridge', ar: 'ستامفورد بريدج' }
    ]
  }
];

