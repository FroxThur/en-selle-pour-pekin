const imgName = [12, 3, 9, 7];
const jpgPath = "assets/img/backgrounds/jpg/bg";
const webpPath = "assets/img/backgrounds/webp/bg";
import BgImgBikeLg from "assets/img/backgrounds/bg12x1440.jpg";

export default imgName.map(img => {
  return {
    noWebp: {
      backgroundImage: "url(" + import(jpgPath + img + "x1440.jpg") + ")",
      "@media(max-width: 900px)": {
        backgroundImage: "url(" + import(jpgPath + img + "x900.jpg") + ")"
      },
      "@media(max-width: 480px)": {
        backgroundImage: "url(" + import(jpgPath + img + "x480.jpg") + ")"
      }
    },
    webp: {
      backgroundImage: "url(" + import(webpPath + img + "x1440.jpg") + ")",
      "@media(max-width: 900px)": {
        backgroundImage: "url(" + import(webpPath + img + "x900.jpg") + ")"
      },
      "@media(max-width: 480px)": {
        backgroundImage: "url(" + import(webpPath + img + "x480.jpg") + ")"
      }
    }
  };
});

backgroundImg = {
  backGroundImg0: {
    noWebp: {
      backgroundImage: "url(" + BgImgBikeLg + ")",
      "@media(max-width: 900px)": {
        backgroundImage: "url(" + BgImgBikeMd + ")"
      },
      "@media(max-width: 480px)": {
        backgroundImage: "url(" + BgImgBikeSm + ")"
      }
    }
  },
  backGroundImg1: {
    backgroundImage: "url(" + BgImgRoadLg + ")",
    "@media(max-width: 900px)": {
      backgroundImage: "url(" + BgImgRoadMd + ")"
    },
    "@media(max-width: 480px)": {
      backgroundImage: "url(" + BgImgRoadSm + ")"
    }
  },
  backGroundImg2: {
    backgroundImage: "url(" + BgImgNightLg + ")",
    "@media(max-width: 900px)": {
      backgroundImage: "url(" + BgImgNightMd + ")"
    },
    "@media(max-width: 480px)": {
      backgroundImage: "url(" + BgImgNightSm + ")"
    }
  },
  backGroundImg3: {
    backgroundImage: "url(" + BgImgLightLg + ")",
    "@media(max-width: 900px)": {
      backgroundImage: "url(" + BgImgLightMd + ")"
    },
    "@media(max-width: 480px)": {
      backgroundImage: "url(" + BgImgLightSm + ")"
    }
  }
};
