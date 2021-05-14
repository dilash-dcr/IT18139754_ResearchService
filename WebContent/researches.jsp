<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/researches.js"></script>
<title>Insert title here</title>
</head>
<body>
<form id="formResearch" name="formResearch" method="post" action="researches.jsp">
Researcher Name:
<input id="rName" name="rName" type="text"
class="form-control form-control-sm">
<br> Phone:
<input id="rPhone" name="rPhone" type="text"
class="form-control form-control-sm">
<br> Email:
<input id="rEmail" name="rEmail" type="text"
class="form-control form-control-sm">
<br> Address:
<input id="rAddressc" name="rAddress" type="text"
class="form-control form-control-sm">
<br> Project Name:
<input id="projectName" name="projectName" type="text"
class="form-control form-control-sm">
<br> Cost:
<input id="rCost" name="rCost" type="text"
class="form-control form-control-sm">
<br>
<input id="btnSave" name="btnSave" type="button" value="Save"
class="btn btn-primary">
<input type="hidden" id="hidRIDSave" name="hidRIDSave" value="">
</form>

</body>
</html>