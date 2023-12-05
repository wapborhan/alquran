const SURAH = [
  {
    sura: "1",
    sura_no: "০০১",
    sura_name: "আল ফাতিহা",
    para: "1",
    total_ayat: "৭",
    enbn_name: "Al-Fatihah",
    eng_name: "The Opening",
    bn_name: "সূচনা ",
    ar_name: "سورة الفاتحة",
    type: "মাক্কী",
    ruku: "১",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/001.mp3",
  },
  {
    sura: "2",
    sura_no: "০০২",
    sura_name: "আল বাকারা",
    para: "1",
    total_ayat: "২৮৬",
    enbn_name: "Al-Baqara",
    eng_name: "The Calf",
    bn_name: "বকনা-বাছুর",
    ar_name: "سورة البقرة",
    type: "মাদানী",
    ruku: "৪০",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/002.mp3",
  },
  {
    sura: "3",
    sura_no: "০০৩",
    sura_name: "আলে-ইমরান",
    para: "3",
    total_ayat: "২০০",
    enbn_name: "Al-i'Imran",
    eng_name: "The Family of Imraan",
    bn_name: "ইমরানের পরিবার",
    ar_name: "سورة آل عمران",
    type: "মাদানী",
    ruku: "২০",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/003.mp3",
  },
  {
    sura: "4",
    sura_no: "০০৪",
    sura_name: "আন নিসা",
    para: "4",
    total_ayat: "১৭৬",
    enbn_name: "An-Nisaa",
    eng_name: "The Women",
    bn_name: "মহিলা",
    ar_name: "سورة النساء",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/004.mp3",
  },
  {
    sura: "5",
    sura_no: "০০৫",
    sura_name: "আল মায়েদা",
    para: "6",
    total_ayat: "১২০",
    enbn_name: "Al-Maidah",
    eng_name: "The Food,",
    bn_name: "খাদ্য পরিবেশিত টেবিল",
    ar_name: "سورة المائدة",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/005.mp3",
  },
  {
    sura: "6",
    sura_no: "০০৬",
    sura_name: "আল আন'আম",
    para: "7",
    total_ayat: "১৬৫",
    enbn_name: "Al-An'am",
    eng_name: "The Cattle",
    bn_name: "গৃৃহপালিত পশু",
    ar_name: "سورة الأنعام",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/006.mp3",
  },
  {
    sura: "7",
    sura_no: "০০৭",
    sura_name: "আল আ'রাফ",
    para: "8",
    total_ayat: "২০৬",
    enbn_name: "Al-A'raf",
    eng_name: "The Heights",
    bn_name: "উচু স্থানসমূহ",
    ar_name: "سورة الأعراف",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/007.mp3",
  },
  {
    sura: "8",
    sura_no: "০০৮",
    sura_name: "আল-আনফাল",
    para: "9",
    total_ayat: "৭৫",
    enbn_name: "Al-Anfal",
    eng_name: "The Spoils of War",
    bn_name: "যুদ্ধে-লব্ধ ধনসম্পদ",
    ar_name: "سورة الأنفال",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/008.mp3",
  },
  {
    sura: "9",
    sura_no: "০০৯",
    sura_name: "আত তাওবাহ",
    para: "10",
    total_ayat: "১২৯",
    enbn_name: "At-Taubah",
    eng_name: "The Repentance",
    bn_name: "অনুশোচনা ",
    ar_name: "سورة التوبة",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/009.mp3",
  },
  {
    sura: "10",
    sura_no: "০১০",
    sura_name: "ইউনুস",
    para: "11",
    total_ayat: "১০৯",
    enbn_name: "Yunus",
    eng_name: "Prophet Yunus",
    bn_name: "নবী ইউনুস (আ.) ",
    ar_name: "سورة يونس",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/010.mp3",
  },
  {
    sura: "11",
    sura_no: "০১১",
    sura_name: "হুদ",
    para: "12",
    total_ayat: "১২৩",
    enbn_name: "Hud",
    eng_name: "Prophet Hud",
    bn_name: "নবী হুদ",
    ar_name: "سورة هود",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/011.mp3",
  },
  {
    sura: "12",
    sura_no: "০১২",
    sura_name: "ইউসূফ",
    para: "12",
    total_ayat: "১১১",
    enbn_name: "Yusuf",
    eng_name: "Prophet Yusuf",
    bn_name: "নবী ইউসুফ (আ.)",
    ar_name: "سورة يوسف",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/012.mp3",
  },
  {
    sura: "13",
    sura_no: "০১৩",
    sura_name: "আর-রাদ",
    para: "13",
    total_ayat: "৪৩",
    enbn_name: "Ar-Ra'd",
    eng_name: "The Thunder",
    bn_name: "বজ্রনাদ ",
    ar_name: " سورة الرعد",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/013.mp3",
  },
  {
    sura: "14",
    sura_no: "০১৪",
    sura_name: "ইব্রাহীম",
    para: "13",
    total_ayat: "৫২",
    enbn_name: "Ibrahim",
    eng_name: "Prophet Ibrahim",
    bn_name: "নবী ইব্রাহিম (আ.)",
    ar_name: "سورة ابراهيم ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/014.mp3",
  },
  {
    sura: "15",
    sura_no: "০১৫",
    sura_name: "আল-হিজর ",
    para: "13",
    total_ayat: "৯৯",
    enbn_name: "Al-Hijr",
    eng_name: "The Rocky Tract,",
    bn_name: "পাথুরে পাহাড়",
    ar_name: "سورة الحجر",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/015.mp3",
  },
  {
    sura: "16",
    sura_no: "০১৬",
    sura_name: "আন-নাহাল",
    para: "14",
    total_ayat: "১২৮",
    enbn_name: "An-Nahl",
    eng_name: "The Honey Bees",
    bn_name: "মৌমাছি ",
    ar_name: " سورة النحل",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/016.mp3",
  },
  {
    sura: "17",
    sura_no: "০১৭",
    sura_name: "আল-ইসরা (বনী-ইসরাঈল)",
    para: "15",
    total_ayat: "১১১",
    enbn_name: "Al-Isra",
    eng_name: "The Night Journey",
    bn_name: "রাতের সফর (ইসরায়েলের সন্তানগণ [ইহুদী জাতি]) ",
    ar_name: " سورة الإسراء",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/017.mp3",
  },
  {
    sura: "18",
    sura_no: "০১৮",
    sura_name: "আল-কাহফ",
    para: "15",
    total_ayat: "১১০",
    enbn_name: "Al-Kahf",
    eng_name: "The Cave",
    bn_name: "গুহা",
    ar_name: " سورة الكهف",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/018.mp3",
  },
  {
    sura: "19",
    sura_no: "০১৯",
    sura_name: "মারইয়াম",
    para: "16",
    total_ayat: "৯৮",
    enbn_name: "Maryam",
    eng_name: "Maryam (Mother of Prophet Isa)",
    bn_name: "মারিয়াম [নবী ঈসা (আ.) এর মা]",
    ar_name: " سورة مريم",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/019.mp3",
  },
  {
    sura: "20",
    sura_no: "০২০",
    sura_name: "ত্ব-হা",
    para: "16",
    total_ayat: "১৩৫",
    enbn_name: "Ta-ha",
    eng_name: "Ṭāʾ Hāʾ",
    bn_name: "ত্বোয়া-হা",
    ar_name: " سورة طه",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/020.mp3",
  },
  {
    sura: "21",
    sura_no: "০২১",
    sura_name: "আল-আম্বিয়া",
    para: "17",
    total_ayat: "১১২",
    enbn_name: "Al-Anbiyaa",
    eng_name: "The Prophets",
    bn_name: "নবীগণ ",
    ar_name: "سورة الأنبياء ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/021.mp3",
  },
  {
    sura: "22",
    sura_no: "০২২",
    sura_name: "আল-হজ্জ",
    para: "17",
    total_ayat: "৭৮",
    enbn_name: "Al-Hajj",
    eng_name: "The Hajj",
    bn_name: "হজ্জ (হজ)",
    ar_name: "سورة الحج ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/022.mp3",
  },
  {
    sura: "23",
    sura_no: "০২৩",
    sura_name: "আল মু'মিনূন",
    para: "18",
    total_ayat: "১১৮",
    enbn_name: "Al-Mu'minun",
    eng_name: "The Believers",
    bn_name: "বিশ্বাসীগণ ",
    ar_name: "سورة المؤمنون ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/023.mp3",
  },

  {
    sura: "24",
    sura_no: "০২৪",
    sura_name: "আন-নূর",
    para: "18",
    total_ayat: "৬৪",
    enbn_name: "An-Nur",
    eng_name: "The Light",
    bn_name: "আলো,জ্যোতি",
    ar_name: "سورة النور ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/024.mp3",
  },
  {
    sura: "25",
    sura_no: "০২৫",
    sura_name: "আল-ফুরকান",
    para: "18",
    total_ayat: "৭৭",
    enbn_name: "Al-Furqan",
    eng_name: "The Criterion",
    bn_name: "সত্য মিথ্যার পার্থক্য নির্ধারণকারী গ্রন্থ",
    ar_name: " سورة الفرقان",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/025.mp3",
  },
  {
    sura: "26",
    sura_no: "০২৬",
    sura_name: "আশ-শুআ'রা",
    para: "19",
    total_ayat: "২২৭",
    enbn_name: "Ash-Shu'araa",
    eng_name: "The Poets",
    bn_name: "কবিগণ ",
    ar_name: "سورة الشعراء ",
    type: " মাক্কী	",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/026.mp3",
  },
  {
    sura: "27",
    sura_no: "০২৭",
    sura_name: "আন-নামাল",
    para: "19",
    total_ayat: "৯৩",
    enbn_name: "An-Naml",
    eng_name: "The Ant",
    bn_name: "পিপীলিকা (পিঁপড়া)",
    ar_name: " سورة النمل",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/027.mp3",
  },
  {
    sura: "28",
    sura_no: "০২৮",
    sura_name: "আল কাসাস",
    para: "20",
    total_ayat: "৮৮",
    enbn_name: "Al-Qasas",
    eng_name: "The Stories",
    bn_name: "ঘটনা,কাহিনী",
    ar_name: "سورة القصص ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/028.mp3",
  },
  {
    sura: "29",
    sura_no: "০২৯",
    sura_name: "আল আনকাবূত",
    para: "20",
    total_ayat: "৬৯",
    enbn_name: "Al-Ankabut",
    eng_name: "The Spider",
    bn_name: "মাকড়সা ",
    ar_name: "سورة العنكبوت ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/029.mp3",
  },
  {
    sura: "30",
    sura_no: "০৩০",
    sura_name: "আর-রূম",
    para: "21",
    total_ayat: "৬০",
    enbn_name: "Ar-Rum",
    eng_name: "Rome",
    bn_name: "রোমান জাতি",
    ar_name: " سورة الروم",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/030.mp3",
  },
  {
    sura: "31",
    sura_no: "০৩১",
    sura_name: "লুকমান",
    para: "21",
    total_ayat: "৩৪",
    enbn_name: "Luqman",
    eng_name: "Luqman",
    bn_name: "একজন জ্ঞানী ব্যক্তি",
    ar_name: " سورة لقمان",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/031.mp3",
  },
  {
    sura: "32",
    sura_no: "০৩২",
    sura_name: "আস-সাজদাহ",
    para: "21",
    total_ayat: "৩০",
    enbn_name: "As-Sajda",
    eng_name: "Worship",
    bn_name: "সিজদাহ ",
    ar_name: "سورة السجدة ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/032.mp3",
  },
  {
    sura: "33",
    sura_no: "০৩৩",
    sura_name: "আল আহযাব",
    para: "21",
    total_ayat: "৭৩",
    enbn_name: "Al-Ahzab",
    eng_name: "The Clans",
    bn_name: "জোট ",
    ar_name: "سورة الأحزاب ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/033.mp3",
  },
  {
    sura: "34",
    sura_no: "০৩৪",
    sura_name: "সাবা",
    para: "22",
    total_ayat: "৫৪",
    enbn_name: "Saba",
    eng_name: "Queen Saba",
    bn_name: "রানী সাবা ",
    ar_name: "سورة سبإ ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/034.mp3",
  },
  {
    sura: "35",
    sura_no: "০৩৫",
    sura_name: "ফাতির",
    para: "22",
    total_ayat: "৪৫",
    enbn_name: "Fatir",
    eng_name: "The Originator",
    bn_name: "আদি স্রষ্টা",
    ar_name: " سورة فاطر",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/035.mp3",
  },
  {
    sura: "36",
    sura_no: "০৩৬",
    sura_name: "ইয়াসীন",
    para: "22",
    total_ayat: "৮৩",
    enbn_name: "Ya-Sin",
    eng_name: "Ya-Sin",
    bn_name: "ইয়াসীন",
    ar_name: "سورة يس ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/036.mp3",
  },
  {
    sura: "37",
    sura_no: "০৩৭",
    sura_name: "আস-সাফফাত",
    para: "23",
    total_ayat: "১৮২",
    enbn_name: "As-Saffat",
    eng_name: "Those Who Set The Ranks",
    bn_name: "সারিবদ্ধভাবে দাড়ানো",
    ar_name: "سورة الصافات ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/037.mp3",
  },
  {
    sura: "38",
    sura_no: "০৩৮",
    sura_name: "সোয়াদ",
    para: "23",
    total_ayat: "৮৮",
    enbn_name: "Ṣād",
    eng_name: "Ṣād",
    bn_name: "আরবি বর্ণ ",
    ar_name: "سورة ص",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/038.mp3",
  },
  {
    sura: "39",
    sura_no: "০৩৯",
    sura_name: "আয-যুমার",
    para: "23",
    total_ayat: "৭৫",
    enbn_name: "Az-Zumar",
    eng_name: "The Crowds",
    bn_name: "দল-বদ্ধ জনতা",
    ar_name: "سورة الزمر ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/039.mp3",
  },
  {
    sura: "40",
    sura_no: "০৪০",
    sura_name: "আল-মু'মিন",
    para: "24",
    total_ayat: "৮৫",
    enbn_name: "Al-Mu'min",
    eng_name: "The Forgiver (Allah)",
    bn_name: "পরম ক্ষমাশীল (বিশ্বাসী)",
    ar_name: " سورة غافر",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/040.mp3",
  },
  {
    sura: "41",
    sura_no: "০৪১",
    sura_name: "হা-মীম আস-সাজদা",
    para: "24",
    total_ayat: "৫৪",
    enbn_name: "Ha-Mim",
    eng_name: "Expounded",
    bn_name: "সুস্পষ্ট বিবরণ",
    ar_name: "سورة فصلت ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/041.mp3",
  },
  {
    sura: "42",
    sura_no: "০৪২",
    sura_name: "আশ-শূরা",
    para: "25",
    total_ayat: "৫৩",
    enbn_name: "Ash-Shura",
    eng_name: "The Consultation",
    bn_name: "পরামর্শ ",
    ar_name: "سورة الشورى ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/042.mp3",
  },
  {
    sura: "43",
    sura_no: "০৪৩",
    sura_name: "আয-যুখরুফ",
    para: "25",
    total_ayat: "৮৯",
    enbn_name: "Az-Zukhruf",
    eng_name: "The Gold Adornments",
    bn_name: "সোনাদানা ",
    ar_name: "سورة الزخرف ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/043.mp3",
  },
  {
    sura: "44",
    sura_no: "০৪৪",
    sura_name: "আদ-দুখান",
    para: "25",
    total_ayat: "৫৯",
    enbn_name: "Ad-Dukhan",
    eng_name: "The Smoke",
    bn_name: "ধোঁয়া ",
    ar_name: "سورة الدخان ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/044.mp3",
  },
  {
    sura: "45",
    sura_no: "০৪৫",
    sura_name: "আল জাসিয়া",
    para: "25",
    total_ayat: "৩৭",
    enbn_name: "Al-Jathiya",
    eng_name: "The Kneeling Down",
    bn_name: "নতজানু ",
    ar_name: "سورة الجاثية ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/045.mp3",
  },
  {
    sura: "46",
    sura_no: "০৪৬",
    sura_name: "আল আহক্বাফ",
    para: "26",
    total_ayat: "৩৫",
    enbn_name: "Al-Ahqaf",
    eng_name: "Winding Sand-tracts",
    bn_name: "বালুর পাহাড়",
    ar_name: " سورة الأحقاف",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/046.mp3",
  },
  {
    sura: "47",
    sura_no: "০৪৭",
    sura_name: "মুহাম্মদ",
    para: "26",
    total_ayat: "৩৮",
    enbn_name: "Muhammad",
    eng_name: "Muhammad (Peace be upon him)",
    bn_name: "মুহাম্মদ (সা.)",
    ar_name: "سورة محمد ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/047.mp3",
  },
  {
    sura: "48",
    sura_no: "০৪৮",
    sura_name: "আল ফাতহ",
    para: "26",
    total_ayat: "২৯",
    enbn_name: "Al-Fat-h",
    eng_name: "The Victory",
    bn_name: "বিজয় (মক্কা বিজয়)",
    ar_name: " سورة الفتح",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/048.mp3",
  },
  {
    sura: "49",
    sura_no: "০৪৯",
    sura_name: "আল হুজরাত",
    para: "26",
    total_ayat: "১৮",
    enbn_name: "Al-Hujurat",
    eng_name: "The Private Apartments",
    bn_name: "বাসগৃহসমূূহ ",
    ar_name: "سورة الحجرات ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/049.mp3",
  },
  {
    sura: "50",
    sura_no: "০৫০",
    sura_name: "ক্বাফ",
    para: "26",
    total_ayat: "৪৫",
    enbn_name: "Qaf",
    eng_name: "Q̈āf",
    bn_name: "আরবি বর্ণ ক্বাফ",
    ar_name: "سورة ق ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/050.mp3",
  },
  {
    sura: "51",
    sura_no: "০৫১",
    sura_name: "আয-যারিয়াত",
    para: "26",
    total_ayat: "৬০",
    enbn_name: "Az-Zariyat",
    eng_name: "The Wind That Scatter",
    bn_name: "বিক্ষেপকারী বাতাস ",
    ar_name: "سورة الذاريات ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/051.mp3",
  },
  {
    sura: "52",
    sura_no: "০৫২",
    sura_name: "আত্ব তূর",
    para: "27",
    total_ayat: "৪৯",
    enbn_name: "At-Tur",
    eng_name: "The Mount",
    bn_name: "তূর পাহাড়",
    ar_name: "سورة الطور ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/052.mp3",
  },
  {
    sura: "53",
    sura_no: "০৫৩",
    sura_name: "আন-নাজম",
    para: "27",
    total_ayat: "৬২",
    enbn_name: "An-Najm",
    eng_name: "The Star",
    bn_name: "তারা ",
    ar_name: "سورة النجم ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/053.mp3",
  },
  {
    sura: "54",
    sura_no: "০৫৪",
    sura_name: "আল ক্বামার",
    para: "27",
    total_ayat: "৫৫",
    enbn_name: "Al-Qamar",
    eng_name: "The Moon",
    bn_name: "চন্দ্র ",
    ar_name: "سورة القمر ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/054.mp3",
  },
  {
    sura: "55",
    sura_no: "০৫৫",
    sura_name: "আর রহমান",
    para: "27",
    total_ayat: "৭৮",
    enbn_name: "Ar-Rahman",
    eng_name: "The Most Merciful",
    bn_name: "অনন্ত করুণাময় ",
    ar_name: "سورة الرحمن ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/055.mp3",
  },
  {
    sura: "56",
    sura_no: "০৫৬",
    sura_name: "আল ওয়াক্বিয়া",
    para: "27",
    total_ayat: "৯৬",
    enbn_name: "Al-Waqi'a",
    eng_name: "The Inevitable",
    bn_name: "নিশ্চিত ঘটনা ",
    ar_name: " سورة الواقعة",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/056.mp3",
  },
  {
    sura: "57",
    sura_no: "০৫৭",
    sura_name: "আল হাদীদ",
    para: "27",
    total_ayat: "২৯",
    enbn_name: "Al-Hadid",
    eng_name: "The Iron",
    bn_name: "লোহা ",
    ar_name: "سورة الحديد ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/057.mp3",
  },
  {
    sura: "58",
    sura_no: "০৫৮",
    sura_name: "আল মুজাদালাহ",
    para: "28",
    total_ayat: "২২",
    enbn_name: "Al-Mujadila",
    eng_name: "The Pleading",
    bn_name: "অনুযোগকারিণী ",
    ar_name: " سورة المجادلة",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/058.mp3",
  },
  {
    sura: "59",
    sura_no: "০৫৯",
    sura_name: "আল হাশর",
    para: "28",
    total_ayat: "২৪",
    enbn_name: "Al-Hashr",
    eng_name: "The Mustering",
    bn_name: "সমাবেশ ",
    ar_name: " سورة الحشر",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/059.mp3",
  },
  {
    sura: "60",
    sura_no: "০৬০",
    sura_name: "আল মুমতাহিনা",
    para: "28",
    total_ayat: "১৩",
    enbn_name: "Al-Mumtahana",
    eng_name: "The Examined One",
    bn_name: "নারী, যাকে পরীক্ষা করা হবে ",
    ar_name: "سورة الممتحنة ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/060.mp3",
  },
  {
    sura: "61",
    sura_no: "০৬১",
    sura_name: "আস-সফফ",
    para: "28",
    total_ayat: "১৪",
    enbn_name: "As-Saff",
    eng_name: "The Ranks",
    bn_name: "সারবন্দী সৈন্যদল ",
    ar_name: "سورة الصف ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/061.mp3",
  },
  {
    sura: "62",
    sura_no: "০৬২",
    sura_name: "আল জুমুআহ",
    para: "28",
    total_ayat: "১১",
    enbn_name: "Al-Jumu'a",
    eng_name: "Congregation, Friday",
    bn_name: "সম্মেলন/শুক্রবার",
    ar_name: " سورة الجمعة",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/062.mp3",
  },
  {
    sura: "63",
    sura_no: "০৬৩",
    sura_name: "আল-মুনাফিকূন",
    para: "28",
    total_ayat: "১১",
    enbn_name: "Al-Munafiqun",
    eng_name: "The Hypocrites",
    bn_name: "কপট বিশ্বাসীগণ",
    ar_name: "سورة المنافقون ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/063.mp3",
  },
  {
    sura: "64",
    sura_no: "০৬৪",
    sura_name: "আত-তাগাবুন",
    para: "28",
    total_ayat: "১৮",
    enbn_name: "At-Tagabun",
    eng_name: "The Cheating",
    bn_name: "মোহ অপসারণ",
    ar_name: "سورة التغابن ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/064.mp3",
  },
  {
    sura: "65",
    sura_no: "০৬৫",
    sura_name: "আত্ব-ত্বালাক্ব",
    para: "28",
    total_ayat: "১২",
    enbn_name: "At-Talaq",
    eng_name: "Divorce",
    bn_name: "তালাক,বন্ধনমুক্তি",
    ar_name: " سورة الطلاق",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/065.mp3",
  },
  {
    sura: "66",
    sura_no: "০৬৬",
    sura_name: "আত-তাহরীম",
    para: "28",
    total_ayat: "১২",
    enbn_name: "At-Tahrim",
    eng_name: "The Prohibition",
    bn_name: "নিষিদ্ধকরণ ",
    ar_name: " سورة التحريم",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/066.mp3",
  },
  {
    sura: "67",
    sura_no: "০৬৭",
    sura_name: "আল মুলক",
    para: "29",
    total_ayat: "৩০",
    enbn_name: "Al-Mulk",
    eng_name: "The Dominion",
    bn_name: "সার্বভৌম কর্তৃত্ব",
    ar_name: "سورة الملك ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/067.mp3",
  },
  {
    sura: "68",
    sura_no: "০৬৮",
    sura_name: "আল কলম",
    para: "29",
    total_ayat: "৫২",
    enbn_name: "Al-Qalam",
    eng_name: "The Pen",
    bn_name: "কলম ",
    ar_name: " سورة القلم",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/068.mp3",
  },
  {
    sura: "69",
    sura_no: "০৬৯",
    sura_name: "আল হাক্বক্বাহ",
    para: "29",
    total_ayat: "৫২",
    enbn_name: "Al-Haqqa",
    eng_name: "The Sure Reality",
    bn_name: "নিশ্চিত সত্য",
    ar_name: " سورة الحاقة",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/069.mp3",
  },
  {
    sura: "70",
    sura_no: "০৭০",
    sura_name: "আল মা'আরিজ",
    para: "29",
    total_ayat: "৪৪",
    enbn_name: "Al-Ma'arij",
    eng_name: "The Ways of Ascent",
    bn_name: "উন্নয়নের সোপান",
    ar_name: " سورة المعارج",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/070.mp3",
  },
  {
    sura: "71",
    sura_no: "০৭১",
    sura_name: "নূহ",
    para: "29",
    total_ayat: "২৮",
    enbn_name: "Nuh",
    eng_name: "Prophet Nuh",
    bn_name: "নূহ (আ.)",
    ar_name: "سورة نوح ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/071.mp3",
  },
  {
    sura: "72",
    sura_no: "০৭২",
    sura_name: "আল-জ্বিন",
    para: "29",
    total_ayat: "২৮",
    enbn_name: "Al-Jinn",
    eng_name: "The Jinn",
    bn_name: "জ্বিন সম্প্রদায়",
    ar_name: " سورة الجن",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/072.mp3",
  },
  {
    sura: "73",
    sura_no: "০৭৩",
    sura_name: "আল-মুযযাম্মিল",
    para: "29",
    total_ayat: "২০",
    enbn_name: "Al-Muzzammil",
    eng_name: "The Enfolded One",
    bn_name: "বস্ত্র আচ্ছাদনকারী ",
    ar_name: "سورة المزمل ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/073.mp3",
  },
  {
    sura: "74",
    sura_no: "০৭৪",
    sura_name: "আল মুদ্দাসসির",
    para: "29",
    total_ayat: "৫৬",
    enbn_name: "Al-Muddathth",
    eng_name: "Clothed ",
    bn_name: "পোশাক পরিহিত/বস্ত্রাবৃত",
    ar_name: "سورة المدثر ",
    type: "মাক্কী",
    ruku: "২",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/074.mp3",
  },
  {
    sura: "75",
    sura_no: "০৭৫",
    sura_name: "আল-ক্বিয়ামাহ",
    para: "29",
    total_ayat: "৪০",
    enbn_name: "Al-Qiyamat",
    eng_name: "Resurrection",
    bn_name: "পুনরুত্থান ",
    ar_name: "سورة القيامة ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/075.mp3",
  },
  {
    sura: "76",
    sura_no: "০৭৬",
    sura_name: "আল-ইনসান (আদ-দাহর)",
    para: "29",
    total_ayat: "৩১",
    enbn_name: "Al-Insan",
    eng_name: "The Human",
    bn_name: "মানুষ ",
    ar_name: "سورة الانسان ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/076.mp3",
  },
  {
    sura: "77",
    sura_no: "০৭৭",
    sura_name: "আল মুরসালাত",
    para: "29",
    total_ayat: "৫০",
    enbn_name: "Al-Mursalat",
    eng_name: "Those Sent Forth",
    bn_name: "প্রেরিত পুরুষবৃন্দ",
    ar_name: " سورة المرسلات",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/077.mp3",
  },
  {
    sura: "78",
    sura_no: "০৭৮",
    sura_name: "আন-নাবা",
    para: "30",
    total_ayat: "৪০",
    enbn_name: "An-Nabaa",
    eng_name: "The Great News",
    bn_name: "মহাসংবাদ ",
    ar_name: "سورة النبإ ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/078.mp3",
  },
  {
    sura: "79",
    sura_no: "০৭৯",
    sura_name: "আন-নাযি'আত",
    para: "30",
    total_ayat: "৪৬",
    enbn_name: "An-Nazi'at",
    eng_name: "Those Who Tear Out",
    bn_name: "প্রচেষ্টাকারী ",
    ar_name: "سورة النازعات ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/079.mp3",
  },
  {
    sura: "80",
    sura_no: "০৮০",
    sura_name: "আবাসা",
    para: "30",
    total_ayat: "৪২",
    enbn_name: "Abasa",
    eng_name: "He Frowned",
    bn_name: "তিনি ভ্রুকুটি করলেন",
    ar_name: " سورة عبس",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/080.mp3",
  },
  {
    sura: "81",
    sura_no: "০৮১",
    sura_name: "আত-তাকভীর",
    para: "30",
    total_ayat: "২৯",
    enbn_name: "At-Takwir",
    eng_name: "Shrouding in Darkness",
    bn_name: "অন্ধকারাচ্ছন্ন ",
    ar_name: "سورة التكوير ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/081.mp3",
  },
  {
    sura: "82",
    sura_no: "০৮২",
    sura_name: "আল ইনফিতার",
    para: "30",
    total_ayat: "১৯",
    enbn_name: "Al-Infitar",
    eng_name: "The Cleaving Asunder",
    bn_name: "বিদীর্ণ করা",
    ar_name: " سورة الإنفطار",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/082.mp3",
  },
  {
    sura: "83",
    sura_no: "০৮৩",
    sura_name: "আল-মুতাফফিফীন",
    para: "30",
    total_ayat: "৩৬",
    enbn_name: "Al-Mutaffife",
    eng_name: "The Dealers in Fraud",
    bn_name: "প্রতারকগণ ",
    ar_name: " سورة المطففين",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/083.mp3",
  },
  {
    sura: "84",
    sura_no: "০৮৪",
    sura_name: "আল ইনশিক্বাক্ব",
    para: "30",
    total_ayat: "২৫",
    enbn_name: "Al-Inshiqaq",
    eng_name: "The Rending Asunder",
    bn_name: "খন্ড-বিখন্ড করণ",
    ar_name: " سورة الإنشقاق",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/084.mp3",
  },
  {
    sura: "85",
    sura_no: "০৮৫",
    sura_name: "আল বুরূজ",
    para: "30",
    total_ayat: "২২",
    enbn_name: "Al-Buruj",
    eng_name: "The Mansions Of The Stars",
    bn_name: "নক্ষত্রপুঞ্জ ",
    ar_name: " سورة البروج",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/085.mp3",
  },
  {
    sura: "86",
    sura_no: "০৮৬",
    sura_name: "আত্ব-তারিক্ব",
    para: "30",
    total_ayat: "১৭",
    enbn_name: "At-Tariq",
    eng_name: "The Night-Visitant",
    bn_name: "রাতের আগন্তুক",
    ar_name: "سورة الطارق ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/086.mp3",
  },
  {
    sura: "87",
    sura_no: "০৮৭",
    sura_name: "আল আ'লা",
    para: "30",
    total_ayat: "১৯",
    enbn_name: "Al-A'la",
    eng_name: "The Most High",
    bn_name: "সর্বোর্ধ্ব",
    ar_name: "سورة الأعلى ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/087.mp3",
  },
  {
    sura: "88",
    sura_no: "০৮৮",
    sura_name: "আল গাশিয়াহ",
    para: "30",
    total_ayat: "২৬",
    enbn_name: "Al-Gashiya",
    eng_name: "The Overwhelming Event",
    bn_name: "বিহ্বলকর ঘটনা",
    ar_name: "سورة الغاشية ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/088.mp3",
  },
  {
    sura: "89",
    sura_no: "০৮৯",
    sura_name: "আল ফজর",
    para: "30",
    total_ayat: "৩০",
    enbn_name: "Al-Fajr",
    eng_name: "The Break of Day",
    bn_name: "ভোরবেলা ",
    ar_name: "سورة الفجر ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/089.mp3",
  },
  {
    sura: "90",
    sura_no: "০৯০",
    sura_name: "আল বালাদ",
    para: "30",
    total_ayat: "২০",
    enbn_name: "Al-Balad",
    eng_name: "The City, The Land",
    bn_name: "নগর/শহর",
    ar_name: "سورة البلد ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/090.mp3",
  },
  {
    sura: "91",
    sura_no: "০৯১",
    sura_name: "আশ-শামস",
    para: "30",
    total_ayat: "১৫",
    enbn_name: "Ash-Shams",
    eng_name: "The Sun",
    bn_name: "সূর্য্য ",
    ar_name: " سورة الشمس",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/091.mp3",
  },
  {
    sura: "92",
    sura_no: "০৯২",
    sura_name: "আল লায়ল",
    para: "30",
    total_ayat: "২১",
    enbn_name: "Al-Lail",
    eng_name: "The Night",
    bn_name: "রাত্রি ",
    ar_name: " سورة الليل",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/092.mp3",
  },
  {
    sura: "93",
    sura_no: "০৯৩",
    sura_name: "আদ্ব-দ্বোহা",
    para: "30",
    total_ayat: "১১",
    enbn_name: "Adh-Dhuha",
    eng_name: "The Glorious Morning Light",
    bn_name: "পূর্বাহ্নের সূর্যকিরণ ",
    ar_name: "سورة الضحى ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/0093.mp3",
  },
  {
    sura: "94",
    sura_no: "০৯৪",
    sura_name: "আল-ইনশিরাহ ",
    para: "30",
    total_ayat: "৮",
    enbn_name: "Al-Insharh",
    eng_name: "The Opening-Up of the Heart",
    bn_name: "বক্ষ প্রশস্তকরণ",
    ar_name: "سورة الشرح ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/094.mp3",
  },
  {
    sura: "95",
    sura_no: "০৯৫",
    sura_name: "আত-ত্বীন ",
    para: "30",
    total_ayat: "৮",
    enbn_name: "At-Tin",
    eng_name: "The Fig Tree",
    bn_name: "ত্বীন ফল",
    ar_name: "سورة التين ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/095.mp3",
  },
  {
    sura: "96",
    sura_no: "০৯৬",
    sura_name: "আল-আলাক",
    para: "30",
    total_ayat: "১৯",
    enbn_name: "Al-Alaq",
    eng_name: "The Clinging Clot",
    bn_name: "রক্তপিন্ড ",
    ar_name: "سورة العلق ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/096.mp3",
  },
  {
    sura: "97",
    sura_no: "০৯৭",
    sura_name: "আল-কাদর",
    para: "30",
    total_ayat: "৫",
    enbn_name: "Al-Qadr",
    eng_name: "The Night of Honor",
    bn_name: "পরিমাণ ",
    ar_name: " سورة القدر",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/097.mp3",
  },
  {
    sura: "98",
    sura_no: "০৯৮",
    sura_name: "আল-বায়্যিনাহ ",
    para: "30",
    total_ayat: "৮",
    enbn_name: "Al-Baiyina",
    eng_name: "The Clear Evidence",
    bn_name: "সুস্পষ্ট প্রমাণ",
    ar_name: "سورة البينة ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/098.mp3",
  },
  {
    sura: "99",
    sura_no: "০৯৯",
    sura_name: "আয-যিলযাল",
    para: "30",
    total_ayat: "৮",
    enbn_name: "Al-Zalzalah",
    eng_name: "The Earthquake",
    bn_name: "ভূমিকম্প ",
    ar_name: " سورة الزلزلة",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/099mp3",
  },
  {
    sura: "100",
    sura_no: "১০০",
    sura_name: "আল-আদিয়াত",
    para: "30",
    total_ayat: "১১",
    enbn_name: "Al-Adiyat",
    eng_name: "The Courser",
    bn_name: "অভিযানকারী ",
    ar_name: " سورة العاديات",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/100.mp3",
  },
  {
    sura: "101",
    sura_no: "১০১",
    sura_name: "আল-কারি'আ",
    para: "30",
    total_ayat: "১১",
    enbn_name: "Al-Qari'a",
    eng_name: "The Striking Hour",
    bn_name: "মহাসংকট ",
    ar_name: "سورة القارعة ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/101.mp3",
  },
  {
    sura: "102",
    sura_no: "১০২",
    sura_name: "আত-তাকাসুর",
    para: "30",
    total_ayat: "৮",
    enbn_name: "At-Takathur",
    eng_name: "The Piling Up",
    bn_name: "প্রাচুর্য্যের প্রতিযোগিতা",
    ar_name: " سورة التكاثر",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/103.mp3",
  },
  {
    sura: "103",
    sura_no: "১০৩",
    sura_name: "আল-আসর",
    para: "30",
    total_ayat: "৩",
    enbn_name: "Al-Asr",
    eng_name: "The Declining Day",
    bn_name: "অপরাহ্ন ",
    ar_name: " سورة العصر",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/103.mp3",
  },
  {
    sura: "104",
    sura_no: "১০৪",
    sura_name: "আল-হুমাযা",
    para: "30",
    total_ayat: "৯",
    enbn_name: "Al-Humaza",
    eng_name: "The Scandalmonger",
    bn_name: "পরনিন্দাকারী ",
    ar_name: "سورة الهمزة ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/104.mp3",
  },
  {
    sura: "105",
    sura_no: "১০৫",
    sura_name: "আল ফীল",
    para: "30",
    total_ayat: "৫",
    enbn_name: "Al-Fil",
    eng_name: "The Elephant",
    bn_name: "হাতি ",
    ar_name: "سورة الفيل ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/105.mp3",
  },
  {
    sura: "106",
    sura_no: "১০৬",
    sura_name: "আল-কুরাইশ",
    para: "30",
    total_ayat: "৪",
    enbn_name: "Quraish",
    eng_name: " The Quraysh",
    bn_name: "কুরাইশ গোত্র",
    ar_name: "سورة قريش ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/106.mp3",
  },
  {
    sura: "107",
    sura_no: "১০৭",
    sura_name: "আল-মাঊন",
    para: "30",
    total_ayat: "৭",
    enbn_name: "Al-Ma'un",
    eng_name: "The Neighbourly Assistance",
    bn_name: "সাহায্য-সহায়তা",
    ar_name: " سورة الماعون",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/107.mp3",
  },
  {
    sura: "108",
    sura_no: "১০৮",
    sura_name: "আল-কাউসার",
    para: "30",
    total_ayat: "৩",
    enbn_name: "Al-Kauthar",
    eng_name: "Abundance",
    bn_name: "প্রাচুর্য",
    ar_name: "سورة الكوثر ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/108.mp3",
  },
  {
    sura: "109",
    sura_no: "১০৯",
    sura_name: "কাফিরুন",
    para: "30",
    total_ayat: "৬",
    enbn_name: "Al-Kafirun",
    eng_name: "The Disbelievers",
    bn_name: "অস্বীকারকারীগণ ",
    ar_name: "سورة الكافرون ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/109.mp3",
  },
  {
    sura: "110",
    sura_no: "১১০",
    sura_name: "আন নাসর",
    para: "30",
    total_ayat: "৩",
    enbn_name: "An-Nasr",
    eng_name: "The Help, Divine Support",
    bn_name: "বিজয়,সাহায্য",
    ar_name: "سورة النصر ",
    type: "মাদানী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/110.mp3",
  },
  {
    sura: "111",
    sura_no: "১১১",
    sura_name: "আল-মাসাদ (লাহাব)",
    para: "30",
    total_ayat: "৫",
    enbn_name: "Al- Masad ",
    eng_name: "The Plaited Rope",
    bn_name: "জ্বলন্ত অঙ্গার",
    ar_name: " سورة المسد",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/111.mp3",
  },
  {
    sura: "112",
    sura_no: "১১২",
    sura_name: "আল ইখলাস",
    para: "30",
    total_ayat: "৪",
    enbn_name: "Al-Ikhlas",
    eng_name: "Purity of Faith",
    bn_name: "একনিষ্ঠতা ",
    ar_name: "سورة الإخلاص ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/112.mp3",
  },
  {
    sura: "113",
    sura_no: "১১৩",
    sura_name: "আল ফালাক্ব",
    para: "30",
    total_ayat: "৫",
    enbn_name: "Al-Falaq",
    eng_name: "The Daybreak",
    bn_name: "নিশিভোর ",
    ar_name: " سورة الفلق",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/113.mp3",
  },
  {
    sura: "114",
    sura_no: "১১৪",
    sura_name: "আন নাস",
    para: "30",
    total_ayat: "৬",
    enbn_name: "Al-Nas",
    eng_name: "Mankind, Men",
    bn_name: "মানবজাতি ",
    ar_name: "سورة الناس ",
    type: "মাক্কী",
    ruku: "",
    audio: "http://download.quranicaudio.com/quran/abdullaah_basfar/114.mp3",
  },
];

export default SURAH;