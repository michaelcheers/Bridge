Bridge.merge(new System.Globalization.CultureInfo("agq", true), {
    englishName: "Aghem",
    nativeName: "Aghem",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "FCFA",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 5,
        currencyPositivePattern: 1,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["nts","kpa","ghɔ","tɔm","ume","ghɨ","dzk"],
        abbreviatedMonthGenitiveNames: ["nùm","kɨz","tɨd","taa","see","nzu","dum","fɔe","dzu","lɔm","kaa","fwo",""],
        abbreviatedMonthNames: ["nùm","kɨz","tɨd","taa","see","nzu","dum","fɔe","dzu","lɔm","kaa","fwo",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["tsuʔntsɨ","tsuʔukpà","tsuʔughɔe","tsuʔutɔ̀mlò","tsuʔumè","tsuʔughɨ̂m","tsuʔndzɨkɔʔɔ"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["ndzɔ̀ŋɔ̀nùm","ndzɔ̀ŋɔ̀kƗ̀zùʔ","ndzɔ̀ŋɔ̀tƗ̀dʉ̀ghà","ndzɔ̀ŋɔ̀tǎafʉ̄ghā","ndzɔ̀ŋèsèe","ndzɔ̀ŋɔ̀nzùghò","ndzɔ̀ŋɔ̀dùmlo","ndzɔ̀ŋɔ̀kwîfɔ̀e","ndzɔ̀ŋɔ̀tƗ̀fʉ̀ghàdzughù","ndzɔ̀ŋɔ̀ghǔuwelɔ̀m","ndzɔ̀ŋɔ̀chwaʔàkaa wo","ndzɔ̀ŋèfwòo",""],
        monthNames: ["ndzɔ̀ŋɔ̀nùm","ndzɔ̀ŋɔ̀kƗ̀zùʔ","ndzɔ̀ŋɔ̀tƗ̀dʉ̀ghà","ndzɔ̀ŋɔ̀tǎafʉ̄ghā","ndzɔ̀ŋèsèe","ndzɔ̀ŋɔ̀nzùghò","ndzɔ̀ŋɔ̀dùmlo","ndzɔ̀ŋɔ̀kwîfɔ̀e","ndzɔ̀ŋɔ̀tƗ̀fʉ̀ghàdzughù","ndzɔ̀ŋɔ̀ghǔuwelɔ̀m","ndzɔ̀ŋɔ̀chwaʔàkaa wo","ndzɔ̀ŋèfwòo",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["nts","kpa","ghɔ","tɔm","ume","ghɨ","dzk"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
