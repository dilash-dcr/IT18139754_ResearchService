<%@page import="com.research"%>
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
<div class="container"><div class="row"><div class="col-6">
<h1>Research Service </h1>

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
<input id="rAddress" name="rAddress" type="text"
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

<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divResearchesGrid">
 <%
 research researchObj = new research();
 out.print(researchObj.readResearch());
 %>
</div>
</div> </div> </div>

</body>
</html>