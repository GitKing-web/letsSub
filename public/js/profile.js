$("document").ready(function(){
        
        //Update Profile Password
        $("#passForm").submit(function(e){
            e.preventDefault();

            if($("#new-pass").val() != $("#retype-pass").val()){
                swal("Error!","New Password & Retype Password Don't Match.","error");
                return 0;
            }

            $('#update-pass-btn').removeClass("gradient-highlight");
            $('#update-pass-btn').addClass("btn-secondary");
            $('#update-pass-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Updating ...');
            
            
            $.ajax({
                url:'/update-pass',
                data: new FormData($(this)[0]),
                cache: false,
                contentType: false,
                processData: false,
                method: 'POST',
                type: 'POST',
                success:function(resp){
                    console.log(resp);
                    if(resp == 0){
                        swal('Alert!!',"Password Updated Successfully.","success");
                        $("#old-pass").val("");
                        $("#new-pass").val("");
                        $("#retype-pass").val("");
                    }
                    else if(resp == 1){
                        swal('Alert!!',"Old Password Is Incorrect.","error");
                        $("#old-pass").val("");
                        $("#new-pass").val("");
                        $("#retype-pass").val("");
                    }
                    else{
                        swal('Alert!!',"Unknow Error, Please Contact Our Customer Support","error");
                    }

                    $('#update-pass-btn').removeClass("btn-secondary");
                    $('#update-pass-btn').addClass("gradient-highlight");
                    $('#update-pass-btn').html("Update Password");

                }
            });

        });

        //Update Transaction Pin
        $("#pinForm").submit(function(e){
            e.preventDefault();

            if($("#new-pin").val() != $("#retype-pin").val()){
                swal("Error!","New Pin & Retype Pin Don't Match.","error");
                return 0;
            }

            if($("#old-pin").val().length < 4){$(this).val(null); swal("Opps!!","Pin Length Should Be Four Digits.","info"); return;}
            if($("#new-pin").val().length < 4){$(this).val(null); swal("Opps!!","Pin Length Should Be Four Digits.","info"); return;}
            if($("#retype-pin").val().length < 4){$(this).val(null); swal("Opps!!","Pin Length Should Be Four Digits.","info"); return;}

            $('#update-pin-btn').removeClass("gradient-highlight");
            $('#update-pin-btn').addClass("btn-secondary");
            $('#update-pin-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Updating ...');
            
            
            $.ajax({
                url:'update-pin',
                data: new FormData($(this)[0]),
                cache: false,
                contentType: false,
                processData: false,
                method: 'POST',
                type: 'POST',
                success:function(resp){
                    console.log(resp);
                    if(resp == 0){
                        swal('Alert!!',"Pin Updated Successfully.","success");
                        $("#old-pin").val("");
                        $("#new-pin").val("");
                        $("#retype-pin").val("");
                    }
                    else if(resp == 1){
                        swal('Alert!!',"Old Pin Is Incorrect.","error");
                        $("#old-pin").val("");
                        $("#new-pin").val("");
                        $("#retype-pin").val("");
                    }
                    else{
                        swal('Alert!!',"Unknow Error, Please Contact Our Customer Support","error");
                    }

                    $('#update-pin-btn').removeClass("btn-secondary");
                    $('#update-pin-btn').addClass("gradient-highlight");
                    $('#update-pin-btn').html("Update Pin");

                }
            });

        });

        $("#old-pin").on("keyup",function(){
            if(isNaN($(this).val())){$(this).val(null); swal("Opps!!","Please Enter A Numeric Value.","info"); }
        });

        $("#new-pin").on("keyup",function(){
            if(isNaN($(this).val())){$(this).val(null); swal("Opps!!","Please Enter A Numeric Value.","info"); }
        });

        $("#retype-pin").on("keyup",function(){
            if(isNaN($(this).val())){$(this).val(null); swal("Opps!!","Please Enter A Numeric Value.","info"); }
        });
});