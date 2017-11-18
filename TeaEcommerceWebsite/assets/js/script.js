// toggles the search button..
$('#buttonsearch').click(function(){
				$('#formsearch').slideToggle( "fast",function(){
					 $( '#content' ).toggleClass( "moremargin" );
				} );
				$('#searchbox').focus()
				$('.openclosesearch').toggle();
		});
// changes the price..
$(document).ready(function () {
	$('.price-option').change(function(){
        var price = parseFloat($('.price').data('base-price'));

        $('.price-option').each(function(i, el) {
            price += parseFloat($('option:selected', el).data('price'));
        });

        $('.price span').text(price.toFixed(2));
	});
});

//validates if the customer seleceted a size or not...
function Validate() {
	var selectSize = document.getElementById("selectSize");
	if (selectSize.value == 0) {
		alert("Please select a size!");
		return false;
	}
	return  true;
}
