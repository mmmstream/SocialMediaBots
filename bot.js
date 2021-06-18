var Twit = require('twit');
var fs = require('fs');
const Instagram = require("instagram-web-api");
require('dotenv').config()

var T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

function postTStatus(){
    
    var statusTweet = 'I am now live on Youtube (https://www.youtube.com/channel/UChwYpYduyCgPbSJxDeapc8g/featured) and Twitch (https://www.twitch.tv/moonlitmicrotonalmusic)! #microtonal #music #live #vcvrack '
    // posting status
    T.post('statuses/update', { status: statusTweet}, function(err, data, response) {
    console.log(data)
    })
}

function findDate()
{
     var d= new Date();
     var curr_date = d.getDate();
     var curr_month = d.getMonth() + 1; //Months are zero based
     var curr_year = d.getFullYear();
     var date = curr_date + "" + curr_month + "" + curr_year;
    //  //Return a different value if it is a duplicate 
     switch(date){
      case(1112021):
        if(curr_month == 11){
          date = 11120212;
          break;
        }
        else{
          date = 1112021;
        }
        break;
      case(2112021):
        if(curr_month == 11){
          date = 21120212;
          break;
        }
        else{
          date = 2112021;
        }
        break;
      case(3112021):
        if(curr_month == 11){
          date = 31120212;
          break;
        }
        else{
          date = 3112021;
        }
        break;
      case(1122021):
        if(curr_month == 12){
          date = 11220212;
          break;
        }
        else{
          date = 1122021;
        }
        break;
      case(2122021):
        if(curr_month == 12){
          date = 21220212;
          break;
        }
        else{
          date = 2122021;
        }
        break;
      default: break;
     }
     return date;
  
}

var PicFnDict =
{  
   1462021: ["assets/4newMoon5.jpg", "assets/soundDesign2.jpg"],
   1562021: ["assets/5waxingCrescent1.jpg", "assets/record1.jpg"],
   1662021: ["assets/6waxingCrescent2.jpg", "assets/record2.jpg"],
   1762021: ["assets/7firstQuarter1.jpg", "assets/production1.jpg"],
   1862021: ["assets/8firstQuarter2.jpg", "assets/production2.jpg"],
   1962021: ["assets/9firstQuarter3.jpg", "assets/production3.jpg"],
   2062021: ["assets/10firstQuarter4.jpg", "assets/production4.jpg"],
   2162021: ["assets/11waxingGibbous1.jpg", "assets/arrangement1.jpg"],
   2262021: ["assets/12waxingGibbous2.jpg", "assets/arrangement2.jpg"],
   2362021: ["assets/13waxingGibbous3.jpg", "assets/arrangement3.jpg"],
   2462021: ["assets/14fullMoon1.jpg", "assets/mixdown1.jpg"],
   2562021: ["assets/15fullMoon2.jpg", "assets/mixdown2.jpg"],
   2662021: ["assets/16fullMoon3.jpg", "assets/mixdown3.jpg" ],
   2762021: ["assets/17fullMoon4.jpg", "assets/mixdown4.jpg"],
   2862021: ["assets/18fullMoon5.jpg", "assets/mixdown5.jpg"],
   2962021: ["assets/19waningGibbous1.jpg", "assets/break1.jpg"],
   3062021: ["assets/20waningGibbous2.jpg", "assets/break2.jpg"], 
   172021: ["assets/21waningGibbous3.jpg", "assets/mastering1.jpg"],
   272021: ["assets/22waningGibbous4.jpg", "assets/mastering2.jpg"],
   372021: ["assets/23waningGibbous5.jpg", "assets/mastering3.jpg"],
   472021: ["assets/24thirdQuarter1.jpg", "assets/live1.jpg"],
   572021: ["assets/25thirdQuarter2.jpg", "assets/live2.jpg"],
   672021: ["assets/26thirdQuarter3.jpg", "assets/live3.jpg"],
   772021: ["assets/27waningCrescent1.jpg", "assets/visuals1.jpg"],
   872021: ["assets/28waningCrescent2.jpg", "assets/visuals2.jpg"],
   972021: ["assets/29waningCrescent3.jpg", "assets/visuals3.jpg"],
   1072021: ["assets/0newMoon1.jpg", "assets/composition1.jpg"],
   1172021: ["assets/2newMoon3.jpg", "assets/composition3.jpg"],
   1272021: ["assets/3newMoon4.jpg", "assets/soundDesign1.jpg"],
   1372021: ["assets/4newMoon5.jpg", "assets/soundDesign2.jpg"],
   1472021: ["assets/5waxingCrescent1.jpg", "assets/record1.jpg"],
   1572021: ["assets/6waxingCrescent2.jpg", "assets/record2.jpg"],
   1672021: ["assets/7firstQuarter1.jpg", "assets/production1.jpg"],
   1772021: ["assets/8firstQuarter2.jpg", "assets/production2.jpg"],
   1872021: ["assets/9firstQuarter3.jpg", "assets/production3.jpg"],
   1972021: ["assets/10firstQuarter4.jpg", "assets/production4.jpg"],
   2072021: ["assets/11waxingGibbous1.jpg", "assets/arrangement1.jpg"],
   2172021: ["assets/12waxingGibbous2.jpg", "assets/arrangement2.jpg"],
   2272021: ["assets/13waxingGibbous3.jpg", "assets/arrangement3.jpg"],
   2372021: ["assets/14fullMoon1.jpg", "assets/mixdown1.jpg"],
   2472021: ["assets/15fullMoon2.jpg", "assets/mixdown2.jpg"],
   2572021: ["assets/16fullMoon3.jpg", "assets/mixdown3.jpg" ],
   2672021: ["assets/17fullMoon4.jpg", "assets/mixdown4.jpg"],
   2772021: ["assets/18fullMoon5.jpg", "assets/mixdown5.jpg"],
   2872021: ["assets/19waningGibbous1.jpg", "assets/break1.jpg"],
   2972021: ["assets/20waningGibbous2.jpg", "assets/break2.jpg"],
   3072021: ["assets/21waningGibbous3.jpg", "assets/mastering1.jpg"],
   3172021: ["assets/22waningGibbous4.jpg", "assets/mastering2.jpg"],
   182021: ["assets/23waningGibbous5.jpg", "assets/mastering3.jpg"],
   282021: ["assets/24thirdQuarter1.jpg", "assets/live1.jpg"],
   382021: ["assets/25thirdQuarter2.jpg", "assets/live2.jpg"],
   482021: ["assets/26thirdQuarter3.jpg", "assets/live3.jpg"],
   582021: ["assets/27waningCrescent1.jpg", "assets/visuals1.jpg"],
   682021: ["assets/28waningCrescent2.jpg", "assets/visuals2.jpg"],
   782021: ["assets/29waningCrescent3.jpg", "assets/visuals3.jpg"],
   882021: ["assets/0newMoon1.jpg", "assets/composition1.jpg"],
   982021: ["assets/1newMoon2.jpg", "assets/composition2.jpg"],
   1082021: ["assets/2newMoon3.jpg", "assets/composition3.jpg"],
   1182021: ["assets/3newMoon4.jpg", "assets/soundDesign1.jpg"],
   1282021: ["assets/4newMoon5.jpg", "assets/soundDesign2.jpg"],
   1382021: ["assets/5waxingCrescent1.jpg", "assets/record1.jpg"],
   1482021: ["assets/6waxingCrescent2.jpg", "assets/record2.jpg"],
   1582021: ["assets/7firstQuarter1.jpg", "assets/production1.jpg"],
   1682021: ["assets/8firstQuarter2.jpg", "assets/production2.jpg"],
   1782021: ["assets/9firstQuarter3.jpg", "assets/production3.jpg"],
   1882021: ["assets/10firstQuarter4.jpg", "assets/production4.jpg"],
   1982021: ["assets/11waxingGibbous1.jpg", "assets/arrangement1.jpg"],
   2082021: ["assets/12waxingGibbous2.jpg", "assets/arrangement2.jpg"],
   2182021: ["assets/13waxingGibbous3.jpg", "assets/arrangement3.jpg"],
   2282021: ["assets/14fullMoon1.jpg", "assets/mixdown1.jpg"],
   2382021: ["assets/15fullMoon2.jpg", "assets/mixdown2.jpg"],
   2482021: ["assets/16fullMoon3.jpg", "assets/mixdown3.jpg" ],
   2582021: ["assets/17fullMoon4.jpg", "assets/mixdown4.jpg"],
   2682021: ["assets/18fullMoon5.jpg", "assets/mixdown5.jpg"],
   2782021: ["assets/19waningGibbous1.jpg", "assets/break1.jpg"],
   2882021: ["assets/20waningGibbous2.jpg", "assets/break2.jpg"],
   2982021: ["assets/21waningGibbous3.jpg", "assets/mastering1.jpg"],
   3082021: ["assets/22waningGibbous4.jpg", "assets/mastering2.jpg"],
   3182021: ["assets/23waningGibbous5.jpg", "assets/mastering3.jpg"],
   192021: ["assets/24thirdQuarter1.jpg", "assets/live1.jpg"],
   292021: ["assets/25thirdQuarter2.jpg", "assets/live2.jpg"],
   392021: ["assets/26thirdQuarter3.jpg", "assets/live3.jpg"],
   492021: ["assets/27waningCrescent1.jpg", "assets/visuals1.jpg"],
   592021: ["assets/28waningCrescent2.jpg", "assets/visuals2.jpg"],
   692021: ["assets/29waningCrescent3.jpg", "assets/visuals3.jpg"],
   792021: ["assets/0newMoon1.jpg", "assets/composition1.jpg"],
   892021: ["assets/2newMoon3.jpg", "assets/composition3.jpg"],
   992021: ["assets/3newMoon4.jpg", "assets/soundDesign1.jpg"],
   1092021: ["assets/4newMoon5.jpg", "assets/soundDesign2.jpg"],
   1192021: ["assets/5waxingCrescent1.jpg", "assets/record1.jpg"],
   1292021: ["assets/6waxingCrescent2.jpg", "assets/record2.jpg"],
   1392021: ["assets/7firstQuarter1.jpg", "assets/production1.jpg"],
   1492021: ["assets/8firstQuarter2.jpg", "assets/production2.jpg"],
   1592021: ["assets/9firstQuarter3.jpg", "assets/production3.jpg"],
   1692021: ["assets/10firstQuarter4.jpg", "assets/production4.jpg"],
   1792021: ["assets/11waxingGibbous1.jpg", "assets/arrangement1.jpg"],
   1892021: ["assets/12waxingGibbous2.jpg", "assets/arrangement2.jpg"],
   1992021: ["assets/13waxingGibbous3.jpg", "assets/arrangement3.jpg"],
   2092021: ["assets/14fullMoon1.jpg", "assets/mixdown1.jpg"],
   2192021: ["assets/15fullMoon2.jpg", "assets/mixdown2.jpg"],
   2292021: ["assets/16fullMoon3.jpg", "assets/mixdown3.jpg" ],
   2392021: ["assets/17fullMoon4.jpg", "assets/mixdown4.jpg"],
   2492021: ["assets/18fullMoon5.jpg", "assets/mixdown5.jpg"],
   2592021: ["assets/19waningGibbous1.jpg", "assets/break1.jpg"],
   2692021: ["assets/20waningGibbous2.jpg", "assets/break2.jpg"],
   2792021: ["assets/21waningGibbous3.jpg", "assets/mastering1.jpg"],
   2892021: ["assets/22waningGibbous4.jpg", "assets/mastering2.jpg"],
   2992021: ["assets/23waningGibbous5.jpg", "assets/mastering3.jpg"],
   3092021: ["assets/24thirdQuarter1.jpg", "assets/live1.jpg"],
   1102021: ["assets/25thirdQuarter2.jpg", "assets/live2.jpg"],
   2102021: ["assets/26thirdQuarter3.jpg", "assets/live3.jpg"],
   3102021: ["assets/27waningCrescent1.jpg", "assets/visuals1.jpg"],
   4102021: ["assets/28waningCrescent2.jpg", "assets/visuals2.jpg"],
   5102021: ["assets/29waningCrescent3.jpg", "assets/visuals3.jpg"],
   6102021: ["assets/0newMoon1.jpg", "assets/composition1.jpg"],
   7102021: ["assets/1newMoon2.jpg", "assets/composition2.jpg"],
   8102021: ["assets/2newMoon3.jpg", "assets/composition3.jpg"],
   9102021: ["assets/3newMoon4.jpg", "assets/soundDesign1.jpg"],
   10102021: ["assets/4newMoon5.jpg", "assets/soundDesign2.jpg"],
   11102021: ["assets/5waxingCrescent1.jpg", "assets/record1.jpg"],
   12102021: ["assets/6waxingCrescent2.jpg", "assets/record2.jpg"],
   13102021: ["assets/7firstQuarter1.jpg", "assets/production1.jpg"],
   14102021: ["assets/8firstQuarter2.jpg", "assets/production2.jpg"],
   15102021: ["assets/9firstQuarter3.jpg", "assets/production3.jpg"],
   16102021: ["assets/10firstQuarter4.jpg", "assets/production4.jpg"],
   17102021: ["assets/11waxingGibbous1.jpg", "assets/arrangement1.jpg"],
   18102021: ["assets/12waxingGibbous2.jpg", "assets/arrangement2.jpg"],
   19102021: ["assets/13waxingGibbous3.jpg", "assets/arrangement3.jpg"],
   20102021: ["assets/14fullMoon1.jpg", "assets/mixdown1.jpg"],
   21102021: ["assets/15fullMoon2.jpg", "assets/mixdown2.jpg"],
   22102021: ["assets/16fullMoon3.jpg", "assets/mixdown3.jpg" ],
   23102021: ["assets/17fullMoon4.jpg", "assets/mixdown4.jpg"],
   24102021: ["assets/18fullMoon5.jpg", "assets/mixdown5.jpg"],
   25102021: ["assets/19waningGibbous1.jpg", "assets/break1.jpg"],
   26102021: ["assets/20waningGibbous2.jpg", "assets/break2.jpg"],
   27102021: ["assets/21waningGibbous3.jpg", "assets/mastering1.jpg"],
   28102021: ["assets/22waningGibbous4.jpg", "assets/mastering2.jpg"],
   29102021: ["assets/23waningGibbous5.jpg", "assets/mastering3.jpg"],
   30102021: ["assets/24thirdQuarter1.jpg", "assets/live1.jpg"],
   31102021: ["assets/25thirdQuarter2.jpg", "assets/live2.jpg"],
   11120212: ["assets/26thirdQuarter3.jpg", "assets/live3.jpg"],
   21120212: ["assets/27waningCrescent1.jpg", "assets/visuals1.jpg"],
   31120212: ["assets/28waningCrescent2.jpg", "assets/visuals2.jpg"],
   4112021: ["assets/29waningCrescent3.jpg", "assets/visuals3.jpg"],
   5112021: ["assets/0newMoon1.jpg", "assets/composition1.jpg"],
   6112021: ["assets/2newMoon3.jpg", "assets/composition3.jpg"],
   7112021: ["assets/3newMoon4.jpg", "assets/soundDesign1.jpg"],
   8112021: ["assets/4newMoon5.jpg", "assets/soundDesign2.jpg"],
   9112021: ["assets/5waxingCrescent1.jpg", "assets/record1.jpg"],
   10112021: ["assets/6waxingCrescent2.jpg", "assets/record2.jpg"],
   11112021: ["assets/7firstQuarter1.jpg", "assets/production1.jpg"],
   12112021: ["assets/8firstQuarter2.jpg", "assets/production2.jpg"],
   13112021: ["assets/9firstQuarter3.jpg", "assets/production3.jpg"],
   14112021: ["assets/10firstQuarter4.jpg", "assets/production4.jpg"],
   15112021: ["assets/11waxingGibbous1.jpg", "assets/arrangement1.jpg"],
   16112021: ["assets/12waxingGibbous2.jpg", "assets/arrangement2.jpg"],
   17112021: ["assets/13waxingGibbous3.jpg", "assets/arrangement3.jpg"],
   18112021: ["assets/14fullMoon1.jpg", "assets/mixdown1.jpg"],
   19112021: ["assets/15fullMoon2.jpg", "assets/mixdown2.jpg"],
   20112021: ["assets/16fullMoon3.jpg", "assets/mixdown3.jpg" ],
   21112021: ["assets/17fullMoon4.jpg", "assets/mixdown4.jpg"],
   22112021: ["assets/18fullMoon5.jpg", "assets/mixdown5.jpg"],
   23112021: ["assets/19waningGibbous1.jpg", "assets/break1.jpg"],
   24112021: ["assets/20waningGibbous2.jpg", "assets/break2.jpg"],
   25112021: ["assets/21waningGibbous3.jpg", "assets/mastering1.jpg"],
   26112021: ["assets/22waningGibbous4.jpg", "assets/mastering2.jpg"],
   27112021: ["assets/23waningGibbous5.jpg", "assets/mastering3.jpg"],
   28112021: ["assets/24thirdQuarter1.jpg", "assets/live1.jpg"],
   29112021: ["assets/25thirdQuarter2.jpg", "assets/live2.jpg"],
   30112021: ["assets/26thirdQuarter3.jpg", "assets/live3.jpg"],
   11220212: ["assets/27waningCrescent1.jpg", "assets/visuals1.jpg"],
   21220212: ["assets/28waningCrescent2.jpg", "assets/visuals2.jpg"],
   3122021: ["assets/29waningCrescent3.jpg", "assets/visuals3.jpg"],
   4122021: ["assets/0newMoon1.jpg", "assets/composition1.jpg"],
   5122021: ["assets/2newMoon3.jpg", "assets/composition3.jpg"],
   6122021: ["assets/3newMoon4.jpg", "assets/soundDesign1.jpg"],
   7122021: ["assets/4newMoon5.jpg", "assets/soundDesign2.jpg"],
   8122021: ["assets/5waxingCrescent1.jpg", "assets/record1.jpg"],
   9122021: ["assets/6waxingCrescent2.jpg", "assets/record2.jpg"],
   10122021: ["assets/7firstQuarter1.jpg", "assets/production1.jpg"],
   11122021: ["assets/8firstQuarter2.jpg", "assets/production2.jpg"],
   12122021: ["assets/9firstQuarter3.jpg", "assets/production3.jpg"],
   13122021: ["assets/10firstQuarter4.jpg", "assets/production4.jpg"],
   14122021: ["assets/11waxingGibbous1.jpg", "assets/arrangement1.jpg"],
   15122021: ["assets/12waxingGibbous2.jpg", "assets/arrangement2.jpg"],
   16122021: ["assets/13waxingGibbous3.jpg", "assets/arrangement3.jpg"],
   17122021: ["assets/14fullMoon1.jpg", "assets/mixdown1.jpg"],
   18122021: ["assets/15fullMoon2.jpg", "assets/mixdown2.jpg"],
   19122021: ["assets/16fullMoon3.jpg", "assets/mixdown3.jpg" ],
   20122021: ["assets/17fullMoon4.jpg", "assets/mixdown4.jpg"],
   21122021: ["assets/18fullMoon5.jpg", "assets/mixdown5.jpg"],
   22122021: ["assets/19waningGibbous1.jpg", "assets/break1.jpg"],
   23122021: ["assets/20waningGibbous2.jpg", "assets/break2.jpg"],
   24122021: ["assets/21waningGibbous3.jpg", "assets/mastering1.jpg"],
   25122021: ["assets/22waningGibbous4.jpg", "assets/mastering2.jpg"],
   26122021: ["assets/23waningGibbous5.jpg", "assets/mastering3.jpg"],
   27122021: ["assets/24thirdQuarter1.jpg", "assets/live1.jpg"],
   28122021: ["assets/25thirdQuarter2.jpg", "assets/live2.jpg"],
   29122021: ["assets/26thirdQuarter3.jpg", "assets/live3.jpg"],
   30122021: ["assets/27waningCrescent1.jpg", "assets/visuals1.jpg"],
   31122021: ["assets/28waningCrescent2.jpg", "assets/visuals2.jpg"],
};

function getProfilePicFn(){
   var filename = PicFnDict[findDate()][0];
   return filename;
}

function getStoryPicFn(){
   var filename = PicFnDict[findDate()][1];
   return filename;
}

var profilePicFn = getProfilePicFn();
var storyPicFn = getStoryPicFn();

function updateTPic(){

    
    var profilePic = fs.readFileSync(profilePicFn, {encoding: 'base64'});

    // update profile image
    var postParams = {
        name: 'Profile pic',
        image: profilePic
    }

    T.post('account/update_profile_image', postParams,function (err, data, response)  {    
        console.log(data);
    })
}

const instagramLoginFunction = async () => {
  const client = new Instagram({
    username: process.env.INSTAGRAM_USERNAME,
    password: process.env.INSTAGRAM_PASSWORD, 
  })

  const instagramChangeProfilePicFunction = async () => {
    const profilePic = "./" + profilePicFn;
    console.log(profilePic);
    await client.changeProfilePhoto({photo: `${profilePic}`});
  }

  const instagramUploadStoryFunction = async () => {
    const photo = "./" + storyPicFn;
    await client.uploadPhoto({ photo: `${photo}`, caption: 'Going live on Youtube and Twitch!', post: 'story' })
  
  }

  await client.login();
  await instagramChangeProfilePicFunction();
  await instagramUploadStoryFunction();
}

instagramLoginFunction();

postTStatus();
updateTPic();


