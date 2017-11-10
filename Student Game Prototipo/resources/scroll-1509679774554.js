(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-b6ad7faf-d328-45bf-ba2e-ad50a96c3e4f .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-302babc1-1c54-4ae5-9a19-f0f9e7abdbcc .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);