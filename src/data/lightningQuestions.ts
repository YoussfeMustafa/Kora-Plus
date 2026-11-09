import { LightningQuestion } from '../types/game';

export const lightningQuestions: LightningQuestion[] = [
  {
    id: 'lq_1',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 2,
    prompt: {
      en: 'Which country won the 2018 FIFA World Cup in Russia?',
      ar: 'أي منتخب توج بلقب كأس العالم 2018 في روسيا؟'
    },
    correctAnswer: { en: 'France', ar: 'فرنسا' },
    options: [
      { en: 'Croatia', ar: 'كرواتيا' },
      { en: 'France', ar: 'فرنسا' },
      { en: 'Belgium', ar: 'بلجيكا' },
      { en: 'England', ar: 'إنجلترا' }
    ]
  },
  {
    id: 'lq_2',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 2,
    prompt: {
      en: 'Who holds the record for most Ballon d’Or awards?',
      ar: 'من هو اللاعب الأكثر تتويجاً بجائزة الكرة الذهبية عبر التاريخ؟'
    },
    correctAnswer: { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
    options: [
      { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
      { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
      { en: 'Johan Cruyff', ar: 'يوهان كرويف' },
      { en: 'Michel Platini', ar: 'ميشيل بلاتيني' }
    ]
  },
  {
    id: 'lq_3',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 3,
    prompt: {
      en: 'Which club has won the most UEFA Champions League titles?',
      ar: 'ما هو النادي الأكثر تتويجاً بلقب دوري أبطال أوروبا؟'
    },
    correctAnswer: { en: 'Real Madrid', ar: 'ريال مدريد' },
    options: [
      { en: 'AC Milan', ar: 'إيه سي ميلان' },
      { en: 'Bayern Munich', ar: 'بايرن ميونخ' },
      { en: 'Real Madrid', ar: 'ريال مدريد' },
      { en: 'Liverpool', ar: 'ليفربول' }
    ]
  },
  {
    id: 'lq_4',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 3,
    prompt: {
      en: 'Which national team is nicknamed "The Atlas Lions"?',
      ar: 'أي منتخب يلقب بـ "أسود الأطلس"؟'
    },
    correctAnswer: { en: 'Morocco', ar: 'المغرب' },
    options: [
      { en: 'Algeria', ar: 'الجزائر' },
      { en: 'Cameroon', ar: 'الكاميرون' },
      { en: 'Morocco', ar: 'المغرب' },
      { en: 'Senegal', ar: 'السنغال' }
    ]
  },
  {
    id: 'lq_5',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 3,
    prompt: {
      en: 'Who is the all-time leading goalscorer in Premier League history?',
      ar: 'من هو الهداف التاريخي للدوري الإنجليزي الممتاز؟'
    },
    correctAnswer: { en: 'Alan Shearer', ar: 'آلان شيرار' },
    options: [
      { en: 'Wayne Rooney', ar: 'واين روني' },
      { en: 'Harry Kane', ar: 'هاري كين' },
      { en: 'Alan Shearer', ar: 'آلان شيرار' },
      { en: 'Thierry Henry', ar: 'تييري هنري' }
    ]
  },
  {
    id: 'lq_6',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 2,
    prompt: {
      en: 'Which city hosts the famous football stadium "San Siro"?',
      ar: 'في أي مدينة إيطالية يقع ملعب "سان سيرو" الشهير؟'
    },
    correctAnswer: { en: 'Milan', ar: 'ميلانو' },
    options: [
      { en: 'Rome', ar: 'روما' },
      { en: 'Turin', ar: 'تورينو' },
      { en: 'Milan', ar: 'ميلانو' },
      { en: 'Naples', ar: 'نابولي' }
    ]
  },
  {
    id: 'lq_7',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 3,
    prompt: {
      en: 'Who scored the famous "Hand of God" goal in 1986?',
      ar: 'من هو النجم الذي سجل هدف "يد الله" الشهير في مونديال 1986؟'
    },
    correctAnswer: { en: 'Diego Maradona', ar: 'دييغو مارادونا' },
    options: [
      { en: 'Pelé', ar: 'بيليه' },
      { en: 'Diego Maradona', ar: 'دييغو مارادونا' },
      { en: 'Mario Kempes', ar: 'ماريو كيمبس' },
      { en: 'Gary Lineker', ar: 'غاري لينيكر' }
    ]
  },
  {
    id: 'lq_8',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 3,
    prompt: {
      en: 'How many players are on the pitch for one team at kickoff?',
      ar: 'كم عدد لاعبي الفريق الواحد على أرض الملعب عند انطلاق المباراة؟'
    },
    correctAnswer: { en: '11', ar: '11' },
    options: [
      { en: '10', ar: '10' },
      { en: '11', ar: '11' },
      { en: '12', ar: '12' },
      { en: '9', ar: '9' }
    ]
  },
  {
    id: 'lq_9',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 4,
    prompt: {
      en: 'Which club won the historic Premier League title in 2015–16 at 5000-to-1 odds?',
      ar: 'أي نادٍ حقق المعجزة وتوج بلقب الدوري الإنجليزي 2015-2016؟'
    },
    correctAnswer: { en: 'Leicester City', ar: 'ليستر سيتي' },
    options: [
      { en: 'West Ham', ar: 'وست هام' },
      { en: 'Tottenham', ar: 'توتنهام' },
      { en: 'Leicester City', ar: 'ليستر سيتي' },
      { en: 'Southampton', ar: 'ساوثهامبتون' }
    ]
  },
  {
    id: 'lq_10',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 3,
    prompt: {
      en: 'Which country won the first ever FIFA World Cup in 1930?',
      ar: 'أي بلد توج بأول بطولة لكأس العالم عام 1930؟'
    },
    correctAnswer: { en: 'Uruguay', ar: 'الأوروغواي' },
    options: [
      { en: 'Argentina', ar: 'الأرجنتين' },
      { en: 'Brazil', ar: 'البرازيل' },
      { en: 'Uruguay', ar: 'الأوروغواي' },
      { en: 'Italy', ar: 'إيطاليا' }
    ]
  },
  {
    id: 'lq_11',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 4,
    prompt: {
      en: 'Who is known as "The Special One"?',
      ar: 'من هو المدرب الملقب بـ "سبيشال وان" (الاستثنائي)؟'
    },
    correctAnswer: { en: 'José Mourinho', ar: 'جوزيه مورينيو' },
    options: [
      { en: 'Pep Guardiola', ar: 'بيب غوارديولا' },
      { en: 'Jürgen Klopp', ar: 'يورغن كلوب' },
      { en: 'José Mourinho', ar: 'جوزيه مورينيو' },
      { en: 'Carlo Ancelotti', ar: 'كارلو أنشيلوتي' }
    ]
  },
  {
    id: 'lq_12',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 3,
    prompt: {
      en: 'Which country has won the Africa Cup of Nations (AFCON) the most times?',
      ar: 'ما هو المنتخب الأكثر تتويجاً بكأس أمم إفريقيا عبر التاريخ؟'
    },
    correctAnswer: { en: 'Egypt (7 titles)', ar: 'مصر (7 ألقاب)' },
    options: [
      { en: 'Cameroon', ar: 'الكاميرون' },
      { en: 'Ghana', ar: 'غانا' },
      { en: 'Egypt (7 titles)', ar: 'مصر (7 ألقاب)' },
      { en: 'Nigeria', ar: 'نيجيريا' }
    ]
  },
  {
    id: 'lq_13',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 3,
    prompt: {
      en: 'What color card does a referee show to permanently send a player off?',
      ar: 'ما هو لون البطاقة التي يشهرها الحكم لطرد اللاعب نهائياً من المباراة؟'
    },
    correctAnswer: { en: 'Red Card', ar: 'البطاقة الحمراء' },
    options: [
      { en: 'Yellow Card', ar: 'البطاقة الصفراء' },
      { en: 'Blue Card', ar: 'البطاقة الزرقاء' },
      { en: 'Red Card', ar: 'البطاقة الحمراء' },
      { en: 'Green Card', ar: 'البطاقة الخضراء' }
    ]
  },
  {
    id: 'lq_14',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 4,
    prompt: {
      en: 'Which German club is nicknamed "Die Schwarzgelben" (The Black and Yellows)?',
      ar: 'أي نادٍ ألماني يشتهر بلقب "أسود وأصفر" ويرتدي هذين اللونين؟'
    },
    correctAnswer: { en: 'Borussia Dortmund', ar: 'بوروسيا دورتموند' },
    options: [
      { en: 'Bayer Leverkusen', ar: 'باير ليفركوزن' },
      { en: 'Borussia Dortmund', ar: 'بوروسيا دورتموند' },
      { en: 'Bayern Munich', ar: 'بايرن ميونخ' },
      { en: 'VfB Stuttgart', ar: 'شتوتغارت' }
    ]
  },
  {
    id: 'lq_15',
    mode: 'lightning_round',
    category: 'Rapid Fire',
    difficulty: 3,
    prompt: {
      en: 'How many minutes is a regular football match without extra time?',
      ar: 'كم عدد دقائق مباراة كرة القدم الرسمية بدون الأشواط الإضافية؟'
    },
    correctAnswer: { en: '90 Minutes', ar: '90 دقيقة' },
    options: [
      { en: '80 Minutes', ar: '80 دقيقة' },
      { en: '90 Minutes', ar: '90 دقيقة' },
      { en: '100 Minutes', ar: '100 دقيقة' },
      { en: '120 Minutes', ar: '120 دقيقة' }
    ]
  }
];

