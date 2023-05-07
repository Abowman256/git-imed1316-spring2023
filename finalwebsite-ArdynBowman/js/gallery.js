// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("ready!");

  $("#art-gallery").nanogallery2({
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom",
      display: false
    },
    thumbnnailHoverEffect2: "imageScaleIn80|imageSepiaOff|labelAppear75",
    thumbnailAlignment: "center",
    thumbnailOpenImage: true
  });
});
