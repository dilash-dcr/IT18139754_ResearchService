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
 url : "ResearchesAPI",
 type : type,
 data : $("#formResearch").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onResearchSaveComplete(response.responseText, status);
 
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
$("#hidRIDSave").val($(this).closest("tr").find('#hidRIDUpdate').val());
 $("#rName").val($(this).closest("tr").find('td:eq(0)').text());
 $("#rPhone").val($(this).closest("tr").find('td:eq(1)').text());
 $("#rEmail").val($(this).closest("tr").find('td:eq(2)').text());
 $("#rAddress").val($(this).closest("tr").find('td:eq(3)').text());
 $("#projectName").val($(this).closest("tr").find('td:eq(4)').text());
 $("#rCost").val($(this).closest("tr").find('td:eq(5)').text());

});

//DELETE==========================================
$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "ResearchesAPI",
 type : "DELETE",
 data : "RID=" + $(this).data("rid"),
 dataType : "text",
 complete : function(response, status)
 {
 onResearchDeleteComplete(response.responseText, status);
 }
 });
});

function onResearchDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divResearchesGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
}

// CLIENT-MODEL================================================================
function validateResearchForm()
{
	
// Research Name----------------------
if ($("#rName").val().trim() == "")
 {
 return "Insert Research Name.";
 }
// Phone-------------------------------
if ($("#rPhone").val().trim() == "")
 {
 return "Insert Phone Number.";
 }
// Email-------------------------------
if ($("#rEmail").val().trim() == "")
 {
 return "Insert Email.";
 }
// Address-------------------------------
if ($("#rAddress").val().trim() == "")
 {
 return "Insert Address.";
 }
// Project Name-------------------------------
if ($("#projectName").val().trim() == "")
 {
 return "Insert Project Name.";
 }
// Cost------------------------
if ($("#rCost").val().trim() == "")
 {
 return "Insert Cost.";
 }
return true;
}