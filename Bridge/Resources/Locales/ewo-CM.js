Bridge.merge(new System.Globalization.CultureInfo("ewo-CM", true), {
    englishName: "Ewondo (Cameroon)",
    nativeName: "ewondo (Kamərún)",

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
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["sɔ́n","mɔ́n","smb","sml","smn","fúl","sér"],
        abbreviatedMonthGenitiveNames: ["ngo","ngb","ngl","ngn","ngt","ngs","ngz","ngm","nge","nga","ngad","ngab",""],
        abbreviatedMonthNames: ["ngo","ngb","ngl","ngn","ngt","ngs","ngz","ngm","nge","nga","ngad","ngab",""],
        amDesignator: "kíkíríg",
        dateSeparator: "/",
        dayNames: ["sɔ́ndɔ","mɔ́ndi","sɔ́ndɔ məlú mə́bɛ̌","sɔ́ndɔ məlú mə́lɛ́","sɔ́ndɔ məlú mə́nyi","fúladé","séradé"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["ngɔn osú","ngɔn bɛ̌","ngɔn lála","ngɔn nyina","ngɔn tána","ngɔn saməna","ngɔn zamgbála","ngɔn mwom","ngɔn ebulú","ngɔn awóm","ngɔn awóm ai dziá","ngɔn awóm ai bɛ̌",""],
        monthNames: ["ngɔn osú","ngɔn bɛ̌","ngɔn lála","ngɔn nyina","ngɔn tána","ngɔn saməna","ngɔn zamgbála","ngɔn mwom","ngɔn ebulú","ngɔn awóm","ngɔn awóm ai dziá","ngɔn awóm ai bɛ̌",""],
        pmDesignator: "ngəgógəle",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["sɔ́n","mɔ́n","smb","sml","smn","fúl","sér"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
