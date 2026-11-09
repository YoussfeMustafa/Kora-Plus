import { NumbersStatsQuestion } from '../types/game';

export const numbersStatsQuestions: NumbersStatsQuestion[] = [
  {
    id: 'ns_1',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'World Record',
    difficulty: 3,
    prompt: {
      en: 'How many official goals did Lionel Messi score in the record-breaking calendar year of 2012?',
      ar: 'كم عدد الأهداف الرسمية التي سجلها ليونيل ميسي في سنته القياسية الخارقة 2012؟'
    },
    answer: { en: '91 Goals', ar: '91 هدفاً' },
    options: [
      { en: '85 Goals', ar: '85 هدفاً' },
      { en: '91 Goals', ar: '91 هدفاً' },
      { en: '95 Goals', ar: '95 هدفاً' },
      { en: '88 Goals', ar: '88 هدفاً' }
    ],
    explanation: {
      en: 'Messi scored 91 goals in 2012 (79 for Barcelona, 12 for Argentina), breaking Gerd Müller’s 1972 record of 85.',
      ar: 'سجل ميسي 91 هدفاً في 2012 (79 مع برشلونة و12 مع الأرجنتين)، محطماً رقم جيرد مولر (85 هدفاً سنة 1972).'
    }
  },
  {
    id: 'ns_2',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'World Cup Record',
    difficulty: 4,
    prompt: {
      en: 'How fast was Hakan Şükür’s fastest goal in FIFA World Cup history (2002 vs South Korea)?',
      ar: 'كم استغرق أسرع هدف في تاريخ كأس العالم المسجل باسم هاكان شوكور (2002 ضد كوريا ج)؟'
    },
    answer: { en: '10.8 Seconds', ar: '10.8 ثوانٍ' },
    options: [
      { en: '10.8 Seconds', ar: '10.8 ثوانٍ' },
      { en: '15.2 Seconds', ar: '15.2 ثانية' },
      { en: '8.4 Seconds', ar: '8.4 ثوانٍ' },
      { en: '21.0 Seconds', ar: '21.0 ثانية' }
    ],
    explanation: {
      en: 'Turkey’s Hakan Şükür scored in just 10.89 seconds in the 2002 third-place match.',
      ar: 'سجل التركي هاكان شوكور الهدف في 10.89 ثوانٍ فقط من صافرة البداية.'
    }
  },
  {
    id: 'ns_3',
    mode: 'numbers_stats',
    subType: 'higher_lower',
    category: 'Higher or Lower',
    difficulty: 3,
    prompt: {
      en: 'Did Alan Shearer score HIGHER or LOWER than 250 Premier League goals?',
      ar: 'هل سجل آلان شيرار في الدوري الإنجليزي الممتاز أكثر أم أقل من 250 هدفاً؟'
    },
    statSubject: { en: 'Alan Shearer\'s all-time Premier League goals (Actual: 260)', ar: 'أهداف آلان شيرار في البريميرليغ (الرقم الفعلي: 260)' },
    referenceValue: 250,
    statTargetValue: 260,
    isHigher: true,
    answer: { en: 'Higher (260 goals)', ar: 'أكثر (260 هدفاً)' },
    options: [
      { en: 'Higher', ar: 'أكثر (أعلى)' },
      { en: 'Lower', ar: 'أقل (أدنى)' }
    ],
    explanation: {
      en: 'Alan Shearer remains the all-time top scorer with 260 Premier League goals.',
      ar: 'آلان شيرار هو الهداف التاريخي للبريميرليغ برصيد 260 هدفاً.'
    }
  },
  {
    id: 'ns_4',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'World Cup Milestone',
    difficulty: 3,
    prompt: {
      en: 'Who holds the all-time record for most matches played in FIFA World Cup history?',
      ar: 'من هو اللاعب صاحب الرقم القياسي لأكبر عدد مباريات ملعوبة في تاريخ كأس العالم؟'
    },
    answer: { en: 'Lionel Messi (26 matches)', ar: 'ليونيل ميسي (26 مباراة)' },
    options: [
      { en: 'Lothar Matthäus (25 matches)', ar: 'لوتار ماتيوس (25 مباراة)' },
      { en: 'Lionel Messi (26 matches)', ar: 'ليونيل ميسي (26 مباراة)' },
      { en: 'Miroslav Klose (24 matches)', ar: 'ميروسلاف كلوزه (24 مباراة)' },
      { en: 'Cristiano Ronaldo (22 matches)', ar: 'كريستيانو رونالدو (22 مباراة)' }
    ],
    explanation: {
      en: 'Lionel Messi played his 26th World Cup match in the 2022 Final, surpassing Lothar Matthäus (25).',
      ar: 'خاض ميسي مباراته رقم 26 في نهائي مونديال قطر 2022 ليتجاوز الألماني لوتار ماتيوس.'
    }
  },
  {
    id: 'ns_5',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'Single Tournament Wonder',
    difficulty: 4,
    prompt: {
      en: 'How many goals did Just Fontaine score in the 1958 World Cup (the single-tournament record)?',
      ar: 'كم هدفاً أحرز الفرنسي جوست فونتين في مونديال 1958 (الرقم القياسي لبطولة واحدة)؟'
    },
    answer: { en: '13 Goals', ar: '13 هدفاً' },
    options: [
      { en: '10 Goals', ar: '10 أهداف' },
      { en: '11 Goals', ar: '11 هدفاً' },
      { en: '13 Goals', ar: '13 هدفاً' },
      { en: '15 Goals', ar: '15 هدفاً' }
    ],
    explanation: {
      en: 'Just Fontaine scored 13 goals in 6 games during the 1958 FIFA World Cup in Sweden.',
      ar: 'سجل جوست فونتين 13 هدفاً في 6 مباريات بمونديال السويد 1958، وهو رقم لم يحطم حتى اليوم.'
    }
  },
  {
    id: 'ns_6',
    mode: 'numbers_stats',
    subType: 'higher_lower',
    category: 'Higher or Lower',
    difficulty: 3,
    prompt: {
      en: 'Is Cristiano Ronaldo’s all-time UEFA Champions League goal tally HIGHER or LOWER than 135 goals?',
      ar: 'هل مجموع أهداف كريستيانو رونالدو في دوري أبطال أوروبا أكثر أم أقل من 135 هدفاً؟'
    },
    statSubject: { en: 'Cristiano Ronaldo\'s UCL goals (Actual: 140)', ar: 'أهداف رونالدو في دوري الأبطال (الفعلي: 140)' },
    referenceValue: 135,
    statTargetValue: 140,
    isHigher: true,
    answer: { en: 'Higher (140 goals)', ar: 'أكثر (140 هدفاً)' },
    options: [
      { en: 'Higher', ar: 'أكثر (أعلى)' },
      { en: 'Lower', ar: 'أقل (أدنى)' }
    ],
    explanation: {
      en: 'Cristiano Ronaldo is the Champions League all-time top scorer with 140 goals in 183 appearances.',
      ar: 'رونالدو هو الهداف التاريخي لدوري الأبطال برصيد 140 هدفاً في 183 مباراة.'
    }
  },
  {
    id: 'ns_7',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'Premier League Record',
    difficulty: 3,
    prompt: {
      en: 'How many goals did Erling Haaland score in his record-breaking 2022–23 Premier League debut season?',
      ar: 'كم هدفاً سجل إيرلينغ هالاند في موسمه الأول بالدوري الإنجليزي 2022-2023 محطماً الرقم القياسي؟'
    },
    answer: { en: '36 Goals', ar: '36 هدفاً' },
    options: [
      { en: '32 Goals', ar: '32 هدفاً' },
      { en: '34 Goals', ar: '34 هدفاً' },
      { en: '36 Goals', ar: '36 هدفاً' },
      { en: '38 Goals', ar: '38 هدفاً' }
    ],
    explanation: {
      en: 'Haaland scored 36 goals in 35 appearances, surpassing the 34-goal records of Shearer and Cole.',
      ar: 'سجل هالاند 36 هدفاً في 35 مباراة، محطماً رقم شيرار وكول السابق (34 هدفاً).'
    }
  },
  {
    id: 'ns_8',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'Rapid Fire Stats',
    difficulty: 5,
    prompt: {
      en: 'How fast was Sadio Mané’s fastest hat-trick in Premier League history (for Southampton vs Aston Villa)?',
      ar: 'كم استغرق أسرع هاتريك في تاريخ الدوري الإنجليزي لساديو ماني (مع ساوثهامبتون ضد أستون فيلا)؟'
    },
    answer: { en: '2 minutes 56 seconds', ar: 'دقيقتان و56 ثانية' },
    options: [
      { en: '2 minutes 56 seconds', ar: 'دقيقتان و56 ثانية' },
      { en: '3 minutes 45 seconds', ar: '3 دقائق و45 ثانية' },
      { en: '4 minutes 12 seconds', ar: '4 دقائق و12 ثانية' },
      { en: '1 minute 59 seconds', ar: 'دقيقة و59 ثانية' }
    ],
    explanation: {
      en: 'In May 2015, Sadio Mané scored three goals in just 176 seconds (2 min 56 sec).',
      ar: 'في مايو 2015، أحرز ساديو ماني 3 أهداف في 176 ثانية فقط ليدخل موسوعة غينيس.'
    }
  },
  {
    id: 'ns_9',
    mode: 'numbers_stats',
    subType: 'higher_lower',
    category: 'Higher or Lower',
    difficulty: 4,
    prompt: {
      en: 'Did Pelé win HIGHER or LOWER than 2 FIFA World Cup trophies?',
      ar: 'هل فاز الأسطورة بيليه بكؤوس عالم أكثر أم أقل من بطولتين (2)؟'
    },
    statSubject: { en: 'Pelé\'s World Cup titles (Actual: 3)', ar: 'ألقاب بيليه في كأس العالم (الفعلي: 3)' },
    referenceValue: 2,
    statTargetValue: 3,
    isHigher: true,
    answer: { en: 'Higher (3 World Cups: 1958, 1962, 1970)', ar: 'أكثر (3 ألقاب: 1958، 1962، 1970)' },
    options: [
      { en: 'Higher', ar: 'أكثر (أعلى)' },
      { en: 'Lower', ar: 'أقل (أدنى)' }
    ],
    explanation: {
      en: 'Pelé is the only player in football history to win 3 FIFA World Cups.',
      ar: 'بيليه هو اللاعب الوحيد في تاريخ كرة القدم الذي فاز بكأس العالم 3 مرات.'
    }
  },
  {
    id: 'ns_10',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'African Football Dominance',
    difficulty: 3,
    prompt: {
      en: 'How many CAF Champions League titles has Egyptian giant Al Ahly SC won up to 2024?',
      ar: 'كم عدد ألقاب دوري أبطال إفريقيا التي حققها الأهلي المصري حتى عام 2024 (الرقم القياسي)؟'
    },
    answer: { en: '12 Titles', ar: '12 لقباً' },
    options: [
      { en: '9 Titles', ar: '9 ألقاب' },
      { en: '10 Titles', ar: '10 ألقاب' },
      { en: '11 Titles', ar: '11 لقباً' },
      { en: '12 Titles', ar: '12 لقباً' }
    ],
    explanation: {
      en: 'Al Ahly claimed their record-extending 12th CAF Champions League title in 2024.',
      ar: 'توج الأهلي بلقبه الـ12 القياسي في دوري أبطال إفريقيا عام 2024.'
    }
  },
  {
    id: 'ns_11',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'International Unbeaten Run',
    difficulty: 4,
    prompt: {
      en: 'How many consecutive international matches did Roberto Mancini’s Italy go unbeaten (world record)?',
      ar: 'كم عدد المباريات المتتالية دون هزيمة التي حققتها إيطاليا مع مانشيني (رقم قياسي عالمي)؟'
    },
    answer: { en: '37 Matches', ar: '37 مباراة' },
    options: [
      { en: '31 Matches', ar: '31 مباراة' },
      { en: '35 Matches', ar: '35 مباراة' },
      { en: '37 Matches', ar: '37 مباراة' },
      { en: '40 Matches', ar: '40 مباراة' }
    ],
    explanation: {
      en: 'Italy went 37 matches unbeaten from 2018 to 2021, winning Euro 2020 along the way.',
      ar: 'حققت إيطاليا سلسلة تاريخية بلغت 37 مباراة دون خسارة بين 2018 و2021 وتوجت خلالها بيورو 2020.'
    }
  },
  {
    id: 'ns_12',
    mode: 'numbers_stats',
    subType: 'higher_lower',
    category: 'Higher or Lower',
    difficulty: 3,
    prompt: {
      en: 'Has Real Madrid won HIGHER or LOWER than 13 UEFA Champions League titles?',
      ar: 'هل فاز ريال مدريد ببطولات دوري أبطال أوروبا أكثر أم أقل من 13 لقباً؟'
    },
    statSubject: { en: 'Real Madrid UCL titles (Actual: 15)', ar: 'ألقاب ريال مدريد في دوري الأبطال (الفعلي: 15)' },
    referenceValue: 13,
    statTargetValue: 15,
    isHigher: true,
    answer: { en: 'Higher (15 titles)', ar: 'أكثر (15 لقباً)' },
    options: [
      { en: 'Higher', ar: 'أكثر (أعلى)' },
      { en: 'Lower', ar: 'أقل (أدنى)' }
    ],
    explanation: {
      en: 'Real Madrid secured their 15th European Cup / Champions League title at Wembley in 2024.',
      ar: 'توج ريال مدريد باللقب الخامس عشر (15) التاريخي في ويمبلي عام 2024.'
    }
  },
  {
    id: 'ns_13',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'Premier League Assist King',
    difficulty: 4,
    prompt: {
      en: 'Who holds the all-time record for most assists in Premier League history (162 assists)?',
      ar: 'من هو صاحب الرقم القياسي لأكثر التمريرات الحاسمة (صناعة الأهداف) في تاريخ البريميرليغ (162)؟'
    },
    answer: { en: 'Ryan Giggs', ar: 'ريان غيغز' },
    options: [
      { en: 'Kevin De Bruyne', ar: 'كيفين دي بروين' },
      { en: 'Cesc Fàbregas', ar: 'سيسك فابريغاس' },
      { en: 'Ryan Giggs', ar: 'ريان غيغز' },
      { en: 'Wayne Rooney', ar: 'واين روني' }
    ],
    explanation: {
      en: 'Ryan Giggs provided 162 assists during his 24 seasons at Manchester United.',
      ar: 'صنع ريان غيغز 162 هدفاً خلال 24 موسماً حافلاً مع مانشستر يونايتد.'
    }
  },
  {
    id: 'ns_14',
    mode: 'numbers_stats',
    subType: 'higher_lower',
    category: 'Higher or Lower',
    difficulty: 3,
    prompt: {
      en: 'Is the transfer fee paid by PSG for Neymar in 2017 HIGHER or LOWER than €200 million?',
      ar: 'هل قيمة صفقة انتقال نيمار من برشلونة إلى سان جيرمان 2017 أكثر أم أقل من 200 مليون يورو؟'
    },
    statSubject: { en: 'Neymar transfer fee (Actual: €222M)', ar: 'قيمة صفقة نيمار (الفعلي: 222 مليون يورو)' },
    referenceValue: 200,
    statTargetValue: 222,
    isHigher: true,
    answer: { en: 'Higher (€222 Million)', ar: 'أكثر (222 مليون يورو)' },
    options: [
      { en: 'Higher', ar: 'أكثر (أعلى)' },
      { en: 'Lower', ar: 'أقل (أدنى)' }
    ],
    explanation: {
      en: 'Neymar’s buyout clause of €222 million remains the all-time world record transfer.',
      ar: 'الشرط الجزائي البالغ 222 مليون يورو لا يزال أغلى صفقة انتقال في تاريخ اللعبة.'
    }
  },
  {
    id: 'ns_15',
    mode: 'numbers_stats',
    subType: 'quiz',
    category: 'World Cup All-Time Top Scorer',
    difficulty: 3,
    prompt: {
      en: 'How many goals did Miroslav Klose score to become the all-time top scorer in World Cup history?',
      ar: 'كم هدفاً سجل ميروسلاف كلوزه ليصبح الهداف التاريخي لبطولات كأس العالم؟'
    },
    answer: { en: '16 Goals', ar: '16 هدفاً' },
    options: [
      { en: '14 Goals', ar: '14 هدفاً' },
      { en: '15 Goals', ar: '15 هدفاً' },
      { en: '16 Goals', ar: '16 هدفاً' },
      { en: '17 Goals', ar: '17 هدفاً' }
    ],
    explanation: {
      en: 'Klose scored his 16th goal during Germany’s 7-1 semi-final win over Brazil in 2014, surpassing Ronaldo Nazário (15).',
      ar: 'سجل كلوزه هدفه السادس عشر في الفوز 7-1 على البرازيل بمونديال 2014 ليتخطى رونالدو الظاهرة (15).'
    }
  }
];

