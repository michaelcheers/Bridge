Bridge.merge(new System.Globalization.CultureInfo("ar-AE", true), {
    englishName: "Arabic (United Arab Emirates)",
    nativeName: "العربية (الإمارات العربية المتحدة)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "ليس رقمًا",
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
        currencySymbol: "د.إ.‏",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
        abbreviatedMonthGenitiveNames: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
        abbreviatedMonthNames: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
        amDesignator: "ص",
        dateSeparator: "/",
        dayNames: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
        firstDayOfWeek: 6,
        fullDateTimePattern: "dd MMMM, yyyy hh:mm:ss tt",
        longDatePattern: "dd MMMM, yyyy",
        longTimePattern: "hh:mm:ss tt",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
        monthNames: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
        pmDesignator: "م",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["ح","ن","ث","ر","خ","ج","س"],
        shortTimePattern: "hh:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
