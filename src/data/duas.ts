export interface Dua {
  id: string;
  arabic: string;
  transliteration?: string;
  translations: Record<string, string>;
  source: string;
  category: string; // The "Person Type"
  youtubeId?: string;
}

export const DUAS: Dua[] = [
  {
    id: 'parent-1',
    category: 'The Child',
    arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    transliteration: 'Rabbi irhamhuma kama rabbayani sagheera',
    translations: {
      en: 'My Lord, have mercy upon them as they brought me up [when I was] small.',
      ar: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      ur: 'اے میرے رب! ان دونوں (والدین) پر رحم فرما جس طرح انہوں نے بچپن میں میری پرورش کی تھی',
      fr: 'Seigneur ! Fais-leur, à tous deux, miséricorde comme ils م’ont élevé tout petit.',
      tr: 'Rabbim! Onlar beni küçükken nasıl terbiye edip yetiştirdilerse, Sen de kendilerine merhamet et.',
    },
    source: 'Quran 17:24',
    youtubeId: 'q_bI3lwbNbw',
  },
  {
    id: 'sinner-1',
    category: 'The Repentant',
    arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
    transliteration: 'Rabbana thalamna anfusana wa-in lam taghfir lana watarhamna lanakoonanna mina al-khasireen',
    translations: {
      en: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.',
      ar: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
      ur: 'اے ہمارے رب! ہم نے اپنی جانوں پر ظلم کیا، اور اگر تو نے ہمیں معاف نہ کیا اور ہم پر رحم نہ کیا تو ہم ضرور نقصان اٹھانے والوں میں سے ہو جائیں گے',
      fr: 'Notre Seigneur, nous avons fait du tort à nous-mêmes. Et si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons très certainement du nombre des perdants.',
      tr: 'Rabbimiz! Biz kendimize zulmettik. Eğer bizi bağışlamaz ve bize acımazsan mutlaka ziyan edenlerden oluruz.',
    },
    source: 'Quran 7:23',
    youtubeId: 'q-Y6iWlB-7U',
  },
  {
    id: 'traveler-1',
    category: 'The Traveler',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ',
    transliteration: 'Subhana allathee sakhkhara lana hatha wama kunna lahu muqrineen. Wa-inna ila rabbina lamunqaliboon',
    translations: {
      en: 'Exalted is He who has subjected this to us, and we could not have [otherwise] subdued it. And indeed, to our Lord we will return.',
      ar: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ',
      ur: 'پاک ہے وہ ذات جس نے اس (سواری) کو ہمارے بس میں کر دیا، حالانکہ ہم اسے قابو میں کرنے والے نہ تھے، اور بے شک ہمیں اپنے رب کی طرف لوٹ کر جانا ہے',
      fr: 'Gloire à Celui qui nous a soumis tout cela alors que nous n’étions pas capables de les dominer. C’est vers notre Seigneur que nous retournerons.',
      tr: 'Bunu bizim hizmetimize veren Allah’ı eksikliklerden tenzih ederiz; yoksa bizim buna gücümüz yetmezdi. Şüphesiz biz Rabbimize döneceğiz.',
    },
    source: 'Quran 43:13-14',
    youtubeId: '0_lE2P6N_eM',
  },
  {
    id: 'sick-1',
    category: 'The Sick',
    arabic: 'رَبِّ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
    transliteration: 'Rabbi annee massaniya ad-durru wa-anta arhamu ar-rahimeen',
    translations: {
      en: 'Indeed, adversity has touched me, and you are the most merciful of the merciful.',
      ar: 'رَبِّ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
      ur: 'اے میرے رب! مجھے بیماری لگ گئی ہے اور تو سب سے بڑھ کر رحم کرنے والا ہے',
      fr: 'Le mal م’a touché. Mais Toi, Tu es le plus miséricordieux des miséricordieux !',
      tr: 'Başıma bir bela geldi, Sen ise merhametlilerin en merhametlisisin.',
    },
    source: 'Quran 21:83',
    youtubeId: '6Lz4V54_7O4',
  },
  {
    id: 'student-1',
    category: 'The Student',
    arabic: 'رَّبِّ زِدْنِي عِلْمًا',
    transliteration: 'Rabbi zidnee ilma',
    translations: {
      en: 'My Lord, increase me in knowledge.',
      ar: 'رَّبِّ زِدْنِي عِلْمًا',
      ur: 'اے میرے رب! میرے علم میں اضافہ فرما',
      fr: 'Ô mon Seigneur, accroît mes connaissances.',
      tr: 'Rabbim! İlmimi artır.',
    },
    source: 'Quran 20:114',
    youtubeId: 'X4v-VlV-mI0',
  },
  {
    id: 'spouse-1',
    category: 'The Spouse',
    arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    transliteration: 'Rabbana hab lana min azwajina wathurriyyatina qurrata ayunin waj-alna lilmuttaqeena imama',
    translations: {
      en: 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.',
      ar: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
      ur: 'اے ہمارے رب! ہمیں اپنی بیویوں اور اپنی اولاد سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا پیشوا بنا',
      fr: 'Notre Seigneur, donne-nous, en nos épouses et nos descendants, la joie des yeux, et fais de nous un guide pour les pieux.',
      tr: 'Rabbimiz! Bize gözümüzü aydınlatacak eşler ve zürriyetler bağışla ve bizi takva sahiplerine önder kıl.',
    },
    source: 'Quran 25:74',
    youtubeId: '0zYd-7R5hD0',
  },
  {
    id: 'worshipper-1',
    category: 'The Worshipper',
    arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
    transliteration: 'Rabbi ij-alnee muqeema as-salati wamin thurriyyatee Rabbana wataqabbal dua',
    translations: {
      en: 'My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, and accept my supplication.',
      ur: 'اے میرے رب! مجھے نماز قائم کرنے والا بنا اور میری اولاد میں سے بھی، اے ہمارے رب! اور میری دعا قبول فرما',
      tr: 'Rabbim! Beni ve neslimi namazı devamlı kılanlardan eyle. Rabbimiz! Duamı kabul et.',
    },
    source: 'Quran 14:40',
    youtubeId: 'p2-21B00S_E',
  },
  {
    id: 'leader-1',
    category: 'The Leader',
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
    transliteration: 'Rabbi ishrahllee sadree wayassirlee amree wahlul uqdatan min lisanee yafqahoo qawlee',
    translations: {
      en: 'My Lord, expand for me my breast [with assurance] and ease for me my task and untie the knot from my tongue that they may understand my speech.',
      ur: 'اے میرے رب! میرا سینہ کھول دے اور میرا کام آسان کر دے اور میری زبان کی گرہ کھول دے تاکہ وہ میری بات سمجھ سکیں',
      tr: 'Rabbim! Gönlüme ferahlık ver. İşimi bana kolaylaştır. Dilimdeki tutukluğu çöz ki sözümü anlasınlar.',
    },
    source: 'Quran 20:25-28',
    youtubeId: 'V9q4V6R7S5Y',
  },
  {
    id: 'pious-1',
    category: 'The Pious',
    arabic: 'رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
    translations: {
      en: 'Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.',
      ur: 'اے ہمارے رب! ہمیں اپنے پاس سے رحمت عطا فرما اور ہمارے کام میں ہمارے لیے راہِ راست آسان کر دے',
      tr: 'Rabbimiz! Bize katından bir rahmet ver ve şu işimizde bize doğruluk/başarı hazırla.',
    },
    source: 'Quran 18:10',
    youtubeId: 'q_bI3lwbNbw',
  },
  {
    id: 'seeker-1',
    category: 'The Seeker of Truth',
    arabic: 'اَللّٰهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَه وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَه',
    translations: {
      en: 'O Allah! Show us the truth as truth, and bestow upon us the ability to follow it. And show us falsehood as falsehood, and bestow upon us the ability to avoid it.',
      ur: 'اے اللہ! ہمیں حق کو حق کر کے دکھا اور اس کی اتباع کی توفیق دے، اور باطل کو باطل کر کے دکھا اور اس سے بچنے کی توفیق دے',
    },
    source: 'Hadith (Traditional)',
    youtubeId: 'q_bI3lwbNbw',
  }
];

export const CATEGORIES = [
  'The Child', 'The Parent', 'The Repentant', 'The Sinner', 'The Traveler', 
  'The Sick', 'The Student', 'The Teacher', 'The Spouse', 'The Widow', 
  'The Orphan', 'The Poor', 'The Debtor', 'The Oppressed', 'The Victor', 
  'The Humble', 'The Arrogant', 'The Patient', 'The Grateful', 'The Worried',
  'The Grieving', 'The Fearful', 'The Brave', 'The Soldier', 'The Merchant',
  'The Farmer', 'The Worker', 'The Leader', 'The Subject', 'The Neighbor',
  'The Guest', 'The Host', 'The Friend', 'The Stranger', 'The Muslim',
  'The Believer', 'The Pious', 'The Seeker of Truth', 'The Revert', 'The Elderly',
  'The Youth', 'The Infant', 'The Pregnant Woman', 'The Nursing Mother', 
  'The Fasting Person', 'The Pilgrim', 'The Worshipper', 'The Reciter', 
  'The Memorizer', 'The Scholar', 'The Judge', 'The Witness', 'The Helper',
  'The Donor', 'The Volunteer', 'The Neighbor in Need', 'The Sleepless',
  'The Awakened', 'The Dreaming', 'The Confused', 'The Decisive', 'The Lazy',
  'The Hardworking', 'The Creative', 'The Artisan', 'The Engineer', 'The Doctor',
  'The Recovering', 'The Dying', 'The Bereaved', 'The Interceder', 
  'The Prophet\'s Follower', 'The Mosque Goer', 'The Seeker of Halal',
  'The Avoider of Haram', 'The Trusting', 'The Contemplative', 'The Silent',
  'The Speaker', 'The Writer', 'The Reader', 'The Listener', 'The Seeker of Jannah',
  'The Fearing of Hell', 'The Seeker of Forgiveness', 'The Praiser', 
  'The Glorifier', 'The Constant in Dhikr', 'The Tester', 'The Tested',
  'The Successful', 'The Failed', 'The Hopeful', 'The Despairing', 
  'The Lover of RasoolAllah ﷺ', 'The Servant of Allah'
];
