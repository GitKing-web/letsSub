$("document").ready(function(){

    $("#phone").click(function(){$(this).removeAttr("readonly"); });
    $("#password").click(function(){$(this).removeAttr("readonly"); });

    $('#login-form').submit(function(e){
            e.preventDefault()
            $('#submit-btn').removeClass("gradient-highlight");
            $('#submit-btn').addClass("btn-secondary");
            $('#submit-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
            
           axios.post("/route/login",{
                phone: $("#phone").val(),
                password:$("#password").val()
            })
            .then((res) => {
                swal('Alert!!',"Login Succesfull","success");
                setTimeout(function(){
                    location.replace('/dashboard')
                },4000);
                $('#submit-btn').removeClass("btn-secondary");
                $('#submit-btn').addClass("gradient-highlight");
                $('#submit-btn').html("Login");
            })
            .catch((error) => {
                if(error.response.status === 401){
                    swal('Alert!!',`${error.response.data.message}`,"error");
                } else if(error.response.status === 400){
                    swal('Alert!!',`${error.response.data.message}`,"error");
                } else if(error.response.status === 405){
                    swal('Alert!!',`${error.response.data.message}`,"error");
                } else {
                    swal('Alert!!',"Unknow Error, Please Contact Admin","error");
                }
                $('#submit-btn').removeClass("btn-secondary");
                $('#submit-btn').addClass("gradient-highlight");
                $('#submit-btn').html("Login");
            })
        });
});
