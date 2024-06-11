const fs = require('fs');

fs.readFile('license.md', 'utf8', (error, data) => {
    error ? console.error(error) : console.log(typeof data);
    const arr = data.split('  ');
    var licenses = {}
    for(var s of arr) {
        s = s.slice(2) // remove crlf
        const licenseName = s.slice(s.indexOf('License:')+'License: '.length, s.indexOf(']'));
        const linkString = s.slice(s.indexOf(')](')+3,-1);
        const badgeString = s.slice(1,s.indexOf(')]')+1);
        licenses[licenseName] = {
            link: linkString,
            badge: badgeString
        }
    }
    fs.writeFile('licenses.json', JSON.stringify(licenses, null, 2), error => error ? console.error(error) : console.log('Success!'))
}
  
);