var CronJob = require("cron").CronJob;
var fs = require("fs");
var moment = require("moment");

new CronJob("5 0 * * *", () => {
  console.log("You will see this message every second");
});

//Date and hour in french
moment.locale("fr");


var content;
// First I want to read the file
fs.readFile('assets/FBData.json', (err, data) => {
    if (err) {
        throw err;
    }
    content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    processFile();          // Or put the next step in a function and invoke it
});

function processFile() {
    console.log(content);
}


const RawFBData = fs.readFileSync("assets/FBData.json");
// Define to JSON type
const JsonFBData = JSON.parse(RawFBData).albums.data;

/*albums contain multiple album
album contain multiple photo
photo contain multiple photoRes*/
let mediaData = JsonFBData.map(album => {
  let albumTransform = album;
  albumTransform.updated_time = moment(albumTransform.updated_time);
  delete albumTransform.id;
  albumTransform.type = "photos_album";
  albumTransform.photos = album.photos.data.map(photo => {
    let photoResLg = photo.images[0]; //Large
    let photoResMd = photo.images.filter(image => image.width <= 1080)[0]; //medium
    let photoResSm = photo.images.filter(image => image.width <= 720)[0]; //small}

    if (photo.width > photo.height) {
      //landscape photo
      photoResLg = photo.images[0]; //Large
      photoResMd = photo.images.filter(image => image.width <= 1080)[0]; //medium
      photoResSm = photo.images.filter(image => image.width <= 720)[0]; //small}
    } else {
      //portrait photo
      photoResLg = photo.images[0]; //Large
      photoResMd = photo.images.filter(image => image.height < 1080)[0]; //medium
      photoResSm = photo.images.filter(image => image.height < 720)[0]; //small}
    }

    if (album.name === "Timeline Photos" || album.name === "Mobile Uploads")
      return {
        name: photo.name,
        updated_time: moment(photo.updated_time).format("LLLL"),
        height: photo.height,
        width: photo.width,
        photoResLg,
        photoResMd,
        photoResSm
      };
    else
      return {
        name: "",
        updated_time: moment(photo.updated_time).format("LLLL"),
        height: photo.height,
        width: photo.width,
        photoResLg,
        photoResMd,
        photoResSm
      };
  });
  return albumTransform;
});

//merge Timeline Photos and Mobile Uploads to create logBook

const indexTimelinePhoto = mediaData.findIndex(album => {
  return album.name === "Timeline Photos";
});
const TimelinePhoto = mediaData.splice(indexTimelinePhoto, 1)[0];

const indexMobileUploads = mediaData.findIndex(album => {
  return album.name === "Mobile Uploads";
});
const MobileUploads = mediaData.splice(indexMobileUploads, 1)[0];

const logBook = {
  name: "Carnet de voyage",
  photo_count: TimelinePhoto.photo_count + MobileUploads.photo_count,
  description: "Photos d'un instant",
  updated_time: TimelinePhoto.updated_time,
  type: TimelinePhoto.type,
  photos: [...TimelinePhoto.photos, ...MobileUploads.photos]
};
mediaData = [logBook, ...mediaData];

//remove Profile picture and cover photos
mediaData.splice(
  mediaData.findIndex(album => {
    return album.name === "Profile Pictures" || album.name === "Cover Photos";
  })
);

//at this point, Facebook albums are correctly ordered in mediaData
//We are now putting YouTube videos in mediaData

const RawYTData = fs.readFileSync("assets/YTData.json");
// Define to JSON type
const JsonYTData = JSON.parse(RawYTData).items;

const YTData = JsonYTData.map(item => {
  return {
    name: item.snippet.title,
    description: item.snippet.description.split("\n")[0],
    updated_time: moment(item.snippet.publishedAt),
    type: "YT_video",
    videoId: item.contentDetails.upload.videoId
  };
});

mediaData = [...mediaData, ...YTData];

mediaData.sort((prev, next) => {
  return moment(prev.updated_time).isBefore(next.updated_time);
});

mediaData.map(media => {
  media.updated_time = media.updated_time.format("LLL");
  return media;
});

module.exports = mediaData;
