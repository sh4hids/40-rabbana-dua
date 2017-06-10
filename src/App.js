import React, { Component } from 'react';
import Dua from './Components/Dua';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      duas: []
    }
  }

  componentWillMount(){
    this.setState({
      duas: [
        {
          id: "002127",
          ar: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ العَلِيمُ",
          bn: "হে আমাদের রব, আমাদের পক্ষ থেকে কবূল করুন। নিশ্চয় আপনি সর্বশ্রোতা, সর্বজ্ঞানী।",
          qref: "আল-বাক্বারাহ : ১২৭",
          aFile: "mp3/002127.mp3"
        },
        {
          id: "002128",
          ar: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
          bn: "হে আমাদের রব, আমাদেরকে আপনার অনুগত করুন এবং আমাদের বংশধরের মধ্য থেকে আপনার অনুগত জাতি বানান। আর আমাদেরকে আমাদের ইবাদাতের বিধি-বিধান দেখিয়ে দিন এবং আমাদেরকে ক্ষমা করুন। নিশ্চয় আপনি ক্ষমাশীল, পরম দয়ালু।",
          qref: "আল-বাক্বারাহ : ১২৮",
          aFile: "mp3/002128.mp3"
        },
        {
          id: "002201",
          ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
          bn: "হে আমাদের রব, আমাদেরকে দুনিয়াতে কল্যাণ দিন। আর আখিরাতেও কল্যাণ দিন এবং আমাদেরকে আগুনের আযাব থেকে রক্ষা করুন।",
          qref: "আল-বাক্বারাহ : ২০১",
          aFile: "mp3/002201.mp3"
        },
        {
          id: "002250",
          ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْراً وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى القَوْمِ الكَافِرِينَ",
          bn: "হে আমাদের রব, আমাদের উপর ধৈর্য ঢেলে দিন, আমাদের পা স্থির রাখুন এবং আমাদেরকে কাফের জাতির বিরুদ্ধে সাহায্য করুন।",
          qref: "আল-বাক্বারাহ : ২৫০",
          aFile: "mp3/002250.mp3"
        },
        {
          id: "002286A",
          ar: "رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
          bn: "হে আমাদের রব! যদি আমরা ভুলে যাই কিংবা ভুল করি, তবে আমাদেরকে অপরাধী করো না।",
          qref: "আল-বাক্বারাহ : ২৮৬",
          aFile: "mp3/002286A.mp3"
        },
        {
          id: "002286B",
          ar: "رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا",
          bn: "হে আমাদের পালনকর্তা! এবং আমাদের উপর এমন দায়িত্ব অর্পণ করো না, যেমন আমাদের পূর্ববর্তীদের উপর অর্পণ করেছ।",
          qref: "আল-বাক্বারাহ : ২৮৬",
          aFile: "mp3/002286B.mp3"
        },
        {
          id: "002286C",
          ar: "رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
          bn: "হে আমাদের প্রভূ! এবং আমাদের দ্বারা ঐ বোঝা বহন করিও না, যা বহন করার শক্তি আমাদের নাই। আমাদের পাপ মোচন কর। আমাদেরকে ক্ষমা কর এবং আমাদের প্রতি দয়া কর। তুমিই আমাদের প্রভু। সুতরাং কাফের সম্প্রদায়ের বিরুদ্ধে আমাদের কে সাহায্যে কর।",
          qref: "আল-বাক্বারাহ : ২৮৬",
          aFile: "mp3/002286B.mp3"
        },
        {
          id: "003008",
          ar: "رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
          bn: "হে আমাদের রব, আপনি হিদায়াত দেয়ার পর আমাদের অন্তরসমূহ বক্র করবেন না এবং আপনার পক্ষ থেকে আমাদেরকে রহমত দান করুন। নিশ্চয় আপনি মহাদাতা।",
          qref: "আল-ইমরান : ৮",
          aFile: "mp3/003008.mp3"
        },
        {
          id: "003009",
          ar: "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لاَّ رَيْبَ فِيهِ إِنَّ اللّهَ لاَ يُخْلِفُ الْمِيعَادَ",
          bn: "হে আমাদের রব, নিশ্চয় আপনি মানুষকে সমবেত করবেন এমন একদিন, যাতে কোন সন্দেহ নেই। নিশ্চয় আল্লাহ প্রতিশ্রুতি ভঙ্গ করেন না।",
          qref: "আল-ইমরান : ৯",
          aFile: "mp3/003009.mp3"
        },
        {
          id: "003016",
          ar: "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
          bn: "হে আমাদের রব, নিশ্চয় আমরা ঈমান আনলাম। অতএব, আমাদের পাপসমূহ ক্ষমা করুন এবং আমাদেরকে আগুনের আযাব থেকে রক্ষা করুন।",
          qref: "আল-ইমরান : ১৬",
          aFile: "mp3/003016.mp3"
        },
        {
          id: "",
          ar: "رَبَّنَآ ءَامَنَّا بِمَآ أَنزَلْتَ وَٱتَّبَعْنَا ٱلرَّسُولَ فَٱكْتُبْنَا مَعَ ٱلشَّٰهِدِينَ",
          bn: "হে আমাদের রব, আপনি যা নাযিল করেছেন তার প্রতি আমরা ঈমান এনেছি এবং আমরা রাসূলের অনুসরণ করেছি। অতএব, আমাদেরকে সাক্ষ্যদাতাদের তালিকাভুক্ত করুন।",
          qref: "আল-ইমরান : ৫৩",
          aFile: "mp3/003053.mp3"
        },
        {
          id: "003147",
          ar: "ربَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَِ",
          bn: "হে আমাদের রব, আমাদের পাপ ও আমাদের কর্মে আমাদের সীমালঙ্ঘন ক্ষমা করুন এবং অবিচল রাখুন আমাদের পা সমূহকে, আর কাফির কওমের উপর আমাদেরকে সাহায্য করুন।",
          qref: "আল-ইমরান : ১৪৭",
          aFile: "mp3/003147.mp3"
        },
        {
          id: "003191",
          ar: "رَبَّنَا مَا خَلَقْتَ هَذا بَاطِلاً سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ",
          bn: "হে আমাদের রব, তুমি এসব অনর্থক সৃষ্টি করনি। তুমি পবিত্র মহান। সুতরাং তুমি আমাদেরকে আগুনের আযাব থেকে রক্ষা কর।",
          qref: "আল-ইমরান : ১৯১",
          aFile: "mp3/003191.mp3"
        },
        {
          id: "003192",
          ar: "رَبَّنَا إِنَّكَ مَن تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ",
          bn: "হে আমাদের রব, নিশ্চয় তুমি যাকে আগুনে প্রবেশ করাবে, অবশ্যই তাকে তুমি অপমান করবে। আর যালিমদের জন্য কোন সাহায্যকারী নেই।",
          qref: "আল-ইমরান : ১৯২",
          aFile: "mp3/003192.mp3"
        },
        {
          id: "003193A",
          ar: "رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلإِيمَانِ أَنْ آمِنُواْ بِرَبِّكُمْ فَآمَنَّا",
          bn: "হে আমাদের রব, নিশ্চয় আমরা শুনেছিলাম একজন আহ্বানকারীকে, যে ঈমানের দিকে আহবান করে যে, ‘তোমরা তোমাদের রবের প্রতি ঈমান আন। তাই আমরা ঈমান এনেছি।",
          qref: "আল-ইমরান : ১৯৩",
          aFile: "mp3/003193A.mp3"
        },
        {
          id: "003193B",
          ar: "رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأبْرَارِ",
          bn: "হে আমাদের রব আমাদের গুনাহসমূহ ক্ষমা করুন এবং বিদূরিত করুন আমাদের ত্রুটি-বিচ্যুতি, আর আমাদেরকে মৃত্যু দিন নেককারদের সাথে।",
          qref: "আল-ইমরান : ১৯৩",
          aFile: "mp3/003193B.mp3"
        },
        {
          id: "003194",
          ar: "رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَاد",
          bn: "হে আমাদের রব, আর আপনি আমাদেরকে তা প্রদান করুন যার ওয়াদা আপনি আমাদেরকে দিয়েছেন আপনার রাসূলগণের মাধ্যমে। আর কিয়ামতের দিনে আপনি আমাদেরকে অপমান করবেন না। নিশ্চয় আপনি অঙ্গীকার ভঙ্গ করেন না।",
          qref: "আল-ইমরান : ১৯৪",
          aFile: "mp3/003194.mp3"
        },
        {
          id: "005083",
          ar: "رَبَّنَا آمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
          bn: "হে আমাদের রব, আমরা ঈমান এনেছি। সুতরাং আপনি আমাদেরকে সাক্ষ্য দানকারীদের সঙ্গে লিপিবদ্ধ করুন।",
          qref: "আল-মায়িদা : ৮৩",
          aFile: "mp3/005083.mp3"
        },
        {
          id: "005114",
          ar: "رَبَّنَا أَنزِلْ عَلَيْنَا مَآئِدَةً مِّنَ السَّمَاء تَكُونُ لَنَا عِيداً لِّأَوَّلِنَا وَآخِرِنَا وَآيَةً مِّنكَ وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ",
          bn: "হে আল্লাহ, হে আমাদের রব, আসমান থেকে আমাদের প্রতি খাবারপূর্ণ দস্তরখান নাযিল করুন; এটা আমাদের জন্য ঈদ হবে। আমাদের পূর্ববর্তী ও পরবর্তীদের জন্য। আর আপনার পক্ষ থেকে এক নিদর্শন হবে। আর আমাদেরকে রিযিক দান করুন, আপনিই শ্রেষ্ঠ রিযিকদাতা।",
          qref: "আল-মায়িদা : ১১৪",
          aFile: "mp3/005114.mp3"
        },
        {
          id: "007023",
          ar: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
          bn: "হে আমাদের রব, আমরা নিজদের উপর যুল্‌ম করেছি। আর যদি আপনি আমাদেরকে ক্ষমা না করেন এবং আমাদেরকে দয়া না করেন তবে অবশ্যই আমরা ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।",
          qref: "আল-আরাফ : ২৩",
          aFile: "mp3/007023.mp3"
        },
        {
          id: "007047",
          ar: "رَبَّنَا لاَ تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ",
          bn: "হে আমাদের রব, আমাদেরকে যালিম কওমের অন্তর্ভুক্ত করবেন না।",
          qref: "আল-আরাফ : ৪৭",
          aFile: ""
        },
        {
          id: "007089",
          ar: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
          bn: "হে আমাদের রব, আমাদের ও আমাদের কওমের মধ্যে যথার্থ ফয়সালা করে দিন। আর আপনি শ্রেষ্ঠ ফয়সালাকারী।",
          qref: "আল-আরাফ : ৮৯",
          aFile: ""
        },
        {
          id: "007126",
          ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
          bn: "হে আমাদের রব, আমাদেরকে পরিপূর্ণ ধৈর্য দান করুন এবং মুসলিম হিসাবে আমাদেরকে মৃত্যু দান করুন।",
          qref: "আল-আরাফ : ১২৬",
          aFile: ""
        },
        {
          id: "0108586",
          ar: "رَبَّنَا لاَ تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ ; وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
          bn: "হে আমাদের রব, আপনি আমাদেরকে যালিম কওমের ফিতনার পাত্র বানাবেন না। আর আমাদেরকে আপনার অনুগ্রহে কাফির কওম থেকে নাজাত দিন।",
          qref: "ইউনুস : ৮৫-৮৬",
          aFile: ""
        },
        {
          id: "014038",
          ar: "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ وَمَا يَخْفَى عَلَى اللّهِ مِن شَيْءٍ فَي الأَرْضِ وَلاَ فِي السَّمَاء",
          bn: "হে আমাদের রব, নিশ্চয় আপনি জানেন, যা আমরা গোপন করি এবং যা প্রকাশ করি, আর কোন কিছু আল্লাহর নিকট গোপন নেই, না যমীনে না আসমানে।",
          qref: "ইব্রাহিম : ৩৮",
          aFile: ""
        },
        {
          id: "014040",
          ar: "رَبَّنَا وَتَقَبَّلْ دُعَاء",
          bn: "হে আমাদের রব, আর আমার দু’আ কবূল করুন।",
          qref: "ইব্রাহিম : ৪০",
          aFile: ""
        },
        {
          id: "014041",
          ar: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
          bn: "হে আমাদের রব, যেদিন হিসাব কায়েম হবে, সেদিন আপনি আমাকে, আমার পিতামাতাকে ও মুমিনদেরকে ক্ষমা করে দিবেন।",
          qref: "ইব্রাহিম : ৪১",
          aFile: ""
        },
        {
          id: "018010",
          ar: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
          bn: "হে আমাদের রব, আমাদেরকে আপনার পক্ষ থেকে রহমত দিন এবং আমাদের জন্য আমাদের কর্মকাণ্ড সঠিক করে দিন।",
          qref: "আল-কাহফ : ১০",
          aFile: ""
        },
        {
          id: "020045",
          ar: "رَبَّنَا إِنَّنَا نَخَافُ أَن يَفْرُطَ عَلَيْنَا أَوْ أَن يَطْغَى",
          bn: "হে আমাদের রব, আমরা তো আশংকা করছি যে, সে আমাদের উপর বাড়াবাড়ি করবে অথবা সীমালঙ্ঘন করবে।",
          qref: "ত্বা-হা : ৪৫",
          aFile: ""
        },
        {
          id: "023109",
          ar: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
          bn: "হে আমাদের রব, আমরা ঈমান এনেছি, অতএব আমাদেরকে ক্ষমা ও দয়া করুন, আর আপনি সর্বশ্রেষ্ঠ দয়ালু।",
          qref: "আল-মুমিনুন : ১০৯",
          aFile: ""
        },
        {
          id: "0256566",
          ar: "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا إِنَّهَا سَاءتْ مُسْتَقَرًّا وَمُقَامًا",
          bn: "হে আমাদের রব, তুমি আমাদের থেকে জাহান্নামের আযাব ফিরিয়ে নাও। নিশ্চয় এর আযাব হল অবিচ্ছিন্ন। নিশ্চয় তা অবস্থানস্থল ও আবাসস্থল হিসেবে অত্যন্ত নিকৃষ্ট।",
          qref: "আল-ফুরকান : ৬৫-৬৬",
          aFile: ""
        },
        {
          id: "025074",
          ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
          bn: "হে আমাদের রব, আপনি আমাদেরকে এমন স্ত্রী ও সন্তানাদি দান করুন যারা আমাদের চক্ষু শীতল করবে। আর আপনি আমাদেরকে মুত্তাকীদের নেতা বানিয়ে দিন।",
          qref: "আল-ফুরকান : ৭৪",
          aFile: ""
        },
        {
          id: "035034",
          ar: "رَبَّنَا لَغَفُورٌ شَكُورٌ",
          bn: "নিশ্চয় আমাদের রব পরম ক্ষমাশীল, মহাগুণগ্রাহী।",
          qref: "ফাতির : ৩৪",
          aFile: ""
        },
        {
          id: "040007",
          ar: "آمَنُوا رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ وَقِهِمْ عَذَابَ الْجَحِيمِ",
          bn: "হে আমাদের রব, আপনি রহমত ও জ্ঞান দ্বারা সব কিছুকে পরিব্যপ্ত করে রয়েছেন। অতএব যারা তাওবা করে এবং আপনার পথ অনুসরণ করে আপনি তাদেরকে ক্ষমা করে দিন। আর জাহান্নামের আযাব থেকে আপনি তাদেরকে রক্ষা করুন।",
          qref: "গাফির : ৭",
          aFile: ""
        },
        {
          id: "0400809",
          ar: "رَبَّنَا وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ الَّتِي وَعَدتَّهُم وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ وَقِهِمُ السَّيِّئَاتِ وَمَن تَقِ السَّيِّئَاتِ يَوْمَئِذٍ فَقَدْ رَحِمْتَهُ وَذَلِكَ هُوَ الْفَوْزُ الْعَظِيمُ",
          bn: "হে আমাদের রব, আর আপনি তাদেরকে স্থায়ী জান্নাতে প্রবেশ করান, যার ওয়াদা আপনি তাদেরকে দিয়েছেন। আর তাদের পিতা-মাতা, পতি-পত্নি ও সন্তান-সন্ততিদের মধ্যে যারা সৎকর্ম সম্পাদন করেছে তাদেরকেও। নিশ্চয় আপনি মহাপরাক্রমশালী, মহাপ্রজ্ঞাময়। আর আপনি তাদের অপরাধের আযাব হতে রক্ষা করুন এবং সেদিন আপনি যাকে অপরাধের আযাব থেকে রক্ষা করবেন, অবশ্যই তাকে অনুগ্রহ করবেন। আর এটিই মহাসাফল্য।",
          qref: "গাফির : ৮-৯",
          aFile: ""
        },
        {
          id: "059010A",
          ar: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا",
          bn: "হে আমাদের রব, আমাদেরকে ও আমাদের ভাই যারা ঈমান নিয়ে আমাদের পূর্বে অতিক্রান্ত হয়েছে তাদেরকে ক্ষমা করুন; এবং যারা ঈমান এনেছিল তাদের জন্য আমাদের অন্তরে কোন বিদ্বেষ রাখবেন না।",
          qref: "আল-হাশর : ১০",
          aFile: ""
        },
        {
          id: "059010B",
          ar: "رَبَّنَا إِنَّكَ رَؤُوفٌ رَّحِيمٌ",
          bn: "হে আমাদের রব, নিশ্চয় আপনি দয়াবান, পরম দয়ালু।",
          qref: "আল-হাশর : ১০",
          aFile: ""
        },
        {
          id: "060004",
          ar: "رَّبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
          bn: "হে আমাদের প্রতিপালক, আমরা আপনার ওপরই ভরসা করি, আপনারই অভিমুখী হই আর প্রত্যাবর্তন তো আপনারই কাছে।",
          qref: "আল-মুমতাহিনা : ৪",
          aFile: ""
        },
        {
          id: "060005",
          ar: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
          bn: "হে আমাদের রব, আপনি আমাদেরকে কাফিরদের উৎপীড়নের পাত্র বানাবেন না। হে আমাদের রব, আপনি আমাদের ক্ষমা করে দিন। নিশ্চয় আপনি মহাপরাক্রমশালী, প্রজ্ঞাময়।",
          qref: "আল-মুমতাহিনা : ৫",
          aFile: ""
        },
        {
          id: "066008",
          ar: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
          bn: "হে আমাদের রব, আমাদের জন্য আমাদের আলো পূর্ণ করে দিন এবং আমাদেরকে ক্ষমা করুন; নিশ্চয় আপনি সর্ববিষয়ে সর্বক্ষমতাবান।",
          qref: "আত-তাহরিম : ৮",
          aFile: ""
        }

      ]
    });
  }

  render() {

    let allDuas;
    if(this.state.duas){
      allDuas = this.state.duas.map(dua => {
        return (
          <Dua dua={dua} key={dua.id} />
        );
      });
    }

      return (
      <div className="App" id="fullpage">
        {allDuas}
      </div>
    );
  }
}

export default App;