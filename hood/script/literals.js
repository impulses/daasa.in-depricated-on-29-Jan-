/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* literals.js | Template Literals | 01/01/2023    */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/*            Global Template Literals             */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

window.tsPageTitle = [
  { la: 'En', txt: "Daasa । Crowdsourced Archive of Haridasa Compositions" },
  { la: 'Kn', txt: "ದಾಸ । ಸಮೂಹ ನಿರ್ವಹಿತ ಹರಿದಾಸ ಸಾಹಿತ್ಯಗಳ ಸಂಗ್ರಹ" },
  { la: 'Ta', txt: "தாச । குழு நிர்வகிக்கும் ஹரிதாஸ இலக்கியம் சேகரிப்பு" },
  { la: 'Te', txt: "దాస । సమూహం నిర్వహించిన హరిదాస సాహిత్యం సేకరణ" } ]

window.tsNBTitle = [
  { la: 'En', txt: "Daasa Sāhitya Archive" },
  { la: 'Kn', txt: "ದಾಸ ಸಾಹಿತ್ಯ ಸಂಗ್ರಹ" },
  { la: 'Ta', txt: "தாச இலக்கியம் சேகரிப்பு" },
  { la: 'Te', txt: "దాస సాహిత్యం సేకరణ" }
]

/* Dasaboard and Cards */
window.tsLangChanged = [
  { la: 'En', txt: "Let's Read in English" },
  { la: 'Kn', txt: "ಕನ್ನಡದಲ್ಲಿ ಓದೋಣ" },
  { la: 'Ta', txt: "தமிழில் படிப்போம்" },
  { la: 'Te', txt: "తెలుగులో చదువుదాం"} ]

window.tsdbTableHdr = [
  { la: 'En', txt: "Dāsaboard" },
  { la: 'Kn', txt: "ದಾಸರ ಅಂಗಣ" },
  { la: 'Ta', txt: "தாசர்கள் முற்றம்" },
  { la: 'Te', txt: "దాసుల ప్రాంగణం"} ]

window.tsdbSbTtl = [
  { la: 'En', txt: "Haridasas" },
  { la: 'Kn', txt: "ಹರಿದಾಸರು" },
  { la: 'Ta', txt: "ஹரிதாசர்கள்" },
  { la: 'Te', txt: "హరిదాసులు"} ]

window.tsdbWrkSbTtl = [
  { la: 'En', txt: "Masterworks" },
  { la: 'Kn', txt: "ಕೃತಿಗಳು" },
  { la: 'Ta', txt: "படைப்புகள்" }, //இலக்கியங்கள்
  { la: 'Te', txt: "రచనలు"} ] //సాహిత్యాలు

window.tsSbttlVid = [
  { la: 'En', txt: "Videos" },
  { la: 'Kn', txt: "ವೀಡಿಯೊಗಳು" },
  { la: 'Ta', txt: "வீடியோக்கள்" },
  { la: 'Te', txt: "వీడియోలు"} ]

window.tsSbttlVstr = [
  { la: 'En', txt: "Visitors" },
  { la: 'Kn', txt: "ಸಂದರ್ಶಕರು" },
  { la: 'Ta', txt: "பார்வையாளர்கள்" },
  { la: 'Te', txt: "సందర్శకులు"} ]

window.tsSbttlSbscrbrs = [
  { la: 'En', txt: "Subscribers" },
  { la: 'Kn', txt: "ಚಂದಾದಾರರು" },
  { la: 'Ta', txt: "சந்தாதாரர்கள்" },
  { la: 'Te', txt: "చందాదారులు"} ]

window.tsSbttlCntrbtr = [
  { la: 'En', txt: "Contributors" },
  { la: 'Kn', txt: "ಕೊಡುಗೆದಾರರು" },
  { la: 'Ta', txt: "பங்களிப்பாளர்கள்" },
  { la: 'Te', txt: "సహకారులు"} ]

/* Prelude headers and content */
window.tsPrelHdg = [
    { la: 'En', txt: "Prelude" },
    { la: 'Kn', txt: "ಮುನ್ನುಡಿ" },
    { la: 'Ta', txt: "முன்னுரை" },
    { la: 'Te', txt: "ఉపోద్ఘాతం"} ]

window.strDAASA = 'Duly Appreciate & Admire Sages Advise'; // let strDAASA = `Donate An Amazing Song for Archive`;
window.strShloka = 'भग्न पृष्ठ कटि ग्रीवा बद्ध दृष्टिः अधोमुखी ।<br>कष्टेन लिखितम् शास्त्रम् यत्नेन परिपालय ॥'

window.tsPrelude = [
  { la: 'En', txt:
  `<p>Not just another lyrics listing website, this is the <strong>Crowdsourced Archive</strong> of <i>dAsa sAhitya</i>, where the knowledge has been poured in by contributors from across regions & across religions. The prupose is to spread the knowledge in 4 different languages; easily accessible to everyone, everywhere.<br>
  <p>Intrigued and interested souls have contributed their part, either by adding a lyric or by sending a video they have sung in.</p><br>
  <p>The task of creating such a repository can't just be a hobby but a service to Daasas, to impart their valuable work in <i>an easily available, neater, organized, convenient and impeccable</i> form, with respect for the language.</p><br>
  <p class="var(--Purple)">You too become a <b style="color: var(--Maroon)">&apos;DAASA&apos;</b>, if you <i style="color: var(--Maroon)">${strDAASA}</i>.</p><br>
  <p>The works in the available collection have been <i>Curiously Curated</i>, vetted and transliterated (popular works first, rare in near future). Although the correction of inaccuracies is attempted, there may have been a few grammatical as well as linguistic errors left by oversight or by my ignorance. Proficients should help correct them.<br>
  <p>The task seems very challenging but immensely stimulating; which reminded the below quoted epigram (subhashita), which is often seen on Sanskrit palm-manuscript copies. This epigram summarizes the hardwork required to write a document and a demand to preserve them carefully.</p><br>
  <div class="Shloka">${strShloka}</div>
  <div class="Grid Cntr_V Cntr_T">
  <code>With strained seat, back & neck;<br>with a focused downward gaze ।<br> this script was created effortfully;<br>preserve it with devotion ॥</code><br>
  </div>
  <p>Let&apos;s join hands in building Daasa Saahitya archive; together. You too can contribute by providing your favorite <i>kriti</i>, or by transliterating existing works into the language you speak or your&apos;e proficient with. Only you can help increase verified translations for your language! You can support this cause by contributing and spreading nice words about this space.</p>` },

  { la: 'Kn', txt:
  `<p>asdfsa</p><br>
  <p class="clrOrange">Become a <b>'DAASA'</b> – <i>Donate An Amazing Song for Archive</i>.</p><br>
  <p>The task seems very challenging but immensely stimulating; which reminded the below quoted epigram (subhashita), which is often seen on Sanskrit palm-manuscript copies. This epigram summarizes the hardwork required to write a document and a demand to preserve them carefully.</p>
  <div class="Shloka">भग्न पृष्ठ कटि ग्रीवा बद्ध दृष्टिः अधोमुखी ।<br>कष्टेन लिखितम् शास्त्रम् यत्नेन परिपालय ॥</div>
  <div class="Grid Cntr_V Cntr_T">
  <code>ಶಿಥಿಲಗೊಂಡ ಪೃಷ್ಠ, ಬೆನ್ನು ಮತ್ತು ಕುತ್ತಿಗೆಯೊಂದಿಗೆ;<br>ಸ್ಥಿರವಾದ ಕೆಳಮುಖ ನೋಟದಿಂದ ।<br>ಕಷ್ಟಪಟ್ಟು ಸಾಹಿತ್ಯವನ್ನು ಬರೆಯಲಾಗಿದೆ;<br>ಎಚ್ಚರಿಕೆಯಿಂದ ಬದ್ಧತೆಯೊಂದಿಗೆ ಸಂರಕ್ಷಿಸಿ ॥</code>
  </div>
  <p>Let's join hands in building Daasa Saahitya archive; together.
  You too can contribute by providing your favorite <i>kriti</i>, or by transliterating existing works into the language you speak or your'e proficient with. Only you can help increase verified translations for your language!

  You can support this cause by contributing and spreading nice words about this space.</p>
  <p>ತಿಳಿದವರು ತಿದ್ದಬೇಕು...</p>
  ` },
  { la: 'Ta', txt: "முன்னுரை Text TBD" },
  { la: 'Te', txt: "ఉపోద్ఘాతం Text TBD"}
]

window.tsRegTtl = [
  { la: 'En', txt: "Become a DAASA" },
  { la: 'Kn', txt: "ನೀವೂ ದಾಸರಾಗಿ" },
  { la: 'Ta', txt: "நீங்களும் தாசா ஆகுங்கள்" },
  { la: 'Te', txt: "మీరు కూడా దాస అవ్వండి"} ]

window.tsRegSbttl = [
  { la: 'En', txt: "Sign up to contribute or support. Thank you!" },
  { la: 'Kn', txt: "ಸಾಹಿತ್ಯದ ನೆರವು ನೀಡಲು ಅಥವಾ ಬೆಂಬಲಿಸಲು ನೊಂದಣಿ ಮಾಡಿ. ಧನ್ಯವಾದ!" },
  { la: 'Ta', txt: "இலக்கியத்திற்கு உதவ அல்லது ஆதரிக்க பதிவு செய்யவும். நன்றி!" },
  { la: 'Te', txt: "సాహిత్యానికి సహాయపడటానికి లేదా ప్రోత్సహించడానికి చేరండి. ధన్యవాదాలు!"} ]

window.tsfldFN = [
    { la: 'En', txt: "First Name" },
    { la: 'Kn', txt: "ಮೊದಲ ಹೆಸರು" },
    { la: 'Ta', txt: "முதல் பெயர்" },
    { la: 'Te', txt: "మొదటి పేరు"} ]

window.tsfldLN = [
    { la: 'En', txt: "Last Name" },
    { la: 'Kn', txt: "ಕೊನೆಯ ಹೆಸರು" },
    { la: 'Ta', txt: "கடைசி பெயர்" },
    { la: 'Te', txt: "చివరి పేరు"} ]

window.tsfldEm = [
    { la: 'En', txt: "Email" },
    { la: 'Kn', txt: "ಮಿಂಚೋಲೆ" },
    { la: 'Ta', txt: "மின்னஞ்சல்" },
    { la: 'Te', txt: "ఇమెయిల్"} ]

window.tsfldPl = [
    { la: 'En', txt: "Place" },
    { la: 'Kn', txt: "ವಾಸದ ಸ್ಥಳ" },
    { la: 'Ta', txt: "வசிக்கும் இடம்" },
    { la: 'Te', txt: "నివాస స్థలం"} ]

window.tsbtnSubmit = [
    { la: 'En', txt: "Sign Up" },
    { la: 'Kn', txt: "ನೊಂದಣಿ ಮಾಡಿ" },
    { la: 'Ta', txt: "பதிவு செய்யுங்கள்" },
    { la: 'Te', txt: "నమోదు చేసుకోండి"} ]

window.tsRegDsclmr = [
    { la: 'En', txt: "Don't worry, no spam here! Your information will be used only for <code>daasa.in</code> statistics and related updates. You will not receive any emails." },
    { la: 'Kn', txt: "ಚಿಂತಿಸಬೇಡಿ, ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು <code>daasa.in</code> ಅಂಕಿಅಂಶಗಳು ಮತ್ತು ಸಂಬಂಧಿತ ಪುಟ ನವೀಕರಣಗಳಿಗಾಗಿ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ. ನಿಮಗೆ ನಾವು ಯಾವುದೇ ಅನುಪಯುಕ್ತ ವಿಷಯಗಳನ್ನು ಕಳುಹಿಸುವುದಿಲ್ಲ." },
    { la: 'Ta', txt: "கவலைப்பட வேண்டாம், உங்கள் தகவல் <code>daasa.in</code> புள்ளிவிவரங்கள் மற்றும் தொடர்புடைய பக்க புதுப்பிப்புகளுக்கு மட்டுமே பயன்படுத்தப்படும். நாங்கள் உங்களுக்கு எந்த குப்பை மின்னஞ்சல்களையும் அனுப்ப மாட்டோம்." },
    { la: 'Te', txt: "చింతించకండి, మీ సమాచారం <code>daasa.in</code> గణాంకాలు మరియు సంబంధిత పేజీ నవీకరణల కోసం మాత్రమే ఉపయోగించబడుతుంది. మేము మీకు ఎలాంటి జంక్ ఇమెయిల్‌లను పంపము."} ]

// let tsPrelude_Ka = `ದಾನವರಾಗಬೇಡಿ, ದಾನವ ಮಾಡಿ`
/* - - - - - - - - - - - - - - - - - - - - - - - - */
// /* TBD: Update strPageTitle for a selected dasa/song */

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* Inner Pages... */
window.idTabIDs = [ 'Garlands', 'Gems', 'Favs' ]

// window.tsTabH = [
window.tsGarlands = [
  { la: 'En', txt: "Daasas" },
  { la: 'Kn', txt: "ದಾಸರು" },
  { la: 'Ta', txt: "தாவல் 1" },
  { la: 'Te', txt: "టాబ్ 1"} ]
  
// window.tsTabC = [
window.tsGems = [
  { la: 'En', txt: "Compositions" },
  { la: 'Kn', txt: "ಕೃತಿಗಳು" },
  { la: 'Ta', txt: "தாவல் 2" },
  { la: 'Te', txt: "టాబ్ 2"} ]

// window.tsTabG = [
window.tsFavs = [
  { la: 'En', txt: "Favorites" },
  { la: 'Kn', txt: "ನೆಚ್ಚಿನವು" },
  { la: 'Ta', txt: "தாவல் 3" },
  { la: 'Te', txt: "టాబ్ 3"} ]