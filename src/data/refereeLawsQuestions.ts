import { RefereeLawsQuestion } from '../types/game';

export const refereeLawsQuestions: RefereeLawsQuestion[] = [
  {
    id: 'rl_1',
    mode: 'referee_laws',
    category: 'IFAB Law 13 - Free Kicks',
    difficulty: 4,
    prompt: {
      en: 'A player takes a direct free kick just outside their penalty box and accidentally kicks it directly into their own goal without anyone else touching it. What is the referee’s decision?',
      ar: 'سدد مدافع ركلة حرة مباشرة خارج منطقة جزائه وأرسلها بالخطأ مباشرة في مرماه دون أن يلمسها أحد. ما هو قرار الحكم الصحيح؟'
    },
    answer: { en: 'Corner Kick for the opposing team', ar: 'ركلة ركنية للفريق المنافس' },
    options: [
      { en: 'Corner Kick for the opposing team', ar: 'ركلة ركنية للفريق المنافس' },
      { en: 'Own Goal awarded (Goal counts)', ar: 'احتساب هدف عكسي لصالح الخصم' },
      { en: 'Retake the free kick', ar: 'إعادة تنفيذ الركلة الحرة' },
      { en: 'Indirect Free Kick from the penalty spot', ar: 'ركلة حرة غير مباشرة من علامة الجزاء' }
    ],
    ifabLaw: 'IFAB Law 13 (Free Kicks)',
    ruleExplanation: {
      en: 'Under IFAB Law 13, you cannot score directly against yourself from any free kick. If a free kick is kicked directly into one’s own goal, a corner kick is awarded to the opponents.',
      ar: 'تنص المادة 13 من قوانين اللعبة على أنه لا يمكن تسجيل هدف في المرمى الذاتي مباشرة من أي ركلة حرة، ويُستأنف اللعب بركلة ركنية للفريق الخصم.'
    }
  },
  {
    id: 'rl_2',
    mode: 'referee_laws',
    category: 'IFAB Law 15 - The Throw-in',
    difficulty: 3,
    prompt: {
      en: 'A player takes a legal throw-in and throws it straight into the opponent’s goal without touching any player. What is the decision?',
      ar: 'نفذ لاعب رمية تماس قانونية ودخلت الكرة مباشرة شباك مرمى الخصم دون أن تلمس أي لاعب. ما هو القرار؟'
    },
    answer: { en: 'Goal Kick for the defending team', ar: 'ركلة مرمى للفريق المدافع' },
    options: [
      { en: 'Goal Kick for the defending team', ar: 'ركلة مرمى للفريق المدافع' },
      { en: 'Goal is valid', ar: 'احتساب الهدف صحيحاً' },
      { en: 'Retake the throw-in', ar: 'إعادة رمية التماس' },
      { en: 'Corner Kick', ar: 'ركلة ركنية' }
    ],
    ifabLaw: 'IFAB Law 15 (The Throw-in)',
    ruleExplanation: {
      en: 'A goal cannot be scored directly from a throw-in. If the ball enters the opponent’s goal directly, a goal kick is awarded.',
      ar: 'لا يمكن تسجيل هدف مباشرة من رمية التماس؛ وإذا دخلت الكرة مرمى الخصم مباشرة تُمنح ركلة مرمى.'
    }
  },
  {
    id: 'rl_3',
    mode: 'referee_laws',
    category: 'IFAB Law 11 - Offside',
    difficulty: 3,
    prompt: {
      en: 'Can a player be called for offside if they receive the ball directly from a throw-in, goal kick, or corner kick?',
      ar: 'هل يمكن احتساب تسلل على لاعب يستلم الكرة مباشرة من رمية تماس أو ركلة مرمى أو ركلة ركنية؟'
    },
    answer: { en: 'No, there is no offside offense from these three restarts', ar: 'لا، لا يوجد تسلل مطلقاً من هذه الحالات الثلاث' },
    options: [
      { en: 'No, there is no offside offense from these three restarts', ar: 'لا، لا يوجد تسلل مطلقاً من هذه الحالات الثلاث' },
      { en: 'Yes, offside applies to all restarts', ar: 'نعم، التسلل ينطبق على جميع استئنافات اللعب' },
      { en: 'Only from a throw-in is it offside', ar: 'التسلل يحتسب فقط في رمية التماس' },
      { en: 'Only if the goalkeeper was out of position', ar: 'فقط إذا كان حارس المرمى متقدماً' }
    ],
    ifabLaw: 'IFAB Law 11 (Offside)',
    ruleExplanation: {
      en: 'Law 11 clearly states there is no offside offense if a player receives the ball directly from a corner kick, goal kick, or throw-in.',
      ar: 'تنص المادة 11 بوضوح على عدم وجود تسلل عند استلام الكرة مباشرة من ركلة ركنية أو ركلة مرمى أو رمية تماس.'
    }
  },
  {
    id: 'rl_4',
    mode: 'referee_laws',
    category: 'IFAB Law 14 - The Penalty Kick',
    difficulty: 4,
    prompt: {
      en: 'A penalty taker strikes the ball, it hits the post and bounces back directly to the taker (untouched by the keeper), who then puts it into the net. What is the referee’s call?',
      ar: 'سدد لاعب ركلة جزاء فارتطمت بالقائم وعادت إليه مباشرة دون أن يلمسها الحارس، فأسكنها الشباك. ما قرار الحكم؟'
    },
    answer: { en: 'Disallow goal; Indirect Free Kick for double-touch', ar: 'إلغاء الهدف؛ واحتساب ركلة حرة غير مباشرة للمدافعين (لمس الكرة مرتين)' },
    options: [
      { en: 'Disallow goal; Indirect Free Kick for double-touch', ar: 'إلغاء الهدف؛ واحتساب ركلة حرة غير مباشرة للمدافعين (لمس الكرة مرتين)' },
      { en: 'Goal stands', ar: 'احتساب الهدف صحيحاً' },
      { en: 'Retake the penalty', ar: 'إعادة تنفيذ ركلة الجزاء' },
      { en: 'Dropped ball', ar: 'إسقاط الكرة' }
    ],
    ifabLaw: 'IFAB Law 14 (The Penalty Kick)',
    ruleExplanation: {
      en: 'The kicker must not play the ball again until it has touched another player. Hitting the goal frame does not count as touching another player.',
      ar: 'لا يجوز للمسدد لمس الكرة مرة ثانية إلا بعد أن يلمسها لاعب آخر، وارتطامها بالقائم لا يعد لمساً من لاعب آخر.'
    }
  },
  {
    id: 'rl_5',
    mode: 'referee_laws',
    category: 'IFAB Law 14 - Illegal Feinting',
    difficulty: 4,
    prompt: {
      en: 'During a penalty kick, the kicker completely stops at the end of their run-up and feints to kick, making the goalkeeper dive before rolling it in. What must the referee do?',
      ar: 'أثناء تسديد ركلة الجزاء، توقف اللاعب تماماً في نهاية ركضه وقام بالتمويه غير القانوني لخداع الحارس ثم سددها في المرمى. ما هو الإجراء؟'
    },
    answer: { en: 'Yellow card to the kicker & Indirect Free Kick to defenders', ar: 'إنذار ببطاقة صفراء للمسدد وركلة حرة غير مباشرة للمدافعين' },
    options: [
      { en: 'Yellow card to the kicker & Indirect Free Kick to defenders', ar: 'إنذار ببطاقة صفراء للمسدد وركلة حرة غير مباشرة للمدافعين' },
      { en: 'Retake the penalty with a warning', ar: 'إعادة الركلة مع توجيه تحذير شفهي' },
      { en: 'Goal stands if the keeper touched it', ar: 'احتساب الهدف إذا لمسها الحارس' },
      { en: 'Red card for unsporting behavior', ar: 'طرد مباشر بالبطاقة الحمراء' }
    ],
    ifabLaw: 'IFAB Law 14 (Penalty Kick)',
    ruleExplanation: {
      en: 'Feinting to kick the ball once the kicker has completed the run-up is an offense. The kicker is cautioned (yellow card) and play restarts with an indirect free kick.',
      ar: 'التمويه بركل الكرة بعد اكتمال الركض يُعد مخالفة صريحة؛ يُنذر اللاعب ببطاقة صفراء ويُستأنف اللعب بركلة حرة غير مباشرة للمنافس.'
    }
  },
  {
    id: 'rl_6',
    mode: 'referee_laws',
    category: 'IFAB Law 12 - Backpass Rule',
    difficulty: 3,
    prompt: {
      en: 'A defender deliberately kicks the ball back to their goalkeeper with their foot, and the goalkeeper picks it up with their hands inside the penalty area. What is the restart?',
      ar: 'أعاد مدافع الكرة متعمداً بقدمه إلى حارس مرماه، فأمسكها الحارس بيديه داخل منطقة الجزاء. ما هو قرار الاستئناف؟'
    },
    answer: { en: 'Indirect Free Kick to the attacking team inside the box', ar: 'ركلة حرة غير مباشرة للفريق المهاجم داخل منطقة الجزاء' },
    options: [
      { en: 'Indirect Free Kick to the attacking team inside the box', ar: 'ركلة حرة غير مباشرة للفريق المهاجم داخل منطقة الجزاء' },
      { en: 'Penalty Kick', ar: 'ركلة جزاء' },
      { en: 'Yellow card to the goalkeeper and dropped ball', ar: 'إنذار الحارس وإسقاط الكرة' },
      { en: 'Play continues with no penalty', ar: 'استمرار اللعب دون مخالفة' }
    ],
    ifabLaw: 'IFAB Law 12 (Fouls and Misconduct)',
    ruleExplanation: {
      en: 'Deliberate foot-pass to the goalkeeper cannot be handled. Handling it results in an indirect free kick from where the ball was handled.',
      ar: 'التمرير المتعمد بالقدم لحارس المرمى يمنعه من لمس الكرة بيديه، ومخالفة ذلك تستوجب ركلة حرة غير مباشرة.'
    }
  },
  {
    id: 'rl_7',
    mode: 'referee_laws',
    category: 'IFAB Law 3 - Outside Interference',
    difficulty: 5,
    prompt: {
      en: 'A substitute warming up behind the goal steps onto the pitch and kicks away an open-goal shot that was crossing the line. What is the referee’s decision?',
      ar: 'قام لاعب بديل يجري تدريبات الإحماء خلف المرمى بالدخول إلى الملعب ومنع كرة متجهة للشباك الخالية بقدمه. ما القرار؟'
    },
    answer: { en: 'Penalty Kick for attackers and Red Card for the substitute', ar: 'ركلة جزاء للفريق المهاجم وبطاقة حمراء وطرد مباشر للبديل' },
    options: [
      { en: 'Penalty Kick for attackers and Red Card for the substitute', ar: 'ركلة جزاء للفريق المهاجم وبطاقة حمراء وطرد مباشر للبديل' },
      { en: 'Indirect free kick and Yellow Card', ar: 'ركلة حرة غير مباشرة وبطاقة صفراء' },
      { en: 'Dropped ball and warning', ar: 'إسقاط الكرة وتحذير شفهي' },
      { en: 'Corner Kick', ar: 'ركلة ركنية' }
    ],
    ifabLaw: 'IFAB Law 3 & Law 12',
    ruleExplanation: {
      en: 'Interference by a team official or substitute stopping a goal leads to a direct free kick (or penalty kick if inside the box) and a red card for denying a goal.',
      ar: 'تدخل بديل أو مسؤول فريق لمنع هدف محقق يعاقب بالبطاقة الحمراء المباشرة وركلة حرة مباشرة (أو ركلة جزاء داخل المنطقة).'
    }
  },
  {
    id: 'rl_8',
    mode: 'referee_laws',
    category: 'IFAB Law 11 - Interfering with an Opponent',
    difficulty: 4,
    prompt: {
      en: 'An attacker is in an offside position right in front of the goalkeeper, clearly blocking the keeper’s sight of the incoming shot. The attacker never touches the ball, and the ball goes in. What is the call?',
      ar: 'مهاجم يقف في موقف تسلل أمام حارس المرمى تماماً ويحجب رؤيته للتسديدة القادمة، وسكنت الكرة الشباك دون أن يلمسها المهاجم. ما القرار؟'
    },
    answer: { en: 'Offside; Disallow the goal (Interfering with an opponent)', ar: 'تسلل؛ إلغاء الهدف (التداخل مع المنافس وحجب الرؤية)' },
    options: [
      { en: 'Offside; Disallow the goal (Interfering with an opponent)', ar: 'تسلل؛ إلغاء الهدف (التداخل مع المنافس وحجب الرؤية)' },
      { en: 'Goal stands because the player did not touch the ball', ar: 'احتساب الهدف لأن المهاجم لم يلمس الكرة' },
      { en: 'Goal stands with yellow card for simulation', ar: 'احتساب الهدف وإنذار المهاجم' },
      { en: 'Dropped ball', ar: 'إسقاط الكرة' }
    ],
    ifabLaw: 'IFAB Law 11 (Offside)',
    ruleExplanation: {
      en: 'A player in an offside position is penalized if they clearly obstruct an opponent’s line of vision to prevent them from playing the ball.',
      ar: 'يُعاقب اللاعب المتسلل إذا تداخل مع المنافس بحجب زاوية الرؤية بوضوح عن حارس المرمى ومنعه من التصدي للكرة.'
    }
  },
  {
    id: 'rl_9',
    mode: 'referee_laws',
    category: 'IFAB Law 12 - Advantage & Cards',
    difficulty: 4,
    prompt: {
      en: 'A defender commits a tactical foul (stopping a promising attack) by grabbing a player’s shirt. The referee plays advantage and the attacking team scores immediately. What card is shown?',
      ar: 'ارتكب مدافع خطأ تكتيكياً لإيقاف هجمة واعدة، لكن الحكم أتاح مبدأ الفرصة وسجل المهاجمون هدفاً فورياً. ما هي البطاقة التي تُشهر للمدافع؟'
    },
    answer: { en: 'No card shown (The caution for SPA is downgraded because advantage resulted in a goal)', ar: 'لا تُشهر أي بطاقة (تسقط البطاقة الصفراء للإفساد التكتيكي لأن إتاحة الفرصة أثمرت عن هدف)' },
    options: [
      { en: 'No card shown (SPA caution downgraded after goal)', ar: 'لا تُشهر أي بطاقة (تسقط البطاقة الصفراء لأن إتاحة الفرصة أثمرت عن هدف)' },
      { en: 'Yellow card as normal', ar: 'بطاقة صفراء كالمعتاد' },
      { en: 'Red card for unsporting conduct', ar: 'بطاقة حمراء لسوء السلوك' },
      { en: 'Disallow goal and give the free kick with a yellow card', ar: 'إلغاء الهدف واحتساب الركلة مع بطاقة صفراء' }
    ],
    ifabLaw: 'IFAB Law 12 (Advantage for SPA)',
    ruleExplanation: {
      en: 'If advantage is played for a foul stopping a promising attack (SPA) and a goal is scored, no yellow card is shown unless the challenge was reckless.',
      ar: 'إذا أُتيحت الفرصة في خطأ إيقاف هجمة واعدة وتُرجمت إلى هدف، لا تُشهر البطاقة الصفراء ما لم يكن التدخل متهوراً بحد ذاته.'
    }
  },
  {
    id: 'rl_10',
    mode: 'referee_laws',
    category: 'IFAB Law 15 - Throw-in into Own Goal',
    difficulty: 4,
    prompt: {
      en: 'A player throws the ball back towards their goalkeeper from a throw-in. The keeper misses it and the ball rolls directly into the net untouched. What is the restart?',
      ar: 'ألقى لاعب رمية تماس باتجاه حارس مرماه، فأخطأها الحارس ودخلت الشباك مباشرة دون لمس أي شخص. ما هو قرار الاستئناف؟'
    },
    answer: { en: 'Corner Kick for the opposing team', ar: 'ركلة ركنية للفريق المنافس' },
    options: [
      { en: 'Corner Kick for the opposing team', ar: 'ركلة ركنية للفريق المنافس' },
      { en: 'Own goal awarded', ar: 'احتساب هدف عكسي' },
      { en: 'Goal kick', ar: 'ركلة مرمى' },
      { en: 'Retake throw-in', ar: 'إعادة رمية التماس' }
    ],
    ifabLaw: 'IFAB Law 15 (The Throw-in)',
    ruleExplanation: {
      en: 'A goal cannot be scored directly from a throw-in against anyone. If it enters one’s own goal directly, a corner kick is awarded to the opponent.',
      ar: 'لا يمكن تسجيل هدف ذاتي مباشر من رمية تماس، وإذا دخلت الكرة المرمى مباشرة دون لمس أحد تُمنح ركنية للخصم.'
    }
  },
  {
    id: 'rl_11',
    mode: 'referee_laws',
    category: 'IFAB Law 14 - Goalkeeper Off Line',
    difficulty: 3,
    prompt: {
      en: 'During a penalty kick, the goalkeeper moves both feet clearly off the goal line before the ball is kicked, and saves the shot. What must the referee do?',
      ar: 'أثناء تنفيذ ركلة جزاء، تقدم حارس المرمى بكلتا قدميه بوضوح عن خط المرمى قبل التسديد وتصدى للكرة. ما هو الإجراء القانوني؟'
    },
    answer: { en: 'Retake the penalty and warn/caution the goalkeeper', ar: 'إعادة تنفيذ ركلة الجزاء مع تحذير أو إنذار الحارس' },
    options: [
      { en: 'Retake the penalty and warn/caution the goalkeeper', ar: 'إعادة تنفيذ ركلة الجزاء مع تحذير أو إنذار الحارس' },
      { en: 'Play on, save is valid', ar: 'استمرار اللعب واحتساب التصدي' },
      { en: 'Indirect Free Kick from the penalty spot', ar: 'ركلة حرة غير مباشرة من علامة الجزاء' },
      { en: 'Award a goal automatically', ar: 'احتساب هدف تلقائياً' }
    ],
    ifabLaw: 'IFAB Law 14 (The Penalty Kick)',
    ruleExplanation: {
      en: 'The goalkeeper must have at least part of one foot touching, or in line with, the goal line when the ball is kicked. If an illegal advance impacts the kick and a save is made, it must be retaken.',
      ar: 'يجب أن يلامس جزء من قدم الحارس على الأقل خط المرمى لحظة ركل الكرة؛ وإذا تقدم وتصدى للكرة تُعاد الركلة ويُنذر الحارس عند التكرار.'
    }
  },
  {
    id: 'rl_12',
    mode: 'referee_laws',
    category: 'IFAB Law 8 - The Start and Restart of Play',
    difficulty: 4,
    prompt: {
      en: 'A dropped ball is delivered by the referee. A player kicks the bouncing ball directly into the opponent’s goal without touching any other player. Does the goal stand?',
      ar: 'أسقط الحكم الكرة لإسقاط قانوني، فسددها لاعب مباشرة في مرمى الخصم دون أن تلمس أي لاعب آخر. هل يُحتسب الهدف؟'
    },
    answer: { en: 'No, goal kick awarded to opponent (must touch at least 2 players)', ar: 'لا، تُلغى وتُمنح ركلة مرمى للمنافس (يجب أن تلمس لاعبين على الأقل)' },
    options: [
      { en: 'No, goal kick awarded to opponent', ar: 'لا، تُلغى وتُمنح ركلة مرمى للمنافس' },
      { en: 'Yes, a valid goal', ar: 'نعم، هدف صحيح وقانوني' },
      { en: 'Retake the dropped ball', ar: 'إعادة إسقاط الكرة' },
      { en: 'Corner Kick', ar: 'ركلة ركنية' }
    ],
    ifabLaw: 'IFAB Law 8 (Start and Restart)',
    ruleExplanation: {
      en: 'Under Law 8, if a dropped ball enters the goal without touching at least two players, play is restarted with a goal kick (if in opponent’s goal) or corner kick (if in own goal).',
      ar: 'تنص المادة 8 على أنه إذا دخلت كرة الإسقاط المرمى دون لمس لاعبين اثنين على الأقل يُستأنف اللعب بركلة مرمى أو ركنية.'
    }
  },
  {
    id: 'rl_13',
    mode: 'referee_laws',
    category: 'IFAB Law 12 - Open Play Goalkeeper Goals',
    difficulty: 3,
    prompt: {
      en: 'In open play, a goalkeeper catches the ball, volleys it out of their hands from their own penalty box, and it flies all the way into the opponent’s goal. Is this a legal goal?',
      ar: 'في اللعب المفتوح، أمسك الحارس الكرة وسددها من يده مباشرة (على الطائر) من منطقته فاستقرت في شباك الخصم. هل الهدف قانوني؟'
    },
    answer: { en: 'Yes, perfectly legal goal', ar: 'نعم، هدف شرعي وقانوني 100%' },
    options: [
      { en: 'Yes, perfectly legal goal', ar: 'نعم، هدف شرعي وقانوني 100%' },
      { en: 'No, goalkeepers cannot score with hand-released kicks', ar: 'لا، لا يجوز للحارس التسجيل من تسديدة باليد' },
      { en: 'Indirect Free Kick for opponents', ar: 'ركلة حرة غير مباشرة للخصم' },
      { en: 'Goal kick for opponents', ar: 'ركلة مرمى للخصم' }
    ],
    ifabLaw: 'IFAB Law 12',
    ruleExplanation: {
      en: 'A goalkeeper can legally score with a kick from their hands during open play. Only throwing the ball with hands into the opposing goal is prohibited.',
      ar: 'يجوز لحارس المرمى التسجيل بركل الكرة بيده في اللعب المفتوح؛ المحظور فقط هو إلقاء الكرة بيده مباشرة داخل شباك الخصم.'
    }
  },
  {
    id: 'rl_14',
    mode: 'referee_laws',
    category: 'IFAB Law 10 - Penalty Shootouts Equal Number',
    difficulty: 5,
    prompt: {
      en: 'Before a penalty shootout begins, Team A has 11 players while Team B has 10 players due to a red card. What must Team A do to ensure fairness?',
      ar: 'قبل بدء ركلات الترجيح، كان لدى الفريق (أ) 11 لاعباً بينما لدى الفريق (ب) 10 لاعبين بسبب حالة طرد. ما الإجراء الملزم للفريق (أ)؟'
    },
    answer: { en: 'Team A must reduce its team size to 10 players by excluding one player', ar: 'يجب على الفريق (أ) استبعاد لاعب ليتساوى الفريقان بـ 10 لاعبين' },
    options: [
      { en: 'Team A must reduce to 10 players to match Team B', ar: 'يجب على الفريق (أ) استبعاد لاعب ليتساوى الفريقان بـ 10 لاعبين' },
      { en: 'Team B receives a bonus penalty', ar: 'يحصل الفريق (ب) على ركلة جزاء إضافية' },
      { en: 'All 11 shoot first, then Team B repeats their first kicker', ar: 'يسدد الـ 11 لاعباً أولاً ثم يكرر الفريق (ب) مسدده الأول' },
      { en: 'The match goes to a coin toss instead', ar: 'اللجوء للقرعة مباشرة' }
    ],
    ifabLaw: 'IFAB Law 10 (Determining the Outcome)',
    ruleExplanation: {
      en: 'Law 10 mandates the "Reduce to Equate" principle: if one team has more players at the end of the match, they must reduce their numbers to equal the opponent before kicks commence.',
      ar: 'تنص المادة 10 على مبدأ التكافؤ العددي: إذا أنهى فريق المباراة بعدد أكبر من اللاعبين، يجب أن يستبعد من قائمته ليتساوى مع خصمه قبل بدء الركلات.'
    }
  },
  {
    id: 'rl_15',
    mode: 'referee_laws',
    category: 'IFAB Law 5 - Outside Whistle from Crowd',
    difficulty: 4,
    prompt: {
      en: 'A loud whistle is blown by a fan in the crowd. A defender stops playing and catches the ball with their hand thinking play was stopped. What is the referee’s decision?',
      ar: 'أطلق أحد المشجعين في المدرجات صافرة حادة، فتوقف المدافع وظن أن اللعب توقف وأمسك الكرة بيده. ما قرار الحكم العادل؟'
    },
    answer: { en: 'Stop play for outside interference and restart with a dropped ball', ar: 'إيقاف اللعب بسبب تدخل خارجي واستئناف اللعب بإسقاط الكرة' },
    options: [
      { en: 'Stop play for outside interference and restart with a dropped ball', ar: 'إيقاف اللعب بسبب تدخل خارجي واستئناف اللعب بإسقاط الكرة' },
      { en: 'Award a penalty kick to the opposing team for deliberate handball', ar: 'احتساب ركلة جزاء للمنافس للمس الكرة متعمداً' },
      { en: 'Yellow card for the defender and indirect free kick', ar: 'إنذار المدافع وركلة حرة غير مباشرة' },
      { en: 'Award a goal to the attacking team', ar: 'احتساب هدف لصالح الفريق المهاجم' }
    ],
    ifabLaw: 'IFAB Law 5 (The Referee - Outside Agent)',
    ruleExplanation: {
      en: 'If an outside noise or interference disrupts play and causes confusion, the referee stops play and restarts with a dropped ball without punishing the defender.',
      ar: 'إذا تسبب تدخل أو صوت خارجي من الجمهور في تشتيت اللاعبين وإحداث ارتباك، يوقف الحكم اللعب ويستأنف بإسقاط الكرة دون احتساب مخالفة على المدافع.'
    }
  }
];

