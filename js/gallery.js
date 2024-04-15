// A $( document ).ready() block.
$(document).ready(function () {
    //sconsole.log("ready!");



    $("#blinn-gallery").nanogallery2({
        thumbnailWidth: "300",
        thumbnailHeight: "auto",
        thumbnailBorderVertical: 0,
        thumbnailBorderHorizontal: 0,
        thumbnailLabel: {
            position: "overImageOnBottom",
            display: false
        },
        thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|labelAppear75",
        thumbnailGutterWidth: 20,
        thumbnailGutterHeight: 20,
        thumbnailAllignment: "center",
        thumbnailOpenImage: true
    });
});
