$("document").ready(function(){
    //Enable Form Input
    $("#email").click(function(){$(this).removeAttr("readonly"); });
    $("#password").click(function(){$(this).removeAttr("readonly"); });
    $("#password2").click(function(){$(this).removeAttr("readonly"); });

    

    //Check If Email Exist And Send Verification Code
    $('#emailCon').submit(function(e){
            e.preventDefault()
            $('#submit-btn').removeClass("gradient-highlight");
            $('#submit-btn').addClass("btn-secondary");
            $('#submit-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
            
            axios.post("/route/reset",{
                email: $("#email").val()
            })
             .then(() => {
                swal('Alert!!',"A Verification Code Have Been Sent To Your Email Address, Please Check And Provide The Code To Continue.","success");
                $("#emailCon").hide();
                $("#verCon").show();
                $("#veremail").val($("#email").val());
             })
             .catch((error) => {
                if(error.response.status === 404){
                    swal('Alert!!',`${error.response.data.message}`,"error");
                } else if(error.response.status === 400){
                    swal('Alert!!',`${error.response.data.message}`,"error");
                } else {
                    swal('Alert!!',`Unknow Error, Please Contact Our Customer Support.`,"error");
                }

                $('#submit-btn').removeClass("btn-secondary");
                $('#submit-btn').addClass("gradient-highlight");
                $('#submit-btn').html("Recover Password");
            })
        });

        //Verify Email Code And Allow Password Update
        $('#verCon').submit(function(e){
            e.preventDefault()
            $('#submit-btn2').removeClass("gradient-highlight");
            $('#submit-btn2').addClass("btn-secondary");
            $('#submit-btn2').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
            
            
            axios.post("/route/verify",{
                email: $("#email").val(),
                code: $("#vercode").val()
            })
             .then(() => {
                swal('Alert!!',"Code Verified, Please Enter Your New Password Below.","success");
                $("#emailCon").hide();
                $("#verCon").hide();
                $("#keyCon").show();
                $("#keyemail").val($("#email").val());
                $("#keycode").val($("#vercode").val());
             })
             .catch((error) => {
                if(error.response.status === 404){
                    swal('Alert!!',"Incorrect Code Provided, Please Verify Details And Try Again.","error");
                } else if(error.response.status === 400){
                    swal('Alert!!',`${error.response.data.message}`,"error");
                } else {
                    swal('Alert!!',"Unknow Error, Please Contact Our Customer Support.","error");
                }

               $('#submit-btn2').removeClass("btn-secondary");
                $('#submit-btn2').addClass("gradient-highlight");
                $('#submit-btn2').html("Verify Code");
            })
        });

        //Update User Password``````````
        $('#keyCon').submit(function(e){
            e.preventDefault()

            //Validate Password
            $msg=""; 
            if($("#password").val() != $("#password2").val()){$msg="New Password & Retyped Password Don't Match.";}
            if($("#password").val().length > 15){$msg="Password should not be more than 15 character.";}
            if($("#password").val().length < 8){$msg="Password should be at least 8 character.";}

            if($msg != ""){swal("Alert!!",$msg,"info");  $msg=""; return; }

            $('#submit-btn2').removeClass("gradient-highlight");
            $('#submit-btn2').addClass("btn-secondary");
            $('#submit-btn2').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
            
             axios.put("/route/update",{
                email: $("#email").val(),
                password: $("#password").val()
            })
             .then(() => {
                swal('Alert!!',"Password Updated Successfully, You Can Now Login With Your Details.","success");
                $("#verCon").hide();
                $("#keyCon").hide();
                $("#emailCon").show();
                $("#emailCon")[0].reset();
                $("#keyCon")[0].reset();
                $("#verCon")[0].reset();
                window.location.replace("/");
             })
             .catch((error) => {
                if(error.response.status === 404){
                    swal('Alert!!',`${error.response.data.message}`,"error");
                } else if(error.response.status === 400){
                    swal('Alert!!',`${error.response.data.message}`,"error");
                } else {
                    swal('Alert!!',"Unknow Error, Please Contact Our Customer Support.","error");
                }

              $('#submit-btn2').removeClass("btn-secondary");
                $('#submit-btn2').addClass("gradient-highlight");
                $('#submit-btn2').html("Verify Code");

            });
        });

    });