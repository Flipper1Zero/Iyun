// Iyun — Berakhot (full tractate). Hebrew/Aramaic (Gemara, Rashi,
// Tosafot): Vilna Talmud, public domain, digitized on Hebrew Wikisource
// (CC BY-SA), via the Sefaria open export (github.com/Sefaria/Sefaria-Export).
// English for the Gemara is filled in at load time from the built text library.
// Assembled for this educational layout prototype; attribution required by CC BY-SA.

window.IYUN_PALETTE = {
 "name": "Shakla v'Tarya",
 "categories": [
  {
   "id": "statement",
   "label": "Statement",
   "color": "#3FABFF", "fill": "#B9E5FF"
  },
  {
   "id": "proof",
   "label": "Proof",
   "color": "#EB6500", "fill": "#FFC9A1"
  },
  {
   "id": "attack",
   "label": "Attack",
   "color": "#F03E1D", "fill": "#FFB3B8"
  },
  {
   "id": "defense",
   "label": "Defense",
   "color": "#4DD509", "fill": "#A9FF7F"
  },
  {
   "id": "question",
   "label": "Question",
   "color": "#EDCB00", "fill": "#FFF35F"
  },
  {
   "id": "answer",
   "label": "Answer",
   "color": "#A752F2", "fill": "#DDC8FF"
  }
 ]
};

// Other dapim get their default marks from annotations/*.json (see daf-loader.js).
window.IYUN_DEFAULT_MARKS = {};

window.IYUN_DAFS = [
 {
  "id": "2a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ב",
  "amud": "א",
  "dafEn": "2a",
  "perekFirstWord": "מֵאֵימָתַי",
  "runningHead": "מֵאֵימָתַי פֶּרֶק רִאשׁוֹן בְּרָכוֹת",
  "mishnah": "מאימתי קורין את שמע בערבין. משעה שהכהנים נכנסים לאכול בתרומתן עד סוף האשמורה הראשונה דברי ר' אליעזר. וחכמים אומרים עד חצות. רבן גמליאל אומר עד שיעלה עמוד השחר. מעשה ובאו בניו מבית המשתה אמרו לו לא קרינו את שמע אמר להם אם לא עלה עמוד השחר חייבין אתם לקרות ולא זו בלבד אמרו אלא כל מה שאמרו חכמים עד חצות מצותן עד שיעלה עמוד השחר הקטר חלבים ואברים מצותן עד שיעלה עמוד השחר וכל הנאכלים ליום אחד מצותן עד שיעלה עמוד השחר א\"כ למה אמרו חכמים עד חצות כדי להרחיק אדם מן העבירה:",
  "gemara": "תנא היכא קאי דקתני מאימתי ותו מאי שנא דתני בערבית ברישא לתני דשחרית ברישא תנא אקרא קאי דכתיב (דברים ו, ז) בשכבך ובקומך והכי קתני זמן קריאת שמע דשכיבה אימת משעה שהכהנים נכנסין לאכול בתרומתן ואי בעית אימא יליף מברייתו של עולם דכתיב (בראשית א, ה) ויהי ערב ויהי בקר יום אחד אי הכי סיפא דקתני בשחר מברך שתים לפניה ואחת לאחריה ובערב מברך שתים לפניה ושתים לאחריה לתני דערבית ברישא. תנא פתח בערבית והדר תני בשחרית עד דקאי בשחרית פריש מילי דשחרית והדר פריש מילי דערבית: אמר מר משעה שהכהנים נכנסים לאכול בתרומתן. מכדי כהנים אימת קא אכלי תרומה משעת צאת הכוכבים לתני משעת צאת הכוכבים. מלתא אגב אורחיה קמשמע לן כהנים אימת קא אכלי בתרומה משעת צאת הכוכבים והא קמשמע לן דכפרה לא מעכבא כדתניא (ויקרא כב, ז) ובא השמש וטהר ביאת שמשו מעכבתו מלאכול בתרומה ואין כפרתו מעכבתו מלאכול בתרומה. וממאי דהאי ובא השמש ביאת השמש והאי וטהר טהר יומא",
  "rashi": [
   {
    "dh": "מאימתי קורין את שמע בערבין. משעה שהכהנים נכנסים לאכול בתרומתן",
    "text": " — כהנים שנטמאו וטבלו והעריב שמשן והגיע עתם לאכול בתרומה:",
    "en": "From what time do we read the shema at night? From the time that the Kohanim (priests) enter to eat their Trumah (holy food). Kohanim that became defiled, and then immersed (in the mikvah), and the day has become night [resetting their purity], then they are allowed to eat Trumah."
   },
   {
    "dh": "עד סוף האשמורה הראשונה",
    "text": " — שליש הלילה כדמפרש בגמרא (דף ג.) ומשם ואילך עבר זמן דלא מקרי תו זמן שכיבה ולא קרינן ביה בשכבך ומקמי הכי נמי לאו זמן שכיבה לפיכך הקורא קודם לכן לא יצא ידי חובתו. אם כן למה קורין אותה בבית הכנסת כדי לעמוד בתפלה מתוך דברי תורה והכי תניא בבריי' בברכות ירושלמי. ולפיכך חובה עלינו לקרותה משתחשך. ובקריאת פרשה ראשונה שאדם קורא על מטתו יצא:",
    "en": "UNTIL THE END OF THE FIRST WATCH- A third of the night, as will be explained in the Gemara (p. 3a), and from then on the time has passed for it is not the time of lying down, and is not referred to in the words \"Bishachbicha\". Also, before this period is not considered the time for lying down. Therefore, if one read the Shema before, he does not fulfill his obligation. If so, why do we read the Shema in the Synagogue? In order to stand in Tefilah, in connection with words of Torah as is taught in the Briata in the Jerusalem Talmud Berachot. Therefore one would have to read again after it gets dark. [In this case] Reading the first section of the Shema at bed time suffices."
   },
   {
    "dh": "עד שיעלה עמוד השחר",
    "text": " — שכל הלילה קרוי זמן שכיבה:",
    "en": "Until dawn - The entire night is called the time of laying down."
   },
   {
    "dh": "הקטר חלבים ואברים",
    "text": " — של קרבנות שנזרק דמן ביום:",
    "en": "The Burning of the fats and limbs - Of the sacrifices that their blood is sprinkled during the day."
   },
   {
    "dh": "מצותן",
    "text": " — להעלות כל הלילה ואינן נפסלים בלינה עד שיעלה עמוד השחר והן למטה מן המזבח דכתיב ולא ילין לבקר (שמות ל״ד:כ״ה):",
    "en": "Their commandment - is to be brought the entire night and they do not become invalidated through \"sleeping\" until the morning star rises"
   },
   {
    "dh": "חלבים",
    "text": " — של כל קרבנות:",
    "en": "Fats - of all (types) of sacrifices"
   },
   {
    "dh": "אברים",
    "text": " — של עולה:",
    "en": "Limbs - of a burnt offering"
   },
   {
    "dh": "וכל הנאכלים ליום אחד",
    "text": " — כגון חטאת ואשם וכבשי עצרת ומנחות ותודה:",
    "en": "And all (offerings) which must be eaten that same day - for example sin offerings and guilt offerings and the lambs of atzeres and meal offerings and thanksgiving offerings"
   },
   {
    "dh": "מצותן",
    "text": " — זמן אכילתן:",
    "en": "Their commandment - ie the allotted time for their being eaten"
   },
   {
    "dh": "עד שיעלה עמוד השחר",
    "text": " — והוא מביאן להיות נותר דכתיב בתודה לא יניח ממנו עד בקר (ויקרא ז׳:ט״ו) וכלם מתודה ילמדו:",
    "en": "Until Dawn - And this is what brings them to become Nossar (leftover) as it says with the Todah Sacrifice \"A person should not leave anything over until morning\" and all of this is learnt from the Todah sacrifice."
   },
   {
    "dh": "אם כן למה אמרו חכמים עד חצות",
    "text": " — בקריאת שמע ובאכילת קדשים:",
    "en": "If so why did the sages say until midnight - This is regarding Kerias Shema and eating Kodshim."
   },
   {
    "dh": "כדי להרחיק אדם מן העבירה",
    "text": " — ואסרום באכילה קודם זמנן כדי שלא יבא לאוכלן לאחר עמוד השחר ויתחייב כרת וכן בקריאת שמע לזרז את האדם שלא יאמר יש לי עוד שהות ובתוך כך יעלה עמוד השחר ועבר לו הזמן. והקטר חלבים דקתני הכא לא אמרו בו חכמים עד חצות כלל ולא נקט להו הכא אלא להודיע שכל דבר הנוהג בלילה כשר כל הלילה. והכי נמי תנן בפרק שני דמגילה (דף כ:) כל הלילה כשר לקצירת העומר ולהקטר חלבים ואברים:",
    "en": "In order to distance a man from sin - And they are forbidden to eat before their time, in order that they should not come to eat them after dawn and therefore he would be liable to Kores. Similarly with reading the Shema, this is to encourage a person, so that he should not say \"I still have time\" and in the meantime it will get dawn and he would have missed the time. The offering of the fats that we learn here the sages did not say until midnight at all, and we did not learn here only to teach us that anything that is applied to at night is valid the entire night. Here also we learnt in a mishnah in the second chapter of Megillah. \"The whole night is valid for reaping the omer and to offer up the fats and the limbs\"."
   },
   {
    "dh": "היכא קאי",
    "text": " — מהיכא קא סליק דתנא ביה חובת קריאת שמע שהתחיל לשאול כאן זמן הקריאה:",
    "en": "How is this possible - From where does the Tanna conclude the obligation to read Kerias Shema, that he began to ask here the time of reading?"
   },
   {
    "dh": "אקרא קאי",
    "text": " — ושם למד חובת הקריאה:",
    "en": "On the text it is based - And there you can learn the obligation of reading (Shema)"
   },
   {
    "dh": "ואי בעית אימא",
    "text": " — הא דתנא ערבין ברישא יליף מברייתו של עולם:",
    "en": "If you want I can say - the reason we learn evening first is to learn it from the creation of the world."
   },
   {
    "dh": "והדר תנא בשחרית",
    "text": " — מאימתי קורין את שמע בשחרית:",
    "en": "It then taught about the morning - \"From when can we read the shema in the morning\"."
   },
   {
    "dh": "משעת צאת הכוכבים",
    "text": " — שהוא גמר ביאת השמש כדיליף לקמן (עמוד ב):",
    "en": "From nightfall - This is when the sun has completely set as we learn later on."
   }
  ],
  "tosafot": [
   {
    "dh": "מאימתי קורין וכו'",
    "text": " — פי' רש\"י ואנן היכי קרינן מבעוד יום ואין אנו ממתינין לצאת הכוכבים כדמפרש בגמרא על כן פירש רש\"י שקריאת שמע שעל המטה עיקר והוא לאחר צאת הכוכבים. והכי איתא בירושלמי אם קרא קודם לכן לא יצא ואם כן למה אנו מתפללין קריאת שמע בבית הכנסת כדי לעמוד בתפלה מתוך דברי תורה. תימא לפירושו והלא אין העולם רגילין לקרות סמוך לשכיבה אלא פרשה ראשונה (לקמן ברכות דף ס:) ואם כן שלש פרשיות היה לו לקרות. ועוד קשה דצריך לברך בקריאת שמע שתים לפניה ושתים לאחריה בערבית. ועוד דאותה קריאת שמע סמוך למטה אינה אלא בשביל המזיקין כדאמר בסמוך (דף ה.) ואם תלמיד חכם הוא אינו צריך. ועוד קשה דא״כ פסקינן כרבי יהושע בן לוי דאמר תפלות באמצע תקנום פ' באמצע בין שני קריאת שמע בין קריאת שמע של שחרית ובין קריאת שמע של ערבית. ואנן קיי״ל כר' יוחנן דאמר לקמן (ברכות דף ד:) איזהו בן העולם הבא זה הסומך גאולה של ערבית לתפלה. לכן פי' ר״ת דאדרבה קריאת שמע של בית הכנסת עיקר. ואם תאמר היאך אנו קורין כל כך מבעוד יום. ויש לומר דקיימא לן כרבי יהודה דאמר בפרק תפלת השחר (ברכות דף כו.) דזמן תפלת מנחה עד פלג המנחה דהיינו אחד עשר שעות פחות רביע ומיד כשיכלה זמן המנחה מתחיל זמן ערבית. ואם תאמר היאך אנו מתפללין תפלת מנחה סמוך לחשכה ואפילו לאחר פלג המנחה. יש לומר דקיימא לן כרבנן דאמרי זמן תפלת המנחה עד הערב ואמרינן לקמן (ברכות דף כז.) השתא דלא אתמר הלכתא לא כמר ולא כמר דעבד כמר עבד ודעבד כמר עבד. מכל מקום קשיא דהוי כתרי קולי דסתרן אהדדי שהרי מאיזה טעם אנו מתפללין ערבית מיד לאחר פלג המנחה משום דקיימא לן דשעת המנחה כלה כדברי רבי יהודה ומיד הוי זמן ערבית ובזמן התפלה עצמה לא קיימא לן כרבי יהודה אלא כרבנן. על כן אומר ר״י דודאי קריאת שמע של בית הכנסת עיקר ואנו שמתפללין ערבית מבעוד יום סבירא לן כהני תנאי דגמרא דאמרי משעה שקדש היום וגם משעה שבני אדם נכנסים להסב דהיינו סעודת ע״ש והיא היתה מבעוד יום ומאותה שעה הוי זמן תפלה. וגם ראיה (לקמן כז) דרב הוי מצלי של שבת בערב שבת ומסתמא גם היה קורא קריאת שמע. מכל אותן הראיות משמע דקריאת שמע של בית הכנסת היא עיקר. והא דקאמר בירושלמי למה היו קורין בבהכ״נ וכו' אומר ר״ת שהיו רגילין לקרות ק״ש קודם תפלתם כמו שאנו רגילין לומר אשרי תחלה ואותה ק״ש אינה אלא לעמוד בתפלה מתוך דברי תורה. ומכאן נראה מי שקורא ק״ש על מטתו שאין לברך וגם אינו צריך לקרות אלא פרשה ראשונה:",
    "en": "FROM WHEN DOES ONE RECITE SHEMA ETC? All opinions mentioned in our Mishna agree that Shema is to be recited after the stars are visible. It was the common custom during Rashi’s times that people prayed Maariv before nightfall. In view of what is clearly stated in the Mishna, how can we defend the custom? Rashi explained: And how do we recite Shema when it is still daytime and do not wait until the stars come out, as the Gemara explains that this is the time when Kohanim begin come to eat their Terumah? For this reason Rashi explains that the Shema that is recited when we go to bed is the primary fulfillment of the mitzvah of Shema, and that is recited after the stars appear. Rashi quotes Talmud Yerushalmi to support his opinion. So is it found in Yerushalmi: If one recited Shema before this time mentioned in our Mishna, he has not fulfilled his obligation. Yerushalmi continues: If so, why do we recite Shema in the synagogue, when we are saying the Marriv prayer before the stars appear and when we are definitely not fulfilling the mitzvah? That is done in order to stand before Hashem in prayer having first said some words of Torah. That first recital is not a fulfillment of the mitzvah of reciting Shema, but does serve as a vehicle from which we stand before Hashem in prayer, having fulfilled the all-important mitzvah of Torah study. Tosfos asks a series of four questions attacking Rashi’s explanation: The first: His explanation that we fulfill the reciting of Shema with the Shema that we recite when going to sleep is bewildering! But the people, when going to sleep are accustomed to reciting only the first paragraph of Shema - שמע and ואהבת, and if so, that it is the recital with which we will fulfill our obligation to recite Shema, we should read all three paragraphs? The second question: There is another difficulty. That one is required when reciting Shema to also recite two berachos before Shema and two berachos after Shema at night? Tosfos assumes that the berachos of Shema should be recited with the Shema that is recited for the fulfillment of the Mitzvah. According to Rashi, this should be recited when we are about to go to sleep, but in reality the berachos of Shema are recited together with the early Maariv prayer? The third question: Furthermore, the Shema recited when one goes to bed is only because of the mazikin1Evil spirits that may attack a person while he is asleep. as [the Gemara] soon says (5a). The Gemara there also says and if he is a scholar he does not need to recite Shema when he goes to sleep. This is understandable if the purpose of that Shema is to protect one from mazikin. Presumably a scholar who is always learning does not need that protection. However, if the recital is in order to fulfill the mitzvah of Shema, scholars are also obligated to fulfill the mitzvah. On 4b there is a dispute between R’ Yochonon and R’ Yehoshua ben Levi about the proper order of reciting Shema and saying Maariv. R’ Yochonon holds as we do that reciting Shema is first followed by tefilas Maariv. R’ Yehoshua ben Levi disagrees. He holds that we first say tefilas Maariv and then recite Shema. The particulars of the disagreement are discussed later on 4b. The fourth question: There is another difficulty: For if so, that Rashi is correct and we fulfill the mitzvah of reciting Shema when we go to bed after tefilas Maariv, we are ruling in favor of R’ Yehoshua ben Levi who says that the prayers of Shacharis, Mincha and Maariv were instituted to be said in between. The explanation of in between: Between the two recitals of Shema , all prayers are to be said between reciting Shema in the morning and reciting Shema in the evening. However, we rule in accordance with R’ Yochonon who says later (4b): Who is a son of the world to come? One who recites the beracha of redemption, גאל ישראל of the Maariv prayers immediately before the Shemoneh Esrai of Maariv. The beracha of גאל ישראל together with the other berachos recited in the evening prayers are collectively called the berachos of Shema. When we recite the Shema before Shmoneh Esrai of Maariv the beracha of redemption is said before Shmoneh Esrai, thus we are fulfilling the dictum of R’ Yochonon who says that one who does this is worthy of the world to come. If we would recite Shema after Shmoneh Esrai we would not be fulfilling R’ Yochonon’s dictum. This is proof that Shema is meant to be recited before Shmoneh Esrai, which contradicts Rashi’s position that we actually fulfill the recital of Shema when saying it as we are about to go to sleep. Rashi’s proposal seems to be in line with R’ Yehoshua ben Levi. For this reason Rabainu Tam explains that to the contrary, the recital of Shema in the synagogue before Shmoneh Esrai is the primary recital. This decision requires that we must once again examine our custom to recite Shema together with tefilas Maariv before nightfall. If you ask: How do we recite Shema so early when it is still day? We can answer: That we rule in accordance with R’ Yehudah who says in Perek Tefilas Hashachar (26a) that the time for tefilas Minchah is till the midpoint of the Minchah period, which is ten and three quarter hours into the hours of the day. For example when sunrise and sunset are at 6 o’clock a.m. and p.m., ten and three quarter hours is at 4:45 p.m. Immediately after the end of the time for praying Minchah at 4:45 p.m., the time for tefilas Maariv begins. Since this is the time for tefilas Maariv we may assume that it is also the time for recital of Shema, which must be done before saying tefilas Maariv as discussed earlier. In reality during the times of Tosfos people usually said Minchah late in the day, even after the midpoint of the minchah. If you ask: Since we rely on R’ Yehudah for reciting Shema before nightfall, how do we pray tefilas Minchah close to nightfall and even after the midpoint of the minchah? We can answer: That we rule in accordance with the Rabonon who say that tefilas Minchah may be said until the evening. [The Gemara] says later (27a): Now that we have not learned that the halacha follows the Rabonon who hold one may pray Minchah after the midpoint of the minchah (4:45 p.m.) or that the halacha follows R’ Yehuda who says that Mincha must be prayed before the midpoint (4:45 p.m.), one who does as [the Rabonon] fulfills his obligation and one who does like [R’ Yehudah] has fulfilled his obligation. This halacha has been left open for all to choose how they wish to behave. Thus one may choose to say Mincha after 4:45 p.m. or choose to say Mincha before 4:45 p.m. and then say Maariv immediately after 4:45 p.m. before night fall. Those of us who wish to follow the Rabonon may do so and those of us who choose to follow R’ Yehudah may do so. At this point Tosfos seems to hold that when we choose to pray Maariv at 4:45 p.m., we may also fulfill our obligation to recite Shema at that time. In reality it seems that during Tosfos’ times people would say tefilas Minchah after 4:45 p.m. and then recite Shema and say tefilas Maariv. There seems to be a contradiction in using the same time period for both tefilas Mincha and Maariv. In any case there is a difficulty with our custom because it seems that we are practicing two leniencies that are contradictory, because for whatever reason we pray Maariv immediately after the midpoint of the Minchah (after 4:45 p.m.), must be because we rule that the time for praying Minchah has ended in accordance with R’ Yehudah, and immediately afterwards is the time for Maariv , but as far as the time praying Minchah itself is concerned, we do not rule like R’ Yehudah, rather like the Rabonon, because we do continue to say Minchah prayers after the midpoint of the Minchah (4:45 P.M.). Tosfos concludes that we cannot possibly say that the reason we say Maariv early is because we hold like R’ Yehudah, because in fact we do not hold like R’ Yehudah as is evident by our saying Minchah after 4:45 P.M. Tosfos must once again search for the rationale behind our custom, which was to recite Shema before the appearance of the stars which is not in accordance with the ruling of our Mishna. We must keep in mind that Tosfos was not satisfied with Rashi’s approach that we fulfill the mitzvah of reciting Shema later when we go to sleep. Therefore R’I says that certainly the recital of Shema that we recite in the Synagogue is the primary recital of Shema with which we fulfill our obligation, not the Shema we recite as we go to sleep. And we who say Maariv prayers while it is still day before the appearance of the stars, that is because we hold like those Tanoim mentioned in the Gemara (2b) who say that the correct time to recite Shema is at the time that the day is sanctified on Shabos, which is well before the appearance of the stars. Tosfos also refers to another opinion mentioned on 2b, which was well before the appearance of the stars. The Gemara on 2b mentions another time that is earlier than the appearance of the stars, also from the time that people enter to recline and eat their meal which refers to the Shabos meal. That was while it was still day. From that time on is the time for saying Maariv prayers, which include the recital of Shema. There is also proof from the Gemara later on 27a, that Rav prayed the tefilah of Shabos on the eve of Shabos and most probably he also recited Shema at that time. This too seems to indicate that we rule that the correct time to recite Shema is not like our Mishna, which says that the time is the appearance of the stars, but rather sometime earlier. From all those proofs it seems that the recital of Shema in the synagogue is the primary recital and that is for the purpose of fulfilling our obligation to recite Shema. The recital at the time we go to sleep is not for the purpose of fulfilling our obligation, rather to ward off evil spirits. But how will Tosfos deal with Yerushalmi that clearly says that the purpose of reciting Shema in the synagogue is to stand before Hashem in prayer having uttered some words of Torah, but not in order to fulfill the obligation of reciting Shema? That which Yerushalmi says: Why did they recite Shema in the synagogue etc.? [in order to come before Hashem in prayer having uttered words of Torah], which seems to be saying that the recital of Shema in the synagogue is not for the purpose of fulfilling our obligation to say Shema. Says Rabainu Tam that it was customary for them to recite Shema before they prayed as we customarily recite Ashrey before the Minchah prayer, and that recital of Shema is only in order to come before Hashem in prayer having first said words of Torah. Yerushalmi is not discussing the Shema recited in the Maariv prayer at all. The Shema said before tefilas Maariv is for the purpose of fulfilling one’s obligation. It appears that those who followed Rashi’s opinion that the recital of Shema as we got to sleep is the actual fulfillment of the mitzvah would also say a beracha to the effect that they were fulfilling the commandment to recite Shema. From this it appears that he who recites Shema as he is about to go to bed should not recite a beracha that Hashem commanded us to recite Shema, since he has already fulfilled this mitzvah earlier during Maariv and for the same reason he only needs to recite the first paragraph, that serves to ward off the evil spirits.",
    "enCredit": "Jan Buckler · Sefaria (CC BY)"
   },
   {
    "dh": "ליתני דשחרית ברישא",
    "text": " — כדאשכחן בתמיד דכתיב של בקר תחלה:",
    "en": "as we find bye the tamid, that it writes the morning sacrifice first"
   },
   {
    "dh": "אי הכי סיפא דקתני שחרית ברישא",
    "text": " — אי אמרת בשלמא דסמיך אקרא דבשכבך א\"כ אינו מקפיד קרא אלא אק\"ש. אלא א\"א דסמיך אקרא דברייתו של עולם א\"כ קפיד אכל מילי א\"כ סיפא דקתני וכו':",
    "en": "if you say that we are relying on the pasuk that says \"when you go to sleep\" than the verse is only particular about the reading of the shema, but if you that it is relying on the verse of concerning the creation of the world then it is particular about all things, if so the end of the mishna which says"
   },
   {
    "dh": "מברך שתים לפניה וכו'",
    "text": " — (ירושלמי) ושבע ברכות הוי כנגד שבע ביום הללתיך (תהילים קי״ט:קס״ד) ולא קא חשיב יראו עינינו דההיא ברכה תקנו רבנן כדי להמתין לחבריהם בבית הכנסת. ודוקא בבית הכנסת שלהם שהיו עומדים בשדה והם מסוכנים מן המזיקים אבל בבתי כנסיות שלנו אין צריכין להמתין לחבריהם אלא בלילה:",
    "en": "the seven blessings are corresponding to the phrase \"seven times in the day I praised you\", but it doesn't count the blessing of \"our eyes shall see\", because that blessing the rabbis made so that people should wait for their friends (who were running late) in shul.but this is only true regarding their shuls because they were in the fields and were in danger due to the evil spirits, but in our shuls one must only wait at night,"
   },
   {
    "dh": "והא קמ\"ל דכפרה לא מעכבא",
    "text": " — וא\"ת הא תנינא חדא זימנא במס' נגעים (פי\"ד) ומייתי לה בהערל (דף עד:) העריב שמשו אוכל בתרומה וי\"ל דרגילות של משניות לאשמועינן בקוצר אף למה שמפורש כבר:",
    "en": "and if youll say we already taught this once on the tractate of negaim,and it is also brought in the chapter of hearel \"if the sun sets he may eat teruma?we can awnser that it is normal for mishnayos to tell us something we already know in short"
   }
  ],
  "translations": []
 },
 {
  "id": "2b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ב",
  "amud": "ב",
  "dafEn": "2b",
  "perekFirstWord": "",
  "runningHead": "מֵאֵימָתַי פֶּרֶק רִאשׁוֹן בְּרָכוֹת",
  "mishnah": "",
  "gemara": "דילמא ביאת אורו הוא ומאי וטהר טהר גברא אמר רבה בר רב שילא א\"כ לימא קרא ויטהר מאי וטהר טהר יומא כדאמרי אינשי איערב שמשא ואדכי יומא. במערבא הא דרבה בר רב שילא לא שמיע להו ובעו לה מיבעיא האי ובא השמש ביאת שמשו הוא ומאי וטהר טהר יומא או דילמא ביאת אורו הוא ומאי וטהר טהר גברא והדר פשטו לה מברייתא מדקתני בברייתא סימן לדבר צאת הכוכבים שמע מינה ביאת שמשו הוא ומאי וטהר טהר יומא. אמר מר משעה שהכהנים נכנסין לאכול בתרומתן ורמינהו מאימתי קורין את שמע בערבין משהעני נכנס לאכול פתו במלח עד שעה שעומד ליפטר מתוך סעודתו. סיפא ודאי פליגא אמתניתין. רישא מי לימא פליגי אמתני'. לא עני וכהן חד שיעורא הוא. ורמינהו מאימתי מתחילין לקרות ק\"ש בערבית משעה שבני אדם נכנסין לאכול פתן בערבי שבתות דברי ר\"מ וחכמים אומרים משעה שהכהנים זכאין לאכול בתרומתן סימן לדבר צאת הכוכבים. ואע\"פ שאין ראיה לדבר זכר לדבר שנאמר (נחמיה ד, טו) ואנחנו עושים במלאכה וחצים מחזיקים ברמחים מעלות השחר עד צאת הכוכבים ואומר (נחמיה ד, טז) והיו לנו הלילה משמר והיום מלאכה מאי ואומר וכי תימא מכי ערבא שמשא ליליא הוא ואינהו דמחשכי ומקדמי ת\"ש והיו לנו הלילה משמר והיום מלאכה קא סלקא דעתך דעני ובני אדם חד שעורא הוא ואי אמרת עני וכהן חד שעורא הוא חכמים היינו רבי מאיר אלא שמע מינה עני שעורא לחוד וכהן שעורא לחוד לא עני וכהן חד שעורא הוא ועני ובני אדם לאו חד שעורא הוא. ועני וכהן חד שעורא הוא ורמינהו מאימתי מתחילין לקרות שמע בערבין משעה שקדש היום בערבי שבתות דברי ר' אליעזר רבי יהושע אומר משעה שהכהנים מטוהרים לאכול בתרומתן רבי מאיר אומר משעה שהכהנים טובלין לאכול בתרומתן אמר לו ר' יהודה והלא כהנים מבעוד יום הם טובלים ר' חנינא אומר משעה שעני נכנס לאכול פתו במלח ר' אחאי ואמרי לה ר' אחא אומר משעה שרוב בני אדם נכנסין להסב. ואי אמרת עני וכהן חד שעורא הוא ר' חנינא היינו ר' יהושע אלא לאו שמע מינה שעורא דעני לחוד ושעורא דכהן לחוד שמע מינה. הי מנייהו מאוחר מסתברא דעני מאוחר דאי אמרת דעני מוקדם ר' חנינא היינו ר' אליעזר אלא לאו שמע מינה דעני מאוחר שמע מינה: אמר מר אמר ליה רבי יהודה והלא כהנים מבעוד יום הם טובלים שפיר קאמר ליה רבי יהודה לרבי מאיר ורבי מאיר הכי קאמר ליה מי סברת דאנא אבין השמשות דידך קא אמינא אנא אבין השמשות דרבי יוסי קא אמינא דאמר רבי יוסי בין השמשות כהרף עין זה נכנס וזה יוצא ואי אפשר לעמוד עליו",
  "rashi": [
   {
    "dh": "דילמא ביאת אורו",
    "text": " — שיאור השמש ביום השמיני ויטהר האיש עצמו בהבאת קרבנותיו ואחר יאכל:",
    "en": "Perhaps it means when the sun rises - the sun should shine on the 8th day and the man should make himself pure by bring his korban and then he can eat."
   },
   {
    "dh": "אם כן",
    "text": " — דהאי קרא וטהר לשון צווי הוא נימא קרא ויטהר מאי וטהר:",
    "en": "If so - that the possuk of \"He will come pure\" is a command, the possuk should say \"Veyitoher\", why does it say \"Vetoher\"?"
   },
   {
    "dh": "אדכי",
    "text": " — לשון עבר נתפנה מן העולם השמש:"
   },
   {
    "dh": "מברייתא",
    "text": " — דקתני לקמן בשמעתין משעה שהכהנים נכנסין לאכול בתרומתן וראיה לדבר צאת הכוכבים שמע מינה אין כפרתן מעכבתן:"
   },
   {
    "dh": "משהעני",
    "text": " — שאין לו נר להדליק בסעודתו:"
   },
   {
    "dh": "סיפא ודאי פליגא אמתני'",
    "text": " — דקתני הכא עד שעה שעומד ליפטר מתוך הסעודה והיינו לא כרבי אליעזר ולא כרבנן ולא כרבן גמליאל. דדריש ובשכבך תחלת זמן שכיבה ובמתני' תנן עד סוף האשמורה הראשונה:"
   },
   {
    "dh": "עני וכהן",
    "text": " — עני כל לילותיו וכהן טמא לאכול בתרומה:"
   },
   {
    "dh": "חד שעורא הוא– צאת הכוכבים",
    "text": ""
   },
   {
    "dh": "בערבי שבתות",
    "text": " — ממהרין לסעודה שהכל מוכן:"
   },
   {
    "dh": "שאין ראיה לדבר",
    "text": " — שהיום כלה בצאת הכוכבים זכר לדבר איכא:"
   },
   {
    "dh": "דמחשכי",
    "text": " — ועושין מלאכה בלילה משקיעת החמה עד צאת הכוכבים:"
   },
   {
    "dh": "ומקדמי",
    "text": " — ומשכימין קודם היום דאימא יום לא הוי עד הנץ החמה והם מקדימין מעלות השחר דהוי כמו מהלך ה' מילין (פסחים צג:):"
   },
   {
    "dh": "תא שמע והיה לנו הלילה משמר",
    "text": " — מדקאמר והיום מלאכה אלמא האי דעבר מעלות השחר עד צאת הכוכבים יממא הוא. וזכר לדבר איכא דכל עת מלאכה קורא הכתוב יום:"
   },
   {
    "dh": "קס\"ד",
    "text": " — רוב בני אדם היינו עניים כלומר בני אדם בערבי שבתות ועניים בימות החול חד שעורא הוא:"
   },
   {
    "dh": "משעה שקדש היום בערבי שבתות",
    "text": " — היינו בין השמשות ספק יום ספק לילה וכיון דספק הוא קדש היום מספק:"
   },
   {
    "dh": "משעה שהכהנים טובלים",
    "text": " — היינו קודם בין השמשות כדי שיהא להם קודם בין השמשות הערב שמש והכי אמרינן בבמה מדליקין (שבת לה.) דזמן הטבילה קודם בין השמשות מעט:"
   },
   {
    "dh": "והלא כהנים מבעוד יום הם טובלים",
    "text": " — רבי יהודה לטעמיה דאמר בבמה מדליקין בין השמשות כדי מהלך חצי מיל קודם צאת הכוכבים קרוי בין השמשות והוי ספק הלכך טבילה דמקמי הכי מבעוד יום הוא ולאו זמן שכיבה הוא ולקמן מפרש מאי אהדר ליה רבי מאיר:"
   },
   {
    "dh": "נכנסין להסב",
    "text": " — אית דאמרי בימות החול ואית דאמרי בשבתות מכל מקום מאוחר הוא (לכולם):"
   },
   {
    "dh": "והי מינייהו מאוחר",
    "text": " — (לכולם) דעני או דכהן:"
   },
   {
    "dh": "ה\"ג אי ס\"ד דעני קודם רבי חנינא היינו רבי אליעזר",
    "text": ""
   },
   {
    "dh": "בין השמשות דרבי יהודה מהלך חצי מיל לפני צאת הכוכבים ודרבי יוסי כהרף עין לפני צאת הכוכבים ורבי מאיר כרבי יוסי סבר ליה וכי טביל מקמי הכי סמוך לחשכה הוא וזמן שכיבה קרינן ביה",
    "text": ""
   }
  ],
  "tosafot": [
   {
    "dh": "דילמא ביאת אורו הוא",
    "text": " — פי' רש\"י עד שיזרח אורו של יום השמיני ומאי וטהר טהר גברא שיטהר האיש בהבאת קרבנותיו. ותימא לפירושו לפרוך אההיא דהערל (דף עד:) דהעריב שמשו אוכל בתרומה וכו' מנלן דביאת שמשו הוא. ועוד היכי מצי למימר דמיירי בזריחה דאי בזריחה הוא הוה מצי למכתב בקרא וזרח השמש וטהר כמו ממזרח השמש (במדבר כ״א:י״א) או לשון יציאה כמו השמש יצא על הארץ (בראשית י״ט:כ״ג) ונקט בקרא ובא השמש אלמא דהיינו שקיעת החמה. ועוד דבסמוך קא מבעיא ליה האי ובא השמש אי ביאת אורו הוא ופשיט מברייתא זכר לדבר וכו' תפשוט ממתניתין (דנגעים פי\"ד) העריב שמשו אוכל בתרומה אלמא דהיינו ביאת שמש. וי\"ל דה\"פ ממאי דהאי ובא השמש וטהר ביאת שמש הוא ממש ומאי וטהר טהר יומא דהיינו צאת הכוכבים דילמא ביאת אורו הוא דהיינו תחלתה של שקיעת החמה והוא תחלת הכנסתה ברקיע ועדיין יש שהות ביום חמש מילין עד צאת הכוכבים ומאי וטהר טהר גברא והשתא למתניתין דהערל לא קשה מידי דמצי למימר העריב שמשו דהתם היינו ביאת אורו ואף מהתם לא תפשוט דהיינו צאת הכוכבים. משום הכי איצטריך לאתויי הכא הברייתא דצאת הכוכבים:",
    "en": "rashi explains until the light of the eighth day comes out, and what does it mean \"cleansed\",that the man cleans himself with the bringing of his sacirfices. and it shocking acc to his explanation the gemera should ask this on the Mishna in hearel, wich says \"if the sun came down for him he can eat terumah\", how do we know this refers to coming down of the sun? and further more, how can we say that this refers to the coming out of the sun?, for if it were referring to coming out it could have just written \"anf the sun came out, why does it say \"and the sun came out\" like a different pasuk that says \"from the coming out of the sun\". or it could have said a language of going out like a different verse says \"the sun came out on the earth\", instead it chose a language of \"coming\" this makes it clear that were talking about the going down of the sun. and further more the gemera asks this \"coming of the sun\" does it refer to the sun coming out and it resolves it from the braisa \"the hint for the matter is\" acc to rashi who says that the question is that it might be referring the coming out of the sun in the morning then we should resolve this from the Mishna in negaim that says clearly that when the sun comes down is the time when we read the shema? we could say that this is the explaniton, the gms question is, how do you know that this \"sun coming\" is referring to the sun coming down, witch would be referring to the stars coming out, maybe its referring to the beginning of the sun setting, and this is when the sun begins to enter the sky, and there is still time to walk 5 mill until the stars come out, and what does it mean \"and he was cleansed\" that the man was cleansed? and by the saying this we no longer have any difficulty because we can say that the Mishna in hearel is referring to the coming of the sun and therefore we cant resolve from there that the \"sun coming \" is acttualy referring to the stars coming out. therefore we nedded to bring the braisa of tzeis hacochavim."
   },
   {
    "dh": "אם כן לימא קרא ויטהר",
    "text": " — אף על גב דבכמה מקומות כתיב וטהר. התם ליכא למיטעי אבל הכא דאיכא למיטעי הוה ליה למכתב ויטהר:",
    "en": "even thoguo in several places it says only \"becomes clean\" as apposed to \"he cleansed himself\", over there one would not would not make a mistake, but here where one could make a mistake it should have written \"and he cleanses himself\""
   },
   {
    "dh": "משעה שהעני נכנס לאכול פתו במלח",
    "text": " — תימא עני גופיה מתי יתפלל דהא אמרת זמן אכילתו היינו זמן ק\"ש וכיון שבא זמן ק\"ש אסור להתחיל בסעודה עד שיתפלל ברישא כדתניא לקמן (ברכות דף ד:) וקורא ק\"ש ומתפלל ואוכל פתו ומברך וכל העובר על דברי חכמים חייב מיתה ויש לומר דזמן תפלה הוי קודם לזמן סעודה דלאו דוקא משעני נכנס לאכול אלא פורתא מעיקרא קאמר שעד שיכינו לו סעודתו יקרא ויתפלל:",
    "en": "it is surprising if this is the case when the poor man himself eat? because since you said that the time for eating is the time for krias shema, then as soon as its time to eat he isn't allowed to do so because it is forbidden for one to eat once it is time to recite the shema? as we teach later on: and he reads krias shema and he eats his bread and he blesses, and anyone who disobeys the word of the sages is obligated to be put to death.? and we could that the time for davening is a little bit before the time for eating, witch means that the phrase \"from when the poor person comes in to eat\" isn't particular with its language rather it means a little bit before that time,that while they are getting his meal ready for him he can daven and read krias shema"
   },
   {
    "dh": "אע\"פ שאין ראיה לדבר",
    "text": " — ראיה גמורה אינה דהא לא מיירי התם לענין ק\"ש:"
   },
   {
    "dh": "ואי ס\"ד דעני קדים רבי חנינא היינו ר' אליעזר",
    "text": " — ולא מצי למימר דעני קדים לקדוש היום או קדוש היום קדים לשעורא דעני. דלא מסתברא לחלק כל כך בשעורי זמן שכיבה דכל זמנים הללו אית ביה:"
   },
   {
    "dh": "אמר ליה ר' יהודה והלא כהנים מבעוד יום הם טובלים",
    "text": " — תימא תיקשי ליה לנפשיה שהרי פלג המנחה מבעוד יום היא והוא אומר (לקמן ברכות דף כז.) מיד כשיעבור פלג המנחה הוי זמן ערבית. ויש לומר דלדידיה לא קשיא דלא דריש בשכבך ובקומך אבל לרבנן דדרשי קשיא דאינו זמן שכיבה:"
   }
  ],
  "translations": []
 },
 {
  "id": "3a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ג",
  "amud": "א",
  "dafEn": "3a",
  "perekFirstWord": "",
  "runningHead": "מֵאֵימָתַי פֶּרֶק רִאשׁוֹן בְּרָכוֹת",
  "mishnah": "",
  "gemara": "קשיא דר' מאיר אדר\"מ תרי תנאי אליבא דר\"מ קשיא דר' אליעזר אדר' אליעזר תרי תנאי אליבא דר' אליעזר ואב\"א רישא לאו ר' אליעזר היא: עד סוף האשמורה: מאי קסבר ר' אליעזר אי קסבר שלש משמרות הוי הלילה לימא עד ארבע שעות ואי קסבר ארבע משמרות הוי הלילה לימא עד שלש שעות לעולם קסבר שלש משמרות הוי הלילה והא קמ\"ל דאיכא משמרות ברקיע ואיכא משמרות בארעא דתניא ר' אליעזר אומר שלש משמרות הוי הלילה ועל כל משמר ומשמר יושב הקב\"ה ושואג כארי שנאמר (ירמיהו כה, ל) ה' ממרום ישאג וממעון קדשו יתן קולו שאוג ישאג על נוהו וסימן לדבר משמרה ראשונה חמור נוער שניה כלבים צועקים שלישית תינוק יונק משדי אמו ואשה מספרת עם בעלה. מאי קא חשיב ר' אליעזר אי תחלת משמרות קא חשיב תחלת משמרה ראשונה סימנא למה לי אורתא הוא אי סוף משמרות קא חשיב סוף משמרה אחרונה למה לי סימנא יממא הוא אלא חשיב סוף משמרה ראשונה ותחלת משמרה אחרונה ואמצעית דאמצעיתא ואב\"א כולהו סוף משמרות קא חשיב וכי תימא אחרונה לא צריך למאי נפקא מינה למיקרי ק\"ש למאן דגני בבית אפל ולא ידע זמן ק\"ש אימת כיון דאשה מספרת עם בעלה ותינוק יונק משדי אמו ליקום וליקרי. אמר רב יצחק בר שמואל משמי' דרב ג' משמרות הוי הלילה ועל כל משמר ומשמר יושב הקב\"ה ושואג כארי ואומר אוי לבנים שבעונותיהם החרבתי את ביתי ושרפתי את היכלי והגליתים לבין אומות העולם: תניא א\"ר יוסי פעם אחת הייתי מהלך בדרך ונכנסתי לחורבה אחת מחורבות ירושלים להתפלל בא אליהו זכור לטוב ושמר לי על הפתח (והמתין לי) עד שסיימתי תפלתי לאחר שסיימתי תפלתי אמר לי שלום עליך רבי ואמרתי לו שלום עליך רבי ומורי ואמר לי בני מפני מה נכנסת לחורבה זו אמרתי לו להתפלל ואמר לי היה לך להתפלל בדרך ואמרתי לו מתיירא הייתי שמא יפסיקו בי עוברי דרכים ואמר לי היה לך להתפלל תפלה קצרה באותה שעה למדתי ממנו שלשה דברים למדתי שאין נכנסין לחורבה ולמדתי שמתפללין בדרך ולמדתי שהמתפלל בדרך מתפלל תפלה קצרה ואמר לי בני מה קול שמעת בחורבה זו ואמרתי לו שמעתי בת קול שמנהמת כיונה ואומרת אוי לבנים שבעונותיהם החרבתי את ביתי ושרפתי את היכלי והגליתים לבין האומות ואמר לי חייך וחיי ראשך לא שעה זו בלבד אומרת כך אלא בכל יום ויום שלש פעמים אומרת כך ולא זו בלבד אלא בשעה שישראל נכנסין לבתי כנסיות ולבתי מדרשות ועונין יהא שמיה הגדול מבורך הקב\"ה מנענע ראשו ואומר אשרי המלך שמקלסין אותו בביתו כך מה לו לאב שהגלה את בניו ואוי להם לבנים שגלו מעל שולחן אביהם: ת\"ר מפני שלשה דברים אין נכנסין לחורבה מפני חשד מפני המפולת ומפני המזיקין. מפני חשד ותיפוק ליה משום מפולת",
  "rashi": [
   {
    "dh": "קשיא דרבי מאיר אדרבי מאיר",
    "text": " — לעיל אמר משעה שבני אדם נכנסין לאכול פתן בערבי שבתות והוא שעור מאוחר משל כהן. והכא אמר משעת טבילה שהיא קודם בין השמשות:"
   },
   {
    "dh": "קשיא דרבי אליעזר",
    "text": " — דברייתא אדר' אליעזר דמתנתי':"
   },
   {
    "dh": "ואיבעית אימא רישא",
    "text": " — דמתנתי':"
   },
   {
    "dh": "לאו ר' אליעזר היא",
    "text": " — והא דקתני דברי ר' אליעזר אסוף הזמן קאי דקאמר עד סוף האשמורה הראשונה ופליגי רבנן עליה ואמרי עד חצות. דרבי אליעזר דריש בשכבך זמן התחלת שכיבה שבני אדם הולכים לשכב זה קודם וזה מאוחר. ורבנן דרשי כל זמן שכיבה דהיינו כל הלילה אלא שעשו סייג לדבר ואמרו עד חצות. ורבן גמליאל לית ליה ההוא סייג:"
   },
   {
    "dh": "מאי קסבר כו'",
    "text": " — הוה ליה לומר זמן הניכר:"
   },
   {
    "dh": "אי קסבר",
    "text": " — דפליגי תנאי לקמן בהא מלתא איכא מאן דאמר ג' משמרות הוי הלילה במשמרות עבודת המלאכים ושיר שלהם נחלק לשלש חלקים ראשונה לכת אחת שניה לכת אחרת שלישית לכת שלישית. ואיכא מאן דאמר ארבע משמרות הוי הלילה:"
   },
   {
    "dh": "והא קא משמע לן",
    "text": " — כשנתן לך סימן זמן הקריאה בסוף האשמורה ולא פי' לך סימן מפורש למדך שיש היכר לכל אדם בדבר כי היכי דאיכא ברקיע:"
   },
   {
    "dh": "ישאג שאוג ישאג",
    "text": " — הרי ג':"
   },
   {
    "dh": "ואשה מספרת עם בעלה",
    "text": " — כבר הגיע קרוב ליום ובני אדם מתעוררים משינתן והשוכבים יחד מספרים זה עם זה:"
   },
   {
    "dh": "מאי קא חשיב",
    "text": " — סימנים הללו שנתן למשמרות הארץ היכן נתנו. בתחלת האשמורות או בסופן:"
   },
   {
    "dh": "אורתא הוא",
    "text": " — צאת הכוכבים:"
   },
   {
    "dh": "ושמר",
    "text": " — והמתין כמו לא יאמר אדם לחבירו שמור לי בצד ע\"ג פלוני (סנהדרין סג:) ובב\"ק בפ' החובל (בבא קמא דף צ':) שמרה עומדת על פתח חצרה. וכן ואביו שמר את הדבר (בראשית ל״ז:י״א); שומר אמונים (ישעיה כו):"
   },
   {
    "dh": "תפלה קצרה",
    "text": " — [הביננו] ולקמן מפרש לה בפ' תפלת השחר (ברכות דף כ\"ט.):"
   },
   {
    "dh": "אשרי המלך שמקלסין אותו בביתו כך",
    "text": " — אשרי כל זמן שהיה קלוס זה בתוך בהמ\"ק:"
   },
   {
    "dh": "מפני חשד",
    "text": " — שלא יאמרו זונה מוכנת לו שם:"
   },
   {
    "dh": "ומפני המפולת",
    "text": " — שחומת החורבה רעועה ומסוכן הוא פן תפול החומה עליו:"
   },
   {
    "dh": "תיפוק ליה",
    "text": " — כלומר למה לנו ג' טעמים לדבר א' הרי די באחת מהן אם לא בא ללמדך שיש שעות שאין הטעם הזה וצריך להניח בשביל זה:"
   }
  ],
  "tosafot": [
   {
    "dh": "קשיא דר' מאיר אדר' מאיר",
    "text": " — דלא מצי למימר בשעה שבני אדם נכנסין וכהן חד שעורא הוא דאם כן רבי מאיר היינו רבי אחאי לפי' רש\"י שפי' שרוב בני אדם נכנסין להסב דהיינו בע\"ש. *[וגם כן] לא מסתברא למימר דבני אדם ממהרין כל כך בערבי שבתות כמו בזמן שהכהנים טובלין דהיינו מבעוד יום קודם הערב שמש: *[גי' מהרש\"ל. ורש\"א גריס אי נמי]",
    "en": "because we cant say that the time of the day becoming holy and the time in witch the priests come in to eat the tithings is the same because if this were the case then the opinion of r Eliezer would be the same opinion of r yehoshua"
   },
   {
    "dh": "קשיא דרבי אליעזר אדר' אליעזר",
    "text": " — דלא מצי למימר משקדש היום וכהנים נכנסין לאכול בתרומתן חד שעורא הוא דא\"כ ר' אליעזר היינו ר' יהושע :",
    "en": "And if you'll ask, we know that Rabbi Eliezer holds that in order to read Krias Shema it must be light enough to recognize between blue and green? We can answer that since he knows when the rising of the sun is, by the time he gets up and gets ready it will be the right time."
   },
   {
    "dh": "למאן דגני בבית אפל",
    "text": " — וא\"ת והלא רבי אליעזר בעי (לקמן ברכות ד' ט:) עד שיכיר בין תכלת לכרתי בק\"ש של שחרית. וי\"ל מ\"מ כיון שידע מתי יעלה עמוד השחר. קודם שיקום ויזמן עצמו כבר הגיע אותו עת:",
    "en": "from he we can go against what the machzor vitrey says, wich is that the phrase of \"let his name be blessed\" is a prayer that gods name should be filled up,"
   },
   {
    "dh": "היה לך להתפלל תפילה קצרה",
    "text": " — לכאורה משמע שאין זה הביננו. דהא קא בעי לקמן (ברכות ד' ל.) מאי איכא בין הביננו לתפלה קצרה. א\"כ לפי' הקונ' שפי' בכאן דהיינו הביננו קשה. אלא ע\"כ היינו תפלה אחרינא כדמפרש לקמן צרכי עמך מרובים וכו'. וגם על זה קשה דלקמן אמירנן שאין לומר תפלת של צרכי עמך אלא במקום סכנה. ורבי יוסי לא הוה במקום סכנה פי' במקום לסטים. מדהשיב לו שמא יפסיקו בי עוברי דרכים ולא השיב שמא יהרגוני לסטים. ונראה לי כפ\"ה תפלה קצרה דהכא היינו הביננו. ואע\"ג דלייט עלה אביי אמאן דמתפלל הביננו. היינו דוקא בעיר אבל בשדה מותר. והא דאמרי' לקמן מאי איכא בין הביננו לתפלה קצרה. הכי קאמר בין תפלה קצרה דאמר בפ' תפלת השחר (ברכות דף כט:) כגון צרכי עמך וכו'. אבל ודאי תפלה קצרה דהכא צ\"ל הביננו:"
   },
   {
    "dh": "ועונין יהא שמיה הגדול מבורך",
    "text": " — מכאן יש לסתור מה שפי' במחזור ויטרי יהא שמיה רבא שזו תפלה שאנו מתפללין שימלא שמו כדכתיב (שמות י״ז:ט״ז) כי יד על כס יה שלא יהא שמו שלם וכסאו שלם עד שימחה זרעו של עמלק ופירושו כך יהא שמי\"ה שם יה רבא כלומר שאנו מתפללין שיהא שמו גדול ושלם ומבורך לעולם הוי תפלה אחרת כלומ' ומבורך לעולם הבא. וזה לא נראה מדקאמר הכא יהא שמיה הגדול מבורך משמע דתפלה אחת היא ואינו רוצה לומר שיהא שמו גדול ושלם אלא יהא שמו הגדול מבורך וגם מה שאומרי' העולם לכך אומרים קדיש בלשון ארמית לפי שתפלה נאה ושבח גדול הוא על כן נתקן בלשון תרגום שלא יבינו המלאכים ויהיו מתקנאין בנו וזה אינו נראה שהרי כמה תפלות יפות שהם בלשון עברי אלא נראה כדאמרינן בסוף סוטה (דף מט.) אין העולם מתקיים אלא אסדרא דקדושתא ואיהא שמיה רבא דבתר אגדתא שהיו רגילין לומר קדיש אחר הדרשה ושם היו עמי הארצות ולא היו מבינים כולם לשון הקודש לכך תקנוהו בלשון תרגום שהיו הכל מבינים שזה היה לשונם :"
   }
  ],
  "translations": []
 },
 {
  "id": "3b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ג",
  "amud": "ב",
  "dafEn": "3b",
  "perekFirstWord": "",
  "runningHead": "מֵאֵימָתַי פֶּרֶק רִאשׁוֹן בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בחדתי ותיפוק ליה משום מזיקין בתרי אי בתרי חשד נמי ליכא בתרי ופריצי. מפני המפולת ותיפוק ליה משום חשד ומזיקין בתרי וכשרי. מפני המזיקין ותיפוק ליה מפני חשד ומפולת בחורבה חדתי ובתרי וכשרי אי בתרי מזיקין נמי ליכא במקומן חיישינן ואי בעית אימא לעולם בחד ובחורבה חדתי דקאי בדברא דהתם משום חשד ליכא דהא אשה בדברא לא שכיחא ומשום מזיקין איכא: תנו רבנן ארבע משמרות הוי הלילה דברי רבי רבי נתן אומר שלוש מאי טעמא דרבי נתן דכתיב תנא אין תיכונה אלא שיש לפניה ולאחריה ורבי מאי תיכונה אחת מן התיכונה שבתיכונות ורבי נתן מי כתיב תיכונה שבתיכונות תיכונה כתיב מאי טעמיה דרבי אמר רבי זריקא אמר רבי אמי אמר רבי יהושע בן לוי כתוב אחד אומר וכתוב אחד אומר (שם) קדמו עיני אשמורות הא כיצד ארבע משמרות הוי הלילה ורבי נתן סבר לה כרבי יהושע דתנן רבי יהושע אומר עד שלוש שעות שכן דרך מלכים לעמוד בשלוש שעות שית דליליא ותרתי דיממא הוו להו שתי משמרות רב אשי אמר משמרה ופלגא נמי משמרות קרו להו: ואמר רבי זריקא אמר רבי אמי אמר רבי יהושע בן לוי אין אומרין בפני המת אלא דבריו של מת אמר רבי אבא בר כהנא לא אמרן אלא בדברי תורה אבל מילי דעלמא לית לן בה ואיכא דאמרי אמר רבי אבא בר כהנא לא אמרן אלא [אפילו] בדברי תורה וכל שכן מילי דעלמא: ודוד בפלגא דליליא הוה קאי מאורתא הוה קאי דכתיב וממאי דהאי נשף אורתא הוא דכתיב אמר רב אושעיא אמר רבי אחא הכי קאמר (דוד) מעולם לא עבר עלי חצות לילה בשינה. רבי זירא אמר עד חצות לילה היה מתנמנם כסוס מכאן ואילך היה מתגבר כארי רב אשי אמר עד חצות לילה היה עוסק בדברי תורה מכאן ואילך בשירות ותשבחות. ונשף אורתא הוא הא נשף צפרא הוא דכתיב מאי לאו מצפרא ועד ליליא לא מאורתא ועד אורתא אי הכי לכתוב מהנשף ועד הנשף או מהערב ועד הערב אלא אמר רבא תרי נשפי הוו נשף ליליא ואתי יממא נשף יממא ואתי ליליא. ודוד מי הוה ידע פלגא דליליא אימת השתא משה רבינו לא הוה ידע דכתיב מאי כחצות אילימא דאמר ליה קודשא בריך הוא כחצות מי איכא ספיקא קמי שמיא אלא דאמר ליה (למחר) בחצות (כי השתא) ואתא איהו ואמר כחצות אלמא מספקא ליה ודוד הוה ידע דוד סימנא הוה ליה דאמר רב אחא בר ביזנא אמר רבי שמעון חסידא כינור היה תלוי למעלה ממיטתו של דוד וכיוון שהגיע חצות לילה בא רוח צפונית ונושבת בו ומנגן מאליו מיד היה עומד ועוסק בתורה עד שעלה עמוד השחר כיוון שעלה עמוד השחר נכנסו חכמי ישראל אצלו אמרו לו אדונינו המלך עמך ישראל צריכין פרנסה אמר להם לכו והתפרנסו זה מזה אמרו לו אין הקומץ משביע את הארי ואין הבור מתמלא מחולייתו אמר להם לכו ופשטו ידיכם בגדוד מיד יועצים באחיתופל ונמלכין בסנהדרין ושואלין באורים ותומים אמר רב יוסף מאי קרא (דכתיב) אחיתופל זה יועץ וכן הוא אומר",
  "rashi": [
   {
    "dh": "בחדתי",
    "text": " — שנפלה מחדש שהחומה שלה נפלה ועודנה בחזקתה:",
    "en": "There is no suspicion also- As we learned in a Mishna(Kiddushin 80b): but not with a woman and two men."
   },
   {
    "dh": "חשד נמי ליכא",
    "text": " — דתנן (במסכת קדושין דף פ:) אבל אשה מתיחדת עם שני אנשים:",
    "en": "With two immoral- And it was taught there only with two who are known to be innocent(not immoral)."
   },
   {
    "dh": "בתרי ופריצי",
    "text": " — דאמרינן התם לא שנו אלא בכשרים:",
    "en": "In their place- In a place where they appear frequently, we are concerned even with two people."
   },
   {
    "dh": "במקומן חיישינן",
    "text": " — במקום שהם מצויין תדיר חיישינן אפילו בתרי:",
    "en": "בדברא- in a field"
   },
   {
    "dh": "בדברא",
    "text": " — בשדה:"
   },
   {
    "dh": "קדמו עיני אשמורות",
    "text": " — אלמא חצות לילה שהיה דוד עומד שתי משמרות יש בהם:"
   },
   {
    "dh": "ורבי נתן",
    "text": " — אמר לך האי קדמו עיני אשמורות דקאמר דוד קדמו לשאר מלכים קאמר שדרכן לעמוד בשלש שעות ביום בתחלת שעה שלישית:"
   },
   {
    "dh": "שית דליליא",
    "text": " — חצות לילה הוי שש שעות:"
   },
   {
    "dh": "ותרתי דיממא",
    "text": " — ששאר מלכים ישנים הוו להו תרתי משמרות של שמונה שעות:"
   },
   {
    "dh": "אלא לדבר הלכה",
    "text": " — אסור לספר לפניו שהכל חייבין לספר בהן והמת דומם והוה ליה לועג לרש חרף עושהו (משלי י״ז:ה׳):"
   },
   {
    "dh": "אבל מילי דעלמא",
    "text": " — שאין גנאי למחריש בהן לית לן בה:"
   },
   {
    "dh": "מאורתא",
    "text": " — מתחלת הלילה:"
   },
   {
    "dh": "בנשף בערב יום",
    "text": " — בהעריב היום קרוי נשף:"
   },
   {
    "dh": "ה\"ק",
    "text": " — קרא דחצות לילה:"
   },
   {
    "dh": "מעולם לא עבר עלי חצות לילה בשינה",
    "text": " — שקודם לכן הייתי עומד:"
   },
   {
    "dh": "מתנמנם כסוס",
    "text": " — עוסק בתורה כשהוא מתנמנם. כסוס הזה שאינו נרדם לעולם אלא מתנמנם ונעור תמיד:"
   },
   {
    "dh": "בשירות ותשבחות",
    "text": " — והכי מפרש בההוא קרא להודות לך וגו':"
   },
   {
    "dh": "למחרתם",
    "text": " — ליום מחרת של חנייתם שם:"
   },
   {
    "dh": "ה\"ג אי הכי לכתוב מהנשף ועד הנשף או מהערב ועד הערב אלא אמר רב אשי תרי נשפי הוו",
    "text": ""
   },
   {
    "dh": "נשף יממא",
    "text": " — קפץ ועלה כמו לנשוף מדוכתיה (מגילה ג.) כמו האי בוקא דאטמא דשף מדוכתיה טרפה (חולין מב:):"
   },
   {
    "dh": "ואתא איהו ואמר כחצות",
    "text": " — לפי שלא היה יודע לכוין השעה ולהעמיד דבריו בשעת המאורע:"
   },
   {
    "dh": "כנור היה תלוי למעלה ממטתו",
    "text": " — ונקביו לצד צפון כיון שהגיע חצות הלילה רוח צפונית מנשבת בו דאמר מר (בב\"ב כה.) ארבע רוחות מנשבות בכל יום ויום שש שעות ראשונות של יום מנשבת רוח מזרחית מהלוך החמה ושש אחרונות רוח דרומית ובתחלת הלילה רוח מערבית ובחצות הלילה רוח צפונית:"
   },
   {
    "dh": "אין הבור מתמלא מחוליתו",
    "text": " — העוקר חוליא מבור כרוי וחוזר ומשליכו לתוכו אין מתמלא בכך. אף כאן אם אין אתה מכין לעניים שבנו מזונות ממקום אחר אין אנו יכולין לפרנסם משל עצמנו:"
   },
   {
    "dh": "יועצים באחיתופל",
    "text": " — איזה הדרך ילכו והיאך יציבו מצב ומשחית וטכסיסי מארב מלחמה:"
   },
   {
    "dh": "ונמלכין בסנהדרין",
    "text": " — נוטלין מהם רשות כדי שיתפללו עליהם:"
   },
   {
    "dh": "ושואלין באורים ותומי'",
    "text": " — אם יצליחו:"
   },
   {
    "dh": "ה\"ג מאי קרא ואחרי אחיתופל בניהו בן יהוידע ואביתר ושר צבא למלך יואב אחיתופל זה יועץ",
    "text": ""
   }
  ],
  "tosafot": [
   {
    "dh": "אין אומרין בפני המת אלא דבריו של מת",
    "text": " — ופסק רב אלפס משום רב האי דווקא דברי תורה אבל דברים דעלמא לית לן בה. ודווקא בארבע אמות שלו:",
    "en": "And Rav Alfasi decided in the name of Rav Hai, this only applies with words of Torah. However, other topics are not an issue. Also, it is only within four cubits of the dead."
   },
   {
    "dh": "במקומן חיישינן",
    "text": " — פי' שידוע שרגילין שם המזיקין. וההיא דלעיל דבתרי ופריצי ליכא משום מזיקין איירי בסתם שאין רגילין:",
    "en": "[Never did midnight pass while I was asleep: Seemingly, He (King David) was expressing that it never happened that I was asleep at chatzot, and sometimes I would be up earlier from the neshef (evening)]"
   },
   {
    "dh": "אין אומרין בפני המת אלא דבריו של מת",
    "text": " — ופסק רב אלפס משום רב האי דוקא דברי תורה אבל דברים דעלמא לית לן בה. ודוקא בארבע אמות שלו:"
   },
   {
    "dh": "[שם מעולם לא עבר עליי חצות לילה בשינה",
    "text": " — נראה דר\"ל שזה לא אירע לעולם שאהיה ישן בחצות ולפעמים הייתי מקדים עוד מהנשף]"
   },
   {
    "dh": "ואתא איהו ואמר כחצות",
    "text": " — ואם תאמר מכל מקום לימא בחצות כמו שאמרו לו מן השמים דהא אמת אמרו לו. וי\"ל שלא רצה לומר להם דבר שלא היה יכול להראות ולהוכיח אם ישאלו לו:"
   },
   {
    "dh": "רוח צפונית מנשבת",
    "text": " — פי' לבדה דהא אמרינן בפרק לא יחפור (בבא בתרא כה א) שהיא מנשבת עם על אחד ואחד:"
   },
   {
    "dh": "ואין הבור מתמלא מחוליתו",
    "text": " — פירש רש\"י אם יחפור ויחזיר בו עפרו לא יהא מלא. ותימא דאין הנדון דומה לראיה שהרי לא היה אומר להם אלא ליטול מן העשירים וליתן לעניים. אם היה מצוה ליטול מן העניים ולחזור וליתן להם אז היה דומה למשל. ומפרש רבינו תם מחוליתו מנביעתו כלומר אין הבור מתמלא מן המים הנובעים בו. ובתוספתא יש אין הבור מתמלא מחוליתו אלא אם כן מושכין לו מים מצד אחר. ור\"י פירש שאם תחפור מצד זה ותניח מצד אחר לא תמלא שמה שנותן כאן חסר כאן. כמו כן מה שנוטל מן העשירים יתחסר מן העשירים :"
   }
  ],
  "translations": []
 },
 {
  "id": "4a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ד",
  "amud": "א",
  "dafEn": "4a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בניהו בן יהוידע זה סנהדרין ואביתר אלו אורים ותומים וכן הוא אומר (שמואל ב כ, כג) ובניהו בן יהוידע על הכרתי ועל הפלתי ולמה נקרא שמם כרתי ופלתי כרתי שכורתים דבריהם פלתי שמופלאים בדבריהם ואח\"כ שר צבא למלך יואב אמר רב יצחק בר אדא ואמרי לה אמר רב יצחק בריה דרב אידי מאי קרא (תהלים נז, ט) עורה כבודי עורה הנבל וכנור אעירה שחר. רבי זירא אמר משה לעולם הוה ידע ודוד נמי הוה ידע וכיון דדוד הוה ידע כנור למה ליה לאתעורי משנתיה וכיון דמשה הוה ידע למה ליה למימר כחצות משה קסבר שמא יטעו אצטגניני פרעה ויאמרו משה בדאי הוא דאמר מר למד לשונך לומר איני יודע שמא תתבדה ותאחז רב אשי אמר בפלגא אורתא דתליסר נגהי ארבסר הוה קאי והכי קאמר משה לישראל אמר הקב\"ה למחר כחצות הלילה כי האידנא אני יוצא בתוך מצרים: (תהלים פו, ב) לדוד שמרה נפשי כי חסיד אני לוי ור' יצחק חד אמר כך אמר דוד לפני הקב\"ה רבונו של עולם לא חסיד אני שכל מלכי מזרח ומערב ישנים עד שלש שעות ואני (תהלים קיט, סב) חצות לילה אקום להודות לך ואידך כך אמר דוד לפני הקב\"ה רבונו של עולם לא חסיד אני שכל מלכי מזרח ומערב יושבים אגודות אגודות בכבודם ואני ידי מלוכלכות בדם ובשפיר ובשליא כדי לטהר אשה לבעלה ולא עוד אלא כל מה שאני עושה אני נמלך במפיבשת רבי ואומר לו מפיבשת רבי יפה דנתי יפה חייבתי יפה זכיתי יפה טהרתי יפה טמאתי ולא בושתי א\"ר יהושע בריה דרב אידי מאי קרא (תהלים קיט, מו) ואדברה בעדותיך נגד מלכים ולא אבוש תנא לא מפיבשת שמו אלא איש בשת שמו ולמה נקרא שמו מפיבשת שהיה מבייש פני דוד בהלכה לפיכך זכה דוד ויצא ממנו כלאב וא\"ר יוחנן לא כלאב שמו אלא דניאל שמו ולמה נקרא שמו כלאב שהיה מכלים פני מפיבשת בהלכה ועליו אמר שלמה בחכמתו (משלי כג, טו) בני אם חכם לבך ישמח לבי גם אני ואומר (משלי כז, יא) חכם בני ושמח לבי ואשיבה חורפי דבר. ודוד מי קרי לנפשיה חסיד והכתיב (תהלים כז, יג) לולא האמנתי לראות בטוב ה' בארץ חיים ותנא משמיה דרבי יוסי למה נקוד על לולא אמר דוד לפני הקב\"ה רבש\"ע מובטח אני בך שאתה משלם שכר טוב לצדיקים לעתיד לבוא אבל איני יודע אם יש לי חלק ביניהם אם לאו שמא יגרום החטא כדר' יעקב בר אידי דר' יעקב בר אידי רמי כתיב (בראשית כח, טו) והנה אנכי עמך ושמרתיך בכל אשר תלך וכתיב (בראשית לב, ח) ויירא יעקב מאד אמר שמא יגרום החטא כדתניא (שמות טו, טז) עד יעבור עמך ה' עד יעבור עם זו קנית עד יעבור עמך ה' זו ביאה ראשונה עד יעבור עם זו קנית זו ביאה שנייה מכאן אמרו חכמים ראוים היו ישראל ליעשות להם נס בימי עזרא כדרך שנעשה להם בימי יהושע בן נון אלא שגרם החטא: וחכ\"א עד חצות: חכמים כמאן סבירא להו אי כרבי אליעזר סבירא להו לימרו כרבי אליעזר",
  "rashi": [
   {
    "dh": "בניהו בן יהוידע זה סנהדרין",
    "text": " — שהיה אב בית דין:"
   },
   {
    "dh": "ואביתר אלו אורים ותומים",
    "text": " — שכל ימי דוד היה נשאל באביתר עד מלחמת אבשלום ששאל אביתר ולא עלתה לו ושאל צדוק ועלתה לו כדאמרי' בסדר עולם ונסתלק אז מן הכהונה:"
   },
   {
    "dh": "וכן הוא אומר ובניהו בן יהוידע על הכרתי ועל הפלתי",
    "text": " — ראשון וקודם להם שבתחילה נוטלים רשות ואח\"כ שואלים אם יצליחו:"
   },
   {
    "dh": "שכורתים את דבריהם",
    "text": " — שאומרים דברים קצובים וגמורים שלא יפחתו ולא יוסיפו:"
   },
   {
    "dh": "שר צבא למלך יואב",
    "text": " — להוליך אנשי המלחמה:"
   },
   {
    "dh": "מאי קרא",
    "text": " — דכנור היה תלוי למעלה ממטתו ומעוררו:"
   },
   {
    "dh": "עורה כבודי",
    "text": " — אל תתכבדי בשינה כשאר מלכים:"
   },
   {
    "dh": "אעירה שחר",
    "text": " — שאר מלכים השחר מעוררן ואני מעורר את השחר:"
   },
   {
    "dh": "שמא יטעו אצטגניני פרעה",
    "text": " — אם אני יודע לכוין השעה הם אינם יודעים לכוין השעה וקודם שיגיע חצות יהו סבורים שהגיע ועדיין לא באה המכה ויאמרו משה בדאי הוא הלכך טוב לאחוז לשון איני יודע:"
   },
   {
    "dh": "דאמר מר",
    "text": " — במסכת דרך ארץ:"
   },
   {
    "dh": "ותאחז",
    "text": " — תהא נאחז ונכשל בדבריך:"
   },
   {
    "dh": "תליסר נגהי ארבסר",
    "text": " — ליל שעבר שלשה עשר ולמחרת יגיע ארבעה עשר:"
   },
   {
    "dh": "ידי מלוכלכות בדם",
    "text": " — שהנשים מראות לו דם נדה אם טמא אם טהור שיש מראות דם טהור באשה:"
   },
   {
    "dh": "ובשפיר",
    "text": " — הוא עור הולד שהעצמות והגידים והבשר נצורים בתוכו. ויש שפיר שהאשה יושבת עליו ימי טומאה וימי טהרה ואי זה זה המרוקם ובמס' נדה (דף כד ב) מפרש לה ויש שפיר מלא מים ודם שאינו חשוב ולד לישב עליו טומאת יולדת וימי טהרתה:"
   },
   {
    "dh": "ובשליא",
    "text": " — דתנן (שם כו) אין שליא בלא ולד והוא כמין לבוש שהולד שוכב בתוכה וקורין ושטי\"דור בלע\"ז ותניא (שם) אין שליא פחותה מטפח ותחלתה כחוט של ערב וסופה כתורמוס והיו מביאין אותה לפניו לראות אם יש בה כשיעור ואם עשויה כדת שליא שנחזיקנה שהיה ולד בתוכה ונמוח ותשב עליו ימי טומאה וטהרה אם לאו:"
   },
   {
    "dh": "זכיתי וחייבתי",
    "text": " — שייך בדיני ממונות ודיני נפשו':"
   },
   {
    "dh": "טמאתי וטהרתי",
    "text": " — בהלכות טומאה וטהרה:"
   },
   {
    "dh": "מפיבושת",
    "text": " — [מפי בושת] בדברי הלכה היוצאין מפיו היה בושת לדוד שפעמים שהיה טועה והוא אומר לו טעית:"
   },
   {
    "dh": "לפיכך",
    "text": " — בזכות שהיה דוד מקטין עצמו זכה ויצא ממנו כלאב:"
   },
   {
    "dh": "אלא דניאל שמו",
    "text": " — במקום אחד אומר (שמואל ב ג׳:ג׳) ומשנהו כלאב לאביגיל אשת נבל וגו' ובמקום אחר אומר והשני דניאל לאביגיל בדברי הימים (א ג):"
   },
   {
    "dh": "שהיה מכלים פני מפיבושת",
    "text": " — כל אב מכלים את הרב שהיה אב בהוראות:"
   },
   {
    "dh": "לולא האמנתי לראות בטוב ה'",
    "text": " — כבר טרדוני מיראתך כמו שנאמר כי גרשוני היום מהסתפח בנחלת ה' לאמר לך עבוד וגו' (שמואל א כ״ו:י״ט):"
   },
   {
    "dh": "נקוד על לולא",
    "text": " — לדרוש את הנקודה שהיא ממעטת את משמעות הכתוב לומר שלא דבר ברור היה לו לראות בטוב ה'. לולא לשון אם לא כמו לולי אלהי אבי וגו' היה לי (בראשית ל״א:מ״ב):"
   },
   {
    "dh": "שמא יגרום החטא",
    "text": " — תירוצא הוא לעולם מוחזק בידו שהוא חסיד וזה שספק בידו אם יראה בטוב ה' לפי שהיה ירא שמא יחטא ויגרום החטא מלראות בטוב:"
   },
   {
    "dh": "ויירא יעקב",
    "text": " — שמא אחר הבטחה חטאתי וכדתניא שהחטא גורם שאין ההבטחה מתקיימת:"
   },
   {
    "dh": "ביאה ראשונה",
    "text": " — שבאו בימי יהושע:"
   },
   {
    "dh": "ביאה שנייה",
    "text": " — כשעלו מגלות בבל בימי עזרא:"
   },
   {
    "dh": "ראויים היו ליעשות להם נס",
    "text": " — לבוא ביד רמה:"
   },
   {
    "dh": "אלא שגרם החטא",
    "text": " — ולא הלכו אלא ברשות כורש וכל ימי מלכי פרס נשתעבדו להם לכורש ולאחשורוש ולדריוש האחרון:"
   },
   {
    "dh": "חכמים כמאן סבירא להו",
    "text": " — במשמעות בשכבך האמור בתורה:"
   },
   {
    "dh": "אי כר' אליעזר סבירא להו",
    "text": " — דאית ליה בשכבך כל זמן שבני אדם עוסקין לילך ולשכב זה מקדים וזה מאחר:"
   },
   {
    "dh": "לימרו כר' אליעזר",
    "text": " — דאמר סוף האשמורה הראשונה דודאי כל שדעתו לישן כבר שכב וישן:"
   }
  ],
  "tosafot": [
   {
    "dh": "בניהו זה סנהדרין",
    "text": " — מסברא אומר כן. אביתר אלו אורים ותומים וכן הוא אומר ובניהו בן יהוידע על הכרתי ועל הפלתי כלומר היה קודם להם אם כן אורים ותומים היו אחר בניהו. א\"כ אביתר שהוזכר אחר בניהו היינו אורים ותומים כך פירש רש\"י. ותימא לפירושו פשיטא דאביתר כהן היה בימי דוד שלא היה כהן אחר שכולם נהרגו בנוב עיר הכהנים ולמה צריך ראיה עליה. ועוד לגירסת הקונטרס בניהו בן יהוידע אין זה הפסוק בשום מקום. לכך (מפרש) [גריס] רבינו תם כדאי' (בדברי הימים א כ״ז:ל״ד) ואחרי אחיתופל יהוידע בן בניהו זה סנהדרין וכן הוא אומר ובניהו בן יהוידע על הכרתי ועל הפלתי ופי' ר\"ת דכרתי ופלתי היינו סנהדרין שכורתין דבריהם לאמתן ופלתי שמופלאים בהוראה כמו מופלא שבבית דין. וא\"ת היכי פשיט יהוידע בן בניהו מבניהו בן יהוידע. וי\"ל דמסתמא ממלא מקום אביו היה וכי היכי דאביו היה מסנהדרין גם הוא היה מהם:"
   }
  ],
  "translations": []
 },
 {
  "id": "4b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ד",
  "amud": "ב",
  "dafEn": "4b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ואי כרבן גמליאל סבירא להו לימרו כרבן גמליאל לעולם כרבן גמליאל סבירא להו והא דקא אמרי עד חצות כדי להרחיק את האדם מן העבירה כדתניא חכמים עשו סייג לדבריהם כדי שלא יהא אדם בא מן השדה בערב ואומר אלך לביתי ואוכל קימעא ואשתה קימעא ואישן קימעא ואח\"כ אקרא ק\"ש ואתפלל וחוטפתו שינה ונמצא ישן כל הלילה אבל אדם בא מן השדה בערב נכנס לבית הכנסת אם רגיל לקרות קורא ואם רגיל לשנות שונה וקורא ק\"ש ומתפלל ואוכל פתו ומברך וכל העובר על דברי חכמים חייב מיתה מאי שנא בכל דוכתא דלא קתני חייב מיתה ומאי שנא הכא דקתני חייב מיתה איבעית אימא משום דאיכא אונס שינה ואיבע\"א לאפוקי ממאן דאמר תפלת ערבית רשות קמ\"ל דחובה: אמר מר קורא ק\"ש ומתפלל מסייע ליה לר' יוחנן דאמר ר' יוחנן איזהו בן העולם הבא זה הסומך גאולה לתפלה של ערבית רבי יהושע בן לוי אומר תפלות באמצע תקנום במאי קא מפלגי אי בעית אימא קרא איבע\"א סברא איבע\"א סברא דר' יוחנן סבר גאולה מאורתא נמי הוי אלא גאולה מעלייתא לא הויא אלא עד צפרא ור' יהושע בן לוי סבר כיון דלא הויא אלא מצפרא לא הויא גאולה מעלייתא ואב\"א קרא ושניהם מקרא אחד דרשו דכתיב (דברים ו, ז) בשכבך ובקומך ר' יוחנן סבר מקיש שכיבה לקימה מה קימה ק\"ש ואח\"כ תפלה אף שכיבה נמי ק\"ש ואח\"כ תפלה ר' יהושע בן לוי סבר מקיש שכיבה לקימה מה קימה ק\"ש סמוך למטתו אף שכיבה נמי ק\"ש סמוך למטתו מתיב מר בריה דרבינא בערב מברך שתים לפניה ושתים לאחריה ואי אמרת בעי לסמוך הא לא קא סמך גאולה לתפלה דהא בעי למימר השכיבנו אמרי כיון דתקינו רבנן השכיבנו כגאולה אריכתא דמיא דאי לא תימא הכי שחרית היכי מצי סמיך והא אמר רבי יוחנן בתחלה אומר (תהלים נא, יז) ה' שפתי תפתח ולבסוף הוא אומר (תהלים יט, טו) יהיו לרצון אמרי פי אלא התם כיון דתקינו רבנן למימר ה' שפתי תפתח כתפלה אריכתא דמיא הכא נמי כיון דתקינו רבנן למימר השכיבנו כגאולה אריכתא דמיא: אמר רבי אלעזר א\"ר אבינא כל האומר (תהלים קמה, א) תהלה לדוד בכל יום שלש פעמים מובטח לו שהוא בן העולם הבא מאי טעמא אילימא משום דאתיא באל\"ף בי\"ת נימא (תהלים קיט, א) אשרי תמימי דרך דאתיא בתמניא אפין אלא משום דאית ביה (תהלים קמה, טז) פותח את ידך נימא הלל הגדול דכתיב ביה (תהלים קלו, כה) נותן לחם לכל בשר אלא משום דאית ביה תרתי אמר רבי יוחנן מפני מה לא נאמר נו\"ן באשרי מפני שיש בה מפלתן של שונאי ישראל דכתיב (עמוס ה, ב) נפלה לא תוסיף קום בתולת ישראל במערבא מתרצי לה הכי נפלה ולא תוסיף לנפול עוד קום בתולת ישראל אמר רב נחמן בר יצחק אפילו הכי חזר דוד וסמכן ברוח הקדש שנא' (תהלים קמה, יד) סומך ה' לכל הנופלים: א\"ר אלעזר בר אבינא גדול מה שנאמר במיכאל יותר ממה שנאמר בגבריאל דאילו במיכאל כתי' (ישעיהו ו, ו) ויעף אלי אחד מן השרפים ואלו גבי גבריאל כתי' (דניאל ט, כא) והאיש גבריאל אשר ראיתי בחזון בתחלה מועף ביעף וגו' מאי משמע דהאי אחד מיכאל הוא אמר ר' יוחנן אתיא אחד אחד כתיב הכא ויעף אלי אחד מן השרפים וכתי' התם (דניאל י, יג) והנה מיכאל אחד (מן) השרים הראשונים בא לעזרני תנא מיכאל באחת גבריאל בשתים אליהו בארבע ומלאך המות בשמנה ובשעת המגפה באחת: א\"ר יהושע בן לוי אע\"פ שקרא אדם ק\"ש בביהכ\"נ מצוה לקרותו על מטתו אמר רבי יוסי מאי קרא (תהלים ד, ה) רגזו ואל תחטאו אמרו בלבבכם על משכבכם ודומו סלה אמר רב נחמן",
  "rashi": [
   {
    "dh": "ואי כרבן גמליאל סבירא להו",
    "text": " — דמשמע ליה בשכבך כל זמן שבני אדם שוכבים ויש בכלל הזה כל הלילה:"
   },
   {
    "dh": "לימרו כר\"ג",
    "text": " — עד עמוד השחר:"
   },
   {
    "dh": "מן העבירה",
    "text": " — שמא יסמוך על שהות שיש לו כדתניא:"
   },
   {
    "dh": "קימעא",
    "text": " — מעט:"
   },
   {
    "dh": "משום אונס שינה",
    "text": " — התוקפתו לעבור על דברי חכמים הוזקקו להזהירו יותר:"
   },
   {
    "dh": "ממאן דאמר",
    "text": " — לקמן בפ' תפלת השחר (ברכות דף כז:):"
   },
   {
    "dh": "אמר מר קורא ק\"ש",
    "text": " — של ערבית תחלה ואח\"כ מתפלל:"
   },
   {
    "dh": "מסייע ליה לר' יוחנן",
    "text": " — דאמר ערבית נמי ק\"ש ואחר כך תפלה כדי שיסמוך גאולה לתפלה. ודלא כר' יהושע בן לוי דאמר תפלה ואחר כך ק\"ש:"
   },
   {
    "dh": "זה הסומך",
    "text": " — וכל שכן דשחרית דעיקר גאולת מצרים בשחרית הוה כדכתיב ממחרת הפסח יצאו בני ישראל (במדבר ל״ג:ג׳) וסמיכת גאולה לתפלה רמזה דוד בספר תהלים דכתיב ה' צורי וגואלי (תהילים י״ט:ט״ו) וסמיך ליה יענך ה' ביום צרה (שם כ) ואמרי' בברכות ירושלמי (פ\"א) מי שאינו סומך גאולה לתפלה למה הוא דומה לאוהבו של מלך שבא ודפק על פתחו של מלך יצא המלך ומצאו שהפליג אף הוא הפליג אלא יהיה אדם מקרב להקב\"ה אליו ומרצהו בתשבחות וקלוסין של יציאת מצרים והוא מתקרב אליו ובעודו קרוב אליו יש לו לתבוע צרכיו:"
   },
   {
    "dh": "באמצע תקנום",
    "text": " — בין שני ק\"ש תקנו כל תפלות של יום דקא סבר תפלת ערבית קודמת לק\"ש:"
   },
   {
    "dh": "גאולה מאורתא לא הוי",
    "text": " — הילכך גאולה דאורתא לא חשיבא לאהדורי עלה סמיכת תפלה:"
   },
   {
    "dh": "מה קימה ק\"ש ואח\"כ תפלה",
    "text": " — דבשחרית כולהו מודו דבעי מסמך:"
   },
   {
    "dh": "שלש פעמים",
    "text": " — כנגד שלש תפלות:"
   },
   {
    "dh": "דאית ביה תרתי",
    "text": " — דאתי באל\"ף בי\"ת ויש בו שבח הכנת מזון לכל חי:"
   },
   {
    "dh": "אפילו הכי",
    "text": " — אף על פי שהפסיק נו\"ן מפני נפילה שבה ולא אבה לרמזה חזר ורמז סמיכת הנפילה תכף לה:"
   },
   {
    "dh": "ויעף אלי",
    "text": " — בפריחה אחת ולא הרגיע בינתים:"
   },
   {
    "dh": "מועף ביעף",
    "text": " — שתי פריחות:"
   },
   {
    "dh": "באחת",
    "text": " — בפריחה אחת:"
   },
   {
    "dh": "אמרו בלבבכם",
    "text": " — אמרו מה שכתוב על לבבך (דברים ו):"
   },
   {
    "dh": "על משכבכם",
    "text": " — שנאמר בשכבך (שם):"
   },
   {
    "dh": "ודומו",
    "text": " — בשינה אחרי כן:"
   }
  ],
  "tosafot": [
   {
    "dh": "וקורא קריאת שמע ומתפלל",
    "text": " — מכאן משמע שמשעה שהגיע זמן קריאת שמע של לילה שאין לו לאכול סעודה עד שיקרא ק\"ש ויתפלל ערבית:"
   },
   {
    "dh": "דאמר רבי יוחנן איזהו בן העוה\"ב וכו'",
    "text": " — ואנו שאומרים יראו עינינו ופסוקים אחרים אחר השכיבנו. נראה הואיל ותקינו להו רבנן ה\"ל כגאולה אריכתא דתקינו לומר זה שבתוך כך יתפלל חבירו גם הוא ולא ילך מבהכ\"נ עד שיגמור כל אחד תפלתו. וגם יש באותם פסוקים י\"ח אזכרות כנגד י\"ח ברכות דשמנה עשרה ואגב שתקנו לומר אותם פסוקים תקנו לומר חתימה של יראו עינינו. והלכה כר' יוחנן דברייתא מסייע ליה וכן פסק ה\"ג. ואם כן יש ליזהר שלא לספר בין גאולה דערבית לשמנה עשרה. ומיהו בסדר רב עמרם פי' מה שאנו אומרים קדיש בין גאולה לתפלת ערבית לאשמעינן דלא בעינן מסמך גאולה דערבית לתפלה משום דתפלת ערבית רשות. ולא נהירא [דאם כן] ר' יוחנן סבירא ליה תפלת ערבית חובה דפלוגתא היא דרב ור' יוחנן והלכה כר' יוחנן. ונכון להחמיר ולהזהר מלספר בינתים ואי תימא קשיא הלכתא אהלכתא דקיימא לן תפלת ערבית רשות והכא פסקינן כרבי יוחנן צריך לומר דאפילו אי סובר רבי יוחנן כרב דאמר רשות היא מכל מקום מחייב לסמוך. אם כן גם לנו יש לסמוך:"
   }
  ],
  "translations": []
 },
 {
  "id": "5a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ה",
  "amud": "א",
  "dafEn": "5a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אם תלמיד חכם הוא אין צריך אמר אביי אף תלמיד חכם מיבעי ליה למימר חד פסוקא דרחמי כגון (תהלים לא, ו) בידך אפקיד רוחי פדיתה אותי ה' אל אמת: א\"ר לוי בר חמא אמר ר\"ש בן לקיש לעולם ירגיז אדם יצר טוב על יצר הרע שנא' (תהלים ד, ה) רגזו ואל תחטאו. אם נצחו מוטב ואם לאו יעסוק בתורה שנאמר אמרו בלבבכם אם נצחו מוטב ואם לאו יקרא קריאת שמע שנאמר על משכבכם אם נצחו מוטב ואם לאו יזכור לו יום המיתה שנאמר ודומו סלה. וא\"ר לוי בר חמא אמר ר' שמעון בן לקיש מאי דכתיב (שמות כד, יב) ואתנה לך את לוחות האבן והתורה והמצוה אשר כתבתי להורותם לוחות אלו עשרת הדברות תורה זה מקרא והמצוה זו משנה אשר כתבתי אלו נביאים וכתובים להורותם זה גמרא מלמד שכולם נתנו למשה מסיני: א\"ר יצחק כל הקורא ק\"ש על מטתו כאלו אוחז חרב של שתי פיות בידו שנאמר (תהלים קמט, ו) רוממות אל בגרונם וחרב פיפיות בידם מאי משמע אמר מר זוטרא ואיתימא רב אשי מרישא דענינא דכתיב (תהלים קמט, ה) יעלזו חסידים בכבוד ירננו על משכבותם וכתיב בתריה רוממות אל בגרונם וחרב פיפיות בידם. ואמר רבי יצחק כל הקורא קריאת שמע על מטתו מזיקין בדילין הימנו שנאמר (איוב ה, ז) ובני רשף יגביהו עוף ואין עוף אלא תורה שנאמר (משלי כג, ה) התעיף עיניך בו ואיננו ואין רשף אלא מזיקין שנאמר (דברים לב, כד) מזי רעב ולחומי רשף וקטב מרירי. אמר רבי שמעון בן לקיש כל העוסק בתורה יסורין בדילין הימנו שנאמר ובני רשף יגביהו עוף ואין עוף אלא תורה שנאמר התעיף עיניך בו ואיננו ואין רשף אלא יסורין שנאמר מזי רעב ולחומי רשף אמר ליה רבי יוחנן הא אפילו תינוקות של בית רבן יודעין אותו שנאמר (שמות טו, כו) ויאמר אם שמוע תשמע לקול ה' אלהיך והישר בעיניו תעשה והאזנת למצותיו ושמרת כל חקיו כל המחלה אשר שמתי במצרים לא אשים עליך כי אני ה' רופאך אלא כל שאפשר לו לעסוק בתורה ואינו עוסק הקב\"ה מביא עליו יסורין מכוערין ועוכרין אותו שנא' (תהלים לט, ג) נאלמתי דומיה החשיתי מטוב וכאבי נעכר ואין טוב אלא תורה שנאמר (משלי ד, ב) כי לקח טוב נתתי לכם תורתי אל תעזובו. אמר רבי זירא ואיתימא רבי חנינא בר פפא בא וראה שלא כמדת הקב\"ה מדת בשר ודם מדת בשר ודם אדם מוכר חפץ לחבירו מוכר עצב ולוקח שמח אבל הקב\"ה אינו כן נתן להם תורה לישראל ושמח שנא' כי לקח טוב נתתי לכם תורתי אל תעזובו. אמר רבא ואיתימא רב חסדא אם רואה אדם שיסורין באין עליו יפשפש במעשיו שנא' (איכה ג, מ) נחפשה דרכינו ונחקורה ונשובה עד ה' פשפש ולא מצא יתלה בבטול תורה שנאמר (תהלים צד, יב) אשרי הגבר אשר תיסרנו יה ומתורתך תלמדנו ואם תלה ולא מצא בידוע שיסורין של אהבה הם שנאמר (משלי ג, יב) כי את אשר יאהב ה' יוכיח. אמר רבא אמר רב סחורה אמר רב הונא כל שהקב\"ה חפץ בו מדכאו ביסורין שנאמר (ישעיהו נג, י) וה' חפץ דכאו החלי יכול אפילו לא קבלם מאהבה תלמוד לומר (ישעיהו נג, י) אם תשים אשם נפשו מה אשם לדעת אף יסורין לדעת ואם קבלם מה שכרו (ישעיהו נג, י) יראה זרע יאריך ימים ולא עוד אלא שתלמודו מתקיים בידו שנא' (ישעיהו נג, י) וחפץ ה' בידו יצלח פליגי בה רבי יעקב בר אידי ורבי אחא בר חנינא חד אמר אלו הם יסורין של אהבה כל שאין בהן בטול תורה שנאמר (תהלים צד, יב) אשרי הגבר אשר תיסרנו יה ומתורתך תלמדנו וחד אמר אלו הם יסורין של אהבה כל שאין בהן בטול תפלה שנאמר (תהלים סו, כ) ברוך אלהים אשר לא הסיר תפלתי וחסדו מאתי אמר להו רבי אבא בריה דר' חייא בר אבא הכי אמר ר' חייא בר אבא א\"ר יוחנן אלו ואלו יסורין של אהבה הן שנאמר כי את אשר יאהב ה' יוכיח אלא מה ת\"ל (תהלים צד, יב) ומתורתך תלמדנו אל תקרי תלמדנו אלא תלמדנו דבר זה מתורתך תלמדנו ק\"ו משן ועין מה שן ועין שהן אחד מאבריו של אדם עבד יוצא בהן לחרות יסורין שממרקין כל גופו של אדם על אחת כמה וכמה והיינו דרבי שמעון בן לקיש דאמר רשב\"ל נאמר ברית במלח ונאמר ברית ביסורין נאמר ברית במלח דכתיב (ויקרא ב, יג) ולא תשבית מלח ברית ונאמר ברית ביסורין דכתיב (דברים כח, סט) אלה דברי הברית מה ברית האמור במלח מלח ממתקת את הבשר אף ברית האמור ביסורין יסורין ממרקין כל עונותיו של אדם: תניא רבי שמעון בן יוחאי אומר שלש מתנות טובות נתן הקדוש ברוך הוא לישראל וכולן לא נתנן אלא ע\"י יסורין אלו הן תורה וארץ ישראל והעולם הבא תורה מנין שנאמר אשרי הגבר אשר תיסרנו יה ומתורתך תלמדנו ארץ ישראל דכתיב (דברים ח, ה) כי כאשר ייסר איש את בנו ה' אלהיך מיסרך וכתיב בתריה כי ה' אלהיך מביאך אל ארץ טובה העולם הבא דכתיב (משלי ו, כג) כי נר מצוה ותורה אור ודרך חיים תוכחות מוסר. תני תנא קמיה דר' יוחנן כל העוסק בתורה ובגמילות חסדים",
  "rashi": [
   {
    "dh": "ואם תלמיד חכם הוא",
    "text": " — שרגיל במשנתו לחזור על גרסתו תמיד דיו בכך:",
    "en": "\"ואם תלמיד חכם הוא\"- That he is consistently in his learning; reviewing his learning always, [then] that is enough."
   },
   {
    "dh": "ירגיז יצר טוב",
    "text": " — שיעשה מלחמה עם יצר הרע:",
    "en": "\"ירגיז יצר טוב\"- That he makes a war with his Evil Inclination."
   },
   {
    "dh": "ודומו סלה",
    "text": " — יום הדומיה הוא יום המות שהוא דומיה עולמית:",
    "en": "\"ודומו סלה\"- It is the day of silence, the day of death that is an eternal silence."
   },
   {
    "dh": "זה מקרא",
    "text": " — חומש שמצוה לקרות בתורה:",
    "en": "\"זה מקרא\"- This is Chumash. Which is a Mitzvah to read from the Torah."
   },
   {
    "dh": "זו משנה",
    "text": " — שיתעסקו במשנה:",
    "en": "\"זו משנה\"- That one should be engaged in Mishnah"
   },
   {
    "dh": "זה גמרא",
    "text": " — סברת טעמי המשניות שממנו יוצאה הוראה. אבל המורים הוראה מן המשנה נקראו מבלי העולם במס' סוטה (דף כב.):",
    "en": "\"זה גמרא\"- The reasoning behind the Mishnayos from there comes out [Halachic] rulings. However, one who learns [Halachic] rulings straight from Mishnah is called a ''destroyer of the world'' (Sotah 22a)"
   },
   {
    "dh": "כאלו אוחז חרב של שתי פיות בידו",
    "text": " — להרוג את המזיקין:",
    "en": "To slay the Damagers."
   },
   {
    "dh": "מאי משמע",
    "text": " — דבקריאת שמע:",
    "en": "That it's discussing Krias Shema"
   },
   {
    "dh": "ובני רשף יגביהו עוף",
    "text": " — העוף מסלקם ממך:",
    "en": "He examined and did not find - he did not find a transgression that corresponded to all of this suffering."
   },
   {
    "dh": "התעיף עיניך בו",
    "text": " — אם תכפל וסגרת עיניך בתורה היא משתכחת ממך:"
   },
   {
    "dh": "קטב מרירי",
    "text": " — זה שם שד הצהרים במסכת פסחים (דף קיא:):"
   },
   {
    "dh": "ולחומי רשף",
    "text": " — כתיב בין רעב למזיקין נדרש לפניו ולאחריו יסורין ומזיקין:"
   },
   {
    "dh": "אפילו תינוקות של בית רבן יודעים",
    "text": " — שהתורה מגינה שלמדין מספר חומש אם שמוע תשמע כל המחלה אשר שמתי וגו'. ואפילו הקטנים שלא הגיעו לספר איוב כבר למדו:"
   },
   {
    "dh": "החשיתי מטוב",
    "text": " — מן התורה:"
   },
   {
    "dh": "וכאבי נעכר",
    "text": " — מכה עכורה:"
   },
   {
    "dh": "המוכר עצב",
    "text": " — שפירש הימנו דבר חשוב כזה ומתוך דוחקו מכרו:"
   },
   {
    "dh": "ושמח",
    "text": " — שהרי הקב\"ה מזהירם מלעזוב אותה ומשבחה לפניהם בלקח טוב אחר שנתנה להם:"
   },
   {
    "dh": "פשפש ולא מצא",
    "text": " — לא מצא עבירה בידו שבשבילה ראוין יסורין הללו לבא:"
   },
   {
    "dh": "אשרי הגבר אשר תיסרנו יה ומתורתך תלמדנו",
    "text": " — שבשביל יסורין צריך אדם לבא לידי תלמוד תורה:"
   },
   {
    "dh": "יסורין של אהבה",
    "text": " — הקב\"ה מייסרו בעוה\"ז בלא שום עון כדי להרבות שכרו בעולם הבא יותר מכדי זכיותיו:"
   },
   {
    "dh": "וה' חפץ דכאו החלי",
    "text": " — מי שהקב\"ה חפץ בו מחלהו ביסורין:"
   },
   {
    "dh": "אשם",
    "text": " — קרבן:"
   },
   {
    "dh": "נפשו",
    "text": " — מדעתו:"
   },
   {
    "dh": "דבר זה",
    "text": " — שאשרי אדם אשר תיסרנו יה:"
   },
   {
    "dh": "מתורתך תלמדנו",
    "text": " — כלומר מתורתך אנו למדין אותו:"
   },
   {
    "dh": "נאמר ברית ביסורין דכתיב אלה דברי הברית",
    "text": " — אחר הקללות נאמר במשנה תורה:"
   },
   {
    "dh": "אף יסורין ממרקין כל עונותיו של אדם",
    "text": " — גרסי':"
   },
   {
    "dh": "ודרך חיים",
    "text": " — חיי העוה\"ב הויין לו תוכחות מוסר לאדם:"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "5b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ה",
  "amud": "ב",
  "dafEn": "5b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "וקובר את בניו מוחלין לו על כל עונותיו אמר ליה רבי יוחנן בשלמא תורה וגמילות חסדים דכתיב (משלי טז, ו) בחסד ואמת יכופר עון חסד זו גמילות חסדים שנאמר (משלי כא, כא) רודף צדקה וחסד ימצא חיים צדקה וכבוד אמת זו תורה שנאמר (משלי כג, כג) אמת קנה ואל תמכור אלא קובר את בניו מנין תנא ליה ההוא סבא משום ר' שמעון בן יוחאי אתיא עון עון כתיב הכא בחסד ואמת יכופר עון וכתיב התם (ירמיהו לב, יח) ומשלם עון אבות אל חיק בניהם. א\"ר יוחנן נגעים ובנים אינן יסורין של אהבה ונגעים לא והתניא כל מי שיש בו אחד מארבעה מראות נגעים הללו אינן אלא מזבח כפרה מזבח כפרה הוו יסורין של אהבה לא הוו ואב\"א הא לן והא להו ואי בעית אימא הא בצנעא הא בפרהסיא ובנים לא היכי דמי אילימא דהוו להו ומתו והא א\"ר יוחנן דין גרמא דעשיראה ביר אלא הא דלא הוו ליה כלל והא דהוו ליה ומתו. רבי חייא בר אבא חלש על לגביה ר' יוחנן א\"ל חביבין עליך יסורין א\"ל לא הן ולא שכרן א\"ל הב לי ידך יהב ליה ידיה ואוקמיה. ר' יוחנן חלש על לגביה ר' חנינא א\"ל חביבין עליך יסורין א\"ל לא הן ולא שכרן א\"ל הב לי ידך יהב ליה ידיה ואוקמיה אמאי לוקים ר' יוחנן לנפשיה אמרי אין חבוש מתיר עצמו מבית האסורים רבי אליעזר חלש על לגביה רבי יוחנן חזא דהוה קא גני בבית אפל גלייה לדרעיה ונפל נהורא חזייה דהוה קא בכי ר' אליעזר א\"ל אמאי קא בכית אי משום תורה דלא אפשת שנינו אחד המרבה ואחד הממעיט ובלבד שיכוין לבו לשמים ואי משום מזוני לא כל אדם זוכה לשתי שלחנות ואי משום בני דין גרמא דעשיראה ביר א\"ל להאי שופרא דבלי בעפרא קא בכינא א\"ל על דא ודאי קא בכית ובכו תרוייהו אדהכי והכי א\"ל חביבין עליך יסורין א\"ל לא הן ולא שכרן א\"ל הב לי ידך יהב ליה ידיה ואוקמיה. רב הונא תקיפו ליה ארבע מאה דני דחמרא על לגביה רב יהודה אחוה דרב סלא חסידא ורבנן ואמרי לה רב אדא בר אהבה ורבנן ואמרו ליה לעיין מר במיליה אמר להו ומי חשידנא בעינייכו אמרו ליה מי חשיד קב\"ה דעביד דינא בלא דינא אמר להו אי איכא מאן דשמיע עלי מלתא לימא אמרו ליה הכי שמיע לן דלא יהיב מר שבישא לאריסיה אמר להו מי קא שביק לי מידי מיניה הא קא גניב ליה כוליה אמרו ליה היינו דאמרי אינשי בתר גנבא גנוב וטעמא טעים אמר להו קבילנא עלי דיהיבנא ליה איכא דאמרי הדר חלא והוה חמרא ואיכא דאמרי אייקר חלא ואיזדבן בדמי דחמרא: תניא אבא בנימין אומר על שני דברים הייתי מצטער כל ימי על תפלתי שתהא לפני מטתי ועל מטתי שתהא נתונה בין צפון לדרום על תפלתי שתהא לפני מטתי מאי לפני מטתי אילימא לפני מטתי ממש והאמר רב יהודה אמר רב ואיתימא ריב\"ל מנין למתפלל שלא יהא דבר חוצץ בינו לבין הקיר שנאמר (ישעיהו לח, ב) ויסב חזקיהו פניו אל הקיר ויתפלל לא תימא לפני מטתי אלא אימא סמוך למטתי ועל מטתי שתהא נתונה בין צפון לדרום דא\"ר חמא ברבי חנינא אמר רבי יצחק כל הנותן מטתו בין צפון לדרום הויין ליה בנים זכרים שנאמר (תהלים יז, יד) וצפונך תמלא בטנם ישבעו בנים רב נחמן בר יצחק אמר אף אין אשתו מפלת נפלים כתיב הכא וצפונך תמלא בטנם וכתיב התם (בראשית כה, כד) וימלאו ימיה ללדת והנה תומים בבטנה: תניא אבא בנימין אומר שנים שנכנסו להתפלל וקדם אחד מהם להתפלל ולא המתין את חברו ויצא טורפין לו תפלתו בפניו שנאמר (איוב יח, ד) טורף נפשו באפו הלמענך תעזב ארץ ולא עוד אלא שגורם לשכינה שתסתלק מישראל שנאמר (איוב יח, ד) ויעתק צור ממקומו ואין צור אלא הקב\"ה שנאמר (דברים לב, יח) צור ילדך תשי ואם המתין לו מה שכרו",
  "rashi": [
   {
    "dh": "ובנים",
    "text": " — קא סלקא דעתיה הקובר את בניו:"
   },
   {
    "dh": "ארבע מראות",
    "text": " — שאת ותולדתה בהרת ותולדתה. בהרת עזה כשלג שניה לה כסיד ההיכל. שאת כצמר לבן שניה לה כקרום ביצה:"
   },
   {
    "dh": "הא לן והא להו",
    "text": " — בא\"י שערי חומה מקודשות בה ומצורע טעון שילוח חוצה להן אינן יסורין של אהבה. בבל שאין טעונין שילוח והן מזבח כפרה הוו יסורין של אהבה:"
   },
   {
    "dh": "בצנעא",
    "text": " — תחת בגדיו:"
   },
   {
    "dh": "דין גרמא דעשיראה ביר",
    "text": " — זה עצם של בן עשירי שמת לו:"
   },
   {
    "dh": "ביר",
    "text": " — כמו בר וצר עצם פחות מכשעורה ממנו בסודרו לעגמת נפש. וגברא רבא כר\"י לא באו לו יסורין שאינן של אהבה:"
   },
   {
    "dh": "דהוו להו בנים ומתו",
    "text": " — הוו להו יסורין של אהבה שהאבלות מכפרת על עונותיו:"
   },
   {
    "dh": "גלייה",
    "text": " — ר' יוחנן לדרעיה:"
   },
   {
    "dh": "ונפל נהורא",
    "text": " — שהיה בשרו מבהיק שיפה היה מאד כדאמרינן בב\"מ בהשוכר את הפועלים (ב\"מ דף פד.):"
   },
   {
    "dh": "אי משום תורה",
    "text": " — שלא למדת הרבה כרצונך:"
   },
   {
    "dh": "אחד המרבה ואחד הממעיט",
    "text": " — לענין קרבנות שנויה בשלהי מנחות (דף קי.) נאמר בעולת בהמה ריח ניחוח ובמנחה ריח ניחוח ללמדך שאחד המרבה וכו':"
   },
   {
    "dh": "אי משום מזוני",
    "text": " — שאינך עשיר:"
   },
   {
    "dh": "על דא ודאי קא בכית",
    "text": " — על זה ודאי יש לך לבכות:"
   },
   {
    "dh": "תקיפו",
    "text": " — החמיצו:"
   },
   {
    "dh": "דני",
    "text": " — חביות:"
   },
   {
    "dh": "ליעיין מר במיליה",
    "text": " — יפשפש במעשיו:"
   },
   {
    "dh": "אי איכא דשמיע עלי מילתא לימא",
    "text": " — אם יש בכם ששמע עלי דבר שאני צריך לחזור בי יודיעני:"
   },
   {
    "dh": "שבישא",
    "text": " — חלקו בזמורות הגפן שחותכין מהן בשעת הזמיר ותנן (בב\"מ דף קג.) כשם שחולקין ביין כך חולקין בזמורות ובקנים. שריגים מתרגמינן שבשין (בראשית מ):"
   },
   {
    "dh": "מי שביק לי מידי מיניה",
    "text": " — וכי אינו חשוד בעיניכם שהוא גונב לי הרבה יותר מחלקו:"
   },
   {
    "dh": "בתר גנבא גנוב כו'",
    "text": " — הגונב מן הגנב אף הוא טועם טעם גנבה:"
   },
   {
    "dh": "סמוך למטתי",
    "text": " — כל ימי נזהרתי שלא לעשות מלאכה ושלא לעסוק בתורה כשעמדתי ממטתי עד שאקרא ק\"ש ואתפלל:"
   },
   {
    "dh": "צפון לדרום",
    "text": " — ראשה ומרגלותיה זה לצפון וזה לדרום. ונראה בעיני שהשכינה במזרח או במערב לפיכך נכון להסב דרך תשמיש לרוחות אחרות:"
   },
   {
    "dh": "וצפונך",
    "text": " — לשון צפון וסיפיה דקרא ישבעו בנים:"
   },
   {
    "dh": "תמלא בטנם",
    "text": " — תמלא ימי הריונם:"
   },
   {
    "dh": "טורף נפשו באפו",
    "text": " — לך אומר אשר גרמת לך לטרוף את נפשך בפניך ומה היא הנפש זו תפלה כמו שנאמר ואשפוך את נפשי לפני ה' (שמואל א א׳:ט״ו):"
   },
   {
    "dh": "הלמענך תעזב ארץ",
    "text": " — וכי סבור היית שבשבילך שיצאת תסתלק השכינה ויעזוב את חבירך המתפלל לפניו:"
   }
  ],
  "tosafot": [
   {
    "dh": "הא לן והא להו",
    "text": " — פי' רש\"י לבני ארץ ישראל שצריכין שילוח חוץ לשלשה מחנות לא הוו יסורין של אהבה. ותימא דשילוח מחנות לא היה נוהג אלא בזמן שהיובל נוהג ובתי ערי חומה. ובימי האמוראין לא היה היובל נוהג כדאמרינן במסכת גיטין (פ\"ד דף לו.) והיאך היה מדבר ר' יוחנן מדבר שלא היה נוהג בימיו. וי\"מ הא לן והא להו לענין טומאה שנזהרין בא\"י ולא בבבל:"
   },
   {
    "dh": "והאמר רבי יוחנן דין גרמא דעשיראה ביר",
    "text": " — פי' רש\"י דלאדם חשוב כר' יוחנן מסתמא לא היו אלא יסורין של אהבה. ותימא דהא מסיק דהיכא דלא הוו ליה בנים כלל לא הוו יסורין של אהבה והרי כמה צדיקים שלא היו להם בנים. ואי משום בנות ר' יוחנן נמי הוו ליה בנות בפ' בתרא דקדושין (דף עא:) ונראה לפרש דהכי פריך והאמר ר' יוחנן דין גרמא וכו' אלמא מדהוה רגיל לנחם אחרים בכך ש\"מ דהוו יסורין של אהבה. אבל אינו תלוי בכך שהצדיקים עצמם פעמים מעונים ביסורין:"
   },
   {
    "dh": "ה\"ג לא כל אדם זוכה לשתי שלחנות",
    "text": " — אבל אין לגרוס אין אדם זוכה דהא כמה צדיקים זוכין לשתי שלחנות כגון רבי וכדאמרינן בפרק בתרא דהוריות (דף י:):"
   },
   {
    "dh": "דינא בלא דינא",
    "text": " — הרבה צדיקים יש שלוקין בגופם ובממונם אלא הם היו יודעים שלא היה נותן שבישא לאריסיה והיו רוצים לרמוז לו שלא יעשה עוד:"
   },
   {
    "dh": "שלא יהא דבר חוצץ בינו לבין הקיר",
    "text": " — אבל מלתא דקביעא כגון ארון ותיבה אין זה הפסק. אבל מטה נראה שאין זה קבוע:"
   },
   {
    "dh": "אלא אימא סמוך למטתי",
    "text": " — שלא היה עושה מלאכה עד שיתפלל. ורש\"י פירש אפילו ללמוד שאסור ללמוד קודם תפלה. ולא ידעתי מנא ליה. אבל ראיה דשרי ללמוד קודם דלקמן בפרק שני (ברכות דף יד ב) אמרינן דרב מקדים ומשי ידיה ומברך ומתני פרקיה וקרי ק\"ש כי מטא זמן ק\"ש וכו':"
   },
   {
    "dh": "כל הנותן מטתו בין צפון לדרום וכו'",
    "text": " — ולא בין מזרח למערב ודוקא כשישן עם אשתו מפני שהשכינה מצויה בין מזרח למערב והיה הדבר גנאי לשכב אצל אשתו מפני התשמיש וכן משמע ומוכחי קראי:"
   },
   {
    "dh": "המתפלל ולא המתין את חבירו טורפין לו וכו'",
    "text": " — פירש רבינו תם דזה היה להם בבתי כנסיות שלהם שהיו בשדה ולכך בלילה יש להמתין. והר\"י היה מאחר תפלתו ומאריך עד שיצאו כולם ואם בתוך כך היה שום אדם בא בבית הכנסת היה מעיין בספר עד שגמרו תפלתם. ונאה להחמיר אף לנו:"
   }
  ],
  "translations": []
 },
 {
  "id": "6a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ו",
  "amud": "א",
  "dafEn": "6a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אמר ר' יוסי ברבי חנינא זוכה לברכות הללו שנאמר (ישעיהו מח, יח) לוא הקשבת למצותי ויהי כנהר שלומך וצדקתך כגלי הים ויהי כחול זרעך וצאצאי מעיך וגו': תניא אבא בנימין אומר אלמלי נתנה רשות לעין לראות אין כל בריה יכולה לעמוד מפני המזיקין אמר אביי אינהו נפישי מינן וקיימי עלן כי כסלא לאוגיא אמר רב הונא כל חד וחד מינן אלפא משמאליה ורבבתא מימיניה אמר רבא האי דוחקא דהוי בכלה מנייהו הוי הני ברכי דשלהי מנייהו הני מאני דרבנן דבלו מחופיא דידהו הני כרעי דמנקפן מנייהו האי מאן דבעי למידע להו לייתי קיטמא נהילא ונהדר אפורייה ובצפרא חזי כי כרעי דתרנגולא האי מאן דבעי למחזינהו ליתי שלייתא דשונרתא אוכמתא בת אוכמתא בוכרתא בת בוכרתא ולקליה בנורא ולשחקיה ולימלי עיניה מניה וחזי להו ולשדייה בגובתא דפרזלא ולחתמי' בגושפנקא דפרזלא דילמא גנבי מניה ולחתום פומיה כי היכי דלא ליתזק רב ביבי בר אביי עבד הכי חזא ואתזק בעו רבנן רחמי עליה ואתסי: תניא אבא בנימין אומר אין תפלה של אדם נשמעת אלא בבית הכנסת שנאמר (מלכים א ח, כח) לשמוע אל הרנה ואל התפלה במקום רנה שם תהא תפלה אמר רבין בר רב אדא א\"ר יצחק מנין שהקב\"ה מצוי בבית הכנסת שנאמר (תהלים פב, א) אלהים נצב בעדת אל ומנין לעשרה שמתפללין ששכינה עמהם שנאמר אלהים נצב בעדת אל ומנין לשלשה שיושבין בדין ששכינה עמהם שנאמר (תהלים פב, א) בקרב אלהים ישפוט ומנין לשנים שיושבים ועוסקין בתורה ששכינה עמהם שנאמר (מלאכי ג, טז) אז נדברו יראי ה' איש אל רעהו ויקשב ה' וגו' מאי (מלאכי ג, טז) ולחושבי שמו אמר רב אשי חשב אדם לעשות מצוה ונאנס ולא עשאה מעלה עליו הכתוב כאילו עשאה ומנין שאפילו אחד שיושב ועוסק בתורה ששכינה עמו שנאמר (שמות כ, כד) בכל המקום אשר אזכיר את שמי אבוא אליך וברכתיך וכי מאחר דאפילו חד תרי מבעיא תרי מכתבן מלייהו בספר הזכרונות חד לא מכתבן מליה בספר הזכרונות וכי מאחר דאפי' תרי תלתא מבעיא מהו דתימא דינא שלמא בעלמא הוא ולא אתיא שכינה קמ\"ל דדינא נמי היינו תורה וכי מאחר דאפי' תלתא עשרה מבעיא עשרה קדמה שכינה ואתיא תלתא עד דיתבי: א\"ר אבין בר רב אדא א\"ר יצחק מנין שהקב\"ה מניח תפילין שנאמר (ישעיהו סב, ח) נשבע ה' בימינו ובזרוע עוזו בימינו זו תורה שנאמר (דברים לג, ב) מימינו אש דת למו ובזרוע עוזו אלו תפילין שנאמר (תהלים כט, יא) ה' עוז לעמו יתן ומנין שהתפילין עוז הם לישראל דכתי' (דברים כח, י) וראו כל עמי הארץ כי שם ה' נקרא עליך ויראו ממך ותניא ר' אליעזר הגדול אומר אלו תפילין שבראש א\"ל רב נחמן בר יצחק לרב חייא בר אבין הני תפילין דמרי עלמא מה כתיב בהו א\"ל (דברי הימים א יז, כא) ומי כעמך ישראל גוי אחד בארץ ומי משתבח קוב\"ה בשבחייהו דישראל אין דכתיב (דברים כו, יז) את ה' האמרת היום (וכתיב) וה' האמירך היום אמר להם הקב\"ה לישראל אתם עשיתוני חטיבה אחת בעולם ואני אעשה אתכם חטיבה אחת בעולם אתם עשיתוני חטיבה אחת בעולם שנאמר (דברים ו, ד) שמע ישראל ה' אלהינו ה' אחד ואני אעשה אתכם חטיבה אחת בעולם שנאמר ומי כעמך ישראל גוי אחד בארץ אמר ליה רב אחא בריה דרבא לרב אשי תינח בחד ביתא בשאר בתי מאי א\"ל (דברים ד, ז) כי מי גוי גדול ומי גוי גדול (דברים לג, כט) אשריך ישראל (דברים ד, לד) או הנסה אלהים (דברים כו, יט)ולתתך עליון אי הכי נפישי להו טובי בתי אלא כי מי גוי גדול ומי גוי גדול דדמיין להדדי בחד ביתא אשריך ישראל ומי כעמך ישראל בחד ביתא או הנסה אלהים בחד ביתא ולתתך עליון בחד ביתא",
  "rashi": [
   {
    "dh": "לוא הקשבת",
    "text": " — לשון המתנה היא:"
   },
   {
    "dh": "למצותי",
    "text": " — בשביל מצותי אשר צויתי לגמול חסד:"
   },
   {
    "dh": "לראות",
    "text": " — כל השדים העומדים לפניו:"
   },
   {
    "dh": "כי כסלא לאוגיא",
    "text": " — כשורת חפירה המקפת האוגיא שעושין תחת הגפנים כמו ששנינו (מ\"ק דף ב) אין עושין אוגיות לגפנים לאסוף שם מים להשקות הגפן. כסלא הוא תלם של מענה המקפת סביב סביב את תל האוגיא והגפן נטוע בתל ובריש נדרים (דף ו ב) הדין אוגיא להוי פאה:"
   },
   {
    "dh": "האי דוחקא דהוי בכלה",
    "text": " — פעמים שבני אדם יושבים רווחים ביום השבת שבאין לשמוע דרשה ודומה להם כיושבים דחוקים:"
   },
   {
    "dh": "הני ברכי דשלהי",
    "text": " — ברכים עייפים:"
   },
   {
    "dh": "מאני דרבנן דבלו",
    "text": " — בגדי התלמידים שבלים מהר והם אינם בני מלאכה שיבלו בגדיהם:"
   },
   {
    "dh": "מחופיא דידהו",
    "text": " — באין המזיקים ויושבין אצלם ומתחככים בהם. חופיא לשון חופף ומפספס (שבת דף נ) פריי\"ר בלע\"ז:"
   },
   {
    "dh": "שלייתא דשונרתא",
    "text": " — שליית הולד של חתול נקבה:"
   },
   {
    "dh": "בוכרתא",
    "text": " — הבכורה לאמה:"
   },
   {
    "dh": "בת בוכרתא",
    "text": " — ואף אמה היתה בכורה:"
   },
   {
    "dh": "ולימלי עיניה מניה",
    "text": " — ישים ממנה מעט בעיניו. כל לשון נתינה בעין קורהו בלשון גמרא לשון מלוי לפי שבדבר מועט הוא מלא:"
   },
   {
    "dh": "גובתא דפרזלא",
    "text": " — קנה חלול של ברזל:"
   },
   {
    "dh": "ולחתמיה",
    "text": " — לקנה:"
   },
   {
    "dh": "בגושפנקא דפרזלא",
    "text": " — בחותם של ברזל דבמידי דצייר וחתים לית להו רשותא כדאמרינן בכל הבשר בשחיטת חולין (דף קה ב):"
   },
   {
    "dh": "במקום רנה",
    "text": " — בבהכ\"נ ששם אומרים הצבור שירות ותשבחות בנעימת קול ערב:"
   },
   {
    "dh": "בעדת אל",
    "text": " — בבית מועד שלו:"
   },
   {
    "dh": "ומנין לעשרה וכו'",
    "text": " — עדה קרויה בעשרה שנא' עד מתי לעדה הרעה הזאת (במדבר י״ד:כ״ז) יצאו כלב ויהושע:"
   },
   {
    "dh": "בקרב אלהים ישפוט",
    "text": " — ואין בית דין קרוים אלהים אלא בג' בפ\"ק דסנהדרין (דף ג ב ):"
   },
   {
    "dh": "ויקשב ה'",
    "text": " — ממתין להם שם:"
   },
   {
    "dh": "אשר אזכיר את שמי",
    "text": " — אשר יזכר שמי על מצותי ודברי:"
   },
   {
    "dh": "אבא אליך",
    "text": " — לשון יחיד הוא:"
   },
   {
    "dh": "מכתבן מלייהו",
    "text": " — כדכתיב ויכתב ספר זכרון לפניו (סיפא דקרא):"
   },
   {
    "dh": "קדמה שכינה ואתיא",
    "text": " — קודם שיהיו כל העשרה:"
   },
   {
    "dh": "נצב בעדת אל",
    "text": " — מעיקרא משמע:"
   },
   {
    "dh": "עד דיתבי",
    "text": " — כדכתיב ישפוט בשעת המשפט:"
   },
   {
    "dh": "עוז לעמו",
    "text": " — ומנין שהתפילין עוז הם לישראל דכתיב וראו וגו' ויראו ממך:"
   },
   {
    "dh": "מה כתיב בהו",
    "text": " — בשלמא בתפילין דידן כתיב שמע (דברים ו) והיה אם שמוע (שם יא) קדש לי כל בכור (שמות י״ג:ב׳) והיה כי יביאך (שם) פרשיות שנצטוו בהם לשום זכרון מצותיו של הקב\"ה אות וזכרון להם לישראל אלא בדידיה מאי כתיב בהו:"
   },
   {
    "dh": "האמרת",
    "text": " — לשון חשיבות ושבח כמו יתאמרו כל פועלי און (תהילים צ״ד:ד׳) ישתבחו:"
   },
   {
    "dh": "בשאר בתי מאי",
    "text": " — שהרי ארבעה בתים הם:"
   }
  ],
  "tosafot": [
   {
    "dh": "כי כסלא לאוגיא",
    "text": " — כעין תלמים המקיפין את הערוגה כדאמרינן בריש נדרים (דף ו:) הדין אוגיא להוי פאה:"
   },
   {
    "dh": "חד לא מכתבן מליה בספר הזכרונות",
    "text": " — כלומר עם אחרים אבל בספר לבדו נכתבין כדאמרינן וכל מעשיך בספר נכתבין (אבות פרק ב) כ\"ש מדה טובה:"
   },
   {
    "dh": "אלו תפילין שבראש",
    "text": " — לפי שיש בהן רוב שם של שדי שהשי\"ן כתובה בקמט שבבתים והדלי\"ת ברצועות. ותימא משבת פרק במה מדליקין (שבת דף כח ב) דקאמר מן המותר בפיך ולא מפיק רצועות מתורת ה' בפיך. ועוד דבפ' בתרא דמגילה (דף כו ב) קרי לרצועות תשמישי קדושה בעלמא. אלא י\"ל אלו תפילין שבראש לפי שהן בגבהו של ראש ונראין דשייך בהו וראו אבל תפילין של יד מכוסין דכתיב (שמות י״ג:ט׳) לך לאות על ידך ולא לאחרים לאות:"
   },
   {
    "dh": "מי כעמך ישראל",
    "text": " — זה שיסד הפייטן (ביום א' דפסח) טוטפת כלילו גדלי:"
   }
  ],
  "translations": []
 },
 {
  "id": "6b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ו",
  "amud": "ב",
  "dafEn": "6b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "וכולהו כתיבי באדרעיה: אמר רבין בר רב אדא אמר רבי יצחק כל הרגיל לבא לבית הכנסת ולא בא יום אחד הקב\"ה משאיל בו שנאמר (ישעיהו נ, י) מי בכם ירא ה' שומע בקול עבדו אשר הלך חשכים ואין נוגה לו אם לדבר מצוה הלך נוגה לו ואם לדבר הרשות הלך אין נוגה לו יבטח בשם ה' מאי טעמא משום דהוה ליה לבטוח בשם ה' ולא בטח: אמר ר' יוחנן בשעה שהקב\"ה בא בבית הכנסת ולא מצא בה עשרה מיד הוא כועס שנא' (ישעיהו נ, ב) מדוע באתי ואין איש קראתי ואין עונה. א\"ר חלבו אמר רב הונא כל הקובע מקום לתפלתו אלהי אברהם בעזרו וכשמת אומרים לו אי עניו אי חסיד מתלמידיו של אברהם אבינו ואברהם אבינו מנא לן דקבע מקום דכתיב (בראשית יט, כז) וישכם אברהם בבקר אל המקום אשר עמד שם ואין עמידה אלא תפלה שנאמר (תהלים קו, ל) ויעמוד פינחס ויפלל: אמר רבי חלבו אמר רב הונא היוצא מבית הכנסת אל יפסיע פסיעה גסה אמר אביי לא אמרן אלא למיפק אבל למיעל מצוה למרהט שנא' (הושע ו, ג) נרדפה לדעת את ה' אמר רבי זירא מריש כי הוה חזינא להו לרבנן דקא רהטי לפרקא בשבתא אמינא קא מחליין רבנן שבתא כיון דשמענא להא דרבי תנחום א\"ר יהושע בן לוי לעולם ירוץ אדם לדבר הלכה ואפילו בשבת שנא' (הושע יא, י) אחרי ה' ילכו כאריה ישאג וגו' אנא נמי רהיטנא: אמר ר' זירא אגרא דפרקא רהטא אמר אביי אגרא דכלה דוחקא אמר רבא אגרא דשמעתא סברא אמר רב פפא אגרא דבי טמיא שתיקותא אמר מר זוטרא אגרא דתעניתא צדקתא אמר רב ששת אגרא דהספדא דלויי אמר רב אשי אגרא דבי הלולי מילי: אמר רב הונא כל המתפלל אחורי בית הכנסת נקרא רשע שנאמר (תהלים יב, ט) סביב רשעים יתהלכון אמר אביי לא אמרן אלא דלא מהדר אפיה לבי כנישתא אבל מהדר אפיה לבי כנישתא לית לן בה ההוא גברא דקא מצלי אחורי בי כנישתא ולא מהדר אפיה לבי כנישתא חלף אליהו חזייה אידמי ליה כטייעא א\"ל כדו בר קיימת קמי מרך שלף ספסרא וקטליה א\"ל ההוא מרבנן לרב ביבי בר אביי ואמרי לה רב ביבי לרב נחמן בר יצחק מאי (תהלים יב, ט) כרום זלות לבני אדם אמר ליה אלו דברים שעומדים ברומו של עולם ובני אדם מזלזלין בהן ר' יוחנן ור' אלעזר דאמרי תרוייהו כיון שנצטרך אדם לבריות פניו משתנות ככרום שנאמר כרום זלות לבני אדם מאי כרום כי אתא רב דימי אמר עוף אחד יש בכרכי הים וכרום שמו וכיון שחמה זורחת מתהפך לכמה גוונין ר' אמי ור' אסי דאמרי תרוייהו כאילו נדון בשני דינים אש ומים שנאמר (תהלים סו, יב) הרכבת אנוש לראשנו באנו באש ובמים: ואמר רבי חלבו אמר רב הונא לעולם יהא אדם זהיר בתפלת המנחה שהרי אליהו לא נענה אלא בתפלת המנחה שנאמר (מלכים א יח, לו) ויהי בעלות המנחה ויגש אליהו הנביא ויאמר וגו' ענני ה' ענני ענני שתרד אש מן השמים וענני שלא יאמרו מעשה כשפים הם ר' יוחנן אמר אף בתפלת ערבית שנאמר (תהלים קמא, ב) תכון תפלתי קטרת לפניך משאת כפי מנחת ערב רב נחמן בר יצחק אמר אף תפלת שחרית שנאמר (תהלים ה, ד) ה' בקר תשמע קולי בקר אערך לך ואצפה: וא\"ר חלבו אמר רב הונא כל הנהנה מסעודת חתן ואינו משמחו עובר בחמשה קולות שנאמר (ירמיהו לג, יא) קול ששון וקול שמחה קול חתן וקול כלה קול אומרים הודו את ה' צבאות ואם משמחו מה שכרו אמר רבי יהושע בן לוי זוכה לתורה שנתנה בחמשה קולות שנאמר (שמות יט, טז) ויהי ביום השלישי בהיות הבקר ויהי קולות וברקים וענן כבד על ההר וקול שופר וגו' ויהי קול השופר וגו' והאלהים יעננו בקול. איני והא כתיב (שמות כ, טו) וכל העם רואים את הקולת אותן קולות דקודם מתן תורה הוו רבי אבהו אמר כאילו הקריב תודה שנאמר (ירמיהו לג, יא) מביאים תודה בית ה' רב נחמן בר יצחק אמר כאילו בנה אחת מחורבות ירושלים שנאמר (ירמיהו לג, יא) כי אשיב את שבות הארץ כבראשונה אמר ה': וא\"ר חלבו אמר רב הונא כל אדם שיש בו יראת שמים דבריו נשמעין שנאמר (קהלת יב, יג) סוף דבר הכל נשמע את האלהים ירא וגו' מאי (קהלת יב, יג) כי זה כל האדם א\"ר אלעזר אמר הקב\"ה כל העולם כלו לא נברא אלא בשביל זה רבי אבא בר כהנא אמר שקול זה כנגד כל העולם כולו ר' שמעון בן עזאי אומר ואמרי לה ר' שמעון בן זומא אומר כל העולם כולו לא נברא אלא לצוות לזה: וא\"ר חלבו אמר רב הונא כל שיודע בחברו שהוא רגיל ליתן לו שלום יקדים לו שלום שנאמר (תהלים לד, טו) בקש שלום ורדפהו ואם נתן לו ולא החזיר נקרא גזלן שנאמר (ישעיהו ג, יד) ואתם בערתם הכרם גזלת העני בבתיכם:",
  "rashi": [
   {
    "dh": "וכולהו כתיבי באדרעיה",
    "text": " — כל הכתובים הללו כתובים בזרוע בבית אחד שאותן של יד אינן אלא בית אחד כדאמרינן במנחות (דף לד:) וכל הפרשיות כתובות בו:"
   },
   {
    "dh": "משאיל בו",
    "text": " — מה טיבו של פלוני למה לא בא:"
   },
   {
    "dh": "ירא את ה'",
    "text": " — שהיה רגיל לבא אליו:"
   },
   {
    "dh": "אשר הלך חשכים ואין נוגה לו",
    "text": " — אשר עתה הלך למקום חשך אשר ימנע עצמו מלהשכים לפתחי:"
   },
   {
    "dh": "ואין עונה",
    "text": " — שיעור שיוכלו לענות דבר קדושה:"
   },
   {
    "dh": "אלהי אברהם",
    "text": " — שקבע מקום לתפלתו:"
   },
   {
    "dh": "בעזרו",
    "text": " — כדרך שהיה עוזר לאברהם:"
   },
   {
    "dh": "אל יפסיע פסיעה גסה",
    "text": " — לפי שמראה בעצמו שעכוב בית הכנסת דומה עליו כמשוי:"
   },
   {
    "dh": "נרדפה",
    "text": " — לשון מרוצה משמע שהרודף רץ:"
   },
   {
    "dh": "לפרקא",
    "text": " — לשמוע הדרשה:"
   },
   {
    "dh": "מחליין רבנן שבתא",
    "text": " — דאמר מר (שבת ד' קיג:) אסור לפסוע פסיעה גסה בשבת שנאמר אם תשיב משבת רגלך:"
   },
   {
    "dh": "אגרא דפרקא",
    "text": " — עיקר קבול שכר הבריות הרצים לשמוע דרשה מפי חכם היא שכר המרוצה שהרי רובם אינם מבינים להעמיד גרסא ולומר שמועה מפי רבן לאחר זמן שיקבלו שכר למוד:"
   },
   {
    "dh": "אגרא דכלה",
    "text": " — שבת שלפני הרגל שהכל נאספין לשמוע הלכות הרגל:"
   },
   {
    "dh": "אגרא דשמעתא סברא",
    "text": " — שהוא יגע וטורח ומחשב להבין טעמו של דבר:"
   },
   {
    "dh": "אגרא דתעניתא צדקתא",
    "text": " — שנותנין צדקה לערב לפרנסת העניים שהתענו היום:"
   },
   {
    "dh": "דלויי",
    "text": " — להרים קול בלשון נהי ועגמת נפש שיבכו השומעים:"
   },
   {
    "dh": "מילי",
    "text": " — לשמח החתן בדברים:"
   },
   {
    "dh": "אחורי בית הכנסת",
    "text": " — כל פתחי בית הכנסת היו במזרח והכי תניא בתוספתא דמגילה (פרק ג) מעין מקדש ומשכן פניהם למערב ואחוריהם למזרח והמתפלל אחורי בית הכנסת ואינו מחזיר פניו לבית הכנסת נראה ככופר במי שהצבור מתפללין לפניו והא דרב הונא מוקי לה לאביי בדלא מהדר אפיה לבי כנישתא:"
   },
   {
    "dh": "חלף ההוא טייעא",
    "text": " — סוחר ערבי:"
   },
   {
    "dh": "כדו בר",
    "text": " — כדו שתי בר רשות כי האי דאמרינן בסוכה (ד' מה:) הא דעיילי בבר:"
   },
   {
    "dh": "כרום זלות",
    "text": " — סיפיה דקרא דלעיל:"
   },
   {
    "dh": "דברים שעומדים ברומו של עולם",
    "text": " — כגון תפלה שעולה למעלה:"
   },
   {
    "dh": "כיון שנצטרך אדם לבריות",
    "text": " — הוא זל בעיניהם:"
   },
   {
    "dh": "לראשנו",
    "text": " — להיות נושה בנו דמתרגמינן כנושה (שמות כב) כרשיא:"
   },
   {
    "dh": "עובר בחמשה קולות",
    "text": " — מזלזל בחמשה קולות שבירך בהן הקב\"ה את ישראל:"
   },
   {
    "dh": "אותן קולות דקודם מתן תורה הוו",
    "text": " — הנך קולות בתראי היינו הנך דאיירי בהו לעיל וקאמר דנראין היו ואע\"פ שהקול אינו נראה זה נראה:"
   },
   {
    "dh": "מביאים תודה בית ה'",
    "text": " — כי אשיב את שבות וגו'. סיפיה דקרא דחמשה קולות דלעיל הוא:"
   },
   {
    "dh": "בשביל זה",
    "text": " — שיברא זה:"
   },
   {
    "dh": "לצוות",
    "text": " — של\"ווץ בלע\"ז:"
   },
   {
    "dh": "גזלת העני",
    "text": " — והלא אף גזלת העשיר גזלה היא אלא גזלת העני שאין לו כלום לגזול ממנו אלא שלא להשיב על שלומו:"
   }
  ],
  "tosafot": [
   {
    "dh": "אחורי בית הכנסת",
    "text": " — פי' רש\"י כל פתחי בתי כנסיות היו למזרח ואחוריהם למערב וזה המתפלל אחורי בית הכנסת ואינו מחזיר פניו לבהכ\"נ נראה ככופר במי שהצבור מתפללין לפניו. ולא נהירא דאדרבה במהדר אפיה לבית הכנסת מיחזי כשתי רשויות שהקהל מתפללין למערב והוא מתפלל כנגדם למזרח. ע\"כ נראה אחורי בהכ\"נ מי שהוא אחורי העם במזרח והעם משתחוים למערב ולהכי קאמר ולא מהדר אפיה כו'. ודוקא הם שהיה מנהגם להתפלל למערב. אבל אנו מתפללים למזרח שאנו במערבו של א\"י וכתיב והתפללו אליך דרך ארצם (מ\"א ח) ונראה כמו שפי' להם לצד מערב יתפרש לנו לצד מזרח:"
   }
  ],
  "translations": []
 },
 {
  "id": "7a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ז",
  "amud": "א",
  "dafEn": "7a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "א\"ר יוחנן משום ר' יוסי מנין שהקב\"ה מתפלל שנאמר (ישעיהו נו, ז) והביאותים אל הר קדשי ושמחתים בבית תפלתי תפלתם לא נאמר אלא תפלתי מכאן שהקב\"ה מתפלל. מאי מצלי אמר רב זוטרא בר טוביה אמר רב יה\"ר מלפני שיכבשו רחמי את כעסי ויגולו רחמי על מדותי ואתנהג עם בני במדת רחמים ואכנס להם לפנים משורת הדין. תניא א\"ר ישמעאל בן אלישע פעם אחת נכנסתי להקטיר קטורת לפני ולפנים וראיתי אכתריאל יה ה' צבאות שהוא יושב על כסא רם ונשא ואמר לי ישמעאל בני ברכני אמרתי לו יה\"ר מלפניך שיכבשו רחמיך את כעסך ויגולו רחמיך על מדותיך ותתנהג עם בניך במדת הרחמים ותכנס להם לפנים משורת הדין ונענע לי בראשו וקמ\"ל שלא תהא ברכת הדיוט קלה בעיניך וא\"ר יוחנן משום ר' יוסי מנין שאין מרצין לו לאדם בשעת כעסו דכתיב (שמות לג, יד) פני ילכו והנחותי לך אמר לו הקב\"ה למשה המתן לי עד שיעברו פנים של זעם ואניח לך ומי איכא רתחא קמיה דקודשא בריך הוא אין דתניא (תהלים ז, יב) ואל זועם בכל יום וכמה זעמו רגע וכמה רגע אחד מחמשת רבוא ושמונת אלפים ושמנה מאות ושמנים ושמנה בשעה וזו היא רגע ואין כל בריה יכולה לכוין אותה שעה חוץ מבלעם הרשע דכתיב ביה (במדבר כד, טז) ויודע דעת עליון השתא דעת בהמתו לא הוה ידע דעת עליון הוה ידע אלא מלמד שהיה יודע לכוין אותה שעה שהקב\"ה כועס בה והיינו דאמר להו נביא לישראל (מיכה ו, ה) עמי זכר נא מה יעץ בלק מלך מואב וגו' מאי (מיכה ו, ה) למען דעת צדקות ה' א\"ר אלעזר אמר להם הקב\"ה לישראל דעו כמה צדקות עשיתי עמכם שלא כעסתי בימי בלעם הרשע שאלמלי כעסתי לא נשתייר משונאיהם של ישראל שריד ופליט והיינו דקא\"ל בלעם לבלק (במדבר כג, ח) מה אקב לא קבה אל ומה אזעם לא זעם ה' מלמד שכל אותן הימים לא זעם. וכמה זעמו רגע וכמה רגע א\"ר אבין ואיתימא רבי אבינא רגע כמימריה. ומנא לן דרגע רתח שנא' (תהלים ל, ו) כי רגע באפו חיים ברצונו ואב\"א מהכא (ישעיהו כו, כ) חבי כמעט רגע עד יעבור זעם ואימת רתח אמר אביי בהנך תלת שעי קמייתא כי חיורא כרבלתא דתרנגולא וקאי אחד כרעא כל שעתא ושעתא נמי קאי הכי כל שעתא אית ביה שורייקי סומקי בההיא שעתא לית ביה שורייקי סומקי. ההוא צדוקי דהוה בשבבותיה דר' יהושע בן לוי הוה קא מצער ליה טובא בקראי יומא חד שקל תרנגולא ואוקמיה בין כרעי' דערסא ועיין ביה סבר כי מטא ההיא שעתא אלטייה כי מטא ההיא שעתא ניים אמר ש\"מ לאו אורח ארעא למעבד הכי (תהלים קמה, ט) ורחמיו על כל מעשיו כתיב וכתיב (משלי יז, כו) גם ענוש לצדיק לא טוב תנא משמיה דר' מאיר בשעה שהחמה זורחת וכל מלכי מזרח ומערב מניחים כתריהם בראשיהם ומשתחוים לחמה מיד כועס הקב\"ה: וא\"ר יוחנן משום רבי יוסי טובה מרדות אחת בלבו של אדם יותר מכמה מלקיות שנא' (הושע ב, ט) ורדפה את מאהביה וגו' ואמרה אלכה ואשובה אל אישי הראשון כי טוב לי אז מעתה וריש לקיש אמר יותר ממאה מלקיות שנאמר (משלי יז, י) תחת גערה במבין מהכות כסיל מאה: וא\"ר יוחנן משום ר' יוסי שלשה דברים בקש משה מלפני הקב\"ה ונתן לו בקש שתשרה שכינה על ישראל ונתן לו שנאמר (שמות לג, טז) הלוא בלכתך עמנו בקש שלא תשרה שכינה על עובדי כוכבים ונתן לו שנאמר (שמות לג, טז) ונפלינו אני ועמך בקש להודיעו דרכיו של הקב\"ה ונתן לו שנא' (שמות לג, יג) הודיעני נא את דרכיך אמר לפניו רבש\"ע מפני מה יש צדיק וטוב לו ויש צדיק ורע לו יש רשע וטוב לו ויש רשע ורע לו אמר לו משה צדיק וטוב לו צדיק בן צדיק צדיק ורע לו צדיק בן רשע רשע וטוב לו רשע בן צדיק רשע ורע לו רשע בן רשע: אמר מר צדיק וטוב לו צדיק בן צדיק צדיק ורע לו צדיק בן רשע איני והא כתיב (שמות לד, ז) פקד עון אבות על בנים וכתיב (דברים כד, טז) ובנים לא יומתו על אבות ורמינן קראי אהדדי ומשנינן לא קשיא הא כשאוחזין מעשה אבותיהם בידיהם הא כשאין אוחזין מעשה אבותיהם בידיהם אלא הכי קא\"ל צדיק וטוב לו צדיק גמור צדיק ורע לו צדיק שאינו גמור רשע וטוב לו רשע שאינו גמור רשע ורע לו רשע גמור ופליגא דר' מאיר דא\"ר מאיר שתים נתנו לו ואחת לא נתנו לו שנא' (שמות לג, יט) וחנתי את אשר אחון אע\"פ שאינו הגון ורחמתי את אשר ארחם אע\"פ שאינו הגון (שמות לג, כ) ויאמר לא תוכל לראות את פני תנא משמיה דר' יהושע בן קרחה כך א\"ל הקב\"ה למשה כשרציתי לא רצית עכשיו שאתה רוצה איני רוצה ופליגא דר' שמואל בר נחמני א\"ר יונתן דא\"ר שמואל בר נחמני א\"ר יונתן בשכר שלש זכה לשלש בשכר (שמות ג, ו) ויסתר משה פניו זכה לקלסתר פנים בשכר כי ירא זכה (שמות לד, ל) לוייראו מגשת אליו בשכר מהביט זכה (במדבר יב, ח) לותמונת ה' יביט: (שמות לג, כג)והסירתי את כפי וראית את אחרי אמר רב חנא בר ביזנא א\"ר שמעון חסידא מלמד שהראה הקב\"ה למשה קשר של תפילין: וא\"ר יוחנן משום ר' יוסי כל דבור ודבור שיצא מפי הקב\"ה לטובה אפי' על תנאי לא חזר בו מנא לן ממשה רבינו שנא' (דברים ט, יד) הרף ממני ואשמידם וגו' ואעשה אותך לגוי עצום אע\"ג דבעא משה רחמי עלה דמלתא ובטלה אפ\"ה אוקמה בזרעיה שנא' (דברי הימים א כג, טו) בני משה גרשום ואליעזר ויהיו בני אליעזר רחביה הראש וגו' ובני רחביה רבו למעלה וגו' ותני רב יוסף למעלה מששים רבוא אתיא רביה רביה כתיב הכא רבו למעלה וכתיב התם (שמות א, ז) ובני ישראל פרו וישרצו וירבו:",
  "rashi": [
   {
    "dh": "ונענע לי בראשו",
    "text": " — כמודה בברכתי ועונה אמן:"
   },
   {
    "dh": "דעת בהמתו לא הוה ידע",
    "text": " — במסכת ע\"א מפרש לה בפ\"ק:"
   },
   {
    "dh": "מאי קרא",
    "text": " — דאף הוי כרגע דכתיב כי רגע באפו חיים ברצונו:"
   },
   {
    "dh": "בתלת שעי קמייתא",
    "text": " — באחד מרגעי תלת שעות ראשונות:"
   },
   {
    "dh": "שורייקי",
    "text": " — טיי\"ש בלעז:"
   },
   {
    "dh": "לצדיק לא טוב",
    "text": " — לענוש את הבריות:"
   },
   {
    "dh": "מרדות אחת",
    "text": " — לשון רדוי והכנעה שאדם שם על לבו מאליו:"
   },
   {
    "dh": "ורדפה את מאהביה וגו'",
    "text": " — וכשתראה שאין עוזר תשים על לבה לאמר אשובה אל אישי הראשון:"
   },
   {
    "dh": "תחת גערה במבין",
    "text": " — תחת גערה באדם מבין טובה מהכות כסיל מאה. תחת הטעם למעלה תחת התי\"ו ולא כמו אל תירא ואל תחת (דברים א׳:כ״א) שטעמו בחי\"ת אלא למעלה תחת התי\"ו ראשון לומר שהוא שם דבר שאי אפשר לפותרו לשון תפעל לומר תכניע את האדם אלא תכנע היא בעצמה. ולכך שינה את נקודתה לומר שהוא שם דבר:"
   },
   {
    "dh": "ג' דברים בקש משה ונתן לו",
    "text": " — שהרי לסוף שאלתו כתיב גם את הדבר הזה אשר דברת אעשה:"
   },
   {
    "dh": "להודיעו דרכיו",
    "text": " — מנהג מדת משפטיו כגון מפני מה צדיק וטוב לו רשע ורע לו צדיק ורע לו רשע וטוב לו:"
   },
   {
    "dh": "את אשר אחון",
    "text": " — את אשר יכמרו רחמי עליו לשעה ואע\"פ שאינו כדאי:"
   },
   {
    "dh": "כשרציתי",
    "text": " — בסנה:"
   },
   {
    "dh": "לא רצית",
    "text": " — שנא' ויסתר משה פניו:"
   },
   {
    "dh": "ופליגא",
    "text": " — דר' יהושע בן קרחה שמענישו על כך אדרבי שמואל שאמר קבל שכר על זה:"
   },
   {
    "dh": "לקלסתר פנים",
    "text": " — כי קרן עור פניו:"
   },
   {
    "dh": "ותמונת ה' יביט",
    "text": " — זה מראה אחורים כך שנוי' בספרי (פ' בהעלותך):"
   },
   {
    "dh": "קשר של תפילין",
    "text": " — מאחוריו הוא ואמרי' לעיל דהקב\"ה מניח תפילין:"
   }
  ],
  "tosafot": [
   {
    "dh": "שאלמלי כעסתי לא נשתייר וכו'",
    "text": " — ואם תאמר מה היה יכול לומר בשעת רגע. יש לומר כלם. אי נמי מאחר שהיה מתחיל קללתו באותה שעה היה מזיק אפילו לאחר כן:",
    "en": "That Sadducee who was in the neighborhood of Rabbi Joshua ben Levi etc. - it is not the way of the world. Even though the Sadducees etc. \"we lower them down but do not raise them up.\" This refers to being done by a person, but by the hand of Heaven it is not the way of the world to punish them, trouble them, and kill them by the hand of Heaven in an unnatural way unlike how human beings act. And if we read here \"idol worshipper\" it makes sense, as it says there (in Avodah Zarah) regarding an idol worshipper and shepherds of small animals that we do not raise them up nor lower them down."
   },
   {
    "dh": "ההוא צדוקי דהוה בשבבותיה דריב\"ל כו' לאו אורח ארעא",
    "text": " — אף על גב דהצדוקים וכו' מורידין ולא מעלין. היינו בידי אדם אבל בידי שמים לאו אורח ארעא להענישם ולהטריחם ולהורגם בידי שמים שלא כדרך בני אדם. ואי גרסינן הכא עובד כוכבים ניחא דקאמר התם העובד כוכבים ורועי בהמה דקה לא מעלין ולא מורידין:"
   }
  ],
  "translations": []
 },
 {
  "id": "7b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ז",
  "amud": "ב",
  "dafEn": "7b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "א\"ר יוחנן משום ר\"ש בן יוחי מיום שברא הקב\"ה את העולם לא היה אדם שקראו להקב\"ה אדון עד שבא אברהם וקראו אדון שנאמר (בראשית טו, ב) ויאמר אדני (אלהים) במה אדע כי אירשנה. אמר רב אף דניאל לא נענה אלא בשביל אברהם שנא' (דניאל ט, יז) ועתה שמע אלהינו אל תפלת עבדך ואל תחנוניו והאר פניך על מקדשך השמם למען אדני למענך מבעי ליה אלא למען אברהם שקראך אדון: וא\"ר יוחנן משום ר\"ש בן יוחי מנין שאין מרצין לו לאדם בשעת כעסו שנאמר (שמות לג, יד) פני ילכו והנחותי לך: ואמר ר\"י משום ר\"ש בן יוחי מיום שברא הקב\"ה את עולמו לא היה אדם שהודה להקב\"ה עד שבאתה לאה והודתו שנאמר (בראשית כט, לה) הפעם אודה את ה': ראובן א\"ר אלעזר אמרה לאה ראו מה בין בני לבן חמי דאילו בן חמי אע\"ג דמדעתיה זבניה לבכירותיה דכתיב (בראשית כה, לג) וימכר את בכרתו ליעקב חזו מה כתיב ביה (בראשית כז, מא) וישטם עשו את יעקב וכתיב (בראשית כז, לו) ויאמר הכי קרא שמו יעקב ויעקבני זה פעמים וגו' ואילו בני אע\"ג דעל כרחיה שקליה יוסף לבכירותיה מניה דכתיב (דברי הימים א ה, א) ובחללו יצועי אביו נתנה בכורתו לבני יוסף אפי' הכי לא אקנא ביה דכתיב (בראשית לז, כא) וישמע ראובן ויצילהו מידם: רות מאי רות א\"ר יוחנן שזכתה ויצא ממנה דוד שריוהו להקב\"ה בשירות ותשבחות מנא לן דשמא גרים אמר רבי אליעזר דאמר קרא (תהלים מו, ט) לכו חזו מפעלות ה' אשר שם שמות בארץ אל תקרי שמות אלא שמות: וא\"ר יוחנן משום רבי שמעון בן יוחי קשה תרבות רעה בתוך ביתו של אדם יותר ממלחמת גוג ומגוג שנאמר (תהלים ג, א) מזמור לדוד בברחו מפני אבשלום בנו וכתיב בתריה (תהלים ג, ב) ה' מה רבו צרי רבים קמים עלי ואילו גבי מלחמת גוג ומגוג כתיב (תהלים ב, א) למה רגשו גוים ולאומים יהגו ריק ואילו מה רבו צרי לא כתיב: מזמור לדוד בברחו מפני אבשלום בנו מזמור לדוד קינה לדוד מיבעי ליה אמר ר' שמעון בן אבישלום משל למה הדבר דומה לאדם שיצא עליו שטר חוב קודם שפרעו היה עצב לאחר שפרעו שמח אף כן דוד כיון שאמר לו הקב\"ה (שמואל ב יב, יא) הנני מקים עליך רעה מביתך היה עצב אמר שמא עבד או ממזר הוא דלא חייס עלי כיון דחזא דאבשלום הוא שמח משום הכי אמר מזמור: וא\"ר יוחנן משום ר\"ש בן יוחי מותר להתגרות ברשעים בעולם הזה שנאמר (משלי כח, ד) עוזבי תורה יהללו רשע ושומרי תורה יתגרו בם תניא נמי הכי רבי דוסתאי בר' מתון אומר מותר להתגרות ברשעים בעוה\"ז שנא' עוזבי תורה יהללו רשע וגו' ואם לחשך אדם לומר והא כתיב (תהלים לז, א) אל תתחר במרעים אל תקנא בעושי עולה אמור לו מי שלבו נוקפו אומר כן אלא אל תתחר במרעים להיות כמרעים אל תקנא בעושי עולה להיות כעושי עולה ואומר (משלי כג, יז) אל יקנא לבך בחטאים כי אם ביראת ה' כל היום איני והאמר ר' יצחק אם ראית רשע שהשעה משחקת לו אל תתגרה בו שנאמר (תהלים י, ה) יחילו דרכיו בכל עת ולא עוד אלא שזוכה בדין שנאמר (תהלים י, ה) מרום משפטיך מנגדו ולא עוד אלא שרואה בצריו שנאמר (תהלים י, ה) כל צורריו יפיח בהם לא קשיא הא במילי דידיה הא במילי דשמיא ואיבעית אימא הא והא במילי דשמיא ולא קשיא הא ברשע שהשעה משחקת לו הא ברשע שאין השעה משחקת לו ואב\"א הא והא ברשע שהשעה משחקת לו ולא קשיא הא בצדיק גמור הא בצדיק שאינו גמור דאמר רב הונא מאי דכתיב (חבקוק א, יג) למה תביט בוגדים תחריש בבלע רשע צדיק ממנו וכי רשע בולע צדיק והא כתיב (תהלים לז, לג) ה' לא יעזבנו בידו וכתיב (משלי יב, כא) לא יאונה לצדיק כל און אלא צדיק ממנו בולע צדיק גמור אינו בולע ואב\"א שעה משחקת לו שאני: וא\"ר יוחנן משום רבי שמעון בן יוחי כל הקובע מקום לתפלתו אויביו נופלים תחתיו שנאמר (שמואל ב ז, י) ושמתי מקום לעמי לישראל ונטעתיו ושכן תחתיו ולא ירגז עוד ולא יוסיפו בני עולה לענותו כאשר בראשונה רב הונא רמי כתיב לענותו וכתיב לכלותו בתחלה לענותו ולבסוף לכלותו: וא\"ר יוחנן משום רבי שמעון בן יוחי גדולה שמושה של תורה יותר מלמודה שנא' (מלכים ב ג, יא) פה אלישע בן שפט אשר יצק מים על ידי אליהו למד לא נאמר אלא יצק מלמד שגדולה שמושה יותר מלמודה: א\"ל רבי יצחק לרב נחמן מ\"ט לא אתי מר לבי כנישתא לצלויי אמר ליה לא יכילנא א\"ל לכנפי למר עשרה וליצלי אמר ליה טריחא לי מלתא ולימא ליה מר לשלוחא דצבורא בעידנא דמצלי צבורא ליתי ולודעיה למר א\"ל מאי כולי האי א\"ל דאמר ר' יוחנן משום ר\"ש בן יוחי",
  "rashi": [
   {
    "dh": "אדני אלהים",
    "text": " — כתוב באל\"ף דל\"ת:",
    "en": "This time I will thank G-d -Because she had Ruach Hakodesh(a holy vision) that Yaakov was going to have twelve tribes(through 12 sons), and he has four wives, so when she had her fourth son, she gave thanks because she got a greater portion than the original calculation she expected(on average each wife had three sons, and she had four)."
   },
   {
    "dh": "הפעם אודה את ה'",
    "text": " — לפי שראתה ברוח הקדש שיעקב מעמיד שנים עשר שבטים ולו ארבע נשים כיון שילדה בן רביעי הודית על חלקה שעלה יותר מן החשבון המגיע לה:",
    "en": "It is written to afflict them- in the book of Samuel:"
   },
   {
    "dh": "ראו מה בין בני לבן חמי",
    "text": " — על שם העתיד קראה שמו כדאמרינן לקמן שמא גרים:",
    "en": "It is written to destroy them- in the book of Chronicles(Divrei hayamim 1:17):"
   },
   {
    "dh": "רות",
    "text": " — המואביה משום דאיירי בפירושי השמות נקט לה:",
    "en": "I am not able- my strength has been taken away from me:"
   },
   {
    "dh": "למה רגשו גוים",
    "text": " — מה תועלת להם אלמא דבר קל הוא בעיניו:"
   },
   {
    "dh": "מי שלבו נוקפו",
    "text": " — הירא מעבירות שבידו:"
   },
   {
    "dh": "אומר כן",
    "text": " — מפרש אל תתחר במרעים אל תתקוטט והוא אינו כן אלא אל תתחר במרעים להתגרות במעשיהם לומר אעשה כן גם אני:"
   },
   {
    "dh": "ואומר אל יקנא לבך בחטאים כי אם ביראת ה' כל היום",
    "text": " — אפשר לומר אל תתקוטט עם רשעים כי אם ביראת ה' יראי ה' אלא על כרחך אל יקנא לבך לעשות כמותן:"
   },
   {
    "dh": "יחילו",
    "text": " — יצליחו. וחבירו על כן לא יחיל טובו (איוב כ׳:כ״א):"
   },
   {
    "dh": "מרום משפטיך מנגדו",
    "text": " — מסולקין דיניך ברחוק הימנו:"
   },
   {
    "dh": "יפיח בהם",
    "text": " — בנפיחתו הוא דוחה אותם כקש:"
   },
   {
    "dh": "ושמתי מקום",
    "text": " — סיפיה דקרא ולא יוסיפו בני עולה לענותו:"
   },
   {
    "dh": "כתיב לענותו",
    "text": " — בספר שמואל:"
   },
   {
    "dh": "וכתיב לכלותו",
    "text": " — בדברי הימים (א יז):"
   },
   {
    "dh": "בתחלה",
    "text": " — כשנבנה הבית נבנה על מנת שלא לענות עוד אויבים לישראל:"
   },
   {
    "dh": "ולבסוף",
    "text": " — כשחטאו נגזר עליהם ענוי ותפלתם מגינה עליהם מן הכליון:"
   },
   {
    "dh": "לא יכילנא",
    "text": " — תש כחי:"
   }
  ],
  "tosafot": [
   {
    "dh": "לא היה אדם שקראו אדון",
    "text": " — וא\"ת והא כתיב ברוך ה' אלהי שם (בראשית ט׳:כ״ו) וי\"ל דהתם אינו באל\"ף דל\"ת שהוא לשון אדנות. וא\"ת אמאי לא מייתי קרא אדני (אלהים) מה תתן לי (שם טו) שהוא כתוב קודם. וי\"ל שהפרשיות לא נאמרו כסדר ואין מוקדם ומאוחר בתורה וזה הפסוק דבין הבתרים היה קודם לכן. וכן צ\"ל ע\"כ שהרי אברהם היה בן שבעים שנה בברית בין הבתרים. ואחר הדברים האלה (שם) נאמר אחר מלחמת המלכים כדפירש רש\"י בפירוש חומש ובמלחמת המלכים היה בן ע\"ג שנים שהרי כל הימים של סדום נ\"ב שנים כדאמרי' בפ\"ק דשבת (דף יא.) צא מהם י\"ב שנים שעבדו את כדרלעומר וי\"ג שנים של מרידה ונשאר מישובה כ\"ו שנים שהיתה בשלוה ובהפיכתה היה אברהם בן צ\"ט שנה שהרי היתה ההפיכה שנה אחת קודם שנולד יצחק צא מהם ששה ועשרים שנה למפרע של שלוה נמצא שבן ע\"ג שנה היה במלחמת המלכים. אם כן היתה פרשת בין הבתרים קודם לפרשת אחר הדברים שלש שנים ואותה פרשה מסיימת ויחשבה לו צדקה ולכך הביא אותו פסוק דבמה אדע שהוא מוקדם. ומזה מיישב רשב\"ם דבמקום אחד משמע שהיה לילה דכתיב וספור הככבי' (בראשי' טו) ובתר הכי כתי' ויהי השמש לבוא משמע שהוא יום. אלא ודאי ש\"מ דשני פרשיות הם ולאו בבת אחת נאמרו ואין מוקדם ומאוחר בתורה:",
    "en": "It did not state that a person called Him \"Adon\" - But if you would ask, it is written \"Blessed be the L-rd, the G-d of Shem\" (Bereishis 9:26)? It can be answered that there it is not spelled with an Alef and Daled, which is the language of \"mastership\". But if you would ask, why does it not bring the verse \"My L-rd (Adonai with Alef-Daled), what will You give me?\" (Bereishis 15:2) which is written earlier? It can be answered that the portions (of the Torah) were not stated in order, and there is no chronological order in the Torah, and this verse from the Covenant Between the Parts happened earlier. And so it must be, for Avraham was 70 years old at the Covenant Between the Parts. And \"After these events\" (Bereishis 15:1) was said after the war with the kings, as Rashi explains in his Torah commentary... And at the war with the kings he was 73 years old, for the entire duration of Sodom was 52 years, as we say in the first chapter of Shabbat (11a) - subtract 12 years that they served Kedorlaomer and 13 years of rebellion, leaving 26 years that it existed peacefully. And at its overturning, Avraham was 99 years old, for the overturning was one year before Yitzchak was born. Subtract those 26 years of tranquility, and it emerges that he was 73 years old at the war with the kings. If so, the portion of the Covenant Between the Parts was 3 years before the portion of \"After these events,\" and that portion concludes \"And He reckoned it to him as righteousness\" - and therefore it brings that verse of \"How shall I know?\" because it came earlier. And with this, Rashbam reconciles that in one place it implies it was night, as it says \"and count the stars\" (15:5), and after that it says \"and the sun was about to set\" (15:12) implying it was day? Rather, it must be that these are two separate portions that were not said at one time, and \"there is no chronological order in the Torah.\""
   }
  ],
  "translations": []
 },
 {
  "id": "8a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ח",
  "amud": "א",
  "dafEn": "8a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "מאי דכתיב (תהלים סט, יד) ואני תפלתי לך ה' עת רצון אימתי עת רצון בשעה שהצבור מתפללין. ר' יוסי ברבי חנינא אמר מהכא (ישעיהו מט, ח) כה אמר ה' בעת רצון עניתיך ר' אחא ברבי חנינא אמר מהכא (איוב לו, ה) הן אל כביר ולא ימאס וכתיב (תהלים נה, יט) פדה בשלום נפשי מקרב לי כי ברבים היו עמדי תניא נמי הכי רבי נתן אומר מנין שאין הקב\"ה מואס בתפלתן של רבים שנאמר הן אל כביר ולא ימאס וכתיב פדה בשלום נפשי מקרב לי וגו' אמר הקב\"ה כל העוסק בתורה ובגמילות חסדים ומתפלל עם הצבור מעלה אני עליו כאילו פדאני לי ולבני מבין אומות העולם אמר ר\"ל כל מי שיש לו בית הכנסת בעירו ואינו נכנס שם להתפלל נקרא שכן רע שנאמר (ירמיהו יב, יד) כה אמר ה' על כל שכני הרעים הנוגעים בנחלה אשר הנחלתי את עמי את ישראל ולא עוד אלא שגורם גלות לו ולבניו שנא' (ירמיהו יב, יד) הנני נותשם מעל אדמתם ואת בית יהודה אתוש מתוכם. אמרו ליה לר' יוחנן איכא סבי בבבל תמה ואמר (דברים יא, כא) למען ירבו ימיכם וימי בניכם על האדמה כתיב אבל בחוצה לארץ לא כיון דאמרי ליה מקדמי ומחשכי לבי כנישתא אמר היינו דאהני להו כדאמר ר' יהושע בן לוי לבניה קדימו וחשיכו ועיילו לבי כנישתא כי היכי דתורכו חיי א\"ר אחא ברבי חנינא מאי קרא (משלי ח, לד) אשרי אדם שומע לי לשקד על דלתותי יום יום לשמור מזוזת פתחי וכתיב בתריה כי מוצאי מצא חיים. אמר רב חסדא לעולם יכנס אדם שני פתחים בבית הכנסת שני פתחים סלקא דעתך אלא אימא שיעור שני פתחים ואחר כך יתפלל: (תהלים לב, ו) על זאת יתפלל כל חסיד אליך לעת מצא אמר ר' חנינא לעת מצא זו אשה שנא' (משלי יח, כב) מצא אשה מצא טוב במערבא כי נסיב אינש אתתא אמרי ליה הכי מצא או מוצא מצא דכתיב מצא אשה מצא טוב ויפק רצון מה' מוצא דכתיב (קהלת ז, כו) ומוצא אני מר ממות את האשה וגו' ר' נתן אומר לעת מצא זו תורה שנאמר (משלי ח, לה) כי מוצאי מצא חיים וגו' רב נחמן בר יצחק אמר לעת מצא זו מיתה שנא' (תהלים סח, כא) למות תוצאות תניא נמי הכי תשע מאות ושלשה מיני מיתה נבראו בעולם שנאמר למות תוצאות תוצאות בגימטריא הכי הוו קשה שבכלן אסכרא ניחא שבכלן נשיקה אסכרא דמיא כחיזרא בגבבא דעמרא דלאחורי נשרא ואיכא דאמרי כפיטורי בפי ושט נשיקה דמיא כמשחל בניתא מחלבא ר' יוחנן אמר לעת מצא זו קבורה א\"ר חנינא מאי קרא (איוב ג, כב) השמחים אלי גיל ישישו כי ימצאו קבר אמר רבה בר רב שילא היינו דאמרי אינשי ליבעי אינש רחמי אפילו עד זיבולא בתרייתא שלמא מר זוטרא אמר לעת מצא זה בית הכסא אמרי במערבא הא דמר זוטרא עדיפא מכלהו. אמר ליה רבא לרפרם בר פפא לימא לן מר מהני מילי מעלייתא דאמרת משמיה דרב חסדא במילי דבי כנישתא אמר ליה הכי אמר רב חסדא מאי דכתי' (תהלים פז, ב) אוהב ה' שערי ציון מכל משכנות יעקב אוהב ה' שערים המצויינים בהלכה יותר מבתי כנסיות ומבתי מדרשות והיינו דאמר ר' חייא בר אמי משמיה דעולא מיום שחרב בית המקדש אין לו להקב\"ה בעולמו אלא ארבע אמות של הלכה בלבד. ואמר אביי מריש הוה גריסנא בגו ביתא ומצלינא בבי כנישתא כיון דשמענא להא דאמר רבי חייא בר אמי משמיה דעולא מיום שחרב בית המקדש אין לו להקב\"ה בעולמו אלא ארבע אמות של הלכה בלבד לא הוה מצלינא אלא היכא דגריסנא. רבי אמי ורבי אסי אף על גב דהוו להו תליסר בי כנישתא בטבריא לא מצלו אלא ביני עמודי היכא דהוו גרסי: ואמר רבי חייא בר אמי משמיה דעולא גדול הנהנה מיגיעו יותר מירא שמים דאילו גבי ירא שמים כתיב (תהלים קיב, א) אשרי איש ירא את ה' ואילו גבי נהנה מיגיעו כתיב (תהלים קכח, ב) יגיע כפיך כי תאכל אשריך וטוב לך אשריך בעולם הזה וטוב לך לעולם הבא ולגבי ירא שמים וטוב לך לא כתיב ביה: ואמר רבי חייא בר אמי משמיה דעולא לעולם ידור אדם במקום רבו שכל זמן ששמעי בן גרא קיים לא נשא שלמה את בת פרעה והתניא אל ידור לא קשיא הא דכייף ליה הא דלא כייף ליה: אמר רב הונא בר יהודה אמר רבי מנחם אמר ר' אמי מאי דכתי' (ישעיהו א, כח) ועוזבי ה' יכלו זה המניח ס\"ת ויוצא רבי אבהו נפיק בין גברא לגברא. בעי רב פפא בין פסוקא לפסוקא מהו תיקו רב ששת מהדר אפיה וגריס אמר אנן בדידן ואינהו בדידהו: אמר רב הונא בר יהודה אמר רבי אמי לעולם ישלים אדם פרשיותיו עם הצבור שנים מקרא ואחד תרגום",
  "rashi": [
   {
    "dh": "עת רצון",
    "text": " — אלמא יש שעה שהיא של רצון:",
    "en": "Complete his portions- of every Sabbath and Sabbath:"
   },
   {
    "dh": "כביר לא ימאס",
    "text": " — תפלת הרבים לא ימאס:"
   },
   {
    "dh": "מקרב לי",
    "text": " — ממלחמות הבאות עלי:"
   },
   {
    "dh": "כי ברבים היו עמדי",
    "text": " — שהתפללו עמי:"
   },
   {
    "dh": "פדה בשלום",
    "text": " — זה שעסק בדברי שלום דהיינו תורה דכתיב וכל נתיבותיה שלום (משלי ג׳:י״ז) וכן גמילות חסדים נמי שלום הוא שמתוך שגומל חסד בגופו לחבירו הוא מכיר שהוא אוהבו ובא לידי אחוה ושלום:"
   },
   {
    "dh": "הנני נותשם מעל אדמתם",
    "text": " — סיפיה דקרא הוא:"
   },
   {
    "dh": "מקדמי",
    "text": " — שחרית:"
   },
   {
    "dh": "מחשכי",
    "text": " — ערבית כלומר מאריכין בבית הכנסת:"
   },
   {
    "dh": "שיעור של שני פתחים",
    "text": " — רוחב יכנס לפנים שלא ישב סמוך לפתח דנראה עליו כמשוי עכוב בית הכנסת ויהא מזומן סמוך לפתח לצאת:"
   },
   {
    "dh": "יתפלל לעת מצא",
    "text": " — יתפלל שיהו מצויין לו כשיצטרך:"
   },
   {
    "dh": "לעת מצא זו מיתה",
    "text": " — שימות במיתה יפה ונחה:"
   },
   {
    "dh": "אסכרא",
    "text": " — אישטר\"אנגולמנט בלע\"ז שבתוך הגוף:"
   },
   {
    "dh": "כחיזרא בגבבא דעמרא דלאחורי נשרא",
    "text": " — כענפי הסירים הנסבכים בגזת הצמר כשאדם נותק בחזקה ומשליך לאחור שאי אפשר שלא ינתק הצמר עמה:"
   },
   {
    "dh": "כפיטורי בפי ושט",
    "text": " — ים אוקיינוס יש בו מקומות שאינו מקבל ברזל ומחברין לוחי הספינה ע\"י חבלים ועקלים שתוחבי' בנקביו ותוקעין אותו בדוחק לפי שהם גסין כמדת הנקב:"
   },
   {
    "dh": "פיטורי",
    "text": " — חבלים דמתרגמינן ופטורי ציצים (מלכים א ו׳:י״ח) אטונין:"
   },
   {
    "dh": "בפי ושט",
    "text": " — הוא הנקב שהוא עגול כפי ושט:"
   },
   {
    "dh": "כמשחל בניתא מחלבא",
    "text": " — כמושך נימת שער מתוך החלב:"
   },
   {
    "dh": "זיבולא בתרייתא שלמא",
    "text": " — שיהא לו שלום כל ימי חייו ואף ביום קבורתו עד השלכת עפר האחרונה שבכיסוי קבורתו:"
   },
   {
    "dh": "זיבולא",
    "text": " — פלא\"דא בלע\"ז:"
   },
   {
    "dh": "לעת מצא זה בית הכסא",
    "text": " — שיהא דר במקום שיש בית הכסא סמוך לו לפי שהיתה קרקע של בבל מצולת מים ואין יכולין לחפור שם חפירות והיו צריכין לצאת בשדות ולהתרחק מאד:"
   },
   {
    "dh": "המצויינים",
    "text": " — ציון ואסיפת צבור:"
   },
   {
    "dh": "ביני עמודי",
    "text": " — שבית המדרש נכון עליהם מלמעלה:"
   },
   {
    "dh": "שכל זמן ששמעי בן גרא קיים כו'",
    "text": " — דסמוך למיתת שמעי כתיב ויתחתן שלמה את פרעה (מלכים א ג׳:א׳):"
   },
   {
    "dh": "הא דכייף ליה",
    "text": " — אם כפוף הוא לרבו לקבל תוכחתו ידור אצלו. ואם לאו טוב להתרחק ממנו ויהי שוגג ואל יהי מזיד:"
   },
   {
    "dh": "מהדר אפיה וגריס",
    "text": " — משנתו כשקורין בספר תורה:"
   },
   {
    "dh": "ישלים פרשיותיו",
    "text": " — של כל שבת ושבת:"
   }
  ],
  "tosafot": [
   {
    "dh": "רב ששת מהדר אפיה וגריס",
    "text": " — וא\"ת והא אמרינן בסוטה (פ\"ז ד' לט.) מאי דכתי' וכפתחו עמדו כל העם (נחמיה ח׳:ה׳) כיון שנפתח ספר תורה אסור לספר אפי' בדבר הלכה. ויש לומר התם איירי בקול רם כדי שלא יבטלו קול קריאת התורה והכא איירי בנחת. והאי דקא מהדר אפיה רבותא משמע אע\"ג דמהדר אפיה שנראה כמניח ספר תורה שפיר דמי והאי דאהדר אפיה כדי שיכוון גרסתו. ורב אלפס (מגילה פ\"ד) כתב דה\"ג מפרשי דוקא שיש שם עשרה אחריני אז יכול ללמוד. אבל אין שם עשרה כי אם עמו לא. והכא מיירי שהיו שם עשרה בלא הוא ועוד תירץ האלפסי שאני רב ששת שתורתו אומנתו הוא. ואנן מסתבר לן כי האי תירוצא:",
    "en": "Rav Sheshet would turn his face away and study - But if you would ask, did we not say in Sotah (39b) - \"What is meant by the verse 'And when it was opened, all the people stood' (Nehemiah 8:5)? Once the Torah scroll is opened, it is forbidden to speak even words of Torah.\" It can be said that there it is referring to speaking out loud, so as not to disturb the reading of the Torah, but here it is referring to learning quietly. And the fact that it states he \"turned his face away\" implies a chiddush (novelty) - even though he turned his face away, appearing like one who puts down the Torah scroll, it is still permitted. And the reason he turned his face away was in order to concentrate properly on his learning. And Rav Alfas (in the 4th chapter of Megillah) wrote that the BaHaG explained it is only when there are 10 others there that one is permitted to study. But if there are not 10 besides him, then no. And here it is discussing where there were 10 besides him. And further, Rav Alfas offered another answer - that Rav Sheshet was different since Torah study was his occupation. And we find this latter answer more satisfactory."
   },
   {
    "dh": "שנים מקרא ואחד תרגום. יש מפרשים והוא הדין ללועזות בלע\"ז שלהן הוי כמו תרגום שמפרש לפעמים. כי כמו שהתרגום מפרש לע\"ה כך הם מבינים מתוך הלע\"ז. ולא נהירא שהרי התרגום מפרש במה שאין ללמוד מן העברי כדאשכחן בכמה דוכתי דאמר רב יוסף (מגילה ד' ג.) אלמלא תרגומא דהאי קרא לא ידענא מאי קאמר ע\"כ אין לומר בשום לשון פעם שלישית כי אם בלשון תרגום",
    "text": "",
    "en": "Verses twice and translation (Targum, i.e. Aramaic translation) once - Some explain that the requirement [of reading a translation] applies to foreigners in their (native) language, as it is like (Aramaic) Targum that sometimes explains the verses. Because, just as the (Aramaic) Targum explains [the verses] to the Amei Ha'aretz (literally, \"People of the Land\"), so too, foreigners understand [the translation of the verses] through their native tongue. However, this does not appear [to be a correct], since the (Aramaic) Targum explains items that cannot be understood from the Hebrew, as can be found in many places. [For example], Rabbi Yosef said, (Megillah 3a) \"If it were not for the (Aramaic) Targum of this verse, I would not know what it is speaking of.\" Therefore, one should not recite [the translation] in any language the third time (i.e. after the verses are read in Hebrew twice), except for the language of the (Aramaic) Targum."
   }
  ],
  "translations": []
 },
 {
  "id": "8b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ח",
  "amud": "ב",
  "dafEn": "8b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ואפילו (במדבר לב) עטרות ודיבון שכל המשלים פרשיותיו עם הצבור מאריכין לו ימיו ושנותיו רב ביבי בר אביי סבר לאשלומינהו לפרשייתא דכולא שתא במעלי יומא דכפורי תנא ליה חייא בר רב מדפתי כתיב (ויקרא כג) ועניתם את נפשתיכם בתשעה לחדש בערב וכי בתשעה מתענין והלא בעשרה מתענין אלא לומר לך כל האוכל ושותה בתשיעי מעלה עליו הכתוב כאילו מתענה תשיעי ועשירי. סבר לאקדומינהו אמר ליה ההוא סבא תנינא ובלבד שלא יקדים ושלא יאחר כדאמר להו ר' יהושע בן לוי לבניה אשלימו פרשיותייכו עם הצבור שנים מקרא ואחד תרגום והזהרו בורידין כרבי יהודה דתנן רבי יהודה אומר עד שישחוט את הורידין והזהרו בזקן ששכח תלמודו מחמת אונסו דאמרינן לוחות ושברי לוחות מונחות בארון אמר להו רבא לבניה כשאתם חותכין בשר אל תחתכו על גב היד איכא דאמרי משום סכנה ואיכא דאמרי משום קלקול סעודה ואל תשבו על מטת ארמית ואל תעברו אחורי בית הכנסת בשעה שהצבור מתפללין. ואל תשבו על מטת ארמית. איכא דאמרי לא תגנו בלא ק\"ש ואיכא דאמרי דלא תנסבו גיורתא וא\"ד ארמית ממש ומשום מעשה דרב פפא דרב פפא אזל לגבי ארמית הוציאה לו מטה אמרה לו שב אמר לה איני יושב עד שתגביהי את המטה הגביהה את המטה ומצאו שם תינוק מת מכאן אמרו חכמים אסור לישב על מטת ארמית ואל תעברו אחורי בית הכנסת בשעה שהצבור מתפללין מסייע ליה לרבי יהושע בן לוי דאמר ר' יהושע בן לוי אסור לו לאדם שיעבור אחורי בית הכנסת בשעה שהצבור מתפללין אמר אביי ולא אמרן אלא דליכא פתחא אחרינא אבל איכא פתחא אחרינא לית לן בה ולא אמרן אלא דליכא בי כנישתא אחרינא אבל איכא בי כנישתא אחרינא לית לן בה ולא אמרן אלא דלא דרי טונא ולא רהיט ולא מנח תפילין אבל איכא חד מהנך לית לן בה: תניא אמר ר\"ע בשלשה דברים אוהב אני את המדיים כשחותכין את הבשר אין חותכין אלא על גבי השולחן כשנושקין אין נושקין אלא על גב היד וכשיועצין אין יועצין אלא בשדה אמר רב אדא בר אהבה מאי קראה (בראשית לא) וישלח יעקב ויקרא לרחל וללאה השדה אל צאנו: תניא אמר רבן גמליאל בשלשה דברים אוהב אני את הפרסיים הן צנועין באכילתן וצנועין בבית הכסא וצנועין בדבר אחר: (ישעיהו יג) אני צויתי למקודשי תני רב יוסף אלו הפרסיים המקודשין ומזומנין לגיהנם: רבן גמליאל אומר וכו': אמר רב יהודה אמר שמואל הלכה כר\"ג תניא ר\"ש בן יוחי אומר פעמים שאדם קורא ק\"ש שתי פעמים בלילה אחת קודם שיעלה עמוד השחר ואחת לאחר שיעלה עמוד השחר ויוצא בהן ידי חובתו אחת של יום ואחת של לילה. הא גופא קשיא אמרת פעמים שאדם קורא קרית שמע שתי פעמים בלילה אלמא לאחר שיעלה עמוד השחר ליליא הוא והדר תני יוצא בהן ידי חובתו אחת של יום ואחת של לילה אלמא יממא הוא לא לעולם ליליא הוא והא דקרי ליה יום דאיכא אינשי דקיימי בההיא שעתא אמר רב אחא בר חנינא אמר רבי יהושע בן לוי הלכה כרבי שמעון בן יוחי איכא דמתני להא דרב אחא בר חנינא אהא דתניא רבי שמעון בן יוחי אומר משום ר' עקיבא פעמים שאדם קורא ק\"ש שתי פעמים ביום אחת קודם הנץ החמה ואחת לאחר הנץ החמה ויוצא בהן ידי חובתו אחת של יום ואחת של לילה הא גופא קשיא אמרת פעמים שאדם קורא קרית שמע שתי פעמים ביום אלמא קודם הנץ החמה יממא הוא והדר תני יוצא בהן ידי חובתו אחת של יום ואחת של לילה אלמא ליליא הוא",
  "rashi": [
   {
    "dh": "ואפ' עטרות ודיבון",
    "text": " — שאין בו תרגום:"
   },
   {
    "dh": "מעלה עליו הכתוב כו'",
    "text": " — והכי קאמר קרא הכינו עצמכם בתשעה לחדש לענוי המחרת והרי הוא בעיני כענוי היום:"
   },
   {
    "dh": "לאקדומינהו",
    "text": " — לסדר כל הפרשיות בשבת אחת או בשתי שבתות:"
   },
   {
    "dh": "עד שישחוט את הורידין",
    "text": " — כדי שיצא כל הדם ולא אמר כן אלא בעוף הואיל וצולהו כולו כאחד:"
   },
   {
    "dh": "מחמת אונסו",
    "text": " — שחלה או שנטרד בדוחק מזונות הזהרו בו לכבדו:"
   },
   {
    "dh": "שברי לוחות מונחות בארון",
    "text": " — דכתיב (דברים י׳:ב׳) אשר שברת ושמתם בארון אף השברים תשים בארון:"
   },
   {
    "dh": "משום סכנה",
    "text": " — שלא יקוץ ידו:"
   },
   {
    "dh": "משום קלקול סעודה",
    "text": " — אף בחבורה קטנה יצא דם וילכלך את המאכל וימאיס את המסובין:"
   },
   {
    "dh": "בלא ק\"ש",
    "text": " — שתהא מטתך דומה למטת ארמית:"
   },
   {
    "dh": "ארמית ממש",
    "text": " — על מטת ארמית:"
   },
   {
    "dh": "מעשה דרב פפא",
    "text": " — שאמרה לו שב על המטה והיה בנה מת מוטל עליה והיתה רוצה להעליל עליו ולומר שישב עליו והרגו:"
   },
   {
    "dh": "אסור לעבור וכו'",
    "text": " — שנראה כמבריח עצמו מפתח בית הכנסת שבמזרח:"
   },
   {
    "dh": "על גב היד",
    "text": " — את יד חברו הוא נושק ודרך חשיבות הוא זה מפני הרוק:"
   },
   {
    "dh": "אלא בשדה",
    "text": " — דאמרי אינשי אזנים לכותל:"
   },
   {
    "dh": "בדבר אחר",
    "text": " — תשמיש:"
   },
   {
    "dh": "אני צויתי למקודשי",
    "text": " — במפלת בבל כתיב אני צויתי את מלכי פרס ומדי לבא ולהשחיתה:"
   },
   {
    "dh": "ליליא הוא",
    "text": " — עד הנץ החמה:"
   },
   {
    "dh": "דקיימי בההיא שעתא",
    "text": " — הלכך זמן ק\"ש דיום הוא דגבי קרית שמע ובקומך כתיב והא קיימי:"
   }
  ],
  "tosafot": [
   {
    "dh": "ואפילו עטרות ודיבון וכו'",
    "text": " — פי' רש\"י אפי' עטרות ודיבון שאין בו תרגום שצריך לקרותו שלשה פעמים בעברי. וקשה אמאי נקט עטרות ודיבון שיש לו מ\"מ תרגום ירושלמי. היה לו לומר ראובן ושמעון או פסוקא אחרינא שאין בו תרגום כלל. ויש לומר משום הכי נקט עטרות ודיבון אע\"ג שאין בו תרגום ידוע אלא תרגום ירושלמי וצריך לקרות ג' פעמים העברי מ\"מ יותר טוב לקרות פעם שלישית בתרגום:",
    "en": "And even regarding \"Ataros v'Divon\" etc. - Rashi explains that even regarding \"Ataros v'Divon\" which does not have a Targum (Aramaic translation), one also needs to read it three times in Hebrew. And this is difficult - why did it specify \"Ataros v'Divon\" which does have a Targum Yerushalmi (Jerusalem Targum)? It could have said \"Reuven and Shimon\" or another verse that has no Targum at all. It can be said that the reason it specified \"Ataros v'Divon\" is despite the fact that it does not have a well-known Targum except for the Targum Yerushalmi, and one needs to read it three times in Hebrew - nevertheless, it is better to read the third time in the Targum (Yerushalmi)."
   },
   {
    "dh": "כאילו מתענה תשיעי ועשירי",
    "text": " — ה\"פ אם נצטווה להתענות יום ט'. והקשה רבינו שמואל ב\"ר אהרן מינבי\"ל מאי קשיא ליה והא כתיב בראשון בארבעה עשר יום לחדש בערב תאכלו מצות (שמות י״ב:י״ח) ואותו ערב ר\"ל ערב של ט\"ו הכא נמי נימא מאי ערב ערב של עשירי ויש לומר דשאני התם דכתיב תאכלו לבסוף דמשמע הכי בראשון בי\"ד בלילה תאכלו מצות. אבל הכא כתיב ועניתם קודם בערב דמשמע ועניתם מיד ביום התשיעי:"
   },
   {
    "dh": "ישלים פרשיותיו עם הצבור",
    "text": " — נראה דכל השבוע מכיון דמתחילין לקרות הפרשה דהיינו ממנחת שבת ואילך עד שבת הבאה נקראת עם הצבור ואע\"ג דלענין גיטין לא נקרא קמי שבת אלא מרביעי ואילך (בפסחים ד' קו.) [וזמן השלמה יש] במדרש ג' דברים צוה רבינו הקדוש לבניו בשעה שנפטר שלא תאכלו לחם בשבת עד שתגמרו כל הפרשה משמע דקודם אכילה צריך להשלימה. ומיהו אם השלימה לאחר אכילה שפיר דמי. מ\"מ מצוה מן המובחר קודם אכילה:"
   },
   {
    "dh": "לא לעולם ליליא הוא",
    "text": " — תימא אם כן לימא רבותא שפעמים יש אדם קורא לאחר שיעלה עמוד השחר שני פעמים ויוצא בו משום שחרית ומשום ערבית. וי\"ל דהכי קאמר לעולם לילא הוא בשאר מצות דבעינן בהו יום כמו תפילין וציצית. אבל גבי ק\"ש לא הואיל ואיכא אינשי דקיימי בההיא שעתא לאו זמן שכיבה הוא. והאי דנקט לאחר שיעלה עמוד השחר לאו דוקא מיד הוא דהא צריך להמתין לכל הפחות שיעורא דמתניתין (לקמן ברכות ט:) עד שיכיר בין תכלת לכרתי:"
   }
  ],
  "translations": []
 },
 {
  "id": "9a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ט",
  "amud": "א",
  "dafEn": "9a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "לא לעולם יממא הוא והאי דקרו ליה ליליא דאיכא אינשי דגנו בההיא שעתא אמר רבי אחא ברבי חנינא אמר רבי יהושע בן לוי הלכה כר\"ש שאמר משום רבי עקיבא. אמר רבי זירא ובלבד שלא יאמר השכיבנו. כי אתא רב יצחק בר יוסף אמר הא דרבי אחא ברבי חנינא אמר ריב\"ל לאו בפירוש איתמר אלא מכללא איתמר דההוא זוגא דרבנן דאשתכור בהלולא דבריה דר' יהושע בן לוי אתו לקמיה דריב\"ל אמר כדאי הוא ר\"ש לסמוך עליו בשעת הדחק: מעשה שבאו בניו וכו': ועד השתא לא שמיע להו הא דר\"ג הכי קאמרי ליה. רבנן פליגי עילווך ויחיד ורבים הלכה כרבים או דלמא רבנן כוותך סבירא להו והאי דקאמרי עד חצות כדי להרחיק אדם מן העבירה אמר להו רבנן כוותי סבירא להו וחייבין אתם והאי דקאמרי עד חצות כדי להרחיק אדם מן העבירה: ולא זו בלבד אמרו אלא וכו': ור\"ג מי קאמר עד חצות דקתני ולא זו בלבד אמרו הכי קאמר להו ר\"ג לבניה אפילו לרבנן דקאמרי עד חצות מצותה עד שיעלה עמוד השחר והאי דקא אמרי עד חצות כדי להרחיק אדם מן העבירה: הקטר חלבים וכו': ואילו אכילת פסחים לא קתני ורמינהי ק\"ש ערבית והלל בלילי פסחים ואכילת פסח מצותן עד שיעלה עמוד השחר אמר רב יוסף לא קשיא הא ר' אלעזר בן עזריה הא רבי עקיבא דתניא (שמות יב, ח) ואכלו את הבשר בלילה הזה רבי אלעזר בן עזריה אומר נאמר כאן בלילה הזה ונאמר להלן (שמות יב, יב) ועברתי בארץ מצרים בלילה הזה מה להלן עד חצות אף כאן עד חצות אמר ליה ר' עקיבא והלא כבר נאמר (שמות יב, יא) בחפזון עד שעת חפזון א\"כ מה תלמוד לומר בלילה יכול יהא נאכל כקדשים ביום תלמוד לומר בלילה בלילה הוא נאכל ולא ביום בשלמא לר' אלעזר בן עזריה דאית ליה גזירה שוה אצטריך למכתב ליה הזה אלא לר' עקיבא האי הזה מאי עביד ליה למעוטי לילה אחר הוא דאתא סד\"א הואיל ופסח קדשים קלים ושלמים קדשים קלים מה שלמים נאכלין לשני ימים ולילה אחד אף פסח נאכל שתי לילות במקום ב' ימים ויהא נאכל לב' לילות ויום אחד קמ\"ל בלילה הזה בלילה הזה הוא נאכל ואינו נאכל בלילה אחר ור' אלעזר בן עזריה (שמות יב, י) מלא תותירו עד בקר נפקא ורבי עקיבא אי מהתם הוה אמינא מאי בקר בקר שני ורבי אלעזר אמר לך כל בקר בקר ראשון הוא. והני תנאי כהני תנאי דתניא (דברים טז, ו) שם תזבח את הפסח בערב כבוא השמש מועד צאתך ממצרים ר' אליעזר אומר בערב אתה זובח וכבוא השמש אתה אוכל ומועד צאתך ממצרים אתה שורף רבי יהושע אומר בערב אתה זובח כבוא השמש אתה אוכל ועד מתי אתה אוכל והולך עד מועד צאתך ממצרים א\"ר אבא הכל מודים כשנגאלו ישראל ממצרים לא נגאלו אלא בערב שנאמר (דברים טז, א) הוציאך ה' אלהיך ממצרים לילה וכשיצאו לא יצאו אלא ביום שנא' (במדבר לג, ג) ממחרת הפסח יצאו בני ישראל ביד רמה על מה נחלקו על שעת חפזון ר' אלעזר בן עזריה סבר מאי חפזון חפזון דמצרים ורבי עקיבא סבר מאי חפזון חפזון דישראל תנ\"ה הוציאך ה' אלהיך ממצרים לילה וכי בלילה יצאו והלא לא יצאו אלא ביום שנא' ממחרת הפסח יצאו בני ישראל ביד רמה אלא מלמד שהתחילה להם גאולה מבערב: (שמות יא, ב) דבר נא באזני העם וגו' אמרי דבי ר' ינאי אין נא אלא לשון בקשה אמר ליה הקב\"ה למשה בבקשה ממך לך ואמור להם לישראל בבקשה מכם שאלו ממצרים כלי כסף וכלי זהב שלא יאמר",
  "rashi": [
   {
    "dh": "והאי דקרו ליה ליליא",
    "text": " — דקאמר יוצא בו ק\"ש של לילה:"
   },
   {
    "dh": "משום דאיכא דגנו",
    "text": " — וקרינא ביה ובשכבך:"
   },
   {
    "dh": "ובלבד שלא יאמר השכיבנו",
    "text": " — הקורא ק\"ש של לילה שחרית סמוך לעמוד השחר לא יאמר השכיבנו שאין עוד זמן תחלת שכיבה אלא זמן סוף שכיבה:"
   },
   {
    "dh": "דאשתכור",
    "text": " — וישנו ונרדמו עד לאחר עמוד השחר:"
   },
   {
    "dh": "בשעת הדחק",
    "text": " — אבל שלא בשעת הדחק לא:"
   },
   {
    "dh": "הכי קא אמרי ליה",
    "text": " — לרבן גמליאל ולא גרס אלא:"
   },
   {
    "dh": "רבנן פליגי עילווך",
    "text": " — כלומר מי פליגי רבנן עליך דהא דאמרי עד חצות דוקא קאמרי דלא משמע להו ובשכבך כל זמן שכיבה אלא כל זמן שדרך בני אדם להתעסק לילך ולשכב ומיהו בהא פליגי אדר' אליעזר דאלו רבי אליעזר סבירא ליה זמן עסק שכיבה אינו אלא עד האשמורה הראשונה ולרבנן עד חצות. ואת סבירא לך ובשכבך כל זמן שבני אדם שוכבים והיינו כל הלילה ויחיד ורבים הלכה כרבים:"
   },
   {
    "dh": "או דילמא כוותך סבירא להו",
    "text": " — ומשמע להו ובשכבך כל זמן שכיבה והא דקאמרי עד חצות הרחקה הוא כדי לזרז ומיהו היכא דאתניס ולא קרא קודם חצות עדיין זמן חיובא הוא ומחייבי ונפקי ידי ק\"ש בזמנו:"
   },
   {
    "dh": "כוותי סבירא להו",
    "text": " — וחייבין אתם לקרות גרסינן ולא גרסינן מותרים דאפילו שלא בזמנו תנן (עמוד ב) הקורא מכאן ואילך לא הפסיד כאדם הקורא בתורה:"
   },
   {
    "dh": "שעת חפזון",
    "text": " — שנחפזו לצאת והיינו עמוד השחר כדכתיב לא תצאו איש מפתח ביתו עד בקר (שמות י״ב:כ״ב):"
   },
   {
    "dh": "יכול יהא נאכל",
    "text": " — כשאר קדשים ביום שחיטתו כדרך תודה שאף היא זמן אכילתה יום א' ואוכל והולך כל יום שחיטתה והלילה עד הבקר כדין תודה דכתיב ביום קרבנו יאכל (ויקרא ז׳:ט״ו):"
   },
   {
    "dh": "מה שלמים נאכלין לשני ימים ולילה אחד",
    "text": " — שבינתים דכתיב ביום זבחכם יאכל וממחרת (שם יט) אף פסח נמי הואיל ואינו נאכל אלא בלילה נוקים שני לילות במקום שני ימים דשלמים ויהא נאכל בשני לילות ויום א' לא שיאכלנו ביום אלא שיהא שהות זמן שלא יפסל באכילה בשביל המתנת היום ויאכלנו בלילה השנית קמ\"ל:"
   },
   {
    "dh": "שם תזבח את הפסח בערב כבא השמש מועד צאתך ממצרים",
    "text": " — הרי לך שלשה זמנים שאינם שוים. בערב כי ינטו צללי ערב היינו לאחר חצות שנסתלקה חמה מראש כל אדם ונטתה למערב. כבא השמש משחשכה. מועד צאתך ממצרים בבקר. כיצד יתקיימו כולם. בערב לזמן שחיטה כבא השמש התחלת זמן אכילה מועד צאתך זמן שריפה כלומר בבקר הוא נעשה נותר שהגיע זמן שריפה אלא לפי שאין שורפין קדשים ביום טוב ממתינין לו עד בקר שני:"
   },
   {
    "dh": "עד מתי אתה אוכל",
    "text": " — היינו כר\"ע אבל לתנא קמא עד חצות לילה הוי זמן אכילה ותו לא דאי לא מאי בינייהו:"
   },
   {
    "dh": "הכל מודים",
    "text": " — רבי עקיבא גופיה מודה שהלילה מחצות ואילך היתה שעת חפזון למצרים לשלחם מן הארץ:"
   },
   {
    "dh": "מערב נגאלו",
    "text": " — נתנו להם רשות לצאת:"
   },
   {
    "dh": "חפזון דמצרים",
    "text": " — מכת הבכורים שעל ידם נחפזו למהר לשלחם:"
   },
   {
    "dh": "חפזון דישראל",
    "text": " — לא שמעו להם לצאת עד בקר:"
   }
  ],
  "tosafot": [
   {
    "dh": "לעולם יממא הוא",
    "text": " — ואם תאמר ליתני שתי פעמים קודם הנץ החמה והוי רבותא טפי דאפילו קודם הנץ הוי זמן דקריאת שמע של שחרית. וי\"ל כדפרישנא דהאי יממא לענין שאר מצות. אבל לענין ק\"ש הואיל ואיכא אינשי דגנו לאו זמן קימה הוא. ותימא דקשיא דרבי עקיבא אדר' עקיבא דהכא קאמר אחר הנץ ולקמן (עמוד ב) קאמר משיכיר בין חמור לערוד דהיינו אפילו קודם. וי\"ל דתרי תנאי אליבא דרבי עקיבא. אי נמי יש לומר יממא הוא אפילו גבי קרית שמע דהא זמן קימה הוא והא דלא נקט ב' פעמים קודם הנץ משום דבעי לאשמועינן שאינו יוצא בשל לילה אחר הנץ:"
   },
   {
    "dh": "ובלבד שלא יאמר השכיבנו",
    "text": " — פירש בקונטרס אמילתא דר\"ש בן יוחי דקורא קודם שיעלה עמוד השחר קאי. ונראה לי דאז ודאי זמן שכיבה הוא ומצי למימר השכיבנו. ועוד דהוה ליה למימר אמאי דסליק מיניה. ופי' השר מקוצי דקאי אקודם הנץ דסליק מיניה ולכך קאמר דלא מצי למימר השכיבנו דלאו זמן שכיבה הוא כיון שעלה כבר עמוד השחר אפילו קודם הנץ:"
   },
   {
    "dh": "ר' אלעזר בן עזריה אומר נאמר כאן בלילה הזה וכו'",
    "text": " — וא\"ת היכי מצי למימר רבי אלעזר בן עזריה עד חצות והכתיב לא תותירו ממנו עד בקר (שמות י״ב:י׳) דמשמע עד בקר מיהא מצי לאכלו. ויש לומר דמצי למימר דהכי קאמר לא תעשו דבר שיבא לידי נותר עד הבקר. שאם לא יהא נאכל עד חצות לא תוכל לאוכלו ולא לשורפו בלילה כדקא אמרינן ביום אתה שורפו ואי אתה שורפו בלילה ואם כן ישאר עד הבקר:"
   }
  ],
  "translations": []
 },
 {
  "id": "9b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ט",
  "amud": "ב",
  "dafEn": "9b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אותו צדיק (בראשית טו, יג) ועבדום וענו אותם קיים בהם ואחרי כן יצאו ברכוש גדול לא קיים בהם אמרו לו ולואי שנצא בעצמנו משל לאדם שהיה חבוש בבית האסורים והיו אומרים לו בני אדם מוציאין אותך למחר מבית האסורין ונותנין לך ממון הרבה ואומר להם בבקשה מכם הוציאוני היום ואיני מבקש כלום: (שמות יב, לו) וישאלום א\"ר אמי מלמד שהשאילום בעל כרחם איכא דאמרי בעל כרחם דמצרים וא\"ד בעל כרחם דישראל מ\"ד בעל כרחם דמצרים דכתיב (תהלים סח, יג) ונות בית תחלק שלל מ\"ד בעל כרחם דישראל משום משוי: (שמות יב, לו) וינצלו את מצרים א\"ר אמי מלמד שעשאוה כמצודה שאין בה דגן ור\"ל אמר עשאוה כמצולה שאין בה דגים: (שמות ג, יד) אהיה אשר אהיה א\"ל הקב\"ה למשה לך אמור להם לישראל אני הייתי עמכם בשעבוד זה ואני אהיה עמכם בשעבוד מלכיות אמר לפניו רבש\"ע דיה לצרה בשעתה א\"ל הקב\"ה לך אמור להם (שמות ג, יד) אהיה שלחני אליכם: (מלכים א יח, לז) ענני ה' ענני א\"ר אבהו למה אמר אליהו ענני ב' פעמים מלמד שאמר אליהו לפני הקב\"ה רבש\"ע ענני שתרד אש מן השמים ותאכל כל אשר על המזבח וענני שתסיח דעתם כדי שלא יאמרו מעשה כשפים הם שנאמר (מלכים א יח, לז) ואתה הסבות את לבם אחורנית:  מאימתי קורין את שמע בשחרית משיכיר בין תכלת ללבן ר' אליעזר אומר בין תכלת לכרתי (וגומרה) עד הנץ החמה ר' יהושע אומר עד שלש שעות שכן דרך מלכים לעמוד בשלש שעות הקורא מכאן ואילך לא הפסיד כאדם הקורא בתורה: גמ׳ מאי בין תכלת ללבן אילימא בין גבבא דעמרא חיורא לגבבא דעמרא דתכלתא הא בליליא נמי מידע ידעי אלא בין תכלת שבה ללבן שבה. תניא רבי מאיר אומר משיכיר בין זאב לכלב ר\"ע אומר בין חמור לערוד ואחרים אומרים משיראה את חברו רחוק ד' אמות ויכירנו אמר רב הונא הלכה כאחרים אמר אביי לתפילין כאחרים לק\"ש כותיקין דאמר ר' יוחנן ותיקין היו גומרין אותה עם הנץ החמה תניא נמי הכי ותיקין היו גומרין אותה עם הנץ החמה כדי שיסמוך גאולה לתפלה ונמצא מתפלל ביום א\"ר זירא מאי קראה (תהלים עב, ה) ייראוך עם שמש ולפני ירח דור דורים העיד ר\"י בן אליקים משום קהלא קדישא דבירושלים כל הסומך גאולה לתפלה אינו נזוק כל היום כולו א\"ר זירא איני והא אנא סמכי ואיתזקי א\"ל במאי איתזקת דאמטיית אסא לבי מלכא התם נמי מבעי לך למיהב אגרא למחזי אפי מלכא דא\"ר יוחנן לעולם ישתדל אדם לרוץ לקראת מלכי ישראל ולא לקראת מלכי ישראל בלבד אלא אפילו לקראת מלכי עכו\"ם שאם יזכה יבחין בין מלכי ישראל למלכי עכו\"ם. אמר ליה רבי אלעא לעולא כי עיילת להתם שאיל בשלמא דרב ברונא אחי במעמד כל החבורה דאדם גדול הוא ושמח במצות זימנא חדא סמך גאולה לתפלה ולא פסיק חוכא מפומיה כוליה יומא. היכי מצי סמיך והא א\"ר יוחנן בתחלה הוא אומר ה' שפתי תפתח ולבסוף הוא אומר יהיו לרצון אמרי פי וגו' אמר ר' אלעזר תהא בתפלה של ערבית. והא אמר ר' יוחנן איזהו בן העוה\"ב זהו הסומך גאולה של ערבית לתפלה של ערבית אלא א\"ר אלעזר תהא בתפלת המנחה רב אשי אמר אפי' תימא אכולהו וכיון דקבעוה רבנן בתפלה כתפלה אריכתא דמיא דאי לא תימא הכי ערבית היכי מצי סמיך והא בעי למימר השכיבנו אלא כיון דתקינו רבנן השכיבנו כגאולה אריכתא דמיא ה\"נ כיון דקבעוה רבנן בתפלה כתפלה אריכתא דמיא. מכדי האי יהיו לרצון אמרי פי משמע לבסוף ומשמע מעיקרא דבעינא למימר מ\"ט תקנוהו רבנן לאחר י\"ח ברכות לימרו מעיקרא א\"ר יהודה בריה דר' שמעון בן פזי הואיל ולא אמרו דוד אלא לאחר י\"ח פרשיות לפיכך תקינו רבנן לאחר י\"ח ברכות. הני י\"ח י\"ט הויין אשרי האיש ולמה רגשו גוים חדא פרשה היא דאמר ר' יהודה בריה דרבי שמעון בן פזי ק\"ג פרשיות אמר דוד ולא אמר הללויה עד שראה במפלתן של רשעים שנאמר (תהלים קד, לה) יתמו חטאים מן הארץ ורשעים עוד אינם ברכי נפשי את ה' הללויה. הני ק\"ג ק\"ד הויין אלא שמע מינה אשרי האיש ולמה רגשו גוים חדא פרשה היא דאמר ר' שמואל בר נחמני אמר רבי יוחנן",
  "rashi": [
   {
    "dh": "אותו צדיק",
    "text": " — אברהם:"
   },
   {
    "dh": "כמצודה שאין בה דגן",
    "text": " — דרך ציידי עופות לזרוק דגן תחת מצודות כדי שיבאו עופות ונלכדין וכשאין בה דגן אין עוף פונה אליה כך ריקנו המצרים מכל ממונם. וינצלו כתרגומו ורוקינו:"
   },
   {
    "dh": "כמצולה שאין בה דגים",
    "text": " — כמו מצולות ים כלומר בתוך התהום אין מצויין דגים אלא על שפת הים היכא דאיכא מזון:"
   },
   {
    "dh": "דיה לצרה בשעתה",
    "text": " — דיה לצרה שיתאוננו בה בשעה שתבא עליהם למה תדאיבם עכשיו בבשורה קשה:"
   },
   {
    "dh": "שתסיח דעתם",
    "text": " — מלבא בלבם מזמה של רשע להכחישני ולומר על ידי כשפים הבאתי האש הזאת:"
   },
   {
    "dh": "מתני' תכלת",
    "text": " — ירוק הוא וקרוב לצבע כרתי שקורין פור\"ייש:"
   },
   {
    "dh": "הקורא מכאן ואילך לא הפסיד",
    "text": " — שהרי הוא כאדם שקורא אחת מכל הפרשיות שבתורה ואע\"פ שלא יצא ידי ק\"ש יש לו קבול שכר כעוסק בתורה:"
   },
   {
    "dh": "גמ' בין תכלת שבה ללבן שבה",
    "text": " — גיזת צמר שצבעה תכלת ויש בה מקומות שלא עלה שם הצבע יפה:"
   },
   {
    "dh": "ערוד",
    "text": " — חמור הבר:"
   },
   {
    "dh": "לתפילין",
    "text": " — להניח תפילין שמצות הנחתן קודם קרית שמע בפ' שני (ד' יד:):"
   },
   {
    "dh": "ותיקין",
    "text": " — אנשים ענוים ומחבבין מצוה:"
   },
   {
    "dh": "מתפלל ביום",
    "text": " — דהנץ החמה לדברי הכל יום הוא:"
   },
   {
    "dh": "מאי קראה",
    "text": " — דמצוה להתפלל עם הנץ החמה:"
   },
   {
    "dh": "דכתיב ייראוך עם שמש וגו'",
    "text": " — מתי מתיראין ממך כשמוראך מקבלים עליהם דהיינו מלכות שמים שמקבלין עליהם בק\"ש:"
   },
   {
    "dh": "עם שמש",
    "text": " — כלומר כשהשמש יוצא היינו עם הנץ החמה:"
   },
   {
    "dh": "ולפני ירח",
    "text": " — אף תפלת המנחה מצותה עם דמדומי חמה:"
   },
   {
    "dh": "שאם יזכה",
    "text": " — לעוה\"ב לראות גדולתן של ישראל:"
   },
   {
    "dh": "יבחין",
    "text": " — כמה הרבה גדולתן יותר על האומות עכשיו:"
   },
   {
    "dh": "תהא",
    "text": " — הא דרבי יוחנן בתפלת ערבית דלא חיישינן לסמוך גאולה לתפלה דגאולה ביממא הואי:"
   },
   {
    "dh": "דא\"ר יהודה בריה דר' שמעון גרסי'",
    "text": ""
   }
  ],
  "tosafot": [
   {
    "dh": "אלא בין תכלת שבה ללבן שבה",
    "text": " — פי' רש\"י צמר הצבוע תכלת ויש מקומות שלא עלה שם הצבע שפיר. וקשה דאמרינן במנחות (מג ב ושם) ראה מצוה זו שבה תלוי מצוה אחרת ואיזו זו ק\"ש כדתנן עד שיכיר בין תכלת ללבן. ואי קאי אגיזת צמר אינה תלויה בציצית. ועוד בלילה נמי פעמים יכולין לראות צמר שאינו צבוע כדרכו. ע\"כ יש לפרש בין תכלת שבה בציצית שהיה קבוע בו תכלת וגם שני חוטין לבן ועושין בו חוליא של תכלת וחוליא של לבן:"
   },
   {
    "dh": "אחרים אומרים עד שיראה חברו וכו' -בירושלמי במה אנן קיימין אי ברגיל אפי' ברחוק טפי חכים ביה ואי בשאינו רגיל אפילו בקרוב לגביה לא חכים ביה תפתר ברגיל ואינו רגיל כהדין אכסניא דאתי לקיצין. וצריך לומר דהאי אחרים לאו ר' מאיר נינהו דהא ר' מאיר איירי לעיל מינייהו",
    "text": ""
   },
   {
    "dh": "לק\"ש כותיקין",
    "text": " — תימא דלעיל פסקינן כמאן דמתיר לאחר עמוד השחר מיד ולקמן פסקי' הלכה כר' יהושע דאמר עד ג' שעות והכא פסק אביי שהוא בתרא ואמר כותיקין ומשמע דהכי הלכתא. וי\"ל דודאי זמן ק\"ש מתחיל לאחר עמוד השחר וזמנו עד ג' שעות ומיהו מצוה מן המובחר כותיקין סמוך להנץ החמה כדי לסמוך גאולה לתפלה ואפי' ותיקין נמי מודו לרבי יהושע שאם לא קרא קודם הנץ החמה דיכול לקרות עד שלש שעות ועל זה אנו סומכין וכן בפ' מי שמתו (ברכות דף כ\"ב ב) דקאמר בעל קרי שירד לטבול אם יכול לעלות ולקרות קודם הנץ וכו' ומסיק בגמרא (ד' כ\"ה ב) דילמא כר' יהושע וכותיקין כלומר מתני' דקתני קודם הנץ החמה כותיקין אלמא ותיקין נמי מודו לר' יהושע שאין שעה עוברת עד שלש שעות. ומיהו קשה דאמרינן ביומא (ד' לז ושם) אף היא עשתה נברשת של זהב כיון שהחמה זורחת היו ניצוצות יוצאות הימנה והיו יודעין שהגיע הנץ החמה ובא זמן ק\"ש של שחרית ומוקי לה התם בשאר עמא דירושלים אלמא משמע דעיקר זמן ק\"ש לאחר הנץ החמה והא לא הוי כותיקין שהיו קורין קודם להנץ סמוך להנץ. וי\"ל דאותו זמן הוקבע לצבור לפי שלא היו יכולין להקדים ולמהר כותיקין כי רוב בני אדם אינם יכולין לכוין אותה שעה:"
   },
   {
    "dh": "כל הסומך גאולה לתפלה אינו נזוק. וא\"ת והלא כל העולם סומכין גאולה לתפלה ומאי רבותיה דרב ברונא דלא פסיק חוכא מפומיה. ויש לומר דהכי קאמר כל הסומך גאולה לתפלה כותיקין שקורין ק\"ש קודם הנץ ותפלה לאחר הנץ",
    "text": ""
   }
  ],
  "translations": []
 },
 {
  "id": "10a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "י",
  "amud": "א",
  "dafEn": "10a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "כל פרשה שהיתה חביבה על דוד פתח בה באשרי וסיים בה באשרי פתח באשרי דכתיב (תהלים א, א) אשרי האיש וסיים באשרי דכתיב (תהלים ב, יב) אשרי כל חוסי בו: הנהו בריוני דהוו בשבבותיה דר\"מ והוו קא מצערו ליה טובא הוה קא בעי ר' מאיר רחמי עלויהו כי היכי דלימותו אמרה לי' ברוריא דביתהו מאי דעתך משום דכתיב (תהלים קד, לה) יתמו חטאים מי כתיב חוטאים חטאים כתיב ועוד שפיל לסיפיה דקרא ורשעים עוד אינם כיון דיתמו חטאים ורשעים עוד אינם אלא בעי רחמי עלויהו דלהדרו בתשובה ורשעים עוד אינם בעא רחמי עלויהו והדרו בתשובה: אמר לה ההוא צדוקי לברוריא כתיב (ישעיהו נד, א) רני עקרה לא ילדה משום דלא ילדה רני אמרה ליה שטיא שפיל לסיפיה דקרא דכתיב כי רבים בני שוממה מבני בעולה אמר ה' אלא מאי עקרה לא ילדה רני כנסת ישראל שדומה לאשה עקרה שלא ילדה בנים לגיהנם כותייכו: א\"ל ההוא צדוקי לר' אבהו כתיב (תהלים ג, א) מזמור לדוד בברחו מפני אבשלום בנו וכתיב (תהלים נז, א) לדוד מכתם בברחו מפני שאול במערה הי מעשה הוה ברישא מכדי מעשה שאול הוה ברישא לכתוב ברישא אמר ליה אתון דלא דרשיתון סמוכין קשיא לכו אנן דדרשינן סמוכים לא קשיא לן דא\"ר יוחנן סמוכין מן התורה מנין שנא' (תהלים קיא, ח) סמוכים לעד לעולם עשוים באמת וישר למה נסמכה פרשת אבשלום לפרשת גוג ומגוג שאם יאמר לך אדם כלום יש עבד שמורד ברבו אף אתה אמור לו כלום יש בן שמורד באביו אלא הוה הכא נמי הוה: אמר ר' יוחנן משום רבי שמעון בן יוחי מאי דכתיב (משלי לא, כו) פיה פתחה בחכמה ותורת חסד על לשונה כנגד מי אמר שלמה מקרא זה לא אמרו אלא כנגד דוד אביו שדר בחמשה עולמים ואמר שירה דר במעי אמו ואמר שירה שנאמר (תהלים קג, א) ברכי נפשי את ה' וכל קרבי את שם קדשו יצא לאויר העולם ונסתכל בכוכבים ומזלות ואמר שירה שנאמר (תהלים קג, כ) ברכו ה' מלאכיו גבורי כח עושי דברו לשמוע בקול דברו ברכו ה' כל צבאיו וגו' ינק משדי אמו ונסתכל בדדיה ואמר שירה שנאמר (תהלים קג, ב) ברכי נפשי את ה' ואל תשכחי כל גמוליו מאי כל גמוליו אמר ר' אבהו שעשה לה דדים במקום בינה טעמא מאי אמר (רבי) יהודה כדי שלא יסתכל במקום ערוה רב מתנא אמר כדי שלא יינק ממקום הטנופת ראה במפלתן של רשעים ואמר שירה שנאמר (תהלים קד, לה) יתמו חטאים מן הארץ ורשעים עוד אינם ברכי נפשי את ה' הללויה נסתכל ביום המיתה ואמר שירה שנאמר (תהלים קד, א) ברכי נפשי את ה' ה' אלהי גדלת מאד הוד והדר לבשת מאי משמע דעל יום המיתה נאמר אמר רבה בר רב שילא מסיפא דעניינא דכתיב (תהלים קד, כט) תסתיר פניך יבהלון תוסף רוחם יגועון וגו' רב שימי בר עוקבא ואמרי לה מר עוקבא הוה שכיח קמיה דר' שמעון בן פזי והוה מסדר אגדתא קמיה דר' יהושע בן לוי אמר ליה מאי דכתיב (תהלים קג, א) ברכי נפשי את ה' וכל קרבי את שם קדשו אמר ליה בא וראה שלא כמדת הקדוש ברוך הוא מדת בשר ודם מדת בשר ודם צר צורה על גבי הכותל ואינו יכול להטיל בה רוח ונשמה קרבים ובני מעים והקב\"ה אינו כן צר צורה בתוך צורה ומטיל בה רוח ונשמה קרבים ובני מעים והיינו דאמרה חנה (שמואל א ב, ב) אין קדוש כה' כי אין בלתך ואין צור כאלהינו. מאי אין צור כאלהינו אין צייר כאלהינו מאי כי אין בלתך אמר ר' יהודה בר מנסיא אל תקרי כי אין בלתך אלא אין לבלותך שלא כמדת הקדוש ברוך הוא מדת בשר ודם מדת בשר ודם מעשה ידיו מבלין אותו והקב\"ה מבלה מעשיו א\"ל אנא הכי קא אמינא לך הני חמשה ברכי נפשי כנגד מי אמרן דוד לא אמרן אלא כנגד הקב\"ה וכנגד נשמה מה הקב\"ה מלא כל העולם אף נשמה מלאה את כל הגוף מה הקדוש ברוך הוא רואה ואינו נראה אף נשמה רואה ואינה נראית מה הקב\"ה זן את כל העולם כלו אף נשמה זנה את כל הגוף מה הקב\"ה טהור אף נשמה טהורה מה הקב\"ה יושב בחדרי חדרים אף נשמה יושבת בחדרי חדרים יבא מי שיש בו חמשה דברים הללו וישבח למי שיש בו חמשה דברים הללו: אמר רב המנונא מאי דכתיב (קהלת ח, א) מי כהחכם ומי יודע פשר דבר מי כהקדוש ברוך הוא שיודע לעשות פשרה בין שני צדיקים בין חזקיהו לישעיהו חזקיהו אמר ליתי ישעיהו גבאי דהכי אשכחן באליהו דאזל לגבי אחאב (שנאמר (מלכים א יח, ב) וילך אליהו להראות אל אחאב) ישעיהו אמר ליתי חזקיהו גבאי דהכי אשכחן ביהורם בן אחאב דאזל לגבי אלישע מה עשה הקב\"ה הביא יסורים על חזקיהו ואמר לו לישעיהו לך ובקר את החולה שנאמר (מלכים ב כ, א) בימים ההם חלה חזקיהו למות ויבא אליו ישעיהו בן אמוץ הנביא ויאמר אליו כה אמר ה' (צבאות) צו לביתך כי מת אתה ולא תחיה וגו' מאי כי מת אתה ולא תחיה מת אתה בעולם הזה ולא תחיה לעולם הבא אמר ליה מאי כולי האי אמר ליה משום דלא עסקת בפריה ורביה א\"ל משום דחזאי לי ברוח הקדש דנפקי מינאי בנין דלא מעלו א\"ל בהדי כבשי דרחמנא למה לך מאי דמפקדת איבעי לך למעבד ומה דניחא קמיה קודשא בריך הוא לעביד אמר ליה השתא הב לי ברתך אפשר דגרמא זכותא דידי ודידך ונפקי מנאי בנין דמעלו א\"ל כבר נגזרה עליך גזירה א\"ל בן אמוץ כלה נבואתך וצא כך מקובלני מבית אבי אבא אפי' חרב חדה מונחת על צוארו של אדם אל ימנע עצמו מן הרחמים אתמר נמי רבי יוחנן ורבי (אליעזר) דאמרי תרוייהו אפילו חרב חדה מונחת על צוארו של אדם אל ימנע עצמו מן הרחמים שנא' (איוב יג, טו) הן יקטלני לו איחל",
  "rashi": [
   {
    "dh": "פתח באשרי וסיים באשרי",
    "text": " — אלמא חדא היא דאשרי כל חוסי בו סיומא דלמה רגשו גוים הוא:"
   },
   {
    "dh": "בריוני",
    "text": " — פריצים:"
   },
   {
    "dh": "חטאים כתיב",
    "text": " — קרי ביה חטאים שיכלה יצר הרע:"
   },
   {
    "dh": "שפיל",
    "text": " — השפיל עצמך לסוף המקרא כל דבר שהוא בסוף קרוי שפילו של דבר:"
   },
   {
    "dh": "סמוכים לעד לעולם",
    "text": " — בדברי תורה כתיב [אחרי] נאמנים כל פקודיו סמוכים סמיכת כל פקודיו עשוים באמת וישר ולצורך ולא דבר רק:"
   },
   {
    "dh": "כלום יש עבד שמורד ברבו",
    "text": " — ויבא להכחיש את דברי הנביא:"
   },
   {
    "dh": "אמור לו כלום יש בן כו'",
    "text": " — והא חזינן הכא דהוה:"
   },
   {
    "dh": "הכא נמי הוה",
    "text": " — סופיה להיות:"
   },
   {
    "dh": "ואמר שירה",
    "text": " — כנגד כולם אמר שירה לכששרתה רוח הקודש עליו:"
   },
   {
    "dh": "וכל קרבי",
    "text": " — על שם קרבי אמו שדר בתוכן:"
   },
   {
    "dh": "מאי משמע",
    "text": " — דעל יום המיתה נאמר:"
   },
   {
    "dh": "בא וראה וכו'",
    "text": " — הוא סבר דהכי בעי מאי שנא קרבים דנקט:"
   },
   {
    "dh": "חמשה ברכי נפשי",
    "text": " — לעיל חשיב להו:"
   },
   {
    "dh": "מאי דכתיב מי כהחכם ומי יודע פשר דבר",
    "text": " — משום דאיירי בסופה בסמיכת גאולה לתפלה נקט ליה:"
   },
   {
    "dh": "דאשכחן דאזל אליהו לגבי אחאב",
    "text": " — דכתיב וילך אליהו להראות אל אחאב:"
   },
   {
    "dh": "יהורם אזל לגבי אלישע",
    "text": " — כשהלכו על מואב הוא ויהושפט (במלכים ב ג) דמתוך שלא היו הולכים זה אצל זה לא היה מוכיחו על שלא נשא אשה:"
   },
   {
    "dh": "כבשי דרחמנא",
    "text": " — סתרים דהקב\"ה כמו רישא בכבשא (חולין ד' צג:) בהטמנת האפר:"
   },
   {
    "dh": "נגזרה גזרה",
    "text": " — שתמות:"
   },
   {
    "dh": "מקובלני מבית אבי אבא",
    "text": " — דוד שראה את המלאך וחרבו שלופה בידו בסוף ספר שמואל (ב כד) ולא מנע עצמו מן הרחמים:"
   }
  ],
  "tosafot": [
   {
    "dh": "כל פרשה שהיתה חביבה על דוד כו'",
    "text": " — וא\"ת מאי כל הפרשיות והא לא אשכחן שום פרשה אחרת שמתחלת באשרי ומסיימת באשרי אלא היא. וי\"ל דלאו דוקא פתח באשרי וסיים באשרי. אלא חתימה מעין פתיחה כמו תהלה שפתח בתהלה וסיים בתהלה תהלת ה' ידבר פי וכן הרבה פרשיות שמתחילות בהללויה ומסיימות בהללויה:"
   }
  ],
  "translations": []
 },
 {
  "id": "10b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "י",
  "amud": "ב",
  "dafEn": "10b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "א\"ר חנן אפי' בעל החלומות אומר לו לאדם למחר הוא מת אל ימנע עצמו מן הרחמים שנאמר (קהלת ה, ו) כי ברוב חלומות והבלים ודברים הרבה כי את האלהים ירא מיד (ישעיהו לח, ב) ויסב חזקיהו פניו אל הקיר ויתפלל אל ה' מאי קיר אמר רשב\"ל מקירות לבו שנא' (ירמיהו ד, יט) מעי מעי אוחילה קירות לבי וגו' ר' לוי אמר על עסקי הקיר אמר לפניו רבונו של עולם ומה שונמית שלא עשתה אלא קיר אחת קטנה החיית את בנה אבי אבא שחפה את ההיכל כולו בכסף ובזהב על אחת כמה וכמה (ישעיהו לח, ג) זכר נא את אשר התהלכתי לפניך באמת ובלב שלם והטוב בעיניך עשיתי מאי והטוב בעיניך עשיתי א\"ר יהודה אמר רב שסמך גאולה לתפלה ר' לוי אמר שגנז ספר רפואות תנו רבנן ששה דברים עשה חזקיהו המלך על ג' הודו לו ועל ג' לא הודו לו על ג' הודו לו גנז ספר רפואות והודו לו כתת נחש הנחשת והודו לו גירר עצמות אביו על מטה של חבלים והודו לו ועל ג' לא הודו לו סתם מי גיחון ולא הודו לו קצץ דלתות היכל ושגרם למלך אשור ולא הודו לו עבר ניסן בניסן ולא הודו לו ומי לית ליה לחזקיהו (שמות יב, ב) החדש הזה לכם ראש חדשים זה ניסן ואין אחר ניסן אלא טעה בדשמואל דאמר שמואל אין מעברין את השנה ביום שלשים של אדר הואיל וראוי לקובעו ניסן סבר הואיל וראוי לא אמרינן: א\"ר יוחנן משום ר' יוסי בן זמרא כל התולה בזכות עצמו תולין לו בזכות אחרים וכל התולה בזכות אחרים תולין לו בזכות עצמו משה תלה בזכות אחרים שנא' (שמות לב, יג) זכור לאברהם ליצחק ולישראל עבדיך תלו לו בזכות עצמו שנאמר (תהלים קו, כג) ויאמר להשמידם לולי משה בחירו עמד בפרץ לפניו להשיב חמתו מהשחית חזקיהו תלה בזכות עצמו דכתיב זכר נא את אשר התהלכתי לפניך תלו לו בזכות אחרים שנא' (מלכים ב יט, לד) וגנותי אל העיר הזאת להושיעה למעני ולמען דוד עבדי והיינו דריב\"ל דאמר ריב\"ל מאי דכתיב (ישעיהו לח, יז) הנה לשלום מר לי מר אפי' בשעה ששיגר לו הקב\"ה שלום מר הוא לו: (מלכים ב ד, י) נעשה נא עליית קיר קטנה רב ושמואל חד אמר עלייה פרועה היתה וקירוה וחד אמר אכסדרה גדולה היתה וחלקוה לשנים בשלמא למ\"ד אכסדרה היינו דכתיב קיר אלא למ\"ד עלייה מאי קיר שקירוה בשלמא למ\"ד עלייה היינו דכתיב עליית אלא למ\"ד אכסדרה מאי עליית מעולה שבבתים. ונשים לו שם מטה ושולחן וכסא ומנורה אמר אביי ואיתימא ר' יצחק הרוצה להנות יהנה כאלישע ושאינו רוצה להנות אל יהנה כשמואל הרמתי שנאמר (שמואל א ז, יז) ותשובתו הרמתה כי שם ביתו וא\"ר יוחנן שכל מקום שהלך שם ביתו עמו. (מלכים ב ד, ט) ותאמר אל אישה הנה נא ידעתי כי איש אלהים קדוש הוא א\"ר יוסי בר' חנינא מכאן שהאשה מכרת באורחין יותר מן האיש קדוש הוא מנא ידעה רב ושמואל חד אמר שלא ראתה זבוב עובר על שולחנו וחד אמר סדין של פשתן הציעה על מטתו ולא ראתה קרי עליו קדוש הוא א\"ר יוסי בר' חנינא הוא קדוש ומשרתו אינו קדוש (שנא') (מלכים ב ד, כז) ויגש גיחזי להדפה א\"ר יוסי בר' חנינא שאחזה בהוד יפיה. עובר עלינו תמיד א\"ר יוסי בר' חנינא משום רבי אליעזר בן יעקב כל המארח תלמיד חכם בתוך ביתו ומהנהו מנכסיו מעלה עליו הכתוב כאילו מקריב תמידין. וא\"ר יוסי בר' חנינא משום ראב\"י אל יעמוד אדם במקום גבוה ויתפלל אלא במקום נמוך ויתפלל שנא' (תהלים קל, א) ממעמקים קראתיך ה' תניא נמי הכי לא יעמוד אדם לא על גבי כסא ולא ע\"ג שרפרף ולא במקום גבוה ויתפלל אלא במקום נמוך ויתפלל לפי שאין גבהות לפני המקום שנאמר ממעמקים קראתיך ה' וכתיב (תהלים קב, א) תפלה לעני כי יעטוף. וא\"ר יוסי בר' חנינא משום ראב\"י המתפלל צריך שיכוין את רגליו שנא' (יחזקאל א, ז) ורגליהם רגל ישרה (א\"ר יצחק א\"ר יוחנן) וא\"ר יוסי בר' חנינא משום ראב\"י מאי דכתיב (ויקרא יט, כו) לא תאכלו על הדם לא תאכלו קודם שתתפללו על דמכם (א\"ד) א\"ר יצחק א\"ר יוחנן א\"ר יוסי בר' חנינא משום ראב\"י כל האוכל ושותה ואח\"כ מתפלל עליו הכתוב אומר (מלכים א יד, ט) ואותי השלכת אחרי גויך אל תקרי גויך אלא גאיך אמר הקב\"ה לאחר שנתגאה זה קבל עליו מלכות שמים: ר' יהושע אומר עד ג' שעות: אמר רב יהודה אמר שמואל הלכה כרבי יהושע: הקורא מכאן ואילך לא הפסיד: אמר רב חסדא אמר מר עוקבא ובלבד שלא יאמר יוצר אור מיתיבי הקורא מכאן ואילך לא הפסיד כאדם שהוא קורא בתורה אבל מברך הוא שתים לפניה ואחת לאחריה תיובתא דרב חסדא תיובתא איכא דאמרי אמר רב חסדא אמר מר עוקבא מאי לא הפסיד שלא הפסיד ברכות תניא נמי הכי הקורא מכאן ואילך לא הפסיד כאדם שקורא בתורה אבל מברך הוא שתים לפניה ואחת לאחריה א\"ר מני גדול הקורא ק\"ש בעונתה יותר מהעוסק בתורה מדקתני הקורא מכאן ואילך לא הפסיד כאדם הקורא בתורה מכלל דקורא בעונתה עדיף:  בית שמאי אומרים בערב כל אדם יטה ויקרא ובבקר יעמוד שנאמר (דברים ו, ז) ובשכבך ובקומך ובית הלל אומרים כל אדם קורא כדרכו שנאמר ובלכתך בדרך אם כן למה נאמר ובשכבך ובקומך בשעה שבני אדם שוכבים ובשעה שבני אדם עומדים א\"ר טרפון אני הייתי בא בדרך והטתי לקרות כדברי ב\"ש וסכנתי בעצמי מפני הלסטים אמרו לו כדי היית לחוב בעצמך שעברת על דברי ב\"ה:",
  "rashi": [
   {
    "dh": "אבי אבא שחפה את ההיכל",
    "text": " — שלמה:",
    "en": "HE HID THE BOOK OF REMEDIES. So that people would ask for compassion."
   },
   {
    "dh": "שגנז ספר רפואות",
    "text": " — כדי שיבקשו רחמים:"
   },
   {
    "dh": "גירר עצמות אביו",
    "text": " — לפי שהיה רשע בזהו ולא נהג בו כבוד בקבורתו להוציאו כהוגן במטות זהב וכסף:"
   },
   {
    "dh": "סתם מי גיחון",
    "text": " — מי שלוח בדברי הימים (ב לב) ולמה כדי שלא יבאו מלכי אשור וימצאו מים לשתות ולא זהו גיחון הנהר הגדול דההוא לאו בא\"י הוא אלא מעין קטן הוא סמוך לירושלים שנאמר והורדתם אותו אל גיחון (מלכים א א׳:ל״ג) ומתרגמינן ותחתון יתיה לשילוחא:"
   },
   {
    "dh": "עבר ניסן בניסן",
    "text": " — קס\"ד משנתקדש החדש לשם ניסן נמלך לעבר את השנה ועשאו אדר כמו שנאמר בדברי הימים (ב ל) ויועץ המלך (חזקיהו) לעשות הפסח בחדש השני:"
   },
   {
    "dh": "ביום שלשים של אדר",
    "text": " — ואע\"פ שלא נתקדש החדש שעדיין לא באו עדים:"
   },
   {
    "dh": "התולה בזכות עצמו",
    "text": " — שאומר בתפלתו עשה לי בזכותי כגון חזקיהו שאמר זכר נא את אשר התהלכתי לפניך וגו':"
   },
   {
    "dh": "פרועה",
    "text": " — מגולה שניטלה תקרה שלה:"
   },
   {
    "dh": "הרוצה להנות",
    "text": " — משל אחרים:"
   },
   {
    "dh": "יהנה",
    "text": " — ואין איסור בדבר:"
   },
   {
    "dh": "כאלישע",
    "text": " — כמו שמצינו באלישע שנהנה:"
   },
   {
    "dh": "והרוצה שלא להנות",
    "text": " — משל אחרים:"
   },
   {
    "dh": "אל יהנה",
    "text": " — ואין בדבר לא משום גסות רוח ולא משום שנאה:"
   },
   {
    "dh": "כשמואל הרמתי",
    "text": " — כמו שמצינו בשמואל הרמתי שלא רצה להנות:"
   },
   {
    "dh": "כי שם ביתו",
    "text": " — לעיל מיניה כתיב והיה מדי שנה בשנה וסבב בית אל והמצפה ושפט את ישראל וסמיך ליה ותשובתו הרמתה כי שם ביתו וכי איני יודע ששם ביתו אלא אכולהו מקומות דקרא דלעיל מיניה קאי שכל מקום שהיה הולך שם היה נושא כל כלי תשמישי בית עמו ואהל חנייתו שלא להנות מן אחרים:"
   },
   {
    "dh": "בהוד יפיה",
    "text": " — בדדיה:"
   },
   {
    "dh": "תפלה לעני",
    "text": " — דרך עניות:"
   },
   {
    "dh": "יכוין את רגליו",
    "text": " — זו אצל זו:"
   },
   {
    "dh": "ורגליהם רגל ישרה",
    "text": " — נראין כרגל אחד:"
   },
   {
    "dh": "מתני' יטה",
    "text": " — על צדו:"
   },
   {
    "dh": "יעמוד",
    "text": " — דכתיב ובקומך:"
   },
   {
    "dh": "בשכבך",
    "text": " — דרך שכיבה:"
   },
   {
    "dh": "כדרכו",
    "text": " — או בקימה או בשכיבה או בישיבה או מהלך:"
   }
  ],
  "tosafot": [
   {
    "dh": "גדול הקורא ק\"ש בעונתה יותר מהעוסק בתורה",
    "text": " — תימה אפ' תפלה נמי דהא אמרינן פ\"ק דשבת ( ד' יא.) כגון אנן מפסיקין בין לק\"ש בין לתפלה. וי\"ל דהכי קאמר יותר מהעוסק בתורה פעם אחרת שלא בשעת ק\"ש. אבל העוסק בתורה בשעת ק\"ש לא מיירי ואפ' בתפלה פוסק:"
   }
  ],
  "translations": []
 },
 {
  "id": "11a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יא",
  "amud": "א",
  "dafEn": "11a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בשלמא ב\"ה קא מפרשי טעמייהו וטעמא דב\"ש אלא ב\"ש מ\"ט לא אמרי כב\"ה אמרי לך ב\"ש א\"כ נימא קרא בבקר ובערב מאי בשכבך ובקומך בשעת שכיבה שכיבה ממש ובשעת קימה קימה ממש וב\"ש האי ובלכתך בדרך מאי עביד להו ההוא מבעי להו לכדתניא בשבתך בביתך פרט לעוסק במצוה ובלכתך בדרך פרט לחתן מכאן אמרו הכונס את הבתולה פטור ואת האלמנה חייב מאי משמע אמר רב פפא כי דרך מה דרך רשות אף כל רשות מי לא עסקינן דקא אזיל לדבר מצוה ואפילו הכי אמר רחמנא לקרי אם כן לכתוב רחמנא בשבת ובלכת מאי בשבתך ובלכתך בשבת דידך ובלכת דידך הוא דמחייבת הא דמצוה פטירת אי הכי אפילו כונס את האלמנה נמי האי טריד והאי לא טריד אי משום טרדא אפילו טבעה ספינתו בים נמי וכי תימא ה\"נ אלמה א\"ר אבא בר זבדא אמר רב אבל חייב בכל המצות האמורות בתורה חוץ מן התפילין שהרי נאמר בהם פאר שנאמר (יחזקאל כד, יז) פארך חבוש עליך התם טריד טרדא דמצוה הכא טריד טרדא דרשות וב\"ש ההוא מבעי להו פרט לשלוחי מצוה וב\"ה אמרי ממילא ש\"מ דאפילו בדרך נמי קרי: ת\"ר בה\"א עומדין וקורין יושבין וקורין ומטין וקורין הולכין בדרך וקורין עושין במלאכתן וקורין ומעשה ברבי ישמעאל ור' אלעזר בן עזריה שהיו מסובין במקום אחד והיה ר' ישמעאל מוטה ור' אלעזר בן עזריה זקוף כיון שהגיע זמן קריאת שמע הטה רבי אלעזר וזקף ר' ישמעאל אמר לו רבי אלעזר בן עזריה לר' ישמעאל ישמעאל אחי אמשול לך משל למה הדבר דומה משל לאחד שאומרים לו זקנך מגודל אמר להם יהיה כנגד המשחיתים אף כך אתה כל זמן שאני זקוף אתה מוטה עכשיו כשאני הטתי אתה זקפת אמר לו אני עשיתי כדברי ב\"ה ואתה עשית כדברי ב\"ש ולא עוד אלא שמא יראו התלמידים ויקבעו הלכה לדורות מאי ולא עוד וכי תימא בית הלל נמי אית להו מטין ה\"מ דמטה ואתא מעיקרא אבל הכא כיון דעד השתא הוית זקוף והשתא מוטה אמרי ש\"מ כב\"ש סבירא להו שמא יראו התלמידים ויקבעו הלכה לדורות. תני רב יחזקאל עשה כדברי ב\"ש עשה כדברי ב\"ה עשה רב יוסף אמר עשה כדברי ב\"ש לא עשה ולא כלום דתנן מי שהיה ראשו ורובו בסוכה ושלחנו בתוך הבית ב\"ש פוסלין וב\"ה מכשירין אמרו להם ב\"ה לב\"ש מעשה שהלכו זקני ב\"ש וזקני ב\"ה לבקר את ר' יוחנן בן החורנית מצאוהו שהיה ראשו ורובו בסוכה ושלחנו בתוך הבית ולא אמרו לו כלום אמרו להם משם ראיה אף הם אמרו לו א\"כ היית נוהג לא קיימת מצות סוכה מימיך רב נחמן בר יצחק אמר עשה כדברי בית שמאי חייב מיתה דתנן אמר ר\"ט אני הייתי בא בדרך והטתי לקרות כדברי ב\"ש וסכנתי בעצמי מפני הלסטים אמרו לו כדאי היית לחוב בעצמך שעברת על דברי ב\"ה:  בשחר מברך שתים לפניה ואחת לאחריה ובערב מברך שתים לפניה ושתים לאחריה אחת ארוכה ואחת קצרה מקום שאמרו להאריך אינו רשאי לקצר לקצר אינו רשאי להאריך לחתום אינו רשאי שלא לחתום שלא לחתום אינו רשאי לחתום: גמ׳ מאי מברך אמר ר' יעקב א\"ר אושעיא",
  "rashi": [
   {
    "dh": "גמ' בשבתך בביתך פרט לעוסק במצוה",
    "text": " — לקמיה מפרש מאי משמע:",
    "en": "When you sit in your house excludes one who is occupied with a mitzvah - Further below the reason for this is explained"
   },
   {
    "dh": "ובלכתך בדרך פרט לחתן",
    "text": " — ואע\"ג דחתן נמי עוסק במצוה הוא אי לאו קרא יתירה לא נפקא לן מקרא קמא דכיון דעוסק במצוה לא כתיב בקרא בהדיא אלא מיעוטא בעלמא הוא דקא דרשינן מביתך וממעטינן מינה עוסק במלאכת מצוה דאיכא טרדא אבל חתן דטרדא דמחשבה בעלמא הוא שמחשב על עסק בתולים אי לאו קרא יתירה לא אתמעוט:",
    "en": "And when you walk on the road excludes the bridegroom - Even though the bridegroom is also engaged in a Mitzvah, were it not for an extra verse we would not derive it from the first verse, since \"one who is engaged in a Mitzvah\" is not written in the verse explicitly. Rather, we only derive an exclusion from \"in your house\", and from it we exclude one who is engaged in doing a Mitzvah where there is preoccupation. But a bridegroom , whose distraction is merely a preoccupation of thought, for he is thinking about the consummation of the marriage, if not for the additional verse we would not exclude."
   },
   {
    "dh": "הכונס את הבתולה פטור",
    "text": " — שטרוד במחשבת בעילת מצוה:",
    "en": "One who marries a virgin is exempt - For his thoughts are occupied due to the mitzvah"
   },
   {
    "dh": "מאי משמע",
    "text": " — פרט לעוסק במצוה:",
    "en": "How is this implied - That one who is engaged in a mitzvah is excluded"
   },
   {
    "dh": "כי דרך",
    "text": " — בשבתך ובלכתך הוקשו לדרך:",
    "en": "Like the way - \"During your sitting\" and \"during your going\" are juxtaposed with \"the way\"."
   },
   {
    "dh": "מי לא עסקינן כו'",
    "text": " — כלומר מנלן דבדרך רשות לחודא איירי קרא הא קרא דרך סתמא כתיב וממילא משתמע נמי מיניה דרך מצוה ואפילו הכי אמר רחמנא ליקרי:",
    "en": "Are we not dealing with etc. - That is to say, from where do we know that the verse is dealing with an optional journey exclusively? After all, the verse simply says \"[when you walk on the] way\", and consequently a journey for a mitzvah is also implied by it. Nevertheless the Merciful One says he should recite [the Shema]."
   },
   {
    "dh": "אי משום טרדא",
    "text": " — דמחשבה פטרת ליה אפילו טבעה ספינתו נמי:",
    "en": "If it is because of preoccupation - of the mind that exempts him, one whose ship sunk also [should be exempt]"
   },
   {
    "dh": "אלמה אמר רבי אבא",
    "text": " — כמו למה אמר אע\"פ שטרוד בצערו חייב בכל המצות חוץ מן התפילין שנאמר בהם פאר ליחזקאל פארך חבוש עליך וגו' וכיון דבעו פאר ואבל מתגולל בצערו בעפר אין זה פאר:",
    "en": "Why did Rabbi Abba say - That is, why did he say even though he is preoccupied with this distress he is obligated in all of the mitzvot except from Tefillin, for \"glory\" is said regarding them to Ezekiel [in the verse] \"bind your glory upon yourself etc.\", thus they require glory. And the mourner rolls in his sorrow in dirt; there is no glory there."
   },
   {
    "dh": "טריד טרדא דמצוה",
    "text": " — וכיון דאנן מיעוט בעלמא דרשינן פרט לחתן מסתייך אם ממעטת מיניה טרדא דמצוה:",
    "en": "He is preoccupied with a mitzvah - And since we are merely deriving a [specific] exclusion, namely, that a bridegroom is excluded, it is sufficient to exclude [the bridegroom] due to a mitzvah-related preoccupation."
   },
   {
    "dh": "וב\"ה אמרי לך",
    "text": " — נהי נמי דקרא למדרש מיניה פרט לחתן אתא ממילא ש\"מ בלכת דידך הוא דמחייבת אלמא בדרך נמי קרי:"
   },
   {
    "dh": "עוסקין במלאכתן וקורין",
    "text": " — לקמן מוקמינן לה בפרק שני (ד' טז.):"
   },
   {
    "dh": "הטה רבי אלעזר בן עזריה",
    "text": " — כב\"ש:"
   },
   {
    "dh": "לאחד שאמרו לו זקנך מגודל אמר להם יהיה זה כנגד המשחיתים",
    "text": " — משל שלך דומה לאחד שאומרים לו זקנך נאה ומגודל והוא אומר להם הואיל וקלסתם אותו אף הוא יהיה כנגד המשחיתים הגדול הזה יהיה נתון לתער ולמספרים שאביא עליו ואשחיתנו:"
   },
   {
    "dh": "עכשיו שאני הטתי",
    "text": " — הרי אני כמקלס את מעשיך שהיית מוטה ואתה נזקפת:"
   },
   {
    "dh": "ב\"ה נמי אית להו מטין",
    "text": " — דבמטין נמי שרו כדאמרינן לעיל מטין וקורין:"
   },
   {
    "dh": "אבל",
    "text": " — עכשיו כיון דעד השתא היית זקוף ועכשיו הטית אם לא נזקפתי אני יראו התלמידים ויקבעו הלכה:"
   },
   {
    "dh": "לא קיימת כו'",
    "text": " — וכי היכי דעשה כדברי ב\"ה לא עשה ולא כלום לדברי ב\"ש אף העושה כדברי בית שמאי לא עשה ולא כלום לדברי ב\"ה:"
   },
   {
    "dh": "מתני' בשחר מברך שתים וכו'",
    "text": " — כדאמר בברכות ירושלמי שבע ברכות הללו על שם (תהלים קיט) שבע ביום הללתיך:"
   },
   {
    "dh": "אחת ארוכה ואחת קצרה",
    "text": " — אשתים לאחריה דערבית קאי (נ\"א ארוכה אמת ואמונה קצרה השכיבנו):"
   },
   {
    "dh": "לחתום",
    "text": " — בברוך:"
   },
   {
    "dh": "שלא לחתום",
    "text": " — כגון ברכת הפירות ומצות:"
   },
   {
    "dh": "גמ' מאי מברך",
    "text": " — שתים לפניה דשחר מאי ניהו:"
   }
  ],
  "tosafot": [
   {
    "dh": "שנאמר בהם פאר",
    "text": " — פרש\"י ואבל מעולל בעפר קרנו ואין נאה לתת פאר תחת אפר. וא\"ת ולמה לי האי טעמא תיפוק ליה מדאמר ליחזקאל פארך חבוש עליך מכלל דלכולי עלמא אסור. ותירץ השר מקוצי דצריך טעמא של רש\"י כי היכי דלא נילף שאר מצות מתפילין מקל וחומר. א\"נ צריך טעמא דרש\"י לחייבו בתפילין לאחר יום ראשון דלא שייך מעולל בעפר קרנו אלא ביום ראשון דוקא:"
   },
   {
    "dh": "תני רב יחזקאל עשה כבית שמאי עשה ורב יוסף אמר עשה כב\"ש לא עשה ולא כלום",
    "text": " — וא\"ת פשיטא דאין הלכה כמותן. וי\"ל הואיל וב\"ש מחמירים על האדם טפי מב\"ה לא שייך לומר פשיטא. דהא דעשה כב\"ש לא עשה ולא כלום היינו היכא דב\"ש מקילין וב\"ה מחמירין אבל הכא בק\"ש לא פסלי ב\"ה דברי ב\"ש. אבל תימא א\"כ מה מייתי מסוכה כו' לא קיימת מצות סוכה כו' ופירש\"י דכי היכי דמי שעשה כב\"ה לא עשה ולא כלום לב\"ש אף העושה כב\"ש לא עשה ולא כלום לב\"ה ומאי קא מדמה התם פסלי ב\"ש לגמרי מה דמכשרי ב\"ה. אבל הכא קרא קרית שמע כב\"ש אליבא דב\"ה יצא. ע\"כ פירש הר\"ר שמעיה דקא מדמה הכי מדקאמר לא קיימת אע\"ג דמן הדין יצא שהרי בראשו ורובו בסוכה אינו אסור אלא גזירה שמא ימשך אחר שלחנו. כה\"ג גבי ק\"ש אע\"ג דמן הדין יצא בדיעבד כיון דלב\"ה אין נכון כדאיתא במתניתין כדאי היית לחוב בעצמך. אם עשה כב\"ש לב\"ה לא עשה ולא כלום [וע' תוספות סוכה ג. ד\"ה דאמר]:"
   },
   {
    "dh": "אחת ארוכה ואחת קצרה",
    "text": " — פירש רש\"י ארוכה אמת ואמונה. קצרה השכיבנו. ותימה דהשכיבנו נמי ארוכה הרבה ותדע מדלא קא חשיב לה בתוספתא בהדי הקצרות. ועוד פעמים שמאריכין הרבה בתוספת כמו אור יום הנף. ועוד אמת ואמונה פעמים שמקצרין בה מאד כדאמרינן לקמן למ\"ד אין אומרים פרשת ציצית בלילה הוא קא מסיים מודים אנחנו לך שהוצאתנו ממצרים וכו' בפרק היה קורא (לקמן ברכות ד' יד ע\"ב) ונראה לר\"ת דהכל קאי באמת ואמונה אחת ארוכה ואחת קצרה כלומר בין יאריך בה בין יקצר בה כדלקמן. וכן אשכחנא התם (יבמות ד' מא.) אחת ארוסות ואחת נשואות אחת בתולות ואחת בעולות:"
   },
   {
    "dh": "מקום שאמרו לקצר",
    "text": " — כגון בברכת פירות ובברכת המצות אין לו להאריך:"
   }
  ],
  "translations": []
 },
 {
  "id": "11b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יא",
  "amud": "ב",
  "dafEn": "11b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "(ישעיהו מה, ז) יוצר אור ובורא חשך לימא יוצר אור ובורא נוגה כדכתיב קאמרינן אלא מעתה (ישעיהו מה, ז) עושה שלום ובורא רע מי קא אמרינן כדכתיב אלא כתיב רע וקרינן הכל לישנא מעליא הכא נמי לימא נוגה לישנא מעליא אלא אמר רבא כדי להזכיר מדת יום בלילה ומדת לילה ביום בשלמא מדת לילה ביום כדאמרינן יוצר אור ובורא חשך אלא מדת יום בלילה היכי משכחת לה אמר אביי גולל אור מפני חשך וחשך מפני אור ואידך מאי היא אמר רב יהודה אמר שמואל אהבה רבה וכן אורי ליה רבי אלעזר לר' פדת בריה אהבה רבה תניא נמי הכי אין אומרים אהבת עולם אלא אהבה רבה ורבנן אמרי אהבת עולם וכן הוא אומר (ירמיהו לא, ג) ואהבת עולם אהבתיך על כן משכתיך חסד א\"ר יהודה אמר שמואל השכים לשנות עד שלא קרא ק\"ש צריך לברך משקרא ק\"ש א\"צ לברך שכבר נפטר באהבה רבה אמר רב הונא למקרא צריך לברך ולמדרש א\"צ לברך ור' אלעזר אמר למקרא ולמדרש צריך לברך למשנה א\"צ לברך ור' יוחנן אמר אף למשנה נמי צריך לברך [אבל לתלמוד א\"צ לברך] ורבא אמר אף לתלמוד צריך (לחזור ו) לברך דאמר רב חייא בר אשי זימנין סגיאין הוה קאימנא קמיה דרב לתנויי פרקין בספרא דבי רב הוה מקדים וקא משי ידיה ובריך ומתני לן פרקין. מאי מברך א\"ר יהודה אמר שמואל אשר קדשנו במצותיו וצונו לעסוק בדברי תורה ור' יוחנן מסיים בה הכי הערב נא ה' אלהינו את דברי תורתך בפינו ובפיפיות עמך בית ישראל ונהיה אנחנו וצאצאינו וצאצאי עמך בית ישראל כלנו יודעי שמך ועוסקי תורתך ברוך אתה ה' המלמד תורה לעמו ישראל ורב המנונא אמר אשר בחר בנו מכל העמים ונתן לנו את תורתו ברוך אתה ה' נותן התורה אמר רב המנונא זו היא מעולה שבברכות הלכך לימרינהו לכולהו: תנן התם אמר להם הממונה ברכו ברכה אחת והם ברכו וקראו עשרת הדברות שמע והיה אם שמוע ויאמר וברכו את העם ג' ברכות אמת ויציב ועבודה וברכת כהנים ובשבת מוסיפין ברכה אחת למשמר היוצא מאי ברכה אחת כי הא דרבי אבא ור' יוסי בר אבא אקלעו לההוא אתרא בעו מנייהו מאי ברכה אחת לא הוה בידייהו ואתו שיילוהו לרב מתנה לא הוה בידיה אתו שיילוהו לרב יהודה אמר להו הכי אמר שמואל אהבה רבה ואמר רבי זריקא אמר רבי אמי א\"ר שמעון בן לקיש יוצר אור כי אתא רב יצחק בר יוסף אמר הא דרבי זריקא לאו בפירוש אתמר אלא מכללא אתמר דאמר ר' זריקא א\"ר אמי אמר ר' שמעון בן לקיש זאת אומרת ברכות אין מעכבות זו את זו אי אמרת בשלמא יוצר אור הוו אמרי היינו דברכות אין מעכבות זו את זו דלא קא אמרי אהבה רבה",
  "rashi": [
   {
    "dh": "יוצר אור ובורא חשך (עושה שלום ובורא רע)",
    "text": " — לקמיה מפרש אידך מאי היא דאילו ברכה דישתבח אינה מן המנין שהיא לאחרי פסוקי דזמרה כמו ברכת הלל ואומרים אותה קודם זמן קריאת שמע אם ירצו:"
   },
   {
    "dh": "כדכתיב קאמרי'",
    "text": " — כתיב בקרא יוצר אור ובורא חשך עושה שלום ובורא רע:"
   },
   {
    "dh": "שכבר נפטר באהבה רבה",
    "text": " — שיש בה מעין ברכת התורה ותן בלבנו ללמוד וללמד לשמור ולעשות ולקיים את כל דברי תלמוד תורתך ותלמדם חקי רצונך:"
   },
   {
    "dh": "מדרש",
    "text": " — הוא קרוב למקרא כגון מכילתא וספרא וספרי שהם מדרשי מקראות:"
   },
   {
    "dh": "לגמרא אין צריך לברך",
    "text": " — אפילו קודם אהבה רבה קאמר והכי מוכח מילתא בפרק שני:"
   },
   {
    "dh": "אף לגמרא צריך לברך",
    "text": " — שהוא עיקר התורה שממנו הוראה יוצאה. גמרא היינו סברת טעמי משנה ותירוצי משניות הסותרות זו את זו וחסורי מחסרא:"
   },
   {
    "dh": "ומברך",
    "text": " — ברכת התורה:"
   },
   {
    "dh": "ור' יוחנן מסיים בה הכי",
    "text": " — דבעי פתיחה בברוך וחתימה בברוך:"
   },
   {
    "dh": "הערב נא ה' אלהינו",
    "text": " — יערבו עלינו לעסוק בהם מאהבה:"
   },
   {
    "dh": "ברוך אתה ה' המלמד תורה לעמו ישראל",
    "text": " — גרסינן. ולא גרסינן למדני חקיך שאין זו ברכה והודאה על שעבר אלא לשון בקשה ודוד כי אמרה (בתהילים קי״ט:י״ב) לא לשם ברכה אמרה אלא בלשון בקשה. והכי קאמר ה' שאתה ברוך למדני חקיך:"
   },
   {
    "dh": "וזו היא מעולה שבברכות",
    "text": " — התורה לפי שיש בה הודאה למקום וקילוס לתורה ולישראל:"
   },
   {
    "dh": "תנן התם",
    "text": " — במסכת תמיד:"
   },
   {
    "dh": "אמר להם הממונה",
    "text": " — והוא סגן הכהנים כדאי' ביומא היינו סגן היינו ממונה (בפירש\"י שם טו:):"
   },
   {
    "dh": "ברכו ברכה אחת",
    "text": " — לקמן מפרש מאי היא ומן הברכות שלפני ק\"ש היא דהתם מסדר לכוליה סדר עבודת השחר וקאמר דלאחר שסדרו האברים ע\"ג הכבש ומלחום ירדו ובאו להם ללשכת הגזית לקרות את שמע והדר תני אמר להם הממונה ברכו ברכה אחת והם ברכו וקראו עשרת הדברות:"
   },
   {
    "dh": "וברכו את העם",
    "text": " — עם העם:"
   },
   {
    "dh": "ועבודה",
    "text": " — בשביל העבודה שעשו היו מברכין אחריה רצה ה' אלהינו עבודת עמך ישראל ואשי ישראל ותפלתם תקבל ברצון ברוך המקבל עבודת עמו ישראל ברצון. אי נמי שאותך לבדך ביראה נעבוד:"
   },
   {
    "dh": "וברכת כהנים",
    "text": " — לברך את העם ובשאר תפלה לא היה להם פנאי ואף זמן קריאת שמע לא הגיע כדאמר במסכת יומא (דף לז ע\"ב) הקורא את שמע עם אנשי משמר ועם אנשי מעמד לא יצא לפי שאנשי משמר מקדימין וכו':"
   },
   {
    "dh": "מוסיפין ברכה אחת",
    "text": " — לקמיה מפרש לה:"
   },
   {
    "dh": "למשמר היוצא",
    "text": " — שהמשמרות מתחלפות ביום השבת כדאמרינן במסכת סוכה (דף נו:) משמר היוצא עושה תמיד של שחר ומוספין ומשמר הנכנס עושה תמיד של בין הערבים ובזיכין:"
   },
   {
    "dh": "מאי ברכה אחת",
    "text": " — דקתני רישא איזו מן הברכות הוא אומר:"
   },
   {
    "dh": "לאו בפירוש אתמר",
    "text": " — לא שמע מפי ר\"ל שאמ' בפירוש מאי ברכה אחת יוצר אור:"
   },
   {
    "dh": "זאת אומרת",
    "text": " — דקתני ברכו ברכה אחת:"
   },
   {
    "dh": "ברכות אין מעכבות זו את זו",
    "text": " — בירך את האחת ולא בירך את השניה נפקא מיהא ידי חובתו בההיא שבירך ואין חברתה מעכבת לומר שאין זו מועלת בלא זו. ומהכא שמע ר' זריקא דס\"ל לר\"ל דהך ברכה אחת יוצר אור היא:"
   },
   {
    "dh": "אי אמרת בשלמא יוצר אור הוו אמרי",
    "text": " — ולא אהבה רבה ואע\"ג דמטא ליה זמנא שאף בלילה ראוי לומר כל שכן דכיון דאמרי יוצר אור ודאי מטיא זמנה ואפ\"ה לא אמרי אלא יוצר אור ותו לא אמרי לה היינו דקאמר שמע מינה ברכות אין מעכבות זו את זו:"
   }
  ],
  "tosafot": [
   {
    "dh": "ורבנן אמרי אהבת עולם וכו'",
    "text": " — הלכך תקינו לומר בשחרית אהבה רבה ובערבית אהבת עולם:",
    "en": "“Since he has already fulfilled his obligation through Ahavah Rabbah - until here, therefore let us say all of them. In the Jerusalem Talmud, there is this statement that we say: he has already fulfilled his obligation through Ahavah Rabbah, and that is only if he studied immediately afterward. The meaning is: right away, he learned immediately in that place. Rabbi Yitzchak was asked: In a case like ours, where we do not study immediately after the morning prayer because we are occupied, and we go without studying until the middle of the day or later, why do we not recite the blessing over Torah again when we begin to study? Ri answered that we do not rule in accordance with that Jerusalem Talmud, since our Gemara did not say this, and there is no need to study immediately. Furthermore, even according to the Jerusalem Talmud, this applies specifically to Ahavah Rabbah, which is not primarily a blessing for the blessing over Torah, since the main purpose of Ahavah Rabbah was established for the recitation of Shema. Therefore, through it, one is not exempt from the blessing of Torah unless he studies immediately, and also does not divert his attention. But the blessing of “Who chose us” and the blessing of “to engage in words of Torah,” which are the primary blessings over Torah, exempt him for the entire day. And if you ask: How is this different from sukkah, where one must recite the blessing ‘to sit in the sukkah’ for each and every meal? It may be answered that Torah is different, because a person does not remove his mind from it, since at every moment a person is obligated to study, as it is written, ‘You shall meditate upon it day and night.’ Therefore, it is as though he is sitting all day without interruption. But eating in the sukkah has a fixed time. And if you ask: Why do we not recite a blessing ‘to sleep in the sukkah’? It may be answered that the blessing over eating, in which we recite ‘to sit in the sukkah,’ exempts him. Alternatively, it is because perhaps he will not fall asleep, and it would be a blessing in vain, since it is not in his power to sleep whenever he wishes. And Rabbeinu Tam would say that when a person gets up from his bed at night, in the morning, to study, he does not need to recite the blessing over Torah, because the blessing over Torah from the previous morning exempts him until the next morning. But this does not appear correct. And the French Jews were accustomed to say verses and the Priestly Blessing, and also ‘These are the things that have no fixed measure,’ which is a Mishnah, and ‘These are the things whose fruits a person enjoys…,’ which is a baraita, because of the Jerusalem Talmud, which requires that one study immediately afterward. But this is not necessary, as I have already written.”"
   },
   {
    "dh": "שכבר נפטר באהבה רבה",
    "text": " — עד הלכך נימרינהו לכולהו. בירושלמי יש הא דאמרי' שכבר נפטר באהבה רבה והוא ששנה על אתר פירוש לאלתר שלמד מיד באותו מקום. ונשאל להרב ר' יצחק כגון אנו שאין אנו לומדין מיד לאחר תפלת השחר שאנו טרודין והולכים כך בלא למוד עד אמצע היום או יותר אמאי אין אנו מברכין ברכת התורה פעם אחרת כשאנו מתחילין ללמוד. והשיב ר\"י דלא קיימא לן כאותו ירושלמי הואיל וגמר' שלנו לא אמרו ואין צריך לאלתר ללמוד. ועוד אפי' לפי הירושלמי דוקא אהבה רבה דלא הוי עיקר ברכה לברכת התורה דעיקר אהבה רבה לק\"ש נתקן ובשביל היא אינו נפטר מברכת התורה אלא אם ילמוד מיד וגם לא יעשה היסח הדעת. אבל ברכת אשר בחר בנו וברכת לעסוק בדברי תורה שהן עיקר לברכת התורה פוטרת כל היום. וא\"ת מאי שנא מסוכה שצריך לברך על כל סעודה וסעודה לישב בסוכה. וי\"ל דשאני תורה שאינו מייאש דעתו דכל שעה אדם מחוייב ללמוד דכתיב והגית בו יומם ולילה והוי כמו יושב כל היום בלא הפסק. אבל אכילה בסוכה יש שעה קבועה. וא\"ת מפני מה אין אנו מברכין לישן בסוכה. וי\"ל דברכה דאכילה שמברכין לישב פוטרתו. א\"נ משום שמא לא יישן והוי ברכה לבטלה שהרי אין בידו לישן כל שעה שירצה. והיה אומר ר\"ת כשאדם עומד ממטתו בלילה (בשחרית) ללמוד שא\"צ לברך ברכת התורה מפני שברכת התורה של אתמול שחרית פוטרת עד שחרית אחרת ולא נהירא. והצרפתים נהגו לומר פסוקים וברכת כהנים וגם אלו דברים שאין להם שיעור שהיא משנה (פ\"א דפאה) ואלו דברים שאדם אוכל פירותיהן כו' שהיא ברייתא (מס' שבת קכז.) מפני הירושלמי דבעי שילמוד על אתר. אבל א\"צ כמו שכתבתי כבר:"
   },
   {
    "dh": "ה\"ג ברוך אתה ה' המלמד תורה לעמו ישראל",
    "text": " — אבל לא גרס למדני חקיך שאין זו ברכה אלא בקשה שאמר דוד:"
   },
   {
    "dh": "וברכת כהנים",
    "text": " — ואין זה דוכן שהרי לא היו עומדים לדוכן עד לאחר הקטרת אמורים דאמרי' בתענית (פ\"ד ד' כו:) שלשה פעמים ביום הכהנים נושאין כפיהם וכו' וא\"כ הוה ליה למתני ד' פעמים אחד לפני הקטרה ואחד לאחר הקטרה אלא בלא נשיאות כפים אמרו ברכת כהנים כמו שאנו אומרים:"
   }
  ],
  "translations": []
 },
 {
  "id": "12a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יב",
  "amud": "א",
  "dafEn": "12a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אלא אי אמרת אהבה רבה הוו אמרי מאי ברכות אין מעכבות זו את זו דלמא האי דלא אמרי יוצר אור משום דלא מטא זמן יוצר אור וכי מטא זמן יוצר אור הוו אמרי ואי מכללא מאי דאי מכללא לעולם אהבה רבה הוו אמרי וכי מטא זמן יוצר אור הוו אמרי ליה ומאי ברכות אין מעכבות זו את זו סדר ברכות: וקורין עשרת הדברות שמע והיה אם שמוע ויאמר אמת ויציב ועבודה וברכת כהנים. א\"ר יהודה אמר שמואל אף בגבולין בקשו לקרות כן אלא שכבר בטלום מפני תרעומת המינין תניא נמי הכי ר' נתן אומר בגבולין בקשו לקרות כן אלא שכבר בטלום מפני תרעומת המינין רבה בב\"ח סבר למקבעינהו בסורא א\"ל רב חסדא כבר בטלום מפני תרעומת המינין אמימר סבר למקבעינהו בנהרדעא א\"ל רב אשי כבר בטלום מפני תרעומת המינין: ובשבת מוסיפין ברכה אחת למשמר היוצא. מאי ברכה אחת א\"ר חלבו משמר היוצא אומר למשמר הנכנס מי ששכן את שמו בבית הזה הוא ישכין ביניכם אהבה ואחוה ושלום וריעות: מקום שאמרו להאריך: פשיטא היכא דקא נקיט כסא דחמרא בידיה וקסבר דשכרא הוא ופתח ומברך אדעתא דשכרא וסיים בדחמרא יצא דאי נמי אם אמר שהכל נהיה בדברו יצא דהא תנן על כולם אם אמר שהכל נהיה בדברו יצא אלא היכא דקא נקיט כסא דשכרא בידיה וקסבר דחמרא הוא פתח ובריך אדעתא דחמרא וסיים בדשכרא מאי בתר עיקר ברכה אזלינן או בתר חתימה אזלינן ת\"ש שחרית פתח ביוצר אור וסיים במעריב ערבים לא יצא פתח במעריב ערבים וסיים ביוצר אור יצא ערבית פתח במעריב ערבים וסיים ביוצר אור לא יצא פתח ביוצר אור וסיים במעריב ערבים יצא כללו של דבר הכל הולך אחר החתום שאני התם דקאמר ברוך יוצר המאורות הניחא לרב דאמר כל ברכה שאין בה הזכרת השם אינה ברכה שפיר אלא לר' יוחנן דאמר כל ברכה שאין בה מלכות אינה ברכה מאי איכא למימר אלא כיון דאמר רבה בר עולא כדי להזכיר מדת יום בלילה ומדת לילה ביום כי קאמר ברכה ומלכות מעיקרא אתרוייהו קאמר ת\"ש מסיפא כללו של דבר הכל הולך אחר החתום כללו של דבר לאתויי מאי לאו לאתויי הא דאמרן לא לאתויי נהמא ותמרי ה\"ד אילימא דאכל נהמא וקסבר דתמרי אכל ופתח אדעתא דתמרי וסיים בדנהמא היינו בעיין לא צריכא כגון דאכל תמרי וקסבר נהמא אכל ופתח בדנהמא וסיים בדתמרי [יצא] דאפילו סיים בדנהמא נמי יצא מאי טעמא דתמרי נמי מיזן זייני: אמר רבה בר חיננא סבא משמיה דרב כל שלא אמר אמת ויציב שחרית ואמת ואמונה ערבית לא יצא ידי חובתו שנאמר (תהלים צב, ג) להגיד בבקר חסדך ואמונתך בלילות: ואמר רבה בר חיננא [סבא] משמיה דרב המתפלל כשהוא כורע כורע בברוך וכשהוא זוקף זוקף בשם אמר שמואל מאי טעמא דרב דכתיב (תהלים קמו, ח) ה' זוקף כפופים מיתיבי (מלאכי ב, ה) מפני שמי נחת הוא מי כתיב בשמי מפני שמי כתיב אמר ליה שמואל לחייא בר רב בר אוריאן תא ואימא לך מלתא מעלייתא דאמר אבוך הכי אמר אבוך כשהוא כורע כורע בברוך כשהוא זוקף זוקף בשם.",
  "rashi": [
   {
    "dh": "אלא אי אמרת",
    "text": " — הך ברכה דקאמרי אהבה רבה היכי ש\"מ דאין מעכבות זו את זו דלמא האי דלא אמרי יוצר אור משום דלא מטא זמניה הוא וכי מטא זמניה אמרי לה ואע\"ג דקרו אינהו ק\"ש לא מטא זמניה כדאמרינן בעלמא (יומא לז:) הקורא את שמע עם אנשי משמר לא יצא שאנשי משמר מקדימין:"
   },
   {
    "dh": "ואי מכללא מאי",
    "text": " — וכי אמר ליה מכללא מאי גריעותא איכא. דאמר לאו בפירוש אתמר הא שפיר מצי למשמע מכללא דיוצר אור קא אמרי ומשנינן ליכא למשמע מהכא דילמא לעולם אימא לך אהבה רבה וכו':"
   },
   {
    "dh": "סדר ברכות",
    "text": " — אם הקדים המאוחרות:"
   },
   {
    "dh": "בקשו",
    "text": " — לקבוע עשרת הדברות בקריאת שמע:"
   },
   {
    "dh": "מפני תרעומת המינין",
    "text": " — שלא יאמרו לעמי הארץ אין שאר תורה אמת ותדעו שאין קורין אלא מה שאמר הקדוש ב\"ה ושמעו מפיו בסיני:"
   },
   {
    "dh": "המינין",
    "text": " — עכו\"ם:"
   },
   {
    "dh": "פתח בדשכרא וסיים בדחמרא",
    "text": " — תחלת הברכה אמר ע\"מ שהכל וכיון שהגיע למלך העולם נזכר שהוא יין ואמר פרי הגפן פשיטא לן דיצא דהא אפילו סיים כל הברכה כדעת פתיחתה ואמר שהכל יצא על היין דתנן וכו':"
   },
   {
    "dh": "אלא",
    "text": " — קא מבעיא לן פתח אדעתא דחמרא כדי לסיים בפה\"ג וכשהגיע למלך העולם נזכר שהוא שכר וסיים שהכל מהו:"
   },
   {
    "dh": "בתר עיקר ברכה אזלינן",
    "text": " — ועיקר ברכה אדעתא דיין נאמרה והוי כמו שסיים ביין ואין ברכת היין מוציאה ידי ברכת שכר שאין השכר מן הגפן:"
   },
   {
    "dh": "פתח ביוצר אור",
    "text": " — כלומר אדעתא דלימא יוצר אור:"
   },
   {
    "dh": "וסיים במעריב ערבים",
    "text": " — כשאמר מלך העולם נזכר וסיים אשר בדברו מעריב ערבים:"
   },
   {
    "dh": "שאני התם וכו'",
    "text": " — כלומר דלמא פתיחה אינה כלום והא דקתני יצא לפי שחוזר וחותם בה בברוך יוצר המאורות וע\"י חתימתה קאמר דיצא אלא שהכל שאין חותם בה בברוך ופתיחתה אדעתא דבורא פרי הגפן הוא אימא דלא יצא:"
   },
   {
    "dh": "מאי איכא למימר",
    "text": " — היכי נפיק משום חתימתה הא אין מלכות בחתימתה:"
   },
   {
    "dh": "ה\"ג אלא כיון דאמר כו'",
    "text": " — אלא לא תימא משום חתימתה יצא אלא פתיחתה נמי מעלייתא היא ולא תפשוט מיניה לחמרא ושכרא דלגבי ברכות ערבית ושחרית הוא דמצי למימר דכי פתח בזו וסיים בזו יצא דהא כי פתח בשחרית אדעתא דמעריב ערבים הוה דעתיה לאדכורי בה מדת היום בלילה כגון גולל אור וכי פתח ערבית אדעתא דיוצר אור הוה דעתיה לאדכורי בה מדת לילה כגון ובורא חשך הלכך אדעתא דתרוייהו הויא:"
   },
   {
    "dh": "לאו לאתויי הא דאמרן",
    "text": " — כגון שכרא וחמרא:"
   },
   {
    "dh": "היינו בעיין",
    "text": " — דהא ברכת התמרים על העץ ועל פרי העץ אינה עולה לברכת הלחם ואי בהא פשטת דהכל הולך אחר חתום ברכות הוא הדין לחמרא ושכרא:"
   },
   {
    "dh": "כל מי",
    "text": " — שלא אמר ברכת אמת ויציב כמו שתקנוה וכן אמת ואמונה בערבית לא יצא:"
   },
   {
    "dh": "שנא' להגיד בבקר חסדך",
    "text": " — וברכת אמת ויציב כולה על חסד שעשה עם אבותינו היא שהוציאם ממצרים ובקע להם הים והעבירם וברכת אמת ואמונה מדבר בה אף על העתידות שאנו מצפים שיקיים לנו הבטחתו ואמונתו לגאלנו מיד מלכים ומיד עריצים ולשום נפשנו בחיים ולהדריכנו על במות אויבינו כל אלה הנסים התדירים תמיד:"
   },
   {
    "dh": "כשהוא כורע",
    "text": " — באבות ובהודאה כורע בברוך וזוקף את עצמו כשהוא מזכיר את השם על שם ה' זוקף כפופים (תהילים קמ״ו:ח׳):"
   },
   {
    "dh": "נחת",
    "text": " — לשון הכנעה:"
   }
  ],
  "tosafot": [
   {
    "dh": "משום דלא מטא זמן יוצר אור",
    "text": " — דנהי דשחיטת התמיד משיעלה עמוד השחר פי' רש\"י מיהו לא הוה שעה לומר יוצר אור כדאמרי' הקורא כו' ויכול לסבור הברייתא כותיקין:"
   },
   {
    "dh": "ברכה אחת למשמר היוצא וכו'",
    "text": " — תימא קצת מאי היא הואיל ולית בה לא שם ולא מלכות:"
   },
   {
    "dh": "פתח ואמר בא\"י אלהינו מלך העולם והיה סבור שהיה יין והבין שהיה שכר ואחר שהבין שהיה שכר סיים שהכל",
    "text": ""
   },
   {
    "dh": "לא לאתויי נהמא",
    "text": " — ופירש רב אלפס השתא דלא אפשיטא בעיין אזלינן לקולא ואפילו פתח בחמרא וסיים בשכרא יצא. ור\"י הי' אומר לחומרא דצריך לברך פעם אחרת. ומיהו היה אומר ר\"ח אם היה יודע בבירור שטעה בדבורו שאמר בורא פרי העץ תחת (בורא) פרי הגפן דבתוך כדי דבור יכול לחזור בו. וכן בי\"ט בחתימה של יום טוב אם טעה בין מקדש ישראל והזמנים ואמר מקדש השבת וחזר בתוך כדי דבור יצא אחרי שהוא יודע שהוא י\"ט. והקשה הר\"ר יעקב מקינון מאי קא מבעיא ליה והא ודאי מצות אינן צריכות כוונה. והיה אומר הר\"י דהיינו בשומע תפלה אחורי בית הכנסת ולא נתכוין לצאת. אבל היכא דנתכוין לברך על היין ונמצא שכר לא מהני:"
   },
   {
    "dh": "אמת ויציב וכו'",
    "text": " — לא קאי על השכינה אלא קאי אהדבר הזה וכו'. וכן איתא בהר\"ם. ואיתא בירושלמי האי מרגניתא דלית ביה טימא פירוש שאין לה שומא כל מה שמשבח מתגני לה כדאמר לקמן (ברכות ד' לג ב) בחד דפתח ואמר האל הגדול הגבור והנורא והיה מאריך הרבה וא\"ל ר' חנינא סיימת לשבחי דמרך כי כל פה לא יוכל לספר שבחו:"
   },
   {
    "dh": "להגיד בבקר חסדך",
    "text": " — חסד שהקדוש ב\"ה עשה לנו במצרים. ואמונתך פי' מדבר על העתיד שאנו מצפים שישמור הבטחתו ואמונתו ויגאלנו מיד המלכים ובסוף ברכה חוזר לגאולה דפרעה כדי לסמוך לגאל ישראל. א\"נ ע\"ד המדר' (רבה איכה ג) חדשים לבקרים רבה אמונתך שאדם מאמין ומפקיד רוחו בידו ומחזירה בלא יגיעה:"
   }
  ],
  "translations": []
 },
 {
  "id": "12b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יב",
  "amud": "ב",
  "dafEn": "12b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "רב ששת כי כרע כרע כחיזרא כי קא זקיף זקיף כחיויא: ואמר רבה בר חיננא סבא משמיה דרב כל השנה כולה אדם מתפלל האל הקדוש מלך אוהב צדקה ומשפט חוץ מעשרה ימים שבין ראש השנה ויום הכפורים שמתפלל המלך הקדוש והמלך המשפט ורבי אלעזר אמר אפילו אמר האל הקדוש יצא שנאמר (ישעיהו ה, טז) ויגבה ה' צבאות במשפט והאל הקדוש נקדש בצדקה אימתי ויגבה ה' צבאות במשפט אלו עשרה ימים שמר\"ה ועד יוה\"כ וקאמר האל הקדוש מאי הוה עלה אמר רב יוסף האל הקדוש ומלך אוהב צדקה ומשפט רבה אמר המלך הקדוש והמלך המשפט והלכתא כרבה: ואמר רבה בר חיננא סבא משמיה דרב כל שאפשר לו לבקש רחמים על חבירו ואינו מבקש נקרא חוטא שנאמר (שמואל א יב, כג) גם אנכי חלילה לי מחטא לה' מחדול להתפלל בעדכם אמר רבא אם ת\"ח הוא צריך שיחלה עצמו עליו מ\"ט אילימא משום דכתיב (שמואל א כב, ח) ואין חולה מכם עלי (ואין) [ו] גולה את אזני דילמא מלך שאני אלא מהכא (תהלים לה, יג) ואני בחלותם לבושי וגו': ואמר רבה בר חיננא סבא משמיה דרב כל העושה דבר עבירה ומתבייש בו מוחלין לו על כל עונותיו שנאמר (יחזקאל טז, סג) למען תזכרי ובשת ולא יהיה לך עוד פתחון פה מפני כלמתך בכפרי לך לכל אשר עשית נאם ה' אלהים דילמא צבור שאני אלא מהכא (שמואל א כח, טו) ויאמר שמואל אל שאול למה הרגזתני להעלות אותי ויאמר שאול צר לי מאד ופלשתים נלחמים בי וה' סר מעלי ולא ענני עוד גם ביד הנביאים גם בחלומות ואקראה לך להודיעני מה אעשה ואילו אורים ותומים לא קאמר משום דקטליה לנוב עיר הכהנים ומנין דאחילו ליה מן שמיא שנא' (שמואל א כח, יט) (ויאמר שמואל אל שאול) [ו] מחר אתה ובניך עמי וא\"ר יוחנן עמי במחיצתי ורבנן אמרי מהכא (שמואל ב כא, ו) והוקענום לה' בגבעת שאול בחיר ה' יצתה בת קול ואמרה בחיר ה' אמר ר' אבהו בן זוטרתי אמר רב יהודה בר זבידא בקשו לקבוע פרשת בלק בקריאת שמע ומפני מה לא קבעוה משום טורח צבור מ\"ט אילימא משום דכתיב בה (במדבר כג, כב) אל מוציאם ממצרים לימא פרשת רבית ופרשת משקלות דכתיב בהן יציאת מצרים אלא אמר ר' יוסי בר אבין משום דכתיב בה האי קרא (במדבר כד, ט) כרע שכב כארי וכלביא מי יקימנו ולימא האי פסוקא ותו לא גמירי כל פרשה דפסקה משה רבינו פסקינן דלא פסקה משה רבינו לא פסקינן פרשת ציצית מפני מה קבעוה א\"ר יהודה בר חביבא מפני שיש בה חמשה דברים מצות ציצית יציאת מצרים עול מצות ודעת מינים הרהור עבירה והרהור ע\"ז בשלמא הני תלת מפרשן עול מצות דכתיב (במדבר טו, לט) וראיתם אותו וזכרתם את כל מצות ה' ציצית דכתיב ועשו להם ציצית וגו' יציאת מצרים דכתיב אשר הוצאתי וגו' אלא דעת מינים הרהור עבירה והרהור ע\"ז מנלן דתניא אחרי לבבכם זו מינות וכן הוא אומר (תהלים יד, א) אמר נבל בלבו אין אלהים אחרי עיניכם זה הרהור עבירה שנאמר (שופטים יד, ג) ויאמר שמשון אל אביו אותה קח לי כי היא ישרה בעיני אתם זונים זה הרהור ע\"ז וכן הוא אומר (שופטים ח, לג) ויזנו אחרי הבעלים:  מזכירין יציאת מצרים בלילות א\"ר אלעזר בן עזריה הרי אני כבן שבעים שנה ולא זכיתי שתאמר יציאת מצרים בלילות עד שדרשה בן זומא שנא' (דברים טז, ג) למען תזכור את יום צאתך מארץ מצרים כל ימי חייך ימי חייך הימים כל ימי חייך הלילות וחכ\"א ימי חייך העוה\"ז כל להביא לימות המשיח: גמ׳ תניא אמר להם בן זומא לחכמים וכי מזכירין יציאת מצרים לימות המשיח והלא כבר נאמר (ירמיהו כג, ז) הנה ימים באים נאם ה' ולא יאמרו עוד חי ה' אשר העלה את בני ישראל מארץ מצרים כי אם חי ה' אשר העלה ואשר הביא את זרע בית ישראל מארץ צפונה ומכל הארצות אשר הדחתים שם אמרו לו לא שתעקר יציאת מצרים ממקומה אלא שתהא שעבוד מלכיות עיקר ויציאת מצרים טפל לו כיוצא בו אתה אומר (בראשית לה, י) לא יקרא שמך עוד יעקב כי אם ישראל יהיה שמך",
  "rashi": [
   {
    "dh": "כחיזרא",
    "text": " — שבט ביד אדם וחובטו כלפי מטה בבת אחת:",
    "en": "Ke'Hizra - [like] a staff in the hand of a person who strikes the staff downward in one motion (i.e. so the staff parallel to the ground)."
   },
   {
    "dh": "זקיף כחיויא",
    "text": " — בנחת ראשו תחלה ואח\"כ גופו שלא תראה כריעתו עליו כמשוי:",
    "en": "Straightens (from the bow) Ke'Hivya - pleasantly, first his head, and the rest of his body afterwards, so his bow does not appear to be a burden upon him."
   },
   {
    "dh": "כחויא",
    "text": " — כנחש הזה כשהוא זוקף עצמו מגביה הראש תחלה ונזקף מעט מעט:",
    "en": "Ke'Hivya - like a snake that, when he straightens himself, lifts his head first, and then straightens himself gradually."
   },
   {
    "dh": "המלך הקדוש",
    "text": " — לפי שבימים הללו הוא מראה מלכותו לשפוט את העולם:",
    "en": "The Holy King - since during these days He shows his kingship to judge the world"
   },
   {
    "dh": "המלך המשפט",
    "text": " — כמו מלך המשפט. כמו נושאי הארון הברית (יהושע ג׳:י״ד) כמו ארון הברית. וכן המסגרות המכונות (מלכים ב ט״ז:י״ז) שהוא כמו מסגרות המכונות. וכן העמק הפגרים (ירמיהו ל״א:מ׳) כמו עמק הפגרים:",
    "en": "The king of the Justice - like \"King of Justice\". Just as \"the carriers of the ark of the covenant\" is like \"ark of the covenant\". Another example is \"the insets of the laver stands\" which is like \"insets of the laver stands\". Similarly, \"the valley of the corpses\" is like \"valley of the corpses\"."
   },
   {
    "dh": "ה\"ג ואם תלמיד חכם הוא וצריך לרחמים צריך שיחלה עצמו עליו",
    "text": " — אם ת\"ח הוא זה שצריך לרחמים צריך שיחלה חבירו עצמו עליו:",
    "en": "The portion of tzitzit is recited during the recitation of the Shema, and even though the night is not a time for tzitzit, as it is written 'and you shall see it and remember,' we say it at night because of the Exodus from Egypt that occurred at that time."
   },
   {
    "dh": "בחלותם",
    "text": " — על דואג ואחיתופל הוא אומר שהיו ת\"ח:",
    "en": "I was appearing old, but I was not actually old, because a sign of gray hair appeared on me, on the day when Rabban Gamliel was removed from his position of leadership and Rabbi Elazar ben Azariah was appointed as the new leader, as is mentioned later in the chapter on the Morning Prayer (Berakhot 28a). On that day, Ben Zoma expounded upon the verse"
   },
   {
    "dh": "למען תזכרי ובושת",
    "text": " — סיפיה דקרא בכפרי לך את כל אשר עשית:"
   },
   {
    "dh": "גם בחלומות גם בנביאים",
    "text": " — ולא א\"ל גם באורים לפי שנתבייש ממנו שלא יאמר לו אתה גרמת לעצמך שלא נענית באורים ותומים לפי שהרגת את הכהנים:"
   },
   {
    "dh": "ורבנן",
    "text": " — סברי מהכא שמעינן דאחילו לו:"
   },
   {
    "dh": "והוקענום",
    "text": " — גבעונים אמרו לדוד בסוף ימיו שהיה רעב ג' שנים וישאל דוד בה' ויאמר ה' אל שאול ואל בית הדמים על אשר המית את הגבעונים שהרג את הכהנים שהיו מספיקים לגבעונים לחם ומים שהגבעונים נתנם יהושע חוטבי עצים ושואבי מים למזבח ויאמר דוד אל הגבעונים ובמה אכפר לכם וברכו את נחלת ה' והם אמרו לו יותן לנו שבעה אנשים מבניו והוקענום בגבעת שאול ובת קול יצאה וסיימה אחריהם בחיר ה' דודאי הם לא אמרו בחיר ה' שהרי לגנותו היו באין ולא לכבודו:"
   },
   {
    "dh": "פרשת רבית",
    "text": " — אל תקח מאתו נשך ותרבית וגו' (ויקרא כ״ה:ל״ו) וסמיך ליה יציאת מצרים:"
   },
   {
    "dh": "ופרשת משקלות",
    "text": " — אבני צדק וגו' (ויקרא י״ט:ל״ו) סיפיה דקרא אשר הוצאתי אתכם וגו':"
   },
   {
    "dh": "כרע שכב",
    "text": " — דדמי לבשכבך ובקומך שהקדוש ב\"ה שומרנו בשכבנו ובקומנו לשכב שלוים ושקטים כארי וכלביא:"
   },
   {
    "dh": "ולימא האי פסוקא",
    "text": " — וליכא טורח צבור:"
   },
   {
    "dh": "עול מצות",
    "text": " — ועשיתם את כל מצותי:"
   },
   {
    "dh": "מינות",
    "text": " — אותם ההופכים טעמי התורה למדרש טעות ואליל:"
   },
   {
    "dh": "וכן הוא אומר אמר נבל בלבו אין אלהים",
    "text": " — ואין לך נבל מן ההופך דברי אלהים חיים:"
   },
   {
    "dh": "מתני' מזכירין יציאת מצרים בלילות",
    "text": " — פרשת ציצית בק\"ש ואע\"פ שאין לילה זמן ציצית דכתיב וראיתם אותו וזכרתם אומרים אותה בלילה מפני יציאת מצרים שבה:"
   },
   {
    "dh": "כבן שבעים שנה",
    "text": " — כבר הייתי נראה זקן ולא זקן ממש שבאת עליו שיבה יום שהעבירו רבן גמליאל מנשיאותו ומינו רבי אלעזר בן עזריה נשיא כדאיתא לקמן בפרק תפלת השחר (ברכות כח א) ואותו היום דרש בן זומא מקרא זה:"
   }
  ],
  "tosafot": [
   {
    "dh": "כרע כחיזרא",
    "text": " — ולקמן (ברכות ד' כח:) אמרינן עד שיראה איסר וכו' לא סגי בכריעה לבד וראשו זקוף אלא בעי נמי שיכוף הראש וכן איתא בירושלמי דפרקין ובלבד שלא ישוח יותר מדאי. אמר רבי ירמיה ובלבד שלא יעשה כהדין חרדונא והיינו תרגום ירושלמי של צב (ויקרא יא) והצב כשהוא שוחה ראשו זקוף. ובר\"ה וי\"כ שאנו שוחין כל שעה בתפלה צריך ליזהר שיגביה קודם שיסיים הברכה רק שיכרע בברוך ושיגביה מיד דאמרינן לקמן סוף אין עומדין (ברכות לד.) אם בא לשחות תחלת כל ברכה וסוף כל ברכה מלמדין אותו שלא ישחה:"
   },
   {
    "dh": "והלכתא כותיה דרבה",
    "text": " — דצריך לחתום המלך הקדוש והמלך המשפט ואם לא אמר מחזירין אותו. וכן זכרנו ומי כמוך וכתוב לחיים ובספר חיים מחזירים אותו אם לא אמר. דכל המשנה ממטבע שטבעו חכמים אינו יוצא ידי חובתו וכך פסק רבינו יהודה אם ספק לו אם אמר אם לא אמר מחזירים אותו כדאיתא בירושלמי דתענית פ\"ק (א א) היה מתפלל ואינו יודע אם הזכיר טל ומטר ואם לאו כל שלשים יום בחזקת שלא למוד. פירוש שלא אמר אלא כמו שהוא למוד עד עתה שלא אמר כן. אחר כן בחזקת שהזכיר והוא הדין לכל הדברים שצריך להזכיר כך הדין. ואם כן בעשרת ימי תשובה דליכא שלשים יום צריך לחזור. ור\"ח כתב דאין מחזירין אותו מכל אותן דברים דלא פסק בספר בפירוש והביא ראיה לדבריו:"
   },
   {
    "dh": "בקשו לקבוע פרשת בלק בפרשת ק\"ש ומפני מה לא קבעוה וכו'",
    "text": " — איתא בירושלמי (ברכות א ה) דאותן ג' פרשיות שתקנו בקרית שמע לפי שבהן עשרת הדברות ועיין בו ותמצא הכל:"
   },
   {
    "dh": "הדרן עלך מאימתי",
    "text": ""
   }
  ],
  "translations": []
 },
 {
  "id": "13a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יג",
  "amud": "א",
  "dafEn": "13a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "לא שיעקר יעקב ממקומו אלא ישראל עיקר ויעקב טפל לו וכן הוא אומר (ישעיהו מג, יח) אל תזכרו ראשונות וקדמוניות אל תתבוננו אל תזכרו ראשונות זה שעבוד מלכיות וקדמוניות אל תתבוננו זו יציאת מצרים (ישעיהו מג, יט) הנני עושה חדשה עתה תצמח תני רב יוסף זו מלחמת גוג ומגוג משל למה הדבר דומה לאדם שהיה מהלך בדרך ופגע בו זאב וניצל ממנו והיה מספר והולך מעשה זאב פגע בו ארי וניצל ממנו והיה מספר והולך מעשה ארי פגע בו נחש וניצל ממנו שכח מעשה שניהם והיה מספר והולך מעשה נחש אף כך ישראל צרות אחרונות משכחות את הראשונות: (דברי הימים א א, כז) אברם הוא אברהם בתחלה נעשה אב לארם ולבסוף נעשה אב לכל העולם כולו שרי היא שרה בתחלה נעשית שרי לאומתה ולבסוף נעשית שרה לכל העולם כולו: תני בר קפרא כל הקורא לאברהם אברם עובר בעשה שנאמר (בראשית יז, ה) והיה שמך אברהם רבי אליעזר אומר עובר בלאו שנאמר (בראשית יז, ה) ולא יקרא עוד [את] שמך אברם אלא מעתה הקורא לשרה שרי הכי נמי התם קודשא בריך הוא אמר לאברהם (בראשית יז, טו) שרי אשתך לא תקרא את שמה שרי כי שרה שמה אלא מעתה הקורא ליעקב יעקב ה\"נ שאני התם דהדר אהדריה קרא דכתיב (בראשית מו, ב) ויאמר אלהים לישראל במראות הלילה ויאמר יעקב יעקב מתיב רבי יוסי בר אבין ואיתימא רבי יוסי בר זבידא (נחמיה ט, ז) אתה הוא ה' האלהים אשר בחרת באברם אמר ליה התם נביא הוא דקא מסדר לשבחיה דרחמנא מאי דהוה מעיקרא: הדרן עלך מאימתי  היה קורא בתורה והגיע זמן המקרא אם כוון לבו יצא בפרקים שואל מפני הכבוד ומשיב ובאמצע שואל מפני היראה ומשיב דברי ר' מאיר ר' יהודה אומר באמצע שואל מפני היראה ומשיב מפני הכבוד ובפרקים שואל מפני הכבוד ומשיב שלום לכל אדם אלו הן בין הפרקים בין ברכה ראשונה לשניה בין שניה לשמע בין שמע לוהיה אם שמוע בין והיה אם שמוע לויאמר בין ויאמר לאמת ויציב ר' יהודה אומר בין ויאמר לאמת ויציב לא יפסיק אמר ר' יהושע בן קרחה למה קדמה פרשת שמע לוהיה אם שמוע כדי שיקבל עליו עול מלכות שמים תחלה ואחר כך מקבל עליו עול מצות והיה אם שמוע לויאמר שוהיה אם שמוע נוהג בין ביום ובין בלילה ויאמר אינו נוהג אלא ביום בלבד: גמ׳ ש\"מ מצות צריכות כוונה מאי אם כוון לבו לקרות לקרות והא קא קרי בקורא להגיה: ת\"ר ק\"ש ככתבה דברי רבי וחכ\"א בכל לשון מ\"ט דרבי אמר קרא והיו בהוייתן יהו ורבנן מאי טעמייהו אמר קרא שמע בכל לשון שאתה שומע ולרבי נמי הא כתיב שמע ההוא מבעי ליה השמע לאזניך מה שאתה מוציא מפיך ורבנן סברי להו כמאן דאמר לא השמיע לאזנו יצא ולרבנן נמי הא כתיב והיו ההוא מבעי להו שלא יקרא למפרע ורבי שלא יקרא למפרע מנא ליה נפקא ליה מדברים הדברים ורבנן דברים הדברים לא דרשי למימרא דסבר רבי דכל התורה כולה בכל לשון נאמרה דאי סלקא דעתך בלשון הקודש נאמרה והיו דכתב רחמנא למה לי איצטריך משום דכתיב שמע למימרא דסברי רבנן דכל התורה כולה בלשון הקודש נאמרה דאי סלקא דעתך בכל לשון נאמרה שמע דכתב רחמנא למה לי איצטריך משום דכתיב והיו: ת\"ר והיו שלא יקרא למפרע הדברים על לבבך יכול תהא כל הפרשה צריכה כוונה תלמוד לומר האלה עד כאן צריכה כוונה מכאן ואילך אין צריכה כוונה דברי ר' אליעזר א\"ל רבי עקיבא הרי הוא אומר",
  "rashi": [
   {
    "dh": "לא שיעקר יעקב ממקומו",
    "text": " — שהרי מצינו שקראו הקב\"ה יעקב אחר זאת ברדתו למצרים שנאמר ויאמר אלהים לישראל ויאמר יעקב יעקב ויאמר הנני (בראשית מו):",
    "en": "Not that Jacob will be uprooted from its place -- Hark! We find that God calls him Jacob after this, on his descent into Egypt, as it says \"God said to Israel . . . he said 'Jacob, Jacob,' and [Jacob] said \"Here I am.\""
   },
   {
    "dh": "הנני עושה חדשה",
    "text": " — בתר אל תזכרו ראשונות כתיב:",
    "en": "\"Hark that I will do anew\" -- before this, it is written \"Do not commemorate the originals.\""
   },
   {
    "dh": "בתחלה אב לארם",
    "text": " — לאנשי מדינתו שמארץ ארם היה שנאמר בעבר הנהר ישבו אבותיכם (יהושע כד) ואומר אל ארם נהרים אל עיר נחור (בראשית כד):",
    "en": "At the start he was patriarch to Aram -- to the men of his country, for he was from the land of Aram, as it is said \"Across the river dwelt your forefathers,\" and he said, \"unto Aram Naharayim [lit. Of the Rivers] until the city of Naḥor.\""
   },
   {
    "dh": "אב לכל העולם",
    "text": " — אב המון גוים (שם יז):",
    "en": "Patriarch of the whole world -- \"Patriarch of multitudes of nations\""
   },
   {
    "dh": "שרי",
    "text": " — לשון יחיד משמע שרתי:",
    "en": "Sarai -- the singular form is \"sarati\" (Lamentations 1:1)"
   },
   {
    "dh": "מסדר שבחיה",
    "text": " — דמעיקרא אשר בחרת בו בהיות שמו אברם ושמת שמו אברהם:",
    "en": "delineating his praises -- when he was originally selected, when his name was Abram: \"And gave him his name Abraham.\""
   },
   {
    "dh": "הדרן עלך מאימתי",
    "text": "",
    "en": "Is reading the Law -- the section of K'riyas Sh'ma"
   },
   {
    "dh": "היה קורא בתורה",
    "text": " — פרשת ק\"ש:",
    "en": "And the time of reading arrives -- the time of K'riyas Sh'ma"
   },
   {
    "dh": "והגיע זמן המקרא",
    "text": " — זמן ק\"ש:",
    "en": "in chapters -- between the breaks, and vita supra it differentiates in our Mishna between [the break between] the first chapter and the second and that between the second and the Sh'ma, etc."
   },
   {
    "dh": "בפרקים",
    "text": " — בין ההפסקות ולקמן מפרש להו במתניתין בין פרשה ראשונה לשניה בין שניה לשמע כו':",
    "en": "Queries out of respect -- queries in greeting a man of honor, that it is appropriate to anticipate them in greeting [without first being greeted]."
   },
   {
    "dh": "שואל מפני הכבוד",
    "text": " — שואל בשלום אדם נכבד שראוי להקדים לו שלום:",
    "en": "And responds -- greeting if he anticipated him, and in the Gemara it explains that if he queries, it is obvious he responds."
   },
   {
    "dh": "ומשיב",
    "text": " — שלום אם הקדימו לו ובגמרא פריך כיון דשואל פשיטא דמשיב:",
    "en": "And in the middle -- in the middle of the blessing or the paragraph."
   },
   {
    "dh": "ובאמצע",
    "text": " — באמצע הברכה או הפרשה:",
    "en": "Out of fear -- a man who is afraid before them, that they do not kill him, but not on account of honor."
   },
   {
    "dh": "מפני היראה",
    "text": " — אדם שהוא ירא מפניו שלא יהרגהו אבל מפני הכבוד לא:",
    "en": "R\"Y -- in the Gemara it is explained their dispute."
   },
   {
    "dh": "ר\"י",
    "text": " — בגמרא מפרש פלוגתייהו:",
    "en": "Between \"He said\" and \"true and stalwart\" do not break -- in the Gemara is explained their reason."
   },
   {
    "dh": "בין ויאמר לאמת ויציב לא יפסיק",
    "text": " — בגמרא (ד' יד) מפרש טעמייהו:",
    "en": "\"And it will be that if you listen\" our practice is both by day and by night -- for it discusses the teaching of Torah, for it is written: \"and you will teach them to your sons.\""
   },
   {
    "dh": "והיה אם שמוע נוהג בין ביום בין בלילה",
    "text": " — דמשתעי בתלמוד תורה דכתיב (דברים י״א:י״ט) ולמדתם אותם את בניכם:",
    "en": "\"he said\" our practice is only by day -- for it discusses the tzitzis, which our practice is only by day, for it is written: \"And you will see them,\" to exclude the cover of night."
   },
   {
    "dh": "ויאמר אינו נוהג אלא ביום",
    "text": " — דמשתעי בציצית שאינה נוהגת אלא ביום דכתיב וראיתם אותו פרט לכסות לילה (שבת כז:):"
   },
   {
    "dh": "גמ' ש\"מ מצות צריכות כוונה",
    "text": " — שיהא מתכוין לשם מצוה ותקשה לרבה דאמר במסכת ראש השנה (כח.) התוקע לשיר יצא:"
   },
   {
    "dh": "כוון לקרות",
    "text": " — אבל לצאת ידי מצוה לא בעינן שיהא מתכוין אלא לקרות בתורה בעלמא:"
   },
   {
    "dh": "הא קא קרי",
    "text": " — הא בקורא קא עסיק תנא ואתי דקתני היה קורא בתורה:"
   },
   {
    "dh": "בקורא להגיה",
    "text": " — את הספר אם יש בו טעות דאפילו לקריאה נמי לא מתכוין:"
   },
   {
    "dh": "ככתבה",
    "text": " — בלשון הקדש:"
   },
   {
    "dh": "מדברים הדברים",
    "text": " — דהוה ליה למכתב והיו דברים האלה (דברים ו׳:ו׳) למדרש שיקרא הדברים כסדרן ולא למפרע כגון ובשעריך ביתך מזוזות:"
   },
   {
    "dh": "לימא קסבר ר' וכו'",
    "text": " — מדאיצטריך ליה קרא לק\"ש שתהא ככתבה סבירא ליה בשאר כל התורה בכל לשון נאמרה לקרות:"
   },
   {
    "dh": "משום דכתיב שמע",
    "text": " — דלא תדרוש שמע בכל לשון שאתה שומע כרבנן:"
   },
   {
    "dh": "עד כאן",
    "text": " — עד על לבבך:"
   }
  ],
  "tosafot": [
   {
    "dh": "היה קורא אם כוון לבו יצא",
    "text": " — בירושלמי אמרינן ברכות אינן מעכבות דאע\"פ שלא אמר שתים לפניה ושתים לאחריה יצא דאם לא כן תקשי מאי מהני אם כוון לבו הרי לא בירך תחלה. וא\"ת הא בפ\"ק (יב א) מסקינן סדר ברכות אין מעכבות הא ברכות מעכבות. וי\"ל דהתם איירי בצבור. דיקא נמי דקתני אמר להם הממונה:",
    "en": "1 In The Holy Tongue It Is Said - Rashi explains in the second chapter of Tractate Megillah (Page 17 Side 2) [that the word \"Vehayu\" comes to teach us] to read in the Torah. And it's not clear because Ezra decreed the reading of the Torah, and since it was Ezra, why would I need the word \"Vehayu?\" And there is to say that since this is referencing the biblically ordained readings like Parshat Zachor. Alternatively, it could reference the biblical readings like on the first fruits, the tithe confession, and the spurning of the levirate marriage whose recitation is biblical. Even though it was said in every language at Sinai because every utterance from the Mouth of G-d would divide into seventy languages [those readings must be recited in the Holy Tongue]."
   },
   {
    "dh": "ובאמצע שואל מפני וכו'",
    "text": " — ופסק רבינו שמעיה דבמקום שאסור לספר אסור לדבר אפילו בלשון הקודש וכן משמע מתוך מתניתין. ובירושלמי קאמר אפילו באמצע הפסוק רב הונא בשם רב יוסף אמר ודברת בם מכאן שיש לך רשות לדבר בם. והיינו נמי דאמרי' בפ\"ק דיומא (דף יט:) ודברת בם ולא בתפלה פירוש שאין משיבין בה מפני הכבוד:"
   },
   {
    "dh": "למה קדמה פרשת שמע לוהיה אם שמוע",
    "text": " — וא\"ת תיפוק ליה דקדמה בתורה וי\"ל דהכי קאמר למה קדמה אף לפרשת ציצית דקדמה לכולן אלא ודאי אין אנו חוששין לזה שהיא קודמת בתורה משום דאמרינן אין מוקדם ומאוחר וא\"כ היה לנו להקדים והיה שהיא מדברת בלשון רבים:"
   },
   {
    "dh": "ויאמר אינה נוהגת אלא ביום",
    "text": " — מכאן משמע כר' שמעון דאמר בפ' התכלת (מנחות ד' מג.) דציצי' מ\"ע שהזמן גרמא וכן איתא בקדושין (פ\"ק ד' לג:) דקאמר ציצית מצות עשה שהזמן גרמא וא\"ת א\"כ למ\"ד (מנחות מא.) ציצית חובת טלית הוא ואפילו מונחת בקופסא אפ\"ה חייבת בציצית היכי אשכחן שיהא הזמן גרמא. וי\"ל דאם היה כסות המיוחד ללילה פטור והכי איתא בירושלמי דקדושין אמר להם ר\"ש אי אתם מודים לי דציצית מ\"ע שהזמן גרמא שהרי כסות לילה פטור מן הציצית א\"ר אילא טעמא דרבנן שאם היה מיוחד ליום ולילה שחייב בציצית:"
   },
   {
    "dh": "בקורא להגיה",
    "text": " — פירש בקונטרס שאין מתכוין לקרות. תימה אכתי הא קא קרי. ע\"כ נראה בקורא להגיה שאינו קורא התיבות כהלכתן וכנקודתן אלא ככתיבתן קרי כדי להבין בחסרות וביתרות כמו לטטפת ומזוזת ואם כוון לבו לאו דוקא אלא כלומר לקרות כדין כנקודתן וכהלכתן:"
   },
   {
    "dh": "וחכמים אומרים בכל לשון",
    "text": " — אומר הר\"י דהלכה כחכמים דהלכה כרבי מחבירו ולא מחביריו (ערובין מו ב) ועוד דרבנן סבירא להו כמאן דאמר לא השמיע לאזנו יצא וכותיה פסקינן לקמן (ברכות דף טו:):"
   },
   {
    "dh": "בלשון הקדש נאמרה",
    "text": " — פירש רש\"י פרק שני דמגילה (ד' יז: ושם) לקרות בתורה. ולא נהירא דהא עזרא תיקן קריאת התורה ומקמי דאתא עזרא והיו למה לי. וי\"ל דמיירי בפרשיות המחוייבין לקרות דאורייתא כמו פרשת זכור אי נמי מקרא בכורים וודוי מעשר ופרשת חליצה שמצוה בתורה לקרותן אעפ\"כ בכל לשון נאמרה בסיני שכל דבור ודבור שהיה יוצא מפי הקב\"ה היה מתחלק לשבעים לשון:"
   },
   {
    "dh": "עד כאן מצות כוונה",
    "text": " — עד בכל מאדך ששני פסוקים אלו מדברים ביחוד ה' באהבתו וביראתו:"
   }
  ],
  "translations": []
 },
 {
  "id": "13b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יג",
  "amud": "ב",
  "dafEn": "13b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "(דברים ו, ו) אשר אנכי מצוך היום על לבבך מכאן אתה למד שכל הפרשה כולה צריכה כוונה אמר רבה בר בר חנה אמר ר' יוחנן הלכה כר\"ע איכא דמתני לה אהא דתניא הקורא את שמע צריך שיכוין את לבו ר' אחא משום ר' יהודה אומר כיון שכוון לבו בפרק ראשון שוב אינו צריך אמר רבה בר בר חנה אמר ר' יוחנן הלכה כר' אחא שאמר משום ר' יהודה תניא אידך והיו שלא יקרא למפרע על לבבך ר' זוטרא אומר עד כאן מצות כוונה מכאן ואילך מצות קריאה רבי יאשיה אומר עד כאן מצות קריאה מכאן ואילך מצות כוונה מ\"ש מכאן ואילך מצות קריאה דכתיב לדבר בם הכא נמי הא כתיב ודברת בם ה\"ק עד כאן מצות כוונה וקריאה מכאן ואילך קריאה בלא כוונה ומאי שנא עד כאן מצות כוונה וקריאה דכתיב על לבבך ודברת בם התם נמי הא כתיב על לבבכם לדבר בם ההוא מבעי ליה לכדרבי יצחק דאמר (דברים יא, יח) ושמתם את דברי אלה צריכה שתהא שימה כנגד הלב: אמר מר ר' יאשיה אומר עד כאן מצות קריאה מכאן ואילך מצות כוונה מ\"ש מכאן ואילך מצות כוונה משום דכתיב על לבבכם הכא נמי הא כתיב על לבבך ה\"ק עד כאן מצות קריאה וכוונה מכאן ואילך כוונה בלא קריאה ומ\"ש עד כאן מצות קריאה וכוונה דכתיב על לבבך ודברת בם התם נמי הא כתיב על לבבכם לדבר בם ההוא בדברי תורה כתיב וה\"ק רחמנא אגמירו בנייכו תורה כי היכי דליגרסו בהו: ת\"ר (דברים ו, ד) שמע ישראל ה' אלהינו ה' אחד עד כאן צריכה כוונת הלב דברי ר\"מ אמר רבא הלכה כר\"מ תניא סומכוס אומר כל המאריך באחד מאריכין לו ימיו ושנותיו אמר רב אחא בר יעקב ובדלי\"ת אמר רב אשי ובלבד שלא יחטוף בחי\"ת ר' ירמיה הוה יתיב קמיה דר' [חייא בר אבא] חזייה דהוה מאריך טובא א\"ל כיון דאמליכתיה למעלה ולמטה ולארבע רוחות השמים תו לא צריכת: אמר רב נתן בר מר עוקבא אמר רב יהודה על לבבך בעמידה על לבבך סלקא דעתך אלא אימא עד על לבבך בעמידה מכאן ואילך לא ורבי יוחנן אמר כל הפרשה כולה בעמידה ואזדא ר' יוחנן לטעמיה דאמר רבה בר בר חנה א\"ר יוחנן הלכה כר' אחא שאמר משום ר' יהודה: ת\"ר שמע ישראל ה' אלהינו ה' אחד זו ק\"ש של ר' יהודה הנשיא א\"ל רב לר' חייא לא חזינא ליה לרבי דמקבל עליה מלכות שמים אמר ליה בר פחתי בשעה שמעביר ידיו על פניו מקבל עליו עול מלכות שמים חוזר וגומרה או אינו חוזר וגומרה בר קפרא אומר אינו חוזר וגומרה רבי שמעון ברבי אומר חוזר וגומרה א\"ל בר קפרא לר\"ש ברבי בשלמא לדידי דאמינא אינו חוזר וגומרה היינו דמהדר רבי אשמעתא דאית בה יציאת מצרים אלא לדידך דאמרת חוזר וגומרה למה ליה לאהדורי כדי להזכיר יציאת מצרים בזמנה אמר ר' אילא בריה דרב שמואל בר מרתא משמיה דרב אמר שמע ישראל ה' אלהינו ה' אחד ונאנס בשינה יצא אמר ליה רב נחמן לדרו עבדיה בפסוקא קמא צערן טפי לא תצערן אמר ליה רב יוסף לרב יוסף בריה דרבה אבוך היכי הוה עביד אמר ליה בפסוקא קמא הוה קא מצער נפשיה טפי לא הוה מצער נפשיה אמר רב יוסף פרקדן לא יקרא קריאת שמע מקרא הוא דלא ליקרי הא מיגנא שפיר דמי והא רבי יהושע בן לוי לייט אמאן דגני אפרקיד אמרי מיגנא כי מצלי שפיר דמי מקרא אע\"ג דמצלי נמי אסור והא ר' יוחנן מצלי וקרי שאני ר' יוחנן דבעל בשר הוה: ובפרקים שואל וכו' משיב מחמת מאי אילימא מפני הכבוד השתא משאל שאיל אהדורי מבעיא אלא שואל מפני הכבוד ומשיב שלום לכל אדם אימא סיפא ובאמצע שואל מפני היראה ומשיב משיב מחמת מאי אילימא מפני היראה השתא משאל שאיל אהדורי מבעיא אלא מפני הכבוד היינו דר\"י דתנן ר\"י אומר באמצע שואל מפני היראה ומשיב מפני הכבוד ובפרקים שואל מפני הכבוד ומשיב שלום לכל אדם חסורי מחסרא והכי קתני בפרקים שואל מפני הכבוד ואין צריך לומר שהוא משיב ובאמצע שואל מפני היראה ואין צריך לומר שהוא משיב דברי ר\"מ רבי יהודה אומר באמצע שואל מפני היראה ומשיב מפני הכבוד",
  "rashi": [
   {
    "dh": "איכא דמתני לה",
    "text": " — להא דרבה בב\"ח:"
   },
   {
    "dh": "בפרק ראשון",
    "text": " — כל פרשת שמע:"
   },
   {
    "dh": "ע\"כ מצות כוונה כו'",
    "text": " — כולה מפרש לה ואזיל:"
   },
   {
    "dh": "א\"ר יאשיה עד כאן",
    "text": " — פרק ראשון:"
   },
   {
    "dh": "מצוות כוונה כו'",
    "text": " — קס\"ד דכוונה בלא קריאה:"
   },
   {
    "dh": "מכאן ואילך",
    "text": " — פרשת והיה אם שמוע:"
   },
   {
    "dh": "שתהא שימה כנגד הלב",
    "text": " — דהא ושמתם דכתיב לאו בקריאה וכוונה איירי אלא בשימת תפילין של יד שיהא שם אותה על גובה של יד כנגד הלב על קבורת הזרוע ברדו\"ן:"
   },
   {
    "dh": "ה\"ג ההוא בדברי תורה כתיב",
    "text": " — כדמוכח קרא ולמדתם אותם את בניכם וגו':"
   },
   {
    "dh": "עד כאן",
    "text": " — פסוק ראשון לבדו:"
   },
   {
    "dh": "ובדל\"ת",
    "text": " — ולא בחי\"ת דכל כמה דאמר אח בלא דל\"ת לא משתמע מידי ומה בצע בהארכתו אבל בדל\"ת יאריך עד כשיעור שיעשנו בלבו יחיד בשמים ובארץ ולארבע רוחותיה כדמפרש לקמן:"
   },
   {
    "dh": "ובלבד שלא יחטוף בחי\"ת",
    "text": " — בשביל אריכות הדל\"ת לא ימהר בקריאתה שלא יקראנה בחטף בלא פתח ואין זה כלום:"
   },
   {
    "dh": "דאמליכתיה למעלה וכו'",
    "text": " — שהארכת שיעור שתחשוב בלבך ה' אחד בשמים ובארץ וארבע רוחותיה:"
   },
   {
    "dh": "בעמידה",
    "text": " — אפילו לב\"ה דאמרי [לעיל (ברכות יא.)] עוסקין במלאכתן וקורין ומהלכין וקורין מודים הם שצריך לעמוד במקום אחד עד המקרא הזה לפי שעד כאן מצות כוונה:"
   },
   {
    "dh": "לא חזינא דמקבל עליה מלכות שמים",
    "text": " — שהיה שונה לתלמידיו מקודם זמן ק\"ש וכשהגיע הזמן לא ראיתיו מפסיק:"
   },
   {
    "dh": "חוזר וגומרה",
    "text": " — לאחר שעמדו התלמידים:"
   },
   {
    "dh": "דקא מהדר",
    "text": " — לשנות לתלמידים בכל יום שמעתא דאית בה יציאת מצרים במקום פרשת ציצית ואמת ויציב:"
   },
   {
    "dh": "בזמנה",
    "text": " — בזמן ק\"ש:"
   },
   {
    "dh": "בפסוקא קמא צערן",
    "text": " — אם ראיתני מנמנם צערני עד שאנער יפה בפסוק ראשון:"
   },
   {
    "dh": "פרקדן",
    "text": " — שוכב על גבו ופניו למעלה:"
   },
   {
    "dh": "לייט אמאן דגני אפרקיד",
    "text": " — שמא יתקשה אברו בתוך שנתו ונראה לרבים והוא דרך גנאי:"
   },
   {
    "dh": "מיגנא",
    "text": " — לישן:"
   },
   {
    "dh": "כי מצלי שפיר דמי",
    "text": " — כשהוא מוטה על צדו מעט שפיר דמי אבל מקרי ק\"ש אפילו מצלי נמי אסור שמקבל עליו מלכות שמים דרך שררה וגאוה:"
   },
   {
    "dh": "לכל אדם",
    "text": " — אפילו אינו נכבד:"
   },
   {
    "dh": "חסורי מחסרא",
    "text": " — דהוה ליה למתני בתרווייהו אין צריך לומר ותו ליכא למקשי מידי:"
   }
  ],
  "tosafot": [
   {
    "dh": "אשר אנכי מצוך",
    "text": " — דאי כדקא אמרת הוה ליה למכתב אשר צויתיך דמצוך משמע אפילו מכאן ואילך ומ\"מ אצטריך האלה דאי לאו הכי הוה אמינא דאף פרשה שנייה בכלל:"
   },
   {
    "dh": "אמר רבא הלכה כרבי מאיר",
    "text": " — והכי הלכתא דקיי\"ל כרבא דהוא בתראה:"
   },
   {
    "dh": "על לבבך בעמידה",
    "text": " — בירושלמי מפרש לאו דאי היה יושב עומד אלא דאם היה מהלך עומד אע\"ג דב\"ה אמרי כל אדם קורא כדרכו מ\"מ מצוה מן המובחר לעמוד כשהוא מהלך לפי שאינו מיושב כל כך ואינו יכול לכוין כשהוא מהלך כאשר היה עומד וכן הלכה דמהלך בדרך מצוה לעמוד בפסוק א' ובעינן כונה בפסוק ראשון לבד וכן איתא בתנחומא רב יהודה בשם שמואל אמר אסור לקבל עליו עול מלכות שמים כשהוא מהלך אלא יעמוד ויקרא וכשיגיע לואהבת ילך לדרכו:"
   },
   {
    "dh": "שואל מפני היראה וכו'",
    "text": " — ר\"מ ור' יהודה הלכה כרבי יהודה דאמר אפילו באמצע משיב מפני הכבוד א\"כ נראה שמותר לענות קדיש וקדושה באמצע ק\"ש דאין לך מפני הכבוד גדול מזה אבל באמצע י\"ח אסור דמשמע לקמן בפ' אין עומדין (ברכות ד' לא.) דבין גאולה לתפלה אין לענות וכ\"ש בתפלה עצמה ומי שמתפלל לבדו וש\"צ מגיע למודים ישחה למודים אבל לא יאמר מודים ודוקא שהיה באמצע הברכה אבל בסוף הברכה לא דנראה ככורע בשביל הברכה ואמרינן (לקמן ברכות ד' לד.) דאין לכרוע בכל ברכות אלא באותן שתקנו חכמים ור\"ת היה רגיל שהיה ממתין בעושה פלא כדי לענות קדיש וקדושה עם הצבו' והי' סובר אפי' שהה כדי לגמור את הכל אינו חוזר לראש:"
   }
  ],
  "translations": []
 },
 {
  "id": "14a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יד",
  "amud": "א",
  "dafEn": "14a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ובפרקים שואל מפני הכבוד ומשיב שלום לכל אדם תניא נמי הכי הקורא את שמע ופגע בו רבו או גדול הימנו בפרקים שואל מפני הכבוד וא\"צ לומר שהוא משיב ובאמצע שואל מפני היראה ואצ\"ל שהוא משיב דברי ר' מאיר ר' יהודה אומר באמצע שואל מפני היראה ומשיב מפני הכבוד ובפרקים שואל מפני הכבוד ומשיב שלום לכל אדם בעא מיניה אחי תנא דבי רבי חייא מרבי חייא בהלל ובמגילה מהו שיפסיק אמרינן ק\"ו ק\"ש דאורייתא פוסק הלל דרבנן מבעיא או דלמא פרסומי ניסא עדיף א\"ל פוסק ואין בכך כלום אמר רבה ימים שהיחיד גומר בהן את ההלל בין פרק לפרק פוסק באמצע הפרק אינו פוסק וימים שאין היחיד גומר בהן את ההלל אפי' באמצע הפרק פוסק איני והא רב בר שבא איקלע לגביה דרבינא וימים שאין היחיד גומר את ההלל הוה ולא פסיק ליה שאני רב בר שבא דלא חשיב עליה דרבינא: בעי מיניה אשיאן תנא דבי ר' אמי מר' אמי השרוי בתענית מהו שיטעום אכילה ושתיה קביל עליה והא ליכא או דילמא הנאה קביל עליה והא איכא א\"ל טועם ואין בכך כלום תניא נמי הכי מטעמת אינה טעונה ברכה והשרוי בתענית טועם ואין בכך כלום עד כמה ר' אמי ור' אסי טעמי עד שיעור רביעתא: אמר רב כל הנותן שלום לחבירו קודם שיתפלל כאלו עשאו במה שנאמר (ישעיהו ב, כב) חדלו לכם מן האדם אשר נשמה באפו כי במה נחשב הוא אל תקרי במה אלא במה ושמואל אמר במה חשבתו לזה ולא לאלוה מתיב רב ששת בפרקים שואל מפני הכבוד ומשיב תרגמה ר' אבא במשכים לפתחו (א\"ר יונה א\"ר זירא כל העושה חפציו קודם שיתפלל כאלו בנה במה א\"ל במה אמרת א\"ל לא אסור קא אמינא וכדרב אידי בר אבין ד) אמר רב אידי בר אבין אמר רב יצחק בר אשיאן אסור לו לאדם לעשות חפציו קודם שיתפלל שנאמר (תהלים פה, יד) צדק לפניו יהלך וישם לדרך פעמיו ואמר רב אידי בר אבין אמר רב יצחק בר אשיאן כל המתפלל ואח\"כ יוצא לדרך הקב\"ה עושה לו חפציו שנאמר צדק לפניו יהלך וישם לדרך פעמיו: (ו)א\"ר יונה א\"ר זירא כל הלן שבעת ימים בלא חלום נקרא רע שנאמר (משלי יט, כג) ושבע ילין בל יפקד רע אל תקרי שבע אלא שבע א\"ל רב אחא בריה דרבי חייא בר אבא הכי א\"ר חייא א\"ר יוחנן כל המשביע עצמו מדברי תורה ולן אין מבשרין אותו בשורות רעות שנאמר ושבע ילין בל יפקד רע: אלו הן בין הפרקים וכו': א\"ר אבהו א\"ר יוחנן הלכה כר' יהודה דאמר בין אלהיכם לאמת ויציב לא יפסיק א\"ר אבהו א\"ר יוחנן מאי טעמיה דרבי יהודה דכתיב",
  "rashi": [
   {
    "dh": "אחי",
    "text": " — כך שמו:"
   },
   {
    "dh": "תנא דבי רבי חייא",
    "text": " — שהיה שונה בבית רבי חייא:"
   },
   {
    "dh": "מהו שיפסיק",
    "text": " — לשאלת שלום:"
   },
   {
    "dh": "ימים שהיחיד גומר בהן את ההלל",
    "text": " — שהוא חובה לכל אדם והם אחד ועשרים יום בשנה כדאמרינן במסכת ערכין (ד' י.):"
   },
   {
    "dh": "מהו שיטעום",
    "text": " — את התבשיל לדעת אם צריך מלח או תבלין:"
   },
   {
    "dh": "מטעמת",
    "text": " — טעימת תבשיל:"
   },
   {
    "dh": "רביעתא",
    "text": " — רביעית הלוג:"
   },
   {
    "dh": "חדלו לכם מן האדם",
    "text": " — כשיש לכם לעסוק בכבוד המקום אל תתעסקו בכבוד אדם דאי לאו הכי למה ליה לחדול:"
   },
   {
    "dh": "ושמואל",
    "text": " — לא דריש לשון במה אלא כמשמעו במה חשבתו לזה שהקדמת כבודו לכבודי:"
   },
   {
    "dh": "שואל מפני הכבוד",
    "text": " — והא ק\"ש קודם תפלה הוא וקתני שואל:"
   },
   {
    "dh": "תרגמה רבי אבא",
    "text": " — להא דרב ושמואל דאסרי:"
   },
   {
    "dh": "במשכים לפתחו",
    "text": " — אבל פגעו בדרך שואל:"
   },
   {
    "dh": "ה\"ג",
    "text": " — אמר רב אידי בר אבין אמר רבי יצחק בר אשיאן אסור לאדם לעשות חפציו קודם שיתפלל:"
   },
   {
    "dh": "צדק",
    "text": " — תפלה שמצדיקו לבוראו והדר וישם פעמיו לדרכי חפציו:"
   },
   {
    "dh": "אל תקרי שבע אלא שבע",
    "text": " — ילין בל יפקד מן השמים בחלום הרי הוא רע לכך אין משגיחין לפקדו:"
   }
  ],
  "tosafot": [
   {
    "dh": "ימים שהיחיד גומר בהם את ההלל",
    "text": " — לאו דוקא יחיד אלא אפילו צבור קורא יחיד כיון שאין כל ישראל ביחד כמו שהיו בשחיטת פסחים בי\"ד בניסן ולאו דוקא גומר דודאי קי\"ל דימים שאין יחיד גומר את ההלל אין חובה לאמרו כלל אפילו בדילוג דהכי משמע בערכין (פ\"ב ד' י:) דחשיב כ\"א יום דיחיד גומר בהן את ההלל ופריך ר\"ה וי\"כ נמי לימא משמע דבשאר ימים טובים כמו בראשי חדשים פשיטא ליה דאין לומר מדלא חשיב יותר מכ\"א יום וגם מדלא קאמר לגמור בר\"ה ובי\"ה דאז הוה משמע דבשאר ימים טובים כמו בר\"ח ודאי אין גומרין אבל קורין אבל עתה משמע אפילו קורין לא וכן משמע בפרק בתרא דתענית (ד' כח:) רב איקלע לבבל חזנהו דהוו קא קרו בר\"ח סבר לאפסוקינהו. פירוש שהיה סובר שהיו גומרים אותו כיון דחזא דקא מדלגי דלוגי אמר ש\"מ מנהג אבותיהם בידיהם אלמא דימים דאין גומרין בהן הלל אין חובה לאמרו ומה שאנו אומרין אותו היינו משום מנהג. וכתוב במחזור ויטרי כיון שאינו אלא מנהג בעלמא לא מברכינן עליה כדאמר פרק לולב וערבה (סוכה ד' מד:) אין מברכין על דבר שהוא מנהג. ומיהו אומר ר\"ת דאינו ראיה דאטלטול ודאי לא מברכינן אבל על מצוה פשיטא דמברכינן דהא חזינן כל יו\"ט שני אינו אלא מנהגא ומברכין והכא נמי משמע דמברכין דאי לא מברכין מאי הפסקה שייך בה ועוד ראיה דמברכינן על מנהגא מהא דרב על לבי כנישתא וכו' ואם לא ברכו בתחלה אמאי לא הרגיש רב דהוה מנהגא עד שדלגו אלא בוודאי ברכו מפני שמברכים בטוב על מנהגא ובשביל כן לא הרגיש עד הדלוג וא\"ת אמאי לא אסיק אדעתיה אם ברכו לקרות או לגמור וי\"ל דבכך אין לחוש שבטוב יכול לברך לגמור אפי' כשהוא מדלג או איפכא ומה שמברכין כך על הדלוג לקרות וכשהן גומרין לגמור כדי שלא יטעו ומשום הכי לא היה יכול להבין מתוך הברכה עד הדלוג ויש שרוצין לומר דיחיד האומר הלל בימים שאין גומרין שאין לו לברך ומיהו השר מקוצי היה אומר דכיון שרצה לחייב עצמו מברך ואין זה ברכה לבטלה מידי דהוה אלולב ואתפילין דהני נשי מברכות אע\"ג שאינן חייבות ובלילי פסחים יש שמברכין פעמים בתחלה לקרות ואחר הסעודה אחר שפוך מברכין לגמור ומייתי ראיה מירושלמי (דפרק א') מההיא דמייתי עלה דכל הברכות פותחין בברוך חוץ מן הברכות הסמוכות לחברתה וברכת הפירות והמצות ופריך בירושלמי עלה והא איכא גאולה פירוש אשר גאלנו דסמוכה לחברתה ואמאי פותחת בברוך שנייא דאם שמעה בבהכ\"נ יצא ופריך והרי סופה פירוש יהללוך דאינה סמוכה שהסעודה מפסקת ואפ\"ה אינה פותחת בברוך ומשני שתים הנה אחת להבא ואחת לשעבר פירוש אחת להבא זו היא אותה ברכה שמברכין אחר אכילה לגמור ולאותה ברכה היא סמוכה אחת לשעבר היינו אותה שבירך קודם אכילה אלמא דמברכין שני פעמים אבל זה הפירוש אינו מיושב דהרי סיפא משמע דקאי אברכה דאשר גאלנו דקאי בה מתחלה אלא ודאי אברכה דאשר גאלנו קאי כאשר אפרש מיהו משמע בירושלמי כאשר פירשתי תחלה שהיו מברכין ב' פעמים תחלה וסוף אבל אומר ר' יהודה דזו היא תמיהא גדולה מאחר שבירך קודם אכילה אמאי מפסיק ואוכל בינתים שהרי בימים שאין יחיד גומר בהן את ההלל כיון שבירך תחלה כמו הכא אינו מותר לפסוק אלא מפני הכבוד דאי בשלא בירך אמאי לא יפסיק באמצע אפילו שלא מפני הכבוד הא לא היה מפסיק שום ברכה אלא נראה הא דפריך בירושלמי הרי גאולה דמשמע דמברכין עליה בתחלה איירי באדם שעושה הסדר בבת אחת שאז אינו מפסיק שאינו צריך אבל אנו שמפסיקין לאכול אין לנו לברך כלל לא בתחלה ולא בסוף והא דקאמר בירושלמי והרי סיפא זהו אשר גאלנו דחותמת בברוך ואמאי והא הודאה בעלמא היא כברכת פירות ואמאי חותמת בברוך ומשני שתים הנה שתי גאולות אחת להבא ואחת לשעבר פירוש לעתיד כמו יגיענו וגם היא ארוכה קצת וגם יש בה לשעבר כמו אשר גאלנו מגאולת מצרים לפיכך חותמת בברוך ומה שהקשה מיהללוך שאינה סמוכה לפי מה שפרשתי עתה ואפ\"ה אינה פותחת בברוך יש ליתן טעם לפי שהיא הודאה בעלמא ואפילו שהיא ארוכה קצת תקנו בה חתימה ולא פתיחה כמו אלהי נשמה. וכן משמע בירושלמי שהיה דרכן לומר הלל בבית הכנסת ואח\"כ שותין כוסות שלהם בביתם בלא שום סדר דבעי בירושלמי (פ' ע\"פ) שתאן בבת אחת מהו פירוש זה אחר זה בלא הלל וסדר בינתים מהו שמעינן מן הדא דא\"ר יוחנן הלל אם שמעה בבית הכנסת יצא וכן משמע בתוספתא דמי שלא היה יודע ונכנס בבית הכנסת וכו' והשתא נמי מיושב דבשביל כך פותחת ברכה דאשר גאלנו בברוך דטעמא שאינה סמוכה כי הא דאם קרא הלל בבהכ\"נ יצא:"
   },
   {
    "dh": "או דילמא הנאה קביל עליה",
    "text": " — האי לישנא משמע דמיירי בתענית יחיד שקבל עליו אבל בתענית הכתוב לא:"
   },
   {
    "dh": "טועם ואין בכך כלום",
    "text": " — פירש ר\"ח שחוזר ופולט דלא חשיב הנאה מן הטעימה אבל בולע לא אפילו בשאר תעניות ומשום הכי הפולט אינו צריך ברכה שאינו נהנה:"
   },
   {
    "dh": "במשכים לפתחו",
    "text": " — וכן הלכה אבל פגעו באקראי מותר:"
   }
  ],
  "translations": []
 },
 {
  "id": "14b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יד",
  "amud": "ב",
  "dafEn": "14b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "(ירמיהו י, י) וה' אלהים אמת חוזר ואומר אמת או אינו חוזר ואומר אמת א\"ר אבהו א\"ר יוחנן חוזר ואומר אמת רבה אמר אינו חוזר ואומר אמת ההוא דנחית קמיה דרבה שמעיה רבה דאמר אמת אמת תרי זימני אמר רבה כל אמת אמת תפסיה להאי אמר רב יוסף כמה מעליא הא שמעתתא דכי אתא רב שמואל בר יהודה אמר אמרי במערבא ערבית דבר אל בני ישראל ואמרת אליהם אני ה' אלהיכם אמת אמר ליה אביי מאי מעליותא והא אמר רב כהנא אמר רב לא יתחיל ואם התחיל גומר וכי תימא ואמרת אליהם לא הוי התחלה והאמר רב שמואל בר יצחק אמר רב דבר אל בני ישראל לא הוי התחלה ואמרת אליהם הוי התחלה אמר רב פפא קסברי במערבא ואמרת אליהם נמי לא הויא התחלה עד דאמר ועשו להם ציצית אמר אביי הלכך אנן אתחולי מתחלינן דקא מתחלי במערבא וכיון דאתחלינן מגמר נמי גמרינן דהא אמר רב כהנא אמר רב לא יתחיל ואם התחיל גומר חייא בר רב אמר אמר אני ה' אלהיכם צריך לומר אמת לא אמר אני ה' אלהיכם אינו צ\"ל אמת והא בעי לאדכורי יציאת מצרים דאמר הכי מודים אנחנו לך ה' אלהינו שהוצאתנו מארץ מצרים ופדיתנו מבית עבדים ועשית לנו נסים וגבורות על הים ושרנו לך: אמר ר' יהושע בן קרחה למה קדמה פרשת שמע וכו': תניא ר\"ש בן יוחי אומר בדין הוא שיקדים שמע לוהיה אם שמוע שזה ללמוד וזה ללמד והיה אם שמוע לויאמר שזה ללמוד וזה לעשות אטו שמע ללמוד אית ביה ללמד ולעשות לית ביה והא כתיב ושננתם וקשרתם וכתבתם ותו והיה אם שמוע ללמד הוא דאית ביה ולעשות לית ביה והא כתיב וקשרתם וכתבתם אלא הכי קאמר בדין הוא שתקדם שמע לוהיה אם שמוע שזה ללמוד וללמד ולעשות והיה אם שמוע לויאמר שזה יש בה ללמד ולעשות ויאמר אין בה אלא לעשות בלבד ותיפוק ליה מדרבי יהושע בן קרחה חדא ועוד קאמר חדא כדי שיקבל עליו עול מלכות שמים תחלה ואח\"כ יקבל עליו עול מצות ועוד משום דאית בה הני מילי אחרנייתא. רב משי ידיה וקרא ק\"ש ואנח תפילין וצלי והיכי עביד הכי והתניא החופר כוך למת בקבר פטור מק\"ש ומן התפלה ומן התפילין ומכל מצות האמורות בתורה הגיע זמן ק\"ש עולה ונוטל ידיו ומניח תפילין וקורא ק\"ש ומתפלל הא גופא קשיא רישא אמר פטור וסיפא חייב הא לא קשיא סיפא בתרי ורישא בחד מ\"מ קשיא לרב רב כרבי יהושע בן קרחה סבירא ליה דאמר עול מלכות שמים תחלה ואח\"כ עול מצות אימר דאמר רבי יהושע בן קרחה להקדים קריאה לקריאה קריאה לעשיה מי שמעת ליה ותו מי סבר ליה כרבי יהושע בן קרחה והאמר רב חייא בר אשי זמנין סגיאין הוה קאימנא קמיה דרב ומקדים ומשי ידיה ומברך ומתני לן פרקין ומנח תפילין והדר קרי ק\"ש וכ\"ת בדלא מטא זמן ק\"ש א\"כ מאי אסהדתיה דרב חייא בר אשי לאפוקי ממ\"ד למשנה אין צריך לברך קמ\"ל דאף למשנה נמי צריך לברך מ\"מ קשיא לרב שלוחא הוא דעוית: אמר עולא כל הקורא ק\"ש בלא תפילין כאילו מעיד עדות שקר בעצמו א\"ר חייא בר אבא א\"ר יוחנן כאילו הקריב עולה בלא מנחה וזבח בלא נסכים: ואמר רבי יוחנן הרוצה שיקבל עליו עול מלכות שמים שלמה",
  "rashi": [
   {
    "dh": "וה' אלהים אמת",
    "text": " — לכך אין מפסיקין בין אני ה' אלהיכם לאמת:"
   },
   {
    "dh": "כל אמת אמת תפסיה להאי",
    "text": " — ריהטא של אמת תפסתו לזה:"
   },
   {
    "dh": "הא שמעתתא",
    "text": " — דרב שמואל בר יהודה אמר אמרי במערבא וכו'. ק\"ש של ערבית אין קורין בה פרשת ציצית כולה לפי שאין מצות ציצית בלילה אבל מתחילין אותה ומפסיקים בה ומדלגים ואומרים אני ה' אלהיכם אמת:"
   },
   {
    "dh": "לא יתחיל",
    "text": " — אין צריך להתחיל ויאמר ערבית:"
   },
   {
    "dh": "אתחולי מתחלינן",
    "text": " — דהא מתחלי במערבא:"
   },
   {
    "dh": "אמר אני ה' אלהיכם",
    "text": " — דהיינו פרשת ציצית:"
   },
   {
    "dh": "צריך לומר אמת",
    "text": " — כדכתיב וה' אלהים אמת:"
   },
   {
    "dh": "והא בעי לאדכורי יציאת מצרים",
    "text": " — דתנן (לעיל ברכות ד' יב:) מזכירין יציאת מצרים בלילות ואי לא אמר אמת ואמונה ולא אמר פרשת ציצית היכי מדכר יציאת מצרים:"
   },
   {
    "dh": "ושרנו לך",
    "text": " — מי כמכה באלים וגו' מלכותך ראו בניך עד גאל ישראל והשכיבנו:"
   },
   {
    "dh": "שזה ללמוד",
    "text": " — ודברת בם:"
   },
   {
    "dh": "וזה ללמד",
    "text": " — ולמדתם אותם את בניכם ואם לא למד תחלה היאך ילמד את בניו:"
   },
   {
    "dh": "וזה לעשות",
    "text": " — ויאמר אין בה אלא עשייה:"
   },
   {
    "dh": "וקשרתם",
    "text": " — דתפילין:"
   },
   {
    "dh": "וכתבתם",
    "text": " — דמזוזה עשייה היא:"
   },
   {
    "dh": "רב משי ידי",
    "text": " — פעם אחת ראוהו שעשה כן:"
   },
   {
    "dh": "והיכי עביד הכי",
    "text": " — שהקדים ק\"ש לתפילין:"
   },
   {
    "dh": "כוך",
    "text": " — קבר שחופרין בקירות מערה ארכו ד' ורחבו ז' טפחים:"
   },
   {
    "dh": "פטור מק\"ש",
    "text": " — דהעוסק במצוה פטור מן המצוה כדאמרינן בפ\"ק (ד' יא.) בשבתך בביתך פרט לעוסק במצוה:"
   },
   {
    "dh": "וסיפא בתרתי",
    "text": " — והכי קאמר אם שנים הם מניח את חבירו חופר והוא עולה ומקיים מצות ק\"ש ותפילין ותפלה וחוזר למלאכה וחבירו יעלה ויניח תפילין ויקרא ק\"ש ויתפלל:"
   },
   {
    "dh": "מ\"מ",
    "text": " — תפילין קודמים לק\"ש:"
   },
   {
    "dh": "עול מצות",
    "text": " — דהנחת תפילין עול מצוה הוא:"
   },
   {
    "dh": "קריאה לקריאה",
    "text": " — שמע שהוא קבלת מלכות שמים לוהיה אם שמוע שהוא קבלת עול מצות:"
   },
   {
    "dh": "ומקדים",
    "text": " — משכים:"
   },
   {
    "dh": "ומברך",
    "text": " — על התורה:"
   },
   {
    "dh": "ומתני פרקין",
    "text": " — אלמא מקדים הוא לעסוק בתורה דהיינו עשייה דמצוה מקמי מלכות שמים:"
   },
   {
    "dh": "שלוחא הוא דעוית",
    "text": " — השליח קלקל שאיחר להביא לו תפילין מעיקרא והגיע זמן ק\"ש והוזקק לקרות כדי שלא יעבור הזמן וכי מטי שלוחא דתפילין אנחינהו:"
   },
   {
    "dh": "כאלו מעיד עדות שקר בעצמו",
    "text": " — לישנא מעליא:"
   },
   {
    "dh": "כאילו הקריב עולה בלא מנחה",
    "text": " — שחייבו הכתוב להקריב עמה שנא' (במדבר כ״ח:ה׳) ועשירית האיפה וגו' אף הקורא ואינו מקיים אינו גומר את המצוה:"
   },
   {
    "dh": "נסכים",
    "text": " — הוא היין המתנסך על גבי המזבח אחר העולה והזבח כדכת' ונסכיה' חצי ההין וגו'(שם) וה\"ה דמצי למימ' כאילו הקריב עולה בלא מנחה ונסכים דהא עולה נמי טעונה נסכים אלא לישנא דקרא נקט עולה ומנחה זבח ונסכים:"
   }
  ],
  "tosafot": [
   {
    "dh": "ומנח תפילין ומצלי",
    "text": " — ומהתם משמע שמותר להניח תפילין בין גאולה לתפלה וכן בטלית מניח אדם טליתו בין גאולה לתפלה. וכן מצינו שרבי יצחק ברבי יהודה שלח אחר טליתו ושהה השליח וכבר קרא ק\"ש בברכותיה ונתעטף בטליתו וגמר שמונה עשרה והביא ראיה מהכא מההיא דרב. מ\"מ יש לחלק בין תפילין לטלית דעיקר ק\"ש ותפלה שייכי בתפילין כדאמר בסמוך כאילו מעיד עדות שקר בעצמו פירוש באדון שצוה שהוא קורא והיו לטוטפת ולאות על ידך ואין. ותפלה נמי כדאמרן קרי ק\"ש ומתפלל זו היא מלכות שמים אבל ציצית שאינו אלא חובת טלית שאם יש לו טלית חייב ואם אין לו פטור מציצית ויכול לקרוא ק\"ש בלא ציצית ודאי דהוי הפסקה. והרב רבי משה מקוצי היה אומר דאפי' מכאן אין ראיה דמצי למימר הניח תפילין בלא ברכה ולאחר י\"ח ממשמש בהם ומברך עליהם ובהכי סגי שגם מותר להתעטף בטלית בעת שידיו מטונפות ואחר שיטול ידיו ימשמש בטליתו ומברך:"
   },
   {
    "dh": "ומכל מצות האמורות בתורה",
    "text": " — וא\"ת וכי ק\"ש לא הוה בכלל מצות האמורות בתורה. וי\"ל דאי לא תני בהדיא ק\"ש הוה אמינא דדוקא הני דלית להו קביעות זמן אבל ק\"ש דקביע להו זמן לא הואיל וזמן עובר קמ\"ל:"
   },
   {
    "dh": "עולה בלא מנחה",
    "text": " — ה\"ה דמצי למימר בלא נסכים שהרי עולה נמי טעונה נסכים אלא לישנא דקרא נקט עולה ומנחה וגו':"
   }
  ],
  "translations": []
 },
 {
  "id": "15a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "טו",
  "amud": "א",
  "dafEn": "15a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "יפנה ויטול ידיו ויניח תפילין ויקרא ק\"ש ויתפלל וזו היא מלכות שמים שלמה א\"ר חייא בר אבא א\"ר יוחנן כל הנפנה ונוטל ידיו ומניח תפילין וקורא ק\"ש ומתפלל מעלה עליו הכתוב כאלו בנה מזבח והקריב עליו קרבן דכתיב (תהלים כו, ו) ארחץ בנקיון כפי ואסובבה את מזבחך ה' א\"ל רבא לא סבר לה מר כאילו טבל דכתיב ארחץ [בנקיון] ולא כתב ארחיץ [כפי] א\"ל רבינא לרבא חזי מר האי צורבא מרבנן דאתא ממערבא ואמר מי שאין לו מים לרחוץ ידיו מקנח ידיו בעפר ובצרור ובקסמית א\"ל שפיר קאמר מי כתיב ארחץ במים בנקיון כתיב כל מידי דמנקי דהא רב חסדא לייט אמאן דמהדר אמיא בעידן צלותא והני מילי לק\"ש אבל לתפלה מהדר ועד כמה עד פרסה והנ\"מ לקמיה אבל לאחוריה אפילו מיל אינו חוזר [ומינה] מיל הוא דאינו חוזר הא פחות ממיל חוזר:  הקורא את שמע ולא השמיע לאזנו יצא ר' יוסי אומר לא יצא קרא ולא דקדק באותיותיה ר' יוסי אומר יצא רבי יהודה אומר לא יצא הקורא למפרע לא יצא קרא וטעה יחזור למקום שטעה: גמ׳ מאי טעמא דר' יוסי משום דכתיב שמע השמע לאזנך מה שאתה מוציא מפיך ות\"ק סבר שמע בכל לשון שאתה שומע ור' יוסי תרתי שמע מינה. תנן התם חרש המדבר ואינו שומע לא יתרום ואם תרם תרומתו תרומה מאן תנא חרש המדבר ואינו שומע דיעבד אין לכתחלה לא אמר רב חסדא ר' יוסי היא דתנן הקורא את שמע ולא השמיע לאזנו יצא דברי רבי יהודה ר' יוסי אומר לא יצא עד כאן לא קאמר ר' יוסי לא יצא אלא גבי ק\"ש דאורייתא אבל תרומה משום ברכה הוא וברכה דרבנן ולא בברכה תליא מילתא וממאי דר' יוסי היא דילמא ר' יהודה היא ואמר גבי ק\"ש נמי דיעבד אין לכתחלה לא תדע דקתני הקורא דיעבד אין לכתחלה לא אמרי האי דקתני הקורא להודיעך כחו דר' יוסי דאמר דיעבד נמי לא דאי ר' יהודה אפי' לכתחלה נמי יצא במאי אוקימתא כר' יוסי ואלא הא דתניא לא יברך אדם בהמ\"ז בלבו ואם בירך יצא מני לא ר' יוסי ולא ר' יהודה דאי ר' יהודה הא אמר לכתחלה נמי יצא אי ר' יוסי דיעבד נמי לא אלא מאי ר' יהודה ודיעבד אין לכתחלה לא אלא הא דתני ר' יהודה בריה דרבי שמעון בן פזי חרש המדבר ואינו שומע תורם לכתחלה מני לא ר' יהודה ולא ר' יוסי אי ר' יהודה הא אמר דיעבד אין לכתחלה לא אי ר' יוסי הא אמר דיעבד נמי לא אלא לעולם רבי יהודה ואפי' לכתחלה נמי ולא קשיא הא דידיה הא דרביה דתנן רבי יהודה אומר משום ר' אלעזר בן עזריה הקורא את שמע צריך שישמיע לאזנו שנאמר (דברים ו, ד) שמע ישראל ה' אלהינו ה' אחד אמר ליה רבי מאיר הרי הוא אומר אשר אנכי מצוך היום על לבבך אחר כונת הלב הן הן הדברים השתא דאתית להכי אפילו תימא רבי יהודה כרביה סבירא ליה ולא קשיא הא רבי מאיר הא רבי יהודה. תנן התם הכל כשרים לקרות את המגילה חוץ מחרש שוטה וקטן ורבי יהודה מכשיר בקטן מאן תנא חרש דיעבד נמי לא אמר רב מתנה רבי יוסי היא דתנן הקורא את שמע ולא השמיע לאזנו יצא דברי ר' יהודה רבי יוסי אומר לא יצא ממאי דרבי יוסי היא ודיעבד נמי לא",
  "rashi": [
   {
    "dh": "יפנה",
    "text": " — לנקביו:"
   },
   {
    "dh": "דכתיב ארחץ בנקיון",
    "text": " — משמע ארחץ כל הגוף ולא כתיב ארחיץ כפי לדרשה אתא לומר שמעלה עליו שכר רחיצת כפיו כאלו טבל כל גופו:"
   },
   {
    "dh": "קסמית",
    "text": " — קיסם:"
   },
   {
    "dh": "לק\"ש",
    "text": " — בעידנא דק\"ש שזמנה קבוע פן יעבור הזמן אבל לתפלה דכל היום זמנה הוא צריך למהדר אמיא:"
   },
   {
    "dh": "מתני' ולא דקדק באותיותיה",
    "text": " — לפרשן יפה בשפתיו:"
   },
   {
    "dh": "תרתי ש\"מ",
    "text": " — כי דרשת נמי שמע בכל לשון שאתה שומע ש\"מ נמי דצריך להשמיע לאזנו:"
   },
   {
    "dh": "לא יתרום",
    "text": " — לפי שאינו שומע הברכה שהוא מברך עליה:"
   },
   {
    "dh": "מאן תנא כו' לא יצא",
    "text": " — אפי' בדיעבד ה\"מ כו':"
   },
   {
    "dh": "ברכה דרבנן היא",
    "text": " — דאמור רבנן (פסחים ד' ז:) כל המצות כולן מברך עליהן עובר לעשייתן:"
   },
   {
    "dh": "וממאי דר' יוסי היא",
    "text": " — קס\"ד האי דמוקמי לה כר' יוסי משום דסבירא לן דר' יהודה לכתחלה נמי מכשיר:"
   },
   {
    "dh": "דלמא ר' יהודה היא",
    "text": " — וק\"ש נמי דיעבד אין לכתחלה לא. ה\"ג ול\"ג אפילו:"
   },
   {
    "dh": "משום ר' יוסי",
    "text": " — להודיעך כחו דאפי' דיעבד נמי לא יצא:"
   },
   {
    "dh": "בלבו",
    "text": " — שלא השמיע לאזנו:"
   },
   {
    "dh": "ואי ר' יוסי דיעבד נמי לא",
    "text": " — דהא בהמ\"ז דאורייתא היא ואכלת ושבעת וברכת (דברים ח׳:י׳):"
   },
   {
    "dh": "אלא מאי ר' יהודה",
    "text": " — וק\"ש דיעבד אין לכתחלה לא והא דתרומה וברכת המזון דר' יהודה:"
   },
   {
    "dh": "אלא רבי יהודה לכתחלה קאמר",
    "text": " — והא דרבי יהודה בריה דר' שמעון בן פזי ר' יהודה היא ודתרומה ר' יוסי היא ומודה הוא דברכות דרבנן דיעבד שפיר דמי והא דברכת המזון ר' יהודה היא משמיה דרביה ר' אלעזר בן עזריה דאומר צריך שישמיע לאזנו וכל צריך לכתחלה משמע הא דיעבד שפיר דמי:"
   },
   {
    "dh": "אחר כוונת הלב כו'",
    "text": " — ואפי' לכתחלה נמי א\"צ:"
   },
   {
    "dh": "השתא דאתית להכי",
    "text": " — דאשמעת לן פלוגתא דר\"מ:"
   },
   {
    "dh": "אפילו תימא ר' יהודה",
    "text": " — דאמר בק\"ש נמי יצא דיעבד אין לכתחלה לא והא דברכת המזון ודתרומה רבי יהודה היא ודקא קשיא לך דר' יהודה בריה דר\"ש בן פזי מני ר\"מ היא דמכשר לכתחלה:"
   },
   {
    "dh": "מאן תנא חרש דיעבד נמי לא",
    "text": " — דקתני גבי שוטה:"
   },
   {
    "dh": "לא יצא",
    "text": " — דיעבד הוא:"
   }
  ],
  "tosafot": [
   {
    "dh": "אמאן דמהדר אמיא בעידן ק\"ש",
    "text": " — ויש ספרים דגרסי הני מילי לק\"ש אבל לתפלה לא דקאמר רשב\"ל (פסחים מו.) לגבל ולתפלה ד' מילין ונראה דלא גרסינן ליה דהוא הדין לענין צלותא נמי מטעם שלא יעבור זמן תפלה דמאי שנא ק\"ש מתפלה וגם יש לקמן פרק מי שמתו (ברכות ד' כב.) בטלוה לנטילותא כדרב חסדא דלייט אמאן דמהדר אמיא בעידן צלותא ומדלא הזכיר שם ק\"ש משמע דבכל ענין מותר וההיא דרשב\"ל דאמר ולתפלה ד' מילין פירש רש\"י להתפלל שם במנין:"
   },
   {
    "dh": "דילמא ר' יהודה היא",
    "text": " — וא\"ת והלא אין נזכר ר' יהודה ברישא. וי\"ל דפשיטא מדסיפא ר' יהודה רישא נמי ר' יהודה ופליגי במילתא דר' יהודה:"
   },
   {
    "dh": "להודיעך כחו דרבי יוסי",
    "text": " — וא\"ת לשמעינן כחו דרבי יהודה דכח דהתירא עדיף. וי\"ל כיון דרבי יהודה לא דריש השמע לאזנך אין כאן שום חדוש ופשיטא דלכתחלה ומהיכא תיתי לאוסרו אי שרי דיעבד הוא הדין לכתחלה:"
   },
   {
    "dh": "אי ר' יוסי דיעבד נמי לא",
    "text": " — וא\"ת לעולם אימא לך רבי יוסי היא וברכת המזון שאני דלא כתיב ביה שמע דבשלמא תרומה דלעיל ומגילה דלקמן שהן מדרבנן יש לדמותם לק\"ש שתקנו שצריך שישמיע לאזנו כמו בק\"ש ותקנו ממש שלא יצא כמו בק\"ש אבל בבהמ\"ז שהיא מדאורייתא כיון דלא כתיב ביה שמע למה יש לנו לתקן שלא יצא אם לא השמיע לאזנו כיון דמה\"ת יצא. וי\"ל כיון שתקנו שצריך להשמיע לאזנו כמו בק\"ש הואיל ומדרבנן מיהא צריך להשמיע אין לחלק בין ק\"ש ובין בהמ\"ז דאפילו בדיעבד אית לן למימר שלא יצא:"
   },
   {
    "dh": "ורבי יהודה מכשיר בקטן",
    "text": " — וא\"ת באיזה קטן מיירי אי בקטן שלא הגיע לחנוך הא אמרינן בפרק ראוהו בית דין (ר\"ה ד' כט.) שכל שאינו מחוייב בדבר אינו מוציא את הרבים ומ\"ט דר' יהודה דמכשיר ואי בהגיע לחנוך מאי טעמייהו דרבנן דאסרי הרי קריאת מגילה דרבנן ואמרי' קטן שהגיע לחנוך מדרבנן כגדול ופוטר דרבנן כדאמר לקמן בפ' מי שמתו (ברכות ד' כ:) דקטן מוציא אביו שלא אכל אלא כזית דהיינו דרבנן. וי\"ל שאני ברכת המזון שהיא חומרא יתירתא יותר מדאורייתא ובקל נפטרים ממנה כדאמרי' לקמן (שם) והם החמירו על עצמם או בכזית או בכביצה א\"נ התם ליכא בקטן אלא חד דרבנן דמיירי שהקטן אכל כדי שביעה לכך אתי דרבנן ומוציא דרבנן אבל הכא דגבי קטן איכא תרתי דרבנן דהמגילה דרבנן והקטן דרבנן אינו יכול להוציא היכא דליכא אלא חד דרבנן:"
   }
  ],
  "translations": []
 },
 {
  "id": "15b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "טו",
  "amud": "ב",
  "dafEn": "15b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "דילמא רבי יהודה היא ולכתחלה הוא דלא הא דיעבד שפיר דמי לא ס\"ד דקתני חרש דומיא דשוטה וקטן מה שוטה וקטן דיעבד נמי לא אף חרש דיעבד נמי לא ודילמא הא כדאיתא והא כדאיתא ומי מצית לאוקמה כרבי יהודה והא מדקתני סיפא רבי יהודה מכשיר בקטן מכלל דרישא לאו רבי יהודה היא ודילמא כולה ר' יהודה היא ותרי גווני קטן וחסורי מחסרא והכי קתני הכל כשרין לקרות את המגילה חוץ מחש\"ו בד\"א בקטן שלא הגיע לחנוך אבל קטן שהגיע לחנוך אפילו לכתחלה כשר דברי רבי יהודה שרבי יהודה מכשיר בקטן במאי אוקימתא כר\"י ודיעבד אין לכתחלה לא אלא הא דתני ר\"י בריה דר' שמעון בן פזי חרש המדבר ואינו שומע תורם לכתחלה מני לא ר' יהודה ולא ר' יוסי אי ר' יהודה דיעבד אין לכתחלה לא אי ר' יוסי דיעבד נמי לא אלא מאי ר' יהודה ואפילו לכתחלה נמי אלא הא דתניא לא יברך אדם ברכת המזון בלבו ואם בירך יצא מני לא ר' יהודה ולא ר' יוסי אי רבי יהודה הא אמר אפי' לכתחלה נמי ואי ר' יוסי הא אמר אפי' דיעבד נמי לא לעולם ר' יהודה היא ואפילו לכתחלה נמי ולא קשיא הא דידיה הא דרביה דתניא א\"ר יהודה משום ר' אלעזר בן עזריה הקורא את שמע צריך שישמיע לאזנו שנאמר שמע ישראל אמר לו ר' מאיר הרי הוא אומר אשר אנכי מצוך היום על לבבך אחר כונת הלב הן הן הדברים השתא דאתית להכי אפי' תימא ר' יהודה כרביה ס\"ל ולא קשיא הא ר' יהודה הא רבי מאיר א\"ר חסדא אמר רב שילא הלכה כרבי יהודה שאמר משום רבי אלעזר בן עזריה והלכה כרבי יהודה וצריכא דאי אשמעינן הלכה כר' יהודה הוה אמינא אפילו לכתחלה קמ\"ל הלכה כר' יהודה שאמר משום ר' אלעזר בן עזריה ואי אשמעינן הלכה כרבי יהודה שאמר משום ר' אלעזר בן עזריה הוה אמינא צריך ואין לו תקנה קמ\"ל הלכה כרבי יהודה אמר רב יוסף מחלוקת בק\"ש אבל בשאר מצות דברי הכל לא יצא דכתיב (דברים כז, ט) הסכת ושמע ישראל מיתיבי לא יברך אדם ברכת המזון בלבו ואם בירך יצא אלא אי אתמר הכי אתמר אמר רב יוסף מחלוקת בק\"ש דכתיב שמע ישראל אבל בשאר מצות דברי הכל יצא והכתיב הסכת ושמע ישראל ההוא בדברי תורה כתיב: קרא ולא דקדק באותיותיה: א\"ר טבי א\"ר יאשיה הלכה כדברי שניהם להקל: וא\"ר טבי א\"ר יאשיה מאי דכתיב (משלי ל, טו) שלש הנה לא תשבענה שאול ועוצר רחם וכי מה ענין שאול אצל רחם אלא לומר לך מה רחם מכניס ומוציא אף שאול מכניס ומוציא והלא דברים ק\"ו ומה רחם שמכניסין בו בחשאי מוציאין ממנו בקולי קולות שאול שמכניסין בו בקולי קולות אינו דין שמוציאין ממנו בקולי קולות מכאן תשובה לאומרים אין תחיית המתים מן התורה: תני ר' אושעיא קמיה דרבא וכתבתם הכל בכתב אפילו צואות א\"ל דאמר לך מני ר' יהודה היא דאמר גבי סוטה אלות כותב צואות אינו כותב והתם הוא דכתיב (במדבר ה, כג) וכתב את האלות האלה אבל הכא דכתיב וכתבתם אפי' צואות נמי אטו טעמיה דר' יהודה משום דכתיב וכתב טעמיה דר' יהודה משום דכתיב אלות אלות אין צואות לא אצטריך סד\"א נילף כתיבה כתיבה מהתם מה התם אלות אין צואות לא אף הכא נמי צואות לא כתב רחמנא וכתבתם אפי' צואות: תני רב עובדיה קמיה דרבא ולמדתם שיהא למודך תם שיתן ריוח בין הדבקים עני רבא בתריה כגון על לבבך על לבבכם בכל לבבך בכל לבבכם עשב בשדך ואבדתם מהרה הכנף פתיל אתכם מארץ א\"ר חמא ברבי חנינא כל הקורא ק\"ש ומדקדק באותיותיה מצננין לו גיהנם שנאמר (תהלים סח, טו) בפרש שדי מלכים בה תשלג בצלמון אל תקרי בפרש אלא בפרש אל תקרי בצלמון אלא בצלמות: ואמר רבי חמא ברבי חנינא למה נסמכו",
  "rashi": [
   {
    "dh": "ולכתחלה הוא דלא הא דיעבד שפיר דמי",
    "text": " — ובהא איכא למימר דאפילו ר' יהודה מודה דלא שמעינן דפליג בק\"ש אלא דיעבד:"
   },
   {
    "dh": "מדסיפא ר' יהודה",
    "text": " — דקתני ר' יהודה מכשיר בקטן:"
   },
   {
    "dh": "ודילמא כולה ר' יהודה היא וחסורי מחסרא והכי קתני הכל כשרין לקרות את המגילה חוץ מחש\"ו",
    "text": " — והא כדאיתא והא כדאיתא:"
   },
   {
    "dh": "בד\"א",
    "text": " — דקטן לכתחלה לא בקטן שלא הגיע לחנוך אבל הגיע לחנוך אפי' לכתחלה שרי. הגיע לחנוך מצות כגון בן תשע ובן עשר כדאמרינן ביומא פרק בתרא (ד' פב.):"
   },
   {
    "dh": "במאי אוקימתא",
    "text": " — למתניתין דמגילה:"
   },
   {
    "dh": "כרבי יהודה",
    "text": " — ואשמעת לן דכי אמר ר' יהודה בק\"ש יצא דיעבד קאמר ולא לכתחלה:"
   },
   {
    "dh": "אלא הא דתני כו' תורם",
    "text": " — ואע\"פ שהוא צריך לברך ואין אזניו שומעות מני:"
   },
   {
    "dh": "אלא מאי",
    "text": " — בעית למימר דר' יהודה היא דק\"ש אפי' לכתחלה קאמר כי היכי דתיקו הא דר' יהודה בריה דר' שמעון בן פזי אליביה והאי דאפליגו בדיעבד להודיעך כחו דר' יוסי:"
   },
   {
    "dh": "אלא הא דתניא כו'",
    "text": " — מני:"
   },
   {
    "dh": "לעולם ר' יהודה אפי' לכתחלה מכשיר",
    "text": " — ודמגילה רבי יוסי היא ואפי' דיעבד נמי פסיל והא דתורם לכתחלה ר' יהודה והא דברכת המזון דרביה הוא דאמר ר' יהודה משום רבי אלעזר בן עזריה צריך להשמיע לאזנו והאי לישנא לכתחלה משמע אבל דיעבד יצא:"
   },
   {
    "dh": "השתא דאתית להכי",
    "text": " — דאשמעתן הא פלוגתא דר\"מ:"
   },
   {
    "dh": "אפי' תימא ר' יהודה",
    "text": " — דאמר בק\"ש יצא דיעבד אין לכתחלה לא ומתני' דמגילה לכתחלה היא דפסלה לחרש ור' יהודה היא והא דברכת המזון נמי ר' יהודה היא ודקא קשיא לך הא דר\"י בריה דר' שמעון בן פזי מני ר\"מ היא דמכשיר לכתחלה:"
   },
   {
    "dh": "הלכה כר' יהודה",
    "text": " — דק\"ש שלא השמיע לאזנו יצא:"
   },
   {
    "dh": "הוה אמינא",
    "text": " — דרבי יהודה לכתחלה נמי אמר והאי דאפליג דיעבד משום דרבי יוסי:"
   },
   {
    "dh": "ואין לו תקנה",
    "text": " — אפילו בדיעבד:"
   },
   {
    "dh": "בשאר מצות",
    "text": " — בכל הברכות:"
   },
   {
    "dh": "ההוא",
    "text": " — הסכת ושמע בדברי תורה כתיב כדאמרי' בפ' הרואה (ברכות ד' סג:) כתתו עצמכם על דברי תורה:"
   },
   {
    "dh": "ולא דקדק",
    "text": " — שמגמגם:"
   },
   {
    "dh": "הלכה כדברי שניהם להקל",
    "text": " — הלכה כר' יהודה דלא בעי שמיעה והלכה כר' יוסי דלא בעי דקדוק:"
   },
   {
    "dh": "שאול ועוצר רחם",
    "text": " — פסוק הוא בספר משלי שלש הנה לא תשבענה:"
   },
   {
    "dh": "רחם מכניס",
    "text": " — הזרע ומוציא הולד:"
   },
   {
    "dh": "שאול",
    "text": " — קבר:"
   },
   {
    "dh": "שמכניסין בו בקולי קולות",
    "text": " — של בכי ומספד:"
   },
   {
    "dh": "וכתבתם",
    "text": " — שתהא כתיבה תמה ושלימה:"
   },
   {
    "dh": "ואפילו צואות",
    "text": " — שבפרשה כגון וקשרתם וכתבתם צריך לכתוב בתפילין ומזוזות:"
   },
   {
    "dh": "דאמר לך מני",
    "text": " — הא דאצטריך ליה קרא לרבות צואות לכתיבה:"
   },
   {
    "dh": "רבי יהודה היא",
    "text": " — דשמעינן גבי כתיבת פרשת סוטה משום דלא כתיב ביה וכתבתם אלא וכתב דאמר אלות אין צואות לא כגון והשביע אותה הכהן ואמר הכהן דתנן (סוטה ד' יז) רבי יהודה אומר כל עצמו אינו כותב אלא יתן ה' אותך לאלה ולשבועה:"
   },
   {
    "dh": "משום אלה הוא",
    "text": " — דמשמע מיעוטא הא לא כתיב מיעוטא הוה משמע כולה מלתא מוכתב והכא דליכא מיעוטא למה ליה לרבויינהו מוכתבתם:"
   },
   {
    "dh": "בין הדבקים",
    "text": " — תיבות המדובקות זו בזו אם אינך מפרידן כשהתיבה השניה מתחלת באות שהתיבה שמלפניה נגמרת הוא קורא אותן שתי אותיות באות אחת אם אינו מתעסק ליתן ריוח ביניהן כדמפרש רבא:"
   },
   {
    "dh": "בפרש שדי",
    "text": " — אם תפרש שדי ותבדיל תיבות של מלכות שמים מלכים בה תשלג בצלמון התורה אשר בה מלכים ימלוכו תשלג ותצנן לך את צל המות:"
   }
  ],
  "tosafot": [
   {
    "dh": "דילמא ר' יהודה וחסורי מחסרא וכו'",
    "text": " — תימה דאין זה בשום מקום דקאמר חסורי מחסרא ולאוקמי אליבא דחד תנא ועוד לוקמיה כר' יוסי ובלא חסורי מחסרא. וי\"ל משום דלקמן פסקינן כר' יהודה לכך ניחא לאוקמיה אליבא דר' יהודה:"
   },
   {
    "dh": "אבל בשאר מצות יצא",
    "text": " — וא\"ת הא לעיל אמר דשאר מצות ילפינן מק\"ש כגון תרומה ומגילה וברכת המזון. וי\"ל דרב יוסף פליג אסוגיא דלעיל:"
   },
   {
    "dh": "בין הדבקים",
    "text": " — רב אלפס מוסיף כגון וחרה אף דאם לא יתן ריוח אז נראה כמו וחרף וכן מוסיף וראיתם אותו וזכרתם את ועשיתם את שצריך ליתן ריוח בין מ\"ם שבסוף תיבה לאל\"ף שבתחלת תיבה שאחרי' וכן צריך להתיז זיי\"ן של תזכרו שלא ישמע שי\"ן למען שיהיה לנו שכר מצות ואין לנו לעשו' על מנת לקבל פרס:"
   }
  ],
  "translations": []
 },
 {
  "id": "16a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "טז",
  "amud": "א",
  "dafEn": "16a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אהלים לנחלים דכתיב (במדבר כד, ו) כנחלים נטיו כגנות עלי נהר כאהלים נטע וגו' לומר לך מה נחלים מעלין את האדם מטומאה לטהרה אף אהלים מעלין את האדם מכף חובה לכף זכות: הקורא למפרע לא יצא וכו': רבי אמי ורבי אסי הוו קא קטרין ליה גננא לר' אלעזר אמר להו אדהכי והכי איזיל ואשמע מלתא דבי מדרשא ואיתי ואימא לכו אזל אשכחיה לתנא דקתני קמיה דר' יוחנן קרא וטעה ואינו יודע להיכן טעה באמצע הפרק יחזור לראש בין פרק לפרק יחזור לפרק ראשון בין כתיבה לכתיבה יחזור לכתיבה ראשונה אמר ליה ר' יוחנן לא שנו אלא שלא פתח בלמען ירבו ימיכם אבל פתח בלמען ירבו ימיכם סרכיה נקט ואתי אתא ואמר להו אמרו ליה אלו לא באנו אלא לשמוע דבר זה דיינו:  האומנין קורין בראש האילן ובראש הנדבך מה שאינן רשאין לעשות כן בתפלה חתן פטור מק\"ש לילה הראשונה ועד מוצאי שבת אם לא עשה מעשה ומעשה בר\"ג שנשא אשה וקרא לילה הראשונה אמרו לו תלמידיו למדתנו רבינו שחתן פטור מק\"ש אמר להם איני שומע לכם לבטל הימני מלכות שמים אפי' שעה אחת: גמ׳ ת\"ר האומנין קורין בראש האילן ובראש הנדבך ומתפללין בראש הזית ובראש התאנה ושאר כל האילנות יורדים למטה ומתפללין ובעל הבית בין כך ובין כך יורד למטה ומתפלל לפי שאין דעתו מיושבת עליו רמי ליה רב מרי ברה דבת שמואל לרבא תנן האומנין קורין בראש האילן ובראש הנדבך אלמא לא בעי כונה ורמינהי הקורא את שמע צריך שיכוין את לבו שנאמר שמע ישראל ולהלן הוא אומר (דברים כז, ט) הסכת ושמע ישראל מה להלן בהסכת אף כאן בהסכת אשתיק א\"ל מידי שמיע לך בהא א\"ל הכי אמר רב ששת והוא שבטלין ממלאכתן וקורין והתניא בית הלל אומרים עוסקין במלאכתן וקורין לא קשיא הא בפרק ראשון הא בפרק שני ת\"ר הפועלים שהיו עושין מלאכה אצל בעל הבית קורין ק\"ש ומברכין לפניה ולאחריה ואוכלין פתן ומברכין לפניה ולאחריה ומתפללין תפלה של שמונה עשרה אבל אין יורדין לפני התיבה ואין נושאין כפיהם והתניא מעין י\"ח אמר רב ששת לא קשיא הא ר\"ג הא ר' יהושע אי ר' יהושע מאי איריא פועלים אפילו כל אדם נמי אלא אידי ואידי ר\"ג ולא קשיא כאן בעושין בשכרן כאן בעושין בסעודתן והתניא הפועלים שהיו עושים מלאכה אצל בעל הבית קורין ק\"ש ומתפללין ואוכלין פתן ואין מברכים לפניה אבל מברכין לאחריה שתים כיצד ברכה ראשונה כתקונה שניה פותח בברכת הארץ וכוללין בונה ירושלים בברכת הארץ במה דברים אמורים בעושין בשכרן אבל עושין בסעודתן או שהיה בעל הבית מיסב עמהן מברכין כתיקונה: חתן פטור מק\"ש: תנו רבנן בשבתך בביתך פרט לעוסק במצוה ובלכתך בדרך פרט לחתן מכאן אמרו הכונס את הבתולה פטור ואת האלמנה חייב מאי משמע אמר רב פפא כי דרך מה דרך רשות אף הכא נמי רשות מי לא עסקינן דקאזיל לדבר מצוה ואפילו הכי אמר רחמנא ליקרי אם כן לימא קרא בלכת מאי בלכתך שמע מינה בלכת דידך הוא דמחייבת הא דמצוה פטירת",
  "rashi": [
   {
    "dh": "אהלים לנחלים",
    "text": " — כנחלים נטיו כאהלים נטע:"
   },
   {
    "dh": "אף [אהלים]",
    "text": " — בתי מדרשות. אהלים לשון נטיעה נופלת בהם שנאמר ויטע אהלי אפדנו (דניאל יא):"
   },
   {
    "dh": "קטרין ליה גננא",
    "text": " — קושרין לו חופה להשיאו אשה:"
   },
   {
    "dh": "יחזור לראש",
    "text": " — כגון שהיה יודע שבפרק זה טעה ודלג אבל אינו יודע באיזה מקום בו טעה:"
   },
   {
    "dh": "בין פרק לפרק",
    "text": " — שיודע שגמר הפרשה וצריך להתחיל פרשה אחרת ואינו יודע באיזה מהן:"
   },
   {
    "dh": "יחזור לפרק ראשון",
    "text": " — להפסק ראשון והיה אם שמוע:"
   },
   {
    "dh": "בין כתיבה לכתיבה",
    "text": " — שיודע שצריך לומר וכתבתם ואינו יודע אם ראשון אם שני:"
   },
   {
    "dh": "וא\"ר יוחנן",
    "text": " — לתנא וכו':"
   },
   {
    "dh": "סרכיה נקט",
    "text": " — אין לטעות מכאן עד אמת ויציב וא\"צ לחזור אלא לאמת שהפרשה שגורה בפיו:"
   },
   {
    "dh": "מתני' האומנין",
    "text": " — שהם עסוקים במלאכתן בראש האילן או בראש הנדבך והגיע זמן ק\"ש קורין לשם מיד:"
   },
   {
    "dh": "נדבך",
    "text": " — בנין של אבנים כמו נדבכין די אבן גלל (עזרא ו׳:ד׳):"
   },
   {
    "dh": "מה שאינן רשאין לעשות כן בתפלה",
    "text": " — דצלותא רחמי היא ובעי כוונה הלכך אין מתפללין בראש האילן ובראש הנדבך דמסתפי דילמא נפלי דאין יכולין לעמוד שם אלא על ידי הדחק ומחמת בעתותא לא מצי מכווני:"
   },
   {
    "dh": "תנן האומנין קורין בראש האילן",
    "text": " — אפי' בזמן שהן עסוקין אלמא לא בעי כוונה:"
   },
   {
    "dh": "גמ' ומתפללין בראש הזית ובראש התאנה",
    "text": " — בזמן שעוסקין בהן מפני שענפיהם מרובים ויכולין לעמוד שם שלא בדוחק ואין שם פחד ליפול לפיכך מתפללין בראשם אבל בשאר אילנות אין מתפללין:"
   },
   {
    "dh": "בין כך ובין כך",
    "text": " — כלומר בין מתאנה בין משאר אילנות:"
   },
   {
    "dh": "יורד ומתפלל",
    "text": " — דהא אינו משועבד למלאכה שהוא ברשות עצמו:"
   },
   {
    "dh": "לפי שאין דעתו מיושבת עליו",
    "text": " — מבעתותו ואם הקלו אצל פועלים מפני בטול מלאכה לא הקלו אצל בעל הבית:"
   },
   {
    "dh": "ברה דבת שמואל",
    "text": " — בכמה מקומות קרי ליה בר רחל ובת שמואל היתה ונשבית לבין העמים כדאמר בכתובות (דף כג.) ובא עליה אחד ונתעברה הימנו ואח\"כ נתגייר ושמיה איסור כדאמרי' בב\"ב (דף קמט.) רב מרי בריה הורתו שלא בקדושה הוה לכך לא היה נקרא על שם אביו:"
   },
   {
    "dh": "תנן האומנין קורין בראש האילן",
    "text": " — אפ' בזמן שהן עסוקין אלמא לא בעי כוונה:"
   },
   {
    "dh": "שבטלין ממלאכתן וקורין",
    "text": " — כדי שיהו קורין בכוונה רשאין להיבטל ממלאכתן:"
   },
   {
    "dh": "פרק ראשון",
    "text": " — פרשת שמע בעי כוונה:"
   },
   {
    "dh": "קורין את שמע ומברכין לפניה ולאחריה",
    "text": " — כתקונה וכן בזמן תפלה:"
   },
   {
    "dh": "אבל אין יורדין לפני התיבה",
    "text": " — אינן רשאין ליבטל ממלאכתן ולירד לפני התיבה לעשות שליח צבור שיש שם בטול מלאכה יותר מדאי:"
   },
   {
    "dh": "מעין שמונה עשרה",
    "text": " — הביננו לדעת דרכיך כו' שכולל י\"א ברכות בברכה אחת וג' ראשונות וג' אחרונות כהלכתן:"
   },
   {
    "dh": "הא ר\"ג הא רבי יהושע",
    "text": " — דתנן בפרק תפלת השחר (ברכות דף כח:) ר\"ג אומר בכל יום ויום מתפלל אדם י\"ח ברכות רבי יהושע אומר מעין י\"ח:"
   },
   {
    "dh": "עושין בשכרן",
    "text": " — שנוטלין שכר פעולתן לבד סעודתן צריכין למהר המלאכה ומתפללין מעין י\"ח:"
   },
   {
    "dh": "והתניא",
    "text": " — בניחותא דיש חלוק בין עושין בשכרן לעושין בסעודתן:"
   },
   {
    "dh": "ואין מברכין לפניה",
    "text": " — שאינה מן התורה:"
   },
   {
    "dh": "אבל מברכין לאחריה",
    "text": " — שהיא מן התורה דכתיב ואכלת ושבעת וברכת (לקמן ברכות דף מח:):"
   },
   {
    "dh": "וכוללין",
    "text": " — שני ברכות באחת שברכת הארץ ובנין ירושלים דומות:"
   },
   {
    "dh": "אבל עושין בסעודתן",
    "text": " — בשביל האכילה לבדה מתפללין י\"ח:"
   },
   {
    "dh": "בשבתך בביתך פרט לעוסק במצוה",
    "text": " — כבר פירשתיה בפרק ראשון (דף יא.):"
   }
  ],
  "tosafot": [
   {
    "dh": "אהלים לנחלים",
    "text": " — פי' הקונטרס דכתיב כנחלים נטיו כאהלים נטע. ולי נראה דאהלים דהאי קרא לאו לשון אהל אלא לשון בשמים אלא נראה מדסמיך מה טובו אוהליך לכנחלים נטיו:",
    "en": "And he ends with the blessing over the land: Even though it is from Torah writ, the power is in the hands of the sages to uproot something from the Torah, because they are occupied with the work of the Master."
   },
   {
    "dh": "הקורא את שמע ואינו יודע להיכן טעה חוזר לראש",
    "text": " — פי' מטעם שאינו יודע מהיכן טעה אבל אם היה יודע מהיכן טעה שדלג תיבה או פסוק אינו צריך לחזור אלא מאותו פסוק ואילך וכן בהלל ומגילה:"
   },
   {
    "dh": "מעשה בר\"ג שנשא אשה וקרא ק\"ש בלילה ראשונה",
    "text": " — לאו מעשה לסתור הוא דקמ\"ל אם גדול הוא ובוטח בעצמו שיוכל להתכוין והוא ראוי ליטול את השם הרשות בידו:"
   },
   {
    "dh": "לפי שאין דעתו מיושבת עליו",
    "text": " — ואם תאמר תיפוק ליה משום דאמרינן לעיל (ברכות דף י:) לא יעמוד אדם במקום גבוה ויתפלל. ויש לומר דהתם מיירי על גבי כסא או ספסל אבל באילן שעלה שם לעשות מלאכתו הוי כמו עלייה:"
   },
   {
    "dh": "הא בפרק ראשון",
    "text": " — לאו דוקא נקט פרק א'. דהיינו אליבא דרבא ורבא אמר לעיל (ברכות יג:) פסוק ראשון לבד והכי הלכתא:"
   },
   {
    "dh": "אפי' כל אדם נמי",
    "text": " — וא\"ת הא שאר כל אדם רשות ופועלים חובה. וי\"ל דפשיטא ליה כיון שיכול לומר מעין י\"ח אין זה שום חדוש אם הפועלים אומרים אפילו לכתחלה:"
   },
   {
    "dh": "וחותם בברכת הארץ",
    "text": " — אע\"ג דמדאורייתא הם. יש כח ביד חכמים לעקור דבר מן התורה הואיל וטרודים במלאכת בעל הבית:"
   }
  ],
  "translations": []
 },
 {
  "id": "16b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "טז",
  "amud": "ב",
  "dafEn": "16b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אי הכי מאי איריא הכונס את הבתולה אפי' כונס את האלמנה נמי הכא טריד והכא לא טריד אי משום טרדא אפילו טבעה ספינתו בים נמי אלמה אמר רבי אבא בר זבדא אמר רב אבל חייב בכל מצות האמורות בתורה חוץ מן התפילין שהרי נאמר בהן פאר שנאמר (יחזקאל כד, יז) פארך חבוש עליך וגו' אמרי התם טרדא דרשות הכא טרדא דמצוה:  רחץ לילה הראשון שמתה אשתו אמרו לו תלמידיו למדתנו רבינו שאבל אסור לרחוץ אמר להם איני כשאר בני אדם אסטניס אני וכשמת טבי עבדו קבל עליו תנחומין אמרו לו תלמידיו למדתנו רבינו שאין מקבלין תנחומין על העבדים אמר להם אין טבי עבדי כשאר כל העבדים כשר היה חתן אם רוצה לקרות קרית שמע לילה הראשון קורא רבן שמעון בן גמליאל אומר לא כל הרוצה ליטול את השם יטול: גמ׳ מ\"ט דרבן (שמעון בן) גמליאל קסבר אנינות לילה דרבנן דכתיב (עמוס ח, י) ואחריתה כיום מר ובמקום אסטניס לא גזרו ביה רבנן: וכשמת טבי עבדו וכו': ת\"ר עבדים ושפחות אין עומדין עליהם בשורה ואין אומרים עליהם ברכת אבלים ותנחומי אבלים מעשה ומתה שפחתו של רבי אליעזר נכנסו תלמידיו לנחמו כיון שראה אותם עלה לעלייה ועלו אחריו נכנס לאנפילון נכנסו אחריו נכנס לטרקלין נכנסו אחריו אמר להם כמדומה אני שאתם נכוים בפושרים עכשיו אי אתם נכוים אפילו בחמי חמין לא כך שניתי לכם עבדים ושפחות אין עומדין עליהם בשורה ואין אומרים עליהם ברכת אבלים ולא תנחומי אבלים אלא מה אומרים עליהם כשם שאומרים לו לאדם על שורו ועל חמורו שמתו המקום ימלא לך חסרונך כך אומרים לו על עבדו ועל שפחתו המקום ימלא לך חסרונך תניא אידך עבדים ושפחות אין מספידין אותן ר' יוסי אומר אם עבד כשר הוא אומרים עליו הוי איש טוב ונאמן ונהנה מיגיעו אמרו לו אם כן מה הנחת לכשרים: ת\"ר אין קורין אבות אלא לשלשה ואין קורין אמהות אלא לארבע אבות מאי טעמא אילימא משום דלא ידעינן אי מראובן קא אתינן אי משמעון קא אתינן אי הכי אמהות נמי לא ידעינן אי מרחל קא אתינן אי מלאה קא אתינן אלא עד הכא חשיבי טפי לא חשיבי תניא אידך עבדים ושפחות אין קורין אותם אבא פלוני ואמא פלונית ושל ר\"ג היו קורים אותם אבא פלוני ואמא פלונית מעשה לסתור משום דחשיבי: א\"ר אלעזר מאי דכתיב (תהלים סג, ה) כן אברכך בחיי בשמך אשא כפי כן אברכך בחיי זו ק\"ש בשמך אשא כפי זו תפלה ואם עושה כן עליו הכתוב אומר (תהלים סג, ו) כמו חלב ודשן תשבע נפשי ולא עוד אלא שנוחל שני עולמים העוה\"ז והעולם הבא שנאמר (תהלים סג, ו) ושפתי רננות יהלל פי: ר' אלעזר בתר דמסיים צלותיה אמר הכי יהי רצון מלפניך ה' אלהינו שתשכן בפורינו אהבה ואחוה ושלום וריעות ותרבה גבולנו בתלמידים ותצליח סופנו אחרית ותקוה ותשים חלקנו בגן עדן ותקננו בחבר טוב ויצר טוב בעולמך ונשכים ונמצא יחול לבבנו ליראה את שמך ותבא לפניך קורת נפשנו לטובה. רבי יוחנן בתר דמסיים צלותיה אמר הכי יהי רצון מלפניך ה' אלהינו שתציץ בבשתנו ותביט ברעתנו ותתלבש ברחמיך ותתכסה בעזך ותתעטף בחסידותך ותתאזר בחנינותך ותבא לפניך מדת טובך וענותנותך. ר' זירא בתר דמסיים צלותיה אמר הכי יהי רצון מלפניך ה' אלהינו שלא נחטא ולא נבוש ולא נכלם מאבותינו ר' חייא בתר דמצלי אמר הכי יהי רצון מלפניך ה' אלהינו שתהא תורתך אומנותנו ואל ידוה לבנו ואל יחשכו עינינו. רב בתר צלותיה אמר הכי יהי רצון מלפניך ה' אלהינו שתתן לנו חיים ארוכים חיים של שלום חיים של טובה חיים של ברכה חיים של פרנסה חיים של חלוץ עצמות חיים שיש בהם יראת חטא חיים שאין בהם בושה וכלימה חיים של עושר וכבוד חיים שתהא בנו אהבת תורה ויראת שמים חיים שתמלא לנו את כל משאלות לבנו לטובה. רבי בתר צלותיה אמר הכי יהי רצון מלפניך ה' אלהינו ואלהי אבותינו שתצילנו מעזי פנים ומעזות פנים מאדם רע ומפגע רע מיצר רע מחבר רע משכן רע ומשטן המשחית ומדין קשה ומבעל דין קשה בין שהוא בן ברית בין שאינו בן ברית ואע\"ג דקיימי קצוצי עליה דרבי. רב ספרא בתר צלותיה אמר הכי יהי רצון מלפניך ה' אלהינו שתשים שלום",
  "rashi": [
   {
    "dh": "רחץ לילה הראשון שמתה אשתו",
    "text": " — ונקברה בו ביום ואע\"פ שאבל אסור ברחיצה הוא רחץ כדאמר טעמא אסטניס אני והוא אדם מעונג ומפונק:"
   },
   {
    "dh": "לא כל הרוצה וכו'",
    "text": " — אם לא הוחזק חכם וחסיד לרבים אין זה אלא גאוה שמראה בעצמו שיכול לכוין לבו:"
   },
   {
    "dh": "גמ' קסבר אנינות לילה דרבנן",
    "text": " — ואע\"פ שהיה ליל יום המיתה וכתיבא אנינות באורייתא דכתיב לא אכלתי באוני ממנו (דברים כ״ו:י״ד) ופחות מיום אחד אינו אנינות דילפי רבנן מואחריתה כיום מר קסבר ר\"ג אין לילה של אחריו עם היום אלא מדרבנן הוא כשאר ימי האבל וגבי אסטניס לא גזור בה רבנן פלוגתייהו דתנאי היא בזבחים (ד' צט:) באנינות לילה אי מדאורייתא אי מדרבנן:"
   },
   {
    "dh": "אין עומדין עליהם בשורה",
    "text": " — כשחוזרים מבית הקברות היו עושים שורות סביב האבל ומנחמין אותו ואין שורה פחותה מעשרה:"
   },
   {
    "dh": "ברכת אבלים",
    "text": " — ברכת רחבה שמברין אותו סעודה ראשונה משל אחרים ומברכין שם ברכת אבלים והיא מפורשת בכתובות פרק ראשון (ד' ח.):"
   },
   {
    "dh": "לאנפילון",
    "text": " — בית קטן שלפני טרקלין הגדול:"
   },
   {
    "dh": "נכוים בפושרים",
    "text": " — כלומר סבור הייתי שתבינו דבר ברמז מועט שראיתם אותי סר מעליכם ליכנס לאנפילון:"
   },
   {
    "dh": "הוי",
    "text": " — לשון גניחה וצעקה:"
   },
   {
    "dh": "אין קורין אבות",
    "text": " — לישראל:"
   },
   {
    "dh": "אלא לשלשה",
    "text": " — אברהם יצחק ויעקב לאפוקי שבטים:"
   },
   {
    "dh": "אלא לארבע",
    "text": " — שרה רבקה רחל ולאה:"
   },
   {
    "dh": "אבא פלוני אמא פלונית",
    "text": " — לא בבניהם קאמר אלא בשאר בני אדם כעין שאנו קורין עכשיו מר פלוני מרת פלונית כך היו רגילין לומר אבא פלוני ואמא פלונית:"
   },
   {
    "dh": "כן אברכך",
    "text": " — וכמו חלב ודשן. תרי קראי דסמיכי להדדי:"
   },
   {
    "dh": "רננות",
    "text": " — שתים:"
   },
   {
    "dh": "בפורינו",
    "text": " — בגורלנו:"
   },
   {
    "dh": "אחרית ותקוה",
    "text": " — שתהא אחריתנו טובה ונראה מה שקוינו:"
   },
   {
    "dh": "ותקננו",
    "text": " — לשון תקון:"
   },
   {
    "dh": "ונשכים ונמצא יחול לבבנו ליראה את שמך",
    "text": " — שלא יתגבר עלינו יצר הרע בהרהור הלילה לסור מאחריך ביום אלא כשנשכים בכל בקר נמצא לבבנו מייחל לך:"
   },
   {
    "dh": "ותבא לפניך קורת נפשנו",
    "text": " — כלומר ספוק צרכנו וקורת רוחנו:"
   },
   {
    "dh": "ותביט ברעתנו",
    "text": " — תדע ותתן לבך ברעה הבאה עלינו:"
   },
   {
    "dh": "מעזי פנים",
    "text": " — שלא יתגרו בי:"
   },
   {
    "dh": "ומעזות פנים",
    "text": " — שלא יוציאו עלי לעז ממזרות:"
   },
   {
    "dh": "שאינו בן ברית",
    "text": " — שאינו מהול:"
   },
   {
    "dh": "ואע\"ג דקיימי קצוצי עליה דרבי",
    "text": " — שהיו שוטרים עומדין במצות אנטונינוס להכות ולהנקם בכל העומדים עליו:"
   }
  ],
  "tosafot": [
   {
    "dh": "אי הכי מאי איריא בתולה",
    "text": " — אי אמרת בשלמא דטעמא משום טרדא שפיר אלא מאחר שהוא תולה הטעם במצוה אלמנה נמי:"
   },
   {
    "dh": "אסטניס אני",
    "text": " — ואיכא צער אם לא היה רוחץ דאינו אסור לרחוץ בימי אבלו אלא משום תענוג וגם לחוף ראשו אי אית ליה ערבוביא ברישיה שרי אפי' תוך שבעה וכן התיר רבינו שמואל ליולדת אבלה לרחוץ תוך שבעה ולרחוץ נמי בתשעה באב וכן משמע נמי במס' יומא (ד' עז:) מי שיש לו חטטין בראשו סך כדרכו ביום הכפורים ואינו חושש אע\"ג דסיכה כשתיה ביוה\"כ וכן משמע בירושלמי אבל אסור ברחיצה הדא דתימא ברחיצה של תענוג אבל ברחיצה שאינה של תענוג מותר כהדא דאיתמר מי שיש לו חטטין ברישיה וכו':"
   },
   {
    "dh": "אנינות לילה דרבנן",
    "text": " — וא\"ת והרי אונן נמי אינו נוהג אלא במעשר אבל לענין רחיצה דאבילות דרבנן הוא וא\"כ לעולם אימא לך דאנינות לילה דאורייתא הוי גבי מעשר. ויש לומר דאי איתא דהוי דאורייתא גבי מעשר. גבי שאר דברים דרבנן נמי הוה לן למגזר דכל דתקון רבנן כעין דאורייתא תקון:"
   },
   {
    "dh": "אין עומדין עליהם בשורה",
    "text": " — דילמא אתי לאסוקי ליוחסין:"
   }
  ],
  "translations": []
 },
 {
  "id": "17a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יז",
  "amud": "א",
  "dafEn": "17a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בפמליא של מעלה ובפמליא של מטה ובין התלמידים העוסקים בתורתך בין עוסקין לשמה בין עוסקין שלא לשמה וכל העוסקין שלא לשמה יהי רצון שיהו עוסקין לשמה. ר' אלכסנדרי בתר צלותיה אמר הכי יהי רצון מלפניך ה' אלהינו שתעמידנו בקרן אורה ואל תעמידנו בקרן חשכה ואל ידוה לבנו ואל יחשכו עינינו איכא דאמרי הא רב המנונא מצלי לה ור' אלכסנדרי בתר דמצלי אמר הכי רבון העולמים גלוי וידוע לפניך שרצוננו לעשות רצונך ומי מעכב שאור שבעיסה ושעבוד מלכיות יהי רצון מלפניך שתצילנו מידם ונשוב לעשות חוקי רצונך בלבב שלם. רבא בתר צלותיה אמר הכי אלהי עד שלא נוצרתי איני כדאי ועכשיו שנוצרתי כאלו לא נוצרתי עפר אני בחיי ק\"ו במיתתי הרי אני לפניך ככלי מלא בושה וכלימה יהי רצון מלפניך ה' אלהי שלא אחטא עוד ומה שחטאתי לפניך מרק ברחמיך הרבים אבל לא ע\"י יסורין וחלאים רעים והיינו וידוי דרב המנונא זוטי ביומא דכפורי. מר בריה דרבינא כי הוה מסיים צלותיה אמר הכי אלהי נצור לשוני מרע ושפתותי מדבר מרמה ולמקללי נפשי תדום ונפשי כעפר לכל תהיה פתח לבי בתורתך ובמצותיך תרדוף נפשי ותצילני מפגע רע מיצר הרע ומאשה רעה ומכל רעות המתרגשות לבא בעולם וכל החושבים עלי רעה מהרה הפר עצתם וקלקל מחשבותם יהיו לרצון אמרי פי והגיון לבי לפניך ה' צורי וגואלי. רב ששת כי הוה יתיב בתעניתא בתר דמצלי אמר הכי רבון העולמים גלוי לפניך בזמן שבית המקדש קיים אדם חוטא ומקריב קרבן ואין מקריבין ממנו אלא חלבו ודמו ומתכפר לו ועכשיו ישבתי בתענית ונתמעט חלבי ודמי יהי רצון מלפניך שיהא חלבי ודמי שנתמעט כאילו הקרבתיו לפניך על גבי המזבח ותרצני. ר' יוחנן כי הוה מסיים ספרא דאיוב אמר הכי סוף אדם למות וסוף בהמה לשחיטה והכל למיתה הם עומדים אשרי מי שגדל בתורה ועמלו בתורה ועושה נחת רוח ליוצרו וגדל בשם טוב ונפטר בשם טוב מן העולם ועליו אמר שלמה (קהלת ז, א) טוב שם משמן טוב ויום המות מיום הולדו. מרגלא בפומיה דר\"מ גמור בכל לבבך ובכל נפשך לדעת את דרכי ולשקוד על דלתי תורתי נצור תורתי בלבך ונגד עיניך תהיה יראתי שמור פיך מכל חטא וטהר וקדש עצמך מכל אשמה ועון ואני אהיה עמך בכל מקום. מרגלא בפומייהו דרבנן דיבנה אני בריה וחברי בריה אני מלאכתי בעיר והוא מלאכתו בשדה אני משכים למלאכתי והוא משכים למלאכתו כשם שהוא אינו מתגדר במלאכתי כך אני איני מתגדר במלאכתו ושמא תאמר אני מרבה והוא ממעיט שנינו אחד המרבה ואחד הממעיט ובלבד שיכוין לבו לשמים. מרגלא בפומיה דאביי לעולם יהא אדם ערום ביראה (משלי טו, א) מענה רך משיב חמה ומרבה שלום עם אחיו ועם קרוביו ועם כל אדם ואפילו עם נכרי בשוק כדי שיהא אהוב למעלה ונחמד למטה ויהא מקובל על הבריות אמרו עליו על רבן יוחנן בן זכאי שלא הקדימו אדם שלום מעולם ואפילו נכרי בשוק. מרגלא בפומיה דרבא תכלית חכמה תשובה ומעשים טובים שלא יהא אדם קורא ושונה ובועט באביו ובאמו וברבו ובמי שהוא גדול ממנו בחכמה ובמנין שנאמר (תהלים קיא, י) ראשית חכמה יראת ה' שכל טוב לכל עושיהם לעושים לא נאמר אלא לעושיהם לעושים לשמה ולא לעושים שלא לשמה וכל העושה שלא לשמה נוח לו שלא נברא. מרגלא בפומיה דרב [לא כעולם הזה העולם הבא] העולם הבא אין בו לא אכילה ולא שתיה ולא פריה ורביה ולא משא ומתן ולא קנאה ולא שנאה ולא תחרות אלא צדיקים יושבין ועטרותיהם בראשיהם ונהנים מזיו השכינה שנאמר (שמות כד, יא) ויחזו את האלהים ויאכלו וישתו: גדולה הבטחה שהבטיחן הקב\"ה לנשים יותר מן האנשים שנא' (ישעיהו לב, ט) נשים שאננות קומנה שמענה קולי בנות בוטחות האזנה אמרתי א\"ל רב לר' חייא נשים במאי זכיין באקרויי בנייהו לבי כנישתא ובאתנויי גברייהו בי רבנן ונטרין לגברייהו עד דאתו מבי רבנן. כי הוו מפטרי רבנן מבי ר' אמי ואמרי לה מבי ר' חנינא אמרי ליה הכי עולמך תראה בחייך ואחריתך לחיי העולם הבא ותקותך לדור דורים לבך יהגה תבונה פיך ידבר חכמות ולשונך ירחיש רננות עפעפיך יישירו נגדך עיניך יאירו במאור תורה ופניך יזהירו כזוהר הרקיע שפתותיך יביעו דעת וכליותיך תעלוזנה מישרים ופעמיך ירוצו לשמוע דברי עתיק יומין. כי הוו מפטרי רבנן מבי רב חסדא ואמרי לה מבי ר' שמואל בר נחמני אמרו ליה הכי (תהלים קמד, יד) אלופינו מסובלים וגו' אלופינו מסובלים רב ושמואל ואמרי לה רבי יוחנן ור' אלעזר חד אמר אלופינו בתורה ומסובלים במצות וחד אמר אלופינו בתורה ובמצות ומסובלים ביסורים",
  "rashi": [
   {
    "dh": "בפמליא של מעלה",
    "text": " — בחבורת שרי האומות שכשהשרים של מעלה יש תגר ביניהם תיכף יש קטטה בין האומות כדכתיב ועתה אשוב להלחם עם שר פרס (דניאל י׳:כ׳):",
    "en": "In the heavenly entourage — in the cohort of the minister angels of the nations. For when the supernal ministers have a conflict amongst them, there is immediately a dispute amongst the nations, as it is written, but now I must go back to fight the minister [angel] of Persia (Daniel 10:20)."
   },
   {
    "dh": "ובפמליא של מטה",
    "text": " — בחבורת החכמים:"
   },
   {
    "dh": "בקרן אורה",
    "text": " — בזוית אורה:"
   },
   {
    "dh": "ומי מעכב",
    "text": " — שאין אנו עושים רצונך:"
   },
   {
    "dh": "שאור שבעיסה",
    "text": " — יצר הרע שבלבבנו המחמיצנו:"
   },
   {
    "dh": "איני כדאי",
    "text": " — לא הייתי חשוב והגון להיות נוצר:"
   },
   {
    "dh": "ועכשיו שנוצרתי",
    "text": " — מה חשיבותי הרי אני כאילו לא נוצרתי:"
   },
   {
    "dh": "ק\"ו",
    "text": " — שבמיתתי עפר אני:"
   },
   {
    "dh": "מרק",
    "text": " — כלה והתם:"
   },
   {
    "dh": "כי הוה מסיים ספרא דאיוב",
    "text": " — על שם שאיוב נפטר בשם טוב:"
   },
   {
    "dh": "מרגלא בפומיה",
    "text": " — דבר זה רגיל בפיו:"
   },
   {
    "dh": "אני",
    "text": " — העוסק בתורה בריה אני וכן חברי עם הארץ בריה הוא:"
   },
   {
    "dh": "אני מלאכתי בעיר",
    "text": " — כלומר נוחה מלאכתי ממלאכתו:"
   },
   {
    "dh": "מתגדר",
    "text": " — מתגדל לתפוס אומנותי:"
   },
   {
    "dh": "ושמא תאמר",
    "text": " — הדין עמו שאינו מתגדר במלאכתי שאילו היה תופס אומנותי לא היה לו לב פתוח להרבות בתורה כמותי והיה ממעיט ואין לו שכר:"
   },
   {
    "dh": "שנינו",
    "text": " — שיש לו שכר לממעיט כמו למרבה:"
   },
   {
    "dh": "ובלבד שיכוין לבו לשמים",
    "text": " — ואצל קרבנות הוא במנחות בסופה:"
   },
   {
    "dh": "ערום ביראה",
    "text": " — להערים בכל מיני ערמה ליראת בוראו:"
   },
   {
    "dh": "תכלית חכמה",
    "text": " — עיקרה של תורה שיהא עמה תשובה ומע\"ט:"
   },
   {
    "dh": "העושה שלא לשמה נוח לו שלא נברא",
    "text": " — פירוש שאינו לומד כדי לקיים אלא לקנטר דבפרק מקום שנהגו (פסחים דף נ:) אמרינן רבא רמי כתיב עד שמים חסדך וכתיב מעל השמים כאן בעוסק שלא לשמה כו' והתם איירי במקיים כדי שיכבדוהו וכן משמע בירושלמי דפירקין:"
   },
   {
    "dh": "ויאכלו וישתו",
    "text": " — שבעו מזיו השכינה כאילו אכלו ושתו:"
   },
   {
    "dh": "גדולה הבטחה",
    "text": " — שהרי קראן שאננות ובוטחות:"
   },
   {
    "dh": "לבי כנישתא",
    "text": " — תינוקות של בית רבן היו רגילין להיות למדים לפני רבן בבית הכנסת:"
   },
   {
    "dh": "בי רבנן",
    "text": " — בית המדרש ששם שונים משנה וגמרא:"
   },
   {
    "dh": "ונטרן לגברייהו",
    "text": " — ממתינות לבעליהן ונותנות להם רשות ללכת וללמוד תורה בעיר אחרת:"
   },
   {
    "dh": "מפטרי רבנן",
    "text": " — זה מזה שהיה נוטל רשות מחבירו לשוב לביתו ולארצו:"
   },
   {
    "dh": "עולמך תראה בחייך",
    "text": " — כל צרכיך תמצא:"
   },
   {
    "dh": "פיך ידבר חכמות",
    "text": " — בלשון ברכה היו אומרים:"
   },
   {
    "dh": "יישירו",
    "text": " — לשון יושר שתהא מבין בתורה כהלכה:"
   }
  ],
  "tosafot": [
   {
    "dh": "ונפשי כעפר לכל תהיה",
    "text": " — מה עפר אינו מקבל כליה לעולם כן יהי רצון שזרעי לא יכלה לעולם כמו שהוא אומר והיה זרעך כעפר הארץ:",
    "en": "One who does them not for their own sake, preferable for him had he not been created - What about what the statement of Rav Yehuda in the name of Rav in the perek Makom Sh'Nahugu (Pesachim 50b) \"A person should always do Torah and mitzvot even if he doesn't do them for their own sake, for thought doing them not for their own sake he will come to do them their own sake\"? It is possible to say that over here we are dealing with someone learning only to vex his friends whereas over there it is someone who learns with the motivation that others should honor him."
   },
   {
    "dh": "אני בריה וחברי בריה",
    "text": " — כלומר יש לו לב כמוני להבחין בין טוב לרע:"
   },
   {
    "dh": "העושה שלא לשמה נוח לו שלא נברא",
    "text": " — וא\"ת האמר רב יהודה אמר רב פרק מקום שנהגו (פסחים ד' נ:) לעולם יעסוק אדם בתורה ובמצות אפי' שלא לשמה שמתוך שלא לשמה בא לשמה וי\"ל דהכא מיירי שאינו לומד אלא לקנתר חביריו והתם מיירי שלומד ע\"מ שיכבדוהו:"
   }
  ],
  "translations": []
 },
 {
  "id": "17b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יז",
  "amud": "ב",
  "dafEn": "17b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אין פרץ שלא תהא סיעתנו כסיעתו של דוד שיצא ממנו אחיתופל ואין יוצאת שלא תהא סיעתנו כסיעתו של שאול שיצא ממנו דואג האדומי ואין צוחה שלא תהא סיעתנו כסיעתו של אלישע שיצא ממנו גחזי ברחובותינו שלא יהא לנו בן או תלמיד שמקדיח תבשילו ברבים: (ישעיהו מו, יב) שמעו אלי אבירי לב הרחוקים מצדקה רב ושמואל ואמרי לה רבי יוחנן ורבי אלעזר חד אמר כל העולם כולו נזונין בצדקה והם נזונין בזרוע וחד אמר כל העולם כולו נזונין בזכותם והם אפילו בזכות עצמן אין נזונין כדרב יהודה אמר רב דאמר רב יהודה אמר רב בכל יום ויום בת קול יוצאת מהר חורב ואומרת כל העולם כולו נזונין בשביל חנינא בני וחנינא בני די לו בקב חרובין מערב שבת לערב שבת ופליגא דרב יהודה דאמר רב יהודה מאן אבירי לב גובאי טפשאי אמר רב יוסף תדע דהא לא איגייר גיורא מינייהו אמר רב אשי בני מתא מחסיא אבירי לב נינהו דקא חזו יקרא דאורייתא תרי זמני בשתא ולא קמגייר גיורא מינייהו: חתן אם רוצה לקרות וכו': למימרא דרבן שמעון בן גמליאל חייש ליוהרא ורבנן לא חיישי ליוהרא והא איפכא שמעינן להו דתנן מקום שנהגו לעשות מלאכה בתשעה באב עושין מקום שנהגו שלא לעשות אין עושין וכל מקום תלמידי חכמים בטלים רבן שמעון בן גמליאל אומר לעולם יעשה כל אדם את עצמו כתלמיד חכם קשיא דרבנן אדרבנן קשיא דרבן שמעון בן גמליאל אדרבן שמעון בן גמליאל אמר רבי יוחנן מוחלפת השיטה רב שישא בריה דרב אידי אמר לעולם לא תחליף דרבנן אדרבנן לא קשיא ק\"ש כיון דכ\"ע קא קרו ואיהו נמי קרי לא מיחזי כיוהרא הכא כיון דכולי עלמא עבדי מלאכה ואיהו לא קא עביד מיחזי כיוהרא דרבן שמעון בן גמליאל אדרבן שמעון בן גמליאל לא קשיא התם בכונה תליא מילתא ואנן סהדי דלא מצי לכווני דעתיה אבל הכא הרואה אומר מלאכה הוא דאין לו פוק חזי כמה בטלני איכא בשוקא: הדרן עלך היה קורא  מי שמתו מוטל לפניו פטור מק\"ש ומן התפלה ומן התפילין ומכל מצות האמורות בתורה נושאי המטה וחלופיהן וחלופי חלופיהן את שלפני המטה ואת שלאחר המטה את שלפני המטה צורך בהם פטורים ואת שלאחר המטה צורך בהם חייבין ואלו ואלו פטורים מן התפלה קברו את המת וחזרו אם יכולין להתחיל ולגמור עד שלא יגיעו לשורה יתחילו ואם לאו לא יתחילו העומדים בשורה הפנימיים פטורים והחיצונים חייבים (נשים ועבדים וקטנים פטורים מק\"ש ומן התפילין וחייבין בתפלה ובמזוזה ובברכת המזון): גמ׳ מוטל לפניו אין ושאינו מוטל לפניו לא ורמינהי מי שמתו מוטל לפניו אוכל בבית אחר ואם אין לו בית אחר אוכל בבית חבירו ואם אין לו בית חבירו עושה מחיצה ואוכל ואם אין לו דבר לעשות מחיצה מחזיר פניו ואוכל ואינו מיסב ואוכל ואינו אוכל בשר ואינו שותה יין ואינו מברך ואינו מזמן",
  "rashi": [
   {
    "dh": "כל העולם כולו נזונין בצדקה",
    "text": " — בצדקתו של הקב\"ה ולא בזכות שבידן:"
   },
   {
    "dh": "והם נזונין בזרוע",
    "text": " — בזכות שבידם ובצדיקים משתעי קרא וקרי להו רחוקים מצדקתו של הקדוש ב\"ה:"
   },
   {
    "dh": "ופליגא דרב יהודה",
    "text": " — דאיהו אמר אבירי לב היינו רשעים:"
   },
   {
    "dh": "גובאי",
    "text": " — שם אומה היא בבבל ובמסכת קדושין (פ\"ד דף ע:) אמרינן שהיו מן הנתינים:"
   },
   {
    "dh": "שבחא דאורייתא תרי זימני בשתא",
    "text": " — שהיו נאספים שם ישראל באדר לשמוע בהלכות הפסח מדרש דרב אשי ובאלול לשמוע הלכות החג:"
   },
   {
    "dh": "אמרי אינשי עבידתא הוא דלית ליה",
    "text": " — הרואה אותו שאינו עושה מלאכה אינו מבין שמחמת תשעה באב הוא בטל אלא אין לו מלאכה לעשות:"
   },
   {
    "dh": "פוק חזי כמה בטלני איכא בשוקא",
    "text": " — אף בימי מלאכה:"
   },
   {
    "dh": "הדרן עלך היה קורא",
    "text": ""
   },
   {
    "dh": "מי שמתו כו' פטור מלקרות ק\"ש",
    "text": " — לפי שהוא טרוד במחשבת קבורתו והויא דומיא דחתן דפטור משום טירדא דמצוה:"
   },
   {
    "dh": "וחלופיהן",
    "text": " — שכן דרך שמתחלפין לשאת לפי שהכל חפצין לזכות בו:"
   },
   {
    "dh": "את שלפני המטה",
    "text": " — שיתעסקו בו כשתגיע המטה אצלם:"
   },
   {
    "dh": "ושלאחר המטה",
    "text": " — שנשאוהו כבר:"
   },
   {
    "dh": "שלפני המטה צורך בהם פטורים",
    "text": " — אם צריכים לשאתו פטורים:"
   },
   {
    "dh": "ושלאחר המטה",
    "text": " — אף אם צורך בהם חייבים הואיל שכבר יצאו ידי חובתן מן המת:"
   },
   {
    "dh": "ואלו ואלו פטורין מן התפלה",
    "text": " — דלאו דאורייתא היא ורבותינו פירשו לפי שיש להם עוד שהות ולי נראה שאין זה לשון פטור:"
   },
   {
    "dh": "לשורה",
    "text": " — שהיו מנחמין את האבל בהקף שורה סביבותיו בשובם מן הקבר:"
   },
   {
    "dh": "גמ' שאינו מוטל לפניו",
    "text": " — כגון הוא בבית אחד והמת בבית אחר:"
   },
   {
    "dh": "אוכל בבית אחר",
    "text": " — דנראה כלועג לרש וכו':"
   },
   {
    "dh": "ואינו מיסב",
    "text": " — כדרך המסובים בחשיבות על צדו השמאלית ובמטה:"
   },
   {
    "dh": "ואינו מברך",
    "text": " — ואינו צריך לברך ברכת המוציא:"
   },
   {
    "dh": "ואינו מזמן",
    "text": " — אינו צריך לברך ברכת המזון:"
   }
  ],
  "tosafot": [
   {
    "dh": "פרץ זה אחיתופל",
    "text": " — שפרץ פרצה במלכות בית דוד. יוצאת זה דואג שיצא לתרבות רעה כדמפרש בחלק (קו:) גבי ווי שיצא זה:"
   },
   {
    "dh": "צוחה זה גחזי",
    "text": " — שהיה מצורע וכתיב ביה טמא טמא יקרא והיינו צוחה:",
    "en": "In the Talmud Yerushalmi the reason is explained: Rabbi Boon said, it says \"in order that you may remember [the day when you came out of the land of Egypt] all the days of your life\" - when you are engaged in life and not days when you are engaged with death. There is also a version which says 'exempt from reading the Shema and from prayer and from T'fillin.\""
   },
   {
    "dh": "והם נזונין בזרוע",
    "text": " — ולכך יש להגיה בתקיעות והם בזרוע עדיך באו ולא גרסינן עדיך לא באו:",
    "en": "According to Rashi, you do not need to bless. And understand from his explanation that if one wants to bless, it is permitted. However, in the Yerushalmi it says, if you want to be stringent, we don't let him. Therefore, it appears to say, one does not bless and one is not permitted to bless, and the Yerushalmi explains why, and says because of Kavod HaMeit (respect for the dead). Alternatively, because he doesn't have anyone who will carry his burden. We ask a question: but isn't it taught in a Braita: exempt from netilat lulav. And should you think we are dealing with Yom Tov, and there he is not too busy to carry the burden, and we teach that it is referring to Chol, meaning Chol HaMoed [because he could potentially bury on Chol]. But isn't it taught in a Braita: 'Exempt from the blowing of the shofar'. It should have said on a weekday and not on Yom Tov. And that's a question. And we answer: Rav Chanina said, since he needs to prepare the casket and the shrouds [which the dead wear], as it is taught in a Mishnah: \"you may violate the boundary to bring him a casket and shrouds\" its as if he is carrying the burden. Consequently, the implication is that on shabbat and yom tov you are not permitted to make blessings and pray since you are busy violating the boundary to bring him a casket and shrouds. But there is a question from the end where it says \"on shabbat you make blessings and a mezuman."
   },
   {
    "dh": "תרי זימני בשתא",
    "text": " — אבל בעצרת שאינו אלא יום אחד לא היו כל כך מתאספין ושמא ניסא איתרחיש להו וראיתי בספר העתים שחבר הרב רבי יהודה בר ברזילי ששמע שהיה עמוד של אש יורד מן השמים עליהם בכלה דאלול ובכלה דאדר:"
   },
   {
    "dh": "רב שישא בריה דרב אידי אמר לעולם לא תחליף",
    "text": " — פר\"ח דהלכה כרב ששת דהוא בתראה והלכה כרשב\"ג דאמר לא כל הרוצה ליטול את השם יטול ובכל מקום ששנה רבן שמעון בן גמליאל במשנתינו הלכה כמותו חוץ מערב וצידן וראיה אחרונה (כתובות עז א) וכן פסק ר\"ח ומיהו אנו שבשום פעם אין אנו מכוונים היטב גם חתן יש לקרות דאדרבה נראה כיוהרא אם לא יקרא כלומר אני מכוין בכל שעה אבל לעשות מלאכה בתשעה באב אין לעשות מלאכה:"
   },
   {
    "dh": "הדרן עלך היה קורא",
    "text": ""
   },
   {
    "dh": "מי שמתו מוטל לפניו",
    "text": " — רש\"י גריס מי שמתו אחר תפלת השחר אבל נראה לר\"י שהוא אחר היה קורא דאיירי בסיפיה מק\"ש וכאן מתחיל נמי מפטור ק\"ש ובירושלמי גריס כמו כן:"
   },
   {
    "dh": "פטור מק\"ש",
    "text": " — בירושלמי מפרש טעמא א\"ר בון כתיב למען תזכור כו' עד כל ימי חייך ימים שאתה עוסק בחיים ולא ימים שאתה עוסק במתים: הכי גרסינן פטור מקריאת שמע ומן התפלה ומן התפילין:"
   },
   {
    "dh": "הכי גריס רש\"י שלאחר המטה אפילו המטה צריכה להם חייבין לפי שלעולם לא היו רגילים לשאת שכבר נשאו חלקם ותימה קצת הלשון לפרש מאי קאמר אפי' צריכה להם והלא לא היו נושאין כלל את המת לכך נראה כגרסת הספרים שלפני המטה ושלאחר המטה את שהמטה צריכה להם פטורין אין צריכה להם חייבין",
    "text": ""
   },
   {
    "dh": "אלו ואלו פטורין מן התפלה",
    "text": " — אבל בק\"ש ובתפילין שהן מדאורייתא חייבים ורישא דקאמר מי שמתו מוטל לפניו דפטור מן קריאת שמע ומן התפילין וכו' כל שכן דפטור מן התפלה אלא לא בעי למיתני ברישא אלא החלוק שבין נושאי המטה למתו מוטל לפניו:"
   },
   {
    "dh": "ואינו מברך",
    "text": " — פרש\"י ואין זקוק לברך - ומשמע מתוך פירושו שאם רצה לברך רשאי מיהו בירושלמי קאמר אם רצה להחמיר אין שומעין לו לכך נראה לומר אינו מברך אינו רשאי לברך ומפרש בירושלמי למה וקאמר מפני כבודו של מת אי נמי מפני שאין לו מי שישא משאו ופריך והתניא פטור מנטילת לולב וקא ס\"ד דמיירי ביו\"ט ובו אינו טרוד לישא משאו ומשני תפתר בחול פי' בחולו של מועד. והתניא פטור מתקיעת שופר אית לך למימר בחול ולא בי\"ט בתמיה ומשני א\"ר חנינא מכיון שהוא זקוק להכין לו ארון ותכריכין כדתנן (שבת קנא.) מחשיכין על התחום להביא לו ארון ותכריכין כמו שהוא נושא משאו דמי אלמא משמע דבשבתות וי\"ט אינו רשאי לברך ולהתפלל דטרוד להחשיך לו על התחום להביא ארון ותכריכין וקשיא מסיפא דקתני בשבת מברכין עליו ומזמנין עליו וכן תניא נמי בירושלמי בד\"א בחול אבל בשבת מיסב ואוכל ומברך ועונים אחריו אמן. ואומר הר\"י דפליגי אהדדי רישא וסיפא בירושלמי. ורבי נתנאל היה אומר דאפשר לישבו דודאי אם דעתו להחשיך על התחום אז יש לנו לומר דטרוד להחשיך ואינו רשאי לברך אבל בסיפא מיירי בשאין דעתו להחשיך על התחום ומיהו האי טעמא לא שייך לטעמא דמשום כבודו. ומן הירושלמי דמשני דפטור מנטילת לולב דמיירי בחול המועד דטרוד לישא משאו למדנו שבחול המועד שייך אנינות כשמתו מוטל לפניו וכיון דכשמוטל לפניו שייך אנינות כי מוטל עליו לקוברו כמוטל לפניו דמי וכן איפכא מי שמתו מוטל לפניו ואין עליו לקוברו אינו נוהג אנינות וכן משמע בירושלמי נמסר לרבים אוכל בשר ושותה יין נמסר לכתפים כנמסר לרבים ועל כרחך נמסר לרבים ר\"ל אפי' לפניו דאי שלא לפניו תיפוק ליה שמיד חל עליו אבלות משיצא מפתח ביתו וכיון דלא חל עליה אנינות א\"כ אדם שאינו יכול לקבור מתו כגון אדם שמת בבית האסורים ואין המושל מניחו לקוברו נראה שאין חייב לנהוג בו אנינות שהרי אין זה מוטל עליו לקברו מפני שאינו יכול לפדותו ולהוציאו לקברו כדתניא במסכת שמחות (פ\"ב) נתיאשו בעליו מלקוברו מתאבלין עליו ופסיק מיניה תורת אנינות מיהו באותו שתפסו מושל גם אבילות אינו חייב דלא דמי לנתיאשו מלקוברו ששם אינו קוברו תו אבל הכא עדיין הוא מצפה אם יוכל לעשות פשרה עם המושל להניחו לקברו וכן מעשה דר' אליעזר בר\"ש בבבא מציעא (דף פד:) דפסק מצות אנינות ומעשה שמתה אחותו של ר\"ת בשבת והודיעו לו במוצאי שבת בעיר אחרת ואכל בשר ושתה יין ואמר כיון שיש לה בעל שחייב בקבורתה אינו אסור בבשר ויין ואפשר שגם ר\"ת אם היה בעיר עצמו היה מיקל מאותו הטעם:"
   }
  ],
  "translations": []
 },
 {
  "id": "18a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יח",
  "amud": "א",
  "dafEn": "18a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ואין מברכין עליו ואין מזמנין עליו ופטור מקריאת שמע ומן התפלה ומן התפילין ומכל מצות האמורות בתורה ובשבת מיסב ואוכל בשר ושותה יין ומברך ומזמן ומברכין עליו ומזמנין עליו וחייב בכל המצות האמורות בתורה. רשב\"ג אומר מתוך שנתחייב באלו נתחייב בכולן וא\"ר יוחנן מאי בינייהו תשמיש המטה איכא בינייהו קתני מיהת פטור מקריאת שמע ומן התפלה ומן התפילין ומכל מצות האמורות בתורה אמר רב פפא תרגמא אמחזיר פניו ואוכל רב אשי אמר כיון שמוטל עליו לקוברו כמוטל לפניו דמי שנאמר (בראשית כג, ג) ויקם אברהם מעל פני מתו ונאמר ואקברה מתי מלפני כל זמן שמוטל עליו לקוברו כמוטל לפניו דמי מתו אין אבל משמרו לא והתניא המשמר את המת אע\"פ שאינו מתו פטור מק\"ש ומן התפלה ומן התפילין ומכל מצות האמורות בתורה משמרו אע\"פ שאינו מתו מתו אע\"פ שאינו משמרו מתו ומשמרו אין אבל מהלך בבית הקברות לא והתניא לא יהלך אדם בבית הקברות ותפילין בראשו וספר תורה בזרועו וקורא ואם עושה כן עובר משום (משלי יז, ה) לועג לרש חרף עושהו התם תוך ארבע [אמות] הוא דאסור חוץ לארבע אמות חייב דאמר מר מת תופס ד' אמות לק\"ש הכא חוץ לד' אמות נמי פטור: גופא המשמר את המת אע\"פ שאינו מתו פטור מקריאת שמע ומן התפלה ומן התפילין ומכל מצות האמורות בתורה היו שנים זה משמר וזה קורא וזה משמר וזה קורא בן עזאי אומר היו באים בספינה מניחו בזוית זו ומתפללין שניהם בזוית אחרת מאי בינייהו אמר רבינא חוששין לעכברים איכא בינייהו מר סבר חיישינן ומר סבר לא חיישינן: ת\"ר המוליך עצמות ממקום למקום הרי זה לא יתנם בדסקיא ויתנם על גבי חמור וירכב עליהם מפני שנוהג בהם מנהג בזיון ואם היה מתירא מפני נכרים ומפני לסטים מותר וכדרך שאמרו בעצמות כך אמרו בספר תורה אהייא אילימא ארישא פשיטא מי גרע ספר תורה מעצמות אלא אסיפא: אמר רחבה אמר רב יהודה כל הרואה המת ואינו מלוהו עובר משום לועג לרש חרף עושהו ואם הלוהו מה שכרו אמר רב אסי עליו הכתוב אומר (משלי יט, יז) מלוה ה' חונן דל (משלי יד, לא) ומכבדו חונן אביון: רבי חייא ורבי יונתן הוו שקלי ואזלי בבית הקברות הוה קשדיא תכלתא דרבי יונתן אמר ליה רבי חייא דלייה כדי שלא יאמרו למחר באין אצלנו ועכשיו מחרפין אותנו אמר ליה ומי ידעי כולי האי והא כתיב (קהלת ט, ה) והמתים אינם יודעים מאומה אמר ליה אם קרית לא שנית אם שנית לא שלשת אם שלשת לא פירשו לך (קהלת ט, ה) כי החיים יודעים שימותו אלו צדיקים שבמיתתן נקראו חיים שנאמר (שמואל ב כג, כ) ובניהו בן יהוידע בן איש חי רב פעלים מקבצאל הוא הכה את שני אריאל מואב והוא ירד והכה את הארי בתוך הבור ביום השלג",
  "rashi": [
   {
    "dh": "ואין מברכין עליו",
    "text": " — אין צריך שיברכו לו אחרים בברכת הלחם:"
   },
   {
    "dh": "ואין מזמנין עליו",
    "text": " — אין מצטרף עם שלשה לזימון:"
   },
   {
    "dh": "תשמיש המטה איכא בינייהו",
    "text": " — לר\"ש חייב אבל בעונה בשבת:"
   },
   {
    "dh": "קתני מיהת פטור מק\"ש ומכל ברכות",
    "text": " — ואפילו כשהוא אוכל בבית חבירו:"
   },
   {
    "dh": "תרגמא",
    "text": " — להא דתני פטור אמי שאין לו בית אחר דקאמר מחזיר פניו ואוכל:"
   },
   {
    "dh": "רב אשי אמר",
    "text": " — לעולם אכולא ומתניתין נמי אפילו בבית אחר נמי פטר ליה דכל שמוטל עליו לקוברו קרי מוטל לפניו:"
   },
   {
    "dh": "ויקם אברהם וגו' וכתיב ואקברה מתי מלפני",
    "text": " — וההיא שעתא לאו לפניו הוה:"
   },
   {
    "dh": "משמרו",
    "text": " — אדם אחר שאינו קרובו אלא משמרו:"
   },
   {
    "dh": "תופס ד' אמות לק\"ש",
    "text": " — שאסור לקרות בתוך ארבע אמות שלו משום לועג לרש:"
   },
   {
    "dh": "פטור מק\"ש",
    "text": " — משום דעוסק במצוה:"
   },
   {
    "dh": "חוששין לעכברים",
    "text": " — תנא קמא חייש לעכברים אפילו בספינה:"
   },
   {
    "dh": "דסקיא",
    "text": " — מרצוף גדול של עור:"
   },
   {
    "dh": "ואם היה מתירא",
    "text": " — וצריך לרכוב על הסוס ולרוץ:"
   },
   {
    "dh": "אלא אסיפא",
    "text": " — אם היה מתירא רוכב:"
   },
   {
    "dh": "מלוה ה' חונן דל",
    "text": " — קרי ביה מלוה את המקום מי שחונן את הדל ואין לך דל מן המת והמלוה אותו כאלו מלוה את המקום:"
   },
   {
    "dh": "דלייה",
    "text": " — הגביהנו:"
   },
   {
    "dh": "לא שנית",
    "text": " — לא חזרת עליו פעם שנית כדי שתתבונן בו:"
   },
   {
    "dh": "אלו צדיקים",
    "text": " — ומאי יודעים שימותו נותנים אל לבם יום המיתה ומושכים ידיהם מן העבירה ורשעים אינם יודעים מאומה שעושים עצמם כאינם יודעים וחוטאים:"
   },
   {
    "dh": "הוא הכה",
    "text": " — השפיל את השנים של דורות משני מקדשים שלא היה בהם כמותו:"
   },
   {
    "dh": "אריאל",
    "text": " — זה בית המקדש שנא' הוי אריאל אריאל קרית חנה דוד (ישעיהו כ״ט:א׳):"
   },
   {
    "dh": "מואב",
    "text": " — על שם שבנאו דוד דאתי מרות המואביה:"
   }
  ],
  "tosafot": [
   {
    "dh": "וספר תורה בזרועו וקורא",
    "text": " — והוא הדין דעל פה אסור לקרות:"
   },
   {
    "dh": "וירכב עליהם",
    "text": " — אבל אי מפשילן לאחוריו על החמור שפיר דמי וכן בס\"ת ואפילו אם בדעתך לאסור ס\"ת אבל בנביאים ובכתובים שפיר דמי מדנקט ס\"ת ולא מסתבר לומר משום שריותא דנכרים ולסטים דהא פשיטא דמותר דלמה יהיה אסור ועוד דבהדיא אמר בירושלמי דסקיא מלאה ספרים או שהיו בה עצמות של מת הרי זה מפשילן לאחוריו ורוכב עליו:"
   },
   {
    "dh": "אלא אסיפא משום לסטים מותר לרכוב עליהם",
    "text": " — וה\"ה לאחוריו מותר אפילו בלא לסטים:"
   },
   {
    "dh": "למחר באין אצלנו ועכשיו מחרפין אותנו",
    "text": " — ותימה והא אמרי' בפ' התכלת (מנחות דף מא.) ההיא שעתא ודאי רמינן ליה פי' נותנין ציצית בטליתותיהן משום לועג לרש וי\"ל דה\"פ הכא דמביישין אותם במה שהחיים מצווים והמתים אינם מצווים וגדול המצווה וכו' וההיא דהתכלת היינו דרמו חוטים למתים ועכשיו אנו מסלקין אותן ומאי שנא אומר ר\"ת דוקא הם שהיו רגילים כולם בחייהם ללבוש טלית בד' כנפות וללבוש ציצית וגם לכל העוסקים בהם יש להם ציצית והוה לועג לרש אם לא היה להם ציצית או משום דכתיב לדורתם לדור תם אבל אנו שגם בחיינו אין מנהגינו ללבוש תמיד ציצית אי הוי רמינן להו הוי כמו לועג לרש וכ\"ת נשים לאותם שהיה להם בחייהם א\"כ יהיה לועג לרש לאחרים ועוד אר\"ת ששמע מאנשי לותי\"ר דמסירים הציצית דציצית עולה למנין תרי\"ג עם ח' חוטין וחמשה קשרים ואם לובש ציצית נראה כאילו קיים כל התורה ומיחזי כשיקרא וזה לא נהירא דגם חיים עתה למה לובשים הלא לא קיימו כל התורה כולה ומיהו י\"ל דאנו סומכים על מסכת שמחות (פי\"ב) שצוה אבא שאול לבניו הטילו תכלת מאפיליוני ואע\"פ שהגמרא חולק עליו יש דברים שאנו מניחין הגמ' שלנו ואנו עושין כספרים החיצונים כמו מחזון ישעיהו כפסיקתא וכמו ויחל שיש בגמ' (מגילה דף לא.) דבתענית קורין ברכות וקללות ובמס' סופרים (פי\"ז) מפרש ויחל והריצב\"א היה רגיל שלא להסירם מן הכנף אלא לקושרם ולהדקם בתוך הכנף לאפוקי נפשיה מפלוגתא אם הם חייבין בציצית יש להם ציצית ואם לאו הרי הם מכוסין:"
   },
   {
    "dh": "שני אריאל מואב",
    "text": " — על שם דוד ושלמה שבנו את הבית ובאו מרות המואביה:"
   }
  ],
  "translations": []
 },
 {
  "id": "18b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יח",
  "amud": "ב",
  "dafEn": "18b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בן איש חי אטו כולי עלמא בני מתי נינהו אלא בן איש חי שאפי' במיתתו קרוי חי רב פעלים מקבצאל שריבה וקבץ פועלים לתורה והוא הכה את שני אריאל מואב שלא הניח כמותו לא במקדש ראשון ולא במקדש שני והוא ירד והכה את הארי בתוך הבור ביום השלג איכא דאמרי דתבר גזיזי דברדא ונחת וטבל איכא דאמרי דתנא סיפרא דבי רב ביומא דסיתוא. והמתים אינם יודעים מאומה אלו רשעים שבחייהן קרויין מתים שנאמר (יחזקאל כא, ל) ואתה חלל רשע נשיא ישראל ואי בעית אימא מהכא (דברים יז, ו) על פי שנים עדים או (על פי) שלשה עדים יומת המת חי הוא אלא המת מעיקרא: בני ר' חייא נפוק לקרייתא אייקר להו תלמודייהו הוו קא מצערי לאדכוריה א\"ל חד לחבריה ידע אבון בהאי צערא א\"ל אידך מנא ידע והא כתיב (איוב יד, כא) יכבדו בניו ולא ידע א\"ל אידך ולא ידע והא כתיב (איוב יד, כב) אך בשרו עליו יכאב ונפשו עליו תאבל ואמר רבי יצחק קשה רמה למת כמחט בבשר החי אמרי בצערא דידהו ידעי בצערא דאחרינא לא ידעי ולא והתניא מעשה בחסיד אחד שנתן דינר לעני בערב ר\"ה בשני בצורת והקניטתו אשתו והלך ולן בבית הקברות ושמע שתי רוחות שמספרות זו לזו אמרה חדא לחברתה חברתי בואי ונשוט בעולם ונשמע מאחורי הפרגוד מה פורענות בא לעולם אמרה לה חברתה איני יכולה שאני קבורה במחצלת של קנים אלא לכי את ומה שאת שומעת אמרי לי הלכה היא ושטה ובאה ואמרה לה חברתה חברתי מה שמעת מאחורי הפרגוד אמרה לה שמעתי שכל הזורע ברביעה ראשונה ברד מלקה אותו הלך הוא וזרע ברביעה שניה של כל העולם כולו לקה שלו לא לקה לשנה האחרת הלך ולן בבית הקברות ושמע אותן שתי רוחות שמספרות זו עם זו אמרה חדא לחברתה בואי ונשוט בעולם ונשמע מאחורי הפרגוד מה פורענות בא לעולם אמרה לה חברתי לא כך אמרתי לך איני יכולה שאני קבורה במחצלת של קנים אלא לכי את ומה שאת שומעת בואי ואמרי לי הלכה ושטה ובאה ואמרה לה חברתה חברתי מה שמעת מאחורי הפרגוד אמרה לה שמעתי שכל הזורע ברביעה שניה שדפון מלקה אותו הלך וזרע ברביעה ראשונה של כל העולם כולו נשדף ושלו לא נשדף אמרה לו אשתו מפני מה אשתקד של כל העולם כולו לקה ושלך לא לקה ועכשיו של כל העולם כולו נשדף ושלך לא נשדף סח לה כל הדברים הללו אמרו לא היו ימים מועטים עד שנפלה קטטה בין אשתו של אותו חסיד ובין אמה של אותה ריבה אמרה לה לכי ואראך בתך שהיא קבורה במחצלת של קנים לשנה האחרת הלך ולן בבית הקברות ושמע אותן רוחות שמספרות זו עם זו אמרה לה חברתי בואי ונשוט בעולם ונשמע מאחורי הפרגוד מה פורענות בא לעולם אמרה לה חברתי הניחני דברים שביני לבינך כבר נשמעו בין החיים אלמא ידעי דילמא איניש אחרינא שכיב ואזיל ואמר להו ת\"ש דזעירי הוה מפקיד זוזי גבי אושפזיכתיה עד דאתי ואזיל לבי רב שכיבה אזל בתרה לחצר מות אמר לה זוזי היכא אמרה ליה זיל שקלינהו מתותי בצנורא דדשא בדוך פלן ואימא לה לאימא תשדר לי מסרקאי וגובתאי דכוחלא בהדי פלניתא דאתיא למחר אלמא ידעי [דלמא] דומה קדים ומכריז להו ת\"ש דאבוה דשמואל הוו קא מפקדי גביה זוזי דיתמי כי נח נפשיה לא הוה שמואל גביה הוו קא קרו ליה בר אכיל זוזי דיתמי אזל אבתריה לחצר מות אמר להו בעינא אבא אמרו ליה אבא טובא איכא הכא אמר להו בעינא אבא בר אבא אמרו ליה אבא בר אבא נמי טובא איכא הכא אמר להו בעינא אבא בר אבא אבוה דשמואל היכא אמרו ליה סליק למתיבתא דרקיעא אדהכי חזייה ללוי דיתיב אבראי אמר ליה אמאי יתבת אבראי מאי טעמא לא סלקת אמר ליה דאמרי לי כל כי הנך שני דלא סליקת למתיבתא דרבי אפס ואחלישתיה לדעתיה לא מעיילינן לך למתיבתא דרקיעא אדהכי והכי אתא אבוה חזייה דהוה קא בכי ואחיך אמר ליה מאי טעמא קא בכית אמר ליה דלעגל קא אתית מאי טעמא אחיכת דחשיבת בהאי עלמא טובא אמר ליה אי חשיבנא נעיילוה ללוי ועיילוהו ללוי אמר ליה זוזי דיתמי היכא אמר ליה זיל שקלינהו באמתא דרחיא עילאי ותתאי דידן ומיצעי דיתמי אמר ליה מאי טעמא עבדת הכי אמר ליה אי גנובי גנבי מגנבו מדידן אי אכלה ארעא אכלה מדידן אלמא דידעי דילמא שאני שמואל כיון דחשיב קדמי ומכרזי פנו מקום . ואף ר' יונתן הדר ביה דאמר רבי שמואל בר נחמני אמר ר' יונתן מנין למתים שמספרים זה עם זה שנאמר (דברים לד, ד) ויאמר ה' אליו זאת הארץ אשר נשבעתי לאברהם ליצחק וליעקב לאמר מאי לאמר אמר הקדוש ברוך הוא למשה לך אמור להם לאברהם ליצחק וליעקב שבועה שנשבעתי לכם כבר קיימתיה לבניכם",
  "rashi": [
   {
    "dh": "גזיזי דברדא",
    "text": " — חתיכות של ברד והקרח שקורין גלאנצ\"א בלע\"ז והיינו ביום השלג:"
   },
   {
    "dh": "ונחת וטבל לקריו",
    "text": " — כדי לעסוק בתורה:"
   },
   {
    "dh": "דתנא סיפרא דבי רב",
    "text": " — תורת כהנים:"
   },
   {
    "dh": "חלל רשע",
    "text": " — על צדקיהו הוא אומר ועדיין בימי יחזקאל חי היה וקורהו חלל:"
   },
   {
    "dh": "לקריתא",
    "text": " — להתעסק בעבודת אחוזתם:"
   },
   {
    "dh": "אייקר תלמודייהו",
    "text": " — אשתכח תלמודם מגרסתם. אייקר הוכבד עליהם מחמת שכחה:"
   },
   {
    "dh": "צערא דידהו",
    "text": " — צער גופם ממש כגון עקיצת הרימה:"
   },
   {
    "dh": "שתי רוחות",
    "text": " — של שתי ילדות מתות:"
   },
   {
    "dh": "ונשמע",
    "text": " — ונדע מה גזרו היום פורענות בעולם. שהעולם נדון בר\"ה:"
   },
   {
    "dh": "הפרגוד",
    "text": " — מחיצה המבדלת בין מקום השכינה:"
   },
   {
    "dh": "ברביעה ראשונה",
    "text": " — יורה. שלש רביעיות הן בכירה שניה ושלישית ראשונה בי\"ז במרחשון שניה בכ\"ג שלישית בר\"ח כסליו:"
   },
   {
    "dh": "ברד מלקה אותו",
    "text": " — שעתיד ברד ליפול סמוך לרביעה ראשונה ומה שנזרע כבר הוקשה והברד שוברו והנזרע בשניה עדיין רך הוא ואינו נשבר בשביל הברד כענין שנאמר והפשתה והשעורה נכתה והחטה והכוסמת לא נכו (שמות ט׳:ל״ב):"
   },
   {
    "dh": "שדפון",
    "text": " — מלקה הרך ואינו משדף הקשה:"
   },
   {
    "dh": "אלמא ידעי",
    "text": " — דברים האמורים בין החיים:"
   },
   {
    "dh": "לחצר מות",
    "text": " — לבית הקברות:"
   },
   {
    "dh": "בצנורא דדשא",
    "text": " — בחור מפתן הבית שהדלת סובב אותו:"
   },
   {
    "dh": "מסרקאי",
    "text": " — מסרק שלי:"
   },
   {
    "dh": "גובתא",
    "text": " — קנה ובשביל שמתה ילדה אמרה כן לעגמת נפש:"
   },
   {
    "dh": "בהדי פלניתא דאתיא למחר",
    "text": " — לקבורה:"
   },
   {
    "dh": "אלמא ידעי",
    "text": " — מה שעושין שידעה זו שזו גוססת ונטויה למות:"
   },
   {
    "dh": "דלמא דומה",
    "text": " — מלאך שהוא ממונה על המתים קדים ומכריז להו עכשיו יבא פלוני אבל שאר דברי החיים אינם יודעים:"
   },
   {
    "dh": "בעינא אבא",
    "text": " — מבקש אני את אבא כך היה שמו:"
   },
   {
    "dh": "א\"ל",
    "text": " — המתים נגלו לו כאילו הם חוץ מקבריהם ויושבים בעגולה:"
   },
   {
    "dh": "חזייה",
    "text": " — שמואל ללוי חברו שהיה יושב חוץ לישיבה של שאר מתים:"
   },
   {
    "dh": "כל כי הנך שני",
    "text": " — מספר השנים שלא נכנסת בישיבתו של רבי אפס במס' כתובות בפרק הנושא את האשה (כתובות דף קג:):"
   },
   {
    "dh": "חזייה",
    "text": " — שמואל לאבוה דקא בכי וחייך:"
   },
   {
    "dh": "דלעגל אתית",
    "text": " — במהרה תקבר:"
   },
   {
    "dh": "באמתא דרחיא",
    "text": " — כל בנין מושב הרחים קרוי אמת הרחיים:"
   },
   {
    "dh": "אלמא ידעי",
    "text": " — מי חשוב בין החיים:"
   },
   {
    "dh": "זאת הארץ",
    "text": " — במיתת משה כתיב:"
   }
  ],
  "tosafot": [
   {
    "dh": "בן איש חי אטו כולי עלמא",
    "text": " — בספרים מדויקים כתיב חי וקרינן חיל ומן הכתיב דייק הכי שלא כתיב חיל אלא חי:"
   },
   {
    "dh": "בתוך הבור",
    "text": " — שהוא באמצע הספרים:"
   },
   {
    "dh": "סיפרא דבי רב",
    "text": " — מהארי דריש שהוא חמור שבספרים:"
   },
   {
    "dh": "אלמא ידעי",
    "text": " — מדקאמר לעגל קא אתית ולא מצי לשנויי כדלעיל דומה קדים ואמר להו דהיינו דוקא לאלתר אבל כל כך לא היה מקדים דהוא עצמו אינו יודע:"
   }
  ],
  "translations": []
 },
 {
  "id": "19a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יט",
  "amud": "א",
  "dafEn": "19a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ואי ס\"ד דלא ידעי כי אמר להו מאי הוי אלא מאי דידעי למה לי' למימר להו לאחזוקי ליה טיבותא למשה אמר רבי יצחק כל המספר אחרי המת כאלו מספר אחרי האבן איכא דאמרי דלא ידעי ואיכא דאמרי דידעי ולא איכפת להו איני והא אמר רב פפא חד אישתעי מילתא בתריה דמר שמואל ונפל קניא מטללא ובזעא לארנקא דמוחיה שאני צורבא מרבנן דקודשא בריך הוא תבע ביקריה אמר רבי יהושע בן לוי כל המספר אחר מטתן של תלמידי חכמים נופל בגיהנם שנא' (תהלים קכה, ה) והמטים עקלקלותם יוליכם ה' את פועלי האון שלום על ישראל אפילו בשעה ששלום על ישראל יוליכם ה' את פועלי האון תנא דבי ר' ישמעאל אם ראית תלמיד חכם שעבר עבירה בלילה אל תהרהר אחריו ביום שמא עשה תשובה שמא סלקא דעתך אלא ודאי עשה תשובה והני מילי בדברים שבגופו אבל בממונא עד דמהדר למריה: ואמר ר' יהושע בן לוי בכ\"ד מקומות בית דין מנדי' על כבוד הרב וכולן שנינו במשנתנו אמר ליה ר' אלעזר היכא אמר ליה לכי תשכח נפק דק ואשכח תלת המזלזל בנטילת ידים והמספר אחר מטתן של תלמידי חכמי' והמגיס דעתו כלפי מעלה המספר אחר מטתן של תלמידי חכמים מאי היא דתנן הוא היה אומר אין משקין לא את הגיורת ולא את המשוחררת וחכמים אומרים משקין ואמרו לו מעשה בכרכמית שפחה משוחררת בירושלים והשקוה שמעיה ואבטליון ואמר להם דוגמא השקוה ונדוהו ומת בנדויו וסקלו בית דין את ארונו והמזלזל בנטילת ידים מאי היא דתנן א\"ר יהודה חס ושלום שעקביא בן מהללאל נתנדה שאין עזרה ננעלת על כל אדם בישראל בחכמה ובטהרה וביראת חטא כעקביא בן מהללאל אלא את מי נדו את אלעזר בן חנוך שפקפק בנטילת ידים וכשמת שלחו בית דין והניחו אבן גדולה על ארונו ללמדך שכל המתנדה ומת בנדויו ב\"ד סוקלין את ארונו המגיס דעתו כלפי מעלה מאי היא דתנן שלח לו שמעון בן שטח לחוני המעגל צריך אתה להתנדות ואלמלא חוני אתה גוזרני עליך נדוי אבל מה אעשה שאתה מתחטא לפני המקום ועושה לך רצונך כבן שמתחטא לפני אביו ועושה לו רצונו ועליך הכתוב אומר (משלי כג, כה) ישמח אביך ואמך ותגל יולדתך ותו ליכא והא איכא דתני רב יוסף תודוס איש רומי הנהיג את בני רומי להאכילן גדיים מקולסין בלילי פסחים שלח ליה שמעון בן שטח אלמלא תודוס אתה גוזרני עליך נדוי שאתה מאכיל את ישראל קדשים בחוץ במשנתנו קאמרינן והא ברייתא היא וב ליכא והא איכא הא דתנן חתכו חוליות ונתן חול בין חוליא לחוליא ר' אליעזר מטהר וחכמים מטמאים וזהו תנורו של עכנאי מאי עכנאי אמר רב יהודה אמר שמואל מלמד שהקיפוהו הלכות כעכנאי זה וטמאוהו ותניא אותו היום הביאו כל טהרות שטיהר ר\"א ושרפום לפניו ולבסוף ברכוהו אפילו הכי נדוי ב לא תנן אלא בכ\"ד מקומות היכא משכחת לה ר' יהושע בן לוי מדמה מילתא למילתא ור' אלעזר לא מדמה מילתא למילתא: נושאי המטה וחלופיהן: ת\"ר אין מוציאין את המת סמוך לק\"ש ואם התחילו אין מפסיקין איני והא רב יוסף אפקוהו סמוך לק\"ש אדם חשוב שאני: שלפני המטה ושלאחר המטה: ת\"ר העוסקים בהספד בזמן שהמת מוטל לפניהם נשמטין אחד אחד וקורין אין המת מוטל לפניהם הן יושבין וקורין והוא יושב ודומם הם עומדים ומתפללין והוא עומד ומצדיק עליו את הדין ואומר רבון העולמים הרבה חטאתי לפניך ולא נפרעת ממני אחד מני אלף יהי רצון מלפניך ה' אלהינו שתגדור פרצותינו ופרצות כל עמך בית ישראל ברחמים אמר אביי לא מבעי ליה לאינש למימר הכי דארשב\"ל וכן תנא משמיה דרבי יוסי לעולם אל יפתח אדם פיו לשטן ואמר רב יוסף מאי קראה שנאמר (ישעיהו א, ט) כמעט כסדום היינו מאי אהדר להו נביא שמעו דבר ה' קציני סדום: קברו את המת וחזרו וכו': אם יכולים להתחיל ולגמור את כולה אין אבל פרק אחד או פסוק אחד לא ורמינהו קברו את המת וחזרו אם יכולין להתחיל ולגמור אפילו פרק אחד או פסוק אחד הכי נמי קאמר אם יכולין להתחיל ולגמור אפי' פרק אחד או אפילו פסוק אחד עד שלא יגיעו לשורה יתחילו ואם לאו לא יתחילו",
  "rashi": [
   {
    "dh": "ואי ס\"ד דלא ידעי",
    "text": " — אין מבינין כלום אלא צערא דגופא:"
   },
   {
    "dh": "המספר אחר המת",
    "text": " — בגנותו של מת אחר מיתתו:"
   },
   {
    "dh": "קניא מטללא",
    "text": " — קנה גדול וכבד נפל מן הגג:"
   },
   {
    "dh": "טללא",
    "text": " — גג:"
   },
   {
    "dh": "ארנקא דמוחיה",
    "text": " — כיס שהמוח מונח בו:"
   },
   {
    "dh": "והמטים עקלקלותם",
    "text": " — לעיל מיניה כתיב הטיבה ה' לטובים וסמיך ליה והמטים עקלקלותם והמכריעים את חובותם יותר על זכיותם להטותם לכף חובה:"
   },
   {
    "dh": "יוליכם ה' את פועלי האון",
    "text": " — לגיהנם:"
   },
   {
    "dh": "בכ\"ד מקומות",
    "text": " — השתא משמע מצינו שנדו חכמים בני אדם בכ\"ד מקומות לכבוד הרב לפי שלא נשאו כבוד לרבם:"
   },
   {
    "dh": "הוא היה אומר",
    "text": " — עקביא בן מהללאל במסכת עדיות:"
   },
   {
    "dh": "אין משקין",
    "text": " — אם קינא לה בעלה ונסתרה:"
   },
   {
    "dh": "לא את הגיורת",
    "text": " — דבני ישראל אמור בפרשה (במדבר ה) פרט לאשת גר ועבד משוחרר:"
   },
   {
    "dh": "בכרכמית",
    "text": " — כך שמה או על שם מקומה:"
   },
   {
    "dh": "דוגמא השקוה",
    "text": " — על שהיו דומים להם הם השקוה שהיו שמעיה ואבטליון מבני בניו של סנחריב כדאמרינן בגיטין בפרק הנזקין (גיטין דף נז:):"
   },
   {
    "dh": "ר' יהודה",
    "text": " — פליג אדלעיל דקתני שנדו את עקביא:"
   },
   {
    "dh": "שאין עזרה ננעלת",
    "text": " — בפרק ה' דפסחים (דף סד:) שהיו שערי העזרה ננעלים כששוחטין פסחים של כל כת וכת שהפסח נשחט בג' כתות:"
   },
   {
    "dh": "על כל אדם בישראל",
    "text": " — כלומר כשהיתה ננעלת עליהם והיינו כשנתמלאה פה לפה לא היה בכולם אדם חשוב בחכמה ויראת חטא כעקביא:"
   },
   {
    "dh": "אלעזר בן חנוך שפקפק",
    "text": " — זילזל והיינו נמי לכבוד הרב שעבר ע\"פ הגוזרים על הידים:"
   },
   {
    "dh": "אלמלא חוני אתה",
    "text": " — שיצא שמך בגדולה ובחשיבות:"
   },
   {
    "dh": "צריך אתה להתנדות",
    "text": " — לפי שהטריח לפני המקום על עסק גשמים לא כך שאלתי כמה פעמים וכבוד המקום כבוד הרב הוא:"
   },
   {
    "dh": "מתחטא",
    "text": " — לשון חוטא נקל בלבו לחטוא לאביו ולהטריחו על תאותו:"
   },
   {
    "dh": "מקולסים",
    "text": " — צלויים כשהן שלמין ותולין כרעיהן וקרסוליהן וקרביהם סביבותן בשפוד ועל שם כך קורהו מקולס שהוא לשון מזויין כדמתרגם וכובע נחושת על ראשו (שמואל א י״ז:ה׳) וקולסא דנחשא:"
   },
   {
    "dh": "בלילי פסחים",
    "text": " — זכר לפסח שצולהו שלם שנאמר בו על כרעיו ועל קרבו (שמות י״ב:ט׳) כלומר עם כרעיו ועם קרבו:"
   },
   {
    "dh": "גוזרני עליך נדוי",
    "text": " — והיינו נמי לכבוד הרב שאסרו חכמים את הדבר לפי שהוא קרוב להאכיל את ישראל קדשים בחוץ שהרואה סבור שהקדישו לשם פסח:"
   },
   {
    "dh": "חתכו חוליות",
    "text": " — תנור של חרס שהוא עשוי ככלי ומטלטל ותחלת ברייתו מן הטיט ומצרפו בכבשן כשאר קדרות ואם נטמא הצריכו הכתוב נתיצה ואם נתצו בענין זה שחתכו סביב סביב כחוליות עגולות וחזר וחיברו בטיט של חול בין חוליא לחוליא רבי אליעזר מטהר עולמית שאינו עוד ככלי חרס שלא נשרף בכבשן וחכמים מטמאין:"
   },
   {
    "dh": "כעכנאי",
    "text": " — כנחש זה שכורך עצמו בעגולה:"
   },
   {
    "dh": "כל טהרות",
    "text": " — שנעשו בתנור זה או שנגעו באוירו והיה רבי אליעזר מטהרן והם שרפום:"
   },
   {
    "dh": "וברכוהו",
    "text": " — לפי שהרבה מאד לחלוק בדבר זה כדאמרינן בבבא מציעא בפרק הזהב (בבא מציעא דף נט:):"
   },
   {
    "dh": "נדוי במתני' לא תנן",
    "text": " — הא דברכוהו בברייתא הוא דתני לה:"
   },
   {
    "dh": "מדמה מילתא למילתא",
    "text": " — כל מקום שראה במתניתין שנחלק היחיד על הרבים מחלוקת גדולה או אחד מן החכמים שמדבר קשה כנגד גדול הימנו אומר ראוי היה כאן נדוי:"
   },
   {
    "dh": "אין מוציאין את המת",
    "text": " — לקברו:"
   },
   {
    "dh": "סמוך לקריאת שמע",
    "text": " — לפי שמתבטלין מן הקריאה:"
   },
   {
    "dh": "אין המת מוטל לפניהם",
    "text": " — שהמת בבית אחר והם מספידין אותו כאן ויש מפרשין שנתון לצד אחר:"
   },
   {
    "dh": "והוא יושב ודומם",
    "text": " — האבל:"
   },
   {
    "dh": "למימר הכי",
    "text": " — לא נפרעת ממני דמשמע הפרע:"
   }
  ],
  "tosafot": [
   {
    "dh": "אפי' בשעה ששלום על ישראל",
    "text": " — והיינו לאחר מיתתו דלא אתו לאנצויי בהדי המספרים בגנותם מהכא משמע דאיירי לאחר מיתה:"
   },
   {
    "dh": "דוגמא השקוה",
    "text": " — פרש\"י לפי שהיתה גיורת כמותם שהיו גרים וכן משמע בירושלמי דמועד קטן (פ\"ג) מהו דוגמא דכוות'. בערוך פירש דוגמא השקוה מי צבע אבל לא היו מרים ממש ולא מחקו התורה עליה אלא ליראה אותה:"
   }
  ],
  "translations": []
 },
 {
  "id": "19b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "יט",
  "amud": "ב",
  "dafEn": "19b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "העומדים בשורה וכו': ת\"ר שורה הרואה פנימה פטורה ושאינה רואה פנימה חייבת רבי יהודה אומר הבאים מחמת האבל פטורין מחמת עצמן חייבין: אמר רב יהודה אמר רב המוצא כלאים בבגדו פושטן אפי' בשוק מ\"ט (משלי כא, ל) אין חכמה ואין תבונה ואין עצה לנגד ה' כ\"מ שיש חלול השם אין חולקין כבוד לרב מתיבי קברו את המת וחזרו ולפניהם ב' דרכים אחת טהורה ואחת טמאה בא בטהורה באין עמו בטהורה בא בטמאה באין עמו בטמאה משום כבודו אמאי לימא אין חכמה ואין תבונה לנגד ה' תרגמה רבי אבא בבית הפרס דרבנן דאמר רב יהודה אמר שמואל מנפח אדם בית הפרס והולך ואמר רב יהודה בר אשי משמיה דרב בית הפרס שנדש טהור ת\"ש דאמר ר' אלעזר בר צדוק מדלגין היינו על גבי ארונות של מתים לקראת מלכי ישראל ולא לקראת מלכי ישראל בלבד אמרו אלא אפי' לקראת מלכי עכו\"ם שאם יזכה יבחין בין מלכי ישראל למלכי עכו\"ם אמאי לימא אין חכמה ואין תבונה ואין עצה לנגד ה' כדרבא דאמר רבא דבר תורה אהל כל שיש בו חלל טפח חוצץ בפני הטומאה ושאין בו חלל טפח אינו חוצץ בפני הטומאה ורוב ארונות יש בהן חלל טפח וגזרו על שיש בהן משום שאין בהן ומשום כבוד מלכים לא גזרו בהו רבנן ת\"ש גדול כבוד הבריות שדוחה [את] לא תעשה שבתורה ואמאי לימא אין חכמה ואין תבונה ואין עצה לנגד ה' תרגמה רב בר שבא קמיה דרב כהנא בלאו (דברים יז, יא) דלא תסור אחיכו עליה לאו דלא תסור דאורייתא היא אמר רב כהנא גברא רבה אמר מילתא לא תחיכו עליה כל מילי דרבנן אסמכינהו על לאו דלא תסור ומשום כבודו שרו רבנן ת\"ש (דברים כב, א) והתעלמת מהם פעמים שאתה מתעלם מהם ופעמים שאין אתה מתעלם מהם הא כיצד אם היה כהן והיא בבית הקברות או היה זקן ואינה לפי כבודו או שהיתה מלאכתו מרובה משל חברו לכך נאמר והתעלמת אמאי לימא אין חכמה ואין תבונה ואין עצה לנגד ה' שאני התם דכתיב והתעלמת מהם וליגמר מינה איסורא מממונא לא ילפינן ת\"ש (במדבר ו, ז) ולאחותו מה תלמוד לומר הרי שהיה הולך לשחוט את פסחו ולמול את בנו ושמע שמת לו מת יכול יחזור ויטמא אמרת לא יטמא יכול כשם שאינו מטמא להם כך אינו מטמא למת מצוה ת\"ל ולאחותו לאחותו הוא דאינו מטמא",
  "rashi": [
   {
    "dh": "הרואה פנימה",
    "text": " — את חלל ההקף אחורי שורה הפנימית והאבל יושב שם:"
   },
   {
    "dh": "מחמת עצמן",
    "text": " — ולא מחמת כבוד שלא באו לנחם אלא לראות את המאורע:"
   },
   {
    "dh": "אין חכמה",
    "text": " — חשובה נגד ה':"
   },
   {
    "dh": "אחת טמאה",
    "text": " — שיש בה קבר:"
   },
   {
    "dh": "בא בטהורה",
    "text": " — האבל:"
   },
   {
    "dh": "בבית הפרס",
    "text": " — דלא מטמא אלא מדרבנן והוא שדה שנחרש בו קבר וחשו חכמים שמא דלדלו כלי המחרישה את העצמות והדורס עליהן מסיטן ועצם כשעורה מטמא במגע ובמשא ולא באהל וכיון דמדרבנן הוא דאסור רבנן הוא דאחלוה ליקרייהו גבי אבל:"
   },
   {
    "dh": "מנפח אדם",
    "text": " — לפניו שאם הי' שם עצם יראנו דאי דאורייתא הוא לא הוינן מזלזלינן ביה כולי האי למיסמך אנפיחה והך בדיקה לעושה פסח אישתרי ולא לאוכלי תרומה כדאמרינן בחומר בקדש (חגיגה דף כה:):"
   },
   {
    "dh": "שנדש",
    "text": " — ברגלים:"
   },
   {
    "dh": "מדלגין",
    "text": " — מארון לארון:"
   },
   {
    "dh": "לקראת מלכי ישראל",
    "text": " — הרי לכבוד הבריות עוברים על נפש לא יטמא (ויקרא כ״א:א׳) דהא ר' אלעזר בר צדוק כהן הוה כדאמרינן בבכורות (דף לו.):"
   },
   {
    "dh": "דבר תורה",
    "text": " — הלכה למשה מסיני:"
   },
   {
    "dh": "אינו חוצץ בפני הטומאה",
    "text": " — דנקראת טומא' רצוצה ובוקעת ועולה:"
   },
   {
    "dh": "את לא תעשה",
    "text": " — קס\"ד כל ל\"ת קאמר:"
   },
   {
    "dh": "בלאו דלא תסור וגו'. אחיכו עליה",
    "text": " — אינהו סבור דאפי' אמרו לו דבר תורה והוא עומד בפני הכבוד יעבור עליו והא האי נמי דאורייתא הוא:"
   },
   {
    "dh": "כל מילי דרבנן וכו'",
    "text": " — והכי קאמר להו דבר שהוא מדברי סופרים נדחה מפני כבוד הבריות וקרי ליה ל\"ת משום דכתיב לא תסור. ודקא קשיא לכו דאורייתא הוא. רבנן אחלוה ליקרייהו לעבור על דבריהם היכא דאיכא כבוד הבריות כגון לטלטל בשבת אבנים של בית הכסא לקנוח (שבת דף פא:) או מי שנפסקה ציצית טליתו בכרמלית לא הצריכו להניח טליתו שם וליכנס לביתו ערום (מנחות דף לח.):"
   },
   {
    "dh": "והיא בבית הקברות",
    "text": " — האבדה:"
   },
   {
    "dh": "ואינה לפי כבודו",
    "text": " — אין האבדה חשובה לפי כבודו להשיבה:"
   },
   {
    "dh": "או שהיתה מלאכתו מרובה",
    "text": " — שדמי בטול מלאכתו לרדוף אחריה יתרים על דמי האבדה ולא ירצו הבעלים להשיב לו יותר ממה שמשיב להם ונמצא הוא מפסיד:"
   },
   {
    "dh": "ונגמר מינה",
    "text": " — לגבי כלאים דאמרן פושטן אפילו בשוק:"
   },
   {
    "dh": "ממונא",
    "text": " — קל מאיסורא:"
   },
   {
    "dh": "ולאחותו מה תלמוד לומר",
    "text": " — בנזיר כתיב כל ימי הזירו לה' על נפש מת לא יבא וסמיך ליה לאביו ולאמו לאחיו ולאחותו לא יטמא להם דהא כולהו בכלל על נפש מת לא יבא היו ולמה יצאו לאביו פרט למת מצוה לאמו מה תלמוד לומר משום מת מצוה לא איצטריך דמלאביו נפקא ודרשי ליה בספרי ללמוד שאם היה נזיר זה כהן דהוו עליה שתי קדושות אף הוא לאמו הוא דלא יטמא אבל מטמא הוא למת מצוה לאחיו מה תלמוד לומר הרי שהיה כ\"ג והוא נזיר אף הוא לאחיו לא יטמא אבל מטמא למת מצוה ולאחותו מה תלמוד לומר אם אינו ענין לזה תנהו ענין למי שהולך לשחוט את פסחו ולמול את בנו שמטמא למת מצוה:"
   },
   {
    "dh": "ושמע שמת לו מת",
    "text": " — מקרוביו יכול יטמא להם:"
   },
   {
    "dh": "אמרת לא יטמא",
    "text": " — הואיל ועונת שחיטת הפסח היא וחלה עליו חובת הפסח שהוא בכרת אם יטמא בטל מלעשות פסח ולמול את בנו נמי מצות כרת היא. ואית דאמרי בערבי פסחים נמי קאמר דמילת זכריו מעכב הפסח:"
   }
  ],
  "tosafot": [
   {
    "dh": "מדלגין היינו על גבי ארונות",
    "text": " — תימה לפ\"ה דפי' גולל כיסוי של ארון דתני' כל אשר יגע על פני השדה לרבות גולל ודופק וא\"כ גם הגולל מטמא באהל והיאך היו מדלגין עליו וי\"ל דלא קשה דהא תני' בשמחות (פ\"ד הלכה כא) כל טומאה שאין הנזיר מגלח עליה אין כהן מוזהר עליה וגולל ודופק אין נזיר מגלח עליהן כדתנן במס' נזיר פרק כהן גדול (נזיר דף נד.) והיה אומר ר\"ת דליתי' להני כללי דהא אמר התם רביעית דם אין הנזיר מגלח עליו עד שיהא חצי לוג ואפילו הכי כהן מוזהר עליו כדאמרינן בפרק בהמה המקשה (חולין דף עב.) דרביעית דם הבא מב' מתים טמא ומפקינן ליה מעל כל נפשות מת לא יבא וי\"ל דהתם מכל מקום הוי שם טומאה שהנזיר מגלח עליה אבל גולל ודופק אינו כלל בנזיר ולכך אין כהן מוזהר עליו אי נמי הא ברייתא סברה כזקנים הראשונים [נזיר נג.] שהיו אומרי' רביעית דם גם בתגלחת נזיר ומיהו תימא אמאי אין המת מטמא באהל כיון שהכסוי עצמו מקבל טומאה דכל דבר המקבל טומאה אינו חוצץ בפני הטומאה אם כן מטמא באהל וי\"ל דאין מטמא אלא צד חיצון שבו אבל צד פנימי טהור כדתנן במסכת אהלות בפט\"ו (משנה ט) חבית שהיא מלאה משקין טהורים ומוקפת צמיד פתיל ועשאה גולל לקבר הנוגע בה מטמא טומאת שבעה והחבית והמשקין טהורין לפי שצד פנימי כולו טהור ומיהו תימה לפ\"ה דפירש בפ\"ק דערובין (דף טו) גבי אין עושין מבעלי חיים גולל ודופק לקבר ואי גולל היינו כסוי הארון וכי עושין מבעלי חיים כסוי לארון ע\"כ פר\"ת דגולל היינו מצבה וכן דרך בני אדם ליתן בהמה על הקבר לסימן עד שיתנו עליו מצבה:"
   },
   {
    "dh": "רוב ארונות יש להם חלל טפח",
    "text": " — וצ\"ל שראש הארון פתוח שאם היה סתום אדרבה כי יש בו פותח טפח מטמא ואפילו בצד הריקן שבו כדאמרינן במסכת אהלות בפ\"ז (מ\"א) נפש אטומה הנוגע בה מן הצדדין טהור פי' בצד הריקן מפני שטומאה בוקעת ועולה בוקעת ויורדת ואם היה מקום הטומאה טפח ע\"ט על רום טפח הנוגע בה מכל מקום טמא מפני שהוא כקבר סתום אלמא בקבר סתום אינו מטמא כל סביביו אלא כשיש עליו טפח אבל בטומאה רצוצה אינו מטמא אלא כנגד הטומאה ולא מצד הריקן ובפרק המוכר פירות (ב\"ב דף ק:) יש להאריך:"
   },
   {
    "dh": "ולאחותו מה ת\"ל",
    "text": " — גבי נזיר כתיב על (כל נפשות) [נפש] מת לא יבא וכתיב בתריה לאביו ולאמו לאחיו ולאחותו לא יטמא וכולהו יתירי נינהו דמנפש מת נפקא ודרשינן לאביו מה תלמוד לומר לגופיה לא איצטריך דהא מנפש מת נפקא כולהו ולא בא אלא להוציא מת מצוה שמותר לטמא בו לאמו מה תלמוד לומר לגופיה לא איצטריך ולהתיר מת מצוה דמלאביו נפקא אלא להביא שאם היה נזיר וכהן שיש עליו שתי קדושות אין הכתוב מזהירו מלטמא אלא לאמו אבל מטמא הוא למת מצוה לאחיו מה תלמוד לומר שאם היה כהן גדול ונזיר דקדושתו חמור דגם בלא נזירות אסור לטמא לקרוביו אעפ\"כ לאחיו הוא דאינו מטמא אבל מטמא הוא למת מצוה ואם אינו ענין לנזיר גרידא ולא לכהן הדיוט נזיר תנהו ענין לכ\"ג נזיר ולאחותו מה תלמוד לומר הרי שאם היה כ\"ג ונזיר והלך לשחוט פסחו ולמול את בנו דאיכא מצות טובא אפ\"ה לאחותו הוא דאינו מטמא אבל מטמא למת מצוה:"
   },
   {
    "dh": "אמרת לא יטמא",
    "text": " — מפני שקאי על אדם שהוא נזיר וכהן גדול ועושה פסח משמע דעושה פסח גרידא רשאי לטמא לקרובים ותימה דבזבחים (פי\"ב דף ק.) גבי מעשה דיוסף הכהן שמתה אשתו בערב פסח וטמאוהו אחיו בע\"כ ופריך מהא ברייתא דהכא דקאמר לא יטמא ומאי פריך דילמא שאני הכא דמיירי דכל קדושות האלו בו כדפרישי' אבל עושה פסחו גרידא אימא רשאי לטמא על כן נראה לפרש אמרת לא יטמא אפי' עושה פסחו גרידא וא\"ת מהיכא פשיטא ליה אמרת לא יטמא וי\"ל כדפירש\"י דלא אתי עשה שאין בו כרת כטומאת קרובים וידחה עשה שיש בו כרת כגון עושה פסח וגם מילה שייך בה כרת וא\"ת התם דפריך על מעשה דיוסף הכהן מנ\"ל [לתלמודא] דהכא מיירי בעושה פסחו לחוד וי\"ל מדלא כייל גבי עושה פסחו כמו גבי אחרים מי שהיה נזיר וכהן הדיוט דמעיקרא נקט נזיר לחוד ואח\"כ נזיר וכהן הדיוט וכו' וא\"ת מנא ליה (לתלמודא) דהאי קרא בעושה פסחו ולמול את בנו הא קרא כתיב בנזיר וי\"ל אם אינו ענין בנזיר דהא כתיבי פסוקים אחרים דמטמא במת מצוה תנהו ענין להולך לשחוט פסחו וכו'. והשר מקוצי מיישב פירש\"י דמיירי הכא דיש בו כל הקדושות הללו כו' ומ\"מ פריך התם גבי יוסף הכהן דע\"כ אף בעושה פסח גרידא אינו רשאי לטמא דאי ס\"ד עושה פסח מטמא לקרובים. ולאחותו למה לי למימר דמטמא למת מצוה כיון דמטמא לקרובים אלמא עושה פסחו אינו מעלה עליו שום חומרא טפי א\"כ פשיטא דמטמא למת מצוה וכי תימא מכל מקום צריך קרא דמטמא למת מצוה מפני שיש בו ג' קדושות נזיר וכהן ועושה פסח ולעולם אימא לך דעושה פסח גרידא מטמא לקרובים לא היא דהא כבר שמעינן מלאביו ולאמו ולאחיו דנזיר וכ\"ג לא מהני מידי למת מצוה א\"כ ע\"כ קראי לא אצטריכו אלא למעלה דפסח ולמה לי פשיטא דאי מטמא לקרובים כ\"ש למת מצוה ואע\"ג דאצטריך קרא דלאמו לכהן הדיוט ונזיר דמטמא למת מצוה אע\"ג דכתב קרא דמטמא לקרובים ואצטריך קרא שהן ב' קדושות אע\"ג דשמעינן כבר דמעלה דנזיר לא מהני מידי למת מצוה מלאביו ה\"מ כהן דקדושתו קדושת עולם ומשום הכי יש לנו לומר כי יש לו שתי קדושות דטפי קדושה ולכך אצטריך קרא אבל עושה פסח שקדושתו לפי שעה אם אתה מתיר לו לקרובים ה\"ה למת מצוה מכ\"ש דמאי חזית ליתן לו קדושה טפי גבי מת מצוה יותר מן הקרובים. א\"נ יש לפרש בקוצר הברייתא מדתניא גרידא על ישראל נזיר ואח\"כ נזיר וכהן הדיוט ואח\"כ נזיר וכ\"ג וא\"כ מסברא יש לנו לומר (כי יש) דאינו מטמא לקרובים כמו נזיר וכלהו אינך ודוק מעצמך:"
   }
  ],
  "translations": []
 },
 {
  "id": "20a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כ",
  "amud": "א",
  "dafEn": "20a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אבל מטמא הוא למת מצוה אמאי לימא אין חכמה ואין תבונה ואין עצה לנגד ה' שאני התם דכתיב ולאחותו וליגמר מינה שב ואל תעשה שאני: אמר ליה רב פפא לאביי מאי שנא ראשונים דאתרחיש להו ניסא ומאי שנא אנן דלא מתרחיש לן ניסא אי משום תנויי בשני דרב יהודה כולי תנויי בנזיקין הוה ואנן קא מתנינן שיתא סדרי וכי הוה מטי רב יהודה בעוקצין האשה שכובשת ירק בקדרה ואמרי לה זיתים שכבשן בטרפיהן טהורים אמר הויות דרב ושמואל קא חזינא הכא ואנן קא מתנינן בעוקצין תליסר מתיבתא ואילו רב יהודה כי הוה שליף חד מסאניה אתי מטרא ואנן קא מצערינן נפשין ומצוח קא צוחינן ולית דמשגח בן אמר ליה קמאי הוו קא מסרי נפשייהו אקדושת השם אנן לא מסרינן נפשין אקדושת השם כי הא דרב אדא בר אהבה חזייה לההיא כותית דהות לבישא כרבלתא בשוקא סבר דבת ישראל היא קם קרעיה מינה אגלאי מילתא דכותי היא שיימוה בארבע מאה זוזי א\"ל מה שמך אמרה ליה מתון אמר לה מתון מתון ארבע מאה זוזי שויא: רב גידל הוה רגיל דהוה קא אזיל ויתיב אשערי דטבילה אמר להו הכי טבילו והכי טבילו אמרי ליה רבנן לא קא מסתפי מר מיצר הרע אמר להו דמיין באפאי כי קאקי חיורי ר' יוחנן הוה רגיל דהוה קא אזיל ויתיב אשערי דטבילה אמר כי סלקן בנות ישראל ואתיין מטבילה מסתכלן בי ונהוי להו זרעא דשפירי כוותי אמרי ליה רבנן לא קא מסתפי מר מעינא בישא אמר להו אנא מזרעא דיוסף קא אתינא דלא שלטא ביה עינא בישא דכתיב (בראשית מט, כב) בן פורת יוסף בן פורת עלי עין ואמר רבי אבהו אל תקרי עלי עין אלא עולי עין רבי יוסי ברבי חנינא אמר מהכא (בראשית מח, טז) וידגו לרוב בקרב הארץ מה דגים שבים מים מכסין עליהם ואין עין הרע שולטת בהם אף זרעו של יוסף אין עין הרע שולטת בהם ואב\"א עין שלא רצתה לזון ממה שאינו שלו אין עין הרע שולטת בו:  נשים ועבדים וקטנים פטורין מק\"ש",
  "rashi": [
   {
    "dh": "אבל מטמא הוא למת מצוה",
    "text": " — והוא כבוד הבריות ודוחה דבר תורה:"
   },
   {
    "dh": "שב ואל תעשה שאני",
    "text": " — דברים רבים התירו לעקור דבר תורה מפני סייג ומפני כבוד הבריות היכא דאינו עוקר דבר במעשה ידים אלא יושב במקומו ודבר תורה נעקר מאליו כגון תקיעת שופר ולולב בשבת וסדין בציצית ודכוותייהו טובא ביבמות (דף צ:) אבל מעקר בידים לא והלובש כלאים עוקרו במעשה ממש שהוא לובשו וטומאת גופי' שהותרה לכהן ולנזיר ליטמא למת מצוה דקא מעקר בידים מפני כבוד הבריות דלאו שב ואל תעשה הוא היינו טעמא דלא גמרינן מיניה דהתם לאו כבוד הבריות הוא דדחי לא תעשה דידה דמעיקרא כשנכתב ל\"ת דטומאה לא על מת מצוה נכתב כשם שלא נכתב על הקרובים אבל השבת אבדה ופסח לכל ישראל נאמר ואצל כבוד הבריות נתנו לדחות ע\"כ היינו דדחייתן אינה בידים אלא בישיבתו תדחה המצוה אבל כלאים דבמעשה ידיו ידחה הזהיר באזהרתו:"
   },
   {
    "dh": "בנזיקין הוה",
    "text": " — לא היו גדולים בכל גמרא של ד' סדרים אלא בתלתא בבי שלנו והאי מילתא נקט הכא משום דמיירי שמוסרין נפשם על קדושת השם ועד השתא איירי נמי במי שמבזה עצמו על קדושת השם לפשוט כלאים בשוק:"
   },
   {
    "dh": "האשה שכובשת ירק או זיתים שכבשן בטרפיהן",
    "text": " — משנה היא במס' עוקצין:"
   },
   {
    "dh": "טהורים",
    "text": " — שמוסקין זיתים עם העלין כדי לאחזן בהן דהוו להו עלין יד לזיתים להביא להם טומאה כדאמרינן בהעור והרוטב (דף קיח.) שהיד מביא טומאה על האוכל ואם כבשן בטרפיהן בחומץ בטלה תורת יד מן העלין לפי שהכבישה מרקבתן ומרככתן ואינן ראוין שוב לאחוז בהן:"
   },
   {
    "dh": "הויות דרב ושמואל קא חזינא הכא",
    "text": " — כלומר טעם המשניות הללו קשה עלי ככל הקושיות שהיו שני רבותי מתקשין בהן בכל הגמ':"
   },
   {
    "dh": "בתליסר מתיבתא",
    "text": " — בי\"ג פנים יש בינינו משנה וברייתא של ששה סדרים ומסכת עוקצין גם היא בי\"ג פנים כגון משנת רבי ור' חייא ומשנת בר קפרא ולוי ותנא דבי שמואל והכי אמרינן במסכת נדרים (דף מא.) רבי מתני הלכתא בי\"ג פנים:"
   },
   {
    "dh": "כרבלתא",
    "text": " — שם לבוש חשוב כמו פטשיהון וכרבלתהון (דניאל ג):"
   },
   {
    "dh": "מתון מתון",
    "text": " — לשון מאתן:"
   },
   {
    "dh": "ד' מאות",
    "text": " — ב' פעמים ב' מאות כלומר השם גרם לי. לשון אחר מתון מתון לשון המתנה אם המתנתי הייתי משתכר ד' מאות זוז:"
   },
   {
    "dh": "כי קאקי חיורי",
    "text": " — אווזים לבנים:"
   },
   {
    "dh": "ר' יוחנן",
    "text": " — אדם יפה תואר היה דאמרי' בהשוכר את הפועלים (דף פד.) שופריה דר' אבהו מעין שופריה וכו':"
   },
   {
    "dh": "עולי עין",
    "text": " — מסולקין מן העין שאינה שולטת בהן:"
   },
   {
    "dh": "שלא רצתה לזון",
    "text": " — ליהנות מאשת אדוניו:"
   },
   {
    "dh": "מתני' נשים ועבדים וקטנים פטורים מק\"ש",
    "text": " — שהיא מצות עשה שהזמן גרמא וקי\"ל בקדושין (דף כט.) דנשים פטורות מדאורייתא ותפילין נמי מ\"ע שהזמן גרמא דסבר לילה ושבת לאו זמן תפילין נינהו:"
   },
   {
    "dh": "קטנים",
    "text": " — אפי' קטן שהגיע לחנוך לא הטילו על אביו לחנכו בק\"ש לפי שאינו מצוי תמיד כשמגיע זמן ק\"ש:"
   }
  ],
  "tosafot": [
   {
    "dh": "שב ואל תעשה שאני",
    "text": " — וא\"ת נזיר וכ\"ג קום עשה הוא דיטמא למת ותירץ רש\"י דקרא גלי לן דלאו דלא יטמא לא נאמר גבי מת מצוה ולא נהירא דא\"כ כל מקום דאמרי' שעשה דוחה ל\"ת לקרי שב ואל תעשה וכו' והיאך קרי ליה דחייה אימא שאינו דחייה דהתם לא נאמר הלאו ועוד דהא מילה ותמיד ופסח דדחו שבת כדאמרינן פרק אלו דברים (פסחים דף סט:) אלמא מקרי שפיר דחייה. אלא נראה דמנזיר לא גמרינן דמה לנזיר שכן ישנו בשאלה וכן מכהן מה לכהן שכן לאו שאינו שוה בכל:"
   },
   {
    "dh": "זיתים שכבשן בטרפיהן טהורים",
    "text": " — פירש הקונטרס כיון דכבשן בקדרה בטלים מתורת יד להביא טומאה ולא נהירא דא\"כ מאי האי דקאמר עלה שלא נכבשו אלא למראה מה נתינת טעם יש דבטלינהו מתורת יד לכך נראה לפרש דטהורים משום דאותן עלין לא חשיבי אוכל שאינן ראויין לאכילה אלא ע\"י אותה כבישה בקדרה שלא נכבשו אלא למראה כלומר מה שכבש העלין עמהן לא כבשן אלא להראות שהזיתים נאים וחדשים ומשום הכי טהורים. אבל כבשן להיות ראויין לאכילה משעה שיהו מתוקנין לראיית אכילה טמאים:",
    "en": "Thirteen schools. There are those who explain that they maintained experts [in Okatzin] in thirteen yeshivot; “thirteen” is not to be taken literally, rather it is a common amplification throughout Talmud, e.g. “thirteen coins” (Chulin 44a). Rashi explains it in a different manner."
   },
   {
    "dh": "תליסר מתיבתא",
    "text": " — יש מפרשין תליסר ישיבות יש בנו שבקיאים ותליסר לאו דוקא אלא לשון הרגיל בגמ' כמו תליסר (חולין מד:) זוזי פשיטי ורש\"י פי' בע\"א:"
   },
   {
    "dh": "וקטנים פטורין מק\"ש",
    "text": " — פירש הקונטרס קטן שהגיע לחנוך ולא נהירא דהא פ' לולב הגזול (סוכה דף מב.) אמרי' קטן היודע לשמור תפילין אביו חייב לקנות לו תפילין אלמא כשהגיע לחנוך דשייכי ביה תפילין חייב בתפילין ובק\"ש נמי יש לחייבו יותר מסתמא מדאשכחן התם קטן היודע לדבר אביו מלמדו תורה ופסוק ראשון של ק\"ש ונראה לר\"ת דמיירי בקטן שלא הגיע לחנוך ומיהו סיפא דקתני וחייבין בתפלה היה ר\"י ר\"ל דמיירי בקטן שהגיע לחנוך דאי לא הגיע לא הוו להו לחייבו בתפלה ולא נהירא דאם כן לא הוו להו קטנים דומיא דנשים ועבדים שפטורים בכל ענין וקטנים אינם פטורים אלא בשלא הגיע ואין יודע לשמור תפיליו ופי' ר\"ת דודאי איירי הכל בקטן שלא הגיע לחנוך וחייבין דסיפא קאי אנשים ועבדים לחוד אבל קטנים פטורים מכל וכל כיון דלא הגיע לחנוך וא\"ת א\"כ אמאי תנא קטנים בהדי נשים ועבדים כיון דאין שוין כדפרישית וי\"ל דכן דרך התנא לשנות יחד נשים ועבדים וקטנים שלא הגיעו לחנוך כמו נשים ועבדים וקטנים פטורים מסוכה (סוכה דף כח.):"
   }
  ],
  "translations": []
 },
 {
  "id": "20b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כ",
  "amud": "ב",
  "dafEn": "20b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ומן התפלין וחייבין בתפלה ובמזוזה ובברכת המזון: גמ׳ ק\"ש פשיטא מצות עשה שהזמן גרמא הוא וכל מצות עשה שהזמן גרמא נשים פטורות מהו דתימא הואיל ואית בה מלכות שמים קמ\"ל: ומן התפלין: פשיטא מהו דתימא הואיל ואתקש למזוזה קמ\"ל: וחייבין בתפלה: דרחמי נינהו מהו דתימא הואיל וכתיב בה (תהלים נה, יח) ערב ובקר וצהרים כמצות עשה שהזמן גרמא דמי קמ\"ל: ובמזוזה: פשיטא מהו דתימא הואיל ואתקש לתלמוד תורה קמשמע לן: ובברכת המזון: פשיטא מהו דתימא הואיל וכתיב (שמות טז, ח) בתת ה' לכם בערב בשר לאכל ולחם בבקר לשבע כמצות עשה שהזמן גרמא דמי קמ\"ל: אמר רב אדא בר אהבה נשים חייבות בקדוש היום דבר תורה אמאי מצות עשה שהזמן גרמא הוא וכל מצות עשה שהזמן גרמא נשים פטורות אמר אביי מדרבנן א\"ל רבא והא דבר תורה קאמר ועוד כל מצות עשה נחייבינהו מדרבנן אלא אמר רבא אמר קרא (שמות כ, ז) זכור (דברים ה, יא) ושמור כל שישנו בשמירה ישנו בזכירה והני נשי הואיל ואיתנהו בשמירה איתנהו בזכירה א\"ל רבינא לרבא נשים בברכת המזון דאורייתא או דרבנן למאי נפקא מינה לאפוקי רבים ידי חובתן אי אמרת (בשלמא) דאורייתא אתי דאורייתא ומפיק דאורייתא (אלא אי) אמרת דרבנן הוי שאינו מחוייב בדבר וכל שאינו מחוייב בדבר אינו מוציא את הרבים ידי חובתן מאי ת\"ש באמת אמרו בן מברך לאביו ועבד מברך לרבו ואשה מברכת לבעלה אבל אמרו חכמים תבא מארה לאדם שאשתו ובניו מברכין לו אי אמרת בשלמא דאורייתא אתי דאורייתא ומפיק דאורייתא אלא אי אמרת דרבנן אתי דרבנן ומפיק דאורייתא ולטעמיך קטן בר חיובא הוא אלא הכי במאי עסקינן כגון שאכל שיעורא דרבנן דאתי דרבנן ומפיק דרבנן: דרש רב עוירא זמנין אמר לה משמיה דר' אמי וזמנין אמר לה משמיה דר' אסי אמרו מלאכי השרת לפני הקב\"ה רבש\"ע כתוב בתורתך (דברים י, יז) אשר לא ישא פנים ולא יקח שחד והלא אתה נושא פנים לישראל דכתיב (במדבר ו, כו) ישא ה' פניו אליך אמר להם וכי לא אשא פנים לישראל שכתבתי להם בתורה (דברים ח, י) ואכלת ושבעת וברכת את ה' אלהיך והם מדקדקים [על] עצמם עד כזית ועד כביצה:  בעל קרי מהרהר בלבו ואינו מברך לא לפניה ולא לאחריה ועל המזון מברך לאחריו ואינו מברך לפניו רבי יהודה אומר מברך לפניהם ולאחריהם: גמ׳ אמר רבינא זאת אומרת הרהור כדבור דמי דאי סלקא דעתך לאו כדבור דמי למה מהרהר אלא מאי הרהור כדבור דמי יוציא בשפתיו כדאשכחן בסיני ורב חסדא אמר הרהור לאו כדבור דמי דאי סלקא דעתך הרהור כדבור דמי יוציא בשפתיו אלא מאי הרהור לאו כדבור דמי למה מהרהר אמר רבי אלעזר כדי שלא יהו כל העולם עוסקין בו והוא יושב ובטל ונגרוס בפרקא אחרינא אמר רב אדא בר אהבה בדבר שהצבור עוסקין בו",
  "rashi": [
   {
    "dh": "ומן התפלין",
    "text": " — משום דסתם קטן אינו יודע לשמור גופו שלא יפיח בהן:",
    "en": "consecration of the day … a positive commandment that is time-determined:Remember the Sabbath Day to consecrated it (Exodus): Remember it using wine. (Pesachim 106a)"
   },
   {
    "dh": "וחייבין בתפלה",
    "text": " — דתפלה רחמי היא ומדרבנן היא ותקנוה אף לנשים ולחנוך קטנים:",
    "en": "in keeping: of do not do labor. (ibid.).."
   },
   {
    "dh": "ובמזוזה ובברכת המזון",
    "text": " — מזוזה מצות עשה שלא הזמן גרמא ובגמרא פריך פשיטא:",
    "en": "and these women, since they are included in keeping: As we learn (Kiddushin 29a): All negative commandments, whether time-determined or not, are obligatory for women, since Scripture equated the woman with the man regarding all Torah punishments."
   },
   {
    "dh": "ברכת המזון",
    "text": " — בגמרא בעי לה דאורייתא או דרבנן:"
   },
   {
    "dh": "גמ' מהו דתימא נקיש תפלין למזוזה",
    "text": " — דכתיב וקשרתם וכתבתם מה מזוזה נשים חייבות אף תפילין נשים חייבות קמשמע לן:"
   },
   {
    "dh": "הכי גרסינן תפלה דרחמי נינהו",
    "text": " — ולא גרס פשיטא דהא לאו דאורייתא היא:"
   },
   {
    "dh": "נקיש מזוזה לתלמוד תורה",
    "text": " — דכתיב (דברים יא) ולמדתם אותם את בניכם וסמיך ליה וכתבתם מה תלמוד תורה נשים פטורות ואע\"ג דאין הזמן גרמא רחמנא פטרינהו דכתיב את בניכם ולא בנותיכם אף מזוזה נשים פטורות קמ\"ל דנשים חייבות דכתיב למען ירבו ימיכם גברי בעו חיי נשי לא בעי חיי בתמיה:"
   },
   {
    "dh": "קדוש היום מ\"ע שהזמן גרמא הוא",
    "text": " — זכור את יום השבת לקדשו (שמות כ) זכרהו על היין:"
   },
   {
    "dh": "בשמירה",
    "text": " — דלא תעשה מלאכה (שם):"
   },
   {
    "dh": "והני נשי איתנהו בשמירה",
    "text": " — דתנן (קדושין דף כט.) כל מצות לא תעשה בין שהזמן גרמא בין שאין הזמן גרמא נשים חייבות דהשוה הכתוב אשה לאיש לכל עונשים שבתורה:"
   },
   {
    "dh": "נשים בברכת המזון דאורייתא",
    "text": " — דכתיב ואכלת ושבעת (דברים ח׳:י׳) והוה ליה מצות עשה שאין הזמן גרמא:"
   },
   {
    "dh": "או דרבנן",
    "text": " — דכתיב על הארץ הטובה אשר נתן לך (שם) והארץ לא נתנה לנקבות להתחלק ואי משום בנות צלפחד חלק אביהם הם דנטלו שהיה מיוצאי מצרים:"
   },
   {
    "dh": "בן",
    "text": " — קטן:"
   },
   {
    "dh": "מברך",
    "text": " — ברכת המזון לאביו אם אין אביו יודע לברך:"
   },
   {
    "dh": "שיעורא דרבנן",
    "text": " — כגון כזית לר\"מ וכביצה לרבי יהודה דמדאורייתא ואכלת ושבעת וברכת כתיב אבל בשיעור כי האי לא מחייב אלא מדרבנן והלכך אתי קטן דרבנן ומפיק גדול:"
   },
   {
    "dh": "עד כזית עד כביצה",
    "text": " — עד כזית לר\"מ עד כביצה לר' יהודה דתנן (לקמן ברכות דף מה.) עד כמה מזמנין ר\"מ אומר עד כזית ר' יהודה אומר עד כביצה:"
   },
   {
    "dh": "מתני' בעל קרי",
    "text": " — מתקנת עזרא ואילך שתקן טבילה לבעלי קריין לעסוק בתורה כדאמרינן בב\"ק בפרק מרובה (בבא קמא דף פב:):"
   },
   {
    "dh": "מהרהר",
    "text": " — ק\"ש בלבו כשמגיע זמן המקרא:"
   },
   {
    "dh": "ואינו מברך",
    "text": " — אפילו בהרהור:"
   },
   {
    "dh": "לא לפניה ולא לאחריה",
    "text": " — כיון דברכות לאו מדאורייתא מחייב לא אצרכוהו רבנן:"
   },
   {
    "dh": "ועל המזון מברך לאחריו",
    "text": " — דחיובא דאורייתא הוא:"
   },
   {
    "dh": "ואינו מברך לפניו",
    "text": " — דלאו דאורייתא הוא:"
   },
   {
    "dh": "רבי יהודה אומר וכו'",
    "text": " — בגמרא מפרש לה:"
   },
   {
    "dh": "גמ' כדבור דמי",
    "text": " — וכל אדם נמי יוצא ידי חובתו בהרהור:"
   },
   {
    "dh": "למה מהרהר",
    "text": " — מה מועיל:"
   },
   {
    "dh": "כדאשכחן בסיני",
    "text": " — שהפרישן מאשה דכתיב אל תגשו אל אשה (שמות י״ט:ט״ו) ועל פרישה זו סמך עזרא לתקן טבילה לבעלי קריין קודם שיעסקו בתורה דכתיב (דברים ד׳:י׳) והודעתם לבניך וסמיך ליה יום אשר עמדת לפני ה' אלהיך בחורב כדאמרינן לקמן בפרקין (ברכות דף כא:):"
   }
  ],
  "tosafot": [
   {
    "dh": "בתפילה פשיטא כיון דכתיב ערב ובקר וצהרים אשיחה ואהמה כמצות עשה שהזמן גרמא הוי קמ\"ל דרחמי נינהו",
    "text": " — ורש\"י לא גריס ליה שהרי תפלה דרבנן היא ומאי מ\"ע שייכי ביה. ומ\"מ יש ליישב דהא הלל דרבנן ונשים פטורות מהאי טעמא דמצות עשה שהזמן גרמא הוא כדאמרינן בסוכה (דף לח.) מי שהיה עבד ואשה או קטן מקרין אותו עונה אחריהן מה שהם אומרים דאין השומע פטור מקריאתן כיון שהם פטורים:"
   },
   {
    "dh": "אית דגרסי בברכת המזון פשיטא. ומשני כיון דכתיב בתת ה' לכם בערב בשר לאכול ולחם בבקר לשבוע כמ\"ע שהזמן גרמא הוא קמ\"ל",
    "text": ""
   },
   {
    "dh": "נשים בברכת המזון דאורייתא או דרבנן",
    "text": " — פי' הקונטרס דסלקא דעתך דלא מחייבי מדאורייתא משום דכתיב על הארץ הטובה ונשים לא נטלו חלק בארץ ומה שנטלו בנות צלפחד חלק אביהם נטלו. ותימה כהנים ולוים נמי תבעי שהרי לא נטלו חלק בארץ וא\"כ לא יוציאו אחרים ידי חובתן בברכת המזון אלא י\"ל דטעמא משום דכתיב על בריתך שחתמת בבשרנו ועל תורתך שלמדתנו ונשים ליתנהו לא בברית ולא בתורה ואמרינן לקמן (ברכות דף מט.) מי שלא אמר ברית ותורה בברכת המזון לא יצא ידי חובתו והשתא קא מבעיא ליה כיון דלא מצו למימר ברית ותורה לא הוו אלא מדרבנן או דלמא כיון דלא שייך בהו הוי שפיר דאורייתא והא דלקמן מיירי באנשים דשייכי בברית ותורה:"
   },
   {
    "dh": "בעל קרי מהרהר בלבו ואינו מברך לא לפניה ולא לאחריה",
    "text": " — פי' אפילו בהרהור כדמשמע בגמ' והיינו טעמא דשרינא טפי בק\"ש מברכות משום דק\"ש דאורייתא וברכות דרבנן ואפי' למ\"ד ק\"ש דרבנן היינו היכא דהזכיר יציאת מצרים אבל מתניתין שלא הזכיר יציאת מצרים שלא התירו לו לומר אמת ויציב והוי ק\"ש דאורייתא ואמת ויציב דרבנן שהרי הזכיר יציאת מצרים בק\"ש ואין להקשות נתקן דלימא אמת ויציב ולא לימא ק\"ש דהא עדיף דלימא ק\"ש דאית ביה נמי מלכות שמים:"
   },
   {
    "dh": "יוציא בשפתיו",
    "text": " — כיון דשרית ליה הרהור אע\"פ שהוא כדבור לענין לצאת ידי ק\"ש כמו כן מקרי דבור לענין דמקרי עוסק בתורה ומדשרית ליה להרהר אע\"פ שהוא בעל קרי תתיר לו גם דבור:"
   },
   {
    "dh": "כדאשכחן בסיני",
    "text": " — פירוש אף ע\"ג דכדבור דמי לענין שיצא מ\"מ לאו כדבור דמי לענין שיהא בעל קרי אסור להרהר כדאשכחן בסיני דהיה שם דבור והיו צריכין לטבול ואע\"פ שהיו שותקין שומע כעונה [סוכה לח:]:"
   },
   {
    "dh": "ורב חסדא אמר לאו כדבור דמי",
    "text": " — ר\"ח פירש דהלכה כרב חסדא מדתרצי רב אדא ורבי אלעזר למלתיה שמע מיניה כותיה קיימי ולא יצא בקריאת שמע בהרהור:"
   }
  ],
  "translations": []
 },
 {
  "id": "21a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כא",
  "amud": "א",
  "dafEn": "21a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "והרי תפלה דדבר שהצבור עסוקין בו ותנן היה עומד בתפלה ונזכר שהוא בעל קרי לא יפסיק אלא יקצר טעמא דאתחיל הא לא אתחיל לא יתחיל שאני תפלה דלית בה מלכות שמים והרי ברכת המזון לאחריו דלית בה מלכות שמים ותנן על המזון מברך לאחריו ואינו מברך לפניו אלא ק\"ש וברכת המזון דאורייתא ותפלה דרבנן: אמר רב יהודה מנין לברכת המזון לאחריה מן התורה שנאמר (דברים ח, י) ואכלת ושבעת וברכת מנין לברכת התורה לפניה מן התורה שנאמר (דברים לב, ג) כי שם ה' אקרא הבו גדל לאלהינו אמר ר' יוחנן למדנו ברכת התורה לאחריה מן ברכת המזון מקל וחומר וברכת המזון לפניה מן ברכת התורה מקל וחומר ברכת התורה לאחריה מן ברכת המזון מקל וחומר ומה מזון שאין טעון לפניו טעון לאחריו תורה שטעונה לפניה אינו דין שטעונה לאחריה וברכת המזון לפניה מן ברכת התורה מק\"ו ומה תורה שאין טעונה לאחריה טעונה לפניה מזון שהוא טעון לאחריו אינו דין שיהא טעון לפניו איכא למפרך מה למזון שכן נהנה ומה לתורה שכן חיי עולם ועוד תנן על המזון מברך לאחריו ואינו מברך לפניו תיובתא: אמר רב יהודה ספק קרא קריאת שמע ספק לא קרא אינו חוזר וקורא ספק אמר אמת ויציב ספק לא אמר חוזר ואומר אמת ויציב מאי טעמא קריאת שמע דרבנן אמת ויציב דאורייתא מתיב רב יוסף (דברים ו, ז) ובשכבך ובקומך אמר ליה אביי ההוא בדברי תורה כתיב תנן בעל קרי מהרהר בלבו ואינו מברך לא לפניה ולא לאחריה ועל המזון מברך לאחריו ואינו מברך לפניו ואי ס\"ד אמת ויציב דאורייתא לברוך לאחריה מאי טעמא מברך אי משום יציאת מצרים הא אדכר ליה בקריאת שמע ונימא הא ולא לבעי הא קריאת שמע עדיפא דאית בה תרתי ור' אלעזר אמר ספק קרא קריאת שמע ספק לא קרא חוזר וקורא ק\"ש ספק התפלל ספק לא התפלל אינו חוזר ומתפלל ורבי יוחנן אמר ולואי שיתפלל אדם כל היום כולו: ואמר רב יהודה אמר שמואל היה עומד בתפלה ונזכר שהתפלל פוסק ואפילו באמצע ברכה איני והאמר רב נחמן כי הוינן בי רבה בר אבוה בען מיניה הני בני בי רב דטעו ומדכרי דחול בשבת מהו שיגמרו ואמר לן גומרין כל אותה ברכה הכי השתא התם גברא בר חיובא הוא ורבנן הוא דלא אטרחוהו משום כבוד שבת אבל הכא הא צלי ליה: ואמר רב יהודה אמר שמואל התפלל ונכנס לביהכ\"נ ומצא צבור שמתפללין אם יכול לחדש בה דבר יחזור ויתפלל ואם לאו אל יחזור ויתפלל וצריכא דאי אשמעינן קמייתא ה\"מ יחיד ויחיד",
  "rashi": [
   {
    "dh": "אלא יקצר",
    "text": " — כל ברכה וברכה:"
   },
   {
    "dh": "דלית בה מלכות שמים",
    "text": " — אין מלך העולם בברכות של י\"ח:"
   },
   {
    "dh": "ה\"ג והרי ברכת המזון לפניה דאית בה מלכות שמים כו'",
    "text": " — לישנא אחרינא שאני תפלה דלית בה מלכות שמים. קבלת מלכות שמים כדאיתא בק\"ש שמקבל עליו את השם לאדון ולמלך מיוחד ולהאי לישנא גרסינן והרי ברכת המזון לאחריו דלית בה מלכות שמים ולשון זה נראה שהוא עיקר מדמשני ליה אלא ק\"ש וברכת המזון דאורייתא והאי בלאחריו עסקינן ואי ללישנא קמא הא לא איירי בברכת המזון לאחריו בדאתקפתיה דלהדרי תלמודא עילויה אלא ק\"ש וברכת המזון דאורייתא כו'. ואית דגרסי הכא בלשון קושיא ק\"ש דרבנן היא אלא ק\"ש דאית בה מלכות שמים וברכת המזון דאורייתא לאפוקי תפלה דרבנן ואין בה מלכות שמים למאן דגרס הכי מפרשינן לקמן בשכבך ובקומך בדברי תורה כתיב:"
   },
   {
    "dh": "כי שם ה' אקרא",
    "text": " — כשבא משה לפתוח בדברי שירה אמר להם לישראל אני אברך תחלה ואתם ענו אחרי אמן כי שם ה' אקרא בברכה אתם הבו גודל לאלהינו באמן הכי מפרשי לה במסכת יומא (דף לז.):"
   },
   {
    "dh": "שאינו טעון לפניו",
    "text": " — כלומר שלא מצינו לו מקרא מפורש לברך לפניו:"
   },
   {
    "dh": "טעון לאחריו",
    "text": " — כדכתיב ואכלת ושבעת וברכת:"
   },
   {
    "dh": "תורה שטעונה לפניה",
    "text": " — כדאמרן:"
   },
   {
    "dh": "איכא למפרך",
    "text": " — בתרוייהו כשאתה בא ללמוד תורה מן המזון איכא למפרך מה למזון שכן נהנה וכשאתה בא ללמוד מזון מן התורה איכא למפרך מה לתורה שכן חיי העולם הבא:"
   },
   {
    "dh": "ק\"ש דרבנן",
    "text": " — לקמן פריך לה:"
   },
   {
    "dh": "אמת ויציב דאורייתא היא",
    "text": " — שמזכיר בה יציאת מצרים דחיובא דאורייתא היא דכתיב למען תזכר את יום צאתך מארץ מצרים (דברים טז):"
   },
   {
    "dh": "דאית בה תרתי",
    "text": " — יציאת מצרים ומלכות שמים:"
   },
   {
    "dh": "חוזר וקורא ק\"ש",
    "text": " — קסבר ק\"ש דאורייתא היא:"
   },
   {
    "dh": "ולואי שיתפלל אדם כל היום",
    "text": " — בהלכות גדולות פסק הלכה כרבי יוחנן בספק והלכה כשמואל בודאי התפלל:"
   },
   {
    "dh": "מהו שיגמרו",
    "text": " — את הברכה אם נזכר באמצע הברכה באחת מן הברכות שטעה:"
   },
   {
    "dh": "יחיד ויחיד",
    "text": " — כשהתפלל תחלה היה יחיד וכששכח שהתפלל והתחיל להתפלל היה ביחיד:"
   }
  ],
  "tosafot": [
   {
    "dh": "והרי תפלה דדבר שהצבור כו'",
    "text": " — וא\"ת אמאי שבק בבא דק\"ש דקאי בגווה דדבר שהצבור עסוקין בו וקתני אינו מברך לפניה כו'. וי\"ל משום רבותא דתפלה פריך מיניה אע\"ג דתפלה מעומד ונראה לכל שאין זה עומד כמותם אפילו הכי אמרינן אם לא התחיל לא יתחיל. וא\"ת כיון דלא ידע טעמא דבסמוך יקשה גם לרבינא מה לי ק\"ש וברכת המזון יותר מתפלה וי\"ל דלרבינא ניחא כיון דהרהור כדבור דמי יש להצריכו בק\"ש ובברכת המזון שהם מדאורייתא יותר מתפלה דרבנן אבל לרב חסדא כיון דהרהור אינו כלום רק שלא יהא יושב ובטל מה לי ק\"ש מה לי תפלה:"
   },
   {
    "dh": "הא אי לא אתחיל לא יתחיל",
    "text": " — וא\"ת אימא דבדבור קאמר הא בהרהור שפיר דמי וי\"ל דמשמע דלא יתחיל אפי' בהרהור מדלא קאמר יקצר בדבור או יהרהר באריכות:"
   },
   {
    "dh": "הכי גרסי' אלא ק\"ש וברכת המזון דאורייתא ותפלה דרבנן ולא גרסינן מידי בתר הכי עד אמר רב יהודה אמר רב",
    "text": " — ופי' הקונטרס ק\"ש דאורייתא כיון שאינו אומר אמת ויציב כדפי' במתניתין ויש ספרים גורסים ק\"ש דרבנן הוא. ומשני אלא ק\"ש אית בה מלכות שמים וברכת המזון דאורייתא ותפלה דרבנן וכן הגירסא בפ\"ה וקשה דבמתניתין פי' דק\"ש דאורייתא לכולי עלמא כיון שלא אמר אמת ויציב דבהכי מיירי מתניתין וגם יש ספרים גורסים שאני תפלה דלית בה מלכות שמים והרי ברכת המזון דלית בה מלכות שמים ותנן על המזון מברך לאחריו וכו' אלא היינו טעמא דק\"ש אית בה מלכות שמים וברכת המזון דאורייתא ותפלה דרבנן וגם על גירסא זו קשה כדפירש':"
   },
   {
    "dh": "ספק לא אמר אמת ויציב חוזר",
    "text": " — ותימה הא ע\"כ צריך לומר שהוא מסופק גם מק\"ש שאם היה ברור לו מק\"ש וספק מאמת ויציב לא יהיה מן התורה כיון שהזכיר יציאת מצרים בק\"ש ואם כן הואיל ומסופק משניהם יחזור לק\"ש דאית בה תרתי מלכות שמים ויציאת מצרים דהכי עדיף מלומר אמת ויציב דליכא אלא חדא כדאמר בסמוך גבי מתני'. ואומר ר\"י דודאי מתני' גבי בעל קרי שידענו בו שלא אמר ק\"ש ולא אמת ויציב כלל ואנו רוצים להתיר לו הלכך טוב הוא יותר שיאמר ק\"ש דאיכא תרתי אבל הכא שהוא ספק אם אמר אמת ויציב ומספקא ליה אם אמר שניהם כדפרישית טוב הוא יותר שיאמר אמת ויציב מלומר ק\"ש דכשיאמר אמת ויציב שמא יש לתלות שתקן הכל דאם קרא כבר אמת ויציב גם קרא ק\"ש כבר דמסתמא התפלל כדרך תפלה ק\"ש ואח\"כ אמת ויציב ויצא ידי שתיהן וכי נמי תימא דלא אמר כבר שתיהן מ\"מ שמא אמר ק\"ש ולא אמר אמת ויציב שזה יכול להיות ועתה כשיאמר אמת ויציב נמצא שהשלים הכל וכי תימא שמא לא קרא לא זה ולא זה כיון דספיקא הוא כולי האי לא אטרחוהו רבנן לחזור שניהם אבל אם יאמר ק\"ש אין זו תקנה גמורה כל כך דשמא קרא ק\"ש אחרת ולא יצא כלל במה שעושה עתה ואם ברור שלא אמר כבר ק\"ש אם כן לא אמר נמי אמת ויציב שאין רגילות לומר אמת ויציב בלא ק\"ש ואם כן כשיאמר מעתה ק\"ש לא תקן כלל ולא יצא מדי ספקו עוד אמר הר\"ר שמעון דמיירי שפיר שאינו מסופק אלא מאמת ויציב אבל ברור הוא שקרא ק\"ש ואפילו הכי הוי אמת ויציב דאורייתא שר\"ל ספק לא אמר אמת ויציב עם פרשת ציצית שמסופק אי לא אמר לא פרשת ציצית ולא אמת ויציב ואם כן לא הזכיר כלל יציאת מצרים וכולה מילתא דיציאת מצרים קרי ליה אמת ויציב לפי דטעם אמת ויציב הוי משום יציאת מצרים והלכך הוי פרשת ציצית בכלל אמת ויציב:"
   },
   {
    "dh": "ההוא בדברי תורה כתיב",
    "text": " — והא דאמרינן לעיל בפרק קמא (ברכות דף ב.) בערב משום דכתיב ובשכבך אסמכתא בעלמא הוא:"
   },
   {
    "dh": "ורבי יוחנן אמר ולואי שיתפלל אדם כל היום",
    "text": " — אומר ר\"י דהלכה כרבי יוחנן ודוקא בספק התפלל אבל ודאי התפלל לא תדע דהא מסתמא לא פליג אהא דאמר רב יהודה אמר שמואל בסמוך ונזכר שהתפלל פוסק וכו' וכן אם יכול לחדש דבר בתפלתו:"
   }
  ],
  "translations": []
 },
 {
  "id": "21b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כא",
  "amud": "ב",
  "dafEn": "21b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "או צבור וצבור אבל יחיד לגבי צבור כמאן דלא צלי דמי קמ\"ל ואי אשמעינן הכא משום דלא אתחיל בה אבל התם דאתחיל בה אימא לא צריכא אמר רב הונא הנכנס לבית הכנסת ומצא צבור שמתפללין אם יכול להתחיל ולגמור עד שלא יגיע ש\"ץ למודים יתפלל ואם לאו אל יתפלל ריב\"ל אמר אם יכול להתחיל ולגמור עד שלא יגיע ש\"צ לקדושה יתפלל ואם לאו אל יתפלל במאי קא מפלגי מר סבר יחיד אומר קדושה ומר סבר אין יחיד אומר קדושה וכן אמר רב אדא בר אהבה מנין שאין היחיד אומר קדושה שנאמר (ויקרא כב, לב) ונקדשתי בתוך בני ישראל כל דבר שבקדושה לא יהא פחות מעשרה מאי משמע דתני רבנאי אחוה דרבי חייא בר אבא אתיא תוך תוך כתיב הכא ונקדשתי בתוך בני ישראל וכתיב התם (במדבר טז, כא) הבדלו מתוך העדה הזאת מה להלן עשרה אף כאן עשרה ודכולי עלמא מיהת מפסק לא פסיק איבעיא להו מהו להפסיק ליהא שמו הגדול מבורך כי אתא רב דימי אמר ר' יהודה ור\"ש תלמידי דרבי יוחנן אמרי לכל אין מפסיקין חוץ מן יהא שמו הגדול מבורך שאפילו עוסק במעשה מרכבה פוסק ולית הלכתא כותיה: ר' יהודה אומר מברך לפניהם ולאחריהם: למימרא דקסבר רבי יהודה בעל קרי מותר בדברי תורה והאמר ריב\"ל מנין לבעל קרי שאסור בדברי תורה שנאמר (דברים ד, ט) והודעתם לבניך ולבני בניך וסמיך ליה יום אשר עמדת וגו' מה להלן בעלי קריין אסורין אף כאן בעלי קריין אסורין וכי תימא רבי יהודה לא דריש סמוכים והאמר רב יוסף אפילו מאן דלא דריש סמוכים בכל התורה במשנה תורה דריש דהא רבי יהודה לא דריש סמוכין בכל התורה כולה ובמשנה תורה דריש ובכל התורה כולה מנא לן דלא דריש דתניא בן עזאי אומר נאמר (שמות כב, יז) מכשפה לא תחיה ונאמר כל שוכב עם בהמה מות יומת סמכו ענין לו לומר מה שוכב עם בהמה בסקילה אף מכשפה נמי בסקילה אמר ליה ר' יהודה וכי מפני שסמכו ענין לו נוציא לזה לסקילה אלא אוב וידעוני בכלל כל המכשפים היו ולמה יצאו להקיש להן ולומר לך מה אוב וידעוני בסקילה אף מכשפה בסקילה ובמשנה תורה מנא לן דדריש דתניא רבי אליעזר אומר נושא אדם אנוסת אביו ומפותת אביו אנוסת בנו ומפותת בנו ר' יהודה אוסר באנוסת אביו ובמפותת אביו ואמר רב גידל אמר רב מאי טעמא דר' יהודה דכתיב (דברים כג, א) לא יקח איש את אשת אביו ולא יגלה (את) כנף אביו כנף שראה אביו לא יגלה וממאי דבאנוסת אביו כתיב דסמיך ליה ונתן האיש השוכב עמה וגו' אמרי אין במשנה תורה דריש והני סמוכין מבעי ליה לאידך דריב\"ל דאמר ריב\"ל כל המלמד לבנו תורה מעלה עליו הכתוב כאלו קבלה מהר חורב שנאמר (דברים ד, ט) והודעתם לבניך ולבני בניך וכתיב בתריה יום אשר עמדת לפני ה' אלהיך בחורב תנן זב שראה קרי ונדה שפלטה שכבת זרע המשמשת וראתה דם צריכין טבילה ורבי יהודה פוטר עד כאן לא פטר רבי יהודה אלא בזב שראה קרי דמעיקרא לאו בר טבילה הוא אבל בעל קרי גרידא מחייב וכי תימא ה\"ה דאפילו בעל קרי גרידא נמי פטר רבי יהודה והאי דקא מפלגי בזב שראה קרי להודיעך כחן דרבנן אימא סיפא המשמשת וראתה דם צריכה טבילה למאן קתני לה אילימא לרבנן פשיטא השתא ומה זב שראה קרי דמעיקרא לאו בר טבילה הוא מחייבי רבנן המשמשת וראתה דם דמעיקרא בת טבילה היא לא כל שכן אלא לאו ר' יהודה היא ודוקא קתני לה",
  "rashi": [
   {
    "dh": "או צבור וצבור",
    "text": " — בין בראשונה בין בשניה היה עם הצבור כגון עשרה אחר עשרה וזה עמהם בשתיהן ששכח שהתפלל עם הראשונים:"
   },
   {
    "dh": "רב הונא סבר",
    "text": " — יחיד המתפלל עם הצבור אומר קדוש הלכך אם לא גמר עד שלא יגיע ש\"ץ לקדוש לית לן בה אבל מודים אף על פי שיחיד אומר מודים אם אינו אומרו עם הצבור הרואה את כולם כורעים והוא אינו כורע נראה ככופר במי שחבריו משתחוין לו:"
   },
   {
    "dh": "מפסק לא פסיק",
    "text": " — תפלתו לקדושה לענות עם הצבור וכן למודים:"
   },
   {
    "dh": "במשנה תורה דריש",
    "text": " — והאי קרא במשנה תורה הוא נאמר:"
   },
   {
    "dh": "מכשפה לא תחיה",
    "text": " — ולא פירש באיזו מיתה תמות ונאמר אצלו כל שוכב עם בהמה מות יומת:"
   },
   {
    "dh": "סמכו ענין לו",
    "text": " — סמכתו פרשת מכשפה לא תחיה לשוכב עם בהמה:"
   },
   {
    "dh": "מה שוכב עם בהמה בסקילה",
    "text": " — כדאמרינן לה בסנהדרין פרק ד' מיתות (סנהדרין דף נד:) בגזרה שוה דתהרוגו דהכא מכי הרוג תהרגנו דמסית אף מכשף בסקילה:"
   },
   {
    "dh": "אמר ליה רבי יהודה וכי מפני שסמכו הענין",
    "text": " — לשוכב עם בהמה נוציא זה המכשף לסקילה שהיא חמורה מכל מיתות שבתורה אלא מקרא מפורש יש לו במקום אחר שהוא בסקילה:"
   },
   {
    "dh": "אוב וידעוני בכלל",
    "text": " — לא תחיה דכל המכשפים היו ולמה יצאו בפני עצמן כשהפרישן לסקילה כדכתיב באבן ירגמו אותם דמיהם בם להקיש אליהם את כל הכלל שזו מדה בתורה שכל דבר שהיה בכלל ויצא מן הכלל ללמד לא ללמד על עצמו יצא אלא ללמד על הכלל כולו יצא:"
   },
   {
    "dh": "זב שראה קרי וכו'",
    "text": " — לענין טבילה שתקן עזרא לבעלי קריין לעסוק בתורה קאי ולשאר טמאים לא הצריך וקאמר הכא דאם יש לו טומאה אחרת עם הקרי שאינו יכול לצאת ממנה בטבילה זו כגון זב ונדה שהם טמאים טומאת שבעה אפילו הכי צריך לטבול לקריו קודם שיעסוק בתורה:"
   },
   {
    "dh": "פולטת שכבת זרע",
    "text": " — הרי היא כבעל קרי:"
   },
   {
    "dh": "ורבי יהודה פוטר",
    "text": " — קס\"ד דאין טבילה זו מטהרתו מכל וכל:"
   },
   {
    "dh": "המשמשת למאן קתני לה",
    "text": " — להשמיענו כח מי הוצרכו לחלוק בה:"
   },
   {
    "dh": "אילימא לרבנן",
    "text": " — להודיעך כחן דמחייבי בה:"
   },
   {
    "dh": "השתא זב שראה קרי",
    "text": " — שקדמתו טומאת הזיבה מעיקרא:"
   },
   {
    "dh": "דמעיקרא",
    "text": " — בשעה שראה קרי לאו בר טבילה הוא ומחייבי ליה רבנן טבילה לקרי לדברי תורה:"
   },
   {
    "dh": "משמשת וראתה נדה",
    "text": " — דטומאת קרי קדמה וכשראתה הקרי ראויה היתה לטבול מיד:"
   },
   {
    "dh": "לא כ\"ש",
    "text": " — דלא אתיא טומאת נדה שהיא אחרונה ומפקעה לטבילה שנתחייבה בה כבר:"
   },
   {
    "dh": "אלא לאו רבי יהודה",
    "text": " — קתני להודיעך דאפי' היכא דקדם הקרי אתיא טומאת נדה ומפקעה טבילה דאין טבילה אלא המטהרת ואי לרבי יהודה לית ליה תקנת עזרא למה ליה לאשמעינן בהא כל בעלי קריין נמי לא בעו טבילה לדברי תורה הלכך על כרחך דוקא קתני לה:"
   }
  ],
  "tosafot": [
   {
    "dh": "עד שלא יגיע שליח צבור למודים",
    "text": " — וטעמא לפי שצריך לשוח עם הצבור שלא יראה ככופר במי שהצבור משתחוין לו והוא הדין נמי אם יגיע למודים כששליח צבור יגיע למודים דשפיר דמי כיון שהוא משתחוה עם חביריו אבל אין גמרא פסיקא ליה כי האי גוונא אבל אין נראה דמשום מודים דרבנן נקט הכי שמצוה לענות שזה לא מצינו לו עיקר בגמ' ור\"ת היה רגיל כשהיה מתפלל ביחיד כשהחזן מגיע למודים היה כורע עם הקהל בלא אמירה כלל ודוקא באמצע ברכה אבל בסוף ברכה לא דאמר לקמן (ברכות דף לד.) דאסור לשחות בסוף כל ברכה וברכה מיהו לכתחלה אין לעשות כן כדמשמע הכא וכתב רש\"י בסוכה פרק לולב הגזול (סוכה דף לח:) דאדם המתפלל ושמע מפי החזן קדיש או קדושה אינו יכול להפסיק ולענות עם הצבור אלא ישתוק וימתין מעט דשומע כעונה וי\"ל דלכתחלה אין לעשות כן דענייה חשיבא טפי הדור מצוה. ור\"ת ור\"י היו אומרים דאדרבה אי שומע כעונה הוי הפסקה אם שותק. ומ\"מ נהגו העם לשתוק ולשמוע וגדול המנהג. בירושלמי פרק תפלת השחר קאמר לא התפלל ובא ומצאן מתפללין מוסף אם היה יודע שיהיה מתפלל וגומר עד שלא יתחיל ש\"ץ כדי לענות אמן מתפלל אם לאו לא יתפלל. באיזה אמן אמרו פליגי ביה תרי אמוראי חד אמר באמן של האל הקדוש וחד אמר באמן של שומע תפלה ולא פליגי כאן בחול כאן בשבת והא דאמרינן באמן של שומע תפלה היינו בחול לכך יש ליזהר לענות אמן בהאל הקדוש וגם לענות אמן בשומע תפלה ומתוך הירושלמי משמע שהיו רגילין לומר י\"ח ברכות שלמות במוסף של חול כגון בר\"ח ובחול המועד ומיהו אנן סמכינן אהא דאמר פרק תפלת השחר (לקמן ברכות דף כט.) דקאמר תמני סרי תקון תשסרי לא תקון ומה שאנו אומרים עננו בין גואל לרופא לא קשה שאינו אלא לש\"ץ אבל יחיד כוללה בש\"ת ועוד אומר הר\"ר חיים דאיתא בתוספתא (דפ' ת\"ה) בהדיא כמנהגנו דקאמר התם ימים שיש בהן קרבן מוסף כגון ר\"ח וח\"ה ערבית ושחרית מתפלל י\"ח שלמות ואומר מעין המאורע בעבודה ואם לא אמר מחזירים אותו ובמוספים מתפלל שבע ואומר קדושת היום באמצע ובירושלמי נמי י\"ל דטעות סופר הוא ול\"ג של מוסף אלא בא ומצאן מתפללים וכן משמע בירושלמי פרק מי שמתו דגם זו המימרא כתובה שם ולא הזכיר של מוסף כלל:"
   },
   {
    "dh": "אין יחיד מתפלל קדושה",
    "text": " — וכן הלכה אבל המתפלל י\"ח עם החזן לכשיגיע ש\"ץ לקדושה יאמר עם השליח צבור נקדש וכל הקדושה משלם יכול לענות עם הצבור דאין זה קרוי יחיד:"
   }
  ],
  "translations": []
 },
 {
  "id": "22a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כב",
  "amud": "א",
  "dafEn": "22a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "משמשת וראתה נדה אינה צריכה טבילה אבל בעל קרי גרידא מחייב לא תימא מברך אלא מהרהר ומי אית ליה לרבי יהודה הרהור והתניא בעל קרי שאין לו מים לטבול קורא קריאת שמע ואינו מברך לא לפניה ולא לאחריה ואוכל פתו ומברך לאחריה ואינו מברך לפניה אבל מהרהר בלבו ואינו מוציא בשפתיו דברי רבי מאיר רבי יהודה אומר בין כך ובין כך מוציא בשפתיו אמר רב נחמן בר יצחק עשאן ר' יהודה כהלכות דרך ארץ דתניא (דברים ד, ט) והודעתם לבניך ולבני בניך וכתיב בתריה יום אשר עמדת לפני ה' אלהיך בחורב מה להלן באימה וביראה וברתת ובזיע אף כאן באימה וביראה וברתת ובזיע מכאן אמרו הזבים והמצורעים ובאין על נדות מותרים לקרות בתורה ובנביאים ובכתובים לשנות במשנה וגמרא ובהלכות ובאגדות אבל בעלי קריין אסורים רבי יוסי אומר שונה הוא ברגיליות ובלבד שלא יציע את המשנה רבי יונתן בן יוסף אומר מציע הוא את המשנה ואינו מציע את הגמרא רבי נתן בן אבישלום אומר אף מציע את הגמרא ובלבד שלא יאמר אזכרות שבו רבי יוחנן הסנדלר תלמידו של רבי עקיבא משום ר\"ע אומר לא יכנס למדרש כל עיקר ואמרי לה לא יכנס לבית המדרש כל עיקר ר' יהודה אומר שונה הוא בהלכות דרך ארץ מעשה ברבי יהודה שראה קרי והיה מהלך על גב הנהר אמרו לו תלמידיו רבינו שנה לנו פרק אחד בהלכות דרך ארץ ירד וטבל ושנה להם אמרו לו לא כך למדתנו רבינו שונה הוא בהלכות דרך ארץ אמר להם אע\"פ שמיקל אני על אחרים מחמיר אני על עצמי: תניא ר' יהודה בן בתירא היה אומר אין דברי תורה מקבלין טומאה מעשה בתלמיד אחד שהיה מגמגם למעלה מרבי יהודה בן בתירא אמר ליה בני פתח פיך ויאירו דבריך שאין דברי תורה מקבלין טומאה שנאמר (ירמיהו כג, כט) הלא כה דברי כאש נאם ה' מה אש אינו מקבל טומאה אף דברי תורה אינן מקבלין טומאה אמר מר מציע את המשנה ואינו מציע את הגמרא מסייע ליה לרבי אלעאי דאמר רבי אלעאי אמר ר' אחא בר יעקב משום רבינו הלכה מציע את המשנה ואינו מציע את הגמרא כתנאי מציע את המשנה ואינו מציע את הגמרא דברי רבי מאיר רבי יהודה בן גמליאל אומר משום רבי חנינא בן גמליאל זה וזה אסור ואמרי לה זה וזה מותר מ\"ד זה וזה אסור כרבי יוחנן הסנדלר מ\"ד זה וזה מותר כרבי יהודה בן בתירא אמר רב נחמן בר יצחק נהוג עלמא כהני תלת סבי כרבי אלעאי בראשית הגז כרבי יאשיה בכלאים כרבי יהודה בן בתירא בד\"ת כרבי אלעאי בראשית הגז דתניא רבי אלעאי אומר ראשית הגז אינו נוהג אלא בארץ כרבי יאשיה בכלאים כדכתיב (דברים כב, ט) (כרמך) לא תזרע [כרמך] כלאים רבי יאשיה אומר לעולם אינו חייב עד שיזרע חטה ושעורה וחרצן במפולת יד כרבי יהודה בן בתירא בדברי תורה דתניא רבי יהודה בן בתירא אומר אין דברי תורה מקבלין טומאה כי אתא זעירי אמר בטלוה לטבילותא ואמרי לה בטלוה לנטילותא מאן דאמר בטלוה לטבילותא כרבי יהודה בן בתירא מאן דאמר בטלוה לנטילותא כי הא דרב חסדא לייט אמאן דמהדר אמיא בעידן צלותא: תנו רבנן בעל קרי שנתנו עליו תשעה קבין מים טהור נחום איש גם זו לחשה לרבי עקיבא ורבי עקיבא לחשה לבן עזאי ובן עזאי יצא ושנאה לתלמידיו בשוק פליגי בה תרי אמוראי במערבא רבי יוסי בר אבין ורבי יוסי בר זבידא חד תני שנאה וחד תני לחשה מאן דתני שנאה משום בטול תורה ומשום בטול פריה ורביה ומאן דתני לחשה שלא יהו תלמידי חכמים מצויים אצל נשותיהם כתרנגולים אמר רבי ינאי שמעתי שמקילין בה ושמעתי שמחמירין בה וכל המחמיר בה על עצמו מאריכין לו ימיו ושנותיו אמר ריב\"ל מה טיבן של טובלי שחרין מה טיבן הא איהו דאמר בעל קרי אסור בדברי תורה הכי קאמר מה טיבן בארבעים סאה אפשר בתשעה קבין מה טיבן בטבילה אפשר בנתינה אמר רבי חנינא גדר גדול גדרו בה דתניא מעשה באחד שתבע אשה לדבר עבירה אמרה לו ריקא יש לך ארבעים סאה שאתה טובל בהן מיד פירש אמר להו רב הונא לרבנן רבותי מפני מה אתם מזלזלין בטבילה זו אי משום צינה אפשר במרחצאות אמר ליה רב חסדא וכי יש טבילה בחמין אמר ליה רב אדא בר אהבה קאי כוותך רבי זירא הוה יתיב באגנא דמיא בי מסותא אמר ליה לשמעיה זיל ואייתי לי תשעה קבין ושדי עלואי אמר ליה רבי חייא בר אבא למה ליה למר כולי האי והא יתיב בגווייהו אמר ליה כארבעים סאה מה ארבעים סאה בטבילה ולא בנתינה אף תשעה קבין בנתינה ולא בטבילה רב נחמן תקן חצבא בת תשעה קבין כי אתא רב דימי אמר רבי עקיבא ורבי יהודה גלוסטרא אמרו לא שנו אלא לחולה לאונסו אבל לחולה המרגיל ארבעים סאה אמר רב יוסף אתבר חצביה דרב נחמן כי אתא רבין אמר באושא הוה עובדא",
  "rashi": [
   {
    "dh": "לא תימא",
    "text": " — במתני' מברך אלא מהרהר:"
   },
   {
    "dh": "עשאן ר' יהודה",
    "text": " — לברכת המזון:"
   },
   {
    "dh": "כהלכות ד\"א",
    "text": " — שמותר לשנותה בעל קרי כדבריו:"
   },
   {
    "dh": "מה להלן באימה",
    "text": " — דכתיב וירא העם וינועו וגו' (שמות כ):"
   },
   {
    "dh": "מכאן אמרו",
    "text": " — כל הטמאים מותרים בתורה שאף הם יכולים להיות באימה וברתת אבל בעל קרי אינו אלא מתוך קלות ראש וזחות הדעת:"
   },
   {
    "dh": "ובועלי נדות",
    "text": " — אם טבלו לקריין לדברי תורה הטבילה אינה עולה להם לטהרם מטומאת בועל נדה שהיא שבעת ימים אבל לתקנת עזרא עולה להם כדתנן במתניתין זב שראה קרי ונדה כו' צריכין טבילה:"
   },
   {
    "dh": "ברגיליות",
    "text": " — במשניות השגורות בפיו שהוא מוציאן מפיו במרוצה ואין צריך להאריך בהן:"
   },
   {
    "dh": "שלא יציע",
    "text": " — בטעמי פירושיהן:"
   },
   {
    "dh": "ואינו מציע את המדרש גרסינן",
    "text": " — מפני שצריך הוא תמיד להזכיר בו את הפסוקים שהוא דורש:"
   },
   {
    "dh": "אזכרות",
    "text": " — שבמקראות הנדרשים:"
   },
   {
    "dh": "לא יכנס למדרש כל עיקר",
    "text": " — לא להציע ולא לשנות אבל לבית המדרש הוא נכנס ושותק:"
   },
   {
    "dh": "הלכות דרך ארץ",
    "text": " — כגון דרכן של ת\"ח שהיא ברייתא ופרק בן עזאי הנותן ארבעה דברים אל לבו:"
   },
   {
    "dh": "מגמגם וקורא",
    "text": " — בעל קרי היה:"
   },
   {
    "dh": "נראה בעיני דה\"ג א\"ר אלעאי הלכה כו'",
    "text": " — ולא גרסינן מסייע ליה:"
   },
   {
    "dh": "משום רבינו",
    "text": " — רב:"
   },
   {
    "dh": "כי הנך תלת סבי",
    "text": " — וכולהו לקולא:"
   },
   {
    "dh": "אינו נוהג אלא בארץ",
    "text": " — בשחיטת חולין יליף טעמא בפרק הזרוע:"
   },
   {
    "dh": "חטה ושעורה וחרצן",
    "text": " — שלשתן במפולת יד דהוו להו כלאי זרעים וכלאי הכרם כאחת:"
   },
   {
    "dh": "לטבילותא",
    "text": " — דבעלי קריין:"
   },
   {
    "dh": "חד תני",
    "text": " — בבן עזאי לחשה לתלמידים:"
   },
   {
    "dh": "משום בטול פריה ורביה",
    "text": " — שהיו נמנעים מתשמיש מפני טורח הטבילה:"
   },
   {
    "dh": "שמקילין בה",
    "text": " — במרחצאות או בנתינת תשעה קבין:"
   },
   {
    "dh": "שמחמירין בה",
    "text": " — בארבעים סאה:"
   },
   {
    "dh": "של טובלי שחרין",
    "text": " — בעלי קריין הטובלין שחרית:"
   },
   {
    "dh": "והא איהו אמר כו'",
    "text": " — לעיל בריש שמעתין:"
   },
   {
    "dh": "אפשר בנתינה",
    "text": " — תשעה קבין ואף על גב דלא תנא לקמן אלא בחולה סתם תלמידי חכמים חולים הם כדאמר במסכת נדרים (דף מט:) כמאן מצלינן אקצירי ואמריעי כרבי יוסי. קצירי חולין מריעי רבנן:"
   },
   {
    "dh": "גדר גדול גדרו",
    "text": " — במה שהצריכו בארבעים סאה:"
   },
   {
    "dh": "שתבע אשה",
    "text": " — אותה אשה פנויה היתה וחכמים גזרו על היחוד אף על הפנויה:"
   },
   {
    "dh": "אתם מזלזלים",
    "text": " — לנהוג כרבי יהודה בן בתירא:"
   },
   {
    "dh": "אפשר במרחצאות",
    "text": " — חמין:"
   },
   {
    "dh": "קאי כוותך",
    "text": " — דבעי טבילה זו במקוה כשאר טבילות:"
   },
   {
    "dh": "באגנא דמיא",
    "text": " — גיגית:"
   },
   {
    "dh": "נראה בעיני דה\"ג א\"ר אלעאי הלכה כו'",
    "text": " — ולא גרסינן מסייע ליה:"
   },
   {
    "dh": "תקן חצבא",
    "text": " — ליתן מים לתלמידים עליהם שחרית קודם קריאת התורה:"
   },
   {
    "dh": "לא שנו",
    "text": " — דסגי בנתינה אלא בחולה שראה קרי לאונסו:"
   },
   {
    "dh": "המרגיל",
    "text": " — וממשיך את הקרי עליו שמשמש מטתו:"
   },
   {
    "dh": "אתבר חצביה",
    "text": " — אינו צריך לנו דחולה לאונסו לא שכיח:"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "22b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כב",
  "amud": "ב",
  "dafEn": "22b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בקילעא דרב אושעיא אתו ושאלו לרב אסי אמר להו לא שנו אלא לחולה המרגיל אבל לחולה לאונסו פטור מכלום א\"ר יוסף אצטמיד חצביה דרב נחמן מכדי כולהו אמוראי ותנאי בדעזרא קמיפלגי ונחזי עזרא היכי תקן אמר אביי עזרא תקן לבריא המרגיל מ' סאה ובריא לאונסו ט' קבין ואתו אמוראי ופליגי בחולה מר סבר חולה המרגיל כבריא המרגיל וחולה לאונסו כבריא לאונסו ומר סבר חולה המרגיל כבריא לאונסו וחולה לאונסו פטור מכלום אמר רבא נהי דתקן עזרא טבילה נתינה מי תקן והאמר מר עזרא תקן טבילה לבעלי קריין אלא אמר רבא עזרא תקן טבילה לבריא המרגיל מ' סאה ואתו רבנן והתקינו לבריא לאונסו ט' קבין ואתו אמוראי וקא מיפלגי בחולה מר סבר חולה המרגיל כבריא המרגיל וחולה לאונסו כבריא לאונסו ומר סבר לבריא המרגיל מ' סאה וחולה המרגיל כבריא לאונסו ט' קבין אבל לחולה לאונסו פטור מכלום אמר רבא הלכתא בריא המרגיל וחולה המרגיל ארבעים סאה ובריא לאונסו תשעה קבין אבל לחולה לאונסו פטור מכלום: ת\"ר בעל קרי שנתנו עליו ט' קבין מים טהור בד\"א לעצמו אבל לאחרים ארבעים סאה ר' יהודה אומר מ' סאה מכל מקום ר' יוחנן וריב\"ל ור\"א ור' יוסי בר' חנינא חד מהאי זוגא וחד מהאי זוגא ארישא חד אמר הא דאמרת במה דברים אמורים לעצמו אבל לאחרים מ' סאה לא שנו אלא לחולה המרגיל אבל לחולה לאונסו ט' קבין וחד אמר כל לאחרים אפילו חולה לאונסו עד דאיכא מ' סאה וחד מהאי זוגא וחד מהאי זוגא אסיפא חד אמר הא דאמר רבי יהודה מ' סאה מכל מקום לא שנו אלא בקרקע אבל בכלים לא וחד אמר אפי' בכלים נמי בשלמא למ\"ד אפי' בכלים היינו דקתני ר' יהודה אומר מ' סאה מכל מקום אלא למ\"ד בקרקע אין בכלים לא מכל מקום לאתויי מאי לאתויי מים שאובין רב פפא ורב הונא בריה דרב יהושע ורבא (ברבי) בר שמואל כריכו ריפתא בהדי הדדי א\"ל רב פפא הבו לי לדידי לברוך דנפול עילואי ט' קבין אמר להו רבא (ברבי) [בר] שמואל תנינא במה דברים אמורים לעצמו אבל לאחרים מ' סאה אלא הבו לי לדידי לברוך דנפול עילואי ארבעים סאה אמר להו רב הונא הבו לי לדידי לברוך דליכא עילואי לא האי ולא האי רב חמא טביל במעלי יומא דפסחא להוציא רבים ידי חובתן ולית הלכתא כוותיה:  היה עומד בתפלה ונזכר שהוא בעל קרי לא יפסיק אלא יקצר ירד לטבול אם יכול לעלות ולהתכסות ולקרות עד שלא תהא הנץ החמה יעלה ויתכסה ויקרא ואם לאו יתכסה במים ויקרא ולא יתכסה לא במים הרעים ולא במי המשרה עד שיטיל לתוכן מים וכמה ירחיק מהן ומן הצואה ד' אמות: גמ׳ ת\"ר היה עומד בתפלה ונזכר שהוא בעל קרי לא יפסיק אלא יקצר היה קורא בתורה ונזכר שהוא בעל קרי אינו מפסיק ועולה אלא מגמגם וקורא ר\"מ אומר אין בעל קרי רשאי לקרות בתורה יותר מג' פסוקים תניא אידך היה עומד בתפלה וראה צואה כנגדו מהלך לפניו עד שיזרקנה לאחוריו ד' אמות והתניא לצדדין ל\"ק הא דאפשר הא דלא אפשר היה מתפלל ומצא צואה במקומו אמר רבה אע\"פ שחטא תפלתו תפלה מתקיף ליה רבא והא (משלי כא, כז) זבח רשעים תועבה אלא אמר רבא הואיל וחטא אע\"פ שהתפלל תפלתו תועבה: ת\"ר היה עומד בתפלה ומים שותתין על ברכיו פוסק עד שיכלו המים וחוזר ומתפלל להיכן חוזר רב חסדא ורב המנונא חד אמר חוזר לראש וחד אמר למקום שפסק לימא בהא קמיפלגי",
  "rashi": [
   {
    "dh": "בקילעא",
    "text": " — כניסת הבית חדר שלפני הטרקלין שקורין פורטיג\"ו בלעז:"
   },
   {
    "dh": "אצטמיד",
    "text": " — נתחזקו שבריו ונצמדו כלומר צורך לנו עוד בו:"
   },
   {
    "dh": "דאמר מר",
    "text": " — גבי עשר תקנות בב\"ק בפרק מרובה:"
   },
   {
    "dh": "וקא מיפלגי אמוראי",
    "text": " — רב דימי ורבין:"
   },
   {
    "dh": "אמר רבא הלכתא וכו'",
    "text": " — אפלוגתא דאמוראי הוא דפסק רבא דפליגי אליבא דרבנן מיהו השתא אנן כרבי יהודה בן בתירא נהגינן כדאמר רב נחמן לעיל ורב נחמן בר יצחק בתרא הוה:"
   },
   {
    "dh": "לעצמו",
    "text": " — לעסוק בתורה לעצמו אבל ללמד לאחרים מ' סאה:"
   },
   {
    "dh": "ור\"י אומר מ' סאה מ\"מ",
    "text": " — מ' סאה שאמרו בכל ענין שהן ולקמן מפרש לה:"
   },
   {
    "dh": "חד מהאי זוגא וחד מהאי זוגא",
    "text": " — פליגי ארישא בפירושא דמילתא דת\"ק:"
   },
   {
    "dh": "אסיפא",
    "text": " — דר' יהודה:"
   },
   {
    "dh": "ל\"ש אלא בקרקע",
    "text": " — לא תימא מ\"מ דר' יהודה לאכשורי בכלי אתא דאין כשר אלא מ' סאה בקרקע ולקמן בעי א\"כ מאי מ\"מ:"
   },
   {
    "dh": "אבל לאחרים מ' סאה",
    "text": " — והכא נמי דלאפוקי אחרים ידי חובתן כלאחרים דמי:"
   },
   {
    "dh": "דנפול עילואי",
    "text": " — לאו דוקא אלא טבלתי במ' סאה:"
   },
   {
    "dh": "לא האי ולא האי",
    "text": " — לא הוצרכתי לא לזו ולא לזו שלא ראיתי קרי:"
   },
   {
    "dh": "טבל",
    "text": " — ובירך רגיל היה לעשות כן דהו\"ל ללמד אחרים ובשאר ימות השנה לא היה טובל אלא נותן עליו ט' קבין:"
   },
   {
    "dh": "ולית הלכתא כוותיה",
    "text": " — דכי היכי דלעצמו בנתינה לאחרים נמי בנתינה אי נמי דקיי\"ל כרבי יהודה בן בתירא:"
   },
   {
    "dh": "מתני' לא יפסיק",
    "text": " — תפלתו לגמרי אלא יקצר כל ברכה וברכה ואומר כל הברכות בקוצר:"
   },
   {
    "dh": "במים הרעים",
    "text": " — מים סרוחים:"
   },
   {
    "dh": "מי המשרה",
    "text": " — ששורים שם הפשתן והקנבוס והם מסריחים:"
   },
   {
    "dh": "עד שיתן לתוכן מים",
    "text": " — ובגמרא (ד' כה:) מפרש כמה מיא רמי ואזיל ומפרש לה בחסורי מחסרא והכי קתני לא יקרא אצל מי רגלים עד שיתן לתוכן מים:"
   },
   {
    "dh": "וכמה ירחיק מהם",
    "text": " — ממי רגלים:"
   },
   {
    "dh": "גמ' מגמגם",
    "text": " — במרוצה:"
   },
   {
    "dh": "יותר מג' פסוקים",
    "text": " — כגון בבית הכנסת דאי אפשר לפחות כדתנן (מגילה פ\"ג ד' כג:) הקורא בתורה לא יפחות משלשה פסוקים:"
   },
   {
    "dh": "והתניא לצדדין",
    "text": " — א\"צ להלך עד שתהא לאחוריו:"
   },
   {
    "dh": "דאפשר",
    "text": " — לילך לפניו ילך לפניו עד שתהא לאחוריו:"
   },
   {
    "dh": "לא אפשר",
    "text": " — כגון יש נהר לפניו מסתלק לצדדים:"
   }
  ],
  "tosafot": [
   {
    "dh": "ונחזי עזרא היכן תקן",
    "text": " — בהרבה מקומות גבי שאר תקנות לא פריך גמרא הכי אלא שאני הכא דדבר הרגיל בכל יום הוא על כן אנו זכורים:"
   },
   {
    "dh": "ולית הלכתא כוותיה",
    "text": " — דטבילה בכל יום ארבעים סאה אלא אפילו לאחרים נמי סגי בתשעה קבין אי נמי הכי פירושו ולית הלכתא כוותיה אלא כר' יהודה בן בתירא דאמר דברי תורה אין מקבלין טומאה וי\"מ דוקא לתורה אבל לתפלה צריך טבילה ופי' ר\"י דלא שנא והטובל בערב יוה\"כ אין לו לברך והמברך הוה ברכה לבטלה:"
   },
   {
    "dh": "והא זבח רשעים תועבה",
    "text": " — פר\"י דדוקא במקום שהיה יכול להסתפק ולתלות שיש שם צואה:"
   },
   {
    "dh": "אע\"פ שהתפלל תפלתו תועבה",
    "text": " — והוי מעוות לא יוכל לתקן ור\"י פי' דיחזור ויתפלל:"
   },
   {
    "dh": "ממתין עד שיכלו המים",
    "text": " — במשתין על גבי קרקע או ע\"ג בגדים ואין שם טופח ע\"מ להטפיח כדמשמע לקמן (ברכות ד' כה.) כגון דעביד טיף טיף שנבלעין מהרה כן פי' הרב רבי יוסף ומיהו נראה אפילו אם יש בהן טופח על מנת להטפיח מותרין כיון דמדאורייתא אינן אסורין אלא כנגד העמוד בלבד ורבנן הוא דגזור וכיון שעומד כבר בתפלתו לא אטרחוהו רבנן לחזור בתפלה:"
   }
  ],
  "translations": []
 },
 {
  "id": "23a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כג",
  "amud": "א",
  "dafEn": "23a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "מר סבר אם שהה כדי לגמור את כולה חוזר לראש ומר סבר למקום שפסק אמר רב אשי האי אם שהה אם לא שהה מיבעי ליה אלא דכולי עלמא אם שהה כדי לגמור את כולה חוזר לראש והתם בדלא שהה קמיפלגי דמר סבר גברא דחויא הוא ואין ראוי ואין תפלתו תפלה ומר סבר גברא חזיא הוא ותפלתו תפלה תנו רבנן הנצרך לנקביו אל יתפלל ואם התפלל תפלתו תועבה אמר רב זביד ואיתימא רב יהודה לא שנו אלא שאינו יכול לשהות בעצמו אבל אם יכול לשהות בעצמו תפלתו תפלה ועד כמה אמר רב ששת עד פרסה איכא דמתני לה אמתניתא במה דברים אמורים כשאין יכול לעמוד על עצמו אבל אם יכול לעמוד על עצמו תפלתו תפלה ועד כמה אמר רב זביד עד פרסה אמר רבי שמואל בר נחמני אמר רבי יונתן הנצרך לנקביו הרי זה לא יתפלל משום שנאמר (עמוס ד, יב) הכון לקראת אלהיך ישראל ואמר רבי שמואל בר נחמני אמר רבי יונתן מ\"ד (קהלת ד, יז) שמור רגלך כאשר תלך אל בית האלהים שמור עצמך שלא תחטא ואם תחטא הבא קרבן לפני וקרוב לשמוע (דברי חכמים) אמר רבא הוי קרוב לשמוע דברי חכמים שאם חוטאים מביאים קרבן ועושים תשובה מתת הכסילים [זבח] אל תהי ככסילים שחוטאים ומביאים קרבן ואין עושים תשובה כי אינם יודעים לעשות רע אי הכי צדיקים נינהו אלא אל תהי ככסילים שחוטאים ומביאים קרבן ואינם יודעים אם על הטובה הם מביאים אם על הרעה הם מביאים אמר הקב\"ה בין טוב לרע אינן מבחינים והם מביאים קרבן לפני רב אשי ואיתימא רב חנינא בר פפא אמר שמור נקביך בשעה שאתה עומד בתפלה לפני. תנו רבנן הנכנס לבית הכסא חולץ תפיליו ברחוק ד' אמות ונכנס אמר רב אחא בר רב הונא אמר רב ששת לא שנו אלא בית הכסא קבוע אבל בית הכסא עראי חולץ ונפנה לאלתר וכשהוא יוצא מרחיק ד' אמות ומניחן מפני שעשאו בית הכסא קבוע איבעיא להו מהו שיכנס אדם בתפילין לבית הכסא קבוע להשתין מים רבינא שרי רב אדא בר מתנא אסר אתו שיילוה לרבא אמר להו אסור חיישינן שמא יפנה בהן ואמרי לה שמא יפיח בהן תניא אידך הנכנס לבית הכסא קבוע חולץ תפיליו ברחוק ד' אמות ומניחן בחלון הסמוך לרשות הרבים ונכנס וכשהוא יוצא מרחיק ד' אמות ומניחן דברי בית שמאי ובית הלל אומרים אוחזן בידו ונכנס ר\"ע אומר אוחזן בבגדו ונכנס בבגדו ס\"ד זימנין מישתלי להו ונפלי אלא אימא אוחזן בבגדו ובידו ונכנס ומניחם בחורין הסמוכים לבית הכסא ולא יניחם בחורין הסמוכים לרשות הרבים שמא יטלו אותם עוברי דרכים ויבא לידי חשד ומעשה בתלמיד אחד שהניח תפילין בחורין הסמוכים לרשות הרבים ובאת זונה אחת ונטלתן ובאת לבית המדרש ואמרה ראו מה נתן לי פלוני בשכרי כיון ששמע אותו תלמיד כך עלה לראש הגג ונפל ומת באותה שעה התקינו שיהא אוחזן בבגדו ובידו ונכנס תנו רבנן בראשונה היו מניחין תפילין בחורין הסמוכין לבית הכסא ובאין עכברים ונוטלין אותן התקינו שיהו מניחין אותן בחלונות הסמוכות לרשות הרבים ובאין עוברי דרכים ונוטלין אותן התקינו שיהא אוחזן בידו ונכנס אמר רבי מיאשא בריה דריב\"ל הלכה גוללן כמין ספר ואוחזן בימינו כנגד לבו אמר רב יוסף בר מניומי אמר רב נחמן ובלבד שלא תהא רצועה יוצאת מתחת ידו טפח אמר רבי יעקב בר אחא אמר רבי זירא לא שנו אלא שיש שהות ביום ללבשן אבל אין שהות ביום ללבשן עושה להן כמין כיס טפח ומניחן אמר רבה בר בר חנה אמר רבי יוחנן ביום גוללן כמין ספר ומניחן בידו כנגד לבו ובלילה עושה להן כמין כיס טפח ומניחן אמר אביי לא שנו אלא בכלי שהוא כליין אבל בכלי שאינו כליין אפילו פחות מטפח אמר מר זוטרא ואיתימא רב אשי תדע שהרי פכין קטנים מצילין באהל המת ואמר רבה בר בר חנה כי הוה אזלינן בתריה דרבי יוחנן כי הוה בעי למיעל לבית הכסא כי הוה נקיט ספרא דאגדתא הוה יהיב לן כי הוה נקיט תפילין לא הוה יהיב לן אמר הואיל ושרונהו רבנן",
  "rashi": [
   {
    "dh": "דמר סבר",
    "text": " — כל המפסיק בתפלתו אם שהה כדי לגמור כולה חוזר לראש. כדאמרינן גבי ק\"ש לקמן בפירקין (ברכות דף כד:) ובשהה קא מיפלגי הכא:"
   },
   {
    "dh": "האי אם שהה אם לא שהה מיבעי ליה",
    "text": " — במילתא דרב חסדא ורב המנונא מיבעי ליה לאפלוגי בין שהה ללא שהה ומדלא אפליג שמע מינה אפילו בדלא שהה קאמר:"
   },
   {
    "dh": "גברא דחויא הוא",
    "text": " — כשהתחיל להתפלל והיה צריך לנקביו דחוי הוא מלהתפלל הלכך מה שהתפלל אינה תפלה וחוזר לראש:"
   },
   {
    "dh": "ומר סבר גברא חזיא",
    "text": " — אע\"פ שאינו יכול להמתין עד שיסיים תפלתו תפלה ראויה היא מה שהתפלל קודם שתיתה:"
   },
   {
    "dh": "ועד כמה",
    "text": " — יכול להעמיד עצמו מנקביו שיהא מותר להתחיל בתפלה:"
   },
   {
    "dh": "איכא דמתני",
    "text": " — להאי במה דברים אמורים במתניתא גופא ולא משמעתא דרב זביד ורב יהודה וכי איירי אינהו בשיעורא הוא דאיירי:"
   },
   {
    "dh": "שמור עצמך שלא תחטא",
    "text": " — ותצטרך רגלך ללכת אל בית האלהים להביא חטאת:"
   },
   {
    "dh": "הוי קרוב לשמוע",
    "text": " — תשובה בהבאת קרבנך מתת אותו ככסילים בלא תשובה:"
   },
   {
    "dh": "שמור נקביך",
    "text": " — מבין רגליך כמו להסך את רגליו (שמואל א כ״ד:ד׳) שמור נקביך שלא יפיחו:"
   },
   {
    "dh": "בית הכסא קבוע",
    "text": " — שיש בו צואה וכל בתי כסאות שבגמרא על פני השדה הם בלא חפירה:"
   },
   {
    "dh": "עראי",
    "text": " — שזה מתחיל עכשיו לעשותו בית הכסא:"
   },
   {
    "dh": "חולץ ונפנה לאלתר",
    "text": " — ויאחז תפילין בידו כדאמרינן לקמן ובקבוע נמי אוחזן בידו אלא שצריך לחלצן ברחוק ד' אמות שבזמן שהם בראשו הם בגלוי וגנאי הדבר:"
   },
   {
    "dh": "מהו שיכנס בתפיליו",
    "text": " — כשהן בראשו קאמר:"
   },
   {
    "dh": "שמא יפנה בהן",
    "text": " — גדולים:"
   },
   {
    "dh": "בחורים הסמוכים לבית הכסא",
    "text": " — לפנים מן הגדר בשדה שהוא נפנה בה נותנן בחורים שבכותל:"
   },
   {
    "dh": "בחורים הסמוכים לרשות הרבים",
    "text": " — חורי כותלי מחיצות השדה שאין עכברים מצוין במקום הילוך בני אדם והוא יכנס לאחורי הגדר לפנות:"
   },
   {
    "dh": "גוללן",
    "text": " — ברצועות שלהן:"
   },
   {
    "dh": "ואוחזן בימינו",
    "text": " — שלא בבגדו כדי שלא יפלו:"
   },
   {
    "dh": "שלא תצא רצועה",
    "text": " — שיש בה קדושה שהרי בהן הוא קושרן ובקשר נראה בעשייתו כמין דל\"ת על שם אחת מאותיות של שדי והשי\"ן עשוי' בכותלי הקציצה החיצונה והיו\"ד עשויה בראש רצועת תפילין של יד ורצועה קטנה מאד כפוף ראשה ונראית כמין יו\"ד:"
   },
   {
    "dh": "ביום",
    "text": " — כשהוא חולצן בשביל בית הכסא גוללן כמין ספר כדאמרן:"
   },
   {
    "dh": "ובלילה",
    "text": " — כשהוא חולצן בביתו על מנת להצניע עד הבקר:"
   },
   {
    "dh": "עושה להם כיס טפח",
    "text": " — דחללו טפח דחשיב הכלי אהל להפסיק בינם לקרקע:"
   },
   {
    "dh": "לא שנו",
    "text": " — דבעי טפח אלא בכלי שהוא כליין. כיס העשוי לצרכן דכליין קרוב להיות בטל אצלם הילכך בעינן דבר הניכר שיהא חוצץ בפניהם:"
   },
   {
    "dh": "שהרי פכין קטנים מצילין",
    "text": " — בהיקף צמיד פתיל באהל המת ואף על גב דלא הוו טפח חייצי:"
   },
   {
    "dh": "אמר הואיל ושרונהו רבנן",
    "text": " — לאוחזן בידו משום שמירתן:"
   }
  ],
  "tosafot": [
   {
    "dh": "אלא דכולי עלמא חוזר לראש",
    "text": " — וה\"ה דהו\"מ לאוקמי דכולי עלמא אין חוזר לראש ומדלא מוקי הכי ש\"מ דהלכה דחוזר לראש וכן לקמן בהדיא אמר ר' אבהו חוזר לראש ותימה דבמסכת ר\"ה (דף לד:) א\"ר יוחנן שמע תשע תקיעות בט' שעות ביום יצא אלמא תקיעות מצטרפות אע\"ג דשהה כדי לעשות כולם וכן במגילה (פ\"ב ד' יח:) נמי דאמרינן אמר רב אין הלכה כרבי מונא דאמר אם שהה חוזר לראש דקאמר נקוט דרב ביבי בידך ואומר השר מקוצי דיש לחלק דשאני הכא דאין ראוי לקרות וכן לקמן (ברכות ד' כד:) דרבי אבהו אזל במבואות המטונפות דהתם כ\"ע מודו דחוזר לראש אבל היכא דגברא חזי כמו מגילה ושופר כולי עלמא מודו דאינו חוזר לראש אלא למקום שפסק ורבינו יהודה פירש דהכא לא מצי למימר דכולי עלמא דאין חוזר לראש ובדשהה קמיפלגי דהא לכ\"ע הוי גברא חזי כיון דאינו חוזר לראש אבל ודאי אי הו\"מ למימר הכי הוה אמר ליה:"
   },
   {
    "dh": "חיישינן שמא יפנה בהן ואסור",
    "text": " — ודוקא בבית הכסא קבוע חיישינן שמא יפנה בהן אבל בבית הכסא עראי שאין רגילים לפנות שם מותר להשתין בהן ולא חיישינן שמא יפנה בהן והא דתניא לקמן לא ישתין בהן אפילו בבית הכסא עראי היינו דוקא כשאוחזן בידו דחיישינן שמא ישפשף בהן הניצוצות אם יפלו מים על רגליו או יגע באמה:"
   },
   {
    "dh": "שהרי פכין קטנים מצילין באהל המת",
    "text": " — ועל כרחך מטעם אויר הוא דאי לית בהו אויר כלל לא היו מצילין דהוי כמו אוכלין שגבלן בטיט שמקבלין טומאה באהל המת:"
   }
  ],
  "translations": []
 },
 {
  "id": "23b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כג",
  "amud": "ב",
  "dafEn": "23b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ננטרן אמר רבא כי הוה אזלינן בתריה דר\"נ כי הוה נקיט ספרא דאגדתא יהיב לן כי הוה נקיט תפילין לא יהיב לן אמר הואיל ושרונהו רבנן ננטרן ת\"ר לא יאחז אדם תפילין בידו וס\"ת בזרועו ויתפלל ולא ישתין בהן מים ולא יישן בהן לא שינת קבע ולא שינת עראי. אמר שמואל סכין ומעות וקערה וככר הרי אלו כיוצא בהן. אמר רבא אמר רב ששת לית הלכתא כי הא מתניתא דב\"ש היא דאי ב\"ה השתא בית הכסא קבוע שרי בית הכסא עראי מיבעיא מיתיבי דברים שהתרתי לך כאן אסרתי לך כאן מאי לאו תפילין אי אמרת בשלמא בית הלל התרתי לך כאן קבוע אסרתי לך כאן בית הכסא עראי אלא אי אמרת ב\"ש הא לא שרו ולא מידי כי תניא ההיא לענין טפח וטפחיים דתני חדא כשהוא נפנה מגלה לאחריו טפח ולפניו טפחיים ותניא אידך לאחריו טפח ולפניו ולא כלום מאי לאו אידי ואידי באיש ולא קשיא כאן לגדולים כאן לקטנים ותסברא אי בקטנים לאחריו טפח למה לי אלא אידי ואידי בגדולים ולא קשיא הא באיש הא באשה אי הכי הא דקתני עלה זהו ק\"ו שאין עליו תשובה מאי אין עליו תשובה דרכא דמילתא הכי איתא אלא לאו תפילין ותיובתא דרבא אמר רב ששת תיובתא מכל מקום קשיא השתא בית הכסא קבוע שרי בית הכסא עראי לא כל שכן הכי קאמר בית הכסא קבוע דליכא ניצוצות שרי בית הכסא עראי דאיכא ניצוצות אסרי אי הכי אמאי אין עליו תשובה תשובה מעלייתא היא הכי קאמר הא מילתא תיתי לה בתורת טעמא ולא תיתי לה בק\"ו דאי אתיא לה בתורת ק\"ו זהו ק\"ו שאין עליו תשובה: ת\"ר הרוצה ליכנס לסעודת קבע מהלך עשרה פעמים ד' אמות או ד' פעמים י' אמות ויפנה ואח\"כ נכנס אמר ר' יצחק הנכנס לסעודת קבע חולץ תפיליו ואח\"כ נכנס ופליגא דר' חייא דא\"ר חייא מניחן על שלחנו וכן הדור לו ועד אימת אמר רב נחמן בר יצחק עד זמן ברכה תני חדא צורר אדם תפיליו עם מעותיו באפרקסותו ותניא אידך לא יצור לא קשיא הא דאזמניה הא דלא אזמניה דאמר רב חסדא האי סודרא דתפילין דאזמניה למיצר ביה תפילין צר ביה תפילין אסור למיצר ביה פשיטי אזמניה ולא צר ביה צר ביה ולא אזמניה שרי למיצר ביה זוזי ולאביי דאמר הזמנה מילתא היא אזמניה אע\"ג דלא צר ביה צר ביה אי אזמניה אסיר אי לא אזמניה לא בעא מיניה רב יוסף בריה דרב נחוניא מרב יהודה מהו שיניח אדם תפיליו תחת מראשותיו תחת מרגלותיו לא קא מיבעיא לי שנוהג בהן מנהג בזיון כי קא מיבעיא לי תחת מראשותיו מאי א\"ל הכי אמר שמואל מותר אפילו אשתו עמו מיתיבי לא יניח אדם תפיליו תחת מרגלותיו מפני שנוהג בהם דרך בזיון אבל מניחן תחת מראשותיו ואם היתה אשתו עמו אסור היה מקום שגבוה ג' טפחים או נמוך ג' טפחים מותר תיובתא דשמואל תיובתא אמר רבא אע\"ג דתניא תיובתא דשמואל הלכתא כוותיה מ\"ט",
  "rashi": [
   {
    "dh": "ננטרן",
    "text": " — ישמרוני אכניסם עמי וישמרוני מן המזיקין:"
   },
   {
    "dh": "לא יאחוז בידו וכו' ויתפלל",
    "text": " — שאין דעתו מיושבת עליו בתפלה שהרי לבו תמיד עליהן שלא יפלו מידו:"
   },
   {
    "dh": "ולא יישן בהן",
    "text": " — שמא יפיח:"
   },
   {
    "dh": "הרי אלו כיוצא בהן",
    "text": " — לענין תפלה שדואג עליהן שלא תפול הסכין ותזיקנו והקערה תשפך והמעות יאבדו והככר יטנף:"
   },
   {
    "dh": "לית הלכתא כי הא מתניתא",
    "text": " — דקתני לא ישתין בתפילין:"
   },
   {
    "dh": "דבית שמאי היא",
    "text": " — דאמרי לעיל מניחן בחלון הסמוך לרשות הרבים ולא יכניסם בידו ויכנס:"
   },
   {
    "dh": "דאי בית הלל",
    "text": " — הא אמרי לעיל אוחזן בידו ונכנס:"
   },
   {
    "dh": "בית הכסא עראי",
    "text": " — כגון להשתין שאין אדם הולך בשבילם לבית הכסא והפעם הזאת נעשה המקום הזה בית הכסא תחלה:"
   },
   {
    "dh": "שהתרתי לך כאן",
    "text": " — בבית הכסא קבוע:"
   },
   {
    "dh": "אסרתי לך כאן",
    "text": " — בבית הכסא עראי:"
   },
   {
    "dh": "מאי לאו תפילין",
    "text": " — שאמרו בית הלל אוחזן בידו ונכנס לבית הכסא קבוע ולהשתין בהם אסרו כדמפרש טעמא לקמן:"
   },
   {
    "dh": "הא לא שרו",
    "text": " — בבית הכסא קבוע:"
   },
   {
    "dh": "כי תניא ההיא",
    "text": " — לאו לענין תפילין תניא אלא לענין גלוי טפח וטפחיים דלגדולים אינו מגלה אלא טפח ולקטנים מגלה טפחיים ועלה קאי גלוי טפחיים שהתרתי לך כאן אסרתי לך כאן:"
   },
   {
    "dh": "לאחריו טפח",
    "text": " — ולא יותר משום צניעות:"
   },
   {
    "dh": "ולפניו טפחיים",
    "text": " — משום קילוח מי רגלים הנתזין למרחוק:"
   },
   {
    "dh": "מאי לאו כו'",
    "text": " — והיינו דקאמר לעיל דברים שהתרתי לך בבית הכסא עראי אסרתי לך בקבוע:"
   },
   {
    "dh": "אלא אידי ואידי בגדולים",
    "text": " — ומתוך שהוא דוחק עצמו לגדולים הוא בא לידי קטנים הלכך באיש מלאחריו טפח ומלפניו טפחיים ובאשה מלפניה ולא כלום והכי קאמר הא דלעיל דברים שאסרתי לך באשה התרתי לך באיש:"
   },
   {
    "dh": "אי הכי",
    "text": " — דלענין טפח וטפחיים קתני דברים שהתרתי לך כאן אסרתי לך כאן:"
   },
   {
    "dh": "הא דקתני עלה",
    "text": " — בסיפא דידה וזה הוא ק\"ו שאין עליו תשובה בדבר הזה יש לך להשיבני ק\"ו ואין לי עליו תשובה להחזיר לך אי אמרת בשלמא בתפילין קאמר וכדאמרן וב\"ה היא היינו דקתני דיש כאן להקשות קל וחומר השתא בית הכסא קבוע שרי בית הכסא עראי מיבעיא ואין לי תשובה להשיבך עליו אלא אי אמרת לענין טפח וטפחיים מאי ק\"ו יש להקשות כאן:"
   },
   {
    "dh": "אורחא דמילתא הכי הוא",
    "text": " — שהאיש צריך לגלות לפניו ולא האשה:"
   },
   {
    "dh": "תיובתא דרבא אמר רב ששת",
    "text": " — דאמר בית שמאי היא ולא בית הלל דאם כן לא משכחת מידי לאוקמה הך ברייתא דקתני מאי שהתרתי לך כאן אסרתי לך כאן:"
   },
   {
    "dh": "דליכא ניצוצות",
    "text": " — שיהא צריך לשפשפן בימינו מעל רגליו:"
   },
   {
    "dh": "בית הכסא עראי",
    "text": " — לקטנים:"
   },
   {
    "dh": "דאיכא ניצוצות",
    "text": " — הניתזין על גבי רגליו ואמרינן במסכת יומא (דף ל.) מצוה לשפשפן שאסור לאדם שיצא בניצוצות שעל גבי רגליו שמא יראה ככרות שפכה ונמצא מוציא לעז על בניו שהם ממזרים הילכך אי אפשר לאחוז תפילין בידו:"
   },
   {
    "dh": "הא מילתא",
    "text": " — דתפילין דבית הכסא עראי וקבוע:"
   },
   {
    "dh": "תיתי לה בתורת טעמא",
    "text": " — להתיר בבית הכסא קבוע את האסור בבית הכסא עראי משום טעמא דניצוצות:"
   },
   {
    "dh": "דאי אתיא לה בתורת ק\"ו",
    "text": " — לומר דין הוא להקל בבית הכסא עראי קל ולהחמיר בבית הכסא חמור ולא תזול בתר טעמא אלא בתר חומרא וקולא ואנן עבדינן איפכא אין לי עליו מה להשיבך שאין לי למצוא שיהא בשום מקום בית הכסא עראי חמור מן הקבוע שאוכל להשיבך אם התרתי בקבוע שהוא קל בדבר פלוני נתיר בשל עראי שהוא חמור בה אבל טעמא איכא למאי דעבדינן דהכא איכא ניצוצות והכא ליכא ודבר זה לאו קל וחומר לא קל ולא חמור:"
   },
   {
    "dh": "הנכנס לסעודת קבע",
    "text": " — וגנאי הוא שיצטרך לנקביו בתוך הסעודה:"
   },
   {
    "dh": "מהלך עשרה פעמים כו'",
    "text": " — ובכל פעם ופעם בודק עצמו ויושב אולי יוכל להפנות שההילוך מוריד הגדולים לנקב:"
   },
   {
    "dh": "חולץ תפיליו",
    "text": " — שמא ישתכר בסעודה ויתגנה בתפיליו:"
   },
   {
    "dh": "וכן הדור לו",
    "text": " — שיהו מזומנים לו ויחזור ויניחם בשעת ברכה:"
   },
   {
    "dh": "באפרקסותיה",
    "text": " — סודר של ראשו:"
   },
   {
    "dh": "עם מעותיו",
    "text": " — לא עם המעות ממש אלא שני קשרים זה אצל זה:"
   },
   {
    "dh": "ה\"ג הא דאזמניה הא דלא אזמניה",
    "text": " — לההיא סודר לתפילין דכיון דאזמניה שוב אסור לצור בו מעות מאחר שהקצו לכך:"
   },
   {
    "dh": "צר ביה",
    "text": " — אי אזמניה אין אי לא אזמניה לא קדיש ושרי למיצר ביה דהכי תניא בהדיא בסנהדרין (מח:) הניח בו תפיליו יניח בו מעות:"
   },
   {
    "dh": "ולאביי דאמר הזמנה מילתא היא",
    "text": " — גבי אורג בגד למת בסנהדרין בפרק נגמר הדין (סנהדרין ד' מז:):"
   },
   {
    "dh": "מהו שיניח תפיליו תחת מראשותיו",
    "text": " — בלילה כשהוא ישן:"
   },
   {
    "dh": "אם היה מקום גבוה ג' טפחים",
    "text": " — למעלה מראשותיו ועליו נותן התפילין או למטה מראשותיו יוצא מקום מן המטה:"
   }
  ],
  "tosafot": [
   {
    "dh": "דברים שהתרתי לך כאן כו'",
    "text": " — ולא בעי לשנויי דברים שהתרתי לך בבית הכסא עראי אסרתי לך בקבוע דאסור לפנות בגדולים והתפילין בראשו אבל להשתין מותר משום דלא אשכחן בברייתא אבל הך דטפח וטפחיים אשכחן ליה בברייתא בהדיא הר\"ר יוסף:"
   }
  ],
  "translations": []
 },
 {
  "id": "24a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כד",
  "amud": "א",
  "dafEn": "24a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "כל לנטורינהו טפי עדיף והיכא מנח להו אמר ר' ירמיה בין כר לכסת שלא כנגד ראשו והא תני רבי חייא מניחן בכובע תחת מראשותיו דמפיק ליה למורשא דכובע לבר בר קפרא צייר להו בכילתא ומפיק למורשהון לבר רב שישא בריה דרב אידי מנח להו אשרשיפא ופריס סודרא עלוייהו אמר רב המנונא בריה דרב יוסף זימנא חדא הוה קאימנא קמיה דרבא ואמר לי זיל אייתי לי תפילין ואשכחתינהו בין כר לכסת שלא כנגד ראשו והוה ידענא דיום טבילה הוה ולאגמורן הלכה למעשה הוא דעבד בעי מיניה רב יוסף בריה דרב נחוניא מרב יהודה שנים שישנים במטה אחת מהו שזה יחזיר פניו ויקרא ק\"ש וזה יחזיר פניו ויקרא ק\"ש א\"ל הכי אמר שמואל ואפילו אשתו עמו מתקיף לה רב יוסף אשתו ולא מיבעיא אחר אדרבה אשתו כגופו אחר לאו כגופו מיתיבי שנים שישנים במטה אחת זה מחזיר פניו וקורא וזה מחזיר פניו וקורא ותניא אחריתי הישן במטה ובניו ובני ביתו בצדו הרי זה לא יקרא ק\"ש אא\"כ היתה טלית מפסקת ביניהן ואם היו בניו ובני ביתו קטנים מותר בשלמא לרב יוסף לא קשיא הא באשתו הא באחר אלא לשמואל קשיא אמר לך שמואל לרב יוסף מי ניחא והתניא היה ישן במטה ובניו ובני ביתו במטה לא יקרא ק\"ש אא\"כ היתה טליתו מפסקת ביניהן אלא מאי אית לך למימר אשתו לרב יוסף תנאי היא לדידי נמי תנאי היא: אמר מר זה מחזיר פניו וקורא ק\"ש והא איכא עגבות מסייע ליה לרב הונא דא\"ר הונא עגבות אין בהם משום ערוה לימא מסייע ליה לרב הונא האשה יושבת וקוצה לה חלתה ערומה מפני שיכולה לכסות פניה בקרקע אבל לא האיש תרגמה רב נחמן בר יצחק כגון שהיו פניה טוחות בקרקע: אמר מר אם היו בניו ובני ביתו קטנים מותר ועד כמה אמר רב חסדא תינוקת בת שלש שנים ויום אחד ותינוק בן ט' שנים ויום אחד איכא דאמרי תינוקת בת י\"א שנה ויום אחד ותינוק בן שתים עשרה שנה ויום אחד אידי ואידי עד כדי (יחזקאל טז, ז) שדים נכונו ושערך צמח א\"ל רב כהנא לרב אשי התם אמר רבא אע\"ג דתיובתא דשמואל הלכתא כוותיה דשמואל הכא מאי אמר ליה אטו כולהו בחדא מחתא מחתינהו אלא היכא דאיתמר איתמר והיכא דלא איתמר לא איתמר א\"ל רב מרי לרב פפא שער יוצא בבגדו מהו קרא עליה שער שער: א\"ר יצחק טפח באשה ערוה למאי אילימא לאסתכולי בה והא א\"ר ששת למה מנה הכתוב תכשיטין שבחוץ עם תכשיטין שבפנים לומר לך כל המסתכל באצבע קטנה של אשה כאילו מסתכל במקום התורף אלא באשתו ולק\"ש אמר רב חסדא שוק באשה ערוה שנאמר (ישעיהו מז, ב) גלי שוק עברי נהרות וכתיב (ישעיהו מז, ג) תגל ערותך וגם תראה חרפתך אמר שמואל קול באשה ערוה שנא' (שיר השירים ב, יד) כי קולך ערב ומראך נאוה אמר רב ששת שער באשה ערוה שנא' (שיר השירים ד, א) שערך כעדר העזים: אמר ר' חנינא אני ראיתי את רבי שתלה תפיליו מיתיבי התולה תפיליו יתלו לו חייו דורשי חמורות אמרו (דברים כח, סו) והיו חייך תלואים לך מנגד זה התולה תפיליו לא קשיא הא ברצועה הא בקציצה ואיבעית אימא לא שנא רצועה ולא שנא קציצה אסור וכי תלה רבי בכיסתא תלה אי הכי מאי למימרא מהו דתימא תיבעי הנחה כספר תורה קמ\"ל: ואמר ר' חנינא אני ראיתי את רבי שגיהק ופיהק ונתעטש ורק",
  "rashi": [
   {
    "dh": "כל לנטורינהו טפי עדיף",
    "text": " — להו מבזיוני כמה שהוא מוזהר על שמירתן מן העכברים ומן הגנבים טפי עדיף להו מבזיוני:"
   },
   {
    "dh": "בכובע",
    "text": " — הוא הכיס שלהם:"
   },
   {
    "dh": "למורשא דכובע",
    "text": " — שהתפילין נכרין בבליטתן בקצה הכיס והוא כמורשא:"
   },
   {
    "dh": "צייר להו בכילתא",
    "text": " — ביריעה הפרוסה סביבו' מטתו קושרן:"
   },
   {
    "dh": "ומפיק למורשהון לבר",
    "text": " — בליטת הקשר שהתפילין בולטין מן היריעה היה הופך לצד החוץ ולא לצד המטה:"
   },
   {
    "dh": "אשרשיפא",
    "text": " — ספסל:"
   },
   {
    "dh": "יום טבילה הוה",
    "text": " — יום שטבלה אשתו דהוה ליה ליל תשמיש והיינו כשמואל דאמר אפילו אשתו עמו:"
   },
   {
    "dh": "ולאגמורן הלכה למעשה",
    "text": " — מה שצוני להביאם לו לא עשה אלא ללמדני הלכה לעשות מעשה כשמואל:"
   },
   {
    "dh": "ואפילו אשתו עמו",
    "text": " — שיחזיר פניו דכל זמן שהן פונים פנים כנגד פנים פשיטא ליה דאסור דאיכא הרהור נגיעת ערוה על ידי אברי תשמיש:"
   },
   {
    "dh": "אשתו כגופו",
    "text": " — ורגיל בה וליכא הרהור כולי האי:"
   },
   {
    "dh": "בשלמא לרב יוסף",
    "text": " — דאמר אשתו היא דשריא אבל אחר לא מתרץ להו למתניתא הא באשתו הא באחר והא דקתני בני ביתו אינו אשתו:"
   },
   {
    "dh": "היה ישן במטה ובני ביתו",
    "text": " — ואשתו בכלל ביתו:"
   },
   {
    "dh": "לדידי נמי",
    "text": " — בין אשתו בין אחר פלוגתא דהני תנאי היא:"
   },
   {
    "dh": "הא איכא עגבות",
    "text": " — דנגעי אהדדי:"
   },
   {
    "dh": "וקוצה חלתה ערומה",
    "text": " — ואף על פי שערום אסור לברך אשה יושבת מותרת שבישיבתה פניה שלמטה מכוסים בקרקע:"
   },
   {
    "dh": "אבל לא האיש",
    "text": " — מפני שהביצים והגיד בולטין ונראין ואף על פי שמגולות עגבותיו והיינו סייעתא:"
   },
   {
    "dh": "כגון שהיו פניה טוחות",
    "text": " — דבוקות ומכוסות בקרקע טוחות משמע לשון שעיעות טיח חלק שאינה בולטת אפלטיירש\"א בלע\"ז:"
   },
   {
    "dh": "בת שלש ובן תשע",
    "text": " — שהוא זמן שהן באין לכלל ביאה:"
   },
   {
    "dh": "בת י\"א ובן י\"ב",
    "text": " — זמן שהן באות לכלל שערות ושדיהן נכונים שמשם ואילך באות לכלל [ביאה] שאדם מתאוה להן:"
   },
   {
    "dh": "התם אמר רבא",
    "text": " — גבי תפילין תחת מראשותיו דקאמר שמואל אפי' אשתו עמו הלכה כשמואל:"
   },
   {
    "dh": "הכא",
    "text": " — גבי שנים שהם ישנים דקא שרי שמואל באשתו עמו מאי:"
   },
   {
    "dh": "מחתא מחתינהו",
    "text": " — באריגה אחת ארגתם:"
   },
   {
    "dh": "יצא שערו בבגדו",
    "text": " — שנקב בגדו כנגד זקן התחתון ויצא מן השער בנקב מהו מי הוי ערוה לקרות ק\"ש כנגדו או לא:"
   },
   {
    "dh": "שער שער",
    "text": " — כלומר מה בכך:"
   },
   {
    "dh": "לאסתכולי בה",
    "text": " — אם אשת איש היא:"
   },
   {
    "dh": "תכשיטין שבפנים",
    "text": " — כומז דפוס של בית הרחם שהיו עושין לבנותיהן ונוקבין כותלי בית הרחם כדרך שנוקבין את האזנים ותוחבין אותו כדי שלא יזדקקו להן זכרים:"
   },
   {
    "dh": "עם תכשיטין שבחוץ",
    "text": " — אצעדה וצמיד הן הביאו אותן על כפרת הרהור עבירה שנסתכלו בבנות מדין:"
   },
   {
    "dh": "לאשתו ולק\"ש",
    "text": " — אם טפח מגולה בה לא יקרא ק\"ש כנגדה:"
   },
   {
    "dh": "שוק",
    "text": " — באשת איש:"
   },
   {
    "dh": "ערוה",
    "text": " — להסתכל וכן באשתו לק\"ש:"
   },
   {
    "dh": "גלי שוק",
    "text": " — וכתיב בתריה תגל ערותך:"
   },
   {
    "dh": "קולך ערב",
    "text": " — מדמשבח לה קרא בגוה שמע מינה תאוה היא:"
   },
   {
    "dh": "התולה תפיליו",
    "text": " — ביתד יתלו חייו:"
   },
   {
    "dh": "דורשי רשומות",
    "text": " — קשרים וסתומים הכלולים בתורה דורשי חמורות גרסינן והיא היא:"
   },
   {
    "dh": "זה התולה תפיליו",
    "text": " — שהתורה חייו של אדם ורמז לך הכתוב שיתלו חייו:"
   },
   {
    "dh": "ברצועה",
    "text": " — והקציצה למטה גנאי הוא להם אבל תולה הוא אותם בקציצה ותהא הקציצה מונחת על היתד והרצועה למטה:"
   },
   {
    "dh": "בכיסתא תלה",
    "text": " — בתוך תיקן היו ותלה התיק:"
   },
   {
    "dh": "שגיהק",
    "text": " — ריט\"ייר בלע\"ז פעמים שאדם מוציא מגופו לפיו נפיחה מתוך שובעו וריחה כריח המאכל שאכל:"
   },
   {
    "dh": "פיהק",
    "text": " — באליי\"ר בלע\"ז חיך מלקוחיו פותח להוציא רוח הפה מלא כאדם שרוצה לישן או שעמד משינה:"
   },
   {
    "dh": "ונתעטש",
    "text": " — שטרנוד\"ר בלע\"ז ויש שדורשים גיהק נוטריקון גו הקים שטריליי\"ר פיהק פיו הקים:"
   },
   {
    "dh": "ורק",
    "text": " — ע\"ג קרקע:"
   }
  ],
  "tosafot": [
   {
    "dh": "והא תני רבי חייא מניחן בכובע תחת מראשותיו",
    "text": " — ואם תאמר אימא בכובע שלא כנגד ראשו שהרי בברייתא דלעיל נמי תני תחת מראשותיו ולא פריך מיניה משום דמצינן לפרושי שלא כנגד ראשו ואומר הרב דא\"כ מאי איריא בכובע אפילו שלא בכובע נמי אלא ש\"מ דמיירי אפילו כנגד ראשו ומ\"מ קשיא לישני דמיירי באשתו עמו דבעיא כלי בתוך כלי וצ\"ע:"
   },
   {
    "dh": "שנים שהיו ישנים במטה",
    "text": " — וא\"ת והלא רואה ערות עצמו וי\"ל שיוציא ראשו לחוץ וא\"ת והרי לבו רואה את הערוה וי\"ל דקסבר לבו רואה את הערוה מותר אי נמי חוצץ בבגדו כנגד לבו:"
   },
   {
    "dh": "והתניא היה ישן במטה ובני ביתו וכו'",
    "text": " — פי' רש\"י אשתו בכלל ביתו ולא נהירא חדא דלא אשכחן אשתו דמקריא בני ביתו ועוד לפירושו הול\"ל והא קתני כאן כיון דאברייתא דלעיל קאי אבל מדקאמר והתניא משמע דברייתא אחרת היא ואומר ה\"ר יוסף דגרסינן היה ישן במטה ואשתו ישנה בצדו לא יחזיר פניו ויקרא אא\"כ היתה טלית מפסקת בינו לבינה:"
   }
  ],
  "translations": []
 },
 {
  "id": "24b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כד",
  "amud": "ב",
  "dafEn": "24b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "וממשמש בבגדו אבל לא היה מתעטף וכשהוא מפהק היה מניח ידו על סנטרו מיתיבי המשמיע קולו בתפלתו הרי זה מקטני אמנה המגביה קולו בתפלתו הרי זה מנביאי השקר מגהק ומפהק הרי זה מגסי הרוח המתעטש בתפלתו סימן רע לו ויש אומרים ניכר שהוא מכוער הרק בתפלתו כאילו רק בפני המלך בשלמא מגהק ומפהק לא קשיא כאן לאונסו כאן לרצונו אלא מתעטש אמתעטש קשיא מתעטש אמתעטש נמי לא קשיא כאן מלמעלה כאן מלמטה דאמר רב זירא הא מילתא אבלעא לי בי רב המנונא ותקילא לי כי כולי תלמודאי המתעטש בתפלתו סימן יפה לו כשם שעושים לו נחת רוח מלמטה כך עושין לו נחת רוח מלמעלה אלא רק ארק קשיא רק ארק נמי לא קשיא אפשר כדרב יהודה דאמר רב יהודה היה עומד בתפלה ונזדמן לו רוק מבליעו בטליתו ואם טלית נאה הוא מבליעו באפרקסותו רבינא הוה קאי אחורי דרב אשי נזדמן לו רוק פתקיה לאחוריה א\"ל לא סבר לה מר להא דרב יהודה מבליעו באפרקסותו א\"ל אנא אנינא דעתאי: המשמיע קולו בתפלתו הרי זה מקטני אמנה: אמר רב הונא לא שנו אלא שיכול לכוין את לבו בלחש אבל אין יכול לכוין את לבו בלחש מותר וה\"מ ביחיד אבל בצבור אתי למיטרד צבורא: רבי אבא הוה קא משתמיט מיניה דרב יהודה דהוה קא בעי למיסק לארעא דישראל דאמר רב יהודה כל העולה מבבל לא\"י עובר בעשה שנאמר (ירמיהו כז, כב) בבלה יובאו ושמה יהיו עד יום פקדי אותם נאם ה' אמר איזיל ואשמע מיניה מילתא מבית וועדא והדר אפיק אזל אשכחיה לתנא דקתני קמיה דרב יהודה היה עומד בתפלה ונתעטש ממתין עד שיכלה הרוח וחוזר ומתפלל איכא דאמרי היה עומד בתפלה ובקש להתעטש מרחיק לאחריו ד' אמות ומתעטש וממתין עד שיכלה הרוח וחוזר ומתפלל ואומר רבש\"ע יצרתנו נקבים נקבים חלולים חלולים גלוי וידוע לפניך חרפתנו וכלימתנו בחיינו ובאחריתנו רמה ותולעה ומתחיל ממקום שפסק אמר ליה אילו לא באתי אלא לשמוע דבר זה דיי: ת\"ר היה ישן בטליתו ואינו יכול להוציא את ראשו מפני הצנה חוצץ בטליתו על צוארו וקורא ק\"ש וי\"א על לבו ותנא קמא הרי לבו רואה את הערוה קסבר לבו רואה את הערוה מותר אמר רב הונא א\"ר יוחנן היה מהלך במבואות המטונפות מניח ידו על פיו וקורא ק\"ש א\"ל רב חסדא האלהים אם אמרה לי ר' יוחנן בפומיה לא צייתנא ליה איכא דאמרי אמר רבה בר בר חנה אמר ריב\"ל היה מהלך במבואות המטונפות מניח ידו על פיו וקורא ק\"ש א\"ל ר' חסדא האלהים אם אמרה לי ריב\"ל בפומיה לא צייתנא ליה ומי אמר ר' הונא הכי והאמר רב הונא ת\"ח אסור לו לעמוד במקום הטנופת לפי שאי אפשר לו לעמוד בלי הרהור תורה לא קשיא כאן בעומד כאן במהלך ומי אמר רבי יוחנן הכי והאמר רבה בר בר חנה א\"ר יוחנן בכל מקום מותר להרהר בדברי תורה חוץ מבית המרחץ ומבית הכסא וכי תימא הכא נמי כאן בעומד כאן במהלך איני והא רבי אבהו הוה קא אזיל בתריה דרבי יוחנן והוה קא קרי ק\"ש כי מטא במבואות המטונפות אשתיק א\"ל לר' יוחנן להיכן אהדר א\"ל אם שהית כדי לגמור את כולה חזור לראש הכי קאמר ליה לדידי לא סבירא לי לדידך דסבירא לך אם שהית כדי לגמור את כולה חזור לראש תניא כותיה דרב הונא תניא כותיה דרב חסדא תניא כותיה דרב הונא המהלך במבואות המטונפות מניח ידו על פיו ויקרא ק\"ש תניא כותיה דרב חסדא היה מהלך במבואות המטונפות לא יקרא ק\"ש ולא עוד אלא שאם היה קורא ובא פוסק לא פסק מאי אמר ר' מיאשה בר בריה דריב\"ל עליו הכתוב אומר (יחזקאל כ, כה) וגם אני נתתי להם חוקים לא טובים ומשפטים לא יחיו [בהם] ר' אסי אמר (ישעיהו ה, יח) הוי מושכי העון בחבלי השוא רב אדא בר אהבה אמר מהכא (במדבר טו, לא) כי דבר ה' בזה ואם פסק מה שכרו אמר ר' אבהו עליו הכתוב אומר (דברים לב, מז) ובדבר הזה תאריכו ימים: אמר רב הונא היתה טליתו חגורה לו על מתניו מותר לקרות ק\"ש תניא נמי הכי היתה טליתו של בגד ושל עור ושל שק חגורה על מתניו מותר לקרות ק\"ש",
  "rashi": [
   {
    "dh": "וממשמש בבגדו",
    "text": " — להעביר הכינה העוקצתו:"
   },
   {
    "dh": "אבל לא היה מתעטף",
    "text": " — אם נפלה טליתו כשהוא מתפלל לא היה נוטלה ומתעטף שלא להפסיק:"
   },
   {
    "dh": "על סנטרו",
    "text": " — מנטו\"ן בלע\"ז שלא תראה פתיחת פיו:"
   },
   {
    "dh": "הרי זה מקטני אמנה",
    "text": " — כאילו אין הקב\"ה שומע תפלת לחש ומגביה הרבה:"
   },
   {
    "dh": "הרי זה מנביאי השקר",
    "text": " — דכתיב ויקראו בקול גדול (מלכים א י״ח:כ״ח):"
   },
   {
    "dh": "המגהק והמפהק הרי זה מגסי הרוח וי\"א ניכר שהוא מכוער גרסינן",
    "text": ""
   },
   {
    "dh": "אלא עטוש אעטוש קשיא",
    "text": " — דאין עטוש אלא לאונסו:"
   },
   {
    "dh": "למטה",
    "text": " — מפיח בקול:"
   },
   {
    "dh": "ותקילא לי כי כולי תלמודאי",
    "text": " — שקולה עלי וחביבה לפי שהיה רגיל להתעטש:"
   },
   {
    "dh": "כשם שעושים לו נחת רוח",
    "text": " — שהעטוש נחת רוח לאדם:"
   },
   {
    "dh": "כך עושים לו נחת רוח מלמעלה",
    "text": " — מן השמים למלאת שאלתו:"
   },
   {
    "dh": "אפשר כדרבי יהודה",
    "text": " — להבליע באפרקסותו סודר שבראשו ושני ראשין תלויין בפניו:"
   },
   {
    "dh": "פתקיה",
    "text": " — זרקו:"
   },
   {
    "dh": "מישתמיט מיניה",
    "text": " — לא היה נראה אליו לפי שהיה רבי אבא חפץ לעלות לא\"י ורב יהודה אוסר לו לפיכך לא היה נכנס לבית המדרש:"
   },
   {
    "dh": "ואשמע מיניה מילתא",
    "text": " — מבחוץ:"
   },
   {
    "dh": "מבית וועדא",
    "text": " — מבית המדרש:"
   },
   {
    "dh": "ונתעטש",
    "text": " — מלמטה:"
   },
   {
    "dh": "עד שיכלה הרוח",
    "text": " — מגופו שנודף מאותו רוח:"
   },
   {
    "dh": "וחוזר לתפלה",
    "text": " — למקום שפסק:"
   },
   {
    "dh": "ואומר",
    "text": " — בתוך התפלה דהא מופסקת ועומדת כבר על ידי הרוח לפיכך יכול להפסיק נמי ולומר דבר זה באמצע:"
   },
   {
    "dh": "חוצץ בטליתו על צוארו",
    "text": " — מה שיש מן הטלית ולמעלה מן כתפיו מדביק בצוארו ובישן ערום קאמר:"
   },
   {
    "dh": "לדידי לא סבירא לי",
    "text": " — לא הייתי מזקיקו להפסיק:"
   },
   {
    "dh": "בחבלי השוא",
    "text": " — בחבלים שאינם חזקים אלא נוחין להנתק הן מושכין העון על עצמם אף זה על ידי דבור בעלמא הוא נענש:"
   },
   {
    "dh": "ובדבר הזה",
    "text": " — בשביל דבור זה שנזהרתם עליו תאריכון ימים:"
   },
   {
    "dh": "היתה טליתו חגורה על מתניו",
    "text": " — לכסותו ממתניו ולמטה אע\"פ שממתניו ולמעלה הוא ערום קורא ק\"ש:"
   }
  ],
  "tosafot": [
   {
    "dh": "וממשמש בבגדו",
    "text": " — פרש\"י להעביר הכינה העוקצתו אבל לא מתעטף אם נפלה טליתו ותרי מילי נינהו. ור\"ח פי' דחדא מילתא היא פי' ממשמש בבגדו תקן שלא יפול מעל ראשו אבל אם נפל מעל ראשו לא היה מתעטף שהרי היא הפסקה אם מתעטף כיון שנפל לגמרי אבל לתקן קצת שלא יפול לא הוי הפסקה:"
   },
   {
    "dh": "ואומר רבון העולמים",
    "text": " — מיד באמצע תפלתו ואח\"כ מתחיל ממקום שפסק:"
   },
   {
    "dh": "אמר ליה לדידי לא סבירא לי",
    "text": " — פירוש משום תרתי מילי חדא דסבירנא דאינו חוזר לראש דאמר רבי יוחנן (ר\"ה דף ל\"ד:) שמע תשע תקיעות בתשע שעות יצא ועוד דסבירא לי מניח ידו על פיו ואם כן הוי ליה ראוי אלא לדידך דסבירא לך דחייב להפסיק וכו':"
   },
   {
    "dh": "בחבלי השוא",
    "text": " — כלומר בחנם מושכים עליהם עון כי טוב היה שלא היו מקיימין אותו כלל:"
   }
  ],
  "translations": []
 },
 {
  "id": "25a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כה",
  "amud": "א",
  "dafEn": "25a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אבל לתפלה עד שיכסה את לבו וא\"ר הונא שכח ונכנס בתפילין לבית הכסא מניח ידו עליהן עד שיגמור עד שיגמור ס\"ד אלא כדאמר ר\"נ בר יצחק עד שיגמור עמוד ראשון ולפסוק לאלתר וליקום משום דרשב\"ג דתניא רשב\"ג אומר עמוד החוזר מביא את האדם לידי הדרוקן סילון החוזר מביא את האדם לידי ירקון: אתמר צואה על בשרו או ידו מונחת בבית הכסא רב הונא אמר מותר לקרות ק\"ש רב חסדא אמר אסור לקרות ק\"ש אמר רבא מ\"ט דרב הונא דכתיב (תהלים קנ, ו) כל הנשמה תהלל יה ורב חסדא אמר אסור לקרות ק\"ש מ\"ט דרב חסדא דכתיב (תהלים לה, י) כל עצמותי תאמרנה ה' מי כמוך: אתמר ריח רע שיש לו עיקר רב הונא אמר מרחיק ד' אמות וקורא ק\"ש ורב חסדא אמר מרחיק ד' אמות ממקום שפסק הריח וקורא ק\"ש תניא כותיה דרב חסדא לא יקרא אדם ק\"ש לא כנגד צואת אדם ולא כנגד צואת כלבים ולא כנגד צואת חזירים ולא כנגד צואת תרנגולים ולא כנגד צואת אשפה שריחה רע ואם היה מקום גבוה עשרה טפחים או נמוך עשרה טפחים יושב בצדו וקורא ק\"ש ואם לאו מרחיק מלא עיניו וכן לתפלה ריח רע שיש לו עיקר מרחיק ד' אמות ממקום הריח וקורא ק\"ש אמר רבא לית הלכתא כי הא מתניתא (בכל הני שמעתתא) אלא כי הא דתניא לא יקרא אדם ק\"ש לא כנגד צואת אדם ולא כנגד צואת חזירים ולא כנגד צואת כלבים בזמן שנתן עורות לתוכן בעו מיניה מרב ששת ריח רע שאין לו עיקר מהו אמר להו אתו חזו הני ציפי דבי רב דהני גנו והני גרסי וה\"מ בדברי תורה אבל בק\"ש לא ודברי תורה נמי לא אמרן אלא דחבריה אבל דידיה לא: אתמר צואה עוברת אביי אמר מותר לקרות ק\"ש רבא אמר אסור לקרות ק\"ש אמר אביי מנא אמינא לה דתנן הטמא עומד תחת האילן והטהור עובר טמא טהור עומד תחת האילן וטמא עובר טהור ואם עמד טמא וכן באבן המנוגעת ורבא אמר לך התם בקביעותא תליא מילתא דכתיב (ויקרא יג, מו) בדד ישב מחוץ למחנה מושבו הכא (דברים כג, טו) והיה מחניך קדוש אמר רחמנא והא ליכא: א\"ר פפא פי חזיר כצואה עוברת דמי פשיטא לא צריכא אע\"ג דסליק מנהרא א\"ר יהודה ספק צואה אסורה ספק מי רגלים מותרים א\"ד אמר רב יהודה ספק צואה בבית מותרת באשפה אסורה ספק מי רגלים אפילו באשפה נמי מותרין סבר לה כי הא דרב המנונא דאמר רב המנונא לא אסרה תורה אלא כנגד עמוד בלבד וכדרבי יונתן דר' יונתן רמי כתיב (דברים כג, יג) ויד תהיה לך מחוץ למחנה ויצאת שמה חוץ וכתיב (דברים כג, יד) ויתד תהיה לך וגו' וכסית את צאתך הא כיצד כאן בגדולים כאן בקטנים אלמא קטנים לא אסרה תורה אלא כנגד עמוד בלבד הא נפול לארעא שרי ורבנן הוא דגזרו בהו וכי גזרו בהו רבנן בודאן אבל בספקן לא גזור ובודאן עד כמה אמר רב יהודה אמר שמואל כל זמן שמטפיחין וכן אמר רבה בב\"ח א\"ר יוחנן כל זמן שמטפיחין וכן אמר עולא כל זמן שמטפיחין גניבא משמיה דרב אמר כל זמן שרשומן ניכר א\"ר יוסף שרא ליה מריה לגניבא השתא צואה אמר רב יהודה אמר רב כיון שקרמו פניה מותר מי רגלים מיבעיא א\"ל אביי מאי חזית דסמכת אהא סמוך אהא דאמר רבה בר רב הונא אמר רב צואה אפילו כחרס אסורה והיכי דמי צואה כחרס אמר רבה בב\"ח א\"ר יוחנן כל זמן שזורקה ואינה נפרכת וא\"ד כל זמן שגוללה ואינה נפרכת אמר רבינא הוה קאימנא קמיה דרב יהודה מדפתי חזא צואה אמר לי עיין אי קרמו פניה אי לא א\"ד הכי א\"ל עיין אי מפלאי אפלויי מאי הוי עלה אתמר צואה כחרס אמימר אמר אסורה ומר זוטרא אמר מותרת אמר רבא הלכתא צואה כחרס אסורה ומי רגלים כל זמן שמטפיחין מיתיבי מי רגלים כל זמן שמטפיחין אסורין נבלעו או יבשו מותרים מאי לאו נבלעו דומיא דיבשו מה יבשו דאין רשומן ניכר אף נבלעו דאין רשומן ניכר הא רשומן ניכר אסור אע\"ג דאין מטפיחין ולטעמיך אימא רישא כל זמן שמטפיחין הוא דאסור הא רשומן ניכר שרי אלא מהא ליכא למשמע מינה לימא כתנאי כלי שנשפכו ממנו מי רגלים אסור לקרות ק\"ש כנגדו ומי רגלים עצמן שנשפכו נבלעו מותר לא נבלעו אסור ר' יוסי אומר כל זמן שמטפיחין מאי נבלעו ומאי לא נבלעו דקאמר ת\"ק אילימא נבלעו דאין מטפיחין לא נבלעו דמטפיחין ואתא ר' יוסי למימר כ\"ז שמטפיחין הוא דאסור הא רשומן ניכר שרי היינו ת\"ק אלא נבלעו דאין רשומן ניכר לא נבלעו דרשומן ניכר ואתא ר' יוסי למימר כ\"ז שמטפיחין הוא דאסור הא רשומן ניכר שרי לא דכ\"ע כ\"ז שמטפיחין הוא דאסור הא רשומן ניכר שרי",
  "rashi": [
   {
    "dh": "אבל לתפלה",
    "text": " — צריך הוא להראות את עצמו כעומד לפני המלך ולעמוד באימה אבל ק\"ש אינו מדבר לפני המלך:"
   },
   {
    "dh": "הדרוקן",
    "text": " — חולי המצבה את הכרס:"
   },
   {
    "dh": "סילון",
    "text": " — של מי רגלים:"
   },
   {
    "dh": "ירקון",
    "text": " — חולי ששמו גלניצ\"ה:"
   },
   {
    "dh": "ידיו בבית הכסא",
    "text": " — מחיצה יש בינו לבין בית הכסא ופשט ידיו לפנים מן המחיצה:"
   },
   {
    "dh": "כל הנשמה",
    "text": " — הפה והחוטם בכלל ההילול ולא שאר אברים:"
   },
   {
    "dh": "שיש לו עיקר",
    "text": " — שהצואה מונחת שם ומסרחת ושאין לו עיקר הפחת רוח:"
   },
   {
    "dh": "מרחיק ד' אמות",
    "text": " — מן העיקר ואע\"פ שהריח בא אליו וכגון שהיא לאחוריו שאינו רואה אותה:"
   },
   {
    "dh": "ממקום שפסק הריח",
    "text": " — שהריח כלה שם: לא כנגד צואת אדם כו' ואע\"פ שאין ריח:"
   },
   {
    "dh": "לא כנגד צואת אדם כו'",
    "text": " — ואע\"פ שאין ריח:"
   },
   {
    "dh": "לית הלכתא כי הא מתניתא",
    "text": " — דלעיל דאסר צואת כלבים וחזירים בשאין בהם עורות:"
   },
   {
    "dh": "בזמן שיש בהן עורות",
    "text": " — אצואת כלבים וחזירים קאי שדרכן לתתן בעבוד העורות אבל צואת אדם אפי' בלא עורות שהרי אין דרכן לתתן שם הלכך ע\"כ בלא עורות קאמר:"
   },
   {
    "dh": "שאין לו עיקר",
    "text": " — הפחת רוח:"
   },
   {
    "dh": "ציפי",
    "text": " — מחצלות של בית המדרש:"
   },
   {
    "dh": "דהני גנו והני גרסי",
    "text": " — ואע\"פ שדרך הישנים להפיח:"
   },
   {
    "dh": "וה\"מ לגרסא",
    "text": " — משום דלא אפשר:"
   },
   {
    "dh": "אבל לק\"ש",
    "text": " — יצא לחוץ ויקרא:"
   },
   {
    "dh": "אבל לדידיה",
    "text": " — הפיח הוא עצמו ממתין עד שיכלה הריח:"
   },
   {
    "dh": "צואה עוברת",
    "text": " — אדם שנושאי' לפניו גרף של רעי להעבירו:"
   },
   {
    "dh": "מותר לקרות",
    "text": " — וא\"צ להפסיק:"
   },
   {
    "dh": "הטמא עומד תחת האילן",
    "text": " — ולא בנושא את המת קאי דמת לא שנא עומד ול\"ש יושב ול\"ש הולך אהל הוא וגבי מצורע קתני לה בת\"כ דגלי ביה רחמנא ישיבה דכתיב בדד ישב מחוץ למחנה מושבו. [מושבו] טמא. מכאן אמרו עומד נמי כיושב דמי דקביע אבל מהלך לא קביע:"
   },
   {
    "dh": "אבן המנוגעת",
    "text": " — הרי היא כמצורע שהקישה הכתוב זאת התורה לכל נגע הצרעת ולנתק ולצרעת הבגד ולבית (ויקרא י״ד:נ״ד-נ״ה):"
   },
   {
    "dh": "פשיטא",
    "text": " — דפי חזיר אינו בלא צואה:"
   },
   {
    "dh": "בבית מותר",
    "text": " — דאין דרך להניח צואה בבית:"
   },
   {
    "dh": "לא אסרה תורה",
    "text": " — במי רגלים לקרות אלא כנגד עמוד הקלוח בלבד:"
   },
   {
    "dh": "ויצאת שמה חוץ",
    "text": " — ולא הצריכו כסוי וכתיב וכסית:"
   },
   {
    "dh": "עד כמה",
    "text": " — ישהו על גבי קרקע ויהא אסור:"
   },
   {
    "dh": "שרא ליה מריה",
    "text": " — מחול לו רבונו דודאי שקר העיד משמיה דרב:"
   },
   {
    "dh": "היבשה נפרכת היא יותר מן הלחה",
    "text": ""
   },
   {
    "dh": "קרמו",
    "text": " — לשון קרום טיל\"א כלומר גלד מעט:"
   },
   {
    "dh": "איכא דאמרי",
    "text": " — חומרא היא אף ע\"פ שאם זורקה נפרכת הואיל ואינה נפרכת מגלגול לחה היא:"
   },
   {
    "dh": "אי מפלאי אפלויי",
    "text": " — אם יש בה סדקים סדקים יבשה היא ושרי:"
   },
   {
    "dh": "מאי הוי עלה",
    "text": " — דמי רגלים:"
   },
   {
    "dh": "נבלעו",
    "text": " — בארץ:"
   },
   {
    "dh": "יבשו",
    "text": " — על גבי אבנים בחמה:"
   }
  ],
  "tosafot": [
   {
    "dh": "פסק רבינו חננאל כרב חסדא דאסור לקרות ק״ש אפילו צואה תחת בגדו על בשרו וס״ל כל עצמותי תאמרנה (תהילים ל״ה:י׳) דאע״ג דר' חסדא תלמיד דר' הונא הוה לחומרא אזלינן ורב אלפס פסק כרב הונא מדאקשי גמרא מיניה ביומא פרק הממונה (ד ל.)",
    "text": ""
   },
   {
    "dh": "לית הלכתא כי הא מתניתא אלא כי הא דתניא כו'",
    "text": " — פרש\"י לית הלכתא כי הא מתניתא דלעיל דאסרה צואת כלבים וחזירים אפי' בשאין בהם עורות אבל בצואת אדם לא שייך ואסור בכל ענין משמע אבל בצואת תרנגולים לא איירי רבא ובאידך ברייתא לא גרס צואת תרנגולים כלל ולא פליג בהא אמתניתא דלעיל ולפי זה יש לאסור צואת תרנגולין ואומר רבינו יהודה דדוקא כשהן בלול שלהם שיש שם סרחון גדול אבל בתרנגולים ההולכים בבית אין חוששין. ובירושלמי יש דבאדומים בלבד יש לחוש ולא ידעינן לפרש ועוד קאמר מרחיקין מגללי בהמה ד' אמות ר' שמואל ברבי יצחק אומר ובלבד של חמור:"
   },
   {
    "dh": "ריח רע שאין לו עיקר",
    "text": " — י\"מ דבתי כסאות שלנו בעומק אם יש בהן מחיצה מפסקת הויא כמו ריח רע שאין לו עיקר כמו בתי כסאות דפרסאי לקמן (ברכות ד' כו.):"
   },
   {
    "dh": "לית הלכתא כי הא מתניתא אלא כי הא דתניא כו'",
    "text": " — פרש\"י לית הלכתא כי הא מתניתא דלעיל דאסרה צואת כלבים וחזירים אפי' בשאין בהם עורות אבל בצואת אדם לא שייך ואסור בכל ענין משמע אבל בצואת תרנגולים לא איירי רבא ובאידך ברייתא לא גרס צואת תרנגולים כלל ולא פליג בהא אמתניתא דלעיל ולפי זה יש לאסור צואת תרנגולין ואומר רבינו יהודה דדוקא כשהן בלול שלהם שיש שם סרחון גדול אבל בתרנגולים ההולכים בבית אין חוששין. ובירושלמי יש דבאדומים בלבד יש לחוש ולא ידעינן לפרש ועוד קאמר מרחיקין מגללי בהמה ד' אמות ר' שמואל ברבי יצחק אומר ובלבד של חמור:"
   }
  ],
  "translations": []
 },
 {
  "id": "25b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כה",
  "amud": "ב",
  "dafEn": "25b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "והכא בטופח על מנת להטפיח איכא בינייהו: ירד לטבול אם יכול לעלות כו': לימא תנא סתמא כר' אליעזר דאמר עד הנץ החמה אפי' תימא ר' יהושע ודלמא כותיקין דא\"ר יוחנן ותיקין היו גומרין אותה עם הנץ החמה: ואם לאו יתכסה במים ויקרא: והרי לבו רואה את הערוה א\"ר אלעזר ואי תימא ר' אחא בר אבא בר אחא משום רבינו במים עכורין שנו דדמו כארעא סמיכתא שלא יראה לבו ערותו. ת\"ר מים צלולין ישב בהן עד צוארו וקורא וי\"א עוכרן ברגלו ות\"ק והרי לבו רואה את הערוה קסבר לבו רואה את הערוה מותר והרי עקבו רואה את הערוה קסבר עקבו רואה את הערוה מותר אתמר עקבו רואה את הערוה מותר נוגע אביי אמר אסור ורבא אמר מותר רב זביד מתני לה להא שמעתא הכי רב חיננא בריה דרב איקא מתני לה הכי נוגע דברי הכל אסור רואה אביי אמר אסור רבא אמר מותר לא נתנה תורה למלאכי השרת והלכתא נוגע אסור רואה מותר אמר רבא צואה בעששית מותר לקרות ק\"ש כנגדה ערוה בעששית אסור לקרות ק\"ש כנגדה צואה בעששית מותר לקרות ק\"ש כנגדה דצואה בכסוי תליא מילתא והא מיכסיא ערוה בעששית אסור לקרות ק\"ש כנגדה (דברים כג, טו) ולא יראה בך ערות דבר אמר רחמנא והא קמיתחזיא אמר אביי צואה כל שהוא מבטלה ברוק אמר רבא וברוק עבה אמר רבא צואה בגומא מניח סנדלו עליה וקורא ק\"ש בעא מר בריה דרבינא צואה דבוקה בסנדלו מאי תיקו אמר רב יהודה עכו\"ם ערום אסור לקרות ק\"ש כנגדו מאי איריא עכו\"ם אפילו ישראל נמי ישראל פשיטא ליה דאסור אלא עכו\"ם אצטריכא ליה מהו דתימא הואיל וכתיב בהו (יחזקאל כג, כ) אשר בשר חמורים בשרם אימא כחמור בעלמא הוא קמ\"ל דאינהו נמי איקרו ערוה דכתיב (בראשית ט, כג) וערות אביהם לא ראו: ולא יתכסה לא במים הרעים ולא במי המשרה עד שיטיל לתוכן מים: וכמה מיא רמי ואזיל אלא ה\"ק לא יתכסה לא במים הרעים ולא במי המשרה כלל ומי רגלים עד שיטיל לתוכן מים ויקרא ת\"ר כמה יטיל לתוכן מים כל שהוא ר' זכאי אומר רביעית אמר רב נחמן מחלוקת לבסוף אבל בתחלה כל שהן ורב יוסף אמר מחלוקת לכתחלה אבל לבסוף דברי הכל רביעית אמר ליה רב יוסף לשמעיה אייתי לי רביעיתא דמיא כר' זכאי: ת\"ר גרף של רעי ועביט של מי רגלים אסור לקרות ק\"ש כנגדן ואף ע\"פ שאין בהן כלום ומי רגלים עצמן עד שיטיל לתוכן מים וכמה יטיל לתוכן מים כל שהוא ר' זכאי אומר רביעית בין לפני המטה בין לאחר המטה רבן שמעון בן גמליאל אומר לאחר המטה קורא לפני המטה אינו קורא אבל מרחיק הוא ארבע אמות וקורא ר\"ש בן אלעזר אומר אפי' בית מאה אמה לא יקרא עד שיוציאם או שיניחם תחת המטה איבעיא להו היכי קאמר אחר המטה קורא מיד לפני המטה מרחיק ארבע אמות וקורא או דלמא הכי קאמר לאחר המטה מרחיק ד' אמות וקורא לפני המטה אינו קורא כלל ת\"ש דתניא ר\"ש בן אלעזר אומר אחר המטה קורא מיד לפני המטה מרחיק ארבע אמות רבן שמעון בן גמליאל אומר אפי' בית מאה אמה לא יקרא עד שיוציאם או שיניחם תחת המטה בעיין איפשיטא לן מתנייתא קשיין אהדדי איפוך בתרייתא מה חזית דאפכת בתרייתא איפוך קמייתא מאן שמעת ליה דאמר כוליה בית כארבע אמות דמי ר\"ש בן אלעזר היא אמר רב יוסף בעאי מיניה מרב הונא מטה פחות משלשה פשיטא לי דכלבוד דמי שלשה ארבעה חמשה ששה שבעה שמנה תשעה מהו א\"ל לא ידענא עשרה ודאי לא מיבעי לי אמר אביי שפיר עבדת דלא איבעיא לך כל עשרה רשותא אחריתי היא אמר רבא הלכתא פחות משלשה כלבוד דמי עשרה רשותא אחריתי היא משלשה עד עשרה היינו דבעא מיניה רב יוסף מרב הונא ולא פשט ליה אמר רב הלכה כר\"ש בן אלעזר וכן אמר באלי א\"ר יעקב ברה דבת שמואל הלכה כרבי שמעון בן אלעזר ורבא אמר אין הלכה כר\"ש בן אלעזר רב אחאי איעסק ליה לבריה בי רב יצחק בר שמואל בר מרתא עייליה לחופה ולא הוה מסתייעא מילתא אזל בתריה לעיוני חזא ספר תורה דמנחא אמר להו איכו השתא לא אתאי סכנתון לברי דתניא בית שיש בו ספר תורה או תפילין אסור לשמש בו את המטה עד שיוציאם או שיניחם כלי בתוך כלי אמר אביי לא שנו אלא בכלי שאינו כליין אבל בכלי שהוא כליין אפילו עשרה מאני כחד מאנא דמי אמר רבא גלימא",
  "rashi": [
   {
    "dh": "בטופח ע\"מ להטפיח איכא בינייהו",
    "text": " — ת\"ק בעי על מנת להטפיח ור' יוסי מחמיר:"
   },
   {
    "dh": "לימא תנא סתמא כר' אליעזר",
    "text": " — והלכה כמותו:"
   },
   {
    "dh": "דילמא לותיקין קאמרה מתני' עם הנץ החמה אבל לכ\"ע עד שלש שעות",
    "text": ""
   },
   {
    "dh": "והרי לבו רואה את הערוה",
    "text": " — קס\"ד כל אבר שאין דרכו לראות את הערוה [ורואה] אותו בשעה שקורא בתורה קרינן ביה ולא יראה בך ערות דבר:"
   },
   {
    "dh": "לא נתנה תורה למלאכי השרת",
    "text": " — שאין להם ערוה על כרחנו יש לנו ערוה ואין אנו יכולים להשמר מכל זה:"
   },
   {
    "dh": "בעששית",
    "text": " — לנטירנ\"א בלע\"ז כלומר מחיצת זכוכית או קלף דק מפסיק בנתיים והיא נראית:"
   },
   {
    "dh": "בכסוי תליא מילתא",
    "text": " — וכסית את צאתך:"
   },
   {
    "dh": "כל שהוא",
    "text": " — מעט:"
   },
   {
    "dh": "ברוק",
    "text": " — רוקק עליה ומכסה אותה ברוק:"
   },
   {
    "dh": "מים הרעים",
    "text": " — סרוחים:"
   },
   {
    "dh": "וכמה מיא רמי ואזיל",
    "text": " — כמה ישליך לתוכם ויבטלם הלא מרובין הם:"
   },
   {
    "dh": "ומי רגלים",
    "text": " — מועטין והם בכלי והוא בא לקרות ק\"ש אצלם:"
   },
   {
    "dh": "לבסוף",
    "text": " — שמי רגלים בכלי וזה נותן לתוכן מים בההיא קאמר ר' זכאי רביעית:"
   },
   {
    "dh": "אבל לכתחלה",
    "text": " — שקדמו המים למי רגלים דברי הכל כל שהוא שכשמטיל מי רגלים בכלי לבסוף ראשון ראשון שנופל לתוך המים מתבטל ואע\"פ שהם רבים והולכין כבר בטלו:"
   },
   {
    "dh": "אייתי לי רביעתא",
    "text": " — אפי' בתחלה:"
   },
   {
    "dh": "גרף ועביט",
    "text": " — שניהם כלי חרס הם אלא של רעי קרוי גרף ושל מי רגלים קרוי עביט:"
   },
   {
    "dh": "אסור לקרות ק\"ש כנגדם",
    "text": " — הואיל ומיוחדין לכך ואע\"פ שאין בתוכן כלום:"
   },
   {
    "dh": "ומי רגלים עצמן",
    "text": " — בכלי שאינו מיוחד להם:"
   },
   {
    "dh": "בין לפני המטה",
    "text": " — שאין המטה מפסקת בינו לבינם:"
   },
   {
    "dh": "בין לאחר המטה",
    "text": " — שהמטה מפסקת ביניהם אסור:"
   },
   {
    "dh": "או שיניחם תחת המטה גרסינן",
    "text": " — ולא גרסינן כלי בתוך כלי:"
   },
   {
    "dh": "תחת המטה",
    "text": " — כאילו היו טמונים בארץ:"
   },
   {
    "dh": "היכי קאמר",
    "text": " — רשב\"ג:"
   },
   {
    "dh": "בעיין איפשיטא לן",
    "text": " — שאלתנו נתפרשה לה בחלוק שבין לפני המטה ולאחר המטה:"
   },
   {
    "dh": "מתנייתא מיהו קשיין",
    "text": " — שהוחלפה שיטתן:"
   },
   {
    "dh": "מאן שמעת ליה וכו'",
    "text": " — לא ידעתי היכן היא:"
   },
   {
    "dh": "פשיטא לי",
    "text": " — במניחן תחת המטה ורגליה קצרים שאין הימנה ולקרקע שלשה טפחים כלבוד דמי והרי הן כטמונים:"
   },
   {
    "dh": "עשרה ודאי",
    "text": " — לא שאלתי ממנו דנראה כאילו אינה תחתיה מאחר שיש הפסק כל כך אין זה כסוי:"
   },
   {
    "dh": "עייליה לחופה ולא הוה מסתייעא מילתא",
    "text": " — דנישואין שלא היה יכול לבעול:"
   },
   {
    "dh": "סכנתון לברי",
    "text": " — כמעט סכנתם את בני למות בעונש העון:"
   },
   {
    "dh": "אפילו עשרה מאני",
    "text": " — וכולן כליין כחד מאנא דמי:"
   }
  ],
  "tosafot": [
   {
    "dh": "והרי לבו רואה את הערוה",
    "text": " — פירש ר\"י מדפריך גמרא הכי בפשיטות משמע דלבו רואה את הערוה אסור אלא דרבינו שמעיה תלמידו של רש\"י פסק כת\"ק דלבו רואה את הערוה מותר ומיהו בסמוך משמע דאסור דלא פליגי הני אמוראי אלא בעקבו רואה את הערוה אבל בלבו רואה את הערוה כ\"ע מודו דאסור:"
   },
   {
    "dh": "והלכתא נוגע עקבו אסור",
    "text": " — וטעמא דגזרינן נוגע עקבו שמא יגע בידיו:"
   },
   {
    "dh": "גרף של רעי",
    "text": " — פי' רש\"י של חרס בלוע משמע לפירושו אבל כלי דלא בלע כגון זכוכית אפשר דשרי:"
   },
   {
    "dh": "ובלבד שיטיל בהן רביעית מים",
    "text": " — אבל בגרף אפשר דלא מהני מים:"
   }
  ],
  "translations": []
 },
 {
  "id": "26a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כו",
  "amud": "א",
  "dafEn": "26a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אקמטרא ככלי בתוך כלי דמי. אמר רבי יהושע בן לוי ס\"ת צריך לעשות לו מחיצה עשרה מר זוטרא איקלע לבי רב אשי חזייה לדוכתיה דמר בר רב אשי דמנח ביה ספר תורה ועביד ליה מחיצה עשרה אמר ליה כמאן כרבי יהושע בן לוי אימר דאמר רבי יהושע בן לוי דלית ליה ביתא אחרינא מר הא אית ליה ביתא אחרינא אמר ליה לאו אדעתאי: כמה ירחיק מהן ומן הצואה ארבע אמות: אמר רבא אמר רב סחורה אמר רב הונא לא שנו אלא לאחוריו אבל לפניו מרחיק מלא עיניו וכן לתפלה איני והא אמר רפרם בר פפא אמר רב חסדא עומד אדם כנגד בית הכסא ומתפלל הכא במאי עסקינן בבית הכסא שאין בו צואה איני והאמר רב יוסף בר חנינא בית הכסא שאמרו אע\"פ שאין בו צואה ובית המרחץ שאמרו אע\"פ שאין בו אדם אלא הכא במאי עסקינן בחדתי והא מיבעי ליה לרבינא הזמינו לבית הכסא מהו יש זימון או אין זימון כי קא מיבעי ליה לרבינא למיקם עליה לצלויי בגויה אבל כנגדו לא אמר רבא הני בתי כסאי דפרסאי אע\"ג דאית בהו צואה כסתומין דמו:  זב שראה קרי ונדה שפלטה שכבת זרע והמשמשת שראתה נדה צריכין טבילה ורבי יהודה פוטר: גמ׳ איבעיא להו בעל קרי שראה זיבה לר' יהודה מהו כי פטר רבי יהודה התם בזב שראה קרי דמעיקרא לאו בר טבילה הוא אבל בעל קרי שראה זיבה דמעיקרא בר טבילה הוא מחייב או דילמא לא שנא תא שמע המשמשת וראתה נדה צריכה טבילה ורבי יהודה פוטר והא משמשת וראתה נדה כבעל קרי שראה זיבה דמיא וקא פטר רבי יהודה ש\"מ תני רבי חייא בהדיא בעל קרי שראה זיבה צריך טבילה ורבי יהודה פוטר: הדרן עלך מי שמתו  תפלת השחר עד חצות ר' יהודה אומר עד ד' שעות תפלת המנחה עד הערב רבי יהודה אומר עד פלג המנחה תפלת הערב אין לה קבע ושל מוספים כל היום (ר' יהודה אומר עד ז' שעות): גמ׳ ורמינהו מצותה עם הנץ החמה כדי שיסמוך גאולה לתפלה ונמצא מתפלל ביום כי תניא ההיא לותיקין דא\"ר יוחנן ותיקין היו גומרים אותה עם הנץ החמה וכ\"ע עד חצות ותו לא והאמר רב מרי בריה דרב הונא בריה דר' ירמיה בר אבא אמר רבי יוחנן טעה ולא התפלל ערבית מתפלל בשחרית שתים שחרית מתפלל במנחה שתים כולי יומא מצלי ואזיל עד חצות יהבי ליה שכר תפלה בזמנה מכאן ואילך שכר תפלה יהבי ליה שכר תפלה בזמנה לא יהבי ליה איבעיא להו טעה ולא התפלל מנחה מהו שיתפלל ערבית ב' את\"ל טעה ולא התפלל ערבית מתפלל שחרית ב' משום דחד יומא הוא דכתיב (בראשית א, ה) ויהי ערב ויהי בקר יום אחד אבל הכא תפלה במקום קרבן היא וכיון דעבר יומו בטל קרבנו או דילמא כיון דצלותא רחמי היא כל אימת דבעי מצלי ואזיל ת\"ש דאמר רב הונא בר יהודה א\"ר יצחק א\"ר יוחנן טעה ולא התפלל מנחה מתפלל ערבית ב' ואין בזה משום דעבר יומו בטל קרבנו מיתיבי (קהלת א, טו) מעות לא יוכל לתקון וחסרון לא יוכל להמנות מעות לא יוכל לתקון זה שבטל ק\"ש של ערבית וק\"ש של שחרית או תפלה של ערבית או תפלה של שחרית וחסרון לא יוכל להמנות זה שנמנו חביריו לדבר מצוה ולא נמנה עמהם א\"ר יצחק א\"ר יוחנן הכא במאי עסקינן שבטל במזיד אמר רב אשי דיקא נמי דקתני בטל ולא קתני טעה ש\"מ:",
  "rashi": [
   {
    "dh": "אקמטרא",
    "text": " — ארגז של ספרים ובמגילה (מגילה כו ב) קמטרי דספרי וכן תרגם יונתן ובגנזי ברומים (יחזקאל כ״ז:כ״ד) אלמין דזהירין מחתין בקמטרין וכן לאשר על המלתחה (מלכים ב י׳:כ״ב) לדעל קמטרא:"
   },
   {
    "dh": "ככלי בתוך כלי דמי",
    "text": " — דהא גלימא לאו כליין הוא:"
   },
   {
    "dh": "מחיצה עשרה",
    "text": " — ואם לאו לא ישמש:"
   },
   {
    "dh": "לדוכתיה",
    "text": " — במקום מטתו:"
   },
   {
    "dh": "לאו אדעתאי",
    "text": " — לא נתתי לבי:"
   },
   {
    "dh": "כנגד בית הכסא",
    "text": " — ברחוק ארבע אמות:"
   },
   {
    "dh": "דלית בה צואה",
    "text": " — שפינו אותה:"
   },
   {
    "dh": "בית המרחץ",
    "text": " — אסור להרהר בו:"
   },
   {
    "dh": "דפרסאי",
    "text": " — בחפירה היו ופיהם ברחוק מן הגומא והוא בשיפוע והרעי מתגלגל ונופל לגומא:"
   },
   {
    "dh": "מתני' זב שראה קרי",
    "text": " — אע\"פ שטמא טומאת שבעה משום זיבה ואין טבילה זו מטהרתו אפ\"ה צריך טבילה לדברי תורה כתקנת עזרא משום קרי וכן נדה אם באה להתפלל י\"ח:"
   },
   {
    "dh": "שפלטה שכבת זרע",
    "text": " — הרי היא כבעל קרי כדאשכחן בסיני שלשת ימים אל תגשו אל אשה (שמות י״ט:ט״ו) לפי ששכבת זרע מטמא בפליטתו כל שלשה ולאחר מכאן כבר הסריח בגופה ואין ראוי עוד להזריע להיות עוד ולד נוצר הימנה וה\"פ נדה שפלטה עתה התשמיש ששמשה אתמול קודם שראתה:"
   },
   {
    "dh": "ורבי יהודה פוטר",
    "text": " — קא סלקא דעתך השתא הואיל וטומאת זיבה קודמת והרי הוא טמא טומאה חמורה ואינו אוסרתו בדברי תורה כדאמרינן בפרקין הזבים והמצורעים מותרים תו לא אתיא טומאת קרי דקילא ואסרה ליה:"
   },
   {
    "dh": "גמ' לאו בר טבילה הוא",
    "text": " — לדברי תורה ואע\"פ שטומאתו חמורה ותו לא אתי קרי ומצריך ליה:"
   },
   {
    "dh": "הדרן עלך מי שמתו",
    "text": ""
   },
   {
    "dh": "תפלת השחר",
    "text": ""
   },
   {
    "dh": "עד הערב",
    "text": " — עד חשכה:"
   },
   {
    "dh": "עד פלג המנחה",
    "text": " — בגמרא מפרש לה:"
   },
   {
    "dh": "אין לה קבע",
    "text": " — כל הלילה זמנה ובגמרא מפרש מאי לשון אין לה קבע:"
   },
   {
    "dh": "גמ' מצותה",
    "text": " — של קריאת שמע:"
   },
   {
    "dh": "לותיקין",
    "text": " — המקדימין למצות ומחזרים לעשות דבר בזמנו ומצותו מקדימים לאחר הנץ החמה להתפלל וכי תנן במתני' למאחרים שלא יאחר יותר מחצות שמשם ואילך עבר הזמן:"
   },
   {
    "dh": "וכולי עלמא",
    "text": " — שאר המתפללין המאחרין עד חצות יכולין לאחר ותו לא:"
   },
   {
    "dh": "במנחה",
    "text": " — היינו אחר חצות:"
   },
   {
    "dh": "אם תימצי לומר",
    "text": " — כלומר אם תשיבני בשאלתי ממה שאמרנו טעה ולא התפלל ערבית וכו':"
   },
   {
    "dh": "וכיון דעבר יומו בטל קרבנו",
    "text": " — ואינו מקריבו ביום אחר אם זמנו קבוע כגון מוספים של כל יום ויום:"
   }
  ],
  "tosafot": [
   {
    "dh": "ספר תורה עושה לו מחיצה",
    "text": " — ודוקא ספר תורה וגם בחומשים יש להחמיר כמו בספר תורה אבל בשאר ספרים דיין בכסוי בעלמא:"
   },
   {
    "dh": "הדרן עלך מי שמתו",
    "text": ""
   },
   {
    "dh": "תפלת השחר עד חצות וכו' תפלת המנחה עד הערב",
    "text": " — וא\"ת אמאי לא קתני גבי תפלת המנחה כל היום כמו גבי תפלת המוספין וי\"ל דזמן מוספין הוא כל היום אפילו משחרית שהרי קרבנות יכול להקריב מיד אחר התמיד א\"כ גם תפלת מוספין יכול להתפלל מיד מן הבקר מה שאין כן במנחה אלא משש שעות ומחצה והכי נמי בפ\"ק דע\"ג (ד' ד:) לא ליצלי איניש צלותא דמוספין בתלת שעי קמייתא בריש שתא ביחיד כו' אלמא בשאר ימות השנה יכול להתפלל ולהכי מקדים תפלת המנחה לתפלת המוספין משום שהיא תדירה בכל יום אע\"פ שתפלת מוספין קודמת:"
   },
   {
    "dh": "טעה ולא התפלל ערבית מתפלל בשחרית שתים",
    "text": " — וא\"ת והאמר רב לקמן (ברכות ד' כז ב) תפלת ערבית רשות וקי\"ל כותיה באיסורי ועוד קשה דאמר לקמן (ברכות ד' ל ב) טעה ולא התפלל יעלה ויבוא בלילה אין מחזירים אותו משום דאין מקדשין את החדש בלילה ולמה ליה האי טעמא תיפוק ליה דתפלת ערבית רשות וי\"ל הא דאמרינן דתפלת ערבית רשות היינו לגבי מצוה אחרת והיא עוברת דאז אמרינן תדחה תפלת ערבית מפניה אבל לחנם אין לו לבטלה ומיהו אם איחר עד המנחה נראה דעבר זמנו בטל קרבנו כיון ששהה כל כך ולאחר ב' תפלות לא מצינו שתיקנו חכמים לחזור ולהתפלל אם שכח ואפילו תפלה אחת אם בטל במזיד לא יוכל לתקן ובסמוך קרי ליה מעוות לא יוכל לתקון:"
   },
   {
    "dh": "איבעיא להו טעה ולא התפלל תפלת מנחה כו'",
    "text": " — לא בעי אם טעה ולא התפלל תפלת מוסף דהא ודאי אינו מתפלל בערבית דהיאך יקרא את הקרבנות וכבר עבר זמן מוסף וגם לא תיקנו שבע ברכות של מוסף אלא משום ונשלמה פרים שפתינו ובזה ודאי עבר זמנו בטל קרבנו אבל שאר תפלות דרחמי נינהו ולואי שיתפלל אדם כל היום כולו ואין כאן עבר זמנו בתפלה אחרת:"
   }
  ],
  "translations": []
 },
 {
  "id": "26b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כו",
  "amud": "ב",
  "dafEn": "26b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "תנו רבנן טעה ולא התפלל מנחה בערב שבת מתפלל בליל שבת שתים טעה ולא התפלל מנחה בשבת מתפלל במוצאי שבת שתים של חול מבדיל בראשונה ואינו מבדיל בשניה ואם הבדיל בשניה ולא הבדיל בראשונה שניה עלתה לו ראשונה לא עלתה לו למימרא דכיון דלא אבדיל בקמייתא כמאן דלא צלי דמי ומהדרינן ליה ורמינהו טעה ולא הזכיר גבורות גשמים בתחיית המתים ושאלה בברכת השנים מחזירין אותו הבדלה בחונן הדעת אין מחזירין אותו מפני שיכול לאומרה על הכוס קשיא איתמר רבי יוסי ברבי חנינא אמר תפלות אבות תקנום רבי יהושע בן לוי אמר תפלות כנגד תמידין תקנום תניא כוותיה דר' יוסי ברבי חנינא ותניא כוותיה דרבי יהושע בן לוי תניא כוותיה דרבי יוסי בר' חנינא אברהם תקן תפלת שחרית שנא' (בראשית יט, כז) וישכם אברהם בבקר אל המקום אשר עמד שם ואין עמידה אלא תפלה שנאמר (תהלים קו, ל) ויעמד פינחס ויפלל יצחק תקן תפלת מנחה שנאמר (בראשית כד, סג) ויצא יצחק לשוח בשדה לפנות ערב ואין שיחה אלא תפלה שנאמר (תהלים קב, א) תפלה לעני כי יעטף ולפני ה' ישפוך שיחו יעקב תקן תפלת ערבית שנאמר (בראשית כח, יא) ויפגע במקום וילן שם ואין פגיעה אלא תפלה שנאמר (ירמיהו ז, טז) ואתה אל תתפלל בעד העם הזה ואל תשא בעדם רנה ותפלה ואל תפגע בי ותניא כוותיה דר' יהושע בן לוי מפני מה אמרו תפלת השחר עד חצות שהרי תמיד של שחר קרב והולך עד חצות ורבי יהודה אומר עד ארבע שעות שהרי תמיד של שחר קרב והולך עד ארבע שעות ומפני מה אמרו תפלת המנחה עד הערב שהרי תמיד של בין הערבים קרב והולך עד הערב רבי יהודה אומר עד פלג המנחה שהרי תמיד של בין הערבים קרב והולך עד פלג המנחה ומפני מה אמרו תפלת הערב אין לה קבע שהרי אברים ופדרים שלא נתעכלו מבערב קרבים והולכים כל הלילה ומפני מה אמרו של מוספין כל היום שהרי קרבן של מוספין קרב כל היום רבי יהודה אומר עד שבע שעות שהרי קרבן מוסף קרב והולך עד שבע שעות ואיזו היא מנחה גדולה משש שעות ומחצה ולמעלה ואיזו היא מנחה קטנה מתשע שעות ומחצה ולמעלה איבעיא להו רבי יהודה פלג מנחה קמא קאמר או פלג מנחה אחרונה קאמר תא שמע דתניא ר' יהודה אומר פלג המנחה אחרונה אמרו והיא י\"א שעות חסר רביע נימא תיהוי תיובתיה דר' יוסי בר' חנינא אמר לך ר' יוסי בר' חנינא לעולם אימא לך תפלות אבות תקנום ואסמכינהו רבנן אקרבנות דאי לא תימא הכי תפלת מוסף לר' יוסי בר' חנינא מאן תקנה אלא תפלות אבות תקנום ואסמכינהו רבנן אקרבנות: רבי יהודה אומר עד ארבע שעות: איבעיא להו עד ועד בכלל או דלמא עד ולא עד בכלל תא שמע ר' יהודה אומר עד פלג המנחה אי אמרת בשלמא עד ולא עד בכלל היינו דאיכא בין ר' יהודה לרבנן אלא אי אמרת עד ועד בכלל ר' יהודה",
  "rashi": [
   {
    "dh": "מבדיל בראשונה",
    "text": " — פעם ראשונה מתפלל בשביל תפלה של עכשיו לפיכך אומר בה הבדלה בחונן הדעת והשניה היא בשביל תשלומי תפלת שבת אינו מבדיל בה:"
   },
   {
    "dh": "שניה עלתה לו",
    "text": " — בשביל תפלת מוצאי שבת וראשונה לא עלתה לו שאינה כלום שאין לו להקדים תפלה שעבר זמנה לתפלה שזמנה עכשיו והשניה נמי לא עלתה לו לשל שבת הואיל והבדיל בה גילה דעתו שאינה של שבת והיא תחשב לשל ערבית:"
   },
   {
    "dh": "אבות תקנום",
    "text": " — כדקתני בברייתא לקמיה:"
   },
   {
    "dh": "כנגד תמידים תקנום",
    "text": " — אנשי כנסת הגדולה:"
   },
   {
    "dh": "רבי יהודה",
    "text": " — ס\"ל שאין תמיד של שחר קרב אלא עד ארבע שעות:"
   },
   {
    "dh": "אברים",
    "text": " — של עולות:"
   },
   {
    "dh": "ופדרים",
    "text": " — של שאר קרבנות שנזרק דמן קודם שקיעת החמה קרבין כל הלילה וכנגדן תקנו תפלת ערבית:"
   },
   {
    "dh": "מנחה גדולה",
    "text": " — אם בא להקדים תמיד של בין הערבים אינו יכול להקדימו קודם שש שעות ומחצה דבין הערבים כתיב ביה מכי ינטו צללי ערב משהחמה נוטה למערב דהיינו משש שעות ומחצה ולמעלה דאמר מר חצי שש וחצי שבע חמה עומדת בראש כל אדם באמצע הרקיע (פסחים ד' צד.):"
   },
   {
    "dh": "מנחה קטנה",
    "text": " — זמן תמיד של בין הערבים בכל יום מתשע שעות ומחצה ולמעלה כדתנן בתמיד נשחט (ד' נח.) נשחט בשמונה ומחצה וקרב בתשע ומחצה והתם מפרש טעמא:"
   },
   {
    "dh": "פלג מנחה אחרונה",
    "text": " — חלק את ב' שעות ומחצה הנותרים ביום ותמצא פלג אחרון של מנחה מי\"א שעות חסר רביע ולמעלה:"
   },
   {
    "dh": "דאי לא תימא הכי",
    "text": " — דמודה רבי יוסי ברבי חנינא דרבנן אסמכינהו אקרבנות:"
   },
   {
    "dh": "תפלת המוספין מאן תקנה",
    "text": " — אלא ע\"כ רבנן אסמכינהו אקרבנות וכי עיינו במוספין ולא מצאו תפלה כנגדה עמדו הם ותקנוה:"
   },
   {
    "dh": "עד ועד בכלל",
    "text": " — לרבי יהודה הוא דקא בעי דאילו לרבנן עד ולא עד בכלל:"
   }
  ],
  "tosafot": [
   {
    "dh": "טעה ולא התפלל מנחה בע\"ש וכו' טעה ולא התפלל מנחה בשבת מתפלל ערבית שתים",
    "text": " — דהיינו של מוצאי שבת ומבדיל בראשונה וכו'. כתב רבינו יהודה אם טעה ולא הזכיר ר\"ח במנחה לא יתפלל עוד בלילה דלמה יתפלל עוד הרי כבר התפלל כל תפלת המנחה מבעוד יום לבד ר\"ח שלא הזכיר א\"כ אין מרויח כלום אם יחזור ויתפלל במוצאי ר\"ח הרי לא יזכיר עוד תפלת ר\"ח וי\"ח כבר התפלל ולא דמי להא דאמר הכא טעה ולא התפלל מנחה בשבת דמתפלל ערבית בחול שתים פירוש של חול משום שלא התפלל כלל א\"כ ירויח תפלת י\"ח כשמתפלל במ\"ש אע\"פ שלא יזכיר של שבת וא\"ת והלא הוא מתפלל יותר ממה שהוא חייב להתפלל שלא היה לו להתפלל כי אם ז' ברכות והוא מתפלל י\"ח בכך אין לחוש שגם בשבת היה דין שיתפלל כל י\"ח רק שלא הצריכוהו מפני הטורח נמצא שמרויח כל תפלתו אבל כשטעה ולא הזכיר של ר\"ח כבר התפלל א\"כ לא ירויח כלום אם יתפלל במוצאי ר\"ח (דהא) [וה\"ה] נמי אם התפלל במנחה בשבת י\"ח שלמות ולא הזכיר של שבת נראה דלמ\"ש לא יתפלל שתים דכבר התפלל י\"ח ברכות ומיהו ברב אלפס לא משמע כן דאפי' היכא דאינו מרויח כלום מצריך להתפלל פעם אחרת וזה לשונו שכתב אהא דקאמר שמבדיל בראשונה ואינו מבדיל בשניה ואם לא הבדיל בראשונה והבדיל בשניה שניה עלתה לו ראשונה לא עלתה לו דאיבעי ליה לאקדומי תפלת שניה ברישא (דהכי) [דהיא] חובה וכיון דלא אבדיל ברישא ואבדיל בבתרייתא גלי דעתיה דהך בתרייתא היא חובה הלכך בעי למהדר ולצלויי זימנא אחריתי כדי להקדים חובת שעתיה ברישא ואי אבדיל בתרוייהו אע\"ג דלא מיבעי ליה למעבד הכי לא מחוייב לאהדורי ואי לא אבדיל אפילו בחדא מנהון לא מהדרינן ליה דתניא טעה ולא הזכיר הבדלה בחונן הדעת אין מחזירין אותו מפני שיכול לאומרה על הכוס עכ\"ל אלמא דמצריך להתפלל זימנא אחריתי אע\"ג שלא יחזור ויתפלל פעם שניה יותר מבראשונה. כך היה נראה לה\"ר משה מאלאוו\"ר מתוך לשון האלפסי:",
    "en": "If he erred and did not pray mincha on Friday etc.; He erred and did not pray mincha on shabbat he prays at arbit twice. This is to say, on Saturday night, and he says havdalah in the first, etc. Rabeinu Yehuda wrote that if he erred and did not mention Rosh Chodesh at mincha he should not pray an extra time in the evening, for what will this accomplish? He already prayed mincha, he just forgot to add [yaaleh ve'yavoh for] Rosh Chodesh. If so, he does not gain anything if he prays an extra time in the evening after Rosh Chodesh has ended, since he will not mention Rosh Chodesh [in the extra prayer], and he has already prayed Amida. And this is different than the case here, where one erred and did not pray mincha on shabbat [at all], where in the evening he prays an extra time using the Amida of a regular evening, since here he did not pray at all so at least he gains the extra amida when he prays after shabbat ends in the evening, even though he is not mentioning shabbat. And if you will ask, isn't he praying more than required since on shabbat there were only seven blessings and he will pray 18? There is no reason to worry about this, since even on shabbat it would be appropriate to pray all 18, but this was not required because of the extra effort it would require. We find, then, that he gains the full extra prayer. But when he erred and did not mention Rosh Chodesh, he has already prayed, so praying an additional time on Saturday evening will yield nothing. And similarly, if he prayed a regular weekday amida at mincha on shabbat, and did not mention shabbat, it would seem that he should not pray again Saturday evening since he already said the amida. However, Rav Alfas [the Rif] does not seem to maintain this position, and in this case even though he does not gain anything he requires an extra prayer. To quote him: \"With regard to the statement 'make havdalah in the first one and not in the second one, and if you did not say havdalah in the first one but did say havdalah in the second one, the second counts but the first does not count', since he needed to say the second one first; since he did not say havdalah in the first one but said havdalah in the second one, he has shown his intention that the second one should be his normal prayer. Therefore, he must pray again another time for his make-up prayer so that the obligatory prayer precedes the make-up. And if he said havdalah in both of them, even though he was not required to do so, he does not need to repeat. And if he did not say havdalah in either of them, we do not make him repeat, as we learn in a braita 'if on erred and did not say havdalah in He Who grants us wisdom, we do not make him repeat since he can say havdalah on the cup of wine'\". Therefore, we require him to pray again even though he will not gain anything additional the second time. This is what Rabbi Moshe Malavar concluded from the words of Rabbi Alfas."
   },
   {
    "dh": "קשיא",
    "text": " — תימה אמאי לא משני דמיירי קודם שהעשירו דאמרינן לקמן בפרק אין עומדין (ברכות דף לג.) העשירו קבעוה על הכוס וי\"ל דלא אשכחן ברייתא דנשנית בין שתי תקנות:"
   },
   {
    "dh": "יצחק תקן תפלת המנחה",
    "text": " — ואע\"ג דאמרינן (יומא כח:) צלותא דאברהם מכי שחרי כתלי וי\"ל היינו אחר שתקנה יצחק:"
   },
   {
    "dh": "ואין שיחה אלא תפלה שנאמר תפלה לעני כי יעטוף",
    "text": " — תימה דבפ\"ק דע\"ז (ד' ז: וע\"ש) מוכיח דשיחה [זו] תפלה מויצא יצחק לשוח בשדה י\"ל דכיוצא בו מצינו במגילה (פ\"ק ד' יג.) ויהי אומן את הדסה ואין הדסים אלא צדיקים דכתיב והוא עומד בין ההדסים ובפרק חלק (סנהדרין ד' צג.) הוא אומר להיפך:"
   },
   {
    "dh": "יעקב תקן תפלת ערבית",
    "text": " — תימה דאמר בפרק גיד הנשה (חולין ד' צא:) וילך חרנה כי מטי לחרן בעי למיהדר אמר אפשר שעברתי במקום וכו' אלמא דהתם מוכח דהתפלל ערבית ביום מאחר שהתפלל כבר והוה דעתיה למהדר וקשה למתניתין דפרק קמא דקאמר שאינו זמן תפלה עד צאת הכוכבים ולפי מה שפירשנו דקי\"ל כר' יהודה דאמר עד פלג המנחה ניחא ויפה מנהג שלנו דאדרבה טוב להתפלל מבעוד יום קצת:"
   },
   {
    "dh": "עד פלג המנחה",
    "text": " — תימה מנא ליה הא בשלמא עד תשע שעות ומחצה דעד אותו זמן הוי תפלת המנחה ניחא דהיינו מנחה קטנה אבל הא מנא ליה וי\"ל דר' יהודה ס\"ל דתפלה כנגד קטרת תקנוה דכתיב תכון תפלתי קטרת לפניך (תהילים קמ״א:ב׳):"
   },
   {
    "dh": "איבעיא להו עד ועד בכלל וכו'",
    "text": " — תימה דאמר בנדה פרק הרואה כתם (נדה ד' נח:) כל שיעורי חכמים להחמיר חוץ מכגריס של כתמים אלמא עד ולא עד בכלל וי\"ל אי אמרי' עד ועד בכלל יש בו גם חומרא שיתפלל ולא אמרי' עבר זמנו בטל קרבנו ואפי' במזיד:"
   }
  ],
  "translations": []
 },
 {
  "id": "27a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כז",
  "amud": "א",
  "dafEn": "27a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "היינו רבנן אלא מאי עד ולא עד בכלל אימא סיפא ושל מוספין כל היום ר' יהודה אומר עד שבע שעות ותניא היו לפניו שתי תפלות אחת של מוסף ואחת של מנחה מתפלל של מנחה ואחר כך של מוסף שזו תדירה וזו אינה תדירה רבי יהודה אומר מתפלל של מוסף ואחר כך של מנחה שזו עוברת וזו אינה עוברת אי אמרת בשלמא עד ועד בכלל היינו דמשכחת להו שתי תפלות בהדי הדדי אלא אי אמרת עד ולא עד בכלל היכי משכחת להו שתי תפלות בהדי הדדי כיון דאתיא לה של מנחה אזלא לה של מוספין אלא מאי עד ועד בכלל קשיא רישא מאי איכא בין רבי יהודה לרבנן מי סברת דהאי פלג מנחה פלג אחרונה קאמר פלג ראשונה קאמר והכי קאמר אימת נפיק פלג ראשונה ועייל פלג אחרונה מכי נפקי י\"א שעות חסר רביע אמר רב נחמן אף אנן נמי תנינא רבי יהודה בן בבא העיד חמשה דברים שממאנין את הקטנה ושמשיאין את האשה על פי עד אחד ועל תרנגול שנסקל בירושלים על שהרג את הנפש ועל יין בן ארבעים יום שנתנסך על גבי המזבח ועל תמיד של שחר שקרב בארבע שעות ש\"מ עד ועד בכלל ש\"מ אמר רב כהנא הלכה כרבי יהודה הואיל ותנן בבחירתא כוותיה: ועל תמיד של שחר שקרב בארבע שעות: מאן תנא להא דתנן (שמות טז, כא) וחם השמש ונמס בארבע שעות אתה אומר בארבע שעות או אינו אלא בשש שעות כשהוא אומר (בראשית יח, א) כחום היום הרי שש שעות אמור הא מה אני מקיים וחם השמש ונמס בארבע שעות מני לא רבי יהודה ולא רבנן אי רבי יהודה עד ארבע שעות נמי צפרא הוא אי רבנן עד חצות נמי צפרא הוא אי בעית אימא רבי יהודה אי בעית אימא רבנן אי בעית אימא רבנן אמר קרא בבקר בבקר חלקהו לשני בקרים ואי בעית אימא רבי יהודה האי בקר יתירא להקדים לו שעה אחת דכולא עלמא מיהא וחם השמש ונמס בארבע שעות מאי משמע אמר רבי אחא בר יעקב אמר קרא וחם השמש ונמס איזו היא שעה שהשמש חם והצל צונן הוי אומר בארבע שעות: תפלת המנחה עד הערב וכו': אמר ליה רב חסדא לרב יצחק התם אמר רב כהנא הלכה כרבי יהודה הואיל ותנן בבחירתא כוותיה הכא מאי אישתיק ולא אמר ליה ולא מידי אמר רב חסדא נחזי אנן מדרב מצלי של שבת בערב שבת מבעוד יום ש\"מ הלכה כרבי יהודה אדרבה מדרב הונא ורבנן לא הוו מצלו עד אורתא שמע מינה אין הלכה כרבי יהודה השתא דלא אתמר הלכתא לא כמר ולא כמר דעבד כמר עבד ודעבד כמר עבד רב איקלע לבי גניבא וצלי של שבת בערב שבת והוה מצלי רבי ירמיה בר אבא לאחוריה דרב וסיים רב ולא פסקיה לצלותיה דרבי ירמיה שמע מינה תלת שמע מינה מתפלל אדם של שבת בערב שבת ושמע מינה מתפלל תלמיד אחורי רבו ושמע מינה אסור לעבור כנגד המתפללין מסייע ליה לרבי יהושע בן לוי דאמר רבי יהושע בן לוי אסור לעבור כנגד המתפללין איני והא רבי אמי ורבי אסי חלפי רבי אמי ורבי אסי חוץ לארבע אמות הוא דחלפי ורבי ירמיה היכי עביד הכי והא אמר רב יהודה אמר רב לעולם אל יתפלל אדם",
  "rashi": [
   {
    "dh": "היינו רבנן",
    "text": " — דקס\"ד רבי יהודה פלג אחרון של מנחה אחרונה קאמר:",
    "en": "A minor girl who was married off by her mother after her father's death, because from the Torah, her marriage is nothing, because a minor girl is not capable of legal decisions, and her mother does not have from the Torah the power to marry her off, but her father does, as it says \"I have given my daughter to this man\" (Dev. 22). And even so the Rabbis decreed marriage for her which requires refusal, so that he will marry her and she will not go out to immorality. Therefore if she refuses after a time and says \"I cannot have him\", she goes out and is permitted to any man, and does not require a divorce from him. And R' Yehuda ben Bava testified that there are times when it is a Mitzvah for Bais Din to teach her to refuse him, such as two brothers married to two orphaned sisters - one an adult and her marriage is from the Torah, and one a minor whose marriage is only Rabbinic. And the husband of the adult one dies without children, and she falls to her brother for Yibum. And it is found she (the adult sister) is connected to him from the Torah, and this connection forbids his wife (the minor sister) to him, because she is the sister of a woman connected to him (for Yibum), which is like the sister of his wife. And Rabbi Eliezer says in Maseches Yevamos (109a): \"We teach such a minor girl to refuse her husband, and to uproot her marriage all the way back, and to make all her intimacy (with her husband) like immorality - to permit her husband to do Yibum with with her sister,\" as we learned in a Mishnah: \"They may marry (a relative of) a raped or seduced girl\" (Yevamos 97a). And Rabbi Yehuda ben Bava testified on the day Eduyos was taught that the Halacha is like Rabbi Eliezer."
   },
   {
    "dh": "מתפלל של מנחה וכו'",
    "text": " — רבנן לטעמייהו דאמרי תפלת המוספים כל היום כמו של מנחה הלכך תדיר קודם ור' יהודה לטעמיה דאמר מוספין עד שבע שעות ותו לא והויא לה מצוה עוברת ושל מנחה יש לה עוד שהות עד פלג המנחה:",
    "en": "And he did not interrupt the prayer of - That is to say, he did not make a break between Rabbi Yirmiyah and the wall in order to pass before him and sit in his place, rather he stood at his post."
   },
   {
    "dh": "שתי תפלות בהדי הדדי",
    "text": " — חצי האחרון של שעה שביעית הוא זמן לשתיהן דהא אמר מנחה גדולה משש שעות ומחצה ולמעלה:"
   },
   {
    "dh": "היכי משכחת לה",
    "text": " — הרי עבר זמן המוספים משעברה שעה ששית:"
   },
   {
    "dh": "פלג ראשונה",
    "text": " — של מנחה אחרונה ועד בכלל ואף על גב דתנא יהב סימנא לפלג אחרונה דקתני איזו פלג מנחה מי\"א שעות חסר רביע ה\"ק כו':"
   },
   {
    "dh": "אף אנן נמי תנינא",
    "text": " — לרבי יהודה עד ועד בכלל:"
   },
   {
    "dh": "שממאנין את הקטנ'",
    "text": " — קטנה שהשיאתה אמה לאחר מיתת אביה דמדאורייתא אין קדושיה כלום שהרי קטנה אינה בת דעת ואת אמה לא זכתה תורה להיות לה כח לקדשה אלא לאב שנאמר את בתי נתתי לאיש הזה (דברי' כב) ומיהו רבנן תקינו לה קדושין להצריכה מיאון כדי שישאוה ולא תצא לזנות לפיכך אם מיאנה לאחר זמן ואמרה אי אפשי בו יוצאת ומותרת לכל אדם ואינה צריכה הימנו גט והעיד ר' יהודה בן בבא שפעמים שמצוה על בית דין ללמדה שתמאן בו כגון שני אחים נשואין שתי אחיות יתומות אחת גדולה וקדושיה קדושי תורה ואחת קטנה שאין קדושיה אלא מדרבנן ומת בעלה של גדולה בלא בנים ונפלה לפני אחיו ליבום ונמצאת זקוקה לו מן התורה וזיקה זו אוסרת את אשתו עליו משום אחות זקוקה שהיא כאחות אשתו וא\"ר אליעזר במסכת יבמות (דף קט.) מלמדין קטנה זו שתמאן בבעלה ותעקור קדושיה למפרע ותעשה כל בעילותיה כאלו הן של זנות כדי להתיר את בעלה ליבם את אחותה דתנן נושאין על האנוסה ועל המפותה (יבמות דף צז.) והעיד רבי יהודה בן בבא ביום שנשנית עדיות שהלכה כר\"א:"
   },
   {
    "dh": "ע\"פ עד אחד",
    "text": " — שאמר לה מת בעליך במדינת הים (יבמות דף קכב.):"
   },
   {
    "dh": "שנסקל תרנגול",
    "text": " — שניקר קדקדו של תינוק במקום שהמוח רופף וניקב את מוחו וסקלוהו כמשפט שור שנגח את האדם דכתיב (שמות כא) השור יסקל וגמרינן בג\"ש שור שור משבת לעשות כל בהמה חיה ועוף כשור (ב\"ק ד' נד:):"
   },
   {
    "dh": "ועל יין בן ארבעים יום",
    "text": " — שיצא מכלל יין מגתו ובא לכלל יין גמור וקרינן ביה נסך שכר (במדבר כח):"
   },
   {
    "dh": "בארבע שעות",
    "text": " — ותו לא אלמא כרבי יהודה ס\"ל וקאמר בארבע שעות אלמא לרבי יהודה עד ועד בכלל:"
   },
   {
    "dh": "הלכה כרבי יהודה",
    "text": " — דמתני' דאין תמיד של שחר קרב לאחר ארבע שעות וה\"ה לתפלה:"
   },
   {
    "dh": "בבחירתא",
    "text": " — עדיות קרי בחירתא שהלכה כאותן עדיות:"
   },
   {
    "dh": "כשהוא אומר כחום היום הרי שש שעות אמור",
    "text": " — כלומר מצינו במקום אחר ששינה הכתוב בלשונו ואמר והוא יושב פתח האוהל כחום היום ולא אמר כחום השמש אלא היום משמע כל המקומות חמין בין חמה בין צל הוא מדבר בשעה ששית:"
   },
   {
    "dh": "הא מה אני מקיים וחם השמש",
    "text": " — דמשמע השמש חם והצל צונן:"
   },
   {
    "dh": "בארבע שעות",
    "text": " — דאילו קודם ארבע שעות אף השמש צונן:"
   },
   {
    "dh": "מני",
    "text": " — הא דמשמע דארבע לאו בקר הוא דהא כתיב וילקטו אותו בבקר בבקר וחם השמש ונמס הנותר ומדמוקי ונמס בארבע שעות מכלל דלאו זמן לקיטה הוא ולאו בקר מיקרי:"
   },
   {
    "dh": "ארבע שעות נמי צפרא הוא",
    "text": " — דהא אמרת עד ועד בכלל וגבי תמיד כתיב תעשה בבקר:"
   },
   {
    "dh": "לשני בקרים",
    "text": " — שלא היו לוקטים אלא בשלש שעות ראשונות שהוא בקר ראשון:"
   },
   {
    "dh": "התם אמר רב כהנא",
    "text": " — גבי תפלת השחר:"
   },
   {
    "dh": "של שבת בערב שבת",
    "text": " — שקבל עליו שבת מבעוד יום:"
   },
   {
    "dh": "שמע מינה",
    "text": " — כרבי יהודה ס\"ל דאמר מפלג המנחה אזיל ליה זמן תפלת המנחה ועייל ליה זמן תפלת ערבית:"
   },
   {
    "dh": "ולא פסקיה לצלותיה",
    "text": " — כלומר לא הפסיק בין רבי ירמיה ולכותל לעבור לפניו ולישב במקומו אלא עמד על עמדו:"
   }
  ],
  "tosafot": [
   {
    "dh": "תא שמע ושל מוספין כל היום ורבי יהודה אומר עד שבע שעות ותניא היו לפניו וכו'",
    "text": " — ולא גרסי' אימא סיפא ושל וכו' שאינו במשנה שדברי רבי יהודה שאמר עד שבע שעות אינו במשנה ויש ספרים שהגיהו אותו במשנה ומיהו בכל הספרים הישנים אינו. וא\"ת ורבי למה לא הזכיר אותו במשנה וי\"ל משום דלא ס\"ל כוותיה בהא דאמר עד שבע שעות אבל בהא דקאמר עד ארבע שעות ס\"ל כוותיה משום דתנן בבחירתא כוותיה ובההיא דפלג המנחה נמי משום דאמרינן לקמן דעבד כמר עבד ודעבד כמר עבד דהכי פירושא דעבד כר' יהודה (עבד) דאמר מפלג המנחה ליליא הוא עבד ומשום הכי מנחה לא אבל אין לפרש הכל בתפלת המנחה ועבד כרבי יהודה שהתפלל מנחה קודם פלג דפשיטא דרבנן מודו בשיעורו דרבי יהודה:"
   },
   {
    "dh": "דרב צלי של שבת בע\"ש",
    "text": " — תימה דהא אמרינן בפרק במה מדליקין (שבת ד' כג:) ובלבד שלא יקדים ושלא יאחר. ויש לומר דהתם בשאינו מקבל עליו שבת מיד אבל הכא מיירי שמקבל עליו שבת מיד הלכך לא הויא הקדמה וטעמא משום דס\"ל כרבי יהודה וכן הנך דלקמן שהתפללו של מ\"ש בשבת היינו משום דסבירא להו כרבי יהודה לענין תפלת הערב שהיא שעה ורביע קודם הלילה אעפ\"כ [אין] אסור לעשות מלאכה במ\"ש מיד לאחר פלג המנחה וכן לענין תוספת שבת (וט' באב) וי\"ה דקי\"ל שהוא מן התורה אם כן לא צריך שיעור גדול כל כך:"
   }
  ],
  "translations": []
 },
 {
  "id": "27b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כז",
  "amud": "ב",
  "dafEn": "27b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "לא כנגד רבו ולא אחורי רבו ותניא רבי אליעזר אומר המתפלל אחורי רבו והנותן שלום לרבו והמחזיר שלום לרבו והחולק על ישיבתו של רבו והאומר דבר שלא שמע מפי רבו גורם לשכינה שתסתלק מישראל שאני רבי ירמיה בר אבא דתלמיד חבר הוה והיינו דקאמר ליה רבי ירמיה בר אבא לרב מי בדלת אמר ליה אין בדילנא ולא אמר מי בדיל מר ומי בדיל והאמר רבי אבין פעם אחת התפלל רבי של שבת בערב שבת ונכנס למרחץ ויצא ושנה לן פרקין ועדיין לא חשכה אמר רבא ההוא דנכנס להזיע וקודם גזירה הוה איני והא אביי שרא ליה לרב דימי בר ליואי לכברויי סלי ההוא טעותא הואי וטעותא מי הדרא והא אמר אבידן פעם אחת נתקשרו שמים בעבים כסבורים העם לומר חשכה הוא ונכנסו לבית הכנסת והתפללו של מוצאי שבת בשבת ונתפזרו העבים וזרחה החמה ובאו ושאלו את רבי ואמר הואיל והתפללו התפללו שאני צבור דלא מטרחינן להו: א\"ר חייא בר אבין רב צלי של שבת בערב שבת רבי יאשיה מצלי של מוצאי שבת בשבת רב צלי של שבת בערב שבת אומר קדושה על הכוס או אינו אומר קדושה על הכוס ת\"ש דאמר רב נחמן אמר שמואל מתפלל אדם של שבת בערב שבת ואומר קדושה על הכוס והלכתא כוותיה רבי יאשיה מצלי של מוצאי שבת בשבת אומר הבדלה על הכוס או אינו אומר הבדלה על הכוס ת\"ש דאמר רב יהודה אמר שמואל מתפלל אדם של מוצאי שבת בשבת ואומר הבדלה על הכוס אמר ר' זירא אמר רבי אסי אמר ר' אלעזר א\"ר חנינא אמר רב בצד עמוד זה התפלל ר' ישמעאל בר' יוסי של שבת בערב שבת כי אתא עולא אמר בצד תמרה הוה ולא בצד עמוד הוה ולא ר' ישמעאל ברבי יוסי הוה אלא ר' אלעזר בר' יוסי הוה ולא של שבת בערב שבת הוה אלא של מוצאי שבת בשבת הוה: תפלת הערב אין לה קבע: מאי אין לה קבע אילימא דאי בעי מצלי כוליה ליליא ליתני תפלת הערב כל הלילה אלא מאי אין לה קבע כמאן דאמר תפלת ערבית רשות דאמר רב יהודה אמר שמואל תפלת ערבית רבן גמליאל אומר חובה ר' יהושע אומר רשות אמר אביי הלכה כדברי האומר חובה ורבא אמר הלכה כדברי האומר רשות. ת\"ר מעשה בתלמיד אחד שבא לפני ר' יהושע א\"ל תפלת ערבית רשות או חובה אמר ליה רשות בא לפני רבן גמליאל א\"ל תפלת ערבית רשות או חובה א\"ל חובה א\"ל והלא ר' יהושע אמר לי רשות א\"ל המתן עד שיכנסו בעלי תריסין לבית המדרש כשנכנסו בעלי תריסין עמד השואל ושאל תפלת ערבית רשות או חובה א\"ל רבן גמליאל חובה אמר להם רבן גמליאל לחכמים כלום יש אדם שחולק בדבר זה אמר ליה ר' יהושע לאו א\"ל והלא משמך אמרו לי רשות אמר ליה יהושע עמוד על רגליך ויעידו בך עמד רבי יהושע על רגליו ואמר אלמלא אני חי והוא מת יכול החי להכחיש את המת ועכשיו שאני חי והוא חי היאך יכול החי להכחיש את החי היה רבן גמליאל יושב ודורש ור' יהושע עומד על רגליו עד שרננו כל העם ואמרו לחוצפית התורגמן עמוד ועמד אמרי עד כמה נצעריה וניזיל בר\"ה אשתקד צעריה בבכורות במעשה דר' צדוק צעריה הכא נמי צעריה תא ונעבריה מאן נוקים ליה נוקמיה לרבי יהושע בעל מעשה הוא נוקמיה לר' עקיבא דילמא עניש ליה דלית ליה זכות אבות אלא נוקמיה לר' אלעזר בן עזריה דהוא חכם והוא עשיר והוא עשירי לעזרא הוא חכם דאי מקשי ליה מפרק ליה והוא עשיר דאי אית ליה לפלוחי לבי קיסר אף הוא אזל ופלח והוא עשירי לעזרא דאית ליה זכות אבות ולא מצי עניש ליה אתו ואמרו ליה ניחא ליה למר דליהוי ריש מתיבתא אמר להו איזיל ואימליך באינשי ביתי אזל ואמליך בדביתהו אמרה ליה",
  "rashi": [
   {
    "dh": "כנגד רבו",
    "text": " — אצל רבו ומראה כאילו הם שוים:",
    "en": "Masters of the shields: Scholars who defeat each other in [questions of] law."
   },
   {
    "dh": "אחורי רבו",
    "text": " — נמי יוהרא הוא:",
    "en": "How can the living contradict the living: Perforce I need to admit that I said optional to him"
   },
   {
    "dh": "שלום לרבו",
    "text": " — כשאר כל אדם שלום עליך ולא אמר לו שלום עליך רבי:",
    "en": "The disseminator: Since he was standing in front of Rabban Gamliel and transmitting the lecture of Rabban Gamliel to the public."
   },
   {
    "dh": "והיינו דקאמר ליה",
    "text": " — אותו היום שהתפלל רב של שבת בערב שבת אמר ליה רבי ירמיה מי בדלת מן המלאכה הואיל וקבלת עליך שבת בתפלתך:",
    "en": "Stop (lit., stand): Be quiet."
   },
   {
    "dh": "ולא אמר ליה מי בדיל מר",
    "text": " — שמע מינה תלמיד חבר הוי ליה:",
    "en": "On Rosh HaShanah: In Tractate Rosh Hashanah (25a). As he said to him, \"I decree against you that you shall come to me with your staff and with your money on the day on which Yom Kippur occurs according to your calculation.\""
   },
   {
    "dh": "לבית המרחץ",
    "text": " — סלקא דעתך לאחר שגזרו על הזיעה ועל הרחיצה בשבת כדאמרי' במסכת שבת בפרק כירה שהסיקוה (ד' מ.) אלמא אע\"ג דצלי לא בדיל מאיסורי שבת:",
    "en": "Eshtakad: Last year."
   },
   {
    "dh": "אמר רבא להזיע",
    "text": " — נכנס להזיע מחמת חום בית המרחץ ולא נתן עליו מים:",
    "en": "Regarding the firstborn: In Tractate Bekhorot (36a)."
   },
   {
    "dh": "וקודם גזרה",
    "text": " — עד שלא גזרו על הזיעה ובכל דוכתא דאמרינן כדאמר רבא להזיע כו' מהכא אמרינן:",
    "en": "With the incident of Rabbi Tzadok: It is in Bekhorot. Rabbi Tzadok had a first born; and Rabban Gamliel said to Rabbi Yehoshua, \"Stand on your feet, etc.,\" like here."
   },
   {
    "dh": "לכברויי סלי",
    "text": " — לעשן אותן בגפרית לאחר שהתפלל של שבת בערב שבת:",
    "en": "Come and let us remove him: Come, and we shall remove him from the office of Nassi."
   },
   {
    "dh": "טעותא הואי",
    "text": " — לא קבל עליו תוספת שבת משעת תפלה מדעת אלא יום המעונן היה וכסבור חשכה ואחר כך זרחה חמה:",
    "en": "He was party to the incident: So there would be additional pain to Rabban Gamliel."
   },
   {
    "dh": "הואיל והתפללו התפללו",
    "text": " — ולא הצריכם להתפלל משתחשך אלמא תפלה היא ואע\"פ שלא הותרו במלאכה התם הוא דלא לעבור על ד\"ת אבל לענין תוספת אע\"ג דבטעות הוה תוספת הוא ע\"י תפלה הואיל ואמר תפלה קבלה היא:",
    "en": "He lacks the merit of ancestors: And perhaps Rabban Gamliel would punish him."
   },
   {
    "dh": "בעלי תריסין",
    "text": " — חכמים המנצחים זה את זה בהלכה:"
   },
   {
    "dh": "היאך יכול החי להכחיש את החי",
    "text": " — על כרחי אני צריך להודות שאמרתי לו רשות:"
   },
   {
    "dh": "התורגמן",
    "text": " — שהיה עומד לפני רבן גמליאל ומשמיע לרבים את הדרשה מפי רבן גמליאל:"
   },
   {
    "dh": "עמוד",
    "text": " — שתוק:"
   },
   {
    "dh": "בראש השנה",
    "text": " — במסכת ראש השנה (דף כה.) שאמר לו גוזר אני עליך שתבא אצלי במקלך ובמעותיך ביום הכפורים שחל להיות בחשבונך:"
   },
   {
    "dh": "אשתקד",
    "text": " — שנה שעברה:"
   },
   {
    "dh": "בבכורות",
    "text": " — במסכת בכורות (דף לו.):"
   },
   {
    "dh": "במעשה דרבי צדוק",
    "text": " — בבכורות הוא ר' צדוק הוה ליה בוכרא ואמר ליה רבן גמליאל לר' יהושע עמוד על רגליך כו' כי הכא:"
   },
   {
    "dh": "תא ונעבריה",
    "text": " — בואו ונעביר אותו מן הנשיאות:"
   },
   {
    "dh": "בעל מעשה הוא",
    "text": " — והוה ליה לרבן גמליאל צערא טפי:"
   },
   {
    "dh": "לית ליה זכות אבות",
    "text": " — ודילמא עניש ליה רבן גמליאל:"
   }
  ],
  "tosafot": [
   {
    "dh": "ולא אחורי רבו",
    "text": " — פירש רש\"י משום יוהרא ויש מפרש שנראה כמשתחוה לרבו:"
   },
   {
    "dh": "והנותן שלום לרבו והמחזיר שלום",
    "text": " — פירוש כשאר בני אדם שאינו אומר שלום עליך רבי והיינו דאמרינן (ב\"ק דף עג:) כדי שאילת תלמיד לרב אי נמי ההוא לכתחלה קאמר ובתלמיד חבר דשרי ככל הני דלקמן:"
   },
   {
    "dh": "הואיל והתפללו וכו'",
    "text": " — הכא נמי נימא לענין חומרא ואמאי שרי ליה ובקונטרס פי'בפנים אחר:"
   },
   {
    "dh": "שאני צבור",
    "text": " — אע\"ג דלא מטא זמן אין איסורה איסור בעשיית מלאכה אף על גב דטעותא הוא:"
   },
   {
    "dh": "צלי של מוצאי שבת וכו'",
    "text": " — יש לומר דהכא מיירי שיש לו צורך מצוה לעשות במוצאי שבת כגון ללכת למול תינוק ולא יהיה לו יין להבדלה אם לא יקדים דודאי צריך להוסיף מחול על הקדש דאורייתא אבל בחנם לא ופשיטא שלא היו ממהרים להבדיל ולהתפלל של מוצאי שבת בשבת דגם במלאכה אסור עם חשיכה:"
   },
   {
    "dh": "הלכה כדברי האומר רשות",
    "text": " — לאו דוקא רשות אלא כדפרישית לעיל (ברכות ד' כו.) ולכך נקרא רשות לבטלה עבור מצוה אחרת העוברת:"
   },
   {
    "dh": "והלכתא כוותיה דרב",
    "text": " — ונראה דלכך תקנו פסוקים וקדיש בין גאולה לתפלה דרשות היא [ע' תוס' ד: ד״ה אמר ר״י]:"
   }
  ],
  "translations": []
 },
 {
  "id": "28a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כח",
  "amud": "א",
  "dafEn": "28a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "דלמא מעברין לך אמר לה [לשתמש אינש] יומא חדא בכסא דמוקרא ולמחר ליתבר אמרה ליה לית לך חיורתא ההוא יומא בר תמני סרי שני הוה אתרחיש ליה ניסא ואהדרו ליה תמני סרי דרי חיורתא היינו דקאמר ר' אלעזר בן עזריה הרי אני כבן שבעים שנה ולא בן שבעים שנה תנא אותו היום סלקוהו לשומר הפתח ונתנה להם רשות לתלמידים ליכנס שהיה ר\"ג מכריז ואומר כל תלמיד שאין תוכו כברו לא יכנס לבית המדרש ההוא יומא אתוספו כמה ספסלי א\"ר יוחנן פליגי בה אבא יוסף בן דוסתאי ורבנן חד אמר אתוספו ארבע מאה ספסלי וחד אמר שבע מאה ספסלי הוה קא חלשא דעתיה דר\"ג אמר דלמא ח\"ו מנעתי תורה מישראל אחזו ליה בחלמיה חצבי חיורי דמליין קטמא ולא היא ההיא ליתובי דעתיה הוא דאחזו ליה תנא עדיות בו ביום נשנית וכל היכא דאמרינן בו ביום ההוא יומא הוה ולא היתה הלכה שהיתה תלויה בבית המדרש שלא פירשוה ואף ר\"ג לא מנע עצמו מבית המדרש אפילו שעה אחת דתנן בו ביום בא יהודה גר עמוני לפניהם בבית המדרש אמר להם מה אני לבא בקהל א\"ל ר\"ג אסור אתה לבא בקהל א\"ל ר' יהושע מותר אתה לבא בקהל א\"ל ר\"ג והלא כבר נאמר (דברים כג, ד) לא יבא עמוני ומואבי בקהל ה' א\"ל ר' יהושע וכי עמון ומואב במקומן הן יושבין כבר עלה סנחריב מלך אשור ובלבל את כל האומות שנאמר (ישעיהו י, יג) ואסיר גבולות עמים ועתידותיהם שוסתי ואוריד כאביר יושבים וכל דפריש מרובא פריש אמר לו ר\"ג והלא כבר נאמר (ירמיהו מט, ו) ואחרי כן אשיב את שבות בני עמון נאם ה' וכבר שבו אמר לו ר' יהושע והלא כבר נאמר (עמוס ט, יד) ושבתי את שבות עמי ישראל ועדיין לא שבו מיד התירוהו לבא בקהל אר\"ג הואיל והכי הוה איזיל ואפייסיה לר' יהושע כי מטא לביתיה חזינהו לאשיתא דביתיה דמשחרן א\"ל מכותלי ביתך אתה ניכר שפחמי אתה א\"ל אוי לו לדור שאתה פרנסו שאי אתה יודע בצערן של ת\"ח במה הם מתפרנסים ובמה הם נזונים אמר לו נעניתי לך מחול לי לא אשגח ביה עשה בשביל כבוד אבא פייס אמרו מאן ניזיל ולימא להו לרבנן אמר להו ההוא כובס אנא אזילנא שלח להו ר' יהושע לבי מדרשא מאן דלביש מדא ילבש מדא ומאן דלא לביש מדא יימר ליה למאן דלביש מדא שלח מדך ואנא אלבשיה אמר להו ר\"ע לרבנן טרוקו גלי דלא ליתו עבדי דר\"ג ולצערו לרבנן א\"ר יהושע מוטב דאיקום ואיזיל אנא לגבייהו אתא טרף אבבא א\"ל מזה בן מזה יזה ושאינו לא מזה ולא בן מזה יאמר למזה בן מזה מימיך מי מערה ואפרך אפר מקלה א\"ל ר\"ע רבי יהושע נתפייסת כלום עשינו אלא בשביל כבודך למחר אני ואתה נשכים לפתחו אמרי היכי נעביד נעבריה גמירי מעלין בקדש ואין מורידין נדרוש מר חדא שבתא ומר חדא שבתא אתי לקנאויי אלא לדרוש ר\"ג תלתא שבתי וראב\"ע חדא שבתא והיינו דאמר מר שבת של מי היתה של ראב\"ע היתה ואותו תלמיד ר' שמעון בן יוחאי הוה: ושל מוספין כל היום: א\"ר יוחנן ונקרא פושע ת\"ר היו לפניו שתי תפלות אחת של מנחה ואחת של מוסף מתפלל של מנחה ואח\"כ מתפלל של מוסף שזו תדירה וזו אינה תדירה ר' יהודה אומר מתפלל של מוסף ואח\"כ מתפלל של מנחה שזו מצוה עוברת וזו מצוה שאינה עוברת א\"ר יוחנן הלכה מתפלל של מנחה ואח\"כ מתפלל של מוסף ר' זירא כי הוה חליש מגירסיה הוה אזיל ויתיב אפתחא דבי ר' נתן בר טובי אמר כי חלפי רבנן אז איקום מקמייהו ואקבל אגרא נפק אתא ר' נתן בר טובי א\"ל מאן אמר הלכה בי מדרשא א\"ל הכי א\"ר יוחנן אין הלכה כר' יהודה דאמר מתפלל אדם של מוסף ואח\"כ מתפלל של מנחה א\"ל רבי יוחנן אמרה אמר ליה אין תנא מיניה ארבעין זמנין א\"ל חדא היא לך או חדת היא לך א\"ל חדת היא לי משום דמספקא לי בר' יהושע בן לוי: אריב\"ל כל המתפלל תפלה של מוספין לאחר שבע שעות לר' יהודה עליו הכתוב אומר (צפניה ג, יח) נוגי ממועד אספתי ממך היו מאי משמע דהאי נוגי לישנא דתברא הוא כדמתרגם רב יוסף תברא אתי על שנאיהון דבית ישראל על דאחרו זמני מועדיא דבירושלים א\"ר אלעזר כל המתפלל תפלה של שחרית לאחר ארבע שעות לר' יהודה עליו הכתוב אומר נוגי ממועד אספתי ממך היו מאי משמע דהאי נוגי לישנא דצערא הוא דכתיב (תהלים קיט, כח) דלפה נפשי מתוגה רב נחמן בר יצחק אמר מהכא (איכה א, ד) בתולותיה נוגות והיא מר לה",
  "rashi": [
   {
    "dh": "מעברין לך",
    "text": " — יורידוך מן הנשיאות בשביל אחר:",
    "en": "They will remove you: They will take you down from the office of Nassi for the sake of another."
   },
   {
    "dh": "ה\"ג דלמא מעברין לך אמר לה יומא חדא בכסא דמוקרא ולמחר ליתבר ול\"ג מעלין בקדש",
    "text": "",
    "en": "This is what we teach (the correct version): Perhaps they will remove you. He said to her, \"[Let one use] an expensive goblet one day and let it break tomorrow.\" And we do not teach [the version that includes], \"We elevate in sanctity.\""
   },
   {
    "dh": "כסא דמוקרא",
    "text": " — כוס זכוכית יקרה שקורין לה בלשון ישמעאל ערקי\"א ואומרים בני אדם במשל הדיוט יום אחד ישתמש בו בעליו ויתכבד בו ואם ישבר ישבר:",
    "en": "An expensive goblet: An expensive glass cup called, arkia, in the language of Yishmael (Arabic). And people say in a popular parable, one day its owner can use it and be glorified by it; and [then] if it breaks, it breaks."
   },
   {
    "dh": "לית לך חיורתא",
    "text": " — אין לך שערות לבנות של זקנה ונאה לדרשן להיות זקן:",
    "en": "You have no white hair: You don't have white hair from old age, whereas it is becoming for a lecturer to be old."
   },
   {
    "dh": "י\"ח דרי חיורתא",
    "text": " — י\"ח שורות של זקנה:",
    "en": "Eighteen white rows: Eighteen rows of old age."
   },
   {
    "dh": "קא חלשא דעתיה דר\"ג",
    "text": " — כשראה שנתוספו היום תלמידים רבים והיה דואג שלא יענש במה שמנעם בימיו מלבא:",
    "en": "Rabban Gamliel was disheartened when he saw many students added that day; and he was worried, lest he be punished for having prevented them from coming in his days."
   },
   {
    "dh": "דמליין קטמא",
    "text": " — כלומר אף אלו אינם ראויים:",
    "en": "Filled with ashes: Meaning to say, these too are not worthy."
   },
   {
    "dh": "תלויה",
    "text": " — בספק שלא פירשוה מתוך שרבו התלמידים רב החדוד והפלפול:",
    "en": "Pending in doubt, that they did not explain. From the increase of the students, the sharpness and analysis [of their study] grew."
   },
   {
    "dh": "לאשיתא דביתיה דמשחרן",
    "text": " — כותלי ביתו של ר' יהושע שהיו שחורות:",
    "en": "The walls of his house were black: The walls of Rabbi Yehoshua's house were black."
   },
   {
    "dh": "שפחמי אתה",
    "text": " — עושה פחמים וי\"א נפח:",
    "en": "That you are a pechami: One who makes coals (pechamim); and some say a blacksmith."
   },
   {
    "dh": "נעניתי לך",
    "text": " — דברתי למולך יותר מן הראוי:",
    "en": "I insulted you: I spoke before you more than was appropriate."
   },
   {
    "dh": "דלביש מדא",
    "text": " — הרגיל ללבוש המעיל ילבש כלומר הרגיל בנשיאות יהיה נשיא:",
    "en": "The one who wears the uniform: The one who is accustomed to wearing the uniform shall wear the uniform; meaning to say, the one who is accustomed to the office of Nassi shall be Nassi."
   },
   {
    "dh": "מזה בן מזה",
    "text": " — כהן בן כהן יזה את מי חטאת:",
    "en": "One who sprinkles, son of one who sprinkles: A priest who is a son of a priest shall sprinkle purification waters."
   },
   {
    "dh": "אפר מקלה",
    "text": " — אפר הקלוי בתנורים ובכירות כלומר אפר סתם:",
    "en": "Burnt ashes: Ashes burnt in ovens and in stoves; meaning to say, regular ashes."
   },
   {
    "dh": "שבת של מי היתה",
    "text": " — במסכת חגיגה:",
    "en": "Whose week was it: In Tractate Chagigah."
   },
   {
    "dh": "ואותו תלמיד",
    "text": " — ששאל תפלת ערבית רשות או חובה רשב\"י הוא:",
    "en": "That student, who asked, \"Is the evening prayer optional or mandatory,\" was Rabbi Shimon bar Yochai."
   },
   {
    "dh": "ונקרא פושע",
    "text": " — המאחר כ\"כ:"
   },
   {
    "dh": "מתפלל של מנחה",
    "text": " — מאחר שהגיע זמנה כדי להקדימה בתחלת זמנה שלא יקרא פושע גם עליה:"
   },
   {
    "dh": "ואח\"כ של מוספין",
    "text": " — הואיל ואיחר זמנה אינו עובר דהא אמרי רבנן ושל מוספים כל היום:"
   },
   {
    "dh": "שזו מצוה עוברת",
    "text": " — ר' יהודה לטעמיה דאמר עד שבע שעות ותו לא:"
   },
   {
    "dh": "כי חלפי רבנן",
    "text": " — תלמידים היוצאים מבית ר' נתן:"
   },
   {
    "dh": "מאן אמר הלכה בי מדרשא",
    "text": " — מי מבני הישיבה אמר בבית המדרש שהלכה כר' יהודה:"
   },
   {
    "dh": "חדא היא לך או חדת היא לך",
    "text": " — אחת היא לך שלא למדת דבר משמו של ר' יוחנן אלא זו בלבד לכך חביבה היא לך או חדשה היא לך שהיית סבור שאחד מן האחרים אמרה:"
   },
   {
    "dh": "ה\"ג א\"ל חדת היא לי דמספקא לי בר' יהושע בן לוי",
    "text": " — סבור הייתי שרבי יהושע בן לוי אמרה:"
   },
   {
    "dh": "אמר ריב\"ל גרסי' ול\"ג דאמר",
    "text": ""
   },
   {
    "dh": "ממועד",
    "text": " — מחמת שהעבירו מועדי התפלות וחגים יהיו נוגים ואסופים וכלים:"
   }
  ],
  "tosafot": [
   {
    "dh": "ושל מוספין כל היום",
    "text": " — הקשה הרב רבינו שמשון ז\"ל דאמרי' בפרק תמיד נשחט (פסחים דף נח.) מוספין בשש בזיכין בשבע וכ\"ת ה\"מ למצוה אבל דיעבד כל יומא נמי זמניה הוא הרי בתמורה (פ\"ב ד' יד) משמע שהמוספין היו נשחטין עם התמיד ונקטרין עמו. ותירץ דהתם מיירי בשבת:"
   },
   {
    "dh": "הלכה מתפלל של מנחה ואח\"כ מתפלל של מוסף",
    "text": " — מכאן יש ליזהר ביוה\"כ להתפלל תפלת שחרית קודם שש שעות ומחצה דהיינו קודם שיגיע שעת המנחה דאל\"כ היו צריכין להתפלל תפלת המנחה קודם והר\"י אומר דאינו צריך דהא דקאמר שיתפלל תפלת המנחה קודם היינו כשיש לו לעשות צרכיו שלא יוכל להתפלל תפלת המנחה בזמנה וצריך להתפלל שניהם מיד כגון שהיה לו לילך לסעודה גדולה כמו לנשואין ומתיירא שמא ימשוך בסעודתו או שישתכר אבל אם היה לו שהות להתפלל אחר תפלת מוסף תפלת המנחה בזמנה אין לו להקדים תפלת המנחה אלא יתפלל כסדר מוסף ואח\"כ מנחה:"
   },
   {
    "dh": "כדמתרגם רב יוסף על דאחרו זמני מועדיא",
    "text": " — ואי משתעי ברגלים אין שייך לומר לשון איחור שהרי אין להם תשלומין אלא ע\"כ בתפלה משתעי קרא:"
   }
  ],
  "translations": []
 },
 {
  "id": "28b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כח",
  "amud": "ב",
  "dafEn": "28b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "רב אויא חלש ולא אתא לפרקא דרב יוסף למחר כי אתא בעא אביי לאנוחי דעתיה דרב יוסף א\"ל מ\"ט לא אתא מר לפרקא א\"ל דהוה חליש לבאי ולא מצינא א\"ל אמאי לא טעמת מידי ואתית א\"ל לא סבר לה מר להא דרב הונא דאמר רב הונא אסור לו לאדם שיטעום כלום קודם שיתפלל תפלת המוספין א\"ל איבעי ליה למר לצלויי צלותא דמוספין ביחיד ולטעום מידי ולמיתי א\"ל ולא סבר לה מר להא דא\"ר יוחנן אסור לו לאדם שיקדים תפלתו לתפלת הצבור א\"ל לאו אתמר עלה א\"ר אבא בצבור שנו ולית הלכתא לא כרב הונא ולא כריב\"ל כרב הונא הא דאמרן כריב\"ל דאריב\"ל כיון שהגיע זמן תפלת המנחה אסור לו לאדם שיטעום כלום קודם שיתפלל תפלת המנחה:  ר' נחוניא בן הקנה היה מתפלל בכניסתו לבית המדרש וביציאתו תפלה קצרה אמרו לו מה מקום לתפלה זו אמר להם בכניסתי אני מתפלל שלא יארע דבר תקלה על ידי וביציאתי אני נותן הודאה על חלקי: גמ׳ ת\"ר בכניסתו מהו אומר יהי רצון מלפניך ה' אלהי שלא יארע דבר תקלה על ידי ולא אכשל בדבר הלכה וישמחו בי חברי ולא אומר על טמא טהור ולא על טהור טמא ולא יכשלו חברי בדבר הלכה ואשמח בהם ביציאתו מהו אומר מודה אני לפניך ה' אלהי ששמת חלקי מיושבי בית המדרש ולא שמת חלקי מיושבי קרנות שאני משכים והם משכימים אני משכים לדברי תורה והם משכימים לדברים בטלים אני עמל והם עמלים אני עמל ומקבל שכר והם עמלים ואינם מקבלים שכר אני רץ והם רצים אני רץ לחיי העולם הבא והם רצים לבאר שחת: ת\"ר כשחלה ר' אליעזר נכנסו תלמידיו לבקרו אמרו לו רבינו למדנו אורחות חיים ונזכה בהן לחיי העולם הבא אמר להם הזהרו בכבוד חבריכם ומנעו בניכם מן ההגיון והושיבום בין ברכי תלמידי חכמים וכשאתם מתפללים דעו לפני מי אתם עומדים ובשביל כך תזכו לחיי העולם הבא וכשחלה רבי יוחנן בן זכאי נכנסו תלמידיו לבקרו כיון שראה אותם התחיל לבכות אמרו לו תלמידיו נר ישראל עמוד הימיני פטיש החזק מפני מה אתה בוכה אמר להם אילו לפני מלך בשר ודם היו מוליכין אותי שהיום כאן ומחר בקבר שאם כועס עלי אין כעסו כעס עולם ואם אוסרני אין איסורו איסור עולם ואם ממיתני אין מיתתו מיתת עולם ואני יכול לפייסו בדברים ולשחדו בממון אעפ\"כ הייתי בוכה ועכשיו שמוליכים אותי לפני ממ\"ה הקב\"ה שהוא חי וקיים לעולם ולעולמי עולמים שאם כועס עלי כעסו כעס עולם ואם אוסרני איסורו איסור עולם ואם ממיתני מיתתו מיתת עולם ואיני יכול לפייסו בדברים ולא לשחדו בממון ולא עוד אלא שיש לפני שני דרכים אחת של גן עדן ואחת של גיהנם ואיני יודע באיזו מוליכים אותי ולא אבכה אמרו לו רבינו ברכנו אמר להם יהי רצון שתהא מורא שמים עליכם כמורא בשר ודם אמרו לו תלמידיו עד כאן אמר להם ולואי תדעו כשאדם עובר עבירה אומר שלא יראני אדם. בשעת פטירתו אמר להם פנו כלים מפני הטומאה והכינו כסא לחזקיהו מלך יהודה שבא:  רבן גמליאל אומר בכל יום ויום מתפלל אדם שמנה עשרה רבי יהושע אומר מעין י\"ח ר\"ע אומר אם שגורה תפלתו בפיו מתפלל י\"ח ואם לאו מעין י\"ח ר\"א אומר העושה תפלתו קבע אין תפלתו תחנונים ר' יהושע אומר ההולך במקום סכנה מתפלל תפלה קצרה ואומר הושע ה' את עמך את שארית ישראל בכל פרשת העבור יהיו צרכיהם לפניך ברוך אתה ה' שומע תפלה היה רוכב על החמור ירד ויתפלל ואם אינו יכול לירד יחזיר את פניו ואם אינו יכול להחזיר את פניו יכוין את לבו כנגד בית קדשי הקדשים היה מהלך בספינה או באסדא יכוין את לבו כנגד בית קדשי הקדשים: גמ׳ הני י\"ח כנגד מי א\"ר הלל בריה דר' שמואל בר נחמני כנגד י\"ח אזכרות שאמר דוד (תהלים כט, א) בהבו לה' בני אלים רב יוסף אמר כנגד י\"ח אזכרות שבקריאת שמע א\"ר תנחום אמר רבי יהושע בן לוי כנגד שמונה עשרה חוליות שבשדרה. ואמר ר' תנחום אמר רבי יהושע בן לוי המתפלל צריך שיכרע עד שיתפקקו כל חוליות שבשדרה עולא אמר עד כדי שיראה איסר כנגד לבו רבי חנינא אמר כיון שנענע ראשו שוב אינו צריך אמר רבא והוא דמצער נפשיה ומחזי כמאן דכרע הני תמני סרי תשסרי הוויין אמר רבי לוי ברכת הצדוקים ביבנה תקנוה כנגד מי תקנוה א\"ר לוי לרבי הלל בריה דרבי שמואל בר נחמני כנגד (תהלים כט, ג) אל הכבוד הרעים לרב יוסף כנגד אחד שבקריאת שמע לר' תנחום א\"ר יהושע בן לוי כנגד חוליא קטנה שבשדרה: ת\"ר שמעון הפקולי הסדיר י\"ח ברכות לפני רבן גמליאל על הסדר ביבנה אמר להם ר\"ג לחכמים כלום יש אדם שיודע לתקן ברכת הצדוקים עמד שמואל הקטן ותקנה לשנה אחרת שכחה",
  "rashi": [
   {
    "dh": "לא על לפרקא דרב יוסף",
    "text": " — שהיה ראש הישיבה בפומבדיתא והיה דורש בשבת קודם תפלת המוספין ולאחר הדרשה היו הולכים לבית הכנסת ומתפללים תפלת המוספין:"
   },
   {
    "dh": "בצבור שנו",
    "text": " — אם הוא בבהכ\"נ עם הצבור לא יקדים להתפלל:"
   },
   {
    "dh": "מתני' מה מקום",
    "text": " — כלומר מה טיבה:"
   },
   {
    "dh": "ולא אכשל",
    "text": " — וישמחו חברי על כשלוני הרי רעות שתים שיבאו על ידי שאגרום להם שיענשו:"
   },
   {
    "dh": "מיושבי קרנות",
    "text": " — חנוונים או עמי הארץ שעוסקים בדבר שיחה:"
   },
   {
    "dh": "מההגיון",
    "text": " — לא תרגילום במקרא יותר מדאי משום דמשכא. לשון אחר משיחת ילדים:"
   },
   {
    "dh": "דעו לפני מי וכו'",
    "text": " — כדי שתתפללו ביראה ובכוונה:"
   },
   {
    "dh": "עמוד הימיני",
    "text": " — שני עמודים העמיד שלמה באולם שם הימני יכין ושם השמאלי בועז (מלכים א ז׳:ט״ו) הימיני לעולם חשוב:"
   },
   {
    "dh": "פטיש",
    "text": " — המפוצץ פי\"ק בלע\"ז:"
   },
   {
    "dh": "אוסרני",
    "text": " — חובש אותי:"
   },
   {
    "dh": "מיתת עולם",
    "text": " — לעוה\"ב:"
   },
   {
    "dh": "הייתי בוכה",
    "text": " — מאימת משפטו אם לדין מוליכין אותי לפניו:"
   },
   {
    "dh": "עד כאן",
    "text": " — בתמיה כלומר ולא יותר ממורא בשר ודם:"
   },
   {
    "dh": "ולואי",
    "text": " — שיהא כמורא בשר ודם שאם כן תחדלו מעבירות הרבה:"
   },
   {
    "dh": "עבירה",
    "text": " — בסתר ממורא הבריות ויודע שהכל הוא גלוי להקב\"ה ואינו מניח בכך:"
   },
   {
    "dh": "מפני הטומאה",
    "text": " — טומאת אהל המת בכל הבית:"
   },
   {
    "dh": "לחזקיהו שבא",
    "text": " — אלי ללוותי:"
   },
   {
    "dh": "מתני' מעין שמנה עשרה",
    "text": " — בגמרא מפרש:"
   },
   {
    "dh": "הושע ה' וכו'",
    "text": " — זו תפלה קצרה:"
   },
   {
    "dh": "בכל פרשת העבור כו'",
    "text": " — מפרש בגמרא:"
   },
   {
    "dh": "אם אינו יכול לירד",
    "text": " — שאין לו מי שיאחז את חמורו:"
   },
   {
    "dh": "יחזיר את פניו",
    "text": " — לצד ירושלים:"
   },
   {
    "dh": "באסדא",
    "text": " — כמו ותשם בסד רגלי (איוב י״ג:כ״ז) בית הסהר שקורין ציפ\"ש בלע\"ז. לשון אחר עצים הקשורים זה עם זה הרבה יחד ובלשון מקרא קורא אותם רפסודות (ד\"ה ב) ובלע\"ז רדיי\"ל ובלשון אשכנז ולו\"ס ומשיטן בנהר להוליכן ממקום למקום ויכולין להלך עליהן כמו בספינה:"
   },
   {
    "dh": "גמ' הבו לה' בני אלים",
    "text": " — שהוא רמז לאבות וגבורות וקדושת השם כדאמרינן בראש השנה (דף לב.) מנין שאומרים אבות ת\"ל הבו לה' בני אלים כו':"
   },
   {
    "dh": "שיתפקקו",
    "text": " — שיראו הפקקים הם הקשרים כמו ששנינו (ב\"ב פ:) בקנים ובגפנים מן הפקק שלמעלה והיא הקשר שחלל הקנה פקוק וסתום שם:"
   },
   {
    "dh": "איסר",
    "text": " — שני קמטים אחד מלמטה ואחד מלמעלה וכאיסר רוחב בשר באמצע:"
   },
   {
    "dh": "דמצער נפשיה",
    "text": " — שהוא ניכר שחפץ לכרוע אלא שהוא מצטער:"
   },
   {
    "dh": "ביבנה תקנוה",
    "text": " — לאחר זמן מרובה:"
   },
   {
    "dh": "הפקולי",
    "text": " — מוכר פקולי צמר גפן שקורין קיטו\"ן:"
   }
  ],
  "tosafot": [
   {
    "dh": "כיון שהגיע זמן תפלת המנחה אסור לטעום כלום וכו'",
    "text": " — ואית ליה לרבי יהושע מפסיקין ואפילו מן האכילה ולא היא:"
   }
  ],
  "translations": []
 },
 {
  "id": "29a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כט",
  "amud": "א",
  "dafEn": "29a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "והשקיף בה שתים ושלש שעות ולא העלוהו אמאי לא העלוהו והאמר רב יהודה אמר רב טעה בכל הברכות כלן אין מעלין אותו בברכת הצדוקים מעלין אותו חיישינן שמא מין הוא שאני שמואל הקטן דאיהו תקנה וניחוש דלמא הדר ביה אמר אביי גמירי טבא לא הוי בישא ולא והכתיב (יחזקאל יח, כד) ובשוב צדיק מצדקתו ועשה עול ההוא רשע מעיקרו אבל צדיק מעיקרו לא ולא והא תנן אל תאמין בעצמך עד יום מותך שהרי יוחנן כ\"ג שמש בכהונה גדולה שמנים שנה ולבסוף נעשה צדוקי אמר אביי הוא ינאי הוא יוחנן רבא אמר ינאי לחוד ויוחנן לחוד ינאי רשע מעיקרו ויוחנן צדיק מעיקרו הניחא לאביי אלא לרבא קשיא אמר לך רבא צדיק מעיקרו נמי דלמא הדר ביה אי הכי אמאי לא אסקוהו שאני שמואל הקטן דאתחיל בה דאמר רב יהודה אמר רב ואיתימא רבי יהושע בן לוי לא שנו אלא שלא התחיל בה אבל התחיל בה גומרה: הני שבע דשבתא כנגד מי א\"ר חלפתא בן שאול כנגד שבעה קולות שאמר דוד על המים הני תשע דר\"ה כנגד מי א\"ר יצחק דמן קרטיגנין כנגד תשעה אזכרות שאמרה חנה בתפלתה דאמר מר בראש השנה נפקדה שרה רחל וחנה הני עשרים וארבע דתעניתא כנגד מי א\"ר חלבו כנגד כ\"ד רננות שאמר שלמה בשעה שהכניס ארון לבית קדשי הקדשים אי הכי כל יומא נמי נמרינהו אימת אמרינהו שלמה ביומא דרחמי אנן נמי ביומא דרחמי אמרי להו: רבי יהושע אומר מעין שמנה עשרה: מאי מעין שמנה עשרה רב אמר מעין כל ברכה וברכה ושמואל אמר הביננו ה' אלהינו לדעת דרכיך ומול את לבבנו ליראתך ותסלח לנו להיות גאולים ורחקנו ממכאובינו ודשננו בנאות ארצך ונפוצותינו מארבע תקבץ והתועים על דעתך ישפטו ועל הרשעים תניף ידיך וישמחו צדיקים בבנין עירך ובתקון היכלך ובצמיחת קרן לדוד עבדך ובעריכת נר לבן ישי משיחך טרם נקרא אתה תענה ברוך אתה ה' שומע תפלה לייט עלה אביי אמאן דמצלי הביננו אמר רב נחמן אמר שמואל כל השנה כולה מתפלל אדם הביננו חוץ ממוצאי שבת וממוצאי ימים טובים מפני שצריך לומר הבדלה בחונן הדעת מתקיף לה רבה בר שמואל ונימרה ברכה רביעית בפני עצמה מי לא תנן ר\"ע אומר אומרה ברכה רביעית בפני עצמה ר' אליעזר אומר בהודאה אטו כל השנה כולה מי עבדינן כר' עקיבא דהשתא נמי נעביד כל השנה כולה מאי טעמא לא עבדינן כר\"ע תמני סרי תקון תשסרי לא תקון הכא נמי שבע תקון תמני לא תקון מתקיף לה מר זוטרא ונכללה מכלל הביננו ה' אלהינו המבדיל בין קדש לחול קשיא: אמר רב ביבי בר אביי כל השנה כולה מתפלל אדם הביננו חוץ מימות הגשמים מפני שצריך לומר שאלה בברכת השנים מתקיף לה מר זוטרא ונכללה מכלל ודשננו בנאות ארצך ותן טל ומטר אתי לאטרודי אי הכי הבדלה בחונן הדעת נמי אתי לאטרודי אמרי התם כיון דאתיא בתחלת צלותא לא מטריד הכא כיון דאתיא באמצע צלותא מטריד מתקיף לה רב אשי ונימרה בשומע תפלה דא\"ר תנחום אמר רב אסי טעה ולא הזכיר גבורות גשמים בתחיית המתים מחזירין אותו שאלה בברכת השנים אין מחזירין אותו מפני שיכול לאומרה בשומע תפלה והבדלה בחונן הדעת אין מחזירין אותו מפני שיכול לאומרה על הכוס טעה שאני: גופא א\"ר תנחום אמר רב אסי טעה ולא הזכיר גבורות גשמים בתחיית המתים מחזירין אותו שאלה בברכת השנים אין מחזירין אותו מפני שיכול לאומרה בשומע תפלה והבדלה בחונן הדעת אין מחזירין אותו מפני שיכול לאומרה על הכוס מיתיבי טעה ולא הזכיר גבורות גשמים בתחיית המתים מחזירין אותו שאלה בברכת השנים מחזירין אותו והבדלה בחונן הדעת אין מחזירין אותו מפני שיכול לאומרה על הכוס ל\"ק הא ביחיד הא בצבור בצבור מ\"ט לא משום דשמעה משליח צבור אי הכי האי מפני שיכול לאומרה בשומע תפלה מפני ששומע משליח צבור מיבעי ליה אלא אידי ואידי ביחיד ול\"ק הא דאדכר קודם שומע תפלה",
  "rashi": [
   {
    "dh": "והשקיף",
    "text": " — חשב לזכור אותה לשון סוכה כדמתרגמינן וישקף ואסתכי (בראשית יט):"
   },
   {
    "dh": "רשע מעיקרו",
    "text": " — ושב מרשעתו פעמים שחוזר ונעשה רשע:"
   },
   {
    "dh": "הוא ינאי",
    "text": " — ששנינו בקידושין (פ\"ג דף סו.) שהרג חכמי ישראל:"
   },
   {
    "dh": "ינאי רשע מעיקרו",
    "text": " — ונעשה צדיק וחזר לרשעתו:"
   },
   {
    "dh": "דאתחיל בה",
    "text": " — התחיל לאומרה וטעה באמצעיתה:"
   },
   {
    "dh": "לא שנו",
    "text": " — הא דאמר רב יהודה מעלין אותו:"
   },
   {
    "dh": "שבעה קולות",
    "text": " — במזמור קול ה' על המים (תהילים כ״ט:ג׳):"
   },
   {
    "dh": "שאמרה חנה",
    "text": " — בפרשת עלץ לבי (שמואל א ב):"
   },
   {
    "dh": "כ\"ד רננות",
    "text": " — בפרשת ויעמוד שלמה (מלכים א ח׳:כ״ב) רנה תפלה תחנה כלהון כ\"ד איכא:"
   },
   {
    "dh": "ביומא דרחמי",
    "text": " — שהוצרך לבקש רחמים שדבקו שערים זה בזה ולא היו מניחין להכניס ארון לבית קדשי הקדשים כדאמרי' במועד קטן (דף ט.):"
   },
   {
    "dh": "מעין כל ברכה",
    "text": " — אומר בקוצר ומברך על כל אחת ואחת:"
   },
   {
    "dh": "הביננו",
    "text": " — ואינו מברך אלא שומע תפלה בכל הברכות שבין שלש ראשונות לשלש אחרונות הביננו כנגד אתה חונן ומול את לבבנו כנגד השיבנו לסלוח לנו כנגד סלח לנו להיות גאולים כנגד גאולה וכן כולם:"
   },
   {
    "dh": "בנאות ארצך",
    "text": " — לשון נוה כמו בנאות דשא ירביצני (תהילים כ״ג:ב׳) והוא כנגד ברכת השנים:"
   },
   {
    "dh": "והתועים על דעתך",
    "text": " — העוברים על דבריך:"
   },
   {
    "dh": "ישפטו",
    "text": " — כנגד צדקה ומשפט. לשון אחר והתועים במשפט על דעתך ישפטו השיבם ללמדם לשפוט כדבריך וכן עיקר נראה לי וכן בה\"ג:"
   },
   {
    "dh": "לייט עלה אביי",
    "text": " — לפי שמדלג הברכות וכוללן בברכה אחת:"
   },
   {
    "dh": "כל השנה מי עבדינן כר' עקיבא",
    "text": " — כלומר כשאנו מתפללין י\"ח שלמות מי עבדינן כר' עקיבא לומר ברכה רביעית בפני עצמה דהשתא כשמתפללין הביננו נעביד כותיה:"
   },
   {
    "dh": "שבע תקון",
    "text": " — שלש ראשונות ושלש אחרונות והביננו:"
   },
   {
    "dh": "ונכללה",
    "text": " — להבדלה:"
   },
   {
    "dh": "מכלל",
    "text": " — בתוך הביננו כדרך שהוא כוללה בחונן הדעת ויאמר הביננו ה' אלהינו המבדיל בין קדש לחול לדעת דרכיך:"
   },
   {
    "dh": "לאטרודי",
    "text": " — לטעות:"
   },
   {
    "dh": "בתחלת",
    "text": " — התפלה יכול אדם לכוין דעתו יותר מן האמצע:"
   },
   {
    "dh": "גבורות גשמים",
    "text": " — הזכרה בעלמא היא לפיכך מחזירין אותו שאינה תפלה שיכול לאומרה בשומע תפלה:"
   },
   {
    "dh": "ביחיד",
    "text": " — מחזירין אותו:"
   },
   {
    "dh": "בצבור",
    "text": " — יחיד המתפלל עם הצבור:"
   },
   {
    "dh": "דאדכר קודם ש\"ת",
    "text": " — אין מחזירין אותו שיכול לאומרה בשומע תפלה:"
   }
  ],
  "tosafot": [
   {
    "dh": "לייט עלה אביי אמאן דמצלי הביננו",
    "text": " — והכי קי\"ל ויש ספרים דמסיק ה\"מ במתא אבל בדרך שרי כדמשמע במכילתין גבי רבי יוסי וכו':"
   },
   {
    "dh": "ונכללה בהביננו",
    "text": " — והא דאמרינן בפ\"ק דנדה (דף ח:) כל השנה כולה מתפלל אדם י\"ח חוץ ממוצאי יה\"כ מפני טורח צבור מפני התענית וי\"א שמתפללים י\"ח שלימות מפני שצ\"ל הבדלה בחונן הדעת ותימה אמאי לא פריך ונכללה בהביננו וי\"ל דלא דמי דהתם כל השנה כולה מתפלל י\"ח ואין לנו להקשות ונכללה מכלל כדי לשנות המנהג של כל השנה אבל הכא שכל השנה מתפלל הביננו פריך שפיר למה לי לשנות המנהג בשביל אתה חוננתנו ונכללה בהביננו:"
   },
   {
    "dh": "מפני שיכול לאומרה בשו\"ת",
    "text": " — כדאמר [לקמן (ברכות לא.)] (עו\"ג דף ח) שואל אדם צרכיו בשו\"ת ודוקא צרכיו כגון שיש לו חולה בתוך ביתו או שצריך שדהו מים דהוא מעין תפלה וכן שאלה אבל הזכרה והבדלה ושאר שבחים אסור שאינה מעין שו\"ת ונראה שכל האומר ברוך אתה ה' שו\"ת אחר שסיים דברי תחנונים מיושב מגונה כדאמרי' (מגילה דף יח.) מכאן ואילך אסור לספר בשבחו של מקום כלומר להוסיף ברכות על אלו ואפילו אם בא להתפלל שמנה עשרה עוד פעם אחרת אסור שנראה כמוסיף על הברכות והא דאמר לעיל (ברכות דף כא.) ולואי שיתפלל אדם כל היום היינו דוקא ספק התפלל אבל ודאי אוקמינן לעיל שפוסק אפי' באמצע ברכה כשמואל בפרק מי שמתו (שה) ומה ששליח צבור שונה בהן היינו להוציא רבים ידי חובתן ומה שמתפלל בלחש היינו כדי להסדיר תפלתו כדמוקמינן בפרק בתרא דר\"ה (דף לד:):"
   }
  ],
  "translations": []
 },
 {
  "id": "29b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "כט",
  "amud": "ב",
  "dafEn": "29b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "הא דאדכר בתר שומע תפלה: אמר רבי תנחום אמר רב אסי אמר ר' יהושע בן לוי טעה ולא הזכיר של ר\"ח בעבודה חוזר לעבודה נזכר בהודאה חוזר לעבודה בשים שלום חוזר לעבודה ואם סיים חוזר לראש אמר רב פפא בריה דרב אחא בר אדא הא דאמרן סיים חוזר לראש לא אמרן אלא שעקר רגליו אבל לא עקר רגליו חוזר לעבודה א\"ל מנא לך הא א\"ל מאבא מרי שמיע לי ואבא מרי מרב. אמר רב נחמן בר יצחק הא דאמרן עקר רגליו חוזר לראש לא אמרן אלא שאינו רגיל לומר תחנונים אחר תפלתו אבל רגיל לומר תחנונים אחר תפלתו חוזר לעבודה איכא דאמרי אמר רב נחמן בר יצחק הא דאמרן כי לא עקר רגליו חוזר לעבודה לא אמרן אלא שרגיל לומר תחנונים אחר תפלתו אבל אם אינו רגיל לומר תחנונים אחר תפלתו חוזר לראש: ר' אליעזר אומר העושה תפלתו קבע וכו': מאי קבע א\"ר יעקב בר אידי אמר רבי אושעיא כל שתפלתו דומה עליו כמשוי ורבנן אמרי כל מי שאינו אומרה בלשון תחנונים רבה ורב יוסף דאמרי תרוייהו כל שאינו יכול לחדש בה דבר א\"ר זירא אנא יכילנא לחדושי בה מילתא ומסתפינא דלמא מטרידנא אביי בר אבין ור' חנינא בר אבין דאמרי תרוייהו כל שאין מתפלל עם דמדומי חמה דא\"ר חייא בר אבא א\"ר יוחנן מצוה להתפלל עם דמדומי חמה וא\"ר זירא מאי קראה (תהלים עב, ה) ייראוך עם שמש ולפני ירח דור דורים לייטי עלה במערבא אמאן דמצלי עם דמדומי חמה מאי טעמא דלמא מיטרפא ליה שעתא: רבי יהושע אומר המהלך במקום סכנה מתפלל תפלה קצרה וכו' בכל פרשת העבור: מאי פרשת העבור אמר רב חסדא אמר מר עוקבא אפי' בשעה שאתה מתמלא עליהם עברה כאשה עוברה יהיו כל צרכיהם לפניך איכא דאמרי אמר רב חסדא אמר מר עוקבא אפילו בשעה שהם עוברים על דברי תורה יהיו כל צרכיהם לפניך ת\"ר המהלך במקום גדודי חיה ולסטים מתפלל תפלה קצרה ואיזה היא תפלה קצרה ר' אליעזר אומר עשה רצונך בשמים ממעל ותן נחת רוח ליראיך מתחת והטוב בעיניך עשה בא\"י שומע תפלה ר' יהושע אומר שמע שועת עמך ישראל ועשה מהרה בקשתם בא\"י שומע תפלה רבי אלעזר ברבי צדוק אומר שמע צעקת עמך ישראל ועשה מהרה בקשתם בא\"י שומע תפלה אחרים אומרים צרכי עמך ישראל מרובין ודעתם קצרה יהי רצון מלפניך ה' אלהינו שתתן לכל אחד ואחד כדי פרנסתו ולכל גויה וגויה די מחסורה ברוך אתה ה' שומע תפלה אמר רב הונא הלכה כאחרים אמר ליה אליהו לרב יהודה אחוה דרב סלא חסידא לא תרתח ולא תחטי לא תרוי ולא תחטי וכשאתה יוצא לדרך המלך בקונך וצא מאי המלך בקונך וצא אמר רבי יעקב אמר רב חסדא זו תפלת הדרך ואמר רבי יעקב אמר רב חסדא כל היוצא לדרך צריך להתפלל תפלת הדרך מאי תפלת הדרך יהי רצון מלפניך ה' אלהי שתוליכני לשלום ותצעידני לשלום ותסמכני לשלום ותצילני מכף כל אויב ואורב בדרך ותשלח ברכה במעשי ידי ותתנני לחן לחסד ולרחמים בעיניך ובעיני כל רואי בא\"י שומע תפלה אמר אביי לעולם",
  "rashi": [
   {
    "dh": "תחנונים",
    "text": " — כגון אלהי נצור לשוני מרע שאנו אומרים בעמידה אחר תפלה:"
   },
   {
    "dh": "אבל אם אינו רגיל",
    "text": " — הויא סיום תפלתו כעקירה אפילו לא עקר:"
   },
   {
    "dh": "כמשוי",
    "text": " — והיינו לשון קבע חוק קבוע הוא עלי להתפלל וצריך אני לצאת ידי חובתי:"
   },
   {
    "dh": "מי שאינו יכול",
    "text": " — לכוין לבו לשאול צרכיו:"
   },
   {
    "dh": "לחדש בה דבר",
    "text": " — בבקשתו והיינו לשון קבע כיום כן אתמול כן מחר:"
   },
   {
    "dh": "דילמא מטרידנא",
    "text": " — שמא אטעה ולא אדע לחזור למקום שהפסקתי:"
   },
   {
    "dh": "שאינו מתפלל עם דמדומי חמה",
    "text": " — והיינו לשון קבע תפלתו עליו חוק קבוע לצאת ידי חובה ואינו מקפיד לחזר אחר שעת מצוה ועת רצון:"
   },
   {
    "dh": "עם דמדומי חמה",
    "text": " — תפלת יוצר עם הנץ החמה ותפלת המנחה עם שקיעת החמה:"
   },
   {
    "dh": "ייראוך עם שמש",
    "text": " — זו תפלת יוצר:"
   },
   {
    "dh": "ולפני ירח",
    "text": " — זו מנחה:"
   },
   {
    "dh": "לייטי במערבא",
    "text": " — על מי שמשהה תפלת המנחה עד דמדומי חמה שמא תטרף לו השעה ע\"י אונס ועבר הזמן:"
   },
   {
    "dh": "בכל פרשת העבור וכו'",
    "text": " — כמו פרישת העבור:"
   },
   {
    "dh": "אפי' בשעה שאתה מתמלא עליהם עברה כאשה עוברה",
    "text": " — והכי משמע בכל עניני פרישת העבור כגון עברה בעברה:"
   },
   {
    "dh": "יהיו כל צרכיהם",
    "text": " — גלוים לפניך לרחם עליהם:"
   },
   {
    "dh": "אפי' בשעה שהם עוברים",
    "text": " — ולשון פרשת העבור שהן פורשין לעבירה:"
   },
   {
    "dh": "עשה רצונך בשמים",
    "text": " — שאין שם חטא ואין רצונך עליהם אלא לטוב ועבור לתחתונים על רצונך:"
   },
   {
    "dh": "ותן",
    "text": " — להם ליראיך:"
   },
   {
    "dh": "נחת רוח",
    "text": " — שלא יתערבב רוחם על ידי הבריות כגון ע\"י חיות ולסטים:"
   },
   {
    "dh": "והטוב בעיניך עשה",
    "text": " — אתה להם ודוגמא זו מצינו בספר שופטים ויאמרו בני ישראל חטאנו עשה אתה לנו (כטוב) [ככל הטוב] בעיניך אך הצילנו וגו':"
   },
   {
    "dh": "שועת",
    "text": " — לשון גניחה יותר מתפלה:"
   },
   {
    "dh": "ודעתם קצרה",
    "text": " — ואינם יודעים לפרש צרכיהם:"
   },
   {
    "dh": "לא תרתח ולא תחטי",
    "text": " — לא תכעוס שמתוך הכעס אתה בא לידי חטא:"
   },
   {
    "dh": "לא תרוי",
    "text": " — לא תשתכר ביין:"
   },
   {
    "dh": "המלך",
    "text": " — טול רשות:"
   }
  ],
  "tosafot": [
   {
    "dh": "הא דאדכר (אחר) [בתר] שומע תפלה",
    "text": " — אז ודאי מחזירין אותו מיהו אם לא עקר רגליו אינו צריך לחזור לראש ולא לברכת השנים אלא חוזר לשומע תפלה וכן משמע בירושלמי פ' אין עומדין דקאמר אם לא שאל בברכת השנים מחזירין אותו ולהיכן חוזר ר' שמעון בשם ר' יוחנן אמר בר\"ח אם עקר רגליו חוזר לראש ואם לאו חוזר לעבודה ה\"נ אם עקר רגליו חוזר לראש ואם לאו חוזר לשומע תפלה אלמא משמע בהדיא דאינו חוזר אלא לשומע תפלה כי לא עקר רגליו מיהו הירושלמי פליג אגמרא דידן בגבורות גשמים דהכא קתני לא הזכיר גבורות גשמים מחזירין אותו ולא קאמר לאומרו בשומע תפלה ובירושל' קאמר אם לא שאל בברכת השנים אומרה בשומע תפלה ודכוותה אם לא הזכיר גבורות גשמים בתחיית המתים מזכיר בשומע תפלה ומה אם שאלה שהיא מדוחק אומרה בשומע תפלה הזכרה שהיא מריוח לא כ\"ש אלמא דבהדיא איתא התם דחוזר בגבורות גשמים לשומע תפלה ואפשר להיות שהגמרא שלנו לא חשש לפרשו משום הקל וחומר כדאיתא בירושלמי והא דקתני לא הזכיר גבורות גשמים מחזירין אותו איירי שלא הזכיר כלל בשומע תפלה והא ליתא דהא במסקנא מוקי האי מימרא בנזכר קודם שומע תפלה משום פירכא דשאלה ובירושלמי קאמר היה עומד בטל והזכיר של גשם מחזירין אותו פי' בימות הקיץ ופריך והא תניא בטל וברוחות לא חייבו חכמים להזכיר והכי פריך כי היכי דאם לא הזכיר כלל מטל אינו עיכוב ואם היה רוצה להזכיר מזכיר ה\"נ אם עמד בטל והזכיר של גשם אין לחוש דלא גרע מלא הזכיר טל כלל ומשני דלא דמי ההוא דמקל ומצלי לההוא דמצלי ולא מקל פי' מקלל כלומר אינו דומה כשעומד בטל והזכיר של גשם שהוא סימן קללה למי שאינו מזכיר כלל לא טל ולא גשם שאינו מקלל וכן הלכה למעשה שאם עומד בשל טל והזכיר של גשם דמחזירין אותו ואם לא הזכיר משניהם כלל אין מחזירין אותו והדר קאמר בירושלמי קאי בגשם והזכיר בשל טל אין מחזירין אותו ופריך מהכא והתניא או שלא הזכיר גבורות גשמים מחזירין אותו ומשני הא דאדכר הא דלא אדכר הא דלא אדכר לא טל ולא מטר לכך מחזירין אותו הא דהזכיר של טל ומטר ולא נהירא דפשיטא אם הזכיר שניהם דאין מחזירין אותו ואם לא הזכיר כלל פשיטא דמחזירין אותו אלא ודאי יש לפרש הא דאדכר טל הא דלא אדכר כלל לא טל ולא מטר לפיכך מחזירין אותו אבל אם הזכיר טל אף בימות הגשמים אין מחזירין אותו לכך יש בני אדם שאומרים כל שעה טל מתוך שהם רגילים אם כן בימות הגשמים אם שכח מוריד הגשם אין מחזירין אותו:"
   },
   {
    "dh": "טעה ולא הזכיר של ראש חדש בעבודה חוזר לעבודה",
    "text": " — ובהלכות גדולות פי' דוקא ביחיד אבל בצבור אינו חוזר מפני ששומעה מש\"צ מיהו צריך לדקדק מפי החזן כל אות ואות של תפלה אע\"פ שהוא בקי דהא אמרינן בראש השנה (פ\"ד דף לד:) כשם שמוציא את שאינו בקי כך מוציא הבקי ואע\"ג דאמרינן התם לא פטר רבן גמליאל אלא העם שבשדות משום דאניסי וטרידי אבל טעה לא יש לומר היינו שלא התפלל כלל אבל היכא שהתפלל כבר לא חשבינן ליה כאילו לא התפלל כלל וה\"ה לכל דבר שמחזירין אותו אי הדר שמע ליה משלוחא דצבורא מראש ועד סוף נפיק והרב ר\"מ פסק דוקא שכח להזכיר של ר\"ח אבל שכח ברכה שלמה מחזירין אותו ואינו יוצא בשמיעתו משליח צבור (וע\"ע תוס' ר\"ה לד: ד\"ה כך):"
   },
   {
    "dh": "איכא דאמרי אמר רב נחמן וכו'",
    "text": " — רב אלפס פסק כאיכא דאמרי דברגיל לומר תחנונים ולא עקר רגליו אינו חוזר לראש ואם אינו רגיל גם כי לא עקר רגליו חוזר לראש ואם עקר גם כי רגיל לומר תחנונים כמו אלהי נצור לשוני חוזר לראש:"
   },
   {
    "dh": "כל שאינו יכול לומר תחנונים",
    "text": " — פי' ר\"ח דאם יכול לומר לשון תחנונים אפי' עליו כמשא הוי תפלה מעליא דלא בעינן אלא לשון תחנונים בלבד:"
   }
  ],
  "translations": []
 },
 {
  "id": "30a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ל",
  "amud": "א",
  "dafEn": "30a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "לישתף איניש נפשיה בהדי צבורא היכי נימא יהי רצון מלפניך ה' אלהינו שתוליכנו לשלום וכו' אימת מצלי אמר רבי יעקב אמר רב חסדא משעה שמהלך בדרך עד כמה אמר רבי יעקב אמר רב חסדא עד פרסה והיכי מצלי לה רב חסדא אמר מעומד רב ששת אמר אפילו מהלך רב חסדא ורב ששת הוו קאזלי באורחא קם רב חסדא וקא מצלי א\"ל רב ששת לשמעיה מאי קא עביד רב חסדא אמר ליה קאי ומצלי א\"ל אוקמן נמי לדידי ואצלי מהיות טוב אל תקרא רע. מאי איכא בין הביננו לתפלה קצרה הביננו בעי לצלויי ג' קמייתא וג' בתרייתא וכי מטי לביתיה לא בעי למהדר לצלויי בתפלה קצרה לא בעי לצלויי לא ג' קמייתא ולא ג' בתרייתא וכי מטי לביתיה בעי למהדר לצלויי והלכתא הביננו מעומד תפלה קצרה בין מעומד בין מהלך: היה רוכב על החמור וכו': ת\"ר היה רוכב על החמור והגיע זמן תפלה אם יש לו מי שיאחז את חמורו ירד למטה ויתפלל ואם לאו ישב במקומו ויתפלל רבי אומר בין כך ובין כך ישב במקומו ויתפלל לפי שאין דעתו מיושבת עליו אמר רבא ואיתימא רבי יהושע בן לוי הלכה כרבי: ת\"ר סומא ומי שאינו יכול לכוין את הרוחות יכוין לבו כנגד אביו שבשמים שנא' (מלכים א ח, לה) והתפללו אל ה' היה עומד בח\"ל יכוין את לבו כנגד ארץ ישראל שנא' (מלכים א ח, מח) והתפללו אליך דרך ארצם היה עומד בארץ ישראל יכוין את לבו כנגד ירושלים שנאמר (מלכים א ח, מד) והתפללו אל ה' דרך העיר אשר בחרת היה עומד בירושלים יכוין את לבו כנגד בית המקדש שנאמר (דברי הימים ב ו, לב) והתפללו אל הבית הזה היה עומד בבית המקדש יכוין את לבו כנגד בית קדשי הקדשים שנאמר (מלכים א ח, לה) והתפללו אל המקום הזה היה עומד בבית קדשי הקדשים יכוין את לבו כנגד בית הכפורת היה עומד אחורי בית הכפורת יראה עצמו כאילו לפני הכפורת נמצא עומד במזרח מחזיר פניו למערב במערב מחזיר פניו למזרח בדרום מחזיר פניו לצפון בצפון מחזיר פניו לדרום נמצאו כל ישראל מכוונין את לבם למקום אחד א\"ר אבין ואיתימא ר' אבינא מאי קראה (שיר השירים ד, ד) כמגדל דויד צוארך בנוי לתלפיות תל שכל פיות פונים בו: אבוה דשמואל ולוי כי הוו בעו למיפק לאורחא הוו מקדמי ומצלי וכי הוה מטי זמן ק\"ש קרו כמאן כי האי תנא דתניא השכים לצאת לדרך מביאין לו שופר ותוקע לולב ומנענע מגילה וקורא בה וכשיגיע זמן ק\"ש קורא השכים לישב בקרון או בספינה מתפלל וכשיגיע זמן ק\"ש קורא רשב\"א אומר בין כך ובין כך קורא ק\"ש ומתפלל כדי שיסמוך גאולה לתפלה במאי קמיפלגי מר סבר תפלה מעומד עדיף ומר סבר מסמך גאולה לתפלה עדיף מרימר ומר זוטרא הוו מכנפי בי עשרה בשבתא דרגלא ומצלו והדר נפקא לפרקא רב אשי מצלי בהדי צבורא ביחיד מיושב כי הוה אתי לביתיה הדר ומצלי מעומד אמרי ליה רבנן ולעביד מר כמרימר ומר זוטרא אמר להו טריחא לי מלתא ולעביד מר כאבוה דשמואל ולוי אמר להו לא חזינא להו לרבנן קשישי מינן דעבדי הכי:  ר' אלעזר בן עזריה אומר אין תפלת המוספין אלא בחבר עיר וחכ\"א בחבר עיר ושלא בחבר עיר ר' יהודה אומר משמו כל מקום שיש שם חבר עיר יחיד פטור מתפלת המוספין: גמ׳ ר' יהודה היינו ת\"ק איכא בינייהו יחיד שלא בחבר עיר ת\"ק סבר פטור ור' יהודה סבר חייב א\"ר הונא בר חיננא אמר ר' חייא בר רב הלכה כר' יהודה שאמר משום ראב\"ע א\"ל רב חייא בר אבין שפיר קאמרת דאמר שמואל מימי לא מצלינא צלותא דמוספין ביחיד",
  "rashi": [
   {
    "dh": "לישתף נפשיה",
    "text": " — אל יתפלל תפלה קצרה בלשון יחיד אלא בלשון רבים שמתוך כך תפלתו נשמעת:"
   },
   {
    "dh": "עד כמה",
    "text": " — זמנה להתפלל:"
   },
   {
    "dh": "עד פרסה",
    "text": " — אבל לא לאחר שהלך פרסה ובה\"ג מפרש עד כמה יבקש לילך שיהא צריך להתפלל עד פרסה אפי' אין לו לילך אלא עד פרסה אבל דרך פחות מפרסה אין צריך להתפלל תפלה זו:"
   },
   {
    "dh": "רב ששת",
    "text": " — מאור עינים הוה:"
   },
   {
    "dh": "מהיות טוב אל תקרא רע",
    "text": " — הואיל ואני יכול להתפלל מעומד שהרי חבורתי עומדת לא אקרא רע להתפלל מהלך ואע\"פ שמותר:"
   },
   {
    "dh": "וכי מטי לביתיה בעי מהדר לצלויי",
    "text": " — שהרי לא התפלל כלום מתפלת י\"ח:"
   },
   {
    "dh": "שאין דעתו מיושבת עליו",
    "text": " — שקשה עליו עכוב הדרך:"
   },
   {
    "dh": "לכוין את הרוחות",
    "text": " — לצד ארץ ישראל כדבעינן למימר תל שהכל פונים בו:"
   },
   {
    "dh": "אחורי בית הכפורת",
    "text": " — במערב העזרה היו י\"א אמה חצר מכותל בית קדשי הקדשים לכותל מערבי של עזרה והעומד שם מחזיר פניו לבית הכפורת למזרח:"
   },
   {
    "dh": "הוו מקדמי",
    "text": " — קודם היום:"
   },
   {
    "dh": "בקרון ובספינה",
    "text": " — איכא בעתותא דמיא:"
   },
   {
    "dh": "קורא ק\"ש",
    "text": " — ימתין עד שיגיע זמן ק\"ש ויקראנה ואח\"כ יתפלל:"
   },
   {
    "dh": "תפלה מעומד עדיף",
    "text": " — שיכול לכוין את לבו לפיכך היו מקדימין להתפלל מעומד בביתם שלא יצטרכו להתפלל בדרך במהלך:"
   },
   {
    "dh": "בשבתא דרגלא",
    "text": " — שלפני פסח ועצרת וסוכות ומרימר בעירו ומר זוטרא בעירו היו הדרשנים ושחרית היו העם הולכים לבית המדרש וכשמגיע זמן ק\"ש קורין והדרשן דורש והעם נשמטים ומתפללים איש איש לבדו ולכך הם היו מאספין להם י' שחרית קודם שילכו לבית המדרש וקורין ק\"ש ומתפללים בסמיכת גאולה לתפלה והדר נפקי לפרקא ודרשי: ומצלי בהדי צבורא ל\"ג:"
   },
   {
    "dh": "רב אשי",
    "text": " — היה ראש ישיבה במתא מחסיא ודורש והוא לא היה מתפלל קודם בית המדרש אלא כשמגיע זמן ק\"ש לוחש הרבה יחד למתורגמן העומד לפניו ובעוד שהמתורגמן משמיע לרבים הוא קורא את שמע וסומך גאולה לתפלה ומתפלל מיושב שלא היה רוצה לצאת שלא להטריח את הצבור לקום מפניו:"
   },
   {
    "dh": "בהדי צבורא",
    "text": " — בשעה שהצבור נשמטין ומתפללין אי נמי בהדי צבורא כמו שהוא יושב בתוך הצבור כלומר שאינו יוצא וכי הוה אתי לביתי' חוזר ומתפלל מעומד לכוין את לבו:"
   },
   {
    "dh": "טריחא לי מילתא",
    "text": " — לאחר בית המדרש עד שאתפלל:"
   },
   {
    "dh": "ולעביד מר כאבוה דשמואל ולוי",
    "text": " — שמתפללין קודם היום בביתם מעומד ולא תצטרך לב' תפלות ומשום מסמך גאולה לתפלה כיון דמצלו קודם ק\"ש לא קפדי:"
   },
   {
    "dh": "לא חזינן להו לרבנן קשישי מינן דעבדי הכי",
    "text": " — שיקדימו תפלה לקריאת שמע הלכך כיון דממתין מתפלה עד זמן ק\"ש מצוה לסמוך תפלה אחר גאולה לפיכך מתפלל מיושב במקומו ולפי שאין דעתו מיושבת עליו כ\"כ צריך לחזור ולהתפלל בביתו:"
   },
   {
    "dh": "מתני' אין תפלת המוספין אלא בחבר עיר",
    "text": " — לא תקנוה אלא בצבור. חבר עיר חבורת העיר אבל לא ליחיד:"
   },
   {
    "dh": "משמו",
    "text": " — של ראב\"ע:"
   },
   {
    "dh": "כל מקום כו'",
    "text": " — ובגמ' פריך היינו ת\"ק אליבא דראב\"ע:"
   },
   {
    "dh": "גמ' יחיד שלא בחבר עיר",
    "text": " — יחיד הדר בעיר שאין שם עשרה לת\"ק אליבא דרבי אלעזר דאמר לא תקנוה אלא בעשרה יחיד זה פטור ולרבי יהודה אין יחיד פטור אלא במקום עשרה ששליח צבור פוטרו:"
   }
  ],
  "tosafot": [
   {
    "dh": "והיכי מצלי לה",
    "text": " — אתפלת הדרך קאי ורב ששת אמר אפי' מהלך וקי\"ל כרב ששת ומיהו בתוספ' פסק ה\"ר יוסף כרב חסדא וכן רב אלפס פי' דרב חסדא עדיפא ליה טפי:"
   },
   {
    "dh": "מאי איכא בין הביננו לתפלה קצרה",
    "text": " — תימה לימא דאיכא בינייהו דתפלה קצרה אינו מתפלל אלא במקום סכנה והביננו מתפלל אפילו שלא במקום סכנה וי\"ל דהכי קא בעי מאי בינייהו כל א' במקומו תפלה קצרה במקום סכנה והביננו שלא במקום סכנה:"
   },
   {
    "dh": "הלכה כרבי",
    "text": " — שלא ירד למטה ואפי' שלא במקום סכנה ואפילו במהלך מתפלל ואינו צריך להחזיר פניו כנגד ירושלים:"
   },
   {
    "dh": "היה עומד בח\"ל יכוין כנגד ארץ ישראל",
    "text": " — ול\"ג לבו דאפניו קאי כדקתני סיפא היה עומד במזרח מחזיר פניו למערב:"
   },
   {
    "dh": "לתלפיות תל שכל פיות פונים בו",
    "text": " — וכהך שמעתתא קי\"ל וכן מסקינן בלא יחפור (ב\"ב כה:) דקאמר אתון דקיימיתון לצפונא דא\"י אדרימו ולא כהני אמוראי דלעיל (שם) דפליגי אי השכינה במזרח או במערב עכשיו אנו במערבה של א\"י על כן אנו פונין למזרח:"
   },
   {
    "dh": "אבוה דשמואל ולוי הוו מקדמי ומצלו",
    "text": " — פירש רש\"י קודם עמוד השחר ולא נראה דאם כן לא היו יוצאין בו כלל דעדיין אינו יום לכך נראה כפי' ר\"ח דמשעלה עמוד השחר קאמר והוו מקדמי קודם הנץ החמה קאמר ועדיין אינו עיקר זמן תפלה:"
   },
   {
    "dh": "מסמך גאולה לתפלה עדיף",
    "text": " — מלהתפלל מעומד והכי פסקי בה\"ג הלכה כר\"ש בן אלעזר ומשמע די\"ח ברכות מותר להתפלל בדרך במהלך ואין צריך לעמוד וא\"ת ומ\"ש מהביננו דמסקינן לעיל דמעומד דוקא וי\"ל דשאני הביננו שהיא קצרה ואין כאן בטול דרך כ\"כ כמו בי\"ח ברכות ועוד פירש הר\"ם דהכא כי הדר לביתיה מצלי מעומד כדאמרינן בסמוך רב אשי מצלי בהדי צבורא ביחיד מיושב כדי לקרות ק\"ש בשעתה וכי הדר לביתי' מצלי מעומד ור\"ח פסק כאבוה דשמואל ולוי ומיהו מדקאמר רב אשי לא חזינן לרבנן קשישי דקא עבדי הכי משמע דאין הלכה כמותם:"
   }
  ],
  "translations": []
 },
 {
  "id": "30b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ל",
  "amud": "ב",
  "dafEn": "30b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בנהרדעא לבר מההוא יומא דאתא פולמוסא דמלכא למתא ואטרידו רבנן ולא צלו וצלי לי ביחיד והואי יחיד שלא בחבר עיר יתיב רבי חנינא קרא קמיה דר' ינאי ויתיב וקאמר הלכה כר' יהודה שאמר משום ר' אלעזר בן עזריה א\"ל פוק קרא קראיך לברא דאין הלכה כרבי יהודה שאמר משום ראב\"ע א\"ר יוחנן אני ראיתי את רבי ינאי דצלי והדר צלי א\"ל רבי ירמיה לר' זירא ודילמא מעיקרא לא כוון דעתיה ולבסוף כוון דעתיה א\"ל חזי מאן גברא רבא דקמסהיד עליה: ר' אמי ור' אסי אע\"ג דהוו להו תליסר בי כנישתא בטבריא לא הוו מצלו אלא ביני עמודי היכא דהוו גרסי איתמר רב יצחק בר אבדימי משום רבינו אמר הלכה כר' יהודה שאמר משום ראב\"ע ר' חייא בר אבא צלי והדר צלי א\"ל רבי זירא מאי טעמא עביד מר הכי אילימא משום דלא כוון מר דעתיה והאמר ר\"א לעולם ימוד אדם את עצמו אם יכול לכוין את לבו יתפלל ואם לאו אל יתפלל אלא דלא אדכר מר דריש ירחא והתניא טעה ולא הזכיר של ר\"ח בערבית אין מחזירין אותו מפני שיכול לאומרה בשחרית בשחרית אין מחזירין אותו מפני שיכול לאומרה במוספין במוספין אין מחזירין אותו מפני שיכול לאומרה במנחה א\"ל לאו איתמר עלה א\"ר יוחנן בצבור שנו: כמה ישהה בין תפלה לתפלה רב הונא ור\"ח חד אמר כדי שתתחונן דעתו עליו וחד אמר כדי שתתחולל דעתו עליו מאן דאמר כדי שתתחונן דעתו עליו דכתיב (דברים ג, כג) ואתחנן אל ה' ומ\"ד כדי שתתחולל דעתו עליו דכתיב (שמות לב, יא) ויחל משה אמר רב ענן אמר רב טעה ולא הזכיר של ר\"ח ערבית אין מחזירין אותו לפי שאין בית דין מקדשין את החדש אלא ביום אמר אמימר מסתברא מילתא דרב בחדש מלא אבל בחדש חסר מחזירין אותו א\"ל רב אשי לאמימר מכדי רב טעמא קאמר מה לי חסר ומה לי מלא אלא לא שנא: הדרן עלך תפלת השחר  אין עומדין להתפלל אלא מתוך כובד ראש חסידים הראשונים היו שוהין שעה אחת ומתפללין כדי שיכוונו לבם לאביהם שבשמים אפי' המלך שואל בשלומו לא ישיבנו ואפי' נחש כרוך על עקבו לא יפסיק: גמ׳ מנא ה\"מ א\"ר אלעזר דאמר קרא (שמואל א א, י) והיא מרת נפש ממאי דילמא חנה שאני דהות מרירא לבא טובא אלא א\"ר יוסי בר' חנינא מהכא (תהלים ה, ח) ואני ברב חסדך אבא ביתך אשתחוה אל היכל קדשך ביראתך ממאי דילמא דוד שאני דהוה מצער נפשיה ברחמי טובא אלא אמר ר' יהושע בן לוי מהכא (תהלים כט, ב) השתחוו לה' בהדרת קדש אל תקרי בהדרת אלא בחרדת ממאי דילמא לעולם אימא לך הדרת ממש כי הא דרב יהודה הוה מציין נפשיה והדר מצלי אלא א\"ר נחמן בר יצחק מהכא (תהלים ב, יא) עבדו את ה' ביראה וגילו ברעדה מאי וגילו ברעדה א\"ר אדא בר מתנא אמר רבה במקום גילה שם תהא רעדה אביי הוה יתיב קמיה דרבה חזייה דהוה קא בדח טובא אמר וגילו ברעדה כתיב א\"ל אנא תפילין מנחנא ר' ירמיה הוה יתיב קמיה דר' זירא חזייה דהוה קא בדח טובא אמר ליה (משלי יד, כג) בכל עצב יהיה מותר כתיב א\"ל אנא תפילין מנחנא מר בריה דרבינא עבד הלולא לבריה חזנהו לרבנן דהוו קבדחי טובא",
  "rashi": [
   {
    "dh": "בנהרדעא",
    "text": " — לפי שיש שם צבור והשליח פוטרני:",
    "en": "Koved Rosh – Lit: to be bent, Practically: “subjugation/humility”"
   },
   {
    "dh": "פולמוסא",
    "text": " — חיל:",
    "en": "Wait one hour – In the place where they come to pray"
   },
   {
    "dh": "דצלי והדר צלי",
    "text": " — ולמה ליה ב' תפלות אלא אחת של שחרית ואחת של מוספין ש\"מ לית ליה דראב\"ע:",
    "en": "He would adorn himself – He would adorn himself with clothes"
   },
   {
    "dh": "ודילמא מעיקרא לא כוון דעתיה",
    "text": " — ותרווייהו דשחרית:",
    "en": "I have laid tefillin - And they are testimony that I am under my creator's rulership and [in his] service."
   },
   {
    "dh": "מאן גברא רבא דקמסהיד עליה",
    "text": " — רבי יוחנן שהעיד על הדבר יפה דקדק שבשביל תפלת המוספין היתה:"
   },
   {
    "dh": "משום רבינו",
    "text": " — רב:"
   },
   {
    "dh": "טעה ולא הזכיר במוספין",
    "text": " — שהתפלל אתה חונן:"
   },
   {
    "dh": "בצבור שנו",
    "text": " — דאין מחזירין משום דשמע ליה מש\"צ ואיכא מקצת הזכרה אבל ביחיד צריך לחזור ובה\"ג מפרש לה בש\"צ משום טירחא דצבורא אבל יחיד הדר:"
   },
   {
    "dh": "כמה ישהה בין תפלה לתפלה",
    "text": " — מי שיש עליו לחזור ולהתפלל או משום דטעה או משום מוספין כמה ישהה בין זו לזו:"
   },
   {
    "dh": "שתתחונן",
    "text": " — שתהא דעתו מיושבת לערוך דבריו בלשון תחנה:"
   },
   {
    "dh": "שתתחולל",
    "text": " — לשון חילוי והיא היא אלא בלישנא בעלמא פליגי:"
   },
   {
    "dh": "בחדש מלא",
    "text": " — כשהחדש שעבר מלא עושין ר\"ח ב' ימים הלכך יכול לאומרה למחר דערבית של מחר ר\"ח גמור יותר מן הראשון:"
   },
   {
    "dh": "מכדי טעמא קאמר",
    "text": " — שאין מקדשין את החדש בלילה:"
   },
   {
    "dh": "הדרן עלך תפלת השחר",
    "text": ""
   },
   {
    "dh": "כובד ראש",
    "text": " — הכנעה:"
   },
   {
    "dh": "שוהין שעה אחת",
    "text": " — במקום שבאו להתפלל:"
   },
   {
    "dh": "גמ' אשתחוה אל היכל קדשך ביראתך",
    "text": " — מתוך יראה:"
   },
   {
    "dh": "מציין נפשיה",
    "text": " — מקשט עצמו בבגדיו:"
   },
   {
    "dh": "עבדו את ה' ביראה",
    "text": " — תפלה שהיא לנו במקום עבודה עשו אותה ביראה:"
   },
   {
    "dh": "דהוה קא בדח טובא",
    "text": " — יותר מדאי ונראה כפורק עול:"
   },
   {
    "dh": "תפילין מנחנא",
    "text": " — והם עדות שממשלת קוני ומשרתו עלי:"
   },
   {
    "dh": "בכל עצב יהיה מותר",
    "text": " — כשאדם מראה את עצמו עצב יהיה לו שכר:"
   }
  ],
  "tosafot": [
   {
    "dh": "ה״ג אין הלכה כרבי יהודה שאמר משום ראב\"ע",
    "text": " — אלא הלכה כרבנן וכן פסק ר\"ח דלהכי מייתי רבי אמי ור' אסי שהיו מתפללים ביחיד כרבנן ביני עמודי דגרסי לאשמעינן דהלכה כרבנן:"
   },
   {
    "dh": "והתניא טעה ולא הזכיר של ר\"ח בערבית אין מחזירין אותו",
    "text": " — ל\"ג ליה דהא אמרינן בסמוך טעה ולא הזכיר של ר\"ח אין מחזירין אותו לפי שאין מקדשין כו' אי נמי אי איתא אגב אחרינא נקט ליה:"
   },
   {
    "dh": "כמה ישהה בין תפלה לתפלה",
    "text": " — כגון אדם שטעה ורוצה להתפלל שנית וכן בין תפלת שחרית לתפלת המוספין:"
   },
   {
    "dh": "כדי שתתחולל דעתו עליו",
    "text": " — ומפרש בירושלמי דהיינו כשילך ארבע אמות:"
   },
   {
    "dh": "לפי שאין מקדשין את החדש כו'",
    "text": " — פי' לעיל בריש פרקין (ברכות כו א) מה שמקשין ותיפוק ליה משום רשות משום דהיינו דוקא לעשות מצוה אחרת עוברת וי\"מ דוקא בלילה ראשונה אין מחזירין אותו לפי שאין מקדשין החדש בלילה אבל בלילה שניה מחזירין אותו שכבר מקודש מיום שלפניו ולא נראה לחלק:"
   },
   {
    "dh": "מסתברא מילתא דרב בחדש מלא",
    "text": " — כלומר שהיה אותו שלפניו מלא דאז יכול לאומרה בערבית של מחר שהוא עיקר והיה אומר ה\"ר יצחק לכל דבר שאמרו חכמים אין מחזירין אותו כגון יעלה ויבא בערבית ועל הנסים לא מיבעיא אם עקר רגליו ופתח בברכה שלאחריה דאין מחזירין אותו אלא אפילו לא עקר אלא שסיים אותה ברכה שתקנו בה לאומרה אין מחזירין אותו ולא נהירא לרבינו אלחנן דהא חזינן בברכת המזון דאותן שאמרו חכמים מחזירין וגם אותן שאין מחזירין שוין היכא דלא עקר רגליו כדאמר לקמן (ברכות מט א) אם שכח של שבת וסיים הברכה כולה ועדיין לא התחיל בברכת הטוב והמטיב אומר ברוך אשר נתן שבתות למנוחה כו' וקאמר נמי התם אם טעה ולא הזכיר של ר\"ח קודם שעקר רגליו דהיינו קודם שיתחיל ברכת הטוב והמטיב דאותה קורא עקר רגליו אומר ברוך אשר נתן ראשי חדשים וכו' אלמא היכא דלא עקר אלו ואלו שוין ואם עקר רגליו שהתחיל בברכת הטוב והמטיב של שבת חוזר לראש ושל ר\"ח מעוות לא יוכל לתקון והכי נמי יחזור באותה ברכה אם לא התחיל בברכה שלאחריה. ומיהו אין ראיה מהתם דשאני התם בברכת המזון שכבר בירך ג' ברכות וברכת הטוב והמטיב לאו דאורייתא היא על כן אין מחזירין אותו לגמרי כי אין דומה שם הפסק כל כך ואין להביא ממנו ראיה לי\"ח ברכות דאם יחזירוהו בדבר שאין לו לחזור הוי כמו הפסקה ועוד דאין להביא ראיה לכאן דאם היית אומר היכא שלא עקר רגליו בי\"ח ברכות שהיה לו לחזור א\"כ היה צריך לחזור לרצה ואין זה הגון ומיהו אומר ר\"י דראה את ר\"ת דהיכא דלא עקר רגליו חזר לרצה אפי' בדברים שאין מחזירין כגון על הנסים וכן עמא דבר:"
   },
   {
    "dh": "הדרן עלך תפלת השחר",
    "text": ""
   },
   {
    "dh": "אל תקרי בהדרת אלא בחרדת",
    "text": " — תימה אמאי לא מוכח בהדיא מדכתיב בתריה חילו מלפניו כל הארץ וי\"ל היינו קרא דכתיב במזמור הבו לה' בני אלים ומההוא קרא בעי להוכיח במסכת מגילה (יז ב) שאומרים אבות וגבורות וקדושת השם וי\"ח ברכות תקנו כנגד האזכרות ומשום הכי דייק מאותו קרא שכתוב באותה פרשה אבל אותו דחילו וגו' אינו כתוב באותה פרשה:"
   },
   {
    "dh": "במקום גילה שם תהא רעדה",
    "text": " — פשוטו של מקרא עבדו את ה' ביראה וכשיבא יום רעדה תגילו והכי מפורש בירושלמי עבדו את ה' ביראה היינו תפלה דאיקרי עבודה כדתניא בספרי (פ' עקב) ולעבדו בכל לבבכם זו תפלה:"
   }
  ],
  "translations": []
 },
 {
  "id": "31a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לא",
  "amud": "א",
  "dafEn": "31a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אייתי כסא דמוקרא בת ארבע מאה זוזי ותבר קמייהו ואעציבו רב אשי עבד הלולא לבריה חזנהו לרבנן דהוו קא בדחי טובא אייתי כסא דזוגיתא חיורתא ותבר קמייהו ואעציבו אמרו ליה רבנן לרב המנונא זוטי בהלולא דמר בריה דרבינא לישרי לן מר אמר להו ווי לן דמיתנן ווי לן דמיתנן אמרי ליה אנן מה נעני בתרך א\"ל הי תורה והי מצוה דמגנו עלן א\"ר יוחנן משום רשב\"י אסור לאדם שימלא שחוק פיו בעולם הזה שנאמר (תהלים קכו, ב) אז ימלא שחוק פינו ולשוננו רנה אימתי בזמן שיאמרו בגוים הגדיל ה' לעשות עם אלה אמרו עליו על ר\"ל שמימיו לא מלא שחוק פיו בעוה\"ז מכי שמעה מר' יוחנן רביה: ת\"ר אין עומדין להתפלל לא מתוך דין ולא מתוך דבר הלכה אלא מתוך הלכה פסוקה והיכי דמי הלכה פסוקה אמר אביי כי הא דר' זירא דאמר ר' זירא בנות ישראל החמירו על עצמן שאפילו רואות טיפת דם כחרדל יושבת עליה שבעה נקיים רבא אמר כי הא דרב הושעיא דאמר רב הושעיא מערים אדם על תבואתו ומכניסה במוץ שלה כדי שתהא בהמתו אוכלת ופטורה מן המעשר ואב\"א כי הא דרב הונא דא\"ר הונא א\"ר זעירא המקיז דם בבהמת קדשים אסור בהנאה ומועלין בו רבנן עבדי כמתניתין רב אשי עביד כברייתא. ת\"ר אין עומדין להתפלל לא מתוך עצבות ולא מתוך עצלות ולא מתוך שחוק ולא מתוך שיחה ולא מתוך קלות ראש ולא מתוך דברים בטלים אלא מתוך שמחה של מצוה וכן לא יפטר אדם מחברו לא מתוך שיחה ולא מתוך שחוק ולא מתוך קלות ראש ולא מתוך דברים בטלים אלא מתוך דבר הלכה שכן מצינו בנביאים הראשונים שסיימו דבריהם בדברי שבח ותנחומים וכן תנא מרי בר בריה דרב הונא בריה דר' ירמיה בר אבא אל יפטר אדם מחבירו אלא מתוך דבר הלכה שמתוך כך זוכרהו כי הא דרב כהנא אלוייה לרב שימי בר אשי מפום נהרא עד בי צניתא דבבל כי מטא להתם א\"ל מר ודאי דאמרי אינשי הני צניתא דבבל איתנהו מאדם הראשון ועד השתא א\"ל אדכרתן מילתא דרבי יוסי ברבי חנינא דאמר ר' יוסי ברבי חנינא מאי דכתיב (ירמיהו ב, ו) בארץ אשר לא עבר בה איש ולא ישב אדם שם וכי מאחר דלא עבר היאך ישב אלא לומר לך כל ארץ שגזר עליה אדם הראשון לישוב נתישבה וכל ארץ שלא גזר עליה אדם הראשון לישוב לא נתישבה רב מרדכי אלוייה לרב שימי בר אשי מהגרוניא ועד בי כיפי ואמרי לה עד בי דורא: ת\"ר המתפלל צריך שיכוין את לבו לשמים אבא שאול אומר סימן לדבר (תהלים י, יז) תכין לבם תקשיב אזנך תניא א\"ר יהודה כך היה מנהגו של ר\"ע כשהיה מתפלל עם הצבור היה מקצר ועולה מפני טורח צבור וכשהיה מתפלל בינו לבין עצמו אדם מניחו בזוית זו ומוצאו בזוית אחרת וכל כך למה מפני כריעות והשתחויות: א\"ר חייא בר אבא לעולם יתפלל אדם בבית שיש בו חלונות שנאמר (דניאל ו, יא) וכוין פתיחן ליה וגו' יכול יתפלל אדם כל היום כלו כבר מפורש על ידי דניאל (דניאל ו, יא) וזמנין תלתא וגו' יכול משבא לגולה הוחלה כבר נאמר (דניאל ו, יא) די הוא עבד מן קדמת דנא יכול יתפלל אדם לכל רוח שירצה ת\"ל (דניאל ו, יא) (לקבל) [נגד] ירושלם יכול יהא כוללן בבת אחת כבר מפורש ע\"י דוד דכתיב (תהלים נה, יח) ערב ובקר וצהרים וגו' יכול ישמיע קולו בתפלתו כבר מפורש על ידי חנה שנאמר (שמואל א א, יג) וקולה לא ישמע יכול ישאל אדם צרכיו ואח\"כ יתפלל כבר מפורש על ידי שלמה שנאמר (מלכים א ח, כח) לשמוע אל הרנה ואל התפלה רנה זו תפלה תפלה זו בקשה אין אומר דבר (בקשה) אחר אמת ויציב אבל אחר התפלה אפי' כסדר וידוי של יה\"כ אומר איתמר נמי אמר רב חייא בר אשי אמר רב אע\"פ שאמרו שואל אדם צרכיו בשומע תפלה אם בא לומר אחר תפלתו אפילו כסדר יום הכפורים אומר: אמר רב המנונא כמה הלכתא גברוותא איכא למשמע מהני קראי דחנה (שמואל א א, יג) וחנה היא מדברת על לבה מכאן למתפלל צריך שיכוין לבו רק שפתיה נעות מכאן למתפלל שיחתוך בשפתיו וקולה לא ישמע מכאן שאסור להגביה קולו בתפלתו ויחשבה עלי לשכורה מכאן ששכור אסור להתפלל ויאמר אליה עלי עד מתי תשתכרין וגו' א\"ר אלעזר מכאן לרואה בחברו",
  "rashi": [
   {
    "dh": "כסא דמוקרא",
    "text": " — כוס של זכוכית לבנה:",
    "en": "An expensive cup – A cup of white/clear crystal"
   },
   {
    "dh": "לישרי לן מר",
    "text": " — שירה:",
    "en": "... \"Sing for us, sir\" – Singing (as opposed to reading \"לישרי\" as \"Sharei\" \"To permit\")"
   },
   {
    "dh": "הי תורה והי מצוה דמגנו עלן",
    "text": " — היכן התורה שעסקנו והיכן המצות שאנו מקיימין שיגינו עלינו מדינה של גיהנם:",
    "en": "Where is Torah and where are mitzvot that protect us? – (rhetorical) Where is the Torah that we busied ourselves with, and where are the mitzvot that we upheld that will protect us from the judgement of gehena?? (Did we do all of this for nothing??)"
   },
   {
    "dh": "הלכה פסוקה",
    "text": " — שאינה צריכה עיון שלא יהא מהרהר בה בתפלתו:",
    "en": "You might ask for your needs- for example the brachot of אתה חונן until שומע תפילה and afterwards pray the first three brachot that are praise."
   },
   {
    "dh": "יושבת עליה ז' נקיים",
    "text": " — לבד מאותו יום שפוסקת והתורה לא הצריכה ז' נקיים אלא לזבה שנאמר ואם טהרה מזובה ואין זבה אלא הרואה שלשה ימים רצופין בתוך י\"א יום שבין נדה לנדה:"
   },
   {
    "dh": "ומכניסה",
    "text": " — בבית:"
   },
   {
    "dh": "במוץ שלה",
    "text": " — קודם שיזרה אותה שאין מתחייב במעשר מן התורה אלא בראיית פני הבית ומשנמרח בכרי אבל לפני מירוח אין ראיית פני הבית קובעתו דגבי תרומה ומעשר כתיב דגן ראשית דגנך (דברים י״ח:ד׳) והוא המירוח לפיכך כשמכניסה לבית קודם מירוח לא הוקבעה למעשר מן התורה ורבנן הוא דאסרו אכילת קבע בדבר שלא נגמר מלאכתו אבל אכילת עראי לא אסרו ומאכל בהמה עראי הוא דתנן במסכת פאה (פ\"א מ\"ו) מאכיל לבהמה חיה ועוף עד שימרח הלכך בהמתו אוכלת ופטורה אבל איהו אסור באכילת קבע:"
   },
   {
    "dh": "אסור בהנאה ומועלין בו",
    "text": " — ואע\"ג דקי\"ל אין מועלין בדמים ילפינן לה מקראי במסכת יומא (דף נט:) ובשחיטת חולין (דף קיז.) ה\"מ כשנשחטו בעזרה דאיכא למימר נתתיו לכם על המזבח לכפר (ויקרא י״ז:י״א) לכפר נתתיו לך ולא למעילה אבל בדם הקזה מועלין כלומר אם נהנה מביא קרבן מעילה והנך הויין הלכות פסוקות שאין עליהן קושיות ותירוצים שיהא צריך להרהר בהן:"
   },
   {
    "dh": "כמתניתין",
    "text": " — מתוך כובד ראש:"
   },
   {
    "dh": "כברייתא",
    "text": " — מתוך הלכה פסוקה:"
   },
   {
    "dh": "שיחה",
    "text": " — ליצנות:"
   },
   {
    "dh": "מתוך קלות ראש",
    "text": " — חילוף של כובד ראש מתוך זחות לב ועתק:"
   },
   {
    "dh": "אלא מתוך שמחה",
    "text": " — כגון דברי תנחומים של תורה כגון סמוך לגאולת מצרים או סמוך לתהלה לדוד שהוא של שבח ותנחומין כגון רצון יראיו יעשה שומר ה' את כל אוהביו וכגון מקראות הסדורות בתפלת ערבית כי לא יטוש ה' את עמו וכיוצא בהן:"
   },
   {
    "dh": "אלוייה",
    "text": " — ליוהו בדרך:"
   },
   {
    "dh": "צניתא",
    "text": " — דקלים:"
   },
   {
    "dh": "אדכרתן מילתא כו'",
    "text": " — וזה שאומרים מימות אדם הראשון הם שהוא גזר על אותו מקום לישוב דקלים:"
   },
   {
    "dh": "אם תכין לבם",
    "text": " — אז תקשיב אזנך:"
   },
   {
    "dh": "זמנין תלתא",
    "text": " — שחרית מנחה וערבית:"
   },
   {
    "dh": "יכול משבא לגולה הוחלה",
    "text": " — התפלה הזאת הוחלה כמו נתחלה אבל קודם לכן לא היה רגיל בכך:"
   },
   {
    "dh": "יכול יהא כוללן",
    "text": " — לשלש תפלות הללו בשעה אחת:"
   },
   {
    "dh": "יכול ישאל צרכיו",
    "text": " — כגון ברכות דאתה חונן עד ש\"ת ואח\"כ יתפלל שלש ברכות ראשונות שהן של שבח:"
   },
   {
    "dh": "רנה זו תפלה",
    "text": " — של שבח:"
   },
   {
    "dh": "בקשה",
    "text": " — שאלת צרכיו:"
   },
   {
    "dh": "אחר אמת ויציב",
    "text": " — קודם ג' ראשונות:"
   }
  ],
  "tosafot": [
   {
    "dh": "אייתי כסא דזוגיתא חיורתא",
    "text": " — מכאן נהגו לשבר זכוכית בנשואין:"
   },
   {
    "dh": "המקיז דם בבהמת קדשים וכו'",
    "text": " — וקשה דאמר בפ\"ג דע\"ז (דף מד.) גבי דמים חיצונים ודמים פנימיים של קרבנות אלו ואלו נמכרים לגננים לזבל אלמא דאין מועלין בהן וי\"ל דהתם היינו לאחר זריקת דמים וכבר נתכפרו בעלים מה שאין כן הכא:"
   },
   {
    "dh": "רבנן עבדי כמתניתין",
    "text": " — וכותייהו קי\"ל ולכן אין מתפללין מתוך קלות ראש ושחוק אלא מתוך כובד ראש ושמחה של מצוה כגון שעסק בדברי תורה ולכן נהגו לומר פסוקי דזמרה ואשרי קודם תפלה:"
   },
   {
    "dh": "רב אשי עביד כברייתא",
    "text": " — ירושלמי לא יעמוד ויתפלל אלא מתוך דבר הלכה א\"ר ירמיה העוסק בצרכי צבור כעוסק בדברי תורה דמי:"
   },
   {
    "dh": "שכן מצינו בנביאים הראשונים שסיימו דבריהם בדברי שבח ותנחומין",
    "text": " — ומקשה בירושלמי חוץ מירמיה וכו' והא כתיב כי אם מאס מאסתנו (איכה ה׳:כ״ב) מיהו מההוא קראי דסוף תרי עשר וקהלת לא פריך מידי שחושבו בטוב בדברי תנחומין ולא מיירי בפורענות דישראל:"
   },
   {
    "dh": "ומוצאו בזוית אחרת",
    "text": " — תימה דאמר לקמן (ברכות דף לד.) הבא לשחות בסוף כל ברכה וברכה מלמדין אותו שלא ישחה ותירץ הר\"ר יוסף דהכא מיירי בתחנונים שהיה אומר אחר י\"ח ברכות ולא נהירא דהא מי\"ח קאמר ונראה להר\"י דודאי בסוף כל ברכה אסור לשחות אבל באמצע הברכה מיהא מותר לשחות ובהכי מיירי הכא וכשהיה מגיע לסוף הברכה היה זוקף ולכך נהגו העולם בראש השנה וביום הכפורים שמתפללין זכרנו ובכן תן ותמלוך ששוחים כשמגיעים לפסוקים ובסוף ברכה זוקפין שאין לשחות בסוף ברכות אלא היכא דתקון:"
   },
   {
    "dh": "מכאן ששכור אסור להתפלל",
    "text": " — ירושלמי במסכת תרומות פרק קמא רבי זירא בעי קמיה דרבי אמי שכור מהו שיברך א\"ל ואכלת ושבעת וברכת ואפילו מדומדם. פירוש ואפי' הוא שתוי ושכור כל כך שאינו יכול לדבר כראוי דהכי משמע ושבעת וברכת:"
   }
  ],
  "translations": []
 },
 {
  "id": "31b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לא",
  "amud": "ב",
  "dafEn": "31b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "דבר שאינו הגון צריך להוכיחו ותען חנה ותאמר לא אדני אמר עולא ואיתימא רבי יוסי ברבי חנינא אמרה ליה לא אדון אתה בדבר זה ולא רוח הקודש שורה עליך שאתה חושדני בדבר זה איכא דאמרי הכי אמרה ליה לא אדון אתה לאו איכא שכינה ורוח הקודש גבך שדנתני לכף חובה ולא דנתני לכף זכות מי לא ידעת דאשה קשת רוח אנכי ויין ושכר לא שתיתי אמר רבי אלעזר מכאן לנחשד בדבר שאין בו שצריך להודיעו אל תתן את אמתך לפני בת בליעל אמר רבי אלעזר מכאן לשכור שמתפלל כאלו עובד ע\"ז כתיב הכא לפני בת בליעל וכתיב התם (דברים יג, יד) יצאו אנשים בני בליעל מקרבך מה להלן ע\"ז אף כאן ע\"ז ויען עלי ויאמר לכי לשלום אמר רבי אלעזר מכאן לחושד את חברו בדבר שאין בו שצריך לפייסו ולא עוד אלא שצריך לברכו שנאמר ואלהי ישראל יתן את שלתך: ותדר נדר ותאמר ה' צבאות אמר רבי אלעזר מיום שברא הקב\"ה את עולמו לא היה אדם שקראו להקב\"ה צבאות עד שבאתה חנה וקראתו צבאות אמרה חנה לפני הקב\"ה רבש\"ע מכל צבאי צבאות שבראת בעולמך קשה בעיניך שתתן לי בן אחד משל למה הדבר דומה למלך בשר ודם שעשה סעודה לעבדיו בא עני אחד ועמד על הפתח אמר להם תנו לי פרוסה אחת ולא השגיחו עליו דחק ונכנס אצל המלך א\"ל אדוני המלך מכל סעודה שעשית קשה בעיניך ליתן לי פרוסה אחת: אם ראה תראה א\"ר אלעזר אמרה חנה לפני הקב\"ה רבש\"ע אם ראה מוטב ואם לאו תראה אלך ואסתתר בפני אלקנה בעלי וכיון דמסתתרנא משקו לי מי סוטה ואי אתה עושה תורתך פלסתר שנאמר (במדבר ה, כח) ונקתה ונזרעה זרע הניחא למאן דאמר אם היתה עקרה נפקדת שפיר אלא למאן דאמר אם היתה יולדת בצער יולדת בריוח נקבות יולדת זכרים שחורים יולדת לבנים קצרים יולדת ארוכים מאי איכא למימר דתניא ונקתה ונזרעה זרע מלמד שאם היתה עקרה נפקדת דברי ר' ישמעאל א\"ל רבי עקיבא אם כן ילכו כל העקרות כולן ויסתתרו וזו שלא קלקלה נפקדת אלא מלמד שאם היתה יולדת בצער יולדת בריוח קצרים יולדת ארוכים שחורים יולדת לבנים אחד יולדת שנים מאי אם ראה תראה דברה תורה כלשון בני אדם: בעני אמתך אל תשכח את אמתך ונתתה לאמתך א\"ר יוסי בר' חנינא ג' אמתות הללו למה אמרה חנה לפני הקב\"ה רבש\"ע שלשה בדקי מיתה בראת באשה ואמרי לה שלשה דבקי מיתה ואלו הן נדה וחלה והדלקת הנר כלום עברתי על אחת מהן: נתתה לאמתך זרע אנשים מאי זרע אנשים אמר רב גברא בגוברין ושמואל אמר זרע שמושח שני אנשים ומאן אינון שאול ודוד ורבי יוחנן אמר זרע ששקול כשני אנשים ומאן אינון משה ואהרן שנאמר (תהלים צט, ו) משה ואהרן בכהניו ושמואל בקוראי שמו רבנן אמרי זרע אנשים זרע שמובלע בין אנשים כי אתא רב דימי אמר לא ארוך ולא גוץ ולא קטן ולא אלם ולא צחור ולא גיחור ולא חכם ולא טפש: אני האשה הנצבת עמכה בזה אמר ריב\"ל מכאן שאסור לישב בתוך ארבע אמות של תפלה: אל הנער הזה התפללתי א\"ר אלעזר שמואל מורה הלכה לפני רבו היה שנאמר וישחטו את הפר ויביאו את הנער אל עלי משום דוישחטו את הפר הביאו הנער אל עלי אלא אמר להן עלי קראו כהן ליתי ולשחוט חזנהו שמואל דהוו מהדרי בתר כהן למישחט אמר להו למה לכו לאהדורי בתר כהן למישחט שחיטה בזר כשרה אייתוהו לקמיה דעלי אמר ליה מנא לך הא אמר ליה מי כתיב ושחט הכהן והקריבו הכהנים כתיב מקבלה ואילך מצות כהונה מכאן לשחיטה שכשרה בזר אמר ליה מימר שפיר קא אמרת מיהו מורה הלכה בפני רבך את וכל המורה הלכה בפני רבו חייב מיתה אתיא חנה וקא צוחה קמיה אני האשה הנצבת עמכה בזה וגו' אמר לה שבקי לי דאענשיה ובעינא רחמי ויהיב לך רבא מיניה אמרה ליה אל הנער הזה התפללתי: וחנה היא מדברת על לבה אמר רבי אלעזר משום רבי יוסי בן זמרא על עסקי לבה אמרה לפניו רבונו של עולם כל מה שבראת באשה לא בראת דבר אחד לבטלה עינים לראות ואזנים לשמוע חוטם להריח פה לדבר ידים לעשות בהם מלאכה רגלים להלך בהן דדים להניק בהן דדים הללו שנתת על לבי למה לא להניק בהן תן לי בן ואניק בהן: ואמר רבי אלעזר משום רבי יוסי בן זמרא כל היושב בתענית בשבת קורעין לו גזר דינו של שבעים שנה ואף על פי כן חוזרין ונפרעין ממנו דין עונג שבת מאי תקנתיה אמר רב נחמן בר יצחק ליתיב תעניתא לתעניתא: ואמר רבי אלעזר חנה הטיחה דברים כלפי מעלה שנאמר ותתפלל על ה' מלמד שהטיחה דברים כלפי מעלה ואמר רבי אלעזר אליהו הטיח דברים כלפי מעלה שנאמר (מלכים א יח, לז) ואתה הסבות את לבם אחורנית א\"ר שמואל בר רבי יצחק מנין שחזר הקב\"ה והודה לו לאליהו",
  "rashi": [
   {
    "dh": "שצריך להודיעו",
    "text": " — הנחשד צריך לנקות את עצמו ולהודיע את חושדו שאין בו אותו דבר מגונה:"
   },
   {
    "dh": "לפני בת בליעל",
    "text": " — אל תתנני כבת בליעל לחשדני בשכרות:"
   },
   {
    "dh": "ואסתתר",
    "text": " — אתייחד עם אחרים ויחשדני בעלי:"
   },
   {
    "dh": "פלסתר",
    "text": " — שקר:"
   },
   {
    "dh": "שלש אמתות",
    "text": " — דריש להו לשון מיתה:"
   },
   {
    "dh": "בדקי מיתה",
    "text": " — שהאשה נבדקת בהן בשעת הסכנה שאם ימצא בה אחד מהם תמות:"
   },
   {
    "dh": "נדה וחלה והדלקת נר",
    "text": " — של שבת על ג' עברות הללו נשים מתות וטעמא יליף במסכת שבת (ד' לא:):"
   },
   {
    "dh": "שמובלע בין אנשים",
    "text": " — רב דימי מפרש לה לא ארוך ולא גוץ וכו':"
   },
   {
    "dh": "אלם",
    "text": " — פי' עב:"
   },
   {
    "dh": "צחור",
    "text": " — רו\"ש בלע\"ז:"
   },
   {
    "dh": "גיחור",
    "text": " — שהוא לבן יותר מדאי:"
   },
   {
    "dh": "ולא חכם",
    "text": " — יותר מדאי שלא יהיה תימה בעיני הבריות ומתוך שנדברין בו שולטת בו עין הרע:"
   },
   {
    "dh": "הנצבת עמכה",
    "text": " — משמע אף הוא עמה בעמידה:"
   },
   {
    "dh": "אל הנער הזה",
    "text": " — על זה ולא לאחר מכאן שחטא לעלי ורצה לענשו ולהתפלל שינתן לה בן אחר:"
   },
   {
    "dh": "והקריבו הכהנים",
    "text": " — אמרו בפרק קמא דחגיגה (ד' יא.) והקריבו זה קבלת הדם:"
   },
   {
    "dh": "של שבעים שנה",
    "text": " — כלומר אפילו נגזר עליו מנעוריו לפי שתענית קשה בשבת לפי שהכל מתענגים בו והוא מתענה:"
   },
   {
    "dh": "תעניתא לתעניתא",
    "text": " — יתענה למחר:"
   },
   {
    "dh": "ותתפלל על ה'",
    "text": " — כך כתוב הוא במקרא ולא גרסינן הכא אל תקרי:"
   },
   {
    "dh": "שחזר והודה לאליהו",
    "text": " — לדבריו הודה לאחר זמן בנבואת נביאים אחרים:"
   }
  ],
  "tosafot": [
   {
    "dh": "דבר שאינו הגון",
    "text": " — פירוש אע\"ג דליכא איסורא דאורייתא דאי איכא איסורא דאורייתא פשיטא הוכח תוכיח כתיב (ויקרא י״ט:י״ז):"
   },
   {
    "dh": "גברא בגוברין",
    "text": " — פי' אדם שיהא חשוב לימנות בין אנשים:",
    "en": "Hence it is deduced that it is forbidden to sit within four cubits of one engaged in prayer – whether in front of them, behind them or on the side of them. The Teshuvat Geonim explain that that this is only if one is sitting idly, but if they are engaged in the recitation of Shema or something similar, even if they are sitting it is okay."
   },
   {
    "dh": "[עמכה]",
    "text": " — עמך משמע בתוך ארבע אמות משום דכתיב עמכה מלא בה\"א כלומר שלא היה יושב בתוך ארבע אמות שלה כי אם בחמישית:"
   },
   {
    "dh": "מכאן שאסור לישב בד' אמות של תפלה",
    "text": " — בין מלפניו (בין מלאחריו) ובין מן הצדדין ופירשו תשובת הגאונים דוקא ביושב ובטל אבל אם היה עוסק בק\"ש ובברכותיה וכיוצא בהם אפילו יושב שפיר דמי:"
   },
   {
    "dh": "מורה הלכה בפני רבך את",
    "text": " — ואף ע\"פ שלא למד עדיין בפניו מ\"מ גדול הדור היה ובא ללמוד לפניו:"
   },
   {
    "dh": "כל היושב בתענית בשבת",
    "text": " — פירש ר\"ח בתענית חלום וכן איתא במדרש תהלים וכשיושב בתענית חלום בשבת פי' בה\"ג שאומר עננו באלהי נצור ואפילו קובע ברכה לעצמו כיון שאינו בתוך י\"ח:"
   }
  ],
  "translations": []
 },
 {
  "id": "32a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לב",
  "amud": "א",
  "dafEn": "32a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "דכתיב (מיכה ד, ו) ואשר הרעותי: אמר רבי חמא ברבי חנינא אלמלא שלש מקראות הללו נתמוטטו רגליהם של שונאי ישראל חד דכתיב ואשר הרעותי וחד דכתיב (ירמיהו יח, ו) הנה כחומר ביד היוצר כן אתם בידי בית ישראל וחד דכתיב (יחזקאל לו, כו) והסירותי את לב האבן מבשרכם ונתתי לכם לב בשר רב פפא אמר מהכא (יחזקאל לו, כז) ואת רוחי אתן בקרבכם ועשיתי את אשר בחקי תלכו ואמר רבי אלעזר משה הטיח דברים כלפי מעלה שנאמר (במדבר יא, ב) ויתפלל משה אל ה' אל תקרי אל ה' אלא על ה' שכן דבי רבי אליעזר בן יעקב קורין לאלפין עיינין ולעיינין אלפין דבי רבי ינאי אמרי מהכא (דברים א, א) ודי זהב מאי ודי זהב אמרי דבי ר' ינאי כך אמר משה לפני הקב\"ה רבונו של עולם בשביל כסף וזהב שהשפעת להם לישראל עד שאמרו די הוא גרם שעשו את העגל אמרי דבי ר' ינאי אין ארי נוהם מתוך קופה של תבן אלא מתוך קופה של בשר אמר רבי אושעיא משל לאדם שהיתה לו פרה כחושה ובעלת אברים האכילה כרשינין והיתה מבעטת בו אמר לה מי גרם ליך שתהא מבעטת בי אלא כרשינין שהאכלתיך אמר רבי חייא בר אבא אמר ר' יוחנן משל לאדם אחד שהיה לו בן הרחיצו וסכו והאכילו והשקהו ותלה לו כיס על צוארו והושיבו על פתח של זונות מה יעשה אותו הבן שלא יחטא אמר רב אחא בריה דרב הונא אמר רב ששת היינו דאמרי אינשי מלי כריסיה זני בישי שנאמר (הושע יג, ו) כמרעיתם וישבעו שבעו וירם לבם על כן שכחוני רב נחמן אמר מהכא (דברים ח, יד) ורם לבבך ושכחת את ה' ורבנן אמרי מהכא (דברים לא, כ) ואכל ושבע ודשן ופנה ואי בעית אימא מהכא (דברים לב, טו) וישמן ישרון ויבעט אמר רבי שמואל בר נחמני אמר רבי יונתן מנין שחזר הקדוש ברוך הוא והודה לו למשה שנאמר (הושע ב, י) וכסף הרביתי להם וזהב עשו לבעל: (שמות לב, ז) וידבר ה' אל משה לך רד מאי לך רד אמר רבי אלעזר אמר לו הקדוש ב\"ה למשה משה רד מגדולתך כלום נתתי לך גדולה אלא בשביל ישראל ועכשיו ישראל חטאו אתה למה לי מיד תשש כחו של משה ולא היה לו כח לדבר וכיון שאמר (דברים ט, יד) הרף ממני ואשמידם אמר משה דבר זה תלוי בי מיד עמד ונתחזק בתפלה ובקש רחמים משל למלך שכעס על בנו והיה מכהו מכה גדולה והיה אוהבו יושב לפניו ומתירא לומר לו דבר אמר המלך אלמלא אוהבי זה שיושב לפני הרגתיך אמר דבר זה תלוי בי מיד עמד והצילו: (שמות לב, י) ועתה הניחה לי ויחר אפי בהם ואכלם ואעשה אותך לגוי גדול וגו' אמר רבי אבהו אלמלא מקרא כתוב אי אפשר לאומרו מלמד שתפסו משה להקדוש ברוך הוא כאדם שהוא תופס את חבירו בבגדו ואמר לפניו רבונו של עולם אין אני מניחך עד שתמחול ותסלח להם: (שמות לב, י) ואעשה אותך לגוי גדול וגו' אמר רבי אלעזר אמר משה לפני הקדוש ב\"ה רבונו של עולם ומה כסא של שלש רגלים אינו יכול לעמוד לפניך בשעת כעסך כסא של רגל אחד על אחת כמה וכמה ולא עוד אלא שיש בי בושת פנים מאבותי עכשיו יאמרו ראו פרנס שהעמיד עליהם בקש גדולה לעצמו ולא בקש עליהם רחמים: (שמות לב, יא) ויחל משה את פני ה' אמר רבי אלעזר מלמד שעמד משה בתפלה לפני הקדוש ברוך הוא עד שהחלהו ורבא אמר עד שהפר לו נדרו כתיב הכא ויחל וכתיב התם (במדבר ל, ג) לא יחל דברו ואמר מר הוא אינו מיחל אבל אחרים מחלין לו ושמואל אמר מלמד שמסר עצמו למיתה עליהם שנאמר (שמות לב, לב) ואם אין מחני נא מספרך אמר רבא אמר רב יצחק מלמד שהחלה עליהם מדת רחמים ורבנן אמרי מלמד שאמר משה לפני הקב\"ה רבש\"ע חולין הוא לך מעשות כדבר הזה ויחל משה את פני ה' תניא רבי אליעזר הגדול אומר מלמד שעמד משה בתפלה לפני הקדוש ברוך הוא עד שאחזתו אחילו מאי אחילו אמר רבי אלעזר אש של עצמות מאי אש של עצמות אמר אביי אשתא דגרמי (שמות לב, יג) זכור לאברהם ליצחק ולישראל עבדיך אשר נשבעת להם בך מאי בך אמר רבי אלעזר אמר משה לפני הקדוש ב\"ה רבונו של עולם אלמלא נשבעת להם בשמים ובארץ הייתי אומר כשם ששמים וארץ בטלים כך שבועתך בטלה ועכשיו שנשבעת להם בשמך הגדול מה שמך הגדול חי וקיים לעולם ולעולמי עולמים כך שבועתך קיימת לעולם ולעולמי עולמים: (שמות לב, יג) ותדבר אליהם ארבה את זרעכם ככוכבי השמים וכל הארץ הזאת אשר אמרתי האי אשר אמרתי אשר אמרת מיבעי ליה אמר רבי אלעזר עד כאן דברי תלמיד מכאן ואילך דברי הרב ורבי שמואל בר נחמני אמר אלו ואלו דברי תלמיד אלא כך אמר משה לפני הקדוש ברוך הוא רבונו של עולם דברים שאמרת לי לך אמור להם לישראל בשמי הלכתי ואמרתי להם בשמך עכשיו מה אני אומר להם: (במדבר יד, טז) מבלתי יכולת ה' יכול ה' מיבעי ליה אמר רבי אלעזר אמר משה לפני הקב\"ה רבש\"ע עכשיו יאמרו אומות העולם תשש כחו כנקבה ואינו יכול להציל אמר הקב\"ה למשה והלא כבר ראו נסים וגבורות שעשיתי להם על הים אמר לפניו רבונו של עולם עדיין יש להם לומר למלך אחד יכול לעמוד לשלשים ואחד מלכים אינו יכול לעמוד אמר ר' יוחנן מנין שחזר הקדוש ברוך הוא והודה לו למשה שנאמר (במדבר יד, כ) ויאמר ה' סלחתי כדברך תני דבי רבי ישמעאל כדבריך עתידים אוה\"ע לומר כן אשרי תלמיד שרבו מודה לו (במדבר יד, כא) ואולם חי אני אמר רבא אמר רב יצחק מלמד שאמר לו הקדוש ב\"ה למשה משה החייתני בדבריך: דרש רבי שמלאי לעולם יסדר אדם שבחו של הקב\"ה ואחר כך יתפלל מנלן ממשה דכתיב (דברים ג, כג) ואתחנן אל ה' בעת ההיא וכתיב ה' אלהים אתה החלות להראות את עבדך את גדלך ואת ידך החזקה אשר מי אל בשמים ובארץ אשר יעשה כמעשיך וכגבורותיך וכתיב בתריה אעברה נא ואראה את הארץ הטובה וגו': (סימן מעשי\"ם צדק\"ה קרב\"ן כה\"ן תעני\"ת מנע\"ל ברז\"ל):",
  "rashi": [
   {
    "dh": "דכתיב ואשר הרעותי",
    "text": " — רישא דקרא אוספה הצולעה והנדחה אקבצה ואשר הרעותי אני גרמתי להם שבראתי יצר הרע:",
    "en": "\"A lion does not roar\" – [unless] it is satisfied [ie full of meat], agitated, and causing harm."
   },
   {
    "dh": "אלמלא שלש מקראות הללו",
    "text": " — שמעידין שיש ביד הקדוש ברוך הוא לתקן יצרנו ולהסיר יצר הרע ממנו:",
    "en": "\"'The filling of his belly [is of] evil kinds' - filling of the belly is among the types of evil sins. 'Kinds' (zanei) is translated [in Aramaic] as 'according to its kind' (leminehu liznohi, Genesis 1)\""
   },
   {
    "dh": "נתמוטטו",
    "text": " — רגלינו במשפט אבל עכשיו יש לנו פתחון פה שהוא גרם לנו שברא יצר הרע:"
   },
   {
    "dh": "הטיח",
    "text": " — לשון זריקה כמו כמטחוי קשת (בראשית כא):"
   },
   {
    "dh": "אין ארי נוהם",
    "text": " — שמח ומשתגע ומזיק:"
   },
   {
    "dh": "מלי כריסיה זני בישי",
    "text": " — מילוי הכרס הוא ממיני חטאים הרעים. זני מתרגמינן למינהו לזנוהי (בראשית א):"
   },
   {
    "dh": "הרף ממני",
    "text": " — הראהו שיש כח בידו למחול ע\"י תפלה:"
   },
   {
    "dh": "הניחה לי",
    "text": " — משמע שהיה אוחז בו:"
   },
   {
    "dh": "שלש רגלים",
    "text": " — אברהם יצחק ויעקב:"
   },
   {
    "dh": "שהחלהו",
    "text": " — הפציר בו אנויי\"ר בלע\"ז:"
   },
   {
    "dh": "נדרו",
    "text": " — דבורו שאמר ואכלם:"
   },
   {
    "dh": "שמסר עצמו למיתה",
    "text": " — ויחל לשון חלל:"
   },
   {
    "dh": "שהחלה עליהם מדת רחמים",
    "text": " — כמו יחולו על ראש יואב (שמואל ב ג׳:כ״ט) לשון הניח:"
   },
   {
    "dh": "שאחזתו אחילו גרס",
    "text": ""
   },
   {
    "dh": "אשתא דגרמי",
    "text": " — מוליי\"ר בלע\"ז:"
   },
   {
    "dh": "אשר נשבעת להם בך",
    "text": " — שנאמר בעקדת יצחק בי נשבעתי (בראשית כב):"
   },
   {
    "dh": "עד כאן",
    "text": " — עד ככוכבי השמים:"
   },
   {
    "dh": "מכאן ואילך דברי הרב",
    "text": " — אמר לו אעשה כדבריך:"
   },
   {
    "dh": "דברים שאמרת לי",
    "text": " — בסנה אמרת לי אעלה אתכם מעני מצרים אל ארץ טובה ורחבה (שמות ג׳:י״ז):"
   },
   {
    "dh": "החייתני",
    "text": " — בפני האומות:"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "32b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לב",
  "amud": "ב",
  "dafEn": "32b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אמר ר' אלעזר גדולה תפלה יותר ממעשים טובים שאין לך גדול במעשים טובים יותר ממשה רבינו אעפ\"כ לא נענה אלא בתפלה שנאמר (דברים ג, כו) אל תוסף דבר אלי וסמיך ליה עלה ראש הפסגה: וא\"ר אלעזר גדולה תענית יותר מן הצדקה מאי טעמא זה בגופו וזה בממונו: וא\"ר אלעזר גדולה תפלה יותר מן הקרבנות שנא' (ישעיהו א, יא) למה לי רוב זבחיכם וכתיב ובפרשכם כפיכם א\"ר יוחנן כל כהן שהרג את הנפש לא ישא את כפיו שנא' (ישעיהו א, טו) ידיכם דמים מלאו: וא\"ר אלעזר מיום שחרב בית המקדש ננעלו שערי תפלה שנאמר (איכה ג, ח) גם כי אזעק ואשוע שתם תפלתי ואע\"פ ששערי תפלה ננעלו שערי דמעה לא ננעלו שנאמר (תהלים לט, יג) שמעה תפלתי ה' ושועתי האזינה אל דמעתי אל תחרש רבא לא גזר תעניתא ביומא דעיבא משום שנא' (איכה ג, מד) סכותה בענן לך מעבור תפלה: וא\"ר אלעזר מיום שחרב בית המקדש נפסקה חומת ברזל בין ישראל לאביהם שבשמים שנא' (יחזקאל ד, ג) ואתה קח לך מחבת ברזל ונתתה אותה קיר ברזל בינך ובין העיר: א\"ר חנין א\"ר חנינא כל המאריך בתפלתו אין תפלתו חוזרת ריקם מנא לן ממשה רבינו שנא' (דברים ט, כו) ואתפלל אל ה' וכתיב בתריה וישמע ה' אלי גם בפעם ההיא איני והא א\"ר חייא בר אבא א\"ר יוחנן כל המאריך בתפלתו ומעיין בה סוף בא לידי כאב לב שנא' (משלי יג, יב) תוחלת ממושכה מחלה לב מאי תקנתיה יעסוק בתורה שנא' (משלי יג, יב) ועץ חיים תאוה באה ואין עץ חיים אלא תורה שנאמר (משלי ג, יח) עץ חיים היא למחזיקים בה לא קשיא הא דמאריך ומעיין בה הא דמאריך ולא מעיין בה א\"ר חמא בר' חנינא אם ראה אדם שהתפלל ולא נענה יחזור ויתפלל שנאמר (תהלים כז, יד) קוה אל ה' חזק ויאמץ לבך וקוה אל ה': ת\"ר ארבעה צריכין חזוק ואלו הן תורה ומעשים טובים תפלה ודרך ארץ תורה ומעשים טובים מנין שנא' (יהושע א, ז) רק חזק ואמץ מאד לשמור ולעשות ככל התורה חזק בתורה ואמץ במעשים טובים תפלה מנין שנא' קוה אל ה' חזק ויאמץ לבך וקוה אל ה' דרך ארץ מנין שנא' (שמואל ב י, יב) חזק ונתחזק בעד עמנו וגו': (ישעיהו מט, יד) ותאמר ציון עזבני ה' וה' שכחני היינו עזובה היינו שכוחה אמר ר\"ל אמרה כנסת ישראל לפני הקב\"ה רבש\"ע אדם נושא אשה על אשתו ראשונה זוכר מעשה הראשונה אתה עזבתני ושכחתני אמר לה הקב\"ה בתי י\"ב מזלות בראתי ברקיע ועל כל מזל ומזל בראתי לו שלשים חיל ועל כל חיל וחיל בראתי לו שלשים לגיון ועל כל לגיון ולגיון בראתי לו שלשים רהטון ועל כל רהטון ורהטון בראתי לו שלשים קרטון ועל כל קרטון וקרטון בראתי לו שלשים גסטרא ועל כל גסטרא וגסטרא תליתי בו שלש מאות וששים וחמשה אלפי רבוא כוכבים כנגד ימות החמה וכולן לא בראתי אלא בשבילך ואת אמרת עזבתני ושכחתני (ישעיהו מט, טו) התשכח אשה עולה אמר הקב\"ה כלום אשכח עולות אילים ופטרי רחמים שהקרבת לפני במדבר אמרה לפניו רבש\"ע הואיל ואין שכחה לפני כסא כבודך שמא לא תשכח לי מעשה העגל אמר לה (ישעיהו מט, טו) גם אלה תשכחנה אמרה לפניו רבש\"ע הואיל ויש שכחה לפני כסא כבודך שמא תשכח לי מעשה סיני אמר לה (ישעיהו מט, טו) ואנכי לא אשכחך והיינו דא\"ר אלעזר א\"ר אושעיא מאי דכתיב גם אלה תשכחנה זה מעשה העגל ואנכי לא אשכחך זה מעשה סיני: חסידים הראשונים היו שוהין שעה אחת: מנא הני מילי א\"ר יהושע ב\"ל אמר קרא (תהלים פד, ה) אשרי יושבי ביתך ואמר ר' יהושע ב\"ל המתפלל צריך לשהות שעה אחת אחר תפלתו שנא' (תהלים קמ, יד) אך צדיקים יודו לשמך ישבו ישרים את פניך תניא נמי הכי המתפלל צריך שישהא שעה אחת קודם תפלתו ושעה אחת אחר תפלתו קודם תפלתו מנין שנא' אשרי יושבי ביתך לאחר תפלתו מנין דכתיב אך צדיקים יודו לשמך ישבו ישרים את פניך תנו רבנן חסידים הראשונים היו שוהין שעה אחת ומתפללין שעה אחת וחוזרין ושוהין שעה אחת וכי מאחר ששוהין תשע שעות ביום בתפלה תורתן היאך משתמרת ומלאכתן היאך נעשית אלא מתוך שחסידים הם תורתם משתמרת ומלאכתן מתברכת: אפילו המלך שואל בשלומו לא ישיבנו: אמר רב יוסף לא שנו אלא למלכי ישראל אבל למלכי עכו\"ם פוסק מיתיבי המתפלל וראה אנס בא כנגדו ראה קרון בא כנגדו לא יהא מפסיק אלא מקצר ועולה לא קשיא הא דאפשר לקצר (יקצר ואם לאו פוסק) ת\"ר מעשה בחסיד אחד שהיה מתפלל בדרך בא שר אחד ונתן לו שלום ולא החזיר לו שלום המתין לו עד שסיים תפלתו לאחר שסיים תפלתו א\"ל ריקא והלא כתוב בתורתכם (דברים ד, ט) רק השמר לך ושמור נפשך וכתיב (דברים ד, טו) ונשמרתם מאד לנפשותיכם כשנתתי לך שלום למה לא החזרת לי שלום אם הייתי חותך ראשך בסייף מי היה תובע את דמך מידי א\"ל המתן לי עד שאפייסך בדברים א\"ל אילו היית עומד לפני מלך בשר ודם ובא חברך ונתן לך שלום היית",
  "rashi": [
   {
    "dh": "עלה ראש הפסגה",
    "text": " — בדבר תפלה זו נתרציתי להראותך אותה:",
    "en": "Need strengthening- That a person should always strengthen them with all his might."
   },
   {
    "dh": "ובפרשכם כפיכם",
    "text": " — אי לאו דגדולה תפלה כיון דאמר למה לי רוב זבחיכם למה לי תו ובפרשכם הא אפילו זבחיהם לא ניחא ליה:",
    "en": "The way of the land- If he is an artist, in his art. If he is a merchant, in his sales, and if he is a warrior, in his wars."
   },
   {
    "dh": "אל תחרש",
    "text": " — מדלא כתיב את דמעתי תראה ש\"מ נראית היא לפניו ואין צריך להתפלל אלא שתתקבל לפניו:",
    "en": "Olah- Like Olah offerings and sacrifices."
   },
   {
    "dh": "ונתתה אותה קיר ברזל",
    "text": " — סימן למחיצת ברזל המפסקת בינו לבינם:"
   },
   {
    "dh": "ומעיין בה",
    "text": " — מצפה שתעשה בקשתו על ידי הארכתו סוף שאינה נעשית ונמצאת תוחלת ממושכה חנם והיא כאב לב כשאדם מצפה ואין תאותו באה:"
   },
   {
    "dh": "תוחלת",
    "text": " — לשון חלוי ותחנה:"
   },
   {
    "dh": "ועץ חיים תאוה באה",
    "text": " — סופו של מקרא הוא:"
   },
   {
    "dh": "קוה",
    "text": " — והתחזק ולא תמשוך ידך אלא חזור וקוה:"
   },
   {
    "dh": "צריכין חזוק",
    "text": " — שיתחזק אדם בהן תמיד בכל כחו:"
   },
   {
    "dh": "דרך ארץ",
    "text": " — אם אומן הוא לאומנתו אם סוחר הוא לסחורתו אם איש מלחמה הוא למלחמתו:"
   },
   {
    "dh": "שלשים חיל",
    "text": " — ראשי גייסות וחבורות חלוקות:"
   },
   {
    "dh": "לגיון וקרטון וגסטרא",
    "text": " — שמות של שררה כגון שלטון והגמון ודוכס ופחה:"
   },
   {
    "dh": "עולה",
    "text": " — כמו עולות וקרבנות:"
   },
   {
    "dh": "גם אלה",
    "text": " — מעשה העגל שאמרו אלה אלהיך ישראל (שמות ל״ב:ד׳):"
   },
   {
    "dh": "ואנכי זה מעשה סיני",
    "text": " — שנאמר בו אנכי ה' אלהיך (שמות כ׳:ב׳):"
   },
   {
    "dh": "יושבי ביתך",
    "text": " — והדר יהללוך:"
   },
   {
    "dh": "יודו לשמך",
    "text": " — והדר ישבו ישרים את פניך:"
   },
   {
    "dh": "תשע שעות",
    "text": " — לשלש תפלות:"
   },
   {
    "dh": "תורתם משתמרת",
    "text": " — בתוך לבם שאין תלמודם משתכח:"
   },
   {
    "dh": "אבל למלכי עכו\"ם פוסק",
    "text": " — שלא יהרגנו:"
   },
   {
    "dh": "הא דאפשר בקצור",
    "text": " — כגון שסמוך לגמור תפלתו:"
   }
  ],
  "tosafot": [
   {
    "dh": "גדולה תפלה יותר ממעשים טובים",
    "text": " — בלא תפלה שהרי משה רבינו ע\"ה אף על פי שהיו בידו מעשים טובים הוצרך לתפלה:"
   },
   {
    "dh": "אל דמעתי אל תחרש",
    "text": " — פרש\"י דדייק מדיוקא מדלא קאמר ודמעתי תראה ש\"מ שהיא נראית בכל פעם ואין להתפלל רק שתתקבל:"
   },
   {
    "dh": "כל המאריך בתפלתו ומעיין בה",
    "text": " — פירוש שמצפה שתבא בקשתו לפי שכוון בתפלתו. תימה דהכא משמע דעיון תפלה לאו מעליותא הוא וכן משמע פ' הרואה (לקמן ברכות נה.) ג' דברים מזכירין עונותיו של אדם וקאמר עיון תפלה. ולא כן משמע בפ' מפנין (שבת קכז.) דקאמר אדם אוכל פירותיהן בעוה\"ז וקא חשיב עיון תפלה אלמא מעליותא הוא וכן משמע בגט פשוט (ב\"ב קסד:) דקאמר משלשה דברים אין אדם ניצול בכל יום וקאמר עיון תפלה פירוש שאין אדם מעיין בה אם כן משמע שהוא טוב וי\"ל דתרי עיון תפלה יש עיון תפלה דהכא המצפה שתבא בקשתו ועיון תפלה דהתם שמכוין את לבו לתפלה:"
   },
   {
    "dh": "קודם תפלתו מנין שנא' אשרי יושבי ביתך",
    "text": " — ולפיכך תקנו לומר זה הפסוק קודם תהלה לדוד לאפוקי מהנהו דאמרי אשרי הרבה:"
   }
  ],
  "translations": []
 },
 {
  "id": "33a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לג",
  "amud": "א",
  "dafEn": "33a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "מחזיר לו א\"ל לאו ואם היית מחזיר לו מה היו עושים לך א\"ל היו חותכים את ראשי בסייף א\"ל והלא דברים ק\"ו ומה אתה שהיית עומד לפני מלך בשר ודם שהיום כאן ומחר בקבר כך אני שהייתי עומד לפני מלך מלכי המלכים הקב\"ה שהוא חי וקיים לעד ולעולמי עולמים על אחת כמה וכמה מיד נתפייס אותו השר ונפטר אותו חסיד לביתו לשלום: אפי' נחש כרוך על עקבו לא יפסיק: אמר רב ששת לא שנו אלא נחש אבל עקרב פוסק מיתיבי נפל לגוב אריות אין מעידין עליו שמת נפל לחפירה מלאה נחשים ועקרבים מעידין עליו שמת שאני התם דאגב איצצא מזקי א\"ר יצחק ראה שוורים פוסק דתני רב אושעיא מרחיקין משור תם חמשים אמה ומשור מועד כמלא עיניו תנא משמיה דר' מאיר ריש תורא בדקולא סליק לאגרא ושדי דרגא מתותך אמר שמואל הני מילי בשור שחור וביומי ניסן מפני שהשטן מרקד לו בין קרניו ת\"ר מעשה במקום אחד שהיה ערוד והיה מזיק את הבריות באו והודיעו לו לר' חנינא בן דוסא אמר להם הראו לי את חורו הראוהו את חורו נתן עקבו על פי החור יצא ונשכו ומת אותו ערוד נטלו על כתפו והביאו לבית המדרש אמר להם ראו בני אין ערוד ממית אלא החטא ממית באותה שעה אמרו אוי לו לאדם שפגע בו ערוד ואוי לו לערוד שפגע בו ר' חנינא בן דוסא:  מזכירין גבורות גשמים בתחיית המתים ושאלה בברכת השנים והבדלה בחונן הדעת ר\"ע אומר אומרה ברכה רביעית בפני עצמה רבי אליעזר אומר בהודאה: גמ׳ מזכירין גבורות גשמים מאי טעמא אמר רב יוסף מתוך ששקולה כתחיית המתים לפיכך קבעוה בתחיית המתים ושאלה בברכת השנים מאי טעמא אמר רב יוסף מתוך שהיא פרנסה לפיכך קבעוה בברכת פרנסה הבדלה בחונן הדעת מ\"ט א\"ר יוסף מתוך שהיא חכמה קבעוה בברכת חכמה ורבנן אמרי מתוך שהיא חול לפיכך קבעוה בברכת חול א\"ר אמי גדולה דעה שנתנה בתחלת ברכה של חול וא\"ר אמי גדולה דעה שנתנה בין שתי אותיות שנאמר (שמואל א ב, ג) כי אל דעות ה' וכל מי שאין בו דעה אסור לרחם עליו שנאמר (ישעיהו כז, יא) כי לא עם בינות הוא על כן לא ירחמנו עושהו אמר רבי אלעזר גדול מקדש שנתן בין ב' אותיות שנאמר (שמות טו, יז) פעלת ה' מקדש ה' וא\"ר אלעזר כל אדם שיש בו דעה כאילו נבנה בית המקדש בימיו דעה נתנה בין שתי אותיות מקדש נתן בין שתי אותיות מתקיף לה רב אחא קרחינאה אלא מעתה גדולה נקמה שנתנה בין שתי אותיות שנאמר (תהלים צד, א) אל נקמות ה' אמר ליה אין במילתה מיהא גדולה היא והיינו דאמר עולא שתי נקמות הללו למה אחת לטובה ואחת לרעה לטובה דכתיב (דברים לג, ב) הופיע מהר פארן לרעה דכתיב אל נקמות ה' אל נקמות הופיע: רבי עקיבא אומר אומרה ברכה רביעית כו': א\"ל רב שמן בר אבא לר' יוחנן מכדי אנשי כנסת הגדולה תקנו להם לישראל ברכות ותפלות קדושות והבדלות נחזי היכן תקון א\"ל בתחלה קבעוה בתפלה העשירו קבעוה על הכוס הענו חזרו וקבעוה בתפלה והם אמרו המבדיל בתפלה צריך שיבדיל על הכוס איתמר נמי אמר ר' חייא בר אבא אמר רבי יוחנן אנשי כנסת הגדולה תקנו להם לישראל ברכות ותפלות קדושות והבדלות בתחלה קבעוה בתפלה העשירו קבעוה על הכוס חזרו והענו קבעוה בתפלה והם אמרו המבדיל בתפלה צריך שיבדיל על הכוס איתמר נמי רבה ורב יוסף דאמרי תרוייהו המבדיל בתפלה צריך שיבדיל על הכוס אמר רבא ומותבינן אשמעתין טעה ולא הזכיר גבורות גשמים בתחיית המתים ושאלה בברכת השנים מחזירין אותו והבדלה בחונן הדעת אין מחזירין אותו מפני שיכול לאומרה על הכוס לא תימא מפני שיכול לאומרה על הכוס אלא אימא מפני שאומרה על הכוס איתמר נמי אמר רבי בנימין בר יפת שאל ר' יוסי את ר' יוחנן בצידן ואמרי לה ר' שמעון בן יעקב דמן צור את ר' יוחנן ואנא שמעית המבדיל בתפלה צריך שיבדיל על הכוס או לא ואמר ליה צריך שיבדיל על הכוס איבעיא להו המבדיל על הכוס מהו שיבדיל בתפילה אמר רב נחמן בר יצחק קל וחומר מתפלה ומה תפלה דעיקר תקנתא היא אמרי המבדיל בתפלה צריך שיבדיל על הכוס המבדיל על הכוס דלאו עיקר תקנתא היא לא כ\"ש תני ר' אחא אריכא קמיה דרב חיננא המבדיל בתפלה משובח יותר ממי שיבדיל על הכוס ואם הבדיל בזו ובזו ינוחו לו ברכות על ראשו הא גופא קשיא אמרת המבדיל בתפלה משובח יותר ממי שיבדיל על הכוס אלמא תפלה לחודה סגי והדר תני אם הבדיל בזו ובזו ינוחו לו ברכות על ראשו וכיון דנפיק ליה בחדא אפטר והויא ברכה שאינה צריכה ואמר רב ואיתימא ר\"ל ואמרי לה ר' יוחנן ור\"ל דאמרי תרוייהו כל המברך ברכה שאינה צריכה עובר משום (שמות כ, ו) לא תשא אלא אימא הכי אם הבדיל בזו ולא הבדיל בזו ינוחו לו ברכות על ראשו בעא מיניה רב חסדא מרב ששת טעה בזו ובזו מהו אמר ליה טעה בזו ובזו חוזר לראש",
  "rashi": [
   {
    "dh": "אבל עקרב פוסק",
    "text": " — ונוטלו לפי שהעקרב מסוכן לעקוץ יותר משנחש מוכן לישוך:"
   },
   {
    "dh": "אין מעידין עליו",
    "text": " — לומר לאשתו מת בעליך להתירה לינשא פעמים שאין האריות רעבים ואין אוכלין אותו:"
   },
   {
    "dh": "נחשים ועקרבים",
    "text": " — או זה או זה מעידים עליו שמת אלמא מועד הנחש לישוך:"
   },
   {
    "dh": "אגב איצצא",
    "text": " — כשנפל עליהם ודחקם הזיקוהו:"
   },
   {
    "dh": "שור תם",
    "text": " — שלא נגח אדם:"
   },
   {
    "dh": "מועד",
    "text": " — שנגח ג' פעמים:"
   },
   {
    "dh": "בדקולא",
    "text": " — סל שתולין בו תבן בראשו ואוכל:"
   },
   {
    "dh": "ושדי דרגא",
    "text": " — לאו דוקא אלא כלומר הזהר ממנו הרבה:"
   },
   {
    "dh": "ביומי ניסן",
    "text": " — מתוך שעברו ימי הסתיו שהארץ יבשה ועכשיו רואה אותה מלאה דשאים זחה דעתו עליו ונכנס בו יצר הרע:"
   },
   {
    "dh": "ערוד",
    "text": " — מן הנחש והצב בא שנזקקין זה עם זה ויוצא משניהם ערוד:"
   },
   {
    "dh": "את חורו",
    "text": " — שהוא יוצא משם:"
   },
   {
    "dh": "ומת הערוד",
    "text": " — מצאתי בה\"ג אמרי במערבא כשהערוד נושך את האדם אם הערוד קודם למים מת האדם ואם האדם קודם למים מת הערוד ונעשה נס לר' חנינא ונקבע מעין מתחת עקבו:"
   },
   {
    "dh": "מתני' מזכירין גבורות גשמים",
    "text": " — משיב הרוח שאינו לשון בקשה אלא לשון הזכרה ושבח:"
   },
   {
    "dh": "ושואלין",
    "text": " — ותן טל ומטר לשון בקשה:"
   },
   {
    "dh": "והבדלה בחונן הדעת",
    "text": " — במוצאי שבת אתה חוננתנו:"
   },
   {
    "dh": "גמ' מתוך שהיא חכמה",
    "text": " — החכם יודע להבדיל בין קדש לחול ובין טמא לטהור:"
   },
   {
    "dh": "בין שתי אותיות",
    "text": " — בין שתי הזכרות:"
   },
   {
    "dh": "במילתה מיהא גדולה היא",
    "text": " — במקום שצריכה נקמה דבר גדול הוא:"
   },
   {
    "dh": "שתי נקמות הללו למה",
    "text": " — אחת לרעה להנקם מן העכו\"ם שלא קבלו את התורה:"
   },
   {
    "dh": "ואחת לטובה",
    "text": " — כדאמרינן בב\"ק (דף לח.) מפארן הופיע והפקיר ממונן לישראל שור של ישראל שנגח שור של עכו\"ם פטור:"
   },
   {
    "dh": "הופיע",
    "text": " — גלה והפקיר כשלא קבלו את התורה:"
   },
   {
    "dh": "קדושות",
    "text": " — קדוש היום:"
   },
   {
    "dh": "בתחלה",
    "text": " — כשעלו מן הגולה והיו דחוקים:"
   },
   {
    "dh": "העשירו",
    "text": " — לקנות יין:"
   },
   {
    "dh": "קבעוה על הכוס",
    "text": " — ואז נשתכח תקנת עזרא וכשחזרו והענו קבעוה בתפלה ונחלקו היאך יאמרוה:"
   },
   {
    "dh": "מפני שיכול",
    "text": " — משמע אם ירצה שלא לחזור ולהתפלל הא אם אמרה בתפלה א\"צ לאומרה על הכוס:"
   },
   {
    "dh": "ואנא שמעית",
    "text": " — אני שמעתי:"
   },
   {
    "dh": "חוזר לראש",
    "text": " — לתפלה ולכוס:"
   }
  ],
  "tosafot": [
   {
    "dh": "אבל עקרב פוסק",
    "text": " — בירושלמי קאמר דאם היה נחש מרתיע לבא כנגדו פוסק לפי שבא כנגדו בכעס מתכוין להזיקו ומיהו לא מצינו אם פסק שיחזור לראש מדלא קאמר ואם פסק חוזר לראש אבל לתחלת ברכה מיהא יחזור ואם טעה בג' ראשונות או בג' אחרונות חוזר לתחלת הג' באבות בראשונות ובעבודה באחרונות כדאמרינן לקמן בפרקין (ברכות דף לד.):"
   }
  ],
  "translations": []
 },
 {
  "id": "33b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לג",
  "amud": "ב",
  "dafEn": "33b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אמר ליה רבינא לרבא הלכתא מאי אמר ליה כי קידוש מה קידוש אף על גב דמקדש בצלותא מקדש אכסא אף הבדלה נמי אע\"ג דמבדיל בצלותא מבדיל אכסא: ר' אליעזר אומר בהודאה: ר' זירא הוה רכיב חמרא הוה קא שקיל ואזיל ר' חייא בר אבין בתריה אמר ליה ודאי דאמריתו משמיה דר' יוחנן הלכה כר' אליעזר ביום טוב שחל להיות אחר השבת אמר ליה אין הלכה מכלל דפליגי ולא פליגי והא פליגי רבנן אימר דפליגי רבנן בשאר ימות השנה ביום טוב שחל להיות אחר השבת מי פליגי והא פליג ר' עקיבא אטו כל השנה כולה מי עבדינן כר' עקיבא דהשתא ניקו ונעביד כוותיה כל השנה כולה מאי טעמא לא עבדינן כרבי עקיבא דתמני סרי תקון תשסרי לא תקון הכא נמי שב תקון תמני לא תקון אמר ליה לאו הלכה אתמר אלא מטין אתמר דאתמר ר' יצחק בר אבדימי אמר משום רבינו הלכה ואמרי לה מטין ר' יוחנן אמר מודים ור' חייא בר אבא אמר נראין אמר ר' זירא נקוט דרבי חייא בר אבא בידך דדייק וגמר שמעתא מפומא דמרה שפיר כרחבא דפומבדיתא דאמר רחבא אמר ר' יהודה הר הבית סטיו כפול היה והיה סטיו לפנים מסטיו אמר רב יוסף אנא לא האי ידענא ולא האי ידענא אלא מדרב ושמואל ידענא דתקינו לן מרגניתא בבבל ותודיענו ה' אלהינו את משפטי צדקך ותלמדנו לעשות חקי רצונך ותנחילנו זמני ששון וחגי נדבה ותורישנו קדושת שבת וכבוד מועד וחגיגת הרגל בין קדושת שבת לקדושת יום טוב הבדלת ואת יום השביעי מששת ימי המעשה קדשת הבדלת וקדשת את עמך ישראל בקדושתך ותתן לנו וכו':  האומר על קן צפור יגיעו רחמיך ועל טוב יזכר שמך מודים מודים משתקין אותו: גמ׳ בשלמא מודים מודים משתקין אותו משום דמיחזי כשתי רשויות ועל טוב יזכר שמך נמי משמע על הטובה ולא על הרעה ותנן חייב אדם לברך על הרעה כשם שמברך על הטובה אלא על קן צפור יגיעו רחמיך מ\"ט פליגי בה תרי אמוראי במערבא רבי יוסי בר אבין ורבי יוסי בר זבידא חד אמר מפני שמטיל קנאה במעשה בראשית וחד אמר מפני שעושה מדותיו של הקדוש ברוך הוא רחמים ואינן אלא גזרות ההוא דנחית קמיה דרבה ואמר אתה חסת על קן צפור אתה חוס ורחם עלינו אמר רבה כמה ידע האי צורבא מרבנן לרצויי למריה א\"ל אביי והא משתקין אותו תנן ורבה נמי לחדודי לאביי הוא דבעי ההוא דנחית קמיה דר' חנינא אמר האל הגדול הגבור והנורא והאדיר והעזוז והיראוי החזק והאמיץ והודאי והנכבד המתין לו עד דסיים כי סיים א\"ל סיימתינהו לכולהו שבחי דמרך למה לי כולי האי אנן הני תלת דאמרינן אי לאו דאמרינהו משה רבינו באורייתא ואתו אנשי כנסת הגדולה ותקנינהו בתפלה לא הוינן יכולין למימר להו ואת אמרת כולי האי ואזלת משל למלך בשר ודם שהיו לו אלף אלפים דינרי זהב והיו מקלסין אותו בשל כסף והלא גנאי הוא לו: ואמר רבי חנינא הכל בידי שמים חוץ מיראת שמים שנאמר (דברים י, יב) ועתה ישראל מה ה' אלהיך שואל מעמך כי אם ליראה אטו יראת שמים מילתא זוטרתא היא והא\"ר חנינא משום ר' שמעון בן יוחי אין לו להקב\"ה בבית גנזיו אלא אוצר של יראת שמים שנאמר (ישעיהו לג, ו) יראת ה' היא אוצרו אין לגבי משה מילתא זוטרתא היא דאמר ר' חנינא משל לאדם שמבקשים ממנו כלי גדול ויש לו דומה עליו ככלי קטן קטן ואין לו דומה עליו ככלי גדול: מודים מודים משתקין אותו: אמר ר' זירא כל האומר שמע שמע כאומר מודים מודים דמי מיתיבי הקורא את שמע וכופלה הרי זה מגונה מגונה הוא דהוי שתוקי לא משתקינן ליה לא קשיא הא דאמר מילתא מילתא ותני לה והא דאמר פסוקא פסוקא ותני ליה אמר ליה רב פפא לאביי ודילמא מעיקרא לא כוון דעתיה ולבסוף כוון דעתיה אמר ליה",
  "rashi": [
   {
    "dh": "הלכתא מאי",
    "text": " — המבדיל בתפילה צריך שיבדיל על הכוס או לא:",
    "en": "One who says... in his Tefillah."
   },
   {
    "dh": "ביום טוב שחל להיות אחר השבת",
    "text": " — שאין מתפללין אתה חונן:",
    "en": "Your mercy reaches the mother bird... [The Mishnah is referring to] men who present themselves as consciencious in deepening their entreaties to God by saying \"you are merciful so that you even extend your mercy to the mother bird, as you command to send away the mother bird."
   },
   {
    "dh": "ה\"ג הלכה מכלל דפליגי ולא פליגי והא פליגי רבנן אימר דפליגי רבנן בשאר ימות השנה בי\"ט שחל להיות אחר השבת מי פליגי והא פליג ר\"ע אטו כל השנה מי עבדינן כר\"ע דהשתא נעביד וכו'",
    "text": " — והכי פריך א\"ל רבי זירא הלכה מכלל דפליגי בתמיה ופריך הגמרא ולא פליגי והא פליגי רבנן וכו':",
    "en": "Promotes jealousy... by saying that God is concerned for these [birds] but not for his other creations."
   },
   {
    "dh": "והא פליג ר' עקיבא",
    "text": " — לומרה ברכה רביעית לעצמה ואצטרי' למימר הלכה כר\"א לאפוקי מדר\"ע:",
    "en": "His characteristics... His Mitzvoth. He created his Mitzvoth not out of mercy but to place upon Israel the laws of his ordinances to make known that they are his servants and the keepers of his Mitzvoth and ordinances even in matters that give cause for Satan and idolators to reply to them saying, what need do you have for this Mitzvah."
   },
   {
    "dh": "אטו כל השנה כולה מי עבדינן כר\"ע דהשתא נעביד כותיה",
    "text": " — דאצטריך למימר הלכה כר\"א:"
   },
   {
    "dh": "הלכה",
    "text": " — מ\"ד הלכה דרשינן לה בפרקין ומ\"ד מטין מדרש לא דרשינן ברבים אבל אורויי מורינן ליחיד לעשות כר\"א בי\"ט שחל להיות בא' בשבת ומ\"ד נראין אורויי נמי לא מורינן ואי עביד לא מהדרינן עובדא:"
   },
   {
    "dh": "מודים",
    "text": " — חכמים לר\"א בי\"ט שחל להיות אחר השבת:"
   },
   {
    "dh": "נקוט דר' חייא בר אבא בידך",
    "text": " — שהוא מדקדק בלשון רבו וקובע בו סימנים שלא יתחלף לו נראין במטין או במודים:"
   },
   {
    "dh": "כרחבא",
    "text": " — שהיה מדקדק בלשון רבו ואומר סטיו כפול היה ואע\"פ שבלשון משנה קורהו אצטבא בפסחים ובסוכה על גב האצטבא הוא דקדק בלשון רבו ולא אמר אצטבא כפולה היתה יש פותרין הא דרחבא מדאמר ר' יהודה דדייק ספיקי דרבוותיה אי מדרבי יהודה אי מדרב יהודה וקשיא לי בגוה טובא חדא דרחבא לא ראה רבי יהודה מימיו לא רבי יהודה ברבי אלעאי ולא ר' יהודה נשיאה ועוד כולהו אמוראי נמי דייקו לומר דבר בשם אומרו ועוד ליכא למימר מהא דדייק לישנא דשמעתא אלא ספיקי דרבוותא:"
   },
   {
    "dh": "סטיו כפול",
    "text": " — אצטבאות זו לפנים מזו בהיקף עגול לישב שם:"
   },
   {
    "dh": "לא האי ידענא כו'",
    "text": " — לא נראין ולא מודים ולא מטים:"
   },
   {
    "dh": "ותודיענו",
    "text": " — לומר במקום ותתן לנו ולכשיגיע בין קדושת שבת לקדושת י\"ט וכו' הבדלת וקדשת את עמך ישראל בקדושתך יאמר ותתן לנו ה' אלהינו מועדים לשמחה וכו' ומסיים מקדש ישראל והזמנים:"
   },
   {
    "dh": "מתני' האומר",
    "text": " — בתפלתו:"
   },
   {
    "dh": "על קן צפור יגיעו רחמיך",
    "text": " — אנשים שהיו מראים עצמם כמתכונים להעמיק בלשון תחנונים ואומרים רחום וחנון אתה ועל קן צפור יגיעו רחמיך שאמרת לשלח את האם או שאומר על טוב שאתה עושה לנו יזכר שמך או שאומר מודים מודים משתקין אותו:"
   },
   {
    "dh": "גמ' שמטיל קנאה",
    "text": " — לומר על אלה חס ולא על שאר בריותיו:"
   },
   {
    "dh": "מדותיו",
    "text": " — מצותיו והוא לא לרחמים עשה אלא להטיל על ישראל חקי גזרותיו להודיע שהם עבדיו ושומרי מצותיו וגזרות חקותיו אף בדברי' שיש לשטן ולעכו\"ם להשיב עליהם ולומר מה צורך במצוה זו:"
   },
   {
    "dh": "ורבה נמי לחדודי לאביי הוא דבעי",
    "text": " — שישיב לו מה שהשיב:"
   },
   {
    "dh": "אי לאו דאמרינהו משה",
    "text": " — האל הגדול הגבור והנורא אשר לא ישא פנים ולא יקח שוחד (דברים י׳:י״ז):"
   },
   {
    "dh": "ותקנינהו בתפלה",
    "text": " — כשהתפלל עזרא על מעל הגולה בספר עזרא (נחמיה ט):"
   },
   {
    "dh": "הכל בידי שמים",
    "text": " — כל הבא על האדם ביד הקב\"ה הוא כגון ארוך קצר עני עשיר חכם שוטה לבן שחור הכל בידי שמים הוא אבל צדיק ורשע אינו בא על ידי שמים את זו מסר בידו של אדם ונתן לפניו שני דרכים והוא יבחר לו יראת שמים:"
   },
   {
    "dh": "מילתא מילתא ותני לה",
    "text": " — כל תיבה ותיבה חוזר ושונה מגונה הוי שתוקי לא משתקינן ליה שאין זה דומה למקבל עליו שתי מלכיות אלא למתלוצץ אמר פסוק שלם ותני ליה משתקינן ליה דמחזי כשתי רשויות:"
   }
  ],
  "tosafot": [
   {
    "dh": "אמר מודים מודים משתקין אותו",
    "text": " — ירושלמי הדא דתימא בצבור אבל ביחיד תחנונים הם:"
   },
   {
    "dh": "אמר פסוקא פסוקא וכפליה",
    "text": " — פי' בקונטרס משתקין אותו דמחזי כעושה ב' רשויות ובה\"ג ובפר\"ח מפרש איפכא פסוקא אין משתקין אותו מיהו מגונה הוי אך לשון הגמרא לא משמע כפי' ואותן בני אדם שאומרים ב' או ג' פעמים שמע ישראל ביוה\"כ משתקין אותם לפירש\"י ולפר\"ח מגונה מיהא הוי או שמא אין לחוש רק כשקורא ק\"ש בעונתה ומקבל עליו עול מלכות שמים ומ\"מ טוב שלא לומר אך מה שאומרים ה' הוא האלהים ז' פעמים ביוה\"כ ויום ערבה כנגד ז' רקיעים משבחים לבורא שהוא דר למעלה מז' מנהג כשר הוא וגם מצינו בקרא שתי פעמים ה' הוא האלהים גבי אליהו (מלכים א י״ח:ל״ט-מ׳):"
   }
  ],
  "translations": []
 },
 {
  "id": "34a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לד",
  "amud": "א",
  "dafEn": "34a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "חברותא כלפי שמיא מי איכא אי לא כוון דעתיה מעיקרא מחינן ליה במרזפתא דנפחא עד דמכוין דעתיה:  (האומר יברכוך טובים הרי זה דרכי מינות) העובר לפני התיבה וטעה יעבור אחר תחתיו ולא יהא סרבן באותה שעה מהיכן הוא מתחיל מתחלת הברכה שטעה זה העובר לפני התיבה לא יענה אמן אחר הכהנים מפני הטרוף ואם אין שם כהן אלא הוא לא ישא את כפיו ואם הבטחתו שהוא נושא את כפיו וחוזר לתפלתו רשאי: גמ׳ ת\"ר העובר לפני התיבה צריך לסרב ואם אינו מסרב דומה לתבשיל שאין בו מלח ואם מסרב יותר מדאי דומה לתבשיל שהקדיחתו מלח כיצד הוא עושה פעם ראשונה יסרב שניה מהבהב שלישית פושט את רגליו ויורד ת\"ר שלשה רובן קשה ומיעוטן יפה ואלו הן שאור ומלח וסרבנות אמר רב הונא טעה בשלש ראשונות חוזר לראש באמצעיות חוזר לאתה חונן באחרונות חוזר לעבודה ורב אסי אמר אמצעיות אין להן סדר מתיב רב ששת מהיכן הוא חוזר מתחלת הברכה שטעה זה תיובתא דרב הונא אמר לך רב הונא אמצעיות כלהו חדא ברכתא נינהו אמר רב יהודה לעולם אל ישאל אדם צרכיו לא בשלש ראשונות ולא בשלש אחרונות אלא באמצעיות דא\"ר חנינא ראשונות דומה לעבד שמסדר שבח לפני רבו אמצעיות דומה לעבד שמבקש פרס מרבו אחרונות דומה לעבד שקבל פרס מרבו ונפטר והולך לו ת\"ר מעשה בתלמיד אחד שירד לפני התיבה בפני רבי אליעזר והיה מאריך יותר מדאי א\"ל תלמידיו רבינו כמה ארכן הוא זה אמר להם כלום מאריך יותר ממשה רבינו דכתיב ביה (דברים ט, כה) את ארבעים היום ואת ארבעים הלילה וגו' שוב מעשה בתלמיד א' שירד לפני התיבה בפני ר\"א והיה מקצר יותר מדאי א\"ל תלמידיו כמה קצרן הוא זה א\"ל כלום מקצר יותר ממשה רבינו דכתיב (במדבר יב, יג) אל נא רפא נא לה א\"ר יעקב אמר רב חסדא כל המבקש רחמים על חבירו אין צריך להזכיר שמו שנאמר אל נא רפא נא לה ולא קמדכר שמה דמרים: ת\"ר אלו ברכות שאדם שוחה בהן באבות תחלה וסוף בהודאה תחלה וסוף ואם בא לשוח בסוף כל ברכה וברכה ובתחלת כל ברכה וברכה מלמדין אותו שלא ישחה אר\"ש בן פזי אריב\"ל משום בר קפרא הדיוט כמו שאמרנו",
  "rashi": [
   {
    "dh": "חברותא כלפי שמיא",
    "text": " — מנהג שנוהג אדם בחברו ינהג אצל המקום ולא יזהר בתפלתו:"
   },
   {
    "dh": "מחינן ליה",
    "text": " — כלומר מלמדין אותו שיכוין ומכין אותו אם ירגיל בכך:"
   },
   {
    "dh": "מרזפתא",
    "text": " — קורנס ותשם את המקבת בידה מתרגמינן מרזפתא (שופטים ד׳:כ״א):"
   },
   {
    "dh": "מתני' ולא יהא סרבן באותה שעה",
    "text": " — לפי ששאר יורדין לפני התיבה כשאומרים לו לך רד צריך לסרב פעם אחת כלומר איני כדאי לכך כדאמרי' לקמן בשמעתין אבל זה לא יסרב מפני שגנאי הוא שתהא התפלה מופסקת כל כך:"
   },
   {
    "dh": "מתחלת הברכה שטעה זה",
    "text": " — אם דלג אחת מן הברכות ואמר אחרת ואינו יודע לשוב ולאחוז סדרו יתחיל העובר תחתיו אותה ברכה שדלג זה ואומר משם ולהלן:"
   },
   {
    "dh": "לא יענה אמן אחר הכהנים",
    "text": " — הש\"צ בסוף כל ברכה וברכה:"
   },
   {
    "dh": "מפני הטירוף",
    "text": " — שלא תטרף דעתו ויטעה לפי שש\"צ הוא צריך להתחיל ברכה שניה ולומר לפני הכהנים כל תיבה ותיבה כדאמרינן במס' סוטה (דף לט:) ובענותו אמן לא יוכל לכוין מהר ולהתחיל בברכה שלאחריו:"
   },
   {
    "dh": "אם אין שם כהן אלא הוא",
    "text": " — החזן:"
   },
   {
    "dh": "לא ישא את כפיו",
    "text": " — שמא לא יוכל לחזור לתפלתו לדעת לכוין להתחיל בשים שלום שדעתו מטורפת מאימת הצבור:"
   },
   {
    "dh": "ואם הבטחתו",
    "text": " — כלומר אם בטוח הוא שאין דעתו מטורפת מאימת הצבור:"
   },
   {
    "dh": "גמ' יסרב",
    "text": " — כשאומרים לו לך יעשה עצמו כלא רוצה כלומר איני כדאי:"
   },
   {
    "dh": "שהקדיחתו",
    "text": " — לשון שרפה כמו כי אש קדחה באפי (דברים ל״ב:כ״ב):"
   },
   {
    "dh": "מהבהב",
    "text": " — כלומר מזמין עצמו כמו ננער לעמוד:"
   },
   {
    "dh": "אין להן סדר",
    "text": " — ואם דלג ברכה אחת ואח\"כ נזכר בה אומרה אף שלא במקומה:"
   },
   {
    "dh": "מתחלת הברכה שטעה זה",
    "text": " — וממילא משתמע דגומר ממנה והלאה אלמא על סדרה צריך לחזור ולאומרה:"
   },
   {
    "dh": "חדא ברכתא נינהו",
    "text": " — ודקתני מתני' מתחלת הברכה שטעה זה היינו אתה חונן:"
   },
   {
    "dh": "ונפטר",
    "text": " — נוטל רשות:"
   },
   {
    "dh": "א\"צ להזכיר שמו",
    "text": " — של חולה:"
   },
   {
    "dh": "תחלה וסוף",
    "text": " — במודים ולך נאה להודות:"
   }
  ],
  "tosafot": [
   {
    "dh": "מהיכן הוא מתחיל מתחלת הברכה שטעה בה",
    "text": " — ירושלמי בטיטי אשתתק באופנים אתון שיילון לר' בון אמר להו בשם ריב\"ל זה שעבר תחתיו יתחיל ממקום שפסק ופריך והתנן מתחיל מתחלת הברכה שטעה בה אמר להו מכיון דעניתון קדושת השם כמי שהוא תחלת הברכה דמי:",
    "en": "We teach him not to bow. And if you say, he'll bow, and what difference does it make? And it should be said, that he should not go and uproot the words of Sages, so the people won't say, everyone is as stringent as he wishes and there is no Rabbinic decree, and [therefore] we worry about yuhara [showing off]."
   },
   {
    "dh": "לא יענה אמן אחר הכהנים מפני הטרוף",
    "text": " — תימה תיפוק ליה דמפסיק תפלה אם עונה אמן וי\"ל מאחר שלא אמר האי טעמא ש\"מ דעניית אמן לא חשיב ליה הפסקה מאחר שצורך תפלה הוא אבל לקרות כהנים לדוכן אומר ר\"ת שאין ש\"צ יכול לקוראם דחשיב הפסקה לתפלה אם קוראם אלא אחד מבני הקהל קוראם והא דאמרינן בסוטה פ' אלו נאמרים (סוטה ד' לח.) לשנים קורא כהנים וכו' לאו אשליח צבור קאי אלא אחזן כדתניא בספרי (פרשת נשא) אמור להם מלמד שהחזן אומר להם אמרו וחזן לאו היינו שליח צבור דחזן היינו המתעסק בצרכי צבור וכן משמע נמי בסוטה (ד' לט:) דלאו אשליח צבור קאי דמעיקרא קאמר אין הכהנים רשאין להתחיל בברכה עד שיכלה הדבור מפי הקורא פי' הקורא כהנים ואח\"כ אומר אין שליח צבור רשאי וכו' משמע דשנים הם ויש שהיו רוצים לומר דכמו כן אין ש\"צ רשאי להקרות יברכך לכהנים דכמו כן הוי הפסקה אמנם רבינו יהודה פי' דבהדיא יש במדרש טעמי יתרות וחסרות אמור להם מלמד ששליח צבור אומר להם על כל דבור ודבור וכן יש שרוצים להתיר לשליח צבור עצמו לקרות כהנים אפילו לפי' ר\"ת דמה דפי' דהויא הפסקה היינו דוקא בימיהם מיד כשסיימו ברכת הודאה לא היו אומרים או\"א ברכנו בברכה כדמשמע בסוטה (שם) דקאמר אין הקורא רשאי לקרות כהנים עד שיכלה אמן מפי הצבור פי' אמן שעונין בסיום ברכת הודאה אלמא משמע שלא היו אומרים אלא כהנים מיד אבל עכשיו שהורגלו לומר אלהינו בלשון ברכה ותפלה אין זו הפסק דלא גרע מעניית אמן דהכא דלא חשיבא הפסק כדפרישית:"
   },
   {
    "dh": "אמצעיות אין להן סדר",
    "text": " — פי' בקונטרס ואם דלג ברכה אחת ואחר כך נזכר בה שלא במקומה אומרה במקום שנזכר. ולא נהירא דהא תנן במגילה (פ\"ב ד' יז.) הקורא את המגילה למפרע לא יצא ותניא (שם) וכן בהלל וכן בק\"ש וכן בתפלה לכך נראה כפירוש רשב\"ם ורב אלפס דאין להן סדר דקאמר היינו שיתחיל במקום שדלג הברכה ומשם ואילך יאמר הכל על הסדר אבל ודאי לא יתחיל באתה חונן כמו בג' ראשונות וג' אחרונות שחוזר לראש וראיה מדתניא בתוספתא דמכילתין הקורא את שמע והשמיט בה פסוק אחד לא יקרא אותו פסוק בפני עצמו אלא מתחיל מאותו פסוק ואילך וגומר עד סופה ותניא נמי בפ\"ב דמגילה (ד' יח:) שאם השמיט פסוק א' במגילה שקורא על הסדר מאותו פסוק ואילך והתם משוי תפלה למגילה לענין הך מילתא כדפרישית ובה\"ג פסק כרב אסי דאמר אמצעיות אין להן סדר חדא דרב הונא כתלמיד לגבי רב אסי כדאמרינן בכמה מקומות אמר רב הונא אמר רב אסי ועוד דלרב הונא צריך לדחוק ולשנויי מתני' דכולהו חדא ברכתא נינהו ואשנויי דחיקי לא ניקום ונסמוך ועוד דרב אסי ורב ששת קיימי בחד שיטתא ועוד דבשל סופרים הלך אחר המיקל וא\"כ אדם שטעה ודלג ברכה אחת באמצעיות או שלא אמר המלך המשפט בין ר\"ה ליוה\"כ דקי\"ל בפ\"ק (דף יב:) דמחזירין אותו לא יחזור לאתה חונן אלא לאותה ברכה שדלג ומשם ואילך יאמר על הסדר כדפי' רשב\"ם והיכא שטעה בג' ראשונות כגון שטעה בחתימתן או לא הזכיר בין ר\"ה ליוה\"כ בברכת אבות זכרנו או בתחיית המתים מי כמוך או שלא אמר המלך הקדוש חוזר לראשונה והיכא שטעה בשלש אחרונות כגון שטעה כמו כן בחתימתן או שלא הזכיר בין ראש השנה ליוה\"כ בשים שלום בספר חיים טובים או וכתוב לחיים טובים בהודאה חוזר לעבודה וטעמא דכיון שכולה שבח הוי כברכה א'. ותענית צבור שש\"צ קובע ברכה לעצמו שאומר עננו בין גואל לרופא אם שכחה ונזכר בה קודם סיום תפלה אין מחזירין אותו כיון שהיה צריך לחזור ולומר על הסדר כפי' רשב\"ם א\"כ הויא ברכה לבטלה אם מחזירין אותו אבל לפי' הקונטרס היה אומרה במקום שנזכר ואין כאן ברכה לבטלה:"
   },
   {
    "dh": "אל ישאל אדם צרכיו לא בג' ראשונות ולא בג' אחרונות",
    "text": " — פי' ר\"ח ורבינו האי דוקא ליחיד אבל צרכי צבור שואלין ולכך אנו אומרים זכרנו וקרובץ ויעלה ויבא בהם ותדע דדוקא יחיד קאמר שהרי עיקר ברכות אחרונות צרכי צבור הם:"
   },
   {
    "dh": "מלמדין אותו שלא ישחה",
    "text": " — וא\"ת וישחה ומה בכך וי\"ל שלא יבא לעקור דברי חכמים שלא יאמרו כל אחד מחמיר כמו שהוא רוצה ואין כאן תקנת חכמי' וחיישינן ליוהרא:"
   }
  ],
  "translations": []
 },
 {
  "id": "34b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לד",
  "amud": "ב",
  "dafEn": "34b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "כהן גדול בסוף כל ברכה וברכה והמלך תחלת כל ברכה וברכה וסוף כל ברכה וברכה אמר רבי יצחק בר נחמני לדידי מפרשא לי מיניה דריב\"ל הדיוט כמו שאמרנו כהן גדול תחלת כל ברכה וברכה המלך כיון שכרע שוב אינו זוקף שנאמר (מלכים א ח, נד) ויהי ככלות שלמה להתפלל וגו' קם מלפני מזבח ה' מכרוע על ברכיו: ת\"ר קידה על אפים שנאמר (מלכים א א, לא) ותקד בת שבע אפים ארץ כריעה על ברכים שנאמר מכרוע על ברכיו השתחואה זו פשוט ידים ורגלים שנאמר (בראשית לז, י) הבא נבא אני ואמך ואחיך להשתחות לך ארצה אמר רב חייא בריה דרב הונא חזינא להו לאביי ורבא דמצלו אצלויי תני חדא הכורע בהודאה הרי זה משובח ותניא אידך הרי זה מגונה לא קשיא הא בתחלה הא לבסוף רבא כרע בהודאה תחלה וסוף אמרי ליה רבנן אמאי קא עביד מר הכי אמר להו חזינא לרב נחמן דכרע וחזינא ליה לרב ששת דקא עבד הכי והתניא הכורע בהודאה הרי זה מגונה ההיא בהודאה שבהלל והתניא הכורע בהודאה ובהודאה של הלל הרי זה מגונה כי תניא ההיא בהודאה דברכת המזון:  המתפלל וטעה סימן רע לו ואם שליח צבור הוא סימן רע לשולחיו מפני ששלוחו של אדם כמותו אמרו עליו על ר' חנינא בן דוסא שהיה מתפלל על החולים ואומר זה חי וזה מת אמרו לו מנין אתה יודע אמר להם אם שגורה תפלתי בפי יודע אני שהוא מקובל ואם לאו יודע אני שהוא מטורף: גמ׳ אהייא א\"ר חייא אמר רב ספרא משום חד דבי רבי באבות איכא דמתני לה אברייתא המתפלל צריך שיכוין את לבו בכולן ואם אינו יכול לכוין בכולן יכוין את לבו באחת א\"ר חייא אמר רב ספרא משום חד דבי רבי באבות אמרו עליו על רבי חנינא וכו': מנא הני מילי א\"ר יהושע בן לוי דאמר קרא (ישעיהו נז, יט) בורא ניב שפתים שלום שלום לרחוק ולקרוב אמר ה' ורפאתיו א\"ר חייא בר אבא א\"ר יוחנן כל הנביאים כולן לא נתנבאו אלא למשיא בתו לתלמיד חכם ולעושה פרקמטיא לת\"ח ולמהנה ת\"ח מנכסיו אבל תלמידי חכמים עצמן (ישעיהו סד, ג) עין לא ראתה אלהים זולתך יעשה למחכה לו ואמר רבי חייא בר אבא אמר רבי יוחנן כל הנביאים כולן לא נתנבאו אלא לימות המשיח אבל לעולם הבא עין לא ראתה אלהים זולתך ופליגא דשמואל דאמר שמואל אין בין העוה\"ז לימות המשיח אלא שעבוד מלכיות בלבד שנאמר (דברים טו, יא) כי לא יחדל אביון מקרב הארץ וא\"ר חייא בר אבא א\"ר יוחנן כל הנביאים כולן לא נתנבאו אלא לבעלי תשובה אבל צדיקים גמורים עין לא ראתה אלהים זולתך ופליגא דר' אבהו דא\"ר אבהו מקום שבעלי תשובה עומדין צדיקים גמורים אינם עומדין שנאמר (ישעיהו נז, יט) שלום שלום לרחוק ולקרוב לרחוק ברישא והדר לקרוב ורבי יוחנן אמר לך מאי רחוק שהיה רחוק מדבר עבירה מעיקרא ומאי קרוב שהיה קרוב לדבר עבירה ונתרחק ממנו השתא מאי עין לא ראתה אמר רבי יהושע בן לוי זה יין המשומר בענביו מששת ימי בראשית רבי שמואל בר נחמני אמר זה עדן שלא שלטה בו עין כל בריה שמא תאמר אדם הראשון היכן היה בגן ושמא תאמר הוא גן הוא עדן תלמוד לומר (בראשית ב, י) ונהר יוצא מעדן להשקות את הגן גן לחוד ועדן לחוד: ת\"ר מעשה שחלה בנו של ר\"ג שגר שני ת\"ח אצל רבי חנינא בן דוסא לבקש עליו רחמים כיון שראה אותם עלה לעלייה ובקש עליו רחמים בירידתו אמר להם לכו שחלצתו חמה אמרו לו וכי נביא אתה אמר להן לא נביא אנכי ולא בן נביא אנכי אלא כך מקובלני אם שגורה תפלתי בפי יודע אני שהוא מקובל ואם לאו יודע אני שהוא מטורף ישבו וכתבו וכוונו אותה שעה וכשבאו אצל ר\"ג אמר להן העבודה לא חסרתם ולא הותרתם אלא כך היה מעשה באותה שעה חלצתו חמה ושאל לנו מים לשתות ושוב מעשה ברבי חנינא בן דוסא שהלך ללמוד תורה אצל ר' יוחנן בן זכאי וחלה בנו של ריב\"ז אמר לו חנינא בני בקש עליו רחמים ויחיה הניח ראשו בין ברכיו ובקש עליו רחמים וחיה אמר רבי יוחנן בן זכאי אלמלי הטיח בן זכאי את ראשו בין ברכיו כל היום כולו לא היו משגיחים עליו אמרה לו אשתו וכי חנינא גדול ממך אמר לה לאו אלא הוא דומה כעבד לפני המלך ואני דומה כשר לפני המלך: ואמר רבי חייא בר אבא אמר רבי יוחנן אל יתפלל אדם אלא בבית שיש שם חלונות שנאמר (דניאל ו, יא) וכוין פתיחן ליה בעליתיה (לקבל) [נגד] ירושלם אמר רב כהנא חציף עלי מאן דמצלי בבקתא ואמר רב כהנא חציף עלי מאן דמפרש חטאיה שנאמר (תהלים לב, א) אשרי נשוי פשע כסוי חטאה: הדרן עלך אין עומדין",
  "rashi": [
   {
    "dh": "כהן גדול בסוף כל ברכה",
    "text": " — כל מה שהוא גדול ביותר צריך להכניע ולהשפיל עצמו:"
   },
   {
    "dh": "אינו זוקף",
    "text": " — עד שיגמור:"
   },
   {
    "dh": "קם מלפני מזבח ה' מכרוע",
    "text": " — רישיה דקרא ויהי ככלות שלמה להתפלל והדר קם מכרוע:"
   },
   {
    "dh": "ארצה",
    "text": " — לשון משתטח משמע:"
   },
   {
    "dh": "דמצלו אצלויי",
    "text": " — כשנופלין על פניהם אין פושטין ידיהם ורגליהם אלא מטין על צדיהן:"
   },
   {
    "dh": "בתחלה",
    "text": " — כורע:"
   },
   {
    "dh": "חזינא לרב נחמן דכרע",
    "text": " — תחלה וסוף:"
   },
   {
    "dh": "בהודאה דהלל",
    "text": " — הודו לה' כי טוב:"
   },
   {
    "dh": "מתני' אם שגורה",
    "text": " — אם סדורה תפלתי בפי במרוצה ואיני נכשל ותחנתי נובעת מלבי אל פי כל מה שאני חפץ להאריך בתחנונים:"
   },
   {
    "dh": "שהוא מטורף",
    "text": " — החולה לשון אחר [לשון] טורפין לו תפלתו בפניו כלומר התפלה שהתפללו עליו מטורפת וטרודה ממנו ואינה מקובלת:"
   },
   {
    "dh": "גמ' אהייא",
    "text": " — בהיכא ובאיזו מן הברכות הוי טעות בסימן רע:"
   },
   {
    "dh": "באבות",
    "text": " — שהוא תחלת התפלה רמז הוא שאין חפץ בה:"
   },
   {
    "dh": "בורא ניב שפתים",
    "text": " — כשהניב בריא באדם אז מובטח על השלום:"
   },
   {
    "dh": "לא נתנבאו",
    "text": " — הטובות והנחמות:"
   },
   {
    "dh": "עין לא ראתה",
    "text": " — לא נראית ולא נגלית לשום נביא:"
   },
   {
    "dh": "רחוק",
    "text": " — שהיה רחוק כל ימיו מן העבירה דהיינו צדיק מעיקרו:"
   },
   {
    "dh": "חלצתו חמה",
    "text": " — שלפתו ניטלה מגופו החמה הוא החולי הקודחו חלצתו לשון חלץ מהם:"
   },
   {
    "dh": "לא חסרתם",
    "text": " — שעה:"
   },
   {
    "dh": "כעבד",
    "text": " — בן בית נכנס ויוצא שלא ברשות:"
   },
   {
    "dh": "כשר לפני המלך",
    "text": " — שאינו רגיל לבא לפניו:"
   },
   {
    "dh": "חלונות",
    "text": " — שגורמין לו שיכוין לבו שהוא מסתכל כלפי שמים ולבו נכנע:"
   },
   {
    "dh": "דמצלי בבקתא",
    "text": " — בבקעה שכשהוא במקום צניעות חלה עליו אימת מלך ולבו נשבר:"
   },
   {
    "dh": "הדרן עלך אין עומדין",
    "text": ""
   }
  ],
  "tosafot": [
   {
    "dh": "קידה על אפים",
    "text": " — ומייתי קרא אע\"ג דאשכחן נמי בענין אחר יש לומר דקים ליה מקבלה דקידה על אפים ומייתי קרא דמסייעו:"
   },
   {
    "dh": "חזינא לאביי ורבא דמצלו אצלויי",
    "text": " — פירוש שהיו מטין על צדיהן:"
   },
   {
    "dh": "יכוין לבו באחת מהן",
    "text": " — והא דאמרי' בסוף פרק ת\"ה (ברכות ל ב) לעולם ימוד אדם דעתו אם יכול לכוין יתפלל ואם לאו אל יתפלל יש לפרש התם נמי באחת מהן:"
   },
   {
    "dh": "חציף עלי מאן דמצלי בבקתא",
    "text": " — וא\"ת הכתיב ויצא יצחק לשוח בשדה (בראשית כ״ד:ס״ג) י\"ל דהתם מיירי בהר המוריה כדאמרי' בפסחים פרק האשה (פסחים פח א) לא כיצחק שקראו שדה וכו' א\"נ בקתא דהכא מיירי בבקעה במקום שרגילין שם בני אדם לעבור והולכי דרכים:"
   },
   {
    "dh": "כסוי חטאה",
    "text": " — וטעמא לפי שאז מתבייש על חטאו אבל אם מפרש חטאיו דומה שאינו מתבייש עליו ואמרינן לעיל פרק קמא (ברכות ד' יב:) כל העושה דבר ומתבייש מוחלים לו מיד:"
   },
   {
    "dh": "הדרן עלך אין עומדין",
    "text": ""
   }
  ],
  "translations": []
 },
 {
  "id": "35a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לה",
  "amud": "א",
  "dafEn": "35a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "כיצד מברכין על הפירות על פירות האילן הוא אומר בורא פרי העץ חוץ מן היין שעל היין הוא אומר בורא פרי הגפן ועל פירות הארץ הוא אומר בורא פרי האדמה חוץ מן הפת שעל הפת הוא אומר המוציא לחם מן הארץ ועל הירקות הוא אומר בורא פרי האדמה רבי יהודה אומר בורא מיני דשאים:",
  "gemara": "מנא ה\"מ דתנו רבנן (ויקרא יט, כד) קדש הלולים לה' מלמד שטעונים ברכה לפניהם ולאחריהם מכאן אמר ר\"ע אסור לאדם שיטעום כלום קודם שיברך והאי קדש הלולים להכי הוא דאתא האי מיבעי ליה חד דאמר רחמנא אחליה והדר אכליה ואידך דבר הטעון שירה טעון חלול ושאינו טעון שירה אין טעון חלול וכדר' שמואל בר נחמני א\"ר יונתן דאמר ר' שמואל בר נחמני א\"ר יונתן מנין שאין אומרים שירה אלא על היין שנאמר (שופטים ט, יג) ותאמר להם הגפן החדלתי את תירושי המשמח אלהים ואנשים אם אנשים משמח אלהים במה משמח מכאן שאין אומרים שירה אלא על היין הניחא למאן דתני נטע רבעי אלא למאן דתני כרם רבעי מאי איכא למימר דאתמר ר' חייא ור' שמעון ברבי חד תני כרם רבעי וחד תני נטע רבעי ולמאן דתני כרם רבעי הניחא אי יליף ג\"ש דתניא ר' אומר נאמר כאן (ויקרא יט, כה) להוסיף לכם תבואתו ונאמר להלן (דברים כב, ט) ותבואת הכרם מה להלן כרם אף כאן כרם אייתר ליה חד הלול לברכה ואי לא יליף גזרה שוה ברכה מנא ליה ואי נמי יליף גזרה שוה אשכחן לאחריו לפניו מנין הא לא קשיא דאתיא בקל וחומר כשהוא שבע מברך כשהוא רעב לא כל שכן אשכחן כרם שאר מינין מנין דיליף מכרם מה כרם דבר שנהנה וטעון ברכה אף כל דבר שנהנה טעון ברכה איכא למפרך מה לכרם שכן חייב בעוללות קמה תוכיח מה לקמה שכן חייבת בחלה כרם יוכיח וחזר הדין לא ראי זה כראי זה ולא ראי זה כראי זה הצד השוה שבהן דבר שנהנה וטעון ברכה אף כל דבר שנהנה טעון ברכה מה להצד השוה שבהן שכן יש בו צד מזבח ואתי נמי זית דאית ביה צד מזבח וזית מצד מזבח אתי והא בהדיא כתיב ביה כרם דכתיב (שופטים טו, ה) ויבער מגדיש ועד קמה ועד כרם זית אמר רב פפא כרם זית אקרי כרם סתמא לא אקרי מ\"מ קשיא מה להצד השוה שבהן שכן יש בהן צד מזבח אלא דיליף לה משבעת המינין מה שבעת המינין דבר שנהנה וטעון ברכה אף כל דבר שנהנה טעון ברכה מה לשבעת המינין שכן חייבין בבכורים ועוד התינח לאחריו לפניו מנין הא לא קשיא דאתי בקל וחומר כשהוא שבע מברך כשהוא רעב לכ\"ש ולמאן דתני נטע רבעי הא תינח כל דבר נטיעה דלאו בר נטיעה כגון בשר ביצים ודגים מנא ליה אלא סברא הוא אסור לו לאדם שיהנה מן העולם הזה בלא ברכה: ת\"ר אסור לו לאדם שיהנה מן העוה\"ז בלא ברכה וכל הנהנה מן העוה\"ז בלא ברכה מעל מאי תקנתיה ילך אצל חכם ילך אצל חכם מאי עביד ליה הא עביד ליה איסורא אלא אמר רבא ילך אצל חכם מעיקרא וילמדנו ברכות כדי שלא יבא לידי מעילה אמר רב יהודה אמר שמואל כל הנהנה מן העוה\"ז בלא ברכה כאילו נהנה מקדשי שמים שנא' (תהלים כד, א) לה' הארץ ומלואה ר' לוי רמי כתיב לה' הארץ ומלואה וכתיב (תהלים קטו, טז) השמים שמים לה' והארץ נתן לבני אדם לא קשיא כאן קודם ברכה",
  "rashi": [
   {
    "dh": "כיצד מברכין וכו' חוץ מן היין",
    "text": " — שמתוך חשיבותו קבעו לו ברכה לעצמו וכן הפת:"
   },
   {
    "dh": "בורא מיני דשאים",
    "text": " — לפי שיש בכלל פרי האדמה דשאים וזרעים כגון קטניות ורבי יהודה בעי היכר ברכה לכל מין ומין:"
   },
   {
    "dh": "גמ' קדש הלולים",
    "text": " — בנטע רבעי כתיב ומשמע שני הלולים טעון באכילתו כשתאכלנו בשנה הרביעית שהוא מותר באכילה:"
   },
   {
    "dh": "האי מיבעי ליה",
    "text": " — הלולים לשון חלולים חד מינייהו אתא לאורויי אחליה והדר אכליה הוציאהו לחולין ע\"י פדיון אם באת לאוכלו חוץ לירושלים וחד ללמדך שלא נאמרה תורת רבעי אלא בכרם שנא' קדש הלולים דבר שמהללין בו טעון חלול וזהו יין:"
   },
   {
    "dh": "שאין אומרים",
    "text": " — הלוים שיר של קרבן במקדש אלא על היין כשמנסכין נסכי מזבח:"
   },
   {
    "dh": "הניחא למ\"ד כו'",
    "text": " — כולה סיומא דפרכא הוא וה\"ק הניחא הא דילפת ברכה מהכא למאן דתני נטע רבעי דאית ליה כל פירות האילן בתורת רבעי ולא דריש מהכא דבר דטעון הלול טעון חלול אייתר ליה חד הלול לברכה:"
   },
   {
    "dh": "מאי איכא למימר",
    "text": " — הא מיבעי ליה למדרש שאין חלול אלא במקום הלול:"
   },
   {
    "dh": "חד תני כרם רבעי",
    "text": " — בכל מקום שיש במשנה נטע רבעי תני איהו כרם:"
   },
   {
    "dh": "הניחא אי יליף בג\"ש",
    "text": " — דריש למלתיה בג\"ש ואייתר ליה חד הלול לברכה:"
   },
   {
    "dh": "אשכחן לאחריו",
    "text": " — כדאשכחן בברכת המזון דכתיב ואכלת ושבעת וברכת (דברים ח׳:י׳):"
   },
   {
    "dh": "חייב בעוללות",
    "text": " — וכרמך לא תעולל (ויקרא י״ט:י׳) איזהו עוללות כל שאין להן פסיגין לא כתף ולא נטף אלא שורה יחידית של ענבים:"
   },
   {
    "dh": "קמה תוכיח",
    "text": " — דאשכחן דאצרכה רחמנא ברכה דכתיב תאכל בה לחם וגו' (דברים ח׳:י׳) וסמיך ליה ואכלת ושבעת וברכת:"
   },
   {
    "dh": "צד מזבח",
    "text": " — יין לנסכים וסלת למנחות:"
   },
   {
    "dh": "שבעה מינין",
    "text": " — האמורים בארץ חטה ושעורה וגו' (שם ח) ובתרייהו כתיב ואכלת ושבעת וברכת:"
   },
   {
    "dh": "שכן טעונים בכורים",
    "text": " — דהכי אמרינן במנחות (פ\"ט ד' פד:) נאמר כאן ארץ כי באתי אל הארץ (דברים כ״ו:ג׳) ונאמר להלן ארץ חטה ושעורה מה להלן שבח הארץ אף כאן שבח הארץ:"
   },
   {
    "dh": "אלא סברא הוא",
    "text": " — דלתרווייהו אית להו פירכא למאן דתני כרם ויליף ברכה מז' המינים איכא פירכא שכן טעונים בכורים ולמאן דתני נטע רבעי איכא למפרך התינח מידי דבר נטיעה דלאו בר נטיעה מנלן אלא סברא הוא דכיון דנהנה צריך להודות למי שבראם:"
   },
   {
    "dh": "מעל",
    "text": " — כנהנה מן ההקדש דכתיב לה' הארץ ומלואה כדאמרינן לקמן:"
   }
  ],
  "tosafot": [
   {
    "dh": "כיצד מברכין",
    "text": " — לא שייך להקשות תנא היכא קאי דקתני כיצד כדפריך בריש מכילתין (ד' ב) משום דהכא סברא הוא לברך כדמסיק בגמרא דאסור ליהנות מן העולם הזה בלא ברכה אי נמי י\"ל דקאי אמתני' דמי שמתו (ד' כ:) דקתני בעל קרי מברך לאחריו ואינו מברך לפניו והכי נמי שייך הכא לברך על כל דבר ודבר ע\"כ קאמר הכא כיצד מברכין:"
   },
   {
    "dh": "אחליה והדר אכליה",
    "text": " — תימה למה לי קרא הא בפ\"ב דקדושין (ד' נד:) גמרינן קדש קדש ממעשר שני א\"כ נילף ממעשר שני וי\"ל אי לאו קרא דהלולים הוה אמינא דאדרבה נילף לחומרא קדש קדש משביעית ואין לו פדיון. עוד פי' רבינו חיים כהן אי מהתם הוה אמינא כי מעשר שני ממש ודוקא בזמן שמעשר שני נוהג כמו בשנה ראשונה ושניה ורביעית וחמישית לשמטה נוהג חלול אבל שלישית וששית שמעשר עני דוקא אימא לא קמ\"ל חלולים:"
   },
   {
    "dh": "שאין אומרים שירה אלא על היין",
    "text": " — פירוש אין אומרים שירה על שום אכילת מזבח כגון זריקת דמים ונסוך המים כי אם על היין אבל ודאי מצינו שירה בלא יין כגון הלל שבשחיטת פסחים (תמיד נשחט ד' סד א) [ע\"ש בתוספות]:"
   },
   {
    "dh": "ולמאן דתני כרם רבעי וכו'",
    "text": " — ועתה קיימא לן דרבעי נוהג אף בח\"ל מיהו בכרם נוהג ולא בשאר אילנות דכל המיקל בארץ הלכה כמותו בח\"ל וכרם רבעי בזמן הזה מחללין על שוה פרוט' ושוחקו ומטילו לנהר וכן מפורש בשאלתות דרב אחאי [פרשת קדושים סימן ק]:"
   },
   {
    "dh": "ואתי נמי זית במה הצד",
    "text": " — וא\"ת איכא למפרך מה להצד השוה שכן חייבים בלקט דפרט בכרם היינו לקט משא\"כ בזית דאין בו לקט וי\"ל דניחא ליה למפרך פירכא אפי' יהא הצד השוה חשוב למיתי זית מיניה מ\"מ קאמר דשאר מינים לא ידע מיניה:"
   },
   {
    "dh": "תינח לאחריו",
    "text": " — דעיקר ברכה לאחריו כדכתיב ואכלת ושבעת וברכת:"
   },
   {
    "dh": "לפניו לכ\"ש",
    "text": " — לאו ק\"ו הוא דאם כן תהא ברכה דלפניו מדאורייתא ולעיל פרק מי שמתו (ברכות דף כא.) משמע גבי בעל קרי דלאו דאורייתא הוא ואפי' רבי יהודה לא פליג אלא משום דעשאן כהלכות דרך ארץ (שם ד' כב.):"
   },
   {
    "dh": "דבר שאין גדולו מן הקרקע כגון בשר וחלב",
    "text": " — וא\"ת מאי איריא בשר אפילו ירקות נמי לא אתיא ליה וי\"ל דאיכא למימר קמה תוכיח ולפי' רש\"י ניחא דגריס דלאו בר נטיעה מנין וליכא למימר דאתא משאר אילנות דאיכא למפרך מה להנך שכן חייבים בפיאה:"
   },
   {
    "dh": "אלא סברא הוא אסור לאדם שיהנה כו'",
    "text": " — וקרא דנסיב לעיל אסמכתא בעלמא והגמרא היה סבור מתחלה דלמוד גמור הוא:"
   },
   {
    "dh": "אלא סברא הוא אסור לאדם שיהנה כו'. וקרא דנסיב לעיל אסמכתא בעלמא והגמרא היה סבור מתחלה דלמוד גמור הוא",
    "text": ""
   }
  ],
  "translations": []
 },
 {
  "id": "35b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לה",
  "amud": "ב",
  "dafEn": "35b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "כאן לאחר ברכה א\"ר חנינא בר פפא כל הנהנה מן העוה\"ז בלא ברכה כאילו גוזל להקב\"ה וכנסת ישראל שנא' (משלי כח, כד) גוזל אביו ואמו ואומר אין פשע חבר הוא לאיש משחית ואין אביו אלא הקב\"ה שנא' (דברים לב, ו) הלא הוא אביך קנך ואין אמו אלא כנסת ישראל שנא' (משלי א, ח) שמע בני מוסר אביך ואל תטוש תורת אמך מאי חבר הוא לאיש משחית א\"ר חנינא בר פפא חבר הוא לירבעם בן נבט שהשחית את ישראל לאביהם שבשמים: ר' חנינא בר פפא רמי כתיב (הושע ב, יא) ולקחתי דגני בעתו וגו' וכתיב (דברים יא, יד) ואספת דגנך וגו' ל\"ק כאן בזמן שישראל עושין רצונו של מקום כאן בזמן שאין ישראל עושין רצונו של מקום ת\"ר ואספת דגנך מה ת\"ל לפי שנא' (יהושע א, ח) לא ימוש ספר התורה הזה מפיך יכול דברים ככתבן ת\"ל ואספת דגנך הנהג בהן מנהג דרך ארץ דברי ר' ישמעאל ר\"ש בן יוחי אומר אפשר אדם חורש בשעת חרישה וזורע בשעת זריעה וקוצר בשעת קצירה ודש בשעת דישה וזורה בשעת הרוח תורה מה תהא עליה אלא בזמן שישראל עושין רצונו של מקום מלאכתן נעשית ע\"י אחרים שנא' (ישעיהו סא, ה) ועמדו זרים ורעו צאנכם וגו' ובזמן שאין ישראל עושין רצונו של מקום מלאכתן נעשית ע\"י עצמן שנא' (דברים יא, יד) ואספת דגנך ולא עוד אלא שמלאכת אחרים נעשית על ידן שנא' (דברים כח, מח) ועבדת את אויביך וגו' אמר אביי הרבה עשו כרבי ישמעאל ועלתה בידן כר' שמעון בן יוחי ולא עלתה בידן א\"ל רבא לרבנן במטותא מינייכו ביומי ניסן וביומי תשרי לא תתחזו קמאי כי היכי דלא תטרדו במזונייכו כולא שתא: אמר רבה בר בר חנה א\"ר יוחנן משום רבי יהודה בר' אלעאי בא וראה שלא כדורות הראשונים דורות האחרונים דורות הראשונים עשו תורתן קבע ומלאכתן עראי זו וזו נתקיימה בידן דורות האחרונים שעשו מלאכתן קבע ותורתן עראי זו וזו לא נתקיימה בידן ואמר רבה בר בר חנה אר\"י משום ר\"י בר' אלעאי בא וראה שלא כדורות הראשונים דורות האחרונים דורות הראשונים היו מכניסין פירותיהן דרך טרקסמון כדי לחייבן במעשר דורות האחרונים מכניסין פירותיהן דרך גגות דרך חצרות דרך קרפיפות כדי לפטרן מן המעשר דא\"ר ינאי אין הטבל מתחייב במעשר עד שיראה פני הבית שנא' (דברים כו, יג) בערתי הקדש מן הבית ור' יוחנן אמר אפי' חצר קובעת שנא' (דברים כו, יב) ואכלו בשעריך ושבעו: חוץ מן היין וכו': מאי שנא יין אילימא משום דאשתני לעלויא אשתני לברכה והרי שמן דאשתני לעלויא ולא אשתני לברכה דאמר רב יהודה אמר שמואל וכן א\"ר יצחק א\"ר יוחנן שמן זית מברכין עליו בפה\"ע אמרי התם משום דלא אפשר היכי נבריך נבריך בורא פרי הזית פירא גופיה זית אקרי ונבריך עליה בורא פרי עץ זית אלא אמר מר זוטרא חמרא זיין משחא לא זיין ומשחא לא זיין והתנן הנודר מן המזון מותר במים ובמלח והוינן בה מים ומלח הוא דלא אקרי מזון הא כל מילי אקרי מזון נימא תיהוי תיובתא דרב ושמואל דאמרי אין מברכין בורא מיני מזונות אלא בה' המינין בלבד וא\"ר הונא באומר כל הזן עלי אלמא משחא זיין אלא חמרא סעיד ומשחא לא סעיד וחמרא מי סעיד והא רבא הוה שתי חמרי כל מעלי יומא דפסחא כי היכי דנגרריה ללביה וניכול מצה טפי טובא גריר פורתא סעיד ומי סעיד כלל והכתיב (תהלים קד, טו) ויין ישמח לבב אנוש ולחם לבב אנוש יסעד וגו' נהמא הוא דסעיד חמרא לא סעיד אלא חמרא אית ביה תרתי סעיד ומשמח נהמא מסעד סעיד שמוחי לא משמח אי הכי נבריך עליה שלש ברכות לא קבעי אינשי סעודתייהו עלויה א\"ל רב נחמן בר יצחק לרבא אי קבע עלויה סעודתיה מאי א\"ל לכשיבא אליהו ויאמר אי הויא קביעותא השתא מיהא בטלה דעתו אצל כל אדם: גופא אמר רב יהודה אמר שמואל וכן א\"ר יצחק א\"ר יוחנן שמן זית מברכין עליו בורא פרי העץ היכי דמי אילימא דקא שתי ליה (משתה) אוזוקי מזיק ליה דתניא השותה שמן של תרומה משלם את הקרן ואינו משלם את החומש הסך שמן של תרומה משלם את הקרן ומשלם את החומש אלא דקא אכיל ליה על ידי פת אי הכי הויא ליה פת עיקר והוא טפל ותנן זה הכלל כל שהוא עיקר ועמו טפלה מברך על העיקר ופוטר את הטפלה אלא דקא שתי ליה ע\"י אניגרון דאמר רבה בר שמואל אניגרון מיא דסלקא אנסיגרון מיא",
  "rashi": [
   {
    "dh": "לאחר ברכה",
    "text": " — הרי היא לבני אדם:",
    "en": "Is called \"olive:\" And this would be \"Who creates the fruit of *the fruit*\" since the fruit is called \"olive\" and this is not a creation of heaven, since it is a creation by man's handiwork. But regarding the \"vine,\" the \"vine\" is the tree and the grapes are the\"fruit of the vine.\""
   },
   {
    "dh": "גוזל להקב\"ה",
    "text": " — את ברכתו:",
    "en": "And Rav Huna said: What is taught, \"He is permitted water and salt, but forbidden any other food and drink,\" could not be referring to one who says \"Food is forbidden to me\" because \"food \" only refers to the five species of grain: wheat, barley, spelt, oats and rye. Rather it refers to one who says, \"Everything nourishing is forbidden to me,\" and all things, granted they are not called \"food\" but they surely \"nourish,\" except for water and salt. Therefore oil nourishes."
   },
   {
    "dh": "וכנסת ישראל",
    "text": " — שכשחטאו הפירות לוקין:"
   },
   {
    "dh": "אין פשע",
    "text": " — ולפי שהוא מיקל רואים האחרים ולמדין ממנו לעשות כן ליהנות מן העולם בלא ברכה ולכך נקרא זה המיקל חבר לאיש משחית:"
   },
   {
    "dh": "לירבעם בן נבט",
    "text": " — שחטא והחטיא את ישראל כך הוא חוטא ומחטיא:"
   },
   {
    "dh": "בזמן שעושין רצונו",
    "text": " — הדגן שלהם וכשאין עושים רצונו נוטלו ומראה להם שהוא שלו:"
   },
   {
    "dh": "דברים ככתבן",
    "text": " — שלא יעסוק בדרך ארץ:"
   },
   {
    "dh": "הנהג בהם",
    "text": " — עם דברי תורה:"
   },
   {
    "dh": "מנהג דרך ארץ",
    "text": " — שאם תבא לידי צורך הבריות סופך ליבטל מדברי תורה:"
   },
   {
    "dh": "אפשר",
    "text": " — בתמיה אפשר כדבריך:"
   },
   {
    "dh": "ביומי ניסן",
    "text": " — ימי הקציר:"
   },
   {
    "dh": "ביומי תשרי",
    "text": " — דריכת הגתות והבדים:"
   },
   {
    "dh": "דרך טרקסמון",
    "text": " — דרך שערי החצר והבית:"
   },
   {
    "dh": "אין הטבל מתחייב במעשר",
    "text": " — מן התורה אבל אכילת קבע אסור לאכול מדרבנן:"
   },
   {
    "dh": "פני הבית",
    "text": " — פתח כניסה ויציאה:"
   },
   {
    "dh": "זית אקרי",
    "text": " — והוה ליה בורא פרי הפרי שהפרי קרוי זית ואין זו בריאת שמים כי בידי אדם היא בריאה זו אבל גבי גפן הגפן היא העץ והענבים הם פרי הגפן:"
   },
   {
    "dh": "חמרא זיין",
    "text": " — להכי חשיב לקבוע לו ברכה לעצמו:"
   },
   {
    "dh": "ואמר רב הונא",
    "text": " — הא דקתני מותר במים ובמלח ואסור בשאר אוכלין ומשקין לאו באומר קונם מזון עלי דאין מזון אלא מה' מיני דגן חטין ושעורין וכוסמין ושבולת שועל ושיפון אלא באומר כל הזן עלי קונם וכל מילי נהי דלא אקרו מזון מיהו מיזן זייני בר ממים ומלח אלמא משחא זיין:"
   },
   {
    "dh": "סעיד",
    "text": " — חשיב טפי ממזון:"
   },
   {
    "dh": "והכתיב ויין ישמח לבב אנוש",
    "text": " — וסיפא דקרא ולחם לבב אנוש יסעד משמע אבל יין אינו אלא משמח ומשני לאו כדקאמרת אלא לחם יסעד ולא ישמח אבל יין סועד ומשמח:"
   },
   {
    "dh": "אי הכי",
    "text": " — דזיין וסעיד מזון הוא ולבריך עליה שלש ברכות לאחריו ואנן אמרינן לקמן בפרקין (ברכות דף לז.) כל שהוא משבעת המינין ולא מין דגן חכמים אומרים ברכה אחת:"
   },
   {
    "dh": "אוזוקי מזיק",
    "text": " — לגופיה ואין זו אכילה שטעונה ברכה דגבי ברכה ואכלת כתיב:"
   },
   {
    "dh": "דתני'",
    "text": " — דלאו בר אכילה היא:"
   },
   {
    "dh": "השותה שמן של תרומה",
    "text": " — בשוגג:"
   },
   {
    "dh": "משלם את הקרן",
    "text": " — כשאחד מזיק את חבירו בממונו:"
   },
   {
    "dh": "ואין משלם חומש",
    "text": " — דגבי חומש אכילה כתיב ואיש כי יאכל קדש בשגגה (ויקרא כ״ב:י״ד) פרט למזיק:"
   },
   {
    "dh": "ע\"י הפת",
    "text": " — משום לפתן:"
   },
   {
    "dh": "ע\"י אניגרון",
    "text": " — מין מאכל הוא ונותנים לתוכו שמן ושנוי במשנה בכמה מקומות:"
   },
   {
    "dh": "דאמר רבה בר שמואל",
    "text": " — לא אתא הכא אלא לפרושי לן מאי ניהו:"
   },
   {
    "dh": "מיא דסלקא",
    "text": " — מים ששלקו בהן תרדין:"
   }
  ],
  "tosafot": [
   {
    "dh": "כאן לאחר ברכה",
    "text": " — וכן בפ' כל כתבי (שבת ד' קיט.) אמרי' כשהיו מניחים השולחן היו אומרים לה' הארץ ומלואה וכשהיו מסלקין השולחן היו אומרים השמים שמים לה' והארץ נתן לבני אדם:"
   },
   {
    "dh": "כאן בזמן שישראל עושין רצונו של מקום שנאמר ואספת דגנך",
    "text": " — וא\"ת והא לקמן בזמן שאין ישראל עושין רצונו של מקום מוקמי' ליה. וי\"ל דמיירי ודאי שעושין רצונו אבל אין עושין רצונו כ\"כ דאינם צדיקים גמורים ועוד י\"ל דפליג ליה אהא דלקמן שבא לפרש מה בין עושים ואין עושין והכא בעושים ואין עושים כי הדדי נינהו:"
   },
   {
    "dh": "דרך טרקסמון",
    "text": " — פירש\"י היינו דאורייתא אבל מדרבנן גם חצר קובעת כדמשמע בפ' יוצא דופן (נדה ד' מז:) איזהו חצר שחייב במעשר וכו' וכן מוכח בפ' המביא (ביצה ד' לה.):"
   },
   {
    "dh": "טובא גריר",
    "text": " — מכאן משמע שאסור לשתות יין בערב פסח מן המנח' ולמעלה ואם רוצה לשתו' צריך לשתות הרבה דטובא מגריר גריר:"
   }
  ],
  "translations": []
 },
 {
  "id": "36a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לו",
  "amud": "א",
  "dafEn": "36a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "דכולהו שלקי א\"כ הוה ליה אניגרון עיקר ושמן טפל ותנן זה הכלל כל שהוא עיקר ועמו טפלה מברך על העיקר ופוטר את הטפלה הכא במאי עסקינן בחושש בגרונו דתניא החושש בגרונו לא יערענו בשמן תחלה בשבת אבל נותן שמן הרבה לתוך אניגרון ובולע פשיטא מהו דתימא כיון דלרפואה קא מכוין לא לבריך עליה כלל קמ\"ל כיון דאית ליה הנאה מיניה בעי ברוכי: קמחא דחיטי רב יהודה אמר בורא פרי האדמה ורב נחמן אמר שהכל נהיה בדברו א\"ל רבא לרב נחמן לא תפלוג עליה דרב יהודה דר' יוחנן ושמואל קיימי כוותיה דאמר רב יהודה אמר שמואל וכן א\"ר יצחק א\"ר יוחנן שמן זית מברכין עליו בורא פרי העץ אלמא אע\"ג דאשתני במלתיה קאי ה\"נ אע\"ג דאשתני במלתיה קאי מי דמי התם לית ליה עלויא אחרינא הכא אית ליה עלויא אחרינא בפת וכי אית ליה עלויא אחרינא לא מברכינן עליה בורא פרי האדמה אלא שהכל והא\"ר זירא אמר רב מתנא אמר שמואל אקרא חייא וקמחא דשערי מברכינן עלייהו שהכל נהיה בדברו מאי לאו דחיטי בורא פרי האדמה לא דחיטי נמי שהכל נהיה בדברו ולשמעינן דחיטי וכ\"ש דשערי אי אשמעינן דחיטי הוה אמינא ה\"מ דחיטי אבל דשערי לא לבריך עליה כלל קמ\"ל ומי גרע ממלח וזמית דתנן על המלח ועל הזמית אומר שהכל נהיה בדברו אצטריך סד\"א מלח וזמית עביד אינש דשדי לפומיה אבל קמחא דשערי הואיל וקשה לקוקיאני לא לבריך עליה כלל קמ\"ל כיון דאית ליה הנאה מיניה בעי ברוכי: קורא רב יהודה אמר בורא פרי האדמה ושמואל אמר שהכל נהיה בדברו רב יהודה אמר בורא פרי האדמה פירא הוא ושמואל אמר שהכל נהיה בדברו הואיל וסופו להקשות אמר ליה שמואל לרב יהודה שיננא כוותך מסתברא דהא צנון סופו להקשות ומברכינן עליה בורא פרי האדמה ולא היא צנון נטעי אינשי אדעתא דפוגלא דקלא לא נטעי אינשי אדעתא דקורא וכל היכא דלא נטעי אינשי אדעתא דהכי לא מברכינן עליה והרי צלף דנטעי אינשי אדעתא דפרחא ותנן על מיני נצפה על העלין ועל התמרות אומר בורא פרי האדמה ועל האביונות ועל הקפריסין אומר בורא פרי העץ אמר רב נחמן בר יצחק צלף נטעי אינשי אדעתא דשותא דקלא לא נטעי אינשי אדעתא דקורא ואע\"ג דקלסיה שמואל לרב יהודה הלכתא כותיה דשמואל: אמר רב יהודה אמר רב צלף של ערלה בחוצה לארץ זורק את האביונות ואוכל את הקפריסין למימרא דאביונות פירי וקפריסין לאו פירי ורמינהו על מיני נצפה על העלים ועל התמרות אומר בורא פרי האדמה ועל האביונות ועל הקפריסין אומר בורא פרי העץ הוא דאמר כר\"ע דתנן רבי אליעזר אומר צלף מתעשר תמרות ואביונות וקפריסין ר\"ע אומר אין מתעשר אלא אביונות בלבד מפני שהוא פרי ונימא הלכה כרבי עקיבא אי אמר הלכה כרבי עקיבא הוה אמינא אפי' בארץ קמ\"ל כל המיקל בארץ הלכה כמותו בחוצה לארץ אבל בארץ לא ונימא הלכה כרבי עקיבא בחוצה לארץ דכל המיקל בארץ הלכה כמותו בח\"ל אי אמר הכי הוה אמינא הנ\"מ גבי מעשר אילן דבארץ גופא מדרבנן אבל גבי ערלה דבארץ מדאורייתא אימא בח\"ל נמי נגזור קמ\"ל רבינא אשכחיה למר בר רב אשי דקא זריק אביונות וקאכיל קפריסין א\"ל מאי דעתך כר' עקיבא דמיקל ולעביד מר כב\"ש דמקילי טפי דתנן צלף ב\"ש אומרים כלאים בכרם וב\"ה אומרים אין כלאים בכרם אלו ואלו מודים שחייב בערלה הא גופא קשיא אמרת צלף ב\"ש אומרים כלאים בכרם אלמא מין ירק הוא והדר תני אלו ואלו מודים שחייב בערלה אלמא מין אילן הוא הא לא קשיא ב\"ש ספוקי מספקא להו ועבדי הכא לחומרא והכא לחומרא מ\"מ לב\"ש הוה ליה ספק ערלה ותנן ספק ערלה בא\"י אסור ובסוריא מותר ובח\"ל יורד",
  "rashi": [
   {
    "dh": "דכולהו שלקי",
    "text": " — כל מיני ירק שלוק:"
   },
   {
    "dh": "החושש בגרונו",
    "text": " — וצריך לתת בו שמן הרבה דהוה ליה שמן עיקר ואניגרון טפל:"
   },
   {
    "dh": "לא יערענו בשמן",
    "text": " — בשבת דמשהי ליה בתוך גרונו ואינו בולעו וכיון דלא בלע ליה מוכחא מילתא דלרפואה הוא וחכמים גזרו על כל רפואות הנכרות משום שחיקת סמנים שהיא מלאכה:"
   },
   {
    "dh": "תחלה",
    "text": " — כלומר לכתחלה לא יתן השמן בפיו לשם ערעור כי אם לשם בליעה ואם בא להשהותו ישהנו:"
   },
   {
    "dh": "דאית ליה הנאה מיניה",
    "text": " — לבד הרפואה יש לו הנאת אכילה:"
   },
   {
    "dh": "והלכתא וכו' עד פטר להו לא גרסינן ומה\"ג הוא",
    "text": ""
   },
   {
    "dh": "קמחא דחטי",
    "text": " — אוכל קמח חטים כמות שהיא:"
   },
   {
    "dh": "בורא פרי האדמה",
    "text": " — כשאר כוסס חטין דתניא לקמן בפרקין (ברכות ד' לז.) שמברך בורא פרי האדמה:"
   },
   {
    "dh": "דאשתני",
    "text": " — וגרע הואיל ולא אשתני לעלויא מעלייתא:"
   },
   {
    "dh": "במלתיה קאי",
    "text": " — והוה ליה ככוסס חטין:"
   },
   {
    "dh": "הכא אית ליה עילויא אחרינא",
    "text": " — הלכך יצא מכלל פרי ולכלל דרך אכילתו לא בא אבל השמן מיד בא בשנויו לכלל דרך אכילתו ועיקר הפרי לכך נטעוהו הלכך פרי הוא:"
   },
   {
    "dh": "מאי לאו",
    "text": " — מדאמר שערי מכלל דס\"ל בחטי בפה\"א דחשיב:"
   },
   {
    "dh": "ומי גרע ממלח וזמית",
    "text": " — והיכי תיסק אדעתין דלא תבעי ברכה:"
   },
   {
    "dh": "זמית",
    "text": " — שלמיר\"א:"
   },
   {
    "dh": "קוקיאני",
    "text": " — תולעים שבמעיים:"
   },
   {
    "dh": "דאית ליה הנאה",
    "text": " — באכילה:"
   },
   {
    "dh": "קורא",
    "text": " — רך של דקל כשענפיו גדלים בכל שנה ושנה כדרך כל האילנות הנוסף בשנה זו רך ובשנה שניה מתקשה ונעשה עץ:"
   },
   {
    "dh": "צנון סופו להקשות",
    "text": " — שאם אינו תולשו בעתו הוא מתקשה כעץ:"
   },
   {
    "dh": "אדעתא דפוגלא",
    "text": " — לאכלו כשהוא רך ושמו פוגלא:"
   },
   {
    "dh": "צלף",
    "text": " — מין עץ:"
   },
   {
    "dh": "אדעתא דפרחא",
    "text": " — שם פריו:"
   },
   {
    "dh": "מיני נצפה",
    "text": " — הוא צלף לפי שגדלים בו כמה מיני אכילה קרי ליה מיני:"
   },
   {
    "dh": "תמרות",
    "text": " — בתוך העלים גדלים כמין תמרות ובולטין בעלה כמו בעלין של ערבה:"
   },
   {
    "dh": "אביונות",
    "text": " — הוא הפרי:"
   },
   {
    "dh": "קפריסין",
    "text": " — הוא קליפה גדולה שסביבות הפרי כעין קליפה הגדילה סביב אגוזים דקים:"
   },
   {
    "dh": "צלף נטעי אינשי אדעתא דשותא",
    "text": " — לאכול את העלים ואת התמרות שאינן ממעטין את האילן בכך:"
   },
   {
    "dh": "דקלא לא נטעי אינשי אדעתא",
    "text": " — לאכול את הקורא שהאוכלו ממעט ענפי האילן:"
   },
   {
    "dh": "והלכתא וכו'",
    "text": " — עד פטר להו לא גרסינן ומה\"ג הוא:"
   },
   {
    "dh": "ערלה בחוצה לארץ",
    "text": " — מדברי סופרים היא:"
   },
   {
    "dh": "דכל המיקל בארץ",
    "text": " — בערלה הלכה כמותו בחוצה לארץ. דכיון דאינה מן התורה הלך אחר המיקל:"
   },
   {
    "dh": "גבי מעשר",
    "text": " — דהא דר\"ע לגבי מעשר איתמר דמעשר פירות האילן דבארץ גופה דרבנן שהתורה לא חייבה לעשר אלא דגן תירוש ויצהר:"
   },
   {
    "dh": "כלאים בכרם",
    "text": " — קסבר מין ירק הוא:"
   },
   {
    "dh": "מ\"מ לב\"ש הוה ליה ספק ערלה וכו'",
    "text": " — האי מ\"מ מסקנא דפירכא דרבינא הוא ולמימר שאף הפרי עצמו מותר בחוצה לארץ דהא בארץ ספק הוא ותנן ספק ערלה כו':"
   },
   {
    "dh": "ובסוריא",
    "text": " — ארם צובה שכבש דוד והוסיפה על גבול ארץ ישראל:"
   },
   {
    "dh": "ובחוצה לארץ",
    "text": " — הלוקח מן החשוד על הערלה ויודע הוא שיש בפרדסו זקנות ונטיעות:"
   },
   {
    "dh": "יורד ולוקח",
    "text": " — הימנו אף על פי שספק הוא אם יביא מן הנטיעות:"
   }
  ],
  "tosafot": [
   {
    "dh": "לא יערענו",
    "text": " — פירש\"י להשהותו וא\"ת א\"כ לפלוג וליתני בדידה מאי איריא ע\"י אניגרון אפילו בעיניה שרי לבלעו לאלתר דהא אינו אסור אלא לערער דהיינו להשהותו ע\"כ פי' הר\"י לא יערענו אפי' בבליעה בלא שהייה שכל שתייה שאינה אלא לרפואה קרי ליה ערעור ואפי' כשבולעו והיינו טעמא דמתסר משום דקא מוכחא מילתא דלרפואה קא מכוין א\"נ יש ליישב פירוש רש\"י לא יערענו להשהותו אבל נותן הוא לתוך אניגרון ואפילו להשהותו או בולעו בעיניה בלא שהייה:"
   },
   {
    "dh": "כיון דאית ליה הנאה מיניה בעי ברוכי",
    "text": " — ונראין הדברים דאם אדם שותה משקין אם המשקין רעים לשתות דלית ליה הנאה מיניה לא בעי ברוכי ואי אית ליה הנאה מיניה בלא הרפואה בעי ברוכי:"
   },
   {
    "dh": "והלכתא שכתוב בספרים לא גרסי' דלשון ה\"ג הוא עד קמחא וכו'",
    "text": ""
   },
   {
    "dh": "קמחא דחיטי",
    "text": " — נראה דלא מיירי בקמחא ממש דאם כן לא שייכא ביה ברכה דבורא פרי האדמה אלא מיירי בקמחא שקורין אישקלא\"טיר או בקמח שעושין משבולת שועל שמייבשין בתנור:"
   },
   {
    "dh": "לא נטעי אינשי אדעתא דקורא",
    "text": " — וסבר גמ' כוותיה דשמואל וא\"כ אותן לולבי גפנים דלא נטעי אינשי אדעתא דהכי מברכינן עלייהו שהכל נהיה בדברו ואותן שקדי' כשהם רכים אוכלים קליפתם החיצונה ולא נטעי להו אדעתא דהכי למיכל להו כשהן רכים כי אם לאכול הגרעינין שלהן כשיתבשלו מברך עלייהו נמי שהכל:"
   }
  ],
  "translations": []
 },
 {
  "id": "36b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לו",
  "amud": "ב",
  "dafEn": "36b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ולוקח ובלבד שלא יראנו לוקט רבי עקיבא במקום ר\"א עבדינן כותיה וב\"ש במקום ב\"ה אינה משנה ותיפוק ליה דנעשה שומר לפרי ורחמנא אמר (ויקרא יט, כג) וערלתם ערלתו את פריו את הטפל לפריו ומאי ניהו שומר לפרי אמר רבא היכא אמרינן דנעשה שומר לפרי היכא דאיתיה בין בתלוש בין במחובר הכא במחובר איתיה בתלוש ליתיה איתיביה אביי פיטמא של רמון מצטרפת והנץ שלו אין מצטרף מדקאמר הנץ שלו אין מצטרף אלמא דלאו אוכל הוא ותנ' גבי ערלה קליפי רמון והנץ שלו קליפי אגוזים והגרעינין חייבין בערלה אלא אמר רבא היכא אמרינן דנעשה להו שומר לפירי היכא דאיתיה בשעת גמר פירא האי קפרס ליתיה בשעת גמר פירא איני והאמר רב נחמן אמר רבה בר אבוה הני מתחלי דערלה אסירי הואיל ונעשו שומר לפירי ושומר לפירי אימת הוי בכופרא וקא קרי ליה שומר לפירי רב נחמן סבר לה כרבי יוסי דתנן רבי יוסי אומר סמדר אסור מפני שהוא פרי ופליגי רבנן עליה מתקיף לה רב שימי מנהרדעא ובשאר אילני מי פליגי רבנן עליה והתנן מאימתי אין קוצצין את האילנות בשביעית ב\"ש אומרים כל האילנות משיוציאו וב\"ה אומרים החרובין משישרשרו והגפנים משיגרעו והזיתים משיניצו ושאר כל האילנות משיוציאו ואמר רב אסי הוא בוסר הוא גרוע הוא פול הלבן פול הלבן ס\"ד אלא אימא שיעורו כפול הלבן מאן שמעת ליה דאמר בוסר אין סמדר לא רבנן וקתני שאר כל האילנות משיוציאו אלא אמר רבא היכא אמרינן דהוי שומר לפרי היכא דכי שקלת ליה לשומר מיית פירא הכא כי שקלת ליה לא מיית פירא הוה עובדא ושקלוה לנץ דרמונא ויבש רמונא ושקלוה לפרחא דביטיתא ואיקיים ביטיתא (והלכתא כמר בר רב אשי דזריק את האביונות ואכיל את הקפריסין ומדלגבי ערלה לאו פירא נינהו לגבי ברכות נמי לאו פירא נינהו ולא מברכינן עליה בורא פרי העץ אלא בורא פרי האדמה) פלפלי רב ששת אמר שהכל רבא אמר לא כלום ואזדא רבא לטעמיה דאמר רבא כס פלפלי ביומי דכפורי פטור כס זנגבילא ביומא דכפורי פטור מיתיבי היה ר\"מ אומר ממשמע שנאמר וערלתם ערלתו את פריו איני יודע שעץ מאכל הוא אלא מה ת\"ל עץ מאכל להביא עץ שטעם עצו ופריו שוה ואיזהו זה הפלפלין ללמדך שהפלפלין חייבין בערלה וללמדך שאין ארץ ישראל חסרה כלום שנאמר (דברים ח, ט) ארץ אשר לא במסכנות תאכל בה לחם לא תחסר כל בה לא קשיא הא ברטיבתא הא ביבשתא אמרי ליה רבנן למרימר כס זנגבילא ביומא דכפורי פטור והא אמר רבא האי המלתא דאתיא מבי הנדואי שריא ומברכין עליה בפה\"א לא קשיא הא ברטיבתא הא ביבשתא חביץ קדרה וכן דייסא רב יהודה אמר שהכל נהיה בדברו רב כהנא אמר במ\"מ בדייסא גרידא כ\"ע לא פליגי דבמ\"מ כי פליגי בדייסא כעין חביץ קדרה רב יהודה אמר שהכל סבר דובשא עיקר רב כהנא אמר בורא מיני מזונות סבר סמידא עיקר א\"ר יוסף כותיה דרב כהנא מסתברא דרב ושמואל דאמרי תרוייהו כל שיש בו מחמשת המינין מברכין עליו בורא מיני מזונות: גופא רב ושמואל דאמרי תרוייהו כל שיש בו מחמשת המינין מברכין עליו בורא מיני מזונות ואיתמר נמי רב ושמואל דאמרי תרווייהו כל שהוא מחמשת המינין מברכין עליו בורא מיני מזונות וצריכא דאי אשמעינן כל שהוא הוה אמינא משום דאיתיה בעיניה אבל על ידי תערובות לא",
  "rashi": [
   {
    "dh": "ובלבד שלא יראנו",
    "text": " — החבר כשהוא לוקט מן הנטיעות:"
   },
   {
    "dh": "אינה משנה",
    "text": " — ואין זה ספק אלא ודאי:"
   },
   {
    "dh": "ותיפוק ליה",
    "text": " — דאי נמי ר' עקיבא דאמר לענין מעשר דלאו פירא נינהו לענין ערלה אסירי קפריסין דהוה ליה שומר:"
   },
   {
    "dh": "בתלוש ליתיה",
    "text": " — סופו שנופל הימנו כשמגיע להתבשל:"
   },
   {
    "dh": "פיטמא של רמון",
    "text": " — הפרח שבראשו כעין שיש לתפוחים ולספרגלין:"
   },
   {
    "dh": "מצטרפת",
    "text": " — לכביצה לטומאת אוכלין:"
   },
   {
    "dh": "והנץ שלו",
    "text": " — נץ ברמון כקפרס באביונות:"
   },
   {
    "dh": "אין מצטרף",
    "text": " — אע\"ג דקי\"ל בהעור והרוטב (ד' קיז:) שומרים מצטרפין לטומאה קלה דהיינו טומאת אוכלין הני מילי קליפת האגוז והרמון אבל הנץ שומר על גבי שומר הוא ואין מצטרף והכי אמרינן בהעור והרוטב (ד' קיט:):"
   },
   {
    "dh": "חייבים בערלה",
    "text": " — דרחמנא רבינהו מאת פריו הטפל לפריו והא נץ ליתיה שומר בתלוש שכשמתיבש נופל מעל הקליפה:"
   },
   {
    "dh": "קפרס ליתיה בגמר פירא",
    "text": " — כשמגיע סמוך לבשולו הוא נופל ממנו:"
   },
   {
    "dh": "מתחלי",
    "text": " — בתמרי כקפרס בצלף:"
   },
   {
    "dh": "בכופרא",
    "text": " — כשהתמרים קטנים קודם בשולם:"
   },
   {
    "dh": "סבר לה כר' יוסי",
    "text": " — דכופרא הוי פרי ואע\"פ שלא נגמר לפיכך שומר שלו חשוב שומר:"
   },
   {
    "dh": "סמדר אסור",
    "text": " — ענבים כיון שנפל הפרח וכל גרגיר נראה לעצמו קרוי סמדר וקאמר ר' יוסי כיון שבא לכלל סמדר קרוי פרי ואסור משום ערלה:"
   },
   {
    "dh": "ופליגי רבנן עליה",
    "text": " — והלכה כרבים הלכך אביונות בעוד שהקפריסין בהן לאו פירי נינהו ולא מיקרו קפריסין שומר לפרי:"
   },
   {
    "dh": "בשאר אילנות",
    "text": " — חוץ מן הענבים:"
   },
   {
    "dh": "אין קוצצין בשביעית",
    "text": " — דרחמנא אמר לאכלה ולא להפסד:"
   },
   {
    "dh": "משיוציאו",
    "text": " — את הפרי:"
   },
   {
    "dh": "משישרשרו",
    "text": " — משיראו בהן כמין שרשרות של חרובין:"
   },
   {
    "dh": "משיגרעו",
    "text": " — שהענבים גסים כגרוע ולקמן מפרש לה:"
   },
   {
    "dh": "משיניצו",
    "text": " — משיגדל הנץ סביב:"
   },
   {
    "dh": "הוא בוסר הוא גרוע",
    "text": " — כל מקום שהזכירו בוסר הוא גרוע:"
   },
   {
    "dh": "פול הלבן ס\"ד",
    "text": " — הא בענבים קיימינן:"
   },
   {
    "dh": "מאן שמעת ליה דאמר",
    "text": " — גבי ענבים בוסר הוא דהוי פרי אבל סמדר לא:"
   },
   {
    "dh": "רבנן",
    "text": " — הוא דפליגי עליה דר' יוסי במסכת ערלה וקאמרי בשאר אילנות דמשיוציאו הוי פרי הראוי:"
   },
   {
    "dh": "ביטיתא",
    "text": " — אביונות:"
   },
   {
    "dh": "כס פלפלי",
    "text": " — כל דבר שאדם אוכל שלא כדרכו מקרי כסיסה:"
   },
   {
    "dh": "פטור",
    "text": " — מכרת:"
   },
   {
    "dh": "המלתא",
    "text": " — ליטואר\"יו בלעז:"
   },
   {
    "dh": "שריא",
    "text": " — אין בה לא משום בשול נכרים ולא משום געול נכרים:"
   },
   {
    "dh": "הנדואי",
    "text": " — כושיים:"
   },
   {
    "dh": "חביץ קדרה",
    "text": " — מין מאכל קפוי כמו חלב שחבצוהו בקיבה כך עושין מאכל קפוי בקדרה ולקמן מפרש לה קמחא ודובשא ומשחא וקרו ליה אברושד\"י:"
   },
   {
    "dh": "דייסא",
    "text": " — של חטים כתושות במכתשת:"
   },
   {
    "dh": "דייסא כעין חביץ קדרה",
    "text": " — לקמן מפרש לה חטי דמתברי באשיתא ויהבו בהו דובשא ועביד להו בקדירה:"
   },
   {
    "dh": "סמידא",
    "text": " — סלת:"
   }
  ],
  "tosafot": [
   {
    "dh": "קליפי אגוזים והגרעינין חייבין בערלה",
    "text": " — דפירי נינהו מכאן שיש לברך על הגרעינין של גודגדניות וגרעיני אפרסקין ושל תפוחים וכל מיני גרעינים של פירות בורא פרי העץ:",
    "en": "Nuts and seeds are subject to the laws of Orlah (the prohibition of consuming the fruit of a tree during its first three years) – they are considered fruit. Therefore, one must recite the blessing \"Borei Pri Ha'etz\" (Who creates the fruit of the tree) on seeds of pomegranates, apricots, apples, and all types of fruit seeds."
   },
   {
    "dh": "אין קוצצין אילנות בשביעית",
    "text": " — וא\"ת בלא שביעית נמי תיפוק ליה דאסור משום לא תשחית את עצה (דברים כ׳:י״ט) וי\"ל דלא טעין קבא דלא שייך ביה לא תשחית כדאיתא פ' לא יחפור (ב\"ב כו.) אי נמי איירי דמעולה בדמים לעשות ממנה קורות דאז לא שייך לא תשחית ומיהו משום איסורא דשביעית איכא לאכלה ולא לסחורה ולא להפסד:"
   },
   {
    "dh": "שיעורו כפול הלבן",
    "text": " — ופחות מכאן לא הוי פירא מכאן יש ללמוד דעל בוסר פחות מפול לא מברכינן עליה בורא פרי העץ אלא בורא פרי האדמה:"
   },
   {
    "dh": "לשון ה\"ג והלכתא כמר בר רב אשי מדלגבי ערלה לאו פירא הוא וכו'",
    "text": " — והיה אומר הר\"מ דלגבי ערלה לאו פירא הוא היינו משום דכל המיקל בארץ הלכה כמותו בח\"ל אבל בארץ ודאי הוי פירא ומברכין עליו בורא פרי העץ ובברכות ליכא חלוק בין בארץ לח\"ל:"
   },
   {
    "dh": "ברטיבא",
    "text": " — כגון ליטוארי\"ו בלע\"ז מברכינן עליה בורא פרי האדמה אבל יבישתא לא מברכינן עליה וכן הלכה בזנגבילא שקורין זינזי\"ברו בלע\"ז וכן קל\"ו של גרופל\"י שאין רגילים לאכול [אלא] ברטיבא כגון בליטוארי\"ו אין מברכין עליהם כלל ביבשתא אבל עץ של קנמון שקורין קניל\"א מברכינן עליו בורא פרי האדמה מפני שרגילין לאכלו ביובש וגם הוא גדל על הארץ כמו קנים ועל צוקר\"ו מברכינן בורא פרי העץ כי יערי עם דבשי (שיר ה) זה צוקר\"ו ואגוז שקורין מושקד\"א מברכינן בורא פרי העץ שגם נוהגין לאכול אותו ביובש:"
   },
   {
    "dh": "כל שיש בו מחמשת המינין מברכין עליו בורא מיני מזונות",
    "text": " — וכן קלייריט\"ש בלע\"ז שעושים מקמח ומים או מחלב מברכין עליהם בורא מיני מזונות וכן כשנותנים קמח לתוך פולין או לתוך עדשים או כרישים וכן לתוך שקדים שעושין לחולה אם עושין אותו כדי שיסעוד הלב אז צריך לברך בורא מ\"מ ואם לדבק בעלמא אינו צריך לברך בורא מ\"מ וטוב להחמיר ולגמעו בתוך הסעודה לאחר ברכת המוציא ופטור ממה נפשך:"
   }
  ],
  "translations": []
 },
 {
  "id": "37a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לז",
  "amud": "א",
  "dafEn": "37a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "קמ\"ל כל שיש בו ואי אשמעינן כל שיש בו הוה אמינא כל שיש בו חמשת המינים אין אבל אורז ודוחן לא משום דע\"י תערובת אבל איתיה בעיניה נימא אפילו אורז ודוחן נמי מברכין עליו בורא מיני מזונות קמ\"ל כל שהוא מחמשת המינים הוא דמברכין עליו בורא מיני מזונות לאפוקי אורז ודוחן דאפילו איתיה בעיניה לא מברכינן בורא מיני מזונות ואורז [ודוחן] לא מברכינן בורא מיני מזונות והתניא הביאו לפניו פת אורז ופת דוחן מברך עליו תחלה וסוף כמעשה קדרה וגבי מעשה קדרה תניא בתחלה מברך עליו בורא מ\"מ ולבסוף מברך עליו ברכה אחת מעין שלש כמעשה קדרה ולא כמעשה קדרה כמעשה קדרה דמברכין עליו תחלה וסוף ולא כמעשה קדרה דאילו במעשה קדרה בתחלה בורא מיני מזונות ולבסוף ברכה אחת מעין ג' ואילו הכא בתחלה מברך עליו שהכל נהיה בדברו ולבסוף בורא נפשות רבות וחסרונן על כל מה שברא ואורז לאו מעשה קדרה הוא והתניא אלו הן מעשה קדרה חילקא טרגיס סולת זריז וערסן ואורז הא מני רבי יוחנן בן נורי היא דתניא רבי יוחנן בן נורי אומר אורז מין דגן הוא וחייבין על חמוצו כרת ואדם יוצא בו ידי חובתו בפסח אבל רבנן לא ורבנן לא והתניא הכוסס את החטה מברך עליה בורא פרי האדמה טחנה אפאה ובשלה בזמן שהפרוסות קיימות בתחלה מברך עליה המוציא לחם מן הארץ ולבסוף מברך עליה ג' ברכות אם אין הפרוסות קיימות בתחלה מברך עליה בורא מיני מזונות ולבסוף מברך עליה ברכה אחת מעין ג' הכוסס את האורז מברך עליו ב\"פ האדמה טחנו אפאו ובשלו אף על פי שהפרוסות קיימות בתחלה מברך עליו בורא מיני מזונות ולבסוף מברך עליו ברכה אחת מעין שלש מני אילימא ר' יוחנן בן נורי היא דאמר אורז מין דגן הוא המוציא לחם מן הארץ ושלש ברכות בעי ברוכי אלא לאו רבנן היא ותיובתא דרב ושמואל תיובתא: אמר מר הכוסס את החטה מברך עליה בורא פרי האדמה והתניא בורא מיני זרעים לא קשיא הא ר' יהודה והא רבנן דתנן ועל ירקות אומר בורא פרי האדמה ר' יהודה אומר בורא מיני דשאים: אמר מר הכוסס את האורז מברך עליו בורא פרי האדמה טחנו אפאו ובשלו אע\"פ שהפרוסות קיימות בתחלה מברך עליו בורא מיני מזונות ולבסוף ברכה אחת מעין שלש והתניא לבסוף ולא כלום אמר רב ששת לא קשיא הא ר\"ג והא רבנן דתניא זה הכלל כל שהוא משבעת המינים רבן גמליאל אומר שלש ברכות וחכמים אומרים ברכה אחת מעין שלש ומעשה ברבן גמליאל והזקנים שהיו מסובין בעלייה ביריחו והביאו לפניהם כותבות ואכלו ונתן רבן גמליאל רשות לר' עקיבא לברך קפץ וברך רבי עקיבא ברכה אחת מעין שלש אמר ליה רבן גמליאל עקיבא עד מתי אתה מכניס ראשך בין המחלוקת א\"ל רבינו אע\"פ שאתה אומר כן וחבריך אומרים כן למדתנו רבינו יחיד ורבים הלכה כרבים רבי יהודה אומר משמו כל שהוא משבעת המינים",
  "rashi": [
   {
    "dh": "קמ\"ל כל שהוא",
    "text": " — דאע\"ג דכולהו מחד מינא בעינן דליהוי מחמשת המינין ואי לא לא מברכינן עליה בורא מיני מזונות:"
   },
   {
    "dh": "אורז",
    "text": " — מי\"ל:"
   },
   {
    "dh": "דוחן",
    "text": " — פנ\"ץ:"
   },
   {
    "dh": "כמעשה קדרה",
    "text": " — ברכה שמברכין על מעשה קדרה של חמשת מינין:"
   },
   {
    "dh": "ברכה אחת מעין ג'",
    "text": " — בשלהי פרקין (דף מד.) מפ' לה על המחיה כו':"
   },
   {
    "dh": "ואורז לאו מעשה קדרה",
    "text": " — דקא מפקת ליה מכלל מעשה קדרה לברכה אחרת:"
   },
   {
    "dh": "אלו הן מעשה קדרה",
    "text": " — לענין ברכה:"
   },
   {
    "dh": "חילקא טרגיס זריז וערסן",
    "text": " — מפרש להו במועד קטן (פ\"ב יג:):"
   },
   {
    "dh": "חילקא",
    "text": " — חטי דמתברי באסיתא חדא לתרתי:"
   },
   {
    "dh": "טרגיס",
    "text": " — חדא לתלת:"
   },
   {
    "dh": "זריז",
    "text": " — חדא לארבע:"
   },
   {
    "dh": "ערסן",
    "text": " — חדא לחמש:"
   },
   {
    "dh": "הא מני",
    "text": " — הך מתניתא דקתני אורז כמעשה קדרה רבי יוחנן בן נורי:"
   },
   {
    "dh": "ה\"ג אבל רבנן לא ורבנן לא והתניא כו'",
    "text": " — ול\"ג והלכתא ומהלכות גדולות הוא:"
   },
   {
    "dh": "הכוסס",
    "text": " — כמות שהיא:"
   },
   {
    "dh": "אפאה ובשלה",
    "text": " — לאחר שאפאה בתנור ועשאה לחם חזר ובשלה במים:"
   },
   {
    "dh": "שהפרוסות קיימות",
    "text": " — שלא נמוחו בבשולן:"
   },
   {
    "dh": "ברכה אחת מעין ג'",
    "text": " — על המחיה ועל הכלכלה ובשלהי פרקין (דף מד.) מפרש לה:"
   },
   {
    "dh": "אלא לאו רבנן היא",
    "text": " — וקתני במ\"מ ותיובתא דרב ושמואל:"
   },
   {
    "dh": "הא רבי יהודה כו'",
    "text": " — הא דקתני בורא מיני זרעים ר' יהודה היא דקתני לכל מין ומין מעין ברכתו כדמפרש לקמן בפירקין (ברכות דף מ.) אליביה הלכך לירקות בורא מיני דשאים לחטין דזרעים נינהו בורא מיני זרעים ולרבנן בין זרעים בין ירקות בפה\"א ולא בעינן לכל מין ומין מעין ברכתו:"
   },
   {
    "dh": "ולא כלום",
    "text": " — כלומר אין טעון מברכות פירות ארץ ישראל ולא כלום אלא בורא נפשות רבות ככל מידי דליתיה משבעת המינין:"
   },
   {
    "dh": "כותבות",
    "text": " — הם תמרים והם דבש האמור בשבעת המינין שהדבש זב מן התמרים:"
   },
   {
    "dh": "קפץ ובירך",
    "text": " — לאחריהן:"
   },
   {
    "dh": "משמו",
    "text": " — של ר\"ג:"
   }
  ],
  "tosafot": [
   {
    "dh": "בורא נפשות רבות וחסרונם",
    "text": " — כמו לחם ומים שאי אפשר בלא הם ועל כל מה שברא להחיות בהם נפש כל חי כלומר על כל מה שבעולם שגם אם לא בראם יכולין העולם לחיות בלא הם שלא בראם כי אם לתענוג בעלמא כמו תפוחים וכיוצא בהן ומסיים ברוך חי העולמים ובירושלמי ברוך אתה ה' חי העולמים:"
   },
   {
    "dh": "אם הפרוסות קיימות",
    "text": " — יש מפרשים דהיינו כשהלחם אינו שרוי במים כ\"כ שאם יקח הפרוסה שלא ישבר:"
   },
   {
    "dh": "רש\"י פי' אורז מי\"ל. ויש מפרשים ר\"יזו ולהאי פירוש יש לפרש דדוחן היינו מי\"ל",
    "text": ""
   },
   {
    "dh": "תיובתא דרב ושמואל",
    "text": " — באורז אבל אדוחן לא הוי תיובתא ואפשר דהוי הלכתא כותייהו ולא מברכינן עליה בורא מיני מזונות:"
   },
   {
    "dh": "הכוסס חטה צריך לברך עליה בורא פרי האדמה",
    "text": " — שהרי אפילו בקמחא דחיטי אמרינן לעיל מברכין עליה בפה\"א ולרב נחמן לא ס\"ל הכי משום דאשתנו ומיהו בלאחריו יש לספק מאי מברכין אם מברכין על המחיה ועל הכלכלה ומסיים על האדמה ועל פרי האדמה דלא אשכחן ברכת על המחיה ועל הכלכלה אלא היכא דבריך עלייהו ברישא קודם אכילה בורא מיני מזונות ור\"ת הגיה במחזור שלו על האדמה ועל פרי האדמה כו' וחזר בו דלא אשכחן בשום מקום הך ברכה דלקמן (ברכות דף מד.) מפרש ברכה אחת מעין ג' וקאמר בחמשת המינים על הארץ ועל המחיה ועל ז' המינים על הארץ ועל הפירות ועל האדמה ועל פרי האדמה לא הזכיר ועוד מדקאמר הכא על הכוסס את החטה מברך בורא פרי האדמה וקאמר בהדיא טחנו ואפאו פת עד אם אין הפרוסות קיימות בתחלה מברך בורא מ\"מ ולבסוף ברכה אחת מעין שלש ומדלא קתני הכא גבי כוסס החטה מברך לאחריו ברכה אחת מעין שלש ש\"מ דבכוסס ליכא ברכה לאחריו מעין ג' והא דקאמר כל שהוא מין דגן ולא עשאו פת וכו' וחכמים אומרים ברכה אחת מעין ג' מיירי דעבדינהו כעין דייסא דחשיבא אז אכילתו אבל הכוסס את החטה חי דלא חשיבא אכילתו כ\"כ אע\"ג דהיא מן חמשת המינים אינו מברך לאחריו ברכה מעין שלש אלא בורא נפשות רבות וכו' ומיהו אומר הר\"י שיש לספק שמא חכמים כיילי ליה בההוא מין דגן ולא עשאו פת וכו' וחכמים אומרים ברכה אחת מעין שלש ונכון להחמיר שאין לאכול קליות או חטים שלוקות אלא בתוך הסעודה שאז ברכת המזון פוטרתן אם לא נתמעכו יפה דהוו כמו דייסא ובירושלמי יש שגם האמוראים היו מסופקים דקאמר הדין דאכיל סלת פירוש קליות מאי מברך בסופה רבי ירמיה אמר לא אכלית סלת מן יומא וכו':"
   },
   {
    "dh": "נתן ר\"ג רשות לר' עקיבא לברך",
    "text": " — סבור היה שיברך ג' ברכות כמו שהיה סובר וא\"ת לר\"ג הא קי\"ל דאין מזמנין על הפירות וי\"ל דר\"ג היה סבור שהיה מברך על כל ז' מינין ג' ברכות שלמות וכי בירך ר\"ע מעין ג' לעצמו דוקא דקי\"ל אין מזמנין על הפירות ואחרים המסובין ברכו כל אחד לעצמו וא\"ת לר\"ג דאמר ג' ברכות שלמות וס\"ל דמזמנים על ז' המינים אי ס\"ל דברכה טעונה כוס א\"כ יזמנו וא\"כ יזמנו לעולם וי\"ל דיכול להיות שלא ישתה כלל מן כוס של ברכה וא\"ת מ\"מ לאותו המברך שהוא טועם צריך לברך פעם אחרת וא\"כ אין לדבר סוף וי\"ל היכא דאינו שותה בקביעות רק מלא לוגמיו מודה ר\"ג דאל\"כ וכי לית ליה לר\"ג ברכה אחת מעין שלש בשום מקום: [וע\"ע תוס' פסחים ק״ה: ד״ה ש״מ]:"
   }
  ],
  "translations": []
 },
 {
  "id": "37b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לז",
  "amud": "ב",
  "dafEn": "37b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ולא מין דגן הוא או מין דגן ולא עשאו פת ר\"ג אומר שלש ברכות וחכ\"א ברכה אחת כל שאינו לא משבעת המינין ולא מין דגן כגון פת אורז ודוחן ר\"ג אומר ברכה אחת מעין שלש וחכ\"א ולא כלום במאי אוקימתא כר\"ג אימא סיפא דרישא אם אין הפרוסות קיימות בתחלה מברך עליה בורא מיני מזונות ולבסוף מברך עליה ברכה אחת מעין שלש מני אי ר\"ג השתא אכותבות ואדייסא אמר ר\"ג ג' ברכות אם אין הפרוסות קיימות מיבעיא אלא פשיטא רבנן אי הכי קשיא דרבנן אדרבנן אלא לעולם רבנן ותני גבי אורז ולבסוף אינו מברך עליו ולא כלום: אמר רבא האי ריהטא דחקלאי דמפשי ביה קמחא מברך במ\"מ מ\"ט דסמידא עיקר דמחוזא דלא מפשי ביה קמחא מברך עליו שהכל נהיה בדברו מ\"ט דובשא עיקר והדר אמר רבא אידי ואידי במ\"מ דרב ושמואל דאמרי תרוייהו כל שיש בו מחמשת המינים מברכין עליו בורא מיני מזונות א\"ר יוסף האי חביצא דאית ביה פרורין כזית בתחלה מברך עליו המוציא לחם מן הארץ ולבסוף מברך עליו שלש ברכות דלית ביה פרורין כזית בתחלה מברך עליו בורא מיני מזונות ולבסוף ברכה אחת מעין שלש אמר רב יוסף מנא אמינא לה דתניא היה עומד ומקריב מנחות בירושלים אומר ברוך שהחיינו וקימנו והגיענו לזמן הזה נטלן לאכלן מברך המוציא לחם מן הארץ ותני עלה וכולן פותתן כזית א\"ל אביי אלא מעתה לתנא דבי ר\"י דאמר פורכן עד שמחזירן לסלתן ה\"נ דלא בעי ברוכי המוציא לחם מן הארץ וכי תימא ה\"נ והתניא לקט מכולן כזית ואכלן אם חמץ הוא ענוש כרת ואם מצה הוא אדם יוצא בו ידי חובתו בפסח הכא במאי עסקינן בשערסן אי הכי אימא סיפא והוא שאכלן בכדי אכילת פרס ואי בשערסן האי שאכלן שאכלו מיבעי ליה הכא במאי עסקינן בבא מלחם גדול מאי הוה עלה אמר רב ששת האי חביצא אף על גב דלית ביה פרורין כזית מברך עליו המוציא לחם מן הארץ אמר רבא והוא דאיכא עליה תוריתא דנהמא טרוקנין חייבין בחלה וכי אתא רבין א\"ר יוחנן טרוקנין פטורין מן החלה מאי טרוקנין אמר אביי כובא דארעא ואמר אביי טריתא פטורה מן החלה מאי טריתא איכא דאמרי גביל מרתח ואיכא דאמרי נהמא דהנדקא ואיכא דאמרי לחם העשוי לכותח תני רבי חייא לחם העשוי לכותח פטור מן החלה והא תניא חייב בחלה התם כדקתני טעמא ר' יהודה אומר מעשיה מוכיחין עליה עשאן",
  "rashi": [
   {
    "dh": "ולא מין דגן",
    "text": " — שבמין דגן יש חילוק שאם עשאו פת הכל מודים שצריך לאחריו ג' ברכות:"
   },
   {
    "dh": "או",
    "text": " — אף אם מין דגן הוא אלא שלא עשאו פת בשתים אלו נחלקו ר\"ג וחכמים:"
   },
   {
    "dh": "במאי אוקימתא",
    "text": " — לההוא דלעיל דקתני ולבסוף ברכה אחת מעין שלש:"
   },
   {
    "dh": "כר\"ג אימא סיפא דרישא",
    "text": " — דההיא מתני' דמתני גבי הכוסס את החטה דההיא רישא דידה וקתני סיפא אין הפרוסות קיימות כו':"
   },
   {
    "dh": "השתא",
    "text": " — אפילו אדייסא אמר ר\"ג במתניתין בתרייתא או מין דגן ולא עשאו פת מברך אחריו ג' ברכות:"
   },
   {
    "dh": "אין הפרוסות קיימות",
    "text": " — שבתחלתו פת ממש היה:"
   },
   {
    "dh": "מיבעיא",
    "text": " — וכשנמוח מי גרע מדייסא:"
   },
   {
    "dh": "אלא לאו רבנן היא",
    "text": " — דאמרי גבי דייסא ברכה אחת והאי נמי משנמוח לאו פת הוא והוי כדייסא:"
   },
   {
    "dh": "והלכתא לא גרסינן",
    "text": ""
   },
   {
    "dh": "ריהטא",
    "text": " — הוא חביץ קדרה:"
   },
   {
    "dh": "דחקלאי",
    "text": " — בני כפר:"
   },
   {
    "dh": "דמפשי ביה קמחא",
    "text": " — שמרבים בו קמח:"
   },
   {
    "dh": "דמחוזא",
    "text": " — בני כרך:"
   },
   {
    "dh": "חביצא",
    "text": " — כעין שלניי\"קוק שמפררין בתוך האלפס לחם:"
   },
   {
    "dh": "מנא אמינא לה",
    "text": " — דאפרורין כזית מברכין המוציא:"
   },
   {
    "dh": "היה",
    "text": " — ישראל עומד:"
   },
   {
    "dh": "ומקריב מנחות",
    "text": " — ונתנה לכהן להקריבה:"
   },
   {
    "dh": "אומר ברוך שהחיינו",
    "text": " — אם לא הביא מנחות זה ימים רבים:"
   },
   {
    "dh": "נטלן לאכלן",
    "text": " — הכהן:"
   },
   {
    "dh": "ותני עלה",
    "text": " — כלומר ותנן על המנחות מנחת מחבת ומנחת מרחשת הקריבות כשהן אפויות:"
   },
   {
    "dh": "וכולן פותתן",
    "text": " — כלומר בוצען קודם קמיצה ועושה אותן פתיתין כזיתים כדכתיב פתות אותה פתים (ויקרא ב׳:ו׳) אלמא פתיתין כזיתים מברך עליהן המוציא:"
   },
   {
    "dh": "פורכן",
    "text": " — למנחות האפויות על המחבת ועל המרחשת קודם קמיצה עד שמחזירן לסלתן:"
   },
   {
    "dh": "הכי נמי",
    "text": " — דפליג אהא דקתני מברך המוציא:"
   },
   {
    "dh": "והתניא לקט מכולן",
    "text": " — פתיתי המנחות:"
   },
   {
    "dh": "כזית כו'",
    "text": " — ומדקאמר יוצא בו ידי חובתו בפסח משום אכילת מצה דמצות עשה היא דכתיב בערב תאכלו מצות והתם לחם בעינן דכתיב בה לחם עוני אלמא לחם הוי ומברך המוציא והא מתניתין על כרחך רבי ישמעאל היא דהא קתני לקט מכולן כזית אלמא בפתיתין פחותין מכזית קאי:"
   },
   {
    "dh": "בשערסן",
    "text": " — כשחזר וגבלן יחד וחזר ואפאן. ערסן לשון עריסותיכם:"
   },
   {
    "dh": "והוא שאכלן בכדי אכילת פרס",
    "text": " — שלא ישהה משהתחיל לאכול שיעור כזית עד שגמר אכילת השיעור יותר מכדי אכילת חצי ככר של שמנה ביצים דהוי חציו ארבעה ביצים שזהו צירוף שיעור אכילה ואם שהה יותר אין האכילה מצטרפת והוה ליה כאוכל חצי זית היום וחצי זית למחר ואין בו חיוב כרת אם חמץ הוא:"
   },
   {
    "dh": "ואי בשערסן והוא שאכלו",
    "text": " — לשון יחיד מיבעי ליה:"
   },
   {
    "dh": "הב\"ע",
    "text": " — ובשלא ערסן היא וכדקאמרת והא דקתני דחשיב למיהוי לחם בבא מלחם גדול ונשאר מן הלחם שלא נפרס כולו אבל אם נפרס כולו לא חשיבי פתיתין הפחותי' מכזית ולא מברכינן המוציא ואין יוצא בהן ידי חובת מצה בפסח:"
   },
   {
    "dh": "תוריתא דנהמ'",
    "text": " — תואר מראית הלחם:"
   },
   {
    "dh": "כובא דארעא",
    "text": " — עושה מקום חלל בכירה ונותן בתוכו מים וקמח כמו שעושין באלפס:"
   },
   {
    "dh": "גביל מרתח",
    "text": " — נותנים קמח ומים בכלי ובוחשין בכף ושופכי' על הכירה כשהיא נסקת:"
   },
   {
    "dh": "נהמא דהנדקא",
    "text": " — בצק שאופין בשפוד ומושחים אותו תמיד בשמן או במי ביצים ושמן:"
   },
   {
    "dh": "לחם העשוי לכותח",
    "text": " — אין אופין אותו בתנור אלא בחמה:"
   }
  ],
  "tosafot": [
   {
    "dh": "חביצא דאית ביה פרורין",
    "text": " — פרש\"י כמו שלנייקו\"ק וא\"ת והתניא לעיל בזמן שהפרוסות וכו' אין הפרוסות קיימות לא יברך עליהן המוציא אע\"ג דאית ביה כזית וי\"ל דרב יוסף מפרש ליה הפרוסות קיימות היינו בכזית ואין הפרוסות קיימות בשאין בהן כזית וכן מפרש נמי בירושלמי וא\"ת ואיך מדמה רב יוסף פרורי מנחות לפרורי חביצא וי\"ל כיון שנטגנין בשמן כנתבשלו דמי ומיהו קשה דלקט מכולן כזית דקאי אחמשת המינין ולא אמנחות כמו שאפרש והתם נמי לא מיירי בשנתבשלו ומאי מדמה לחביצא שהוא מבושל לכך נ\"ל חביצא היינו פרורין הנדבקים יחד על ידי מרק או על ידי חלב כמו חביצא דתמרי שהן נדבקין:"
   },
   {
    "dh": "היה עומד ומקריב מנחות",
    "text": " — פרש\"י בעל הבית המתנדב מנחה ודוחק גדול הוא דהיה עומד ומקריב משמע בכהן המקריב וכן לישנא נטלן לאכלן משמע דאכהן קאי ונראה בכהן העומד להקריב ראשון במשמרתו וכ\"ד משמרות היו וכל שבת מתחדשת משמרה אחרת אם כן כל משמרה אינה משמרת אלא ב' פעמים בשנה וכיון שיש להם זמן קבוע מברכינן שהחיינו ולא כפירש\"י דמנחות דמיירי בכהן שלא הקריב מעולם:"
   },
   {
    "dh": "לקט מכולן",
    "text": " — פירש\"י דקאי אמנחות ולא נהירא דא\"כ היכי קאמר דאם חמץ הוא וכו' והא אמרינן (מנחות ד' נב:) כל המנחות באות מצה ונראה דקאי אחמשת מינין וה\"ק לקט מכל מיני לחמים כזית כו':"
   },
   {
    "dh": "אמר רבא והוא דאיכא עליה תוריתא דנהמא",
    "text": " — וכן קיימא לן דרבא בתראה הוא ולא בעינן שיהו בפרורין כזית כיון דאיכא תוריתא דנהמא לענין המוציא ואפילו נתבשלו לפירוש רש\"י והא דמשמע בירושלמי דפרוסות קיימות הן בכזית היינו לפי שכן דרך להיות תוריתא דנהמא בכזית אבל פעמים דאפילו בפחות מכזית איכא תוריתא דנהמא:"
   },
   {
    "dh": "תוריתא דנהמא",
    "text": " — נראה דהיינו כשנותני' הפרורין במים ואם המים מתלבנים מחמת הפרורין אזלא ליה תוריתא דנהמא וכן היה רגיל רבינו דוד ממי\"ץ ללבן פרורין במים בלילה כדי לאכלן בשחר בלא ברכת המוציא ובלא ברכת המזון שלא לאחר כדי שיתחזק ראשו ויוכל להגיד ההלכה:"
   },
   {
    "dh": "לחם העשוי לכותח פטור מן החלה",
    "text": " — והיינו כשעשאו כלמודים ופירש\"י עיסה שמיבשים בחמה וקשה דהא אמרינן במסכת חלה (פ\"א משנה ה) כל שתחלתו עיסה וסופו סופגנין חייבין בחלה וכל שתחלתו סופגנין וסופו עיסה חייבין נמי בחלה ושתחלתו סופגנין וסופו נמי סופגנין פטור מן החלה ופסק ר\"ת אם כן בניבלי\"ש ורישולא\"ש דתחלתן עיסה מברכין עליהן המוציא וחייבין בחלה אף על פי דסופן סופגנין ומתחלה היה ר\"ל ר\"ת דדוקא חייבין בחלה דמצות חלה בעודן עיסה דכתיב עריסותיכם והואיל שהיו מתחלה עיסה חייבין בחלה אבל מן המוציא פטורים דעכשיו הם סופגנין ול\"נ דהא לעיל קתני נטלן לאכלן מברך עליהן המוציא גבי מנחה אף על פי דעכשיו הם סופגנין שהמנחות מטוגנות בשמן. ורימשיי\"ש אף על גב דחייבין בחלה שהיו עיסה מתחלה פטורין מהמוציא ואין מברכין עליהם אלא בורא מיני מזונות דלית להו תוריתא דנהמא ואחר כך ברכת מעין שלש על המחיה ועל הכלכלה ור' יחיאל ז\"ל היה מסופק אם וירמשיי״ש חייבין בחלה משום עושה עיסתו בצק כדי לחלקה פטורין מן החלה דלית בהו שיעורא הכא גבי וירמשיי״ש נמי פעמים מחלקן שאין משימין שיעור חלה בקדרה אחת אך היה מצריך ליקח חלה בלא ברכה בשביל הספק וכל דבר שתחלתו סופגנין וסופו עיסה חייבין בחלה ובהמוציא דקיי״ל כרבי יוחנן פרק כל שעה (פסחים לז.) דפליגי ר' יוחנן ור״ל במעשה אילפס ופליגי בבלילתו רכה דהיינו תחלתו סופגנין וסופו עיסה אם נאפה בתנור או בכירה או באילפס בלא מים ושמן דר״ל ס״ל דלא הוה חייב אלא כשנאפה בתנור ואהא קאי מתניתין תחלתו סופגנין וסופו עיסה דחייב בחלה אבל באילפס פטור ורבי יוחנן מחייב דמעשה אילפס סופו עיסה קרינן ביה רק שלא יהיו משקין באילפס דהכי איתא בירושלמי כל שהאור תחתיו חייב בחלה ומברכין עליו המוציא אבל אנילי״ש אין מברכין עליו המוציא דלא הוי אלא גובלא בעלמא ומיהו אם קבע סעודתיה עלייהו כמו בפורים מברך המוציא וכל דבר שתחלתו סופגנין וגם סופו כגון הני סופגנין שמטגנין אותן בשמן שקורין בוניי״ש פטורין מן החלה:"
   }
  ],
  "translations": []
 },
 {
  "id": "38a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לח",
  "amud": "א",
  "dafEn": "38a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "כעבין חייבין כלמודין פטורים א\"ל אביי לרב יוסף האי כובא דארעא מאי מברכין עלויה א\"ל מי סברת נהמא הוא גובלא בעלמא הוא ומברכין עלויה בורא מיני מזונות מר זוטרא קבע סעודתיה עלויה וברך עלויה המוציא לחם מן הארץ ושלש ברכות אמר מר בר רב אשי ואדם יוצא בהן ידי חובתו בפסח מ\"ט (דברים טז, ג) לחם עוני קרינן ביה ואמר מר בר רב אשי האי דובשא דתמרי מברכין עלויה שהכל נהיה בדברו מ\"ט זיעה בעלמא הוא כמאן כי האי תנא דתנן דבש תמרים ויין תפוחים וחומץ ספוניות ושאר מי פירות של תרומה רבי אליעזר מחייב קרן וחומש ורבי יהושע פוטר א\"ל ההוא מרבנן לרבא טרימא מהו לא הוה אדעתיה דרבא מאי קאמר ליה יתיב רבינא קמיה דרבא א\"ל דשומשמי קא אמרת או דקורטמי קא אמרת או דפורצני קא אמרת אדהכי והכי אסקיה רבא לדעתיה אמר ליה חשילתא ודאי קא אמרת ואדכרתן מלתא הא דאמר רב אסי האי תמרי של תרומה מותר לעשות מהן טרימא ואסור לעשות מהן שכר והלכתא תמרי ועבדינהו טרימא מברכין עלוייהו בורא פרי העץ מאי טעמא במלתייהו קיימי כדמעיקרא. שתיתא רב אמר שהכל נהיה בדברו ושמואל אמר בורא מיני מזונות אמר רב חסדא ולא פליגי הא בעבה הא ברכה עבה לאכילה עבדי לה רכה לרפואה קא עבדי לה מתיב רב יוסף ושוין שבוחשין את השתות בשבת ושותין זיתום המצרי ואי ס\"ד לרפואה קא מכוין רפואה בשבת מי שרי א\"ל אביי ואת לא תסברא והא תנן כל האוכלין אוכל אדם לרפואה בשבת וכל המשקין שותה אלא מה אית לך למימר גברא לאכילה קא מכוין ה\"נ גברא לאכילה קא מכוין לישנא אחרינא אלא מה אית לך למימר גברא לאכילה קא מכוין ורפואה ממילא קא הויא ה\"נ לאכילה קא מכוין ורפואה ממילא קא הויא וצריכא דרב (ושמואל) דאי מהאי ה\"א לאכילה קא מכוין ורפואה ממילא קא הויא אבל הכא כיון דלכתחלה לרפואה קא מכוין לא לבריך עלויה כלל קמ\"ל כיון דאית ליה הנאה מיניה בעי ברוכי: שעל הפת הוא אומר המוציא וכו': ת\"ר מה הוא אומר המוציא לחם מן הארץ רבי נחמיה אומר מוציא לחם מן הארץ אמר רבא במוציא כולי עלמא לא פליגי דאפיק משמע דכתיב (במדבר כג, כב) אל מוציאם ממצרים כי פליגי בהמוציא רבנן סברי המוציא דאפיק משמע דכתיב (דברים ח, טו) המוציא לך מים מצור החלמיש ורבי נחמיה סבר המוציא דמפיק משמע שנאמר (שמות ו, ז) המוציא אתכם מתחת סבלות מצרים ורבנן ההוא הכי קאמר להו קודשא בריך הוא לישראל כד מפיקנא לכו עבידנא לכו מלתא כי היכי דידעיתו דאנא הוא דאפיקית יתכון ממצרים דכתיב (שמות ו, ז) וידעתם כי אני ה' אלהיכם המוציא משתבחין ליה רבנן לרבי זירא [את] בר רב זביד אחוה דר\"ש בר רב זביד דאדם גדול הוא ובקי בברכות הוא אמר להם לכשיבא לידכם הביאוהו לידי זמנא חדא איקלע לגביה אפיקו ליה ריפתא פתח ואמר מוציא אמר זה הוא שאומרים עליו דאדם גדול הוא ובקי בברכות הוא בשלמא אי אמר המוציא",
  "rashi": [
   {
    "dh": "כעבין",
    "text": " — ערוכה ומקוטפת כגלוסקאות נאות גלי דעתיה דללחם עשאה:"
   },
   {
    "dh": "כלמודין",
    "text": " — כנסרים בעלמא שלא הקפיד על עריסתם ודוגמתו שנינו במועד קטן (פ\"ב דף יב.) עושה לו למודין לוחין לבור של יין לכסותו:"
   },
   {
    "dh": "זיעה בעלמא הוא",
    "text": " — ואינו פרי לברך עליו בורא פרי העץ:"
   },
   {
    "dh": "וחומץ ספוניות",
    "text": " — סופי ענבים שאין מתבשלים עולמית ועושים מהן חומץ:"
   },
   {
    "dh": "מחייב קרן וחומש",
    "text": " — לשותה ממנו בשוגג:"
   },
   {
    "dh": "ור' יהושע פוטר",
    "text": " — דזיעה בעלמא הוא ואין שם תרומה חל עליו ואין לך פרי הניתן למשקה אלא זיתים וענבים בלבד והיינו כמר בר רב אשי:"
   },
   {
    "dh": "טרימא מהו",
    "text": " — מה מברכין עליו ושם טרימא כל דבר הכתוש קצת ואינו מרוסק:"
   },
   {
    "dh": "לא הוה אדעתא דרבא",
    "text": " — לא היה מבין מהו שואל:"
   },
   {
    "dh": "א\"ל",
    "text": " — רבינא לההוא מרבנן איזו טרימא אתה שואל:"
   },
   {
    "dh": "דקורטמי",
    "text": " — כרכום שכותשים אותו ונותנין בו יין ושותין:"
   },
   {
    "dh": "או דשומשמי",
    "text": " — להוציא שמנן:"
   },
   {
    "dh": "או דפורצני",
    "text": " — כתישת ענבים לתת לתוך החרצנים מים לעשות תמד:"
   },
   {
    "dh": "א\"ל רבא חשילתא קא אמרת",
    "text": " — מתוך דברי רבינא הבין רבא את השאלה א\"ל דבר מעוך שאלתני כמו ביעי חשילתא דשחיטת חולין (דף צג.):"
   },
   {
    "dh": "מותר לעשות מהן טרימא",
    "text": " — שאינו מפסידה אלמא דבמילת' קאי וכיון דהכי הוא מברכין עליה ב\"פ העץ:"
   },
   {
    "dh": "והלכתא",
    "text": " — ל\"ג ומהלכות גדולות הוא:"
   },
   {
    "dh": "שתיתא",
    "text": " — מאכל העשוי מקמח קליות שנתיבשו בתנור בעוד שהשבלים לחים:"
   },
   {
    "dh": "עבה לאכילה עבידא",
    "text": " — ובמילת' קיימא:"
   },
   {
    "dh": "שבוחשין",
    "text": " — מגיסין בכף לערבו יפה במימיו:"
   },
   {
    "dh": "זיתום המצרי",
    "text": " — מפורש במסכת פסחים (דף מב:):"
   },
   {
    "dh": "וכל המשקים שותה",
    "text": " — אלמא לאכילה מכוין ורפואה ממילא הויא הכא נמי לאכילה מכוין כו':"
   },
   {
    "dh": "ה\"ג וצריכא דרב ושמואל",
    "text": " — ואע\"ג דתניא לענין שבת דאוכל הוא ומותר לאכלו בשבת איצטריך למימר דטעון ברכה:"
   },
   {
    "dh": "ה\"ג דסד\"א כיון דלרפואה קא מכוין לא לבעי ברכה קמ\"ל כיון דמתהני מיניה. שהרי מאכל הוא בעי ברוכי",
    "text": ""
   },
   {
    "dh": "והלכתא",
    "text": " — ל״ג ומהלכות גדולות הוא:"
   },
   {
    "dh": "דאפיק משמע",
    "text": " — שהוציא כבר והא ודאי ברכה הגונה דלשעבר בעינן שהרי כבר הוציא הלחם הזה מן הארץ שהוא בא ליהנות הימנו:"
   },
   {
    "dh": "דכתיב אל מוציאם ממצרים",
    "text": " — וכשנאמרה פרשת בלעם כבר יצאו:"
   },
   {
    "dh": "המוציא לך מים",
    "text": " — וכבר הוציא:"
   },
   {
    "dh": "ורבי נחמיה סבר דמפיק משמע",
    "text": " — שעתיד להוציא דכתיב המוציא אתכם וכשנאמר פסוק זה למשה עדיין לא יצאו והמוציא לך מים עדיין היה מוציא כל ימי היותם במדבר:"
   },
   {
    "dh": "דאפיקית יתכון",
    "text": " — שאני הוא שהוצאתי אתכם:"
   }
  ],
  "tosafot": [
   {
    "dh": "מר זוטרא קבע סעודתיה עלויה",
    "text": " — וכן ניל\"ש אי קבע סעודתיה עליה מברכין עליה המוציא וכן צוה הר\"מ בפורים שקובעין סעודתן עליהן לברך המוציא בפת תחלה כדי לפוטרן מברכה שהיה מסופק אי הוה קביעותייהו קביעות או לא:"
   },
   {
    "dh": "האי דובשא דתמרי מברכין עלויה שהכל",
    "text": " — וכן משקין מכל מיני פירות בר מתירוש ויצהר כדאמרינן גבי ערלה ולאפוקי מה\"ג שפירש דמיירי שנתן לתוכן מים ושכר דידן אע\"ג דשמא יש בהן כזית בכדי אכילת פרס לא מברכין עליו בורא מיני מזונות אלא שהכל ואפי' לרב ושמואל דאמרי כל שיש בו מחמשת המינין מברכין עליו בורא מיני מזונות הכא לא הוי בהו ממש שעורים ואין שכר אלא טעמא בעלמא ועוד משום שיש בו עלויה אחרינא בפת ועוד בשתיה אומר שהכל:"
   },
   {
    "dh": "ושוין שבוחשין",
    "text": " — רבי ור' יוסי פליגי גבי נותן מים לתוך המורסן ובקלישה מיירי מדקתני ובוחשין ולא קתני לשון גבול והכי דייקינן התם:"
   },
   {
    "dh": "ואי ס\"ד לרפואה עבדי ליה רפואה בשבת מי שרי",
    "text": " — דסובר דכיון דכל שעקרו לרפואה ואין רגילות לעשותו לצורך אכילה אסור בשבת וכו':"
   },
   {
    "dh": "והא תנן כל האוכלין וכו'",
    "text": " — דמשמע מדנקט כל האוכלין דאפי' כל שעקרו לרפואה כיון שראוי לאכילה שפיר דמי מדנקט כל ומסיק הגמרא וצריכא דרב ושמואל דפשיטא דמתניתין שריא אף על פי שעומד לרפואה אבל דרב ושמואל אשמעינן דלא נימא כיון דעקרו לרפואה לא לבריך עליה כלל קא משמע לן כיון דמתהני מיניה בעי ברוכי ומכל מקום לא יברך אלא שהכל כיון שאינו עשוי לסעוד כי אם לשתות ואם כן כל דבר שיש בו מחמשת המינין ואינו עשוי לסעוד כי אם לשתות כגון שכר וכיוצא בו מברך שהכל וכהאי גוונא פסק בה\"ג והלכתא שתיתא עבה מברך בורא מיני מזונות קלישתא מברך שהכל ואף על פי שלרפואה נעשית היכא דאית ליה הנאה מיניה מברך:"
   }
  ],
  "translations": []
 },
 {
  "id": "38b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לח",
  "amud": "ב",
  "dafEn": "38b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אשמעינן טעמא ואשמעינן דהלכתא כרבנן אלא דאמר מוציא מאי קמ\"ל ואיהו דעבד לאפוקי נפשיה מפלוגתא והלכתא המוציא לחם מן הארץ דקי\"ל כרבנן דאמרי דאפיק משמע: ועל הירקות אומר וכו': קתני ירקות דומיא דפת מה פת שנשתנה ע\"י האור אף ירקות נמי שנשתנו ע\"י האור אמר רבנאי משמיה דאביי זאת אומרת שלקות מברכין עליהן בורא פרי האדמה (ממאי מדקתני ירקות דומיא דפת) דרש רב חסדא משום רבינו ומנו רב שלקות מברכין עליהם בורא פרי האדמה ורבותינו היורדין מארץ ישראל ומנו עולא משמיה דר' יוחנן אמר שלקות מברכין עליהן שהכל נהיה בדברו ואני אומר כל שתחלתו בורא פרי האדמה שלקו שהכל נהיה בדברו וכל שתחלתו שהכל נהיה בדברו שלקו בורא פרי האדמה בשלמא כל שתחלתו שהכל נהיה בדברו שלקו בפה\"א משכחת לה בכרבא וסלקא וקרא אלא כל שתחלתו בפה\"א שלקו שהכל היכי משכחת לה א\"ר נחמן בר יצחק משכחת לה בתומי וכרתי דרש רב נחמן משום רבינו ומנו שמואל שלקות מברכין עליהם בפה\"א וחברינו היורדים מארץ ישראל ומנו עולא משמיה דר' יוחנן אמר שלקות מברכין עליהן שהכל נהיה בדברו ואני אומר במחלוקת שנויה דתניא יוצאין ברקיק השרוי ובמבושל שלא נמוח דברי ר\"מ ור' יוסי אומר יוצאים ברקיק השרוי אבל לא במבושל אע\"פ שלא נמוח ולא היא דכ\"ע שלקות מברכין עליהן בפה\"א ועד כאן לא קאמר ר' יוסי התם אלא משום דבעינן טעם מצה וליכא אבל הכא אפי' רבי יוסי מודה אמר ר' חייא בר אבא א\"ר יוחנן שלקות מברכין עליהם בפה\"א ור' בנימין בר יפת א\"ר יוחנן שלקות מברכין עליהם שהכל נהיה בדברו א\"ר נחמן בר יצחק קבע עולא לשבשתיה כר' בנימין בר יפת תהי בה ר' זירא וכי מה ענין ר' בנימין בר יפת אצל ר' חייא בר אבא ר' חייא בר אבא דייק וגמיר שמעתא מרבי יוחנן רביה ורבי בנימין בר יפת לא דייק ועוד רבי חייא בר אבא כל תלתין יומין מהדר תלמודיה קמיה דר' יוחנן רביה ור' בנימין בר יפת לא מהדר ועוד בר מן דין ובר מן דין דההוא תורמסא דשלקי ליה שבע זמנין בקדרה ואכלי ליה בקנוח סעודה אתו ושאלו לר' יוחנן ואמר להו מברכין עלויה בורא פרי האדמה ועוד אמר ר' חייא בר אבא אני ראיתי את ר' יוחנן שאכל זית מליח ובריך עליו תחלה וסוף אי אמרת בשלמא שלקות במילתייהו קיימי בתחלה מברך עליו בורא פרי העץ ולבסוף מברך עליו ברכה אחת מעין שלש אלא אי אמרת שלקות לאו במילתייהו קיימי בשלמא בתחלה מברך עליו שהכל נהיה בדברו אלא לבסוף מאי מברך דילמא בורא נפשות רבות וחסרונן על כל מה שברא מתיב רב יצחק בר שמואל ירקות שאדם יוצא בהן ידי חובתו בפסח יוצא בהן ובקלח שלהן אבל לא כבושין ולא שלוקין ולא מבושלין ואי ס\"ד במילתייהו קאי שלוקין אמאי לא שאני התם דבעינן טעם מרור וליכא אמר ליה רבי ירמיה לרבי זירא רבי יוחנן היכי מברך על זית מליח כיון דשקילא לגרעיניה",
  "rashi": [
   {
    "dh": "אשמעינן טעמא",
    "text": " — פירושא דקרא כמו שפירשנוהו ולמדנו פירושו:"
   },
   {
    "dh": "ואשמעינן הלכה כרבנן",
    "text": " — דהמוציא דאפיק הוא:"
   },
   {
    "dh": "מאי קמשמע לן",
    "text": " — הכל מודים בזו:"
   },
   {
    "dh": "אף ירקות שנשתנו כו'",
    "text": " — ואפילו הכי במילתייהו קיימי ומברכין עלייהו בורא פרי האדמה:"
   },
   {
    "dh": "שלקות",
    "text": " — כל ירק שלוק:"
   },
   {
    "dh": "דרש רב חסדא",
    "text": " — כך:"
   },
   {
    "dh": "משום רבינו",
    "text": " — רב:"
   },
   {
    "dh": "שלקות אומר בורא פרי האדמה ורבותינו כו' ומאן נינהו עולא אמר רבי יוחנן שהכל",
    "text": " — הרי הדבר במחלוקת:"
   },
   {
    "dh": "ואני אומר",
    "text": " — ליישב דבריהם שאינן חלוקין יש מהן פרי האדמה ויש מהן שהכל:"
   },
   {
    "dh": "כל",
    "text": " — ירק הנאכל חי שתחלתו ב\"פ האדמה שלקו אפקיה ממלתיה לגריעותא ומברך שהכל ולקמן מוקי לה בתומי וכרתי:"
   },
   {
    "dh": "וכל",
    "text": " — ירק שאין דרכו ליאכל חי שמתחלתו אם אכלו חי שהכל הוא מברך:"
   },
   {
    "dh": "שלקו",
    "text": " — והביאו לדרך אכילתו הוא עיקר פריו ומברך בורא פרי האדמה:"
   },
   {
    "dh": "דרש רב נחמן",
    "text": " — כך:"
   },
   {
    "dh": "משום רבינו",
    "text": " — שמואל:"
   },
   {
    "dh": "שלקות מברך בורא פרי האדמה וחברינו כו'",
    "text": " — רב נחמן חשוב ולא קרי לעולא רבותינו:"
   },
   {
    "dh": "אמר שלקות שהכל ואני אומר",
    "text": " — שהם חלוקין בפלוגתא דרבי מאיר ורבי יוסי ודברי שמואל ודברי ר' יוחנן בכל מיני ירקות הן וחלוקין זה על זה שמואל כר\"מ דאמר מבושל קאי במלתיה ור' יוחנן קאי כר' יוסי:"
   },
   {
    "dh": "יוצאין ברקיק השרוי",
    "text": " — במים ידי אכילת מצה של מצוה וקרינן ביה לחם עוני:"
   },
   {
    "dh": "אבל לא במבושל",
    "text": " — דתו לאו לחם איקרי:"
   },
   {
    "dh": "אפילו ר' יוסי מודה",
    "text": " — דלענין ברכה במילתיה קאי:"
   },
   {
    "dh": "אמר רב נחמן קבע עולא לשבשתיה כר' בנימין",
    "text": " — עולא שאמר משום ר' יוחנן לעיל שהכל למד וקבע שבושו כרבי בנימין עד שנתקעה בלבו ועכשיו אומר בבית המדרש בשם רבי יוחנן:"
   },
   {
    "dh": "תהי בה ר' זירא",
    "text": " — במחלוקת זו שהוזכרה בבית המדרש וכי מה ענין להזכיר דברי ר' בנימין אצל דברי רבי חייא בר אבא במחלוקת בית המדרש הרי אינו כדאי לחלוק עליו:"
   },
   {
    "dh": "בר מן דין ובר מן דין",
    "text": " — לבר משתי ראיות הללו שאמרתי שאין רבי בנימין כלום אצל רבי חייא יש לנו עוד ראיה שלא אמר רבי יוחנן מימיו שלקות שהכל:"
   },
   {
    "dh": "וא\"ל בורא פרי האדמה",
    "text": " — אלמא אע\"ג דשלקיה קאי במלתיה:"
   },
   {
    "dh": "שאכל זית מליח",
    "text": " — שהיה מלוח זה כמה ימים וקי\"ל (פסחים עו.) מליח כרותח:"
   },
   {
    "dh": "אבל לא כבושין",
    "text": " — בירקות של מרור היא שנויה בפרק כל שעה (פסחים דף לט.) לומר שאין יוצאין בהן שלוקין משום מרור אלמא לאו במלתייהו קיימי:"
   },
   {
    "dh": "שלוק הוי נימוח טפי ממבושל",
    "text": ""
   },
   {
    "dh": "דבעינן טעם מרור וליכא",
    "text": " — אבל לענין ברכה שם פרי עליו:"
   }
  ],
  "tosafot": [
   {
    "dh": "והלכתא המוציא וכו'",
    "text": " — ואע\"פ דבמוציא כ\"ע לא פליגי דאפיק משמע ובירושלמי מפרש טעמא כדי שלא לערב האותיות כגון העולם מוציא ואע\"ג דבלחם מן נמי איכא עירוב שאני התם דקרא כתיב (תהלים קד) מצמיח חציר לבהמה ועשב לעבודת האדם להוציא לחם מן הארץ ועל כן יש לבצוע בשתי ידיו בעשר אצבעות נגד י' תיבות שבמקרא זה:"
   },
   {
    "dh": "מדקתני ירקות דומיא דפת",
    "text": " — לא הוי ירקות דומיא דפת שהרי פת אישתני לעלויא ויש ירקות שאין משתנות לעלויא אלא כלומר מה הפת אין בשול מגרע את הברכה אף הירקות נמי במלתייהו קיימי ולא מגרע להו הבשול:"
   },
   {
    "dh": "משכחת לה בתומי וכרתי",
    "text": " — וא\"ת והרי נראה לעינים דהבשול משביחן וי\"ל דהיינו בשביל הבשר והמלח שבתוכן ונראין הדברים שכל דבר שהוא כל כך טוב מבושל כמו חי וחי כמו מבושל כמו מיני קטניות וכן תפוחים יש להן ברכה הראשונה שכל כך שוין מבושלין כמו חיין ומטעם זה מברכינן נמי על היין מבושל בורא פרי הגפן שכל כך הוא טוב אחר הבשול כמו קודם לכן וקרא וסלקא וכרוב וכיוצא בהן שטובין יותר מבושלין מחיין כשהן חיין מברכין עליהם שהכל ומבושלין ב\"פ האדמה וכן אותן ערמוניות וחבושים שאינן ראוין לאכלן חיין כמו מבושלין בתחלה מברכין עליהן שהכל ומבושלין בורא פרי העץ אך אותן ערמוניות שקורין לומיברד\"ש מברך עליהן בורא פרי העץ אפילו בתחלה וכל דבר המתקלקל בבשולו כגון תומי וכרתי וכיוצא בהן כשהן חיין מברך עליהן בורא פרי האדמה ומבושלים שהכל כך נראה לרבינו יהודה ומיהו הרב אלפס פסק בשלקות דאשתני לגריעותא ע\"י בשולן אומר בורא פרי האדמה כרב נחמן דאמר שלקות מברכין עליהן בורא פרי האדמה דר' חייא בר אבא קאי נמי כוותיה ובכל שלקות מיירי ר' חייא בר אבא אף באותן דמשתנים לגריעותא מדפליג להו גמרא אהדדי ר' חייא בר אבא ור' בנימין בר יפת ואגוז מטוגן בדבש מברך עליו בורא פרי העץ דאגוז עיקר:"
   },
   {
    "dh": "כל תלתין יומין מהדר תלמודיה",
    "text": " — לאו דוקא כל תלמודו אלא כל מה שהיה לומד בשלשים יום היה חוזר הכל לפניו ביום שלשים ואחד:"
   },
   {
    "dh": "זית מליח",
    "text": " — ומליח כרותח:"
   }
  ],
  "translations": []
 },
 {
  "id": "39a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לט",
  "amud": "א",
  "dafEn": "39a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בצר ליה שיעורא אמר ליה מי סברת כזית גדול בעינן כזית בינוני בעינן (והא איכא) וההוא דאייתו לקמיה דרבי יוחנן זית גדול הוה דאע\"ג דשקלוה לגרעינותיה פש ליה שיעורא דתנן זית שאמרו לא קטן ולא גדול אלא בינוני וזהו אגורי ואמר רבי אבהו לא אגורי שמו אלא אברוטי שמו ואמרי לה סמרוסי שמו ולמה נקרא שמו אגורי ששמנו אגור בתוכו נימא כתנאי דהנהו תרי תלמידי דהוו יתבי קמיה דבר קפרא הביאו לפניו כרוב ודורמסקין ופרגיות נתן בר קפרא רשות לאחד מהן לברך קפץ וברך על הפרגיות לגלג עליו חבירו כעס בר קפרא אמר לא על המברך אני כועס אלא על המלגלג אני כועס אם חבירך דומה כמי שלא טעם טעם בשר מעולם אתה על מה לגלגת עליו חזר ואמר לא על המלגלג אני כועס אלא על המברך אני כועס ואמר אם חכמה אין כאן זקנה אין כאן תנא ושניהם לא הוציאו שנתן מאי לאו בהא קא מיפלגי דמברך סבר שלקות ופרגיות שהכל נהיה בדברו הלכך חביב עדיף ומלגלג סבר שלקות ב\"פ האדמה פרגיות שהכל נהיה בדברו הלכך פירא עדיף לא דכ\"ע שלקות ופרגיות שהכל נהיה בדברו והכא בהאי סברא קא מיפלגי מר סבר חביב עדיף ומר סבר כרוב עדיף דזיין אמר ר' זירא כי הוינן בי רב הונא אמר לן הני גרגלידי דלפתא פרמינהו פרימא רבא בפה\"א פרימא זוטא שהכל נהיה בדברו וכי אתאן לבי רב יהודה אמר לן אידי ואידי בפה\"א והאי דפרמינהו טפי כי היכי דנמתיק טעמיה אמר רב אשי כי הוינן בי רב כהנא אמר לן תבשילא דסלקא דלא מפשו בה קמחא בורא פרי האדמה דלפתא דמפשו בה קמחא טפי בורא מיני מזונות והדר אמר אידי ואידי בורא פרי האדמה והאי דשדי בה קמחא טפי לדבוקי בעלמא עבדי לה אמר רב חסדא תבשיל של תרדין יפה ללב וטוב לעינים וכ\"ש לבני מעים אמר אביי והוא דיתיב אבי תפי ועביד תוך תוך אמר רב פפא פשיטא לי מיא דסלקא כסלקא ומיא דלפתא כלפתא ומיא דכולהו שלקי ככולהו שלקי בעי רב פפא מיא דשיבתא מאי למתוקי טעמא עבדי או לעבורי זוהמא עבדי לה ת\"ש השבת משנתנה טעם בקדירה אין בה משום תרומה ואינה מטמאה טומאת אוכלים שמע מינה למתוקי טעמא עבדי לה שמע מינה אמר רב חייא בר אשי פת צנומה בקערה מברכין עליה המוציא ופליגא דר' חייא דאמר ר' חייא צריך שתכלה ברכה עם הפת מתקיף לה רבא מאי שנא צנומה דלא משום דכי כליא ברכה אפרוסה קא כליא על הפת נמי כי קא גמרה אפרוסה גמרה",
  "rashi": [
   {
    "dh": "בצר ליה שיעורא",
    "text": " — וגבי ברכת פירות הארץ אכילה כתיבה ואכילה בכזית:"
   },
   {
    "dh": "כזית שאמרו",
    "text": " — לענין שיעור כל אכילות:"
   },
   {
    "dh": "אגור בתוכו",
    "text": " — מזומן לצאת ממנו שאינו נבלע בפרי כמשקה תפוחים ותותים אלא אגור כמשקה ענבים:"
   },
   {
    "dh": "דורמסקין",
    "text": " — אף הן שלקות מעשב שקורין אקדלשי\"ט בלע\"ז כך ראיתי בפירוש בבא קמא של רבינו יצחק ברבי יהודה אבל כאן פירש פרונ\"ש וכן שמעתי אני כאן ובבבא קמא (פ\"י דף קטז:) פרונ\"ש ואי אפשר להעמידה דא\"כ הרי ברכתו ב\"פ העץ והאיך קדם וברך על הפרגיות שברכתן שהכל ואינם כדברים חשובים כדמפרש ואזיל:"
   },
   {
    "dh": "פרגיות",
    "text": " — בשר עוף שקורין פרדרי\"א:"
   },
   {
    "dh": "שלא טעם טעם בשר",
    "text": " — ונעשה הבשר חביב עליו:"
   },
   {
    "dh": "זקנה אין כאן",
    "text": " — הלא זקן אני והיה לו לשאלני על איזה מהן יברך לפטור את שאר המינין ודברים הללו אינן באין ללפת את הפת אלא שלא מחמת הסעודה הן באין ואמרינן לקמן (ברכות דף מא:) דטעונין ברכה לפניהם ואין הפת פוטרתן:"
   },
   {
    "dh": "דמברך סבר שלקות",
    "text": " — דכרוב ודורמסקין שהכל ברכתן כפרגיות דעל דבר שאין גדולו מן הארץ כגון בשר ביצים ודגים תנא במתניתין שהכל וכיון דברכותיהם שוות חביב עדיף:"
   },
   {
    "dh": "ומלגלג סבר שלקות בורא פרי האדמה",
    "text": " — שהיא ברכה חשובה לעצמה לדברים חשובים והיה לו להקדימו:"
   },
   {
    "dh": "כרוב עדיף דזיין",
    "text": " — דתניא לקמן (ברכות דף מד:) כרוב למזון ותרדין לרפואה:"
   },
   {
    "dh": "גרגלידי דלפתא",
    "text": " — ראשי לפתות:"
   },
   {
    "dh": "פרמינהו",
    "text": " — מנושיי\"ר בלע\"ז לשון קניבת ירק:"
   },
   {
    "dh": "פרימא זוטא",
    "text": " — גריעותא היא ובשאכלו חי קאי:"
   },
   {
    "dh": "אבי תפי",
    "text": " — על מקום שפיתת הקדירה:"
   },
   {
    "dh": "ועביד תוך תוך",
    "text": " — כלומר ששלוק ונמחה מאד וקול רתיחתו נשמעת כקול תוך תוך:"
   },
   {
    "dh": "מיא דסלקא",
    "text": " — תבשיל של תרדין:"
   },
   {
    "dh": "כסלקא",
    "text": " — לענין ברכה:"
   },
   {
    "dh": "דשיבתא",
    "text": " — ירק שנותנין מעט בקדרה למתק בעלמא ולא לאכלו אני\"ט בלע\"ז:"
   },
   {
    "dh": "למתוקי טעמא עביד",
    "text": " — ומברכין על מימי תבשילו ב\"פ האדמה:"
   },
   {
    "dh": "השבת אין בה",
    "text": " — בבד שלה משנתנוה בקדרה והוציאוה אין בה שוב משום איסור תרומה דהוה ליה כעץ בעלמא מדקתני משנתנה טעם שמע מינה לטעמא עבידא:"
   },
   {
    "dh": "פת צנומה",
    "text": " — יבשה שנתנה בקערה לשרות וכן צנומות דקות:"
   },
   {
    "dh": "צריך שתכלה",
    "text": " — ברכת המוציא עם פריסת הפרוסה מן הפת והאי פרוס ועומד הוא:"
   },
   {
    "dh": "אפרוסה (כליא)",
    "text": " — כיון דאמרת עם פריסת הפרוסה תכלה מאי חשיבותא ומאי אהניתא:"
   }
  ],
  "tosafot": [
   {
    "dh": "בצר ליה שיעורא",
    "text": " — היינו דוקא בברכה שלאחריו דבעינן שיעור אבל בברכה שלפניו אפילו פחות מכשיעור דאסור ליהנות בעולם הזה בלא ברכה בין לענין אכילה בין לענין שתיה אבל בברכה שלאחריו בעינן שיעור מלא לוגמיו על כן יש ליזהר לשתות מכוס של ברכה מלא לוגמיו כדי שיברך לאחריו מעין ג' ברכות והר\"י היה אומר בבורא נפשות כיון דלאו ברכה חשובה היא אפי' בבציר משיעורא מברכינן בורא נפשות רבות ולא נראה דכיון דבורא נפשות תקנוה כנגד על הגפן כי היכי דעל הגפן בעי שיעורא בבורא נפשות רבות נמי בעי שיעורא ובירושלמי ר' יוחנן היכי בריך אזית הא לא הוי שיעורא וקאמר משום בריה דאפילו לא אכל אלא פרידה אחת של ענב או פרידה אחת של רמון בעי ברוכי משום דבבריה מברכין אפילו פחות מכזית וחולק על גמרא דידן כדמשמע הכא א\"כ אין הלכה כמותו של ירושלמי וה\"ר יוסי היה מפרש שהירושלמי אינו חולק על הגמרא שלנו דהכא מיירי שהוסרו הגרעינים ונמלח אם כן לא היה כברייתו אבל אם אכלו שלם אפי' אם היה פרידה אחת של רמון מברך עליו תחלה וסוף וגמרא ירושל' היה סבור שהזית היה שלם ולכך הוצרך לתרץ באותו ענין דאכל פרידה דבריה ואינן חולקים יחד ועוד יש בירושלמי היכא דבריך אתורמוסא למיכליה ונפל מידיה ושקל אחרינא בעי ברוכי זמנא אחריתי ופריך מאי שנא מאמת המים פירוש דמברך לשתות והני אזלי והני אחריני נינהו וא\"צ לברך פעם אחרת ומשני הכא הוה דעתו מתחלה לזה שהיה יודע שילכו להן אבל בתורמוסא לא ידע שיפלו מידו ויאמר ברוך שם כבוד מלכותו לעולם ועד משום דהוה ברכה לבטלה וכן נכון לומר על כל ברכה לבטלה בשכמל\"ו:"
   },
   {
    "dh": "דורמסקין",
    "text": " — פירש\"י פרונ\"ש. ולא נראה דבסמוך משמע דמברכין עליהן בורא פרי האדמה וא\"כ בורא פרי העץ בעי ברוכי ונראה שהוא מין כרוב:"
   },
   {
    "dh": "נתן בר קפרא רשות לאחד מהן לברך",
    "text": " — ונראה דמיירי בברכה שלפניו דאי בשל אחריו הא אמרינן (חוליו קו.) דאין מזמנין על הפירות ומיירי בהסבו ואנו אין לנו שום הסבה אלא על הפת ולכך צריך לברך כל אחד על כל דבר הן בפירות הן ביין:"
   },
   {
    "dh": "חביב עדיף",
    "text": " — וכן הלכה אם יש לו שני מיני פירות לפניו חביב עדיף ובורא פרי האדמה עדיפא משהכל נהיה בדברו דמבוררת טפי וחשובה לעצמה מקרית ויברך על אותו המין ששייך בו פרי האדמה אף על פי שאותו המין שיש לברך עליו שהכל חביב עליו ואם לפניו פירות שהברכות שוות ואחד מהן הוא מז' המינין יברך תחלה על אותו של ז' המינין דעדיפי:"
   },
   {
    "dh": "מניח פרוסה בתוך השלמה ובוצע",
    "text": " — פירש רש\"י ובוצע לשתיהן או בוצע לשלמה בלבד והיינו ע\"י שניהן דכיון שהניח הפרוסה תחת השלמה נראה כמו שבוצע נמי אפרוסה ודוקא בוצע לשלמה אבל לא רצה לפרש ובוצע לאיזה מהן שירצה או לפרוסה או לשלמה דמדקאמר לתוך השלמה משמע דהשלמה עיקר ולפי' רש\"י ה\"פ ירא שמים יוצא ידי שניהם כדרב הונא וכדר' יוחנן בפתיתין ושלמה ולפי' ר\"ת לא מצינו לפרש הכי דקאי אפתיתין שהרי אינו צריך לעשות כן אלא יברך על השלמה ודי בכך לכ\"ע דאפילו רב הונא לא קאמר אלא על הפרוסה אם ירצה אבל פשיטא אם בירך על השלמה יצא ונראה לפירוש ר\"ת שניהם קאי אשני לחמים אפרוסה של חטים ושלמה של שעורים:"
   },
   {
    "dh": "מיא דסלקא כסלקא",
    "text": " — מברכין עליה בורא פרי האדמה אף על פי שאין בה אלא מים וטעם הירקות מברך עליהן כאשר יברך על הירקות אע\"ג דאמרינן לעיל דמי פירות זיעה בעלמא הוא יש לחלק:"
   },
   {
    "dh": "פת צנומה בקערה מברכין עליה המוציא לחם מן הארץ ופליגא דר' חייא",
    "text": " — וא\"ת היכי מיירי אם יש שלמה לפניו הא אמרינן בסמוך דכ\"ע שלמה עדיף ואי ליכא אלא צנומה היכי פליג עלה ר' חייא הא מסקינן לעיל (ברכות דף לז:) פרורין אף על פי שאין בהן כזית מברכין עליהן המוציא הואיל ואית בהו תוריתא דנהמא וי\"ל כגון דאיכא שלמה לפניו ובצע מן הצנומה רב חייא בר אשי סבר דהוי כמו שלמה מאחר שהיא חביבה [מברך עליה] ור' חייא ס\"ל צריך שתכלה ברכה עם הפת ואם כן בעינן שתכלה הברכה עם בציעת הפת וכיון שבצועה קודם לכן שלמה עדיף אבל אי ליכא שלמה מודה שיברך על הפרורים המוציא לחם מן הארץ:"
   }
  ],
  "translations": []
 },
 {
  "id": "39b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "לט",
  "amud": "ב",
  "dafEn": "39b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אלא אמר רבא מברך ואח\"כ בוצע נהרדעי עבדי כר' חייא ורבנן עבדי כרבא אמר רבינא אמרה לי אם אבוך עביד כר' חייא דאמר ר' חייא צריך שתכלה ברכה עם הפת ורבנן עבדי כרבא והלכתא כרבא דאמר מברך ואח\"כ בוצע: איתמר הביאו לפניהם פתיתין ושלמין אמר רב הונא מברך על הפתיתין ופוטר את השלמין ור' יוחנן אמר שלמה מצוה מן המובחר אבל פרוסה של חטין ושלמה מן השעורין דברי הכל מברך על הפרוסה של חטין ופוטר את השלמה של שעורין א\"ר ירמיה בר אבא כתנאי תורמין בצל קטן שלם אבל לא חצי בצל גדול ר' יהודה אומר לא כי אלא חצי בצל גדול מאי לאו בהא קמיפלגי דמר סבר חשוב עדיף ומר סבר שלם עדיף היכא דאיכא כהן כולי עלמא לא פליגי דחשוב עדיף כי פליגי דליכא כהן דתנן כל מקום שיש כהן תורם מן היפה וכל מקום שאין כהן תורם מן המתקיים ר' יהודה אומר אין תורם אלא מן היפה אמר רב נחמן בר יצחק וירא שמים יוצא ידי שניהן ומנו מר בריה דרבינא דמר בריה דרבינא מניח פרוסה בתוך השלמה ובוצע תני תנא קמיה דרב נחמן בר יצחק מניח הפרוסה בתוך השלמה ובוצע ומברך אמר ליה מה שמך א\"ל שלמן א\"ל שלום אתה ושלמה משנתך ששמת שלום בין התלמידים אמר רב פפא הכל מודים בפסח שמניח פרוסה בתוך שלמה ובוצע מאי טעמא (דברים טז, ג) לחם עוני כתיב א\"ר אבא ובשבת חייב אדם לבצוע על שתי ככרות מ\"ט (שמות טז, כב) לחם משנה כתיב א\"ר אשי חזינא ליה לרב כהנא דנקיט תרתי ובצע חדא ר' זירא הוה בצע אכולא שירותא א\"ל רבינא לרב אשי והא קא מתחזי כרעבתנותא אמר [ליה] כיון דכל יומא לא קעביד הכי והאידנא קא עביד לא מתחזי כרעבתנותא רב אמי ורב אסי כי הוה מתרמי להו ריפתא דערובא מברכין עליה המוציא לחם מן הארץ אמרי הואיל ואתעביד ביה מצוה חדא נעביד ביה מצוה אחריתי",
  "rashi": [
   {
    "dh": "אלא אמר רבא מברך ואח\"כ בוצע",
    "text": " — וגומר כל הברכה ואח\"כ מפריש הפרוסה דכליא ברכה אפת שלם:"
   },
   {
    "dh": "פתיתין ושלמין אמר רב הונא",
    "text": " — אם רצה מברך על הפתיתין ואם הפתיתין גדולים מן השלמין צריך לברך עליהן:"
   },
   {
    "dh": "כתנאי",
    "text": " — הא דאמרת פרוסה של חטין ושלמה של שעורין כו' תנאי היא:"
   },
   {
    "dh": "אבל לא חצי בצל גדול",
    "text": " — ואע\"פ שיש בו יותר מקטן שלם:"
   },
   {
    "dh": "במקום שיש כהן",
    "text": " — ונותנו לו מיד:"
   },
   {
    "dh": "במקום שאין כהן",
    "text": " — צריך לישראל שיצניענו עד שימצא כהן ליתנו לו וחצי בצל אין מתקיים:"
   },
   {
    "dh": "יוצא ידי שניהן",
    "text": " — ידי מחלוקת של רב הונא ורבי יוחנן:"
   },
   {
    "dh": "מניח פרוסה תחת השלמה",
    "text": " — ונמצאו שתיהן בידו ובוצע או משתיהן או מן השלמה:"
   },
   {
    "dh": "לחם עוני כתיב",
    "text": " — ודרכו של עני בפרוסה לפיכך צריך שיראה כבוצע מן הפרוסה:"
   },
   {
    "dh": "אכולה שירותא",
    "text": " — פרוסה גדולה שהיה די לו לכל הסעודה בשבת:"
   },
   {
    "dh": "ריפתא דערובא",
    "text": " — שערבו בו אתמול ערובי חצירות:"
   }
  ],
  "tosafot": [
   {
    "dh": "והלכתא כרבא דמברך ואח\"כ בוצע",
    "text": " — פי' שלא יפריש הפרוסה מן הפת עד אחר הברכה ויש שנוהגין לברך ברכת המוציא קודם שיחתוך כדי שתהא הפת שלמה בשעת ברכה ואין המנהג נכון לעשות דהוי היסח הדעת בין הברכה לאכילה ומיהו בשבת נכון להחמיר ולברך קודם שיחתוך שלא תשמט ידו לבצוע קודם שתכלה הברכה שאז לא יהיה לו לחם משנה ובפרק שלשה שאכלו (לקמן ברכות מז.) מסקינן דבעינן עד שתכלה אמן מפי העונין שלא יבצע קודם ויש שמביאים ראיה שצריך לסיים הברכה קודם שיבצע מדתני רבי חייא בירושלמי אין מברכין על הפת אלא בשעה שהוא פורס והיינו משום שאם יפרוס קודם הברכה שמא תפול הפרוסה מידו ולא יוכל לאכול פרוסה אחרת שיבצע בלא ברכה אלא יצטרך לחזור ולברך ויש כאן ברכה לבטלה אבל אם (לא) היה צריך לברך על כל הפת ולא יוכל לפרוס קודם הברכה אז אם תפול הפרוסה אינו מברך על פרוסה אחרת ויפטר בברכה ראשונ':"
   },
   {
    "dh": "מברך על הפתיתין ופוטר את השלמין",
    "text": " — פירש\"י אם הפתיתין והשלמין שוין יברך על איזה שירצה ואם הפתיתין גדולים צריך לברך על הפתיתין לפטור את השלמין ור' יוחנן אומר על השלמין מצוה מן המובחר אפי' אם הפתיתין גדולי' טפי ותימה א\"כ סברא הפוכה דלרב הונא פתיתין שהם גדולים עדיפי ולר' יוחנן שלמין עדיפי ואין סברא לומר דפליגי בהפוך סברות ועוד תימה אמאי שינה בסמוך לשונו דנקט לשון פרוסה של חטין ע\"כ פירש רבינו תם דמיירי בפתיתין גדולים ושלמים קטנים וה\"פ אמר רב הונא מברך על הפתיתין כלומר אם ירצה והוא הדין על השלמין אם ירצה ורבי יוחנן אמר שלמין עיקר וכן הלכה כרבי יוחנן דהא רב ורבי יוחנן הלכה כר' יוחנן וכל שכן לגבי רב הונא שהלכה כמותו שהיה תלמידו של רב דדוקא באמוראי בתראי אמרינן הלכה כבתראי:"
   },
   {
    "dh": "אבל פרוסה של חטין ושלמה מן השעורים ד\"ה מברך על הפרוסה של חטין",
    "text": " — דחיטי עדיפי משום דאקדמיה קרא אבל פתיתין ושלמין ממין אחד אפילו יהיו הפתיתין מפת נקיה והשלמין מפת קיבר מברך על השלמין כדאיתא בתוספתא (פרק ד) שלמין דגלוסקאות ושלמין דבעל הבית מברך על השלמין דגלוסקאות פרוסה דגלוסקאות ושלמין דבעל הבית מברך על השלמין דבעל הבית פת כשר ופת של נכרי מברך על הכשר (תחלה) וכן אמרינן בירושלמי פת טהור ופת טמא מברך על הטהור אבל אם פת של נכרי חביב ונקי ופת של ישראל אינו חביב מברך לאיזה שירצה כדאיתא בירושלמי פת נקי טמא ופת קיבר טהור מברך לאיזה שירצה אבל רבינו שמשון צוה לסלק הפת לבן של נכרי מעל השלחן עד לאחר ברכת המוציא. שני שלמין ממין אחד אם אחד יותר נקי מברך על הנקי דחביב ליה טפי:"
   },
   {
    "dh": "כתנאי כו'",
    "text": " — פירש רש\"י חצי בצל גדול קרי חשוב לפי שיש בו יותר מבצל קטן שלם ולא נראה דהא לכאורה משמע דלהכי נקט חצי בצל גדול משום דיש בחצי בצל גדול כמו בקטן שלם ולא יותר ועוד דאם כן לא הוי דומיא דחשוב דגבי פרוסה של חטין דקאי עלה דהתם שוין ויש לפרש דכהדדי שוין הם אבל דגדול טוב יותר לאכילה מן הקטן ועוד פירש רש\"י דמייתי תנאי אסיפא דמברך על הפרוסה של חטין ופוטר את השלמה של שעורים ומר סבר חשוב עדיף ומר סבר חטין דמקדמי בקרא עדיפי אבל א\"א לפרש דחטין עדיפי משום שפת של חטין חשוב מפת של שעורים דהא פי' דבמין אחד פת נקיה ופת קיבר השלם עדיף:"
   },
   {
    "dh": "ומר סבר שלם עדיף",
    "text": " — וא\"ת מנא ליה הא אימא דחטין חשיבי טפי משום דאקדמיה קרא ויש לומר דהכי מדמה דהתם אע\"ג דמסברא חשוב לכהן עדיף דכתיב (במדבר י״ח:ל׳) בהרימכם את חלבו ממנו ואפי' הכי קאמר דשלם עדיף ה\"נ נימא שלם עדיף מפתיתין של חטין אע\"ג דאקדמיה קרא והדין עם רש\"י שלא רצה לפרש כתנאי אפלוגתייהו דרבי יוחנן ורב הונא שהרי למאי דמפרש לרב הונא כשהן שוין מברך על איזו שירצה א\"כ לא קפיד אחשיבות ולא אשלמות וא\"כ מאי כתנאי איכא ולפר\"ת נמי דפי' דמברך על הפתיתין גדולים אם ירצה ואי בעי בריך על השלמים קטנים אלמא לא חשיב ליה עדיף אלא כי הדדי נינהו לרב הונא וא\"כ לא מצי קאי כתנאי אפלוגתא דפתיתין:"
   },
   {
    "dh": "כל היכא דאיכא כהן כ\"ע לא פליגי דחשיב עדיף",
    "text": " — ונהי דלעיל קאמר פתיתין גדולים ושלמים קטנים דמברך על השלמים היינו דוקא לברכה דלא איכפת ליה שיברך בגדול דלמה יברך בגדול הואיל ואינו נקי מזה אבל גבי נתינה לכהן איכא נפקותא דיתן לו הגדול החשוב טפי דניחא ליה:"
   },
   {
    "dh": "מניח פרוסה בתוך השלמה ובוצע",
    "text": " — פירש רש\"י ובוצע לשתיהן או בוצע לשלמה בלבד והיינו ע\"י שניהן דכיון שהניח הפרוסה תחת השלמה נראה כמו שבוצע נמי אפרוסה ודוקא בוצע לשלמה אבל לא רצה לפרש ובוצע לאיזה מהן שירצה או לפרוסה או לשלמה דמדקאמר לתוך השלמה משמע דהשלמה עיקר ולפי' רש\"י ה\"פ ירא שמים יוצא ידי שניהם כדרב הונא וכדר' יוחנן בפתיתין ושלמה ולפי' ר\"ת לא מצינו לפרש הכי דקאי אפתיתין שהרי אינו צריך לעשות כן אלא יברך על השלמה ודי בכך לכ\"ע דאפילו רב הונא לא קאמר אלא על הפרוסה אם ירצה אבל פשיטא אם בירך על השלמה יצא ונראה לפירוש ר\"ת שניהם קאי אשני לחמים אפרוסה של חטים ושלמה של שעורים:"
   },
   {
    "dh": "הכל מודים בפסח שמניח הפרוסה בתוך השלמה ובוצע מאי טעמא לחם עוני כתיב",
    "text": " — משום דכתיב לחם עוני מניח הפרוסה תחת השלמה ונראה כבוצע על הפרוסה ומ\"מ אין לבצוע כי אם על השלמה ועל הפרוסה יברך על אכילת מצה וכורכים ואוכלים משתיהן יחד כדי שיהא נראה כבוצע על הפרוסה וכן המנהג אבל אין לעשות המוציא וגם על אכילת מצה מן הפרוסה דהוי כעושה מצות חבילות חבילות ונראה לי דהא הוי ברכה של נהנין ואינם נקראים חבילות חבילות דהא אקידוש מברכים קידוש וברכת היין ורבינו מנחם מווינ\"א היה רגיל לעשות הכל על הפרוסה ואין השלמה באה כי אם בשביל לחם משנה והר\"י היה רגיל לברך תחלה ברכת המוציא על שתיהן קודם שיבצע ואחר כך מברך על אכילת מצה ובוצע משתיהן אחר כך ואין זה חבילות מאחר שהיה עושה על שתיהן ופעמים מפיק הר\"י נפשיה מפלוגתא ולא היה רוצה לשנות המנהג והיה מברך על השלמה תחלה המוציא והיה בוצע קצת ולא היה מפרידה עד שיברך על הפרוסה על אכילת מצה ובוצע משתיהן יחד:"
   }
  ],
  "translations": []
 },
 {
  "id": "40a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מ",
  "amud": "א",
  "dafEn": "40a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אמר רב טול ברוך טול ברוך אינו צריך לברך הבא מלח הבא לפתן צריך לברך ור' יוחנן אמר אפי' הביאו מלח הביאו לפתן נמי א\"צ לברך גביל לתורי גביל לתורי צריך לברך ורב ששת אמר אפילו גביל לתורי נמי אינו צריך לברך דאמר רב יהודה אמר רב אסור לאדם שיאכל קודם שיתן מאכל לבהמתו שנא' (דברים יא, טו) ונתתי עשב בשדך לבהמתך והדר ואכלת ושבעת: אמר רבא בר שמואל משום רבי חייא אין הבוצע רשאי לבצוע עד שיביאו מלח או לפתן לפני כל אחד ואחד רבא בר שמואל אקלע לבי ריש גלותא אפיקו ליה ריפתא ובצע להדיא אמרו ליה הדר מר משמעתיה אמר להו לית דין צריך בשש: ואמר רבא בר שמואל משום רבי חייא אין מי רגלים כלים אלא בישיבה אמר רב כהנא ובעפר תיחוח אפילו בעמידה ואי ליכא עפר תיחוח יעמוד במקום גבוה וישתין למקום מדרון: ואמר רבא בר שמואל משמיה דר' חייא אחר כל אכילתך אכול מלח ואחר כל שתייתך שתה מים ואי אתה נזוק תניא נמי הכי אחר כל אכילתך אכול מלח ואחר כל שתייתך שתה מים ואי אתה נזוק תניא אידך אכל כל מאכל ולא אכל מלח שתה כל משקין ולא שתה מים ביום ידאג מן ריח הפה ובלילה ידאג מפני אסכרה: ת\"ר המקפה אכילתו במים אינו בא לידי חולי מעים וכמה אמר רב חסדא קיתון לפת אמר רב מרי א\"ר יוחנן הרגיל בעדשים אחת לשלשים יום מונע אסכרה מתוך ביתו אבל כל יומא לא מ\"ט משום דקשה לריח הפה ואמר רב מרי אמר רבי יוחנן הרגיל בחרדל אחת לשלשים יום מונע חלאים מתוך ביתו אבל כל יומא לא מ\"ט משום דקשה לחולשא דלבא אמר רב חייא בר אשי אמר רב הרגיל בדגים קטנים אינו בא לידי חולי מעים ולא עוד אלא שדגים קטנים מפרין ומרבין ומברין כל גופו של אדם א\"ר חמא ברבי חנינא הרגיל בקצח אינו בא לידי כאב לב מיתיבי רשב\"ג אומר קצח אחד מששים סמני המות הוא והישן למזרח גרנו דמו בראשו לא קשיא הא בריחו הא בטעמו אימיה דרבי ירמיה אפיא ליה ריפתא ומדבקא ליה ומקלפא ליה: ר' יהודה אומר בורא מיני דשאים: א\"ר זירא ואיתימא ר' חיננא בר פפא אין הלכה כרבי יהודה וא\"ר זירא ואיתימא ר' חיננא בר פפא מ\"ט דרבי יהודה אמר קרא (תהלים סח, כ) ברוך ה' יום יום וכי ביום מברכין אותו ובלילה אין מברכין אותו אלא לומר לך כל יום ויום תן לו מעין ברכותיו הכא נמי כל מין ומין תן לו מעין ברכותיו. וא\"ר זירא ואיתימא ר' חיננא בר פפא בא וראה שלא כמדת הקב\"ה מדת בשר ודם מדת בשר ודם כלי ריקן מחזיק מלא אינו מחזיק אבל הקב\"ה אינו כן מלא מחזיק ריקן אינו מחזיק שנאמר (שמות טו, כו) ויאמר אם שמוע תשמע אם שמוע תשמע ואם לאו לא תשמע ד\"א אם שמוע בישן תשמע בחדש ואם יפנה לבבך שוב לא תשמע:  בירך על פירות האילן בורא פרי האדמה יצא ועל פירות הארץ בורא פרי העץ לא יצא ועל כולם אם אמר שהכל נהיה בדברו יצא: גמ׳ מאן תנא דעיקר אילן ארעא היא אמר רב נחמן בר יצחק ר' יהודה היא דתנן יבש המעין ונקצץ האילן מביא ואינו קורא ר' יהודה אומר מביא וקורא: על פירות הארץ וכו': פשיטא א\"ר נחמן בר יצחק לא נצרכה אלא לר' יהודה דאמר חטה מין אילן היא דתניא אילן שאכל ממנו אדם הראשון רבי מאיר אומר גפן היה שאין לך דבר שמביא יללה על האדם אלא יין שנאמר (בראשית ט, כא) וישת מן היין וישכר רבי נחמיה אומר תאנה היתה שבדבר שנתקלקלו בו נתקנו שנאמר (בראשית ג, ז) ויתפרו עלה תאנה ר\"י אומר חטה היתה שאין התינוק יודע לקרות אבא ואמא עד שיטעום טעם דגן ס\"ד אמינא הואיל ואמר רבי יהודה חטה מין אילן היא ליברך עליה בורא פרי העץ קמשמע לן היכא מברכינן בורא פרי העץ היכא דכי שקלת ליה לפירי איתיה לגווזא והדר מפיק",
  "rashi": [
   {
    "dh": "טול ברוך",
    "text": " — הבוצע קודם שטעם מן הפרוסה בצע ממנה והושיט למי שאצלו וא\"ל טול מפרוסת הברכה אף על פי שסח בינתים אין צריך לחזור לברך ואף על גב דשיחה הויא הפסקה כדאמרינן במנחות (פרק ג' דף לו.) סח בין תפילין לתפילין צריך לברך וכן בכסוי הדם הך שיחה צורך ברכה ולא מפסקא:"
   },
   {
    "dh": "הביאו מלח",
    "text": " — נמי אין צריך לברך שאף זו צורך ברכה שתהא פרוסה של ברכה נאכלת בטעם:"
   },
   {
    "dh": "גביל לתורי",
    "text": " — גביל את המורסן במים לצורך השוורים:"
   },
   {
    "dh": "ובצע לה להדיא",
    "text": " — כלומר מיד ולא המתין למלח ולפתן:"
   },
   {
    "dh": "בשש",
    "text": " — עכוב כמו בושש רכבו (שופטים ה) כלומר פת נקיה היא זו ואין צריכה לפתן:"
   },
   {
    "dh": "אין מי רגלים כלים",
    "text": " — מן הגוף אלא בישיבה לפי שכשהקלוח קרוב לפיסוק הוא דואג שלא יפלו נצוצות על רגליו ומפסיק:"
   },
   {
    "dh": "בעפר תיחוח",
    "text": " — ליכא נצוצות:"
   },
   {
    "dh": "אסכרה",
    "text": " — בו\"ן מלאנ\"ט:"
   },
   {
    "dh": "המקפה אכילתו במים",
    "text": " — שותה מים הרבה אחר אכילתו עד שאכילתו צפה במים ויצף הברזל מתרגמינן וקפא פרזלא (מלכים ב ו׳:ו׳):"
   },
   {
    "dh": "מונע אסכרה",
    "text": " — שהחולי בא מחמת עצור בני מעים והעדשים משלשלים:"
   },
   {
    "dh": "קצח",
    "text": " — רבותינו מפרשים נייל\"א בלע\"ז אבל אני שמעתי מין זרעים שזורעין אותו בארץ ישמעאל:"
   },
   {
    "dh": "למזרח גורנו",
    "text": " — של קצח שרוח מערבית רוח לחה ומתונתה היא ומכנסת הריח בתוך הגוף:"
   },
   {
    "dh": "הא בריחו הא בטעמו",
    "text": " — הריח קשה והטעם טוב:"
   },
   {
    "dh": "מדבקא ליה",
    "text": " — בריפתא עד שקלט הטעם:"
   },
   {
    "dh": "ומקלפא ליה",
    "text": " — בשביל הריח:"
   },
   {
    "dh": "כל יום ויום",
    "text": " — בשבת מעין שבת ביום טוב מעין יו\"ט:"
   },
   {
    "dh": "כלי מלא",
    "text": " — אדם חכם:"
   },
   {
    "dh": "אם שמוע",
    "text": " — פעם אחת סופך שתטה אזן פעם אחרת:"
   },
   {
    "dh": "אם תשמע בישן",
    "text": " — ששנית ושלשת מה ששמעת אשתקד:"
   },
   {
    "dh": "דעיקר אילן ארעא היא",
    "text": " — דעיקר כל הפירות היא הארץ והכל גדל הימנה:"
   },
   {
    "dh": "יבש המעין ונקצץ האילן",
    "text": " — היה לו בית השלחין ובו מעין שהוא משקהו ממנו וקצר בכורים ממנו ואחר כך יבש המעין וכן שדה האילן וקצץ בכורים ממנו ואח\"כ נקצץ האילן:"
   },
   {
    "dh": "מביא ואינו קורא",
    "text": " — שאינו יכול לומר מן האדמה אשר נתתה לי דכיון דיבש המעין ונקצץ האילן ממנה בטלה לה ארעא:"
   },
   {
    "dh": "מביא וקורא",
    "text": " — שהארץ היא עיקר:"
   },
   {
    "dh": "שהוא הביא יללה",
    "text": " — וזה הביא מיתה:"
   },
   {
    "dh": "שאין התינוק יודע לקרא אבא ואמא",
    "text": " — וזה נקרא עץ הדעת:"
   },
   {
    "dh": "גווזא",
    "text": " — הענף של עץ:"
   },
   {
    "dh": "מפיק",
    "text": " — פירי אחריני:"
   }
  ],
  "tosafot": [
   {
    "dh": "הבא מלח כו' צריך לברך",
    "text": " — דהוי היסח הדעת והכי אמרי' בפ\"ג דמנחות (דף לו.) סח בין תפילין לתפילין צריך לברך וכן הלכה אם סח בין ברכת המוציא לאכילה ובין ברכת קידוש לשתיה צריך לחזור ולברך אי לאו מילתא דשייכא לסעודה כמו טול ברוך וכן בשחיטה צריך לחזור ולברך אי לאו ממילתא דשחיטה כמו העוד יותר בהמות ותרנגולים לשחוט או שיאמר אחוז היטב שלא ישמט לך שלא תפסל השחיטה אין זו הפסקה ואנו אין אנו רגילים להביא על השלחן לא מלח ולא לפתן משום דפת שלנו חשוב והרי הוא כי הא דאמר בסמוך לית דין צריך בשש מיהו רבי מנחם היה מדקדק מאד להביא מלח על השלחן כדאיתא במדרש כשישראל יושבין על השלחן וממתינין זה את זה עד שיטלו ידיהם והן בלא מצות השטן מקטרג עליהם וברית מלח מגין עליהם:",
    "en": "If he says \"Bring salt\", he needs to repeat the blessing. - Because this is a distraction, and as we have learned, one who speaks between putting on the two tefillin needs to say another blessing (Menachot 36a). This is true too if one speaks between saying the blessing of Hamotzi and eating, or between kiddush and drinking, that one needs to repeat the blessing, unless it relates to something in the meal. The same too for ritual slaughter of animals, if one says after the blessing \"are there any more animals to slaughter\" or \"hold this tight\", the blessing does not need to be repeated. We do not have the practice to have salt on the table and no relish either, because our bread is refined, as we see in subsequent section of Talmud. Rabbi Menachem however was very scrupulous to have salt on the table. This relates to the following midrash: when Israel sit at the table and wait for each other to wash hands, Satan accuses them, but the covenant of salt (Leviticus 2:13) protects them."
   },
   {
    "dh": "רבי יהודה היא דתנן יבש המעין וכו' -ונראה דהלכה כרבי יהודה דסתם לן תנא כוותיה ואם ברך על פירות האילן בורא פרי האדמה יצא",
    "text": ""
   },
   {
    "dh": "יבש המעין כו'. יש מפרשים לכך מביא ואינו קורא מפני שאינו נראה כמשבח להקב\"ה אלא כקובל על מה שנתן לו אדמה שאינה ראויה לפירות",
    "text": ""
   },
   {
    "dh": "איתיה לגווזא והדר אתי",
    "text": " — מהכא נראה דתותים ופריזיי\"ש ובונטונ\"ש וכיוצא בהן צריכין לברך עליהם בורא פרי העץ שהרי דרך העץ להתקיים ימים רבים וכי שקיל הפרי בשנה זו הדר אתי פרי באותו העץ עצמו מיהו הרב רבי מנחם הביא ראיה מירושלמי דמסכת כלאים דמברכין על כל מיני דאטד בורא פרי האדמה דקאמר התם ההגין ואטדין מין אילן הם ואינן כלאים בכרם ופריך והתניא אלו הן מיני דשאים הקונדס והאטד ומשני תמן לברכה והכא לכלאים אלמא לענין ברכה מיני דשאין ומיהו לדברי הכל פריזיי\"ש צריך לברך עליהם בפה\"ע דאינו גדל על אטדין ועצו מתקיים משנה לשנה:"
   }
  ],
  "translations": []
 },
 {
  "id": "40b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מ",
  "amud": "ב",
  "dafEn": "40b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אבל היכא דכי שקלת ליה לפירי ליתיה לגווזא דהדר מפיק לא מברכינן עליה בורא פרי העץ אלא בפה\"א: ועל כולן אם אמר שהכל וכו': אתמר רב הונא אמר חוץ מן הפת ומן היין ורבי יוחנן אמר אפי' פת ויין נימא כתנאי ראה פת ואמר כמה נאה פת זו ברוך המקום שבראה יצא ראה תאנה ואמר כמה נאה תאנה זו ברוך המקום שבראה יצא דברי ר' מאיר ר' יוסי אומר כל המשנה ממטבע שטבעו חכמים בברכות לא יצא ידי חובתו נימא רב הונא דאמר כר' יוסי ור' יוחנן דאמר כר' מאיר אמר לך רב הונא אנא דאמרי אפי' לר' מאיר עד כאן לא קאמר ר' מאיר התם אלא היכא דקא מדכר שמיה דפת אבל היכא דלא קא מדכר שמיה דפת אפילו ר' מאיר מודה ור' יוחנן אמר לך אנא דאמרי אפילו לרבי יוסי עד כאן לא קאמר ר' יוסי התם אלא משום דקאמר ברכה דלא תקינו רבנן אבל אמר שהכל נהיה בדברו דתקינו רבנן אפילו ר' יוסי מודה בנימין רעיא כרך ריפתא ואמר בריך מריה דהאי פיתא אמר רב יצא והאמר רב כל ברכה שאין בה הזכרת השם אינה ברכה דאמר בריך רחמנא מריה דהאי פיתא והא בעינן שלש ברכות מאי יצא דקאמר רב נמי יצא ידי ברכה ראשונה מאי קמשמע לן אע\"ג דאמרה בלשון חול תנינא ואלו נאמרים בכל לשון פרשת סוטה וידוי מעשר וקריאת שמע ותפלה וברכת המזון אצטריך סד\"א הני מילי דאמרה בלשון חול כי היכי דתקינו רבנן בלשון קדש אבל לא אמרה בלשון חול כי היכי דתקינו רבנן בלשון קדש אימא לא קמ\"ל: גופא אמר רב כל ברכה שאין בה הזכרת השם אינה ברכה ורבי יוחנן אמר כל ברכה שאין בה מלכות אינה ברכה אמר אביי כוותיה דרב מסתברא דתניא (דברים כו, יג) לא עברתי ממצותיך ולא שכחתי לא עברתי מלברכך ולא שכחתי מלהזכיר שמך עליו ואילו מלכות לא קתני ור' יוחנן תני ולא שכחתי מלהזכיר שמך ומלכותך עליו:  ועל דבר שאין גדולו מן הארץ אומר שהכל נהיה בדברו על החומץ ועל הנובלות ועל הגובאי אומר שהכל נהיה בדברו ר' יהודה אומר כל שהוא מין קללה אין מברכין עליו היו לפניו מינין הרבה ר' יהודה אומר אם יש ביניהן מין שבעה עליו הוא מברך וחכ\"א מברך על איזה מהן שירצה: גמ׳ תנו רבנן על דבר שאין גדולו מן הארץ כגון בשר בהמות חיות ועופות ודגים אומר שהכל נהיה בדברו על החלב ועל הביצים ועל הגבינה אומר שהכל על הפת שעפשה ועל היין שהקרים ועל התבשיל שעבר צורתו אומר שהכל על המלח ועל הזמית ועל כמהין ופטריות אומר שהכל למימרא דכמהין ופטריות לאו גדולי קרקע נינהו והתניא הנודר מפירות הארץ אסור בפירות הארץ ומותר בכמהין ופטריות ואם אמר כל גדולי קרקע עלי אסור אף בכמהין ופטריות אמר אביי מירבא רבו מארעא מינקי לא ינקי מארעא והא על דבר שאין גדולו מן הארץ קתני תני על דבר שאין יונק מן הארץ: ועל הנובלות: מאי נובלות ר' זירא ור' אילעא חד אמר בושלי כמרא וחד אמר תמרי דזיקא תנן ר' יהודה אומר כל שהוא מין קללה אין מברכין עליו בשלמא למ\"ד בושלי כמרא היינו דקרי ליה מין קללה אלא למאן דאמר תמרי דזיקא מאי מין קללה אשארא איכא דאמרי בשלמא למאן דאמר בושלי כמרא היינו דמברכינן עלייהו שהכל אלא למ\"ד תמרי דזיקא שהכל בורא פרי העץ מבעי ליה לברוכי אלא בנובלות סתמא כ\"ע לא פליגי דבושלי כמרא נינהו כי פליגי בנובלות תמרה דתנן הקלין שבדמאי השיתין והרימין והעוזרדין בנות שוח ובנות שקמה וגופנין ונצפה ונובלות תמרה שיתין אמר רבה בר בר חנה א\"ר יוחנן מין תאנים רימין כנדי העוזרדין טולשי בנות שוח אמר רבה בר בר חנה א\"ר יוחנן תאיני חיורתא בנות שקמה אמר רבה בר בר חנה א\"ר יוחנן דובלי גופנין שילהי גופני נצפה פרחה נובלות תמרה ר' אילעא ור' זירא חד אמר בושלי כמרא וחד אמר תמרי דזיקא בשלמא למ\"ד בושלי כמרא היינו דקתני הקלין שבדמאי ספיקן הוא דפטור הא ודאן חייב אלא למאן דאמר תמרי דזיקא ודאן חייב הפקרא נינהו הכא במאי עסקינן שעשאן גורן דא\"ר יצחק א\"ר יוחנן משום ר' אליעזר בן יעקב הלקט והשכחה והפאה שעשאן גורן הוקבעו למעשר איכא דאמרי",
  "rashi": [
   {
    "dh": "חוץ מן הפת ומן היין",
    "text": " — כדאמרינן לקמן (ברכות דף מב.) שגורם ברכות הרבה לעצמו בקדוש ובהבדלה ובברכת חתנים:"
   },
   {
    "dh": "ידי ברכה ראשונה",
    "text": " — ברכת הזן:"
   },
   {
    "dh": "פרשת סוטה",
    "text": " — כשהכהן משביעה:"
   },
   {
    "dh": "וידוי מעשר",
    "text": " — בערתי הקדש מן הבית (דברים כ״ו:י״ג):"
   },
   {
    "dh": "מלברכך",
    "text": " — ברוך אשר קדשנו במצותיו וצונו להפריש תרומה ומעשר:"
   },
   {
    "dh": "מתני' הנובלות",
    "text": " — מפרש בגמרא:"
   },
   {
    "dh": "גובאי",
    "text": " — חגבים טהורים:"
   },
   {
    "dh": "מין קללה",
    "text": " — חומץ ונובלות וגובאי על ידי קללה הן באין:"
   },
   {
    "dh": "גמ' שהקרים",
    "text": " — בוטי\"ר בלע\"ז:"
   },
   {
    "dh": "מירבא רבו מארעא",
    "text": " — מלחלוחית הארץ הם גדלים על העצים ועל הכלים:"
   },
   {
    "dh": "בושלי כמרא",
    "text": " — כמו שרופי חמה שבשלם ושרפם החום ויבשו ותמרים הם. כמרא חום כמו מכמר בשרא (פסחים דף נח.):"
   },
   {
    "dh": "תמרי דזיקא",
    "text": " — שהרוח משירן:"
   },
   {
    "dh": "אשארא",
    "text": " — אחומץ וגובאי פליג ר' יהודה:"
   },
   {
    "dh": "פרי העץ בעי ברוכי",
    "text": " — שהרי לא נשתנו לקלקול:"
   },
   {
    "dh": "הקלים שבדמאי",
    "text": " — פירוש שהקלו חכמים בדמאי שלהן שהלוקחן מעם הארץ אין צריך לעשרן. אלו הן:"
   },
   {
    "dh": "השיתין כו'",
    "text": " — שאינן חשובים ואין ע\"ה חש עליהם מלעשרן:"
   },
   {
    "dh": "טולשי",
    "text": " — קולמש\"י:"
   },
   {
    "dh": "שילהי גופני",
    "text": " — ענבים סתווניות:"
   },
   {
    "dh": "הא ודאן",
    "text": " — אם ידוע שלא הופרש מהן מעשר:"
   },
   {
    "dh": "שעשאן גורן",
    "text": " — העני או מי שלקטן העמיד מהן ערימת כרי:"
   },
   {
    "dh": "הלקט והשכחה והפאה",
    "text": " — אע\"פ שפטורים מן המעשר לקטן עני ועשאן גורן הוקבעו למעשר מדרבנן דמאן דחזי סבר שתבואת קרקעו היא:"
   }
  ],
  "tosafot": [
   {
    "dh": "ורבי יוחנן אמר אפי' פת ויין",
    "text": " — וכן הלכה דרב ור' יוחנן הלכה כר' יוחנן וכ\"ש לגבי רב הונא שהיה תלמידו של רב:"
   },
   {
    "dh": "נימא רב הונא כר' יוסי",
    "text": " — וא\"ת היכי מצי סובר רב הונא כר' יוסי הא רב הונא מודה בשאר דברים חוץ מפת ויין שאם אמר שהכל דיצא ואילו ר' יוסי סבר דלא יצא דכל המשנה ממטבע כו' וי\"מ דמצי למימר דאפי' ר' יוסי לא קאמר לא יצא אלא בברוך המקום שאינה ברכה כלל אבל בשהכל מודה:"
   },
   {
    "dh": "אמר אביי כוותיה דרב מסתברא כו'",
    "text": " — י\"מ דמסתברא ברייתא כוותיה ומיהו רב אלפס פסק כר' יוחנן וכן פסק ר\"י דכל ברכה שאין בה מלכות שמים אינה ברכה ולכך היה אומר ר\"י שאם היה מדלג מלכות של ברכת המוציא שצריך לחזור ולברך ואפי' דלג תיבת העולם בלבד דמלך לבד אינו מלכות וברכות של שמונה עשרה אין בהן מלכות דאינן באין בפתיחה ובחתימה אין שייך מלכות אבל אלהי אברהם הוי כמו מלכות דאברהם אבינו המליך הקב\"ה על כל העולם שהודיע מלכותו ומעין שבע דמצלי בשבת הואיל ויש בה האל הקדוש שאין כמוהו היינו כמו מלכות כמו שמע ישראל ה' אלהינו ה' אחד דהוי במקום מלכות ולפי מה דפרישית דכל היכא דכתיב אלהי אברהם הוי כמו מלכות ניחא ולר' יוחנן לא קשיא דלא תני מלכותך דאטו כרוכלא כל האי לימני וליזיל:"
   }
  ],
  "translations": []
 },
 {
  "id": "41a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מא",
  "amud": "א",
  "dafEn": "41a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בשלמא למ\"ד תמרי דזיקא היינו דהכא קרי לה נובלות סתמא והתם קרי לה תמרה אלא למ\"ד בושלי כמרא ניתני אידי ואידי נובלות תמרה או אידי ואידי נובלות סתמא קשיא: היו לפניו מינין הרבה כו': אמר עולא מחלוקת בשברכותיהן שוות דרבי יהודה סבר מין שבעה עדיף ורבנן סברי מין חביב עדיף אבל בשאין ברכותיהן שוות ד\"ה מברך על זה וחוזר ומברך על זה מיתיבי היו לפניו צנון וזית מברך על הצנון ופוטר את הזית הב\"ע כשהצנון עיקר אי הכי אימא סיפא ר' יהודה אומר מברך על הזית שהזית ממין שבעה לית ליה לר' יהודה הא דתנן כל שהוא עיקר ועמו טפלה מברך על העיקר ופוטר את הטפלה וכי תימא ה\"נ דלית ליה והתניא רבי יהודה אומר אם מחמת צנון בא הזית מברך על הצנון ופוטר את הזית לעולם בצנון עיקר עסקינן וכי פליגי רבי יהודה ורבנן במילתא אחריתי פליגי וחסורי מחסרא והכי קתני היו לפניו צנון וזית מברך על הצנון ופוטר את הזית בד\"א כשהצנון עיקר אבל אין הצנון עיקר ד\"ה מברך על זה וחוזר ומברך על זה ושני מינין בעלמא שברכותיהן שוות מברך על איזה מהן שירצה רבי יהודה אומר מברך על הזית שהזית ממין שבעה פליגי בה רבי אמי ורבי יצחק נפחא חד אמר מחלוקת בשברכותיהן שוות דרבי יהודה סבר מין שבעה עדיף ורבנן סברי מין חביב עדיף אבל בשאין ברכותיהן שוות דברי הכל מברך על זה וחוזר ומברך על זה וחד אמר אף בשאין ברכותיהן שוות נמי מחלוקת בשלמא למאן דאמר בשברכותיהן שוות מחלוקת שפיר אלא למאן דאמר בשאין ברכותיהן שוות פליגי במאי פליגי א\"ר ירמיה להקדים דאמר רב יוסף ואיתימא רבי יצחק כל המוקדם בפסוק זה מוקדם לברכה שנאמר (דברים ח, ח) ארץ חטה ושעורה וגפן ותאנה ורמון ארץ זית שמן ודבש ופליגא דרבי חנן דא\"ר חנן כל הפסוק כולו לשיעורין נאמר חטה דתנן הנכנס לבית המנוגע וכליו על כתפיו וסנדליו וטבעותיו בידיו הוא והן טמאין מיד היה לבוש כליו וסנדליו ברגליו וטבעותיו באצבעותיו הוא טמא מיד והן טהורין עד שישהא בכדי אכילת פרס פת חטין ולא פת שעורין מיסב ואוכלן בלפתן שעורה דתנן עצם כשעורה מטמא במגע ובמשא ואינו מטמא באהל גפן כדי רביעית יין לנזיר תאנה כגרוגרת להוצאת שבת רמון כדתנן כל כלי בעלי בתים",
  "rashi": [
   {
    "dh": "בשלמא למ\"ד",
    "text": " — נובלות דדמאי תמרי דזיקא ונובלות דמתני' אוקימנא בבושלי כמרא היינו דהכא קרי להו נובלות תמרה ובמתני' תנן (ד' מ) נובלות סתמא:"
   },
   {
    "dh": "בשברכותיהן שוות",
    "text": " — כגון זיתים ותפוחים דתרווייהו ב\"פ העץ ובא לפטור את שתיהן בברכה אחת:"
   },
   {
    "dh": "חביב עדיף",
    "text": " — איזה שירצה דמתניתין את החביב עליו משמע:"
   },
   {
    "dh": "אבל בשאין ברכותיהן שוות ד\"ה",
    "text": " — אין ברכה אחת פוטרתן ושוב אין כאן מחלוקת ואע\"ג דתנן (לעיל ברכות דף מ.) בירך על פירות האילן ב\"פ האדמה יצא ה\"מ בחד מינא וטעה ובירך עליה ב\"פ האדמה אבל צנון וזית ובירך על הצנון לא נפטר זית:"
   },
   {
    "dh": "פשיטא לא גרסינן עד מיתיבי חדא שאין זו שיטת הגמ' מעיקרא קשיא ליה פשיטא דלא איצטריך למימרא והדר קשיא היכי מצי למימרא ועוד דלא פשיטא היא אי לאו דאשמעינן עולא ה\"א צנון פוטר את הזית דהתנן בירך על פירות האילן ב\"פ האדמה יצא",
    "text": ""
   },
   {
    "dh": "שהיה צנון עיקר",
    "text": " — שבשבילו התחיל האכילה ולא אכל זית אלא להפיג חורפו של צנון דהוה ליה זית טפל ותנן (דף מד.) כל שהוא עיקר ועמו טפלה מברך על העיקר ופוטר את הטפלה:"
   },
   {
    "dh": "מברך על זה כו'",
    "text": " — וכאן לא נחלקו:"
   },
   {
    "dh": "ושני מינים בעלמא",
    "text": " — כגון זית ותפוח שברכותיהן שוות והאחד ממין שבעה בזה נחלקו:"
   },
   {
    "dh": "חד אמר מחלוקת בשברכותיהן שוות",
    "text": " — וכדאמרן:"
   },
   {
    "dh": "ה\"ג וחד אמר אף בשאין ברכותיהן שוות נמי מחלוקת",
    "text": " — ומפרש לה ואזיל:"
   },
   {
    "dh": "במאי פליגי",
    "text": " — הא ודאי לא מפטרי בחדא ברכה:"
   },
   {
    "dh": "אמר ר' ירמיה בלהקדים פליגי",
    "text": " — ולא גרסי' אבל בשברכותיהן שוות מברך על אחד מהן שירצה דהשתא בשאינן שוות מקפיד ר' יהודה על הקדמתן ואמר מין שבעה עדיף כשבא לפטור זו בזו לא כ\"ש:"
   },
   {
    "dh": "דאמר ר' יצחק כו'",
    "text": " — אלמא קפדינן אהקדמה ור' יהודה אית ליה דר' יצחק הלכך כל שכן היכא דחד לאו ממין שבעה דמין שבעה עדיף ורבנן לית להו דר' יצחק במקום חביב דחביב עדיף:"
   },
   {
    "dh": "ופליגא דרבי חנן",
    "text": " — הא דר' יצחק דאמר המוקדם קודם לברכה אלמא קרא לשבח א\"י בא שיש בה פירות החשובים הללו ומנאן כסדר חשיבותם ופליג אדר' חנן דאמר לא בא הכתוב להודיע שבח חשיבות הפירות בטעם שלהם אלא שבחה של א\"י שיש בה פירות ששיעורי תורה נתלין בהן וכיון דהכי הוא לא הקפיד הכתוב על סדרן שהרי בזו כולן שוין:"
   },
   {
    "dh": "בבית המנוגע",
    "text": " — כתיב והבא אל הבית יטמא עד הערב (ויקרא י״ד:מ״ז) ולא כתיב כבוס בגדים והאוכל בבית יכבס את בגדיו (שם) בשוהא שיעור אכילה ואפילו לא יאכל מדכתיב בסיפיה והשוכב בבית יכבס את בגדיו הלכך הנכנס בו ונושא את בגדיו עמו שלא כדרך מלבושו אין אלו בגדיו וטמאים מיד שאף בהן אני קורא והבא אל הבית וכשהוא לבוש בהן בעי שהייה:"
   },
   {
    "dh": "אכילת פרס",
    "text": " — חצי ככר ששיערו בו חכמים את העירוב שהוא כולו מזון שתי סעודות וחציו מזון סעודה אחת:"
   },
   {
    "dh": "פת חטין",
    "text": " — נאכלת מהר:"
   },
   {
    "dh": "מיסב",
    "text": " — דרך הסבה שהיא נאכלת מהר שאינו פונה אנה ואנה:"
   },
   {
    "dh": "ואינו מטמא באהל",
    "text": " — הלכה למשה מסיני הוא:"
   },
   {
    "dh": "כדי רביעית יין לנזיר",
    "text": " — אכל חרצנים וזגים ולולבין כשיעור רביעית יין חייב ואין שיעור רביעית יין ורביעית מים שוין לפי שהיין עב והמים קלושין ויש ברביעית יין יותר ממה שיש ברביעית מים כדאמרינן (במנחות קז.) [בשבת (דף עז.)] גבי רביעית דם שיכול לקרוש ולעמוד על כזית משום דסמיך אבל מידי דקליש לא הוה רביעית דידיה כזית:"
   },
   {
    "dh": "להוצאת שבת",
    "text": " — דתנן המוציא אוכלין כגרוגרת (שבת עו:) והיא תאנה יבשה:"
   }
  ],
  "tosafot": [
   {
    "dh": "אבל בשאין ברכותיהן שוות",
    "text": " — פירש\"י כגון צנון וזית ושוב אין כאן מחלוקת כיון שאין האחד פוטר את חבירו אפי' ר' יהודה מודה דאין עדיפות בשבעת המינים אלא מברך על איזה שירצה תחלה החביב לו ואחר כך יברך על השני וכן יש לפרש דרבי יהודה מודה לחכמים הואיל ולא פי' הגמ' מוטב שנאמר שיחיד מודה לרבים ולא רבים מודים ליחיד והקשה רש\"י ולבריך על הצנון ולפטר את הזית דהא תנן לעיל בירך על פירות האילן ב\"פ האדמה יצא ותירץ דשאני התם שאין שם אלא חד מינא וטעה ובירך ב\"פ האדמה אבל הכא כשבירך ב\"פ האדמה על הצנון לא פטר את חברו שהוא ב\"פ העץ אפי' בדיעבד וא\"ת הא אמרי' לעיל (ברכות דף לט.) גבי עובדא דבר קפרא דברכת בורא פרי האדמה חשיבא טפי משהכל לפי שמבוררת טפי א\"כ גם ב\"פ העץ חשיבא טפי מברכת ב\"פ האדמה וי\"ל דלא חשיב ב\"פ העץ כל כך מב\"פ האדמה כמו שחשוב ב\"פ האדמה משהכל ומ\"ש בהלכות גדולות דב\"פ העץ תקדים לב\"פ האדמה דמבוררת טפי היינו לפי המסקנא דלקמן דפליגי בשאין ברכותיהן שוות וקי\"ל כר' יהודה אבל להאי לישנא דאמרי' דלא פליגי בשאין ברכותיהן שוות לא מתוקם פסק דהלכות גדולות כדפירשנו לעיל:"
   },
   {
    "dh": "מיתיבי היו לפניו צנון וזית מברך על הצנון וכו'",
    "text": " — ופריך אלמא דמברך ב\"פ האדמה אפילו לפטור ב\"פ העץ אפילו לגבי זית שהוא משבעת המינים וכ\"ש קליות שהן כמו כן משבעת המינין דמברך עליהן ב\"פ האדמה לפטור את התפוחים לכן צריך להנהיג הכי כדפרישית לעיל באין ברכותיהן שוות כמו תפוחים וקליות:"
   },
   {
    "dh": "במאי פליגי",
    "text": " — כלומר מאי טעמא דר' יהודה דאמר שבעת המינין עדיף מאי עדיפות שייכא בהו אחר שאינן יכולין לפטור שאר מינין ומשני דהעדיפות הוי מן ההקדמה:"
   },
   {
    "dh": "א\"ר ירמיה להקדים דא\"ר יוסף וכו' -פירש\"י והר\"י לפי גרסא זו אתיא הא דאמר רב יוסף כל המוקדם כר' יהודה דוקא אבל ר' שמעיה גריס אמר רב יוסף וכו' ואתיא אליבא דרבנן ומיירי שאין חביבין זה מזה דהא אזלינן בתר מוקדם דאי בחביבין פשיטא דחביב קודם דהא אפי' בשאר מינין לגבי שבעת המינין אמרי רבנן דמברך על איזה שירצה ומילתא דרב יוסף מילתא באפי נפשה ולא נהירא דבסמוך משמע דגרס דאמר רב יוסף ואתיא כר' יהודה דוקא דקאמר רב חסדא ורב המנונא הוו יתבי בסעודתא וכו' א\"ל לא סבר לה מר להא דרב יוסף דאמר כל המוקדם וכו'",
    "text": ""
   },
   {
    "dh": "גפן כדי רביעית יין וכו'",
    "text": " — פי' אם אכל עלין או לולבין כדי רביעית יין חייב אבל אם אכל מהן כדי רביעית מים לא מחייב דקלישי והולכין בקל חוץ מן הכלי אבל כי משערין ביין צריך שיעורא טפי שהיין הוא עב ומחזיק גודש קצת קודם שיפול מן הכוס רביעית יין ואם היה מים היה יוצא יותר מרביעית:"
   },
   {
    "dh": "כלי בעלי בתים",
    "text": " — גבי כלי עץ מתניא:"
   }
  ],
  "translations": []
 },
 {
  "id": "41b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מא",
  "amud": "ב",
  "dafEn": "41b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "שיעורן כרמונים ארץ זית שמן אמר ר' יוסי ברבי חנינא ארץ שכל שיעוריה כזיתים כל שיעוריה סלקא דעתך והא איכא הנך דאמרן אלא ארץ שרוב שיעוריה כזיתים דבש ככותבת הגסה ביום הכפורים ואידך הני שיעורין בהדיא מי כתיבי אלא מדרבנן וקרא אסמכתא בעלמא רב חסדא ורב המנונא הוו יתבי בסעודתא אייתו לקמייהו תמרי ורמוני שקל רב המנונא בריך אתמרי ברישא אמר ליה רב חסדא לא סבירא ליה מר להא דאמר רב יוסף ואיתימא ר' יצחק כל המוקדם בפסוק זה קודם לברכה אמר ליה זה שני לארץ וזה חמישי לארץ אמר ליה מאן יהיב לן נגרי דפרזלא ונשמעינך: איתמר הביאו לפניהם תאנים וענבים בתוך הסעודה אמר רב הונא טעונים ברכה לפניהם ואין טעונים ברכה לאחריהם וכן אמר רב נחמן טעונים ברכה לפניהם ואין טעונים ברכה לאחריהם ורב ששת אמר טעונין ברכה בין לפניהם בין לאחריהם שאין לך דבר שטעון ברכה לפניו ואין טעון ברכה לאחריו אלא פת הבאה בכסנין בלבד ופליגא דר' חייא דא\"ר חייא פת פוטרת כל מיני מאכל ויין פוטר כל מיני משקים אמר רב פפא הלכתא דברים הבאים מחמת הסעודה בתוך הסעודה אין טעונים ברכה לא לפניהם ולא לאחריהם ושלא מחמת הסעודה בתוך הסעודה טעונים ברכה לפניהם ואין טעונים ברכה לאחריהם לאחר הסעודה טעונים ברכה בין לפניהם בין לאחריהם שאלו את בן זומא מפני מה אמרו דברים הבאים מחמת הסעודה בתוך הסעודה אינם טעונים ברכה לא לפניהם ולא לאחריהם אמר להם הואיל ופת פוטרתן אי הכי יין נמי נפטריה פת שאני יין",
  "rashi": [
   {
    "dh": "שיעורן כרמונים",
    "text": " — ניקב כמוציא רמון טהור בעלי בתים חסים על כליהם הלכך ניקב כמוציא קטניות מצניעו לזיתים ניקב כמוציא זית משתמש לאגוזים ניקב כמוציא אגוז משתמש בו רמונים אבל של אומן העומד למכור לא הוי שיעוריה בהכי:"
   },
   {
    "dh": "שרוב שיעוריה",
    "text": " — אכילת חלב דם נותר ופיגול:"
   },
   {
    "dh": "דבש",
    "text": " — האמור בתורה הוא דבש תמרים וכותבת היא תמרה:"
   },
   {
    "dh": "זה שני לארץ",
    "text": " — ארץ זית שמן ודבש דכתיב בסיפיה דקרא הפסיק ארץ את הסדר וחזר לעשות זיתים ותמרים חשובים מתאנים ורמונים שהרמון חמישי לארץ הכתובה בראש המקרא ודבש שני לארץ הכתובה בסופו:"
   },
   {
    "dh": "מאן יהיב לן נגרי דפרזלא",
    "text": " — רגלים של ברזל:"
   },
   {
    "dh": "ונשמעינך",
    "text": " — נשמשך ונלך אחריך תמיד:"
   },
   {
    "dh": "הביאו לפניהם תאנים וענבים בתוך הסעודה",
    "text": " — ולא ללפת את הפת דא\"כ הוו להו טפלה ואין חולק בדבר שאין טעון ברכה לא לפניו ולא לאחריו אלא לפעמים שבא למתק את פיו בתוך הסעודה בפירות:"
   },
   {
    "dh": "מברך לפניהם",
    "text": " — דלאו טפלה נינהו:"
   },
   {
    "dh": "ולא לאחריהם",
    "text": " — דבהמ\"ז פוטרתן:"
   },
   {
    "dh": "בין לפניהם בין לאחריהם",
    "text": " — דלא פטר אלא מידי דזיין והני לא זייני:"
   },
   {
    "dh": "פת הבאה בכסנין",
    "text": " — לאחר אכילה ובהמ\"ז היו רגילים להביא כיסנין והן קליות לפי שיפין ללב כדאמרי' בעלמא (עירובין כט:) הני כיסני דמעלו לליבא ומביאין עמהן פת שנלושה עם תבלין כעין אובליאי\"ש שלנו ויש שעושין אותן כמין צפורים ואילנות ואוכלין מהן דבר מועט ומתוך שנותנים בה תבלין הרבה ואגוזים ושקדים ומאכלה מועט לא הטעינוה ברכה מעין ג' מידי דהוה אפת אורז ודוחן דאמרינן בפרקין (דף לז:) בתחלה בורא מיני מזונות ולבסוף ולא כלום:"
   },
   {
    "dh": "פת פוטרת",
    "text": " — בין לפניהם בין לאחריהם:"
   },
   {
    "dh": "דברים הבאים מחמת הסעודה",
    "text": " — ללפת בהן את הפת:"
   },
   {
    "dh": "אין טעונין ברכה",
    "text": " — דהוו להו טפלה הלכך כל מידי בין מזון בין פירות שהביאו ללפתן אין בו ברכה לא לפניו ולא לאחריו:"
   },
   {
    "dh": "שלא מחמת הסעודה בתוך הסעודה",
    "text": " — כגון דייסא וכן כרוב ותרדין שאינן לפתן ובאין למזון ולשובע:"
   },
   {
    "dh": "טעונין ברכה לפניהן",
    "text": " — דלאו טפלה נינהו ואינן בכלל לחם דנפטר בברכת המוציא:"
   },
   {
    "dh": "ולא לאחריהן",
    "text": " — דמיני מזון נינהו וברכת המזון פוטרתן:"
   },
   {
    "dh": "דברים הרגילין לבא לאחר סעודה",
    "text": " — כגון פירות אפי' הביאן בתוך הסעודה שלא מחמת לפתן:"
   },
   {
    "dh": "טעונין ברכה בין לפניהן",
    "text": " — דלאו טפלה נינהו:"
   },
   {
    "dh": "בין לאחריהם",
    "text": " — דאין ברכת המזון פוטרתן דלאו מזוני נינהו:"
   }
  ],
  "tosafot": [
   {
    "dh": "אייתו לקמייהו תמרי ורמוני",
    "text": " — ולא ללפת בהן את הפת דאם כן הוו להו פת עיקר והן טפלה ותנן (דף מד.) מברך על העיקר ופוטר את הטפלה:"
   },
   {
    "dh": "זה שני לארץ",
    "text": " — מ\"מ היכא דאיכא חטה וזית או שעורים ותמרים אע\"ג דשוין לארץ מכל מקום המוקדם בפסוק דהיינו לארץ ראשון יקדים לברכה:"
   },
   {
    "dh": "הביאו לפניהם תאנים וענבים בתוך הסעודה",
    "text": " — וכגון שאין באין ללפת את הפת אלא לקנוח סעודה:"
   },
   {
    "dh": "אלא פת הבאה בכסנין",
    "text": " — דטעון ברכה לפניו ואין טעון ברכה לאחריו רק בורא נפשות רבות מידי דהוה אאורז ודוחן דאמרי' לעיל (ברכות דף לז:) בתחלה מברך במ\"מ ולבסוף ולא כלום הואיל ונתנו בהן שקדים הרבה. ופי' רש\"י אפי' אם אכל מהן אחר בהמ\"ז קאמר ולא נהירא חדא דאמרי' לעיל כל שיש בו מחמשת המינין צריך ברכה מעין שלש ועוד אמאי קאמר כיסנין לימא נמי אורז ודוחן ע\"כ צריך לפרש דמיירי בתוך הסעודה קודם בהמ\"ז דמיירי בה וה\"ק חוץ מן הפת הבאה בכיסנין בתוך הסעודה קודם ברהמ\"ז דאין טעון ברכה לאחריו דפטר ליה בהמ\"ז אפי' לרב ששת משום דהוי דבר מועט אבל בלא סעודה אף לאחריו צריך לברך מעין ג' ברכות ולהכי לא נקט פת אורז ודוחן שהרי אפילו בלא סעודה נמי אין צריכין ברכה מעין ג' לאחריו:"
   },
   {
    "dh": "לא קי\"ל כרב ששת אלא כרב הונא ורב נחמן דאין הלכה כיחיד במקום רבים. ה\"ג",
    "text": ""
   },
   {
    "dh": "ויין פוטר כל מיני משקין",
    "text": " — ולכאורה מיירי ביין בלא סעודה דאי בהדי פת תיפוק ליה דפטר ליה פת דאפי' יין נמי רצה לומר הספר בסמוך דפטור אי לאו טעמא דקובע ברכה לעצמו אלא מיירי בלא סעודה ואפ\"ה יין פוטר ולית הלכתא כוותיה שהרי מפת פוטרת אין הלכה כמותו אלא כפסק רב פפא א\"כ גם מהא דקאמר יין פוטר וכו' לית הלכתא כוותיה:"
   },
   {
    "dh": "הלכתא דברים הבאים בתוך הסעודה מחמת הסעודה",
    "text": " — פי' הקונטרס ללפת בהן את הפת אין טעונין ברכה דהוו להו טפלה ולא נהירא דא\"כ מתני' היא (דף מד.) דמברך על העיקר ופוטר את הטפלה ומאי קמ\"ל ועוד קשה דפריך בסמוך יין נמי נפטריה פת ומאי קשה והלא כששותים היין אינו טפלה לפת ואנן במידי דטפל לפת מיירינן ואין לפרש לפירוש הקונטרס יין נפטריה פת כששורה פתו ביינו קאמר דהוה ליה יין טפל דהא לא אשכחן שיברך עליו בענין זה אלא ודאי מיירי בשתיה ועוד קשה מה שפי' רש\"י דברים הבאים שלא מחמת הסעודה בתוך הסעודה כגון דייסא ותרדין וכרוב שאינן של לפתן ובאין לזון ולשבוע טעונים ברכה לפניהם דלאו טפלה נינהו ומיהו פטורין מברכת המזון דמיני מזון נינהו ולא נהירא דאמרי' במתני' ברך על הפת פטר את הפרפרת ובגמ' מפרש דהוא הדין כל מעשה קדרה ודברים הרגילים לבא לאחר הסעודה פירש\"י כמו פירות ואפי' הביא אותן בתוך הסעודה שלא מחמת לפתן טעונים ברכה בין לפניהם דלאו טפלה נינהו ובין לאחריהם דאין ברכת המזון פוטרתן דלאו מזון נינהו דהיינו כרב ששת דאמר לעיל הביאו לפניו תאנים ורמונים בתוך הסעודה דטעונים ברכה בין לפניהם בין לאחריהם והוי דלא כהלכתא דקיי\"ל כרב נחמן וכרב הונא כדפרישית לעיל. על כן פי' ר\"י דברים הבאים מחמת הסעודה בתוך הסעודה כלומר הרגילים לבא מחמת הסעודה בפת שרגילים לאכלן עם הפת כגון בשר ודגים וכל מיני קדרה והביאן בתוך הסעודה אין טעונין ברכה לפניהם ולאחריהם אפי' אכלן בתוך הסעודה בפני עצמן בלא פת דכיון דמשום פת הם באין הפת פוטרתן אבל דברים שאין דרכן לבא בתוך הסעודה כגון תמרים ורמונים ושאר כל פירות שאין רגילים ללפת בהן את הפת טעונין ברכה לפניהן דכיון דלאו משום לפתן אתו אין הפת פוטרתן והיינו כר\"נ וכרב הונא דלעיל דאמרי דטעונין ברכה לפניהן ולא לאחריהן:"
   },
   {
    "dh": "לאחר הסעודה גרסי' ותו לא ולא גרסי' דברים הבאים בהך סיפא והכי פירושו אם הביאו דברים שהזכרנו אחר הסעודה פי' לאחר שמשכו את ידיהם מן הפת שוב אין הפת פוטרתן כלל והוי כמו שאכלן בלא שום סעודה ובין דברים הרגילים לבא מחמת הסעודה ובין דברים שאין רגילים לבא מחמת הסעודה טעונים ברכה לפניהם ולאחריהם דאכל דברים דלעיל קאי ועכשיו אין לנו דין זה דאין מנהג שלנו למשוך ידינו מן הפת כלל עד לאחר בהמ\"ז אלא כל שעה שאנו אוכלין פירות או שום דבר קודם בהמ\"ז דעתנו לאכול פת כל שעה וקיי\"ל כפסק דרב פפא",
    "text": ""
   },
   {
    "dh": "אי הכי יין נמי נפטריה פת",
    "text": " — דודאי יין מחמת סעודה אתי שהוא שותה כמה פעמים דאי לאו הסעודה לא ישתה ולפטריה פת ומשני שאני יין דגורם ברכה לעצמו פירש\"י דבהרבה מקומות הוא בא ומברכין עליו אע\"פ שאין צריכין לשתות כגון בקידוש ובברכת אירוסין ורשב\"א פי' משום דצריך לברך על היין בורא פרי הגפן ובתחלה כשהוא בענבים בורא פרי העץ ועל שאר משקין שהכל נהיה בדברו ומיהו אומר ר\"ת דבשאר משקין כמו מים ושכר הבאים מחמת הסעודה פת פוטרתן דאפי' יין הוה פוטר אי לאו דקובע ברכה לעצמו ודלא כמחזור ויטרי שכתב שמברכין למים ברכה בכל פעם ופעם ואפי' בתוך הסעודה דהוי כנמלך והא דלא פריך הכא מהן משום דיין זיין אבל מים לא זייני כדאמר (לעיל ברכות לה.) הנודר מן המזון וכו' ופשיטא דלא פטר להו פת דאינה בכלל ברכת הפת: מיהו ר\"י ור\"ת היו אומרים שלא לברך כלל אשאר משקין הבאין בתוך הסעודה וטעמא דפת פוטרת כל הדברים הבאים בשבילה והשתא יין פוטר כל מיני משקין לפי שעיקר משקה הוא והוא ראש לכל מיני משקין ולכך הוא העיקר והן טפלין לו לענין ברכה והלכך משקין הבאין מחמת הסעודה שבאין בשביל הפת לשרות המאכל וגם א\"א לאכילה בלא שתיה והלכך פת פוטרתן חוץ מן היין כדקאמר גמרא טעמא ולהאי טעמא ניחא מה שאנו מברכים בפסח על החזרת על אכילת מרור לבד שהעולם מקשים אמאי אין מברכין נמי ב\"פ האדמה וב\"פ האדמה דשאר ירקות אינו פוטר כדקאמרינן התם כיון דאיכא הגדה והלל אסח דעתיה אלא וודאי טעמא הוי כיון דרחמנא קבעיה חובה דכתיב על מצות ומרורים יאכלוהו הוי כמו דברים הרגילין לבא מחמת הסעודה דפת פוטרתן:"
   }
  ],
  "translations": []
 },
 {
  "id": "42a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מב",
  "amud": "א",
  "dafEn": "42a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "דגורם ברכה לעצמו רב הונא אכל תליסר ריפתי בני תלתא תלתא בקבא ולא בריך א\"ל רב נחמן עדי כפנא אלא כל שאחרים קובעים עליו סעודה צריך לברך רב יהודה הוה עסיק ליה לבריה בי רב יהודה בר חביבא אייתו לקמייהו פת הבאה בכסנין כי אתא שמעינהו דקא מברכי המוציא אמר להו מאי ציצי דקא שמענא דילמא המוציא לחם מן הארץ קא מברכיתו אמרי ליה אין דתניא רבי מונא אמר משום רבי יהודה פת הבאה בכסנין מברכין עליה המוציא ואמר שמואל הלכה כרבי מונא אמר להו אין הלכה כרבי מונא אתמר אמרי ליה והא מר הוא דאמר משמיה דשמואל לחמניות מערבין בהן ומברכין עליהן המוציא שאני התם דקבע סעודתיה עלייהו אבל היכא דלא קבע סעודתיה עלייהו לא רב פפא איקלע לבי רב הונא בריה דרב נתן בתר דגמר סעודתייהו אייתו לקמייהו מידי למיכל שקל רב פפא וקא אכיל אמרי ליה לא סבר לה מר גמר אסור מלאכול אמר להו סלק אתמר רבא ורבי זירא איקלעו לבי ריש גלותא לבתר דסליקו תכא מקמייהו שדרו להו ריסתנא מבי ריש גלותא רבא אכיל ורבי זירא לא אכיל א\"ל לא סבר לה מר סלק אסור מלאכול א\"ל אנן אתכא דריש גלותא סמכינן: אמר רב הרגיל בשמן שמן מעכבו אמר רב אשי כי הוינן בי רב כהנא אמר לן כגון אנן דרגילינן במשחא משחא מעכבא לן ולית הלכתא ככל הני שמעתתא אלא כי הא דאמר רבי חייא בר אשי אמר רב שלש תכיפות הן תכף לסמיכה שחיטה תכף לגאולה תפלה תכף לנטילת ידים ברכה אמר אביי אף אנו נאמר תכף לתלמידי חכמים ברכה שנאמר (בראשית ל, כז) ויברכני ה' בגללך איבעית אימא מהכא שנאמר (בראשית לט, ה) ויברך ה' את בית המצרי בגלל יוסף:  ברך על היין שלפני המזון פטר את היין שלאחר המזון ברך על הפרפרת שלפני המזון פטר את הפרפרת שלאחר המזון ברך על הפת פטר את הפרפרת על הפרפרת לא פטר את הפת בש\"א אף לא מעשה קדרה היו יושבין כל אחד מברך לעצמו הסבו אחד מברך לכולן",
  "rashi": [
   {
    "dh": "דגורם ברכה לעצמו",
    "text": " — בכמה מקומות הוא בא ומברכין עליו ואע\"פ שלא היו צריכים לשתייתו:"
   },
   {
    "dh": "רב הונא אכל תליסר ריפתי",
    "text": " — מפת הבאה בכסנין ולא בירך אחריו:"
   },
   {
    "dh": "אמר רב נחמן עדי כפנא גרסי'",
    "text": ""
   },
   {
    "dh": "עדי",
    "text": " — אלו. כלומר אלו לרעבון נאכלו ואכילה מרובה כזו לא נפטרת מברכה אלא כל שאחרים קובעין אכילתן בכך טעון בהמ\"ז כך פירש רב האי ורבותינו פירשו תליסר ריפתי מפת שלנו ולא בירך אחריו משום דלא שבע וקרא כתיב (דברים ח׳:י׳) ואכלת ושבעת וברכת וכך פירש רב יהודאי בה\"ג ואינו נ\"ל דלית ליה לרב הונא והם החמירו על עצמן עד כזית ועד כביצה (לעיל ברכות דף כ:) ודלא כר\"מ ודלא כר' יהודה (לקמן ברכות דף מט:):"
   },
   {
    "dh": "לחמניות",
    "text": " — אובליא\"ש בלע\"ז:"
   },
   {
    "dh": "אסור מלאכול",
    "text": " — עד שיברך בהמ\"ז ויחזור ויברך על הבא לפניו דכיון דגמר אסח דעתי' מברכה ראשונה ומסעודתיה:"
   },
   {
    "dh": "סלק אתמר",
    "text": " — אם סלק הלחם וכל האוכל מעל השלחן ועדיין לא ברכו אסור לאכול:"
   },
   {
    "dh": "ריסתנא",
    "text": " — אמנישטרשיו\"ן:"
   },
   {
    "dh": "אתכא דריש גלותא סמכינן",
    "text": " — ואין סילוקתנו סלוק שדעתנו אם ישא משאות מאת פניו אלינו נאכל:"
   },
   {
    "dh": "הרגיל בשמן",
    "text": " — למשוח ידיו אחר אכילה:"
   },
   {
    "dh": "שמן מעכבו",
    "text": " — לענין ברכה שאפילו גמר וסלק ולא משח ידיו עדיין סעודה קיימת ואוכל בלא ברכה:"
   },
   {
    "dh": "ולית הלכתא ככל הני שמעתתא",
    "text": " — אין סיום סעודה תלוי לא בגמר ולא בסלוק ולא בשמן אלא במים אחרונים כ\"ז שלא נטל מים אחרונים הוא מותר לאכול ומשנטל אסור לאכול:"
   },
   {
    "dh": "לנטילת ידים",
    "text": " — דמים אחרונים בהמ\"ז ולא יאכל כלום עד שיברך על מזונו:"
   },
   {
    "dh": "תכף לת״ח",
    "text": " — המקריבו אליו ומארחובביתו:"
   },
   {
    "dh": "ברכה",
    "text": " — בביתו:"
   },
   {
    "dh": "מתני' ברך על היין כו'",
    "text": " — נוהגין היו להביא קודם אכילה כוס יין לשתות כדתניא לקמן (ברכות דף מג.) כיצד סדר הסבה כו' ומביאין לפניהם פרפראות להמשיך אכילה כגון פרגיות ודגים ואח\"כ מביאין השלחן ולאחר גמר סעודה יושבים ושותים ואוכלים ומה הן אוכלים פרפראות כגון כיסני דמעלו ללבא ולחמניות והוא יין ופרפרת שלאחר המזון ושניהם קודם בהמ\"ז:"
   },
   {
    "dh": "מעשה קדרה",
    "text": " — חלקא טרגיס וטיסני:"
   },
   {
    "dh": "היו יושבים",
    "text": " — בלא הסבת מטות שמוטים על צדיהן שמאלית על המטה ואוכלין ושותין בהסבה:"
   },
   {
    "dh": "כל אחד ואחד מברך לעצמו",
    "text": " — דאין קבע סעודה בלא הסבה:"
   }
  ],
  "tosafot": [
   {
    "dh": "לחמניות",
    "text": " — פרש\"י אובליא\"ש ולא נהירא דא\"כ אפילו לא קבע נמי לבריך המוציא שהרי הוא לחם גמור שהרי סופו עיסה ונראה לפרש דהיינו נילי\"ש מיהו כי קבע סעודתיה עליה מברך עליו המוציא כמו בפורים מיהו רבינו שמשון פירש דאין לברך עליו המוציא דהוי כמו דייסא:"
   },
   {
    "dh": "סלק אתמר",
    "text": " — משמע שדרכן היה לסלק השלחן קודם בהמ\"ז ולכאורה קשה למנהג שלנו שאנו מקפידים שלא לסלק הלחם קודם ושמא בימיהם נמי לא היו מסלקין השלחן מקמי המברך כי אם מלפני שאר המסובין לפי שהיו להן שלחנות קטנים וכל אחד לפני עצמו אוכל על שלחנו אבל אנו שרגילים לאכול כולנו על שלחן אחד אין נאה לסלק השלחן עד לאחר ברכת המזון:"
   },
   {
    "dh": "רבי זירא לא אכל",
    "text": " — תימה לפי מה שמפרשים העולם הב לן ונבריך אסור למשתי בלא ברכה שלפניו אמאי לא אכל לבריך עליה וליכול ושמא היה תבשיל שהיה בו פת והיה צריך ברכת המוציא ונט\"י וטורח היה לעשות כל כך:"
   },
   {
    "dh": "אתכא דריש גלותא סמכינן",
    "text": " — מי ששכח לאכול אפיקומן ואמר הב לן ונבריך אינו היסח הדעת דאנן אתכא דרחמנא סמכינן ואם שכח וברך ולא אכל אפיקומן א\"צ לחזור דכל מצות לשם מצוה עשויות והא דאמרינן כי אמר הב לן ונבריך אסור למשתי וכן אסורים כולן היינו דוקא כי אמר בעל הבית אבל לא אורח (וכי אסורים כולן היינו כי אמר בעה\"ב אבל בשביל אורח אינן נאסרין) ואף איהו גופא יכול לחזור ולאכול עם בעה\"ב:"
   },
   {
    "dh": "אתכא דריש גלותא סמכינן",
    "text": " — וכשרגיל לאכול מיני פירות ומביאין להם בזה אחר זה יש אומר שצריך לברך אכל חד וחד לפי שאינן יודעים אם יתן להם בעה\"ב יותר ונראה שאין צריך לברך לפי שסומכין על שלחן בעה\"ב והיינו דבי ריש גלותא:"
   },
   {
    "dh": "תכף לנטילת ידים ברכה",
    "text": " — והלכך כיון שנטל ידיו באחרונה לאחר סעודה אסור לאכול עד שיברך והוא הדין אם אמר הב לן ונבריך אפי' בלא נטילה:"
   },
   {
    "dh": "ברך על הפת פטר את הפרפרת",
    "text": " — נראה דמיירי בפרפרת שבתוך הסעודה דאי בפרפרת שלאחר הסעודה הא פסק רב פפא דברים הבאים לאחר סעודה טעונין ברכה לפניהם ולאחריהם ורש\"י פירש פרפרת מיני דגים ופרגיות וקצת קשה א\"כ מאי קמ\"ל דברך על הפרפרת דלא פטר את הפת ונראה כפירוש ר\"ח דפירש דפרפרת פת צנומה בקערה דלית בה תוריתא דנהמא דמברכין עליה בורא מיני מזונות והשתא ניחא דאצטריך לאשמעינן ברך על הפרפרת לא פטר את הפת אע\"ג דהוא מין פת וכן משמע בגמרא דחשיב פרפרת מעשה קדרה ומעשה קדרה היינו חלקא טרגיס וטיסני כדאמרינן לעיל (ברכות לז.):"
   },
   {
    "dh": "הסבו אחד מברך לכלן",
    "text": " — ואנו אין לנו הסבה אלא בפת בלבד ופת מהני אפי' בלא הסבה דדוקא לדידהו שהיו אוכלים בהסבה היו צריכים הסבה אלא ישיבה שלנו הוי קביעות לנו כהסבה דידהו שהם היו רגילים כל אחד להסב על מטתו ועל שלחנו אבל עכשיו כולנו אוכלים על שלחן אחד וכשאנו אוכלין יחד היינו קביעותינו והכא דקאמר היו יושבין וכו' בגמרא משמע דמיירי בין בברכת המוציא בין בברכת המזון בבהמ\"ז כעובדא דתלמידי דרב בברכת המוציא מההיא דפליגי ביין אי בעי הסבה ומיהו בני אדם האוכלים בדרך והולכים ולא ישבו כל אחד מברך לעצמו וא\"ת מאי שנא דבמוגמר אפילו לא הסבו אחד מברך לכולם בירושלמי פריך ומשני משום דבמוגמר כולם נהנים ביחד אבל אכילה ושתיה אינה באה אלא לזה אחר זה:"
   }
  ],
  "translations": []
 },
 {
  "id": "42b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מב",
  "amud": "ב",
  "dafEn": "42b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "בא להם יין בתוך המזון כל אחד ואחד מברך לעצמו אחר המזון אחד מברך לכולם והוא אומר על המוגמר ואע\"פ שאין מביאין את המוגמר אלא לאחר סעודה: גמ׳ אמר רבה בר בר חנה א\"ר יוחנן לא שנו אלא בשבתות וימים טובים הואיל ואדם קובע סעודתו על היין אבל בשאר ימות השנה מברך על כל כוס וכוס אתמר נמי אמר רבה בר מרי א\"ר יהושע בן לוי לא שנו אלא בשבתות וימים טובים ובשעה שאדם יוצא מבית המרחץ ובשעת הקזת דם הואיל ואדם קובע סעודתו על היין אבל בשאר ימות השנה מברך על כל כוס וכוס רבה בר מרי איקלע לבי רבא בחול חזייה דבריך לפני המזון והדר בריך לאחר המזון א\"ל יישר וכן אמר ריב\"ל רב יצחק בר יוסף איקלע לבי אביי בי\"ט חזייה דבריך אכל כסא וכסא א\"ל לא סבר לה מר להא דריב\"ל א\"ל נמלך אנא איבעיא להו בא להם יין בתוך המזון מהו שיפטור את היין שלאחר המזון אם תימצי לומר ברך על היין שלפני המזון פוטר את היין שלאחר המזון משום דזה לשתות וזה לשתות אבל הכא דזה לשתות וזה לשרות לא או דילמא לא שנא רב אמר פוטר ורב כהנא אמר אינו פוטר רב נחמן אמר פוטר ורב ששת אמר אינו פוטר רב הונא ורב יהודה וכל תלמידי דרב אמרי אינו פוטר איתיביה רבא לרב נחמן בא להם יין בתוך המזון כל אחד ואחד מברך לעצמו לאחר המזון אחד מברך לכולם א\"ל הכי קאמר אם לא בא להם יין בתוך המזון אלא לאחר המזון אחד מברך לכולם: ברך על הפת פטר את הפרפרת על הפרפרת לא פטר את הפת ב\"ש אומרים אף לא מעשה קדרה: איבעיא להו ב\"ש ארישא פליגי או דילמא אסיפא פליגי דקאמר תנא קמא ברך על הפת פטר את הפרפרת וכ\"ש מעשה קדרה ואתי ב\"ש למימר לא מיבעיא פרפרת דלא פטרה להו פת אלא אפילו מעשה קדרה נמי לא פטרה או דילמא אסיפא פליגי דקתני ברך על הפרפרת לא פטר את הפת פת הוא דלא פטר אבל מעשה קדרה פטר ואתו ב\"ש למימר ואפי' מעשה קדרה נמי לא פטר תיקו: היו יושבין כל אחד ואחד כו': הסבו אין לא הסבו לא ורמינהו עשרה שהיו הולכים בדרך אע\"פ שכולם אוכלים מככר אחד כל אחד ואחד מברך לעצמו ישבו לאכול אע\"פ שכל אחד ואחד אוכל מככרו אחד מברך לכולם קתני ישבו אע\"פ שלא הסבו אמר רב נחמן בר יצחק כגון דאמרי ניזיל וניכול לחמא בדוך פלן כי נח נפשיה דרב אזלו תלמידיו בתריה כי הדרי אמרי ניזיל וניכול לחמא אנהר דנק בתר דכרכי יתבי וקא מיבעיא להו הסבו דוקא תנן אבל ישבו לא או דילמא כיון דאמרי ניזיל וניכול ריפתא בדוכתא פלניתא כי הסבו דמי לא הוה בידייהו קם רב אדא בר אהבה",
  "rashi": [
   {
    "dh": "בא להם יין בתוך המזון כו'",
    "text": " — בגמ' מפרש טעמא (ד' מג.):"
   },
   {
    "dh": "והוא אומר על המוגמר",
    "text": " — אותו שברך על היין הוא מברך על המוגמר שהיו רגילים להביא לפניהם אחר אכילה אבקת רוכלין על האש במחתות לריח טוב ומברכים עליו בורא עצי בשמים:"
   },
   {
    "dh": "לאחר סעודה",
    "text": " — לאחר בהמ\"ז שאינו מצרכי סעודה אפי' הכי מי שברך על היין שהתחיל בברכות אחרונות גומרן:"
   },
   {
    "dh": "גמ' לא שנו",
    "text": " — דיין שלפני המזון פוטר את שלאחר המזון:"
   },
   {
    "dh": "אלא בשבתות כו'",
    "text": " — דדעתו לישב אחר המזון ולשתות וכי בריך ברישא אדעתא דהכי בריך:"
   },
   {
    "dh": "על כל כוס וכוס",
    "text": " — דהוה כנמלך ומתחיל בשתיה בכל חד וחד:"
   },
   {
    "dh": "יישר",
    "text": " — יפה עשית:"
   },
   {
    "dh": "וכן אמר ריב\"ל",
    "text": " — לעשות:"
   },
   {
    "dh": "לא סבר לה מר כו'",
    "text": " — דביום טוב לאו נמלך הוא:"
   },
   {
    "dh": "נמלך אנא",
    "text": " — איני רגיל לקבוע סעודה על היין:"
   },
   {
    "dh": "בא להם יין בתוך המזון",
    "text": " — וקודם המזון לא בא להם:"
   },
   {
    "dh": "אם תימצי לומר",
    "text": " — להביא ראיה ממשנתנו דקתני דיין שלפני המזון פוטר את שלאחר המזון אינה ראיה דהתם זה לשתות וזה לשתות אבל שבתוך המזון לשרות אכילה שבמעיו הוא בא ולא היו רגילין לשתות בתוך הסעודה אלא מעט לשרות:"
   },
   {
    "dh": "לאחר המזון אחד מברך לכולן",
    "text": " — קס\"ד דה\"ק דכשיביאו יין שני אחר המזון אחד מברך לכולן והא תנא ליה דכל אחד ואחד יברך על שבתוך המזון לעצמו וקא מצריך תו ברכה על שלאחר המזון:"
   },
   {
    "dh": "פטר את הפרפרת",
    "text": " — אע\"פ שאין צורך סעודה למלוי הכרס אלא למגמר אכילה:"
   },
   {
    "dh": "וכל שכן מעשה קדרה",
    "text": " — שהוא לאכול לזון ממש:"
   },
   {
    "dh": "בדוך פלן",
    "text": " — במקום פלוני דקבעו להם מתחלה מקום בדבור ועצה והזמנה הוי קביעות אבל ישבו מאליהן במקום אחד יחד אינה קביעות:"
   },
   {
    "dh": "אזלו תלמידיו בתריה",
    "text": " — דקברוהו בעיר אחרת:"
   },
   {
    "dh": "נהר דנק",
    "text": " — כך שמו:"
   },
   {
    "dh": "רישא דוקא",
    "text": " — דקתני היו יושבים בלא הזמנת מקום הוא דלא הוי קביעות אבל אנו שהזמנינהו לכך הוי קביעות ואחד מברך לכולן:"
   }
  ],
  "tosafot": [
   {
    "dh": "ואע\"פ שאין מביאין את המוגמר אלא לאחר סעודה. וכבר ברכו ברכת המזון ויש הפסק בין יין למוגמר. ורב ששת אמר אינו פוטר ורב נחמן אמר פוטר וכל תלמידי דרב וכו'. ונראה דהלכה כתלמידי דרב דרב ששת קאי כותייהו והלכתא כותיה דר\"נ בדיני וכרב ששת באיסורי ואע\"ג דקי\"ל דרב ושמואל הלכה כרב באיסורי שאני הכא דכל תלמידי דרב פליגי עליה מסתמא כך שמעו מרב מיהו אין אנו צריכין לאותו פסק דאין אנו מושכין ידינו מן הפת כלל ונראה דיין שלפני סעודה פוטר את היין שבתוך הסעודה אע\"ג דפסקינן הכא דיין שבתוך הסעודה אינו פוטר יין דלאחר הסעודה שאני הכא דזה לשרות וזה לשתות אבל זה לשתות וזה לשרות פוטר שפיר כגון יין שלפני הסעודה פוטר שבתוך הסעודה ומה דנקט שבתות וי\"ט לאו דוקא דה\"ה אם קבעו סעודה על היין בשאר ימות החול ואם הביא אדם יין לפני הסעודה לשתות בתוך הסעודה פשיטא דיין דלפני סעודה פוטרתו כיון דדעתיה למשתי וכן יין של קידוש פוטר יין שבתוך הסעודה וכן הבדלה אם הביא על שלחנו להבדיל דפוטר יין שלאחרי כן שבתוך הסעודה ושבתות וי\"ט לאו דוקא ולא אתא למעוטי אלא נמלך ואפילו את\"ל דדוקא נקט שבתות וי\"ט מ\"מ יש לומר ה\"מ לענין שבא לפטור יין שלאחר המזון שהוא אחר שמשכו ידיהם מן הפת שאין רגילות לקבוע לשתות יין לאחר המזון בקביעות אלא בשבתות וימים טובים ולא בשאר ימים אבל לענין לפטור יין שבתוך המזון שרגילות לשתות ודאי אפילו בשאר ימים פטר ליה יין שלפני המזון אע\"פ דזה לשתות וזה לשרות דעד כאן לא איבעיא לן אלא אי לשרות דלא חשיב מפיק לשתות אבל לשתות דחשיב טפי דהיינו יין שלפני המזון פשיטא דפוטר יין דלשרות וכן משמע נמי בערבי פסחים (דף קא) גבי שקדשו בב\"ה דר' יוחנן אמר אף ידי יין נמי יצאו ואין צריך לחזור ולברך על היין שבתוך הסעודה אע\"ג דקדשו שלא במקום סעודה ס\"ל לרבי יוחנן מדיצאו ידי קידוש מידי יין נמי יצאו ואף על גב דאיתותב רבי יוחנן היינו דוקא בשינוי מקום א\"כ נראה משם דה\"ה להבדלה דאין לחלק בין הבדלה לקידוש ולאפוקי מהני דחולקין ואמרי דוקא קידוש פוטר משום דאין קידוש אלא במקום סעודה אבל יין של הבדלה לא פטר אפילו הבדיל לאחר נטילה דהכי מיירי הא דפסקינן דיין שלפני המזון פוטר היין שבתוך המזון דכבר נטל ידיו והכי משמע בסמוך מתוך הבריית' כיצד סדר הסבה וכו' מיהו נראה כיון דנטל ידיו ודעתו לאכול ולשתות שם פוטר אפילו דהבדלה כדפריש מההיא דערבי פסחים ועוד דלא גרע יין דהבדלה מיין שלפני הסעודה דפטר ומיהו יש שמחמירין להבדיל קודם נטילת ידים לאפוקי נפשייהו מפלוגתא דאז ודאי צריך לברך אחריו ברכה מעין שלש ולא פטר יין שבתוך המזון",
    "text": ""
   },
   {
    "dh": "יין שבתוך המזון מהו שיפטור יין שלאחר המזון",
    "text": " — ומיירי דלא הוה להו יין לפני המזון:"
   },
   {
    "dh": "ורב ששת אמר אינו פוטר ורב נחמן אמר פוטר וכל תלמידי דרב וכו'",
    "text": " — ונראה דהלכה כתלמידי דרב דרב ששת קאי כותייהו והלכתא כותיה דר\"נ בדיני וכרב ששת באיסורי ואע\"ג דקי\"ל דרב ושמואל הלכה כרב באיסורי שאני הכא דכל תלמידי דרב פליגי עליה מסתמא כך שמעו מרב מיהו אין אנו צריכין לאותו פסק דאין אנו מושכין ידינו מן הפת כלל ונראה דיין שלפני סעודה פוטר את היין שבתוך הסעודה אע\"ג דפסקינן הכא דיין שבתוך הסעודה אינו פוטר יין דלאחר הסעודה שאני הכא דזה לשרות וזה לשתות אבל זה לשתות וזה לשרות פוטר שפיר כגון יין שלפני הסעודה פוטר שבתוך הסעודה ומה דנקט שבתות וי\"ט לאו דוקא דה\"ה אם קבעו סעודה על היין בשאר ימות החול ואם הביא אדם יין לפני הסעודה לשתות בתוך הסעודה פשיטא דיין דלפני סעודה פוטרתו כיון דדעתיה למשתי וכן יין של קידוש פוטר יין שבתוך הסעודה וכן הבדלה אם הביא על שלחנו להבדיל דפוטר יין שלאחרי כן שבתוך הסעודה ושבתות וי\"ט לאו דוקא ולא אתא למעוטי אלא נמלך ואפילו את\"ל דדוקא נקט שבתות וי\"ט מ\"מ יש לומר ה\"מ לענין שבא לפטור יין שלאחר המזון שהוא אחר שמשכו ידיהם מן הפת שאין רגילות לקבוע לשתות יין לאחר המזון בקביעות אלא בשבתות וימים טובים ולא בשאר ימים אבל לענין לפטור יין שבתוך המזון שרגילות לשתות ודאי אפילו בשאר ימים פטר ליה יין שלפני המזון אע\"פ דזה לשתות וזה לשרות דעד כאן לא איבעיא לן אלא אי לשרות דלא חשיב מפיק לשתות אבל לשתות דחשיב טפי דהיינו יין שלפני המזון פשיטא דפוטר יין דלשרות וכן משמע נמי בערבי פסחים (דף קא.) גבי שקדשו בב\"ה דר' יוחנן אמר אף ידי יין נמי יצאו ואין צריך לחזור ולברך על היין שבתוך הסעודה אע\"ג דקדשו שלא במקום סעודה ס\"ל לרבי יוחנן מדיצאו ידי קידוש מידי יין נמי יצאו ואף על גב דאיתותב רבי יוחנן היינו דוקא בשינוי מקום א\"כ נראה משם דה\"ה להבדלה דאין לחלק בין הבדלה לקידוש ולאפוקי מהני דחולקין ואמרי דוקא קידוש פוטר משום דאין קידוש אלא במקום סעודה אבל יין של הבדלה לא פטר אפילו הבדיל לאחר נטילה דהכי מיירי הא דפסקינן דיין שלפני המזון פוטר היין שבתוך המזון דכבר נטל ידיו והכי משמע בסמוך מתוך הבריית' כיצד סדר הסבה וכו' מיהו נראה כיון דנטל ידיו ודעתו לאכול ולשתות שם פוטר אפילו דהבדלה כדפריש מההיא דערבי פסחים ועוד דלא גרע יין דהבדלה מיין שלפני הסעודה דפטר ומיהו יש שמחמירין להבדיל קודם נטילת ידים לאפוקי נפשייהו מפלוגתא דאז ודאי צריך לברך אחריו ברכה מעין שלש ולא פטר יין שבתוך המזון:"
   },
   {
    "dh": "הסבו אין לא הסבו לא. תימה אמאי מקשה מדיוקא ותקשי ליה מרישא בהדיא דקתני היו יושבים מברך כל אחד לעצמו וי\"ל דאי מרישא הוה אמינא שישבו בשביל עסק אחר שלא היה דעתם מתחלה לאכול אבל אם ישבו אדעתא לאכול אפילו בלא הסבה נמי מהניא: עשרה בני אדם שהיו מהלכין כו' ניזיל וניכול לחמא כו' כישבו והסבו דמיא. והשתא ניחא הא דפריש במתני' דמיירי בין בברכת המוציא בין בברכת המזון כדמשמע הכא מתוך הברייתא דעשרה בני אדם וכו' וא\"ת אמאי המתינו למיבעי עד ברכת המזון והיאך ברכו על הפת מתחלה וי\"ל שמא מיירי דישבו לאכול זה אחר זה וברך כל אחד לעצמו המוציא",
    "text": ""
   },
   {
    "dh": "עשרה בני אדם שהיו מהלכין כו' ניזיל וניכול לחמא כו' כישבו והסבו דמיא",
    "text": " — והשתא ניחא הא דפריש במתני' דמיירי בין בברכת המוציא בין בברכת המזון כדמשמע הכא מתוך הברייתא דעשרה בני אדם וכו' וא\"ת אמאי המתינו למיבעי עד ברכת המזון והיאך ברכו על הפת מתחלה וי\"ל שמא מיירי דישבו לאכול זה אחר זה וברך כל אחד לעצמו המוציא:"
   }
  ],
  "translations": []
 },
 {
  "id": "43a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מג",
  "amud": "א",
  "dafEn": "43a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אהדר קרעיה לאחוריה וקרע קריעה אחרינא אמר נח נפשיה דרב וברכת מזונא לא גמרינן עד דאתא ההוא סבא רמא להו מתניתין אברייתא ושני להו כיון דאמרי ניזיל וניכול לחמא בדוך פלן כהסבו דמי: הסבו אחד מברך: אמר רב לא שנו אלא פת דבעי הסבה אבל יין לא בעי הסבה ור' יוחנן אמר אפילו יין נמי בעי הסבה איכא דאמרי אמר רב לא שנו אלא פת דמהניא ליה הסבה אבל יין לא מהניא ליה הסבה ורבי יוחנן אמר אפילו יין נמי מהניא ליה הסבה מיתיבי כיצד סדר הסבה אורחין נכנסין ויושבין על גבי ספסלין ועל גבי קתדראות עד שיכנסו כולם הביאו להם מים כל אחד ואחד נוטל ידו אחת בא להם יין כל אחד ואחד מברך לעצמו עלו והסבו ובא להם מים אף על פי שכל אחד ואחד נטל ידו אחת חוזר ונוטל שתי ידיו בא להם יין אף על פי שכל אחד ואחד ברך לעצמו אחד מברך לכולם להאיך לישנא דאמר רב לא שנו אלא פת דבעי הסבה אבל יין לא בעי הסבה קשיא רישא שאני אורחין דדעתייהו למיעקר ולהאיך לישנא דאמר רב לא שנו אלא פת דמהניא ליה הסבה אבל יין לא מהניא ליה הסבה קשיא סיפא שאני התם דמגו דקא מהניא ליה הסבה לפת מהניא ליה הסבה ליין: בא להם יין בתוך המזון: שאלו את בן זומא מפני מה אמרו בא להם יין בתוך המזון כל אחד ואחד מברך לעצמו לאחר המזון אחד מברך לכולם אמר להם הואיל ואין בית הבליעה פנוי: והוא אומר על המוגמר כו': מדקתני והוא אומר על המוגמר מכלל דאיכא עדיף מיניה ואמאי הואיל והוא נטל ידיו תחלה באחרונה מסייע ליה לרב דאמר רב חייא בר אשי אמר רב הנוטל ידיו תחלה באחרונה הוא מזומן לברכה רב ורבי חייא הוו יתבי קמיה דרבי בסעודתא א\"ל רבי לרב קום משי ידך חזייה דהוה מרתת אמר ליה רבי חייא בר פחתי עיין בברכת מזונא קאמר לך: אמר רבי זירא אמר רבא בר ירמיה מאימתי מברכין על הריח משתעלה תמרתו א\"ל רבי זירא לרבא בר ירמיה והא לא קא ארח אמר ליה ולטעמיך המוציא לחם מן הארץ דמברך והא לא אכל אלא דעתיה למיכל הכא נמי דעתיה לארוחי אמר רבי חייא בריה דאבא בר נחמני אמר רב חסדא אמר רב ואמרי לה אמר רב חסדא אמר זעירי כל המוגמרות מברכין עליהן בורא עצי בשמים חוץ ממושק שמן חיה הוא שמברכין עליו בורא מיני בשמים מיתיבי אין מברכין בורא עצי בשמים אלא על אפרסמון של בית רבי ועל אפרסמון של בית קיסר ועל ההדס שבכל מקום תיובתא אמר ליה רב חסדא לרב יצחק האי משחא דאפרסמון מאי מברכין עלויה א\"ל הכי אמר רב יהודה בורא שמן ארצנו א\"ל בר מיניה דר' יהודה דחביבא ליה ארץ ישראל לכולי עלמא מאי א\"ל הכי אמר רבי יוחנן בורא שמן ערב אמר ר' אדא בר אהבה האי כשרתא מברכין עלויה בורא עצי בשמים אבל משחא כבישא לא ורב כהנא אמר אפילו משחא כבישא אבל משחא טחינא לא נהרדעי אמרי אפי' משחא טחינא",
  "rashi": [
   {
    "dh": "אהדר קרעיה לאחוריה",
    "text": " — קרע שקרע בהספד רבו החזיר החלוק לאחוריו ומה שלאחור לפנים כדי לקרוע קרע אחר להראות אבל עכשיו כיום המיתה על שהיו צריכים להוראה ואין יודעים להורות:"
   },
   {
    "dh": "רמי להו כו'",
    "text": " — כדרמינן לעיל וע\"כ מבעי ליה לאוקומי ברייתא בהכי וקתני אחד מברך לכולם דקביעות הוא:"
   },
   {
    "dh": "הביאו להם מים",
    "text": " — כך היו רגילים:"
   },
   {
    "dh": "נוטל ידו אחת",
    "text": " — לקבל בה כוס ששותה לפני המזון:"
   },
   {
    "dh": "עלו",
    "text": " — על המטות והסבו:"
   },
   {
    "dh": "חוזר ונוטל ב' ידיו",
    "text": " — שצריך לאכול בשתיהן:"
   },
   {
    "dh": "אע\"פ שכל אחד ואחד ברך לעצמו",
    "text": " — צריכין עוד ברכה שאין ברכה ראשונה פוטרתו שאין הראשון קרוי שלפני המזון שאינו במקום סעודה והאי בתרא הוא יין שלפני המזון:"
   },
   {
    "dh": "אחד מברך לכולן",
    "text": " — דכיון דהסבו הוקבעו:"
   },
   {
    "dh": "קשיא רישא",
    "text": " — דקתני כל אחד ואחד מברך לעצמו:"
   },
   {
    "dh": "שאני אורחין דדעתייהו למיעקר",
    "text": " — סופן למיעקר ולעלות ולהסב במקום אחר שאין זה מקום המסיבה אלא כאן ישבו עד שיתכנסו כל הקרואים ודרך בעלי בתים עשירים היה לזמן לסעודתם אורחים עניים להכי קרי להו אורחים והא דאמר רב יין לא בעי הסבה אלא ישיבה בעלמא שלא בשעת סעודה קאמר או בשעת סעודה ובמקום סעודה:"
   },
   {
    "dh": "הואיל ואין בית הבליעה פנוי",
    "text": " — ואין לב המסובין אל המברך אלא לבלוע:"
   },
   {
    "dh": "מכלל דאיכא עדיף מיניה",
    "text": " — ואפ\"ה כיון דאתחיל בחדא עביד לאידך:"
   },
   {
    "dh": "הנוטל ידיו תחלה",
    "text": " — במים אחרונים הוא מזומן לבהמ\"ז:"
   },
   {
    "dh": "חזייה",
    "text": " — רבי חייא לרב:"
   },
   {
    "dh": "דהוה מרתת",
    "text": " — שמא ראה ידי מלוכלכות או שמא הארכתי באכילה יותר מדאי:"
   },
   {
    "dh": "עיין בברכת מזונא קאמר לך",
    "text": " — כאן נתן לך רשות לברך בהמ\"ז שהנוטל ידיו תחלה הוא מברך:"
   },
   {
    "dh": "על הריח",
    "text": " — של מוגמר:"
   },
   {
    "dh": "תמרתו",
    "text": " — קיטור העשן שמתמר ועולה:"
   },
   {
    "dh": "הא לא ארח",
    "text": " — לא הריח בו עדיין ולא נהנה:"
   },
   {
    "dh": "מברכין עליהן בורא עצי בשמים",
    "text": " — ואע\"פ שנשרף ואינו בעין אלא שהתימור עולה:"
   },
   {
    "dh": "חוץ ממושק",
    "text": " — מושג\"א בלע\"ז:"
   },
   {
    "dh": "שהוא מן חיה",
    "text": " — מן הרעי של חיה:"
   },
   {
    "dh": "מיתיבי אין מברכין בורא עצי בשמים אלא על אפרסמון",
    "text": " — שהעץ עצמו בא לפנינו:"
   },
   {
    "dh": "של בית רבי ושל בית קיסר",
    "text": " — נקט הני משום שאינו מצוי אלא בבית מלכים ובעלי גדולה:"
   },
   {
    "dh": "ועל ההדס שבכל מקום",
    "text": " — וה\"ה לכל הדומה להם שהעץ עצמו מריח בלא שרפה אלא דהדס שכיח ודברו חכמים בהווה בכל מקום ומוגמר לא מברכינן אלא בורא מיני בשמים:"
   },
   {
    "dh": "משחא דאפרסמא מאי מברכין",
    "text": " — על ריחו:"
   },
   {
    "dh": "שמן ארצנו",
    "text": " — שהיה גדל ביריחו ועל שם הריח היתה נקראת יריחו והוא פנג האמור בספר יחזקאל (כ\"ז) יהודה וא\"י המה רוכליך בחיטי מנית ופנג כך ראיתי בספר יוסף בן גוריון:"
   },
   {
    "dh": "בר מיניה דרב יהודה",
    "text": " — אל תביא לי ראיה מדבריו בזו:"
   },
   {
    "dh": "כשרתא",
    "text": " — קושט:"
   },
   {
    "dh": "משחא כבישא",
    "text": " — שמן שבו טמון הקושט והשמן מריח מן הבושם שבתוכו:"
   },
   {
    "dh": "משחא טחינא",
    "text": " — שטחנו בו כשרתא:"
   },
   {
    "dh": "לא",
    "text": " — הואיל ואין נראה לעינינו אלא השמן:"
   }
  ],
  "tosafot": [
   {
    "dh": "כל אחד נוטל ידו אחת",
    "text": " — מפני כבוד הברכה ולא דמי לנוטל ידיו לפירות דהוי מגסי הרוח כיון שאינו נוטל שתי ידיו:"
   },
   {
    "dh": "בא להם יין וכו'",
    "text": " — אע\"ג דיין שלפני המזון פוטר יין שלאחר המזון כ\"ש זה שלפניו הוא שאני הכא כיון שעלו להסב הוי שנוי מקום וצריך לברך:"
   },
   {
    "dh": "הואיל ואין בית הבליעה פנוי",
    "text": " — וי\"מ כשאומר סברי מורי והם מניחין לאכול כדי לשמוע הברכה ולענות אמן שיהיו פטורים וכן משמע בירושלמי גבי הך ברייתא ה\"מ באורחין אבל בבעל הבית פטור מפני שהכל פונים אצל בעל הבית תני רבי חייא אף בעל הבית בתוך ביתו ואין נראה לרבינו אלחנן דכיון שתקנו חכמים שיברך כל אחד לעצמו אינו יוצא כלל בברכת חבירו וגם שלא תחלוק בין פנוי לשאינו פנוי דאתי למטעי והטוב והמטיב יש מפרש שפוטר לאחרים לכולי עלמא דהכי משמע הטוב לעצמו והמטיב לאחריני שהם שותים ממנו ורבינו יחיאל היה אומר דלא היא דשייך נמי אין בית הבליעה פנוי ולא פליג בין הטוב ובין ברכת היין דמשום האי טעמא הטוב לדידיה ומטיב לאחריני אינו פוטר אחרים דהא המטיב שייך אפי' שלא בפני המטיבין לו כדאמרי' לקמן בפרק הרואה (ברכות דף נט:) אמרו לו ילדה אשתך זכר אומר ברוך הטוב והמטיב הטוב לדידיה והמטיב לאשתו אע\"ג דאין אשתו אצלו אבל צריך עיון קצת מהבדלה שאנו מבדילין ועומדים היאך אנו פוטרין זה את זה מיין ומהבדלה אחרי שאין אנו לא יושבים ולא מסובין ושמא י\"ל מתוך שקובעין עצמן כדי לצאת ידי הבדלה קבעי נמי אכולה מילתא ולכך נאה וטוב למבדיל וגם לשומעים שישבו בשעת הבדלה שאז יהיה נראה כקבע ופוטר אותם:"
   },
   {
    "dh": "כל המוגמרות מברכין עליהן בורא עצי בשמים",
    "text": " — אע\"פ שנשרפו ואין עצי בשמים בעין:"
   },
   {
    "dh": "ועל ההדס שבכל מקום",
    "text": " — בעל הלכות גדולות לא גריס תיובתא ומשני תנא הדס וכל דדמי ליה כלומר שעיקרו לריח לאפוקי תפוחים וחבושים שאין עיקרן לריח אלא לאכול ומי שהולך בבית שיש שם בשמים ויש שם מיני בשמים שמריח בהן ומספקא ליה אי ממין עץ אי ממין אדמה הוא יש מפרשים שמברך שהכל נהיה בדברו דעל כולן אם ברך שהכל יצא והרב רבינו משה מקוצי היה אומר שיברך בורא מיני בשמים:"
   },
   {
    "dh": "משחא כבישא",
    "text": " — פי' ר\"ח שמענו מרבותינו שכובשין שומשמין וורד ועצי בשמים זמן מרובה וקולטין השומשמין ריח של בשמים וסוחטים וטוחנים אותם ויש בו ריח של בשמים ומשחא טחינא קרוב לטחינתו נותנים עליהם עצי בשמים ואינו קולט כל כך הריח:"
   }
  ],
  "translations": []
 },
 {
  "id": "43b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מג",
  "amud": "ב",
  "dafEn": "43b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אמר רב גידל אמר רב האי סמלק מברכין עלויה בורא עצי בשמים אמר רב חננאל אמר רב הני חלפי דימא מברכין עלייהו בורא עצי בשמים אמר מר זוטרא מאי קראה (יהושע ב, ו) והיא העלתם הגגה ותטמנם בפשתי העץ (רב משרשיא אמר) האי נרקום דגנוניתא מברכין עלויה בורא עצי בשמים דדברא בורא עשבי בשמים אמר רב ששת הני סיגלי מברכין עלייהו בורא עשבי בשמים אמר מר זוטרא האי מאן דמורח באתרוגא או בחבושא אומר ברוך שנתן ריח טוב בפירות אמר רב יהודה האי מאן דנפיק ביומי ניסן וחזי אילני דקא מלבלבי אומר ברוך שלא חיסר בעולמו כלום וברא בו בריות טובות ואילנות טובות להתנאות בהן בני אדם אמר רב זוטרא בר טוביה אמר רב מנין שמברכין על הריח שנאמר (תהלים קנ, ו) כל הנשמה תהלל יה איזהו דבר שהנשמה נהנית ממנו ואין הגוף נהנה ממנו הוי אומר זה הריח ואמר רב זוטרא בר טוביה אמר רב עתידים בחורי ישראל שיתנו ריח טוב כלבנון שנאמר (הושע יד, ז) ילכו יונקותיו ויהי כזית הודו וריח לו כלבנון: ואמר רב זוטרא בר טוביה אמר רב מאי דכתיב (קהלת ג, יא) את הכל עשה יפה בעתו מלמד שכל אחד ואחד יפה לו הקב\"ה אומנתו בפניו אמר רב פפא היינו דאמרי אינשי תלה ליה קורא לדבר אחר ואיהו דידיה עביד ואמר רב זוטרא בר טוביה אמר רב אבוקה כשנים וירח כשלשה איבעיא להו אבוקה כשנים בהדי דידיה או דילמא אבוקה כשנים לבר מדידיה ת\"ש וירח כשלשה אי אמרת בשלמא בהדי דידיה שפיר אלא אי אמרת לבר מדידיה ארבעה למה לי והאמר מר לאחד נראה ומזיק לשנים נראה ואינו מזיק לשלשה אינו נראה כל עיקר אלא לאו שמע מינה אבוקה כשנים בהדי דידיה שמע מינה: ואמר רב זוטרא בר טוביה אמר רב ואמרי לה אמר רב חנא בר ביזנא אמר רבי שמעון חסידא ואמרי לה אמר רבי יוחנן משום רבי שמעון בן יוחי נוח לו לאדם שיפיל עצמו לתוך כבשן האש ואל ילבין פני חברו ברבים מנלן מתמר שנאמר (בראשית לח, כה) היא מוצאת וגו': ת\"ר הביאו לפניו שמן והדס ב\"ש אומרים מברך על השמן ואח\"כ מברך על ההדס וב\"ה אומרים מברך על ההדס ואח\"כ מברך על השמן אמר ר\"ג אני אכריע שמן זכינו לריחו וזכינו לסיכתו הדס לריחו זכינו לסיכתו לא זכינו א\"ר יוחנן הלכה כדברי המכריע רב פפא איקלע לבי רב הונא בריה דרב איקא אייתו לקמייהו שמן והדס שקל רב פפא בריך אהדס ברישא והדר בריך אשמן אמר ליה לא סבר לה מר הלכה כדברי המכריע אמר ליה הכי אמר רבא הלכה כב\"ה ולא היא לאשתמוטי נפשיה הוא דעבד ת\"ר הביאו לפניהם שמן ויין ב\"ש אומרים אוחז השמן בימינו ואת היין בשמאלו מברך על השמן וחוזר ומברך על היין ב\"ה אומרים אוחז את היין בימינו ואת השמן בשמאלו מברך על היין וחוזר ומברך על השמן וטחו בראש השמש ואם שמש ת\"ח הוא טחו בכותל מפני שגנאי לתלמיד חכם לצאת לשוק כשהוא מבושם ת\"ר ששה דברים גנאי לו לתלמיד חכם אל יצא כשהוא מבושם לשוק ואל יצא יחידי בלילה ואל יצא במנעלים המטולאים ואל יספר עם אשה בשוק ואל יסב בחבורה של עמי הארץ ואל יכנס באחרונה לבית המדרש ויש אומרים אף לא יפסיע פסיעה גסה ואל יהלך בקומה זקופה אל יצא כשהוא מבושם לשוק א\"ר אבא בריה דר' חייא בר אבא אמר רבי יוחנן במקום שחשודים על משכב זכור אמר רב ששת לא אמרן אלא בבגדו אבל בגופו זיעה מעברא ליה אמר רב פפא ושערו כבגדו דמי ואמרי לה כגופו דמי ואל יצא יחידי בלילה משום חשדא ולא אמרן אלא דלא קביע ליה עידנא אבל קביע ליה עידנא מידע ידיע דלעידניה קא אזיל ואל יצא במנעלים המטולאים מסייע ליה לרבי חייא בר אבא דאמר ר' חייא בר אבא גנאי הוא לתלמיד חכם שיצא במנעלים המטולאים איני והא ר' חייא בר אבא נפיק אמר מר זוטרא בריה דרב נחמן בטלאי על גבי טלאי ולא אמרן אלא בפנתא אבל בגילדא לית לן בה ובפנתא לא אמרן אלא באורחא אבל בביתא לית לן בה ולא אמרן אלא בימות החמה אבל בימות הגשמים לית לן בה ואל יספר עם אשה בשוק אמר רב חסדא ואפילו היא אשתו תניא נמי הכא אפילו היא אשתו ואפילו היא בתו ואפילו היא אחותו לפי שאין הכל בקיאין בקרובותיו ואל יסב בחבורה של עמי הארץ מאי טעמא דילמא אתי לאמשוכי בתרייהו ואל יכנס אחרונה לבית המדרש משום דקרו ליה פושע וי\"א אף לא יפסיע פסיעה גסה דאמר מר פסיעה גסה נוטלת אחד מת\"ק ממאור עיניו של אדם מאי תקנתיה להדריה בקדושא דבי שמשי ואל יהלך בקומה זקופה דאמר מר המהלך בקומה זקופה אפילו ארבע אמות כאילו דוחק רגלי שכינה דכתיב (ישעיהו ו, ג) מלא כל הארץ כבודו:",
  "rashi": [
   {
    "dh": "סמלק",
    "text": " — יסמי\"ן קורין לו בלשון ישמעאל והוא מין עשב שיש בו שלש שורות של עלין זו למעלה מזו ושלשה עלין לכל שורה:"
   },
   {
    "dh": "חלפי דימא",
    "text": " — בושם שקורין אשפי\"ג והוא שבולת נרד ועשוי כעין גבעולי פשתן דאשכחן גבעולין דאיקרי עץ:"
   },
   {
    "dh": "נרקום",
    "text": " — חבצלת השרון בה\"ג:"
   },
   {
    "dh": "דגנוניתא",
    "text": " — הגדל בגינה:"
   },
   {
    "dh": "סיגלי",
    "text": " — ויול\"ש בלע\"ז:"
   },
   {
    "dh": "חבושין",
    "text": " — קודוניי\"ש בלע\"ז:"
   },
   {
    "dh": "להתנאות",
    "text": " — ליהנות:"
   },
   {
    "dh": "כלבנון",
    "text": " — שמריחין עליו ופרחיו:"
   },
   {
    "dh": "יפה לו אומנתו",
    "text": " — ואפי' בורסי נאה לו אומנתו בעיניו ועשה הקדוש ב\"ה כן שלא יחסר העולם אומנות:"
   },
   {
    "dh": "קורא",
    "text": " — רך הגדל בדקל תלה אותו לחזיר והוא יגלגלנו באשפה שזו היא אומנתו:"
   },
   {
    "dh": "אבוקה כשני בני אדם",
    "text": " — לענין היוצא בלילה דאמר מר אל יצא אדם יחידי בלילה:"
   },
   {
    "dh": "וירח כשלשה",
    "text": " — ויש חלוק בין שנים לשלשה כדלקמן:"
   },
   {
    "dh": "לאחד נראה",
    "text": " — השד ומזיקו:"
   },
   {
    "dh": "היא מוצאת והיא שלחה וגו'",
    "text": " — ואילו בהדיא לא אמרה אלו הסימנים של יהודה הם ולו אני הרה אלא לאיש אשר אלה לו אנכי הרה אם יודה יודה ואם לאו אשרף ולא אלבין פניו:"
   },
   {
    "dh": "שמן והדס",
    "text": " — בסוף הסעודה שמן לסוך ידיו להעביר זוהמת האוכלים והדס להריח כמו שאמרנו:"
   },
   {
    "dh": "אני אכריע",
    "text": " — לצד בית שמאי:"
   },
   {
    "dh": "זכינו לריחו ולסיכתו",
    "text": " — כגון משחא כבישא הלכך שמן עדיף:"
   },
   {
    "dh": "ולא היא",
    "text": " — לא אמר רבא הלכתא כב\"ה אלא רב פפא אכסיף לפי שטעה והשמיט עצמו בכך:"
   },
   {
    "dh": "שמן ויין",
    "text": " — זהו יין שלאחר המזון ואין זה כוס של ברכה:"
   },
   {
    "dh": "שמן בימינו",
    "text": " — לפי שעליו מברך תחלה:"
   },
   {
    "dh": "מברך על השמן",
    "text": " — בורא שמן ערב:"
   },
   {
    "dh": "חוזר ומברך על היין",
    "text": " — כגון בחול שאין היין קבע ואין היין שלפני המזון פוטרו:"
   },
   {
    "dh": "וטחו בראש השמש",
    "text": " — כדי שלא יצא בידיו מבושמות בשוק שגנאי הוא לתלמיד חכם:"
   },
   {
    "dh": "שחשודים על משכב זכור",
    "text": " — מבשמין עצמם כדי שיתאוו להם:"
   },
   {
    "dh": "ושערו כבגדו דמי",
    "text": " — דלא שכיח ביה זיעה:"
   },
   {
    "dh": "ואמרי לה כגופו",
    "text": " — דשכיח ביה זיעה:"
   },
   {
    "dh": "משום חשדא",
    "text": " — של זנות:"
   },
   {
    "dh": "דלא קביע ליה עידנא",
    "text": " — שלא קבעו לו רבו קביעות ללמדו בלילה:"
   },
   {
    "dh": "בפנתא",
    "text": " — אנפוני\"א בלע\"ז שעל גבי הרגל:"
   },
   {
    "dh": "גילדא",
    "text": " — עקב שקורין שול\"א:"
   },
   {
    "dh": "בימות הגשמים",
    "text": " — הטיט מכסהו:"
   },
   {
    "dh": "אפי' היא אשתו",
    "text": " — שאין הכל מכירין בה וחושדין אותו:"
   },
   {
    "dh": "דקרו ליה פושע",
    "text": " — מתעצל:"
   },
   {
    "dh": "בקדושא דבי שמשי",
    "text": " — ששותה כוס של קידוש בשבת בלילה:"
   }
  ],
  "tosafot": [
   {
    "dh": "האי מאן דמורח באתרוגא וחבוש' מברך וכו'",
    "text": " — ודוקא כשמריח בהם אבל אם בא לאכול מהם אין לברך ברכת ריח כי אם ברכת אכילה:"
   },
   {
    "dh": "שמן והדס",
    "text": " — האי שמן להריח הוא דאי להעביר הזוהמא הא אמרינן בפרק אלו דברים (לקמן ברכות נג.) דאין מברכין עליו:"
   },
   {
    "dh": "הכי אמר רבא הלכתא כבית הלל ולא היא לאשתמוטי נפשיה הוא דקא עביד",
    "text": " — כך כתוב בספרים שלנו ובפירוש רש\"י אבל רב אלפס פסק כרבא משמע שלא היה גורס בספרו ולא היא וכו':"
   }
  ],
  "translations": []
 },
 {
  "id": "44a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מד",
  "amud": "א",
  "dafEn": "44a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "הביאו לפניו מליח תחלה ופת עמו מברך על המליח ופוטר את הפת שהפת טפלה לו זה הכלל כל שהוא עיקר ועמו טפלה מברך על העיקר ופוטר את הטפלה:",
  "gemara": "ומי איכא מידי דהוי מליח עיקר ופת טפלה אמר רב אחא בריה דרב עוירא אמר רב אשי באוכלי פירות גנוסר שנו אמר רבה בר בר חנה כי הוה אזלינן בתריה דרבי יוחנן למיכל פירות גנוסר כי הוינן בי מאה מנקטינן ליה לכל חד וחד עשרה עשרה וכי הוינן בי עשרה מנקטינן ליה כל חד וחד מאה מאה וכל מאה מינייהו הוה מחזיק להו צנא בר תלתא סאוי ואכיל להו ומשתבע דלא טעים זיונא זיונא ס\"ד אלא אימא מזונא רבי אבהו אכיל עד דהוה שריק ליה דודבא מאפותיה ורב אמי ורב אסי הוו אכלי עד דנתור מזייהו רשב\"ל הוה אכיל עד דמריד ואמר להו רבי יוחנן לדבי נשיאה והוה משדר ליה רבי יהודה נשיאה באלושי אבתריה ומייתי ליה לביתיה כי אתא רב דימי אמר עיר אחת היתה לו לינאי המלך בהר המלך שהיו מוציאים ממנה ששים רבוא ספלי טרית לקוצצי תאנים מע\"ש לע\"ש כי אתא רבין אמר אילן אחד היה לו לינאי המלך בהר המלך שהיו מורידים ממנו ארבעים סאה גוזלות משלש בריכות בחדש כי אתא ר' יצחק אמר עיר אחת היתה בארץ ישראל וגופנית שמה שהיו בה שמנים זוגות אחים כהנים נשואים לשמנים זוגות אחיות כהנות ובדקו רבנן מסורא ועד נהרדעא ולא אשכחו בר מבנתיה דרב חסדא דהוו נסיבן לרמי בר חמא ולמר עוקבא בר חמא ואע\"ג דאינהי הוו כהנתא אינהו לא הוו כהני אמר רב כל סעודה שאין בה מלח אינה סעודה אמר רבי חייא בר אבא א\"ר יוחנן כל סעודה שאין בה שריף אינה סעודה:  אכל ענבים ותאנים ורמונים מברך אחריהם שלש ברכות דברי רבן גמליאל וחכ\"א ברכה אחת (מעין שלש) ר\"ע אומר אפי' אכל שלק והוא מזונו מברך עליו ג' ברכות השותה מים לצמאו מברך שהכל נהיה בדברו ר' טרפון אומר בורא נפשות רבות וחסרונן: גמ׳ מ\"ט דר\"ג דכתיב (דברים ח, ח) ארץ חטה ושעורה וגו' וכתיב ארץ אשר לא במסכנות תאכל בה לחם וגו' וכתיב (דברים ח, י) ואכלת ושבעת וברכת את ה' אלהיך ורבנן ארץ הפסיק הענין ור\"ג נמי ארץ הפסיק הענין ההוא מבעי ליה למעוטי הכוסס את החטה א\"ר יעקב בר אידי א\"ר חנינא כל שהוא מחמשת המינין בתחלה מברך עליו במ\"מ ולבסוף ברכה אחת מעין שלש אמר רבה בר מרי אריב\"ל כל שהוא משבעת המינין בתחלה מברך בורא פרי העץ ולבסוף ברכה אחת מעין שלש א\"ל אביי לרב דימי מאי ניהו ברכה אחת מעין שלש א\"ל אפירי דעץ על העץ ועל פרי העץ ועל תנובת השדה ועל ארץ חמדה טובה ורחבה שהנחלת לאבותינו לאכול מפריה ולשבוע מטובה רחם ה' אלהינו על ישראל עמך ועל ירושלים עירך ועל מקדשך ועל מזבחך ותבנה ירושלים עיר קדשך במהרה בימינו והעלנו לתוכה ושמחנו בה כי אתה טוב ומטיב לכל דחמשת המינין על המחיה ועל הכלכלה ועל תנובת השדה כו' וחותם על הארץ ועל המחיה מיחתם במאי חתים כי אתא רב דימי אמר רב חתים בר\"ח ברוך מקדש ישראל וראשי חדשים הכא מאי רב חסדא אמר על הארץ ועל פירותיה ור' יוחנן אמר על הארץ ועל הפירות א\"ר עמרם ולא פליגי הא לן והא להו מתקיף לה ר\"נ בר יצחק אינהו אכלי ואנן מברכין אלא איפוך רב חסדא אמר על הארץ ועל הפירות ר' יוחנן אמר על הארץ ועל פירותיה",
  "rashi": [
   {
    "dh": "מתני' מליח",
    "text": " — כל דבר מלוח:"
   },
   {
    "dh": "גמ' פירות גנוסר",
    "text": " — פירות ארץ ים כנרת חשובים מן הפת:"
   },
   {
    "dh": "זיונא",
    "text": " — משמע מידי דבר אכילה:"
   },
   {
    "dh": "מזונא",
    "text": " — דבר הסועד:"
   },
   {
    "dh": "דשריק דודבא מאפותי'",
    "text": " — שהזבוב מחליק ממצחו מתוך צהלת פנים בשרו מחליק:"
   },
   {
    "dh": "עד דמריד",
    "text": " — דעתו מטרפת:"
   },
   {
    "dh": "באלושי",
    "text": " — אוכלוסי בני אדם:"
   },
   {
    "dh": "ספלי טרית",
    "text": " — ספלים מלאים חתיכות דג חתוך שקורים טונינ\"א:"
   },
   {
    "dh": "לקוצצי תאנים",
    "text": " — למאכל פועלים שקוצצים תאנים והיו מרובים עד שכל אלו צריכין להם למאכל:"
   },
   {
    "dh": "בריכות",
    "text": " — קובייא\"ש בלע\"ז:"
   },
   {
    "dh": "משלש בריכות בחדש",
    "text": " — ג' פעמים בחדש מורידים ממנו כך:"
   },
   {
    "dh": "שמנים זוגות אחים",
    "text": " — שנים שנים אחים היו כולם וכן נשותיהם:"
   },
   {
    "dh": "שריף",
    "text": " — תבשיל לח שיש בו מרק כמו שורפה חיה:"
   },
   {
    "dh": "מתני' מברך אחריהם ג' ברכות",
    "text": " — ר\"ג לטעמיה דאמר לעיל בפירקין (ברכות דף לז.) כל שהוא מז' המינים מברך אחריו ג' ברכות:"
   },
   {
    "dh": "אפילו אכל שלק",
    "text": " — של ירק:"
   },
   {
    "dh": "והוא מזונו",
    "text": " — שסמך עליו למזון:"
   },
   {
    "dh": "וחסרונן",
    "text": " — צרכי ספוקן:"
   },
   {
    "dh": "גמ' וברכת",
    "text": " — אכולהו קאי ובההוא קרא ג' ברכות רמיזי כדאמרינן בפרק שלשה שאכלו (ברכות דף מח:):"
   },
   {
    "dh": "ארץ הפסיק הענין",
    "text": " — ולא קאי וברכת אלא אלחם דסמיך ליה:"
   },
   {
    "dh": "ור\"ג ההוא",
    "text": " — הפסקה לפרושי חטה דכתיב בקרא קמא אתא ולמעוטי שאם כססה כמות שהיא אין זו בכלל ברכה אא\"כ עשאה לחם:"
   },
   {
    "dh": "חמשת המינים",
    "text": " — כולם מין דגן חטין ושעורין וכוסמין ושבולת שועל ושיפון כוסמין מין חטה שבולת שועל ושיפון מין שעורה:"
   },
   {
    "dh": "מברך עליו ב\"מ מזונות",
    "text": " — אם עשאו תבשיל:"
   },
   {
    "dh": "כל שהוא מז' המינים",
    "text": " — משאר ז' המינים האמורים בפסוק ואינו מין דגן:"
   },
   {
    "dh": "אפרי דעץ על העץ ועל פרי העץ ועל ארץ חמדה טובה ורחבה",
    "text": " — אתרוייהו קאי כולה עד סופה:"
   },
   {
    "dh": "רב חתים בר\"ח כו'",
    "text": " — אע\"ג דדמיא לתרתי:"
   },
   {
    "dh": "הכא מאי",
    "text": " — מי מחתמינן בתרתי כהאי גוונא כגון על הארץ ועל הפירות ולא הויא חתימה בשתים ממש כדמפרש לה בפרק שלשה שאכלו (ברכות דף מט.):"
   },
   {
    "dh": "הא לן והא להו",
    "text": " — רב חסדא מבבל ובבבל חתמי על הארץ ועל פירותיה ור' יוחנן מארץ ישראל והתם חתמי על הפירות:"
   },
   {
    "dh": "ואנן מברכינן",
    "text": " — על פירותיה אארץ ישראל לחודה קאי ואנן לא אכלינן מינייהו ומברכים עלייהו:"
   }
  ],
  "tosafot": [
   {
    "dh": "מברך על המליח",
    "text": " — ואף על גב דאשמעינן דפת פוטר את הפרפרת איצטריך לאשמעינן דפעמים דפת טפל:"
   },
   {
    "dh": "באוכלי פירות גנוסר שנו",
    "text": " — שהמליח עיקר שהוא בא להשיב הלב שנחלש מפני מתיקות הפירות והפת שלאחריו טפל ואינו בא אלא בשביל המליח וא\"ת פירות הוי עיקר ומליח טפל ולבריך על הפירות ולפטר כולהו וי\"ל דמיירי שלא אכל הפירות באותו מעמד א\"נ בשעה שאכל פירות גנוסר לא היה שם עדיין מליח ופת דלא היה יודע שיחלש לבו מחמת המתיקות:"
   },
   {
    "dh": "רבי עקיבא אומר אפי' אכל שלק והוא מזונו כו'",
    "text": " — ולא דמי לההיא דלעיל (ברכות דף לז.) דר\"ג נתן רשות לר\"ע לברך וכו' דשאני הכא דאיקבע מזוניה עליה:"
   },
   {
    "dh": "על העץ ועל פרי העץ",
    "text": " — אבל על היין מברכים על הגפן ועל פרי הגפן דכיון דיין קובע ברכה לעצמו משום חביבותיה הוא הדין לאחריו ובחתימה יש שחותמין על הארץ ועל הפירות ויש שחותמין על הגפן ועל פרי הגפן מיהו לכאורה משמע דא\"צ לשנות החתימה שהרי אין אנו משנין רק לומר פרי הגפן במקום פרי העץ אבל בעלמא היכא דלא מברכינן על העץ אלא בסתמא על הארץ ועל הפירות ביין נמי אין לשנות ובס' המיימוני מצריך להזכיר בה מעין המאורע בשבת ובי\"ט וכן משמע בירו' ומיהו לא נהגו העולם כן ויכול להיות מה שמזכירים מעין המאורע היינו דוקא בימיהם שהיו רגילין לקבוע איין ואמיני פירות אבל האידנא לא קבעי ופר\"ח היכא דאכיל מיני מזונות כגון דייסא ותאנים ושתי חמרא מברך ברוך אתה ה' אמ\"ה על המחיה ועל הכלכלה על הגפן ועל פרי הגפן ועל העץ ועל פרי העץ ועל תנובת השדה וכו' וחותם בא\"י אמ\"ה על הארץ ועל המחיה ועל הפירות ולא הוי חתימה בשתים דהארץ היא המוציאה המחיה והפירות:"
   },
   {
    "dh": "אינהו מיכל אכלי ואנן מברכין",
    "text": " — משמע שאין נראה למקשן שידברו האמוראים דבבל בשביל בני ארץ ישראל כי כך פר\"ת גבי (קדושין כט:) לעולם ישא אשה ואחר כך ילמוד תורה ותנא אחריתי ילמוד תורה ואחר כך ישא אשה ומסיק הא לן והא להו ופירש ר\"ת דר' יוחנן היה מדבר בשביל תלמידיו שהיו מבבל דשמא הכא קים ליה למקשן דבאותה שעה שאמר רב חסדא הא מילתא לא היה לפניו שום תלמיד מא\"י וכן לא שום תלמיד מבבל לפני רבי יוחנן וא\"כ לא היה מזכיר רב חסדא שהיה מבבל כי אם לבני בבל ולהכי פריך היאך יברכו בני בבל על הארץ ועל פירותיה משמע דקאי דוקא על פירות של ארץ ישראל והם אינם אוכלים אותן:"
   }
  ],
  "translations": []
 },
 {
  "id": "44b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מד",
  "amud": "ב",
  "dafEn": "44b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אמר רב יצחק בר אבדימי משום רבינו על הביעא ועל מיני קופרא בתחלה מברך שהכל ולבסוף בורא נפשות רבות וכו' אבל ירקא לא ור' יצחק אמר אפילו ירקא אבל מיא לא ורב פפא אמר אפילו מיא מר זוטרא עביד כרב יצחק בר אבדימי ורב שימי בר אשי עביד כר' יצחק וסימנך חד כתרי ותרי כחד א\"ר אשי אנא זמנא דכי מדכרנ' עבידנא ככולהו תנן כל שטעון ברכה לאחריו טעון ברכה לפניו ויש שטעון ברכה לפניו ואין טעון ברכה לאחריו בשלמא לרב יצחק בר אבדימי לאפוקי ירקא לר' יצחק לאפוקי מיא אלא לרב פפא לאפוקי מאי לאפוקי מצות ולבני מערבא דבתר דמסלקי תפילייהו מברכי אקב\"ו לשמור חקיו לאפוקי מאי לאפוקי ריחני א\"ר ינאי א\"ר כל שהוא כביצה ביצה טובה ממנו כי אתא רבין אמר טבא ביעתא מגולגלתא משיתא קייסי סולתא כי אתא רב דימי אמר טבא ביעתא מגולגלתא משיתא מטויתא מארבע מבושלתא כל שהוא כביצה ביצה טובה הימנו לבר מבשרא: רע\"א אפילו אכל שלק כו': ומי איכא מידי דהוה שלק מזוני א\"ר אשי בקלח של כרוב שנו ת\"ר טחול יפה לשינים וקשה לבני מעים כרישין קשין לשינים ויפין לבני מעים כל ירק חי מוריק וכל קטן מקטין וכל נפש משיב את הנפש וכל קרוב לנפש משיב את הנפש כרוב למזון ותרדין לרפואה אוי לו לבית שהלפת עוברת בתוכו: אמר מר טחול יפה לשינים וקשה לבני מעים מאי תקנתיה נלעסיה ונשדייה כרישין קשין לשינים ויפין לבני מעים מאי תקנתיה לשלקינהו ונבלעינהו כל ירק חי מוריק א\"ר יצחק בסעודה ראשונה של אחר הקזה וא\"ר יצחק כל האוכל ירק קודם ארבע שעות אסור לספר הימנו מאי טעמא משום ריחא וא\"ר יצחק אסור לאדם שיאכל ירק חי קודם ארבע שעות אמימר ומר זוטרא ורב אשי הוו יתבי אייתו קמייהו ירק חי קודם ארבע שעות אמימר ורב אשי אכול ומר זוטרא לא אכל אמרו ליה מאי דעתיך דא\"ר יצחק כל האוכל ירק קודם ארבע שעות אסור לספר הימנו משום ריחא והא אנן דקא אכלינן וקא משתעית בהדן אמר להו אנא כאידך דר' יצחק ס\"ל דא\"ר יצחק אסור לאדם שיאכל ירק חי קודם ארבע שעות כל קטן מקטין אמר רב חסדא אפילו גדיא בר זוזא ולא אמרן אלא דלית ביה רבעא אבל אית ביה רבעא לית לן בה כל נפש משיב נפש אמר רב פפא אפילו גילדני דבי גילי כל הקרוב לנפש משיב את הנפש אמר רב אחא בר יעקב עונקא א\"ל רבא לשמעיה כי מייתית לי אומצא דבישרא טרח ואייתי לי מהיכא דמקרב לבי ברוך כרוב למזון ותרדין לרפואה כרוב למזון אין ולרפואה לא והא תניא ששה דברים מרפאין את החולה מחליו ורפואתן רפואה ואלו הן כרוב ותרדין ומי סיסין דבש וקיבה והרת ויותרת הכבד אלא אימא כרוב אף למזון אוי לו לבית שהלפת עוברת בתוכו איני והא אמר ליה רבא לשמעיה כי חזית לפתא בשוקא לא תימא לי במאי כרכת ריפתא אמר אביי מבלי בשר ורבא אמר מבלי יין איתמר רב אמר מבלי בשר ושמואל אמר מבלי עצים ורבי יוחנן אמר מבלי יין א\"ל רבא לרב פפא סודני אנן תברינן לה בבשרא וחמרא אתון דלא נפיש לכו חמרא במאי תבריתו לה א\"ל בציבי כי הא דביתהו דרב פפא בתר דמבשלא לה תברא לה בתמנן אופי פרסייתא תנו רבנן דג קטן מליח פעמים שהוא ממית בשבעה בשבעה עשר ובעשרים ושבעה ואמרי לה בעשרים ושלשה ולא אמרן אלא במטוי ולא מטוי אבל מטוי שפיר לית לן בה ודלא מטוי שפיר לא אמרן אלא דלא שתה בתריה שכרא אבל שתה בתריה שכרא לית לן בה: והשותה מים לצמאו וכו' לאפוקי מאי א\"ר אידי בר אבין לאפוקי למאן",
  "rashi": [
   {
    "dh": "קופרא",
    "text": " — כל מיני בשר:"
   },
   {
    "dh": "אבל ירקא לא",
    "text": " — צריך לברוכי אחריה:"
   },
   {
    "dh": "חד כתרי",
    "text": " — מר זוטרא שהוזכר כאן יחיד בלא שם אביו עביד כרב יצחק בר אבדימי שהוזכר בשמו ובשם אביו:"
   },
   {
    "dh": "ותרי כחד",
    "text": " — מר בר רב אשי שהוזכר בשמו ובשם אביו עביד כר' יצחק שהוזכר יחיד:"
   },
   {
    "dh": "ככולהו",
    "text": " — אף כרב פפא:"
   },
   {
    "dh": "כל שטעון ברכה",
    "text": " — משנה היא במסכת נדה:"
   },
   {
    "dh": "למעוטי ירקא",
    "text": " — וכ\"ש מיא:"
   },
   {
    "dh": "למעוטי מצות",
    "text": " — אין מברכין כשמסלקין תפילין וציצית ואחר תקיעת שופר ולולב:"
   },
   {
    "dh": "כל שהוא כביצה",
    "text": " — אין לך מין מאכל שיעור כביצה שלא תהא ביצה טובה לגוף ממנו:"
   },
   {
    "dh": "מגולגלתא",
    "text": " — צלויה לחה ורכה ששורפין אותה:"
   },
   {
    "dh": "מגולגלתא משיתא",
    "text": " — טובה משיתא קייסי:"
   },
   {
    "dh": "קייסי",
    "text": " — מדות מחזיקות לוג:"
   },
   {
    "dh": "מטויתא",
    "text": " — צלויה קשה טובה מארבע קייסי:"
   },
   {
    "dh": "מבושלתא",
    "text": " — במים עלה א\"ר ינאי כל שהוא כביצה ביצה טובה ממנו:"
   },
   {
    "dh": "בקלח של כרוב שנו",
    "text": " — שהוא מזון דתניא לקמן כרוב למזון:"
   },
   {
    "dh": "כרישין",
    "text": " — כרתי:"
   },
   {
    "dh": "כל ירק חי מוריק",
    "text": " — נוטל תואר הפנים:"
   },
   {
    "dh": "כל קטן",
    "text": " — שלא גדל כל צרכו ולקמן מפרש כמה כל צרכו:"
   },
   {
    "dh": "כל נפש",
    "text": " — דבר חי הנאכל שלם כגון דגים קטנים שגדלו כל צרכן:"
   },
   {
    "dh": "הקרוב לנפש",
    "text": " — האוכל מן הבהמה במקום חיות שלה ולקמן מפרש לה:"
   },
   {
    "dh": "אוי לבית",
    "text": " — לכרס האוכל לפת:"
   },
   {
    "dh": "נלעסיה",
    "text": " — כוססו ומשליכו:"
   },
   {
    "dh": "לשלקינהו",
    "text": " — בקדרה הרבה שלא יצטרך לכוססו בשיניו:"
   },
   {
    "dh": "קודם ארבע שעות",
    "text": " — שאינו זמן סעודה והריח קשה לבני אדם המספרים עמו קודם אכילה שהגוף ריקן:"
   },
   {
    "dh": "כאידך דר' יצחק סבירא לי",
    "text": " — אבל אסור לספר לא סבירא לי:"
   },
   {
    "dh": "בר זוזא",
    "text": " — כלומר שמן וטוב ששוה זוז:"
   },
   {
    "dh": "דלית ביה רבעא",
    "text": " — שלא גדל עד רביעית שלו כגון טלה רביעית של איל גדי כדי רביעית של שעיר גדול וכן כל דבר:"
   },
   {
    "dh": "גילדני דבי גילי",
    "text": " — דגים קטנים מאד ומצויין בין הקנים באגם ואין דרכן לגדל יותר אבל דג קטן ממין דג גדול ולא גדל רובע זה הוא קטן מקטין:"
   },
   {
    "dh": "עונקא",
    "text": " — צואר מקום בית השחיטה וסמוך ללב ולמעים:"
   },
   {
    "dh": "לבי ברוך",
    "text": " — למקום שברכו שם על השחיטה:"
   },
   {
    "dh": "ומי סיסין",
    "text": " — תבשיל של פוליאו\"ל:"
   },
   {
    "dh": "והרת",
    "text": " — ולדיר\"א שהולד נוצר בו:"
   },
   {
    "dh": "יותרת הכבד",
    "text": " — טרפשא דכבדא שקורין אייבר\"ש:"
   },
   {
    "dh": "מבלי בשר",
    "text": " — היא קשה אבל כשמבשלה עם בשר שמן מתיש כחה:"
   },
   {
    "dh": "מבלי יין",
    "text": " — כשאין שותה אחריה יין:"
   },
   {
    "dh": "מבלי עצים",
    "text": " — שאינו שולקה הרבה:"
   },
   {
    "dh": "סודני",
    "text": " — בעל שכר תמרים ור' פפא מוכר שכר היה כדאמר באיזהו נשך (ד' סה.) טרשא דרב פפא שכראי לא פסיד ואמר רב פפא אי לאו דרמאי שכרא לא איעתרי (פסחים קיג.) והוא נקרא סודני כדאמרינן תמרי בחלוזך לבי סודנא רהוט (שם):"
   },
   {
    "dh": "דלא נפיש לכו חמרא",
    "text": " — ששותי שכר אתם:"
   },
   {
    "dh": "במאי תבריתו לה",
    "text": " — לכחו של לפת:"
   },
   {
    "dh": "אופי פרסייתא",
    "text": " — בקעיות של עצים גדולות היתה שורפת תחת קדרת הלפת:"
   },
   {
    "dh": "פעמים שהוא ממית",
    "text": " — ואלו הן ביום שבעה ימים למליחתו או ביום שבעה עשר או ביום שבעה ועשרים:"
   }
  ],
  "tosafot": [
   {
    "dh": "עבידנא ככולהו",
    "text": " — וכן אנו נוהגין כרב אשי דמברכינן בתר מיא ובתר ירקא בורא נפשות רבות:"
   },
   {
    "dh": "ולבני מערבא דמברכין הכי בתר וכו'",
    "text": " — ואנן לא עבדינן כבני מערבא דדוקא לדידהו שהיה דרכם לסלקם בלילה שייכא ברכה דלשמור חקיו כדכתיב ושמרת את החקה הזאת למועדה מימים וגו' אבל אנו שמסלקין אותן בחצי היום או אפי' נסלקן בלילה לא שייך חקה ודוקא לדידהו דקסברי לילה לאו זמן תפילין הוא ומימים ימימה אתא למעוטי לילות שייכא ברכה דחקה אבל אנן דקי\"ל דלילה זמן תפילין הוא ואנן משימין הפסוק ושמרת החקה וגו' בפסח ומה שאין אנו מניחים אותן בלילה מפני שמא יפיח בהן אפי' נמתין לסלקן עד הלילה לא מברכינן אע\"ג דאנן קיימא לן דשבת וי\"ט לאו זמן תפילין אפ\"ה לא מברכינן דדוקא לדידהו דסבירא להו חקה קאי אתפילין מברכי' ותדע שהרי אינהו נמי לא היו מברכין אלא אתפילין לחודייהו משום דכתיב בהו חקה אבל אשאר מצות כגון ציצית ולולב וסוכה לא היו מברכין (וה\"ה הכא) וקשה דהוי מצי לשנויי הכי לאפוקי שאר מצות אפי' לבני מערבא:"
   }
  ],
  "translations": []
 },
 {
  "id": "45a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מה",
  "amud": "א",
  "dafEn": "45a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "דחנקתיה אומצא: רבי טרפון אומר בורא נפשות רבות וחסרונן: אמר ליה רבא בר רב חנן לאביי ואמרי לה לרב יוסף הלכתא מאי אמר ליה פוק חזי מאי עמא דבר: הדרן עלך כיצד מברכין  שלשה שאכלו כאחת חייבין לזמן אכל דמאי ומעשר ראשון שנטלה תרומתו מעשר שני והקדש שנפדו והשמש שאכל כזית והכותי מזמנין עליו אכל טבל ומעשר ראשון שלא נטלה תרומתו ומעשר שני והקדש שלא נפדו והשמש שאכל פחות מכזית והנכרי אין מזמנין עליו נשים ועבדים וקטנים אין מזמנין עליהן עד כמה מזמנין עד כזית ר' יהודה אומר עד כביצה: גמ׳ מה\"מ אמר רב אסי דאמר קרא (תהלים לד, ד) גדלו לה' אתי ונרוממה שמו יחדו רבי אבהו אמר מהכא (דברים לב, ג) כי שם ה' אקרא הבו גודל לאלהינו אמר רב חנן בר אבא מנין לעונה אמן שלא יגביה קולו יותר מן המברך שנאמר גדלו לה' אתי ונרוממה שמו יחדו אמר ר' שמעון בן פזי מנין שאין המתרגם רשאי להגביה קולו יותר מן הקורא שנאמר (שמות יט, יט) משה ידבר והאלהים יעננו בקול שאין תלמוד לומר בקול ומה תלמוד לומר בקול בקולו של משה תניא נמי הכי אין המתרגם רשאי להגביה קולו יותר מן הקורא ואם אי אפשר למתרגם להגביה קולו כנגד הקורא ימעך הקורא קולו ויקרא: אתמר שנים שאכלו כאחת פליגי רב ורבי יוחנן חד אמר אם רצו לזמן מזמנין וחד אמר אם רצו לזמן אין מזמנין תנן שלשה שאכלו כאחת חייבין לזמן שלשה אין שנים לא התם חובה הכא רשות תא שמע שלשה שאכלו כאחת חייבין לזמן ואין רשאין ליחלק שלשה אין שנים לא שאני התם דקבעו להו בחובה מעיקרא תא שמע השמש שהיה משמש על השנים הרי זה אוכל עמהם אע\"פ שלא נתנו לו רשות היה משמש על השלשה הרי זה אינו אוכל עמהם אלא אם כן נתנו לו רשות שאני התם",
  "rashi": [
   {
    "dh": "מאי עמא דבר",
    "text": " — היאך נוהגים וכבר נהגו לברך בתחלה שהכל ולבסוף בורא נפשות רבות וחסרונן על כל מה שברא:"
   },
   {
    "dh": "שלשה שאכלו וכו' לזמן",
    "text": " — להזדמן יחד לצרוף ברכה בלשון רבים כגון נברך:"
   },
   {
    "dh": "שנטלה תרומתו",
    "text": " — קס\"ד תרומת מעשר שלו שעל הלוי להפריש:"
   },
   {
    "dh": "מעשר שני שנפדה",
    "text": " — להתירו באכילה חוץ לירושלים ואת פדיונו יעלה לירושלים ויאכל:"
   },
   {
    "dh": "והשמש",
    "text": " — ששמשם בסעודה ואכל עמהם כזית כדי להצטרף עמהם לזמון ובכל הני אצטריך לאשמעינן אע\"ג דדמו לאיסור אין כאן ברכה בעבירה כדמפרש ואזיל בגמרא:"
   },
   {
    "dh": "עד כמה מזמנין",
    "text": " — כמה יאכל עמהם ויתחייב עמהם בזימון ונפקא מינה להוציאם ידי חובתן אם יתנו לו הכוס לברך:"
   },
   {
    "dh": "גמ' מה\"מ",
    "text": " — דשלשה ראוים לברכת צירוף:"
   },
   {
    "dh": "גדלו לה' אתי",
    "text": " — הרי שלשה וכן אקרא הבו גודל היחיד אומר לשנים:"
   },
   {
    "dh": "אינן רשאין ליחלק",
    "text": " — ולברך כל אחד לעצמו דמפקעי לה לתורת זמון:"
   },
   {
    "dh": "שלשה אין שנים לא",
    "text": " — ה\"פ דמדקתני אין רשאין ליחלק שמע מינה דשלשה מזמנין שנים אין מזמנין ואפילו רצו דאי אמרת שנים נמי אם רצו מזמנין אמאי אין האחד רשאי ליחלק ליזיל הוא ולא מפקעת ברכת זמון בהכי ויזמנו השנים:"
   },
   {
    "dh": "שאני התם דהוקבעו בחובה מעיקרא",
    "text": " — ואי אזיל הוא מפקעת להו חובה וקמו להו ברשות וגדול המצווה ועושה ממי שאינו מצווה ועושה:"
   },
   {
    "dh": "אוכל עמהם",
    "text": " — אין כאן גאוה דניחא להו דמייתי להו לידי זמון ואי שנים מזמנין אמאי ניחא להו בלאו דידיה נמי אי בעו מזמני:"
   }
  ],
  "tosafot": [
   {
    "dh": "דחנקתיה אומצא",
    "text": " — ודוקא מים שאין לו הנאה כי אם לשתות מים לצמאו והנאה דחנקתיה אומצא אין זה נחשב הנאה אבל שאר משקים שלעולם הגוף נהנה מהן בכל ענין מברך ואפילו חנקתיה אומצא כדאמרינן לעיל (ברכות לו א) ואע\"ג דלרפואה אתי בעי ברוכי ורב עמרם פירש דדוקא לפניו לא בעי ברוכי אבל לאחריו חייב ורבינו משה פירש דלא היא דהואיל ואינו נהנה אפילו לאחריו לא בעי ברכה:"
   },
   {
    "dh": "רבי טרפון אומר בורא נפשות רבות וכו'",
    "text": " — פירוש לפניו ופוק חזי מאי עמא דבר והנה נהגו העולם לברך לאחריו אבל לא מצינו לפרש דפליגי בלאחריו דתנא קמא סבר דמברך לפניו ולא לאחריו ורבי טרפון סבר אף לאחריו יברך בורא נפשות רבות דאם כן כי פריך לעיל מרב פפא דמברך (ליקשי) [לסייעיה] ממלתיה דרבי טרפון שהוא תנא:"
   },
   {
    "dh": "הדרן עלך כיצד מברכין",
    "text": ""
   },
   {
    "dh": "שלשה שאכלו כאחת",
    "text": " — בירושלמי פריך הכא את אמרת אין רשאין ליחלק והכא את אמרת חייבים לזמן ועתה לכאורה אין זה קשה וכן לקמן (ברכות דף נ.) פריך תנינא חדא זימנא שאין רשאין ליחלק היינו משום דחייבים לזמן ול\"נ דהכי פריך הכא את אמרת דאין רשאין ליחלק דמשמע אם גמרו אכילתן יחד אינן רשאין ליחלק אבל האחד רשאי לגמור סעודתו ולברך קודם חברו וחייבין לזמן משמע דחובת זימון עליהם ואינן רשאין לגמור סעודתן זה בלא זה ומשני שמואל כאן בתחלה כאן בסוף איזהו בתחלה ואיזהו בסוף פליגי בה תרי אמוראי חד אמר נתנו דעתם לאכול זהו בתחלה אכלו כזית זהו בסוף וחד אמר אכלו כזית זהו בתחלה נתנו דעתם לאכול זהו בסוף ורב אלפס תופס דרך ראשון עיקר וה\"פ נתנו דעתם לאכול כלומר שהתחילו מתחלה לאכול ביחד זהו בתחלה אז ודאי חובת זימון עליהם אכלו כזית זהו בסוף כלומר אם האחד התחיל קודם חברו בכזית אז ודאי אם גמרו סעודתם יחד חייבים לזמן אבל רשאין לגמור זה בלא זה ולברך:"
   },
   {
    "dh": "אכל טבל אין מזמנין עליו",
    "text": " — תימה דאמר בערכין (דף ד.) הכל מצטרפין לזמון כהנים לוים וישראלים ופריך פשיטא ומשני לא צריכא אף על גב דכהן אוכל תרומה וישראל חולין אלמא אף על גב דתרומה אסורה לישראל אחרי שהכהן יכול לצרף עם ישראל לאכול בחולין מצטרפין לזמון והכא נמי נהי דחד מנייהו אכל טבל דאין ראוי לאחרים אמאי אינן מזמנין ויש לומר דאכילת טבל לאו שמה אכילה דלא חזיא אף לכהן אבל תרומה לכל הפחות ראויה לכהן האוכלה והוא הדין אם אכלו שלשתן טבל דאין חייבים לזמן כדאמרינן (בב\"ק פ\"ט דצ\"ד) הרי שגזל סאה חטין וטחנה ואפאה ואכלה ומברך עליהן אינו מברך אלא מנאץ מכאן היה אומר רבינו יהודה דשלשה שאכלו והאחד היה מודר הנאה מן השנים והוא אוכל משלו יכול להצטרף עמהם לזימון דנהי דאינו ראוי לאכול עמהם הם ראוים לאכול עמו וכן לענין הנזהר מפת של נכרי אבל אם שלשתן מודרין הנאה זה מזה אין מצטרפין אע\"פ שיכולים לשאול על נדרם דהשתא מיהא לא אתשילו:"
   },
   {
    "dh": "עד כמה מזמנין וכו'",
    "text": " — ה\"ה ברכת המזון בלא זימון אלא רבותא אשמעינן דאפילו על כזית מזמנין:"
   },
   {
    "dh": "בקולו של משה",
    "text": " — וא\"ת היכי מייתי ראיה ממשה והא צריך לאתויי דמשה היה מתרגם ולא היה מרים קולו יותר מהקב\"ה שהיה קורא והוא מביא שהקב\"ה היה קורא ומשה היה מתרגם ופירש רב אלפס בקולו של משה מסתמא משה בכל כחו היה עונה כדי להשמיע קולו לכל העם אבל הקב\"ה לא היה צריך להרים קולו שהרי לא היה מדבר אלא למשה לבד ואפילו הכי היה מגביה קולו כדי שלא יהא קולו של משה המתרגם רם יותר מקולו של הקב\"ה שהיה קורא:"
   },
   {
    "dh": "אם רצו לזמן אין מזמנין",
    "text": " — פירש\"י וכן לענין המוציא ושאר ברכות אין האחד מברך להוציא חברו לגבי הא דאמר אביי נקטינן שנים שאכלו כאחת מצוה ליחלק ולברך כל אחד לעצמו בין ברכת המוציא בין ברכת המזון לשון רש\"י לקמן ולא נהירא דלעיל פרק כיצד מברכין (ברכות דף לט.) בעובדא דבר קפרא נתן בר קפרא רשות לאחד לברך ושנים הוו התם ועוד אי הוו שלשה התם לא היו שם אלא פירות וכן נמי אמרינן לקמן (ברכות דף נג.) דעל המאור אחד מברך לכולן ע\"כ נ\"ל דבברכה ראשונה מוציאין זה את זה שנים לכ\"ע והטעם הואיל ויושבין לאכול יחד דעתן לצרף ואחד מברך להוציא חברו אבל בברכה של סוף סעודה שמסתלקין זה מזה צריך לברך כל אחד לעצמו ויש מתרצים דיש חלוק בין ברכת המוציא דלא הויא כי אם דרבנן ע\"כ מוציאין זה את זה אבל בבהמ\"ז שהיא מדאורייתא לשם החמירו:"
   },
   {
    "dh": "שלשה שאכלו כאחד אין רשאין ליחלק",
    "text": " — מפרש\"י אמאי אין רשאין ליחלק האחד מפני השנים כיון דב' נמי מזמנין ליזיל הוא והא לא מיפק' ברכת זמון תימה דילמא טעמא דאין רשאין ליחלק משום דיפטרו לשלישי מברכת הזמון וגם הוא אין לו להפקיע ממנו ברכת הזמון וי\"ל דעיקר פרכתו סמיך אסיפא דקתני ד' אין רשאין ליחלק אע\"ג דאיכא שנים מכאן וב' מכאן והוי כמו וכו' וכה\"ג תמצא בהרבה מקומות ותימה א\"כ אמאי לא מקשי מן הסיפא בהדיא ע\"כ פירש רבינו יהודה דודאי פריך מרישא וה\"ק דליכא למימר דמשום היחיד קאמר דא\"כ ה\"ל למימר אין היחיד רשאי ליחלק א\"נ אין אחד מהם רשאי ליחלק אבל מדקתני אין רשאין ליחלק משמע מכלהו פקע זמון אם נסתלק אחד מהם:"
   }
  ],
  "translations": []
 },
 {
  "id": "45b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מה",
  "amud": "ב",
  "dafEn": "45b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "דניחא להו דמקבע להו בחובה (מעיקרא) ת\"ש נשים מזמנות לעצמן ועבדים מזמנים לעצמן נשים ועבדים וקטנים אם רצו לזמן אין מזמנין (והא נשים אפילו מאה) והא מאה נשי כתרי גברי דמיין וקתני נשים מזמנות לעצמן ועבדים מזמנין לעצמן שאני התם דאיכא דעות א\"ה אימא סיפא נשים ועבדים אם רצו לזמן אין מזמנין אמאי לא והא איכא דעות שאני התם משום פריצותא תסתיים דרב דאמר אם רצו לזמן אין מזמנין דאמר רב דימי בר יוסף אמר רב שלשה שאכלו כאחת ויצא אחד מהם לשוק קוראין לו ומזמנין עליו טעמא דקוראין לו הא לא קוראין לו לא שאני התם דאקבעו להו בחובה מעיקרא אלא תסתיים דר' יוחנן הוא דאמר אם רצו לזמן אין מזמנין דאמר רבה בר בר חנה א\"ר יוחנן שנים שאכלו כאחת אחד מהן יוצא בברכת חבירו והוינן בה מאי קא משמע לן תנינא שמע ולא ענה יצא ואמר רבי זירא לומר שאין ברכת המזון ביניהם תסתיים א\"ל רבא בר רב הונא לרב הונא והא רבנן דאתו ממערבא אמרי אם רצו לזמן מזמנין מאי לאו דשמיע להו מר' יוחנן לא דשמיע להו מרב מקמי דנחית לבבל: גופא אמר רב דימי בר יוסף אמר רב שלשה שאכלו כאחת ויצא אחד מהם לשוק קוראין לו ומזמנין עליו אמר אביי והוא דקרו ליה ועני אמר מר זוטרא ולא אמרן אלא בשלשה אבל בעשרה עד דנייתי מתקיף לה רב אשי אדרבה איפכא מסתברא תשעה נראין כעשרה שנים אין נראין כשלשה והלכתא כמר זוטרא מ\"ט כיון דבעי לאדכורי שם שמים בציר מעשרה לאו אורח ארעא אמר אביי נקיטינן שנים שאכלו כאחת מצוה ליחלק תניא נמי הכי שנים שאכלו כאחת מצוה ליחלק במה דברים אמורים כששניהם סופרים אבל אחד סופר ואחד בור סופר מברך ובור יוצא: אמר רבא הא מילתא אמריתא אנא ואיתמרה משמיה דרבי זירא כוותי שלשה שאכלו כאחת אחד מפסיק לשנים ואין שנים מפסיקין לאחד ולא והא רב פפא אפסיק ליה לאבא מר בריה איהו וחד שאני רב פפא דלפנים משורת הדין הוא דעבד יהודה בר מרימר ומר בר רב אשי ורב אחא מדפתי כרכי ריפתא בהדי הדדי לא הוה בהו חד דהוה מופלג מחבריה לברוכי להו (יתבי וקא מיבעיא להו) הא דתנן שלשה שאכלו כאחת חייבין לזמן הני מילי היכא דאיכא אדם גדול אבל היכא דכי הדדי נינהו חלוק ברכות עדיף בריך איניש לנפשיה אתו לקמיה דמרימר אמר להו ידי ברכה יצאתם ידי זימון לא יצאתם וכי תימרו ניהדר ונזמן אין זימון למפרע בא ומצאן כשהן מברכים מהו אומר אחריהם רב זביד אמר ברוך ומבורך רב פפא אמר עונה אמן ולא פליגי הא דאשכחינהו דקא אמרי נברך והא דאשכחינהו דקא אמרי ברוך אשכחינהו דקא אמרי נברך אומר ברוך ומבורך אשכחינהו דקא אמרי ברוך עונה אמן תני חדא העונה אמן אחר ברכותיו הרי זה משובח ותניא אידך הרי זה מגונה לא קשיא הא בבונה ירושלים הא בשאר ברכות אביי עני ליה בקלא כי היכי דלשמעו פועלים וליקומו דהטוב והמטיב לאו דאורייתא רב אשי עני ליה בלחישא כי היכי דלא נזלזלו בהטוב והמטיב",
  "rashi": [
   {
    "dh": "דניחא להו דמקבע להו בחובה",
    "text": " — דגדול המצווה ועושה:",
    "en": "But [he who says omein] in \"who builds Yerusholayim\" - which is at the end of the blessings, then it is praiseworthy and so to at the end of the blessings of the recition of the shema, Shacharis and Ma'ariv. And that that the Borayso taught that [to say omein] after all his blessings is praiseworthy, it means to say: After all his blessings. And that that it taught that [to say omein] after all his blessings is derogatory, it means to say that [to say omein] after each blessings individually [is derogatory]."
   },
   {
    "dh": "אם רצו אין מזמנים",
    "text": " — כדמפרש טעמא לקמן שאין קביעותן נאה משום פריצותא בין דנשים בין דמשכב זכור דעבדים בקטנים:"
   },
   {
    "dh": "דאפילו מאה כתרי דמיין",
    "text": " — לענין חובה דאין חייבות לזמן ואם רצו מזמנין והוא הדין לשנים:"
   },
   {
    "dh": "דאיכא דעות",
    "text": " — דאע\"ג דלענין חובה אינן חייבות לענין רשות דעות שלשה חשיבי להודות טפי משני אנשים דאיכא משום גדלו לה' אתי:"
   },
   {
    "dh": "קוראין לו",
    "text": " — להודיעו שהם רוצים לזמן ויפנה אליהם במקום מעמדו ודי להם בכך:"
   },
   {
    "dh": "ומזמנין עליו",
    "text": " — ואע\"פ שאינו בא אצלם:"
   },
   {
    "dh": "ואמר רבי זירא לומר שאין ברכת הזימון ביניהן",
    "text": " — לא בא ללמדנו אלא שאין צריכין זימון דכיון דאחד יוצא בברכת חברו אשמעינן דאין זימון דאי יש זימון ברכת שניהם היא שהרי אומר נברך והוא עונה ברוך הוא:"
   },
   {
    "dh": "לאו דשמיע להו מרבי יוחנן",
    "text": " — דבר מערבא הוא דאילו רב בבבל הוה ובני מערבא היכא שמיע להו:"
   },
   {
    "dh": "והוא דקרו ליה ועני",
    "text": " — שסמוך הוא אצלם ועונה ברוך הוא:"
   },
   {
    "dh": "לא אמרן",
    "text": " — דלא צריך למיתי גבייהו אלא שלשה אבל עשרה שיצטרפו משום הזכרת השם עד דאתי גבייהו:"
   },
   {
    "dh": "נראין כעשרה",
    "text": " — דאין אדם ממהר להבחין בין עשרה לתשעה:"
   },
   {
    "dh": "מצוה ליחלק",
    "text": " — ולברך כל אחד בפני עצמו בין ברכת המוציא בין ברכת המזון:"
   },
   {
    "dh": "אחד מפסיק לשנים",
    "text": " — אם גמרו השנים סעודתן ורוצין לזמן דרך ארץ הוא שיהא האחד מפסיק את סעודתו עד שיזמנו עליו עד ברכת הזן דהיינו ברכת זימון וחוזר וגומר סעודתו אבל שנים אין עליהם להפסיק בשביל היחיד וימתין עד שיגמרו:"
   },
   {
    "dh": "לפנים משורת הדין",
    "text": " — לאחשוביה:"
   },
   {
    "dh": "לא הוה בהו",
    "text": " — מופלג בחכמה ובזקנה מן השנים:"
   },
   {
    "dh": "דאיכא אדם גדול",
    "text": " — שהגדול מברך כדפסקינן לקמן הלכתא (דף מז.):"
   },
   {
    "dh": "בא ומצאן",
    "text": " — אחד מן השוק בא ומצא שלשה שהיו מזמנין:"
   },
   {
    "dh": "ברוך ומבורך",
    "text": " — דלא מצי למימר שאכלנו משלו:"
   },
   {
    "dh": "הא דקאמר ברוך ומבורך",
    "text": " — כדאשכחינהו דקאמר המזמן נברך אבל אשכחינהו דענו ברוך הוא עונה בתרייהו אמן:"
   },
   {
    "dh": "הא בבונה ירושלים",
    "text": " — שהיא סוף הברכות הרי זה משובח וכן בסוף ברכות דקריאת שמע שחרית וערבית ואחר כל ברכותיו דקתני בברייתא הרי זה משובח אחר גמר כל ברכותיו קאמר ואחר כל ברכותיו דקתני הרי זה מגונה בסוף כל ברכה וברכה קאמר:"
   },
   {
    "dh": "כי היכי דלשמעו פועלים",
    "text": " — וידעו שנגמרה כל הברכה שהרי אין המברך עונה אמן אלא לבסוף:"
   },
   {
    "dh": "וליקומו",
    "text": " — לעבידתייהו ואי משום דקמפקע להו מהטוב והמטיב לא איכפת ליה דקסבר דלאו דאורייתא היא אלא ביבנה תקנוה על הרוגי ביתר שנתנו לקבורה:"
   },
   {
    "dh": "רב אשי עני",
    "text": " — לההוא אמן בלחישה כי היכי דלא לשמעו וידעו ששם גמר הברכות ויזלזלו בהטוב והמטיב ומיהו משום דסוף כל ברכותיו היה ותניא בברייתא ה\"ז משובח לא סגי דלא עני ליה:"
   }
  ],
  "tosafot": [
   {
    "dh": "והא מאה נשי כתרי גברי דמיין",
    "text": " — לענין קבוץ תפלה ולענין כל דבר שבעשרה ואפילו הכי חשבינן להו כשלשה וה\"ה לשנים אבל לא מצי למימר כחד דמיין דאינן יכולות לזמן דהא קתני נשים מזמנות לעצמן ורש\"י פירש כתרי לענין חובה דאין חייבות לזמן ואם רצו מזמנות והוא הדין לשנים:"
   },
   {
    "dh": "שאני התם דאיכא דעות",
    "text": " — מכאן משמע דנשים יכולות לזמן לעצמן וכן עשו בנות רבינו אברהם חמיו של רבינו יהודה ע\"פ אביהן ומיהו לא נהגו העולם כן וקשה אמאי לא נהגו מדקתני מזמנות משמע דקאמר חייבות לזמן וי\"ל דנשים מזמנות לעצמן היינו אם רצו לזמן מזמנות וכן משמע קצת הלשון מדקתני בסמוך נשים ועבדים אם רצו לזמן אין מזמנין ועוד דמדמה ליה הגמרא לשנים משמע דחובה ליכא והא דקאמר בריש ערכין (דף ג. ושם) הכל מחוייבין בזימון לאתויי נשים לענין רשות קאמר ולא לענין חובה ונשים צריך עיון אם יוצאות בברכת הזימון של אנשים מאחר שאין מבינות ויש מביאין ראיה שיוצאות מדאמר לקמן סופר מברך ובור יוצא מכאן משמע שאף הנשים יוצאות בבהמ\"ז שלנו מיהו יש לדחות אותה ראיה דשאני בור שמבין בלשון הקדש ויודע קצת מאי קאמר אבל אינו יודע לברך אבל נשים שאינן מבינות כלל מצי למימר דלא נפקי והא דאמרי' במגילה (פ\"ב ד' יז.) לועז ששמע אשורית יצא פרסומי ניסא בעלמא שאני כדאמרינן התם (דף יח.) האחשתרנים בני הרמכים מי ידעינן מאי ניהו:"
   },
   {
    "dh": "אי הכי אימא סיפא",
    "text": " — לא גרס אי הכי דהא אפי' מעיקר' נמי הוה מצי למפרך מסיפא דאין מזמנין:"
   },
   {
    "dh": "רב זביד אמר ברוך הוא ומבורך",
    "text": " — ובה\"ג פסק ברוך הוא ומבורך שמו תמיד לעולם ועד ואי הוה עשרה עני בתרייהו ברוך הוא אלהינו ומבורך שמו תמיד לעולם ועד:"
   },
   {
    "dh": "הא בבונה ירושלים הא בשאר ברכות",
    "text": " — פר\"ח וה\"ג די\"מ בכל ברכה וברכה כגון אחר ישתבח וכיוצא בו ומיהו פוק חזי מאי עמא דבר שלא נהגו לענות אמן אלא אחר בונה ירושלים דבהמ\"ז:"
   },
   {
    "dh": "רב אשי עני ליה בלחישה",
    "text": " — וכן פסק בה\"ג ועוד לדידן דליכא פועלים אפילו אביי מודה:"
   }
  ],
  "translations": []
 },
 {
  "id": "46a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מו",
  "amud": "א",
  "dafEn": "46a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ר' זירא חלש על לגביה ר' אבהו קביל עליה אי מתפח קטינא חריך שקי עבידנא יומא טבא לרבנן אתפח עבד סעודתא לכולהו רבנן כי מטא למשרי אמר ליה לר' זירא לישרי לן מר א\"ל לא סבר לה מר להא דר' יוחנן דאמר בעל הבית בוצע שרא להו כי מטא לברוכי אמר ליה נבריך לן מר אמר ליה לא סבר לה מר להא דרב הונא דמן בבל דאמר בוצע מברך ואיהו כמאן סבירא ליה כי הא דאמר ר' יוחנן משום ר' שמעון בן יוחי בעל הבית בוצע ואורח מברך בעל הבית בוצע כדי שיבצע בעין יפה ואורח מברך כדי שיברך בעל הבית מאי מברך יהי רצון שלא יבוש בעל הבית בעולם הזה ולא יכלם לעולם הבא ורבי מוסיף בה דברים ויצלח מאד בכל נכסיו ויהיו נכסיו ונכסינו מוצלחים וקרובים לעיר ואל ישלוט שטן לא במעשי ידיו ולא במעשי ידינו ואל יזדקר לא לפניו ולא לפנינו שום דבר הרהור חטא ועבירה ועון מעתה ועד עולם: עד היכן ברכת הזמון רב נחמן אמר עד נברך ורב ששת אמר עד הזן נימא כתנאי דתני חדא ברכת המזון שנים ושלשה ותניא אידך שלשה וארבעה סברוה דכולי עלמא הטוב והמטיב לאו דאורייתא היא מאי לאו בהא קמיפלגי מאן דאמר שתים ושלש קסבר עד הזן ומאן דאמר שלש וארבע קסבר עד נברך לא רב נחמן מתרץ לטעמיה ורב ששת מתרץ לטעמיה רב נחמן מתרץ לטעמיה דכ\"ע עד נברך מאן דאמר שלש וארבע שפיר ומ\"ד שתים ושלש אמר לך הכא בברכת פועלים עסקינן דאמר מר פותח בהזן וכולל בונה ירושלים בברכת הארץ רב ששת מתרץ לטעמיה דכ\"ע עד הזן מ\"ד שתים ושלש שפיר ומ\"ד שלש וארבע קסבר הטוב והמטיב דאורייתא היא אמר רב יוסף תדע דהטוב והמטיב לאו דאורייתא שהרי פועלים עוקרים אותה אמר רב יצחק בר שמואל בר מרתא משמיה דרב תדע דהטוב והמטיב לאו דאורייתא שהרי פותח בה בברוך ואין חותם בה בברוך כדתניא כל הברכות כולן פותח בהן בברוך וחותם בהן בברוך חוץ מברכת הפירות וברכת המצות וברכה הסמוכה לחברתה וברכה אחרונה שבקריאת שמע יש מהן שפותח בהן בברוך ואין חותם בברוך",
  "rashi": [
   {
    "dh": "קטינא חריך שקי",
    "text": " — כך היו קורין לר' זירא וטעמא מפרש בבבא מציעא בהשוכר את הפועלים (בבא מציעא דף פה.):",
    "en": "The small one with burned legs -- thus they called R. Zeira and the reason is explained in Bava M'tzia in \"ha-Socher es ha-Po'alim\" (BM 85b)"
   },
   {
    "dh": "כי מטא למשרי",
    "text": " — לישנא דשירותא כלומר לפרוס ברכת המוציא ולאכול:",
    "en": "When it arrived time to mishrei -- from \"shirusa,\" viz. to \"break\" the blessing of \"The Extractor [of bread from the Land\" and to eat."
   },
   {
    "dh": "רב הונא דמבבל",
    "text": " — היינו רב הונא סתמא ולפי שעכשיו היה ר' זירא בארץ ישראל במקום ר' אבהו והיה עולה מבבל קאמר הכי:",
    "en": "R. Huna, that of Babylonia -- this is R. Huna of the s'tam, and because now R. Zeira is in the Land of Israel in place of R. Abahu. And it is Ullah from Babylonia saying this."
   },
   {
    "dh": "נכסיו",
    "text": " — קרקעות:",
    "en": "His effects -- lands"
   },
   {
    "dh": "קרובים לעיר",
    "text": " — שיכול לראותן בעל הבית תמיד ולדעת מה הן צריכין:",
    "en": "Close to the city -- that the master of the house can always see them, and know what they need."
   },
   {
    "dh": "עד היכן ברכת הזמון",
    "text": " — שצריכין להיות שלשה וכשהן שנים לא יאמרוה:",
    "en": "Until where is the Zimmun blessing? -- that they need to be three, and when they are two they do not say it."
   },
   {
    "dh": "ברכת המזון שתים ושלש",
    "text": " — פעמים שהם שתי ברכות פעמים שהם שלש כיצד כשהם שלשה הן שלש ברכות וכשהם שנים הן שתי ברכות כדמפרש ואזיל:",
    "en": "The Zimmun blessing is two and three -- at times they are two blessings; at times they are three. How so? When they are three is when they are three blessings and when they are two they are two blessings, as it is explained and goes on."
   },
   {
    "dh": "דקסבר",
    "text": " — ברכת זמון עד הזן וכשהם שנים אין אומרים אלא ברכת הארץ ובונה ירושלים:",
    "en": "as he holds -- the Zimmun blessing until \"The Feeder\" and when they are two they do not say except the blessing of \"the Land\" and \"Builder of Jerusalem.\""
   },
   {
    "dh": "ומאן דאמר שלש וארבע",
    "text": " — כשהן שנים הרי שלש הזן וברכת הארץ ובונה ירושלים וכשהם שלשה הם מוסיפים נברך עד ובטובו חיינו:",
    "en": "And the one who said \"three and four\" -- when they are two, hark, they are three: \"The Feeder\" and the blessing of \"the Land\" and \"Builder of Jerusalem.\" And when they are three, they add, blessing until \"And of his good we live.\""
   },
   {
    "dh": "מוקים לה",
    "text": " — לא גרסינן והכי גרסינן והא דתניא שתים ושלש בברכת פועלים דאמרי ברכת הארץ ובונה ירושלים בחדא ברכה אין כאן אלא ברכת הזן וברכת הארץ וכשהם שלשה מוסיפין נברך הרי שלש:",
    "en": "They establish for him -- We do not have this version. And this is our version: \"And yet it was taught, \"two and three in the blessing of laborers, who say the blessing of \"the Land\" and \"Builder of Jerusalem\" in one blessing. There is naught here but one blessing of \"The Feeder\" and the blessing of \"the Land\" and when they are three they add, \"we bless\" -- hark, three."
   },
   {
    "dh": "דאמר מר",
    "text": " — לעיל בפרק שני (ברכות דף טז.):",
    "en": "For Sir said -- supra, in two second chapter."
   },
   {
    "dh": "שהרי פותח בה בברוך",
    "text": " — ואי דאורייתא היא הויא סמוכה לחברתה ואין פותחין בה בברוך:",
    "en": "For hark he opens with \"Blessed\" -- and if it is Biblical, it is close to its fellow and we do not open with \"Blessed.\""
   },
   {
    "dh": "כדתניא כו' יש מהן כו'",
    "text": " — כגון ברכת פירות ומצות פותח ואינו חותם וטעמא מפרש בערבי פסחים (דף קה.) משום דכולה חדא הודאה ואין הפסק דבר תחנה או דבר אחר בתוכה כמו שיש בקדוש כי הוא יום תחלה למקראי קודש והנחילנו:",
    "en": "As it was taught etc. there are of them etc. -- Like the blessings of fruits and commandments one opens and does not close, and the reason is explained in \"Arv(ei) Pesahim\" [Pesahim 105a] becausee all of them are one appreciation, and there is no break or other matter between, as there is in Kiddush."
   }
  ],
  "tosafot": [
   {
    "dh": "לא סבר לה מר להא דאמר ר\"ה דמן בבל כו'",
    "text": " — מיהו יש ליישב הני תרי לישני דר' יוחנן כשבעל הבית מסב עמהם ודאי הוא בוצע ואורח מברך וכו' אבל כשאין בעל הבית מסב עמהן הגדול שבהן יעשה המוציא וגם הוא יברך ברכת המזון:"
   },
   {
    "dh": "עד היכן ברכת הזמון וכו'",
    "text": " — פירש רש\"י ממתין עד הזן והזן בכלל שנים אינם מברכין הזן ולא נהירא דברכת הזן דאורייתא ואיך יחיד פטור מינה ועוד הא קיימא לן כרב ששת באיסורי ולדידיה יחיד אומר שנים ובכל דוכתא נקט שלש ברכות ודוחק לומר דלא מיירי אלא ביש זמון לרב ששת ועוד דמעשים בכל יום דיחיד מברך שלש ברכות ועוד דמדתניא לקמן בפרקין (ברכות דף מח:) וברכת זו ברכת הזמון את ה' אלהיך זו ברכת הזן וקשה לרב ששת יאמר הזן זו ברכת הזמון לכן יש לפרש דקאי אדלעיל דקאמר אחד מפסיק לשנים ובעי נמי [עד] היכ' צריך להמתין עד שיברכו השנים עד נברך ורב ששת אמר עד שיגמרו הזן ומשם ואילך יכול היחיד לאכול ולא משום דחשיב ברכת הזן מזמון דודאי יחיד נמי מתחייב מהזן אלא משום דכיון דנברך אינה ברכה אינו אומרה לבדה אלא יגמור עמה גם ברכת הזן שהיא ברכה והשתא ניחא דקיימא לן שפיר כרב ששת וכפירוש זה איתמר בירושלמי:"
   },
   {
    "dh": "ולמאן דאמר שנים ושלשה קסבר עד הזן",
    "text": " — ופירש\"י שנים ליחיד ושלשה לזמון ולפי שיטתו פירש כן ודוחק גדול הוא כדפרישית וכי יחיד פטור מברכת הזן שהיא דאורייתא ועוד הואיל וקאי אברכתא אמאי נקט לשון זכר שנים ושלשה הוה ליה למנקט לשון נקבה שתים ושלש לכך נראה פירוש של רב אלפס דקאי אבני אדם והכי קאמר ברכת זמון בשנים ושלשה בני אדם היכא שכל אחד אינו יודע כי אם ברכה אחת למאן דאמר שנים ושלשה קא סבר עד הזן כלומר ברכת הזמון עד הזן שמברך עד סוף הזן דכולה כברכה אחת של זמון היא ולהכי קאמר שנים או שלשה כלומר לפעמים נשלמה בשנים והוא הדין באחד אבל נקט שנים לרבותא ופעמים בשלשה בני אדם שאחד יברך מנברך עד הזן והשני נודה לך והשלישי עד בונה ירושלים אבל לחצאין אין לברך אם האחד אינו יודע כי אם החצי ברכה אבל רביעי לא דנברך לבד לא חשיב ברכה ולכך אי אפשר לחלק לשנים נברך והזן ומאן דאמר בד' קסבר עד נברך דנברך חשיב ברכה אחת בפני עצמה והזן ברכה אחרת והיינו בד' שארבעה בני אדם מברכין אותן שאחד יאמר נברך והשני הזן והשלישי נודה לך והרביעי עד בונה ירושלים:"
   },
   {
    "dh": "כל הברכות כולן פותחות בברוך וחותמות בברוך חוץ מברכת הפירות וברכת המצות וברכה הסמוכה לחברתה וברכה אחרונה שבקרית שמע",
    "text": " — והא לך הסדר ברכת אשר יצר אינה סמוכה לנטילת ידים דנטילה שייכא בלא אשר יצר והרבה פעמים אומרה לבדה אלהי נשמה אמאי אינה פותחת בברוך דאינה סמוכה לאשר יצר וכו' כגון אם לא בא מן הנקבים דידיו טהורות אין צריך לברכת אשר יצר וצריך לומר הואיל ואין בה אלא הודאה בעלמא אינה פותחת בברוך ומכל מקום חותמת בברוך הואיל וארוכה קצת וכן נמי צריך לומר גבי אתה הוא עד שלא נברא העולם וכו' וכל הני ברכות קטנות כל אחת ברכה לעצמה כדאמרן בעלמא כד הוה מהלך הוה מברך מצעדי גבר וכן כולן ועוד דהוו קצרות והויין כברכת הפירות יהי רצון למי היא סמוכה ואומר רבינו תם שהיא מן הברכה ברוך אתה ה' המעביר שינה מעיני וכו' וצריך לומר ויהי רצון ואם תאמר והלא כל הברכות כולן צריך לומר בחתימתן מעין פתיחתן והא ליכא וי\"ל דשפיר הוי מעין פתיחה סמוך לחתימה מהמעביר דסמוך לחתימה איכא ותגמלני חסדים טובים והיינו גמילות חסדים שהקב\"ה מעביר שינה מן האדם ומחדש כחו כדאמרינן במדרש חדשים לבקרים וגו' שהוא מחזיר הנשמה שלמה ושקטה בגוף כאשר היתה בתחלה אע\"פ שהיתה עייפה והיינו כעין פתיחתה ולעסוק בדברי תורה והערב נא הכל ברכה אחת היא וצריך לומר והערב נא וישתבח סמוכה לברוך שאמר ולכך יש ליזהר שלא לספר ביניהם אע\"פ שיש הפסק טובא פסוקי דזמרה מכל מקום לא מפסקי ובזה ניחא ברכה אחרונה שבק\"ש אמת כו' אמת היא סמוכה אל אהבה וכו' ופסוקי ק\"ש לא מפסקי ואם תאמר ברכה אחרונה למי שהוא קורא בתורה אמאי צריכה לפתוח בברוך הא סמוכה לחברתה לברכה ראשונה ויש לומר לפי שהיו רגילים שלא היו מברכים רק הראשון ברכה ראשונה והאחרון ברכה אחרונה ואיכא הפסק גדול בין ראשון לאחרון שוב שתקנו שתיהן לכל א' וא' משום הנכנסין ומשום היוצאים לא זזה ממקומה:"
   }
  ],
  "translations": []
 },
 {
  "id": "46b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מו",
  "amud": "ב",
  "dafEn": "46b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ויש מהן שחותם בהן בברוך ואין פותח בברוך והטוב והמטיב פותח בברוך ואין חותם בברוך מכלל דברכה בפני עצמה היא ואמר רב נחמן בר יצחק תדע דהטוב והמטיב לאו דאורייתא שהרי עוקרין אותה בבית האבל כדתניא מה הם אומרים בבית האבל ברוך הטוב והמטיב ר\"ע אומר ברוך דיין האמת הטוב והמטיב אין דיין אמת לא אלא אימא אף הטוב והמטיב מר זוטרא איקלע לבי רב אשי איתרע ביה מלתא פתח ובריך הטוב והמטיב אל אמת דיין אמת שופט בצדק לוקח במשפט ושליט בעולמו לעשות בו כרצונו כי כל דרכיו משפט שהכל שלו ואנחנו עמו ועבדיו ובכל אנחנו חייבים להודות לו ולברכו גודר פרצות בישראל הוא יגדור את הפרצה הזאת בישראל לחיים להיכן הוא חוזר רב זביד משמיה דאביי אמר חוזר לראש ורבנן אמרי למקום שפסק והלכתא למקום שפסק: א\"ל ריש גלותא לרב ששת אע\"ג דרבנן קשישי אתון פרסאי בצרכי סעודה בקיאי מינייכו בזמן שהן שתי מטות גדול מסב בראש ושני לו למעלה הימנו ובזמן שהם שלש גדול מסב באמצע שני לו למעלה הימנו שלישי לו למטה הימנו אמר ליה וכי בעי אשתעויי בהדיה מתריץ תרוצי ויתיב ומשתעי בהדיה א\"ל שאני פרסאי דמחוי ליה במחוג מים ראשונים מהיכן מתחילין אמר ליה מן הגדול ישב גדול וישמור ידיו עד שנוטלין כולן א\"ל לאלתר מייתו תכא קמיה מים אחרונים מהיכן מתחילין אמר ליה מן הקטן וגדול יתיב וידיו מזוהמות עד שנוטלין כולן א\"ל לא מסלקי תכא מקמיה עד דנמטי מיא לגביה אמר רב ששת אנא מתניתא ידענא דתניא כיצד סדר הסבה בזמן שהן שתי מטות גדול מסב בראש ושני לו למטה הימנו בזמן שהן שלש מטות גדול מסב בראש שני לו למעלה הימנו שלישי לו למטה הימנו מים הראשונים מתחילין מן הגדול מים אחרונים בזמן שהם ה' מתחילין מן הגדול ובזמן שהם מאה מתחילין מן הקטן עד שמגיעים אצל ה' וחוזרין ומתחילין מן הגדול ולמקום שמים אחרונים חוזרין לשם ברכה חוזרת מסייע ליה לרב דא\"ר חייא בר אשי אמר רב כל הנוטל ידיו באחרונה תחלה הוא מזומן לברכה רב ורבי חייא הוו יתבי בסעודתא קמיה דרבי אמר ליה רבי לרב קום משי ידך חזייה דקא מרתת אמר ליה בר פחתי עיין בברכת מזונא קאמר לך ת\"ר אין מכבדין לא בדרכים ולא בגשרים",
  "rashi": [
   {
    "dh": "ויש מהם חותם ולא פותח",
    "text": " — כגון ברכה הסמוכה לחברתה שהרי כבר פתח בברכה ראשונה וברכה אחרונה שבקריאת שמע אמת ויציב אמת ואמונה שאע\"פ שק\"ש מפסיק בינתים אברכות דלפניה סמוכה והויא לה סמוכה לחברתה:",
    "en": "And some of them close but do not open -- like a blessing which is close to its fellow which already opened. In the first blessing and the final blessing of the reading of Sh'ma, \"True and stalwart\" and \"Truth and belief\" that even though the reading of the Sh'ma breaks them up the blessings which were before rely on them, are for them \"close to their fellow.\""
   },
   {
    "dh": "הטוב והמטיב וכו'",
    "text": " — דלאו סמוכה לחברתה היא שאינה מברכת המזון אלא על קבורת הרוגי ביתר תקנוה:",
    "en": "Who is the good and makes good etc. -- which is not close to its fellow, which is not the blessing on victuals but on the grave of those killed at Beitar they mandated it."
   },
   {
    "dh": "שהרי עוקרים אותה בבית האבל",
    "text": " — אליבא דר\"ע:",
    "en": "For hark they were uprooting it in a house of morning -- according to R\"A."
   },
   {
    "dh": "להיכן הוא חוזר",
    "text": " — מי שנצטרף לזימון ואמרן לעיל אליבא דרב ששת ברכת זימון עד הזן והוצרך זה להיות מפסיק אכילתו עד שיגמור המברך ברכת הזן וחזר זה שהפסיק לשנים וגמר סעודתו להיכן הוא חוזר לברך לאחר שיגמור סעודתו:"
   },
   {
    "dh": "חוזר לראש",
    "text": " — לתחלת הזן שהרי נתחייב בזימון שבתחלה הוקבע בג':"
   },
   {
    "dh": "למקום שפסק",
    "text": " — לברכת הארץ כשאר יחיד:"
   },
   {
    "dh": "ה\"ג אף על גב דרבנן אתון פרסאי בצרכי סעודה בקיאי מינייכו",
    "text": ""
   },
   {
    "dh": "בזמן שהן שתי מטות",
    "text": " — רגילין היו לאכול בהסבה על צדו השמאלית מוטה ורגליו לארץ איש איש על מטה אחת:"
   },
   {
    "dh": "בזמן שהן שנים גדול מסב בראש",
    "text": " — כלומר מסב תחלה על מטתו:"
   },
   {
    "dh": "ושני לו למעלה הימנו",
    "text": " — מטת השני לצד מראשותיו של גדול:"
   },
   {
    "dh": "ובזמן שהן שלשה גדול מסב באמצע שני לו למעלה הימנו שלישי לו למטה הימנו",
    "text": " — לצד מרגלותיו:"
   },
   {
    "dh": "א\"ל",
    "text": " — רב ששת לריש גלותא:"
   },
   {
    "dh": "וכי בעי אשתעויי מתריץ תרוצי ויתיב",
    "text": " — ואם רצה הגדול לדבר עם שני לו צריך הוא לזקוף עצמו ממסיבתו לישב זקוף דכל זמן שהוא מוטה אינו יכול לדבר עמו לפי שהשני לו אחורי ראשו של גדול הוא ופני הגדול מסובין לצד אחר וטוב לו שישב שני לו למטה הימנו וישמע דבריו כשהוא מוטה:"
   },
   {
    "dh": "במחוג",
    "text": " — מראים בידיהם ובאצבעותיה' ברמיזה:"
   },
   {
    "dh": "מים ראשונים מהיכן מתחילין",
    "text": " — רב ששת קא\"ל לריש גלותא מהיכן מתחילין פרסיים מים ראשונים:"
   },
   {
    "dh": "לאלתר מייתו תכא קמיה",
    "text": " — שלחן שלו מביאין מיד לפניו ואוכל ולפני כל אחד ואחד היו מביאין שלחן קטן:"
   },
   {
    "dh": "לא מסלקי תכא",
    "text": " — מקמי גדול עד דמשו כולהו ובעוד שהוא אוכל האחרים נוטלין מים אחרונים:"
   },
   {
    "dh": "שני לו למטה הימנו",
    "text": " — שאם הוצרך גדול לספר עמו לא יהא צריך לזקוף:"
   },
   {
    "dh": "ובזמן שהם ג' שני לו למעלה הימנו",
    "text": " — ואם בא לספר מספר עם השלישי לו ואם בא לספר עם השני לו טוב הוא שיזקוף ואל ישפיל את השני לו לפני קטן ממנו שיהא הוא למטה וקטן ממנו למעלה הימנו:"
   },
   {
    "dh": "מתחילין מן הגדול",
    "text": " — ולאלתר מעיילי תכא קמיה:"
   },
   {
    "dh": "ובזמן שהם מאה",
    "text": " — לאו דוקא דה\"ה עשרה ולכל יותר מה' שגנאי הוא שיסלקו השלחן מלפני הגדול כשיטול ידיו וימתין שם יושב ובטל עד שיטלו כלם לפיכך כשהם יותר מחמשה מתחילין מן הקטן היושב בסוף ואין מסלקין שלחן מלפני הגדול עד שיגיעו המים לחמשה שאצלו:"
   },
   {
    "dh": "וחוזרים ומתחילין מן הגדול",
    "text": " — ונוטלין שלחן מלפניו:"
   },
   {
    "dh": "למקום שמים אחרונים חוזרים",
    "text": " — כשמגיעים לחמשה אם נטל הגדול הוא מברך ואם צוה לאחר ליטול קודם לו הוא מברך:"
   },
   {
    "dh": "הנוטל ידיו באחרונה תחלה",
    "text": " — אותו שנוטל בתחלת החמשה אחרונים קורא תחלה באחרונה:"
   },
   {
    "dh": "אין מכבדין",
    "text": " — לומר היה אתה קודם:"
   },
   {
    "dh": "לא בדרכים",
    "text": " — הולכי דרכים לומר לגדול הימנו לך לפני:"
   }
  ],
  "tosafot": [
   {
    "dh": "והטוב והמטיב",
    "text": " — וא\"ת ואמאי פותחת בברוך והלא סמוכה לחברתה היא ויש לומר דנתקנה בפני עצמה (היא) בשביל הרוגי ביתר וא\"ת אמאי אינה חותמת בברוך וי\"ל משום דקצרה היא רק שתקנו לאחר כך שלש מלכיות ושלש גמולות ושלש הטבות ונאמן אתה של ברכת ההפטרה הוא מן הברכה העליונה ולכך הוא נכתב גדול שבימים הראשונים היו רגילין לעמוד כל הקהל ולומר בקול רם נאמן אתה וכו' כשהיה התינוק מגיע שם:"
   },
   {
    "dh": "מר זוטרא איקלע לבי רב אשי איתרע ביה מילתא",
    "text": " — וכוותיה קיימא לן והכי מברכין בא\"י אמ\"ה האל הטוב והמטיב אל אמת דיין אמת שופט בצדק ולוקח במשפט ושליט במעשיו ואנחנו עבדיו ועמו ובכל אנחנו חייבין להודות לו ולברכו גודר פרצות בישראל הוא יגדור פרצה זאת מעלינו ומעל האבל שבתוכנו לחיים ולשלום הרחמן הוא ימלוך עלינו לעולם ועד וגו' ופירש בה\"ג דאין לומר במשפט דקיימא לן בפ' במה בהמה יוצאה (שבת דף נה:) דיש מיתה בלא חטא ויש יסורין בלא עון ומיהו בכך אין למחקו:"
   },
   {
    "dh": "להיכן הוא חוזר",
    "text": " — פירש רש\"י דקאי לאחד דפסיק לשנים וממתין לאחרים עד הזן והיכן חוזר לאחר סעודתו רבנן אמרי למקום שפסק והלכתא למקום שפסק ותימה דא\"כ היכי הלכתא למקום שפסק אחרי שאכל אחר כך פשיטא דיחזור אפילו להזן דהא הזן דאורייתא ע\"כ צריך לומר דקאי אהא דאמרינן לעיל דהמברך אומר נברך שאכלנו משלו והמסובין עונים ברוך שאכלנו משלו ובטובו חיינו להיכן הוא חוזר המברך לאחר שיענו המסובין חוזר לראש שהמברך חוזר ואומר נברך שאכלנו משלו ובטובו חיינו ורבנן אמרי למקום שפסק שאומר ברוך שאכלנו משלו וכן הלכתא והר\"מ מאייבר\"א פירש דקאי אשלשה שאכלו ויצא אחד מהם לשוק קוראים לו ומזמנים עליו ולעיל נמי הכי פירושו עד היכן מקום זימון שצריך להו לאותו אחד דקרו ליה ועני עד נברך ומכאן ואילך ילך לדרכו ואינם צריכים האחרים עוד לצירופו והכא בעי לאותו מן השוק להיכן הוא חוזר למקום שפסק דהיינו למר מהזן ואילך ולמר מנברך והשתא ניחא דלא קשה מהזן שהרי לא ספר בינתיים:"
   },
   {
    "dh": "בזמן שהן שתי מטות גדול מסב בראש שני לו למעלה הימנו",
    "text": " — דהיינו כלפי ראשו שמסב על המטה דרך שמאל ולמטה מקרי דרך מרגלותיו דהיינו מימינו ובזה מדקדק רב ששת דאם כן בעי גדול לתרוצי כפשוטיה כשמדבר עם השני כיון שהשני למעלה הימנו ולקמן במתניתא גרס גדול מסב בראש השני למטה הימנו וזהו כלפי מרגלותיו והוא מימינו ואז לא מתריץ ויתיב כי בעי לאשתעויי בהדי שני:"
   },
   {
    "dh": "אין מכבדין וכו'",
    "text": " — וא\"ת הא אמרינן בשבת בפ' במה בהמה (שבת ד' נא:) לוי ורב הונא בר חייא הוו קא אזלי באורחא קדמה חמריה דרב הונא לחמרא דלוי בעי רב הונא לאפוקי מדעתיה דלוי כו' אלמא מכבדים בדרכים וי\"ל כשיצאו לדרך כאחד מכבדין בדרכים אבל אם כל אחד ילך לדרכו ופגעו זה בזה ואירע להם דרך למקום אחד אין מכבדים:"
   }
  ],
  "translations": []
 },
 {
  "id": "47a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מז",
  "amud": "א",
  "dafEn": "47a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ולא בידים מזוהמות רבין ואביי הוו קא אזלי באורחא קדמיה חמריה דרבין לדאביי ולא אמר ליה ניזיל מר אמר מדסליק האי מרבנן ממערבא גס ליה דעתיה כי מטא לפתחא דבי כנישתא אמר ליה ניעל מר אמר ליה ועד השתא לאו מר אנא אמר ליה הכי אמר רבי יוחנן אין מכבדין אלא בפתח שיש בה מזוזה דאית בה מזוזה אין דלית בה מזוזה לא אלא מעתה בית הכנסת ובית המדרש דלית בהו מזוזה הכי נמי דאין מכבדין אלא אימא בפתח הראוי למזוזה אמר רב יהודה בריה דרב שמואל בר שילת משמיה דרב אין המסובין רשאין לאכול כלום עד שיטעום הבוצע יתיב רב ספרא וקאמר לטעום איתמר למאי נפקא מינה שחייב אדם לומר בלשון רבו ת\"ר שנים ממתינין זה לזה בקערה שלשה אין ממתינין הבוצע הוא פושט ידו תחלה ואם בא לחלוק כבוד לרבו או למי שגדול הימנו הרשות בידו רבה בר בר חנה הוה עסיק ליה לבריה בי רב שמואל בר רב קטינא קדים ויתיב וקמתני ליה לבריה אין הבוצע רשאי לבצוע עד שיכלה אמן מפי העונים רב חסדא אמר מפי רוב העונים א\"ל רמי בר חמא מ\"ש רובא דאכתי לא כליא ברכה מיעוטא נמי לא כליא ברכה א\"ל שאני אומר כל העונה אמן יותר מדאי אינו אלא טועה: ת\"ר אין עונין לא אמן חטופה ולא אמן קטופה ולא אמן יתומה ולא יזרוק ברכה מפיו בן עזאי אומר כל העונה אמן יתומה יהיו בניו יתומים חטופה יתחטפו ימיו קטופה יתקטפו ימיו וכל המאריך באמן מאריכין לו ימיו ושנותיו רב ושמואל הוו יתבי בסעודתא אתא רב שימי בר חייא הוה קמסרהב ואכיל א\"ל רב מה דעתך לאיצטרופי בהדן אנן אכילנא לן א\"ל שמואל אלו מייתו לי ארדיליא וגוזליא לאבא מי לא אכלינן תלמידי דרב הוו יתבי בסעודתא על רב אחא אמרי אתא גברא רבא דמברך לן אמר להו מי סבריתו דגדול מברך עיקר שבסעודה מברך והלכתא גדול מברך אע\"ג דאתא לבסוף: אכל דמאי וכו': הא לא חזי ליה כיון דאי בעי מפקר להו לנכסיה והוי עני וחזי ליה דתנן מאכילין את העניים דמאי ואת האכסניא דמאי ואמר רב הונא תנא ב\"ש אומרים אין מאכילין את העניים ואת האכסניא דמאי: מעשר ראשון שנטלה תרומתו: פשיטא לא צריכא אלא שהקדימו בשבלים והפריש ממנו תרומת מעשר ולא הפריש ממנו תרומה גדולה וכדר' אבהו דאמר ר' אבהו אמר ריש לקיש מעשר ראשון שהקדימו בשבלים פטור מתרומה גדולה שנאמר (במדבר יח, כו) והרמותם ממנו תרומת ה' מעשר מן המעשר מעשר מן המעשר אמרתי לך ולא תרומה גדולה ותרומת מעשר מן המעשר אמר ליה רב פפא לאביי אי הכי אפילו הקדימו בכרי נמי אמר ליה עליך אמר קרא",
  "rashi": [
   {
    "dh": "ולא בידים מזוהמות",
    "text": " — בנטילת מים אחרונים:"
   },
   {
    "dh": "ממערבא",
    "text": " — לפי שהיה רבין רגיל לעלות מבבל לא\"י ולומר הוא דבריו משמו של ר' יוחנן:"
   },
   {
    "dh": "בפתח הראוי למזוזה",
    "text": " — כלומר בכניסת כל פתחים למעוטי דרכים ופרצות:"
   },
   {
    "dh": "לטעום איתמר",
    "text": " — אין חלוק בדבר אלא שחייב לומר בלשון רבו:"
   },
   {
    "dh": "קדים",
    "text": " — רבה בר בר חנה לישב על השולחן ולשנות לבנו הלכות סעודה לפי שהחתן רגיל לבצוע והיה מלמדו היאך יעשה:"
   },
   {
    "dh": "לבצוע",
    "text": " — לפרוס הפרוסה מן הפת:"
   },
   {
    "dh": "עד שיכלה אמן מפי העונים",
    "text": " — אמן אחר ברכת המוציא דאף עניית אמן מן הברכה היא ואמרי' בפרק כיצד מברכין (ברכות דף לט:) צריך שתכלה ברכה קודם בציעה:"
   },
   {
    "dh": "חטופה",
    "text": " — שקורין את האלף בחטף ולא בפתח ואומר אמן והוא צריך לומר אמן:"
   },
   {
    "dh": "קטופה",
    "text": " — שמחסר קריאת הנו\"ן שאינו מוציאה בפה שתהא נכרת:"
   },
   {
    "dh": "יתומה",
    "text": " — שלא שמע הברכה אלא ששמע שעונין אמן והא דאמרינן בהחליל (סוכה נא:) שבאלכסנדריא של מצרים היו מניפים בסודרים כשהגיע עת לענות אמן אלמא לא שמעי וקא ענו הנהו מידע ידעי שהם עונים אחר ברכה ועל איזו ברכה הם עונים אלא שלא היו שומעים את הקול:"
   },
   {
    "dh": "ולא יזרוק ברכה מפיו",
    "text": " — במהירות שדומה עליו כמשא אלא שחוק קבוע הוא לו:"
   },
   {
    "dh": "וקא מסרהב ואכיל",
    "text": " — ממהר לאכול כדי להצטרף לזימון וזימנו עליו:"
   },
   {
    "dh": "אכילנא לן",
    "text": " — גמרה לן סעודתנו קודם שבאת ואי אתה מחייבנו עוד בזימון:"
   },
   {
    "dh": "אילו מייתו לי ארדיליא וגוזליא לאבא",
    "text": " — שמואל חביבין עליו ארדיליא בקנוח סעודה והן כמהין ופטריות ולרב היו חביבין גוזלות ושמואל היה קורא לרב אבא לכבודו:"
   },
   {
    "dh": "מי לא אכלינן",
    "text": " — הלכך לא גמרה סעודתא ומצטרף:"
   },
   {
    "dh": "עיקר שבסעודה",
    "text": " — אחד מאותן שהיו בתחלת ההסבה:"
   },
   {
    "dh": "דמאי",
    "text": " — חטין הלקוחים מע\"ה ספק עשרן ספק לא עשרן:"
   },
   {
    "dh": "הא לא חזי ליה",
    "text": " — והויא לה ברכת זמון הבאה בעבירה וכתיב (תהילים י׳:ג׳) בוצע ברך נאץ ה' ואמר מר (בב\"ק דף צד.) הרי שגזל סאה של חטים וטחנה ואפאה וברך עליה אין זה מברך אלא מנאץ:"
   },
   {
    "dh": "מאכילים את העניים דמאי",
    "text": " — דרוב עמי הארץ מעשרים הם וחומרא דרבנן בעלמא הוא:"
   },
   {
    "dh": "אכסניא",
    "text": " — חיל של מלך שמטיל על בני העיר לזונם בשובם ממלחמתו והרי הם כעניים לפי שהם שלא במקומם:"
   },
   {
    "dh": "שהקדימו בשבלים",
    "text": " — לוי קדם את הכהן ונטל מעשר בשבלים קודם שנטל כהן תרומה גדולה והכהן היה לו ליטול תרומה גדולה תחלה א' מנ' דרחמנא קרייה ראשית וכתיב (שמות כ״ב:כ״ח) מלאתך ודמעך לא תאחר נמצאת תרומה גדולה של כהן בתוך המעשר הזה אחד מחמשים שבו לבד מתרומת מעשר שעל הלוי להפריש תרומה ממעשרו:"
   },
   {
    "dh": "וכדרבי אבהו",
    "text": " — אשמעינן מתניתין דהכי הוא כדרבי אבהו דפטר ליה ללוי מתרומה גדולה שבו:"
   }
  ],
  "tosafot": [
   {
    "dh": "אין המסובין רשאין לטעום עד שיטעום המברך",
    "text": " — ותימה מההוא סבא דערבי פסחים (דף קו.) דגחין ושתי אלמא דשתי קודם המברך שמא יש חלוק בין אכילה לשתיה אי נמי יש לומר דלא שתה אלא להראות לו מעשה שלא היה צריך לומר יותר ובירושלמי יש כשיש לכל אחד ככרו או כוסו בידו יכולים לשתות אפי' קודם המברך וגבי ההוא סבא היה לו כוסו בידו והכי איתא בירושלמי אמר רבי בון בשם רב אין המסובין רשאין לטעום עד שיטעום המברך ריב\"ל אמר שותין אע\"פ שלא שתה המברך ולא פליגי רבי בון בשם רב שזקוק לכוס אחד דריב\"ל דהיה לכל אחד כוסו בידו וכן עשה רבינו שמשון בחופה אחת שבצע החתן המוציא והיה בוצע רבינו שמשון הפת שהיה לפניו ואוכל והשר מקוצי היה אומר אם בצע המברך ונתן לכל אחד חלקו אין צריך להמתין כל אחד עד שיטעום המברך והא דאמרי' הכא אין המסובין רשאין לטעום כו' היינו להקדים ולבצוע מן הפת שבצע המברך אבל אחר שנתן לכל אחד חלקו אין קפידא וכן צריך לומר בסמוך הבוצע הוא פושט ידיו תחלה לטבול פתו ואם בא לחלוק כבוד לרבו רשאי ואמאי והא אין המסובין רשאין לטעום וכו' ואין לומר דמן הטבול לחודיה קאמר אך המברך אוכל קודם דא\"כ מה כבוד היה זה אבל לפי מה שפירשתי ניחא ויש מפרש פושט ידיו תחלה בקערה להתחיל באכילה ומכאן משמע שאין צריך למזוג מכוס ברכה לשאר כוסות היכא שיש בפני האורחים כוסות שאינן פגומות אבל אם אותן כוסות פגומות יש קפידא:"
   },
   {
    "dh": "אמן יתומה",
    "text": " — שאין שומע הברכה מפי המברך ועונה אחר האחרים ששמעו אמן תימה דהא אמרינן בסוכה (פ\"ה דף נא:) באלכסנדריא של מצרים שהיה שם קהל גדול ולא היו יכולים כולם לשמוע מפי המברך והיו מניפים בסודרים כדי שידעו חתימת הברכות ויענו אמן וי\"ל שהיו יודעים באיזו ברכה החזן עומד אמנם לא היו שומעים אותו אבל הכא מיירי שאינם יודעים כלל היכן החזן עומד ומתפלל ובאיזו ברכה הוא עומד אלא עונה אחר האחרים בלא שמיעה ולא ידיעה:"
   },
   {
    "dh": "כל המאריך באמן מאריכין לו ימיו ושנותיו",
    "text": " — ובלבד שלא יאריך יותר מדאי וטעמא לפי שאין קריאת התיבה כמשמעה כשהוא מאריך יותר מדאי ומסקנא דמלתא דאין הבוצע רשאי לבצוע עד שיכלה אמן מפי רוב העונים:"
   },
   {
    "dh": "אילו מייתו לי ארדיליא וכו'",
    "text": " — משמע דכן הלכה דרב נמי לא פליג אבל אי אמר הב לן ונבריך שהסיחו דעתם מלאכול אין שלישי מצטרף עמהם:"
   },
   {
    "dh": "והלכתא גדול מברך",
    "text": " — ומיהו אם הגדול נותן רשות לקטן לברך שפיר כדאשכחן (לעיל ברכות מג. מו:) דאמר ליה לרב משי ידך וכו':"
   },
   {
    "dh": "ומאכילין את האכסניא דמאי",
    "text": " — מיירי באכסניא ישראל ומוטלין עליהם לזונם והם כעניים ודוקא דמאי אבל טבל לא דקספו להו איסור מיתה ואי נמי באכסניא של נכרים שהטיל עליהם המלך מכל מקום דוקא דמאי אבל טבל לא דאם כן פורע חובו מממונו של כהן:"
   },
   {
    "dh": "ואמר רב הונא תנא בש\"א אין מאכילין",
    "text": " — וא\"ת רב הונא טעמא דב\"ש אתא לאשמעי' דהכי פריך בכמה דוכתין ויש לומר דקא משמע לן דאי משכחת תנא דאמר אין מאכילין בית שמאי היא ולא תיחוש לאותה משנה או ברייתא:"
   }
  ],
  "translations": []
 },
 {
  "id": "47b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מז",
  "amud": "ב",
  "dafEn": "47b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "(במדבר יח, כח) מכל מעשרותיכם תרימו ומה ראית האי אידגן והאי לא אידגן: מעשר שני והקדש שנפדו: פשיטא הב\"ע כגון שנתן את הקרן ולא נתן את החומש והא קמ\"ל דאין חומש מעכב: השמש שאכל כזית: פשיטא מהו דתימא שמש לא קבע קמ\"ל: והכותי מזמנין עליו: אמאי לא יהא אלא עם הארץ ותניא אין מזמנין על ע\"ה אביי אמר בכותי חבר רבא אמר אפילו תימא בכותי ע\"ה והכא בע\"ה דרבנן דפליגי עליה דר' מאיר עסקינן דתניא איזהו ע\"ה כל שאינו אוכל חוליו בטהרה דברי ר\"מ וחכמים אומרים כל שאינו מעשר פירותיו כראוי והני כותאי עשורי מעשרי כדחזי דבמאי דכתיב באורייתא מזהר זהירי דאמר מר כל מצוה שהחזיקו בה כותים הרבה מדקדקין בה יותר מישראל ת\"ר איזהו ע\"ה כל שאינו קורא ק\"ש ערבית ושחרית דברי ר' אליעזר רבי יהושע אומר כל שאינו מניח תפילין בן עזאי אומר כל שאין לו ציצית בבגדו ר' נתן אומר כל שאין מזוזה על פתחו ר' נתן בר יוסף אומר כל שיש לו בנים ואינו מגדלם לת\"ת אחרים אומרים אפי' קרא ושנה ולא שמש ת\"ח הרי זה ע\"ה א\"ר הונא הלכה כאחרים רמי בר חמא לא אזמין עליה דרב מנשיא בר תחליפא דתני ספרא וספרי והלכתא כי נח נפשיה דרמי בר חמא אמר רבא לא נח נפשיה דרמי בר חמא אלא דלא אזמין ארב מנשיא בר תחליפא והתניא אחרים אומרים אפילו קרא ושנה ולא שמש ת\"ח הרי זה ע\"ה שאני רב מנשיא בר תחליפא דמשמע להו לרבנן ורמי בר חמא הוא דלא דק אבתריה ל\"א דשמע שמעתתא מפומייהו דרבנן וגריס להו כצורבא מרבנן דמי: אכל טבל ומעשר וכו': טבל פשיטא לא צריכא בטבל טבול מדרבנן ה\"ד בעציץ שאינו נקוב: מעשר ראשון כו': פשיטא לא צריכא כגון שהקדימו בכרי מהו דתימא כדאמר ליה רב פפא לאביי קמ\"ל כדשני ליה: מעשר שני וכו': פשיטא לא צריכא שנפדו ולא נפדו כהלכתן מעשר שני כגון שפדאו על גבי אסימון ורחמנא אמר (דברים יד, כה) וצרת הכסף בידך כסף שיש (לו) עליו צורה הקדש שחללו על גבי קרקע ולא פדאו בכסף ורחמנא אמר (ויקרא כז, יט) ונתן הכסף וקם לו: והשמש שאכל פחות מכזית: פשיטא איידי דתנא רישא כזית תנא סיפא פחות מכזית: והנכרי אין מזמנין עליו: פשיטא הכא במאי עסקינן בגר שמל ולא טבל דאמר רבי זירא א\"ר יוחנן לעולם אינו גר עד שימול ויטבול וכמה דלא טבל נכרי הוא: נשים ועבדים וקטנים אין מזמנין עליהן: אמר רבי יוסי קטן המוטל בעריסה מזמנין עליו והא תנן נשים ועבדים וקטנים אין מזמנין עליהם הוא דאמר כרבי יהושע בן לוי דאמר ריב\"ל אף על פי שאמרו קטן המוטל בעריסה אין מזמנין עליו אבל עושין אותו סניף לעשרה ואמר ריב\"ל תשעה ועבד מצטרפין מיתיבי מעשה ברבי אליעזר שנכנס לבית הכנסת ולא מצא עשרה ושחרר עבדו והשלימו לעשרה שחרר אין לא שחרר לא תרי אצטריכו שחרר חד ונפיק בחד והיכי עביד הכי והאמר רב יהודה כל המשחרר עבדו עובר בעשה שנאמר (ויקרא כה, מו) לעולם בהם תעבודו לדבר מצוה שאני מצוה הבאה בעבירה היא מצוה דרבים שאני ואמר ריב\"ל לעולם ישכים אדם לבית הכנסת כדי שיזכה וימנה עם עשרה הראשונים שאפילו מאה באים אחריו קבל עליו שכר כולם שכר כולם סלקא דעתך אלא אימא נותנין לו שכר כנגד כולם אמר רב הונא תשעה וארון מצטרפין א\"ל רב נחמן וארון גברא הוא אלא אמר רב הונא תשעה נראין כעשרה מצטרפין אמרי לה כי מכנפי ואמרי לה כי מבדרי אמר רבי אמי שנים ושבת מצטרפין אמר ליה רב נחמן ושבת גברא הוא אלא אמר רבי אמי שני תלמידי חכמים המחדדין זה את זה בהלכה מצטרפין מחוי רב חסדא כגון אנא ורב ששת מחוי רב ששת כגון אנא ורב חסדא א\"ר יוחנן קטן פורח מזמנין עליו תנ\"ה קטן שהביא שתי שערות מזמנין עליו ושלא הביא שתי שערות אין מזמנין עליו ואין מדקדקין בקטן הא גופא קשיא אמרת הביא שתי שערות אין לא הביא לא והדר תני אין מדקדקין בקטן לאתויי מאי לאו",
  "rashi": [
   {
    "dh": "מכל מעשרותיכם",
    "text": " — בפרשת לוים כתיב ואל הלוים תדבר וכתיב בהאי קרא את כל תרומת ה' כל צד תרומה שבו חייבים להפריש ממנו:",
    "en": "He doesn't learn Gemara, the Gemara is explaining the Mishnah, and the rabbis would gather and explain the Gemara, and an example is the Gemara that the Amoraim wrote"
   },
   {
    "dh": "האי אידגן",
    "text": " — משעה שנתמרח בכרי נעשה דגן וכיון דאיקרי דגן חלה עליו רשות כהן תחלה דכתיב ראשית דגנך תתן לו אבל בשבלים לא אידגן ולא חלה עליו רשות כהן:"
   },
   {
    "dh": "מעשר שני והקדש",
    "text": " — אם הבעלים פודין אותו מוסיפין חומש:"
   },
   {
    "dh": "לא קבע",
    "text": " — אין לו קביעות לפי שהולך ובא:"
   },
   {
    "dh": "והכא בע\"ה דרבנן",
    "text": " — ברייתא דקתני אין מזמנין על ע\"ה בע\"ה דרבנן:"
   },
   {
    "dh": "דפליגי עליה דר\"מ",
    "text": " — וקאמרי כשאינו מעשר פירותיו הלכך כותי מזמנין עליו דעשורי מעשר:"
   },
   {
    "dh": "איזהו ע\"ה",
    "text": " — שדברו חכמים בכל מקום:"
   },
   {
    "dh": "שלא שמש ת\"ח",
    "text": " — הוא הגמרא התלויה בסברא שהיו נותנים לדברי משנה טעם והיו מתאספים יחד ועוסקים בכך והיא דוגמת הגמרא שסדרו האמוראים:"
   },
   {
    "dh": "לא אזמין עליה",
    "text": " — רמי בר חמא לא רצה לצרפו לשלשה לזמון:"
   },
   {
    "dh": "דמשמע",
    "text": " — משמש:"
   },
   {
    "dh": "ורמי בר חמא הוא דלא דק",
    "text": " — לא בדק לשאול מדת רב מנשיא:"
   },
   {
    "dh": "שלא נטלה תרומתו",
    "text": " — קס\"ד תרומת מעשר קאמר:"
   },
   {
    "dh": "פשיטא",
    "text": " — דאין מזמנין דהיינו טבל:"
   },
   {
    "dh": "שהקדימו בכרי",
    "text": " — לאחר שנתמרח והוקבע לתרומה מן התורה קדם לוי את הכהן ונטל מעשר ראשון תחלה ואחד מחמשים שבו היה ראוי לתרומה גדולה לכהן ושלא ניטלה תרומתו דקתני לאו תרומת מעשר קאמר אלא תרומה גדולה:"
   },
   {
    "dh": "מהו דתימא כדאמר ליה רב פפא לאביי",
    "text": " — לעיל אי הכי אפילו הקדימו בכרי נמי קמ\"ל:"
   },
   {
    "dh": "אסימון",
    "text": " — כסף שלא נקבע בו צורה וקורין לו פלזו\"ן בלע\"ז:"
   },
   {
    "dh": "עד שימול ויטבול",
    "text": " — ביבמות (ד' מו:) נפקא לן מויקח משה את הדם ויזרוק על העם ואין הזאה בלא טבילה:"
   },
   {
    "dh": "סניף",
    "text": " — חבור לזימון עשרה וכי אמר רב אסי נמי לעשרה קאמר:"
   },
   {
    "dh": "מצוה דרבים",
    "text": " — להוציא רבים ידי חובתם בקדושה:"
   },
   {
    "dh": "תשעה נראין כעשרה",
    "text": " — מפרש ואזיל לה:"
   },
   {
    "dh": "אמרי לה כי מכנפי",
    "text": " — הוו נראים כעשרה שאין אדם מבחין בהן כל כך מתוך שהן יחד:"
   },
   {
    "dh": "ואמרי לה כי מבדרי",
    "text": " — נראין טפי מרובין:"
   },
   {
    "dh": "שני תלמידי חכמים המחדדין זה את זה בהלכה מצטרפין",
    "text": " — להיות שלשה:"
   },
   {
    "dh": "קטן פורח",
    "text": " — שהביא סימנים ולא בא לכלל שניו:"
   }
  ],
  "tosafot": [
   {
    "dh": "אמר רב הונא הלכה כאחרים",
    "text": " — והאידנא אין אנו מדקדקים ורגילים אנו לזמן בע\"ה כדאמרינן בחגיגה (פ\"ג דף כב.) כמאן מקבלינן האידנא סהדותא מע\"ה כמאן כרבי יוסי כדי שלא יהא כל אחד הולך ובונה במה לעצמו:"
   },
   {
    "dh": "מצוה דרבים שאני",
    "text": " — מכאן קשה לה\"ג דפירש דמי שמת לו מת בי\"ט האחרון דאבילות נוהג ולא אתי י\"ט האחרון דרבנן ודחי אבילות דאורייתא דכתיב (עמוס ח׳:י׳) ואחריתה כיום מר דהכא חזינן דאתיא תפלה דרבנן ודחיא קרא דלעולם בהם תעבודו וכן משמע נמי בריש כתובות (דף ד.) גבי חתן נוהג ז' ימי המשתה ואח\"כ נוהג ז' ימי אבילות ומדשבעת ימי המשתה מבטלין אבלות דאורייתא כל שכן יום טוב שני:"
   },
   {
    "dh": "קטן פורח מזמנין עליו",
    "text": " — פרש\"י שהביא שתי שערות ועדיין לא הגיע לי\"ג שנה ויום אחד ולא נהירא דא\"כ אמאי אמר בסמוך לאתויי קטן פורח היינו שהביא שתי שערות דקתני בברייתא בהדיא ע\"כ פר\"ח קטן פורח בתוך י\"ג שנה ועדיין לא הביא שתי שערות ידועות שאינן גדולות כדי לכוף ראשן לעיקרן שכן הוא שיעורם ולהכי קרי ליה פורח שפרחו וצמחו בו שערות אבל אינן גדולות כל השיעור והשתא ה\"פ אמרת הביא דמשמע הביא דוקא והדר קתני אין מדקדקין בקטן דמשמע אפילו לא הביא אלא ש\"מ לאתויי קטן פורח ואתי סיפא לגלויי רישא דמה שהוא אומר ברישא הביא שתי שערות היינו פורחות שאינן שערות ממש וכדפירש שנכנס בתוך י\"ג שנה וא\"ת והא אמרינן לעיל קטן המוטל בעריסה עושין אותו סניף וי\"ל דהתם איירי בעשרה והכא מיירי בשלשה או שמא פליגי אהדדי:"
   }
  ],
  "translations": []
 },
 {
  "id": "48a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מח",
  "amud": "א",
  "dafEn": "48a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "לאתויי קטן פורח. ולית הלכתא ככל הני שמעתתא אלא כי הא דאמר רב נחמן קטן היודע למי מברכין מזמנין עליו אביי ורבא הוו יתבי קמיה דרבה אמר להו רבה למי מברכין אמרי ליה לרחמנא ורחמנא היכא יתיב רבא אחוי לשמי טללא אביי נפק לברא אחוי כלפי שמיא אמר להו רבה תרווייכו רבנן הויתו היינו דאמרי אינשי בוצין בוצין מקטפיה ידיע: א\"ר יהודה בריה דרב שמואל בר שילת משמיה דרב תשעה אכלו דגן ואחד אכל ירק מצטרפין א\"ר זירא בעאי מיניה מרב יהודה שמנה מהו שבעה מהו א\"ל לא שנא ששה ודאי לא מיבעיא לי א\"ל רבי ירמיה שפיר עבדת דלא איבעיא לך התם טעמא מאי משום דאיכא רובא הכא נמי איכא רובא ואיהו סבר רובא דמינכר בעינן. ינאי מלכא ומלכתא כריכו ריפתא בהדי הדדי ומדקטל להו לרבנן לא הוה ליה איניש לברוכי להו אמר לה לדביתהו מאן יהיב לן גברא דמברך לן אמרה ליה אשתבע לי דאי מייתינא לך גברא דלא מצערת ליה אשתבע לה אייתיתיה לשמעון בן שטח אחוה אותביה בין דידיה לדידה אמר ליה חזית כמה יקרא עבדינא לך אמר ליה לאו את קא מוקרת לי אלא אורייתא היא דמוקרא לי דכתיב (משלי ד, ח) סלסלה ותרוממך תכבדך כי תחבקנה אמר ליה קא חזית דלא מקבל מרות יהבו ליה כסא לברוכי אמר היכי אבריך ברוך שאכל ינאי וחביריו משלו שתייה לההוא כסא יהבו ליה כסא אחרינא ובריך א\"ר אבא בריה דרב חייא בר אבא (א\"ר יוחנן) שמעון בן שטח דעבד לגרמיה הוא דעבד דהכי אמר ר' חייא בר אבא אר\"י לעולם אינו מוציא את הרבים ידי חובתן עד שיאכל כזית דגן מיתיבי רשב\"ג אומר עלה והסיב עמהם אפילו לא טבל עמהם אלא בציר ולא אכל עמהם אלא גרוגרת אחת מצטרף אצטרופי מצטרף אבל להוציא את הרבים ידי חובתן עד שיאכל כזית דגן איתמר נמי אמר רב חנא בר יהודה משמיה דרבא אפי' לא",
  "rashi": [
   {
    "dh": "לאתויי קטן פורח",
    "text": " — שאין מדקדקין בו אם בא לכלל שנים או לאו ומה הן שנים י\"ג שנים ויום אחד:"
   },
   {
    "dh": "טללא",
    "text": " — גג:"
   },
   {
    "dh": "בוצין",
    "text": " — דלעת ואית דגרסי מקטפיה וקטף הוא שרף האילן כלומר משעה שהוא חונט ויוצא מתוך השרף ניכר אם יהיה טוב:"
   },
   {
    "dh": "מקניה",
    "text": " — מקן שלו מקטנותו:"
   },
   {
    "dh": "ואיהו סבר",
    "text": " — רבי זירא שהיה קובל ומתחרט על שלא שאל על הששה סבר דילמא רובא דמנכר שפיר בעינן דליכול דגן ואי בעי מיניה ששה לא היה מתיר:"
   },
   {
    "dh": "ינאי מלכא",
    "text": " — ממלכי בית חשמונאי היה והרג חכמי ישראל שבאו לפסלו מן הכהונה במסכת קידושין (דף סו.):"
   },
   {
    "dh": "סלסלה ותרוממך",
    "text": " — סיפיה דקרא תכבדך כי תחבקנה:"
   },
   {
    "dh": "היכי אבריך",
    "text": " — ולא נהניתי אומר נברך שאכל ינאי וחביריו משלו בתמיה:"
   },
   {
    "dh": "שמעון בן שטח דעבד",
    "text": " — שבירך להוציאם ידי חובתם בשביל כוס אחד ששתה:"
   },
   {
    "dh": "לגרמיה הוא דעבד",
    "text": " — אין אדם מודה לו:"
   },
   {
    "dh": "עד שיאכל כזית דגן",
    "text": " — ומכי אכל כזית דגן מיהא מפיק אף על גב דכזית דגן שיעורא דרבנן הוא כדאמר בפרק מי שמתו (ברכות דף כ:) מיהו כיון דמיחייב מדרבנן מחוייב בדבר קרינן ביה ומוציא רבים ידי חובתן וא\"ת בקטן שהגיע לחינוך הא לא אמר הכי ההוא אפי' מדרבנן לא מיחייב דעליה דאבוה הוא דרמי לחנוכיה. ובעל ה\"ג פסק דוקא דאכלו אינהו כזית או כביצה דכוותיה אבל אכלו ושבעו לא מפיק ואי אפשר להעמידה דהא ינאי וחבריו אכלו ושבעו ואפקינהו שמעון בן שטח ואע\"ג דלגרמיה הוא דעבד טעמא משום דלא אכל כזית דגן הא אכל כזית דגן הכי נמי:"
   }
  ],
  "tosafot": [
   {
    "dh": "ולית הלכתא ככל הני שמעתתא אלא כי הא קטן היודע",
    "text": " — משמע דקאי נמי ארבי יוחנן ולא נהירא שהרי אין דרך הגמרא שסותר דברי אמוראים והברייתא שהביא ראיה לדברי ר' יוחנן בלא שום טעם וי\"ל דקאי אקטן פורח כלומר קטן פורח מזמנין עליו היינו דוקא היודע למי מברכין ותרווייהו בעינן ולפירושינו צ\"ל דלא מייתי עובדא דאביי ורבא לענין אזמוני עלייהו אלא לפרש מהו קטן היודע למי מברכין דמסתמא לא פורחים הוו דאם כן מהו רבותייהו אם יודעים למי מברכין ורבה נמי דעבד היינו להראות שיש בהם בינה והם קטנים ולא מזמנין עלייהו. ואומר ר\"ת אף על פי דלית הלכתא ככל הני שמעתתא מיהו הלכה כריב\"ל דאמר קטן ממש עושין אותו סניף לעשרה והכא דבעינן פורח ויודע היינו דוקא בשלשה ולית הלכתא ככל הני שמעתתא לא קאי אריב\"ל ודיקא נמי שהרי מפסיק הגמרא בינתיים באותו מעשה [דר' אליעזר] דלעולם ישכים אדם ותניא כוותיה אלא קאי אהני שמעתתא דבתר תניא כוותיה דישכים כגון תשעה וארון ושבת ושנים ותשעה נראין כעשרה ושנים מחדדים וקטן פורח אע\"ג דתנא ברייתא הכי לאתויי פורח יעמידנה רב נחמן באינו יודע למי מברכין והיינו נמי כריב\"ל דאמר לעיל קטן אין מזמנין עליו פי' מוטל בעריסה עד שידע למי מברכין אבל עושין אותו סניף לעשרה פי' לברכת המזון וה\"ה לתפלה דבהא לא פליג רב נחמן דכי בעי יודע ופורח כדפי' ה\"מ לזמון שלשה אבל לסניף מודה לריב\"ל דסניף לעשרה וה\"ה לתפלה דקטן מצטרף ודיקא נמי דפריך עלה ממעשה דר' אליעזר שהיה לתפלה לריב\"ל דמיירי בבהמ\"ז ומיהו תימה דבב\"ר (פ' צא) קאמר עלה דריב\"ל הדא הוא דתימא לברכת המזון אבל לתפלה לא והיה אומר ר\"ת דאין הלכה כן לפי שחולק על הגמרא שלנו דודאי ריב\"ל לענין תפלה נמי קאמר מדפריך מעובדא דר' אליעזר דמיירי בתפלה. ויש מצרפין קטן לתפלה רק שיהא חומש בידו ואומר ר\"ת דמנהג שטות הוא דכי היכי דאמר אטו ארון גברא הוא ה\"נ אטו חומש גברא הוא ועוד הא דקאמר קטן מצטרף היינו אפי' בלא חומש ועוד דלא חזינן בשום דוכתא דמהני אלא בעובדא דעבור השנה כשעולין בעליה בפרקי דרבי אליעזר (פ\"ח) דקאמר בשלשה מעברין את השנה ר' אליעזר אומר בעשרה ואם נתמעטו מביאין ספר תורה ועושין עגולה וכו' ואין מזכיר שם שיהא הקטן אוחז הס\"ת והתם נמי לא קאמר אלא ספר תורה העשוי בגליון אבל חומשין שלנו לא ומיהו קאמר בירושלמי א\"ר יוסי זמנין אכלית עם ר' חלפתא אבא ועם ר' חנינא בר סרסי חביבי ולא מזמנין עלואי עד שהבאתי שתי שערות ומשם משמע דלהצטרף לזמון לא עבדין עובדא עד שיביא שתי שערות הא לתפלה עבדי ומתוך ירושלמי זה פי' ר\"י דאין עושין קטן סניף לעשרה לא לתפלה ולא לברכת המזון וגם היה אומר ר\"י שגם רבינו תם עצמו לא היה נוהג לעשות כן לעשות קטן סניף לעשרה ולא עשה מעשה והלכך אפי' חומש בידו לא מהני כדפירשנו כיון דלא אתהני קטן לבדו גם חומש בידו לא אתהני ומיהו קטן פורח ויודע למי מברכין משמע שמברכין עליו גם בשלשה כברייתא וליכא מאן דפליג וזה לשון רבינו שפוסק מסקנא דמלתא אין עושין קטן סניף לעשרה לזמון ולתפלה ולשלשה עד שיביא שתי שערות כעובדא דר' יוסי ברבי חלפתא בירושלמי והא דאמרינן בירושלמי קטן וס\"ת עושין אותו סניף אומר ר\"י דגרס התם קטן לס\"ת כלומר סניף לקריאת התורה קאמר ודוקא התם כדאיתא במגילה (פ\"ג דף כג.) דקטן עולה למנין שבעה דקאמר הכל עולין למנין שבעה אפי' קטן אפי' אשה אי לא הוה משום כבוד צבור אבל לשאר דברים לא ואפי' אם אשכחן בשום דוכתא דקטן [וחומש מצטרף] אפי' לתפלה היינו דוקא העשוי בגליון אבל חומשין שלנו לא ולפי' ר\"ת חומש אינו מועיל כלל ביד קטן אבל קטן לחוד הוי סניף אבל תרי לא כדקאמר גבי עובדא דר' אליעזר ור\"ת פי' דההיא דירושלמי דרבי יוסי בר' חלפתא דוקא בשלשה מיירי:"
   },
   {
    "dh": "אביי ורבא הוו יתבי וכו'",
    "text": " — ואם תאמר היכי דמי אי הוו קטנים פורחים מאי רבותא הוה בהו שהביטו כלפי מעלה אלא צריך לומר דהאי לאו לאזמוני עלייהו קא מנסי להו כי היו קטנים טובא אלא לנסותינהו קא עביד שהיה בהם בינה:"
   },
   {
    "dh": "תשעה שאכלו דגן ואחד ירק מצטרפין",
    "text": " — והכי הלכתא שאחד שאכל ירק או שתה כוס יין מצטרף ואפילו נברך שאכלנו יכולין לומר שהרי שתיה בכלל אכילה ויש שרוצים לומר דהיינו דוקא לזמון עשרה אבל לשלשה לא מצטרפי דהרי לעיל נמי מחמרינן טפי בצירוף שלשה מעשרה ומיהו בירושלמי תני שנים שאכלו פת ואחד ירק מזמנין וכן פסק ר\"י בתוספתו והשר מקוצי מפרש דאין הלכה כאותה ברייתא דירושלמי חדא שהרי מסיק עלה התם מתני' כרבן שמעון בן גמליאל כלומר ורבנן פליגי דלא מצטרפי ואין הלכה כיחיד ועוד דא\"כ קשה דרבי יוחנן אדר' יוחנן דהכא א\"ר יוחנן דלעולם אינו מוציא עד שיאכל כזית דגן הא מצטרף שפיר אפי' לא טעם אלא שתיה כעובדא דר\"ש בן שטח ובירושלמי קא\"ר יוחנן לעולם אין מזמנין עד שיאכל כזית ומשמע אפי' מצטרף אלא ש\"מ כאן לעשרה ובירושלמי איירי בזמון שלשה ולהשלים לעשרה אפי' איכא שנים ושלשה ששתו מצטרפין ושתיה בכלל אכילה ולא קפדינן אלא ארובא דמינכר:"
   },
   {
    "dh": "עד שיאכל כזית דגן",
    "text": " — משמע שאם אכל כזית דגן שיכול להוציא אף אחרים שאכלו על השובע ותימה והרי כזית אינו חייב אלא מדרבנן והיכי אתי דרבנן ופטר דאורייתא דהא אמרינן בפרק מי שמתו (ברכות ד' כ:) תבא מארה למי שאשתו ובניו מברכים לו ולא מצי לאוקומי [הא] דשרו לקטן שיכול להוציא אביו אלא בדאכל אביו כזית דאתי קטן דרבנן שהגיע לחינוך ופטר אביו שאינו חייב אלא מדרבנן הא אם אכל אביו כדי שביעה אינו יכול לפטרו ופרש\"י דמחויב דרבנן מחויב קרינן ביה אבל קטן שהגיע לחינוך לא מיקרי מחויב דרבנן דאביו חייב לחנכו אבל עליו אין שום חיוב וקשה לפירושו מכל מקום כיון שאינו מן התורה אינו מוציא אחרים שמחויבים ועוד דוחק לומר בקטן שהגיע לחינוך קרי אינו מחויב מדרבנן דאם אינו מחויב אפילו מדרבנן אם כן אינו פוטר את אביו ובה\"ג פירש דאחד שאכל כזית אינו יכול להוציא אחרים שאכלו כדי שביעה דלא אתי דרבנן ופוטר דאורייתא אבל כשלא אכלו גם האחרים רק כזית פוטר אותם ולא היא דהא סמכינן אעובדא דינאי וחבריו והם אכלו כדי שביעה ואפילו הכי קא חזינן דקא פטר להו שמעון בן שטח אלא נראה לחלק דקטן שאינו בר חיוב כלל דאורייתא אפילו אכל כדי שביעה הלכך אינו מחויב בדבר קרינן ביה ולכך לא מפיק ליה אי אכל שיעורא דאורייתא אבל גדול שהוא בר חיובא מן התורה כי אכיל כדי שביעה מחויב בדבר קרינן ביה אפילו לא אכל כלל כדאמרי' בראש השנה (פ\"ג ד' כט.) כל הברכות אף על פי שיצא מוציא חוץ מברכת הלחם וברכת היין והיינו טעמא דכל ישראל ערבין זה בזה והוא הדין בברכת המזון אף ע\"פ שיצא מוציא כדפרישית וכזית דגן אינו צריך אלא שיוכל לומר שאכלנו משלו:"
   }
  ],
  "translations": []
 },
 {
  "id": "48b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מח",
  "amud": "ב",
  "dafEn": "48b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "טבל עמהם אלא בציר ולא אכל עמהם אלא גרוגרת אחת מצטרף ולהוציא את הרבים ידי חובתם אינו מוציא עד שיאכל כזית דגן אמר רב חנא בר יהודה משמיה דרבא הלכתא אכל עלה ירק ושתה כוס של יין מצטרף להוציא אינו מוציא עד שיאכל כזית דגן אמר רב נחמן משה תקן לישראל ברכת הזן בשעה שירד להם מן יהושע תקן להם ברכת הארץ כיון שנכנסו לארץ דוד ושלמה תקנו בונה ירושלים דוד תקן על ישראל עמך ועל ירושלים עירך ושלמה תקן על הבית הגדול והקדוש הטוב והמטיב ביבנה תקנוה כנגד הרוגי ביתר דאמר רב מתנא אותו היום שניתנו הרוגי ביתר לקבורה תקנו ביבנה הטוב והמטיב הטוב שלא הסריחו והמטיב שניתנו לקבורה: תנו רבנן סדר ברכת המזון כך היא ברכה ראשונה ברכת הזן שניה ברכת הארץ שלישית בונה ירושלים רביעית הטוב והמטיב ובשבת מתחיל בנחמה ומסיים בנחמה ואומר קדושת היום באמצע רבי אליעזר אומר רצה לאומרה בנחמה אומרה בברכת הארץ אומרה בברכה שתקנו חכמים ביבנה אומרה וחכמים אומרים אינו אומרה אלא בנחמה בלבד חכמים היינו תנא קמא איכא בינייהו דיעבד: תנו רבנן מנין לברכת המזון מן התורה שנאמר (דברים ח, י) ואכלת ושבעת וברכת זו ברכת הזן את ה' אלהיך זו ברכת הזמון על הארץ זו ברכת הארץ הטובה זו בונה ירושלים וכן הוא אומר (דברים ג, כה) ההר הטוב הזה והלבנון אשר נתן לך זו הטוב והמטיב אין לי אלא לאחריו לפניו מנין אמרת קל וחומר כשהוא שבע מברך כשהוא רעב לא כל שכן רבי אומר [אינו צריך] ואכלת ושבעת וברכת זו ברכת הזן אבל ברכת הזמון (תהלים לד, ד) מגדלו לה' אתי נפקא על הארץ זו ברכת הארץ הטובה זו בונה ירושלים וכן הוא אומר ההר הטוב הזה והלבנון הטוב והמטיב ביבנה תקנוה אין לי אלא לאחריו לפניו מנין תלמוד לומר אשר נתן לך משנתן לך רבי יצחק אומר אינו צריך הרי הוא אומר (שמות כג, כה) וברך את לחמך ואת מימיך אל תקרי ובירך אלא וברך ואימתי קרוי לחם קודם שיאכלנו ר' נתן אומר אינו צריך הרי הוא אומר (שמואל א ט, יג) כבאכם העיר כן תמצאון אותו בטרם יעלה הבמתה לאכול כי לא יאכל העם עד באו כי הוא יברך הזבח אחרי כן יאכלו הקרואים וכל כך למה לפי שהנשים דברניות הן ושמואל אמר כדי להסתכל ביפיו של שאול דכתיב (שמואל א ט, ב) משכמו ומעלה גבוה מכל העם ורבי יוחנן אמר לפי שאין מלכות נוגעת בחברתה אפי' כמלא נימא ואין לי אלא ברכת המזון ברכת התורה מנין אמר ר' ישמעאל ק\"ו על חיי שעה מברך על חיי עוה\"ב לא כ\"ש רבי חייא בר נחמני תלמידו של רבי ישמעאל אומר משום רבי ישמעאל אינו צריך הרי הוא אומר (דברים ח, י) על הארץ הטובה אשר נתן לך ולהלן הוא אומר (שמות כד, יב) ואתנה לך את לחות האבן והתורה והמצוה וגו' ר\"מ אומר ומנין שכשם שמברך על הטובה כך מברך על הרעה ת\"ל אשר נתן לך ה' אלהיך דיינך בכל דין שדנך בין מדה טובה ובין מדה פורענות רבי יהודה בן בתירה אומר אינו צריך הרי הוא אומר טובה הטובה טובה זו תורה וכן הוא אומר (משלי ד, ב) כי לקח טוב נתתי לכם הטובה זו בנין ירושלים וכן הוא אומר ההר הטוב הזה והלבנון: תניא רבי אליעזר אומר כל שלא אמר ארץ חמדה טובה ורחבה בברכת הארץ ומלכות בית דוד בבונה ירושלים לא יצא ידי חובתו נחום הזקן אומר צריך שיזכור בה ברית רבי יוסי אומר צריך שיזכור בה תורה פלימו אומר צריך שיקדים ברית לתורה שזו נתנה בשלש בריתות",
  "rashi": [
   {
    "dh": "ובשבת מתחיל בנחמה",
    "text": " — כלומר אינו צריך לא לסיים ולא להתחיל בשל שבת אלא מתחיל ומסיים בנחמה בנין ירושלים קרי נחמה כל היכי דמתחיל בין רחם בין נחמנו:"
   },
   {
    "dh": "בברכה שתקנו חכמים",
    "text": " — בהטוב והמטיב:"
   },
   {
    "dh": "איכא בינייהו דיעבד",
    "text": " — לרבנן בתראי מהדרינן ליה:"
   },
   {
    "dh": "בדתנא קמא גרסינן אשר נתן לך זו הטוב והמטיב ולא גרסינן ביבנה תקנוה אלא בדרבי",
    "text": ""
   },
   {
    "dh": "כשהוא שבע",
    "text": " — מצוה לברך ולהודות על שבעו:"
   },
   {
    "dh": "כשהוא רעב",
    "text": " — והוא בא להפיק את רעבו ע\"י ברייתו של הקב\"ה לא כל שכן שזה צריך לברך להקב\"ה יותר:"
   },
   {
    "dh": "אינו צריך",
    "text": " — לק\"ו זה ולא גרסי' בדרבי אשר נתן לך זה הטוב והמטיב:"
   },
   {
    "dh": "אלא וברך את לחמך",
    "text": " — ברך על לחמך:"
   },
   {
    "dh": "כי הוא יברך הזבח ואחרי כן יאכלו הקרואים",
    "text": " — למדך שטעון לברך לפני אכילה על הזבח הוא אומר ברוך אשר קדשנו במצותיו וצונו לאכול את הזבח והיכן צונו והבשר תאכל (דברים יב):"
   },
   {
    "dh": "וכל כך למה",
    "text": " — היו מאריכות בדבריהן:"
   },
   {
    "dh": "שאין מלכות נוגעת בחברתה",
    "text": " — לפי ששמואל היה מנהיג את ישראל ושאול היה נוטל את השררה משדבר שמואל אליו ואורך דברים עכב לפי שעה:"
   },
   {
    "dh": "בין מדה טובה",
    "text": " — התורה מדה טובה היא:"
   },
   {
    "dh": "ומלכות בית דוד בבונה ירושלים",
    "text": " — שעל ידו נתקדשה ירושלים:"
   },
   {
    "dh": "צריך שיזכור בה ברית",
    "text": " — בברכת הארץ שעל ידי ברית נתנה לאברהם בפרשת מילה (בראשית י״ז:ח׳) ונתתי לך ולזרעך אחריך את ארץ מגריך:"
   },
   {
    "dh": "צריך שיזכור בה תורה",
    "text": " — שאף בזכות התורה והמצות ירשו את הארץ שנאמר למען תחיון ורביתם ובאתם וירשתם את הארץ (דברים ח׳:א׳):"
   },
   {
    "dh": "צריך שיקדים ברית לתורה",
    "text": " — כגון על בריתך שחתמת בבשרנו ועל תורתך שלמדתנו ועל חיים שחוננתנו:"
   },
   {
    "dh": "תורה נתנה בשלש בריתות",
    "text": " — בשלשה מקומות נתנה התורה לישראל בסיני ובאהל מועד ובהר גרזים ובערבות מואב ובכל אחד נכרתה ברית כדתניא במסכת סוטה (דף לז.) ארור בכלל וארור בפרט וכו' וכן באהל מועד שנא' (דברים כ״ח:ס״ט) אלה דברי הברית אשר צוה ה' את משה לכרות את בני ישראל בארץ מואב מלבד הברית אשר כרת אתם בחורב וכתיב (שם כט) ושמרתם את דברי הברית וגו':"
   }
  ],
  "tosafot": [
   {
    "dh": "מתחיל בנחמה",
    "text": " — פי' הקונטרס לאו דוק' מתחיל בנחמה ומסיים אלא כלומר דאין צריך להזכיר של שבת לא בפתיחה ולא בנחמה אלא באמצע אבל מתחיל ומסיים בנחמת ירושלים כמו בחול שאומר רחם וחותם בבונה ירושלים ויש שמתחילין בנחמנו וחותמים בנחמת ציון עירך ובבנין ירושלים ונותנים טעם לדבריהם דרחם הוי לשון תחנה ואין אומרים תחנונים בשבת אבל נחם אינו לשון תחנונים אלא כמו והנחם על הרעה לעמך (שמות ל״ב:י״ב) ולא נהירא דהכל משמע לשון תחנונים ואין להקפיד אפילו אי הוי לשון בקשה כדאמר בירושלמי דשבת בפרק אלו קשרים מהו לומר רוענו זוננו פרנסנו בשבת א\"ל טופס ברכות כך הוא ומנהג שטות הוא המשנה ברכה של חול:"
   }
  ],
  "translations": []
 },
 {
  "id": "49a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מט",
  "amud": "א",
  "dafEn": "49a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "וזו נתנה בי\"ג בריתות ר' אבא אומר צריך שיאמר בה הודאה תחלה וסוף והפוחת לא יפחות מא' וכל הפוחת מא' הרי זה מגונה וכל החותם מנחיל ארצות בברכת הארץ ומושיע את ישראל בבונה ירושלים הרי זה בור וכל שאינו אומר ברית ותורה בברכת הארץ ומלכות בית דוד בבונה ירושלים לא יצא ידי חובתו מסייע ליה לר' אילעא דא\"ר אילעא א\"ר יעקב בר אחא משום רבינו כל שלא אמר ברית ותורה בברכת הארץ ומלכות בית דוד בבונה ירושלים לא יצא ידי חובתו פליגי בה אבא יוסי בן דוסתאי ורבנן חד אמר הטוב והמטיב צריכה מלכות וחד אמר אינה צריכה מלכות מאן דאמר צריכה מלכות קסבר דרבנן ומאן דאמר אינה צריכה מלכות קסבר דאורייתא: ת\"ר מהו חותם בבנין ירושלים רבי יוסי בר' יהודה אומר מושיע ישראל מושיע ישראל אין בנין ירושלים לא אלא אימא אף מושיע ישראל. רבה בר רב הונא איקלע לבי ריש גלותא פתח בחדא וסיים בתרתי אמר רב חסדא גבורתא למחתם בתרתי והתניא רבי אומר אין חותמין בשתים גופא רבי אומר אין חותמין בשתים איתיביה לוי לרבי על הארץ ועל המזון ארץ דמפקא מזון על הארץ ועל הפירות ארץ דמפקא פירות מקדש ישראל והזמנים ישראל דקדשינהו לזמנים מקדש ישראל וראשי חדשים ישראל דקדשינהו לראשי חדשים מקדש השבת וישראל והזמנים חוץ מזו ומאי שנא הכא חדא היא התם תרתי כל חדא וחדא באפי נפשה וטעמא מאי אין חותמין בשתים לפי שאין עושין מצות חבילות חבילות מאי הוי עלה א\"ר ששת פתח ברחם על עמך ישראל חותם במושיע ישראל פתח ברחם על ירושלים חותם בבונה ירושלים ורב נחמן אמר אפי' פתח ברחם על ישראל חותם בבונה ירושלים משום שנאמר (תהלים קמז, ב) בונה ירושלים ה' נדחי ישראל יכנס אימתי בונה ירושלים ה' בזמן שנדחי ישראל יכנס אמר ליה רבי זירא לרב חסדא ניתי מר ונתני אמר ליה ברכת מזונא לא גמרינא ותנויי מתנינ' אמר ליה מאי האי אמר ליה דאקלעי לבי ריש גלותא ובריכי ברכת מזונא וזקפי רב ששת לקועיה עלי כחויא ואמאי דלא אמרי לא ברית ולא תורה ולא מלכות ואמאי לא אמרת כדרב חננאל אמר רב דאמר רב חננאל אמר רב לא אמר ברית ותורה ומלכות יצא ברית לפי שאינה בנשים תורה ומלכות לפי שאינן לא בנשים ולא בעבדים ואת שבקת כל הני תנאי ואמוראי ועבדת כרב: אמר רבה בב\"ח א\"ר יוחנן הטוב והמטיב צריכה מלכות מאי קמ\"ל כל ברכה שאין בה מלכות לא שמה ברכה והא א\"ר יוחנן חדא זימנא א\"ר זירא לומר שצריכה שתי מלכיות חדא דידה וחדא דבונה ירושלים אי הכי נבעי תלת חדא דידה וחדא דבונה ירושלים וחדא דברכת הארץ אלא ברכת הארץ מאי טעמא לא משום דהויא לה ברכה הסמוכה לחברתה בונה ירושלים נמי לא תבעי דהויא לה ברכה הסמוכה לחברתה ה\"ה דאפילו בונה ירושלים נמי לא בעיא אלא איידי דאמר מלכות בית דוד לאו אורח ארעא דלא אמר מלכות שמים רב פפא אמר הכי קאמר צריכה שתי מלכיות לבר מדידה יתיב רבי זירא אחורי דרב גידל ויתיב רב גידל קמיה דרב הונא ויתיב וקאמר טעה ולא הזכיר של שבת אומר ברוך שנתן שבתות למנוחה לעמו ישראל באהבה לאות ולברית ברוך מקדש השבת אמר ליה מאן אמרה רב הדר יתיב וקאמר טעה ולא הזכיר של יום טוב אומר ברוך שנתן ימים טובים לעמו ישראל לשמחה ולזכרון ברוך מקדש ישראל והזמנים א\"ל מאן אמרה רב הדר יתיב וקאמר טעה ולא הזכיר של ראש חודש אומר ברוך שנתן ראשי חדשים לעמו ישראל לזכרון ולא ידענא אי אמר בה שמחה אי לא אמר בה שמחה אי חתים בה אי לא חתים בה אי דידיה אי דרביה גידל בר מניומי הוה קאי קמיה דרב נחמן טעה רב נחמן",
  "rashi": [
   {
    "dh": "מילה נתנה בי\"ג בריתות",
    "text": " — בפרשת מילה שנתנה לאברהם אבינו הם כתובים:"
   },
   {
    "dh": "תחלה וסוף",
    "text": " — נודה ה' אלהינו ועל כולם ה' אלהינו אנו מודים לך:"
   },
   {
    "dh": "מ\"ד צריכה מלכות קסבר דרבנן",
    "text": " — הלכך לאו ברכה הסמוכה לחברתה היא שאינה מברכת הארץ:"
   },
   {
    "dh": "ומ\"ד אינה צריכה מלכות קסבר דאורייתא היא",
    "text": " — ומברכת הארץ היא כדאמר לעיל (ברכות ד' מח:) אשר נתן לך זה הטוב והמטיב והויא לה ברכה הסמוכה לחברתה ומיהו פותח בה בברוך לפי שפתיחתה היא חתימתה שכולה הודאה אחת היא ואינה הפסקה ודומה לברכת הפירות והמצות:"
   },
   {
    "dh": "בונה ירושלים לא",
    "text": " — בתמיה אם חתם בונה ירושלים לאו חתימה היא הלא עיקר ברכה דירושלים היא:"
   },
   {
    "dh": "אלא אימא אף מושיע",
    "text": " — אם בא לחתום מושיע ישראל ולא חתם בונה ירושלים יצא שתשועת ישראל היא בנין ירושלים:"
   },
   {
    "dh": "פתח בחדא",
    "text": " — כשהתחיל בברכה לא אמר רחם ה' על ישראל עמך ועל ירושלים עירך אלא אחת מהן וכשחתם חתם בשתים מושיע ישראל ובונה ירושלים:"
   },
   {
    "dh": "אין חותמין בשתים",
    "text": " — שדומין לעושין מצות חבילות כי היכי דאמר (פסחים קב:) אין אומר ב' קדושות על כוס אחד:"
   },
   {
    "dh": "מקדש השבת וישראל והזמנים",
    "text": " — והכא ליכא למימר ישראל מקדשי לשבת וזמנים דאילו זמנים תלויין בב\"ד לקדש חדשים ע\"פ הראייה אבל שבת קדישא וקיימא:"
   },
   {
    "dh": "חוץ מזו ומ\"ש הכא חדא היא",
    "text": " — אין כאן אלא ברכת מקדש שמברך להקב\"ה שמקדש השבת והזמנים אבל מושיע ישראל ובונה ירושלים תרתי מילי נינהו ואין כוללים ב' דברים בברכה אחת ולא גרס הא בהא תליא ובה\"ג גרס הכי חוץ מזו ומ\"ש הני תרתי קדושי נינהו ומודה רבי דחתמינן בהו בשתים אבל נחמה חדא מילתא היא ובחדא בעי למחתם ואינו נ\"ל דא\"כ אית ליה לרבי חותמין בשתים והכא ה\"ט דהא בהא תליא ולא היה לו לכלול ולומר אין חותמין בשתים ועוד רבי כי אמרה לאו אנחמה אמרה:"
   },
   {
    "dh": "פתח בעל עמך ישראל כו'",
    "text": " — דבעינן חתימה מעין פתיחה:"
   },
   {
    "dh": "ור\"נ כו'",
    "text": " — בונה ירושלים תשועת ישראל היא דכתיב (תהילים קמ״ז:ב׳) בונה ירושלים ה' ואז נדחי ישראל יכנס:"
   },
   {
    "dh": "לאו אורח ארעא דלא אמר מלכות שמים",
    "text": " — בבונה ירושלים הלכך מהדר לה בהטוב והמטיב (ואומר מלך העולם הטוב והמטיב):"
   },
   {
    "dh": "שתי מלכיות",
    "text": " — כגון אבינו מלכנו אדירנו בוראנו גואלנו קדושנו קדוש יעקב רוענו רועה ישראל המלך הטוב והמטיב לכל וכו':"
   },
   {
    "dh": "לבר מדידה",
    "text": " — שפותחת ברוך אתה ה' אלהינו מלך העולם וכו':"
   },
   {
    "dh": "ויתיב רב גידל וקאמר טעה כו' א\"ל",
    "text": " — רב הונא לרב גידל מאן אמרה:"
   },
   {
    "dh": "ולא ידענא",
    "text": " — רבי זירא קאמר לה לא ידענא אי אמר רב גידל לזכרון ולשמחה אי לא אמר לשמחה ואי אמרה משמיה דרב אי לא אמרה:"
   },
   {
    "dh": "אי חתים בה",
    "text": " — מקדש ישראל וראשי חדשים אי לא חתים:"
   }
  ],
  "tosafot": [
   {
    "dh": "ברית ותורה",
    "text": " — אין צריך להזכיר ברית ותורה וחיים ומזון דדי להזכיר על בריתך שחתמת בבשרנו ועל תורתך שלמדתנו וכו' דהיינו ברית ותורה והגמרא לסימנא בעלמא נקטיה:"
   },
   {
    "dh": "מאן דאמר אינה צריכה מלכות קסבר דאורייתא",
    "text": " — הקשה רש\"י הואיל והיא דאורייתא אמאי פותחת בברוך הא סמוכה היא ותירץ דקצרה היא והויא הודאה בעלמא כברכת פירות וכברכת מצות ותימה אמאי שינו אותה יותר משאר ברכות הסמוכות שחותמות ולא פותחות הואיל ודאורייתא היא היה לנו להאריך בה ולחתום בברוך ולא לשנות משאר סמוכות וי\"ל דאין ה\"נ ולמאן דאית ליה שהיא דאורייתא היה חותם ולא פותח וכן איתא בתוספתא [פ\"א] בהדיא ר' יוסי הגלילי היה מאריך בה וחותם ומיהו אנן קי\"ל שהיא מדרבנן ולכך צריכה מלכות כדאמר צריכה שתי מלכיות בר מדידה:"
   },
   {
    "dh": "לומר שצריכה ב' מלכיות בר מדידה",
    "text": " — חדא דבונה ירושלים דלאו אורח וכו' וגם בה אין יכולין לומר מלכות דהא סמוכה היא ע\"כ אומרה בהטוב והמטיב והואיל ואמר בה מלכות דבונה ירושלים דלאו אורח ארעא וכו' אמר נמי דברכת הארץ אע\"פ שהיא סמוכה לחברתה הואיל ולא נתקנו בזה אחר זה דיהושע תקן ברכת הארץ ומשה תקן ברכת הזן מש\"ה נקט מלכות דלא הוי סמוכות ומיהו אנן הואיל ונתקנו על הסדר אין אנו פותחין בברוך ויש שנוהגין לומר בבונה ירושלים מלכות:"
   },
   {
    "dh": "ברוך שנתן שבתות למנוחה וכו'",
    "text": " — וא\"ת והא סמוכה היא וי\"ל הואיל ולא נתקנה שם אלא לאומרה לפרקים כששכח רצה והחליצנו אין זה קרוי סמוכה וצריך פתיחה בברוך ובברכות של י\"ח ברכות כולם סמוכות לברכות אל חי וקים אי נמי אלהי אברהם היינו מלכות כדאמרינן (לעיל ברכות ד' ז:) משנברא העולם לא היה אדם שקראו להקב\"ה אדון עד שבא אברהם וקראו אדון שנא' אדני אלהים מה תתן לי (בראשית ט״ו:ב׳) ואם הוא י\"ט כולל ואומר ברוך שנתן שבתות למנוחה וי\"ט לעמו ישראל לשמחה וכן כי מקלע שבת ור\"ח:"
   }
  ],
  "translations": []
 },
 {
  "id": "49b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "מט",
  "amud": "ב",
  "dafEn": "49b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "והדר לרישא אמר ליה מאי טעמא עביד מר הכי אמר ליה דאמר רבי שילא אמר רב טעה חוזר לראש והא אמר רב הונא אמר רב טעה אומר ברוך שנתן אמר ליה לאו איתמר עלה אמר רב מנשיא בר תחליפא אמר רב לא שנו אלא שלא פתח בהטוב והמטיב אבל פתח בהטוב והמטיב חוזר לראש אמר רב אידי בר אבין אמר רב עמרם אמר רב נחמן אמר שמואל טעה ולא הזכיר של ראש חדש בתפלה מחזירין אותו בברכת המזון אין מחזירין אותו אמר ליה רב אבין לרב עמרם מאי שנא תפלה ומאי שנא ברכת המזון אמר ליה אף לדידי קשיא לי ושאילתיה לרב נחמן ואמר לי מיניה דמר שמואל לא שמיע לי אלא נחזי אנן תפלה דחובה היא מחזירין אותו ברכת מזונא דאי בעי אכיל אי בעי לא אכיל אין מחזירין אותו אלא מעתה שבתות וימים טובים דלא סגי דלא אכיל הכי נמי דאי טעי הדר אמר ליה אין דאמר רבי שילא אמר רב טעה חוזר לראש והא אמר רב הונא אמר רב טעה אומר ברוך שנתן לאו איתמר עלה לא שנו אלא שלא פתח בהטוב והמטיב אבל פתח בהטוב והמטיב חוזר לראש: עד כמה מזמנין וכו': למימרא דרבי מאיר חשיב ליה כזית ורבי יהודה כביצה והא איפכא שמעינן להו דתנן וכן מי שיצא מירושלים ונזכר שהיה בידו בשר קדש אם עבר צופים שורפו במקומו ואם לאו חוזר ושורפו לפני הבירה מעצי המערכה עד כמה הם חוזרים רבי מאיר אומר זה וזה בכביצה ורבי יהודה אומר זה וזה בכזית אמר רבי יוחנן מוחלפת השיטה אביי אמר לעולם לא תיפוך הכא בקראי פליגי ר' מאיר סבר ואכלת זו אכילה ושבעת זו שתיה ואכילה בכזית ורבי יהודה סבר ואכלת ושבעת אכילה שיש בה שביעה ואיזו זו כביצה התם בסברא פליגי ר' מאיר סבר חזרתו כטומאתו מה טומאתו בכביצה אף חזרתו בכביצה ור' יהודה סבר חזרתו כאיסורו מה איסורו בכזית אף חזרתו בכזית:  כיצד מזמנין בשלשה אומר נברך בשלשה והוא אומר ברכו בעשרה אומר נברך אלהינו בעשרה והוא אומר ברכו אחד עשרה ואחד עשרה רבוא במאה הוא אומר נברך ה' אלהינו במאה והוא אומר ברכו ובאלף הוא אומר נברך לה' אלהינו אלהי ישראל באלף והוא אומר ברכו ברבוא אומר נברך לה' אלהינו אלהי ישראל אלהי צבאות יושב הכרובים על המזון שאכלנו ברבוא והוא אומר ברכו כענין שהוא מברך כך עונים אחריו ברוך ה' אלהינו אלהי ישראל אלהי צבאות יושב הכרובים על המזון שאכלנו ר' יוסי הגלילי אומר לפי רוב הקהל הם מברכים שנאמר (תהלים סח, כז) במקהלות ברכו אלהים ה' ממקור ישראל אמר ר' עקיבא מה מצינו בבית הכנסת אחד מרובים ואחד מועטים אומר ברכו את ה' רבי ישמעאל אומר ברכו את ה' המבורך: גמ׳ אמר שמואל לעולם אל יוציא אדם את עצמו מן הכלל תנן בשלשה והוא אומר ברכו אימא",
  "rashi": [
   {
    "dh": "והדר לרישא",
    "text": " — לתחלת ברכת המזון כדאמרינן (לעיל ברכות דף כט:) גבי תפלה עקר את רגליו חוזר לראש התם הוא דאיכא עקירת רגלים אבל הכא סיום הברכה הוא עקירת רגלים:"
   },
   {
    "dh": "מי שיצא מירושלים",
    "text": " — לעיל מיניה מיירי ההולך לשחוט את פסחו ונזכר שיש לו חמץ בתוך ביתו אם יכול לחזור ולבער ולחזור למצותו יחזור ויבער ואם לאו יבטל בלבו וכן מי שיצא מירושלים ונזכר שיש בידו בשר קודש ונפסל ביציאתו חוץ לחומה:"
   },
   {
    "dh": "אם עבר צופים",
    "text": " — מקום שיכול לראות בהמ\"ק:"
   },
   {
    "dh": "לפני הבירה",
    "text": " — מקום בהר הבית שיש שם בית הדשן גדול ששורפין פסולי קדשים קלים כדאמרינן בזבחים בפרק טבול יום (זבחים דף קד:):"
   },
   {
    "dh": "זה וזה",
    "text": " — חמץ ובשר קודש:"
   },
   {
    "dh": "חזרתו כטומאתו גרסינן",
    "text": " — שיעור חזרתו כשיעור טומאתו מידי דחשיב לענין טומאה חשיב זה לענין חזרה:"
   },
   {
    "dh": "מתני' בשלשה והוא אומר ברכו",
    "text": " — דהא בלאו דידיה איכא זימון וכן כולם:"
   },
   {
    "dh": "אחד עשרה ואחד עשרה רבוא",
    "text": " — כלומר הכל שוה משראויים להזכיר את השם אין צריכין לשנות ובגמ' פריך הא קתני סיפא במאה והוא אומר כו':"
   },
   {
    "dh": "לפי רוב הקהל הם מברכים",
    "text": " — כמו שאמר שיש חילוק בין מאה לעשרה ובין מאה לאלף ובין אלף לרבוא והא דקתני אחד עשרה ואחד עשרה רבוא ר\"ע היא דאמר מה מצינו בבית הכנסת משהגיעו לעשרה אין חילוק בין רבים בין מועטים אף כאן אין חילוק הכי מוקי לה בגמרא:"
   },
   {
    "dh": "גמ' אל יוציא את עצמו",
    "text": " — אע\"פ שבארבעה הוא רשאי לומר לשלשה ברכו טוב לו שיאמר נברך ואל יוציא עצמו מכלל המברכים:"
   },
   {
    "dh": "תנן בשלשה והוא אומר ברכו",
    "text": " — אלמא הכי עדיף כלומר רבים אתם ואפילו איני עמכם:"
   }
  ],
  "tosafot": [
   {
    "dh": "אי בעי אכיל ואי בעי לא אכיל",
    "text": " — וא\"ת והא הוי ר\"ח מיומי דלא להתענות בהון במגילת תענית וי\"ל דה\"פ אי בעי אכיל ואי בעי לא אכיל פת שחייבנו בברכת המזון אבל ביום טוב צריך לאכול פת ותימה דאמרינן בסוכה (פ\"ב דף כז.) אי בעי אכיל ואי בעי לא אכיל חוץ מלילה הראשונה דיליף ט\"ו ט\"ו מחג המצות וי\"ל דה\"פ שאינו צריך לאכול בסוכה אם לא ירצה אבל בשביל יו\"ט צריך לאכול וא\"ת מנ\"מ אם צריך לאכול בשביל יו\"ט או בשביל סוכות ומיהו אומר רבינו יהודה דנפקא מינה כגון שירדו גשמים ואכלו חוץ לסוכה דהשתא אם לכבוד יו\"ט שפיר אבל אם בשביל סוכה ביו\"ט ראשון צריך לחזור ולאכול בסוכה לאחר שיפסקו הגשמים דילפינן ט\"ו ט\"ו מחג המצות אבל בשאר ימים אינו צריך והא דאמרינן בפרק אלו דברים (פסחים ד' סח:) מר בריה דרבינא הוה יתיב בתעניתא כולה שתא משמע שהיה מתענה ביום טוב מפרש ר\"י דבתענית חלום קאמר אבל בשאר תעניות אסור וסעודה שלישית של שבת היה מסופק ר\"י דשמא אי בעי לא אכיל אלא מיני תרגימא כדפי' ר\"ת כדאמרי' בסעודת סוכה ומיהו בכתובות פרק אע\"פ (כתובות דף סד:) חשיב גבי משרה אשתו על ידי שליש שלש סעודות משל שבת א\"כ משמע דכולן שוות ועוד כיון דילפינן ממן אלמא דשוות הן ומיהו אם אכל סעודה רביעית ושכח של שבת לא הדר לרישא דודאי אי בעי לא אכיל הך סעודה רביעית כלל:"
   },
   {
    "dh": "אי בעי אכיל ואי בעי לא אכיל. וא\"ת והא הוי ר\"ח מיומי דלא להתענות בהון במגילת תענית וי\"ל דה\"פ אי בעי אכיל ואי בעי לא אכיל פת שחייבנו בברכת המזון אבל ביום טוב צריך לאכול פת ותימה דאמרינן בסוכה (פ\"ב דף כז.) אי בעי אכיל ואי בעי לא אכיל חוץ מלילה הראשונה דיליף ט\"ו ט\"ו מחג המצות וי\"ל דה\"פ שאינו צריך לאכול בסוכה אם לא ירצה אבל בשביל יו\"ט צריך לאכול וא\"ת מנ\"מ אם צריך לאכול בשביל יו\"ט או בשביל סוכות ומיהו אומר רבינו יהודה דנפקא מינה כגון שירדו גשמים ואכלו חוץ לסוכה דהשתא אם לכבוד יו\"ט שפיר אבל אם בשביל סוכה ביו\"ט ראשון צריך לחזור ולאכול בסוכה לאחר שיפסקו הגשמים דילפינן ט\"ו ט\"ו מחג המצות אבל בשאר ימים אינו צריך והא דאמרינן בפרק אלו דברים (פסחים ד' סח:) מר בריה דרבינא הוה יתיב בתעניתא כולה שתא משמע שהיה מתענה ביום טוב מפרש ר\"י דבתענית חלום קאמר אבל בשאר תעניות אסור וסעודה שלישית של שבת היה מסופק ר\"י דשמא אי בעי לא אכיל אלא מיני תרגימא כדפי' ר\"ת כדאמרי' בסעודת סוכה ומיהו בכתובות פרק אע\"פ (כתובות דף סד:) חשיב גבי משרה אשתו על ידי שליש שלש סעודות משל שבת א\"כ משמע דכולן שוות ועוד כיון דילפינן ממן אלמא דשוות הן ומיהו אם אכל סעודה רביעית ושכח של שבת לא הדר לרישא דודאי אי בעי לא אכיל הך סעודה רביעית כלל",
    "text": ""
   },
   {
    "dh": "עד כמה מזמנין וכו'. ה\"ה ברכת המזון בלא זימון אלא רבותא אשמעינן דאפילו על כזית מזמנין",
    "text": ""
   },
   {
    "dh": "אם עבר צופים",
    "text": " — פירש\"י בפסחים (פ\"ג ד' מט.) מקום ששמו צופים ול\"נ דא\"כ ה\"ל למימר וכמדתו לכל רוח כדקאמר התם [צג:] גבי מודיעים ולפנים אלא י\"ל שאינו מקום וצופים הוי לשון ראיה וה\"פ אם הרחיק מירושלים כ\"כ שאינו יכול לראות ירושלים שורפו במקומו:"
   },
   {
    "dh": "רבי מאיר סבר ואכלת זו אכילה ואכילה בכזית",
    "text": " — ואומר הר\"י דהני קראי אסמכתא בעלמא נינהו דמדאורייתא בעינן שביעה גמורה כדאמר פרק מי שמתו (ברכות ד' כ:) וכי לא אשא פנים לישראל וכו' וכן אמרינן התם בן מברך לאביו ומוקים לה במאן דאכיל שיעורא דרבנן ופירש\"י היינו כזית או כביצה ועוד אי כזית או כביצה הוי דאורייתא איזה שיעור דרבנן. וקי\"ל בכזית דלפי מה שמחליף רבי יוחנן קאמר רבי יהודה בכזית ור' מאיר ורבי יהודה הלכה כרבי יהודה וגם לאביי דלא מחליף ור\"מ אית ליה עד כזית נראה דהלכה כר\"מ בכזית אף על גב דבעלמא ר\"מ ורבי יהודה הלכה כרבי יהודה בהא הלכה כר\"מ דהא קים ליה ר' יוחנן בשיטתו לעיל דאינו מוציא רבים ידי חובתן עד שיאכל כזית וכן לעיל גבי שאכל כזית מליח וכן פסק בה\"ג ור\"ח ושאלתות ולענין שתיה אומר ר\"י דיש להחמיר ולברך עליו אפילו בפחות ממלא לוגמיו אף על גב דלענין יום הכפורים ליתא לא ילפינן מינה לענין ברכה תדע דלענין ברכת המזון בכזית ולענין יום הכפורים עד דהוי דוקא ככותבת:"
   },
   {
    "dh": "נברך אלהינו גרסינן ולא גרסינן נברך לאלהינו בלמ\"ד דדוקא גבי שיר והודאה כתיב למ\"ד כמו שירו לה' הודו לה' גדלו לה' אבל גבי ברכה לא מצינו זה הלשון וכן מפורש בסדר רב עמרם",
    "text": ""
   },
   {
    "dh": "אמר ר\"ע מה מצינו בבית הכנסת אחד עשרה וכו'",
    "text": " — משמע דרבי יוסי הגלילי מודה בבית הכנסת מדקאמר מה מצינו וכו' כלומר שאתה מודה לי ומאי שנא דפליגי בברכת המזון ומודו בבית הכנסת ויש לומר דודאי לא חלקו בין עשרה למאה בתפלה דאלו נכנסים ואלו יוצאים ולאו אדעתיה דש\"צ אבל בברכת המזון שהן קבועין ומעורבין שם יחד אין לטעות בזה שאין יוצאין עד לאחר ברכת המזון:"
   },
   {
    "dh": "לעולם אל יוציא אדם את עצמו מן הכלל",
    "text": " — ופריך בירושלמי מן הקורא בתורה ומן החזן שאומר ברכו ומפרש כיון שאומר המבורך אין זה מוציא עצמו מן הכלל:"
   },
   {
    "dh": "תנן בשלשה והוא אומר ברכו",
    "text": " — ס\"ד השתא דברכו עדיף משום דברכו היינו צווי לברך את השם אבל נברך אינו אלא נטילת רשות:"
   }
  ],
  "translations": []
 },
 {
  "id": "50a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נ",
  "amud": "א",
  "dafEn": "50a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אף ברכו ומ\"מ נברך עדיף דאמר רב אדא בר אהבה אמרי בי רב תנינא ו' נחלקין עד י' אי אמרת בשלמא נברך עדיף מש\"ה נחלקין אלא א\"א ברכו עדיף אמאי נחלקין אלא לאו ש\"מ נברך עדיף ש\"מ תניא נמי הכי בין שאמר ברכו בין שאמר נברך אין תופסין אותו על כך והנקדנין תופסין אותו על כך ומברכותיו של אדם ניכר אם ת\"ח הוא אם לאו כיצד רבי אומר ובטובו הרי זה ת\"ח ומטובו ה\"ז בור א\"ל אביי לרב דימי והכתיב (ש\"ב ז, כט) ומברכתך יברך (את) בית עבדך לעולם בשאלה שאני בשאלה נמי הכתיב (תהלים פא, יא) הרחב פיך ואמלאהו ההוא בד\"ת כתיב תניא רבי אומר בטובו חיינו הרי זה ת\"ח חיים הרי זה בור נהרבלאי מתני איפכא ולית הלכתא כנהרבלאי אמר רבי יוחנן נברך שאכלנו משלו הרי זה ת\"ח למי שאכלנו משלו הרי זה בור אמר ליה רב אחא בריה דרבא לרב אשי והא אמרינן למי שעשה לאבותינו ולנו את כל הנסים האלו א\"ל התם מוכחא מילתא מאן עביד ניסי קודשא ב\"ה א\"ר יוחנן ברוך שאכלנו משלו הרי זה ת\"ח על המזון שאכלנו הרי זה בור א\"ר הונא בריה דרב יהושע לא אמרן אלא בג' דליכא שם שמים אבל בעשרה דאיכא שם שמים מוכחא מילתא כדתנן כענין שהוא מברך כך עונין אחריו ברוך ה' אלהי ישראל אלהי הצבאות יושב הכרובים על המזון שאכלנו: אחד עשרה ואחד עשרה רבוא: הא גופא קשיא אמרת אחד עשרה ואחד עשרה רבוא אלמא כי הדדי נינהו והדר קתני במאה אומר באלף אומר ברבוא אומר אמר רב יוסף לא קשיא הא ר' יוסי הגלילי הא ר\"ע דתנן ר' יוסי הגלילי אומר לפי רוב הקהל הם מברכין שנאמר (תהלים סח, כז) במקהלות ברכו אלהים: אר\"ע מה מצינו בבית הכנסת וכו': ור\"ע האי קרא דרבי יוסי הגלילי מאי עביד ליה מיבעי ליה לכדתניא היה ר' מאיר אומר מנין שאפי' עוברין שבמעי אמן אמרו שירה על הים שנאמר במקהלות ברכו אלהים ה' ממקור ישראל ואידך ממקור נפקא אמר רבא הלכה כר\"ע רבינא ורב חמא בר בוזי אקלעו לבי ריש גלותא קם רב חמא וקא מהדר אבי מאה א\"ל רבינא לא צריכת הכי אמר רבא הלכה כר\"ע אמר רבא כי אכלינן רפתא בי ריש גלותא מברכינן ג' ג' וליברכו י' י' שמע ריש גלותא ואיקפד וניפקו בברכתא דריש גלותא איידי דאוושו כ\"ע לא שמעי אמר רבה תוספאה הני ג' דכרכי רפתא בהדי הדדי וקדים חד מינייהו ובריך לדעתיה אינון נפקין בזמון דידיה איהו לא נפיק בזמון דידהו לפי שאין זמון למפרע: ר' ישמעאל אומר: רפרם בר פפא איקלע לבי כנישתא דאבי גיבר קם קרא בספרא ואמר ברכו את ה' ואשתיק ולא אמר המבורך אוושו כ\"ע ברכו את ה' המבורך אמר רבא פתיא אוכמא בהדי פלוגתא למה לך ועוד הא נהוג עלמא כרבי ישמעאל:  ג' שאכלו כאחת אינן רשאין ליחלק וכן ד' וכן חמשה ו' נחלקין עד עשרה ועשרה אין נחלקין עד כ' שתי חבורות שהיו אוכלות בבית אחד בזמן שמקצתן רואין אלו את אלו הרי אלו מצטרפין לזמון ואם לאו אלו מזמנין לעצמן ואלו מזמנין לעצמן אין מברכין על היין עד שיתן לתוכו מים דברי ר' אליעזר וחכ\"א מברכין: גמ׳ מאי קמ\"ל תנינא חדא זימנא ג' שאכלו כאחת חייבין לזמן הא קמ\"ל כי הא דאמר רבי אבא אמר שמואל ג' שישבו לאכול כאחת ועדיין לא אכלו אינן רשאין ליחלק ל\"א אמר רבי אבא אמר שמואל הכי קתני ג' שישבו לאכול כאחת אע\"פ שכל אחד ואחד אוכל מככרו אינן רשאין ליחלק אי נמי כי הא דרב הונא דאמר רב הונא ג' שבאו מג' חבורות אינן רשאין ליחלק אמר רב חסדא והוא שבאו מג' חבורות של ג' בני אדם אמר רבא",
  "rashi": [
   {
    "dh": "אף ברכו",
    "text": " — שפיר דמי ומיהו טוב לו להיות בכלל המברכים:"
   },
   {
    "dh": "תנינא",
    "text": " — סיעתא לשמואל:"
   },
   {
    "dh": "ששה נחלקין",
    "text": " — אם רצו ליחלק לשתי חבורות ולזמן אלו לעצמן ואלו לעצמן רשאין הן שהרי יש זימון כאן וכאן:"
   },
   {
    "dh": "עד עשרה",
    "text": " — כלומר וכן ז' וכן ח' לשתי חבורות וכן ט' לשתי חבורות או לשלשה עד עשרה אבל אם היו עשרה חלה עליהן הזכרת השם ואם יחלקו לא יהיה שם הזכרה אין נחלקין עד שיהיו שם עשרים:"
   },
   {
    "dh": "ה\"ג ואי אמרת ברכו עדיף אמאי ששה נחלקין",
    "text": " — אם ירצו הא מעיקרא יכולין לומר ברכו והשתא תו לא אמרי:"
   },
   {
    "dh": "אלא לאו ש\"מ",
    "text": " — אף ברכו קאמר מתני' וכיון דמתני' אף ברכו קאמר מסתברא היא שטוב לו לאדם להיות מן המברכים וסייעתא דשמואל וגירסא הכי איתא ששה עד עשרה ואי אמרת ברכו דוקא אמאי ששה נחלקין אלא לאו ש\"מ אף ברכו ש\"מ:"
   },
   {
    "dh": "תנ\"ה",
    "text": " — דמתני' אף ברכו קאמר:"
   },
   {
    "dh": "והנקדנין",
    "text": " — דווקנין תופסין אותו על שהוציא עצמו מן הכלל:"
   },
   {
    "dh": "ומטובו הרי זה בור",
    "text": " — שממעט בתגמוליו של מקום דמשמע דבר מועט כדי חיים:"
   },
   {
    "dh": "בשאלה שאני",
    "text": " — שהשואל שואל כעני על פתח שאינו מרים ראש לשאול שאלה גדולה:"
   },
   {
    "dh": "הרחב פיך",
    "text": " — לשאול כל תאותך:"
   },
   {
    "dh": "חיים ה\"ז בור",
    "text": " — דהוציא עצמו מן הכלל:"
   },
   {
    "dh": "מתני איפכא",
    "text": " — חיים עדיף שכולל את כל באי עולם:"
   },
   {
    "dh": "נברך שאכלנו משלו",
    "text": " — משמע שהוא יחידי שהכל אוכלים משלו:"
   },
   {
    "dh": "למי שאכלנו משלו",
    "text": " — משמע מרובים הן זה זן את זה וזה זן את זה ולפי דבריו מברך את בעל הבית:"
   },
   {
    "dh": "התם מוכחא מילתא",
    "text": " — דבמעשה נסים ליכא למימר מרובין:"
   },
   {
    "dh": "כדתנן על המזון שאכלנו",
    "text": " — ולא קתני משלו:"
   },
   {
    "dh": "ואידך",
    "text": " — עוברים ממקור נפקא ואנן ממקהלות דרשינן:"
   },
   {
    "dh": "הלכה כר\"ע",
    "text": " — בבהמ\"ז דאחד עשרה ואחד עשרה רבוא:"
   },
   {
    "dh": "מברכינן תלתא תלתא",
    "text": " — ריש גלותא מאריך בסעודתו ואנן כל ג' וג' שגמרו סעודתן מזמנין בקול נמוך ויושבין אחר הברכה עד שגמר ריש גלותא ויזמנו הוא והיושבין אצלו בקול רם ולקמן פריך וניפקו בברכה דריש גלותא:"
   },
   {
    "dh": "שמע ריש גלותא",
    "text": " — אם היו מזמנין י' י' היה צריך המברך להגביה קולו וישמע ריש גלותא ויחרה לו שאנו עושין חבורה לעצמנו בפרהסיא אע\"ג דמפקי נפשייהו מידי זמון של הזכרת השם וכי הדר מזמן ריש גלותא בהזכרת השם לאו אינהו נפקי ביה כדאמר רבה תוספאה דאין זמון למפרע אפ\"ה ניחא להו בהכי משום דאוושי כולי עלמא שהיו שם מסובין רבים ואין קול המברך נשמע:"
   },
   {
    "dh": "ובריך לדעתיה",
    "text": " — לעצמו בלא זימון:"
   },
   {
    "dh": "למפרע",
    "text": " — משבירך וידי זמון לא יצא:"
   },
   {
    "dh": "פתיא",
    "text": " — כלי חרס כדאמר (ע\"ז ד' לג:) הני פתיותא דבי מכסי:"
   },
   {
    "dh": "בהדי פלוגתא למה לך",
    "text": " — טוב לך לאחוז דברי רבי ישמעאל שאף ר\"ע מודה דכי אמר המבורך טפי עדיף אלא שאין צריך:"
   },
   {
    "dh": "מתני' אינן רשאין ליחלק",
    "text": " — דאיתחייבו להו בזמון:"
   },
   {
    "dh": "וכן ד'",
    "text": " — אין הג' מזמנין והיחיד יחלק מהם דאיהו נמי איקבע בחובת זמון:"
   },
   {
    "dh": "ששה נחלקים",
    "text": " — כדי זמון לכאן וכדי זמון לכאן:"
   },
   {
    "dh": "עד עשרה",
    "text": " — אבל עשרה אין נחלקים דאיתחייבו להו בזמון הזכרת השם עד שיהא עשרים ואז יחלקו אם ירצו לשתי חבורות:"
   },
   {
    "dh": "גמ' ג' שבאו משלש חבורות",
    "text": " — וכדמסיים רב חסדא שבאו מג' חבורות של ג' בני אדם בכל חבורה ונתחייבו אלו בזמון ועמד אחד מכל חבורה ונצטרפו שלשה לחבורה אחת חייבין לזמן ואינן רשאין ליחלק שכבר הוקבעו ואפילו לא אכלו אלו השלשה משנצטרפו יחד שכבר גמרו סעודתן עם הראשונים:"
   }
  ],
  "tosafot": [
   {
    "dh": "אלא ש\"מ נברך עדיף",
    "text": " — לאו דוקא עדיף אלא כי הדדי נינהו ועדיף היינו חשוב כמו הקישא עדיף וג\"ש עדיף פ' איזהו מקומן (זבחים ד' מח.) ר\"ל דההיקש חשוב ואין לבטלו מפני הג\"ש וה\"נ קאמר נברך חשוב כמו ברכו ולפיכך לא יוציא עצמו מן הכלל והקונטרס מוחק עדיף ומיהו אתי שפיר עדיף כדפי':"
   },
   {
    "dh": "שמש מצרפן לזמון",
    "text": " — וה\"ה בשני בתים ובני אדם עומדים ומשמשין מזו לזו מצטרפין וכן איתא בירושלמי ובלבד שישמעו ברכת המזון מפי המברך והא דנקט במתני' בית [אחד] משום חדוש דסיפא דאפילו בבית אחד אם לאו אין מזמנין וכן בבית חתנים כשאוכלים בחופה בב' בתים ובני אדם משמשין מזו לזו מצטרפין ובלבד שישמעו ברכת המזון מפי המברך:"
   },
   {
    "dh": "על המזון הרי זה בור",
    "text": " — דמשמע דמברך לבעל הבית המאכילו דאי לרחמנא למה הוא מזכיר מזון בלא מזון יש הרבה לברכו:"
   },
   {
    "dh": "אמר רבא הלכה כר\"ע",
    "text": " — פירש ר\"ח דהכי קיי\"ל והלכך בין בעשרה בין במאה בין ברבוא אומר נברך אלהינו על המזון שאכלנו אבל בג' לא יזכיר על המזון כדאמר לעיל וגם בעשרה אם אינו רוצה להזכיר על המזון הרשות בידו ואומר ובטובו חיינו:"
   },
   {
    "dh": "שלשה שישבו לאכול כאחד",
    "text": " — אף על פי שהיו חלוקין בככר שכל אחד ואחד אוכל מככרו אינן רשאין ליחלק כלומר אף על פי שהן חלוקין בככרות וס\"ד אין זה צרוף ולא חל עליהם חובת זימון אפ\"ה אינן רשאין ליחלק:"
   }
  ],
  "translations": []
 },
 {
  "id": "50b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נ",
  "amud": "ב",
  "dafEn": "50b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ולא אמרן אלא דלא אקדימו הנך ואזמון עלייהו בדוכתייהו אבל אזמון עלייהו בדוכתייהו פרח זימון מינייהו אמר רבא מנא אמינא לה דתנן מטה שנגנבה חציה או שאבדה חציה או שחלקוה אחין או שותפין טהורה החזירוה מקבלת טומאה מכאן ולהבא מכאן ולהבא אין למפרע לא אלמא כיון דפלגוה פרח לה טומאה מינה ה\"נ כיון דאזמון עלייהו פרח זימון מינייהו: ב' חבורות וכו': תנא אם יש שמש ביניהם שמש מצרפן: אין מברכין על היין: ת\"ר יין עד שלא נתן לתוכו מים אין מברכין עליו ב\"פ הגפן אלא בורא פרי העץ ונוטלין ממנו לידים משנתן לתוכו מים מברכין עליו בורא פרי הגפן ואין נוטלין ממנו לידים דברי ר\"א וחכ\"א בין כך ובין כך מברכין עליו ב\"פ הגפן ואין נוטלין הימנו לידים כמאן אזלא הא דאמר שמואל עושה אדם כל צרכיו בפת כמאן כר' אליעזר א\"ר יוסי ברבי חנינא מודים חכמים לר\"א בכוס של ברכה שאין מברכין עליו עד שיתן לתוכו מים מ\"ט אמר רב אושעיא בעינן מצוה מן המובחר ורבנן למאי חזי א\"ר זירא חזי לקורייטי ת\"ר ד' דברים נאמרו בפת אין מניחין בשר חי על הפת ואין מעבירין כוס מלא על הפת ואין זורקין את הפת ואין סומכין את הקערה בפת אמימר ומר זוטרא ורב אשי כרכו ריפתא בהדי הדדי אייתי לקמייהו תמרי ורמוני שקל מר זוטרא פתק לקמיה דרב אשי דסתנא א\"ל לא סבר לה מר להא דתניא אין זורקין את האוכלין ההיא בפת תניא והתניא כשם שאין זורקין את הפת כך אין זורקין את האוכלין א\"ל והתניא אף על פי שאין זורקין את הפת אבל זורקין את האוכלין אלא לא קשיא הא במידי דממאיס הא במידי דלא ממאיס ת\"ר ממשיכין יין בצנורות לפני חתן ולפני כלה וזורקין לפניהם קליות ואגוזים בימות החמה אבל לא בימות הגשמים אבל לא גלוסקאות לא בימות החמה ולא בימות הגשמים: א\"ר רב יהודה שכח והכניס אוכלין לתוך פיו בלא ברכה מסלקן לצד א' ומברך תניא חדא בולען ותניא אידך פולטן ותניא אידך מסלקן ל\"ק הא דתניא בולען במשקין והא דתניא פולטן במידי דלא ממאיס והא דתניא מסלקן במידי דממאיס",
  "rashi": [
   {
    "dh": "ולא אמרן אלא דלא אקדימו הנך",
    "text": " — חבורות שפרשו אלו מהן ואזמון עלייהו דהני כגון אם היו ארבעה בכל חבורה ונשאר בכל אחת כדי זימון והפורשים הללו היו צריכים לצאת לשוק קודם שגמרו החבורות את סעודתם:"
   },
   {
    "dh": "אבל אזמון עלייהו",
    "text": " — דהני כגון שנצטרפו אלו עמהם לזימון כדאמ' לעיל קורין לו ומזמנים עליו וברכו החבורות ואלו לא היו שם אלא כדי נברך וברוך הוא ועכשיו הם באים לברך לא מזמני דפרח מינייהו חובת זימון ותו לא הדר עלייהו:"
   },
   {
    "dh": "מטה",
    "text": " — טמאה שנגנבה חציה:"
   },
   {
    "dh": "אלמא כיון דפלגוה",
    "text": " — פקע שם מטה מינה ושם טומאה אע\"ג דהדר הדרוה והרי היא מטה לא הדרה טומאתה הכא נמי כיון דפקע שם שלשה מינייהו בהפרדם ושם זימון ע\"י שזימנו הראשונים עליהם אע\"ג דהדרי לכלל שם שלשה לא הדרי לכלל זימון אבל כי לא אזמון לא פקע חובת זימון מהן אף לפי פרידתם:"
   },
   {
    "dh": "אם יש שמש ביניהם",
    "text": " — שמשמש לשתיהם:"
   },
   {
    "dh": "שמש מצרפן",
    "text": " — אע\"פ שאין אלו רואין את אלו כגון יריעה פרוסה ביניהם:"
   },
   {
    "dh": "אין מברכין עליו ב\"פ הגפן",
    "text": " — לפי שהיה יינם חזק מאד ואין ראוי לשתיה בלא מים הלכך אכתי לא אשתני למעליותא ולא זז מברכתו הראשונה והרי הוא כענבים וברכתו ב\"פ העץ:"
   },
   {
    "dh": "ונוטלין ממנו לידים",
    "text": " — דשם מים עליו דמי פירות בעלמא מקרי:"
   },
   {
    "dh": "משנתן לתוכו מים",
    "text": " — שם יין עליו ואין נוטלין אלא במים. לשון אחר הכי גרסי' יין עד שלא נתן לתוכו מים מברכין עליו ב\"פ העץ ואין נוטלין הימנו לידים משנתן לתוכו מים מברכין עליו בורא פרי הגפן ונוטלין הימנו לידים דברי רבי אליעזר וחכ\"א בין כך ובין כך מברכין עליו ב\"פ הגפן ואין נוטלין ממנו לידים וטעמייהו דרבנן משום הפסד אוכלין כך מצאתי בהלכות גדולות אצל קידוש והבדלה ובדקתי בתוספתא ולא גרסינן בה הכי אלא כמו שהוא בספרים:"
   },
   {
    "dh": "כר\"א",
    "text": " — דאמר נוטלין הימנו לידים ולא חייש להפסד אוכלין:"
   },
   {
    "dh": "למאי חזי",
    "text": " — לשתיה דמברכין עליו ברכת היין:"
   },
   {
    "dh": "לקורייטי",
    "text": " — פיישו\"ן בלע\"ז ובלשון חכמים אנומלית ואלונתית:"
   },
   {
    "dh": "אין מעבירים כוס מלא על הפת",
    "text": " — שלא ישפך על הפת ותהא הפת בזויה:"
   },
   {
    "dh": "פתק",
    "text": " — זרק:"
   },
   {
    "dh": "דסתנא",
    "text": " — אמינישטרישו\"ן בלע\"ז מנה של בשר מבושל:"
   },
   {
    "dh": "מידי דממאיס",
    "text": " — שמתמעך בזריקתו כגון תאנים שבשלו כל צרכם ותותים:"
   },
   {
    "dh": "דלא ממאיס",
    "text": " — רמון ואגוז וכל דבר קשה:"
   },
   {
    "dh": "ממשיכין יין בצנורות",
    "text": " — משום סימן טוב ואין כאן משום בזיון והפסד לפי שמקבלים אותו בראש פי הצנור בכלי:"
   },
   {
    "dh": "בימות החמה",
    "text": " — שאין טיט בדרכים:"
   },
   {
    "dh": "אבל לא גלוסקאות",
    "text": " — שהרי אף בימות החמה הן נמאסין בזריקתן:"
   },
   {
    "dh": "בולען",
    "text": " — בלא ברכה:"
   },
   {
    "dh": "פולטן",
    "text": " — ומברך וחוזר ואוכלן:"
   },
   {
    "dh": "משקין",
    "text": " — בולען שאי אפשר לסלקן לאחד מלוגמיו ולברך ולא לפולטם שמפסידן:"
   },
   {
    "dh": "פולטן במידי דלא ממאיס",
    "text": " — במה שנתנו בפיו ויכול לחזור ולאוכלו:"
   }
  ],
  "tosafot": [
   {
    "dh": "אבל אי אקדימו ואזמינו עלייהו בדוכתייהו",
    "text": " — פי' שאכל כל אחד מהשלשה והפסיק לשתים שהיו מסובין עמו עד הזן כדאיתא לעיל (ברכות דף מה:) פרח חובת זמון מעליהם כלומר פטורין מן הזמון ורשאין עתה ליחלק ורש\"י לא פירש כן:"
   },
   {
    "dh": "שחלקוה אחין או שותפין טהורה",
    "text": " — תימה דאמר בסוכה (פ\"ק דף טז.) מטה מטמאה אברים כגון ארוכה ושתי כרעים. ולי נראה דהתם מיירי שיכול להחזירה כאשר בתחלה ולתקנה שהכרעים בעין והדיוט יכול להחזירה. וא\"ת אמאי לא פריך הכא מכל כלי שנשבר וטהור אלמא כיון דפלגוה פרח לה טומאה ול\"נ דשאני התם שאינו ראוי עוד להצטרף הכלי יחד ולקבל טומאה אפילו מכאן ולהבא ולא הוי דומיא דשלשה בני אדם דהוו ראוים עוד להצטרף לזמון:"
   },
   {
    "dh": "שמש מצרפן לזמון",
    "text": " — וה\"ה בשני בתים ובני אדם עומדים ומשמשין מזו לזו מצטרפין וכן איתא בירושלמי ובלבד שישמעו ברכת המזון מפי המברך והא דנקט במתני' בית [אחד] משום חדוש דסיפא דאפילו בבית אחד אם לאו אין מזמנין וכן בבית חתנים כשאוכלים בחופה בב' בתים ובני אדם משמשין מזו לזו מצטרפין ובלבד שישמעו ברכת המזון מפי המברך:"
   },
   {
    "dh": "בורא פרי העץ ונוטלין ממנו לידים",
    "text": " — פירש\"י כי לא נתן לתוכו מים לא הוי אלא כמי פירות ומכאן משמע דמי פירות כשרין לנטילת ידים ויש לחלק בין הני דאמרינן בפרק כל הבשר (חולין דף קז.) דאחזותא קפדיתו ומיהו יש מפרשים לנטילת ידים בעינן מים דכתיב וידיו לא שטף במים:"
   },
   {
    "dh": "כמאן אזלא הא דאמר שמואל וכו' כר' אליעזר",
    "text": " — לכאורה משמע ממאי דאמר ר\"א נוטלין וכו'. ותימה דאמרינן בפרק במה טומנין (שבת ד' נ:) אימר דאמר שמואל במידי דלא ממאיס במידי דממאיס מי אמר וא\"כ היכי מוקים לה הא דשמואל כר\"א דהא יין מידי דממאיס בנטילת ידים ובמידי דממאיס מודה שמואל ועוד קשה דהכא משמע דאין הלכה כשמואל מדמוקי לה כר\"א ובפרק שני דביצה (ד' כא:) קאמר סתמא דגמ' דסופלי לחיותא בי\"ט דמטלטלינן להו אגב רפתא כשמואל משמע דקי\"ל כוותיה וי\"ל דהכא לא קאמר אלא לדברי ר\"א דסבר לה כשמואל ועדיפא מיניה קאמר שמתיר אפילו היכא דממאיס ולא נחת כאן אלא לפרש טעמא דר\"א כדפירשנו ובה\"ג אמר דהלכה כרבנן דהכא והלכה נמי כשמואל דכי קאמר שמואל הני מילי מידי דלא ממאיס אבל מידי דממאיס לא ודלא כפי' ר\"ת שפסק דלא כשמואל מדמוקי ליה כר\"א אלא ודאי קיימא לן כשמואל כדפירשנו וא\"כ מותר לסמוך הקערה בפת היכא דלא ממאיס וי\"א דצריך לאכלו אח\"כ ויש נוהגים לאכול דייסא בפת הואיל ואוכלין הפת אח\"כ אבל במס' סופרים אוסרו דאמרינן במס' סופרים (פ\"ג) אין אוכלין אוכלין באוכלין אא\"כ היה אוכלן בבת אחת ושמא ההיא דלא כשמואל:"
   },
   {
    "dh": "מודים חכמים לר\"א בכוס של ברכה שאין מברכין עליו עד שיתן לתוכו מים",
    "text": " — תימה דאמרינן לקמן ד' דברים נאמרו בכוס של ברכה חי ומלא וי\"ל דבעינן שיתנו חי לתוך הכוס ואח\"כ ימזגנו אי נמי בעינן חי מן החבית אי נמי קאי אכוס עצמו ומאי חי שלם כדאיתא במכות (ד' טז:) ריסק ט' נמלים ואחד חי וכו' אלמא דאותו חי היינו שלם ה\"נ בעינן שיהא הכוס שלם בלא שבירה:"
   },
   {
    "dh": "למאי חזי",
    "text": " — פי' ולמאי אשתני לעילויא ומשני לקורייטי וכן הלכה כרבנן דיין חי מברכין עליו בורא פרי הגפן דאמרינן (פסחים קח:) שתאן חי יצא:"
   },
   {
    "dh": "אין זורקין את האוכלים",
    "text": " — בהני שלשה מודה שמואל אין מעבירין כוס מלא על הפת וגם אין חותכין עליו בשר חי ואין זורקין את הפת אפילו לא ממאיס וכן שאר אוכלין אסור לזרוק במידי דממאיס:"
   },
   {
    "dh": "ולא בימות הגשמים",
    "text": " — אע\"פ שבאגוזים אין האוכל נמאס בתוכו מ\"מ כשהן נופלים בטיט נמאסים ומיהו עכשיו שדרכן לזרוק חטים בבית חתנים צריך ליזהר שלא יזרקום אלא במקום נקי:"
   }
  ],
  "translations": []
 },
 {
  "id": "51a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נא",
  "amud": "א",
  "dafEn": "51a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "במידי דלא ממאיס נמי לסלקינהו לצד אחד וליברך תרגמא רב יצחק קסקסאה קמיה דרבי יוסי בר אבין משמיה דרבי יוחנן משום שנאמר (תהלים עא, ח) ימלא פי תהלתך בעו מיניה מרב חסדא מי שאכל ושתה ולא ברך מהו שיחזור ויברך אמר להו מי שאכל שום וריחו נודף יחזור ויאכל שום אחר כדי שיהא ריחו נודף אמר רבינא הלכך אפילו גמר סעודתו יחזור ויברך דתניא טבל ועלה אומר בעלייתו ברוך אשר קדשנו במצותיו וצונו על הטבילה ולא היא התם מעיקרא גברא לא חזי הכא מעיקרא גברא חזי והואיל ואידחי אידחי: תנו רבנן אספרגוס יפה ללב וטוב לעינים וכ\"ש לבני מעים והרגיל בו יפה לכל גופו והמשתכר הימנו קשה לכל גופו מדקתני יפה ללב מכלל דבחמרא עסקינן וקתני וכל שכן לבני מעים והתניא ללע\"ט יפה לרמ\"ת קשה כי תניא ההיא במיושן כדתנן קונם יין שאני טועם שהיין קשה לבני מעים אמרו לו והלא מיושן יפה הוא לבני מעים ושתק אסור בחדש ומותר במיושן שמע מינה: תנו רבנן ששה דברים נאמרו באספרגוס אין שותין אותו אלא כשהוא חי ומלא מקבלו בימין ושותהו בשמאל ואין משיחין אחריו ואין מפסיקין בו ואין מחזירין אותו אלא למי שנתנו לו ורק אחריו ואין סומכין אותו אלא במינו והתניא אין סומכין אותו אלא בפת לא קשיא הא בדחמרא הא בדשכרא תני חדא ללע\"ט יפה לרמ\"ת קשה ותניא אידך לרמ\"ת יפה ללע\"ט קשה לא קשיא הא בדחמרא הא בדשכרא תני חדא רק אחריו לוקה ותניא אידך לא רק אחריו לוקה לא קשיא הא בדחמרא הא בדשכרא א\"ר אשי השתא דאמרת לא רק אחריו לוקה מימיו נזרקין אפילו בפני המלך: א\"ר ישמעאל בן אלישע שלשה דברים סח לי סוריאל שר הפנים אל תטול חלוקך בשחרית מיד השמש ותלבש ואל תטול ידיך ממי שלא נטל ידיו ואל תחזיר כוס אספרגוס אלא למי שנתנו לך מפני שתכספית ואמרי לה אסתלגנית של מלאכי חבלה מצפין לו לאדם ואומרים אימתי יבא אדם לידי אחד מדברים הללו וילכד אמר ריב\"ל שלשה דברים סח לי מלאך המות אל תטול חלוקך שחרית מיד השמש ותלבש ואל תטול ידיך ממי שלא נטל ידיו ואל תעמוד לפני הנשים בשעה שחוזרות מן המת מפני שאני מרקד ובא לפניהן וחרבי בידי ויש לי רשות לחבל ואי פגע מאי תקנתיה לינשוף מדוכתיה ארבע אמות אי איכא נהרא ליעבריה ואי איכא דרכא אחרינא ליזיל בה ואי איכא גודא ליקו אחורא ואי לא ליהדר אפיה ולימא (זכריה ג, ב) ויאמר ה' אל השטן יגער ה' בך וגו' עד דחלפי מיניה: א\"ר זירא א\"ר אבהו ואמרי לה במתניתא תנא עשרה דברים נאמרו בכוס של ברכה טעון הדחה ושטיפה חי ומלא עיטור ועיטוף נוטלו בשתי ידיו ונותנו בימין ומגביהו מן הקרקע טפח ונותן עיניו בו ויש אומרים אף משגרו במתנה לאנשי ביתו אמר ר' יוחנן אנו אין לנו אלא ארבעה בלבד הדחה שטיפה חי ומלא תנא הדחה מבפנים ושטיפה מבחוץ א\"ר יוחנן כל המברך על כוס מלא נותנין לו נחלה בלי מצרים שנאמר (דברים לג, כג) ומלא ברכת ה' ים ודרום ירשה ר' יוסי בר חנינא אומר זוכה ונוחל שני עולמים העולם הזה והעולם הבא עיטור רב יהודה מעטרהו בתלמידים רב חסדא מעטר ליה בנטלי אמר ר' חנן ובחי אמר רב ששת ובברכת הארץ עיטוף רב פפא מעטף ויתיב רב אסי פריס סודרא על רישיה נוטלו בשתי ידיו א\"ר חיננא בר פפא מאי קראה (תהלים קלד, ב) שאו ידיכם קדש וברכו את ה' ונותנו לימין א\"ר חייא בר אבא אמר ר' יוחנן ראשונים שאלו שמאל מהו שתסייע לימין אמר רב אשי הואיל וראשונים איבעיא להו ולא איפשט להו",
  "rashi": [
   {
    "dh": "במידי דלא ממאיס נמי",
    "text": " — למה לי פולטן לסלקינהו לצד אחד:"
   },
   {
    "dh": "מי שאכל ושתה ולא ברך",
    "text": " — לפניהם קאי אברכת המוציא וברכת היין:"
   },
   {
    "dh": "מהו שיחזור וכו'",
    "text": " — לאחר אכילה ושתיה:"
   },
   {
    "dh": "יחזור ויאכל שום אחר",
    "text": " — כדי שיסריח יותר כלומר יוסיף על סרחונו ויעשה ברכה לבטלה:"
   },
   {
    "dh": "הלכך",
    "text": " — כיון דאם נזכר באמצע יכול לברך אפי' גמר סעודתו נמי יכול לברך:"
   },
   {
    "dh": "על הטבילה",
    "text": " — אלמא אע\"ג דטבל הויא ברכה:"
   },
   {
    "dh": "התם מעיקרא לא חזי",
    "text": " — דרוב טבילות משום קרי הם ובעלי קריין אסורים בברכות שהם דברי תורה כדאמרינן בפרק מי שמתו (ברכות ד' כ:) ודחוי מעיקרא לאו דחוי הוא ולכי מתקן הדר מברך אבל האי מעיקרא איחזי וכיון דגמ' אידחי והואיל ואידחי אידחי:"
   },
   {
    "dh": "אספרגוס",
    "text": " — כוס שהיו שותים בכל בקר אליבא ריקנא לרפואה:"
   },
   {
    "dh": "דבחמרא עסקינן",
    "text": " — דאמרינן לקמן בשמעתין אספרגוס ללע\"ט יפה ואוקמינן בשל יין וסימן לע\"ט לב עין טחול:"
   },
   {
    "dh": "וכ״ש לבני מעים",
    "text": " — קושיא היא כלו' בדחמרא קתני וכ״ש לבני מעים:"
   },
   {
    "dh": "והתניא",
    "text": " — לקמן לרמ\"ת קשה אספרגוס של יין וסימן רמ\"ת ראש מעים תחתוניות:"
   },
   {
    "dh": "כי תניא ההיא",
    "text": " — דקתני וכ\"ש לבני מעים:"
   },
   {
    "dh": "ביין מיושן",
    "text": " — של ג' שנים כדתנן בבבא בתרא (ד' צח.) ישן משל אשתקד מיושן של שלש שנים:"
   },
   {
    "dh": "קונם יין שאני טועם",
    "text": " — כהקדש יהא עלי יין שאני טועם:"
   },
   {
    "dh": "אלא חי",
    "text": " — יין חי שאינו מזוג:"
   },
   {
    "dh": "אין מפסיקין בו",
    "text": " — אלא שותהו בבת אחת:"
   },
   {
    "dh": "ואין סומכין אותו",
    "text": " — לאכול אחריו מיד:"
   },
   {
    "dh": "בדחמרא",
    "text": " — סמיכתו בפת:"
   },
   {
    "dh": "בדשכרא",
    "text": " — סמיכתו במינו אם שכר תאנים סומכו בתאנים ואם של תמרים הוא סומכו בתמרים:"
   },
   {
    "dh": "לוקה",
    "text": " — בחולי:"
   },
   {
    "dh": "בדחמרא",
    "text": " — לא ירוק:"
   },
   {
    "dh": "בדשכרא",
    "text": " — אם לא רק מים הבאים בפיו אחריו לוקה:"
   },
   {
    "dh": "אפילו בפני המלך",
    "text": " — ירוק ואל יסתכן:"
   },
   {
    "dh": "סוריאל",
    "text": " — מלאך חשוב לבא לפני הקב\"ה:"
   },
   {
    "dh": "אל תטול חלוקך",
    "text": " — שחרית מיד השמש אלא אתה בעצמך טלהו ממקום שהוא שם ותלבשנו:"
   },
   {
    "dh": "תכספית",
    "text": " — שם חבורת שדים:"
   },
   {
    "dh": "איסתלגנית",
    "text": " — שם חבורת מלאכי חבלה:"
   },
   {
    "dh": "אימתי יבא אדם לידי אחד מן הדברים הללו וילכד",
    "text": " — רבי ישמעאל עלה לרקיע על ידי שם בברייתא דמעשה מרכבה:"
   },
   {
    "dh": "גודא",
    "text": " — כותל:"
   },
   {
    "dh": "כוס של ברכה",
    "text": " — ברכת המזון:"
   },
   {
    "dh": "הדחה ושטיפה וכו'",
    "text": " — כולהו מפרש להו ואזיל:"
   },
   {
    "dh": "מן הקרקע",
    "text": " — אם ע\"ג קרקע הסב ואם על גבי שלחן מגביהו מן השלחן:"
   },
   {
    "dh": "במתנה",
    "text": " — דרך דורון וחשיבות:"
   },
   {
    "dh": "לאנשי ביתו",
    "text": " — לאשתו:"
   },
   {
    "dh": "חי",
    "text": " — שמוזגו במים לאחר שנתנו בכוס חי אבל לברך עליו חי הא אמרן במתני' אין מברכין אי נמי חי בלע\"ז פריש\"ק להביאו מן החבית לשמו:"
   },
   {
    "dh": "מעטרהו בתלמידים",
    "text": " — תלמידיו סובבין אותו כשהוא מברך:"
   },
   {
    "dh": "בנטלי",
    "text": " — כוסות:"
   },
   {
    "dh": "ובברכת הארץ",
    "text": " — כשמגיע לברכת הארץ מוסיף עליה:"
   },
   {
    "dh": "מעטף",
    "text": " — בטליתו:"
   }
  ],
  "tosafot": [
   {
    "dh": "מעיקרא גברא לא חזי",
    "text": " — תימה והלא טמא אינו אסור לברך ובקונטרס פירש דבעלי קריין אסורים בדברי תורה וי\"ל דמיירי בטבילת גרים ומפני אותה טבילה הצריכו לכל שאר טבילות לברך לאחר טבילה וכן בנט\"י שפעמים אדם בא מבית הכסא ואין אדם ראוי לברך עד לאחר הנטילה נהגו העם לברך כל שאר ברכת ידים לאחר נטילה:"
   },
   {
    "dh": "אין לנו אלא ארבעה דברים",
    "text": " — ומיהו לא משמע (כן) דפליג ר' יוחנן אההיא דנותנו לימינו כדאמרי' לקמן א\"ר יוחנן ראשונים שאלו מהו שתסייע שמאל לימין משמע שכן היו נוהגים. ומיהו מדהאמוראים היו עושים עיטור ועיטוף משמע שהיו מחמירים על עצמן והיו נזהרים בכולן ולפיכך יש להחמיר בכוס של ברכה:"
   },
   {
    "dh": "שטיפה חי ומלא",
    "text": " — ירושלמי דסוף פירקין א\"ר אחא שלשה דברים נאמרו בכוס של ברכה מלא עיטור ומודח ושלשתן מקרא נפתלי שבע רצון ומלא ברכת ה' שבע עיטור רצון מודח ומלא כמשמעו:"
   },
   {
    "dh": "שטיפה מבחוץ והדחה מבפנים",
    "text": " — ופי' ר\"י דוקא שאין הכוס יפה שיש בו שיורי כוסות אבל אם הוא יפה בלאו הכי שפיר דמי דלא בעינן אלא שיהא כוס של ברכה יפה:"
   },
   {
    "dh": "זוכה לשני עולמות",
    "text": " — פי' הרב רבי יוסף ממרשיליי\"א מדהוה ליה למכתב ים ודרום רש וכתב ירשה הרי יו\"ד ה\"א יתירה וביו\"ד ה\"א נבראו שני עולמות כדאמרינן בהתכלת (מנחות ד' כט:) כי ביה ה' צור עולמים (אל תקרי צור אלא צר וכו'):"
   },
   {
    "dh": "שמאל מהו שתסייע לימין",
    "text": " — בכוסות גדולות מיירי או בראש חדש טבת שחל להיות בשבת שהוא בחנוכה או בנישואין וצריך להאריך בברכת המזון:"
   }
  ],
  "translations": []
 },
 {
  "id": "51b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נא",
  "amud": "ב",
  "dafEn": "51b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אנן נעבד לחומרא ומגביהו מן הקרקע טפח אמר רבי אחא ברבי חנינא מאי קראה (תהלים קטז, יג) כוס ישועות אשא ובשם ה' אקרא ונותן עיניו בו כי היכי דלא ניסח דעתיה מיניה ומשגרו לאנשי ביתו במתנה כי היכי דתתברך דביתהו עולא אקלע לבי רב נחמן כריך ריפתא בריך ברכת מזונא יהב ליה כסא דברכתא לרב נחמן אמר ליה רב נחמן לישדר מר כסא דברכתא לילתא אמר ליה הכי אמר רבי יוחנן אין פרי בטנה של אשה מתברך אלא מפרי בטנו של איש שנאמר (דברים ז, יג) וברך פרי בטנך פרי בטנה לא נאמר אלא פרי בטנך תניא נמי הכי רבי נתן אומר מנין שאין פרי בטנה של אשה מתברך אלא מפרי בטנו של איש שנאמר וברך פרי בטנך פרי בטנה לא נאמר אלא פרי בטנך אדהכי שמעה ילתא קמה בזיהרא ועלתה לבי חמרא ותברא ארבע מאה דני דחמרא אמר ליה רב נחמן נשדר לה מר כסא אחרינא שלח לה כל האי נבגא דברכתא היא שלחה ליה ממהדורי מילי ומסמרטוטי כלמי אמר רב אסי אין מסיחין על כוס של ברכה ואמר רב אסי אין מברכין על כוס של פורענות מאי כוס של פורענות אמר רב נחמן בר יצחק כוס שני תניא נמי הכי השותה כפלים לא יברך משום שנאמר (עמוס ד, יב) הכון לקראת אלהיך ישראל והאי לא מתקן אמר רבי אבהו ואמרי לה במתניתא תנא האוכל ומהלך מברך מעומד וכשהוא אוכל מעומד מברך מיושב וכשהוא מיסב ואוכל יושב ומברך והלכתא בכולהו יושב ומברך: הדרן עלך שלשה שאכלו  אלו דברים שבין בית שמאי ובין בית הלל בסעודה בית שמאי אומרים מברך על היום ואחר כך מברך על היין ובית הלל אומרים מברך על היין ואחר כך מברך על היום בית שמאי אומרים נוטלין לידים ואחר כך מוזגין את הכוס ובית הלל אומרים מוזגין את הכוס ואחר כך נוטלין לידים בית שמאי אומרים מקנח ידיו במפה ומניחה על השלחן ובית הלל אומרים על הכסת בית שמאי אומרים מכבדין את הבית ואחר כך נוטלין לידים ובית הלל אומרים נוטלין לידים ואחר כך מכבדין את הבית בית שמאי אומרים נר ומזון בשמים והבדלה ובית הלל אומרים נר ובשמים מזון והבדלה בית שמאי אומרים שברא מאור האש וב\"ה אומרים בורא מאורי האש אין מברכין לא על הנר ולא על הבשמים של עכו\"ם ולא על הנר ולא על הבשמים של מתים ולא על הנר ולא על הבשמים של ע\"ז ואין מברכין על הנר עד שיאותו לאורו מי שאכל ושכח ולא בירך ב\"ש אומרים יחזור למקומו ויברך וב\"ה אומרים יברך במקום שנזכר ועד מתי מברך עד כדי שיתעכל המזון שבמעיו בא להן יין אחר המזון אם אין שם אלא אותו כוס בית שמאי אומרים מברך על היין ואח\"כ מברך על המזון ובית הלל אומרים מברך על המזון ואח\"כ מברך על היין ועונין אמן אחר ישראל המברך ואין עונין אמן אחר כותי המברך עד שישמע כל הברכה כולה: גמ׳ תנו רבנן דברים שבין ב\"ש וב\"ה בסעודה ב\"ש אומרים מברך על היום ואחר כך מברך על היין שהיום גורם ליין שיבא וכבר קדש היום ועדיין יין לא בא ובית הלל אומרים מברך על היין ואחר כך מברך על היום שהיין גורם לקדושה שתאמר דבר אחר ברכת היין תדירה וברכת היום אינה תדירה תדיר ושאינו תדיר תדיר קודם והלכה כדברי בית הלל מאי דבר אחר וכי תימא התם תרתי והכא חדא הכא נמי תרתי נינהו ברכת היין תדירה וברכת היום אינה תדירה תדיר ושאינו תדיר תדיר קודם והלכה כדברי ב\"ה פשיטא דהא נפקא בת קול איבעית אימא קודם בת קול ואיבעית אימא לאחר בת קול",
  "rashi": [
   {
    "dh": "אנן נעבד לחומרא",
    "text": " — שלא תסייע שמאל לימין בשעת ברכה:"
   },
   {
    "dh": "שמעה ילתא",
    "text": " — שלא ישגר לה כוס של ברכה:"
   },
   {
    "dh": "קמה בזיהרא",
    "text": " — עמדה בכעס:"
   },
   {
    "dh": "כל האי נבגא דברכתא היא",
    "text": " — כל יין שבחבית ככוס של ברכה הוא שתי ממנו:"
   },
   {
    "dh": "נבגא",
    "text": " — כוס כמו לשתי מר אנבגא:"
   },
   {
    "dh": "ממהדורי מילי",
    "text": " — ממחזירי בעיירות ירבו תמיד דברים:"
   },
   {
    "dh": "ומסמרטוטי כלמי",
    "text": " — וממשחקי בגדים בלויים וממורטים ירבו כנים. כנים מתרגמינ' כלמתא:"
   },
   {
    "dh": "אין מסיחין",
    "text": " — משאחזו עד שיברך:"
   },
   {
    "dh": "כוס שני",
    "text": " — שהוא של זוגות והעומד על שלחנו ושתי זוגות ניזוק על ידי שדים:"
   },
   {
    "dh": "כפלים",
    "text": " — זוגות:"
   },
   {
    "dh": "הכון לקראת",
    "text": " — בדברים נאים ולא בדברי פורענות:"
   },
   {
    "dh": "מסב",
    "text": " — במטה דרך הסבה:"
   },
   {
    "dh": "והלכתא בכולהו יושב ומברך",
    "text": ""
   },
   {
    "dh": "הדרן עלך שלשה שאכלו",
    "text": ""
   },
   {
    "dh": "אלו דברים וכו' בסעודה",
    "text": " — שנחלקו בהלכות סעודה:"
   },
   {
    "dh": "מברך על היום",
    "text": " — בקידוש שבתות וימים טובים:"
   },
   {
    "dh": "ואחר כך מוזגין את הכוס",
    "text": " — יין הבא לפני המזון כדאמרינן בפרק כיצד מברכין (ברכות דף מג.) הסבו אע\"פ שנטל כו' הביאו להם יין וכו' וקאמרי ב\"ש נוטלין לידים ואחר כך שותים את הכוס ואוכלים סעודתם בההיא נטילה וב\"ה אומרים מוזגין את הכוס ושותין אותו ואחר כך נוטלין לידים וטעמא דתרוייהו מפרש בגמרא:"
   },
   {
    "dh": "ומקנח ידיו במפה",
    "text": " — מנטילת מים ראשונים:"
   },
   {
    "dh": "ומניחה על השולחן",
    "text": " — ומקנח בה ידיו תמיד מזוהמת התבשיל:"
   },
   {
    "dh": "וב\"ה אומרים",
    "text": " — על הכר או על הכסת יניחנה אחרי כן ושם יקנח בה ידיו תמיד וטעמא מפרש בגמ':"
   },
   {
    "dh": "מכבדין את הבית",
    "text": " — מקום שאכלו שם אם הסבו על גבי קרקע מכבדים את הקרקע או אם הסבו על השלחן מכבדין את השלחן משיורי אוכלין שנתפזרו עליו:"
   },
   {
    "dh": "ואחר כך נוטלין לידים",
    "text": " — מים אחרונים:"
   },
   {
    "dh": "נר ומזון",
    "text": " — מי שאין לו אלא כוס אחד במוצאי שבת מניחו עד לאחר המזון וסודר עליו נר ומזון ובשמים והבדלה כו':"
   },
   {
    "dh": "אין מברכים על הנר ועל הבשמים של עכו״ם ושל מתים",
    "text": " — טעם דכולהו מפרש בגמרא:"
   },
   {
    "dh": "שיאותו",
    "text": " — שיהו נהנים ממנו:"
   },
   {
    "dh": "עד כדי שיתעכל המזון",
    "text": " — מפרש שיעורא בגמרא:"
   },
   {
    "dh": "מברך על היין",
    "text": " — בגמרא מפרש פלוגתייהו:"
   },
   {
    "dh": "עונין אמן אחר ישראל המברך",
    "text": " — אפילו לא שמע אלא סוף ברכה אבל לא לאחר כותי שמא ברך להר גרזים:"
   },
   {
    "dh": "גמ' שהיום גורם ליין שיבא",
    "text": " — כוס זה לא בא אלא בשביל שבת לקידוש:"
   },
   {
    "dh": "וכבר קדש היום",
    "text": " — משקבלו עליו או מצאת הכוכבים:"
   },
   {
    "dh": "ועדיין יין לא בא",
    "text": " — לשלחן וכשם שקודם לכניסה כך קודם לברכה:"
   },
   {
    "dh": "שהיין גורם לקדושה שתאמר",
    "text": " — שאם אין יין לא מקדשין והמקדש על הפת גם הוא במקום יין וברכת הפת קודמת:"
   },
   {
    "dh": "תדיר קודם",
    "text": " — נפקא לן במסכת זבחים מהאי קרא דכתיב במוספין מלבד עולת הבקר אשר לעולת התמיד תעשו את אלה מלבד משמע לאחר שהקרבתם התמיד תקריבו המוספין וקא דרשינן אשר לעולת התמיד קרא יתירה למילף דבשביל שהיא תמיד הקדימה הכתוב ומכאן אתה למד לכל התמידין:"
   }
  ],
  "tosafot": [
   {
    "dh": "אין מסיחין על כוס של ברכה",
    "text": " — פי' רש\"י שלא יסיח (דעת) המברך משנתנו לו כוס של ברכה וה\"ה המסובין שאין רשאין להסיח דבעינן שיתכוין שומע ומשמיע וגם אין להפסיק השומעים בשיחת חולין כמו שאין המברך רשאי להסיח ואף על פי שאמר התם (פרק בתרא דר\"ה ד' לד:) שמע תשע תקיעות בתשע שעות ביום יצא משמע שהשומע סח בינתים ואפילו הכי יצא אך לכתחלה אין לעשות כן ומיהו נראה דהיינו דוקא בשעה שהמברך שותק מעט בין ברכה לברכה אבל בשעה שהוא מברך אם היה מדבר אפילו בדיעבד לא יצא:"
   },
   {
    "dh": "והלכתא בכולהו יושב ומברך",
    "text": " — לפי שברכת המזון דאורייתא החמירו בה להיות יושב ומברך שהרי עשרה דברים נאמרו בו מה שאין כן בשאר ברכות והוא נוטריקון ואכלת ושבעת שב עת וברכת לברכת המזון מפי רבי משה אלברט:"
   },
   {
    "dh": "הדרן עלך שלשה שאכלו",
    "text": ""
   }
  ],
  "translations": []
 },
 {
  "id": "52a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נב",
  "amud": "א",
  "dafEn": "52a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ורבי יהושע היא דאמר אין משגיחין בבת קול וסברי בית שמאי דברכת היום עדיפא והתניא הנכנס לביתו במוצאי שבת מברך על היין ועל המאור ועל הבשמים ואחר כך אומר הבדלה ואם אין לו אלא כוס אחד מניחו לאחר המזון ומשלשלן כולן לאחריו והא ממאי דב\"ש היא דלמא ב\"ה היא לא ס\"ד דקתני מאור ואח\"כ בשמים ומאן שמעת ליה דאית ליה האי סברא ב\"ש דתניא א\"ר יהודה לא נחלקו בית שמאי וב\"ה על המזון שבתחלה ועל הבדלה שהיא בסוף על מה נחלקו על המאור ועל הבשמים ב\"ש אומרים מאור ואחר כך בשמים וב\"ה אומרים בשמים ואחר כך מאור וממאי דבית שמאי היא ואליבא דרבי יהודה דילמא בית הילל היא ואליבא דרבי מאיר לא ס\"ד דקתני הכא במתניתין בית שמאי אומרים נר ומזון בשמים והבדלה ובית הלל אומרים נר ובשמים מזון והבדלה והתם בברייתא קתני אם אין לו אלא כוס אחד מניחו לאחר המזון ומשלשלן כולן לאחריו שמע מינה דבית שמאי היא ואליבא דרבי יהודה ומכל מקום קשיא קא סברי בית שמאי שאני עיולי יומא מאפוקי יומא עיולי יומא כמה דמקדמינן ליה עדיף אפוקי יומא כמה דמאחרינן ליה עדיף כי היכי דלא להוי עלן כמשוי וסברי ב\"ש ברכת המזון טעונה כוס והא תנן בא להם יין לאחר המזון אם אין שם אלא אותו כוס בית שמאי אומרים מברך על היין ואחר כך מברך על המזון מאי לאו דמברך עילויה ושתי ליה לא דמברך עילויה ומנח ליה והאמר מר המברך צריך שיטעום דטעים ליה והאמר מר טעמו פגמו דטעים ליה בידיה והאמר מר כוס של ברכה צריך שיעור והא קא פחית ליה משיעוריה דנפיש ליה טפי משיעוריה והא אם אין שם אלא אותו כוס קתני תרי לא הוי ומחד נפיש והא תני רבי חייא ב\"ש אומרים מברך על היין ושותהו ואחר כך מברך ברכת המזון אלא תרי תנאי ואליבא דב\"ש: ב\"ש אומרים וכו': ת\"ר ב\"ש אומרים נוטלין לידים ואח\"כ מוזגין את הכוס שאם אתה אומר מוזגין את הכוס תחלה גזרה שמא יטמאו משקין שאחורי הכוס מחמת ידיו ויחזרו ויטמאו את הכוס וליטמו ידים לכוס ידים שניות הן ואין שני עושה שלישי בחולין אלא על ידי משקין ובה\"א מוזגין את הכוס ואחר כך נוטלין לידים שאם אתה אומר נוטלין לידים תחלה גזרה שמא יטמאו משקין שבידים מחמת הכוס ויחזרו ויטמאו את הידים וניטמי כוס לידים אין כלי מטמא אדם וניטמי למשקין שבתוכו הכא בכלי שנטמאו אחוריו במשקין עסקינן דתוכו טהור וגבו טמא דתנן כלי שנטמאו אחוריו במשקין אחוריו טמאים",
  "rashi": [
   {
    "dh": "ור' יהושע היא",
    "text": " — בבבא מציעא בתנורו של עכנאי בפ' הזהב (בבא מציעא ד' נט:):"
   },
   {
    "dh": "ומשלשלן",
    "text": " — לשון שלשלת כלומר סודרן לאחר המזון:"
   },
   {
    "dh": "וממאי דב\"ש היא כו'",
    "text": " — אלמא לב\"ש מאור ואח\"כ בשמים וכן ברייתא נמי מאור ואחר כך בשמים קאמר אלמא ב\"ש היא וקתני יין ברישא מקמי הבדלה:"
   },
   {
    "dh": "ודילמא ב\"ה היא ואליבא דר\"מ",
    "text": " — דתנן במתניתין ב\"ה אומרים נר ובשמים ואמר בגמרא ר\"מ היא:"
   },
   {
    "dh": "לא סלקא דעתך",
    "text": " — לאוקמי ברייתא כמתניתין דמתני' קתני מזון באמצע וברייתא קתני משלשלן כולן לאחריו כר' יהודה דאמר על המזון שבתחלה ומדקתני לרבי יהודה מאור ואח\"כ בשמים בית שמאי היא:"
   },
   {
    "dh": "ומ\"מ קשיא",
    "text": " — דברכת היין קדמה להבדלה:"
   },
   {
    "dh": "קדוש עיולי הוא והבדלה אפוקי היא",
    "text": ""
   },
   {
    "dh": "ברכה טעונה כוס",
    "text": " — ברכת המזון דקתני מניחו לאחר המזון:"
   },
   {
    "dh": "והתנן",
    "text": " — מתני' בפרקין:"
   },
   {
    "dh": "בא להן",
    "text": " — כל ימות השנה קאמר:"
   },
   {
    "dh": "אחר המזון",
    "text": " — ובתוך המזון לא בא להם וכשגמרו סעודתם בא להם לפני ברכת המזון:"
   },
   {
    "dh": "מאי לאו דשתי ליה",
    "text": " — וה\"ק ב\"ש אם רצה מברך על היין ושותהו ואין צריך להניחו לברכת המזון:"
   },
   {
    "dh": "טעמו פגמו",
    "text": " — לברכת המזון ולקדוש ולהבדלה בפרק ערבי פסחים (פסחים ד' קה:):"
   },
   {
    "dh": "ה\"ג אלא תרי תנאי אליבא דב\"ש",
    "text": " — תנא דמתני' ותנא דר' חייא תנא דרבי חייא אליבא דב\"ש אמר אין ברכה טעונה כוס ותנא דמתניתין דלעיל דרבי יהודה אליבא דב\"ש סבר ברכה טעונה כוס:"
   },
   {
    "dh": "גזרה שמא יטמאו משקין",
    "text": " — שנפלו באחורי הכוס מחמת ידים דתנן (פרה פ\"ח מ\"ז) כל הפוסל את התרומה מטמא משקים להיות תחלה ויחזרו ויטמאו את הכוס וב\"ש סברי אסור להשתמש בכוס שאחוריו טמאות כדלקמן:"
   },
   {
    "dh": "וליטמו ידים לכוס",
    "text": " — למה ליה דקאמר משקין שאחורי הכוס בלא משקין נמי מטמו ידים לכוס:"
   },
   {
    "dh": "אלא ע\"י משקין",
    "text": " — שהמשקין נעשין ראשונים מדרבנן וא\"ת כלי אינו מקבל טומאה אלא מאב הטומאה הני מילי מדאורייתא וחכמים גזרו שיהו משקים ראשונים מטמאים כלי גזרה משום משקים זב וזבה שהן אבות הטומאה כגון רוקו ומימי רגליו:"
   },
   {
    "dh": "וב\"ה אומרים כו'",
    "text": " — בתוספתא ה\"ג לה וב\"ה אומרים אחורי הכוס לעולם טמאים דבר אחר תכף לנט\"י סעודה למאי דחיישיתו שלא יטמאו הידים את אחורי הכוס לאו חששא היא שאפילו לכתחלה מותר להשתמש בכלי שאחוריו טמאים ותוכו טהור כגון זה שמטמא אחוריו מחמת משקין דאמרינן ביה בשמעתין תוכו טהור הלכך מוזגין ושותין את הכוס תחלה קודם נטילה שאם אתה אומר נוטלין לידים תחלה שמא יהו אחורי הכוס טמאין גזרה שמא לא יהו הידים נגובות יפה ממי הנטילה ויטמאו המשקין שבידים מחמת כוס והן נעשים תחלה ויחזרו ויטמאו את הידים ונמצא אוכל בידים מסואבות:"
   },
   {
    "dh": "ונטמי כוס לידים",
    "text": " — למה לי משקין בידים אפי' ידים נגובות נמי יטמא כוס לידים וכיון דהכי הוא נהי נמי דבכוס שלפני המזון עביד ב\"ה תקנתא דשותהו קודם נטילה כוסות הבאין בתוך המזון מה תהא עליהן הלא מטמאין את הידים:"
   },
   {
    "dh": "אין כלי מטמא אדם",
    "text": " — כלומר כלי כזה שנטמא בולד הטומאה אינו מטמא את הידים דקיי\"ל כרבנן דפליגי עליה דרבי יהושע במסכת ידים (פ\"ג מ\"א) בכלים שנטמאו במשקין ואומר את שנטמא באב הטומאה מטמא את הידים ושנטמא בולד הטומאה אינו מטמא את הידים שאין שני עושה שני ואע\"פ שהספר מטמא את הידים אין למדים הימנו הלכך כוסות שבתוך המזון שהידים נגובין אינן מטמאין את הידים ואם תאמר פעמים שיש משקין תבשיל טופח על הידים אין תורת משקין עליו אלא תורת אוכל:"
   },
   {
    "dh": "כלי שנטמאו אחוריו במשקין",
    "text": " — בכלי שטף קאמר דאילו כלי חרס אין מטמאין מגבן אפילו בטומאה דאורייתא:"
   },
   {
    "dh": "שנטמאו אחוריו במשקין",
    "text": " — אין לך משקה שאינו ראשון לטומאה שאף אם נגע בשני עשאוהו חכמים תחלה:"
   },
   {
    "dh": "אחוריו טמאין",
    "text": " — אף על פי שאין אדם וכלים מקבלין טומאה מן התורה אלא מאב הטומאה גזרו חכמים שיהו משקין מטמאין כלים מפני שמצינו משקה שהוא אב הטומאה לטמא אדם וכלים מה\"ת כגון זובו של זב ורוקו ומימי רגליו גזרו על כל המשקין טמאין שיטמאו כלים:"
   }
  ],
  "tosafot": [
   {
    "dh": "ורבי יהושע היא דאמר אין משגיחין בבת קול",
    "text": " — ואם תאמר א\"כ קשה הלכתא אהלכתא דההיא דרבי יהושע דתנור של עכנאי קי\"ל כרבי יהושע וקי\"ל כב\"ה וי\"ל דדוקא התם קאמר דאין משגיחין בבת קול דהבת קול היה כנגד הרוב וכבר אמרה תורה אחרי רבים להטות (שמות כ״ג:ב׳) אבל ב\"ה היו רבים אע\"פ שמייתי רבי יהושע הכא אע\"ג דלא דמי דשאני התם דהבת קול היה כנגד הרוב האי תנא סבר טפי מרבי יהושע דאמר אין משגיחין בבת קול אע\"פ שהרוב מסייע לבת קול הואיל וב\"ש מחדדי טפי וא\"ת מ\"ש דבקדוש והבדלה מברכין קודם על היין ובברכת המזון אין מברכין עד לאחר שלש ברכות וי\"ל דהיכי נעביד אם נברך קודם ברכת המזון א\"כ יהא ברכת המזון היסח הדעת דבשלמא בשאר ברכות לא עקר נפשיה משתיה דבקדוש היה רוצה לאכול ובהבדלה היה רוצה לשתות אבל בברכת המזון עקר נפשיה משתיה:"
   },
   {
    "dh": "מניחו עד לאחר המזון",
    "text": " — הכא משמע שמותר לטעום קודם הבדלה. תימה הא אמימר בת טוות (ע\"פ דף קז.) פי' לן מעונה לפי שלא היה לו יין להבדיל עליו. וי\"ל דשאני אמימר שהיה סבור שיהיה לו כוס למחר או מחמיר על עצמו היה והכא שאני דקסבר ברכת המזון טעונה כוס ולכך מניחו לברכת המזון:"
   },
   {
    "dh": "טעמו פגמו",
    "text": " — פרשב\"ם דוקא לקדוש ולהבדלה צריך שלא יהא פגום אבל לשתות צריך לברך עליו אע\"פ שהוא פגום דאסור ליהנות מן העוה\"ז בלא ברכה וקדוש והבדלה נמי לא אמרן אלא במקום דאפשר אבל אי אפשר מברך אפי' אפגום ונותן לתוכו מים כדאיתא בירושלמי רבי יונה טעים אכסא ומתקן ליה פי' לאחר ששתה ממנו הוסיף עליו כל שהוא מים או יין והיה מברך עליו:"
   },
   {
    "dh": "גזרה שמא יטמאו משקין שבידים",
    "text": " — אבל בתוך הסעודה ליכא למיחש שהרי אדם מנגב ידיו יפה קודם אכילה כדאמרי' האוכל בלא ניגוב ידים וכו' אבל בשתיה אין אדם מדקדק לנגב ידיו כל כך:"
   }
  ],
  "translations": []
 },
 {
  "id": "52b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נב",
  "amud": "ב",
  "dafEn": "52b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "תוכו ואוגנו ואזנו וידיו טהורין נטמא תוכו נטמא כולו במאי קא מיפלגי ב\"ש סברי אסור להשתמש בכלי שנטמאו אחוריו במשקין גזרה משום ניצוצות וליכא למגזר שמא יטמאו המשקין שבידים בכוס וב\"ה סברי מותר להשתמש בכלי שנטמאו אחוריו במשקין אמרי ניצוצות לא שכיחי ואיכא למיחש שמא יטמאו משקין שבידים מחמת הכוס ד\"א תכף לנט\"י סעודה מאי ד\"א ה\"ק להו ב\"ה לב\"ש לדידכו דאמריתו אסור להשתמש בכלי שאחוריו טמאין דגזרינן משום ניצוצות אפ\"ה הא עדיפא דתכף לנט\"י סעודה: ב\"ש אומרים מקנח וכו': ת\"ר בית שמאי אומרים מקנח ידיו במפה ומניחה על השלחן שאם אתה אומר על הכסת גזרה שמא יטמאו משקין שבמפה מחמת הכסת ויחזרו ויטמאו את הידים ונטמייה כסת למפה אין כלי מטמא כלי ונטמייה כסת לגברא גופיה אין כלי מטמא אדם ובה\"א על הכסת שאם אתה אומר על השלחן גזרה שמא יטמאו משקים שבמפה מחמת השלחן ויחזרו ויטמאו את האוכלין ולטמא שלחן לאוכלין שבתוכו הכא בשלחן שני עסקינן ואין שני עושה שלישי בחולין אלא ע\"י משקין במאי קמיפלגי ב\"ש סברי אסור להשתמש בשלחן שני גזרה משום אוכלי תרומה וב\"ה סברי מותר להשתמש בשלחן שני אוכלי תרומה זריזין הם ד\"א אין נט\"י לחולין מן התורה מאי ד\"א הכי קאמרי להו ב\"ה לב\"ש וכי תימרו מ\"ש גבי אוכלין דחיישינן ומ\"ש גבי ידים דלא חיישינן אפילו הכי הא עדיפא דאין נט\"י לחולין מן התורה מוטב שיטמאו ידים דלית להו עיקר מדאורייתא ואל יטמאו אוכלים דאית להו עיקר מדאורייתא: בש\"א מכבדין וכו': ת\"ר בש\"א מכבדין את הבית ואחר כך נוטלין לידים שאם אתה אומר נוטלין לידים תחלה נמצא אתה מפסיד את האוכלין אבל נט\"י לב\"ש תחלה לא סבירא להו מ\"ט משום פירורין ובה\"א אם שמש תלמיד חכם הוא נוטל פירורין שיש בהן כזית ומניח פירורין שאין בהן כזית מסייע ליה לר' יוחנן דא\"ר יוחנן פירורין שאין בהם כזית מותר לאבדן ביד במאי קמיפלגי ב\"ה סברי אסור להשתמש בשמש ע\"ה וב\"ש סברי מותר להשתמש בשמש ע\"ה א\"ר יוסי בר חנינא א\"ר הונא בכוליה פרקין הלכה כב\"ה בר מהא דהלכה כב\"ש ור' אושעיא מתני איפכא ובהא נמי הלכה כב\"ה: בש\"א נר ומזון וכו': רב הונא בר יהודה איקלע לבי רבא חזייה לרבא דבריך אבשמים ברישא א\"ל מכדי ב\"ש וב\"ה אמאור לא פליגי דתניא בש\"א נר ומזון בשמים והבדלה ובה\"א נר ובשמים מזון והבדלה עני רבא בתריה זו דברי ר\"מ אבל ר' יהודה אומר לא נחלקו ב\"ש וב\"ה על המזון שהוא בתחלה ועל הבדלה שהיא בסוף על מה נחלקו על המאור ועל הבשמים שבש\"א על המאור ואח\"כ בשמים ובה\"א בשמים ואח\"כ מאור וא\"ר יוחנן נהגו העם כב\"ה אליבא דרבי יהודה: בש\"א שברא כו': אמר רבא בברא כ\"ע לא פליגי דברא משמע כי פליגי בבורא ב\"ש סברי בורא דעתיד למברא וב\"ה סברי בורא נמי דברא משמע מתיב רב יוסף (ישעיהו מה, ז) יוצר אור ובורא חשך (עמוס ד, יג) יוצר הרים ובורא רוח (ישעיהו מב, ה) בורא השמים ונוטיהם אלא א\"ר יוסף בברא ובורא כ\"ע לא פליגי דברא משמע כי פליגי במאור ומאורי דב\"ש סברי חדא נהורא איכא בנורא וב\"ה סברי טובא נהורי איכא בנורא תנ\"ה אמרו להם ב\"ה לב\"ש הרבה מאורות יש באור: אין מברכין כו': בשלמא נר משום דלא שבת אלא בשמים מ\"ט לא אמר רב יהודה אמר רב הכא במסבת עובדי כוכבים עסקינן מפני שסתם מסבת עובדי כוכבים לע\"ז היא הא מדקתני סיפא אין מברכין לא על הנר ולא על הבשמים של ע\"ז מכלל דרישא לאו בע\"ז עסקינן א\"ר חנינא מסורא מה טעם קאמר מה טעם אין מברכין לא על הנר ולא על הבשמים של עכו\"ם מפני שסתם מסבת עובדי כוכבים לע\"ז ת\"ר אור ששבת מברכין עליו ושלא שבת אין מברכין עליו (מאי שבת) ומאי לא שבת",
  "rashi": [
   {
    "dh": "תוכו ואוגנו ואזנו וידיו טהורין",
    "text": " — דכיון דטומאה זו דרבנן היא עבדו בה היכרא דלידעו דמדרבנן היא כי היכי דלא לשרוף עלה תרומה וקדשים והקילו בה וכן מפורש (בבכורות דף לח.) אוגנו שפתו הכפולה לצד חוץ הראוי לתשמיש אזנו כמו אזן החבית שקורין אנש\"א בלע\"ז וידיו כלי שיש לו יד כגון מחבת:"
   },
   {
    "dh": "גזרה משום ניצוצות",
    "text": " — שמא יתזו ניצוצות מתוכה על אחוריו ויטמאו משקין שמאחוריו מחמת אחורים ויטמאו את הידים הלכך נוטלים לידים תחלה שלא יטמאו את אחורי הכוס ולמאי דחיישי ב\"ה מחמת אחוריו לאו חששא הוא דהא אסור לאשתמושי ביה:"
   },
   {
    "dh": "וב\"ה סברי מותר להשתמש בו",
    "text": " — הלכך לחששא דידן איכא למיחש אבל לחששא דידכו ליכא למיחש דלא איכפת לן אם יטמאו אחוריו:"
   },
   {
    "dh": "הא עדיפא",
    "text": " — למזוג הכוס תחלה ואח\"כ נט\"י תכף לסעודה ולא אתיא חששא דניצוצות ומפקעה הלכתא וזו מהלכות סעודה היא:"
   },
   {
    "dh": "משקין שבמפה",
    "text": " — שמא יהא משקה טופח עליה מחמת נגוב הידים ויחזרו ויטמאו את הידים כשיקנח בה תמיד בתוך הסעודה:"
   },
   {
    "dh": "ונטמייה כסת למפה",
    "text": " — בלא משקים:"
   },
   {
    "dh": "אין כלי",
    "text": " — שאינו אב הטומאה מטמא כלים ולא אדם והוא יזהר שלא יגעו ידיו בכסת אם ראשונה היא לטומאה:"
   },
   {
    "dh": "מחמת שלחן",
    "text": " — כדמפרש לקמיה דסברי ב\"ה מותר להשתמש בשלחן שני:"
   },
   {
    "dh": "משום אוכלי תרומה",
    "text": " — שהשני פוסל את התרומה:"
   },
   {
    "dh": "אפילו הכי הא עדיפא",
    "text": " — לחוש שמא אירע מקרה שישתמשו בשלחן שני ולא יניחנה על גבי השלחן שלא תטמא את האוכלין מחמת משקין שבה מלחוש שלא תטמא מחמת כסת ותחזור ותטמא את הידים:"
   },
   {
    "dh": "מפסיד את האוכלין",
    "text": " — שמים אחרונים נתזין עליהם ונמאסים:"
   },
   {
    "dh": "ה\"ג בתוספתא בה\"א אם שמש ת\"ח הוא נוטל פירורין שיש בהן כזית ומניח פירורין שאין בהם כזית",
    "text": ""
   },
   {
    "dh": "מתני איפכא",
    "text": " — מפיך בהך סיפא דב\"ש לב\"ה ודב\"ה לב\"ש וקבע בהא נמי הלכה כב\"ה:"
   },
   {
    "dh": "וא\"ר יוחנן",
    "text": " — גרסי':"
   },
   {
    "dh": "דברא משמע",
    "text": " — לשעבר ויפה לאומרו שעל בריית האור שברא בששת ימי בראשית משבחין אותו לפי שבמו\"ש נברא כדאמרינן בפסחים (פ\"ד דף נד.):"
   },
   {
    "dh": "בורא",
    "text": " — דבר שהוא בורא תמיד והא לא שייכא הכא שהרי כבר נברא:"
   },
   {
    "dh": "הרבה מאורות",
    "text": " — שלהבת אדומה לבנה וירקרקת:"
   },
   {
    "dh": "משום דלא שבת",
    "text": " — ממלאכת עבירה שהעובד כוכבים עושה מלאכה לאורו ותניא לקמן אור שלא שבת אין מברכין עליו הואיל ונעבדה בו עבירה:"
   },
   {
    "dh": "במסבת עובדי כוכבים",
    "text": " — לאכילה לסעודה:"
   }
  ],
  "tosafot": [
   {
    "dh": "תכף לנטילת ידים סעודה",
    "text": " — והאי דלא חשיב ליה לעיל בפ' כ\"מ (ברכות דף מב.) בהדי אידך תכיפות משום דשנויה במשנה לא חש למתנייה:"
   },
   {
    "dh": "דבר אחר אין נטילת ידים לחולין מן התורה וכו'",
    "text": " — יש ספרים שכתוב בהן הכי קאמרי להו ב\"ש לבית הלל אפילו לדידכו דאמריתו אסור להשתמש בשלחן שני משום אוכלי תרומה הא עדיפא דאין נטילת ידים לחולין מן התורה מוטב וכו' ואל יטמא וכו' ול\"נ דהא קאמרי ב\"ש דאסור להשתמש בשלחן שני ודוחק לומר כמו שפירש רש\"י שמא במקרה בעלמא ישתמש אלא נראה כספרים שכתוב בהן מאי דבר אחר הכי קאמרי להו ב\"ה לב\"ש וכ\"ת מ\"ש גבי אוכלין דחיישינן ומ\"ש גבי ידים דלא חיישינן וכו' והשתא לא הוי האי דבר אחר כי ההיא דלעיל שאינו צריך לטעם ראשון אבל הכא האי ד\"א לא בא אלא לפרש טעמא דב\"ה קאמר וליישב דבריהם:"
   },
   {
    "dh": "פירורין דלית בהו כזית מותר לאבדן ביד",
    "text": " — מיהו קשה לעניותא כדאמרינן בפרק כל הבשר (חולין דף קה:):"
   },
   {
    "dh": "בכוליה פירקין הלכה כב\"ה לבר מהא",
    "text": " — וא\"ת והא בההוא דיחזור למקומו ויברך משמע דהלכה כב\"ש לקמן (ברכות דף נג:) בשמעתין מדעבדי אמוראי בתרייהו. י\"ל דלא חשיב לה משום דהתם אפי' ב\"ה מודו לב\"ש אלא שלא הטריחוהו לכך:"
   },
   {
    "dh": "נהגו העם כב\"ה אליבא דרבי יהודה",
    "text": " — תימא דאנן אפילו לכתחלה נוהגין כן ובפרק הדר (עירובין דף סב:) אומר נהגו אורויי לא מורינן ואי עבד הכי לא מהדרינן ליה וי\"ל דהתם איכא אמוראי דפליגי חד אמר הלכה והוה פירוש הלכה לכתחלה ומורינן הכי א\"כ נהגו דקאמר אידך הוי דיעבד אבל הכא יכול להיות דאין כאן אלא נהגו גרידא:"
   },
   {
    "dh": "בברא כ\"ע ל\"פ",
    "text": " — וא\"ת הואיל ול\"פ בלשון ברא אמאי אמר בורא וי\"ל דלשון קרא עדיף:"
   }
  ],
  "translations": []
 },
 {
  "id": "53a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נג",
  "amud": "א",
  "dafEn": "53a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אי נימא לא שבת מחמת מלאכה אפילו ממלאכה דהתירא והתניא אור של חיה ושל חולה מברכין עליו אר\"נ בר יצחק מאי שבת ששבת מחמת מלאכת עבירה תנ\"ה עששית שהיתה דולקת והולכת כל היום כולו למ\"ש מברכין עליה: ת\"ר נכרי שהדליק מישראל וישראל שהדליק מנכרי מברכין עליו נכרי מנכרי אין מברכין עליו מ\"ש נכרי מנכרי דלא משום דלא שבת א\"ה ישראל מנכרי נמי הא לא שבת וכי תימא הך איסורא אזל ליה והא אחרינא הוא ובידא דישראל קא מתילדא אלא הא דתניא המוציא שלהבת לר\"ה חייב אמאי חייב מה שעקר לא הניח ומה שהניח לא עקר אלא לעולם דאיסורא נמי איתיה וכי קא מברך אתוספתא דהתירא קא מברך אי הכי נכרי מנכרי נמי אין ה\"נ גזרה משום נכרי ראשון ועמוד ראשון: ת\"ר היה מהלך חוץ לכרך וראה אור אם רוב נכרים אינו מברך אם רוב ישראל מברך הא גופא קשיא אמרת אם רוב נכרים אינו מברך הא מחצה על מחצה מברך והדר תני אם רוב ישראל מברך הא מחצה על מחצה אינו מברך בדין הוא דאפי' מחצה על מחצה נמי מברך ואיידי (דתנ') רישא רוב נכרים תנא סיפא רוב ישראל: ת\"ר היה מהלך חוץ לכרך וראה תינוק ואבוקה בידו בודק אחריו אם ישראל הוא מברך אם נכרי הוא אינו מברך מאי איריא תינוק אפי' גדול נמי אמר רב יהודה אמר רב הכא בסמוך לשקיעת החמה עסקי' גדול מוכחא מילתא דודאי נכרי הוא תינוק אימר ישראל הוא אקרי ונקיט: ת\"ר היה מהלך חוץ לכרך וראה אור אם עבה כפי הכבשן מברך עליו ואם לאו אינו מברך עליו תני חדא אור של כבשן מברכין עליו ותניא אידך אין מברכין עליו לא קשיא הא בתחלה הא לבסוף תני חדא אור של תנור ושל כירים מברכין עליו ותניא אידך אין מברכין עליו לא קשיא הא בתחלה הא לבסוף תני חדא אור של בית הכנסת ושל בית המדרש מברכין עליו ותניא אידך אין מברכין עליו ל\"ק הא דאיכא אדם חשוב הא דליכא אדם חשוב ואי בעית אימא הא והא דאיכא אדם חשוב ולא קשיא הא דאיכא חזנא הא דליכא חזנא ואב\"א הא והא דאיכא חזנא ולא קשיא הא דאיכא סהרא והא דליכא סהרא: ת\"ר היו יושבין בבית המדרש והביאו אור לפניהם בש\"א כל אחד ואחד מברך לעצמו ובה\"א אחד מברך לכולן משום שנאמר (משלי יד, כח) ברוב עם הדרת מלך בשלמא ב\"ה מפרשי טעמא אלא בית שמאי מאי טעמא קסברי מפני בטול בית המדרש תניא נמי הכי של בית רבן גמליאל לא היו אומרים מרפא בבית המדרש מפני בטול בית המדרש: אין מברכין לא על הנר ולא על הבשמים של מתים: מ\"ט נר לכבוד הוא דעבידא בשמים לעבורי ריחא הוא דעבידי אמר רב יהודה אמר רב כל שמוציאין לפניו ביום ובלילה אין מברכין עליו וכל שאין מוציאין לפניו אלא בלילה מברכין עליו אמר רב הונא בשמים של בית הכסא ושמן העשוי להעביר את הזוהמא אין מברכין עליו למימרא דכל היכא דלאו לריחא עבידא לא מברכין עלויה מיתיבי הנכנס לחנותו של בשם והריח ריח אפילו ישב שם כל היום כלו אינו מברך אלא פעם אחד נכנס ויצא נכנס ויצא מברך על כל פעם ופעם והא הכא דלאו לריחא הוא דעבידא וקמברך אין לריחא נמי הוא דעבידא כי היכי דנירחו אינשי וניתו ונזבון מיניה תנו רבנן היה מהלך חוץ לכרך והריח ריח אם רוב עובדי כוכבים אינו מברך אם רוב ישראל מברך רבי יוסי אומר אפי' רוב ישראל נמי אינו מברך מפני שבנות ישראל מקטרות לכשפים אטו כולהו לכשפים מקטרן ה\"ל מיעוטא לכשפים ומיעוטא נמי לגמר את הכלים אשתכח רובא דלאו לריחא עביד וכל רובא דלאו לריחא עביד לא מברך אמר ר' חייא בר אבא אמר רבי יוחנן המהלך בערבי שבתות בטבריא ובמוצאי שבתות בצפורי והריח ריח אינו מברך מפני שחזקתו אינו עשוי אלא לגמר בו את הכלים תנו רבנן היה מהלך בשוק של עכו\"ם נתרצה להריח הרי זה חוטא:",
  "rashi": [
   {
    "dh": "אי נימא לא שבת מחמת מלאכה ואפי' היא מלאכה של היתר",
    "text": " — כגון של חולה ושל חיה קאמר דאין מברכין:"
   },
   {
    "dh": "עששית",
    "text": " — לנטירנ\"א:"
   },
   {
    "dh": "שהיתה דולקת והולכת",
    "text": " — מע\"ש ובבית ישראל:"
   },
   {
    "dh": "למ\"ש מברכין",
    "text": " — לפי שלא נעבדה בה עבירה שלא הודלקה בשבת:"
   },
   {
    "dh": "נכרי שהדליק מישראל",
    "text": " — משחשכה מ\"ש:"
   },
   {
    "dh": "הך איסורא אזלא",
    "text": " — מתוך ששלהבת דולקת והולכת קמא קמא פרח ליה:"
   },
   {
    "dh": "המוציא שלהבת לר\"ה",
    "text": " — בשבת חייב ומוקמינן לה במסכת ביצה כגון דשייפיה לחרס משחא ואתלי בה נורא דגחלת ליכא אלא שלהבת ומשום חרס לא מחייב דלית בה שיעורא:"
   },
   {
    "dh": "מה שעקר לא הניח",
    "text": " — והוצאת שבת לא מחייבא עד דאיכא עקירה מרשות זו והנחה ברשות זו:"
   },
   {
    "dh": "גזירה משום נכרי ראשון ועמוד ראשון",
    "text": " — אי שרית בנכרי שהדליק מנכרי משחשכה אתי לברוכי בנכרי שהדליק מבעוד יום ובאותו אור עצמו שלא נתוסף משחשכה כגון שמברך עליו סמוך לחשכה מיד:"
   },
   {
    "dh": "גדול מוכחא מלתא דנכרי הוא",
    "text": " — ואין צריך לבדוק אחריו דאי איתא דישראל הוא לא היה ממהר סמוך לחשכה מיד לאחוז האור בידו:"
   },
   {
    "dh": "כפי הכבשן",
    "text": " — ששורפים בו אבנים לסיד אם עבה כאור היוצא מפי הכבשן נהורא בריא היא ולהשתמש לאורה היא נעשית:"
   },
   {
    "dh": "ואם לאו",
    "text": " — לאו לאורה נעשית אלא לבשל ואין מברכין אלא על שנעשה להאיר:"
   },
   {
    "dh": "בתחלה",
    "text": " — בתחלת שרפת אבנים אין האור להאיר:"
   },
   {
    "dh": "בסוף",
    "text": " — לאחר שנשרפו האבנים רובן מדליקין אור גדול מלמעלה למרק שרפת האבנים ומשתמשין נמי לאורה:"
   },
   {
    "dh": "של תנור",
    "text": " — בסוף מברכין עליו לאחר שהוסק התנור והפת בתוכה מדליקין קסמין דקין בפיו להאיר ולקלוט חומו לתוכו וכיון דמשתמש לאורו מברכין עליו:"
   },
   {
    "dh": "אור של בית הכנסת",
    "text": " — בדאיכא אדם חשוב לכבודו הדליקוה ולא שצריך לאור אלא לכבוד בעלמא ואין מברכין עליו:"
   },
   {
    "dh": "ליכא אדם חשוב",
    "text": " — להאיר להם הדליקוה ומברכין:"
   },
   {
    "dh": "הא והא דאיכא אדם חשוב",
    "text": " — ואי איכא חזנא שמש שאוכל בבית הכנסת אף לאורה עשויה שיאכל החזן לאורה ומברכין:"
   },
   {
    "dh": "הא והא דאיכא חזנא",
    "text": " — ואיכא סהרא שהחזן יכול לאכול לאורה אין מברכין על הנר שלא להאיר הדליקוה אלא לכבוד אדם חשוב:"
   },
   {
    "dh": "מפני בטול בית המדרש",
    "text": " — שבזמן שאחד מברך לכולם הם צריכים לשתוק מגרסתם כדי שיתכונו כולם וישמעו אליו ויענו אמן:"
   },
   {
    "dh": "מרפא",
    "text": " — לאדם המתעטש שרגילים לומר אסותא:"
   },
   {
    "dh": "נר לכבוד",
    "text": " — המת עבידא:"
   },
   {
    "dh": "בשמים עבידי לעבורי ריחא",
    "text": " — דסרחונו של מת עבידי ולא להריח:"
   },
   {
    "dh": "כל",
    "text": " — מת שהוא חשוב להוציא לפניו נר ביום אם הוציאו בלילה במוצאי שבת לקבורה אין מברכין על אותו נר דלכבוד עבידא ולא להאיר:"
   },
   {
    "dh": "וכל",
    "text": " — מת שאינו חשוב להוציא נר לפניו ביום אלא בלילה מברכין עליו אם הוציאוהו במוצאי שבת לקבורה:"
   },
   {
    "dh": "מברכין עליו",
    "text": " — דלהאיר עבידא:"
   },
   {
    "dh": "בשמים",
    "text": " — שמוליך אדם אסטניס לבית הכסא להעביר ממנו ריח רע של בהכ\"ס אין מברכין עליו:"
   },
   {
    "dh": "ושמן העשוי להעביר את הזוהמא",
    "text": " — שמביאים בסוף הסעודה לסוך ידים מזוהמות והוא מבושם בבשמים:"
   },
   {
    "dh": "אין מברכין עליו",
    "text": " — בורא עצי בשמים אלא בורא שמן ערב מברכין אם שמן של אפרסמון הוא והא דאמר בכיצד מברכין (דף מג.) האי משחא כבישה וטחינה מברכין עליו בע\"ב לא בבא בתוך הסעודה קאמר אלא בבא להריח:"
   },
   {
    "dh": "לגמר את הכלים",
    "text": " — לבשם בעשנו את הבגדים:"
   },
   {
    "dh": "בטבריא",
    "text": " — היו רגילים לגמר ערבי שבתות ובצפורי במו\"ש:"
   }
  ],
  "tosafot": [
   {
    "dh": "וכי תימא הך איסורא אזל ליה",
    "text": " — ה\"מ לאקשויי אי הכי נכרי מנכרי נמי אלא עדיפא מיניה פריך דה\"מ לשנויי כדמשני בסמוך:"
   },
   {
    "dh": "גזירה משום נכרי ראשון ונכרי ראשון משום עמוד ראשון וכו'",
    "text": " — חדא גזרה היא דגזרו חכמים כל אש נכרי שביד הנכרי דאי לא הא לא קיימא הא אבל נכרי שהדליק מישראל וישראל מנכרי מברכין עליו והכי קיימא לן:"
   },
   {
    "dh": "הא דאיכא אדם חשוב",
    "text": " — אם כן משום כבודו של חשוב ולא לאורה כך פרש\"י ור\"ח פירש איפכא באדם חשוב לאורה ובדליכא אדם חשוב עשוי לכבוד בית הכנסת:"
   },
   {
    "dh": "אין מברכין עליו",
    "text": " — פירש\"י מיהו מברכין עליו ברוך שברא שמן ערב והא דאמר לעיל בכיצד מברכין (ברכות ד' מג.) האי משחא כבישא מברכין עליו בורא עצי בשמים היינו בבא להריח ולא מיירי בתוך הסעודה:"
   }
  ],
  "translations": []
 },
 {
  "id": "53b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נג",
  "amud": "ב",
  "dafEn": "53b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ואין מברכין על הנר עד שיאותו: אמר רב יהודה אמר רב לא יאותו יאותו ממש אלא כל שאילו עומד בקרוב ומשתמש לאורה ואפילו ברחוק מקום וכן אמר רב אשי ברחוק מקום שנינו מיתיבי היתה לו נר טמונה בחיקו או בפנס או שראה שלהבת ולא נשתמש לאורה או נשתמש לאורה ולא ראה שלהבת אינו מברך עד שיראה שלהבת וישתמש לאורה בשלמא משתמש לאורה ולא ראה שלהבת משכחת לה דקיימא בקרן זוית אלא ראה שלהבת ולא נשתמש לאורה היכי משכחת לה לאו דמרחקא לא כגון דעמיא ואזלא: ת\"ר גחלים לוחשות מברכין עליהן אוממות אין מברכין עליהן ה\"ד לוחשות אמר רב חסדא כל שאילו מכניס לתוכן קיסם ודולקת מאיליה איבעיא להו אוממות או עוממות ת\"ש דאמר רב חסדא בר אבדימי (יחזקאל לא, ח) ארזים לא עממוהו בגן אלהים ורבא אמר יאותו ממש וכמה אמר עולא כדי שיכיר בין איסר לפונדיון חזקיה אמר כדי שיכיר בין מלוזמא של טבריא למלוזמא של צפורי רב יהודה מברך אדבי אדא דיילא רבא מברך אדבי גוריא בר חמא אביי מברך אדבי בר אבוה אמר רב יהודה אמר רב אין מחזרין על האור כדרך שמחזרים על המצות א\"ר זירא מריש הוה מהדרנא כיון דשמענא להא דרב יהודה אמר רב אנא נמי לא מהדרנא אלא אי מקלע לי ממילא מבריכנא: מי שאכל וכו': אמר רב זביד ואיתימא רב דימי בר אבא מחלוקת בשכח אבל במזיד ד\"ה יחזור למקומו ויברך פשיטא ושכח תנן מהו דתימא ה\"ה אפילו במזיד והאי דקתני ושכח להודיעך כחן דב\"ש קמ\"ל תניא אמרו להם ב\"ה לב\"ש לדבריכם מי שאכל בראש הבירה ושכח וירד ולא ברך יחזור לראש הבירה ויברך אמרו להן ב\"ש לב\"ה לדבריכם מי ששכח ארנקי בראש הבירה לא יעלה ויטלנה לכבוד עצמו הוא עולה לכבוד שמים לא כל שכן הנהו תרי תלמידי חד עביד בשוגג כב\"ש ואשכח ארנקא דדהבא וחד עביד במזיד כב\"ה ואכליה אריא רבה בב\"ח הוה קאזל בשיירתא אכל ואשתלי ולא בריך אמר היכי אעביד אי אמינא להו אנשאי לברך אמרי לי בריך כל היכא דמברכת לרחמנא מברכת מוטב דאמינא להו אנשאי יונה דדהבא אמר להו אנטרו לי דאנשאי יונה דדהבא אזיל ובריך ואשכח יונה דדהבא ומאי שנא יונה דמתילי כנסת ישראל ליונה דכתיב (תהלים סח, יד) כנפי יונה נחפה בכסף ואברותיה בירקרק חרוץ מה יונה אינה ניצולת אלא בכנפיה אף ישראל אינן ניצולין אלא במצות: עד אימתי הוא וכו': כמה שיעור עכול א\"ר יוחנן כל זמן שאינו רעב וריש לקיש אמר כל זמן שיצמא מחמת אכילתו א\"ל רב יימר בר שלמיא למר זוטרא ואמרי לה רב יימר בר שיזבי למר זוטרא מי אמר ריש לקיש הכי והאמר רב אמי אמר ריש לקיש כמה שיעור עכול כדי להלך ארבע מילין ל\"ק כאן באכילה מרובה כאן באכילה מועטת: בא להם יין וכו': למימרא דישראל אע\"ג דלא שמע כולה ברכה עונה וכי לא שמע היכי נפיק אמר חייא בר רב בשלא אכל עמהן וכן אמר רב נחמן אמר רבה בר אבוה בשלא אכל עמהן א\"ל רב לחייא בריה ברי חטוף ובריך וכן אמר רב הונא לרבה בריה חטוף ובריך למימרא דמברך עדיף ממאן דעני אמן והתניא ר' יוסי אומר גדול העונה אמן יותר מן המברך א\"ל ר' נהוראי השמים כן הוא תדע שהרי גוליירין יורדין ומתגרין [במלחמה] וגבורים יורדין ומנצחין תנאי היא דתניא אחד המברך ואחד העונה אמן במשמע אלא שממהרין למברך יותר מן העונה אמן בעי מיניה שמואל מרב מהו לענות אמן אחר תינוקות של בית רבן אמר ליה אחר הכל עונין אמן חוץ מתינוקות של בית רבן הואיל ולהתלמד עשויין וה\"מ בדלא עידן מפטרייהו אבל בעידן מפטרייהו עונין ת\"ר שמן מעכב את הברכה דברי רבי זילאי רבי זיואי אומר אינו מעכב רבי אחא אומר שמן טוב מעכב ר' זוהמאי אומר כשם שמזוהם פסול לעבודה כך ידים מזוהמות פסולות לברכה אמר רב נחמן בר יצחק אנא לא זילאי ולא זיואי ולא זוהמאי ידענא אלא מתניתא ידענא דאמר רב יהודה אמר רב ואמרי לה במתניתא תנא (ויקרא כ, ז) והתקדשתם אלו מים ראשונים והייתם קדושים אלו מים אחרונים כי קדוש זה שמן אני יי' אלהיכם זו ברכה: הדרן עלך אלו דברים",
  "rashi": [
   {
    "dh": "לא יאותו ממש",
    "text": " — שאפילו לא נהנה ממנו מברכין עליו ומאי עד שיאותו עד שיהא אורו ראוי ליהנות ממנו לעומדים סמוך לו ואז מברכים עליו אפי' הרחוקים ממנו ובלבד שיראוהו:"
   },
   {
    "dh": "בפנס",
    "text": " — בעששית:"
   },
   {
    "dh": "יאותו ממש",
    "text": " — עומד בסמוך:"
   },
   {
    "dh": "וכמה",
    "text": " — הוא צריך להיות בסמוך:"
   },
   {
    "dh": "מלוזמא",
    "text": " — משקל:"
   },
   {
    "dh": "רב יהודה",
    "text": " — היה מברך על אור שבבית אדא דיילא ורחוק מביתו היה רב יהודה לטעמיה דלא בעי סמוך:"
   },
   {
    "dh": "רבא מברך אדבי גוריא בר חמא",
    "text": " — סמוך לביתו היה רבא לטעמיה דאמר סמוך בעינן:"
   },
   {
    "dh": "אין מחזרין על האור",
    "text": " — אם אין לו אור א\"צ לחזר אחריו:"
   },
   {
    "dh": "חד עבד בשוגג כב\"ש",
    "text": " — אע\"פ ששגג ונעקר מן המקום ע\"י שכחה החמיר על עצמו כב\"ש וחזר למקום שאכל וברך:"
   },
   {
    "dh": "חד עבד במזיד",
    "text": " — נעקר ממקום שאכל במזיד כדי לברך במקום אחר שהוצרך לילך:"
   },
   {
    "dh": "אנשאי יונה דדהבא",
    "text": " — שכחתי יונה של זהב:"
   },
   {
    "dh": "יונה אינה נצולת אלא בכנפיה",
    "text": " — או בורחת או נלחמת בראשי אגפיה:"
   },
   {
    "dh": "אכילה מרובה",
    "text": " — ד' מילין:"
   },
   {
    "dh": "בא להם יין אחר המזון",
    "text": " — הא פריש לה בגמרא בריש פרקין לב\"ש אין ברכת המזון טעונה כוס ולב\"ה טעונה כוס:"
   },
   {
    "dh": "היכי נפיק",
    "text": " — קס\"ד באחד מן המסובין עסקינן במתני':"
   },
   {
    "dh": "חטוף ובריך",
    "text": " — כשמושיטין כוס של ברכה הוי מחזר שיתנהו לך ותברך:"
   },
   {
    "dh": "במשמע",
    "text": " — העונה והמברך במשמע קומו ברכו את ה' אלהיכם בס' עזרא (נחמיה ט׳:ה׳) ואומר ויברכו שם כבודך והיא עניית אמן שבמקדש במסכת תענית (פ\"ב דף טז: ולקמן ברכות דף סג.) מפרש קומו ברכו בתחלת ברכה ויברכו שם כבודך (נחמיה ט׳:ה׳) במקום עניית אמן שבמקדש אומר בשכמל\"ו:"
   },
   {
    "dh": "שממהרין למברך",
    "text": " — ליתן שכר:"
   },
   {
    "dh": "אחר תינוקות",
    "text": " — כשלומדים ברכות מפי רבן:"
   },
   {
    "dh": "הואיל ולהתלמד עשויין",
    "text": " — שאין מתכוונים לברך אלא ללמד:"
   },
   {
    "dh": "אבל בעידן מפטרייהו",
    "text": " — כשאומרים ההפטרה ומברכין בתורה ובנביא עוני' אחריהן אמן:"
   },
   {
    "dh": "שמן מעכב את הברכה",
    "text": " — שמן שהיו רגילין להביא בסוף הסעודה לסוך אחר הסעודה את הידים אחר מים אחרונים להעביר את זוהמתן:"
   },
   {
    "dh": "מעכב את הברכה",
    "text": " — שאסור לזמן עד שיובא וכן לענין שמעכב ברכות כל דבר הבא בקנוח סעודה שמותר לאכלו בלא ברכה עד שיסכוהו:"
   },
   {
    "dh": "שמן טוב",
    "text": " — שיש בו בשמים מעכב את הברכה למי שרגיל בו:"
   },
   {
    "dh": "הדרן עלך אלו דברים",
    "text": ""
   }
  ],
  "tosafot": [
   {
    "dh": "באכילה מרובה",
    "text": " — ד' מילין כך פירש\"י ולי נראה דזה מועט יותר מאכילה מועטת אלא נראה לפרש איפכא אכילה מרובה כל זמן שהוא צמא דאין שם קצבה אבל מועט ד' מילין:"
   },
   {
    "dh": "והייתם קדושים אלו מים אחרונים",
    "text": " — דוקא להם שהיו רגילין ליטול ידיהם אחר הסעודה מפני מלח סדומית אבל אנו שאין מלח סדומית מצוי בינינו ואין אנו רגילין ליטול אחר הסעודה אין הנטילה מעכבת עלינו לברך ומיהו אנשים מעונגים הרגילין ליטול ידיהן אחר הסעודה ודאי להם מעכבת הנטילה לברך ברכת המזון וצריכים ליטול את ידיהם קודם בהמ\"ז:"
   },
   {
    "dh": "הדרן עלך אלו דברים",
    "text": ""
   }
  ],
  "translations": []
 },
 {
  "id": "54a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נד",
  "amud": "א",
  "dafEn": "54a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "הרואה מקום שנעשו בו נסים לישראל אומר ברוך שעשה נסים לאבותינו במקום הזה מקום שנעקרה ממנו עכו\"ם אומר ברוך שעקר עכו\"ם מארצנו על הזיקין ועל הזועות ועל הרעמים ועל הרוחות ועל הברקים אומר ברוך שכחו וגבורתו מלא עולם על ההרים ועל הגבעות ועל הימים ועל הנהרות ועל המדברות אומר ברוך עושה בראשית רבי יהודה אומר הרואה את הים הגדול אומר ברוך שעשה את הים הגדול בזמן שרואהו לפרקים על הגשמים ועל בשורות טובות אומר ברוך הטוב והמטיב על בשורות רעות אומר ברוך דיין האמת בנה בית חדש וקנה כלים חדשים אומר ברוך שהחיינו וקיימנו והגיענו לזמן הזה מברך על הרעה מעין על הטובה ועל הטובה מעין על הרעה והצועק לשעבר הרי זו תפלת שוא היתה אשתו מעוברת ואומר יהי רצון שתלד אשתי זכר הרי זו תפלת שוא היה בא בדרך ושמע קול צוחה בעיר ואומר יהי רצון שלא תהא בתוך ביתי הרי זו תפלת שוא הנכנס לכרך מתפלל שתים אחת בכניסתו ואחת ביציאתו בן עזאי אומר ארבע שתים בכניסתו ושתים ביציאתו נותן הודאה על שעבר וצועק על העתיד חייב אדם לברך על הרעה כשם שמברך על הטובה שנאמר (דברים ו, ה) ואהבת את ה' אלהיך בכל לבבך וגו' בכל לבבך בשני יצריך ביצר טוב וביצר הרע ובכל נפשך אפילו הוא נוטל את נפשך ובכל מאדך בכל ממונך ד\"א בכל מאדך בכל מדה ומדה שהוא מודד לך הוי מודה לו לא יקל אדם את ראשו כנגד שער המזרח שהוא מכוון כנגד בית קדשי הקדשים ולא יכנס להר הבית במקלו ובמנעלו ובפונדתו ובאבק שעל רגליו ולא יעשנו קפנדריא ורקיקה מקל וחומר כל חותמי ברכות שבמקדש היו אומרים עד העולם משקלקלו הצדוקים ואמרו אין עולם אלא אחד התקינו שיהו אומרים מן העולם ועד העולם והתקינו שיהא אדם שואל את שלום חברו בשם שנאמר (רות ב, ד) והנה בעז בא מבית לחם ויאמר לקוצרים ה' עמכם ויאמרו לו יברכך ה' ואומר (שופטים ו, יב) ה' עמך גבור החיל ואומר (משלי כג, כב) אל תבוז כי זקנה אמך ואומר (תהלים קיט, קכו) עת לעשות לה' הפרו תורתך רבי נתן אומר הפרו תורתך משום עת לעשות לה':",
  "gemara": "מנא הני מילי אמר רבי יוחנן דאמר קרא (שמות יח, י) ויאמר יתרו ברוך ה' אשר הציל וגו' אניסא דרבים מברכינן אניסא דיחיד לא מברכינן והא ההוא גברא דהוה קא אזיל בעבר ימינא נפל עליה אריא אתעביד ליה ניסא ואיתצל מיניה אתא לקמיה דרבא וא\"ל כל אימת דמטית להתם בריך ברוך שעשה לי נס במקום הזה מר בריה דרבינא הוה קאזיל בפקתא דערבות וצחא למיא איתעביד ליה ניסא איברי ליה עינא דמיא ואישתי ותו זמנא חדא הוה קאזיל ברסתקא דמחוזא ונפל עליה גמלא פריצא איתפרקא ליה אשיתא על לגוה כי מטא לערבות בריך ברוך שעשה לי נס בערבות ובגמל כי מטא לרסתקא דמחוזא בריך ברוך שעשה לי נס בגמל ובערבות אמרי אניסא דרבים כולי עלמא מיחייבי לברוכי אניסא דיחיד איהו חייב לברוכי תנו רבנן הרואה מעברות הים ומעברות הירדן מעברות נחלי ארנון אבני אלגביש במורד בית חורון ואבן שבקש לזרוק עוג מלך הבשן על ישראל ואבן שישב עליה משה בשעה שעשה יהושע מלחמה בעמלק ואשתו של לוט וחומת יריחו שנבלעה במקומה על כולן צריך שיתן הודאה ושבח לפני המקום בשלמא מעברות הים דכתיב (שמות יד, טז) ויבאו בני ישראל בתוך הים ביבשה מעברות הירדן דכתיב (יהושע ג, יז) ויעמדו הכהנים נושאי הארון ברית ה' בחרבה בתוך הירדן הכן וכל ישראל עוברים בחרבה עד אשר תמו כל הגוי לעבור את הירדן אלא מעברות נחלי ארנון מנלן דכתיב (במדבר כא, יד) על כן יאמר בספר מלחמות ה' את והב בסופה וגו' תנא את והב בסופה שני מצורעים היו דהוו מהלכין בסוף מחנה ישראל כי הוו קא חלפי ישראל אתו אמוראי",
  "rashi": [
   {
    "dh": "הרואה מקום שנעשו בו נסים לישראל",
    "text": " — כגון הנך דקתני לקמן מעברות הים והירדן ונחלי ארנון כו':"
   },
   {
    "dh": "זיקין וזועות ורעמים",
    "text": " — מפרש בגמרא:"
   },
   {
    "dh": "מלא עולם",
    "text": " — לפי שאלו נראין או נשמעין למרחוק:"
   },
   {
    "dh": "ברוך עושה בראשית",
    "text": " — ובגמרא (ד' נט.) פריך אטו הנך דלעיל לאו מעשה בראשית נינהו:"
   },
   {
    "dh": "לפרקים",
    "text": " — מפרש בגמרא (שם ע\"ב) ולפי שהוא חשוב וגדול מכולן קבע ליה רבי יהודה ברכה לעצמו:"
   },
   {
    "dh": "מברך על הרעה מעין על הטובה",
    "text": " — דיין האמת:"
   },
   {
    "dh": "ועל הטובה מעין על הרעה",
    "text": " — הטוב והמטיב ובגמרא מפרש היכי דמי:"
   },
   {
    "dh": "הנכנס לכרך",
    "text": " — המהלך בדרך וצריך לעבור כרך ושם מצויים מושלים רעים ומחפשים עלילות:"
   },
   {
    "dh": "אחת בכניסתו",
    "text": " — מתפלל שיכנס לשלום:"
   },
   {
    "dh": "ביציאתו",
    "text": " — מתפלל שיצא לשלום:"
   },
   {
    "dh": "ארבע",
    "text": " — כדמפרש נותן הודאה על שעבר וצועק על העתיד נמצאו ארבע כדמפרש בגמרא:"
   },
   {
    "dh": "חייב אדם לברך על הרעה כו'",
    "text": " — מפרש בגמרא:"
   },
   {
    "dh": "דבר אחר בכל מאדך",
    "text": " — מדות מדודות לך בין מדה טובה בין מדת פורענות:"
   },
   {
    "dh": "לא יקל ראשו",
    "text": " — לא ינהג קלות ראש:"
   },
   {
    "dh": "כנגד שער מזרחי",
    "text": " — חוץ להר הבית אשר בחומה הנמוכה אשר לרגלי הבית במזרח לפי שכל השערים מכוונים זה כנגד זה שער מזרח שער עזרת נשים ושער עזרת ישראל ופתח האולם וההיכל ובית קדשי הקדשים בימי מקדש ראשון כשהיה אמה טרקסין:"
   },
   {
    "dh": "בפונדתו",
    "text": " — חגור חלול ונותנין בו מעות:"
   },
   {
    "dh": "מק\"ו",
    "text": " — בגמרא מפרש ליה:"
   },
   {
    "dh": "כל חותמי ברכות שבמקדש היו אומרים עד העולם",
    "text": " — במסכת תענית (פ\"ב דף טז:) אמרינן אין עונין אמן במקדש המברך אומר בסוף כל ברכה ברוך אתה ה' אלהי ישראל מן העולם ועד העולם ברוך חונן הדעת וכן בכולם והעונין אומרים ברוך שם כבוד מלכותו לעולם ועד וילפינן לה מקרא דתפלת עזרא וסיעתו ואשמעינן הכא דבמקדש ראשון לא היו אומרים אלא ברוך ה' אלהי ישראל עד מן העולם:"
   },
   {
    "dh": "משקלקלו הצדוקים",
    "text": " — ואמרו אין עולם אלא זה:"
   },
   {
    "dh": "התקינו",
    "text": " — עזרא וסיעתו שיהו אומרים מן העולם ועד העולם לומר ששני עולמות יש להוציא מלב הצדוקים הכופרים בתחיית המתים:"
   },
   {
    "dh": "שיהו אומרים מן העולם ועד העולם",
    "text": " — לומר ששני עולמות יש להוציא מלב הכופרים בתחיית המתים:"
   },
   {
    "dh": "שיהא אדם שואל לשלום חבירו בשם",
    "text": " — בשמו של הקב\"ה ולא אמרינן מזלזל הוא בכבודו של מקום בשביל כבוד הבריות להוציא שם שמים עליו ולמדו מבעז שאמר ה' עמכם ומן המלאך שאמר לגדעון ה' עמך גבור החיל:"
   },
   {
    "dh": "ואומר אל תבוז כי זקנה אמך",
    "text": " — למוד מדברי זקני אומתך לעשות מה שראית שעשו הם ובגמר' מפרש מאי ואומר:"
   },
   {
    "dh": "ואומר עת לעשות לה' הפרו תורתך",
    "text": " — פעמים שמבטלים דברי תורה כדי לעשות לה' אף זה המתכוין לשאול לשלום חברו זהו רצונו של מקום שנאמ' בקש שלום ורדפהו מותר להפר תורה ולעשות דבר הנראה אסור:"
   },
   {
    "dh": "גמ' ה\"ג מנלן דמברכינן אניסא אמר רבי יוחנן דאמר קרא ויאמר יתרו ברוך ה' אשר הציל אתכם וגו'",
    "text": ""
   },
   {
    "dh": "בעבר ימינא",
    "text": " — שם מדינה בדרומו של פרת:"
   },
   {
    "dh": "בפקתא",
    "text": " — בקעה:"
   },
   {
    "dh": "ערבות",
    "text": " — שם מקום:"
   },
   {
    "dh": "וצחא למיא",
    "text": " — צמא למים:"
   },
   {
    "dh": "ברסתקא",
    "text": " — בשוק:"
   },
   {
    "dh": "גמלא פריצא",
    "text": " — גמל משוגע שעסקיו רעים:"
   },
   {
    "dh": "אתפרקא ליה אשיתא",
    "text": " — נפלה חומת בית שהיה סמוך לו ונכנס לתוך הבית מפני הגמל:"
   },
   {
    "dh": "מעברות הים",
    "text": " — מקום שעברו ישראל בים סוף:"
   },
   {
    "dh": "ומעברות הירדן",
    "text": " — בימי יהושע:"
   },
   {
    "dh": "מעברות נחלי ארנון",
    "text": " — לקמן מפרש מאי ניסא:"
   },
   {
    "dh": "במורד בית חורון",
    "text": " — בימי יהושע היה בספר יהושע:"
   },
   {
    "dh": "ואבן שזרק עוג",
    "text": " — לקמן מפרש:"
   },
   {
    "dh": "ומעברות נחלי ארנון",
    "text": " — לקמן מפרש מאי ניסא:"
   }
  ],
  "tosafot": [
   {
    "dh": "הרואה וכו' אומר ברוך שעשה נסים לאבותינו וכו'",
    "text": " — פירש רבי' שמעיה דכל הני ברכות צריכות להזכרת שם ומלכות ברוך אתה ה' אלהינו מלך העולם וכן כתב רבינו שמשון מקוצי כי הר\"י היה רגיל לברך על הברקים ברוך אתה ה' אלהינו מלך העולם שכחו וגבורתו מלא עולם וכן פר\"י ומייתי ירושלמי דפירקין (ירושלמי ברכות דף סב ב) רבי זעירא כו' כל ברכה שאין בה וכו' ונראה לרבינו דדוקא לרואה משלשים יום לשלשים יום דומיא דרואה ים הגדול לפרקים דאמר בירושלמי (ירושלמי ברכות דף סד ב) דפרקים היינו שלשים יום:"
   },
   {
    "dh": "שעקר עכו\"ם מארצנו",
    "text": " — בירושלמי (ירושלמי ברכות דף סג ב) מתני כשנעקרה עכו\"ם מכל ארץ ישראל:"
   },
   {
    "dh": "על הרוחות אומר שכחו וגבורתו מלא עולם",
    "text": " — ירושלמי מתני' כשבאים בזעם אבל כשבאין בנחת אומר ברוך עושה בראשית:"
   },
   {
    "dh": "על הנהרות",
    "text": " — לאו על כל נהרות איירי אלא ארבע נהרות דכתיבי בקרא כמו חדקל ופרת:"
   },
   {
    "dh": "הרואה וכו' אומר ברוך שעשה נסים לאבותינו וכו'",
    "text": " — פירש רבי' שמעיה דכל הני ברכות צריכות להזכרת שם ומלכות ברוך אתה ה' אלהינו מלך העולם וכן כתב רבינו שמשון מקוצי כי הר\"י היה רגיל לברך על הברקים ברוך אתה ה' אלהינו מלך העולם שכחו וגבורתו מלא עולם וכן פר\"י ומייתי ירושלמי דפירקין (ירושלמי ברכות דף סב ב) רבי זעירא כו' כל ברכה שאין בה וכו' ונראה לרבינו דדוקא לרואה משלשים יום לשלשים יום דומיא דרואה ים הגדול לפרקים דאמר בירושלמי (ירושלמי ברכות דף סד ב) דפרקים היינו שלשים יום:"
   },
   {
    "dh": "אבני אלגביש במורד בית חורון",
    "text": " — וה\"ה מקום שנפל שם מחנה סנחריב דלא גרע חזקיה מאדם המסוים אלא לא חש לפרש לפי שידוע המקום סביב ירושלים. ושוב היה נראה לרבינו יהודה כיון שאין הנס ידוע ע\"פ המקום כי הנך אין מברכין עליו אלא אותם שנעשה להם הנס. וכן כל אדם מברך על ניסו אף על פי שאינו ניכר מתוך המקום:"
   }
  ],
  "translations": []
 },
 {
  "id": "54b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נד",
  "amud": "ב",
  "dafEn": "54b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "עבדי להון נקירותא וטשו בהון אמרי כי חלפי ישראל הכא נקטלינון ולא הוו ידעי דארון הוה מסגי קמייהו דישראל והוה ממיך להו טורי מקמייהו כיון דאתא ארון אדבקו טורי בהדי הדדי וקטלינון ונחת דמייהו לנחלי ארנון כי אתו את והב חזו דמא דקא נפיק מביני טורי אתו ואמרי להו לישראל ואמרו שירה היינו דכתיב (במדבר כא, טו) ואשד הנחלים אשר נטה לשבת ער ונשען לגבול מואב. אבני אלגביש מאי אבני אלגביש תנא אבנים שעמדו על גב איש וירדו על גב איש עמדו על גב איש זה משה דכתיב (במדבר יב, ג) והאיש משה עניו מאד וכתיב (שמות ט, לג) ויחדלו הקולות והברד ומטר לא נתך ארצה ירדו על גב איש זה יהושע דכתיב (במדבר כז, יח) קח לך את יהושע בן נון איש אשר רוח בו וכתיב (יהושע י, יא) ויהי בנוסם מפני בני ישראל הם במורד בית חורון וה' השליך עליהם אבנים גדולות. אבן שבקש עוג מלך הבשן לזרוק על ישראל גמרא גמירי לה אמר מחנה ישראל כמה הוי תלתא פרסי איזיל ואיעקר טורא בר תלתא פרסי ואישדי עלייהו ואיקטלינהו אזל עקר טורא בר תלתא פרסי ואייתי על רישיה ואייתי קודשא בריך הוא עליה קמצי ונקבוה ונחית בצואריה הוה בעי למשלפה משכי שיניה להאי גיסא ולהאי גיסא ולא מצי למשלפה והיינו דכתיב (תהלים ג, ח) שני רשעים שברת וכדר' שמעון בן לקיש דא\"ר שמעון בן לקיש מאי דכתיב שני רשעים שברת אל תקרי שברת אלא שרבבת משה כמה הוה עשר אמות שקיל נרגא בר עשר אמין שוור עשר אמין ומחייה בקרסוליה וקטליה. ואבן שישב עליה משה דכתיב (שמות יז, יב) וידי משה כבדים ויקחו אבן וישימו תחתיו וישב עליה. ואשתו של לוט שנאמר (בראשית יט, כו) ותבט אשתו מאחריו ותהי נציב מלח וחומת יריחו שנבלעה דכתיב (יהושע ו, כ) ותפול החומה תחתיה בשלמא כולהו ניסא אלא אשתו של לוט פורענותא הוא דאמר ברוך דיין האמת והא הודאה ושבח קתני תני על לוט ועל אשתו מברכים שתים על אשתו אומר ברוך דיין האמת ועל לוט אומר ברוך זוכר את הצדיקים א\"ר יוחנן אפילו בשעת כעסו של הקב\"ה זוכר את הצדיקים שנאמר (בראשית יט, כט) ויהי בשחת אלהים את ערי הככר ויזכור אלהים את אברהם וישלח את לוט מתוך ההפכה וגו': וחומת יריחו שנבלעה: וחומת יריחו נבלעה והא נפלה שנאמר (יהושע ו, כ) ויהי כשמע העם את קול השופר ויריעו העם תרועה גדולה ותפל החומה תחתיה כיון דפותיה ורומה כי הדדי נינהו משום הכי אבלעה בלועי אמר רב יהודה אמר רב ארבעה צריכין להודות יורדי הים הולכי מדברות ומי שהיה חולה ונתרפא ומי שהיה חבוש בבית האסורים ויצא יורדי הים מנלן דכתיב (תהלים קז, כג) יורדי הים באניות וגו' המה ראו מעשי ה' ואומר ויעמד רוח סערה יעלו שמים ירדו תהומות ואומר יחוגו וינועו כשכור ואומר ויצעקו אל ה' בצר להם וממצוקותיהם יוציאם ואומר יקם סערה לדממה ואומר וישמחו כי ישתוקו ואומר יודו לה' חסדו ונפלאותיו לבני אדם הולכי מדברות מנלן דכתיב תעו במדבר בישימון דרך עיר מושב לא מצאו ויצעקו אל ה' וידריכם בדרך ישרה יודו לה' חסדו מי שחלה ונתרפא דכתיב אוילים מדרך פשעם ומעונותיהם יתענו כל אוכל תתעב נפשם וגו' ויזעקו אל ה' בצר להם וגו' ישלח דברו וירפאם וגו' יודו לה' חסדו מי שהיה חבוש בבית האסורין מנלן דכתיב יושבי חשך וצלמות וגו' כי המרו אמרי אל וגו' ואומר ויכנע בעמל לבם וגו' ואומר ויזעקו אל ה' בצר להם ואומר יוציאם מחשך וצלמות וגו' ואומר יודו לה' חסדו מאי מברך אמר רב יהודה ברוך גומל חסדים טובים אביי אמר וצריך לאודויי קמי עשרה דכתיב (תהלים קז, לב) וירוממוהו בקהל עם וגו' מר זוטרא אמר ותרין מינייהו רבנן שנאמר (תהלים קז, לב) ובמושב זקנים יהללוהו מתקיף לה רב אשי ואימא כולהו רבנן מי כתיב בקהל זקנים בקהל עם כתיב ואימא בי עשרה שאר עמא ותרי רבנן קשיא רב יהודה חלש ואתפח על לגביה רב חנא בגדתאה ורבנן אמרי ליה בריך רחמנא דיהבך ניהלן ולא יהבך לעפרא אמר להו פטרתון יתי מלאודויי והא אמר אביי בעי אודויי באפי עשרה דהוו בי עשרה והא איהו לא קא מודה לא צריך דעני בתרייהו אמן: אמר רב יהודה שלשה צריכין שימור ואלו הן חולה חתן וכלה במתניתא תנא חולה חיה חתן וכלה ויש אומרים אף אבל ויש אומרים אף תלמידי חכמים בלילה: ואמר רב יהודה שלשה דברים [המאריך בהן] מאריכין ימיו ושנותיו של אדם המאריך בתפלתו והמאריך על שלחנו והמאריך בבית הכסא והמאריך בתפלתו מעליותא היא והאמר רבי חייא בר אבא א\"ר יוחנן",
  "rashi": [
   {
    "dh": "עבדי להון נקירותא",
    "text": " — מערות מעברות נחל ארנון עמק עמוק בין ב' הרים גבוהים והיו ישראל צריכים לעבור באותו עמק עשו אמוריים מערות בצדי ההרים ונחבאו שם:"
   },
   {
    "dh": "וטשו",
    "text": " — נחבאו:"
   },
   {
    "dh": "מסגי",
    "text": " — עובר:"
   },
   {
    "dh": "ממיך טורי",
    "text": " — משפיל הרים ומתפשטין זה לצד זה עד שהעמק שוה:"
   },
   {
    "dh": "חזו דמא",
    "text": " — כשחזרו ההרים למקומן:"
   },
   {
    "dh": "ואשד",
    "text": " — ושפך:"
   },
   {
    "dh": "אשר נטה לשבת ער",
    "text": " — ההר שבעבר העמק נטה ונתפשט לצד חברו ההר אשר לצד עבר מואב ושם ארץ מואב ער:"
   },
   {
    "dh": "שעמדו",
    "text": " — באויר:"
   },
   {
    "dh": "לא נתך ארצה",
    "text": " — לא הגיע לארץ אלא עמדו באויר:"
   },
   {
    "dh": "מחנה ישראל כמה הוי תלתא פרסי",
    "text": " — עוג חשב כן בלבו מחנה ישראל תלתא פרסי דכתיב (במדבר ל״ג:מ״ט) ויחנו מבית הישימות עד אבל השטים ואמר רבה בר בר חנה לדידי חזי לי ההוא דוכתא והוה תלתא פרסי אורכא ותלתא פרסי פותיא (עירובין פ\"ה ד' נה:):"
   },
   {
    "dh": "קמצי",
    "text": " — נמלים:"
   },
   {
    "dh": "שרבבת",
    "text": " — לשון אשתרבובי אשתרבוב ירדו וגדלו למטה:"
   },
   {
    "dh": "משה כמה הוי עשר אמין",
    "text": " — שהרי הוא הקים את המשכן ודרשי' הקים את עצמו לקומת המשכן וכתיב ביה עשר אמות אורך הקרש (שמות ל״ו:כ״א):"
   },
   {
    "dh": "שוור",
    "text": " — קפץ למעלה:"
   },
   {
    "dh": "בקרסוליה",
    "text": " — קבילי\"א בלע\"ז:"
   },
   {
    "dh": "וידי משה כבדים",
    "text": " — ואינו יכול לפושטן כל היום אלא אם כן תומכים בזרועותיו ויקחו אבן וישימו תחתיו:"
   },
   {
    "dh": "תחתיה",
    "text": " — משמע במקומה ואי אפשר זו אלא על ידי בליעה:"
   },
   {
    "dh": "דאמר ברוך דיין האמת",
    "text": " — תירוצא הוא:"
   },
   {
    "dh": "זוכר את הצדיקים",
    "text": " — שזכר את אברהם:"
   },
   {
    "dh": "כיון דפותיה ורומה כי הדדי הוו",
    "text": " — ואין נפילה ניכרת בה אם לא נבלעה משום הכי אבלעה והוא דרך נפילה לחומה כזו:"
   },
   {
    "dh": "צריכין להודות",
    "text": " — כשיוצאין מן הסכנה:"
   },
   {
    "dh": "וירוממוהו בקהל עם",
    "text": " — בסוף פרשת המזמור:"
   },
   {
    "dh": "ואתפח",
    "text": " — נתרפא:"
   },
   {
    "dh": "בגדתאה",
    "text": " — שם עירו בגדד היא עיר החשובה שבבבל משחרבה בבל:"
   },
   {
    "dh": "שימור",
    "text": " — מן המזיקין:"
   },
   {
    "dh": "חולה",
    "text": " — שהורע מזלו לפיכך השד מתגרה בו וכן חיה אשה שילדה וכן אבל:"
   },
   {
    "dh": "חתן וכלה ותלמידי חכמים",
    "text": " — מקנאתו מתגרה בהם:"
   },
   {
    "dh": "והמאריך על שלחנו",
    "text": " — שמתוך כך עניים באין ומתפרנסים:"
   },
   {
    "dh": "והמאריך בבית הכסא",
    "text": " — רפואה היא לו:"
   }
  ],
  "tosafot": [
   {
    "dh": "ארבעה צריכין להודות יורדי הים וכו'",
    "text": " — ובתהלים לא חשיב כזה הסדר אלא חשיב הולכי המדבר ראשון דקרא נקט סדר המסוכנין יותר תחלה וגמרא נקט המצויין תחלה:"
   },
   {
    "dh": "ואימא בי עשרה ותרי רבנן",
    "text": " — ועבדי לחומרא ואפילו ליכא תרי רבנן ונהגו העולם לברך אחר שקורא בתורה ודוקא בחולה שנפל למטה אבל חש בראשו או במעיו ואינו מוטל למטה לא. ה\"ר יוסף:"
   },
   {
    "dh": "פטרתן יתי מלאודויי",
    "text": " — וא\"ת והא אמרינן ברכה שאין בה מלכות אינה ברכה וי\"ל דרב יהודה היה מתלמידי דרב ורב סבר לעיל בפרק כיצד מברכין (ברכות דף מ:) דלא בעינן אלא הזכרת השם (או מלכות ורחמנא היינו מלכות):"
   }
  ],
  "translations": []
 },
 {
  "id": "55a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נה",
  "amud": "א",
  "dafEn": "55a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "כל המאריך בתפלתו ומעיין בה סוף בא לידי כאב לב שנאמר (משלי יג, יב) תוחלת ממושכה מחלה לב וא\"ר יצחק שלשה דברים מזכירים עונותיו של אדם ואלו הן קיר נטוי ועיון תפלה ומוסר דין על חבירו לשמים הא לא קשיא הא דמעיין בה הא דלא מעיין בה והיכי עביד דמפיש ברחמי והמאריך על שלחנו דלמא אתי עניא ויהיב ליה דכתיב (יחזקאל מא, כב) המזבח עץ שלש אמות גבוה וכתיב (יחזקאל מא, כב) וידבר אלי זה השלחן אשר לפני ה' פתח במזבח וסיים בשלחן ר' יוחנן ור' אלעזר דאמרי תרוייהו כל זמן שבהמ\"ק קיים מזבח מכפר על ישראל ועכשיו שלחנו של אדם מכפר עליו והמאריך בבית הכסא מעליותא הוא והתניא עשרה דברים מביאין את האדם לידי תחתוניות האוכל עלי קנים ועלי גפנים ולולבי גפנים ומוריגי בהמה ושדרו של דג ודג מליח שאינו מבושל כל צרכו והשותה שמרי יין והמקנח בסיד ובחרסית והמקנח בצרור שקנח בו חבירו וי\"א אף התולה עצמו בבית הכסא יותר מדאי לא קשיא הא דמאריך ותלי הא דמאריך ולא תלי כי הא דאמרה ליה ההיא מטרוניתא לר' יהודה בר' אלעאי פניך דומים למגדלי חזירים ולמלוי ברבית אמר לה הימנותא לדידי תרוייהו אסירן אלא עשרים וארבעה בית הכסא איכא מאושפיזאי לבי מדרשא דכי אזילנא בדיקנא נפשאי בכולהו. ואמר רב יהודה שלשה דברים מקצרים ימיו ושנותיו של אדם מי שנותנין לו ס\"ת לקרות ואינו קורא כוס של ברכה לברך ואינו מברך והמנהיג עצמו ברבנות ס\"ת לקרות ואינו קורא דכתיב (דברים ל, כ) כי הוא חייך ואורך ימיך כוס של ברכה לברך ואינו מברך דכתיב (בראשית יב, ג) ואברכה מברכיך והמנהיג עצמו ברבנות דא\"ר חמא בר חנינא מפני מה מת יוסף קודם לאחיו מפני שהנהיג עצמו ברבנות: ואמר רב יהודה אמר רב שלשה צריכים רחמים מלך טוב שנה טובה וחלום טוב מלך טוב דכתיב (משלי כא, א) פלגי מים לב מלך ביד ה' שנה טובה דכתיב (דברים יא, יב) תמיד עיני ה' אלהיך בה מראשית השנה ועד אחרית שנה חלום טוב דכתיב (ישעיהו לח, טז) ותחלימני (ותחייני): אמר רבי יוחנן שלשה דברים מכריז עליהם הקב\"ה בעצמו ואלו הן רעב ושובע ופרנס טוב רעב דכתיב (מלכים ב ח, א) כי קרא ה' לרעב וגו' שובע דכתיב (יחזקאל לו, כט) וקראתי אל הדגן והרביתי אותו פרנס טוב דכתיב (שמות לא, ב) (ויאמר) ה' אל משה לאמר ראה קראתי בשם בצלאל וגו' אמר רבי יצחק אין מעמידין פרנס על הצבור אלא אם כן נמלכים בצבור שנא' (שמות לה, ל) ראו קרא ה' בשם בצלאל אמר לו הקדוש ברוך הוא למשה משה הגון עליך בצלאל אמר לו רבונו של עולם אם לפניך הגון לפני לא כל שכן אמר לו אף על פי כן לך אמור להם הלך ואמר להם לישראל הגון עליכם בצלאל אמרו לו אם לפני הקדוש ברוך הוא ולפניך הוא הגון לפנינו לא כל שכן א\"ר שמואל בר נחמני א\"ר יונתן בצלאל על שם חכמתו נקרא בשעה שאמר לו הקדוש ברוך הוא למשה לך אמור לו לבצלאל עשה לי משכן ארון וכלים הלך משה והפך ואמר לו עשה ארון וכלים ומשכן אמר לו משה רבינו מנהגו של עולם אדם בונה בית ואחר כך מכניס לתוכו כלים ואתה אומר עשה לי ארון וכלים ומשכן כלים שאני עושה להיכן אכניסם שמא כך אמר לך הקב\"ה עשה משכן ארון וכלים אמר לו שמא בצל אל היית וידעת אמר רב יהודה אמר רב יודע היה בצלאל לצרף אותיות שנבראו בהן שמים וארץ כתיב הכא (שמות לה, לא) וימלא אותו רוח אלהים בחכמה ובתבונה ובדעת וכתיב התם (משלי ג, יט) ה' בחכמה יסד ארץ כונן שמים בתבונה וכתיב (משלי ג, כ) בדעתו תהומות נבקעו אמר רבי יוחנן אין הקדוש ברוך הוא נותן חכמה אלא למי שיש בו חכמה שנא' (דניאל ב, כא) יהב חכמתא לחכימין ומנדעא לידעי בינה שמע רב תחליפא בר מערבא ואמרה קמיה דרבי אבהו אמר ליה אתון מהתם מתניתו לה אנן מהכא מתנינן לה דכתיב (שמות לא, ו) ובלב כל חכם לב נתתי חכמה: אמר רב חסדא כל חלום ולא טוות ואמר רב חסדא חלמא דלא מפשר כאגרתא דלא מקריא ואמר רב חסדא לא חלמא טבא מקיים כוליה ולא חלמא בישא מקיים כוליה ואמר רב חסדא חלמא בישא עדיף מחלמא טבא וא\"ר חסדא חלמא בישא עציבותיה מסתייה חלמא טבא חדויה מסתייה אמר רב יוסף חלמא טבא אפילו לדידי בדיחותיה מפכחא ליה ואמר רב חסדא חלמא בישא קשה מנגדא שנאמר (קהלת ג, יד) והאלהים עשה שייראו מלפניו ואמר רבה בר בר חנה א\"ר יוחנן זה חלום רע (ירמיהו כג, כח) הנביא אשר אתו חלום יספר חלום ואשר דברי אתו ידבר דברי אמת מה לתבן את הבר נאם ה' וכי מה ענין בר ותבן אצל חלום אלא אמר ר' יוחנן משום ר' שמעון בן יוחי כשם שאי אפשר לבר בלא תבן כך אי אפשר לחלום בלא דברים בטלים אמר ר' ברכיה חלום אף על פי שמקצתו מתקיים כולו אינו מתקיים מנא לן מיוסף דכתיב (בראשית לז, ט) והנה השמש והירח וגו'",
  "rashi": [
   {
    "dh": "מעיין בה",
    "text": " — אומר בלבו שתיעשה בקשתו לפי שהתפלל בכונה:"
   },
   {
    "dh": "כאב לב",
    "text": " — שאין בקשתו נעשית:"
   },
   {
    "dh": "תוחלת",
    "text": " — לשון תפלה כמו ויחל משה (שמות לב):"
   },
   {
    "dh": "מזכירין עונותיו",
    "text": " — שעל ידיהן מפשפשים למעלה במעשיו לומר בוטח זה בזכיותיו נראה מה הם:"
   },
   {
    "dh": "קיר נטוי",
    "text": " — מקום סכנה:"
   },
   {
    "dh": "מוסר דין",
    "text": " — בוטח הוא בזכיותיו שחברו יהיה נענש על ידו:"
   },
   {
    "dh": "ה\"ג הא דמעיין הא דלא מעיין",
    "text": ""
   },
   {
    "dh": "לולבי גפנים",
    "text": " — וידלי\"ש בלע\"ז:"
   },
   {
    "dh": "מוריגי בהמה",
    "text": " — כל בשר שבבהמה שאינו חלק אלא דומה למורג חרוץ שאינו חלק כמו החיך והלשון והכרס הפנימי ובית הכוסות:"
   },
   {
    "dh": "התולה",
    "text": " — שאינו יושב אלא על ברכיו שמתוך כך נקביו נפתחין יותר מדאי:"
   },
   {
    "dh": "הכי גרסינן הא דמאריך ותלי הא דמאריך ולא תלי",
    "text": ""
   },
   {
    "dh": "למגדלי חזירים ומלוי ברבית",
    "text": " — שכרן מרובה בלא טורח ושמחים בחלקם לכך פניהם צהובים:"
   },
   {
    "dh": "הימנותא",
    "text": " — לשון שבועה כלומר באמונה שתיהן אסורות לי:"
   },
   {
    "dh": "ואברכה מברכיך",
    "text": " — והמברך ברכת המזון מברך לבעל הבית:"
   },
   {
    "dh": "יוסף מת קודם לאחיו",
    "text": " — דכתיב וימת יוסף וכל אחיו (שמות א׳:ו׳):"
   },
   {
    "dh": "צריכים רחמים",
    "text": " — צריכים לבקש רחמים שיבאו לפי שהם בידו של הקב\"ה ואין להם רשות לבא אלא ברשותו:"
   },
   {
    "dh": "ראה קראתי בשם",
    "text": " — ראה משמע היש בלבך תן עיניך בדבר:"
   },
   {
    "dh": "לך אמור לו לבצלאל עשה משכן ארון וכלים",
    "text": " — שכן הם סדורים בפרשת כי תשא ראה קראתי בשם וגו' את אהל מועד ואת הארון לעדות וכל הפרשה ומשה אמר לו עשה ארון וכלים כגון שלחן ומנורה ואחר כך משכן דס\"ל לר\"י שכסדר שהם סדורים בויקחו לי תרומה אמר לו:"
   },
   {
    "dh": "אותיות שנבראו בהן שמים וארץ",
    "text": " — על ידי צירופן ובספר יצירה תני להו:"
   },
   {
    "dh": "כל חלום ולא טוות",
    "text": " — כל חלומות יראה אדם ולא יראה אחד מאותן שהוא שרוי בתענית שאינו טוב טוות לשון תענית כמו ובת טוות האמור בדריוש (דניאל ו׳:י״ט):"
   },
   {
    "dh": "דלא מפשר",
    "text": " — שלא פתרוהו:"
   },
   {
    "dh": "כאגרתא דלא מקריא",
    "text": " — לא טוב ולא רע הוא שכל החלומות הולכין אחר הפתרון:"
   },
   {
    "dh": "עדיף מחלמא טבא",
    "text": " — שמביא את האדם לידי תשובה:"
   },
   {
    "dh": "עציבותיה מסתייה",
    "text": " — דיו עצבונו מה שאדם מתעצב עליו מבטל את החלום:"
   },
   {
    "dh": "אפילו לדידי",
    "text": " — שאני מאור עינים:"
   },
   {
    "dh": "בדיחותיה מפכחא ליה",
    "text": " — מבטליה:"
   },
   {
    "dh": "מנגדא",
    "text": " — ממלקות קשה לגוף האדם יותר ממלקות לפי שדואג ממנו:"
   },
   {
    "dh": "זה חלום רע",
    "text": " — מיראתו ישוב ויכנע:"
   }
  ],
  "tosafot": [
   {
    "dh": "לך אמור לבצלאל עשה משכן ארון וכלים",
    "text": " — ואם תאמר היכא אשכחן שצוה הקדוש ברוך הוא לעשות משכן תחלה הרי בפרשת תרומה כתיב ארון תחלה. ויש לומר דבפרשת כי תשא כתיב את אהל מועד ואת הארון לעדות:"
   }
  ],
  "translations": []
 },
 {
  "id": "55b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נה",
  "amud": "ב",
  "dafEn": "55b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "וההיא שעתא אמיה לא הות אמר א\"ר לוי לעולם יצפה אדם לחלום טוב עד כ\"ב שנה מנלן מיוסף דכתיב (בראשית לז, ב) אלה תולדות יעקב יוסף בן שבע עשרה שנה וגו' וכתיב (בראשית מא, מו) ויוסף בן שלשים שנה בעמדו לפני פרעה וגו' מן שבסרי עד תלתין כמה הוי תלת סרי ושב דשבעא ותרתי דכפנא הא כ\"ב אמר רב הונא לאדם טוב אין מראין לו חלום טוב ולאדם רע אין מראין לו חלום רע תניא נמי הכי כל שנותיו של דוד לא ראה חלום טוב וכל שנותיו של אחיתופל לא ראה חלום רע והכתיב (תהלים צא, י) לא תאונה אליך רעה ואמר רב חסדא אמר רב ירמיה בר אבא שלא יבהילוך לא חלומות רעים ולא הרהורים רעים ונגע לא יקרב באהלך שלא תמצא אשתך ספק נדה בשעה שאתה בא מן הדרך אלא איהו לא חזי ליה אחריני חזו ליה וכי לא חזא איהו מעליותא הוא והאמר ר' זעירא כל הלן שבעה ימים בלא חלום נקרא רע שנאמר (משלי יט, כג) ושבע ילין בל יפקד רע אל תקרי שבע אלא שבע אלא הכי קאמר דחזא ולא ידע מאי חזא אמר רב הונא בר אמי אמר ר' פדת א\"ר יוחנן הרואה חלום ונפשו עגומה ילך ויפתרנו בפני שלשה יפתרנו והאמר רב חסדא חלמא דלא מפשר כאגרתא דלא מקריא אלא אימא יטיבנו בפני שלשה ליתי תלתא ולימא להו חלמא טבא חזאי ולימרו ליה הנך טבא הוא וטבא ליהוי רחמנא לשוייה לטב שבע זימנין לגזרו עלך מן שמיא דלהוי טבא ויהוי טבא ולימרו ג' הפוכות וג' פדויות ושלש שלומות שלש הפוכות (תהלים ל, יב) הפכת מספדי למחול לי פתחת שקי ותאזרני שמחה (ירמיהו לא, יג) אז תשמח בתולה במחול ובחורים וזקנים יחדיו והפכתי אבלם לששון וגו' (דברים כג, ו) ולא אבה ה' אלהיך לשמוע אל בלעם ויהפוך וגו' שלש פדויות דכתיב (תהלים נה, יט) פדה בשלום נפשי מקרב לי וגו' (ישעיהו לה, י) ופדויי ה' ישובון וגו' (שמואל א ד, ג) ויאמר העם אל שאול היונתן ימות אשר עשה הישועה וגו' שלש שלומות דכתיב (ישעיהו נז, יט) בורא ניב שפתים שלום שלום לרחוק ולקרוב אמר ה' ורפאתיו (דברי הימים א יב, יט) ורוח לבשה את עמשי וגו' (שמואל א כה, ו) ואמרתם כה לחי ואתה שלום וביתך שלום וגו' אמימר ומר זוטרא ורב אשי הוו יתבי בהדי הדדי אמרי כל חד וחד מינן לימא מלתא דלא שמיע ליה לחבריה פתח חד מינייהו ואמר האי מאן דחזא חלמא ולא ידע מאי חזא ליקום קמי כהני בעידנא דפרסי ידייהו ולימא הכי רבש\"ע אני שלך וחלומותי שלך חלום חלמתי ואיני יודע מה הוא בין שחלמתי אני לעצמי ובין שחלמו לי חבירי ובין שחלמתי על אחרים אם טובים הם חזקם ואמצם כחלומותיו של יוסף ואם צריכים רפואה רפאם כמי מרה על ידי משה רבינו וכמרים מצרעתה וכחזקיהו מחליו וכמי יריחו על ידי אלישע וכשם שהפכת קללת בלעם הרשע לברכה כן הפוך כל חלומותי עלי לטובה ומסיים בהדי כהני דעני צבורא אמן ואי לא לימא הכי אדיר במרום שוכן בגבורה אתה שלום ושמך שלום יהי רצון מלפניך שתשים עלינו שלום פתח אידך ואמר האי מאן דעייל למתא ודחיל מעינא בישא לנקוט זקפא דידא דימיניה בידא דשמאליה וזקפא דידא דשמאליה בידא דימיניה ולימא הכי אנא פלוני בר פלוני מזרעא דיוסף קאתינא דלא שלטא ביה עינא בישא שנאמר (בראשית מט, כב) בן פורת יוסף בן פורת עלי עין וגו' אל תקרי עלי עין אלא עולי עין ר' יוסי בר' חנינא אמר מהכא (בראשית מח, טז) וידגו לרוב בקרב הארץ מה דגים שבים מים מכסים עליהם ואין עין רעה שולטת בהם אף זרעו של יוסף אין עין רעה שולטת בהם ואי דחיל מעינא בישא דיליה ליחזי אטרפא דנחיריה דשמאליה פתח אידך ואמר האי מאן דחליש יומא קמא לא לגלי כי היכי דלא לתרע מזליה מכאן ואילך לגלי כי הא דרבא כי הוה חליש יומא קמא לא מגלי מכאן ואילך א\"ל לשמעיה פוק אכריז רבא חלש מאן דרחים לי לבעי עלי רחמי ומאן דסני לי לחדי לי וכתיב (משלי כד, יז) בנפול אויבך אל תשמח ובכשלו אל יגל לבך פן יראה ה' ורע בעיניו והשיב מעליו אפו שמואל כי הוה חזי חלמא בישא אמר (זכריה י, ב) וחלומות השוא ידברו כי הוה חזי חלמא טבא אמר וכי החלומות השוא ידברו והכתיב (במדבר יב, ו) בחלום אדבר בו רבא רמי כתיב בחלום אדבר בו וכתיב וחלומות השוא ידברו לא קשיא כאן ע\"י מלאך כאן ע\"י שד א\"ר ביזנא בר זבדא א\"ר עקיבא א\"ר פנדא א\"ר נחום א\"ר בירים משום זקן אחד ומנו ר' בנאה עשרים וארבעה פותרי חלומות היו בירושלים פעם אחת חלמתי חלום והלכתי אצל כולם ומה שפתר לי זה לא פתר לי זה וכולם נתקיימו בי לקיים מה שנאמר כל החלומות הולכים אחר הפה אטו כל החלומות הולכים אחר הפה קרא הוא אין וכדרבי אלעזר דא\"ר אלעזר מנין שכל החלומות הולכין אחר הפה שנאמר (בראשית מא, יג) ויהי כאשר פתר לנו כן היה אמר רבא והוא דמפשר ליה מעין חלמיה שנאמר (בראשית מא, יב) איש כחלומו פתר (בראשית מ, טז) וירא שר האופים מנא ידע א\"ר אלעזר מלמד שכל אחד ואחד הראוהו חלומו ופתרון חלומו של חבירו א\"ר יוחנן השכים ונפל לו פסוק לתוך פיו הרי זו נבואה קטנה ואמר ר' יוחנן ג' חלומות מתקיימין חלום של שחרית וחלום שחלם לו חבירו וחלום שנפתר בתוך חלום ויש אומר אף חלום שנשנה שנאמר (בראשית מא, לב) ועל השנות החלום וגו' אמר ר' שמואל בר נחמני א\"ר יונתן אין מראין לו לאדם אלא מהרהורי לבו שנאמר (דניאל ב, כט) אנת מלכא רעיונך על משכבך סליקו ואיבעית אימא מהכא (דניאל ב, ל) ורעיוני לבבך תנדע אמר רבא תדע דלא מחוו ליה לאינש לא דקלא דדהבא ולא פילא דעייל בקופא דמחטא:",
  "rashi": [
   {
    "dh": "וההיא שעתא",
    "text": " — דחלם אמיה לא הות:"
   },
   {
    "dh": "יצפה",
    "text": " — שיתקיים:"
   },
   {
    "dh": "מיוסף",
    "text": " — שלא נתקיימו השתחואות הללו עד עשרים ושתים שנה כשירד יעקב למצרים שכבר היה הרעב שתי שנים דכתיב כי זה שנתים הרעב (בראשית מה):"
   },
   {
    "dh": "לאדם טוב מראין לו חלום רע",
    "text": " — כדי שידאג ולא יחטא ושיכפר לו עצבונו:"
   },
   {
    "dh": "לאדם רע מראין לו חלום טוב",
    "text": " — כדי לשמחו שיאכל עולמו:"
   },
   {
    "dh": "ודוד לא ראה חלום טוב והא כתיב וכו'",
    "text": " — לא גרסינן הכי אלא גרסינן והא כתיב לא תאונה אליך רעה וגו'. קשיא לרב הונא דאמר לאדם טוב מראין לו חלום רע ומשני איהו לא חזי אחריני חזו ליה חלום רע:"
   },
   {
    "dh": "וכי לא חזי איהו מעליותא הוא",
    "text": " — כיון דלא חזי חלום רע כדקאמר שלא יבהילוהו וחלום טוב לא כל שכן דלא חזי דהא קתני כל ימיו של דוד לא ראה חלום טוב אם כן לא חזי חלום כלל:"
   },
   {
    "dh": "אלא שבע",
    "text": " — ז' לילות ילין ולא יפקד בשום חלום הרי הוא רע ושונאים אותו ואין מראין לו כלום:"
   },
   {
    "dh": "ומשני דחזי ולא ידע מאי חזי",
    "text": " — אדם טוב מראין לו חלום טוב ועד שלא יקיץ משתכח ממנו כדי שלא ישמח:"
   },
   {
    "dh": "זקפא",
    "text": " — גודל:"
   },
   {
    "dh": "עלי עין עולי עין",
    "text": " — שליטין על העין ולא העין עולה בהן:"
   },
   {
    "dh": "אטרפא דנחיריה דשמאליה",
    "text": " — דופן השמאלי של חוטמו:"
   },
   {
    "dh": "האי מאן דחליש",
    "text": " — מי שחלה:"
   },
   {
    "dh": "דסני לי לחדי לי",
    "text": " — ומתוך כך ישוב חרון אף מעלי:"
   },
   {
    "dh": "הרהורי לבו",
    "text": " — מה שהוא מהרהר ביום:"
   },
   {
    "dh": "רעיונך",
    "text": " — מחשבותיך וכן כל לשון רעיון שבמקרא אינו לשון רצון אלא לשון מחשבה וזה יוכיח ורעיוניה יבהלוניה (דניאל ד') וכי רצונו של אדם מבהלו אלא מחשבותיו מבהלין אותו:"
   },
   {
    "dh": "דקלא דדהבא",
    "text": " — דבר שלא הורגל לראות ולא הרהר בו מעולם:"
   },
   {
    "dh": "קופא דמחטא",
    "text": " — נקב המחט:"
   }
  ],
  "tosafot": [
   {
    "dh": "שבע זימנין לגזרו עלך",
    "text": " — כך הוא הלחש שבע זימנין לגזרו עלך ויש מפרש דשבע זימנין צריך לומר חלמא טבא חזאי וכן לענות אחריו. אבל ר\"י לא היה רגיל לאומרו אלא שלש פעמים:"
   },
   {
    "dh": "פותרי חלומות",
    "text": " — פירש ר\"י דמזל שעת הלידה גרים ואין הדבר תלוי בחכמה:"
   }
  ],
  "translations": []
 },
 {
  "id": "56a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נו",
  "amud": "א",
  "dafEn": "56a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אמר ליה קיסר לר' יהושע בר' (חנינא) אמריתו דחכמיתו טובא אימא לי מאי חזינא בחלמאי אמר ליה חזית דמשחרי לך פרסאי וגרבי בך ורעיי בך שקצי בחוטרא דדהבא הרהר כוליה יומא ולאורתא חזא אמר ליה שבור מלכא לשמואל אמריתו דחכמיתו טובא אימא לי מאי חזינא בחלמאי אמר ליה חזית דאתו רומאי ושבו לך וטחני בך קשייתא ברחייא דדהבא הרהר כוליה יומא ולאורתא חזא בר הדיא מפשר חלמי הוה מאן דיהיב ליה אגרא מפשר ליה למעליותא ומאן דלא יהיב ליה אגרא מפשר ליה לגריעותא אביי ורבא חזו חלמא אביי יהיב ליה זוזא ורבא לא יהיב ליה אמרי ליה אקרינן בחלמין (דברים כח, לא) שורך טבוח לעיניך וגו' לרבא אמר ליה פסיד עסקך ולא אהני לך למיכל מעוצבא דלבך לאביי א\"ל מרווח עסקך ולא אהני לך למיכל מחדוא דלבך אמרי ליה אקרינן (דברים כח, מא) בנים ובנות תוליד וגו' לרבא אמר ליה כבישותיה לאביי א\"ל בנך ובנתך נפישי ומינסבן בנתך לעלמא ומדמיין באפך כדקא אזלן בשביה אקריין (דברים כח, לב) בניך ובנותיך נתונים לעם אחר לאביי א\"ל בנך ובנתך נפישין את אמרת לקריבך והיא אמרה לקריבה ואכפה לך ויהבת להון לקריבה דהוי כעם אחר לרבא א\"ל דביתהו שכיבא ואתו בניה ובנתיה לידי איתתא אחריתי דאמר רבא אמר ר' ירמיה בר אבא אמר רב מאי דכתיב בניך ובנותיך נתונים לעם אחר זו אשת האב אקרינן בחלמין (קהלת ט, ז) לך אכול בשמחה לחמך לאביי אמר ליה מרווח עסקך ואכלת ושתית וקרית פסוקא מחדוא דלבך לרבא אמר ליה פסיד עסקך טבחת ולא אכלת ושתית וקרית לפכוחי פחדך אקרינן (דברים כח, לח) זרע רב תוציא השדה לאביי א\"ל מרישיה לרבא א\"ל מסיפיה אקרינן (דברים כח, מ) זיתים יהיו לך בכל גבולך וגו' לאביי א\"ל מרישיה לרבא א\"ל מסיפיה אקרינן (דברים כח, י) וראו כל עמי הארץ וגו' לאביי א\"ל נפק לך שמא דריש מתיבתא הוית אימתך נפלת בעלמא לרבא אמר ליה בדיינא דמלכא אתבר ומתפסת בגנבי ודייני כולי עלמא קל וחומר מינך למחר אתבר בדיינא דמלכא ואתו ותפשי ליה לרבא. אמרי ליה חזן חסא על פום דני לאביי א\"ל עיף עסקך כחסא לרבא א\"ל מריר עסקך כי חסא אמרי ליה חזן בשרא על פום דני לאביי אמר ליה בסים חמרך ואתו כולי עלמא למזבן בשרא וחמרא מינך לרבא אמר ליה תקיף חמרך ואתו כולי עלמא למזבן בשרא למיכל ביה אמרי ליה חזן חביתא דתלי בדיקלא לאביי אמר ליה מדלי עסקך כדיקלא לרבא אמר ליה חלי עסקך כתמרי אמרי ליה חזן רומנא דקדחי אפום דני לאביי אמר ליה עשיק עסקך כרומנא לרבא אמר ליה קאוי עסקך כרומנא אמרי ליה חזן חביתא דנפל לבירא לאביי א\"ל מתבעי עסקך כדאמר נפל פתא בבירא ולא אשתכח לרבא א\"ל פסיד עסקך ושדי' ליה לבירא אמרי ליה חזינן בר חמרא דקאי אאיסדן ונוער לאביי אמר ליה מלכא הוית וקאי אמורא עלך לרבא א\"ל פטר חמור גהיט מתפילך א\"ל לדידי חזי לי ואיתיה אמר ליה וא\"ו דפטר חמור ודאי גהיט מתפילך לסוף אזל רבא לחודיה לגביה אמר ליה חזאי דשא ברייתא דנפל אמר ליה אשתך שכבא אמר ליה חזיא ככי ושני דנתור א\"ל בנך ובנתך שכבן אמר ליה חזאי תרתי יוני דפרחן א\"ל תרי נשי מגרשת אמר ליה חזאי תרי גרגלידי דלפתא אמר ליה תרין קולפי בלעת אזל רבא ההוא יומא ויתיב בי מדרשא כוליה יומא אשכח הנהו תרי סגי נהורי דהוו קמנצו בהדי הדדי אזל רבא לפרוקינהו ומחוהו לרבא תרי דלו למחוייה אחריתי אמר מסתיי תרין חזאי לסוף אתא רבא ויהיב ליה אגרא א\"ל חזאי אשיתא דנפל א\"ל נכסים בלא מצרים קנית א\"ל חזאי אפדנא דאביי דנפל וכסיין אבקיה א\"ל אביי שכיב ומתיבתיה אתיא לגבך א\"ל חזאי אפדנא דידי דנפיל ואתו כולי עלמא שקיל לבינתא לבינתא א\"ל שמעתתך מבדרן בעלמא א\"ל חזאי דאבקע רישי ונתר מוקרי א\"ל אודרא מבי סדיא נפיק א\"ל אקריון הללא מצראה בחלמא א\"ל ניסא מתרחשי לך הוה קא אזיל בהדיה בארבא אמר בהדי גברא דמתרחיש ליה ניסא למה לי בהדי דקא סליק נפל סיפרא מיניה אשכחיה רבא וחזא דהוה כתיב ביה כל החלומות הולכין אחר הפה רשע בדידך קיימא וצערתן כולי האי כולהו מחילנא לך בר מברתיה דרב חסדא יהא רעוא דלמסר ההוא גברא לידי דמלכותא דלא מרחמו עליה אמר מאי אעביד גמירי דקללת חכם אפילו בחנם היא באה וכ\"ש רבא דבדינא קא לייט אמר איקום ואגלי דאמר מר גלות מכפרת עון קם גלי לבי רומאי אזל יתיב אפתחא דריש טורזינא דמלכא ריש טורזינא חזא חלמא א\"ל חזאי חלמא דעייל מחטא באצבעתי א\"ל הב לי זוזא ולא יהב ליה לא א\"ל ולא מידי א\"ל חזאי דנפל תכלא בתרתין אצבעתי א\"ל הב לי זוזא ולא יהב ליה ולא א\"ל א\"ל חזאי דנפל תכלא בכולה ידא א\"ל נפל תכלא בכולהו שיראי שמעי בי מלכא ואתיוה לריש טורזינא קא קטלי ליה א\"ל אנא אמאי אייתו להאי דהוה ידע ולא אמר אייתוהו לבר הדיא אמרי ליה אמטו זוזא דידך חרבו",
  "rashi": [
   {
    "dh": "קיסר",
    "text": " — מלך רומי והיה לו תגר עם פרסיים:"
   },
   {
    "dh": "מאי חזינא",
    "text": " — מאי אראה בלילה בחלום:"
   },
   {
    "dh": "משחרי לך פרסאי",
    "text": " — עושים בך עבודת המלך כמו לא חמרא דחד מנהון שחרית (תרגום במדבר יו) ולשון חכמים (ספרי פ' דברים) הדבק לשחוור וישתחוו לך:"
   },
   {
    "dh": "שבור",
    "text": " — מלך פרס:"
   },
   {
    "dh": "ושבו לך",
    "text": " — ישללוך בשבי:"
   },
   {
    "dh": "וטחנו בך קשייתא",
    "text": " — יכופו אותך לטחון גרעיני תמרים:"
   },
   {
    "dh": "פסיד עסקך",
    "text": " — תתקלקל פרקמטיא שלך:"
   },
   {
    "dh": "ולא אהני לך למיכל",
    "text": " — מתוך צערך לא יטעם לך שום מאכל:"
   },
   {
    "dh": "מרווח עסקך",
    "text": " — ומתוך שמחתך לא תתאוה לאכול שתהיה שבע בשמחתך:"
   },
   {
    "dh": "והיא",
    "text": " — אשתך:"
   },
   {
    "dh": "לפכוחי פחדך",
    "text": " — להפיג דאגתך:"
   },
   {
    "dh": "מרישיה",
    "text": " — זרע רב תוציא השדה:"
   },
   {
    "dh": "בדיינא דמלכא",
    "text": " — אוצר שתכשיטי המלך שם ישבר על ידי גנבים ויעלילו עליך לומר שאתה גנבתם:"
   },
   {
    "dh": "קל וחומר מינך",
    "text": " — אם רבא נחשד כל שכן שיחשדונו וזהו וייראו ממך:"
   },
   {
    "dh": "חסא",
    "text": " — חזרת:"
   },
   {
    "dh": "עיף עסקך",
    "text": " — כפול בריוח כחזרת שהיא רחבה וכפולה:"
   },
   {
    "dh": "מריר עסקך",
    "text": " — שנאוי לכל ומר יהיה הסחורה שלך:"
   },
   {
    "dh": "חביתא",
    "text": " — הם היו משתכרים ביין:"
   },
   {
    "dh": "חלי עסקך",
    "text": " — מתוק כלומר שתתן סחורתך בזול:"
   },
   {
    "dh": "דקדחי",
    "text": " — גדלה:"
   },
   {
    "dh": "עשיק עסקך",
    "text": " — ביוקר תמכרנו כמו עשיק לגבך (ב\"מ ד' נב.):"
   },
   {
    "dh": "לרבא א\"ל קאוי עסקך",
    "text": " — לשון קהוי הכל ישנאוהו:"
   },
   {
    "dh": "מתבעי עסקך",
    "text": " — יתבקש עסקך ויחזרו אחריו לקנות:"
   },
   {
    "dh": "דקאי אאיסדן",
    "text": " — מראשותיו כדמתרגמינן מראשותיו אסדוהי (בראשית כח):"
   },
   {
    "dh": "מלכא הוית",
    "text": " — ראש ישיבה הדורש דרשות והמתורגמן עומד עליו באמורא להשמיע בקול רם לרבים כקול חמור הנוער:"
   },
   {
    "dh": "וי\"ו דפטר חמור גהיט מתפילך",
    "text": " — בפרשת והיה כי יביאך וכל פטר חמר תפדה בשה והוא חסר וי\"ו ובתפילין של רבא כתבו הכותב מלא ואח\"כ מחקו והיינו גהיט מחוק:"
   },
   {
    "dh": "דשא ברייתא",
    "text": " — דלת חיצון שבבית:"
   },
   {
    "dh": "אתתך מתה",
    "text": " — השומרת את הבית:"
   },
   {
    "dh": "ככי",
    "text": " — שינים הפנימיות שקורין משילאר\"י:"
   },
   {
    "dh": "תרתי נשי מגרשת",
    "text": " — שאשתו של אדם קרויה יונה דכתיב יונתי תמתי:"
   },
   {
    "dh": "תרין קולפי בלעת",
    "text": " — מכת מקל עב בראשו כראשי לפתות:"
   },
   {
    "dh": "בלא מצרים",
    "text": " — נחלה בלא מצרים כלומר קרקעות רחבים ורבים:"
   },
   {
    "dh": "וכסיין אבקיה",
    "text": " — כסוי עפר הפורח ממפולת החומה:"
   },
   {
    "dh": "ונתר מוקרי",
    "text": " — נשר מוחו:"
   },
   {
    "dh": "אודרא מבי סדיא",
    "text": " — המוכין יוצאין מן הכר שבמראשותיו:"
   },
   {
    "dh": "הללא מצראה",
    "text": " — הלל שאנו קורין בפסח לפי שיש הלל אחר הקרוי הלל הגדול קורין לזה הלל המצרי:"
   },
   {
    "dh": "ניסי מתרחשי לך",
    "text": " — שע\"י נסים נקרא ניסן שעל כל צרה הבאה לישראל אומרים אותו על גאולתן:"
   },
   {
    "dh": "הוה קא אזיל",
    "text": " — בר הדיא בהדיה דרבא:"
   },
   {
    "dh": "בארבא",
    "text": " — בספינה:"
   },
   {
    "dh": "אמר בהדי גברא דמתרחיש ליה ניסא למה לי",
    "text": " — שמא כאן יארע לו הנס שתטבע הספינה והוא ינצל:"
   },
   {
    "dh": "בדידך קיימא",
    "text": " — בך הוא תלוי הפתרון אם לטובה אם לרעה והפכת לי לרעה:"
   },
   {
    "dh": "אשתו של רבא",
    "text": " — בת רב חסדא היתה:"
   },
   {
    "dh": "טורזינא דמלכא",
    "text": " — שומר אוצר המלך:"
   },
   {
    "dh": "נפל תכלא",
    "text": " — תולע:"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "56b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נו",
  "amud": "ב",
  "dafEn": "56b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "שיראי דמלכא כפיתו תרין ארזי בחבלא אסור חד כרעיה לחד ארזא וחד כרעיה לחד ארזא ושרו לחבלא עד דאצטליק רישיה אזל כל חד וחד וקם אדוכתיה ואצטליק ונפל בתרין שאל בן דמא בן אחותו של ר' ישמעאל את ר' ישמעאל ראיתי שני לחיי שנשרו אמר שני גדודי רומי יעצו עליך רעה ומתו אמר ליה בר קפרא לרבי ראיתי חוטמי שנשר אמר ליה חרון אף נסתלק ממך אמר ליה ראיתי שני ידי שנחתכו אמר ליה לא תצטרך למעשה ידיך אמר ליה ראיתי ב' רגלי שנקטעו אמר ליה על סוס אתה רוכב חזאי דאמרי לי באדר מיתת וניסן לא חזית אמר ליה באדרותא מיתת ולא אתית לידי נסיון אמר ליה ההוא צדוקי לר' ישמעאל ראיתי שאני משקה שמן לזיתים אמר ליה בא על אמו אמר ליה חזאי דקטיף לי כוכבא אמר ליה בר ישראל גנבת אמר ליה חזאי דבלעתי לכוכבא אמר ליה בר ישראל זבנתיה ואכלת לדמיה אמר ליה חזאי עיני דנשקן אהדדי אמר ליה בא על אחותו אמר ליה חזאי דנשקי סיהרא אמר ליה בא על אשת ישראל אמר ליה חזאי דדריכנא בטונא דאסא אמר ליה בא על נערה המאורסה אמר ליה חזאי טונא מעילאי והוא מתתאי אמר ליה משכבך הפוך אמר ליה חזאי עורבי דהדרי לפורייה אמר ליה אשתך זנתה מאנשים הרבה אמר ליה חזאי יוני דהדרי לפורייה אמר ליה נשים הרבה טמאת אמר ליה חזאי דנקיט תרי יוני ופרחן אמר ליה תרתי נשי נסבת ופטרתינון בלא גט אמר ליה חזאי דקליפנא ביעי אמר ליה שכבי קא משלחת אמר ליה כולהו איתנהו בי בר מהא דליתיה אדהכי והכי אתיא האי איתתא ואמרה ליה האי גלימא דמכסא דגברא פלוני הוא דמית ואשלחתיה אמר ליה חזאי דאמרי לי שבק לך אבוך נכסי בקפודקיא אמר ליה אית לך נכסי בקפודקיא אמר ליה לאו אזל אבוך לקפודקיא אמר ליה לאו אם כן קפא כשורא דיקא עשרה זיל חזי קפא דריש עשרה שהיא מלאה זוזי אזל אשכח שהיא מלאה זוזי אמר רבי חנינא הרואה באר בחלום רואה שלום שנאמר (בראשית כו, יט) ויחפרו עבדי יצחק בנחל וימצאו שם באר מים חיים ר' נתן אומר מצא תורה שנאמר (משלי ח, לה) כי מוצאי מצא חיים וכתיב הכא באר מים חיים רבא אמר חיים ממש אמר רבי חנן שלש שלומות הן נהר צפור וקדרה נהר דכתיב (ישעיהו סו, יב) הנני נוטה אליה כנהר שלום צפור דכתיב (ישעיהו לא, ה) כצפרים עפות כן יגן ה' צבאות וגו' קדרה דכתיב (שם כו) ה' תשפות שלום לנו אמר ר' חנינא ובקדרה שאין בה בשר שנינו (מיכה ג, ג) ופרשו כאשר בסיר וכבשר בתוך קלחת אמר ר' יהושע בן לוי הרואה נהר בחלום ישכים ויאמר הנני נוטה אליה כנהר שלום קודם שיקדמנו פסוק אחר (ישעיהו נט, יט) כי יבא כנהר צר הרואה צפור בחלום ישכים ויאמר כצפרים עפות כן יגן וגו' קודם שיקדמנו פסוק אחר (משלי כז, ח) כצפור נודדת מן קנה וגו' הרואה קדרה בחלום ישכים ויאמר ה' תשפות שלום לנו קודם שיקדמנו פסוק אחר (יחזקאל כד, ג) שפות הסיר שפות הרואה ענבים בחלום ישכים ויאמר (הושע ט, י) כענבים במדבר קודם שיקדמנו פסוק אחר (דברים לב, לב) ענבימו ענבי רוש הרואה הר בחלום ישכים ויאמר (ישעיהו נב, ז) מה נאוו על ההרים רגלי מבשר קודם שיקדמנו פסוק אחר (ירמיהו ט, ט) על ההרים אשא בכי ונהי הרואה שופר בחלום ישכים ויאמר (ישעיהו כז, יג) והיה ביום ההוא יתקע בשופר גדול קודם שיקדמנו פסוק אחר (הושע ה, ח) תקעו שופר בגבעה הרואה כלב בחלום ישכים ויאמר (שמות יא, ז) ולכל בני ישראל לא יחרץ כלב לשונו קודם שיקדמנו פסוק אחר (ישעיהו נו, יא) והכלבים עזי נפש הרואה ארי בחלום ישכים ויאמר (עמוס ג, ח) אריה שאג מי לא יירא קודם שיקדמנו פסוק אחר (ירמיהו ד, ז) עלה אריה מסבכו הרואה תגלחת בחלום ישכים ויאמר (בראשית מא, יד) ויגלח ויחלף שמלותיו קודם שיקדמנו פסוק אחר ((שופטים טז, יז) כי) אם גלחתי וסר ממני כחי הרואה באר בחלום ישכים ויאמר (שיר השירים ד, טו) באר מים חיים קודם שיקדמנו פסוק אחר (ירמיהו ו, ז) כהקיר ביר מימיה הרואה קנה בחלום ישכים ויאמר (ישעיהו מב, ג) קנה רצוץ לא ישבר קודם שיקדמנו פסוק אחר (מלכים ב יח, כא) הנה בטחת לך על משענת הקנה הרצוץ תנו רבנן הרואה קנה בחלום יצפה לחכמה שנאמר (משלי ד, ה) קנה חכמה קנים יצפה לבינה שנאמר (משלי ד, ז) ובכל קנינך קנה בינה אמר רבי זירא קרא קורא קירא קניא כולהו מעלו לחלמא תניא אין מראין דלועין אלא למי שהוא ירא שמים בכל כחו הרואה שור בחלום ישכים ויאמר (דברים לג, יז) בכור שורו הדר לו קודם שיקדמנו פסוק אחר (שמות כא, כח) כי יגח שור את איש תנו רבנן חמשה דברים נאמרו בשור האוכל מבשרו מתעשר נגחו הויין ליה בנים שמנגחים בתורה נשכו יסורין באים עליו בעטו דרך רחוקה נזדמנה לו רכבו עולה לגדולה והתניא רכבו מת לא קשיא הא דרכיב הוא לתורא הא דרכיב תורא לדידיה הרואה חמור בחלום יצפה לישועה שנאמר (זכריה ט, ט) הנה מלכך יבא לך צדיק ונושע הוא עני ורוכב על חמור הרואה חתול בחלום באתרא דקרו ליה שונרא נעשית לו שירה נאה שינרא נעשה לו שינוי רע הרואה ענבים בחלום לבנות בין בזמנן בין שלא בזמנן יפות שחורות בזמנן יפות שלא בזמנן רעות הרואה סוס לבן בחלום בין בנחת בין ברדוף יפה לו אדום בנחת יפה ברדוף קשה הרואה ישמעאל בחלום תפלתו נשמעת ודוקא ישמעאל בן אברהם אבל טייעא בעלמא לא הרואה גמל בחלום מיתה נקנסה לו מן השמים והצילוהו ממנה אמר רבי חמא ברבי חנינא מאי קראה (בראשית מו, ד) ואנכי ארד עמך מצרימה ואנכי אעלך גם עלה רב נחמן בר יצחק אמר מהכא (שמואל ב יב, יג) גם ה' העביר חטאתך לא תמות הרואה פינחס בחלום פלא נעשה לו הרואה פיל בחלום פלאות נעשו לו פילים פלאי פלאות נעשו לו והתניא כל מיני חיות יפין לחלום חוץ מן הפיל ומן הקוף לא קשיא",
  "rashi": [
   {
    "dh": "שיראי דמלכא",
    "text": " — מעילים של מלך:"
   },
   {
    "dh": "דאצטליק",
    "text": " — נחלק לב' ודוגמתו בהעור והרוטב (דף קכד.) דצלקי מצלק:"
   },
   {
    "dh": "יעצו עליך רעה",
    "text": " — והם הלחיים פה שיעץ עליך רעה:"
   },
   {
    "dh": "חרון אף",
    "text": " — ניכר בחוטם שמתחמם ומוציא הבל על כן הוא קרוי חרון אף:"
   },
   {
    "dh": "לא תצטרך למעשה ידיך",
    "text": " — שתתעשר:"
   },
   {
    "dh": "באדרותא מיתת",
    "text": " — בכבוד ובהדר תמות:"
   },
   {
    "dh": "אמו בעל",
    "text": " — דומיא דשמן שהוא בתוך הזית השקה את אמו:"
   },
   {
    "dh": "קטיף לי כוכבא",
    "text": " — עקרתי כוכב בחלום:"
   },
   {
    "dh": "גנבת",
    "text": " — שנמשלו לכוכבים:"
   },
   {
    "dh": "טונא דאסא",
    "text": " — טולא דאסא:"
   },
   {
    "dh": "נערה המאורסה",
    "text": " — היו רגילין לעשות לה חופה של הדס בכניסתה לחופה וקורין לה הינומא כדאמרינן בכתובות (דף טו:) שיצאתה בהינומא וראשה פרוע:"
   },
   {
    "dh": "שכבי משלחת",
    "text": " — מתים הפשטת:"
   },
   {
    "dh": "אם כן",
    "text": " — דלית לך התם נכסי ואבוך לא שכיב התם:"
   },
   {
    "dh": "קפא",
    "text": " — דאמרי לך היא כשורא שבלשון פרס ויון קורין לכשורא קפא:"
   },
   {
    "dh": "דיקא",
    "text": " — הוא עשרה שבלשון יוני קורין לעשרה דיקא והכי אמרי לך יש לך ממון בקורה עשירית:"
   },
   {
    "dh": "דריש עשרה",
    "text": " — קורה שבראש עשרה:"
   },
   {
    "dh": "שלש שלומות הם",
    "text": " — שלש חלומות המבשרים שלום:"
   },
   {
    "dh": "ופרשו כאשר בסיר",
    "text": " — אלמא פורענותא היא:"
   },
   {
    "dh": "ובכל קנינך",
    "text": " — לשון מרובה הוא אף קנים הרבה קנה של בינה הוא:"
   },
   {
    "dh": "קרא קורא קירא קניא",
    "text": " — קרא דלעת כדאמרינן לקמן הרואה דלועין בחלום ירא שמים הוא לשון דלו עיני למרום (ישעיהו ל״ח:י״ד):"
   },
   {
    "dh": "קורא",
    "text": " — רך הגדל בענפי הדקל בכל שנה כדרך שאר אילנות ולשנה שניה הוא מתקשה ונעשה עץ:"
   },
   {
    "dh": "קירא",
    "text": " — שעוה:"
   },
   {
    "dh": "קניא",
    "text": " — קנה:"
   },
   {
    "dh": "האוכל מבשרו",
    "text": " — בחלום:"
   },
   {
    "dh": "בין ברדוף",
    "text": " — כשהוא רץ:"
   },
   {
    "dh": "גם עלה",
    "text": " — קרוב לנוטריקון של גמל:"
   },
   {
    "dh": "פלא נעשה לו",
    "text": " — כמו שנעשה לפינחס כדאמרינן בסנהדרין (דף פב:):"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "57a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נז",
  "amud": "א",
  "dafEn": "57a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "הא דמסרג הא דלא מסרג הרואה הונא בחלום נס נעשה לו חנינא חנניא יוחנן נסי נסים נעשו לו הרואה הספד בחלום מן השמים חסו עליו ופדאוהו והני מילי בכתבא העונה יהא שמיה רבא מברך מובטח לו שהוא בן העולם הבא הקורא ק\"ש ראוי שתשרה עליו שכינה אלא שאין דורו זכאי לכך המניח תפילין בחלום יצפה לגדולה שנאמר (דברים כח, י) וראו כל עמי הארץ כי שם י\"י נקרא עליך וגו' ותניא רבי אליעזר הגדול אומר אלו תפילין שבראש המתפלל בחלום סימן יפה לו וה\"מ דלא סיים הבא על אמו בחלום יצפה לבינה שנאמר (משלי ב, ג) כי אם לבינה תקרא הבא על נערה מאורסה יצפה לתורה שנאמר (דברים לג, ד) תורה צוה לנו משה מורשה קהלת יעקב אל תקרי מורשה אלא מאורשה הבא על אחותו בחלום יצפה לחכמה שנאמר (משלי ז, ד) אמור לחכמה אחותי את הבא על אשת איש בחלום מובטח לו שהוא בן העולם הבא וה\"מ דלא ידע לה ולא הרהר בה מאורתא א\"ר חייא בר אבא הרואה חטים בחלום ראה שלום שנאמר (תהלים קמז, יד) השם גבולך שלום חלב חטים ישביעך הרואה שעורים בחלום סרו עונותיו שנאמר (ישעיהו ו, ז) וסר עונך וחטאתך תכופר אמר רבי זירא אנא לא סלקי מבבל לא\"י עד דחזאי שערי בחלמא הרואה גפן טעונה בחלום אין אשתו מפלת נפלים שנאמר (תהלים קכח, ג) אשתך כגפן פוריה שורקה יצפה למשיח שנאמר (בראשית מט, יא) אוסרי לגפן עירה ולשורקה בני אתונו הרואה תאנה בחלום תורתו משתמרת בקרבו שנאמר (משלי כז, יח) נוצר תאנה יאכל פריה הרואה רמונים בחלום זוטרי פרי עסקיה כרמונא רברבי רבי עסקיה כרמונא פלגי אם ת\"ח הוא יצפה לתורה שנאמר (שיר השירים ח, ב) אשקך מיין הרקח מעסיס רמני ואם ע\"ה הוא יצפה למצות שנאמר (שיר השירים ד, ג) כפלח הרמון רקתך מאי רקתך אפילו ריקנין שבך מלאים מצות כרמון הרואה זיתים בחלום זוטרי פרי ורבי וקאי עסקיה כזיתים וה\"מ פרי אבל אילני הויין ליה בנים מרובין שנאמר (תהלים קכח, ג) בניך כשתילי זיתים וגו' איכא דאמרי הרואה זית בחלום שם טוב יוצא לו שנאמר (ירמיהו יא, טז) זית רענן יפה פרי תואר קרא י\"י שמך הרואה שמן זית בחלום יצפה למאור תורה שנאמר (שמות כז, כ) ויקחו אליך שמן זית זך הרואה תמרים בחלום תמו עונותיו שנאמר (איכה ד, כב) תם עונך בת ציון אמר רב יוסף הרואה עז בחלום שנה מתברכת לו עזים שנים מתברכות לו שנאמר (משלי כז, כז) ודי חלב עזים ללחמך הרואה הדס בחלום נכסיו מצליחין לו ואם אין לו נכסים ירושה נופלת לו ממקום אחר אמר עולא ואמרי לה במתניתא תנא והוא דחזא בכנייהו הרואה אתרוג בחלום הדור הוא לפני קונו שנאמר (ויקרא כג, מ) פרי עץ הדר כפות תמרים הרואה לולב בחלום אין לו אלא לב אחד לאביו שבשמים הרואה אווז בחלום יצפה לחכמה שנאמר (משלי א, כ) חכמות בחוץ תרונה והבא עליה הוי ראש ישיבה אמר רב אשי אני ראיתיה ובאתי עליה וסלקית לגדולה הרואה תרנגול בחלום יצפה לבן זכר תרנגולים יצפה לבנים זכרים תרנגולת יצפה לתרביצה נאה וגילה הרואה ביצים בחלום תלויה בקשתו נשתברו נעשית בקשתו וכן אגוזים וכן קשואים וכן כל כלי זכוכית וכן כל הנשברים כאלו הנכנס לכרך נעשו לו חפציו שנאמר (תהלים קז, ל) וינחם אל מחוז חפצם המגלח ראשו בחלום סימן יפה לו ראשו וזקנו לו ולכל משפחתו היושב בעריבה קטנה שם טוב יוצא לו בעריבה גדולה לו ולכל משפחתו וה\"מ דמדליה דלויי הנפנה בחלום סימן יפה לו שנאמר (ישעיהו נא, יד) מהר צועה להפתח וה\"מ דלא קנח העולה לגג בחלום עולה לגדולה ירד יורד מגדולתו אביי ורבא דאמרי תרווייהו כיון שעלה עלה הקורע בגדיו בחלום קורעים לו גזר דינו העומד ערום בחלום בבבל עומד בלא חטא בארץ ישראל ערום בלא מצות הנתפש לסרדיוט שמירה נעשית לו נתנוהו בקולר הוסיפו לו שמירה על שמירתו וה\"מ בקולר אבל חבלא בעלמא לא הנכנס לאגם בחלום נעשה ראש ישיבה ליער נעשה ראש לבני כלה רב פפא ורב הונא בריה דרב יהושע חזו חלמא רב פפא דעייל לאגמא נעשה ראש ישיבה רב הונא בריה דרב יהושע דעייל ליער נעשה ראש לבני כלה איכא דאמרי תרווייהו לאגמא עיילי אלא רב פפא דתלי טבלא נעשה ראש ישיבה רב הונא בריה דרב יהושע דלא תלי טבלא נעשה ראש לבני כלה אמר רב אשי אנא עיילית לאגמא ותלאי טבלא ונבחי בה נבוחי תני תנא קמיה דר\"נ בר יצחק המקיז דם בחלום עונותיו מחולין לו והתניא עונותיו סדורין לו מאי סדורין סדורין לימחל תני תנא קמיה דרב ששת הרואה נחש בחלום פרנסתו מזומנת לו נשכו נכפלה לו הרגו אבדה פרנסתו אמר ליה רב ששת כל שכן שנכפלה פרנסתו ולא היא רב ששת הוא דחזא חויא בחלמיה וקטליה תני תנא קמיה דרבי יוחנן כל מיני משקין יפין לחלום חוץ מן היין יש שותהו וטוב לו ויש שותהו ורע לו יש שותהו וטוב לו שנאמר (תהלים קד, טו) ויין ישמח לבב אנוש ויש שותהו ורע לו שנאמר (משלי לא, ו) תנו שכר לאובד ויין למרי נפש אמר ליה רבי יוחנן לתנא תני תלמיד חכם לעולם טוב לו שנאמר (משלי ט, ה) לכו לחמו בלחמי ושתו ביין מסכתי",
  "rashi": [
   {
    "dh": "דמסרג",
    "text": " — שיש לו אוכף על גביו יפה:"
   },
   {
    "dh": "נס נעשה לו",
    "text": " — נו\"ן כנגד נו\"ן וכגון שראה השם כתוב:"
   },
   {
    "dh": "חנינא",
    "text": " — נוני\"ן הרבה נסים רבים:"
   },
   {
    "dh": "והני מילי בכתבא",
    "text": " — אכולהו קאי שראה הונא או חנינא או תיבה זו של הספד כתובה דמשמע חסו עליו ופדאוהו:"
   },
   {
    "dh": "דלא סיים",
    "text": " — שנעור משנתו קודם שנסתלק סימן הוא שסמוך אצל הקב\"ה:"
   },
   {
    "dh": "מובטח לו שהוא בן העולם הבא",
    "text": " — ונוטל חלקו וחלק חברו בגן עדן דדמי לאשת איש:"
   },
   {
    "dh": "פלגי",
    "text": " — רמונים שנחלקו:"
   },
   {
    "dh": "יצפה לתורה",
    "text": " — שנאמר אשקך מיין הרקח היינו תורה:"
   },
   {
    "dh": "מעסיס רמוני",
    "text": " — הנמצץ מן הרמונים:"
   },
   {
    "dh": "נכסיו מצליחין",
    "text": " — כהדס זה שעליו משולשים זה על זה כמין קליעה:"
   },
   {
    "dh": "בכנייהו",
    "text": " — על כנם במקומם במחובר:"
   },
   {
    "dh": "הוי ראש ישיבה",
    "text": " — שמכריז ומצוה לרבים:"
   },
   {
    "dh": "אני ראיתיה וכו'",
    "text": " — ועל כן נעשיתי ראש ישיבה במתא מחסיא:"
   },
   {
    "dh": "תרביצא",
    "text": " — גינה א\"נ בהמ\"ד תרביצא נאה וגילה נוטריקון של תרנגול:"
   },
   {
    "dh": "תלויה בקשתו",
    "text": " — בספק כביצים הללו שהאוכל סתום בם:"
   },
   {
    "dh": "נשתברו",
    "text": " — נתגלה האוכל:"
   },
   {
    "dh": "וינחם אל מחוז",
    "text": " — היינו כרך:"
   },
   {
    "dh": "חפצם",
    "text": " — סימן הוא להיות חפציו נעשים:"
   },
   {
    "dh": "המגלח",
    "text": " — סימן גדולה ותפארת היא לו כמו ויגלח ויחלף וגו' (בראשית מא):"
   },
   {
    "dh": "בעריבה",
    "text": " — בספינה:"
   },
   {
    "dh": "דמדלי",
    "text": " — שהולכת בגובה של ים:"
   },
   {
    "dh": "הנפנה",
    "text": " — סימן הוא שסרחונו וגנותו נפרש ויוצא מעליו:"
   },
   {
    "dh": "והוא דלא קנח",
    "text": " — שלא המאיס ידיו:"
   },
   {
    "dh": "בבבל עומד בלא חטא",
    "text": " — לפי שחו\"ל אין לה זכיות אלא עון יש בישיבתה וזה עומד ערום בלא אותם עונות:"
   },
   {
    "dh": "בא\"י",
    "text": " — שהרבה מצות תלויות בה וזה העומד ערום סימן שהוא ערום ממצותיה:"
   },
   {
    "dh": "הנתפש לסרדיוט",
    "text": " — שומרין אותו שלא יברח אלמא סימן שמירה הוא ששומרים אותו מידי היזק:"
   },
   {
    "dh": "אגם",
    "text": " — שיש בו קנים גדולים וקטנים וסמוכים זה לזה סימן לראש ישיבה שהגדולים והקטנים מתקבצים יחד קבוץ גדול ובאים לשמוע דרשה מפיו:"
   },
   {
    "dh": "יער",
    "text": " — אילנות גדולים ואינן סמוכים זה לזה אף זה סימן לראש לתלמידי הרב והוא ראש לבני כלה שמפרש לתלמידים שמועתם אחר שעמד הרב והם מחזרין על שמועתם ויש תלמידים שלא יבינו בדברי הרב ככל הצורך וזה מבינה להם:"
   },
   {
    "dh": "תלי טבלא",
    "text": " — נראה לו שהיה זוג וענבל תלוי בצוארו ומשמיע קול והוא סימן לראש ישיבה שמשמיע קול לרבים:"
   },
   {
    "dh": "ונבחי בה נבוחי",
    "text": " — קשקשתי בה בקול:"
   },
   {
    "dh": "עונותיו מחולין לו",
    "text": " — לפי שהעונות קרויין אדומים שנאמר אם יאדימו כתולע (ישעיהו א׳:י״ח) ואומר נכתם עונך (ירמיהו ב׳:כ״ב) וסימן הוא שפורשין ממנו:"
   },
   {
    "dh": "פרנסתו מזומנת",
    "text": " — כנחש שעפר לחמו ומצוי לו בכל מקום:"
   },
   {
    "dh": "הרגו",
    "text": " — לנחש:"
   },
   {
    "dh": "כל שכן שנכפלה לו",
    "text": " — שהרי נתגבר עליו:"
   },
   {
    "dh": "ולא היא",
    "text": " — אלא רב ששת דורש להנאתו לפתור חלומו לטובה:"
   },
   {
    "dh": "יש שותהו כו'",
    "text": " — לפיכך אין לעמוד על פתרונו:"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "57b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נז",
  "amud": "ב",
  "dafEn": "57b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אמר רבי יוחנן השכים ונפל פסוק לתוך פיו הרי זה נבואה קטנה תנו רבנן שלשה מלכים הם הרואה דוד בחלום יצפה לחסידות שלמה יצפה לחכמה אחאב ידאג מן הפורענות ג' נביאים הם הרואה ספר מלכים יצפה לגדולה יחזקאל יצפה לחכמה ישעיה יצפה לנחמה ירמיה ידאג מן הפורענות שלשה כתובים גדולים הם הרואה ספר תהלים יצפה לחסידות משלי יצפה לחכמה איוב ידאג מן הפורענות שלשה כתובים קטנים הם הרואה שיר השירים בחלום יצפה לחסידות קהלת יצפה לחכמה קינות ידאג מן הפורענות הרואה מגלת אסתר נס נעשה לו שלשה חכמים הם הרואה רבי בחלום יצפה לחכמה ראב\"ע יצפה לעשירות רבי ישמעאל בן אלישע ידאג מן הפורענות שלשה תלמידי חכמים הם הרואה בן עזאי בחלום יצפה לחסידות בן זומא יצפה לחכמה אחר ידאג מן הפורענות כל מיני חיות יפות לחלום חוץ מן הפיל והקוף והקפוד והאמר מר הרואה פיל בחלום פלא נעשה לו לא קשיא הא דמסרג הא דלא מסרג כל מיני מתכת יפין לחלום חוץ ממר פסל וקרדום והני מילי דחזנהו בקתייהו כל מיני פירות יפין לחלום חוץ מפגי תמרה כל מיני ירקות יפין לחלום חוץ מראשי לפתות והאמר רב לא איעתרי עד דחזאי ראשי לפתות כי חזא בכנייהו חזא כל מיני צבעונין יפין לחלום חוץ מן התכלת כל מיני עופות יפין לחלום חוץ מן קריא וקפופא וקורפראי: [הגו\"ף הגו\"ף מעי\"ן משיבי\"ן ומרחיבי\"ן סימן]: ג' נכנסין לגוף ואין הגוף נהנה מהן גודגדניות וכפניות ופגי תמרה שלשה אין נכנסין לגוף והגוף נהנה מהן אלו הן רחיצה וסיכה ותשמיש שלשה מעין העולם הבא אלו הן שבת שמש ותשמיש תשמיש דמאי אילימא תשמיש המטה הא מכחש כחיש אלא תשמיש נקבים שלשה משיבין דעתו של אדם אלו הן קול ומראה וריח שלשה מרחיבין דעתו של אדם אלו הן דירה נאה ואשה נאה וכלים נאים: [חמש\"ה ושש\"ה ועשר\"ה סימן]: חמשה אחד מששים אלו הן אש דבש ושבת ושינה וחלום אש אחד מששים לגיהנם דבש אחד מששים למן שבת אחד מששים לעולם הבא שינה אחד מששים למיתה חלום אחד מששים לנבואה ששה דברים סימן יפה לחולה אלו הן עטוש זיעה שלשול קרי ושינה וחלום עטוש דכתיב (איוב מא, י) עטישותיו תהל אור זיעה דכתיב (בראשית ג, יט) בזעת אפיך תאכל לחם שלשול דכתיב (ישעיהו נא, יד) מהר צועה להפתח ולא ימות לשחת קרי דכתיב (ישעיהו נג, י) יראה זרע יאריך ימים שינה דכתיב (איוב ג, יג) ישנתי אז ינוח לי חלום דכתיב (ישעיהו לח, טז) ותחלימני והחייני ששה דברים מרפאין את החולה מחליו ורפואתו רפואה אלו הן כרוב ותרדין וסיסין יבשין וקיבה והרת ויותרת הכבד וי\"א אף דגים קטנים ולא עוד אלא שדגים קטנים מפרין ומברין כל גופו של אדם עשרה דברים מחזירין את החולה לחליו וחליו קשה אלו הן האוכל בשר שור בשר שמן בשר צלי בשר צפרים וביצה צלויה ותגלחת ושחלים והחלב והגבינה והמרחץ וי\"א אף אגוזים וי\"א אף קשואים תנא דבי ר' ישמעאל למה נקרא שמן קשואים מפני שהן קשים לגוף כחרבות איני והכתיב (בראשית כה, כג) ויאמר ה' לה שני גוים בבטנך אל תקרי גוים אלא גיים וא\"ר יהודה אמר רב אלו אנטונינוס ורבי שלא פסק משלחנם לא צנון ולא חזרת ולא קשואין לא בימות החמה ולא בימות הגשמים לא קשיא הא ברברבי הא בזוטרי ת\"ר מת בבית שלום בבית אכל ושתה בבית סימן יפה לבית נטל כלים מן הבית סימן רע לבית תרגמא רב פפא במסאנא וסנדלא כל דשקיל שכבא מעלי בר ממסאנא וסנדלא כל דיהיב שכבא מעלי בר מעפרא וחרדלא: מקום שנעקרה ממנו עבודת גלולים: תנו רבנן הרואה מרקוליס אומר ברוך שנתן ארך אפים לעוברי רצונו מקום שנעקרה ממנו עבודת כוכבים אומר ברוך שעקר עכו\"ם מארצנו וכשם שנעקרה ממקום זה כן תעקר מכל מקומות ישראל והשב לב עובדיהם לעבדך ובח\"ל אין צריך לומר והשב לב עובדיהם לעבדך מפני שרובה עובדי כוכבים רשב\"א אומר אף בחוץ לארץ צריך לומר כן מפני שעתידים להתגייר שנאמר (צפניה ג, ט) אז אהפוך אל עמים שפה ברורה דרש רב המנונא הרואה בבל הרשעה צריך לברך חמש ברכות ראה בבל אומר ברוך שהחריב בבל הרשעה ראה ביתו של נבוכדנצר אומר ברוך שהחריב ביתו של נבוכדנצר הרשע ראה גוב של אריות או כבשן האש אומר ברוך שעשה נסים לאבותינו במקום הזה ראה מרקוליס אומר ברוך שנתן ארך אפים לעוברי רצונו ראה מקום שנוטלין ממנו עפר אומר ברוך אומר ועושה גוזר ומקיים רבא כי הוה חזי חמרי דשקלי עפרא טריף להו ידא על גבייהו ואמר רהוטו צדיקי למעבד רעותא דמרייכו מר בריה דרבינא כי הוה מטי לבבל הוה שקיל עפרא בסודריה ושדי לברא לקיים מה שנא' (ישעיהו יד, כג) וטאטאתיה במטאטא השמד אמר רב אשי אנא הא דרב המנונא לא שמיע לי אלא מדעתאי בריכתינהו לכולהו",
  "rashi": [
   {
    "dh": "השכים",
    "text": " — העומד ממטתו ונפל לו פסוק בפיו:"
   },
   {
    "dh": "שיר השירים",
    "text": " — כולו יראת שמים וחבת המקום בלב כל ישראל:"
   },
   {
    "dh": "רבי ישמעאל בן אלישע",
    "text": " — מהרוגי מלכות היה והפשיטו עור קרקפתו בחייו:"
   },
   {
    "dh": "חוץ מן הפיל והקוף והקפוד",
    "text": " — שמשונין במראיהן. קפוד חיה שדומה לקוף ויש לה זנב ארוך ושמה מרטינ\"א:"
   },
   {
    "dh": "דמסרג",
    "text": " — אוכף על גביו וי\"א נתון באפסר:"
   },
   {
    "dh": "חוץ ממר",
    "text": " — פשו\"ר בלע\"ז:"
   },
   {
    "dh": "פסל",
    "text": " — דוליי\"ר:"
   },
   {
    "dh": "דחזנהו בקתייהו",
    "text": " — שראויין למלאכתן לחבל ולהשחית:"
   },
   {
    "dh": "פגי תמרה",
    "text": " — שלא בשלו כל צרכן:"
   },
   {
    "dh": "בכנייהו",
    "text": " — במחובר אבל בתלוש סימן הוא למכות כדפשר ליה בר הדיא לרבא קולפי בלעת:"
   },
   {
    "dh": "תכלת",
    "text": " — ירוק הוא ומי שפניו ירוקים חולה הוא:"
   },
   {
    "dh": "קריא",
    "text": " — יבנ\"ץ:"
   },
   {
    "dh": "קפופא",
    "text": " — צואיט\"א בלע\"ז ויש לה לסתות כלחיי אדם לפיכך הן מגונים:"
   },
   {
    "dh": "קורפראי",
    "text": " — טלפ\"א:"
   },
   {
    "dh": "גודגדניות",
    "text": " — צירתי\"ש:"
   },
   {
    "dh": "כפניות",
    "text": " — מין תמרים רעים:"
   },
   {
    "dh": "שמש",
    "text": " — חמה זורחת:"
   },
   {
    "dh": "קול",
    "text": " — של מיני זמר או קול ערב של אשה:"
   },
   {
    "dh": "עטוש",
    "text": " — אשטרנוד\"ר:"
   },
   {
    "dh": "מהר צועה",
    "text": " — מי שצריך להריק מעיו הרקת כלי נקראת צעיה שנאמר (ירמיהו מח) ושלחתי לו צועים וצעוהו וכליו יריקו במואב כתיב:"
   },
   {
    "dh": "ותחלימני והחייני",
    "text": " — בחזקיה כתיב:"
   },
   {
    "dh": "תרדין",
    "text": " — בלי\"ץ:"
   },
   {
    "dh": "מי סיסין",
    "text": " — בשול פוליאו\"ל:"
   },
   {
    "dh": "והרת",
    "text": " — וידלייר\"א שהשליל בתוכה:"
   },
   {
    "dh": "יותרת הכבד",
    "text": " — אייבר\"ש של בהמה:"
   },
   {
    "dh": "ומברין",
    "text": " — לשון בריאות:"
   },
   {
    "dh": "ותגלחת",
    "text": " — אם מגלח:"
   },
   {
    "dh": "זוטרי",
    "text": " — יפין:"
   },
   {
    "dh": "מסאנא וסנדלא",
    "text": " — סימן יוצאי חוץ הוא שמוציא אחרים מן הבית:"
   },
   {
    "dh": "עפרא",
    "text": " — סימן הוא שרמז להם קבורה:"
   },
   {
    "dh": "לב עובדיהם",
    "text": " — על פושעי ישראל מתפלל:"
   },
   {
    "dh": "כבשן של אש",
    "text": " — חפירה שהוסק בה כבשנם של חנניה מישאל ועזריה:"
   },
   {
    "dh": "מקום שנוטלין ממנו עפר",
    "text": " — מקום יש בבבל שאין בהמה יוצאה משם אם אין נותנים עליה עפר מעפר המקום והוא סימן השמד ומקללותיה של בבל היא וביסוד מהר\"ר יצחק ראיתי שנוטלים משם עפר לטיט לבניני המקום וסוף סוף אותו מקום אין בו ישוב ולא זרע ולא נטיעה:"
   },
   {
    "dh": "גוזר ומקיים",
    "text": " — שגזר להשמידה וקיים:"
   }
  ],
  "tosafot": [
   {
    "dh": "הרואה מרקוליס",
    "text": " — בתוספתא תנן במקום מרקוליס דהכא עבודת כוכבים וא\"כ לאו דוקא מרקוליס אלא לפי שבמקומו של תנא היו עובדים לה ועתה אין אנו רגילים לברך לפי שאנו רואים אותה בכל יום וכל הנך הרואים אמרו לעיל דהוי משלשים יום לשלשים יום:"
   },
   {
    "dh": "הרואה מרקוליס",
    "text": " — פירש ר\"י לא ידענא אמאי נקט מרקוליס יותר משאר עבודת כוכבים. ונראה לי דא\"צ לברך רק במקום שבונים עכו\"ם או שהועמדה שם מחדש ולכך נקט מרקוליס שרוגמין בה אבנים בכל יום והוי כמגדל עכו\"ם אבל לא על עכו\"ם קבועה שם מקודם ובירושלמי יש נעקרה עכו\"ם ממקום אחד ונתנה למקום אחר במקום שנתנה אומר ברוך שנתן ארך אפים לעוברי רצונו ובמקום שנעקרה אומר ברוך שעקר עכו\"ם מן המקום הזה:"
   }
  ],
  "translations": []
 },
 {
  "id": "58a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נח",
  "amud": "א",
  "dafEn": "58a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "אמר רבי ירמיה בן אלעזר נתקללה בבל נתקללו שכניה נתקללה שומרון נתברכו שכניה נתקללה בבל נתקללו שכניה דכתיב (ישעיהו יד, כג) ושמתיה למורש קפוד ואגמי מים נתקללה שומרון נתברכו שכניה דכתיב (מיכה א, ו) ושמתי שומרון לעי השדה למטעי כרם וגו' ואמר רב המנונא הרואה אוכלוסי ישראל אומר ברוך חכם הרזים אוכלוסי עובדי כוכבים אומר (ירמיהו נ, יב) בושה אמכם וגו' ת\"ר הרואה אוכלוסי ישראל אומר ברוך חכם הרזים שאין דעתם דומה זה לזה ואין פרצופיהן דומים זה לזה בן זומא ראה אוכלוסא על גב מעלה בהר הבית אמר ברוך חכם הרזים וברוך שברא כל אלו לשמשני הוא היה אומר כמה יגיעות יגע אדם הראשון עד שמצא פת לאכול חרש וזרע וקצר ועמר ודש וזרה וברר וטחן והרקיד ולש ואפה ואח\"כ אכל ואני משכים ומוצא כל אלו מתוקנין לפני וכמה יגיעות יגע אדם הראשון עד שמצא בגד ללבוש גזז ולבן ונפץ וטוה וארג ואחר כך מצא בגד ללבוש ואני משכים ומוצא כל אלו מתוקנים לפני כל אומות שוקדות ובאות לפתח ביתי ואני משכים ומוצא כל אלו לפני הוא היה אומר אורח טוב מהו אומר כמה טרחות טרח בעל הבית בשבילי כמה בשר הביא לפני כמה יין הביא לפני כמה גלוסקאות הביא לפני וכל מה שטרח לא טרח אלא בשבילי אבל אורח רע מהו אומר מה טורח טרח בעל הבית זה פת אחת אכלתי חתיכה אחת אכלתי כוס אחד שתיתי כל טורח שטרח בעל הבית זה לא טרח אלא בשביל אשתו ובניו על אורח טוב מהו אומר (איוב לו, כד) זכור כי תשגיא פעלו אשר שוררו אנשים על אורח רע כתיב (איוב לז, כד) לכן יראוהו אנשים וגו' (שמואל א יז, יב) והאיש בימי שאול זקן בא באנשים אמר רבא ואיתימא רב זביד ואיתימא רב אושעיא זה ישי אבי דוד שיצא באוכלוסא ונכנס באוכלוסא ודרש באוכלוסא אמר עולא נקיטינן אין אוכלוסא בבבל תנא אין אוכלוסא פחותה מששים רבוא ת\"ר הרואה חכמי ישראל אומר ברוך שחלק מחכמתו ליראיו חכמי עובדי כוכבים אומר ברוך שנתן מחכמתו לבריותיו הרואה מלכי ישראל אומר ברוך שחלק מכבודו ליראיו מלכי עובדי כוכבים אומר ברוך שנתן מכבודו לבריותיו א\"ר יוחנן לעולם ישתדל אדם לרוץ לקראת מלכי ישראל ולא לקראת מלכי ישראל בלבד אלא אפי' לקראת מלכי עובדי כוכבים שאם יזכה יבחין בין מלכי ישראל למלכי עובדי כוכבים רב ששת סגי נהור הוה הוו קאזלי כולי עלמא לקבולי אפי מלכא וקם אזל בהדייהו רב ששת אשכחיה ההוא צדוקי אמר ליה חצבי לנהרא כגני לייא אמר ליה תא חזי דידענא טפי מינך חלף גונדא קמייתא כי קא אוושא אמר ליה ההוא צדוקי אתא מלכא אמר ליה רב ששת לא קאתי חלף גונדא תניינא כי קא אוושא אמר ליה ההוא צדוקי השתא קא אתי מלכא אמר ליה רב ששת לא קא אתי מלכא חליף תליתאי כי קא שתקא אמר ליה רב ששת ודאי השתא אתי מלכא אמר ליה ההוא צדוקי מנא לך הא אמר ליה דמלכותא דארעא כעין מלכותא דרקיעא דכתיב (מלכים א יט, יא) צא ועמדת בהר לפני ה' והנה ה' עובר ורוח גדולה וחזק מפרק הרים ומשבר סלעים לפני ה' לא ברוח ה' ואחר הרוח רעש לא ברעש ה' ואחר הרעש אש לא באש ה' ואחר האש קול דממה דקה כי אתא מלכא פתח רב ששת וקא מברך ליה אמר ליה ההוא צדוקי למאן דלא חזית ליה קא מברכת ומאי הוי עליה דההוא צדוקי איכא דאמרי חברוהי כחלינהו לעיניה ואיכא דאמרי רב ששת נתן עיניו בו ונעשה גל של עצמות ר' שילא נגדיה לההוא גברא דבעל מצרית אזל אכל ביה קורצי בי מלכא אמר איכא חד גברא ביהודאי דקא דיין דינא בלא הרמנא דמלכא שדר עליה פריסתקא כי אתא אמרי ליה מה טעמא נגדתיה להאי אמר להו דבא על חמרתא אמרי ליה אית לך סהדי אמר להו אין אתא אליהו אדמי ליה כאיניש ואסהיד אמרי ליה אי הכי בר קטלא הוא אמר להו אנן מיומא דגלינן מארעין לית לן רשותא למקטל אתון מאי דבעיתון עבידו ביה עד דמעייני ביה בדינא פתח ר' שילא ואמר (דברי הימים א כט, יא) לך ה' הגדולה והגבורה וגו' אמרי ליה מאי קאמרת אמר להו הכי קאמינא בריך רחמנא דיהיב מלכותא בארעא כעין מלכותא דרקיעא ויהב לכו שולטנא ורחמי דינא אמרו חביבא עליה יקרא דמלכותא כולי האי יהבי ליה קולפא אמרו ליה דון דינא כי הוה נפיק אמר ליה ההוא גברא עביד רחמנא ניסא לשקרי הכי אמר ליה רשע לאו חמרי איקרו דכתיב (יחזקאל כג, כ) אשר בשר חמורים בשרם חזייה דקאזיל למימרא להו דקרינהו חמרי אמר האי רודף הוא והתורה אמרה אם בא להרגך השכם להרגו מחייה בקולפא וקטליה אמר הואיל ואתעביד לי ניסא בהאי קרא דרשינא ליה לך ה' הגדולה זו מעשה בראשית וכן הוא אומר (איוב ט, י) עושה גדולות עד אין חקר והגבורה זו יציאת מצרים שנאמר (שמות יד, לא) וירא ישראל את היד הגדולה וגו' והתפארת זו חמה ולבנה שיעמדו לו ליהושע שנאמר (יהושע י, יג) וידום השמש וירח עמד וגו' והנצח זו מפלתה של רומי וכן הוא אומר (ישעיהו סג, ג) ויז נצחם על בגדי וגו' וההוד זו מלחמת נחלי ארנון שנאמר (במדבר כא, יד) על כן יאמר בספר מלחמות ה' את והב בסופה וגו' כי כל בשמים ובארץ זו מלחמת סיסרא שנאמר (שופטים ה, כ) מן שמים נלחמו הכוכבים ממסלותם וגו' לך ה' הממלכה זו מלחמת עמלק וכן הוא אומר (שמות יז, טז) כי יד על כס יה והמתנשא זו מלחמת גוג ומגוג וכן הוא אומר (יחזקאל לח, ג) הנני אליך גוג נשיא ראש משך ותובל לכל לראש אמר רב חנן בר רבא אמר ר' יוחנן אפילו ריש גרגיתא מן שמיא מנו ליה במתניתא תנא משמיה דרבי עקיבא לך ה' הגדולה זו קריעת ים סוף והגבורה זו מכת בכורות והתפארת זו מתן תורה והנצח זו ירושלים וההוד זו בית המקדש:",
  "rashi": [
   {
    "dh": "נתקללה בבל נתקללו שכניה",
    "text": " — כלומר אוי לרשע אוי לשכנו:",
    "en": "6 hundred thousand people"
   },
   {
    "dh": "קאת וקפוד",
    "text": " — חיות ועופות רעים ומזיקין את השכנים אבל עי השדה ומטעי כרם שנתקללו בה ערי ישראל הנאה היא לשכנים:"
   },
   {
    "dh": "אוכלוסי",
    "text": " — חיל גדול של ששים רבוא:"
   },
   {
    "dh": "חכם הרזים",
    "text": " — היודע מה שבלב כל אלו:"
   },
   {
    "dh": "לשמשני",
    "text": " — שהם חורשים וזורעים ואני מוצא מוכן:"
   },
   {
    "dh": "כל אומות שוקדות ובאות לפתחי",
    "text": " — עשיר היה והכל באין אצלו לסחורה:"
   },
   {
    "dh": "שאם יזכה",
    "text": " — לעולם הבא ויראה בכבוד מלך המשיח:"
   },
   {
    "dh": "יבחין",
    "text": " — כמה יתר כבוד נוטלי שכר מצות יותר ממה שהיה כבוד האומות בעוה\"ז:"
   },
   {
    "dh": "חצבי לנהרא",
    "text": " — הכדין השלמים הולכים לנהר לשאוב מים:"
   },
   {
    "dh": "כגני לייא",
    "text": " — השבורים להיכן כלומר למה הולכים ואף אתה שאתה סומא ולא תראהו להיכן תלך:"
   },
   {
    "dh": "גונדא",
    "text": " — כת:"
   },
   {
    "dh": "כחלינהו לעיניה",
    "text": " — נקרו לעיניו:"
   },
   {
    "dh": "ורחמי דינא",
    "text": " — אוהבים משפט:"
   },
   {
    "dh": "קולפא",
    "text": " — מקל לרדות:"
   },
   {
    "dh": "התורה אמרה אם בא להרגך השכם להרגו",
    "text": " — אם במחתרת וגו' (שמות כב) לפי שבא על עסקי נפשות שיודע הוא שאם ימצא ותמצאנו חותר לא תעמיד עצמך מלהציל ממונך והוא בא לדעת כן שיקום עליך ויהרגך אמרה תורה השכם אתה והרגהו:"
   },
   {
    "dh": "הממלכה זו מלחמת עמלק",
    "text": " — דכתיב בה כסא מלכות כי יד על כס יה (שמות י״ז:ט״ז) כלומר על ידי מלחמה ליי' בעמלק יתעלה כסאו:"
   },
   {
    "dh": "המתנשא",
    "text": " — מדכתיב לשון נשיאות משמע על נשיא ראש משך ותובל:"
   },
   {
    "dh": "לכל לראש",
    "text": " — לכל הקם להיות לראש הוא מתנשא כלומר שהוא גוזר ומעמידו:"
   },
   {
    "dh": "ריש גרגיתא",
    "text": " — בור הממונה על החופרין חפירות למלאותן מים כדי להשקות בהן שדותיהן:"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "58b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נח",
  "amud": "ב",
  "dafEn": "58b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ת\"ר הרואה בתי ישראל בישובן אומר ברוך מציב גבול אלמנה בחורבנן אומר ברוך דיין האמת בתי עובדי כוכבים בישובן אומר (משלי טו, כה) בית גאים יסח ה' בחורבנן אומר (תהלים צד, א) אל נקמות ה' אל נקמות הופיע עולא ורב חסדא הוו קא אזלי באורחא כי מטו אפתחא דבי רב חנא בר חנילאי נגד רב חסדא ואתנח אמר ליה עולא אמאי קא מתנחת והאמר רב אנחה שוברת חצי גופו של אדם שנאמר (יחזקאל כא, יא) ואתה בן אדם האנח בשברון מתנים וגו' ור' יוחנן אמר אף כל גופו של אדם שנאמר (יחזקאל כא, יב) והיה כי יאמרו אליך על מה אתה נאנח ואמרת אל שמועה [כי באה] ונמס כל לב וגו' א\"ל היכי לא אתנח ביתא דהוו בה שיתין אפייתא ביממא ושיתין אפייתא בליליא ואפיין לכל מאן דצריך ולא שקל ידא מן כיסא דסבר דילמא אתי עני בר טובים ואדמטו ליה לכיסא קא מכסיף ותו הוו פתיחין ליה ארבע בבי לארבע רוחתא דעלמא וכל דהוה עייל כפין נפיק כי שבע והוו שדו ליה חטי ושערי בשני בצורת אבראי דכל מאן דכסיפא מילתא למשקל ביממא אתי ושקיל בליליא השתא נפל בתלא ולא אתנח אמר ליה הכי אמר ר' יוחנן מיום שחרב בית המקדש נגזרה גזירה על בתיהן של צדיקים שיחרבו שנאמר (ישעיהו ה, ט) באזני ה' צבאות אם לא בתים רבים לשמה יהיו גדולים וטובים מאין יושב ואמר ר' יוחנן עתיד הקדוש ברוך הוא להחזירן לישובן שנאמר (תהלים קכה, א) שיר המעלות לדוד הבוטחים ביי' כהר ציון מה הר ציון עתיד הקדוש ברוך הוא להחזירו לישובו אף בתיהן של צדיקים עתיד הקב\"ה להחזירן לישובן חזייה דלא מיישב דעתיה א\"ל דיו לעבד שיהא כרבו ת\"ר הרואה קברי ישראל אומר ברוך אשר יצר אתכם בדין וזן אתכם בדין וכלכל אתכם בדין ואסף אתכם בדין ועתיד להקימכם בדין מר בריה דרבינא מסיים בה משמיה דרב נחמן ויודע מספר כולכם והוא עתיד להחיותכם ולקיים אתכם ברוך מחיה המתים קברי עובדי כוכבים אומר (ירמיהו נ, יב) בושה אמכם וגו' אמר ריב\"ל הרואה את חבירו לאחר שלשים יום אומר ברוך שהחיינו וקיימנו והגיענו לזמן הזה לאחר י\"ב חדש אומר ברוך מחיה המתים אמר רב אין המת משתכח מן הלב אלא לאחר שנים עשר חדש שנאמר (תהלים לא, יג) נשכחתי כמת מלב הייתי ככלי אובד רב פפא ורב הונא בריה דרב יהושע הוו קאזלי באורחא פגעו ביה ברב חנינא בריה דרב איקא אמרו ליה בהדי דחזינך בריכינן עלך תרתי ברוך אשר חלק מחכמתו ליראיו ושהחיינו אמר להו אנא נמי כיון דחזתינכו חשבתינכו עלואי כשיתין רבוון בית ישראל וברכינא עלייכו תלתא הנך תרתי וברוך חכם הרזים אמרו ליה חכימת כולי האי יהבי ביה עינייהו ושכיב אמר ריב\"ל הרואה את הבהקנים אומר ברוך משנה הבריות מיתיבי ראה את הכושי ואת הגיחור ואת הלווקן ואת הקפח ואת הננס ואת הדרניקוס אומר ברוך משנה את הבריות את הקטע ואת הסומא ואת פתויי הראש ואת החגר ואת המוכה שחין ואת הבהקנים אומר ברוך דיין אמת ל\"ק הא ממעי אמו הא בתר דאיתיליד דיקא נמי דקתני דומיא דקטע שמע מינה ת\"ר הרואה פיל קוף וקפוף אומר ברוך משנה את הבריות ראה בריות טובות ואילנות טובות אומר ברוך שככה לו בעולמו: על הזיקין: מאי זיקין אמר שמואל כוכבא דשביט ואמר שמואל נהירין לי שבילי דשמיא כשבילי דנהרדעא לבר מכוכבא דשביט דלא ידענא מאי ניהו וגמירי דלא עבר כסלא ואי עבר כסלא חרב עלמא והא קא חזינן דעבר זיויה הוא דעבר ומתחזי כדעבר איהו רב הונא ברי' דרב יהושע אמר וילון הוא דמקרע דמגלגל ומחזי נהורא דרקיעא רב אשי אמר כוכבא הוא דעקר מהאי גיסא דכסלא וחזי ליה חבריה מהך גיסא ומיבעית ומחזי כמאן דעבר שמואל רמי כתיב (איוב ט, ט) עושה עש כסיל וכימה וכתיב (עמוס ה, ח) עושה כימה וכסיל הא כיצד אלמלא חמה של כסיל לא נתקיים עולם מפני צינה של כימה ואלמלא צינה של כימה לא נתקיים עולם מפני חמה של כסיל וגמירי אי לאו עוקצא דעקרבא דמנח בנהר דינור כל מאן דהוה טריקא ליה עקרבא לא הוה חיי והיינו דקאמר ליה רחמנא לאיוב (איוב לח, לא) התקשר מעדנות כימה או מושכות כסיל תפתח מאי כימה אמר שמואל כמאה ככבי אמרי לה דמכנפי ואמרי לה דמבדרן מאי עש אמר רב יהודה יותא מאי יותא אמרי לה זנב טלה ואמרי לה רישא דעגלא ומסתברא כמאן דאמר זנב טלה דכתיב (איוב לח, לב) ועיש על בניה תנחם אלמא חסרה ומתחזיא",
  "rashi": [
   {
    "dh": "ברוך מציב גבול אלמנה",
    "text": " — כגון בישוב בית שני:"
   },
   {
    "dh": "אומר ברוך דיין האמת",
    "text": " — דומיא דקטע וקטע בתר דאתיליד הוא:"
   },
   {
    "dh": "אמאי",
    "text": " — קא מתנחת:"
   },
   {
    "dh": "נפל ליה בתלא",
    "text": " — שנפל לו ונעשה תל:"
   },
   {
    "dh": "דיו לעבד שיהא כרבו",
    "text": " — שהרי בית המקדש חרב שהוא ביתו של הקב\"ה:"
   },
   {
    "dh": "ככלי אובד",
    "text": " — וסתם כלי לאחר י\"ב חדש משתכח מן הלב דיאוש בעלים לאחר י\"ב חדש בפרק אלו מציאות (בבא מציעא ד' כח.) מי שמצא כלי או שום מציאה חייב להכריז שלש רגלים ואם נמצא אחר הסוכות צריך להמתין ולהכריז בפסח ובעצרת ובחג דהיינו י\"ב חדש ושוב אין צריך להכריז:"
   },
   {
    "dh": "אשר חלק ושהחיינו",
    "text": " — דלאחר שלשים יום הוה:"
   },
   {
    "dh": "מחכמתו ליראיו",
    "text": " — כרב חנינא דחכים טפי:"
   },
   {
    "dh": "בהקנים",
    "text": " — לינטייליו\"ש כעדשים:"
   },
   {
    "dh": "כושי",
    "text": " — שחור הרבה:"
   },
   {
    "dh": "גיחור",
    "text": " — אדום הרבה רו\"ש בלע\"ז:"
   },
   {
    "dh": "לווקן",
    "text": " — לבן יותר מדאי:"
   },
   {
    "dh": "קפח",
    "text": " — בטן גדול מתוך עוביו נראית קומתו מקופחת לשון אחר קפח ארוך הרבה ופרצופו שמוט ובולט דמכוער הוי:"
   },
   {
    "dh": "הדרניקוס",
    "text": " — רודא\"ש לשון אחר פיו עקום:"
   },
   {
    "dh": "אומר ברוך משנה את הבריות",
    "text": " — דממעי אמן הוו:"
   },
   {
    "dh": "קטע",
    "text": " — שנקטעו ידיו הכא הוא דקטע משמע דידים הוא משום דקתני תרתי קטע וחגר אבל היכא דקתני קטע לחוד משמע דרגלים כדתנן (שבת פ\"ו ד' סה:) הקטע יוצא בקב שלו:"
   },
   {
    "dh": "פתויי ראש",
    "text": " — ששערו כנמטא כל שערו דבוק זה בזה פלטדי\"ר בלע\"ז:"
   },
   {
    "dh": "היכא דאיתרע ליה בתר דאתיליד",
    "text": " — לאחר שנולד נולדו בו:"
   },
   {
    "dh": "דומיא דקטע",
    "text": " — וקטע בתר דאיתיליד הוא:"
   },
   {
    "dh": "קפוף",
    "text": " — עוף שקורין וולטו\"ר ויש לו לסתות ולחיים כאדם:"
   },
   {
    "dh": "כוכבא דשביט",
    "text": " — כוכב היורד כחץ ברקיע ממקום למקום וארוך כשבט שהוא יורה ונראה כמו שפותח רקיע:"
   },
   {
    "dh": "וגמירי דלא עבר כסלא",
    "text": " — שאינו מעביר מזל כסיל כשהוא שביט:"
   },
   {
    "dh": "כסלא",
    "text": " — כסיל:"
   },
   {
    "dh": "רב הונא אמר",
    "text": " — מאי זיקין וילון הוא דמקרע ומתחזי רקיע דרך הקריעה כרומח:"
   },
   {
    "dh": "כתיב עושה עש כסיל וכימה",
    "text": " — דקדמיה ליה כסיל לכימה:"
   },
   {
    "dh": "הא כיצד",
    "text": " — מלמד ששניהן שוין:"
   },
   {
    "dh": "שאלמלא חמה של כסיל וכו'",
    "text": " — כסיל שולט בימות החמה להכי אקדמיה קרא כימה שולט בימות הגשמים ולהכי אקדמיה קרא:"
   },
   {
    "dh": "עקרב",
    "text": " — היינו כימה וממזל טלה הוא:"
   },
   {
    "dh": "עוקצא דעקרבא",
    "text": " — זנב העקרב:"
   },
   {
    "dh": "נהר דינור",
    "text": " — מתשת כחו של עקרב:"
   },
   {
    "dh": "מעדנות כימה",
    "text": " — קשרים של כימה:"
   },
   {
    "dh": "כמאה ככבי",
    "text": " — יש בין הכוכבים של כימה שהן כחה של כימה:"
   },
   {
    "dh": "אמרי לה דמכנפי",
    "text": " — אותן שהן כחה של כימה ואמרי לה דמבדרן:"
   },
   {
    "dh": "יותא אמרי לה",
    "text": " — דקיימא בזנב טלה ואמרי לה דקיימא בריש עגלא:"
   },
   {
    "dh": "רישא דעגלא",
    "text": " — ראשו של עגל והיינו מזל שור והוא נמשך אחר מזל טלה ראש השור סמוך לזנב טלה שכן הסדר טלה שור תאומים:"
   },
   {
    "dh": "ומסתברא כמאן דאמר זנב",
    "text": " — היינו כוכבים העשויין כזנב מדכתיב ועיש על בניה תנחם:"
   },
   {
    "dh": "אלמא חסרה",
    "text": " — והאי זנב מחזי כטרפא דטריף:"
   }
  ],
  "tosafot": [
   {
    "dh": "הרואה חבירו אחר שלשים יום אומר שהחיינו",
    "text": " — אומר ר\"י דוקא חבירו החביב עליו אבל בענין אחר לא:"
   },
   {
    "dh": "וילון הוא דמקרע ומחזי נהורא ברקיע",
    "text": " — לפי הענין משמע דבא רב הונא לתרץ דלא עבר כסלא ולא קאי אמתניתין לפרושי מאי זיקין דהא רב אשי דבתריה קאי אשנויא דלא עבר כסלא ודלא כפירוש רש\"י:"
   }
  ],
  "translations": []
 },
 {
  "id": "59a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נט",
  "amud": "א",
  "dafEn": "59a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "כטרפא דטריף והאי דאזלא בתרה דאמרה לה הב לי בני שבשעה שהקב\"ה בקש להביא מבול לעולם נטל שני כוכבים מכימה והביא מבול לעולם וכשבקש לסתמה נטל שני כוכבים מעיש וסתמה וליהדר לה אין הבור מתמלא מחוליתו אי נמי אין קטיגור נעשה סניגור וליברי לה תרי ככבי אחריני (קהלת א, ט) אין כל חדש תחת השמש א\"ר נחמן עתיד הקב\"ה להחזירן לה שנאמר (איוב לח, לב) ועיש על בניה תנחם: ועל הזועות: מאי זועות א\"ר קטינא גוהא רב קטינא הוה קאזיל באורחא כי מטא אפתחא דבי אובא טמיא גנח גוהא אמר מי ידע אובא טמיא האי גוהא מהו רמא ליה קלא קטינא קטינא אמאי לא ידענא בשעה שהקב\"ה זוכר את בניו ששרויים בצער בין אומות העולם מוריד שתי דמעות לים הגדול וקולו נשמע מסוף העולם ועד סופו והיינו גוהא א\"ר קטינא אובא טמיא כדיב הוא ומיליה כדיבין אי הכי גוהא גוהא מיבעי ליה ולא היא גוהא גוהא עביד והאי דלא אודי ליה כי היכי דלא ליטעי כולי עלמא אבתריה ורב קטינא דידיה אמר סופק כפיו שנאמר (יחזקאל כא, כב) וגם אני אכה כפי אל כפי והניחותי חמתי רבי נתן אומר אנחה מתאנח שנאמר (יחזקאל ה, יג) והניחותי חמתי בם והנחמתי ורבנן אמרי בועט ברקיע שנאמר (ירמיהו כה, ל) הידד כדורכים יענה אל כל יושבי הארץ רב אחא בר יעקב אמר דוחק את רגליו תחת כסא הכבוד שנאמר (ישעיהו סו, א) כה אמר ה' השמים כסאי והארץ הדום רגלי: ועל הרעמים: מאי רעמים אמר שמואל ענני בגלגלא שנאמר (תהלים עז, יט) קול רעמך בגלגל האירו ברקים תבל רגזה ותרעש הארץ ורבנן אמרי ענני דשפכי מיא להדדי שנאמר (ירמיהו י, יג) לקול תתו המון מים בשמים רב אחא בר יעקב אמר ברקא תקיפא דבריק בעננא ומתבר גזיזי דברזא רב אשי אמר ענני חלחולי מחלחלי ואתי זיקא ומנשב אפומייהו ודמי כזיקא על פום דני ומסתברא כרב אחא בר יעקב דבריק ברקא ומנהמי ענני ואתי מטרא: ועל הרוחות: מאי רוחות אמר אביי זעפא ואמר אביי גמירי דזעפא בליליא לא הוי והא קא חזינן דהוי ההוא דאתחולי ביממא ואמר אביי גמירי דזעפא תרתי שעי לא קאי לקיים מה שנאמר (נחום א, ט) לא תקום פעמים צרה והא קא חזינן דקאי דמפסיק ביני ביני: ועל הברקים אומר ברוך שכחו וגבורתו מלא עולם: מאי ברקים אמר רבא ברקא ואמר רבא ברקא יחידאה וברקא חיורא וברקא ירוקתא וענני דסלקן בקרן מערבית ואתיין מקרן דרומית ותרתי ענני דסלקן חדא לאפי חברתה כולהו קשיין למאי נפקא מינה למבעי רחמי והני מילי בליליא אבל בצפרא לית בהו מששא אמר רבי שמואל בר יצחק הני ענני דצפרא לית בהו מששא דכתיב (הושע ו, ד) וחסדכם כענן בקר וגו' א\"ל רב פפא לאביי הא אמרי אינשי כד מפתח בבי מיטרא בר חמרא מוך שקיך וגני לא קשיא הא דקטר בעיבא הא דקטר בענני אמר ר' אלכסנדרי אמר ר' יהושע בן לוי לא נבראו רעמים אלא לפשוט עקמומית שבלב שנאמר (קהלת ג, יד) והאלהים עשה שייראו מלפניו וא\"ר אלכסנדרי אמר ריב\"ל הרואה את הקשת בענן צריך שיפול על פניו שנאמר (יחזקאל א, כח) כמראה הקשת אשר יהיה בענן וגו' ואראה ואפול על פני לייטי עלה במערבא משום דמחזי כמאן דסגיד לקשתא אבל ברוכי ודאי מברך מאי מברך ברוך זוכר הברית במתניתא תנא ר' ישמעאל בנו של ר' יוחנן בן ברוקא אומר נאמן בבריתו וקיים במאמרו א\"ר פפא הלכך נימרינהו לתרוייהו ברוך זוכר הברית ונאמן בבריתו וקיים במאמרו: על ההרים ועל הגבעות: אטו כל הני דאמרן עד השתא לאו מעשה בראשית נינהו והכתיב (תהלים קלה, ז) ברקים למטר עשה אמר אביי כרוך ותני רבא אמר התם מברך תרתי ברוך שכחו מלא עולם ועושה מעשה בראשית הכא עושה מעשה בראשית איכא שכחו מלא עולם ליכא אריב\"ל הרואה רקיע בטהרתה אומר ברוך עושה בראשית אימתי אמר אביי כי אתא מטרא כולי ליליא ובצפרא אתא אסתנא ומגליא להו לשמיא ופליגי דרפרם בר פפא א\"ר חסדא דאמר רפרם בר פפא א\"ר חסדא מיום שחרב בהמ\"ק לא נראית רקיע בטהרתה שנאמר (ישעיהו נ, ג) אלביש שמים קדרות ושק אשים כסותם:",
  "rashi": [
   {
    "dh": "כטרפא דטריף",
    "text": " — דבר שהוא חסר וסתמוהו מגופו שעשאוהו כנוס ומתחזי כמכה בקורנס טרפא דטריף מוכה בהכאות כמו ביצה טרופה. ל\"א דמתחזיא כדטרפא מטרף נדבק יחד ועשאו סניפין כמין חיבור:"
   },
   {
    "dh": "והאי דאזלא",
    "text": " — עיש אחר כימה:"
   },
   {
    "dh": "דאמרה לה הב לי בני",
    "text": " — שני כוכבים שלי:"
   },
   {
    "dh": "וליהדר",
    "text": " — לכימה אותן כוכבים עצמן שנטל הימנה:"
   },
   {
    "dh": "גוהא",
    "text": " — בלשונם קורין רעידת הארץ גוהא:"
   },
   {
    "dh": "אובא טמיא",
    "text": " — בעל אוב של עצמות שעושה כשוף בעצמות המת. טמיא עצמות ודומה לו במסכת כלים בית מלא טמיא ופי' רב האי מלא טמיא בית שהוא מלא עצמות והביא ראיה על זה מבראשית רבה דקתני אדרינוס שחיק טמיא דהיינו שחיק עצמות ואין לפרש אוב טמא שאין זה הלשון:"
   },
   {
    "dh": "גנח גוהא",
    "text": " — ותגעש ותרעש כלומר נזדעזעת הארץ מאד מאד. גנח גוהא חדא מילתא היא וכן הלשון:"
   },
   {
    "dh": "גוהא גוהא מיבעי ליה",
    "text": " — שני פעמים היה לו להזדעזע כנגד שתי דמעות:"
   },
   {
    "dh": "סופק כפיו",
    "text": " — ומאותו קול מזדעזעת הארץ שמצינו שכפיו סופק שנאמר גם אני אכה כפי אל כפי (יחזקאל כ״א:כ״ב):"
   },
   {
    "dh": "אנחה מתאנח",
    "text": " — ומאותה אנחה מרעיד הקרקע ומצינו שמתאנח שנאמר והניחותי חמתי בם (יחזקאל ה׳:י״ג) כביכול כאדם שיש לו חימה ומתאנח ומתנחם דעתו ועושה לו נחת רוח:"
   },
   {
    "dh": "והנחמתי",
    "text": " — אנחם על הרעה שעשיתי להן:"
   },
   {
    "dh": "הידד כדורכים יענה",
    "text": " — שדורך ובועט ברקיע:"
   },
   {
    "dh": "והארץ הדום רגלי",
    "text": " — כגון שדחה תחת כסא הכבוד ומגיע בעוטו עד לארץ שהיא הדום רגליו:"
   },
   {
    "dh": "ענני בגלגלא",
    "text": " — עננים מתחופפין ומתחככין ונשמע הקול לשון אחר העננים פוגעין בגלגל ומתגלגלות עם הגלגל בעל כרחם ואותו הקול היינו רעמים:"
   },
   {
    "dh": "ברקא",
    "text": " — ברקים של אש:"
   },
   {
    "dh": "ומתבר גזיזי דברזא",
    "text": " — ואותו הקול היינו רעמים. גזיזי גלציי\"ש חתיכות של ברד:"
   },
   {
    "dh": "חלחולי מחלחלי",
    "text": " — ענני ומנשב זיקא עלייהו והיינו רעמים:"
   },
   {
    "dh": "מנהמי ענני",
    "text": " — הומות העננים:"
   },
   {
    "dh": "זעפא",
    "text": " — סופטורביי\"ל:"
   },
   {
    "dh": "ברקא",
    "text": " — אישלוזיר\"א לשון מבריק נהר:"
   },
   {
    "dh": "ברקא יחידאה",
    "text": " — שלא הבריק אלא פעם אחד:"
   },
   {
    "dh": "וברקא חיורא וברקא ירוקתא כולהו קשיין",
    "text": " — שאינם של ברכה:"
   },
   {
    "dh": "דסלקן חדא לאפי חברתה",
    "text": " — ששני עננים פוגעים זה את זה:"
   },
   {
    "dh": "ענן בקר",
    "text": " — לא קבוע:"
   },
   {
    "dh": "כד מפתח בבי מטרא בר חמרא מוך שקיך וגני",
    "text": " — אם כשתפתח דלתיך בבקר ירד לך מטר לך אני אומר חמר ההולך ממקום למקום להביא תבואה מוך שקיך וגני כפול שקך תחתיך ותישן עליו ולא תלך אנה ואנה להביא תבואה לפי שיהיו החטים בזול בשביל הגשם:"
   },
   {
    "dh": "ה\"ג הא דקטר בעיבא",
    "text": " — נתקשרו השמים בעב עבה אז טוב כי ירד גשם רב:"
   },
   {
    "dh": "הא דקטיר בעננא",
    "text": " — ענן קלוש הוא ענן בקר שאין בו ממש:"
   },
   {
    "dh": "צריך שיפול על פניו",
    "text": " — לפי שהוא מראה כבוד ה':"
   },
   {
    "dh": "על ההרים",
    "text": " — לא מצי לברוכי מלא עולם שאינן במקום אחד אלא כל אחד ואחד במקומו:"
   },
   {
    "dh": "כרוך ותני",
    "text": " — בכולהו ברוך עושה בראשית וברוך שכחו מלא עולם כרוך ותני לכולהו בחדא בבא ועל כולם שתי ברכות הללו:"
   },
   {
    "dh": "אומר ברוך עושה בראשית",
    "text": " — שכך היתה ברייתו ואחר כך כסוהו עננים:"
   },
   {
    "dh": "אסתנא",
    "text": " — רוח צפונית:"
   }
  ],
  "tosafot": [
   {
    "dh": "הלכך נימרינהו לתרוייהו",
    "text": " — אומר ר\"י דאין חותמין בברוך בברכה זו והיכי מברך ברוך אתה ה' אלהינו מלך העולם נאמן בבריתו וקיים בשבועתו וזוכר הברית:"
   },
   {
    "dh": "הלכך נימרינהו לתרוייהו",
    "text": " — רוב ההודאות ואל ההודאות. לפיכך תקנו בישתבח אחר סיום הברכה ברוך אתה ה' אל מלך גדול בתשבחות אל ההודאות:"
   },
   {
    "dh": "רבא אמר התם מברך שכחו וגבורתו מלא עולם ועושה מעשה בראשית",
    "text": " — פי' אומר או האי או האי איזה שירצה וכן פירש רב אלפס:"
   }
  ],
  "translations": []
 },
 {
  "id": "59b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "נט",
  "amud": "ב",
  "dafEn": "59b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "תנו רבנן הרואה חמה בתקופתה לבנה בגבורתה וכוכבים במסילותם ומזלות כסדרן אומר ברוך עושה בראשית ואימת הוי אמר אביי כל כ\"ח שנין והדר מחזור ונפלה תקופת ניסן בשבתאי באורתא דתלת נגהי ארבע: ר' יהודה אומר הרואה הים וכו': לפרקים עד כמה אמר רמי בר אבא א\"ר יצחק עד שלשים יום ואמר רמי בר אבא א\"ר יצחק הרואה פרת אגשרא דבבל אומר ברוך עושה בראשית והאידנא דשניוה פרסאי מבי שבור ולעיל רב יוסף אמר מאיהי דקירא ולעיל ואמר רמי בר אבא הרואה דגלת אגשרא דשביסתנא אומר ברוך עושה בראשית מאי (בראשית ב, יד) חדקל א\"ר אשי שמימיו חדין וקלין מאי פרת שמימיו פרין ורבין ואמר רבא האי דחריפי בני מחוזא משום דשתו מיא דדגלת האי דגיחורי משום דמשמשי ביממא והאי דניידי עינייהו משום דדיירו בבית אפל: על הגשמים כו': ועל הגשמים הטוב והמטיב מברך והא\"ר אבהו ואמרי לה במתניתא תנא מאימתי מברכין על הגשמים משיצא חתן לקראת כלה מאי מברכין אמר רב יהודה מודים אנחנו לך על כל טפה וטפה שהורדת לנו ורבי יוחנן מסיים בה הכי אילו פינו מלא שירה כים וכו' אין אנו מספיקין להודות לך ה' אלהינו עד תשתחוה בא\"י רוב ההודאות רוב ההודאות ולא כל ההודאות אמר רבא אימא האל ההודאות א\"ר פפא הלכך נימרינהו לתרוייהו רוב ההודאות והאל ההודאות ואלא קשיא ל\"ק הא דשמע משמע הא דחזא מחזי דשמע משמע היינו בשורות טובות ותנן על בשורות טובות אומר ברוך הטוב והמטיב אלא אידי ואידי דחזי מחזי ולא קשיא הא דאתא פורתא הא דאתא טובא ואב\"א הא והא דאתא טובא ולא קשיא הא דאית ליה ארעא הא דלית ליה ארעא אית ליה ארעא הטוב והמטיב מברך והא (תנן) בנה בית חדש וקנה כלים חדשים אומר ברוך שהחיינו והגיענו לזמן הזה שלו ושל אחרים אומר הטוב והמטיב לא קשיא הא דאית ליה שותפות הא דלית ליה שותפות והתניא קצרו של דבר על שלו הוא אומר ברוך שהחיינו וקיימנו על שלו ועל של חבירו אומר ברוך הטוב והמטיב וכל היכא דלית לאחרינא בהדיה לא מברך הטוב והמטיב והתניא אמרו ליה ילדה אשתו זכר אומר ברוך הטוב והמטיב התם נמי דאיכא אשתו בהדיה דניחא לה בזכר ת\"ש מת אביו והוא יורשו בתחלה אומר ברוך דיין האמת ולבסוף הוא אומר ברוך הטוב והמטיב התם נמי דאיכא אחי דקא ירתי בהדיה ת\"ש שינוי יין א\"צ לברך שינוי מקום צריך לברך וא\"ר יוסף בר אבא א\"ר יוחנן אע\"פ שאמרו שינוי יין א\"צ לברך אבל אומר ברוך הטוב והמטיב התם נמי דאיכא בני חבורה דשתו בהדיה: בנה בית חדש וקנה כלים חדשים וכו': א\"ר הונא לא שנו אלא שאין לו כיוצא בהן אבל יש לו כיוצא בהן א\"צ לברך ור' יוחנן אמר אפילו יש לו כיוצא בהן צריך לברך",
  "rashi": [
   {
    "dh": "בתקופתה",
    "text": " — מקום שהיא חוזרת שם לתחלת היקפה היא שעת תליית המאורות ומאז התחילה להקיף ולשמש:"
   },
   {
    "dh": "אימת הוי",
    "text": " — אחמה בתקופתה קאי:"
   },
   {
    "dh": "כל כ\"ח שנים",
    "text": " — של תקופת ניסן שבסוף כ\"ח כשחוזר מחזור גדול של חמה להיות תקופה נופלת בשעת תליית המאורות בשבתאי היא שעה תחלת ליל ד':"
   },
   {
    "dh": "באורתא דתלת נגהי ד'",
    "text": " — שהעריב שמשו של ג' בשבת ויתחיל ליל ד':"
   },
   {
    "dh": "נגהי",
    "text": " — ליל כדאמר בפסחים בשמעתא קמייתא (דף ג.) דאיכא דוכתא דקרו לליליא נגהי:"
   },
   {
    "dh": "שבתאי",
    "text": " — שם שעה ראשונה של ליל ד' שבאותה שעה נתלו מאורות ושבע שעות הן וחוזרות חלילה שצ\"ם חנכ\"ל תמצא בהקף סדרן של עולם סימני שעות תחלת הלילות כצנ\"ש חל\"ם מוצאי שבת כוכב. תחלת ליל ב' צדק. תחלת ליל ג' נוגה. תחלת ליל רביעי שבתאי. תחלת ליל ה' חמה. תחלת ליל ששי לבנה. תחלת ליל שבת מאדים. וסדר תחלת הימים כעלות השחר חל\"ם כצנ\"ש ותקופה מושכת מחברתה ז' שעות ומחצה כלומר מתאחרת אחר היום והשעה שנפלה בה חברתה ז' שעות ומחצה הרי שלשים שעות לארבע תקופות הרי יום ורביע לשנה. לד' שנים חמשה ימים למדת שאין תקופה נופלת בתחלת הלילה אלא לסוף ד' שנים שהוא מחזור קטן וז' מחזורים קטנים למחזור גדול וסימניך דב\"ז הגא\"ו הרי שאינה באה לתחלת ליל ד' אלא מכ\"ח שנים לכ\"ח שנים בראש כל מחזור קטן באה לתחלת הלילה ובראש מחזור הגדול באה לתקופה הראשונה שהוא תחלת ליל ד':"
   },
   {
    "dh": "אגשרא דבבל אומר ברוך עושה בראשית",
    "text": " — קים להו שלא נשתנה פרת מהלוכו ע\"י אדם משם ולמעלה אבל משם ולמטה הסיבוהו בני אדם דרך אחרת:"
   },
   {
    "dh": "והאידנא דשניוה פרסאי",
    "text": " — מלמעלה לגשר אין מברך עליו עושה בראשית אלא מאיהי דקירא ולעיל איהי דקירי שם מחוז שהוא על הפרת:"
   },
   {
    "dh": "חדין",
    "text": " — חריפין מיא וקלין לשקול במאזנים וטובים לשתות שאין מכבידין את הגוף:"
   },
   {
    "dh": "ה\"ג והאי דגיחורי משום דמשמשי ביממא לפיכך בניהן אדומין כאדמומית היום רו\"ש בלע\"ז",
    "text": ""
   },
   {
    "dh": "דניידי עינייהו",
    "text": " — עיניהם נדים ונעים:"
   },
   {
    "dh": "משיצא חתן לקראת כלה",
    "text": " — שהמים קבוצין על הארץ וכשהטפה נופלת עליהן טפה תחתונה בולטת לקראתה:"
   },
   {
    "dh": "שמע משמע",
    "text": " — שבשרוהו לאמר ירדו גשמים בלילה אומר הטוב והמטיב:"
   },
   {
    "dh": "אתה פורתא",
    "text": " — מודים אנחנו לך:"
   },
   {
    "dh": "אתא טובא",
    "text": " — הטוב והמטיב:"
   },
   {
    "dh": "אית ליה ארעא",
    "text": " — הטוב והמטיב שהטיב לו:"
   },
   {
    "dh": "בנה בית חדש",
    "text": " — שכולו שלו אומר שהחיינו:"
   },
   {
    "dh": "שלו ושל אחרים",
    "text": " — הטוב והמטיב:"
   },
   {
    "dh": "ה\"ג (והתנן) בנה בית חדש וכו' לא קשיא הא דאית ליה שותפות הא דלית ליה שותפות ול\"ג אלא הא והא דאית ליה ארעא וה\"פ תירוצא דשנינן קאי בדוכתיה מודים אנחנו לך בדלית ליה ארעא הטוב והמטיב בדאית ליה ודקא קשיא לך בנה בית חדש אומר שהחיינו לא קשיא ההוא דבנה בית חדש שאין לו שותפות בה ועליה מברך שהחיינו אבל גשמים בדאית ליה ארעא טובא שיש לו שותפות בה היא שהרי כל מי שיש לו קרקע שותף עמו בטובה זו",
    "text": ""
   },
   {
    "dh": "והתניא",
    "text": " — בניחותא:"
   },
   {
    "dh": "קצרו של דבר",
    "text": " — כלומר כללו של דבר:"
   },
   {
    "dh": "ולבסוף הוא אומר הטוב והמטיב",
    "text": " — על בשורות הירושה שנשארה לו ירושה מאביו שכן בשרוהו מת אביו ויורשו כלומר הניח נכסים:"
   },
   {
    "dh": "שינוי יין",
    "text": " — שתה יין בסעודה והביאו לו יין אחר טוב מן הראשון אין צריך לברך בורא פרי הגפן:"
   },
   {
    "dh": "שינוי מקום",
    "text": " — יצא מכאן והלך לבית אחר והביאו לו יין:"
   },
   {
    "dh": "ר\"י אמר אפילו יש לו כיוצא בהן",
    "text": " — מירושה הואיל ולענין קניה חדש היא אצלו צריך לברך:"
   }
  ],
  "tosafot": [
   {
    "dh": "הטוב והמטיב",
    "text": " — אבל אשינוי לחם ואשינוי בשר אין מברכין הטוב והמטיב דדווקא איין דאית ביה תרתי דסעיד ומשמח מברכין הטוב והמטיב אבל בשר ולחם לא ופרשב\"ם בערבי פסחים (דף קא. ושם) דדוקא כשהאחרון משובח מברכים הטוב והמטיב אבל בכיוצא בו לא אך בירושלמי דכיצד מברכין א\"ר אבא בר רב הונא צריך לברך על יין חדש וישן שינוי יין א\"צ לברך שינוי מקום צריך לברך היסח הדעת כשינוי מקום משמע דוקא כשהאחרון ישן דעדיף טפי ור\"ת פי' דאפי' אין האחרון חשיב רק שלא ישתנה לגריעותא יותר מדאי ומסיים בה רבי על כל חבית וחבית שהיה פותח היה מברך הטוב והמטיב ומשמע דלא קפיד אם האחרון משובח אם לאו אע\"ג דישן אידכר בסוף מ\"מ נימא דרבי פליג עליה ולפרשב\"ם יעמידנה להך דרבי במסופק אם האחרון טוב ומספק היה מברך על כל אחד שמא משובח הוא אך ר\"ת מפרש דעובדא דרבי בא לחלק כדפי' וי\"מ דההוא דחדש וישן מיירי בברכת בורא פרי הגפן דומיא דשינוי מקום דבתר הכי אבל לא מצינו כן בגמרא שלנו:"
   },
   {
    "dh": "התם דאיכא בני חבורה דשתו בהדיה",
    "text": " — וה\"ה אם אשתו ובניו עמו אבל יחיד לא ואפילו שהחיינו אין מברך יחיד על שינוי יין דלא אשכחן יחיד שמברך שהחיינו רק אחדתא וכן כל פרי חדש כשאכלו מברך שהחיינו כדאמרינן בסוף בכל מערבין (עירובין מ:):"
   },
   {
    "dh": "ורבי יוחנן אמר אפי' קנה כיוצא בהם",
    "text": " — והלכתא כר' יוחנן אליבא דלישנא בתרא אפילו קנה והדר קנה שהיו לו כלים חדשים כיוצא באלו צריך לברך דקי\"ל כרבי יוחנן לגבי דרב מכ\"ש דלגבי רב הלכתא כוותיה ואומר ר\"י דוקא בבגדים חשובים דומיא דבית חדש נקט כלים חדשים אבל שאינם חשובין כ\"כ כמו מנעלים ואנפליאות וחלוק וכיוצא בהן אין צריך לברך בירושלמי א\"ר חייא בר אבא לא סוף דברים חדשים אלא אפי' שחקים כאילו חדשים הן ר' יעקב בשם רבי חייא בר אבא אמר קנה אומר שהחיינו ניתן לו אומר הטוב והמטיב לבש בגדים אומר מלביש ערומים וצ\"ע בגמרא שלנו דלא אשכחן הטוב והמטיב אלא בדאיכא אחרינא בהדיה:"
   }
  ],
  "translations": []
 },
 {
  "id": "60a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ס",
  "amud": "א",
  "dafEn": "60a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "מכלל דכי קנה וחזר וקנה דברי הכל אין צריך לברך וא\"ד אמר רב הונא לא שנו אלא שלא קנה וחזר וקנה אבל קנה וחזר וקנה אין צריך לברך ור' יוחנן אמר אפילו קנה וחזר וקנה צריך לברך מכלל דכי יש לו וקנה דברי הכל צריך לברך מיתיבי בנה בית חדש ואין לו כיוצא בו קנה כלים חדשים ואין לו כיוצא בהם צריך לברך יש לו כיוצא בהם אין צריך לברך דברי ר\"מ ר' יהודה אומר בין כך ובין כך צריך לברך בשלמא ללישנא קמא רב הונא כר\"מ ורבי יוחנן כרבי יהודה אלא ללישנא בתרא בשלמא רב הונא כרבי יהודה אלא רבי יוחנן דאמר כמאן לא כר\"מ ולא כרבי יהודה אמר לך רבי יוחנן הוא הדין דלרבי יהודה קנה וחזר וקנה נמי צריך לברך והא דקא מיפלגי ביש לו וקנה להודיעך כחו דר\"מ דאפי' קנה ויש לו אין צריך לברך וכל שכן קנה וחזר וקנה דאין צריך לברך וליפלגו בקנה וחזר וקנה דאין צריך לברך להודיעך כחו דר' יהודה כח דהתירא עדיף ליה: מברך על הרעה כו': היכי דמי כגון דשקל בדקא בארעיה אף על גב דטבא היא לדידיה דמסקא ארעא שירטון ושבחא השתא מיהא רעה היא: ועל הטובה כו': היכי דמי כגון דאשכח מציאה אף על גב דרעה היא לדידיה דאי שמע בה מלכא שקיל לה מיניה השתא מיהא טובה היא: היתה אשתו מעוברת ואמר יהי רצון שתלד כו' הרי זו תפלת שוא: ולא מהני רחמי מתיב רב יוסף (בראשית ל, כא) ואחר ילדה בת ותקרא את שמה דינה מאי ואחר אמר רב לאחר שדנה לאה דין בעצמה ואמרה י\"ב שבטים עתידין לצאת מיעקב ששה יצאו ממני וארבעה מן השפחות הרי עשרה אם זה זכר לא תהא אחותי רחל כאחת השפחות מיד נהפכה לבת שנא' ותקרא את שמה דינה אין מזכירין מעשה נסים ואיבעית אימא מעשה דלאה בתוך ארבעים יום הוה כדתניא שלשה ימים הראשונים יבקש אדם רחמים שלא יסריח משלשה ועד ארבעים יבקש רחמים שיהא זכר מארבעים יום ועד שלשה חדשים יבקש רחמים שלא יהא סנדל משלשה חדשים ועד ששה יבקש רחמים שלא יהא נפל מששה ועד תשעה יבקש רחמים שיצא בשלום ומי מהני רחמי והא\"ר יצחק בריה דרב אמי איש מזריע תחלה יולדת נקבה אשה מזרעת תחלה יולדת זכר שנאמר (ויקרא יב, ב) אשה כי תזריע וילדה זכר הכא במאי עסקינן כגון שהזריעו שניהם בבת אחת: היה בא בדרך: ת\"ר מעשה בהלל הזקן שהיה בא בדרך ושמע קול צוחה בעיר אמר מובטח אני שאין זה בתוך ביתי ועליו הכתוב אומר (תהלים קיב, ז) משמועה רעה לא יירא נכון לבו בטוח בה' אמר רבא כל היכי דדרשת להאי קרא מרישיה לסיפיה מדריש מסיפיה לרישיה מדריש מרישיה לסיפיה מדריש משמועה רעה לא יירא מה טעם נכון לבו בטוח בה' מסיפיה לרישיה מדריש נכון לבו בטוח בה' משמועה רעה לא יירא ההוא תלמידא דהוה קא אזיל בתריה דרבי ישמעאל ברבי יוסי בשוקא דציון חזייה דקא מפחיד אמר ליה חטאה את דכתיב (ישעיהו לג, יד) פחדו בציון חטאים אמר ליה והכתיב (משלי כח, יד) אשרי אדם מפחד תמיד אמר ליה ההוא בדברי תורה כתיב יהודה בר נתן הוה שקיל ואזיל בתריה דרב המנונא אתנח אמר ליה יסורים בעי ההוא גברא לאתויי אנפשיה דכתיב (איוב ג, כה) כי פחד פחדתי ויאתיני ואשר יגורתי יבא לי והא כתיב אשרי אדם מפחד תמיד ההוא בדברי תורה כתיב: הנכנס לכרך: תנו רבנן בכניסתו מהו אומר יהי רצון מלפניך ה' אלהי שתכניסני לכרך זה לשלום נכנס אומר מודה אני לפניך ה' אלהי שהכנסתני לכרך זה לשלום בקש לצאת אומר יהי רצון מלפניך ה' אלהי ואלהי אבותי שתוציאני מכרך זה לשלום יצא אומר מודה אני לפניך ה' אלהי שהוצאתני מכרך זה לשלום וכשם שהוצאתני לשלום כך תוליכני לשלום ותסמכני לשלום ותצעידני לשלום ותצילני מכף כל אויב ואורב בדרך אמר רב מתנא ל\"ש אלא בכרך שאין דנין והורגין בו אבל בכרך שדנין והורגין בו לית לן בה א\"ד אמר רב מתנא אפילו בכרך שדנין והורגין בו זימנין דלא מתרמי ליה אינש דיליף ליה זכותא ת\"ר הנכנס לבית המרחץ אומר יהי רצון מלפניך יי' אלהי שתצילני מזה ומכיוצא בו ואל יארע בי דבר קלקלה ועון ואם יארע בי דבר קלקלה ועון תהא מיתתי כפרה לכל עונותי אמר אביי לא לימא אינש הכי דלא לפתח פומיה לשטן דאמר ר\"ל וכן תנא משמיה דר' יוסי לעולם אל יפתח אדם פיו לשטן אמר רב יוסף מאי קראה דכתיב (ישעיהו א, ט) כמעט כסדום היינו לעמורה דמינו מאי אהדר להו נביא שמעו דבר יי' קציני סדום וגו' כי נפיק מאי אומר א\"ר אחא מודה אני לפניך יי' אלהי שהצלתני מן האור ר' אבהו על לבי בני אפחית בי בני מתותיה אתרחיש ליה ניסא קם על עמודא שזיב מאה וחד גברי בחד אבריה אמר היינו דר' אחא דאמר רב אחא הנכנס להקיז דם אומר יהי רצון מלפניך יי' אלהי שיהא עסק זה לי לרפואה ותרפאני כי אל רופא נאמן אתה ורפואתך אמת לפי שאין דרכן של בני אדם לרפאות אלא שנהגו אמר אביי לא לימא אינש הכי דתני דבי רבי ישמעאל (שמות כא, יט) ורפא ירפא מכאן שניתנה רשות לרופא לרפאות כי קאי מאי אומר אמר רב אחא ברוך רופא חנם",
  "rashi": [
   {
    "dh": "דקנה וחזר וקנה דברי הכל אין צריך לברך",
    "text": " — דהא רבי יוחנן לא אמר צריך לברך אלא משום דלענין קנייה חדש הוא:"
   },
   {
    "dh": "ואיכא דאמרי כו' מכלל דכי יש לו וקנה דברי הכל צריך לברך",
    "text": " — דהא רב הונא לא אמר אין צריך לברך אלא דקנה וחזר וקנה דליכא חדוש כלל אבל יש לו וקנה דאיכא חדוש מודה הוא דצריך:"
   },
   {
    "dh": "בין כך ובין כך",
    "text": " — בין שיש לו בין שאין לו הואיל ולא קנה הראשונים ועכשיו קנה צריך לברך:"
   },
   {
    "dh": "לא כרבי מאיר ולא כרבי יהודה",
    "text": " — דאפילו רבי יהודה לא פליג אלא ביש לו וקנה אבל בקנה וחזר וקנה לא:"
   },
   {
    "dh": "דמסקא ארעא שרטון",
    "text": " — לימ\"ץ מחמת המים והוה ליה לזבל:"
   },
   {
    "dh": "השתא מיהא רעה היא",
    "text": " — שמחבלת תבואה של שנה זו ומברך ברוך דיין האמת:"
   },
   {
    "dh": "ועל הטוב שהיא מעין הרעה",
    "text": " — יברך הטוב והמטיב:"
   },
   {
    "dh": "מאי היא",
    "text": " — כגון דאשכח מציאה:"
   },
   {
    "dh": "שלא יסריח",
    "text": " — הזרע אלא יקלוט ויהיה ולד ולאחר שלשה ימים אם לא קלט כבר הסריח ואין תפלה מועלת:"
   },
   {
    "dh": "שלא יהא סנדל",
    "text": " — שלא תתעבר אשתו ולד אחר ויהיה פוחת צורתו של ראשון ודומה לדג של ים ששמו סנדל הכי אמרינן במס' נדה (דף כה:) סנדל דומה לסנדל של ים ומתחלתו ולד היה אלא שנרצף משל לאדם שסטר את חבירו והחזיר צורתו לאחוריו:"
   },
   {
    "dh": "ומי מהני",
    "text": " — תפלה לזכר אפילו בתוך ארבעים יום והלא הדבר תלוי בהזרעה תחלה:"
   },
   {
    "dh": "הכי גרסינן משכחת לה דמהניא כגון שהזריעו שניהם בבת אחת",
    "text": ""
   },
   {
    "dh": "כל היכי דדרשת ליה להאי קרא",
    "text": " — מדריש לחדא משמעות:"
   },
   {
    "dh": "מסיפיה לרישיה מדריש",
    "text": " — מי שנכון לבו בטוח ביי' משמועה רעה לא יירא:"
   },
   {
    "dh": "בדברי תורה כתיב",
    "text": " — אשרי אדם מפחד תמיד שמא תשתכח ממנו שמתוך כך הוא מחזיר לשנותם תמיד:"
   },
   {
    "dh": "תנו רבנן",
    "text": " — בן עזאי אמרה דאמר שתים בכניסתו ושתים ביציאתו:"
   },
   {
    "dh": "לית לן בה",
    "text": " — יזהר בעצמו שלא יפשע או אם פשע כבר אל יכנס במקום סכנה:"
   },
   {
    "dh": "בי בני",
    "text": " — בית המרחץ:"
   },
   {
    "dh": "מתותיה",
    "text": " — חפירה שהמים נופלים לתוכה ובני אדם רוחצים על גבי תקרה שעל גבה:"
   },
   {
    "dh": "בחד אבריה",
    "text": " — בזרועו החזיק אחד או שנים וזה בזה החזיקו עד מאה ואחד:"
   },
   {
    "dh": "היינו דרבי אחא",
    "text": " — דבעי אודויי שהוצאתני לשלום:"
   },
   {
    "dh": "שאין דרכן של בני אדם וכו'",
    "text": " — כלומר לא היה להם לעסוק ברפואות אלא לבקש רחמים:"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "60b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "ס",
  "amud": "ב",
  "dafEn": "60b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "הנכנס לבית הכסא אומר התכבדו מכובדים קדושים משרתי עליון תנו כבוד לאלהי ישראל הרפו ממני עד שאכנס ואעשה רצוני ואבא אליכם אמר אביי לא לימא אינש הכי דלמא שבקי ליה ואזלי אלא לימא שמרוני שמרוני עזרוני עזרוני סמכוני סמכוני המתינו לי המתינו לי עד שאכנס ואצא שכן דרכן של בני אדם כי נפיק אומר ברוך אשר יצר את האדם בחכמה וברא בו נקבים נקבים חללים חללים גלוי וידוע לפני כסא כבודך שאם יפתח אחד מהם או אם יסתם אחד מהם אי אפשר לעמוד לפניך מאי חתים אמר רב רופא חולים אמר שמואל קא שוינהו אבא לכולי עלמא קצירי אלא רופא כל בשר רב ששת אמר מפליא לעשות א\"ר פפא הלכך נמרינהו לתרוייהו רופא כל בשר ומפליא לעשות הנכנס לישן על מטתו אומר משמע ישראל עד והיה אם שמוע ואומר ברוך המפיל חבלי שינה על עיני ותנומה על עפעפי ומאיר לאישון בת עין יהי רצון מלפניך ה' אלהי שתשכיבני לשלום ותן חלקי בתורתך ותרגילני לידי מצוה ואל תרגילני לידי עבירה ואל תביאני לידי חטא ולא לידי עון ולא לידי נסיון ולא לידי בזיון וישלוט בי יצר טוב ואל ישלוט בי יצר הרע ותצילני מפגע רע ומחלאים רעים ואל יבהלוני חלומות רעים והרהורים רעים ותהא מטתי שלמה לפניך והאר עיני פן אישן המות ברוך אתה ה' המאיר לעולם כולו בכבודו כי מתער אומר אלהי נשמה שנתת בי טהורה אתה יצרתה בי אתה נפחתה בי ואתה משמרה בקרבי ואתה עתיד ליטלה ממני ולהחזירה בי לעתיד לבא כל זמן שהנשמה בקרבי מודה אני לפניך ה' אלהי ואלהי אבותי רבון כל העולמים אדון כל הנשמות ברוך אתה ה' המחזיר נשמות לפגרים מתים כי שמע קול תרנגולא לימא ברוך אשר נתן לשכוי בינה להבחין בין יום ובין לילה כי פתח עיניה לימא ברוך פוקח עורים כי תריץ ויתיב לימא ברוך מתיר אסורים כי לביש לימא ברוך מלביש ערומים כי זקיף לימא ברוך זוקף כפופים כי נחית לארעא לימא ברוך רוקע הארץ על המים כי מסגי לימא ברוך המכין מצעדי גבר כי סיים מסאניה לימא ברוך שעשה לי כל צרכי כי אסר המייניה לימא ברוך אוזר ישראל בגבורה כי פריס סודרא על רישיה לימא ברוך עוטר ישראל בתפארה כי מעטף בציצית לימא ברוך אשר קדשנו במצותיו וצונו להתעטף בציצית כי מנח תפילין אדרעיה לימא ברוך אשר קדשנו במצותיו וצונו להניח תפילין ארישיה לימא ברוך אשר קדשנו במצותיו וצונו על מצות תפילין כי משי ידיה לימא ברוך אשר קדשנו במצותיו וצונו על נטילת ידים כי משי אפיה לימא ברוך המעביר חבלי שינה מעיני ותנומה מעפעפי ויהי רצון מלפניך ה' אלהי שתרגילני בתורתך ודבקני במצותיך ואל תביאני לא לידי חטא ולא לידי עון ולא לידי נסיון ולא לידי בזיון וכוף את יצרי להשתעבד לך ורחקני מאדם רע ומחבר רע ודבקני ביצר טוב ובחבר טוב בעולמך ותנני היום ובכל יום לחן ולחסד ולרחמים בעיניך ובעיני כל רואי ותגמלני חסדים טובים ברוך אתה ה' גומל חסדים טובים לעמו ישראל: חייב אדם לברך כו': מאי חייב לברך על הרעה כשם שמברך על הטובה אילימא כשם שמברך על הטובה הטוב והמטיב כך מברך על הרעה הטוב והמטיב והתנן על בשורות טובות אומר הטוב והמטיב על בשורות רעות אומר ברוך דיין האמת אמר רבא לא נצרכה אלא לקבולינהו בשמחה אמר ר' אחא משום ר' לוי מאי קרא (תהלים קא, א) חסד ומשפט אשירה לך ה' אזמרה אם חסד אשירה ואם משפט אשירה רבי שמואל בר נחמני אמר מהכא (תהלים נו, יא) בה' אהלל דבר באלהים אהלל דבר בה' אהלל דבר זו מדה טובה באלהים אהלל דבר זו מדת פורענות רבי תנחום אמר מהכא (תהלים קטז, יג) כוס ישועות אשא ובשם ה' אקרא צרה ויגון אמצא ובשם ה' אקרא ורבנן אמרי מהכא (איוב א, כא) ה' נתן וה' לקח יהי שם ה' מבורך אמר רב הונא אמר רב משום רבי מאיר וכן תנא משמיה דר' עקיבא לעולם יהא אדם רגיל לומר כל דעביד רחמנא לטב עביד כי הא דרבי עקיבא דהוה קאזיל באורחא מטא לההיא מתא בעא אושפיזא לא יהבי ליה אמר כל דעביד רחמנא לטב אזל ובת בדברא והוה בהדיה תרנגולא וחמרא ושרגא אתא זיקא כבייה לשרגא אתא שונרא אכליה לתרנגולא אתא אריה אכליה לחמרא אמר כל דעביד רחמנא לטב ביה בליליא אתא גייסא שבייה למתא אמר להו לאו אמרי לכו כל מה שעושה הקדוש ברוך הוא",
  "rashi": [
   {
    "dh": "התכבדו וכו'",
    "text": " — אל המלאכים המלוים אותו הוא אומר שנאמר כי מלאכיו יצוה לך (תהילים צ״א:י״א):"
   },
   {
    "dh": "שאם יפתח אחד מהם",
    "text": " — מן החללים כגון הלב או הכרס או המעים:"
   },
   {
    "dh": "או אם יסתם אחד מהם",
    "text": " — מן הנקבים הפתוחים כגון הפה או החוטם או פי הטבעת. יפתח קאי אחללים יסתם קאי אנקבים:"
   },
   {
    "dh": "קצירי",
    "text": " — חולים:"
   },
   {
    "dh": "רופא כל בשר",
    "text": " — כנגד היציאה שהיא רפואת כל הגוף:"
   },
   {
    "dh": "ומפליא לעשות",
    "text": " — כנגד שהגוף חלול כמו נאד והנאד הזה אם יש בו נקב אין הרוח עומד בתוכו והקב\"ה ברא את האדם בחכמה וברא בו נקבים נקבים הרבה ואעפ\"כ הרוח בתוכו כל ימי חייו וזו היא פליאה וחכמה:"
   },
   {
    "dh": "ותהא מטתי שלמה",
    "text": " — שלא יהא פסול ורשע בזרעי:"
   },
   {
    "dh": "לשכוי",
    "text": " — תרנגול דאיכא דוכתא דקרו לתרנגול שכוי כדאמרינן בר\"ה (דף כו.):"
   },
   {
    "dh": "הכי גרסי' אילימא כשם שמברך על הטובה הטוב והמטיב כך מברך על הרעה הטוב והמטיב והתנן על בשורות טובות הטוב והמטיב ועל שמועות רעות אומר ברוך דיין האמת",
    "text": ""
   },
   {
    "dh": "לקבולינהו בשמחה",
    "text": " — לברך על מדת פורענות בלבב שלם:"
   },
   {
    "dh": "אלהים",
    "text": " — לשון דיין כמו עד האלהים יבא דבר שניהם (שמות כ״ב:ח׳):"
   },
   {
    "dh": "ובת בדברא",
    "text": " — ולן בשדה:"
   },
   {
    "dh": "הוה בהדיה תרנגולא",
    "text": " — להקיצו משנתו:"
   }
  ],
  "tosafot": [
   {
    "dh": "אשר יצר את האדם בחכמה",
    "text": " — בתנחומא ויברא אלהים את האדם א\"ר בון בחכמה שהתקין מזונותיו ואח\"כ בראו היינו דאמר בסנהדרין בס\"פ אחד דיני ממונות (סנהדרין דף לח.) לכך נברא בערב שבת כדי שיכנס לסעודה מיד וע\"כ יסדו אשר יצר את האדם בחכמה:",
    "en": "Who hast sanctified us by His commandments, and hast commanded us to lay the Tefillin - since he starts by putting it on his arm, he should bless \"to lay,\" but on that of the head he blesses \"concerning the precept\" and not \"to lay,\" sind he already started and layed one of them. But in chapter Hakometz it says, \"if he did not talk he says one blessing, if he talked he says two blessings.\" Rashi explained that it says so on both Tefillin, that he says one blessing on both of them if he did not talk in between them, but it is difficult to say that the two blessings of \"to lay\" and \"concerning the precept\" were only needed when he talked and did a transgression. Therefore Rabbeinu Tam explained that on that of the head, which is the finishing of the commandment and the main part, because it has four compartments and the letter Shin, he says on it (an additional blessing of) \"on the precept,\" and this is (how it appears) in Shimusha Rabba, authored by the Ge'onim. And according to the explanation of Rabbeinu Tam regarding \"if he talked he says two blessings,\" (it refers to) if he puts on that of the head alone, since they (the two Tefillin) do not hold back each other (from letting the wearer fulfill a commandment from it), he says two blessings. And this that the Gemara doesn't mention that on that of the head he says two blessings, it is because it is not at all common to place one without placing the other, since Tefillin by one with an obligation is common. And Rabbeinu Tam explained like this in his Responsa, and Rabbeinu Elchanan, in his \"Order of the enactment of prayer,\" wrote like this."
   },
   {
    "dh": "מפליא לעשות",
    "text": " — משום דאמרינן בב\"ר כי גדול אתה ועושה נפלאות אתה אלהים לבדך אדם עושה נאד אפילו יש בו נקב אחד מלא מחט סדקית הרוח יוצא ואינו יכול לשמור בו יין והקב\"ה ברא נקבים נקבים באדם ושומר הרוח שאינו יוצא ממנו:"
   },
   {
    "dh": "כי שמע קול תרנגולא אומר ברוך שנתן לשכוי בינה להבחין",
    "text": " — והוא הדין אפילו כי לא שמע דאין ברכה זו אלא להבחנה על הנאת האורה שתרנגול מבחין והוא נהנה מן האור:"
   },
   {
    "dh": "כי פריס סודרא על רישיה",
    "text": " — וה\"ה לכל כובע ולכל כסוי ודוקא כשנהנה אבל אם אינו נהנה כגון שהוא שוכב על מטתו לא יברך לא זו ולא מלביש ערומים ולא ברכות כיוצא בהן כיון שלא נהנה כדמשמע בפרק שלישי דמגילה (דף כד:) גבי מי שלא ראה מאורות מימיו דכולי עלמא בעי שיהנה מן האורה:"
   },
   {
    "dh": "אשר קדשנו במצותיו וצונו להניח תפילין",
    "text": " — כיון דתחלת הנחתו בזרועו יש לברך להניח אבל בשל ראש מברך על מצות ולא להניח שכבר התחיל והניח אחד מהם ובפ' הקומץ (מנחות לו. ושם) אמר לא סח מברך אחת סח מברך שתים פ\"ה דעל שתי התפילין קאמר דמברך ברכה אחת על שתיהן בלא סח בינתים ודוחק לומר דלא הוצרכו שתי ברכות דלהניח ועל מצות אלא כשסח ועבר עבירה. לכן פר\"ת דעל של ראש שהיא גמר מצוה ועיקר דיש בה ד' בתים ושי\"ן מברך על מצות אבל סח חוזר ומברך שתים על של ראש וכן בשימושא רבא דגאונים ולפר\"ת גבי סח מברך שתים אם יניח של ראש לבד דאין מעכבין זה את זה מברך שתים על של ראש בלבד ומה שלא הזכיר הגמ' על של ראש בלבד מברך שתים לפי שאין רגילות כלל להניח זה בלא זה דתפילין בי בר חבו שכיחי (ב\"מ ד' כט:) וכן פי' רבינו תם בתשובותיו וכן רבינו אלחנן בסדר תקון תפלה שלו כתב כן:"
   }
  ],
  "translations": []
 },
 {
  "id": "61a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "סא",
  "amud": "א",
  "dafEn": "61a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "הכל לטובה: ואמר רב הונא אמר רב משום ר' מאיר לעולם יהיו דבריו של אדם מועטין לפני הקב\"ה שנאמר (קהלת ה, א) אל תבהל על פיך ולבך אל ימהר להוציא דבר לפני האלהים כי האלהים בשמים ואתה על הארץ על כן יהיו דבריך מעטים: דרש רב נחמן בר רב חסדא מאי דכתיב (בראשית ב, ז) וייצר ה' אלהים את האדם בשני יודי\"ן שני יצרים ברא הקב\"ה אחד יצר טוב ואחד יצר רע מתקיף לה רב נחמן בר יצחק אלא מעתה בהמה דלא כתיב בה וייצר לית לה יצרא והא קא חזינן דמזקא ונשכא ובעטא אלא כדר\"ש בן פזי דאמר ר' שמעון בן פזי אוי לי מיוצרי ואוי לי מיצרי אי נמי כדר' ירמיה בן אלעזר דאמר ר' ירמיה בן אלעזר דו פרצופין ברא הקב\"ה באדם הראשון שנאמר (תהלים קלט, ה) אחור וקדם צרתני: (בראשית ב, כב) ויבן ה' אלהים את הצלע רב ושמואל חד אמר פרצוף וחד אמר זנב בשלמא למאן דאמר פרצוף היינו דכתיב אחור וקדם צרתני אלא למאן דאמר זנב מאי אחור וקדם צרתני כדרבי אמי דאמר ר' אמי אחור למעשה בראשית וקדם לפורענות בשלמא אחור למעשה בראשית דלא אברי עד מעלי שבתא אלא וקדם לפורענות פורענות דמאי אילימא פורענות דנחש והתניא רבי אומר בגדולה מתחילין מן הגדול ובקללה מתחילין מן הקטן בגדולה מתחילין מן הגדול דכתיב (ויקרא י, יב) וידבר משה אל אהרן ואל אלעזר ואל איתמר בניו הנותרים קחו וגו' בקללה מתחילין מן הקטן בתחלה נתקלל נחש ולבסוף נתקללה חוה ולבסוף נתקלל אדם אלא פורענות דמבול דכתיב (בראשית ז, כג) וימח את כל היקום אשר על פני האדמה מאדם ועד בהמה ברישא אדם והדר בהמה בשלמא למאן דאמר פרצוף היינו דכתיב וייצר בשני יודי\"ן אלא למאן דאמר זנב מאי וייצר כדר\"ש בן פזי דאמר ר' שמעון בן פזי אוי לי מיוצרי אוי לי מיצרי בשלמא למאן דאמר פרצוף היינו דכתיב (בראשית ה, ב) זכר ונקבה בראם אלא למאן דאמר זנב מאי זכר ונקבה בראם כדר' אבהו דרבי אבהו רמי כתיב זכר ונקבה בראם וכתיב (בראשית ט, ו) כי בצלם אלהים עשה את האדם הא כיצד בתחלה עלה במחשבה לבראת ב' ולבסוף לא נברא אלא אחד בשלמא למאן דאמר פרצוף היינו דכתיב (בראשית ב, כא) ויסגור בשר תחתנה אלא למאן דאמר זנב מאי ויסגור בשר תחתנה א\"ר ירמיה ואיתימא רב זביד ואיתימא רב נחמן בר יצחק לא נצרכה אלא למקום חתך בשלמא למ\"ד זנב היינו דכתיב ויבן אלא למ\"ד פרצוף מאי ויבן לכדר\"ש בן מנסיא דדרש ר\"ש בן מנסיא מאי דכתיב ויבן ה' את הצלע מלמד שקלעה הקב\"ה לחוה והביאה לאדם הראשון שכן בכרכי הים קורין לקליעתא בנייתא דבר אחר ויבן אמר רב חסדא ואמרי לה במתניתא תנא מלמד שבנאה הקב\"ה לחוה כבנין אוצר מה אוצר זה קצר מלמעלה ורחב מלמטה כדי לקבל את הפירות אף אשה קצרה מלמעלה ורחבה מלמטה כדי לקבל את הולד ויביאה אל האדם א\"ר ירמיה בן אלעזר מלמד שנעשה הקב\"ה שושבין לאדם הראשון מכאן למדה תורה דרך ארץ שיחזור גדול עם קטן בשושבינות ואל ירע לו ולמאן דאמר פרצוף הי מינייהו סגי ברישא אמר רב נחמן בר יצחק מסתברא דגברא סגי ברישא דתניא לא יהלך אדם אחורי אשה בדרך ואפי' אשתו נזדמנה לו על הגשר יסלקנה לצדדין וכל העובר אחורי אשה בנהר אין לו חלק לעולם הבא תנו רבנן המרצה מעות לאשה מידו לידה כדי להסתכל בה אפילו יש בידו תורה ומעשים טובים כמשה רבינו לא ינקה מדינה של גיהנם שנאמר (משלי יא, כא) יד ליד לא ינקה רע לא ינקה מדינה של גיהנם א\"ר נחמן מנוח עם הארץ היה דכתיב (שופטים יג, יא) וילך מנוח אחרי אשתו מתקיף לה רב נחמן בר יצחק אלא מעתה גבי אלקנה דכתיב וילך אלקנה אחרי אשתו וגבי אלישע דכתיב (מלכים ב ד, ל) ויקם וילך אחריה הכי נמי אחריה ממש אלא אחרי דבריה ואחרי עצתה הכא נמי אחרי דבריה ואחרי עצתה א\"ר אשי ולמאי דקאמר רב נחמן מנוח עם הארץ היה אפי' בי רב נמי לא קרא שנאמר (בראשית כד, סא) ותקם רבקה ונערותיה ותרכבנה על הגמלים ותלכנה אחרי האיש ולא לפני האיש א\"ר יוחנן אחורי ארי ולא אחורי אשה אחורי אשה ולא אחורי עכו\"ם אחורי עכו\"ם ולא אחורי בהכ\"נ בשעה שהצבור מתפללין ולא אמרן אלא דלא דרי מידי ואי דרי מידי לית לן בה ולא אמרן אלא דליכא פתחא אחרינא ואי איכא פתחא אחרינא לית לן בה ולא אמרן אלא דלא רכיב חמרא אבל רכיב חמרא לית לן בה ולא אמרן אלא דלא מנח תפילין אבל מנח תפילין לית לן בה: אמר רב יצר הרע דומה לזבוב ויושב בין שני מפתחי הלב שנא' (קהלת י, א) זבובי מות יבאיש יביע שמן רוקח ושמואל אמר כמין חטה הוא דומה שנאמר (בראשית ד, ז) לפתח חטאת רובץ ת\"ר שתי כליות יש בו באדם אחת יועצתו לטובה ואחת יועצתו לרעה ומסתברא דטובה לימינו ורעה לשמאלו דכתיב (קהלת י, ב) לב חכם לימינו ולב כסיל לשמאלו: תנו רבנן כליות יועצות לב מבין לשון מחתך פה גומר ושט מכניס ומוציא כל מיני מאכל קנה מוציא קול",
  "rashi": [
   {
    "dh": "הכל לטובה",
    "text": " — אילו היה נר דלוק היה הגייס רואה אותי ואילו היה החמור נוער או התרנגול קורא היה הגייס בא ושובה אותי:"
   },
   {
    "dh": "והא קחזינן דמזקא",
    "text": " — שמזקת:"
   },
   {
    "dh": "אוי לי מיוצרי",
    "text": " — אם אלך אחרי יצרי ואם לא אלך אחריו אוי לי מיצרי המיגעני בהרהורים:"
   },
   {
    "dh": "דו פרצופין",
    "text": " — שני פרצופין בראו תחלה אחד מלפניו ואחד מאחריו וצלחו לשנים ועשה מן האחד חוה:"
   },
   {
    "dh": "אחור וקדם צרתני",
    "text": " — לשון צורה דהיינו שני פרצופין:"
   },
   {
    "dh": "זכר ונקבה בראם",
    "text": " — משמע מתחלת ברייתם תרי הוו:"
   },
   {
    "dh": "היינו דכתיב ויבן",
    "text": " — שהיה צריך בנין:"
   },
   {
    "dh": "מאי ויבן",
    "text": " — והלא כבר נבנה:"
   },
   {
    "dh": "כדי לקבל את הפירות",
    "text": " — שאם יהיה קצר מלמטה ורחב מלמעלה תהא התבואה דוחפת את הכתלים מלמעלה לכאן ולכאן שהמשא מכביד עליהם:"
   },
   {
    "dh": "שושבין",
    "text": " — משתדל בחופתו ובזיווגו:"
   },
   {
    "dh": "ולמ\"ד פרצוף",
    "text": " — ומתחלתו היה מצד אחד זכר ונקבה מצד אחר:"
   },
   {
    "dh": "הי מינייהו סגי ברישא",
    "text": " — איזהו פרצוף היה מהלך לפנים:"
   },
   {
    "dh": "אפי' היא אשתו",
    "text": " — גנאי הדבר:"
   },
   {
    "dh": "נזדמנה לו על הגשר",
    "text": " — אשת איש והיא לפניו:"
   },
   {
    "dh": "יסלקנה לצדדין",
    "text": " — עד שיעבור לפניה:"
   },
   {
    "dh": "אחורי אשה בנהר",
    "text": " — אחורי אשת איש מגבהת בגדיה מפני המים וזה מסתכל בה:"
   },
   {
    "dh": "יד ליד לא ינקה רע",
    "text": " — אפילו כמשה רבינו שקבל תורה מימינו של הקב\"ה לא ינקה רע וקרא באשה משתעי:"
   },
   {
    "dh": "עם הארץ",
    "text": " — לא שמש תלמידי חכמים שלא למד משנה זו ששנינו לא יהלך אדם אחורי אשה ואפילו היא אשתו:"
   },
   {
    "dh": "ולמאי דקאמר רב נחמן",
    "text": " — שהלך אחריה ממש אם כן אפילו בי רב עם תינוקות של בית רבן נמי לא קרא:"
   },
   {
    "dh": "בשעה שהצבור מתפללים",
    "text": " — דכיון שאינו נכנס נראה כפורק עול ומבזה בית הכנסת:"
   },
   {
    "dh": "ואי דרי מידי",
    "text": " — אין כאן גנאי דמוכחא מילתא דהאי דלא נכנס מפני המשוי:"
   },
   {
    "dh": "ואי איכא פתחא אחרינא",
    "text": " — אין כאן בזוי דמאן דחזי סבר בפתחא אחרינא ליעול:"
   },
   {
    "dh": "יביע",
    "text": " — לשון אבעבועות כל משקה מסריח מעלה רתיחה ואבעבועות:"
   },
   {
    "dh": "חטאת",
    "text": " — לשון חטה דריש ליה:"
   },
   {
    "dh": "כליות יועצות",
    "text": " — את הלב עשה כן:"
   },
   {
    "dh": "והלב מבין",
    "text": " — מה יש לו לעשות אם ישמע לעצת הכליות אם לאו ומנין שהכליות יועצות שנאמר (תהילים ט״ז:ז׳) אברך את ה' אשר יעצני אף לילות יסרוני כליותי ומנין שהלב מבין שנאמר (ישעיהו ו) ולבבו יבין:"
   },
   {
    "dh": "לשון מחתך",
    "text": " — הדבור להוציא מפיו:"
   },
   {
    "dh": "והפה",
    "text": " — הם השפתים גומר ומוציאו:"
   }
  ],
  "tosafot": [
   {
    "dh": "וכל העובר אחורי אשה בנהר אין לו חלק לעוה\"ב",
    "text": " — פי' אם רגיל בכך לפי שיבא לידי נאוף וסופו יורד לגיהנם:"
   },
   {
    "dh": "אלא מעתה גבי אלקנה דכתיב וילך אלקנה אחרי אשתו וגו'",
    "text": " — שבוש הוא שאין פסוק זה בכל המקרא ול\"ג ליה:"
   }
  ],
  "translations": []
 },
 {
  "id": "61b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "סא",
  "amud": "ב",
  "dafEn": "61b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ריאה שואבת כל מיני משקין כבד כועס מרה זורקת בו טפה ומניחתו טחול שוחק קרקבן טוחן קיבה ישנה אף נעור נעור הישן ישן הנעור נמוק והולך לו תנא אם שניהם ישנים או שניהם נעורים מיד מת תניא רבי יוסי הגלילי אומר צדיקים יצר טוב שופטן שנאמר (תהלים קט, כב) ולבי חלל בקרבי רשעים יצר רע שופטן שנאמר (תהלים לו, ב) נאם פשע לרשע בקרב לבי אין פחד אלהים לנגד עיניו בינונים זה וזה שופטן שנאמר (תהלים קט, לא) יעמוד לימין אביון להושיע משופטי נפשו אמר רבא כגון אנו בינונים אמר ליה אביי לא שביק מר חיי לכל בריה ואמר רבא לא איברי עלמא אלא לרשיעי גמורי או לצדיקי גמורי אמר רבא לידע אינש בנפשיה אם צדיק גמור הוא אם לאו אמר רב לא איברי עלמא אלא לאחאב בן עמרי ולר' חנינא בן דוסא לאחאב בן עמרי העולם הזה ולרבי חנינא בן דוסא העולם הבא: ואהבת את י\"י אלהיך: תניא ר' אליעזר אומר אם נאמר בכל נפשך למה נאמר בכל מאדך ואם נאמר בכל מאדך למה נאמר בכל נפשך אלא אם יש לך אדם שגופו חביב עליו מממונו לכך נאמר בכל נפשך ואם יש לך אדם שממונו חביב עליו מגופו לכך נאמר בכל מאדך רבי עקיבא אומר בכל נפשך אפילו נוטל את נפשך תנו רבנן פעם אחת גזרה מלכות הרשעה שלא יעסקו ישראל בתורה בא פפוס בן יהודה ומצאו לרבי עקיבא שהיה מקהיל קהלות ברבים ועוסק בתורה אמר ליה עקיבא אי אתה מתירא מפני מלכות אמר לו אמשול לך משל למה הדבר דומה לשועל שהיה מהלך על גב הנהר וראה דגים שהיו מתקבצים ממקום למקום אמר להם מפני מה אתם בורחים אמרו לו מפני רשתות שמביאין עלינו בני אדם אמר להם רצונכם שתעלו ליבשה ונדור אני ואתם כשם שדרו אבותי עם אבותיכם אמרו לו אתה הוא שאומרים עליך פקח שבחיות לא פקח אתה אלא טפש אתה ומה במקום חיותנו אנו מתיראין במקום מיתתנו על אחת כמה וכמה אף אנחנו עכשיו שאנו יושבים ועוסקים בתורה שכתוב בה (דברים ל, כ) כי הוא חייך ואורך ימיך כך אם אנו הולכים ומבטלים ממנה עאכ\"ו אמרו לא היו ימים מועטים עד שתפסוהו לר\"ע וחבשוהו בבית האסורים ותפסו לפפוס בן יהודה וחבשוהו אצלו אמר לו פפוס מי הביאך לכאן אמר ליה אשריך רבי עקיבא שנתפסת על דברי תורה אוי לו לפפוס שנתפס על דברים בטלים בשעה שהוציאו את ר' עקיבא להריגה זמן ק\"ש היה והיו סורקים את בשרו במסרקות של ברזל והיה מקבל עליו עול מלכות שמים אמרו לו תלמידיו רבינו עד כאן אמר להם כל ימי הייתי מצטער על פסוק זה בכל נפשך אפילו נוטל את נשמתך אמרתי מתי יבא לידי ואקיימנו ועכשיו שבא לידי לא אקיימנו היה מאריך באחד עד שיצתה נשמתו באחד יצתה ב\"ק ואמרה אשריך ר\"ע שיצאה נשמתך באחד אמרו מלאכי השרת לפני הקב\"ה זו תורה וזו שכרה (תהלים יז, יד) ממתים ידך י\"י ממתים וגו' אמר להם חלקם בחיים יצתה בת קול ואמרה אשריך ר\"ע שאתה מזומן לחיי העוה\"ב: לא יקל אדם את ראשו כנגד שער המזרח שהוא מכוון כנגד בית קדשי הקדשים וכו': אמר רב יהודה אמר רב לא אמרו אלא מן הצופים ולפנים וברואה איתמר נמי א\"ר אבא בריה דרבי חייא בר אבא הכי אמר רבי יוחנן לא אמרו אלא מן הצופים ולפנים וברואה ובשאין גדר ובזמן שהשכינה שורה ת\"ר הנפנה ביהודה לא יפנה מזרח ומערב אלא צפון ודרום ובגליל לא יפנה אלא מזרח ומערב ורבי יוסי מתיר שהיה ר' יוסי אומר לא אסרו אלא ברואה ובמקום שאין שם גדר ובזמן שהשכינה שורה וחכמים אוסרים חכמים היינו ת\"ק איכא בינייהו צדדין תניא אידך הנפנה ביהודה לא יפנה מזרח ומערב אלא צפון ודרום ובגליל צפון ודרום אסור מזרח ומערב מותר ורבי יוסי מתיר שהיה רבי יוסי אומר לא אסרו אלא ברואה רבי יהודה אומר בזמן שבית המקדש קיים אסור בזמן שאין בית המקדש קיים מותר רבי עקיבא אוסר בכל מקום רבי עקיבא היינו ת\"ק איכא בינייהו חוץ לארץ רבה הוו שדיין ליה לבני מזרח ומערב אזל אביי שדנהו צפון ודרום על רבה תרצנהו אמר מאן האי דקמצער לי אנא כר' עקיבא סבירא לי דאמר בכל מקום אסור:",
  "rashi": [
   {
    "dh": "שואבת כל מיני משקין",
    "text": " — אע\"פ שהן נכנסין בכרס דרך הושט הריאה מוצצתן ושואבתן מבעד לדופני הכרס:",
    "en": "And he was accepting upon himself the yoke of Heaven: He was reciting the recitation of the Shema."
   },
   {
    "dh": "זורקת בו טפה",
    "text": " — מרה ומניחתו מן הכעס:",
    "en": "From death, by Your hand, O Lord, from death: He should have died by Your hands, and not by the hands of flesh and blood."
   },
   {
    "dh": "שוחק",
    "text": " — שחוק:"
   },
   {
    "dh": "קרקבן",
    "text": " — בעוף הוא המסס בבהמה:"
   },
   {
    "dh": "טוחן",
    "text": " — המאכל:"
   },
   {
    "dh": "אף",
    "text": " — החוטם:"
   },
   {
    "dh": "נעור",
    "text": " — מקיצו משנתו:"
   },
   {
    "dh": "נעור הישן וישן הנעור",
    "text": " — שנתחלפה ובאה השינה מן האף והקיבה נעורת:"
   },
   {
    "dh": "נמוק והולך לו",
    "text": " — מתנונה והולך לו ונמשך למיתה. לשון אחר נעור הישן הקיבה ונמצאו קיבה ואף נעורים שאינו ישן כלל או ישן הנעור ונמצאו שניהם ישנים ואינו נעור כי אם בקושי:"
   },
   {
    "dh": "ולבי חלל בקרבי",
    "text": " — יצר הרע הרי הוא כמת בקרבי שיש בידי לכופו:"
   },
   {
    "dh": "נאם פשע לרשע וגו'",
    "text": " — אמר דוד בקרב לבי יש ואומר אני שהפשע נאם לרשע כלומר שהיצר הרע אומר לרשע אל יהא פחד אלהים לנגד עיניך אלמא יצר הרע שופטו עד שמרחיקו שאינו מתפחד מיוצרו:"
   },
   {
    "dh": "כי יעמוד",
    "text": " — הקב\"ה:"
   },
   {
    "dh": "לימין אביון להושיע משופטי נפשו",
    "text": " — ש\"מ יש לך אדם שיש לנפשו שני שופטים:"
   },
   {
    "dh": "לא שבק מר חיי לכל בריה",
    "text": " — אם אתה מן הבינונים אין לך צדיק גמור בעולם:"
   },
   {
    "dh": "לרשיעי גמורי",
    "text": " — העולם הזה שאין להם בעולם הבא כלום וצריכין ליטול שכרן כאן כגון אחאב שהיה עשיר מאד דקאמר ליה בן הדד כספך וזהבך לי הוא (מלכים א כ׳:ג׳):"
   },
   {
    "dh": "לצדיקי גמורי העוה\"ב",
    "text": " — שאין להם בעוה\"ז כלום כגון רבי חנינא בן דוסא שדי לו בקב חרובין מערב שבת לערב שבת (תענית כד:):"
   },
   {
    "dh": "לכך נאמר בכל מאדך",
    "text": " — מן החביב עליך:"
   },
   {
    "dh": "והיה מקבל עליו עול מלכות שמים",
    "text": " — קורא קריאת שמע:"
   },
   {
    "dh": "ממתים ידך יי' ממתים",
    "text": " — מידך היה לו למות ולא מידי בשר ודם:"
   },
   {
    "dh": "מן הצופים",
    "text": " — מקום שיכולין לראות משם הר הבית ומשם והלאה אין יכולין לראותו:"
   },
   {
    "dh": "וברואה",
    "text": " — שיכול לראות משם פרט אם מקום נמוך הוא:"
   },
   {
    "dh": "ובשאין גדר",
    "text": " — מפסיק בינו להר הבית:"
   },
   {
    "dh": "ובזמן שהשכינה שורה",
    "text": " — שבית המקדש קיים:"
   },
   {
    "dh": "הנפנה ביהודה לא יפנה מזרח ומערב",
    "text": " — אחוריו למזרח ופניו למערב ולא אחוריו למערב ופניו למזרח מפני שירושלים בארץ יהודה היא בצפונה של ארץ יהודה בגבול שבין יהודה לבנימין ויש מארץ יהודה הימנה [למזרח] עד סוף ארץ ישראל והימנה למערב עד סוף ארץ ישראל שארץ יהודה על פני כל אורך ארץ ישראל היא מן המזרח למערב כרצועה ארוכה וקצרה ואם יפנה מזרח ומערב יהיה פרועו לצד ירושלים או פרועו שלפניו או פרועו שלאחריו אבל צפון ודרום יפנה ובלבד שלא יפנה כנגד ירושלים ממש בדרומה של ארץ יהודה:"
   },
   {
    "dh": "ובגליל",
    "text": " — שהיא בצפונה של א\"י לא יחזיר פניו צפון ודרום אלא מזרח ומערב:"
   },
   {
    "dh": "ה\"ג וחכמים אוסרין ולא גרסינן בכל מקום",
    "text": ""
   },
   {
    "dh": "חכמים היינו ת\"ק",
    "text": " — דאמר לא יפנה ולא מפליג בין רואה ללא רואה בין בזמן הבית בין בזמן הזה:"
   },
   {
    "dh": "איכא בינייהו צדדים",
    "text": " — דיהודה וגליל שאינן כנגד ירושלים ממש לתנא קמא צדדין נמי אסירי דהא הנפנה ביהודה קאמר כל יהודה משמע ורבנן בתראי סברי כנגד ירושלים ממש אסור אבל לצדדין מותר דהא אדר' יוסי קיימי דאמר לא אסרו אלא ברואה אבל ברחוק לא ואפילו כנגד ירושלים ממש ואתו רבנן למימר וחכמים אוסרים אפילו שלא ברואה ואפילו בזמן הזה ומיהו נגד ירושלים לא:"
   },
   {
    "dh": "בדר' עקיבא גרסינן בכל מקום הלכך בחוצה לארץ נמי קאמר",
    "text": ""
   },
   {
    "dh": "הוו שדיין ליה לבני",
    "text": " — לבנים שישב עליהן לפנות היו מתוקנים וזקופות על צדיהן ראשן א' למזרח והשני למערב לבנה אחת לצפון ולבנה אחת לדרום והוא יושב על האחת ונפנה בינתים נמצא הוא נפנה צפון ודרום ולא היה רוצה לפנות בבבל מזרח ומערב לפי שבבל במזרחה של ארץ ישראל עומדת שלא יהא פרועו לא מלפניו ולא מלאחריו לצד ארץ ישראל:"
   },
   {
    "dh": "אזל אביי שדנהו צפון ודרום",
    "text": " — לראות אם יקפיד רבו על כך אי סבירא ליה כר\"ע דאמר בחו\"ל נמי קפדינן עלה דמילתא:"
   }
  ],
  "tosafot": [
   {
    "dh": "רבי עקיבא אוסר בכל מקום",
    "text": " — מזרח אחוריו ופניו למערב ומסקינן אפילו בחוץ לארץ ומפרש בירושלמי ובלבד שאין שם כותל:"
   }
  ],
  "translations": []
 },
 {
  "id": "62a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "סב",
  "amud": "א",
  "dafEn": "62a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "תניא אמר רבי עקיבא פעם אחת נכנסתי אחר ר' יהושע לבית הכסא ולמדתי ממנו ג' דברים למדתי שאין נפנין מזרח ומערב אלא צפון ודרום ולמדתי שאין נפרעין מעומד אלא מיושב ולמדתי שאין מקנחין בימין אלא בשמאל אמר ליה בן עזאי עד כאן העזת פניך ברבך א\"ל תורה היא וללמוד אני צריך תניא בן עזאי אומר פעם אחת נכנסתי אחר רבי עקיבא לבית הכסא ולמדתי ממנו ג' דברים למדתי שאין נפנין מזרח ומערב אלא צפון ודרום ולמדתי שאין נפרעין מעומד אלא מיושב ולמדתי שאין מקנחין בימין אלא בשמאל אמר לו ר' יהודה עד כאן העזת פניך ברבך אמר לו תורה היא וללמוד אני צריך רב כהנא על גנא תותיה פורייה דרב שמעיה דשח ושחק ועשה צרכיו אמר ליה דמי פומיה דאבא כדלא שריף תבשילא א\"ל כהנא הכא את פוק דלאו אורח ארעא אמר לו תורה היא וללמוד אני צריך מפני מה אין מקנחין בימין אלא בשמאל אמר רבא מפני שהתורה ניתנה בימין שנאמר (דברים לג, ב) מימינו אש דת למו רבה בר בר חנה אמר מפני שהיא קרובה לפה ור' שמעון בן לקיש אמר מפני שקושר בה תפילין רב נחמן בר יצחק אמר מפני שמראה בה טעמי תורה כתנאי רבי אליעזר אומר מפני שאוכל בה ר' יהושע אומר מפני שכותב בה ר' עקיבא אומר מפני שמראה בה טעמי תורה א\"ר תנחום בר חנילאי כל הצנוע בבית הכסא נצול משלשה דברים מן הנחשים ומן העקרבים ומן המזיקין ויש אומרים אף חלומותיו מיושבים עליו ההוא בית הכסא דהוה בטבריא כי הוו עיילי ביה בי תרי אפי' ביממא מתזקי רבי אמי ורבי אסי הוו עיילי ביה חד וחד לחודיה ולא מתזקי אמרי להו רבנן לא מסתפיתו אמרי להו אנן קבלה גמירינן קבלה דבית הכסא צניעותא ושתיקותא קבלה דיסורי שתיקותא ומבעי רחמי אביי מרביא ליה [אמיה] אמרא למיעל בהדיה לבית הכסא ולרביא ליה גדיא שעיר בשעיר מיחלף רבא מקמי דהוי רישא מקרקשא ליה בת רב חסדא אמגוזא בלקנא בתר דמלך עבדא ליה כוותא ומנחא ליה ידא ארישיה אמר עולא אחורי הגדר נפנה מיד ובבקעה כל זמן שמתעטש ואין חברו שומע איסי בר נתן מתני הכי אחורי הגדר כל זמן שמתעטש ואין חברו שומע ובבקעה כל זמן שאין חברו רואהו מיתיבי יוצאין מפתח בית הבד ונפנין לאחורי הגדר והן טהורין בטהרות הקלו ת\"ש כמה ירחקו ויהיו טהורין כדי שיהא רואהו שאני אוכלי טהרות דאקילו בהו רבנן רב אשי אמר מאי כל זמן שאין חברו רואה דקאמר איסי בר נתן כל זמן שאין חברו רואה את פרועו אבל לדידיה חזי ליה ההוא ספדנא דנחית קמיה דרב נחמן אמר האי צנוע באורחותיו הוה א\"ל רב נחמן את עיילת בהדיה לבית הכסא וידעת אי צנוע אי לא דתניא אין קורין צנוע אלא למי שצנוע בבית הכסא ורב נחמן מאי נפקא ליה מיניה משום דתניא כשם שנפרעין מן המתים כך נפרעין מן הספדנין ומן העונין אחריהן תנו רבנן איזהו צנוע זה הנפנה בלילה במקום שנפנה ביום איני והאמר רב יהודה אמר רב לעולם ינהיג אדם את עצמו שחרית וערבית כדי שלא יהא צריך להתרחק ותו רבא ביממא הוה אזיל עד מיל ובליליא א\"ל לשמעיה פנו לי דוכתא ברחובה דמתא וכן אמר ליה רבי זירא לשמעיה חזי מאן דאיכא אחורי בית חבריא דבעינא למפני לא תימא במקום אלא אימא כדרך שנפנה ביום רב אשי אמר אפילו תימא במקום לא נצרכה אלא לקרן זוית גופא אמר רב יהודה אמר רב לעולם ינהיג אדם את עצמו שחרית וערבית כדי שלא יהא צריך להתרחק תניא נמי הכי בן עזאי אומר השכם וצא הערב וצא כדי שלא תתרחק משמש ושב ואל תשב ותמשמש שכל היושב וממשמש אפי' עושין כשפים באספמיא באין עליו ואי אנשי ויתיב ואח\"כ משמש מאי תקנתיה כי קאי לימא הכי לא לי לא לי לא תחים ולא תחתים לא הני ולא מהני לא חרשי דחרשא ולא חרשי דחרשתא",
  "rashi": [
   {
    "dh": "אחר רבי יהושע וכו'",
    "text": " — וביהודה הוה:"
   },
   {
    "dh": "עד כאן",
    "text": " — כלומר כל זה העזת פניך בפני רבך שנסתכלת בכל אלו:"
   },
   {
    "dh": "דשח ושחק",
    "text": " — עם אשתו שיחה בטלה של ריצוי תשמיש:"
   },
   {
    "dh": "ועשה צרכיו",
    "text": " — ושימש מטתו:"
   },
   {
    "dh": "כדלא שריף תבשילא",
    "text": " — כאדם רעב כמו שלא שמשת מטתך מעולם שאתה נוהג קלות ראש זה לתאותך:"
   },
   {
    "dh": "שריף",
    "text": " — הומי\"ר בלע\"ז:"
   },
   {
    "dh": "שקרובה לפה",
    "text": " — רגילין להושיטה לפה:"
   },
   {
    "dh": "שקושר בה תפילין",
    "text": " — בזרוע שמאלו:"
   },
   {
    "dh": "טעמי תורה",
    "text": " — נגינות טעמי מקרא של תורה נביאים וכתובים בין בניקוד שבספר בין בהגבהת קול ובצלצול נעימות הנגינה של פשטא ודרגא ושופר מהפך מוליך ידו לפי טעם הנגינה ראיתי בקוראים הבאים מארץ ישראל:"
   },
   {
    "dh": "מן הנחשים ומן העקרבים ומן המזיקין",
    "text": " — דמתוך צניעתו מתנהג בנחת ובשתיקה ואין הנחשים מרגישים להתקנאות בו ואף המזיקין חסין עליו:"
   },
   {
    "dh": "חלומותיו מיושבין עליו",
    "text": " — שאין המזיקין מבהילין אותו:"
   },
   {
    "dh": "קבלה",
    "text": " — מסורת ומנהג שקבלנו מרבותינו בבית הכסא:"
   },
   {
    "dh": "קבלה דיסורי שתיקותא",
    "text": " — שלא יבעט ביסורין הבאים עליו:"
   },
   {
    "dh": "מרביה ליה אימרא",
    "text": " — מגדלת לו שה ומלמדתו שהולך עמו תמיד:"
   },
   {
    "dh": "שעיר",
    "text": " — שד של בית הכסא דומה לשעיר ועליהם נאמר (ישעיהו י״ג:כ״א) ושעירים ירקדו שם:"
   },
   {
    "dh": "אמגוזא בלקנא",
    "text": " — נותנת אגוז בספל של נחשת ומקרקשת בו מבית והוא נפנה כנגדה מבחוץ:"
   },
   {
    "dh": "בתר דמלך",
    "text": " — ונעשה ראש ישיבה צריך שימור טפי מפני המזיקים שמתקנאים השדים בתלמידי חכמים יותר משאר בני אדם:"
   },
   {
    "dh": "כוותא",
    "text": " — חלון כנגד מקום שהוא נפנה שם אחורי הבית:"
   },
   {
    "dh": "אחורי הגדר נפנה מיד",
    "text": " — ואין צריך להתרחק כלום:"
   },
   {
    "dh": "ובבקעה",
    "text": " — צריך להתרחק כדי שלא ישמע חברו עטושים של מטה אבל אין צריך להתרחק עד כדי שלא יראנו:"
   },
   {
    "dh": "רב אשי אמר וכו'",
    "text": " — לא גרסינן עד לקמן דמוקי לדאיסי בר נתן בהכי:"
   },
   {
    "dh": "יוצאין מפתח בית הבד",
    "text": " — משמרי טהרות של שמן בית הבד אם הוצרכו לפנות יוצאים מפתח בית הבד ונפנין לאחורי הגדר שלפני הפתח ואין חוששין שמא בתוך כך יכנס עם הארץ ויגע אלמא נפנין לאחורי הגדר מיד:"
   },
   {
    "dh": "בטהרות הקלו",
    "text": " — בשביל שמירת טהרות הקלו בבית הכסא:"
   },
   {
    "dh": "כמה ירחקו",
    "text": " — שומרי טהרות:"
   },
   {
    "dh": "כדי שיהא רואהו",
    "text": " — וכיון דאינו יכול להתרחק יותר על כרחך אם הוצרך לפנות יפנה תיובתא דאיסי דבעי שלא יראנו:"
   },
   {
    "dh": "דאקילו בהו רבנן",
    "text": " — בשביל שמירתן הקלו בבית הכסא:"
   },
   {
    "dh": "אבל לדידיה חזי ליה",
    "text": " — אבל הוא עצמו את חברו יכול לראות ולא ירחיק:"
   },
   {
    "dh": "במקום שנפנה ביום",
    "text": " — מתרחק מבני אדם בלילה כביום:"
   },
   {
    "dh": "ינהיג אדם עצמו",
    "text": " — לפנות:"
   },
   {
    "dh": "שחרית",
    "text": " — קודם היום:"
   },
   {
    "dh": "וערבית",
    "text": " — משחשכה:"
   },
   {
    "dh": "כדי שלא יהא צריך להתרחק",
    "text": " — אלמא אין מתרחקין בלילה:"
   },
   {
    "dh": "פנו לי דוכתא",
    "text": " — מבני אדם:"
   },
   {
    "dh": "כדרך שנפנה ביום",
    "text": " — לענין פרוע טפח וטפחיים כדאמרינן בפרקי קמאי (פ\"ג ד' כג:) ומיושב כדאמרינן לעיל:"
   },
   {
    "dh": "לקרן זוית",
    "text": " — אם יש קרן זוית סמוך צריך להסתלק שם בלילה כביום ולא יפנה בגלוי:"
   },
   {
    "dh": "משמש",
    "text": " — בצרור או בקיסם לפתוח נקבים כדאמרינן במסכת שבת (ד' פב.) לשון אחר משמש המושב שלא יהא מלוכלך ולשון ראשון הגון דא\"כ למה לי משום כשפים תיפוק לי כיון שישב כבר מלוכלכים בגדיו ומה יועיל משמושו:"
   },
   {
    "dh": "לא לי לא לי",
    "text": " — לא תוכלו לי:"
   },
   {
    "dh": "לא תחים ולא תחתים",
    "text": " — הם שמות הכשפים העשויים ע\"י תחתוניות:"
   },
   {
    "dh": "לא הני ולא מהני",
    "text": " — לא כולן ולא מקצתן:"
   },
   {
    "dh": "לא חרשי דחרשא ולא חרשי דחרשתא",
    "text": " — ולא מכשפות מכשף זכר ולא מכשפות מכשפה נקבה לשון אחר לא הני ולא מהני לא יצלח ולא יועיל עוד מכשפות:"
   }
  ],
  "tosafot": [
   {
    "dh": "רבא מקמי דהוה רישא כו' בתר דמלך עבדה ליה כוותא ומנחא ליה ידא כו'",
    "text": " — תימה דע\"כ לא מלך רבא עד אחר פטירתו של אביי כדמשמע לעיל בעובדא דבר הדיא וכן בכתובות דקאמר חומה דביתהו דאביי אתיא לקמיה דרבא בסוף פרק אע\"פ (כתובות ד' סה.) וזהו תימה דלעיל (ברכות ד' נו.) משמע דראה בחלום פטירתה קודם פטירתו דאביי וי\"ל מכל מקום לא נפטרה עד אחר אביי:"
   },
   {
    "dh": "סליקו תוספות דמסכת ברכות",
    "text": ""
   }
  ],
  "translations": []
 },
 {
  "id": "62b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "סב",
  "amud": "ב",
  "dafEn": "62b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "תניא בן עזאי אומר על כל משכב שכב חוץ מן הקרקע על כל מושב שב חוץ מן הקורה אמר שמואל שינה בעמוד השחר כאסטמא לפרזלא יציאה בעמוד השחר כאסטמא לפרזלא בר קפרא הוה מזבן מילי בדינרי עד דכפנת אכול עד דצחית שתי עד דרתחא קדרך שפוך קרנא קריא ברומי בר מזבין תאני תאני דאבוך זבין אמר להו אביי לרבנן כי עייליתו בשבילי דמחוזא למיפק ביה בחקלא לא תחזו לא להך גיסא ולא להך גיסא דלמא יתבי נשי ולאו אורח ארעא לאסתכולי בהו רב ספרא על לבית הכסא אתא רבי אבא נחר ליה אבבא אמר ליה ליעול מר בתר דנפק אמר ליה עד השתא לא עיילת לשעיר וגמרת לך מילי דשעיר לאו הכי תנן מדורה היתה שם ובית הכסא של כבוד וזה היה כבודו מצאו נעול בידוע שיש שם אדם מצאו פתוח בידוע שאין שם אדם אלמא לאו אורח ארעא הוא והוא סבר מסוכן הוא דתניא רבן שמעון בן גמליאל אומר עמוד החוזר מביא את האדם לידי הדרוקן סילון החוזר מביא את האדם לידי ירקון רבי אלעזר על לבית הכסא אתא ההוא פרסאה דחקיה קם ר' אלעזר ונפק אתא דרקונא שמטיה לכרכשיה קרי עליה רבי אלעזר (ישעיהו מג, ד) ואתן אדם תחתיך אל תקרי אדם אלא אדום: (שמואל א כד, יא) ואמר להרגך ותחס עליך ואמר ואמרתי מיבעי ליה ותחס וחסתי מיבעי ליה אמר רבי אלעזר אמר לו דוד לשאול מן התורה בן הריגה אתה שהרי רודף אתה והתורה אמרה בא להרגך השכם להרגו אלא צניעות שהיתה בך היא חסה עליך ומאי היא דכתיב (שמואל א כד, ד) ויבא אל גדרות הצאן על הדרך ושם מערה ויבא שאול להסך את רגליו תנא גדר לפנים מן גדר ומערה לפנים ממערה להסך אמר ר' אלעזר מלמד שסכך עצמו כסוכה: (שמואל א כד, ה) ויקם דוד ויכרת את כנף המעיל אשר לשאול בלט אמר ר' יוסי בר' חנינא כל המבזה את הבגדים סוף אינו נהנה מהם שנאמר (מלכים א א, א) והמלך דוד זקן בא בימים ויכסוהו בבגדים ולא יחם לו: (שמואל א כו, יט) אם ה' הסיתך בי ירח מנחה אמר רבי אלעזר אמר ליה הקב\"ה לדוד מסית קרית לי הרי אני מכשילך בדבר שאפי' תינוקות של בית רבן יודעים אותו דכתיב (שמות ל, יב) כי תשא את ראש בני ישראל לפקודיהם ונתנו איש כפר נפשו וגו' מיד (דברי הימים א כא, א) ויעמוד שטן על ישראל וכתיב (שמואל ב כד, א) ויסת את דוד בהם לאמר לך מנה את ישראל וכיון דמנינהו לא שקל מינייהו כופר דכתיב (שמואל ב כד, טו) ויתן ה' דבר בישראל מהבקר ועד עת מועד מאי עת מועד אמר שמואל סבא חתניה דרבי חנינא משמיה דרבי חנינא משעת שחיטת התמיד עד שעת זריקתו רבי יוחנן אמר עד חצות ממש: (שמואל ב כד, טז) ויאמר למלאך המשחית בעם רב אמר רבי אלעזר אמר ליה הקב\"ה למלאך טול לי רב שבהם שיש בו ליפרע מהם כמה חובות באותה שעה מת אבישי בן צרויה ששקול כרובה של סנהדרין: (דברי הימים א כא, טו) ובהשחית ראה ה' וינחם מאי ראה אמר רב ראה יעקב אבינו דכתיב (בראשית לב, ג) ויאמר יעקב כאשר ראם ושמואל אמר אפרו של יצחק ראה שנאמר (בראשית כב, ח) אלהים יראה לו השה רבי יצחק נפחא אמר כסף כפורים ראה שנאמר (שמות ל, טז) ולקחת את כסף הכפורים מאת בני ישראל וגו' רבי יוחנן אמר בית המקדש ראה דכתיב (בראשית כב, יד) בהר ה' יראה פליגי בה ר' יעקב בר אידי ורבי שמואל בר נחמני חד אמר כסף הכפורים ראה וחד אמר בית המקדש ראה ומסתברא כמאן דאמר בית המקדש ראה שנאמר (בראשית כב, יד) אשר יאמר היום בהר ה' יראה: לא יכנס אדם להר הבית במקלו וכו': מאי קפנדריא אמר רבא קפנדריא כשמה ורב חנא בר אדא משמיה דרב סמא בריה דרב מרי אמר כמאן דאמר אינש אדמקיפנא אדרי איעול בהא אמר רב נחמן אמר רבה בר אבוה הנכנס לבית הכנסת על מנת שלא לעשותו קפנדריא מותר לעשותו קפנדריא רבי אבהו אמר אם היה שביל מעיקרו מותר אמר ר' חלבו אמר רב הונא הנכנס לבית הכנסת להתפלל מותר לעשותו קפנדריא שנאמר (יחזקאל מו, ט) ובבא עם הארץ לפני ה' במועדים וגו': ורקיקה מקל וחומר: אמר רב ביבי אמר ר' יהושע בן לוי כל הרוקק בהר הבית בזמן הזה כאילו רוקק בבת עינו שנאמר (מלכים א ט, ג) והיה עיני ולבי שם כל הימים אמר רבא רקיקה בבית הכנסת שריא מידי דהוה אמנעל מה מנעל בהר הבית אסור בבית הכנסת מותר אף רקיקה בהר הבית הוא דאסור בבית הכנסת שרי אמר ליה רב פפא לרבא ואמרי לה רבינא לרבא ואמרי לה רב אדא בר מתנא לרבא אדיליף ממנעל נילף מקפנדריא אמר ליה תנא יליף ממנעל ואת אמרת מקפנדריא מאי היא דתניא לא יכנס אדם להר הבית לא במקלו שבידו ולא במנעלו שברגלו ולא במעות הצרורים לו בסדינו ובפונדתו מופשלת לאחוריו ולא יעשנה קפנדריא ורקיקה מקל וחומר ממנעל ומה מנעל שאין בו דרך בזיון אמרה תורה (שמות ג, ה) של נעליך מעל רגליך רקיקה שהיא דרך בזיון לא כל שכן רבי יוסי בר יהודה אומר אינו צריך הרי הוא אומר (אסתר ד, ב) כי אין לבא אל שער המלך בלבוש שק והלא דברים קל וחומר ומה שק שאינו מאוס לפני בשר ודם כך רקיקה שהיא מאוסה לפני מלך מלכי המלכים לא כל שכן אמר ליה אנא הכי קאמינא נימא הכא לחומרא והכא לחומרא",
  "rashi": [
   {
    "dh": "על כל מושב שב חוץ מן הקורה",
    "text": " — שמא תפול:"
   },
   {
    "dh": "כאסטמא לפרזלא",
    "text": " — אציי\"ר בלע\"ז שמועיל לברזל כך מועיל לגוף יציאה להפנות:"
   },
   {
    "dh": "אדכפנת אכול",
    "text": " — שאם תשהא תעבור ממך תאות המאכל ואין המאכל מועיל:"
   },
   {
    "dh": "עד דרתחא קדרך שפוך",
    "text": " — קודם שתצטנן משל הוא זה כשאתה צריך לנקביך שפוך ואל תשהא אותם:"
   },
   {
    "dh": "קרנא קריא ברומי",
    "text": " — אם תשמע קול קרן ברומי הוא סימן למבקשי תאנים לקנות ולהוליך למקום אחר:"
   },
   {
    "dh": "בר מזבין תאני תאני דאבוך זבין",
    "text": " — אם אין אביך בבית הזהר אתה בנו למכור תאניו בעוד שיש תובעים:"
   },
   {
    "dh": "בשבילי",
    "text": " — שביל קטן שפונים בו לשדות:"
   },
   {
    "dh": "נחר ליה אבבא",
    "text": " — לידע אם יש שם אדם נחר טושי\"ר בלע\"ז:"
   },
   {
    "dh": "אמר ליה",
    "text": " — ר' אבא לרב ספרא:"
   },
   {
    "dh": "עד כאן לא עיילת לשעיר",
    "text": " — שאינן צנועין בבית הכסא:"
   },
   {
    "dh": "וגמרת לך מילי דשעיר",
    "text": " — שאינך צנוע:"
   },
   {
    "dh": "לאו הכי תנן",
    "text": " — במסכת תמיד:"
   },
   {
    "dh": "מדורה היתה שם",
    "text": " — בעזרה היסק גדול של אור להתחמם שם הכהנים המסיכים רגליהם בבית הכסא שצריכין טבילה כדתנן במסכת יומא (ד' כח.) כל המיסך רגליו טעון טבילה:"
   },
   {
    "dh": "ובית הכסא של כבוד",
    "text": " — אלמא אין מספרים בבית הכסא ואת אמרת ליעול מר:"
   },
   {
    "dh": "והוא סבר",
    "text": " — רב ספרא שמהר לומר ליעול מר סבר מסוכן הוא בעמוד החוזר אם ישוב לאחוריו ויחזור העמוד:"
   },
   {
    "dh": "הדרוקן",
    "text": " — כרסו צבה:"
   },
   {
    "dh": "דרקונא",
    "text": " — נחש:"
   },
   {
    "dh": "שמטיה לכרכשיה",
    "text": " — חלחולת שהרעי יוצא בו שקורין טבחיא:"
   },
   {
    "dh": "ואמר להרגך ותחס עליך",
    "text": " — דוד אמר לשאול כן בצאתו מן המערה שנכנס בה לפנות וכרת דוד את כנף מעילו ואמר להרגך הקב\"ה התיר לי להרגך:"
   },
   {
    "dh": "התורה אמרה וכו'",
    "text": " — אם במחתרת ימצא הגנב וגו' (שמות כ״ב:א׳) וכבר פירשנוהו למעלה במעשה דר' שילא (דף נח.):"
   },
   {
    "dh": "צניעות שראיתי בך",
    "text": " — שנכנס למערה בשביל הצנע ואף שם נהג צניעות כדמפרש ואזיל:"
   },
   {
    "dh": "שסכך רגליו",
    "text": " — בבגדיו כסוכה:"
   },
   {
    "dh": "שיש בו ליפרע כמה",
    "text": " — שיש במיתתו כדי לכפר על כמה עונות:"
   },
   {
    "dh": "ובהשחית ראה ה' וינחם",
    "text": " — מקרא הוא באותה פרשה בדברי הימים:"
   },
   {
    "dh": "כסף כפורים ראה",
    "text": " — שנתן במנין ראשון של ישראל למשכן והוא כפר על מנין זה שהרי לזכרון נתן כדכתיב והיה לבני ישראל לזכרון לכפר ועכשיו הוצרכו כפרתו:"
   },
   {
    "dh": "כשמה",
    "text": " — כמשמעה פירוש שמה:"
   },
   {
    "dh": "אדמקיפנא אדרי איעול בהא",
    "text": " — בעוד שאני מקיף כל שורות הבתים הללו אכנס כאן לקצר דרכי:"
   },
   {
    "dh": "אדרי",
    "text": " — שורות:"
   },
   {
    "dh": "קפנדריא",
    "text": " — טרי\"א בלע\"ז:"
   },
   {
    "dh": "מעיקרא",
    "text": " — קודם שנבנה עליו בית הכנסת:"
   },
   {
    "dh": "נילף מקפנדריא",
    "text": " — לאיסורא דתנן במסכת מגילה (ד' כח.) אין עושין בית הכנסת קפנדריא:"
   },
   {
    "dh": "תנא יליף",
    "text": " — רקיקה ממנעל:"
   },
   {
    "dh": "פונדתו",
    "text": " — אזור חלול שנותנין בו מעות:"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "63a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "סג",
  "amud": "א",
  "dafEn": "63a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ואימא הר הבית דאסור במנעל לילפא ממנעל אבל (ב\"ה) דשרי במנעל אדיליף ממנעל ולהיתר נילף מקפנדריא ולאסור אלא אמר רבא כי ביתו מה ביתו אקפנדריא קפיד אינש ארקיקה ומנעל לא קפיד אינש אף ב\"ה קפנדריא הוא דאסור רקיקה ומנעל שרי: כל חותמי ברכות שבמקדש וכו': כל כך למה לפי שאין עונין אמן במקדש ומנין שאין עונין אמן במקדש שנאמר (נחמיה ט, ה) קומו ברכו את ה' אלהיכם מן העולם עד העולם ואומר (נחמיה ט, ה) ויברכו (את) שם כבודך ומרומם על כל ברכה ותהלה יכול כל הברכות כולן תהא להן תהלה אחת ת\"ל ומרומם על כל ברכה ותהלה על כל ברכה וברכה תן לו תהלה: התקינו שיהא אדם שואל בשלום חברו וכו': מאי ואומר וכי תימא בעז מדעתיה דנפשיה קאמר ת\"ש (שופטים ו, יב) ה' עמך גבור החיל וכי תימא מלאך הוא דקאמר ליה לגדעון ת\"ש (משלי כג, כב) אל תבוז כי זקנה אמך ואומר (תהלים קיט, קכו) עת לעשות לה' הפרו תורתך אמר רבא האי קרא מרישיה לסיפיה מדריש מסיפיה לרישיה מדריש מרישיה לסיפיה מדריש עת לעשות לה' מאי טעם משום הפרו תורתך מסיפיה לרישיה מדריש הפרו תורתך מ\"ט משום עת לעשות לה' תניא הלל הזקן אומר בשעת המכניסין פזר בשעת המפזרים כנס ואם ראית דור שהתורה חביבה עליו פזר שנאמר (משלי יא, כד) יש מפזר ונוסף עוד ואם ראית דור שאין התורה חביבה עליו כנס שנא' עת לעשות לה' הפרו תורתך דרש בר קפרא זלת קבוץ קנה מינה באתר דלית גבר תמן הוי גבר אמר אביי ש\"מ באתר דאית גבר תמן לא תהוי גבר פשיטא לא נצרכה אלא בששניהם שוין דרש בר קפרא איזוהי פרשה קטנה שכל גופי תורה תלוין בה (משלי ג, ו) בכל דרכיך דעהו והוא יישר ארחותיך אמר רבא אפילו לדבר עבירה דרש בר קפרא לעולם ילמד אדם את בנו אומנות נקיה וקלה מה היא אמר רב חסדא מחטא דתלמיותא: תניא ר' אומר לעולם אל ירבה אדם רעים בתוך ביתו שנא' (משלי יח, כד) איש רעים להתרועע תניא ר' אומר אל ימנה אדם אפטרופוס בתוך ביתו שאלמלי לא מינה פוטיפר את יוסף אפטרופוס בתוך ביתו לא בא לאותו דבר תניא ר' אומר למה נסמכה פרשת נזיר לפרשת סוטה לומר לך שכל הרואה סוטה בקלקולה יזיר עצמו מן היין אמר חזקיה בריה דר' פרנך אמר רבי יוחנן למה נסמכה פרשת סוטה לפרשת תרומות ומעשרות לומר לך כל שיש לו תרומות ומעשרות ואינו נותן לכהן סוף נצרך לכהן על ידי אשתו שנאמר (במדבר ה, י) ואיש את קדשיו לו יהיו וסמיך ליה איש איש כי תשטה אשתו וכתיב והביא האיש את אשתו וגו' ולא עוד אלא סוף שנצרך להן שנאמר ואיש את קדשיו לו יהיו אמר רב נחמן בר יצחק ואם נתנן סוף מתעשר שנאמר (במדבר ה, י) איש אשר יתן לכהן לו יהיה לו יהיה ממון הרבה א\"ר הונא בר ברכיה משום רבי אלעזר הקפר כל המשתף שם שמים בצערו כופלין לו פרנסתו שנאמר (איוב כב, כה) והיה שדי בצריך וכסף תועפות לך ר' שמואל בר נחמני אמר פרנסתו מעופפת לו כצפור שנאמר וכסף תועפות לך א\"ר טבי א\"ר יאשיה כל המרפה עצמו מדברי תורה אין בו כח לעמוד ביום צרה שנאמר (משלי כד, י) התרפית ביום צרה צר כחכה א\"ר אמי בר מתנה אמר שמואל ואפילו מצוה אחת שנאמר התרפית מכל מקום אמר רב ספרא ר' אבהו הוה משתעי כשירד חנינא בן אחי רבי יהושע לגולה היה מעבר שנים וקובע חדשים בחוצה לארץ שגרו אחריו שני ת\"ח רבי יוסי בן כיפר ובן בנו של זכריה בן קבוטל כיון שראה אותם אמר להם למה באתם אמרו ליה ללמוד תורה באנו הכריז [עליהם] אנשים הללו גדולי הדור הם ואבותיהם שמשו בבית המקדש כאותה ששנינו זכריה בן קבוטל אומר הרבה פעמים קריתי לפניו בספר דניאל התחיל הוא מטמא והם מטהרים הוא אוסר והם מתירים הכריז עליהם אנשים הללו של שוא הם של תהו הם אמרו לו כבר בנית ואי אתה יכול לסתור כבר גדרת ואי אתה יכול לפרוץ אמר להם מפני מה אני מטמא ואתם מטהרים אני אוסר ואתם מתירים אמרו לו מפני שאתה מעבר שנים וקובע חדשים בחו\"ל אמר להם והלא עקיבא בן יוסף היה מעבר שנים וקובע חדשים בחו\"ל אמרו לו הנח רבי עקיבא שלא הניח כמותו בארץ ישראל א\"ל אף אני לא הנחתי כמותי בא\"י אמרו לו גדיים שהנחת נעשו תישים בעלי קרנים והם שגרונו אצלך וכן אמרו לנו לכו ואמרו לו בשמנו אם שומע מוטב ואם לאו יהא בנדוי",
  "rashi": [
   {
    "dh": "ואימא הר הבית דאסור במנעל",
    "text": " — ילפינן רקיקה מיניה לאיסורא בקל וחומר אבל בית הכנסת דשרי במנעל לא נילף רקיקה להתירה דרקיקה מאיסא אלא ילפינן מקפנדריא לאיסורא:",
    "en": "This is explained in the Tosefta, that the Sages instituted the wording of \"from the world and to the world\" [in the blessings in the Beis Hamikdash] in order to teach that this world is nothing compared to the next world, it is as an anteroom before the banquet hall - meaning to say - become used to making blessings in this world, in order to be able to be normalized to the kind of existence that is in the next world, which is described as \"totally extended.\""
   },
   {
    "dh": "ויברכו שם כבודך",
    "text": " — בשכמל\"ו עונים והמברך אומר ברוך ה' אלהי ישראל מן העולם ועד העולם מפרש בתוספתא שתקנו מן העולם ועד העולם להודיע שאין העוה\"ז לפני העוה\"ב כלום אלא כפרוזדור לפני הטרקלין כלומר הנהיגו ברכותיו בעוה\"ז כדי להיות רגילים לעוה\"ב שכולו ארוך:"
   },
   {
    "dh": "על כל הברכות",
    "text": " — בסוף ברכה אחרונה:"
   },
   {
    "dh": "תהלה אחת",
    "text": " — שיענו פעם אחת בשכמל\"ו:"
   },
   {
    "dh": "וכי תימא בועז מדעתיה עבד",
    "text": " — ולא גמרינן מיניה:"
   },
   {
    "dh": "תא שמע",
    "text": " — דגמרינן ממלאך שאמר לגדעון:"
   },
   {
    "dh": "וכי תימא מלאך הוא דקאמר ליה לגדעון",
    "text": " — כלומר לא שאל בשלומו ולא ברכו אלא בשליחות קאמר מאת המקום לבשרו שהשכינה עמו ולא גמרינן מיניה:"
   },
   {
    "dh": "תא שמע אל תבוז כי זקנה אמך",
    "text": " — אל תבוז את בועז לאמר מדעתו עשה אלא למוד מזקני ישראל כי יש לו על מי שיסמוך שנאמר עת לעשות לה':"
   },
   {
    "dh": "מסיפיה לרישיה כו'",
    "text": " — אם באת לדרשו למקרא זה יש לך לדרשו יפה בין בכתיבתו בין בהפוך:"
   },
   {
    "dh": "מרישיה לסיפיה עת לעשות לה' משום הפרו",
    "text": " — עתים הם לה' לעשות משפט פורעניות בעוברי רצונו משום דהפרו תורתך:"
   },
   {
    "dh": "מסיפיה לרישיה",
    "text": " — הפרו תורתו עושי רצונו כגון אליהו בהר הכרמל (מלכים א י״ח:ז׳) שהקריב בבמה בשעת איסור הבמות משום דעת לעשות סייג וגדר בישראל לשמו של הקדוש ברוך הוא:"
   },
   {
    "dh": "בשעת המכניסים",
    "text": " — שאין חכמי הדור מרביצים תורה לתלמידים:"
   },
   {
    "dh": "פזר",
    "text": " — אתה לשנות לתלמידים:"
   },
   {
    "dh": "בשעת המפזרים",
    "text": " — שהגדולים שבדור מרביצים תורה:"
   },
   {
    "dh": "כנס",
    "text": " — אתה ולא תטול שררה עליהם דאף זו לכבוד שמים היא לאחוז במדת הענוה וכתיב עת לעשות לה' הפרו תורתך:"
   },
   {
    "dh": "ואם ראית דור שאין התורה חביבה עליו כנס",
    "text": " — ואל תטיל דברי תורה לבזיון:"
   },
   {
    "dh": "הפרו תורתך",
    "text": " — מלפזרה בשעה שהכנוס לשם שמים:"
   },
   {
    "dh": "הכי גרסינן זלת קבוץ קנה מינה",
    "text": " — אם ראית פרקמטיא בזול קבוץ וקנה מינה ואסוף שסופה להתיקר:"
   },
   {
    "dh": "פשיטא",
    "text": " — הא דאביי למה לי פשיטא שלא יורה אדם הלכה בפני רבו למה ליה לאביי למשמע מכללא:"
   },
   {
    "dh": "בששניהן שוין",
    "text": " — אם באת במקום תלמיד חכם ואינך גדול ממנו אל תטול עטרה לדרוש במקומו:"
   },
   {
    "dh": "בכל דרכיך",
    "text": " — אפילו לעבור עבירה:"
   },
   {
    "dh": "דעהו",
    "text": " — תן לב אם צורך מצוה הוא כגון אליהו בהר הכרמל עבור עליה:"
   },
   {
    "dh": "מחטא דתלמיותא",
    "text": " — ברושי\"ד שלגבויי\"ש שהתפירו' עשויות שורות שורות כתלמי מענה:"
   },
   {
    "dh": "להתרועע",
    "text": " — להתרוצץ:"
   },
   {
    "dh": "אפוטרופוס",
    "text": " — מכניס ומוציא נכסיו:"
   },
   {
    "dh": "כל שיש לו תרומות ומעשרות ואינו נותנן לכהן סוף שנצרך לו על ידי אשתו",
    "text": " — שנעשית סוטה:"
   },
   {
    "dh": "ה\"ג ואיש את קדשיו לו יהיו וסמיך ליה איש איש כי תשטה אשתו וכתיב והביא האיש את אשתו",
    "text": ""
   },
   {
    "dh": "איש את קדשיו לו יהיו",
    "text": " — שמעכב קדשיו אצלו ואינו נותנן לכהנים וללוים:"
   },
   {
    "dh": "סוף שנצרך להן",
    "text": " — שנעשה עני וצריך לכך ליטול מעשר עני:"
   },
   {
    "dh": "לו יהיו",
    "text": " — לעצמו יצטרכו:"
   },
   {
    "dh": "המשתף שם שמים בצערו",
    "text": " — שמברך על הרעה דיין האמת אי נמי שמבקש רחמים מלפניו:"
   },
   {
    "dh": "בצריך",
    "text": " — בצרתך:"
   },
   {
    "dh": "תועפות",
    "text": " — לשון כפילה כדמתרגמינן וכפלת ותעיף (שמות כו):"
   },
   {
    "dh": "התרפית",
    "text": " — מדברי תורה ביום צרה צר כחכה:"
   },
   {
    "dh": "ואפילו מצוה אחת",
    "text": " — אם נתרפה ממנה כשבאה לידו ולא חש להתעסק בה צר כחו:"
   },
   {
    "dh": "התרפית מכל מקום",
    "text": " — אף במצוה אחת משמע:"
   },
   {
    "dh": "מעבר שנים וכו'",
    "text": " — ותנן אין מעברין את השנים אלא ביהודה דכתיב לשכנו תדרשו כל דרישות שאתה דורש לא יהו אלא בשכנו של מקום בפ\"ק דסנהדרין (דף יא:):"
   },
   {
    "dh": "שגרו אחריו",
    "text": " — למחות בידו:"
   },
   {
    "dh": "כבר בנית",
    "text": " — שהגדלת שמנו לומר גדולי הדור הם:"
   },
   {
    "dh": "והלא עקיבא בן יוסף עשה כן",
    "text": " — דתנן ביבמות א\"ר עקיבא כשירדתי לנהרדעא לעבר שנים בפרק בתרא האשה שהלך בעלה וצרתה (דף קכב.):"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "63b",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "סג",
  "amud": "ב",
  "dafEn": "63b",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "ואמרו לאחינו שבגולה אם שומעין מוטב ואם לאו יעלו להר אחיה יבנה מזבח חנניה ינגן בכנור ויכפרו כולם ויאמרו אין להם חלק באלהי ישראל מיד געו כל העם בבכיה ואמרו חס ושלום יש לנו חלק באלהי ישראל וכל כך למה משום שנאמר (ישעיהו ב, ג) כי מציון תצא תורה ודבר ה' מירושלים בשלמא הוא מטהר והם מטמאין לחומרא אלא הוא מטמא והם מטהרין היכי הוי והא תניא חכם שטמא אין חברו רשאי לטהר אסר אין חברו רשאי להתיר קסברי כי היכי דלא נגררו בתריה: תנו רבנן כשנכנסו רבותינו לכרם ביבנה היו שם רבי יהודה ורבי יוסי ור' נחמיה ור' אליעזר בנו של רבי יוסי הגלילי פתחו כולם בכבוד אכסניא ודרשו פתח רבי יהודה ראש המדברים בכל מקום בכבוד תורה ודרש (שמות לג, ז) ומשה יקח את האהל ונטה לו מחוץ למחנה והלא דברים קל וחומר ומה ארון ה' שלא היה מרוחק אלא שנים עשר מיל אמרה תורה (שמות לג, ז) והיה כל מבקש ה' יצא אל אהל מועד תלמידי חכמים שהולכים מעיר לעיר וממדינה למדינה ללמוד תורה על אחת כמה וכמה (שמות לג, יא) ודבר ה' אל משה פנים אל פנים אמר ר' יצחק אמר לו הקדוש ברוך הוא למשה משה אני ואתה נסביר פנים בהלכה איכא דאמרי כך אמר לו הקדוש ברוך הוא למשה כשם שאני הסברתי לך פנים כך אתה הסבר פנים לישראל והחזר האהל למקומו (שמות לג, יא) ושב אל המחנה וגו' אמר רבי אבהו אמר לו הקדוש ברוך הוא למשה עכשו יאמרו הרב בכעס ותלמיד בכעס ישראל מה תהא עליהם אם אתה מחזיר האהל למקומו מוטב ואם לאו יהושע בן נון תלמידך משרת תחתיך והיינו דכתיב ושב אל המחנה אמר רבא אף על פי כן לא יצא הדבר לבטלה שנאמר (שמות לג, יא) ומשרתו יהושע בן נון נער לא ימיש מתוך האהל: ועוד פתח ר' יהודה בכבוד תורה ודרש (דברים כז, ט) הסכת ושמע ישראל היום הזה נהיית לעם וכי אותו היום נתנה תורה לישראל והלא אותו יום סוף ארבעים שנה היה אלא ללמדך שחביבה תורה על לומדיה בכל יום ויום כיום שנתנה מהר סיני אמר ר' תנחום בריה דר' חייא איש כפר עכו תדע שהרי אדם קורא קריאת שמע שחרית וערבית וערב אחד אינו קורא דומה כמי שלא קרא קריאת שמע מעולם הסכת עשו כתות כתות ועסקו בתורה לפי שאין התורה נקנית אלא בחבורה כדר' יוסי ברבי חנינא דאמר ר' יוסי ברבי חנינא מאי דכתיב (ירמיהו נ, לו) חרב (על) הבדים ונואלו חרב על שונאיהם של תלמידי חכמים שיושבים בד בבד ועוסקים בתורה ולא עוד אלא שמטפשים כתיב הכא ונואלו וכתיב התם (במדבר יב, יא) אשר נואלנו ולא עוד אלא שחוטאים שנאמר ואשר חטאנו איבעית אימא מהכא (ישעיהו יט, יג) נואלו שרי צוען דבר אחר הסכת ושמע ישראל כתתו עצמכם על דברי תורה כדאמר ריש לקיש דאמר ריש לקיש מנין שאין דברי תורה מתקיימין אלא במי שממית עצמו עליה שנאמר (במדבר יט, יד) זאת התורה אדם כי ימות באהל דבר אחר הסכת ושמע ישראל הס ואחר כך כתת כדרבא דאמר רבא לעולם ילמוד אדם תורה ואחר כך יהגה אמרי דבי ר' ינאי מאי דכתיב (משלי ל, לג) כי מיץ חלב יוציא חמאה ומיץ אף יוציא דם ומיץ אפים יוציא ריב במי אתה מוצא חמאה של תורה במי שמקיא חלב שינק משדי אמו עליה ומיץ אף יוציא דם כל תלמיד שכועס עליו רבו פעם ראשונה ושותק זוכה להבחין בין דם טמא לדם טהור ומיץ אפים יוציא ריב כל תלמיד שכועס עליו רבו פעם ראשונה ושניה ושותק זוכה להבחין בין דיני ממונות לדיני נפשות דתנן ר' ישמעאל אומר הרוצה שיתחכם יעסוק בדיני ממונות שאין לך מקצוע בתורה יותר מהן שהן כמעין נובע אמר ר' שמואל בר נחמני מאי דכתיב (משלי ל, לב) אם נבלת בהתנשא ואם זמות יד לפה כל המנבל עצמו על דברי תורה סופו להתנשא ואם זמם יד לפה: פתח ר' נחמיה בכבוד אכסניא ודרש מאי דכתיב (שמואל א טו, ו) ויאמר שאול אל הקיני לכו סורו רדו מתוך עמלקי פן אוסיפך עמו ואתה עשיתה חסד עם כל בני ישראל והלא דברים קל וחומר ומה יתרו שלא קרב את משה אלא לכבוד עצמו כך המארח תלמיד חכם בתוך ביתו ומאכילו ומשקהו ומהנהו מנכסיו על אחת כמה וכמה: פתח ר' יוסי בכבוד אכסניא ודרש (דברים כג, ח) לא תתעב אדומי כי אחיך הוא לא תתעב מצרי כי גר היית בארצו והלא דברים קל וחומר ומה מצריים שלא קרבו את ישראל אלא לצורך עצמן שנאמר (בראשית מז, ו) ואם ידעת ויש בם אנשי חיל ושמתם שרי מקנה על אשר לי כך המארח תלמיד חכם בתוך ביתו ומאכילו ומשקהו ומהנהו מנכסיו על אחת כמה וכמה: פתח ר' אליעזר בנו של ר' יוסי הגלילי בכבוד אכסניא ודרש (שמואל ב ו, יא) ויברך ה' את עובד אדום (הגתי) בעבור ארון האלהים והלא דברים ק\"ו ומה ארון שלא אכל ושתה אלא כבד ורבץ לפניו כך המארח תלמיד חכם בתוך ביתו ומאכילו ומשקהו ומהנהו מנכסיו עאכ\"ו מאי היא ברכה שברכו אמר רב יהודה בר זבידא זו חמות וח' כלותיה שילדו ששה ששה בכרס אחד",
  "rashi": [
   {
    "dh": "ואמרו לאחינו שבגולה",
    "text": " — שלא ישמעו לו:"
   },
   {
    "dh": "יעלו להר",
    "text": " — לאחד ההרים להתנהג בחוקות העמים לבנות במות:"
   },
   {
    "dh": "אחיה יבנה מזבח",
    "text": " — אדם גדול היה וראש לבני הגולה:"
   },
   {
    "dh": "חנניה",
    "text": " — הוא חנניה אחי רבי יהושע:"
   },
   {
    "dh": "ינגן בכנור",
    "text": " — לפני הבמה לפי שחנניה לוי היה כדתנן במסכת ערכין (ד' יא:) מעשה ברב יהושע בן חנניה שהלך לסייע את רב יוחנן בן גודגדא בהגפת דלתות אמר לו חזור בך שאתה מן המשוררים ואני מן השוערים:"
   },
   {
    "dh": "לכרם",
    "text": " — על שם שהיו יושבים שורות שורות ככרם זה הנטוע שורות שורות:"
   },
   {
    "dh": "בכבוד אכסניא",
    "text": " — מכניסי אורחים בבתים:"
   },
   {
    "dh": "ראש המדברים",
    "text": " — במסכת שבת מפרש לה בבמה מדליקין (ד' לג:):"
   },
   {
    "dh": "שנים עשר מיל",
    "text": " — שלש פרסאות מחנה ישראל מבית הישימות עד אבל השטים תלתא פרסי:"
   },
   {
    "dh": "אמרה תורה כו'",
    "text": " — כלומר קראו הכתוב מבקש ה':"
   },
   {
    "dh": "כשם שאני הסברתי לך פנים כך אתה הסבר פנים",
    "text": " — והיינו דכתיב פנים בפנים:"
   },
   {
    "dh": "הרב בכעס",
    "text": " — עליהם משום מעשה העגל:"
   },
   {
    "dh": "ותלמיד בכעס",
    "text": " — וגם אתה מראה להם כעס שהרחקת אהלך ממחנה:"
   },
   {
    "dh": "אם אתה מחזיר האהל למקומו גרסינן",
    "text": ""
   },
   {
    "dh": "והיינו דכתיב ושב אל המחנה",
    "text": " — השב האהל למחנה ואם לאו משרתך יהושע בן נון נער לא ימיש מתוכה שישמש תחתיך ואף על פי שהשיבו לאחר שנתרצה הקב\"ה לישראל והוקם המשכן לא יצא דבר לבטלה:"
   },
   {
    "dh": "לא גרסינן ומשרתו יהושע וגו'",
    "text": ""
   },
   {
    "dh": "הסכת",
    "text": " — עשו כתות כתות. דריש הס כמו עשו:"
   },
   {
    "dh": "כתתו עצמכם",
    "text": " — ודרשי נמי הס כמו עשה עשו עצמכם כתותים להצטער על דברי תורה:"
   },
   {
    "dh": "זאת התורה",
    "text": " — היכן מצויה באדם שימות באהלי תורה:"
   },
   {
    "dh": "הס ואחר כך כתת",
    "text": " — שתוק כמו ויהס כלב (במדבר י״ג:ל׳) שתוק והאזן לשמועתך עד שתהא שגורה בפיך ואף על פי שאינה מיושבת לך ואחר כך כתתנה והקשה עליה מה שיש לך להקשות ותרץ תרוצין עד שתתיישב לך:"
   },
   {
    "dh": "יהגה",
    "text": " — יעיין:"
   },
   {
    "dh": "מיץ חלב יוציא חמאה",
    "text": " — המוציא את החלב שמצץ משדי אמו על דברי התורה חמאה היא לו:"
   },
   {
    "dh": "ומיץ אף",
    "text": " — המוצץ כעס רבו וסובלו יוציא הלכות דם לעומתם:"
   },
   {
    "dh": "דתנן",
    "text": " — שדיני ממונות עמוקים הם והרוצה שיתחכם יעסוק בדיני ממונות שאין מקצוע בתורה גדול מהם:"
   },
   {
    "dh": "המנבל עצמו",
    "text": " — ששואל לרבו כל ספקותיו ואף על פי שיש בהם שחבריו מלעיגים עליו:"
   },
   {
    "dh": "ואם זמות",
    "text": " — שסתמת פיך מלשאול לשון זמם טבעת של רצועה שתוחבים בחוטם בהמה שעסקיה רעים ונותנים אותו בשפתיה לתופרם יחד ולסותמן סופך שתתן יד לפה כשישאלוך ולא תדע להשיב:"
   },
   {
    "dh": "עשית חסד",
    "text": " — שהאכילם שנאמר ויבא אהרן וכל זקני ישראל לאכל לחם וגו' (שמות י״ח:י״ב):"
   },
   {
    "dh": "חמות",
    "text": " — אשתו של עובד אדום:"
   },
   {
    "dh": "וח' כלותיה",
    "text": " — שהיו לה מח' בניה:"
   }
  ],
  "tosafot": [],
  "translations": []
 },
 {
  "id": "64a",
  "masechet": "בְּרָכוֹת",
  "masechetEn": "Berachot",
  "daf": "סד",
  "amud": "א",
  "dafEn": "64a",
  "perekFirstWord": "",
  "runningHead": "בְּרָכוֹת",
  "mishnah": "",
  "gemara": "שנאמר (דברי הימים א כו, ה) פעלתי השמיני וכתיב (דברי הימים א כו, ה) כי ברכו אלהים (דברי הימים א כו, ח) כל אלה [מבני] (ל) עובד אדום המה ובניהם ואחיהם (אנשי) [איש] חיל בכח לעבודה ששים ושנים לעובד אדום אמר ר' אבין הלוי כל הדוחק את השעה שעה דוחקתו וכל הנדחה מפני השעה שעה נדחת מפניו מדרבה ורב יוסף דרב יוסף סיני ורבה עוקר הרים אצטריכא להו שעתא שלחו להתם סיני ועוקר הרים איזה מהם קודם שלחו להו סיני קודם שהכל צריכין למרי חטיא אף על פי כן לא קבל עליו ר' יוסף דאמרי ליה כלדאי מלכת תרתין שנין מלך רבה עשרין ותרתין שנין מלך רב יוסף תרתין שנין ופלגא כל הנך שני דמלך רבה אפילו אומנא לביתיה לא קרא: ואמר רבי אבין הלוי מאי דכתיב (תהלים כ, ב) יענך ה' ביום צרה ישגבך שם אלהי יעקב אלהי יעקב ולא אלהי אברהם ויצחק מכאן לבעל הקורה שיכנס בעביה של קורה: ואמר רבי אבין הלוי כל הנהנה מסעודה שתלמיד חכם שרוי בתוכה כאילו נהנה מזיו שכינה שנאמר (שמות יח, יב) ויבא אהרן וכל זקני ישראל לאכל לחם עם חותן משה לפני האלהים וכי לפני אלהים אכלו והלא לפני משה אכלו אלא לומר לך כל הנהנה מסעודה שתלמיד חכם שרוי בתוכה כאילו נהנה מזיו שכינה: ואמר רבי אבין הלוי הנפטר מחברו אל יאמר לו לך בשלום אלא לך לשלום שהרי יתרו שאמר לו למשה (שמות ד, יח) לך לשלום עלה והצליח דוד שאמר לו לאבשלום (שמואל ב טו, ט) לך בשלום הלך ונתלה: ואמר רבי אבין הלוי הנפטר מן המת אל יאמר לו לך לשלום אלא לך בשלום שנאמר (בראשית טו, טו) ואתה תבא אל אבותיך בשלום: אמר רבי לוי בר חייא היוצא מבית הכנסת ונכנס לבית המדרש ועוסק בתורה זוכה ומקבל פני שכינה שנאמר (תהלים פד, ח) ילכו מחיל אל חיל יראה אל אלהים בציון. אמר רבי חייא בר אשי אמר רב תלמידי חכמים אין להם מנוחה לא בעולם הזה ולא בעולם הבא שנאמר ילכו מחיל אל חיל יראה אל אלהים בציון: אמר רבי אלעזר אמר רבי חנינא תלמידי חכמים מרבים שלום בעולם שנאמר (ישעיהו נד, יג) וכל בניך למודי ה' ורב שלום בניך אל תקרי בניך אלא בוניך (תהלים קיט, קסה) שלום רב לאוהבי תורתך ואין למו מכשול (תהלים קכב, ז) יהי שלום בחילך שלוה בארמנותיך (תהלים קכב, ח) למען אחי ורעי אדברה נא שלום בך (תהלים קכב, ט) למען בית ה' אלהינו אבקשה טוב לך (תהלים כט, יא) ה' עוז לעמו יתן ה' יברך את עמו בשלום: הדרן עלך הרואה וסליקא לה מסכת ברכות",
  "rashi": [
   {
    "dh": "שנאמר פעלתי השמיני",
    "text": " — בני עובד אדום קא חשיב בדברי הימים וקא חשיב תמניא והיא תשיעית כל אחת ילדה ששה הם חמשים וארבע הוסיף עליהם שמונה בנים הראשונים הרי ששים ושנים לעובד אדום:",
    "en": "Such was Avshalom (3rd son of David - to Ma'aka) who tried to take the kingship by force"
   },
   {
    "dh": "הדוחק את השעה",
    "text": " — כגון אבשלום שבקש למלוך בחזקה:"
   },
   {
    "dh": "אצטריכא להו שעתא",
    "text": " — להיות אחד מהם ראש ישיבה. אצטריכא להו גרסי' הוצרכו להם חכמים:"
   },
   {
    "dh": "סיני",
    "text": " — היו קורין לרב יוסף שהיה בקי בברייתות הרבה:"
   },
   {
    "dh": "עוקר הרים",
    "text": " — לרבה בר נחמני שהיה מחודד יותר בפלפול:"
   },
   {
    "dh": "למרי חטיא",
    "text": " — למי שקבץ תבואה למכור כלומר למי שקבץ שמועות:"
   },
   {
    "dh": "דאמרי ליה כלדאי",
    "text": " — לרב יוסף:"
   },
   {
    "dh": "מלכת תרתין שנין",
    "text": " — אמר אם אמלוך תחלה אמות לסוף שנתים ונדחה מפני השעה ולא אבה למלוך והשעה עמדה לו שלא הפסיד שנותיו בכך:"
   },
   {
    "dh": "אומנא לביתיה לא קרא",
    "text": " — לא נהג כל אותן השנים שום צד שררה וכשהיה צריך להקיז דם היה הולך לבית הרופא ולא היה שולח לבא אליו:"
   },
   {
    "dh": "שיאחז בעובי הקורה",
    "text": " — אם בא לטלטלה ממקום למקום לתתה בבנין כלומר יעקב שכל הבנים שלו וטרח בגידולם יבקש עליהם רחמים:"
   },
   {
    "dh": "הנפטר מן המת",
    "text": " — כשהיו מוליכים ארונות ממקום למקום לקבורה היו מלוים אותו מעיר לעיר וחוזרים אלו ואחרים מלוים אותו משם והלאה והחוזרים קרי נפטרים נוטלין רשות להפטר ממנו:"
   },
   {
    "dh": "אין להם מנוחה",
    "text": " — מישיבה לישיבה וממדרש למדרש:"
   },
   {
    "dh": "הדרן עלך הרואה וסליקא לה מסכת ברכות",
    "text": ""
   }
  ],
  "tosafot": [],
  "translations": []
 }
];
