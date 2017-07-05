Bridge.merge(new System.Globalization.CultureInfo("nus-SS", true), {
    englishName: "Nuer (South Sudan)",
    nativeName: "Thok Nath (South Sudan)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "£",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Cäŋ","Jiec","Rɛw","Diɔ̱k","Ŋuaan","Dhieec","Bäkɛl"],
        abbreviatedMonthGenitiveNames: ["Tiop","Pɛt","Duɔ̱ɔ̱","Guak","Duä","Kor","Pay","Thoo","Tɛɛ","Laa","Kur","Tid",""],
        abbreviatedMonthNames: ["Tiop","Pɛt","Duɔ̱ɔ̱","Guak","Duä","Kor","Pay","Thoo","Tɛɛ","Laa","Kur","Tid",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["Cäŋ kuɔth","Jiec la̱t","Rɛw lätni","Diɔ̱k lätni","Ŋuaan lätni","Dhieec lätni","Bäkɛl lätni"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy h:mm:ss tt",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Tiop thar pɛt","Pɛt","Duɔ̱ɔ̱ŋ","Guak","Duät","Kornyoot","Pay yie̱tni","Tho̱o̱r","Tɛɛr","Laath","Kur","Tio̱p in di̱i̱t",""],
        monthNames: ["Tiop thar pɛt","Pɛt","Duɔ̱ɔ̱ŋ","Guak","Duät","Kornyoot","Pay yie̱tni","Tho̱o̱r","Tɛɛr","Laath","Kur","Tio̱p in di̱i̱t",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/MM/yyyy",
        shortestDayNames: ["Cäŋ","Jiec","Rɛw","Diɔ̱k","Ŋuaan","Dhieec","Bäkɛl"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
