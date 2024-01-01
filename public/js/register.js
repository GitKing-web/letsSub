$("document").ready(function(){

    $("#email").click(function(){$(this).removeAttr("readonly"); });
    $("#phone").click(function(){$(this).removeAttr("readonly"); });
    $("#password").click(function(){$(this).removeAttr("readonly"); });
    $("#cpassword").click(function(){$(this).removeAttr("readonly"); });

    $("#next-btn").click(function(){
        
        $msg="";
        
        $('#next-btn').removeClass("gradient-highlight");
        $('#next-btn').addClass("btn-secondary");
        $('#next-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
            
        
        if($("#account").val() == "" || $("#account").val() == " "){$msg="Please Select Account Type.";}
        if($("#email").val() == "" || $("#email").val() == " "){$msg="Please Enter Email.";}
        if($("#phone").val() == "" || $("#phone").val() == " "){$msg="Please Enter Phone Number.";}
        if($("#lname").val() == "" || $("#lname").val() == " "){$msg="Please Enter Last Name.";}
        if($("#fname").val() == "" || $("#fname").val() == " "){$msg="Please Enter First Name.";}
        
        
        

        if($msg != ""){
            
            swal("Alert!!",$msg,"info");

            $('#next-btn').removeClass("btn-secondary");
            $('#next-btn').addClass("gradient-highlight");
            $('#next-btn').html("Continue");
            
            return;
        }

        $("#regDiv").hide();
        $("#nextregDiv").show();

    });


    //Registration Form
    $('#reg-form').submit(function(e){
            e.preventDefault();
            $msg=""; 
            if($("#password").val().length > 15){$msg="Password should not be more than 15 character.";}
            if($("#password").val().length < 8){$msg="Password should be at least 8 character.";}
            if($("#password").val() == $("#phone").val()){$msg="You can't use your phone number as password.";}
            if($("#password").val() == "" || $("#password").val() == " "){$msg="Please Enter Password.";}
            if($("#state").val() == "" || $("#state").val() == " "){$msg="Please Select State.";}
            if(($("#password").val()) != ($("#cpassword").val())){$msg="Password Is Different From Confirm Password.";}
            

            if($msg != ""){swal("Alert!!",$msg,"info");  $msg=""; return; }
            
            $('#submit-btn').removeClass("gradient-highlight");
            $('#submit-btn').addClass("btn-secondary");
            $('#submit-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
            
            axios.post("/route/register",{
                    fname: $("#fname").val(),
                    lname: $("#lname").val(),
                    email: $("#email").val(),
                    phone_number: $("#phone").val(),
                    password: $("#password").val(),
                    transaction_pin: $("#transpin").val(),
                    state: $("#state").val()
            })
             .then((data) => {
                swal('Alert!!',"Registration Succesfull","success");
                setTimeout(function(){
                    location.replace('/')
                },1000);

                $('#submit-btn').removeClass("btn-secondary");
                $('#submit-btn').addClass("gradient-highlight");
                $('#submit-btn').html("Register");

                $('#next-btn').removeClass("btn-secondary");
                $('#next-btn').addClass("gradient-highlight");
                $('#next-btn').html("Register");
             })
             .catch((error) => {
                if(error.response.status === 403){
                    swal('Alert!!',"Email & Phone Number Already Exist.","error");
                    $("#nextregDiv").hide(); $("#regDiv").show();
                } else if(error.response.status === 400){
                    swal('Alert!!',"An Error Occurred While Creating Account Please Try Again Later.","error");
                    $("#nextregDiv").hide(); $("#regDiv").show();
                } else if(res.response.status === 422){
                    swal('Alert!!',"All Fields Are Required.","warn");
                    $("#nextregDiv").hide(); $("#regDiv").show();
                } else {
                    swal('Alert!!',"Unknow Error, Please Contact Admin","error");
                }

                $('#submit-btn').removeClass("btn-secondary");
                $('#submit-btn').addClass("gradient-highlight");
                $('#submit-btn').html("Register");

                $('#next-btn').removeClass("btn-secondary");
                $('#next-btn').addClass("gradient-highlight");
                $('#next-btn').html("Register");
             });
                    
        });
});
