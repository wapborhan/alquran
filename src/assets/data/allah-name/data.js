const ALLAH_NAMES = [
  {
    fojilot: "প্রত্যহ ১০০০ বার এই নামের যিকির করলে ঈমান দৃঢ় ও মযবুত হয়।  ",
    id: "1",
    meaning_bn: "আল্লাহ",
    name_ar: "الله",
    name_bn: "আল্লাহ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_01_allah.mp3",
  },
  {
    fojilot:
      "প্রত্যেক নামাযের পর ১০০ বার পড়লে, ইনশাআল্লাহ্‌ তার অন্তর থেকে সব ধরনের কঠোরতা ও অলসতা দূর হয়ে যাবে।  ",
    id: "2",
    meaning_bn: "পরম দয়ালু",
    name_ar: "الرحمن",
    name_bn: "আর রাহমান",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_02_ar_rahman.mp3",
  },
  {
    fojilot:
      "প্রত্যেক নামাযের পর ১০০ বার করে পাঠ করলে, ইনশাআল্লাহ্‌ পৃথিবীর সকল বিপদ আপদ থেকে নিরাপদ থাকবে।",
    id: "3",
    meaning_bn: "অতিশয়-মেহেরবান",
    name_ar: "الرحيم",
    name_bn: "আর-রহী'ম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_03_ar_rahim.mp3",
  },
  {
    fojilot:
      "ফযরের নামাজের পর অধিকহারে পাঠ করবে, আল্লাহ্‌ তায়ালা তাকে ধনবান করে দিবেন। ",
    id: "4",
    meaning_bn: "সর্বকর্তৃত্বময়",
    name_ar: "الملك",
    name_bn: "আল-মালিক",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_04_al_malik.mp3",
  },
  {
    fojilot:
      "প্রত্যহ শেষ রাতে (উয়া কুদ্দূসু) নামুটি ১০০০ বার পড়লে রোগ ব্যধি থেকে মুক্ত থাকা যায়।  ",
    id: "5",
    meaning_bn: "নিষ্কলুষ, অতি পবিত্র",
    name_ar: "القدوس",
    name_bn: "আল-কুদ্দুস",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_05_al_kuddsh.mp3",
  },
  {
    fojilot:
      "এই নামটি ১১৫ বার কোন রুগির উপর পরে ফু দিবে, তাহলে আল্লাহ তায়ালা তাকে সুস্থতা ও আরোগ্য দান করবেন।  ",
    id: "6",
    meaning_bn: "নিরাপত্তা-দানকারী, শান্তি-দানকারী",
    name_ar: "السلام",
    name_bn: "আস-সালাম",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_06_as_salam.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি কোন ভয়-ভীতির সময় ৬৩০ বার এ নামটি পাঠ করবে, ইনশাআল্লাহ্‌ সে সব ধরনের ভয়-ভীতি ও অনিষ্ঠ থেকে নিরাপদ থাকবে। যে ব্যক্তি এ নামটি পাঠ করবে বা লিখে নিজের সাথে রাখবে, আল্লাহ্‌ তায়ালা তাকে শয়তানের অন",
    id: "7",
    meaning_bn: "নিরাপত্তা ও ঈমান দানকারী",
    name_ar: "المؤمن",
    name_bn: "আল-মু'মিন",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_07_al_mu_min.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি গোসল করে ১১৫ বার এ নামটি পরবে, গোপন বিষয়াদি উপর অবগত হবে। সর্বদা পরলে সব বিপদ থেকে মুক্তি পাবে। ",
    id: "8",
    meaning_bn: "পরিপূর্ন রক্ষণাবেক্ষণকারী",
    name_ar: "المهيمن",
    name_bn: "আল-মুহাইমিন",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_08_al_muhaymin.mp3",
  },
  {
    fojilot:
      "৪০ দিন পর্যন্ত যে ব্যক্তি এ নামটি ৪০ বার পাঠ করবে, আল্লাহ তাকে সম্মানী ও অমুখাপেক্ষী বানিয়ে দিবেন। ",
    id: "9",
    meaning_bn: "পরাক্রমশালী, অপরাজেয়",
    name_ar: "العزيز",
    name_bn: "আল-আ'জীজ",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_09_al_aziz.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি প্রতি দিন সকাল-বিকাল ২২৬ বার পড়লে যাবতীয় জুলুম থেকে মুক্তিপাবে।  ",
    id: "10",
    meaning_bn: "দুর্নিবার",
    name_ar: "الجبار",
    name_bn: "আল-জাব্বার",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_10_al_jabbar.mp3",
  },
  {
    fojilot: "এই নাম সর্বদা পড়লে মান সম্মান বৃদ্ধি পায় ও উন্নতি লাভ হয়।  ",
    id: "11",
    meaning_bn: "নিরঙ্কুশ শ্রেষ্ঠত্বের অধিকারী",
    name_ar: "المتكبر",
    name_bn: "আল-মুতাকাব্বিইর",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_11_al_mutakabbir.mp3",
  },
  {
    fojilot:
      "যে ব্যক্তি সাত দিন পর্যন্ত ধারাবাহিক ১০০ বার এ নামটি পাঠ করবে, ইনশাআল্লাহ্‌ সকল বিপদআপদ থেকে নিরাপদ থাকবে। ",
    id: "12",
    meaning_bn: "সৃষ্টিকর্তা",
    name_ar: "الخالق",
    name_bn: "আল-খালিক্ব",
    path: "https://ninety-nine-names-of-allah.sgp1.cdn.digitaloceanspaces.com/a_12_al_khalik.mp3",
  },
];

export default ALLAH_NAMES;
