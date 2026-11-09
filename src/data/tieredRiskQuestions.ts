import { TieredRiskQuestion } from '../types/game';

export const tieredRiskQuestions: TieredRiskQuestion[] = [
  {
    id: 'tr_1',
    mode: 'tiered_risk',
    category: 'Ballon d\'Or Champions',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: How well do you know Ballon d\'Or winners?',
      ar: 'اختر مستوى المخاطرة: ما مدى معرفتك بالفائزين بالكرة الذهبية؟'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Who won the 2023 Men\'s Ballon d\'Or after winning the 2022 World Cup?',
          ar: 'من فاز بالكرة الذهبية لعام 2023 بعد تتويجه بكأس العالم 2022؟'
        },
        options: [
          { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
          { en: 'Erling Haaland', ar: 'إيرلينغ هالاند' },
          { en: 'Kylian Mbappé', ar: 'كيليان مبابي' },
          { en: 'Kevin De Bruyne', ar: 'كيفين دي بروين' }
        ],
        answer: { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which Croatian midfielder broke the Messi-Ronaldo duopoly by winning the Ballon d\'Or in 2018?',
          ar: 'أي نجم كرواتي كسر هيمنة ميسي ورونالدو وتوج بالكرة الذهبية عام 2018؟'
        },
        options: [
          { en: 'Luka Modrić', ar: 'لوكا مودريتش' },
          { en: 'Ivan Rakitić', ar: 'إيفان راكيتيتش' },
          { en: 'Mario Mandžukić', ar: 'ماريو ماندزوكيتش' },
          { en: 'Mateo Kovačić', ar: 'ماتيو كوفاسيتش' }
        ],
        answer: { en: 'Luka Modrić', ar: 'لوكا مودريتش' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'Which Soviet goalkeeper is the only shot-stopper in history to win the Ballon d\'Or (in 1963)?',
          ar: 'من هو الحارس السوفيتي الوحيد في التاريخ المتوج بجائزة الكرة الذهبية (عام 1963)؟'
        },
        options: [
          { en: 'Lev Yashin (The Black Spider)', ar: 'ليف ياشين (العنكبوت الأسود)' },
          { en: 'Dino Zoff', ar: 'دينو زوف' },
          { en: 'Gordon Banks', ar: 'غوردون بانكس' },
          { en: 'Sepp Maier', ar: 'سيب ماير' }
        ],
        answer: { en: 'Lev Yashin (The Black Spider)', ar: 'ليف ياشين (العنكبوت الأسود)' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_2',
    mode: 'tiered_risk',
    category: 'World Cup Finals',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: World Cup Finals Knowledge',
      ar: 'اختر مستوى المخاطرة: معلومات نهائيات كأس العالم'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Which nation has won the most FIFA World Cups (5 titles)?',
          ar: 'أي منتخب هو الأكثر تتويجاً بكأس العالم بـ 5 ألقاب؟'
        },
        options: [
          { en: 'Brazil', ar: 'البرازيل' },
          { en: 'Germany', ar: 'ألمانيا' },
          { en: 'Argentina', ar: 'الأرجنتين' },
          { en: 'France', ar: 'فرنسا' }
        ],
        answer: { en: 'Brazil', ar: 'البرازيل' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Who scored the extra-time winning goal for Germany against Argentina in the 2014 World Cup Final?',
          ar: 'من هو اللاعب الألماني صاحب هدف الفوز القاتل في شباك الأرجنتين بنهائي مونديال 2014؟'
        },
        options: [
          { en: 'Mario Götze', ar: 'ماريو غوتزه' },
          { en: 'Thomas Müller', ar: 'توماس مولر' },
          { en: 'André Schürrle', ar: 'أندريه شورله' },
          { en: 'Miroslav Klose', ar: 'ميروسلاف كلوزه' }
        ],
        answer: { en: 'Mario Götze', ar: 'ماريو غوتزه' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'In the 1950 "Maracanaço", which Uruguayan player scored the infamous 79th-minute winner silencing 200,000 Brazilians?',
          ar: 'في نكسة الماراكانا 1950، من هو اللاعب الأوروغوياني الذي سجل هدف الصدمة في الدقيقة 79؟'
        },
        options: [
          { en: 'Alcides Ghiggia', ar: 'ألسيديس غيغيا' },
          { en: 'Juan Alberto Schiaffino', ar: 'خوان ألبرتو سيكافينو' },
          { en: 'Obdulio Varela', ar: 'أوبدوليو فاريلا' },
          { en: 'Óscar Míguez', ar: 'أوسكار ميغيز' }
        ],
        answer: { en: 'Alcides Ghiggia', ar: 'ألسيديس غيغيا' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_3',
    mode: 'tiered_risk',
    category: 'Champions League History',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: UEFA Champions League Lore',
      ar: 'اختر مستوى المخاطرة: أسرار وتاريخ دوري أبطال أوروبا'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Which club won the 2023 Champions League to complete their first historic European Treble?',
          ar: 'أي نادٍ فاز بدوري أبطال أوروبا 2023 محققاً أول ثلاثية تاريخية في مسيرته؟'
        },
        options: [
          { en: 'Manchester City', ar: 'مانشستر سيتي' },
          { en: 'Inter Milan', ar: 'إنتر ميلان' },
          { en: 'Real Madrid', ar: 'ريال مدريد' },
          { en: 'Chelsea', ar: 'تشيلسي' }
        ],
        answer: { en: 'Manchester City', ar: 'مانشستر سيتي' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which manager famously took FC Porto to Champions League glory in 2004?',
          ar: 'من هو المدرب الشهير الذي قاد بورتو البرتغالي للتتويج بدوري الأبطال عام 2004؟'
        },
        options: [
          { en: 'José Mourinho', ar: 'جوزيه مورينيو' },
          { en: 'André Villas-Boas', ar: 'أندريه فيلاش-بواش' },
          { en: 'Carlo Ancelotti', ar: 'كارلو أنشيلوتي' },
          { en: 'Rafael Benítez', ar: 'رافائيل بينيتيز' }
        ],
        answer: { en: 'José Mourinho', ar: 'جوزيه مورينيو' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'Which French club is the only Ligue 1 club in history to win the UEFA Champions League (in 1993)?',
          ar: 'ما هو النادي الفرنسي الوحيد في التاريخ المتوج بلقب دوري أبطال أوروبا (عام 1993)؟'
        },
        options: [
          { en: 'Olympique de Marseille', ar: 'أولمبيك مارسيليا' },
          { en: 'Paris Saint-Germain', ar: 'باريس سان جيرمان' },
          { en: 'AS Monaco', ar: 'موناكو' },
          { en: 'Saint-Étienne', ar: 'سانت إتيان' }
        ],
        answer: { en: 'Olympique de Marseille', ar: 'أولمبيك مارسيليا' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_4',
    mode: 'tiered_risk',
    category: 'Arab Football Giants',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: Arab Football Legends & Glory',
      ar: 'اختر مستوى المخاطرة: عمالقة وأساطير الكرة العربية'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Which Arab nation reached the semi-finals of the 2022 FIFA World Cup?',
          ar: 'أي منتخب عربي حقق إنجاز الوصول لنصف نهائي كأس العالم 2022؟'
        },
        options: [
          { en: 'Morocco', ar: 'المغرب' },
          { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
          { en: 'Tunisia', ar: 'تونس' },
          { en: 'Egypt', ar: 'مصر' }
        ],
        answer: { en: 'Morocco', ar: 'المغرب' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which legendary Algerian forward scored a famous backheel goal for FC Porto in the 1987 European Cup Final?',
          ar: 'من هو الأسطورة الجزائري صاحب هدف الكعب التاريخي لبورتو في نهائي دوري الأبطال 1987؟'
        },
        options: [
          { en: 'Rabah Madjer', ar: 'رابح ماجر' },
          { en: 'Lakhdar Belloumi', ar: 'لخضر بلومي' },
          { en: 'Mustapha Dahleb', ar: 'مصطفى دحلب' },
          { en: 'Salah Assad', ar: 'صالح عصاد' }
        ],
        answer: { en: 'Rabah Madjer', ar: 'رابح ماجر' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'Which Saudi star scored the magnificent solo goal running 70 yards against Belgium in the 1994 World Cup?',
          ar: 'من هو النجم السعودي صاحب الهدف المارادوني التاريخي بعد ركض 70 ياردة ضد بلجيكا بمونديال 1994؟'
        },
        options: [
          { en: 'Saeed Al-Owairan', ar: 'سعيد العويران' },
          { en: 'Sami Al-Jaber', ar: 'سامي الجابر' },
          { en: 'Majed Abdullah', ar: 'ماجد عبد الله' },
          { en: 'Fahad Al-Bishi', ar: 'فهد الهريفي' }
        ],
        answer: { en: 'Saeed Al-Owairan', ar: 'سعيد العويران' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_5',
    mode: 'tiered_risk',
    category: 'Premier League Legends',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: Premier League Lore',
      ar: 'اختر مستوى المخاطرة: أسرار الدوري الإنجليزي الممتاز'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Which London club went an entire 38-game Premier League season unbeaten in 2003–04 ("The Invincibles")?',
          ar: 'أي نادٍ لندني أنهى موسم البريميرليغ كاملاً 2003-2004 بدون أي هزيمة ("دوري اللاهزيمة")؟'
        },
        options: [
          { en: 'Arsenal', ar: 'أرسنال' },
          { en: 'Chelsea', ar: 'تشيلسي' },
          { en: 'Tottenham', ar: 'توتنهام' },
          { en: 'West Ham', ar: 'وست هام' }
        ],
        answer: { en: 'Arsenal', ar: 'أرسنال' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which team conceded only 15 goals in the entire 2004–05 Premier League season under Mourinho (all-time record)?',
          ar: 'أي فريق لم تستقبل شباكه سوى 15 هدفاً فقط طوال موسم 2004-2005 مع مورينيو (رقم قياسي)؟'
        },
        options: [
          { en: 'Chelsea', ar: 'تشيلسي' },
          { en: 'Manchester United', ar: 'مانشستر يونايتد' },
          { en: 'Arsenal', ar: 'أرسنال' },
          { en: 'Liverpool', ar: 'ليفربول' }
        ],
        answer: { en: 'Chelsea', ar: 'تشيلسي' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'Who holds the record for the most Premier League appearances of all time (653 appearances)?',
          ar: 'من هو اللاعب صاحب الرقم القياسي لأكثر عدد مباريات في تاريخ الدوري الإنجليزي (653 مباراة)؟'
        },
        options: [
          { en: 'Gareth Barry', ar: 'غاريث باري' },
          { en: 'Ryan Giggs', ar: 'ريان غيغز' },
          { en: 'Frank Lampard', ar: 'فرانك لامبارد' },
          { en: 'James Milner', ar: 'جيمس ميلنر' }
        ],
        answer: { en: 'Gareth Barry', ar: 'غاريث باري' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_6',
    mode: 'tiered_risk',
    category: 'El Clásico Rivals',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: Real Madrid vs FC Barcelona',
      ar: 'اختر مستوى المخاطرة: كلاسيكو الأرض (ريال مدريد وبرشلونة)'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Who is the all-time top scorer in El Clásico history (26 goals)?',
          ar: 'من هو الهداف التاريخي لمباريات الكلاسيكو برصيد 26 هدفاً؟'
        },
        options: [
          { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
          { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
          { en: 'Alfredo Di Stéfano', ar: 'ألفريدو دي ستيفانو' },
          { en: 'Raúl González', ar: 'راؤول غونزاليس' }
        ],
        answer: { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which Portuguese superstar made the explosive direct transfer from Barcelona to Real Madrid in 2000?',
          ar: 'من هو النجم البرتغالي صاحب الانتقال الصادم والمثير للجدل من برشلونة إلى ريال مدريد سنة 2000؟'
        },
        options: [
          { en: 'Luís Figo', ar: 'لويس فيغو' },
          { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
          { en: 'Deco', ar: 'ديكو' },
          { en: 'Simão Sabrosa', ar: 'سيماو سابروسا' }
        ],
        answer: { en: 'Luís Figo', ar: 'لويس فيغو' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'Which Brazilian maestro received a standing ovation from Real Madrid fans at the Santiago Bernabéu in 2005?',
          ar: 'من هو الساحر البرازيلي الذي صفقت له جماهير سانتياغو برنابيو بحرارة بعد تألقه الخارق عام 2005؟'
        },
        options: [
          { en: 'Ronaldinho', ar: 'رونالدينيو' },
          { en: 'Rivaldo', ar: 'ريفالدو' },
          { en: 'Romário', ar: 'روماريو' },
          { en: 'Neymar Jr.', ar: 'نيمار جونيور' }
        ],
        answer: { en: 'Ronaldinho', ar: 'رونالدينيو' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_7',
    mode: 'tiered_risk',
    category: 'Iconic Numbers & Jerseys',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: Jersey Numbers & Iconic Shirts',
      ar: 'اختر مستوى المخاطرة: أرقام القمصان التاريخية'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Which iconic shirt number did Cristiano Ronaldo make legendary across his clubs?',
          ar: 'ما هو رقم القميص الأيقوني الذي اشتهر به كريستيانو رونالدو (CR...)?'
        },
        options: [
          { en: 'Number 7', ar: 'الرقم 7' },
          { en: 'Number 9', ar: 'الرقم 9' },
          { en: 'Number 10', ar: 'الرقم 10' },
          { en: 'Number 11', ar: 'الرقم 11' }
        ],
        answer: { en: 'Number 7', ar: 'الرقم 7' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which eccentric shirt number did Ronaldinho wear at AC Milan?',
          ar: 'ما هو رقم القميص الغريب الذي ارتداه رونالدينيو مع إيه سي ميلان الإيطالي؟'
        },
        options: [
          { en: 'Number 80 (year of birth)', ar: 'الرقم 80 (سنة ميلاده)' },
          { en: 'Number 10', ar: 'الرقم 10' },
          { en: 'Number 99', ar: 'الرقم 99' },
          { en: 'Number 49', ar: 'الرقم 49' }
        ],
        answer: { en: 'Number 80 (year of birth)', ar: 'الرقم 80 (سنة ميلاده)' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'Which Chilean striker famously wore "1+8" on his Inter Milan shirt because Ronaldo took number 9?',
          ar: 'من هو المهاجم التشيلي الذي ارتدى قميص "1+8" مع إنتر ميلان بعد حصول رونالدو الظاهرة على الرقم 9؟'
        },
        options: [
          { en: 'Iván Zamorano', ar: 'إيفان زامورانو' },
          { en: 'Marcelo Salas', ar: 'مارسيلو سالاس' },
          { en: 'Alexis Sánchez', ar: 'أليكسيس سانشيز' },
          { en: 'Eduardo Vargas', ar: 'إدواردو فارجاس' }
        ],
        answer: { en: 'Iván Zamorano', ar: 'إيفان زامورانو' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_8',
    mode: 'tiered_risk',
    category: 'World Cup Hosts',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: World Cup Tournaments and Hosts',
      ar: 'اختر مستوى المخاطرة: استضافة وبطولات كأس العالم'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Which three nations will co-host the 2026 FIFA World Cup?',
          ar: 'ما هي الدول الثلاث التي ستشترك في استضافة كأس العالم 2026؟'
        },
        options: [
          { en: 'USA, Canada, and Mexico', ar: 'الولايات المتحدة وكندا والمكسيك' },
          { en: 'Spain, Portugal, and Morocco', ar: 'إسبانيا والبرتغال والمغرب' },
          { en: 'Saudi Arabia, Egypt, and Greece', ar: 'السعودية ومصر واليونان' },
          { en: 'Argentina, Uruguay, and Paraguay', ar: 'الأرجنتين وأوروغواي وباراغواي' }
        ],
        answer: { en: 'USA, Canada, and Mexico', ar: 'الولايات المتحدة وكندا والمكسيك' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'In which year did an African country first host the FIFA World Cup (South Africa)?',
          ar: 'في أي عام استضافت قارة إفريقيا كأس العالم لأول مرة في تاريخها (جنوب إفريقيا)؟'
        },
        options: [
          { en: '2010', ar: '2010' },
          { en: '2006', ar: '2006' },
          { en: '2014', ar: '2014' },
          { en: '2002', ar: '2002' }
        ],
        answer: { en: '2010', ar: '2010' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'Which country won the 1954 World Cup ("Miracle of Bern"), defeating Hungary’s "Mighty Magyars"?',
          ar: 'أي منتخب حقق "معجزة بيرن" وفاز بمونديال 1954 قاهراً المجر الذهبية؟'
        },
        options: [
          { en: 'West Germany', ar: 'ألمانيا الغربية' },
          { en: 'Austria', ar: 'النمسا' },
          { en: 'Switzerland', ar: 'سويسرا' },
          { en: 'Brazil', ar: 'البرازيل' }
        ],
        answer: { en: 'West Germany', ar: 'ألمانيا الغربية' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_9',
    mode: 'tiered_risk',
    category: 'Stadiums of the World',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: Legendary Football Stadiums',
      ar: 'اختر مستوى المخاطرة: الملاعب الأيقونية حول العالم'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'What is the name of FC Barcelona’s famous home stadium?',
          ar: 'ما هو اسم الملعب التاريخي والشهير لنادي برشلونة الإسباني؟'
        },
        options: [
          { en: 'Camp Nou', ar: 'كامب نو' },
          { en: 'Santiago Bernabéu', ar: 'سانتياغو برنابيو' },
          { en: 'Wembley', ar: 'ويمبلي' },
          { en: 'Allianz Arena', ar: 'أليانز أرينا' }
        ],
        answer: { en: 'Camp Nou', ar: 'كامب نو' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which iconic stadium in London with an arch hosts the FA Cup Final and England national matches?',
          ar: 'ما هو الملعب اللندني الشهير صاحب القوس العملاق الذي يستضيف نهائي كأس إنجلترا؟'
        },
        options: [
          { en: 'Wembley Stadium', ar: 'ملعب ويمبلي' },
          { en: 'Emirates Stadium', ar: 'استاد الإمارات' },
          { en: 'Stamford Bridge', ar: 'ستامفورد بريدج' },
          { en: 'Tottenham Hotspur Stadium', ar: 'ملعب توتنهام' }
        ],
        answer: { en: 'Wembley Stadium', ar: 'ملعب ويمبلي' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'What is the nickname of Boca Juniors’ stadium, famous for its vibrating stands?',
          ar: 'ما هو اللقب الشهير لملعب بوكا جونيورز في الأرجنتين المعروف بمدرجاته الصاخبة؟'
        },
        options: [
          { en: 'La Bombonera (The Chocolate Box)', ar: 'لا بومبونيرا (صندوق الشوكولاتة)' },
          { en: 'El Monumental', ar: 'إل مونومنتال' },
          { en: 'Estadio Azteca', ar: 'استاد أزتيكا' },
          { en: 'El Cilindro', ar: 'إل سيليندرو' }
        ],
        answer: { en: 'La Bombonera (The Chocolate Box)', ar: 'لا بومبونيرا (صندوق الشوكولاتة)' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_10',
    mode: 'tiered_risk',
    category: 'International Trophies',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: International Competitions',
      ar: 'اختر مستوى المخاطرة: البطولات الدولية للمنتخبات'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'How often is the FIFA World Cup held in the men\'s game?',
          ar: 'كل كم سنة تُقام بطولة كأس العالم لكرة القدم للرجال؟'
        },
        options: [
          { en: 'Every 4 years', ar: 'كل 4 سنوات' },
          { en: 'Every 2 years', ar: 'كل سنتين' },
          { en: 'Every 3 years', ar: 'كل 3 سنوات' },
          { en: 'Every year', ar: 'كل سنة' }
        ],
        answer: { en: 'Every 4 years', ar: 'كل 4 سنوات' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which country won the inaugural UEFA Nations League in 2019?',
          ar: 'أي منتخب فاز بالنسخة الأولى لبطولة دوري الأمم الأوروبية عام 2019؟'
        },
        options: [
          { en: 'Portugal', ar: 'البرتغال' },
          { en: 'Netherlands', ar: 'هولندا' },
          { en: 'France', ar: 'فرنسا' },
          { en: 'Spain', ar: 'إسبانيا' }
        ],
        answer: { en: 'Portugal', ar: 'البرتغال' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'What was the original name of the FIFA World Cup trophy before 1974?',
          ar: 'ما هو الاسم الأصلي لكأس العالم القديمة قبل استبدالها بالشكل الحالي عام 1974؟'
        },
        options: [
          { en: 'Jules Rimet Trophy', ar: 'كأس جول ريميه' },
          { en: 'Henri Delaunay Cup', ar: 'كأس هنري ديلوناي' },
          { en: 'Coupe du Monde', ar: 'كأس المونديال' },
          { en: 'Sir Stanley Rous Trophy', ar: 'كأس السير ستانلي روس' }
        ],
        answer: { en: 'Jules Rimet Trophy', ar: 'كأس جول ريميه' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_11',
    mode: 'tiered_risk',
    category: 'Derby Matches',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: Fiercest Football Derbies',
      ar: 'اختر مستوى المخاطرة: أشرس ديربيات كرة القدم'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Which two clubs contest the North London Derby?',
          ar: 'ما هما الناديان اللذان يتنافسان في ديربي شمال لندن؟'
        },
        options: [
          { en: 'Arsenal and Tottenham Hotspur', ar: 'أرسنال وتوتنهام هوتسبير' },
          { en: 'Chelsea and Fulham', ar: 'تشيلسي وفولهام' },
          { en: 'West Ham and Millwall', ar: 'وست هام وميلوول' },
          { en: 'Crystal Palace and Brighton', ar: 'كريستال بالاس وبرايتون' }
        ],
        answer: { en: 'Arsenal and Tottenham Hotspur', ar: 'أرسنال وتوتنهام هوتسبير' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'What is the clash between Inter Milan and AC Milan officially named in Italy?',
          ar: 'ما هو الاسم الرسمي لمواجهة الديربي بين إنتر ميلان وإيه سي ميلان؟'
        },
        options: [
          { en: 'Derby della Madonnina', ar: 'ديربي ديلا مادونينا' },
          { en: 'Derby d\'Italia', ar: 'ديربي إيطاليا' },
          { en: 'Derby della Capitale', ar: 'ديربي العاصمة' },
          { en: 'Derby della Mole', ar: 'ديربي ديلا مولي' }
        ],
        answer: { en: 'Derby della Madonnina', ar: 'ديربي ديلا مادونينا' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'What is the famous Scottish rivalry between Celtic and Rangers called?',
          ar: 'ماذا يُطلق على الصراع التاريخي العنيف في إسكتلندا بين سيلتيك ورينجرز؟'
        },
        options: [
          { en: 'The Old Firm', ar: 'أولد فيرم (The Old Firm)' },
          { en: 'The Superclásico', ar: 'السوبر كلاسيكو' },
          { en: 'The Eternal Derby', ar: 'ديربي الأبدية' },
          { en: 'The Revierderby', ar: 'ديربي الرور' }
        ],
        answer: { en: 'The Old Firm', ar: 'أولد فيرم (The Old Firm)' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_12',
    mode: 'tiered_risk',
    category: 'World Cup Penalty Shootouts',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: World Cup Penalty Drama',
      ar: 'اختر مستوى المخاطرة: دراما ركلات الترجيح المونديالية'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Which Moroccan goalkeeper saved 2 penalties against Spain in the 2022 World Cup shootout?',
          ar: 'من هو الحارس المغربي البطل الذي تصدى لركلتي ترجيح أمام إسبانيا في مونديال 2022؟'
        },
        options: [
          { en: 'Yassine Bounou', ar: 'ياسين بونو' },
          { en: 'Munir Mohamedi', ar: 'منير المحمدي' },
          { en: 'Anas Zniti', ar: 'أنس الزنيتي' },
          { en: 'Ahmed Reda Tagnaouti', ar: 'رضا التكناوتي' }
        ],
        answer: { en: 'Yassine Bounou', ar: 'ياسين بونو' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which Italian star blazed his penalty over the crossbar in the 1994 World Cup Final against Brazil?',
          ar: 'من هو النجم الإيطالي الشهير صاحب ركلة الجزاء الضائعة فوق العارضة في نهائي 1994 أمام البرازيل؟'
        },
        options: [
          { en: 'Roberto Baggio', ar: 'روبرتو باجيو (صاحب ذيل الحصان)' },
          { en: 'Franco Baresi', ar: 'فرانكو باريزي' },
          { en: 'Daniele Massaro', ar: 'دانييلي ماسارو' },
          { en: 'Paolo Maldini', ar: 'باولو مالديني' }
        ],
        answer: { en: 'Roberto Baggio', ar: 'روبرتو باجيو (صاحب ذيل الحصان)' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'Which Dutch goalkeeper was famously brought on by Louis van Gaal in the 120th minute solely for penalties in 2014?',
          ar: 'من هو الحارس الهولندي الذي أقحمه فان غال في الدقيقة 120 خصيصاً لركلات الترجيح بمونديال 2014؟'
        },
        options: [
          { en: 'Tim Krul', ar: 'تيم كرول' },
          { en: 'Jasper Cillessen', ar: 'ياسبر سيليسن' },
          { en: 'Michel Vorm', ar: 'ميشيل فورم' },
          { en: 'Maarten Stekelenburg', ar: 'مارتن ستيكلنبرغ' }
        ],
        answer: { en: 'Tim Krul', ar: 'تيم كرول' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_13',
    mode: 'tiered_risk',
    category: 'Champions League Top Scorers',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: UEFA Champions League Top Guns',
      ar: 'اختر مستوى المخاطرة: هدافو دوري أبطال أوروبا'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Who holds the record for the most goals in a single UEFA Champions League season (17 goals in 2013–14)?',
          ar: 'من هو صاحب الرقم القياسي لأكثر عدد أهداف في موسم واحد بدوري الأبطال (17 هدفاً سنة 2014)؟'
        },
        options: [
          { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
          { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
          { en: 'Robert Lewandowski', ar: 'روبرت ليفاندوفسكي' },
          { en: 'Karim Benzema', ar: 'كريم بنزيما' }
        ],
        answer: { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Who scored 5 goals in a single Champions League knockout match against Bayer Leverkusen in 2012?',
          ar: 'من هو اللاعب الذي سجل 5 أهداف بمفرده في مباراة واحدة بدوري الأبطال ضد باير ليفركوزن 2012؟'
        },
        options: [
          { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
          { en: 'Neymar Jr.', ar: 'نيمار جونيور' },
          { en: 'Erling Haaland', ar: 'إيرلينغ هالاند' },
          { en: 'Luiz Adriano', ar: 'لويز أدريانو' }
        ],
        answer: { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'Who is the youngest player ever to score a hat-trick in UEFA Champions League history?',
          ar: 'من هو أصغر لاعب في تاريخ دوري أبطال أوروبا يسجل هاتريك (في عمر 18 عاماً مع ريال مدريد عام 1995)؟'
        },
        options: [
          { en: 'Raúl González', ar: 'راؤول غونزاليس' },
          { en: 'Wayne Rooney', ar: 'واين روني' },
          { en: 'Kylian Mbappé', ar: 'كيليان مبابي' },
          { en: 'Rodrygo', ar: 'رودريغو غوس' }
        ],
        answer: { en: 'Raúl González', ar: 'راؤول غونزاليس' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_14',
    mode: 'tiered_risk',
    category: 'Tactical Formations',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: Tactics & Formations Lore',
      ar: 'اختر مستوى المخاطرة: الخطط والتكتيكات الكروية'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'In a traditional 4-4-2 formation, how many defenders are fielded in the backline?',
          ar: 'في خطة 4-4-2 التقليدية، كم عدد المدافعين في الخط الخلفي؟'
        },
        options: [
          { en: '4 Defenders', ar: '4 مدافعين' },
          { en: '3 Defenders', ar: '3 مدافعين' },
          { en: '5 Defenders', ar: '5 مدافعين' },
          { en: '2 Defenders', ar: 'مدافعان' }
        ],
        answer: { en: '4 Defenders', ar: '4 مدافعين' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which legendary Dutch coach is credited with inventing "Total Football" (Totaalvoetbal) with Ajax and the Netherlands?',
          ar: 'من هو المدرب الهولندي العبقري مبتكر أسلوب "الكرة الشاملة" مع أياكس ومنتخب هولندا في السبعينيات؟'
        },
        options: [
          { en: 'Rinus Michels', ar: 'رينوس ميتشيلز' },
          { en: 'Johan Cruyff', ar: 'يوهان كرويف' },
          { en: 'Louis van Gaal', ar: 'لويس فان غال' },
          { en: 'Guus Hiddink', ar: 'غوس هيدينك' }
        ],
        answer: { en: 'Rinus Michels', ar: 'رينوس ميتشيلز' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'What historic formation was known as the "WM formation", popular in the 1930s-1950s?',
          ar: 'ما هو التشكيل الرقمي الذي كان يُعرف تاريخياً بـ "تشكيل WM" في ثلاثينيات القرن الماضي؟'
        },
        options: [
          { en: '3-2-2-3 (3-2-5)', ar: '3-2-2-3 (أو 3-2-5)' },
          { en: '4-3-3', ar: '4-3-3' },
          { en: '2-3-5', ar: '2-3-5' },
          { en: '4-2-4', ar: '4-2-4' }
        ],
        answer: { en: '3-2-2-3 (3-2-5)', ar: '3-2-2-3 (أو 3-2-5)' },
        points: 350,
        penalty: -150
      }
    }
  },
  {
    id: 'tr_15',
    mode: 'tiered_risk',
    category: 'Historic Transfers',
    difficulty: 6,
    prompt: {
      en: 'Choose your risk level: Record-breaking Transfer Fees',
      ar: 'اختر مستوى المخاطرة: صفقات الانتقال القياسية'
    },
    tierOptions: {
      easy: {
        question: {
          en: 'Which French forward transferred from Monaco to PSG for €180 million in 2017?',
          ar: 'أي مهاجم فرنسي انتقل من موناكو إلى باريس سان جيرمان مقابل 180 مليون يورو عام 2017؟'
        },
        options: [
          { en: 'Kylian Mbappé', ar: 'كيليان مبابي' },
          { en: 'Antoine Griezmann', ar: 'أنطوان غريزمان' },
          { en: 'Ousmane Dembélé', ar: 'عثمان ديمبيلي' },
          { en: 'Paul Pogba', ar: 'بول بوغبا' }
        ],
        answer: { en: 'Kylian Mbappé', ar: 'كيليان مبابي' },
        points: 100,
        penalty: 0
      },
      medium: {
        question: {
          en: 'Which English club broke the British transfer record in 2023 by signing Declan Rice from West Ham?',
          ar: 'أي نادٍ إنجليزي حطم رقمه القياسي عام 2023 بالتعاقد مع ديكلان رايس من وست هام؟'
        },
        options: [
          { en: 'Arsenal', ar: 'أرسنال' },
          { en: 'Chelsea', ar: 'تشيلسي' },
          { en: 'Manchester City', ar: 'مانشستر سيتي' },
          { en: 'Manchester United', ar: 'مانشستر يونايتد' }
        ],
        answer: { en: 'Arsenal', ar: 'أرسنال' },
        points: 200,
        penalty: -50
      },
      hard: {
        question: {
          en: 'In 1996, who became the world’s most expensive player when Barcelona signed him from PSV Eindhoven?',
          ar: 'في عام 1996، من هو النجم الذي أصبح أغلى لاعب في العالم عندما تعاقد معه برشلونة من آيندهوفن؟'
        },
        options: [
          { en: 'Ronaldo Nazário (El Fenómeno)', ar: 'رونالدو الظاهرة' },
          { en: 'Romário', ar: 'روماريو' },
          { en: 'Rivaldo', ar: 'ريفالدو' },
          { en: 'Alan Shearer', ar: 'آلان شيرار' }
        ],
        answer: { en: 'Ronaldo Nazário (El Fenómeno)', ar: 'رونالدو الظاهرة' },
        points: 350,
        penalty: -150
      }
    }
  }
];

