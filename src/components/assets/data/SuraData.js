const SURAH = [
  {
    sura: "1",
    sura_no: "001",
    sura_name: "আল ফাতিহা",
    para: "1",
    total_ayat: "৭",
    enbn_name: "Al-Fatihah",
    eng_name: "The Opening",
    ar_name: "سورة الفاتحة",
    type: "মাক্কী",
  },
  {
    sura: "2",
    sura_no: "002",
    sura_name: "আল বাকারা",
    para: "1",
    total_ayat: "২৮৬",
    enbn_name: "Al-Baqara",
    eng_name: "The Calf",
    ar_name: "سورة البقرة",
    type: "মাদানী",
  },
  {
    sura: "3",
    sura_no: "003",
    sura_name: "আল ইমরান",
    para: "3",
    total_ayat: "২০০",
    enbn_name: "Al-i'Imran",
    eng_name: "The Family of Imraan",
    ar_name: "سورة آل عمران",
    type: "মাদানী",
  },
  {
    sura: "4",
    sura_no: "004",
    sura_name: "আন নিসা",
    para: "4",
    total_ayat: "১৭৬",
    enbn_name: "An-Nisaa",
    eng_name: "The Women",
    ar_name: "سورة النساء",
    type: "মাদানী",
  },
  {
    sura: "5",
    sura_no: "005",
    sura_name: "আল মায়েদা",
    para: "6",
    total_ayat: "১২০",
    enbn_name: "Al-Maidah",
    eng_name: "The Food,",
    ar_name: "سورة المائدة",
    type: "মাদানী",
  },
  {
    sura: "6",
    sura_no: "006",
    sura_name: "আল আন'আম",
    para: "7",
    total_ayat: "১৬৫",
    enbn_name: "Al-An'am",
    eng_name: "The Cattle",
    ar_name: "سورة الأنعام",
    type: "মাক্কী",
  },
  {
    sura: "7",
    sura_no: "007",
    sura_name: "আল আ'রাফ",
    para: "8",
    total_ayat: "২০৬",
    enbn_name: "Al-A'raf",
    eng_name: "The Heights",
    ar_name: "سورة الأعراف",
    type: "মাক্কী",
  },
  {
    sura: "8",
    sura_no: "008",
    sura_name: "আল-আনফাল",
    para: "9",
    total_ayat: "৭৫",
    enbn_name: "Al-Anfal",
    eng_name: "The Spoils of War",
    ar_name: "سورة الأنفال",
    type: "মাদানী",
  },
  {
    sura: "9",
    sura_no: "009",
    sura_name: "আত তাওবাহ",
    para: "10",
    total_ayat: "১২৯",
    enbn_name: "At-Taubah",
    eng_name: "The Repentance",
    ar_name: "سورة التوبة",
    type: "মাদানী",
  },
  {
    sura: "10",
    sura_no: "010",
    sura_name: "ইউনুস",
    para: "11",
    total_ayat: "১০৯",
    enbn_name: "Yunus",
    eng_name: "Prophet Yunus",
    ar_name: "سورة يونس",
    type: "মাক্কী",
  },
  {
    sura: "11",
    sura_no: "011",
    sura_name: "হুদ",
    para: "12",
    total_ayat: "১২৩",
    enbn_name: "Hud",
    eng_name: "Prophet Hud",
    ar_name: "سورة هود",
    type: "মাক্কী",
  },
  {
    sura: "12",
    sura_no: "012",
    sura_name: "ইউসূফ",
    para: "12",
    total_ayat: "১১১",
    enbn_name: "Yusuf",
    eng_name: "Prophet Yusuf",
    ar_name: "سورة يوسف",
    type: "মাক্কী",
  },
  {
    sura: "13",
    sura_no: "013",
    sura_name: "আর-রাদ",
    para: "13",
    total_ayat: "৪৩",
    enbn_name: "Ar-Ra'd",
    eng_name: "The Thunder",
    ar_name: " سورة الرعد",
    type: "মাদানী",
  },
  {
    sura: "14",
    sura_no: "014",
    sura_name: "ইব্রাহীম",
    para: "13",
    total_ayat: "৫২",
    enbn_name: "Ibrahim",
    eng_name: "Prophet Ibrahim",
    ar_name: "سورة ابراهيم ",
    type: "মাক্কী",
  },
  {
    sura: "15",
    sura_no: "015",
    sura_name: "হিজর",
    para: "13",
    total_ayat: "৯৯",
    enbn_name: "Al-Hijr",
    eng_name: "The Rocky Tract,",
    ar_name: "سورة الحجر",
    type: "মাক্কী",
  },
  {
    sura: "16",
    sura_no: "016",
    sura_name: "আন-নাহাল",
    para: "14",
    total_ayat: "১২৮",
    enbn_name: "An-Nahl",
    eng_name: "The Honey Bees",
    ar_name: " سورة النحل",
    type: "মাক্কী",
  },
  {
    sura: "17",
    sura_no: "017",
    sura_name: "আল-ইসরা (বনী-ইসরাঈল)",
    para: "15",
    total_ayat: "১১১",
    enbn_name: "Al-Isra",
    eng_name: "The Night Journey",
    ar_name: " سورة الإسراء",
    type: "মাক্কী",
  },
  {
    sura: "18",
    sura_no: "018",
    sura_name: "আল-কাহফ",
    para: "15",
    total_ayat: "১১০",
    enbn_name: "Al-Kahf",
    eng_name: "The Cave",
    ar_name: " سورة الكهف",
    type: "মাক্কী",
  },
  {
    sura: "19",
    sura_no: "019",
    sura_name: "মারইয়াম",
    para: "16",
    total_ayat: "৯৮",
    enbn_name: "Maryam",
    eng_name: "Maryam (Mother of Prophet Isa)",
    ar_name: " سورة مريم",
    type: "মাক্কী",
  },
  {
    sura: "20",
    sura_no: "020",
    sura_name: "ত্ব-হা",
    para: "16",
    total_ayat: "১৩৫",
    enbn_name: "Ta-ha",
    eng_name: "Ṭāʾ Hāʾ",
    ar_name: " سورة طه",
    type: "মাক্কী",
  },
  {
    sura: "21",
    sura_no: "021",
    sura_name: "আল-আম্বিয়া",
    para: "17",
    total_ayat: "১১২",
    enbn_name: "Al-Anbiyaa",
    eng_name: "The Prophets",
    ar_name: "سورة الأنبياء ",
    type: "মাক্কী",
  },
  {
    sura: "22",
    sura_no: "022",
    sura_name: "আল-হজ্জ",
    para: "17",
    total_ayat: "৭৮",
    enbn_name: "Al-Hajj",
    eng_name: "The Hajj",
    ar_name: "سورة الحج ",
    type: "মাদানী",
  },
  {
    sura: "23",
    sura_no: "023",
    sura_name: "আল মু'মিনূন",
    para: "18",
    total_ayat: "১১৮",
    enbn_name: "Al-Mu'minun",
    eng_name: "The Believers",
    ar_name: "سورة المؤمنون ",
    type: "মাক্কী",
  },

  {
    sura: "24",
    sura_no: "024",
    sura_name: "আন-নূর",
    para: "18",
    total_ayat: "৬৪",
    enbn_name: "An-Nur",
    eng_name: "The Light",
    ar_name: "سورة النور ",
    type: "মাদানী",
  },
  {
    sura: "25",
    sura_no: "025",
    sura_name: "আল-ফুরকান",
    para: "18",
    total_ayat: "৭৭",
    enbn_name: "Al-Furqan",
    eng_name: "The Criterion",
    ar_name: " سورة الفرقان",
    type: "মাক্কী",
  },
  {
    sura: "26",
    sura_no: "026",
    sura_name: "আশ-শুআ'রা",
    para: "19",
    total_ayat: "২২৭",
    enbn_name: "Ash-Shu'araa",
    eng_name: "The Poets",
    ar_name: "سورة الشعراء ",
    type: " মাক্কী	",
  },
  {
    sura: "27",
    sura_no: "027",
    sura_name: "আন-নামাল",
    para: "19",
    total_ayat: "৯৩",
    enbn_name: "An-Naml",
    eng_name: "The Ant",
    ar_name: " سورة النمل",
    type: "মাক্কী",
  },
  {
    sura: "28",
    sura_no: "028",
    sura_name: "আল কাসাস",
    para: "20",
    total_ayat: "৮৮",
    enbn_name: "Al-Qasas",
    eng_name: "The Stories",
    ar_name: "سورة القصص ",
    type: "মাক্কী",
  },
  {
    sura: "29",
    sura_no: "029",
    sura_name: "আল আনকাবূত",
    para: "20",
    total_ayat: "৬৯",
    enbn_name: "Al-Ankabut",
    eng_name: "",
    ar_name: "سورة العنكبوت ",
    type: "মাক্কী",
  },
  {
    sura: "30",
    sura_no: "030",
    sura_name: "আর-রূম",
    para: "21",
    total_ayat: "৬০",
    enbn_name: "Ar-Rum",
    eng_name: "Rome",
    ar_name: " سورة الروم",
    type: "মাক্কী",
  },
  {
    sura: "31",
    sura_no: "031",
    sura_name: "লুকমান",
    para: "21",
    total_ayat: "৩৪",
    enbn_name: "Luqman",
    eng_name: "Luqman",
    ar_name: " سورة لقمان",
    type: "মাক্কী",
  },
  {
    sura: "32",
    sura_no: "032",
    sura_name: "আস-সাজদাহ",
    para: "21",
    total_ayat: "৩০",
    enbn_name: "As-Sajda",
    eng_name: "Worship",
    ar_name: "سورة السجدة ",
    type: "মাক্কী",
  },
  {
    sura: "33",
    sura_no: "033",
    sura_name: "আল আহযাব",
    para: "21",
    total_ayat: "৭৩",
    enbn_name: "Al-Ahzab",
    eng_name: "The Clans",
    ar_name: "سورة الأحزاب ",
    type: "মাদানী",
  },
  {
    sura: "34",
    sura_no: "034",
    sura_name: "সাবা",
    para: "22",
    total_ayat: "54",
    enbn_name: "Saba",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "35",
    sura_no: "035",
    sura_name: "ফাতির",
    para: "22",
    total_ayat: "45",
    enbn_name: "Fatir",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "36",
    sura_no: "036",
    sura_name: "ইয়াসীন",
    para: "22",
    total_ayat: "83",
    enbn_name: "Ya-Sin",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "37",
    sura_no: "037",
    sura_name: "আস-সাফফাত",
    para: "23",
    total_ayat: "182",
    enbn_name: "As-Saffat",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "38",
    sura_no: "038",
    sura_name: "ছোয়াদ",
    para: "23",
    total_ayat: "88",
    enbn_name: "Sad",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "39",
    sura_no: "039",
    sura_name: "আল-যুমার",
    para: "23",
    total_ayat: "75",
    enbn_name: "Az-Zumar",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "40",
    sura_no: "040",
    sura_name: "আল-মু'মিন",
    para: "24",
    total_ayat: "85",
    enbn_name: "Al-Mu'min",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "041",
    sura_name: "হা-মীম সেজদাহ",
    para: "24",
    total_ayat: "54",
    enbn_name: "Ha-Mim",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "042",
    sura_name: "আশ-শুরা",
    para: "25",
    total_ayat: "53",
    enbn_name: "Ash-Shura",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "043",
    sura_name: "যুখরুফ",
    para: "25",
    total_ayat: "89",
    enbn_name: "Az-Zukhruf",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "044",
    sura_name: "আদ দোখান",
    para: "25",
    total_ayat: "59",
    enbn_name: "Ad-Dukhan",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "045",
    sura_name: "আল জাসিয়া",
    para: "25",
    total_ayat: "37",
    enbn_name: "Al-Jathiya",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "046",
    sura_name: "আল আহক্বাফ",
    para: "26",
    total_ayat: "35",
    enbn_name: "Al-Ahqaf",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "047",
    sura_name: "মুহাম্মদ",
    para: "26",
    total_ayat: "38",
    enbn_name: "Muhammad",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "048",
    sura_name: "আল ফাতহ",
    para: "26",
    total_ayat: "29",
    enbn_name: "Al-Fat-h",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "049",
    sura_name: "আল হুজরাত",
    para: "26",
    total_ayat: "18",
    enbn_name: "Al-Hujurat",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "050",
    sura_name: "ক্বাফ",
    para: "26",
    total_ayat: "45",
    enbn_name: "Qaf",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "051",
    sura_name: "আয-যারিয়াত",
    para: "26",
    total_ayat: "60",
    enbn_name: "Az-Zariyat",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "052",
    sura_name: "আত্ব তূর",
    para: "27",
    total_ayat: "49",
    enbn_name: "At-Tur",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "053",
    sura_name: "আন-নাজম",
    para: "27",
    total_ayat: "62",
    enbn_name: "An-Najm",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "054",
    sura_name: "আল ক্বামার",
    para: "27",
    total_ayat: "55",
    enbn_name: "Al-Qamar",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "055",
    sura_name: "আর রহমান",
    para: "27",
    total_ayat: "78",
    enbn_name: "Ar-Rahman",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "056",
    sura_name: "আল ওয়াক্বিয়া",
    para: "27",
    total_ayat: "96",
    enbn_name: "Al-Waqi'a",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "057",
    sura_name: "আল হাদীদ",
    para: "27",
    total_ayat: "29",
    enbn_name: "Al-Hadid",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "058",
    sura_name: "আল মুজাদালাহ",
    para: "28",
    total_ayat: "22",
    enbn_name: "Al-Mujadila",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "059",
    sura_name: "আল হাশর",
    para: "28",
    total_ayat: "24",
    enbn_name: "Al-Hashr",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "060",
    sura_name: "আল মুমতাহিনা",
    para: "28",
    total_ayat: "13",
    enbn_name: "Al-Mumtahana",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "061",
    sura_name: "আছ-ছফ",
    para: "28",
    total_ayat: "14",
    enbn_name: "As-Saff",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "062",
    sura_name: "আল জুমুআহ",
    para: "28",
    total_ayat: "11",
    enbn_name: "Al-Jumu'a",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "063",
    sura_name: "মুনাফিকুন",
    para: "28",
    total_ayat: "11",
    enbn_name: "Al-Munafiqun",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "064",
    sura_name: "আত-তাগাবুন",
    para: "28",
    total_ayat: "18",
    enbn_name: "At-Tagabun",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "065",
    sura_name: "আত্ব-ত্বালাক্ব",
    para: "28",
    total_ayat: "12",
    enbn_name: "At-Talaq",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "066",
    sura_name: "আত-তাহরীম",
    para: "28",
    total_ayat: "12",
    enbn_name: "At-Tahrim",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "067",
    sura_name: "আল মুলক",
    para: "29",
    total_ayat: "30",
    enbn_name: "Al-Mulk",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "068",
    sura_name: "আল কলম",
    para: "29",
    total_ayat: "52",
    enbn_name: "Al-Qalam",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "069",
    sura_name: "আল হাক্বক্বাহ",
    para: "29",
    total_ayat: "52",
    enbn_name: "Al-Haqqa",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "070",
    sura_name: "আল মা'আরিজ",
    para: "29",
    total_ayat: "44",
    enbn_name: "Al-Ma'arij",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "071",
    sura_name: "নূহ",
    para: "29",
    total_ayat: "28",
    enbn_name: "Nuh",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "072",
    sura_name: "আল জিন",
    para: "29",
    total_ayat: "28",
    enbn_name: "Al-Jinn",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "073",
    sura_name: "মুযযামমিল",
    para: "29",
    total_ayat: "20",
    enbn_name: "Al-Muzzammil",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "074",
    sura_name: "আল মুদ্দাসসির",
    para: "29",
    total_ayat: "56",
    enbn_name: "Al-Muddathth",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "075",
    sura_name: "আল ক্বেয়ামাহ",
    para: "29",
    total_ayat: "40",
    enbn_name: "Al-Qiyamat",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "076",
    sura_name: "আদ-দাহর",
    para: "29",
    total_ayat: "31",
    enbn_name: "Ad-Dahr",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "077",
    sura_name: "আল মুরসালাত",
    para: "29",
    total_ayat: "50",
    enbn_name: "Al-Mursalat",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "078",
    sura_name: "আন-নাবা",
    para: "30",
    total_ayat: "40",
    enbn_name: "An-Nabaa",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "079",
    sura_name: "আন-নযিআ'ত",
    para: "30",
    total_ayat: "46",
    enbn_name: "An-Nazi'at",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "080",
    sura_name: "আবাসা",
    para: "30",
    total_ayat: "42",
    enbn_name: "Abasa",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "081",
    sura_name: "আত-তাকভীর",
    para: "30",
    total_ayat: "29",
    enbn_name: "At-Takwir",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "082",
    sura_name: "আল ইনফিতার",
    para: "30",
    total_ayat: "19",
    enbn_name: "Al-Infitar",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "083",
    sura_name: "আত-তাতফীফ",
    para: "30",
    total_ayat: "36",
    enbn_name: "Al-Mutaffife",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "084",
    sura_name: "আল ইনশিক্বাক্ব",
    para: "30",
    total_ayat: "25",
    enbn_name: "Al-Inshiqaq",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "085",
    sura_name: "আল বুরূজ",
    para: "30",
    total_ayat: "22",
    enbn_name: "Al-Buruj",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "086",
    sura_name: "আত্ব-তারিক্ব",
    para: "30",
    total_ayat: "17",
    enbn_name: "At-Tariq",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "087",
    sura_name: "আল আ'লা",
    para: "30",
    total_ayat: "19",
    enbn_name: "Al-A'la",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "088",
    sura_name: "আল গাশিয়াহ",
    para: "30",
    total_ayat: "26",
    enbn_name: "Al-Gashiya",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "089",
    sura_name: "আল ফজর",
    para: "30",
    total_ayat: "30",
    enbn_name: "Al-Fajr",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "090",
    sura_name: "আল বালাদ",
    para: "30",
    total_ayat: "20",
    enbn_name: "Al-Balad",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "091",
    sura_name: "আশ-শামস",
    para: "30",
    total_ayat: "15",
    enbn_name: "Ash-Shams",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "092",
    sura_name: "আল লায়ল",
    para: "30",
    total_ayat: "21",
    enbn_name: "Al-Lail",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "093",
    sura_name: "আদ্ব-দ্বোহা",
    para: "30",
    total_ayat: "11",
    enbn_name: "Adh-Dhuha",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "094",
    sura_name: "ইনশিরাহ",
    para: "30",
    total_ayat: "8",
    enbn_name: "Al-Insharh",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "095",
    sura_name: "ত্বীন",
    para: "30",
    total_ayat: "8",
    enbn_name: "At-Tin",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "096",
    sura_name: "আলাক",
    para: "30",
    total_ayat: "19",
    enbn_name: "Al-Alaq",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "097",
    sura_name: "কদর",
    para: "30",
    total_ayat: "5",
    enbn_name: "Al-Qadr",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "098",
    sura_name: "বাইয়্যিনাহ",
    para: "30",
    total_ayat: "8",
    enbn_name: "Al-Baiyina",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "099",
    sura_name: "যিলযাল",
    para: "30",
    total_ayat: "8",
    enbn_name: "Al-Zalzalah",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "100",
    sura_name: "আদিয়াত",
    para: "30",
    total_ayat: "11",
    enbn_name: "Al-Adiyat",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "101",
    sura_name: "কারেয়া",
    para: "30",
    total_ayat: "11",
    enbn_name: "Al-Qari'a",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "102",
    sura_name: "তাকাসূর",
    para: "30",
    total_ayat: "8",
    enbn_name: "At-Takathur",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "103",
    sura_name: "আসর",
    para: "30",
    total_ayat: "3",
    enbn_name: "Al-Asr",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "104",
    sura_name: "হুমাযাহ",
    para: "30",
    total_ayat: "9",
    enbn_name: "Al-Humaza",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "105",
    sura_name: "আল ফীল",
    para: "30",
    total_ayat: "5",
    enbn_name: "Al-Fil",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "106",
    sura_name: "কুরাইশ",
    para: "30",
    total_ayat: "4",
    enbn_name: "Quraish",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "107",
    sura_name: "মাঊন",
    para: "30",
    total_ayat: "7",
    enbn_name: "Al-Ma'un",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "108",
    sura_name: "কাওসার",
    para: "30",
    total_ayat: "3",
    enbn_name: "Al-Kauthar",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "109",
    sura_name: "কাফিরুন",
    para: "30",
    total_ayat: "6",
    enbn_name: "Al-Kafirun",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "110",
    sura_name: "আন নাসর",
    para: "30",
    total_ayat: "3",
    enbn_name: "An-Nasr",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "111",
    sura_name: "লাহাব",
    para: "30",
    total_ayat: "5",
    enbn_name: "Lahab",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "112",
    sura_name: "আল ইখলাস",
    para: "30",
    total_ayat: "4",
    enbn_name: "Al-Ikhlas",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "113",
    sura_name: "আল ফালাক্ব",
    para: "30",
    total_ayat: "5",
    enbn_name: "Al-Falaq",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
  {
    sura: "",
    sura_no: "114",
    sura_name: "আন নাস",
    para: "30",
    total_ayat: "6",
    enbn_name: "Al-Nas",
    eng_name: "",
    ar_name: " ",
    type: "",
  },
];

export default SURAH;