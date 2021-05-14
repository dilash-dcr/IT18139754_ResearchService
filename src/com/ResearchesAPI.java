package com;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * Servlet implementation class ResearchesAPI
 */
@WebServlet("/ResearchesAPI")
public class ResearchesAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
	 research researchObj = new research();
	    
	    private static Map getParasMap(HttpServletRequest request)
	    {
	     Map<String, String> map = new HashMap<String, String>();
	    try
	     {
	     Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
	     String queryString = scanner.hasNext() ?
	     scanner.useDelimiter("\\A").next() : "";
	     scanner.close();
	     String[] params = queryString.split("&");
	     for (String param : params)
	     { 
	    	 String[] p = param.split("=");
	    	 map.put(p[0], p[1]);
	    	 }
	    	 }
	    	catch (Exception e)
	    	 {
	    	 }
	    	return map;
	    	}
	
    public ResearchesAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String output = researchObj.insertResearch(request.getParameter("rName"),
				 request.getParameter("rPhone"),
				request.getParameter("rEmail"),
				request.getParameter("rAddress"),
				request.getParameter("projectName"),
				request.getParameter("rCost"));
				response.getWriter().write(output); 
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		 String output = researchObj.updateResearch(paras.get("hidRIDSave").toString(),
		 paras.get("rName").toString(),
		 paras.get("rPhone").toString(),
		 paras.get("rEmail").toString(),
		 paras.get("rAddress").toString(),
		 paras.get("projectName").toString(),
		paras.get("rCost").toString());
		response.getWriter().write(output);
	}
	

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		 String output = researchObj.deleteResearch(paras.get("RID").toString());
		response.getWriter().write(output);
	}

}
