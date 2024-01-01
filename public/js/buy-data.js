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
                url:'home/includes/route.php?update-pass',
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
                url:'home/includes/route.php?update-pin',
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

        
        // ----------------------------------------------------------------------------
        // Airtime Management
        // ----------------------------------------------------------------------------

        $("#transpinbtn").click(function(){
            let actionbtn = $(this).attr("action-btn");
            $("#transkey").val($("#thetranspin").val());
            $("#"+actionbtn).click();
        });

        $("#networktype").on("change",function(){
            $("#airtimeamount").val(null);
            $("#amounttopay").val(null);
            $("#discount").val(null);
        });

        $("#airtimeamount").on("keyup",function(){
            var airtimediscount = '[{"pId":"1","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"2","name":"1GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"3","name":"2GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"4","name":"3GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"5","name":"5GB","price":"920","userprice":"920","agentprice":"900","vendorprice":"900","planid":"40","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"6","name":"10GB","price":"1850","userprice":"1850","agentprice":"1820","vendorprice":"1820","planid":"41","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"7","name":"50MB","price":"20","userprice":"20","agentprice":"20","vendorprice":"20","planid":"43","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"8","name":"150 MB","price":"40","userprice":"40","agentprice":"30","vendorprice":"30","planid":"44","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"9","name":"250 MB","price":"50","userprice":"50","agentprice":"45","vendorprice":"45","planid":"45","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"10","name":"500 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"42","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"11","name":"1 GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"46","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"12","name":"2 GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"47","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"13","name":"3 GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"48","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"14","name":"5 GB","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"49","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"15","name":"10 GB","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"50","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"16","name":"500 MB SME 2","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"17","name":"1 GB SME 2","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"18","name":"2 GB sME2","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"19","name":"3 GB SME 2","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"20","name":"5 GB SME 2","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"40","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"21","name":"10GB SME 2","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"41","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"22","name":"200 MB","price":"40","userprice":"40","agentprice":"40","vendorprice":"40","planid":"70","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"23","name":"300 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"0","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"24","name":"500 MB","price":"80","userprice":"80","agentprice":"8","vendorprice":"80","planid":"71","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"25","name":"1 GB","price":"180","userprice":"180","agentprice":"170","vendorprice":"170","planid":"72","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"26","name":"2 GB","price":"360","userprice":"360","agentprice":"350","vendorprice":"350","planid":"73","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"27","name":"3 GB","price":"540","userprice":"540","agentprice":"520","vendorprice":"520","planid":"74","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"28","name":"5 GB","price":"900","userprice":"900","agentprice":"850","vendorprice":"850","planid":"75","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"29","name":"10 GB","price":"1800","userprice":"1800","agentprice":"1750","vendorprice":"1750","planid":"76","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"30","name":"100 MB","price":"30","userprice":"30","agentprice":"20","vendorprice":"20","planid":"67","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"31","name":"300MB","price":"70","userprice":"70","agentprice":"60","vendorprice":"60","planid":"66","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"32","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"51","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"33","name":"1 GB","price":"170","userprice":"170","agentprice":"170","vendorprice":"170","planid":"52","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"34","name":"2 GB","price":"340","userprice":"340","agentprice":"340","vendorprice":"340","planid":"53","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"35","name":"5 GB","price":"850","userprice":"850","agentprice":"850","vendorprice":"850","planid":"54","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"36","name":"10 GB","price":"1700","userprice":"1700","agentprice":"1650","vendorprice":"1650","planid":"55","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"37","name":"15 GB","price":"2700","userprice":"2700","agentprice":"2600","vendorprice":"2600","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"38","name":"20 GB","price":"3600","userprice":"3600","agentprice":"3500","vendorprice":"3500","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"40","name":"500 MB","price":"72","userprice":"72","agentprice":"72","vendorprice":"72","planid":"85","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"41","name":"1 GB","price":"120","userprice":"120","agentprice":"120","vendorprice":"120","planid":"86","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"42","name":"2 GB","price":"280","userprice":"280","agentprice":"280","vendorprice":"280","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"43","name":"2GB","price":"475","userprice":"475","agentprice":"475","vendorprice":"475","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"44","name":"3 GB","price":"570","userprice":"570","agentprice":"570","vendorprice":"570","planid":"88","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"45","name":"4GB","price":"760","userprice":"760","agentprice":"760","vendorprice":"760","planid":"89","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"46","name":"10 GB","price":"1900","userprice":"1900","agentprice":"1900","vendorprice":"1900","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"47","name":"15 GB","price":"2850","userprice":"2850","agentprice":"2850","vendorprice":"2850","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"48","name":"20 GB","price":"3800","userprice":"3800","agentprice":"3800","vendorprice":"3800","planid":"0","type":"Gifting","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"50","name":"30 GB","price":"5700","userprice":"5700","agentprice":"5700","vendorprice":"5700","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"}]';
            if(!airtimediscount == ""){airtimediscount=JSON.parse(airtimediscount); }
            var amounttopay=0;
            var discount=0;
            var useraccount = getCookie("loginAccount");
            useraccount=useraccount.replace(/%3D/g,"=");
            useraccount=atob(useraccount);
            useraccount = parseInt(useraccount);
            
            var amount = $("#airtimeamount").val();
            amount = parseInt(amount);
            
            if($("#networkid").val() == "" || $("#networkid").val() == null){
                swal("Opps!!","Please Select A Network First.","info");
                $("#airtimeamount").val(null);
                return 0;
            }

            for (i=0; i< airtimediscount.length; i++){
                if(airtimediscount[i].aNetwork == $("#networkid").val() && airtimediscount[i].aType == $("#networktype").val()){
                    if(useraccount == 3 || useraccount =='3'){discount=airtimediscount[i].aVendorDiscount;}
                    else if(useraccount == 2 || useraccount =='2'){discount=airtimediscount[i].aAgentDiscount;}
                    else{discount=airtimediscount[i].aUserDiscount;}
                    discount=parseInt(discount);
                    amounttopay=(amount * discount)/100;
                    discount=100 - discount;
                }
            }

            $("#amounttopay").val(amounttopay);
            $("#discount").val(discount+"%");

        });


        //Purchase Airtime
        $("#airtimeForm").submit(function(e){
           

            if($("#thetranspin").val() == null || $("#thetranspin").val() == ''){
                e.preventDefault();
                $("#transpinbtn").attr("action-btn","airtime-btn");
                
                let msg = "You are about to purchase an ";
                msg+='"'+$('#networkid').find(":selected").attr('networkname') + '"' + " airtime of ";
                msg+='"' + $("#airtimeamount").val() + '"' + " for the phone number " + '"' + $("#phone").val() +'"';
                msg+=" <br/> Do you wish to continue?"

                $("#continue-transaction-prompt-msg").html(msg);
                $("#continue-transaction-prompt-btn").click();

                return;
            }

            $('#airtime-btn').removeClass("gradient-highlight");
            $('#airtime-btn').addClass("btn-secondary");
            $('#airtime-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
            
        });

        // ----------------------------------------------------------------------------
        // Cable Plan Management
        // ----------------------------------------------------------------------------

        //If provider selected, get plans
        $("#cableid").on("change",function(){
            if($("#cableid").val() == '' || $("#cableid").val() == null){
                swal("Opps!!","Please Select A Provider First.","info"); 
            }
            else{
                let provider = $("#cableid").val();
                let useraccount = getCookie("loginAccount");
                let plans = '[{"pId":"1","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"2","name":"1GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"3","name":"2GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"4","name":"3GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"5","name":"5GB","price":"920","userprice":"920","agentprice":"900","vendorprice":"900","planid":"40","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"6","name":"10GB","price":"1850","userprice":"1850","agentprice":"1820","vendorprice":"1820","planid":"41","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"7","name":"50MB","price":"20","userprice":"20","agentprice":"20","vendorprice":"20","planid":"43","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"8","name":"150 MB","price":"40","userprice":"40","agentprice":"30","vendorprice":"30","planid":"44","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"9","name":"250 MB","price":"50","userprice":"50","agentprice":"45","vendorprice":"45","planid":"45","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"10","name":"500 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"42","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"11","name":"1 GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"46","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"12","name":"2 GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"47","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"13","name":"3 GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"48","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"14","name":"5 GB","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"49","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"15","name":"10 GB","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"50","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"16","name":"500 MB SME 2","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"17","name":"1 GB SME 2","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"18","name":"2 GB sME2","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"19","name":"3 GB SME 2","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"20","name":"5 GB SME 2","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"40","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"21","name":"10GB SME 2","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"41","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"22","name":"200 MB","price":"40","userprice":"40","agentprice":"40","vendorprice":"40","planid":"70","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"23","name":"300 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"0","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"24","name":"500 MB","price":"80","userprice":"80","agentprice":"8","vendorprice":"80","planid":"71","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"25","name":"1 GB","price":"180","userprice":"180","agentprice":"170","vendorprice":"170","planid":"72","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"26","name":"2 GB","price":"360","userprice":"360","agentprice":"350","vendorprice":"350","planid":"73","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"27","name":"3 GB","price":"540","userprice":"540","agentprice":"520","vendorprice":"520","planid":"74","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"28","name":"5 GB","price":"900","userprice":"900","agentprice":"850","vendorprice":"850","planid":"75","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"29","name":"10 GB","price":"1800","userprice":"1800","agentprice":"1750","vendorprice":"1750","planid":"76","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"30","name":"100 MB","price":"30","userprice":"30","agentprice":"20","vendorprice":"20","planid":"67","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"31","name":"300MB","price":"70","userprice":"70","agentprice":"60","vendorprice":"60","planid":"66","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"32","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"51","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"33","name":"1 GB","price":"170","userprice":"170","agentprice":"170","vendorprice":"170","planid":"52","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"34","name":"2 GB","price":"340","userprice":"340","agentprice":"340","vendorprice":"340","planid":"53","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"35","name":"5 GB","price":"850","userprice":"850","agentprice":"850","vendorprice":"850","planid":"54","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"36","name":"10 GB","price":"1700","userprice":"1700","agentprice":"1650","vendorprice":"1650","planid":"55","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"37","name":"15 GB","price":"2700","userprice":"2700","agentprice":"2600","vendorprice":"2600","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"38","name":"20 GB","price":"3600","userprice":"3600","agentprice":"3500","vendorprice":"3500","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"40","name":"500 MB","price":"72","userprice":"72","agentprice":"72","vendorprice":"72","planid":"85","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"41","name":"1 GB","price":"120","userprice":"120","agentprice":"120","vendorprice":"120","planid":"86","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"42","name":"2 GB","price":"280","userprice":"280","agentprice":"280","vendorprice":"280","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"43","name":"2GB","price":"475","userprice":"475","agentprice":"475","vendorprice":"475","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"44","name":"3 GB","price":"570","userprice":"570","agentprice":"570","vendorprice":"570","planid":"88","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"45","name":"4GB","price":"760","userprice":"760","agentprice":"760","vendorprice":"760","planid":"89","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"46","name":"10 GB","price":"1900","userprice":"1900","agentprice":"1900","vendorprice":"1900","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"47","name":"15 GB","price":"2850","userprice":"2850","agentprice":"2850","vendorprice":"2850","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"48","name":"20 GB","price":"3800","userprice":"3800","agentprice":"3800","vendorprice":"3800","planid":"0","type":"Gifting","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"50","name":"30 GB","price":"5700","userprice":"5700","agentprice":"5700","vendorprice":"5700","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"}]';
                let options = "<option value=''>Select Plan</option>";
                let price = 0;

                useraccount=useraccount.replace(/%3D/g,"=");
                useraccount=atob(useraccount);
                useraccount = parseInt(useraccount);

                if(!plans == ""){
                    
                    plans=JSON.parse(plans); 
                   
                    for(i=0; i < plans.length; i++){
                        
                        if(useraccount == 3 || useraccount =='3'){price = plans[i].vendorprice;}
                        else if(useraccount == 2 || useraccount =='2'){price = plans[i].agentprice;}
                        else{price = plans[i].userprice; }

                        if(plans[i].cableprovider == provider){
                            options+= "<option value='"+plans[i].cpId+"' cableprice='"+price+"' planname='"+plans[i].name+" (N"+plans[i].price+")("+plans[i].day+" Days) '>"+plans[i].name+" (N"+plans[i].price+")("+plans[i].day+" Days) </option>";
                        }
        
                    }

                }

                $("#cableplan").html(options);
                $("#amounttopay").val(null);
               
            }
        });

        //If Cable Plan Is Selected, Get And Set The Price
        $("#cableplan").on("change",function(){
            $("#amounttopay").val("N"+$('#cableplan').find(":selected").attr('cableprice'));
            $("#cabledetails").val($('#cableplan').find(":selected").attr('planname'));
        });

        //Verify cableplan
        $("#verifycableplanForm").submit(function(e){
           
           $('#cable-btn').removeClass("gradient-highlight");
           $('#cable-btn').addClass("btn-secondary");
           $('#cable-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
           
       });

       //Purchase Cable Plan
       $("#cableplanForm").submit(function(e){
           

           if($("#thetranspin").val() == null || $("#thetranspin").val() == ''){
               e.preventDefault();
               $("#transpinbtn").attr("action-btn","cable-btn");
               
               let msg = "You are about to purchase ";
               let cableplan = $('#cabledetails').val();
               msg+='"'+cableplan+" for the IUC Number " + '"' + $("#iucnumber").val() +'"';
               msg+=" <br/> Do you wish to continue?"

               $("#continue-transaction-prompt-msg").html(msg);
               $("#continue-transaction-prompt-btn").click();

               return;
           }

           $('#cable-btn').removeClass("gradient-highlight");
           $('#cable-btn').addClass("btn-secondary");
           $('#cable-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
           
       });

        // ----------------------------------------------------------------------------
        // Recharge Card Pin Management
        // ----------------------------------------------------------------------------
        $("#rechargepinamount").on("keyup",function(){
            $("#amounttopay").val(null);
            $("#norechargepin").val(null);
        });

        $("#norechargepin").on("keyup",function(){
            
            if($("#rechargepinamount").val() != null || $("#norechargepin").val() != null){
                var airtimediscount = '[{"pId":"1","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"2","name":"1GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"3","name":"2GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"4","name":"3GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"5","name":"5GB","price":"920","userprice":"920","agentprice":"900","vendorprice":"900","planid":"40","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"6","name":"10GB","price":"1850","userprice":"1850","agentprice":"1820","vendorprice":"1820","planid":"41","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"7","name":"50MB","price":"20","userprice":"20","agentprice":"20","vendorprice":"20","planid":"43","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"8","name":"150 MB","price":"40","userprice":"40","agentprice":"30","vendorprice":"30","planid":"44","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"9","name":"250 MB","price":"50","userprice":"50","agentprice":"45","vendorprice":"45","planid":"45","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"10","name":"500 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"42","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"11","name":"1 GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"46","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"12","name":"2 GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"47","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"13","name":"3 GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"48","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"14","name":"5 GB","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"49","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"15","name":"10 GB","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"50","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"16","name":"500 MB SME 2","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"17","name":"1 GB SME 2","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"18","name":"2 GB sME2","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"19","name":"3 GB SME 2","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"20","name":"5 GB SME 2","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"40","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"21","name":"10GB SME 2","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"41","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"22","name":"200 MB","price":"40","userprice":"40","agentprice":"40","vendorprice":"40","planid":"70","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"23","name":"300 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"0","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"24","name":"500 MB","price":"80","userprice":"80","agentprice":"8","vendorprice":"80","planid":"71","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"25","name":"1 GB","price":"180","userprice":"180","agentprice":"170","vendorprice":"170","planid":"72","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"26","name":"2 GB","price":"360","userprice":"360","agentprice":"350","vendorprice":"350","planid":"73","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"27","name":"3 GB","price":"540","userprice":"540","agentprice":"520","vendorprice":"520","planid":"74","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"28","name":"5 GB","price":"900","userprice":"900","agentprice":"850","vendorprice":"850","planid":"75","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"29","name":"10 GB","price":"1800","userprice":"1800","agentprice":"1750","vendorprice":"1750","planid":"76","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"30","name":"100 MB","price":"30","userprice":"30","agentprice":"20","vendorprice":"20","planid":"67","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"31","name":"300MB","price":"70","userprice":"70","agentprice":"60","vendorprice":"60","planid":"66","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"32","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"51","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"33","name":"1 GB","price":"170","userprice":"170","agentprice":"170","vendorprice":"170","planid":"52","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"34","name":"2 GB","price":"340","userprice":"340","agentprice":"340","vendorprice":"340","planid":"53","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"35","name":"5 GB","price":"850","userprice":"850","agentprice":"850","vendorprice":"850","planid":"54","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"36","name":"10 GB","price":"1700","userprice":"1700","agentprice":"1650","vendorprice":"1650","planid":"55","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"37","name":"15 GB","price":"2700","userprice":"2700","agentprice":"2600","vendorprice":"2600","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"38","name":"20 GB","price":"3600","userprice":"3600","agentprice":"3500","vendorprice":"3500","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"40","name":"500 MB","price":"72","userprice":"72","agentprice":"72","vendorprice":"72","planid":"85","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"41","name":"1 GB","price":"120","userprice":"120","agentprice":"120","vendorprice":"120","planid":"86","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"42","name":"2 GB","price":"280","userprice":"280","agentprice":"280","vendorprice":"280","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"43","name":"2GB","price":"475","userprice":"475","agentprice":"475","vendorprice":"475","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"44","name":"3 GB","price":"570","userprice":"570","agentprice":"570","vendorprice":"570","planid":"88","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"45","name":"4GB","price":"760","userprice":"760","agentprice":"760","vendorprice":"760","planid":"89","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"46","name":"10 GB","price":"1900","userprice":"1900","agentprice":"1900","vendorprice":"1900","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"47","name":"15 GB","price":"2850","userprice":"2850","agentprice":"2850","vendorprice":"2850","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"48","name":"20 GB","price":"3800","userprice":"3800","agentprice":"3800","vendorprice":"3800","planid":"0","type":"Gifting","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"50","name":"30 GB","price":"5700","userprice":"5700","agentprice":"5700","vendorprice":"5700","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"}]';
                if(!airtimediscount == ""){airtimediscount=JSON.parse(airtimediscount); }
                var amounttopay=0;
                var discount=0;
                var useraccount = getCookie("loginAccount");
                useraccount=useraccount.replace(/%3D/g,"=");
                useraccount=atob(useraccount);
                useraccount = parseInt(useraccount);
                
                var amount = $("#rechargepinamount").val();
                let quantity = parseInt($("#norechargepin").val());
                    
                amount = parseInt(amount);
                quantity = parseInt(quantity);
                
                if($("#networkid").val() == "" || $("#networkid").val() == null){
                    swal("Opps!!","Please Select A Network First.","info");
                    $("#rechargepinamount").val(null);
                    return 0;
                }

                for (i=0; i< airtimediscount.length; i++){
                    if(airtimediscount[i].aNetwork == $("#networkid").val()){
                        if(useraccount == 3 || useraccount =='3'){discount=airtimediscount[i].aVendorDiscount;}
                        else if(useraccount == 2 || useraccount =='2'){discount=airtimediscount[i].aAgentDiscount;}
                        else{discount=airtimediscount[i].aUserDiscount;}
                        discount=parseInt(discount);
                        if(!(quantity > 0)){quantity=0;}
                        if(!(amount > 0)){amount=0;}
                        amounttopay= amount * quantity;
                        amounttopay=(amounttopay * discount)/100;
                        discount=100 - discount;
                    }
                }

                $("#amounttopay").val(amounttopay);
                $("#discount").val(discount+"%");
            }
            else{$("#amounttopay").val("0");}
        });

        //Purchase Exam Pin
       $("#rechargepinForm").submit(function(e){
           
           if($("#thetranspin").val() == null || $("#thetranspin").val() == ''){
               e.preventDefault();
               $("#transpinbtn").attr("action-btn","rechargepin-btn");
               
               let msg = "You are about to purchase ";
               msg+=$("#norechargepin").val()+' unit of N'+$("#rechargepinamount").val()+' ';
               msg+=$('#networkid').find(":selected").attr('networkname')+" recharge card pin at the price of N"+$("#amounttopay").val()+" with the business name "+$("#businessname").val();
               msg+=" <br/> Do you wish to continue?"

               $("#continue-transaction-prompt-msg").html(msg);
               $("#continue-transaction-prompt-btn").click();

               return;
           }

           $('#rechargepin-btn').removeClass("gradient-highlight");
           $('#rechargepin-btn').addClass("btn-secondary");
           $('#rechargepin-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
           
       });

        // ----------------------------------------------------------------------------
        // Exam Pin Management
        // ----------------------------------------------------------------------------

        $("#examid").on("change",function(){
            $("#amounttopay").val(null);
            $("#examquantity").val(null);
        });

        $("#examquantity").on("keyup",function(){
            
            if($("#examid").val() != null || $("#examquantity").val() != null){
                let price = parseInt($('#examid').find(":selected").attr('providerprice'));
                let quantity =parseInt($("#examquantity").val());
                let amount = 0;
                
                if(!(quantity > 0)){quantity=0;}
                if(!(price > 0)){price=0;}

                amount = price * quantity;

                $("#amounttopay").val("N"+amount);
            }
            else{$("#amounttopay").val("0");}

        });

        //Purchase Exam Pin
       $("#exampinForm").submit(function(e){
           
           if($("#thetranspin").val() == null || $("#thetranspin").val() == ''){
               e.preventDefault();
               $("#transpinbtn").attr("action-btn","exampin-btn");
               
               let msg = "You are about to purchase ";
               let exampindetails = $('#examid').find(":selected").attr('providername');
               msg+=$("#examquantity").val()+' token of  '+exampindetails+' ';
               msg+=" pin at the price of "+$("#amounttopay").val();
               msg+=" <br/> Do you wish to continue?"

               $("#continue-transaction-prompt-msg").html(msg);
               $("#continue-transaction-prompt-btn").click();

               return;
           }

           $('#exampin-btn').removeClass("gradient-highlight");
           $('#exampin-btn').addClass("btn-secondary");
           $('#exampin-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
           
       });


        // ----------------------------------------------------------------------------
        // Electricity Management
        // ----------------------------------------------------------------------------

        //If Amount Input, Get And Set The Price
        $("#meteramount").on("keyup",function(){
            let amount = parseInt($('#meteramount').val());
            let electricitycharges = parseInt($('#electricitycharges').text());
            let amounttopay = amount + electricitycharges;
            $("#amounttopay").val("N"+amounttopay);
            $("#electricitydetails").val($('#electricityid').find(":selected").attr('providername'));
        });

        $("#verifyelectricityplanForm").submit(function(e){
           let amount= parseInt($('#meteramount').val());
           
           if(amount < 1000){
            e.preventDefault();
            swal("Alert!!","Minimum Unit Purchase Is N1000.","error");
            return null;
           }

           $('#electricity-btn').removeClass("gradient-highlight");
           $('#electricity-btn').addClass("btn-secondary");
           $('#electricity-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
           
       });

       //Purchase Electricity Plan
       $("#electricityForm").submit(function(e){
           

           if($("#thetranspin").val() == null || $("#thetranspin").val() == ''){
               e.preventDefault();
               $("#transpinbtn").attr("action-btn","electricity-btn");
               
               let msg = "You are about to purchase ";
               let electricitydetails = $('#electricitydetails').val();
               msg+='"'+electricitydetails+" ("+$("#metertype").val()+") for the Meter Number " + '"' + $("#meternumber").val() +'"';
               msg+=" at the price of "+$("#amounttopay").val();
               msg+=" <br/> Do you wish to continue?"

               $("#continue-transaction-prompt-msg").html(msg);
               $("#continue-transaction-prompt-btn").click();

               return;
           }

           $('#electricity-btn').removeClass("gradient-highlight");
           $('#electricity-btn').addClass("btn-secondary");
           $('#electricity-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
           
       });

        // ----------------------------------------------------------------------------
        // Data Plan Management
        // ----------------------------------------------------------------------------

        //If  notwork selected, empty data type, plan, amount
        $("#networkid").on("change",function(){
            $("#datagroup").val(null);
            $("#dataplan").val(null);
            $("#amounttopay").val(null);

            let sme = $('#networkid').find(":selected").attr('sme');
            let gifting = $('#networkid').find(":selected").attr('gifting');
            let corporate = $('#networkid').find(":selected").attr('corporate');
            let vtu = $('#networkid').find(":selected").attr('vtu');
            let sharesell = $('#networkid').find(":selected").attr('sharesell');
            let networkname = $('#networkid').find(":selected").attr('networkname');
            let thegroup='<option value="">Select Type</option>';

                //Check If Network Is Disabled
                if(sme=="On"){
                    thegroup+='<option value="SME">SME</option>';
                }

                //Check If Network Is Disabled
                if(gifting=="On"){
                   thegroup+='<option value="Gifting">Gifting</option>';
                }

                //Check If Network Is Disabled
                if(corporate=="On"){
                   thegroup+='<option value="Corporate">Corporate</option>';
                }

                //Check If Network Is Disabled
                if(vtu=="On"){
                   thegroup+='<option value="VTU">VTU</option>';
                }

                //Check If Network Is Disabled
                if(sharesell=="On"){
                   thegroup+='<option value="Share And Sell">Share And Sell</option>';
                }
                $("#datagroup").html(thegroup);
                $("#networktype").html(thegroup);
        });

        //If data type selected, get plans
        $("#datagroup").on("change",function(){
            if($("#networkid").val() == '' || $("#networkid").val() == null){
                swal("Opps!!","Please Select A Network First.","info"); 
            }
            else{
                let network = $("#networkid").val();
                let datagroup = $("#datagroup").val();
                let useraccount = getCookie("loginAccount");
                let plans = '[{"pId":"1","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"2","name":"1GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"3","name":"2GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"4","name":"3GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"5","name":"5GB","price":"920","userprice":"920","agentprice":"900","vendorprice":"900","planid":"40","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"6","name":"10GB","price":"1850","userprice":"1850","agentprice":"1820","vendorprice":"1820","planid":"41","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"7","name":"50MB","price":"20","userprice":"20","agentprice":"20","vendorprice":"20","planid":"43","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"8","name":"150 MB","price":"40","userprice":"40","agentprice":"30","vendorprice":"30","planid":"44","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"9","name":"250 MB","price":"50","userprice":"50","agentprice":"45","vendorprice":"45","planid":"45","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"10","name":"500 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"42","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"11","name":"1 GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"46","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"12","name":"2 GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"47","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"13","name":"3 GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"48","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"14","name":"5 GB","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"49","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"15","name":"10 GB","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"50","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"16","name":"500 MB SME 2","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"17","name":"1 GB SME 2","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"18","name":"2 GB sME2","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"19","name":"3 GB SME 2","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"20","name":"5 GB SME 2","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"40","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"21","name":"10GB SME 2","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"41","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"22","name":"200 MB","price":"40","userprice":"40","agentprice":"40","vendorprice":"40","planid":"70","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"23","name":"300 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"0","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"24","name":"500 MB","price":"80","userprice":"80","agentprice":"8","vendorprice":"80","planid":"71","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"25","name":"1 GB","price":"180","userprice":"180","agentprice":"170","vendorprice":"170","planid":"72","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"26","name":"2 GB","price":"360","userprice":"360","agentprice":"350","vendorprice":"350","planid":"73","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"27","name":"3 GB","price":"540","userprice":"540","agentprice":"520","vendorprice":"520","planid":"74","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"28","name":"5 GB","price":"900","userprice":"900","agentprice":"850","vendorprice":"850","planid":"75","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"29","name":"10 GB","price":"1800","userprice":"1800","agentprice":"1750","vendorprice":"1750","planid":"76","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"30","name":"100 MB","price":"30","userprice":"30","agentprice":"20","vendorprice":"20","planid":"67","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"31","name":"300MB","price":"70","userprice":"70","agentprice":"60","vendorprice":"60","planid":"66","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"32","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"51","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"33","name":"1 GB","price":"170","userprice":"170","agentprice":"170","vendorprice":"170","planid":"52","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"34","name":"2 GB","price":"340","userprice":"340","agentprice":"340","vendorprice":"340","planid":"53","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"35","name":"5 GB","price":"850","userprice":"850","agentprice":"850","vendorprice":"850","planid":"54","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"36","name":"10 GB","price":"1700","userprice":"1700","agentprice":"1650","vendorprice":"1650","planid":"55","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"37","name":"15 GB","price":"2700","userprice":"2700","agentprice":"2600","vendorprice":"2600","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"38","name":"20 GB","price":"3600","userprice":"3600","agentprice":"3500","vendorprice":"3500","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"40","name":"500 MB","price":"72","userprice":"72","agentprice":"72","vendorprice":"72","planid":"85","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"41","name":"1 GB","price":"120","userprice":"120","agentprice":"120","vendorprice":"120","planid":"86","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"42","name":"2 GB","price":"280","userprice":"280","agentprice":"280","vendorprice":"280","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"43","name":"2GB","price":"475","userprice":"475","agentprice":"475","vendorprice":"475","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"44","name":"3 GB","price":"570","userprice":"570","agentprice":"570","vendorprice":"570","planid":"88","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"45","name":"4GB","price":"760","userprice":"760","agentprice":"760","vendorprice":"760","planid":"89","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"46","name":"10 GB","price":"1900","userprice":"1900","agentprice":"1900","vendorprice":"1900","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"47","name":"15 GB","price":"2850","userprice":"2850","agentprice":"2850","vendorprice":"2850","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"48","name":"20 GB","price":"3800","userprice":"3800","agentprice":"3800","vendorprice":"3800","planid":"0","type":"Gifting","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"50","name":"30 GB","price":"5700","userprice":"5700","agentprice":"5700","vendorprice":"5700","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"}]';
                let options = "<option value=''>Select Plan</option>";
                let price = 0;
                let networkname = $('#networkid').find(":selected").attr('networkname');

                
                useraccount=useraccount.replace(/%3D/g,"=");
                useraccount=atob(useraccount);
                useraccount = parseInt(useraccount);

                if(!plans == ""){
                    
                    plans=JSON.parse(plans); 
                
                    for(i=0; i < plans.length; i++){
                        
                        if(useraccount == 3 || useraccount =='3'){price = plans[i].vendorprice;}
                        else if(useraccount == 2 || useraccount =='2'){price = plans[i].agentprice;}
                        else{price = plans[i].userprice; }

                        if(plans[i].datanetwork == network && plans[i].type == datagroup){
                            options+= "<option value='"+plans[i].pId+"' dataprice='"+price+"' dataname='"+plans[i].name+" "+plans[i].type+" (N"+price+")("+plans[i].day+" Days) '>"+plans[i].name+" "+plans[i].type+" (N"+price+")("+plans[i].day+" Days)</option>";
                        }
        
                    }

                }

                $("#dataplan").html(options);
                $("#amounttopay").val(null);
               
            }
        });

        //If Data Plan Is Selected, Get And Set The Price
        $("#dataplan").on("change",function(){
            $("#amounttopay").val("N"+$('#dataplan').find(":selected").attr('dataprice'));
        });

        //Purchase Data
        $("#dataplanForm").submit(function(e){
           

           if($("#thetranspin").val() == null || $("#thetranspin").val() == ''){
               e.preventDefault();
               $("#transpinbtn").attr("action-btn","data-btn");
               
               let msg = "You are about to purchase ";
               let dataplan = $('#dataplan').find(":selected").attr('dataname');
               msg+='"'+$('#networkid').find(":selected").attr('networkname') + '" ' + dataplan +" plan of ";
               msg+='"' + $("#amounttopay").val() + '"' + " for the phone number " + '"' + $("#phone").val() +'"';
               msg+=" <br/> Do you wish to continue?"

               $("#continue-transaction-prompt-msg").html(msg);
               $("#continue-transaction-prompt-btn").click();

               return;
           }

           $('#data-btn').removeClass("gradient-highlight");
           $('#data-btn').addClass("btn-secondary");
           $('#data-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
           
       });

       // ----------------------------------------------------------------------------
       // Data Pin
       // ----------------------------------------------------------------------------

       //If data type selected, get plans
       $("#datapingroup").on("change",function(){
           
           if($("#datanetworkid").val() == '' || $("#datanetworkid").val() == null){
               swal("Opps!!","Please Select A Network First.","info"); 
               return 0;
           }
           
           let network = $("#datanetworkid").val();
           let datagroup = $("#datapingroup").val();
           let useraccount = getCookie("loginAccount");
           let plans = '[{"pId":"1","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"2","name":"1GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"3","name":"2GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"4","name":"3GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"5","name":"5GB","price":"920","userprice":"920","agentprice":"900","vendorprice":"900","planid":"40","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"6","name":"10GB","price":"1850","userprice":"1850","agentprice":"1820","vendorprice":"1820","planid":"41","type":"SME","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"7","name":"50MB","price":"20","userprice":"20","agentprice":"20","vendorprice":"20","planid":"43","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"8","name":"150 MB","price":"40","userprice":"40","agentprice":"30","vendorprice":"30","planid":"44","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"9","name":"250 MB","price":"50","userprice":"50","agentprice":"45","vendorprice":"45","planid":"45","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"10","name":"500 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"42","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"11","name":"1 GB","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"46","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"12","name":"2 GB","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"47","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"13","name":"3 GB","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"48","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"14","name":"5 GB","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"49","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"15","name":"10 GB","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"50","type":"Corporate","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"16","name":"500 MB SME 2","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"36","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"17","name":"1 GB SME 2","price":"185","userprice":"185","agentprice":"180","vendorprice":"180","planid":"37","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"18","name":"2 GB sME2","price":"370","userprice":"370","agentprice":"360","vendorprice":"360","planid":"38","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"19","name":"3 GB SME 2","price":"555","userprice":"555","agentprice":"550","vendorprice":"550","planid":"39","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"20","name":"5 GB SME 2","price":"925","userprice":"925","agentprice":"920","vendorprice":"920","planid":"40","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"21","name":"10GB SME 2","price":"1850","userprice":"1850","agentprice":"1800","vendorprice":"1800","planid":"41","type":"Gifting","datanetwork":"1","day":"30","nId":"1","networkid":"1","smeId":"1","giftingId":"1","corporateId":"1","vtuId":"1","sharesellId":"1","network":"MTN","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"On","giftingStatus":"On","corporateStatus":"On","datapinStatus":"Off"},{"pId":"22","name":"200 MB","price":"40","userprice":"40","agentprice":"40","vendorprice":"40","planid":"70","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"23","name":"300 MB","price":"85","userprice":"85","agentprice":"85","vendorprice":"85","planid":"0","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"24","name":"500 MB","price":"80","userprice":"80","agentprice":"8","vendorprice":"80","planid":"71","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"25","name":"1 GB","price":"180","userprice":"180","agentprice":"170","vendorprice":"170","planid":"72","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"26","name":"2 GB","price":"360","userprice":"360","agentprice":"350","vendorprice":"350","planid":"73","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"27","name":"3 GB","price":"540","userprice":"540","agentprice":"520","vendorprice":"520","planid":"74","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"28","name":"5 GB","price":"900","userprice":"900","agentprice":"850","vendorprice":"850","planid":"75","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"29","name":"10 GB","price":"1800","userprice":"1800","agentprice":"1750","vendorprice":"1750","planid":"76","type":"Corporate","datanetwork":"2","day":"30","nId":"2","networkid":"3","smeId":"3","giftingId":"3","corporateId":"3","vtuId":"3","sharesellId":"3","network":"GLO","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"30","name":"100 MB","price":"30","userprice":"30","agentprice":"20","vendorprice":"20","planid":"67","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"31","name":"300MB","price":"70","userprice":"70","agentprice":"60","vendorprice":"60","planid":"66","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"32","name":"500 MB","price":"85","userprice":"85","agentprice":"80","vendorprice":"80","planid":"51","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"33","name":"1 GB","price":"170","userprice":"170","agentprice":"170","vendorprice":"170","planid":"52","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"34","name":"2 GB","price":"340","userprice":"340","agentprice":"340","vendorprice":"340","planid":"53","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"35","name":"5 GB","price":"850","userprice":"850","agentprice":"850","vendorprice":"850","planid":"54","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"36","name":"10 GB","price":"1700","userprice":"1700","agentprice":"1650","vendorprice":"1650","planid":"55","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"37","name":"15 GB","price":"2700","userprice":"2700","agentprice":"2600","vendorprice":"2600","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"38","name":"20 GB","price":"3600","userprice":"3600","agentprice":"3500","vendorprice":"3500","planid":"0","type":"Corporate","datanetwork":"4","day":"30","nId":"4","networkid":"2","smeId":"2","giftingId":"2","corporateId":"2","vtuId":"2","sharesellId":"2","network":"AIRTEL","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"40","name":"500 MB","price":"72","userprice":"72","agentprice":"72","vendorprice":"72","planid":"85","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"41","name":"1 GB","price":"120","userprice":"120","agentprice":"120","vendorprice":"120","planid":"86","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"42","name":"2 GB","price":"280","userprice":"280","agentprice":"280","vendorprice":"280","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"43","name":"2GB","price":"475","userprice":"475","agentprice":"475","vendorprice":"475","planid":"87","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"44","name":"3 GB","price":"570","userprice":"570","agentprice":"570","vendorprice":"570","planid":"88","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"45","name":"4GB","price":"760","userprice":"760","agentprice":"760","vendorprice":"760","planid":"89","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"46","name":"10 GB","price":"1900","userprice":"1900","agentprice":"1900","vendorprice":"1900","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"47","name":"15 GB","price":"2850","userprice":"2850","agentprice":"2850","vendorprice":"2850","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"48","name":"20 GB","price":"3800","userprice":"3800","agentprice":"3800","vendorprice":"3800","planid":"0","type":"Gifting","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"},{"pId":"50","name":"30 GB","price":"5700","userprice":"5700","agentprice":"5700","vendorprice":"5700","planid":"0","type":"Corporate","datanetwork":"3","day":"30","nId":"3","networkid":"4","smeId":"4","giftingId":"4","corporateId":"4","vtuId":"4","sharesellId":"4","network":"9MOBILE","networkStatus":"On","vtuStatus":"On","sharesellStatus":"On","airtimepinStatus":"Off","smeStatus":"Off","giftingStatus":"Off","corporateStatus":"On","datapinStatus":"Off"}]';
           let options = "<option value=''>Select Plan</option>";
           let price = 0;
           let networkname = $('#datanetworkid').find(":selected").attr('networkname');
           

           useraccount=useraccount.replace(/%3D/g,"=");
           useraccount=atob(useraccount);
           useraccount = parseInt(useraccount);

           if(!plans == ""){
               
               plans=JSON.parse(plans); 
           
               for(i=0; i < plans.length; i++){
                   
                   if(useraccount == 3 || useraccount =='3'){price = plans[i].vendorprice;}
                   else if(useraccount == 2 || useraccount =='2'){price = plans[i].agentprice;}
                   else{price = plans[i].userprice; }

                   if(plans[i].datanetwork == network && plans[i].type == datagroup){
                       options+= "<option value='"+plans[i].dpId+"' dataprice='"+price+"' dataname='"+plans[i].name+" "+plans[i].type+" (N"+price+")("+plans[i].day+" Days) '>"+plans[i].name+" "+plans[i].type+" (N"+price+")("+plans[i].day+" Days)</option>";
                   }
   
               }

           }

           $("#datapinplan").html(options);
           $("#amount").val(null);
           $("#amounttopay").val(null);


   });

   //If Data Plan Is Selected, Get And Set The Price
   $("#datapinplan").on("change",function(){
       $("#amount").val($('#datapinplan').find(":selected").attr('dataprice'));
   });

   $("#datapinquantity").on("change",function(){
       
       if($("#datanetworkid").val() == '' || $("#datanetworkid").val() == null){
           swal("Opps!!","Please Select A Network First.","info"); 
       }
       else{
           let price = parseInt($("#amount").val());
           let quantity = parseInt($("#datapinquantity").val());
           let amounttopay = 0;
           if(quantity > 0){ amounttopay = price * quantity; }
           else{swal("Alert!!","Please Enter A Valid Quantity","error"); }
           $("#amounttopay").val("N"+amounttopay);
       }
      
   });

   //Purchase Data Pin
   $("#datapinForm").submit(function(e){
      

      if($("#thetranspin").val() == null || $("#thetranspin").val() == ''){
          e.preventDefault();
          $("#transpinbtn").attr("action-btn","datapin-btn");
          
          let dataplan = $('#datapinplan').find(":selected").attr('dataname');
          let msg = "You are about to purchase " + $("#datapinquantity").val()+" data pin of ";
         
          msg+='"'+$('#datanetworkid').find(":selected").attr('networkname') + '" ' + dataplan +" plan at ";
          msg+='"' + $("#amounttopay").val() + '"' + " with business name " + '"' + $("#businessname").val() +'"';
          msg+=" <br/> Do you wish to continue?"

          $("#continue-transaction-prompt-msg").html(msg);
          $("#continue-transaction-prompt-btn").click();

          return;
      }

      $('#datapin-btn').removeClass("gradient-highlight");
      $('#datapin-btn').addClass("btn-secondary");
      $('#datapin-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
      
  });



        // ----------------------------------------------------------------------------
        // Wallet Management
        // ----------------------------------------------------------------------------


        $("#transfertype").on("change",function(){
            if($(this).val() == "wallet-wallet"){
                $("#walletreceiver").show();
                $("#walletreceiverinput").attr("required","required");
            }else{$("#walletreceiver").hide();  $("#walletreceiverinput").removeAttr("required");}
            $("#amounttopay").val("N0.00");
        });

        $("#wallettransferamount").on("keyup",function(){
            let amount = parseInt($('#wallettransferamount').val());
            let charges = parseInt($('#wallettowalletcharges').text());
            if($("#transfertype").val() == "wallet-wallet"){amounttopay = amount+charges;} else{amounttopay = amount+0;}
            $("#amounttopay").val("N"+amounttopay);
        });

        //Submit Transfer Request
        $("#transferForm").submit(function(e){
           
           if($("#thetranspin").val() == null || $("#thetranspin").val() == ''){
               e.preventDefault();
               $("#transpinbtn").attr("action-btn","transfer-btn");
               
               let msg = "You are about to perform a  ";
               let action ="Wallet To Wallet";
            
               if($("#transfertype").val() == 'referral-wallet'){action ="Referal To Wallet Transfer"; receiver="your main wallet.";}
               else {action ="Wallet To Wallet Transfer"; receiver=$("#walletreceiverinput").val();}
               
               msg+=action+" of N"+$('#wallettransferamount').val()+ " to "+receiver;
               msg+=" <br/> Do you wish to continue?"

               $("#continue-transaction-prompt-msg").html(msg);
               $("#continue-transaction-prompt-btn").click();

               return;
           }

           $('#transfer-btn').removeClass("gradient-highlight");
           $('#transfer-btn').addClass("btn-secondary");
           $('#transfer-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
           
        });

        // ----------------------------------------------------------------------------
        // Contact Page Management
        // ----------------------------------------------------------------------------

        //Send Contact Message
        $("#message-form").submit(function(e){
            e.preventDefault();

            $('#message-btn').removeClass("gradient-highlight");
            $('#message-btn').addClass("btn-secondary");
            $('#message-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Sending ...');
            
            
            $.ajax({
                url:'home/includes/route.php?save-message',
                data: new FormData($(this)[0]),
                cache: false,
                contentType: false,
                processData: false,
                method: 'POST',
                type: 'POST',
                success:function(resp){
                    console.log(resp);
                    if(resp == 0){
                        swal('Alert!!',"Message Sent Successfully, We Would Get Back To You Soon.","success");
                        $("#message-form")[0].reset();
                    }
                    else{
                        swal('Alert!!',"Unexpected Error, Please Contact Our Customer Support Team.","error");
                    }

                    $('#message-btn').removeClass("btn-secondary");
                    $('#message-btn').addClass("gradient-highlight");
                    $('#message-btn').html("Send Message");

                }
            });

        });

        // ----------------------------------------------------------------------------
        // Alpha Topup Management
        // ----------------------------------------------------------------------------
		
		//If Alpha Plan Is Selected, Get And Set The Price
        $("#alphaplan").on("change",function(){
        let useraccount = getCookie("loginAccount");
           useraccount=useraccount.replace(/%3D/g,"=");
           useraccount=atob(useraccount);
           useraccount = parseInt(useraccount);

            if(useraccount == 3){$("#amounttopay").val("N"+$('#alphaplan').find(":selected").attr('vendor'));}
            if(useraccount == 2){$("#amounttopay").val("N"+$('#alphaplan').find(":selected").attr('agent'));}
            else{$("#amounttopay").val("N"+$('#alphaplan').find(":selected").attr('user'));}
        });
		
		//Purchase Alpha Plan
        $("#alphaplanForm").submit(function(e){
           

           if($("#thetranspin").val() == null || $("#thetranspin").val() == ''){
               e.preventDefault();
               $("#transpinbtn").attr("action-btn","alpha-plan-btn");
               
               let msg = "You are about to purchase ";
               let dataplan = $('#alphaplan').find(":selected").attr('plan');
               msg+= dataplan + " Alpha Topup at " + $("#amounttopay").val() + " for the phone number " + '"' + $("#phone").val() +'"';
               msg+=" <br/> Do you wish to continue?"

               $("#continue-transaction-prompt-msg").html(msg);
               $("#continue-transaction-prompt-btn").click();

               return;
           }

           $('#alpha-plan-btn').removeClass("gradient-highlight");
           $('#alpha-plan-btn').addClass("btn-secondary");
           $('#alpha-plan-btn').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Processing ...');
           
       });

      
    });


    function copyToClipboard(url){
              var $temp=$("<input>");
              $("body").append($temp);
              $temp.val(url).select();
              document.execCommand("copy");
              $temp.remove();
              swal("Success!!","Copied To Clipboard Successfully","success");
    }

    function calculatePaystackCharges(){
        let charges = $("#paystackcharges").val();
        let amount = $("#amount").val();
        amount = parseInt(amount);
        charges = parseFloat(charges);

        if(amount > 2500){
            let amounttopay = amount;
            let discount= 0;

            discount = ((amount * charges)/100) + 100;
            amounttopay = amount - discount;

            $("#amounttopay").val("N"+amounttopay);
            $("#charges").val("N"+discount);
        }
        else{
            let amounttopay = amount;
            let discount= 0;

            discount = (amount * charges)/100;
            amounttopay = amount - discount;

            $("#amounttopay").val("N"+amounttopay);
            $("#charges").val("N"+discount);
        }

    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    }
    
    function verifyNetwork(){
        var selNetwork=$('#networkid').find(":selected").attr('networkname');
        var verNetwork="";
        var phoneT = document.getElementById('phone').value;
        var phoneStr = phoneT.substr(0,4);
        
        if(phoneT==="" || phoneT.length<6)
        {
            document.getElementById('verifyer').innerHTML = "";
        }
        else{
        if(/0702|0704|0803|0806|0703|0706|0813|0816|0810|0814|0903|0906|0913/.test(phoneStr))
        {
            verNetwork="MTN";
        }
        else if(/0805|0807|0705|0815|0811|0905/.test(phoneStr))
        {
            verNetwork="GLO";
        }
        else if(/0702|0704|0803|0806|0703|0706|0813|0816|0810|0814|0903|0906|0913/.test(phoneStr))
        {
            verNetwork="GIFTING";
        }
        else if(/0802|0808|0708|0812|0701|0901|0902|0907|0912/.test(phoneStr))
        {
            verNetwork="AIRTEL";
        }
        else if(/0809|0818|0817|0908|0909/.test(phoneStr))
        {
            verNetwork="9MOBILE";
        }
        else if(/0804/.test(phoneStr))
        {
            verNetwork="NTEL";
        }
        else
        {
            verNetwork="Unable to identify network !";
        }
        if (selNetwork=="ETISALAT") {
                selNetwork="9MOBILE";}
                
            if (verNetwork==selNetwork)
            {
                var ic = "<i class = 'fas fa-check-circle' style ='color: #4BB543;'></i>";
            }
            else 
            {
                ic = "<i class = 'fas fa-exclamation-triangle' style ='color:#B33A3A'></i>";
            }
        
        document.getElementById('verifyer').innerHTML = "Identified Network: <b>"+verNetwork+"  "+ic+"</b><br><b> Note: </b> Ignore warning for <b>Ported Numbers</b>";
    }}


    function selectNetworkByIcon(name){
        $("option[networkname]").removeAttr("selected");
        $("option[networkname='"+name+"']").attr("selected","selected");
        let sme = $('#networkid').find(":selected").attr('sme');
            let gifting = $('#networkid').find(":selected").attr('gifting');
            let corporate = $('#networkid').find(":selected").attr('corporate');
            let networkname = $('#networkid').find(":selected").attr('networkname');
            let thegroup='<option value="">Select Type</option>';

                //Check If Network Is Disabled
                if(sme=="On"){
                    thegroup+='<option value="SME">SME</option>';
                }

                //Check If Network Is Disabled
                if(gifting=="On"){
                   thegroup+='<option value="Gifting">Gifting</option>';
                }

                //Check If Network Is Disabled
                if(corporate=="On"){
                   thegroup+='<option value="Corporate">Corporate</option>';
                }
                $("#datagroup").html(thegroup);
    }

    
    function selectExamByIcon(name){
        $("option[providername]").removeAttr("selected");
        $("option[providername='"+name+"']").attr("selected","selected");
    }

    
