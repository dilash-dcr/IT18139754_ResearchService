$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();

// Form validation-------------------
var status = validateResearchForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }

// If valid------------------------
var type = ($("#hidRIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "ResearchersAPI",
 type : type,
 data : $("#formResearch").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onBuyerSaveComplete(response.responseText, status);
 
}
 });
});


function onResearchSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divResearchesGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while saving.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while saving..");
 $("#alertError").show();
 } 
 $("#hidRIDSave").val("");
 $("#formResearch")[0].reset();
}

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
$("#hidRIDSave").val($(this).data("bno")); 
 $("#buyerID").val($(this).closest("tr").find('td:eq(0)').text());
 $("#name").val($(this).closest("tr").find('td:eq(1)').text());
 $("#address").val($(this).closest("tr").find('td:eq(2)').text());
 $("#phone").val($(this).closest("tr").find('td:eq(3)').text());
 $("#email").val($(this).closest("tr").find('td:eq(4)').text());
 $("#projectName").val($(this).closest("tr").find('td:eq(5)').text());

});