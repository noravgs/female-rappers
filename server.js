const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
 'nicki minaj':{
     'lyric': "Don't worry 'bout me, and who I fire \n I get what I desire, it's my empire \n And yes, I call the shots, I am the umpire \n I sprinkle holy water, upon a vampire \n In this very moment, I'm king \n In this very moment, I slayed Goliath with a sling \n This very moment I bring \n Put it on everything, that I will retire with the ring",
     'song':'Moment 4 Life',
     'name': 'Onika Tanya Maraj',
     'location': 'Queens, New York',
     'dob': 'December 11, 1982',
     'age': '39'
 },
 'cardi b': {
    'lyric': "Had to talk to God, dropped down, and prayed for this \n To my surprise, He replied, said, 'You made for this' \n I seen the car I wanted, then I went and paid for it, cash cash \n Hit the Tay-K, I hit the race, hit the dash dash \n That's when they came for me on Twitter with the backlash",
    'song': 'Best Life',
    'name': 'Belcalis Marlenis Almánzar',
    'location': 'The Bronx, New York',
    'dob': 'October 11, 1992',
    'age': '29' //make js do calc
},
'megan thee stallion':{
    'lyric': "I'm the hood Mona Lisa, break a nigga into pieces \n Had to X some cheesy niggas out my circle like a pizza (yeah)",
    'song':'Savage',
    'name': 'Megan Jovon Ruth Pete',
    'location': 'Houston, TX',
    'dob': 'February 15, 1995',
    'age': '27',
},
'asian doll':{
    'lyric': "Ten toes down, I'ma tell it how it go (gang) \n I'ma tell it what it is, bad bitch, no joke (Doll) \n You not like that, why you cappin' and sh*t? (Cap) \n All that sh*t whack, why you rappin' and sh*t? (You whack)",
    'song':'Nunnadet Sh*t',
    'name': 'Misharron Jermeisha Allen',
    'location': 'Dallas, TX',
    'dob': 'December 7, 1996',
    'age': '26',
},
'bia':{
    'lyric': "I can't wear the shit you bitches wear 'cause it's cheap to me \n It's some money at my table, grab a seat with me \n Cost a ticket just to cover all my legal fees \n I don't hang with jealous b*tches, that's a weak disease",
    'song':'Whole Lotta Money',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'latto':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'lil kim':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'trina':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'azealia banks':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'flo milli':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'eve':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'missy elliot':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'da brat':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'doja cat':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'kash doll':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'left eye':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Lisa Lopes',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'saweetie':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'remy ma':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'foxy brown':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'mc lyte':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'lauryn hill':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'queen latifah':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
'city girls':{
    'lyric': 29,
    'song':'Shéyaa Bin Abraham-Joseph',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
},
// 'lisa lopes':{
//     'lyric': 29,
//     'song':'Shéyaa Bin Abraham-Joseph',
// },
}
 



app.get('/', (request, response) => {
   respose.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
   const rapperName = request.params.name.toLocaleLowerCase()
   if( rappers[rapperName] ){
    response.json(rappers[rapperName])
   }else{
    response.json(rappers['unknown'])
   }
   
})

app.listen(PORT , () => {
   console.log(`The server is now running on port ${PORT}! Betta Go Catch it!`)
})