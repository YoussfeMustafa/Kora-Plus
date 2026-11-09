import { HistoricLineupQuestion } from '../types/game';

export const historicLineupQuestions: HistoricLineupQuestion[] = [
  {
    id: 'hl_1',
    mode: 'historic_lineup',
    category: 'World Cup 2022 Final',
    difficulty: 4,
    prompt: {
      en: 'Identify the 3 hidden starters from Argentina’s starting XI in the 2022 FIFA World Cup Final (vs France):',
      ar: 'حدد اللاعبين الثلاثة المخفيين من تشكيلة الأرجنتين الأساسية في نهائي كأس العالم 2022 (ضد فرنسا):'
    },
    matchTitle: {
      en: '2022 World Cup Final: Argentina (4-3-3)',
      ar: 'نهائي كأس العالم 2022: الأرجنتين (4-3-3)'
    },
    formation: '4-3-3',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'E. Martínez', ar: 'إيمليانو مارتينيز' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'N. Molina', ar: 'ناهويل مولينا' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 63, y: 74, name: { en: 'C. Romero', ar: 'كريستيان روميرو' }, isHidden: true, options: [{ en: 'C. Romero', ar: 'كريستيان روميرو' }, { en: 'L. Martínez', ar: 'ليساندرو مارتينيز' }, { en: 'G. Pezzella', ar: 'خيرمان بيزيلا' }] },
      { id: 'p4', position: 'CB', x: 37, y: 74, name: { en: 'N. Otamendi', ar: 'نيكولاس أوتاميندي' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'N. Tagliafico', ar: 'نيكولاس تاليافيكو' }, isHidden: false },
      { id: 'p6', position: 'DM', x: 50, y: 55, name: { en: 'Enzo Fernández', ar: 'إنزو فيرنانديز' }, isHidden: true, options: [{ en: 'Enzo Fernández', ar: 'إنزو فيرنانديز' }, { en: 'L. Paredes', ar: 'لياندرو باريديس' }, { en: 'G. Rodriguez', ar: 'غيدو رودريغيز' }] },
      { id: 'p7', position: 'CM', x: 72, y: 45, name: { en: 'R. De Paul', ar: 'رودريغو دي بول' }, isHidden: false },
      { id: 'p8', position: 'CM', x: 28, y: 45, name: { en: 'A. Mac Allister', ar: 'أليكسيس ماك أليستير' }, isHidden: false },
      { id: 'p9', position: 'RW', x: 80, y: 24, name: { en: 'Lionel Messi', ar: 'ليونيل ميسي' }, isHidden: false },
      { id: 'p10', position: 'ST', x: 50, y: 16, name: { en: 'J. Álvarez', ar: 'خوليان ألفاريز' }, isHidden: false },
      { id: 'p11', position: 'LW', x: 20, y: 24, name: { en: 'Ángel Di María', ar: 'أنخيل دي ماريا' }, isHidden: true, options: [{ en: 'Ángel Di María', ar: 'أنخيل دي ماريا' }, { en: 'P. Dybala', ar: 'باولو ديبالا' }, { en: 'A. Correa', ar: 'أنخيل كوريا' }] }
    ]
  },
  {
    id: 'hl_2',
    mode: 'historic_lineup',
    category: 'Champions League 2005',
    difficulty: 5,
    prompt: {
      en: 'Identify the hidden starters from Liverpool’s legendary 2005 Istanbul Final XI (vs AC Milan):',
      ar: 'حدد النجوم المخفيين في معجزة إسطنبول لليفربول في نهائي دوري أبطال أوروبا 2005 (ضد ميلان):'
    },
    matchTitle: {
      en: '2005 UCL Final: Liverpool (4-4-1-1)',
      ar: 'نهائي أبطال أوروبا 2005: ليفربول (4-4-1-1)'
    },
    formation: '4-4-1-1',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Jerzy Dudek', ar: 'يرزي دوديك' }, isHidden: true, options: [{ en: 'Jerzy Dudek', ar: 'يرزي دوديك' }, { en: 'Pepe Reina', ar: 'بيبي رينا' }, { en: 'Chris Kirkland', ar: 'كريس كيركلاند' }] },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Steve Finnan', ar: 'ستيف فينان' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 73, name: { en: 'Jamie Carragher', ar: 'جيمي كاراغر' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 38, y: 73, name: { en: 'Sami Hyypiä', ar: 'سامي هيبيا' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Djimi Traoré', ar: 'ديمي تراوري' }, isHidden: false },
      { id: 'p6', position: 'RM', x: 82, y: 48, name: { en: 'Luis García', ar: 'لويس غارسيا' }, isHidden: false },
      { id: 'p7', position: 'CM', x: 62, y: 52, name: { en: 'Steven Gerrard', ar: 'ستيفن جيرارد' }, isHidden: true, options: [{ en: 'Steven Gerrard', ar: 'ستيفن جيرارد' }, { en: 'Dietmar Hamann', ar: 'ديتمار هامان' }, { en: 'Danny Murphy', ar: 'داني ميرفي' }] },
      { id: 'p8', position: 'CM', x: 38, y: 52, name: { en: 'Xabi Alonso', ar: 'تشابي ألونسو' }, isHidden: false },
      { id: 'p9', position: 'LM', x: 18, y: 48, name: { en: 'John Arne Riise', ar: 'جون أرني ريسه' }, isHidden: false },
      { id: 'p10', position: 'AM', x: 50, y: 32, name: { en: 'Harry Kewell', ar: 'هاري كيويل' }, isHidden: false },
      { id: 'p11', position: 'ST', x: 50, y: 15, name: { en: 'Milan Baroš', ar: 'ميلان باروش' }, isHidden: true, options: [{ en: 'Milan Baroš', ar: 'ميلان باروش' }, { en: 'Djibril Cissé', ar: 'جبريل سيسيه' }, { en: 'Fernando Morientes', ar: 'فيرناندو موريانتس' }] }
    ]
  },
  {
    id: 'hl_3',
    mode: 'historic_lineup',
    category: 'Champions League 2011',
    difficulty: 4,
    prompt: {
      en: 'Who are the hidden stars in Guardiola’s masterclass Barcelona XI at Wembley 2011 (vs Man Utd)?',
      ar: 'من هم اللاعبون المخفيون في التشكيلة المثالية لبرشلونة بيب غوارديولا في ويمبلي 2011؟'
    },
    matchTitle: {
      en: '2011 UCL Final: FC Barcelona (4-3-3)',
      ar: 'نهائي ويمبلي 2011: برشلونة (4-3-3)'
    },
    formation: '4-3-3',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Víctor Valdés', ar: 'فيكتور فالديز' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Dani Alves', ar: 'داني ألفيس' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 73, name: { en: 'Javier Mascherano', ar: 'خافيير ماسكيرانو' }, isHidden: true, options: [{ en: 'Javier Mascherano', ar: 'خافيير ماسكيرانو' }, { en: 'Carles Puyol', ar: 'كارليس بويول' }, { en: 'Gabriel Milito', ar: 'غابرييل ميليتو' }] },
      { id: 'p4', position: 'CB', x: 38, y: 73, name: { en: 'Gerard Piqué', ar: 'جيرارد بيكيه' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Éric Abidal', ar: 'إريك أبيدال' }, isHidden: false },
      { id: 'p6', position: 'DM', x: 50, y: 55, name: { en: 'Sergio Busquets', ar: 'سيرجيو بوسكيتس' }, isHidden: false },
      { id: 'p7', position: 'CM', x: 70, y: 44, name: { en: 'Xavi Hernández', ar: 'تشافي هيرنانديز' }, isHidden: false },
      { id: 'p8', position: 'CM', x: 30, y: 44, name: { en: 'Andrés Iniesta', ar: 'أندريس إنييستا' }, isHidden: false },
      { id: 'p9', position: 'RW', x: 80, y: 22, name: { en: 'Pedro Rodríguez', ar: 'بيدرو رودريغيز' }, isHidden: true, options: [{ en: 'Pedro Rodríguez', ar: 'بيدرو رودريغيز' }, { en: 'Bojan Krkić', ar: 'بويان كركيتش' }, { en: 'Alexis Sánchez', ar: 'أليكسيس سانشيز' }] },
      { id: 'p10', position: 'CF', x: 50, y: 18, name: { en: 'Lionel Messi', ar: 'ليونيل ميسي' }, isHidden: false },
      { id: 'p11', position: 'LW', x: 20, y: 22, name: { en: 'David Villa', ar: 'دافيد فيا' }, isHidden: true, options: [{ en: 'David Villa', ar: 'دافيد فيا' }, { en: 'Thierry Henry', ar: 'تييري هنري' }, { en: 'Ibrahim Afellay', ar: 'إبراهيم أفيلاي' }] }
    ]
  },
  {
    id: 'hl_4',
    mode: 'historic_lineup',
    category: 'World Cup 2014 Final',
    difficulty: 5,
    prompt: {
      en: 'Identify the 3 hidden starters from Germany’s 2014 World Cup winning XI (vs Argentina):',
      ar: 'حدد اللاعبين الثلاثة المخفيين من تشكيلة منتخب ألمانيا بطل العالم 2014 في البرازيل:'
    },
    matchTitle: {
      en: '2014 World Cup Final: Germany (4-2-3-1)',
      ar: 'نهائي كأس العالم 2014: ألمانيا (4-2-3-1)'
    },
    formation: '4-2-3-1',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Manuel Neuer', ar: 'مانويل نوير' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Philipp Lahm', ar: 'فيليب لام' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'Jérôme Boateng', ar: 'جيروم بواتينغ' }, isHidden: true, options: [{ en: 'Jérôme Boateng', ar: 'جيروم بواتينغ' }, { en: 'Per Mertesacker', ar: 'بير ميرتيساكر' }, { en: 'Shkodran Mustafi', ar: 'شكودران مصطفي' }] },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'Mats Hummels', ar: 'ماتس هوملز' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Benedikt Höwedes', ar: 'بينيديكت هوفيديس' }, isHidden: false },
      { id: 'p6', position: 'DM', x: 62, y: 55, name: { en: 'Bastian Schweinsteiger', ar: 'باستيان شفاينشتايغر' }, isHidden: false },
      { id: 'p7', position: 'DM', x: 38, y: 55, name: { en: 'Christoph Kramer', ar: 'كريستوف كرامر' }, isHidden: true, options: [{ en: 'Christoph Kramer', ar: 'كريستوف كرامر' }, { en: 'Sami Khedira', ar: 'سامي خضيرة' }, { en: 'Julian Draxler', ar: 'يوليان دراكسلر' }] },
      { id: 'p8', position: 'RW', x: 80, y: 35, name: { en: 'Thomas Müller', ar: 'توماس مولر' }, isHidden: false },
      { id: 'p9', position: 'AM', x: 50, y: 35, name: { en: 'Toni Kroos', ar: 'توني كروس' }, isHidden: true, options: [{ en: 'Toni Kroos', ar: 'توني كروس' }, { en: 'Mario Götze', ar: 'ماريو غوتزه' }, { en: 'Mesut Özil', ar: 'مسعود أوزيل' }] },
      { id: 'p10', position: 'LW', x: 20, y: 35, name: { en: 'Mesut Özil', ar: 'مسعود أوزيل' }, isHidden: false },
      { id: 'p11', position: 'ST', x: 50, y: 16, name: { en: 'Miroslav Klose', ar: 'ميروسلاف كلوزه' }, isHidden: false }
    ]
  },
  {
    id: 'hl_5',
    mode: 'historic_lineup',
    category: 'Champions League 2014',
    difficulty: 4,
    prompt: {
      en: 'Spot the 3 hidden starters in Real Madrid’s "La Décima" 2014 Lisbon Final XI (vs Atlético):',
      ar: 'اكتشف النجوم الثلاثة المخفيين في تشكيلة ريال مدريد المتوج بالعاشرة (لا ديسيما) 2014:'
    },
    matchTitle: {
      en: '2014 UCL Final: Real Madrid (4-3-3)',
      ar: 'نهائي العاشرة 2014: ريال مدريد (4-3-3)'
    },
    formation: '4-3-3',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Iker Casillas', ar: 'إيكر كاسياس' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Dani Carvajal', ar: 'داني كارفاخال' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'Raphaël Varane', ar: 'رافائيل فاران' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'Sergio Ramos', ar: 'سيرخيو راموس (صاحب 92:48)' }, isHidden: true, options: [{ en: 'Sergio Ramos', ar: 'سيرخيو راموس' }, { en: 'Pepe', ar: 'بيبي' }, { en: 'Nacho', ar: 'ناتشو' }] },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Fábio Coentrão', ar: 'فابيو كوينتراو' }, isHidden: true, options: [{ en: 'Fábio Coentrão', ar: 'فابيو كوينتراو' }, { en: 'Marcelo', ar: 'مارسيلو' }, { en: 'Álvaro Arbeloa', ar: 'ألفارو أربيلوا' }] },
      { id: 'p6', position: 'DM', x: 50, y: 56, name: { en: 'Sami Khedira', ar: 'سامي خضيرة' }, isHidden: true, options: [{ en: 'Sami Khedira', ar: 'سامي خضيرة' }, { en: 'Xabi Alonso', ar: 'تشابي ألونسو' }, { en: 'Casemiro', ar: 'كاسيميرو' }] },
      { id: 'p7', position: 'CM', x: 70, y: 46, name: { en: 'Luka Modrić', ar: 'لوكا مودريتش' }, isHidden: false },
      { id: 'p8', position: 'CM', x: 30, y: 46, name: { en: 'Ángel Di María', ar: 'أنخيل دي ماريا' }, isHidden: false },
      { id: 'p9', position: 'RW', x: 80, y: 22, name: { en: 'Gareth Bale', ar: 'غاريث بيل' }, isHidden: false },
      { id: 'p10', position: 'ST', x: 50, y: 16, name: { en: 'Karim Benzema', ar: 'كريم بنزيما' }, isHidden: false },
      { id: 'p11', position: 'LW', x: 20, y: 22, name: { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' }, isHidden: false }
    ]
  },
  {
    id: 'hl_6',
    mode: 'historic_lineup',
    category: 'World Cup 2006 Final',
    difficulty: 5,
    prompt: {
      en: 'Who are the hidden champions in Italy’s 2006 World Cup Final XI in Berlin (vs France)?',
      ar: 'من هم الأبطال المخفيون في تشكيلة إيطاليا المتوجة بكأس العالم في برلين 2006؟'
    },
    matchTitle: {
      en: '2006 World Cup Final: Italy (4-4-1-1)',
      ar: 'نهائي كأس العالم 2006: إيطاليا (4-4-1-1)'
    },
    formation: '4-4-1-1',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Gianluigi Buffon', ar: 'جانلويجي بوفون' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Gianluca Zambrotta', ar: 'جانلوكا زامبروتا' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'Fabio Cannavaro', ar: 'فابيو كانافارو' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'Marco Materazzi', ar: 'ماركو ماتيراتزي' }, isHidden: true, options: [{ en: 'Marco Materazzi', ar: 'ماركو ماتيراتزي' }, { en: 'Alessandro Nesta', ar: 'أليساندرو نيستا' }, { en: 'Andrea Barzagli', ar: 'أندريا بارزالي' }] },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Fabio Grosso', ar: 'فابيو غروسو' }, isHidden: true, options: [{ en: 'Fabio Grosso', ar: 'فابيو غروسو' }, { en: 'Massimo Oddo', ar: 'ماسيمو أودو' }, { en: 'Cristian Zaccardo', ar: 'كريستيان زاكاردو' }] },
      { id: 'p6', position: 'RM', x: 82, y: 50, name: { en: 'Mauro Camoranesi', ar: 'ماورو كامورانيزي' }, isHidden: false },
      { id: 'p7', position: 'CM', x: 62, y: 55, name: { en: 'Gennaro Gattuso', ar: 'جينارو غاتوزو' }, isHidden: false },
      { id: 'p8', position: 'CM', x: 38, y: 55, name: { en: 'Andrea Pirlo', ar: 'أندريا بيرلو' }, isHidden: false },
      { id: 'p9', position: 'LM', x: 18, y: 50, name: { en: 'Simone Perrotta', ar: 'سيموني بيروتا' }, isHidden: true, options: [{ en: 'Simone Perrotta', ar: 'سيموني بيروتا' }, { en: 'Daniele De Rossi', ar: 'دانييلي دي روسي' }, { en: 'Alessandro Del Piero', ar: 'أليساندرو ديل بييرو' }] },
      { id: 'p10', position: 'SS', x: 50, y: 32, name: { en: 'Francesco Totti', ar: 'فرانشيسكو توتي' }, isHidden: false },
      { id: 'p11', position: 'ST', x: 50, y: 15, name: { en: 'Luca Toni', ar: 'لوكا توني' }, isHidden: false }
    ]
  },
  {
    id: 'hl_7',
    mode: 'historic_lineup',
    category: 'AFCON 2019 Final',
    difficulty: 4,
    prompt: {
      en: 'Name the hidden Algerian heroes in the 2019 AFCON Final in Cairo (vs Senegal):',
      ar: 'حدد الأبطال المخفيين في تشكيلة منتخب الجزائر بطل كأس أمم إفريقيا في القاهرة 2019:'
    },
    matchTitle: {
      en: '2019 AFCON Final: Algeria (4-4-2)',
      ar: 'نهائي أمم إفريقيا 2019: الجزائر (4-4-2)'
    },
    formation: '4-4-2',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Raïs M\'Bolhi', ar: 'رايس مبولحي' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Mehdi Zeffane', ar: 'مهدي زفان' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'Aïssa Mandi', ar: 'عيسى ماندي' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'Djamel Benlamri', ar: 'جمال بلعمري' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Ramy Bensebaini', ar: 'رامي بن سبعيني' }, isHidden: true, options: [{ en: 'Ramy Bensebaini', ar: 'رامي بن سبعيني' }, { en: 'Faouzi Ghoulam', ar: 'فوزي غلام' }, { en: 'Youcef Atal', ar: 'يوسف عطال' }] },
      { id: 'p6', position: 'RM', x: 80, y: 48, name: { en: 'Riyad Mahrez', ar: 'رياض محرز' }, isHidden: false },
      { id: 'p7', position: 'CM', x: 62, y: 52, name: { en: 'Adlène Guedioura', ar: 'عدلان قديورة' }, isHidden: false },
      { id: 'p8', position: 'CM', x: 38, y: 52, name: { en: 'Ismaël Bennacer', ar: 'إسماعيل بن ناصر' }, isHidden: true, options: [{ en: 'Ismaël Bennacer', ar: 'إسماعيل بن ناصر' }, { en: 'Sofiane Feghouli', ar: 'سفيان فيغولي' }, { en: 'Hicham Boudaoui', ar: 'هشام بوداوي' }] },
      { id: 'p9', position: 'LM', x: 20, y: 48, name: { en: 'Youcef Belaïli', ar: 'يوسف بلايلي' }, isHidden: false },
      { id: 'p10', position: 'ST', x: 62, y: 20, name: { en: 'Sofiane Feghouli', ar: 'سفيان فيغولي' }, isHidden: false },
      { id: 'p11', position: 'ST', x: 38, y: 20, name: { en: 'Baghdad Bounedjah', ar: 'بغداد بونجاح' }, isHidden: true, options: [{ en: 'Baghdad Bounedjah', ar: 'بغداد بونجاح' }, { en: 'Islam Slimani', ar: 'إسلام سليماني' }, { en: 'Andy Delort', ar: 'أندي ديلور' }] }
    ]
  },
  {
    id: 'hl_8',
    mode: 'historic_lineup',
    category: 'World Cup 2018 Final',
    difficulty: 4,
    prompt: {
      en: 'Who are the hidden World Champions in France’s 2018 Moscow Final XI (vs Croatia)?',
      ar: 'من هم الأبطال المخفيون في تشكيلة فرنسا المتوجة بكأس العالم في موسكو 2018؟'
    },
    matchTitle: {
      en: '2018 World Cup Final: France (4-2-3-1)',
      ar: 'نهائي كأس العالم 2018: فرنسا (4-2-3-1)'
    },
    formation: '4-2-3-1',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Hugo Lloris', ar: 'هوغو لوريس' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Benjamin Pavard', ar: 'بنيامين بافارد' }, isHidden: true, options: [{ en: 'Benjamin Pavard', ar: 'بنيامين بافارد' }, { en: 'Djibril Sidibé', ar: 'جبريل سيديبي' }, { en: 'Lucas Hernandez', ar: 'لوكاس هيرنانديز' }] },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'Raphaël Varane', ar: 'رافائيل فاران' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'Samuel Umtiti', ar: 'صامويل أومتيتي' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Lucas Hernandez', ar: 'لوكاس هيرنانديز' }, isHidden: false },
      { id: 'p6', position: 'DM', x: 62, y: 55, name: { en: 'Paul Pogba', ar: 'بول بوغبا' }, isHidden: false },
      { id: 'p7', position: 'DM', x: 38, y: 55, name: { en: 'N\'Golo Kanté', ar: 'نغولو كانتي' }, isHidden: true, options: [{ en: 'N\'Golo Kanté', ar: 'نغولو كانتي' }, { en: 'Steven Nzonzi', ar: 'ستيفن نزونزي' }, { en: 'Corentin Tolisso', ar: 'كورينتين توليسو' }] },
      { id: 'p8', position: 'RW', x: 80, y: 35, name: { en: 'Kylian Mbappé', ar: 'كيليان مبابي' }, isHidden: false },
      { id: 'p9', position: 'AM', x: 50, y: 35, name: { en: 'Antoine Griezmann', ar: 'أنطوان غريزمان' }, isHidden: false },
      { id: 'p10', position: 'LW', x: 20, y: 35, name: { en: 'Blaise Matuidi', ar: 'بليز ماتويدي' }, isHidden: true, options: [{ en: 'Blaise Matuidi', ar: 'بليز ماتويدي' }, { en: 'Ousmane Dembélé', ar: 'عثمان ديمبيلي' }, { en: 'Thomas Lemar', ar: 'توماس ليمار' }] },
      { id: 'p11', position: 'ST', x: 50, y: 16, name: { en: 'Olivier Giroud', ar: 'أوليفييه جيرو' }, isHidden: false }
    ]
  },
  {
    id: 'hl_9',
    mode: 'historic_lineup',
    category: 'Champions League 2021',
    difficulty: 4,
    prompt: {
      en: 'Name the hidden starters in Tuchel’s Chelsea 2021 UCL Final XI (vs Man City):',
      ar: 'حدد النجوم المخفيين في تشكيلة تشيلسي الفائز بدوري أبطال أوروبا في بورتو 2021:'
    },
    matchTitle: {
      en: '2021 UCL Final: Chelsea (3-4-2-1)',
      ar: 'نهائي دوري أبطال أوروبا 2021: تشيلسي (3-4-2-1)'
    },
    formation: '3-4-2-1',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Édouard Mendy', ar: 'إدوارد ميندي' }, isHidden: false },
      { id: 'p2', position: 'CB', x: 74, y: 74, name: { en: 'César Azpilicueta', ar: 'سيزار أزبيليكويتا' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 50, y: 76, name: { en: 'Thiago Silva', ar: 'تياغو سيلفا' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 26, y: 74, name: { en: 'Antonio Rüdiger', ar: 'أنطونيو روديغر' }, isHidden: false },
      { id: 'p5', position: 'RWB', x: 88, y: 54, name: { en: 'Reece James', ar: 'رييس جيمس' }, isHidden: false },
      { id: 'p6', position: 'CM', x: 62, y: 55, name: { en: 'N\'Golo Kanté', ar: 'نغولو كانتي (رجل المباراة)' }, isHidden: true, options: [{ en: 'N\'Golo Kanté', ar: 'نغولو كانتي' }, { en: 'Mateo Kovačić', ar: 'ماتيو كوفاسيتش' }, { en: 'Billy Gilmour', ar: 'بيلي جيلمور' }] },
      { id: 'p7', position: 'CM', x: 38, y: 55, name: { en: 'Jorginho', ar: 'جورجينيو' }, isHidden: false },
      { id: 'p8', position: 'LWB', x: 12, y: 54, name: { en: 'Ben Chilwell', ar: 'بين تشيلويل' }, isHidden: false },
      { id: 'p9', position: 'AM', x: 68, y: 32, name: { en: 'Mason Mount', ar: 'ميسون ماونت' }, isHidden: false },
      { id: 'p10', position: 'AM', x: 32, y: 32, name: { en: 'Kai Havertz', ar: 'كاي هافيرتز (صاحب الهدف)' }, isHidden: true, options: [{ en: 'Kai Havertz', ar: 'كاي هافيرتز' }, { en: 'Christian Pulisic', ar: 'كريستيان بوليسيتش' }, { en: 'Hakim Ziyech', ar: 'حكيم زياش' }] },
      { id: 'p11', position: 'ST', x: 50, y: 16, name: { en: 'Timo Werner', ar: 'تيمو فيرنر' }, isHidden: true, options: [{ en: 'Timo Werner', ar: 'تيمو فيرنر' }, { en: 'Olivier Giroud', ar: 'أوليفييه جيرو' }, { en: 'Tammy Abraham', ar: 'تامي أبراهام' }] }
    ]
  },
  {
    id: 'hl_10',
    mode: 'historic_lineup',
    category: 'World Cup 2010 Final',
    difficulty: 4,
    prompt: {
      en: 'Who are the hidden world champions in Spain’s 2010 Final XI in Johannesburg (vs Netherlands)?',
      ar: 'من هم الأبطال المخفيون في تشكيلة إسبانيا المتوجة بمونديال 2010 في جنوب إفريقيا؟'
    },
    matchTitle: {
      en: '2010 World Cup Final: Spain (4-2-3-1)',
      ar: 'نهائي كأس العالم 2010: إسبانيا (4-2-3-1)'
    },
    formation: '4-2-3-1',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Iker Casillas', ar: 'إيكر كاسياس' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Sergio Ramos', ar: 'سيرخيو راموس' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'Gerard Piqué', ar: 'جيرارد بيكيه' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'Carles Puyol', ar: 'كارليس بويول' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Joan Capdevila', ar: 'خوان كابديفيلا' }, isHidden: true, options: [{ en: 'Joan Capdevila', ar: 'خوان كابديفيلا' }, { en: 'Álvaro Arbeloa', ar: 'ألفارو أربيلوا' }, { en: 'Carlos Marchena', ar: 'كارلوس مارتشينا' }] },
      { id: 'p6', position: 'DM', x: 62, y: 55, name: { en: 'Sergio Busquets', ar: 'سيرجيو بوسكيتس' }, isHidden: false },
      { id: 'p7', position: 'DM', x: 38, y: 55, name: { en: 'Xabi Alonso', ar: 'تشابي ألونسو' }, isHidden: true, options: [{ en: 'Xabi Alonso', ar: 'تشابي ألونسو' }, { en: 'Cesc Fàbregas', ar: 'سيسك فابريغاس' }, { en: 'David Silva', ar: 'دافيد سيلفا' }] },
      { id: 'p8', position: 'RW', x: 80, y: 35, name: { en: 'Pedro Rodríguez', ar: 'بيدرو رودريغيز' }, isHidden: false },
      { id: 'p9', position: 'AM', x: 50, y: 35, name: { en: 'Xavi Hernández', ar: 'تشافي هيرنانديز' }, isHidden: false },
      { id: 'p10', position: 'LW', x: 20, y: 35, name: { en: 'Andrés Iniesta', ar: 'أندريس إنييستا (صاحب هدف الحسم)' }, isHidden: true, options: [{ en: 'Andrés Iniesta', ar: 'أندريس إنييستا' }, { en: 'David Silva', ar: 'دافيد سيلفا' }, { en: 'Juan Mata', ar: 'خوان ماتا' }] },
      { id: 'p11', position: 'ST', x: 50, y: 16, name: { en: 'David Villa', ar: 'دافيد فيا' }, isHidden: false }
    ]
  },
  {
    id: 'hl_11',
    mode: 'historic_lineup',
    category: 'Champions League 2019',
    difficulty: 3,
    prompt: {
      en: 'Name the hidden Liverpool players in the 2019 Madrid Final XI (vs Tottenham):',
      ar: 'حدد لاعبي ليفربول المخفيين في نهائي مدريد 2019 لدوري أبطال أوروبا:'
    },
    matchTitle: {
      en: '2019 UCL Final: Liverpool (4-3-3)',
      ar: 'نهائي مدريد 2019: ليفربول (4-3-3)'
    },
    formation: '4-3-3',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Alisson Becker', ar: 'أليسون بيكر' }, isHidden: true, options: [{ en: 'Alisson Becker', ar: 'أليسون بيكر' }, { en: 'Simon Mignolet', ar: 'سيمون مينيوليه' }, { en: 'Caoimhín Kelleher', ar: 'كيلهير' }] },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Trent Alexander-Arnold', ar: 'ترنت ألكسندر-أرنولد' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'Joël Matip', ar: 'جويل ماتيب' }, isHidden: true, options: [{ en: 'Joël Matip', ar: 'جويل ماتيب' }, { en: 'Dejan Lovren', ar: 'ديان لوفرين' }, { en: 'Joe Gomez', ar: 'جو غوميز' }] },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'Virgil van Dijk', ar: 'فيرجيل فان دايك' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Andy Robertson', ar: 'أندي روبرتسون' }, isHidden: false },
      { id: 'p6', position: 'DM', x: 50, y: 55, name: { en: 'Fabinho', ar: 'فابينيو' }, isHidden: false },
      { id: 'p7', position: 'CM', x: 70, y: 44, name: { en: 'Jordan Henderson', ar: 'جوردان هندرسون' }, isHidden: false },
      { id: 'p8', position: 'CM', x: 30, y: 44, name: { en: 'Georginio Wijnaldum', ar: 'جورجينيو فاينالدوم' }, isHidden: true, options: [{ en: 'Georginio Wijnaldum', ar: 'جورجينيو فاينالدوم' }, { en: 'James Milner', ar: 'جيمس ميلنر' }, { en: 'Naby Keïta', ar: 'نابي كيتا' }] },
      { id: 'p9', position: 'RW', x: 80, y: 22, name: { en: 'Mohamed Salah', ar: 'محمد صلاح' }, isHidden: false },
      { id: 'p10', position: 'ST', x: 50, y: 16, name: { en: 'Roberto Firmino', ar: 'روبرتو فيرمينو' }, isHidden: false },
      { id: 'p11', position: 'LW', x: 20, y: 22, name: { en: 'Sadio Mané', ar: 'ساديو ماني' }, isHidden: false }
    ]
  },
  {
    id: 'hl_12',
    mode: 'historic_lineup',
    category: 'World Cup 2002 Final',
    difficulty: 4,
    prompt: {
      en: 'Name the hidden Brazilian Samba stars in the 2002 World Cup Final XI (vs Germany):',
      ar: 'حدد نجوم السامبا المخفيين في نهائي مونديال 2002 بكوريا واليابان (ضد ألمانيا):'
    },
    matchTitle: {
      en: '2002 World Cup Final: Brazil (3-4-1-2)',
      ar: 'نهائي كأس العالم 2002: البرازيل (3-4-1-2)'
    },
    formation: '3-4-1-2',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Marcos', ar: 'ماركوس' }, isHidden: false },
      { id: 'p2', position: 'CB', x: 74, y: 74, name: { en: 'Lúcio', ar: 'لوسيو' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 50, y: 76, name: { en: 'Edmílson', ar: 'إدميلسون' }, isHidden: true, options: [{ en: 'Edmílson', ar: 'إدميلسون' }, { en: 'Júnior Baiano', ar: 'جونيور بايانو' }, { en: 'Anderson Polga', ar: 'أندرسون بولغا' }] },
      { id: 'p4', position: 'CB', x: 26, y: 74, name: { en: 'Roque Júnior', ar: 'روكي جونيور' }, isHidden: false },
      { id: 'p5', position: 'RWB', x: 88, y: 52, name: { en: 'Cafu', ar: 'كافو' }, isHidden: false },
      { id: 'p6', position: 'CM', x: 62, y: 54, name: { en: 'Gilberto Silva', ar: 'جيلبرتو سيلفا' }, isHidden: false },
      { id: 'p7', position: 'CM', x: 38, y: 54, name: { en: 'Kléberson', ar: 'كليبرسون' }, isHidden: true, options: [{ en: 'Kléberson', ar: 'كليبرسون' }, { en: 'Juninho Paulista', ar: 'جونينهو باوليستا' }, { en: 'Vampeta', ar: 'فامبيتا' }] },
      { id: 'p8', position: 'LWB', x: 12, y: 52, name: { en: 'Roberto Carlos', ar: 'روبرتو كارلوس' }, isHidden: false },
      { id: 'p9', position: 'AM', x: 50, y: 34, name: { en: 'Ronaldinho', ar: 'رونالدينيو' }, isHidden: true, options: [{ en: 'Ronaldinho', ar: 'رونالدينيو' }, { en: 'Kaká', ar: 'كاكا' }, { en: 'Denílson', ar: 'دينيلسون' }] },
      { id: 'p10', position: 'ST', x: 65, y: 16, name: { en: 'Ronaldo Nazário', ar: 'رونالدو الظاهرة' }, isHidden: false },
      { id: 'p11', position: 'ST', x: 35, y: 16, name: { en: 'Rivaldo', ar: 'ريفالدو' }, isHidden: false }
    ]
  },
  {
    id: 'hl_13',
    mode: 'historic_lineup',
    category: 'Champions League 2022',
    difficulty: 3,
    prompt: {
      en: 'Who are the hidden champions in Real Madrid’s 2022 Paris Final XI (vs Liverpool)?',
      ar: 'من هم الأبطال المخفيون في تشكيلة ريال مدريد المتوج باللقب الـ14 في باريس 2022؟'
    },
    matchTitle: {
      en: '2022 UCL Final: Real Madrid (4-3-3)',
      ar: 'نهائي باريس 2022: ريال مدريد (4-3-3)'
    },
    formation: '4-3-3',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Thibaut Courtois', ar: 'تيبو كورتوا (رجل النهائي)' }, isHidden: true, options: [{ en: 'Thibaut Courtois', ar: 'تيبو كورتوا' }, { en: 'Andriy Lunin', ar: 'أندريه لونين' }, { en: 'Keylor Navas', ar: 'كيلور نافاس' }] },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Dani Carvajal', ar: 'داني كارفاخال' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'Éder Militão', ar: 'إيدير ميليتاو' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'David Alaba', ar: 'دافيد ألابا' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Ferland Mendy', ar: 'فيرلاند ميندي' }, isHidden: false },
      { id: 'p6', position: 'DM', x: 50, y: 55, name: { en: 'Casemiro', ar: 'كاسيميرو' }, isHidden: true, options: [{ en: 'Casemiro', ar: 'كاسيميرو' }, { en: 'Eduardo Camavinga', ar: 'إدواردو كامافينغا' }, { en: 'Federico Valverde', ar: 'فيديريكو فالفيردي' }] },
      { id: 'p7', position: 'CM', x: 70, y: 44, name: { en: 'Luka Modrić', ar: 'لوكا مودريتش' }, isHidden: false },
      { id: 'p8', position: 'CM', x: 30, y: 44, name: { en: 'Toni Kroos', ar: 'توني كروس' }, isHidden: false },
      { id: 'p9', position: 'RW', x: 80, y: 22, name: { en: 'Federico Valverde', ar: 'فيديريكو فالفيردي' }, isHidden: false },
      { id: 'p10', position: 'ST', x: 50, y: 16, name: { en: 'Karim Benzema', ar: 'كريم بنزيما' }, isHidden: false },
      { id: 'p11', position: 'LW', x: 20, y: 22, name: { en: 'Vinícius Júnior', ar: 'فينيسيوس جونيور (صاحب الهدف)' }, isHidden: true, options: [{ en: 'Vinícius Júnior', ar: 'فينيسيوس جونيور' }, { en: 'Rodrygo', ar: 'رودريغو' }, { en: 'Eden Hazard', ar: 'إيدين هازارد' }] }
    ]
  },
  {
    id: 'hl_14',
    mode: 'historic_lineup',
    category: 'Champions League 2012',
    difficulty: 4,
    prompt: {
      en: 'Identify the missing heroes of Chelsea’s miraculous 2012 Munich Final XI (vs Bayern):',
      ar: 'حدد الأبطال المفقودين في ملحمة تشيلسي التاريخية بميونيخ 2012 (ضد البايرن):'
    },
    matchTitle: {
      en: '2012 UCL Final: Chelsea (4-2-3-1)',
      ar: 'نهائي ميونيخ 2012: تشيلسي (4-2-3-1)'
    },
    formation: '4-2-3-1',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Petr Čech', ar: 'بيتر تشيك' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'José Bosingwa', ar: 'جوزيه بوسينغوا' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'David Luiz', ar: 'دافيد لويز' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'Gary Cahill', ar: 'غاري كاهيل' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Ashley Cole', ar: 'أشلي كول' }, isHidden: false },
      { id: 'p6', position: 'DM', x: 62, y: 55, name: { en: 'John Obi Mikel', ar: 'جون أوبي ميكيل' }, isHidden: true, options: [{ en: 'John Obi Mikel', ar: 'جون أوبي ميكيل' }, { en: 'Michael Essien', ar: 'مايكل إيسيان' }, { en: 'Oriol Romeu', ar: 'أوريول روميو' }] },
      { id: 'p7', position: 'DM', x: 38, y: 55, name: { en: 'Frank Lampard', ar: 'فرانك لامبارد' }, isHidden: false },
      { id: 'p8', position: 'RW', x: 80, y: 35, name: { en: 'Salomon Kalou', ar: 'سالمون كالو' }, isHidden: false },
      { id: 'p9', position: 'AM', x: 50, y: 35, name: { en: 'Juan Mata', ar: 'خوان ماتا' }, isHidden: false },
      { id: 'p10', position: 'LW', x: 20, y: 35, name: { en: 'Ryan Bertrand', ar: 'ريان بيرتراند' }, isHidden: true, options: [{ en: 'Ryan Bertrand', ar: 'ريان بيرتراند' }, { en: 'Florent Malouda', ar: 'فلوران مالودا' }, { en: 'Daniel Sturridge', ar: 'دانييل ستوريدج' }] },
      { id: 'p11', position: 'ST', x: 50, y: 16, name: { en: 'Didier Drogba', ar: 'ديدييه دروغبا (صاحب رأسية التعادل)' }, isHidden: true, options: [{ en: 'Didier Drogba', ar: 'ديدييه دروغبا' }, { en: 'Fernando Torres', ar: 'فيرناندو توريس' }, { en: 'Nicolas Anelka', ar: 'نيكولا أنيلكا' }] }
    ]
  },
  {
    id: 'hl_15',
    mode: 'historic_lineup',
    category: 'CAF Champions League 2020',
    difficulty: 4,
    prompt: {
      en: 'Name the hidden players in Al Ahly’s "Final of the Century" XI in Cairo 2020 (vs Zamalek):',
      ar: 'حدد النجوم المخفيين في تشكيلة الأهلي المصري بنهائي القرن 2020 (القاضية ممكن):'
    },
    matchTitle: {
      en: '2020 CAF CL Final: Al Ahly (4-2-3-1)',
      ar: 'نهائي القرن 2020: الأهلي المصري (4-2-3-1)'
    },
    formation: '4-2-3-1',
    lineup: [
      { id: 'p1', position: 'GK', x: 50, y: 88, name: { en: 'Mohamed El Shenawy', ar: 'محمد الشناوي' }, isHidden: false },
      { id: 'p2', position: 'RB', x: 85, y: 70, name: { en: 'Mohamed Hany', ar: 'محمد هاني' }, isHidden: false },
      { id: 'p3', position: 'CB', x: 62, y: 74, name: { en: 'Yasser Ibrahim', ar: 'ياسر إبراهيم' }, isHidden: false },
      { id: 'p4', position: 'CB', x: 38, y: 74, name: { en: 'Ayman Ashraf', ar: 'أيمن أشرف' }, isHidden: false },
      { id: 'p5', position: 'LB', x: 15, y: 70, name: { en: 'Ali Maâloul', ar: 'علي معلول' }, isHidden: true, options: [{ en: 'Ali Maâloul', ar: 'علي معلول' }, { en: 'Mahmoud Wahid', ar: 'محمود وحيد' }, { en: 'Ahmed Fathi', ar: 'أحمد فتحي' }] },
      { id: 'p6', position: 'DM', x: 62, y: 55, name: { en: 'Amr El Solia', ar: 'عمرو السولية' }, isHidden: false },
      { id: 'p7', position: 'DM', x: 38, y: 55, name: { en: 'Hamdy Fathy', ar: 'حمدي فتحي' }, isHidden: true, options: [{ en: 'Hamdy Fathy', ar: 'حمدي فتحي' }, { en: 'Aliou Dieng', ar: 'أليو ديانغ' }, { en: 'Akram Tawfik', ar: 'أكرم توفيق' }] },
      { id: 'p8', position: 'RW', x: 80, y: 35, name: { en: 'Hussein El Shahat', ar: 'حسين الشحات' }, isHidden: false },
      { id: 'p9', position: 'AM', x: 50, y: 35, name: { en: 'Mohamed Magdy Afsha', ar: 'محمد مجدي أفشة (القاضية)' }, isHidden: true, options: [{ en: 'Mohamed Magdy Afsha', ar: 'محمد مجدي أفشة' }, { en: 'Walid Soliman', ar: 'وليد سليمان' }, { en: 'Saleh Gomaa', ar: 'صالح جمعة' }] },
      { id: 'p10', position: 'LW', x: 20, y: 35, name: { en: 'Junior Ajayi', ar: 'جونيور أجايي' }, isHidden: false },
      { id: 'p11', position: 'ST', x: 50, y: 16, name: { en: 'Marwan Mohsen', ar: 'مروان محسن' }, isHidden: false }
    ]
  }
];

