$("document").ready(function(){
        
        //Dispaly Home Notification
                
        $("#thetranspin").val(null);

        $("#hideEye").click(function(){
            $("#hideEyeDiv").show(); $("#openEyeDiv").hide();
            $("#openEye").show(); $("#hideEye").hide();
        });

        $("#openEye").click(function(){
            $("#openEyeDiv").show(); $("#hideEyeDiv").hide();
            $("#hideEye").show(); $("#openEye").hide();
        });

        $(".the-submit-form").submit(function(){
            $('.the-form-btn').removeClass("gradient-highlight");
            $('.the-form-btn').addClass("btn-secondary");
            $('.the-form-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
        });
});
