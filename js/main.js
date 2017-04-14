$('.Photos_wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});

	$(document).ready(function(){
    $("#Search").keyup(function(){
			var filter = $(this).val();
			    $(".Photos_wrapper a").each(function(){
				// If the list item does not contain the text phrase fade it out
            if ($(this).attr('title').search(filter) < 0) {
                $(this).hide(600);

            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show(600);
                //count++;
            }
        });

        // Update the count
        //var numberItems = count;
        //$("#filter-count").text("Number of Comments = "+count);
    });
});
