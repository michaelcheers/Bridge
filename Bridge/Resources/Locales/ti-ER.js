Bridge.merge(new System.Globalization.CultureInfo("ti-ER", true), {
    englishName: "Tigrinya (Eritrea)",
    nativeName: "ትግርኛ (ኤርትራ)",

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
        currencySymbol: "Nfk",
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
        abbreviatedDayNames: ["ሰንበት","ሰኑይ","ሰሉስ","ረቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
        abbreviatedMonthGenitiveNames: ["ጥሪ","ለካቲ","መጋቢ","ሚያዝ","ግንቦ","ሰነ","ሓምለ","ነሓሰ","መስከ","ጥቅም","ሕዳር","ታሕሳ",""],
        abbreviatedMonthNames: ["ጥሪ","ለካቲ","መጋቢ","ሚያዝ","ግንቦ","ሰነ","ሓምለ","ነሓሰ","መስከ","ጥቅም","ሕዳር","ታሕሳ",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["ሰንበት","ሰኑይ","ሰሉስ","ረቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd፡ dd MMMM መዓልቲ yyyy gg h:mm:ss tt",
        longDatePattern: "dddd፡ dd MMMM መዓልቲ yyyy gg",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
        monthNames: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["ሰንበት","ሰኑይ","ሰሉስ","ረቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
