import { CareerPathQuestion } from '../types/game';

export const careerPathQuestions: CareerPathQuestion[] = [
  {
    id: 'cp_1',
    mode: 'career_path',
    category: 'Legend',
    difficulty: 3,
    prompt: {
      en: 'Who is this player based on his club career journey?',
      ar: 'من هو هذا اللاعب بناءً على مسيرته الكروية في الأندية؟'
    },
    career: [
      { years: '2002–2003', club: { en: 'Sporting CP', ar: 'سبورتينغ لشبونة' } },
      { years: '2003–2009', club: { en: 'Manchester United', ar: 'مانشستر يونايتد' } },
      { years: '2009–2018', club: { en: 'Real Madrid', ar: 'ريال مدريد' } },
      { years: '2018–2021', club: { en: 'Juventus', ar: 'يوفنتوس' } },
      { years: '2021–2022', club: { en: 'Manchester United', ar: 'مانشستر يونايتد' } },
      { years: '2023–Present', club: { en: 'Al Nassr', ar: 'النصر السعودي' } }
    ],
    answer: { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
    aliases: ['Ronaldo', 'CR7', 'رونالدو', 'الدون', 'كريستيانو'],
    hints: {
      nationality: { en: 'Portugal', ar: 'البرتغال' },
      position: { en: 'Forward / Winger', ar: 'مهاجم / جناح' },
      shirtNumber: 7
    }
  },
  {
    id: 'cp_2',
    mode: 'career_path',
    category: 'Legend',
    difficulty: 2,
    prompt: {
      en: 'Who is this historic playmaker?',
      ar: 'من هو هذا الأسطورة وصاحب المسيرة التاريخية؟'
    },
    career: [
      { years: '2004–2021', club: { en: 'Barcelona', ar: 'برشلونة' } },
      { years: '2021–2023', club: { en: 'Paris Saint-Germain', ar: 'باريس سان جيرمان' } },
      { years: '2023–Present', club: { en: 'Inter Miami', ar: 'إنتر ميامي' } }
    ],
    answer: { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
    aliases: ['Messi', 'Leo Messi', 'ميسي', 'ليو ميسي', 'البرغوث'],
    hints: {
      nationality: { en: 'Argentina', ar: 'الأرجنتين' },
      position: { en: 'Forward / Playmaker', ar: 'مهاجم / صانع ألعاب' },
      shirtNumber: 10
    }
  },
  {
    id: 'cp_3',
    mode: 'career_path',
    category: 'Striker',
    difficulty: 4,
    prompt: {
      en: 'Which iconic nomad striker played for these top clubs?',
      ar: 'من هو المهاجم الرحالة الذي مثل كبرى أندية أوروبا؟'
    },
    career: [
      { years: '1999–2001', club: { en: 'Malmö FF', ar: 'مالمو' } },
      { years: '2001–2004', club: { en: 'Ajax', ar: 'أياكس' } },
      { years: '2004–2006', club: { en: 'Juventus', ar: 'يوفنتوس' } },
      { years: '2006–2009', club: { en: 'Inter Milan', ar: 'إنتر ميلان' } },
      { years: '2009–2010', club: { en: 'Barcelona', ar: 'برشلونة' } },
      { years: '2010–2012', club: { en: 'AC Milan', ar: 'إيه سي ميلان' } },
      { years: '2012–2016', club: { en: 'Paris Saint-Germain', ar: 'باريس سان جيرمان' } },
      { years: '2016–2018', club: { en: 'Manchester United', ar: 'مانشستر يونايتد' } },
      { years: '2018–2019', club: { en: 'LA Galaxy', ar: 'لوس أنجلوس جالاكسي' } },
      { years: '2020–2023', club: { en: 'AC Milan', ar: 'إيه سي ميلان' } }
    ],
    answer: { en: 'Zlatan Ibrahimović', ar: 'زلاتان إبراهيموفيتش' },
    aliases: ['Ibrahimovic', 'Zlatan', 'ابراهيموفيتش', 'زلاتان', 'إبرا'],
    hints: {
      nationality: { en: 'Sweden', ar: 'السويد' },
      position: { en: 'Striker', ar: 'رأس حربة' },
      shirtNumber: 9
    }
  },
  {
    id: 'cp_4',
    mode: 'career_path',
    category: 'Arab Star',
    difficulty: 3,
    prompt: {
      en: 'Who is this Egyptian King of European football?',
      ar: 'من هو الملك المصري وصانع الأمجاد في إنجلترا؟'
    },
    career: [
      { years: '2010–2012', club: { en: 'Al Mokawloon', ar: 'المقاولون العرب' } },
      { years: '2012–2014', club: { en: 'Basel', ar: 'بازل السويسري' } },
      { years: '2014–2016', club: { en: 'Chelsea', ar: 'تشيلسي' } },
      { years: '2015', club: { en: 'Fiorentina (Loan)', ar: 'فيورنتينا (إعارة)' } },
      { years: '2015–2017', club: { en: 'AS Roma', ar: 'روما' } },
      { years: '2017–Present', club: { en: 'Liverpool', ar: 'ليفربول' } }
    ],
    answer: { en: 'Mohamed Salah', ar: 'محمد صلاح' },
    aliases: ['Salah', 'Mo Salah', 'صلاح', 'مو صلاح', 'فخر العرب'],
    hints: {
      nationality: { en: 'Egypt', ar: 'مصر' },
      position: { en: 'Right Winger', ar: 'جناح أيمن' },
      shirtNumber: 11
    }
  },
  {
    id: 'cp_5',
    mode: 'career_path',
    category: 'Goal Machine',
    difficulty: 3,
    prompt: {
      en: 'Identify this prolific Scandinavian goalscorer:',
      ar: 'من هي ماكينة الأهداف الإسكندنافية المرعبة؟'
    },
    career: [
      { years: '2015–2017', club: { en: 'Bryne FK', ar: 'برينه' } },
      { years: '2017–2019', club: { en: 'Molde FK', ar: 'مولده' } },
      { years: '2019–2020', club: { en: 'Red Bull Salzburg', ar: 'ريد بول سالزبورغ' } },
      { years: '2020–2022', club: { en: 'Borussia Dortmund', ar: 'بوروسيا دورتموند' } },
      { years: '2022–Present', club: { en: 'Manchester City', ar: 'مانشستر سيتي' } }
    ],
    answer: { en: 'Erling Haaland', ar: 'إيرلينغ هالاند' },
    aliases: ['Haaland', 'Erling Braut Haaland', 'هالاند', 'ايرلينج هالاند'],
    hints: {
      nationality: { en: 'Norway', ar: 'النرويج' },
      position: { en: 'Striker', ar: 'مهاجم صريح' },
      shirtNumber: 9
    }
  },
  {
    id: 'cp_6',
    mode: 'career_path',
    category: 'Midfield Maestro',
    difficulty: 5,
    prompt: {
      en: 'Who is this Ballon d’Or winning midfield orchestrator?',
      ar: 'من هو مايسترو خط الوسط الحائز على الكرة الذهبية؟'
    },
    career: [
      { years: '2003–2008', club: { en: 'Dinamo Zagreb', ar: 'دينامو زغرب' } },
      { years: '2003–2004', club: { en: 'Zrinjski Mostar (Loan)', ar: 'زرينيسكي موستار' } },
      { years: '2004–2005', club: { en: 'Inter Zaprešić (Loan)', ar: 'إنتر زابريسيتش' } },
      { years: '2008–2012', club: { en: 'Tottenham Hotspur', ar: 'توتنهام هوتسبير' } },
      { years: '2012–Present', club: { en: 'Real Madrid', ar: 'ريال مدريد' } }
    ],
    answer: { en: 'Luka Modrić', ar: 'لوكا مودريتش' },
    aliases: ['Modric', 'Luka Modric', 'مودريتش', 'لوكا مودريتش'],
    hints: {
      nationality: { en: 'Croatia', ar: 'كرواتيا' },
      position: { en: 'Central Midfielder', ar: 'لاعب وسط' },
      shirtNumber: 10
    }
  },
  {
    id: 'cp_7',
    mode: 'career_path',
    category: 'Midfield Maestro',
    difficulty: 4,
    prompt: {
      en: 'Who is this master assist creator in the Premier League?',
      ar: 'من هو ملك صناعة اللعب والتمريرات الحاسمة في البريميرليغ؟'
    },
    career: [
      { years: '2008–2012', club: { en: 'Genk', ar: 'جينك' } },
      { years: '2012–2014', club: { en: 'Chelsea', ar: 'تشيلسي' } },
      { years: '2012–2013', club: { en: 'Werder Bremen (Loan)', ar: 'فيردر بريمن' } },
      { years: '2014–2015', club: { en: 'VfL Wolfsburg', ar: 'فولفسبورغ' } },
      { years: '2015–Present', club: { en: 'Manchester City', ar: 'مانشستر سيتي' } }
    ],
    answer: { en: 'Kevin De Bruyne', ar: 'كيفين دي بروين' },
    aliases: ['De Bruyne', 'KDB', 'دي بروين', 'كيفن دي بروين'],
    hints: {
      nationality: { en: 'Belgium', ar: 'بلجيكا' },
      position: { en: 'Attacking Midfielder', ar: 'صانع ألعاب' },
      shirtNumber: 17
    }
  },
  {
    id: 'cp_8',
    mode: 'career_path',
    category: 'Striker',
    difficulty: 4,
    prompt: {
      en: 'Which French forward won the 2022 Ballon d’Or?',
      ar: 'من هو المهاجم الفرنسي المتوج بالكرة الذهبية لعام 2022؟'
    },
    career: [
      { years: '2004–2009', club: { en: 'Lyon', ar: 'ليون' } },
      { years: '2009–2023', club: { en: 'Real Madrid', ar: 'ريال مدريد' } },
      { years: '2023–Present', club: { en: 'Al-Ittihad', ar: 'الاتحاد السعودي' } }
    ],
    answer: { en: 'Karim Benzema', ar: 'كريم بنزيما' },
    aliases: ['Benzema', 'KB9', 'بنزيما', 'كريم بنزيما', 'الحكومة'],
    hints: {
      nationality: { en: 'France', ar: 'فرنسا' },
      position: { en: 'Striker', ar: 'مهاجم' },
      shirtNumber: 9
    }
  },
  {
    id: 'cp_9',
    mode: 'career_path',
    category: 'Striker',
    difficulty: 3,
    prompt: {
      en: 'Who is this Polish record-breaking number 9?',
      ar: 'من هو الهداف البولندي التاريخي للكرة الألمانية والإسبانية؟'
    },
    career: [
      { years: '2006–2008', club: { en: 'Znicz Pruszków', ar: 'زنيتش بروشكوف' } },
      { years: '2008–2010', club: { en: 'Lech Poznań', ar: 'ليخ بوزنان' } },
      { years: '2010–2014', club: { en: 'Borussia Dortmund', ar: 'بوروسيا دورتموند' } },
      { years: '2014–2022', club: { en: 'Bayern Munich', ar: 'بايرن ميونخ' } },
      { years: '2022–Present', club: { en: 'Barcelona', ar: 'برشلونة' } }
    ],
    answer: { en: 'Robert Lewandowski', ar: 'روبرت ليفاندوفسكي' },
    aliases: ['Lewandowski', 'Lewy', 'ليفاندوفسكي', 'ليفاندوفسكي'],
    hints: {
      nationality: { en: 'Poland', ar: 'بولندا' },
      position: { en: 'Striker', ar: 'مهاجم صريح' },
      shirtNumber: 9
    }
  },
  {
    id: 'cp_10',
    mode: 'career_path',
    category: 'Forward',
    difficulty: 2,
    prompt: {
      en: 'Who is this World Cup winning French sensation?',
      ar: 'من هو النجم الفرنسي بطل العالم وصاحب السرعة الخارقة؟'
    },
    career: [
      { years: '2015–2017', club: { en: 'AS Monaco', ar: 'موناكو' } },
      { years: '2017–2024', club: { en: 'Paris Saint-Germain', ar: 'باريس سان جيرمان' } },
      { years: '2024–Present', club: { en: 'Real Madrid', ar: 'ريال مدريد' } }
    ],
    answer: { en: 'Kylian Mbappé', ar: 'كيليان مبابي' },
    aliases: ['Mbappe', 'Kylian Mbappe', 'مبابي', 'كيليان مبابي'],
    hints: {
      nationality: { en: 'France', ar: 'فرنسا' },
      position: { en: 'Forward', ar: 'مهاجم' },
      shirtNumber: 9
    }
  },
  {
    id: 'cp_11',
    mode: 'career_path',
    category: 'Arab Star',
    difficulty: 4,
    prompt: {
      en: 'Who is this Algerian Premier League champion and treble winner?',
      ar: 'من هو ساحر العرب الجزائري الفائز بالبريميرليغ والثلاثية التاريخية؟'
    },
    career: [
      { years: '2011–2014', club: { en: 'Le Havre', ar: 'لوهافر' } },
      { years: '2014–2018', club: { en: 'Leicester City', ar: 'ليستر سيتي' } },
      { years: '2018–2023', club: { en: 'Manchester City', ar: 'مانشستر سيتي' } },
      { years: '2023–Present', club: { en: 'Al-Ahli', ar: 'الأهلي السعودي' } }
    ],
    answer: { en: 'Riyad Mahrez', ar: 'رياض محرز' },
    aliases: ['Mahrez', 'Riyad Mahrez', 'محرز', 'رياض محرز'],
    hints: {
      nationality: { en: 'Algeria', ar: 'الجزائر' },
      position: { en: 'Right Winger', ar: 'جناح أيمن' },
      shirtNumber: 7
    }
  },
  {
    id: 'cp_12',
    mode: 'career_path',
    category: 'African Star',
    difficulty: 4,
    prompt: {
      en: 'Who is this Senegalese AFCON champion and Liverpool legend?',
      ar: 'من هو النجم السنغالي بطل إفريقيا وأسطورة هجوم ليفربول؟'
    },
    career: [
      { years: '2011–2012', club: { en: 'Metz', ar: 'ميتز' } },
      { years: '2012–2014', club: { en: 'Red Bull Salzburg', ar: 'ريد بول سالزبورغ' } },
      { years: '2014–2016', club: { en: 'Southampton', ar: 'ساوثهامبتون' } },
      { years: '2016–2022', club: { en: 'Liverpool', ar: 'ليفربول' } },
      { years: '2022–2023', club: { en: 'Bayern Munich', ar: 'بايرن ميونخ' } },
      { years: '2023–Present', club: { en: 'Al Nassr', ar: 'النصر السعودي' } }
    ],
    answer: { en: 'Sadio Mané', ar: 'ساديو ماني' },
    aliases: ['Mane', 'Sadio Mane', 'ماني', 'ساديو ماني'],
    hints: {
      nationality: { en: 'Senegal', ar: 'السنغال' },
      position: { en: 'Winger / Forward', ar: 'جناح / مهاجم' },
      shirtNumber: 10
    }
  },
  {
    id: 'cp_13',
    mode: 'career_path',
    category: 'Striker',
    difficulty: 4,
    prompt: {
      en: 'Who is "El Pistolero", one of South America’s greatest ever number 9s?',
      ar: 'من هو "إل بيستوليرو" الهداف التاريخي للأوروغواي وبرشلونة وليفربول؟'
    },
    career: [
      { years: '2005–2006', club: { en: 'Nacional', ar: 'ناسيونال' } },
      { years: '2006–2007', club: { en: 'Groningen', ar: 'جرونينجن' } },
      { years: '2007–2011', club: { en: 'Ajax', ar: 'أياكس' } },
      { years: '2011–2014', club: { en: 'Liverpool', ar: 'ليفربول' } },
      { years: '2014–2020', club: { en: 'Barcelona', ar: 'برشلونة' } },
      { years: '2020–2022', club: { en: 'Atlético Madrid', ar: 'أتلتيكو مدريد' } },
      { years: '2022', club: { en: 'Nacional', ar: 'ناسيونال' } },
      { years: '2023', club: { en: 'Grêmio', ar: 'غريميو' } },
      { years: '2024–Present', club: { en: 'Inter Miami', ar: 'إنتر ميامي' } }
    ],
    answer: { en: 'Luis Suárez', ar: 'لويس سواريز' },
    aliases: ['Suarez', 'Luis Suarez', 'سواريز', 'لويس سواريز'],
    hints: {
      nationality: { en: 'Uruguay', ar: 'الأوروغواي' },
      position: { en: 'Striker', ar: 'مهاجم' },
      shirtNumber: 9
    }
  },
  {
    id: 'cp_14',
    mode: 'career_path',
    category: 'German Legend',
    difficulty: 4,
    prompt: {
      en: 'Which German midfield sniper won 6 Champions League trophies?',
      ar: 'من هو قناص التمريرات الألماني الفائز بـ 6 ألقاب لدوري أبطال أوروبا؟'
    },
    career: [
      { years: '2007–2014', club: { en: 'Bayern Munich', ar: 'بايرن ميونخ' } },
      { years: '2009–2010', club: { en: 'Bayer Leverkusen (Loan)', ar: 'باير ليفركوزن' } },
      { years: '2014–2024', club: { en: 'Real Madrid', ar: 'ريال مدريد' } }
    ],
    answer: { en: 'Toni Kroos', ar: 'توني كروس' },
    aliases: ['Kroos', 'Toni Kroos', 'كروس', 'توني كروس'],
    hints: {
      nationality: { en: 'Germany', ar: 'ألمانيا' },
      position: { en: 'Central Midfielder', ar: 'لاعب وسط' },
      shirtNumber: 8
    }
  },
  {
    id: 'cp_15',
    mode: 'career_path',
    category: 'Brazilian Star',
    difficulty: 3,
    prompt: {
      en: 'Who is this Brazilian samba superstar who became the most expensive transfer in history?',
      ar: 'من هو ساحر السامبا البرازيلي صاحب أغلى صفقة انتقال في تاريخ كرة القدم؟'
    },
    career: [
      { years: '2009–2013', club: { en: 'Santos', ar: 'سانتوس' } },
      { years: '2013–2017', club: { en: 'Barcelona', ar: 'برشلونة' } },
      { years: '2017–2023', club: { en: 'Paris Saint-Germain', ar: 'باريس سان جيرمان' } },
      { years: '2023–Present', club: { en: 'Al Hilal', ar: 'الهلال السعودي' } }
    ],
    answer: { en: 'Neymar Jr', ar: 'نيمار جونيور' },
    aliases: ['Neymar', 'Neymar Jr', 'نيمار', 'نيمار دا سيلفا'],
    hints: {
      nationality: { en: 'Brazil', ar: 'البرازيل' },
      position: { en: 'Left Winger / Attacking Midfielder', ar: 'جناح أيسر / صانع ألعاب' },
      shirtNumber: 10
    }
  }
];

