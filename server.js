const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


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
    'lyric': "I like what I see \n A boss like you need a boss like me \n Daddy from the streets, so he move low-key \n Tryna rock that mic' like karaoke",
    'song':'Big Energy',
    'name': 'Alyssa Michelle Stephens',
    'location': 'Columbus, OH',
    'dob': 'December 22, 1998',
    'age': '23',
},
'lil kim':{
    'lyric': "While you tryin to catch Sea Breeze, I'm in the PV's \n All chrome D3's, decked out TV's \n CD's with crazy bass, keep my lady laced \n Don't be fooled by the baby face",
    'song':'Crush on You',
    'name': 'Kimberly Denise Jones',
    'location': 'Brooklyn, New York City',
    'dob': 'July 11, 1974',
    'age': '47',
},
'trina':{
    'lyric': "I aint lookin atchu no more \n I'm lookin past you",
    'song':'Here We Go Again',
    'name': 'Katrina Laverne Taylor',
    'location': 'Miami, FL',
    'dob': 'December 3, 1974',
    'age': '47',
},
'azealia banks':{
    'lyric': "Hey, I can be the answer \n I'm ready to dance when the vamp up \n And when I hit that dip get your camera",
    'song':'212',
    'name': 'Azealia Amanda Banks',
    'location': 'Harlem, New York, NY',
    'dob': 'May 31, 1991',
    'age': '31',
},
'flo milli':{
    'lyric': "Yeah, they mad, I'm on top and I'm chilling \n Got 'em look up to me like these h*es is my children (I just shit on 'em) \n Fashion week, I made a killing \n Numbers goin' up, breakin' the charts on a billion",
    'song':'May I',
    'name': 'Tamia Monique Carter',
    'location': 'Mobile, AL',
    'dob': 'January 9, 2000',
    'age': '22',
},
'eve':{
    'lyric': "Why this, why that? lips stop askin' \n Listen to me, baby, relax and start passin' \n Expressway, hair back, weaving through the traffic \n This one strong, should be labeled as a hazard",
    'song':'Let Me Blow Ya Mind',
    'name': 'Eve Jihan Cooper',
    'location': 'Philadelphia, PA',
    'dob': 'November 10, 1978',
    'age': '43',
},
'missy elliot':{
    'lyric': "I'm the hottest 'round \n I told y'all mother-ooh \n Y'all can't stop me now",
    'song':'Get Your Freak On',
    'name': 'Melissa Arnette Elliott',
    'location': 'Portsmouth, VA',
    'dob': 'July 1, 1971',
    'age': '51',
},
'da brat':{
    'lyric': "Now best believe I got more Trix up my sleeve \n Then that silly rabbit",
    'song':"Sittin' on Top of the World",
    'name': 'Shawntae Harris',
    'location': 'Chicago, IL',
    'dob': 'April 14, 1974',
    'age': '48',
},
'doja cat':{
    'lyric': "Don't ever think you ain't hella these niggas dream girl \n They wanna pit us against each other when we succeedin' for no reasons \n They wanna see us end up like we Regina on Mean Girls \n Princess or queen, tomboy or king (yeah) \n You've heard a lot, you've never seen (nah) \n Mother Earth, Mother Mary rise to the top \n Divine feminine, I'm feminine (why?)",
    'song':'Woman',
    'name': 'Amala Ratna Zandile Dlamini',
    'location': 'Los Angeles, CA',
    'dob': 'October 21, 1995',
    'age': '26',
},
'kash doll':{
    'lyric': "Huh, what could you prove to me? \n What could you do for me that I can't do for me? \n Look, I ain't losing you, shit, you losing me",
    'song':'Single & Happy',
    'name': 'Arkeisha Antoinette Knight',
    'location': 'Detroit, MI',
    'dob': 'March 14, 1992',
    'age': '30',
},
'left eye':{
    'lyric': "Dreams are hopeless aspirations in hopes of coming true \n Believe in yourself, the rest is up to me and you",
    'song':'Waterfalls',
    'name': 'Lisa Lopes',
    'location': 'Philadelphia, PA',
    'dob': 'May 27, 1971',
    'age': '51',
},
'saweetie':{
    'lyric': "Beep-beep, is that my bestie in a Tessie? \n Fresh blow out, skin on tan, ooh, she ready \n B*tch, you look goodt, with a T at the end \n I'ma hype her every time, that my motherfuckin' friend",
    'song':'Best Friend',
    'name': 'Diamonté Quiava Valentin Harper',
    'location': 'Santa Clara, CA',
    'dob': 'July 2, 1993',
    'age': '29',
},
'remy ma':{
    'lyric': "Just left the big house to a bigger house \n Ain't have a girlfriend, but the bitch is out",
    'song':'All The Way Up',
    'name': 'Reminisce Mackie',
    'location': 'Castle Hill, New York, NY',
    'dob': 'May 30, 1980',
    'age': '42',
},
'foxy brown':{
    'lyric': "'Cross the room throwin' signals I'm throwin' 'em back \n Flirt-in cause I, digs you like that \n Peep baby boy style, hopin' we match \n You sent me Crown Royale with a note attached \n It said, 'You look like the type that, know what you like' \n I could tell by the jewels you go for the ice",
    'song':'Get Me Home',
    'name': 'Inga DeCarlo Fung Marchand',
    'location': 'New York, NY',
    'dob': 'September 6, 1978',
    'age': '43',
},
'lauryn hill':{
    'lyric': "The second verse is dedicated to the men \n More concerned with his rims and his Tims than his women \n Him and his men come in the club like hooligans \n Don't care who they offend popping yang like you got yen",
    'song':'Doo Wop (That Thing)',
    'name': 'Lauryn Noelle Hill',
    'location': 'Newark, NJ',
    'dob': 'May 26, 1975',
    'age': '47',
},
'queen latifah':{
    'lyric': "The ladies will kick it the rhyme that is wicked \n Those that don't know how to be pros get evicted \n A woman can bear you break you take you \n Now it's time to rhyme can you relate to",
    'song':'Ladies First',
    'name': 'Dana Elaine Owens',
    'location': 'Newark, NJ',
    'dob': 'March 18, 1970',
    'age': '52',
},
'unknown':{
    'lyric': "unknown",
    'song':'unknown',
    'name': 'unknown',
    'location': 'unknown',
    'dob': 'unknown',
    'age': 'unknown',
},
}
 



app.get('/', (request, response) => {
   respose.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
   const rapperName = request.params.name.toLowerCase()
   if( rappers[rapperName] ){
    response.json(rappers[rapperName])
   }else{
    response.json(rappers['unknown'])
   }
   
})

app.listen(process.env.PORT || PORT , () => {
   console.log(`The server is now running on port ${PORT}! Betta Go Catch it!`)
})