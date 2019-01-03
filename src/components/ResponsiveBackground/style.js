const imgName = ["home", "media", "carte", "presentation"];
const jpgPath = "./backgrounds/jpg/";

export default imgName.map((img, index) => {
  let paddingTop;
  index !== 0 ? (paddingTop = "60vh") : (paddingTop = "80vh");
  return {
    paddingTop,
    backgroundImage: "url(" + jpgPath + img + "-lg.jpg)",

    "@media(maxWidth: 900px)": {
      backgroundImage: "url(" + jpgPath + img + "-md.jpg)"
    },
    "@media(maxWidth: 480px)": {
      backgroundImage: "url(" + jpgPath + img + "-sm.jpg)"
    }
  };
});
