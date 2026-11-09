import { NicknamesTermsQuestion } from '../types/game';

export const nicknamesTermsQuestions: NicknamesTermsQuestion[] = [
  {
    id: 'nt_1',
    mode: 'nicknames_terms',
    category: 'Spanish Football',
    difficulty: 3,
    prompt: {
      en: 'What does the prestigious "Pichichi" trophy reward in Spanish La Liga?',
      ar: 'إلى ماذا ترمز جائزة "البيتشيتشي" (Pichichi) المرموقة في الدوري الإسباني؟'
    },
    answer: { en: 'Top Goalscorer in La Liga', ar: 'هداف الدوري الإسباني' },
    options: [
      { en: 'Top Goalscorer in La Liga', ar: 'هداف الدوري الإسباني' },
      { en: 'Best Goalkeeper with fewest goals conceded', ar: 'أفضل حارس مرمى يستقبل أقل أهداف' },
      { en: 'Best Coach of the Season', ar: 'أفضل مدرب في الموسم' },
      { en: 'Fair Play Club of the Year', ar: 'جائزة اللعب النظيف' }
    ],
    origin: {
      en: 'Named after Athletic Bilbao legend Rafael "Pichichi" Moreno.',
      ar: 'سُميت تيمناً بأسطورة أتلتيك بيلباو رافائيل "بيتشيتشي" مورينو.'
    }
  },
  {
    id: 'nt_2',
    mode: 'nicknames_terms',
    category: 'Iconic Era',
    difficulty: 2,
    prompt: {
      en: 'What famous nickname was given to Florentino Pérez’s star-studded Real Madrid team in the early 2000s?',
      ar: 'ما هو اللقب الشهير الذي أطلق على جيل نجوم ريال مدريد الخارقين في بداية الألفية بقيادة بيريز؟'
    },
    answer: { en: 'Los Galácticos (The Galacticos)', ar: 'لوس غالاكتيكوس (المجرّة)' },
    options: [
      { en: 'Los Galácticos', ar: 'لوس غالاكتيكوس (المجرّة)' },
      { en: 'La Quinta del Buitre', ar: 'لا كينتا ديل بويتري' },
      { en: 'The Invincibles', ar: 'اللاهزيمة' },
      { en: 'The Dream Team', ar: 'فريق الأحلام' }
    ]
  },
  {
    id: 'nt_3',
    mode: 'nicknames_terms',
    category: 'Tactics',
    difficulty: 4,
    prompt: {
      en: 'Which Italian tactical defensive system literally translates to "door-bolt"?',
      ar: 'ما هو النظام التكتيكي الدفاعي الإيطالي الشهير الذي تعني ترجمته الحرفية "مزلاج الباب"؟'
    },
    answer: { en: 'Catenaccio', ar: 'كاتيناتشو (Catenaccio)' },
    options: [
      { en: 'Catenaccio', ar: 'كاتيناتشو' },
      { en: 'Tiki-Taka', ar: 'تيكي تاكا' },
      { en: 'Gegenpressing', ar: 'غيغين بريسينغ' },
      { en: 'Joga Bonito', ar: 'جوغا بونيتو' }
    ]
  },
  {
    id: 'nt_4',
    mode: 'nicknames_terms',
    category: 'Skill Moves',
    difficulty: 3,
    prompt: {
      en: 'What is the signature penalty technique called where the ball is delicately chipped down the center?',
      ar: 'ماذا تسمى ركلة الجزاء الماكرة التي يتم تسديدها بهدوء وإسقاطها وسط المرمى؟'
    },
    answer: { en: 'Panenka', ar: 'بانينكا (Panenka)' },
    options: [
      { en: 'Panenka', ar: 'بانينكا' },
      { en: 'Rabona', ar: 'رابونا' },
      { en: 'Trivela', ar: 'تريفيلا' },
      { en: 'Elastico', ar: 'إيلاستيكو' }
    ],
    origin: {
      en: 'Invented by Antonín Panenka for Czechoslovakia in the Euro 1976 final.',
      ar: 'ابتكرها التشيكوسلوفاكي أنتونين بانينكا في نهائي يورو 1976.'
    }
  },
  {
    id: 'nt_5',
    mode: 'nicknames_terms',
    category: 'Club Nicknames',
    difficulty: 2,
    prompt: {
      en: 'Which historic Italian giant is affectionately known as "La Vecchia Signora" (The Old Lady)?',
      ar: 'أي نادٍ إيطالي عريق يُلقب بـ "السيدة العجوز" (La Vecchia Signora)؟'
    },
    answer: { en: 'Juventus', ar: 'يوفنتوس' },
    options: [
      { en: 'AC Milan', ar: 'إيه سي ميلان' },
      { en: 'Juventus', ar: 'يوفنتوس' },
      { en: 'Inter Milan', ar: 'إنتر ميلان' },
      { en: 'Fiorentina', ar: 'فيورنتينا' }
    ]
  },
  {
    id: 'nt_6',
    mode: 'nicknames_terms',
    category: 'National Nicknames',
    difficulty: 2,
    prompt: {
      en: 'Which Arab national team is known as "The Pharaohs"?',
      ar: 'أي منتخب عربي عريق يحمل لقب "الفراعنة"؟'
    },
    answer: { en: 'Egypt', ar: 'مصر' },
    options: [
      { en: 'Egypt', ar: 'مصر' },
      { en: 'Sudan', ar: 'السودان' },
      { en: 'Iraq', ar: 'العراق' },
      { en: 'Jordan', ar: 'الأردن' }
    ]
  },
  {
    id: 'nt_7',
    mode: 'nicknames_terms',
    category: 'Tactics',
    difficulty: 3,
    prompt: {
      en: 'What role does a "False 9" play on the football pitch?',
      ar: 'ما هو دور "المهاجم الوهمي" أو (False 9) في الخطة التكتيكية؟'
    },
    answer: {
      en: 'A striker who drops deep into midfield to pull defenders and create space',
      ar: 'مهاجم يتراجع لعمق خط الوسط لسحب المدافعين وصناعة المساحات'
    },
    options: [
      { en: 'A striker who drops into midfield to draw defenders away', ar: 'مهاجم يتراجع لعمق خط الوسط لسحب المدافعين وصناعة المساحات' },
      { en: 'A pure target man who never leaves the 18-yard box', ar: 'مهاجم صريح طويل القامة لا يغادر منطقة الجزاء' },
      { en: 'A substitute goalkeeper wearing number 9', ar: 'حارس مرمى بديل يرتدي القميص رقم 9' },
      { en: 'An overlapping wing-back who acts as an extra winger', ar: 'ظهير هجومي متقدم يلعب كجناح إضافي' }
    ]
  },
  {
    id: 'nt_8',
    mode: 'nicknames_terms',
    category: 'Club Nicknames',
    difficulty: 3,
    prompt: {
      en: 'Which Spanish club is nicknamed "The Yellow Submarine" (El Submarino Amarillo)?',
      ar: 'أي نادٍ في الدوري الإسباني يُعرف بلقب "الغواصات الصفراء" (El Submarino Amarillo)؟'
    },
    answer: { en: 'Villarreal CF', ar: 'فياريال' },
    options: [
      { en: 'Las Palmas', ar: 'لاس بالماس' },
      { en: 'Cadiz CF', ar: 'قادش' },
      { en: 'Villarreal CF', ar: 'فياريال' },
      { en: 'Getafe', ar: 'خيتافي' }
    ]
  },
  {
    id: 'nt_9',
    mode: 'nicknames_terms',
    category: 'Skill Moves',
    difficulty: 3,
    prompt: {
      en: 'What is the skill where a player wraps their kicking leg behind the standing leg to cross or shoot?',
      ar: 'ماذا تُسمى الحركة المهارية التي يلتف فيها اللاعب بساقه المسددة خلف ساقه الثابتة ليرسل عرضية؟'
    },
    answer: { en: 'Rabona', ar: 'رابونا (Rabona)' },
    options: [
      { en: 'Rabona', ar: 'رابونا' },
      { en: 'Sombrero', ar: 'سومبريرو' },
      { en: 'Roulette', ar: 'روليت' },
      { en: 'Cruyff Turn', ar: 'دوران كرويف' }
    ]
  },
  {
    id: 'nt_10',
    mode: 'nicknames_terms',
    category: 'Premier League',
    difficulty: 2,
    prompt: {
      en: 'Which London football club is officially nicknamed "The Gunners"?',
      ar: 'أي نادٍ لندني عريق يشتهر بلقب "المدفعجية" (The Gunners)؟'
    },
    answer: { en: 'Arsenal', ar: 'أرسنال' },
    options: [
      { en: 'Arsenal', ar: 'أرسنال' },
      { en: 'West Ham United', ar: 'وست هام يونايتد' },
      { en: 'Chelsea', ar: 'تشيلسي' },
      { en: 'Crystal Palace', ar: 'كريستال بالاس' }
    ]
  },
  {
    id: 'nt_11',
    mode: 'nicknames_terms',
    category: 'Special Goals',
    difficulty: 4,
    prompt: {
      en: 'What is a goal scored directly from a corner kick without touching any other player called?',
      ar: 'ماذا يُطلق في مصطلحات كرة القدم على الهدف المسجل مباشرة من ضربة ركنية دون لمس أحد؟'
    },
    answer: { en: 'Olympic Goal (Gol Olímpico)', ar: 'الهدف الأولمبي (Gol Olímpico)' },
    options: [
      { en: 'Olympic Goal (Gol Olímpico)', ar: 'الهدف الأولمبي (Gol Olímpico)' },
      { en: 'Golden Goal', ar: 'الهدف الذهبي' },
      { en: 'Silver Goal', ar: 'الهدف الفضي' },
      { en: 'Scorpion Goal', ar: 'هدف العقرب' }
    ],
    origin: {
      en: 'Coined in 1924 after Argentine Cesáreo Onzari scored from a corner against Olympic champions Uruguay.',
      ar: 'أُطلق عام 1924 عندما سجل الأرجنتيني أونزاري من ركنية مباشرة ضد بطل الأولمبياد الأوروغواي.'
    }
  },
  {
    id: 'nt_12',
    mode: 'nicknames_terms',
    category: 'National Nicknames',
    difficulty: 2,
    prompt: {
      en: 'What is the proud nickname of the Tunisian national football team?',
      ar: 'ما هو اللقب الشهير لمنتخب تونس الوطني لكرة القدم؟'
    },
    answer: { en: 'Eagles of Carthage', ar: 'نسور قرطاج' },
    options: [
      { en: 'Eagles of Carthage', ar: 'نسور قرطاج' },
      { en: 'Desert Warriors', ar: 'محاربو الصحراء' },
      { en: 'Atlas Lions', ar: 'أسود الأطلس' },
      { en: 'Super Eagles', ar: 'النسور الخارقة' }
    ]
  },
  {
    id: 'nt_13',
    mode: 'nicknames_terms',
    category: 'Spanish Awards',
    difficulty: 4,
    prompt: {
      en: 'What is the trophy awarded to the best goalkeeper in Spanish La Liga each season?',
      ar: 'ما هو اسم الكأس السنوية الممنوحة لأفضل حارس مرمى في الدوري الإسباني؟'
    },
    answer: { en: 'Zamora Trophy', ar: 'جائزة زامورا (Trofeo Zamora)' },
    options: [
      { en: 'Zamora Trophy', ar: 'جائزة زامورا' },
      { en: 'Yashin Trophy', ar: 'جائزة ياشين' },
      { en: 'Pichichi Trophy', ar: 'جائزة بيتشيتشي' },
      { en: 'Zarra Trophy', ar: 'جائزة زارا' }
    ]
  },
  {
    id: 'nt_14',
    mode: 'nicknames_terms',
    category: 'National Nicknames',
    difficulty: 2,
    prompt: {
      en: 'Which four-time World Cup winning national team is known as "Gli Azzurri" (The Blues)?',
      ar: 'أي منتخب عريق بطل العالم 4 مرات يُعرف بلقب "الآزوري" (Gli Azzurri)؟'
    },
    answer: { en: 'Italy', ar: 'إيطاليا' },
    options: [
      { en: 'France', ar: 'فرنسا' },
      { en: 'Italy', ar: 'إيطاليا' },
      { en: 'Argentina', ar: 'الأرجنتين' },
      { en: 'Uruguay', ar: 'الأوروغواي' }
    ]
  },
  {
    id: 'nt_15',
    mode: 'nicknames_terms',
    category: 'Skill Moves',
    difficulty: 4,
    prompt: {
      en: 'What is the outside-of-the-boot curved strike popularized by Ricardo Quaresma and Modrić called?',
      ar: 'ماذا تُسمى التسديدة المقوسة الخادعة بوجه القدم الخارجي التي اشتهر بها كواريزما ومودريتش؟'
    },
    answer: { en: 'Trivela', ar: 'تريفيلا (Trivela)' },
    options: [
      { en: 'Trivela', ar: 'تريفيلا' },
      { en: 'Rabona', ar: 'رابونا' },
      { en: 'Panenka', ar: 'بانينكا' },
      { en: 'Chilena', ar: 'تشيلينا' }
    ]
  }
];

