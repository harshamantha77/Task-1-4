$(document).ready(function(){"I"==$("#userType").val()?($("#header1").text("Individual Details"),$("#aadharNumber").attr("placeholder","Enter aadhar number"),$("#labelkey").text("Aadhar Number"),$("#registrationNumber").removeAttr("required"),$("#registrationNumber").hide(),$("#registration_Number").hide(),$(".newValue").attr("data-title","Individual Details")):($("#header1").text("Company Details"),$("#aadharNumber").attr("placeholder","Enter udyog aadhar number"),$("#labelkey").text("Udyog Aadhar Number"),$("#registrationNumber").show(),$("#registration_Number").show(),$(".newValue").attr("data-title","Company Details"))});