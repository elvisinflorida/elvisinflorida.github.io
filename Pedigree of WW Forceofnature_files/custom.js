window.addEventListener("load", function(event) {
lazyload();
});

$(document).ready(function() {

$( ".stud_tabs" ).click(function() {
 //$('.stud_video').trigger('pause');
$("video").each(function () { this.pause() });
});



//$("li.search-li").click(function(e){
// alert('debug'); 
//     e.stopPropagation();
//})


   $('.whelp-contact-link').click(function(){
     //alert($(this).attr("id"));
     var id = '#whelp-contact-link-wrapper-' + $(this).attr("id"); 
     $(id).toggleClass('show');
   });

  $("input#whelp_bdate").datepicker({ dateFormat: 'yy-mm-dd' });


$('.whelp-register-link').click(function(){
  var id = '#whelp-nonmeber-register-' + $(this).attr("id"); 
  $(id).dialog({width: 700,height: 250});
});



        $(".fm-rsavebtn").click(function(){
            var id = $(this).data('raceid');
            var type = 'fm-race-update';
            var going = $("#edit-input-"+id).val();

            // AJAX Request
            $.ajax({
                url: '/management/ajax/utilities.php',
                type: 'post',
                data: {id:id,type:type,going:going},
                dataType: 'json',
                success: function(data){
                    $("#fm-rsavebtn-"+data[1]).text(data[0]);
                    $("#fm-rsavebtn-"+data[1]).css("color","green");
                },
                error: function(data){
                    alert("error : " + JSON.stringify(data));
                }
            });
        });
// State implementation for advertisements(AUSTRALIA)
       $('#ads-country').change(function(){
           var data= $(this).val();
           //console.log(data);
           if(data==1){          
             $('#tr-state').show();
           }else{
             $('#tr-state').hide();
           }
           
         });


// County implementation for advertisements(AUSTRALIA)
if($('#ads-country').val() ==2){
$('#tr-county').show();
}

       $('#ads-country').change(function(){
           var data= $(this).val();
           //console.log(data);
           if(data==2){
             $('#tr-postcode').hide();
             $('#tr-county').show();
           }else{
             $('#tr-postcode').show();
             $('#tr-county').hide(); 
           }

         });

// Home nation implementation for UK
         $('#ads-country').change(function(){
           var data= $(this).val();
           //console.log(data);
           if(data==4){
             $('#tr-hn').show();
           }else{
             $('#tr-hn').hide();
             $('#tr-uk-county').hide();
             $('#tr-sc-county').hide();
             $('#tr-ws-county').hide();
           }

         });


$('input[type=radio][name=uk_hn_radio]').change(function(){
           var hn_county= $(this).val();
           console.log(hn_county);
           if(hn_county==1){
             $('#tr-uk-county').show();
             $('#tr-sc-county').hide();
             $('#tr-ws-county').hide();
           }else if(hn_county==2){
             $('#tr-uk-county').hide();
             $('#tr-sc-county').show();
             $('#tr-ws-county').hide();
           }else if(hn_county==3){
             $('#tr-uk-county').hide();
             $('#tr-sc-county').hide();
             $('#tr-ws-county').show();
           }else{
             $('#tr-uk-county').hide();
             $('#tr-sc-county').hide();
             $('#tr-ws-county').hide();
           }

});




});
