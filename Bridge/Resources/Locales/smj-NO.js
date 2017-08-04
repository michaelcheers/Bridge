Bridge.merge(new System.Globalization.CultureInfo("smj-NO", true), {
    englishName: "Sami, Lule (Norway)",
    nativeName: "julevusámegiella (Vuodna)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 2,
        percentNegativePattern: 2,
        currencySymbol: "kr",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 12,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["såd","mán","dis","gas","duor","bier","láv"],
        abbreviatedMonthGenitiveNames: ["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""],
        abbreviatedMonthNames: ["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""],
        amDesignator: "",
        dateSeparator: ".",
        dayNames: ["sådnåbiejvve","mánnodahka","dijstahka","gasskavahkko","duorastahka","bierjjedahka","lávvodahka"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, MMMM d'. b. 'yyyy HH:mm:ss",
        longDatePattern: "dddd, MMMM d'. b. 'yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d'. b.'",
        monthGenitiveNames: ["ådåjakmáno","guovvamáno","sjnjuktjamáno","vuoratjismáno","moarmesmáno","biehtsemáno","sjnjilltjamáno","bårggemáno","ragátmáno","gålgådismáno","basádismáno","javllamáno",""],
        monthNames: ["ådåjakmánno","guovvamánno","sjnjuktjamánno","vuoratjismánno","moarmesmánno","biehtsemánno","sjnjilltjamánno","bårggemánno","ragátmánno","gålgådismánno","basádismánno","javllamánno",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["s","m","d","g","d","b","l"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
