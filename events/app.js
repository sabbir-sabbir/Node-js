const School = require("./school");
const school = new School();

school.on('bellRing', ({period, subject, teacher}) => {
    console.log(`The ${period} period has started. Subject: ${subject}. Teacher: ${teacher}`);
});

school.startPeriod();