Bridge.merge(new System.Globalization.CultureInfo("guz", true), {
    englishName: "Gusii",
    nativeName: "Ekegusii",

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
        currencySymbol: "Ksh",
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
        abbreviatedDayNames: ["Cpr","Ctt","Cmn","Cmt","Ars","Icm","Est"],
        abbreviatedMonthGenitiveNames: ["Can","Feb","Mac","Apr","Mei","Jun","Cul","Agt","Sep","Okt","Nob","Dis",""],
        abbreviatedMonthNames: ["Can","Feb","Mac","Apr","Mei","Jun","Cul","Agt","Sep","Okt","Nob","Dis",""],
        amDesignator: "Ma",
        dateSeparator: "/",
        dayNames: ["Chumapiri","Chumatato","Chumaine","Chumatano","Aramisi","Ichuma","Esabato"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Chanuari","Feburari","Machi","Apiriri","Mei","Juni","Chulai","Agosti","Septemba","Okitoba","Nobemba","Disemba",""],
        monthNames: ["Chanuari","Feburari","Machi","Apiriri","Mei","Juni","Chulai","Agosti","Septemba","Okitoba","Nobemba","Disemba",""],
        pmDesignator: "Mo",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Cpr","Ctt","Cmn","Cmt","Ars","Icm","Est"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
