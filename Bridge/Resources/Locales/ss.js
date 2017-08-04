Bridge.merge(new System.Globalization.CultureInfo("ss", true), {
    englishName: "siSwati",
    nativeName: "Siswati",

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
        currencySymbol: "R",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Son","Mso","Bil","Tsa","Ne","Hla","Mgc"],
        abbreviatedMonthGenitiveNames: ["Bhi","Van","Vol","Mab","Nkh","Nhl","Kho","Ngc","Nyo","Mph","Lwe","Ngo",""],
        abbreviatedMonthNames: ["Bhi","Van","Vol","Mab","Nkh","Nhl","Kho","Ngc","Nyo","Mph","Lwe","Ngo",""],
        amDesignator: "AM",
        dateSeparator: "-",
        dayNames: ["Lisontfo","uMsombuluko","Lesibili","Lesitsatfu","Lesine","Lesihlanu","uMgcibelo"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "yyyy MMMM d, dddd HH:mm:ss",
        longDatePattern: "yyyy MMMM d, dddd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Bhimbidvwane","iNdlovana","iNdlovu-lenkhulu","Mabasa","iNkhwekhweti","iNhlaba","Kholwane","iNgci","iNyoni","iMphala","Lweti","iNgongoni",""],
        monthNames: ["Bhimbidvwane","iNdlovana","iNdlovu-lenkhulu","Mabasa","iNkhwekhweti","iNhlaba","Kholwane","iNgci","iNyoni","iMphala","Lweti","iNgongoni",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["Son","Mso","Bil","Tsa","Ne","Hla","Mgc"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
