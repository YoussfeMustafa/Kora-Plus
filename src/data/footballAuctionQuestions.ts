import { FootballAuctionQuestion } from '../types/game';

export const footballAuctionQuestions: FootballAuctionQuestion[] = [
  {
    id: 'fa_1',
    mode: 'football_auction',
    category: 'Premier League',
    difficulty: 4,
    prompt: {
      en: 'Name players in the Premier League 100+ Goals Club (name as many as you can!):',
      ar: 'اذكر لاعبين سجلوا 100 هدف أو أكثر في تاريخ الدوري الإنجليزي الممتاز:'
    },
    timeLimitSeconds: 45,
    targetCount: 8,
    validAnswers: [
      { name: { en: 'Alan Shearer', ar: 'آلان شيرار' }, aliases: ['Shearer', 'شيرار', 'الان شيرار'] },
      { name: { en: 'Harry Kane', ar: 'هاري كين' }, aliases: ['Kane', 'كين', 'هاري كين'] },
      { name: { en: 'Wayne Rooney', ar: 'واين روني' }, aliases: ['Rooney', 'روني', 'واين روني'] },
      { name: { en: 'Andy Cole', ar: 'أندي كول' }, aliases: ['Cole', 'كول', 'اندي كول'] },
      { name: { en: 'Sergio Agüero', ar: 'سيرخيو أغويرو' }, aliases: ['Aguero', 'Kun Aguero', 'اغويرو', 'سيرجيو اغويرو'] },
      { name: { en: 'Frank Lampard', ar: 'فرانك لامبارد' }, aliases: ['Lampard', 'لامبارد'] },
      { name: { en: 'Thierry Henry', ar: 'تييري هنري' }, aliases: ['Henry', 'هنري', 'تيري هنري'] },
      { name: { en: 'Robbie Fowler', ar: 'روبي فاولر' }, aliases: ['Fowler', 'فاولر'] },
      { name: { en: 'Jermain Defoe', ar: 'جيرمين ديفو' }, aliases: ['Defoe', 'ديفو'] },
      { name: { en: 'Mohamed Salah', ar: 'محمد صلاح' }, aliases: ['Salah', 'صلاح', 'مو صلاح'] },
      { name: { en: 'Michael Owen', ar: 'مايكل أوين' }, aliases: ['Owen', 'اوين'] },
      { name: { en: 'Robin van Persie', ar: 'روبين فان بيرسي' }, aliases: ['Van Persie', 'RVP', 'فان بيرسي'] },
      { name: { en: 'Jamie Vardy', ar: 'جيمي فاردي' }, aliases: ['Vardy', 'فاردي'] },
      { name: { en: 'Son Heung-min', ar: 'سون هيونغ مين' }, aliases: ['Son', 'سون'] },
      { name: { en: 'Raheem Sterling', ar: 'رحيم ستيرلينغ' }, aliases: ['Sterling', 'ستيرلينغ', 'رحيم'] },
      { name: { en: 'Didier Drogba', ar: 'ديدييه دروغبا' }, aliases: ['Drogba', 'دروغبا'] },
      { name: { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' }, aliases: ['Ronaldo', 'رونالدو'] },
      { name: { en: 'Sadio Mané', ar: 'ساديو ماني' }, aliases: ['Mane', 'ماني'] },
      { name: { en: 'Romelu Lukaku', ar: 'روميلو لوكاكو' }, aliases: ['Lukaku', 'لوكاكو'] },
      { name: { en: 'Nicolas Anelka', ar: 'نيكولا أنيلكا' }, aliases: ['Anelka', 'انيلكا'] }
    ]
  },
  {
    id: 'fa_2',
    mode: 'football_auction',
    category: 'Ballon d\'Or',
    difficulty: 3,
    prompt: {
      en: 'Name players who have won the prestigious Ballon d’Or award:',
      ar: 'اذكر لاعبين تُوِّجوا بجائزة الكرة الذهبية (Ballon d’Or) عبر التاريخ:'
    },
    timeLimitSeconds: 45,
    targetCount: 6,
    validAnswers: [
      { name: { en: 'Lionel Messi', ar: 'ليونيل ميسي' }, aliases: ['Messi', 'ميسي'] },
      { name: { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' }, aliases: ['Ronaldo', 'CR7', 'رونالدو'] },
      { name: { en: 'Johan Cruyff', ar: 'يوهان كرويف' }, aliases: ['Cruyff', 'كرويف'] },
      { name: { en: 'Michel Platini', ar: 'ميشيل بلاتيني' }, aliases: ['Platini', 'بلاتيني'] },
      { name: { en: 'Marco van Basten', ar: 'ماركو فان باستن' }, aliases: ['Van Basten', 'فان باستن'] },
      { name: { en: 'Franz Beckenbauer', ar: 'فرانز بيكنباور' }, aliases: ['Beckenbauer', 'بيكنباور'] },
      { name: { en: 'Ronaldo Nazário', ar: 'رونالدو البرازيلي (الظاهرة)' }, aliases: ['R9', 'Ronaldo Nazario', 'الظاهرة', 'رونالدو داليما'] },
      { name: { en: 'Zinedine Zidane', ar: 'زين الدين زيدان' }, aliases: ['Zidane', 'Zizou', 'زيدان', 'زيزو'] },
      { name: { en: 'Ronaldinho', ar: 'رونالدينيو' }, aliases: ['Ronaldinho Gaucho', 'رونالدينيو'] },
      { name: { en: 'Kaká', ar: 'كاكا' }, aliases: ['Kaka', 'كاكا'] },
      { name: { en: 'Luka Modrić', ar: 'لوكا مودريتش' }, aliases: ['Modric', 'مودريتش'] },
      { name: { en: 'Karim Benzema', ar: 'كريم بنزيما' }, aliases: ['Benzema', 'بنزيما'] },
      { name: { en: 'George Weah', ar: 'جورج وياه' }, aliases: ['Weah', 'وياه'] },
      { name: { en: 'Rivaldo', ar: 'ريفالدو' }, aliases: ['ريفالدو'] },
      { name: { en: 'Pavel Nedvěd', ar: 'بافل نيدفيد' }, aliases: ['Nedved', 'نيدفيد'] },
      { name: { en: 'Andriy Shevchenko', ar: 'أندريه شيفشينكو' }, aliases: ['Shevchenko', 'شيفشينكو'] },
      { name: { en: 'Fabio Cannavaro', ar: 'فابيو كانافارو' }, aliases: ['Cannavaro', 'كانافارو'] },
      { name: { en: 'Rodri', ar: 'رودري' }, aliases: ['Rodrigo Hernandez', 'رودري'] }
    ]
  },
  {
    id: 'fa_3',
    mode: 'football_auction',
    category: 'Champions League',
    difficulty: 3,
    prompt: {
      en: 'Name clubs that have won the UEFA Champions League / European Cup:',
      ar: 'اذكر أندية تُوِّجت بلقب دوري أبطال أوروبا (الكأس ذات الأذنين):'
    },
    timeLimitSeconds: 40,
    targetCount: 7,
    validAnswers: [
      { name: { en: 'Real Madrid', ar: 'ريال مدريد' }, aliases: ['Real', 'ريال'] },
      { name: { en: 'AC Milan', ar: 'إيه سي ميلان' }, aliases: ['Milan', 'ميلان'] },
      { name: { en: 'Bayern Munich', ar: 'بايرن ميونخ' }, aliases: ['Bayern', 'البايرن'] },
      { name: { en: 'Liverpool', ar: 'ليفربول' }, aliases: ['ليفربول'] },
      { name: { en: 'Barcelona', ar: 'برشلونة' }, aliases: ['Barca', 'البارسا'] },
      { name: { en: 'Ajax', ar: 'أياكس' }, aliases: ['اياكس'] },
      { name: { en: 'Inter Milan', ar: 'إنتر ميلان' }, aliases: ['Inter', 'انتر'] },
      { name: { en: 'Manchester United', ar: 'مانشستر يونايتد' }, aliases: ['Man Utd', 'يونايتد'] },
      { name: { en: 'Juventus', ar: 'يوفنتوس' }, aliases: ['Juve', 'اليوفي'] },
      { name: { en: 'Chelsea', ar: 'تشيلسي' }, aliases: ['تشيلسي'] },
      { name: { en: 'Porto', ar: 'بورتو' }, aliases: ['بورتو'] },
      { name: { en: 'Benfica', ar: 'بنفيكا' }, aliases: ['بنفيكا'] },
      { name: { en: 'Manchester City', ar: 'مانشستر سيتي' }, aliases: ['Man City', 'السيتي'] },
      { name: { en: 'Borussia Dortmund', ar: 'بوروسيا دورتموند' }, aliases: ['Dortmund', 'دورتموند'] },
      { name: { en: 'Marseille', ar: 'مارسيليا' }, aliases: ['مارسيليا'] },
      { name: { en: 'Nottingham Forest', ar: 'نوتنغهام فورست' }, aliases: ['نوتنغهام'] },
      { name: { en: 'Celtic', ar: 'سيلتيك' }, aliases: ['سلتيك'] },
      { name: { en: 'Aston Villa', ar: 'أستون فيلا' }, aliases: ['استون فيلا'] },
      { name: { en: 'Feyenoord', ar: 'فاينورد' }, aliases: ['فاينورد'] },
      { name: { en: 'PSV Eindhoven', ar: 'بي إس في آيندهوفن' }, aliases: ['ايندهوفن'] }
    ]
  },
  {
    id: 'fa_4',
    mode: 'football_auction',
    category: 'World Cup',
    difficulty: 2,
    prompt: {
      en: 'Name the 8 nations that have won the FIFA World Cup:',
      ar: 'اذكر المنتخبات الثمانية التي فازت بكأس العالم لكرة القدم عبر التاريخ:'
    },
    timeLimitSeconds: 35,
    targetCount: 6,
    validAnswers: [
      { name: { en: 'Brazil', ar: 'البرازيل' }, aliases: ['Brasil', 'البرازيل'] },
      { name: { en: 'Germany', ar: 'ألمانيا' }, aliases: ['Deutschland', 'المانيا'] },
      { name: { en: 'Italy', ar: 'إيطاليا' }, aliases: ['Italia', 'ايطاليا'] },
      { name: { en: 'Argentina', ar: 'الأرجنتين' }, aliases: ['الارجنتين'] },
      { name: { en: 'France', ar: 'فرنسا' }, aliases: ['فرنسا'] },
      { name: { en: 'Uruguay', ar: 'الأوروغواي' }, aliases: ['اوروغواي', 'الاورغواي'] },
      { name: { en: 'England', ar: 'إنجلترا' }, aliases: ['انجلترا'] },
      { name: { en: 'Spain', ar: 'إسبانيا' }, aliases: ['اسبانيا'] }
    ]
  },
  {
    id: 'fa_5',
    mode: 'football_auction',
    category: 'World Cup Goals',
    difficulty: 5,
    prompt: {
      en: 'Name players who have scored a goal in a FIFA World Cup Final:',
      ar: 'اذكر لاعبين سجلوا أهدافاً في المباراة النهائية لكأس العالم:'
    },
    timeLimitSeconds: 45,
    targetCount: 5,
    validAnswers: [
      { name: { en: 'Pelé', ar: 'بيليه' }, aliases: ['Pele', 'بيليه'] },
      { name: { en: 'Kylian Mbappé', ar: 'كيليان مبابي' }, aliases: ['Mbappe', 'مبابي'] },
      { name: { en: 'Lionel Messi', ar: 'ليونيل ميسي' }, aliases: ['Messi', 'ميسي'] },
      { name: { en: 'Zinedine Zidane', ar: 'زين الدين زيدان' }, aliases: ['Zidane', 'زيدان'] },
      { name: { en: 'Ronaldo Nazário', ar: 'رونالدو الظاهرة' }, aliases: ['Ronaldo', 'الظاهرة'] },
      { name: { en: 'Mario Götze', ar: 'ماريو غوتزه' }, aliases: ['Gotze', 'غوتزه'] },
      { name: { en: 'Andrés Iniesta', ar: 'أندريس إنييستا' }, aliases: ['Iniesta', 'انييستا'] },
      { name: { en: 'Ángel Di María', ar: 'أنخيل دي ماريا' }, aliases: ['Di Maria', 'دي ماريا'] },
      { name: { en: 'Paul Pogba', ar: 'بول بوغبا' }, aliases: ['Pogba', 'بوغبا'] },
      { name: { en: 'Antoine Griezmann', ar: 'أنطوان غريزمان' }, aliases: ['Griezmann', 'غريزمان'] },
      { name: { en: 'Mario Mandžukić', ar: 'ماريو ماندزوكيتش' }, aliases: ['Mandzukic', 'ماندزوكيتش'] },
      { name: { en: 'Marco Materazzi', ar: 'ماركو ماتيراتزي' }, aliases: ['Materazzi', 'ماتيراتزي'] },
      { name: { en: 'Gerd Müller', ar: 'غيرد مولر' }, aliases: ['Muller', 'مولر'] },
      { name: { en: 'Geoff Hurst', ar: 'جيف هيرست' }, aliases: ['Hurst', 'هيرست'] },
      { name: { en: 'Jorge Burruchaga', ar: 'خورخي بوروتشاجا' }, aliases: ['Burruchaga', 'بوروتشاجا'] },
      { name: { en: 'Paolo Rossi', ar: 'باولو روسي' }, aliases: ['Rossi', 'روسي'] }
    ]
  },
  {
    id: 'fa_6',
    mode: 'football_auction',
    category: 'African & Arab Glory',
    difficulty: 3,
    prompt: {
      en: 'Name Arab or African clubs that have won the CAF Champions League:',
      ar: 'اذكر أندية عربية أو إفريقية فازت بدوري أبطال إفريقيا (كأس إفريقيا للأندية البطلة):'
    },
    timeLimitSeconds: 40,
    targetCount: 6,
    validAnswers: [
      { name: { en: 'Al Ahly', ar: 'الأهلي المصري' }, aliases: ['Ahly', 'الاهلي'] },
      { name: { en: 'Zamalek', ar: 'الزمالك' }, aliases: ['Zamalek SC', 'الزمالك'] },
      { name: { en: 'Wydad Casablanca', ar: 'الوداد الرياضي' }, aliases: ['Wydad', 'WAC', 'الوداد'] },
      { name: { en: 'Raja Casablanca', ar: 'الرجاء الرياضي' }, aliases: ['Raja', 'RCA', 'الرجاء'] },
      { name: { en: 'Espérance de Tunis', ar: 'الترجي التونسي' }, aliases: ['Esperance', 'EST', 'الترجي'] },
      { name: { en: 'TP Mazembe', ar: 'تي بي مازيمبي' }, aliases: ['Mazembe', 'مازيمبي'] },
      { name: { en: 'Étoile du Sahel', ar: 'النجم الساحلي' }, aliases: ['Etoile', 'النجم'] },
      { name: { en: 'ES Sétif', ar: 'وفاق سطيف' }, aliases: ['Setif', 'سطيف'] },
      { name: { en: 'JS Kabylie', ar: 'شبيبة القبائل' }, aliases: ['Kabylie', 'القبائل'] },
      { name: { en: 'Mamelodi Sundowns', ar: 'ماميلودي صنداونز' }, aliases: ['Sundowns', 'صنداونز'] },
      { name: { en: 'FAR Rabat', ar: 'الجيش الملكي' }, aliases: ['الجيش الملكي'] },
      { name: { en: 'MC Alger', ar: 'مولودية الجزائر' }, aliases: ['مولودية الجزائر'] },
      { name: { en: 'Ismaily', ar: 'الإسماعيلي' }, aliases: ['الاسماعيلي'] }
    ]
  },
  {
    id: 'fa_7',
    mode: 'football_auction',
    category: 'Managers',
    difficulty: 4,
    prompt: {
      en: 'Name managers who have won the UEFA Champions League / European Cup:',
      ar: 'اذكر مدربين توجوا بلقب دوري أبطال أوروبا عبر التاريخ:'
    },
    timeLimitSeconds: 40,
    targetCount: 5,
    validAnswers: [
      { name: { en: 'Carlo Ancelotti', ar: 'كارلو أنشيلوتي' }, aliases: ['Ancelotti', 'انشيلوتي'] },
      { name: { en: 'Pep Guardiola', ar: 'بيب غوارديولا' }, aliases: ['Guardiola', 'غوارديولا', 'جوارديولا'] },
      { name: { en: 'Zinedine Zidane', ar: 'زين الدين زيدان' }, aliases: ['Zidane', 'زيدان'] },
      { name: { en: 'José Mourinho', ar: 'جوزيه مورينيو' }, aliases: ['Mourinho', 'مورينيو'] },
      { name: { en: 'Alex Ferguson', ar: 'أليكس فيرغسون' }, aliases: ['Ferguson', 'السير اليكس فيرغسون', 'فيرجسون'] },
      { name: { en: 'Jürgen Klopp', ar: 'يورغن كلوب' }, aliases: ['Klopp', 'كلوب'] },
      { name: { en: 'Hansi Flick', ar: 'هانزي فليك' }, aliases: ['Flick', 'فليك'] },
      { name: { en: 'Thomas Tuchel', ar: 'توماس توخيل' }, aliases: ['Tuchel', 'توخيل'] },
      { name: { en: 'Luis Enrique', ar: 'لويس إنريكي' }, aliases: ['Luis Enrique', 'انريكي'] },
      { name: { en: 'Jupp Heynckes', ar: 'يوب هاينكس' }, aliases: ['Heynckes', 'هاينكس'] },
      { name: { en: 'Vicente del Bosque', ar: 'فيسنتي ديل بوسكي' }, aliases: ['Del Bosque', 'ديل بوسكي'] },
      { name: { en: 'Rafael Benítez', ar: 'رافائيل بينيتيز' }, aliases: ['Benitez', 'بينيتيز'] },
      { name: { en: 'Ottmar Hitzfeld', ar: 'أوتمار هيتسفيلد' }, aliases: ['Hitzfeld', 'هيتسفيلد'] },
      { name: { en: 'Johan Cruyff', ar: 'يوهان كرويف' }, aliases: ['Cruyff', 'كرويف'] },
      { name: { en: 'Bob Paisley', ar: 'بوب بيزلي' }, aliases: ['Paisley', 'بيزلي'] }
    ]
  },
  {
    id: 'fa_8',
    mode: 'football_auction',
    category: 'African Footballer of Year',
    difficulty: 4,
    prompt: {
      en: 'Name players who won the African Footballer of the Year (CAF) award:',
      ar: 'اذكر لاعبين فازوا بجائزة أفضل لاعب إفريقي في العام (CAF):'
    },
    timeLimitSeconds: 40,
    targetCount: 5,
    validAnswers: [
      { name: { en: 'Mohamed Salah', ar: 'محمد صلاح' }, aliases: ['Salah', 'صلاح'] },
      { name: { en: 'Sadio Mané', ar: 'ساديو ماني' }, aliases: ['Mane', 'ماني'] },
      { name: { en: 'Riyad Mahrez', ar: 'رياض محرز' }, aliases: ['Mahrez', 'محرز'] },
      { name: { en: 'Samuel Eto\'o', ar: 'صامويل إيتو' }, aliases: ['Etoo', 'ايتو'] },
      { name: { en: 'Yaya Touré', ar: 'يايا توريه' }, aliases: ['Toure', 'توريه'] },
      { name: { en: 'Didier Drogba', ar: 'ديدييه دروغبا' }, aliases: ['Drogba', 'دروغبا'] },
      { name: { en: 'George Weah', ar: 'جورج وياه' }, aliases: ['Weah', 'وياه'] },
      { name: { en: 'Victor Osimhen', ar: 'فيكتور أوسيمين' }, aliases: ['Osimhen', 'اوسيمين'] },
      { name: { en: 'Pierre-Emerick Aubameyang', ar: 'بيير إيميريك أوباميانغ' }, aliases: ['Aubameyang', 'اوباميانغ'] },
      { name: { en: 'Nwankwo Kanu', ar: 'نوانكو كانو' }, aliases: ['Kanu', 'كانو'] },
      { name: { en: 'El Hadji Diouf', ar: 'الحاجي ضيوف' }, aliases: ['Diouf', 'الحاج ضيوف'] },
      { name: { en: 'Mustapha Hadji', ar: 'مصطفى حاجي' }, aliases: ['Hadji', 'مصطفى حجي'] },
      { name: { en: 'Abedi Pele', ar: 'عبيدي بيليه' }, aliases: ['Abedi Pele', 'عبيدي بيليه'] }
    ]
  },
  {
    id: 'fa_9',
    mode: 'football_auction',
    category: 'World Cup Historic',
    difficulty: 3,
    prompt: {
      en: 'Name African or Arab countries that have reached the World Cup Round of 16 or beyond:',
      ar: 'اذكر منتخبات عربية أو إفريقية تأهلت للأدوار الإقصائية (دور الـ16 وما بعده) في كأس العالم:'
    },
    timeLimitSeconds: 35,
    targetCount: 5,
    validAnswers: [
      { name: { en: 'Morocco', ar: 'المغرب' }, aliases: ['Maroc', 'المغرب'] },
      { name: { en: 'Cameroon', ar: 'الكاميرون' }, aliases: ['الكاميرون'] },
      { name: { en: 'Senegal', ar: 'السنغال' }, aliases: ['السنغال'] },
      { name: { en: 'Ghana', ar: 'غانا' }, aliases: ['غانا'] },
      { name: { en: 'Nigeria', ar: 'نيجيريا' }, aliases: ['نيجيريا'] },
      { name: { en: 'Algeria', ar: 'الجزائر' }, aliases: ['الجزائر'] },
      { name: { en: 'Saudi Arabia', ar: 'السعودية' }, aliases: ['السعودية', 'الأخضر'] }
    ]
  },
  {
    id: 'fa_10',
    mode: 'football_auction',
    category: 'Spanish La Liga',
    difficulty: 3,
    prompt: {
      en: 'Name clubs that have won the Spanish La Liga title in history:',
      ar: 'اذكر أندية تُوِّجت بلقب الدوري الإسباني (لا ليغا) عبر تاريخه:'
    },
    timeLimitSeconds: 35,
    targetCount: 5,
    validAnswers: [
      { name: { en: 'Real Madrid', ar: 'ريال مدريد' }, aliases: ['ريال مدريد'] },
      { name: { en: 'Barcelona', ar: 'برشلونة' }, aliases: ['برشلونة'] },
      { name: { en: 'Atlético Madrid', ar: 'أتلتيكو مدريد' }, aliases: ['اتلتيكو مدريد'] },
      { name: { en: 'Athletic Bilbao', ar: 'أتلتيك بيلباو' }, aliases: ['بيلباو'] },
      { name: { en: 'Valencia', ar: 'فالنسيا' }, aliases: ['فالنسيا'] },
      { name: { en: 'Real Sociedad', ar: 'ريال سوسيداد' }, aliases: ['سوسيداد'] },
      { name: { en: 'Deportivo La Coruña', ar: 'ديبورتيفو لاكورونيا' }, aliases: ['ديبورتيفو'] },
      { name: { en: 'Sevilla', ar: 'إشبيلية' }, aliases: ['اشبيلية'] },
      { name: { en: 'Real Betis', ar: 'ريال بيتيس' }, aliases: ['بيتيس'] }
    ]
  },
  {
    id: 'fa_11',
    mode: 'football_auction',
    category: 'Italian Serie A',
    difficulty: 3,
    prompt: {
      en: 'Name clubs that have won the Italian Serie A (Scudetto):',
      ar: 'اذكر أندية فازت بلقب الدوري الإيطالي (السكوديتو):'
    },
    timeLimitSeconds: 35,
    targetCount: 5,
    validAnswers: [
      { name: { en: 'Juventus', ar: 'يوفنتوس' }, aliases: ['يوفنتوس'] },
      { name: { en: 'Inter Milan', ar: 'إنتر ميلان' }, aliases: ['انتر'] },
      { name: { en: 'AC Milan', ar: 'إيه سي ميلان' }, aliases: ['ميلان'] },
      { name: { en: 'Napoli', ar: 'نابولي' }, aliases: ['نابولي'] },
      { name: { en: 'AS Roma', ar: 'روما' }, aliases: ['روما'] },
      { name: { en: 'Lazio', ar: 'لاتسيو' }, aliases: ['لاتسيو'] },
      { name: { en: 'Fiorentina', ar: 'فيورنتينا' }, aliases: ['فيورنتينا'] },
      { name: { en: 'Torino', ar: 'تورينو' }, aliases: ['تورينو'] },
      { name: { en: 'Bologna', ar: 'بولونيا' }, aliases: ['بولونيا'] },
      { name: { en: 'Sampdoria', ar: 'سامبدوريا' }, aliases: ['سامبدوريا'] },
      { name: { en: 'Cagliari', ar: 'كالياري' }, aliases: ['كالياري'] },
      { name: { en: 'Hellas Verona', ar: 'هيلاس فيرونا' }, aliases: ['فيرونا'] },
      { name: { en: 'Genoa', ar: 'جنوى' }, aliases: ['جنوى'] }
    ]
  },
  {
    id: 'fa_12',
    mode: 'football_auction',
    category: 'Golden Boot',
    difficulty: 4,
    prompt: {
      en: 'Name winners of the FIFA World Cup Golden Boot (Top Scorer):',
      ar: 'اذكر هدافي كأس العالم الفائزين بالحذاء الذهبي للبطولة:'
    },
    timeLimitSeconds: 40,
    targetCount: 5,
    validAnswers: [
      { name: { en: 'Kylian Mbappé', ar: 'كيليان مبابي' }, aliases: ['Mbappe', 'مبابي'] },
      { name: { en: 'Harry Kane', ar: 'هاري كين' }, aliases: ['Kane', 'كين'] },
      { name: { en: 'James Rodríguez', ar: 'خاميس رودريغيز' }, aliases: ['James', 'خاميس'] },
      { name: { en: 'Thomas Müller', ar: 'توماس مولر' }, aliases: ['Muller', 'توماس مولر'] },
      { name: { en: 'Miroslav Klose', ar: 'ميروسلاف كلوزه' }, aliases: ['Klose', 'كلوزه'] },
      { name: { en: 'Ronaldo Nazário', ar: 'رونالدو الظاهرة' }, aliases: ['Ronaldo', 'الظاهرة'] },
      { name: { en: 'Davor Šuker', ar: 'دافور شوكر' }, aliases: ['Suker', 'شوكر'] },
      { name: { en: 'Gary Lineker', ar: 'غاري لينيكر' }, aliases: ['Lineker', 'لينيكر'] },
      { name: { en: 'Paolo Rossi', ar: 'باولو روسي' }, aliases: ['Rossi', 'روسي'] },
      { name: { en: 'Mario Kempes', ar: 'ماريو كيمبس' }, aliases: ['Kempes', 'كيمبس'] },
      { name: { en: 'Gerd Müller', ar: 'غيرد مولر' }, aliases: ['Gerd Muller', 'غيرد مولر'] },
      { name: { en: 'Eusébio', ar: 'أوزيبيو' }, aliases: ['Eusebio', 'اوزيبيو'] },
      { name: { en: 'Just Fontaine', ar: 'جوست فونتين' }, aliases: ['Fontaine', 'فونتين'] }
    ]
  },
  {
    id: 'fa_13',
    mode: 'football_auction',
    category: 'Champions League Legends',
    difficulty: 4,
    prompt: {
      en: 'Name players with 70+ UEFA Champions League goals:',
      ar: 'اذكر لاعبين سجلوا 70 هدفاً أو أكثر في تاريخ دوري أبطال أوروبا:'
    },
    timeLimitSeconds: 35,
    targetCount: 4,
    validAnswers: [
      { name: { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' }, aliases: ['Ronaldo', 'رونالدو'] },
      { name: { en: 'Lionel Messi', ar: 'ليونيل ميسي' }, aliases: ['Messi', 'ميسي'] },
      { name: { en: 'Robert Lewandowski', ar: 'روبرت ليفاندوفسكي' }, aliases: ['Lewandowski', 'ليفاندوفسكي'] },
      { name: { en: 'Karim Benzema', ar: 'كريم بنزيما' }, aliases: ['Benzema', 'بنزيما'] },
      { name: { en: 'Raúl González', ar: 'راؤول غونزاليس' }, aliases: ['Raul', 'راؤول'] },
      { name: { en: 'Ruud van Nistelrooy', ar: 'رود فان نيستلروي' }, aliases: ['Van Nistelrooy', 'فان نيستلروي'] }
    ]
  },
  {
    id: 'fa_14',
    mode: 'football_auction',
    category: 'Continental Treble',
    difficulty: 4,
    prompt: {
      en: 'Name European clubs that have completed the European Treble (League + Cup + UCL):',
      ar: 'اذكر الأندية الأوروبية التي حققت الثلاثية التاريخية (الدوري والكأس ودوري الأبطال):'
    },
    timeLimitSeconds: 35,
    targetCount: 4,
    validAnswers: [
      { name: { en: 'Celtic', ar: 'سيلتيك (1967)' }, aliases: ['Celtic', 'سيلتيك'] },
      { name: { en: 'Ajax', ar: 'أياكس (1972)' }, aliases: ['Ajax', 'اياكس'] },
      { name: { en: 'PSV Eindhoven', ar: 'بي إس في آيندهوفن (1988)' }, aliases: ['PSV', 'ايندهوفن'] },
      { name: { en: 'Manchester United', ar: 'مانشستر يونايتد (1999)' }, aliases: ['Man Utd', 'مانشستر يونايتد'] },
      { name: { en: 'Barcelona', ar: 'برشلونة (2009, 2015)' }, aliases: ['Barca', 'برشلونة'] },
      { name: { en: 'Inter Milan', ar: 'إنتر ميلان (2010)' }, aliases: ['Inter', 'انتر ميلان'] },
      { name: { en: 'Bayern Munich', ar: 'بايرن ميونخ (2013, 2020)' }, aliases: ['Bayern', 'بايرن ميونخ'] },
      { name: { en: 'Manchester City', ar: 'مانشستر سيتي (2023)' }, aliases: ['Man City', 'مانشستر سيتي'] }
    ]
  },
  {
    id: 'fa_15',
    mode: 'football_auction',
    category: 'Egyptian Premier League',
    difficulty: 4,
    prompt: {
      en: 'Name clubs that have won the Egyptian Premier League title in history:',
      ar: 'اذكر أندية فازت بلقب الدوري المصري الممتاز عبر التاريخ:'
    },
    timeLimitSeconds: 30,
    targetCount: 4,
    validAnswers: [
      { name: { en: 'Al Ahly', ar: 'الأهلي' }, aliases: ['Ahly', 'الاهلي'] },
      { name: { en: 'Zamalek', ar: 'الزمالك' }, aliases: ['الزمالك'] },
      { name: { en: 'Ismaily', ar: 'الإسماعيلي' }, aliases: ['الاسماعيلي'] },
      { name: { en: 'Tersana', ar: 'الترسانة' }, aliases: ['الترسانة'] },
      { name: { en: 'Ghazl El Mahalla', ar: 'غزل المحلة' }, aliases: ['المحلة'] },
      { name: { en: 'Olympic Club', ar: 'الأولمبي السكندري' }, aliases: ['الاولمبي'] },
      { name: { en: 'Al Mokawloon', ar: 'المقاولون العرب' }, aliases: ['المقاولون'] }
    ]
  }
];

