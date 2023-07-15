package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.implementation.*;

/**
 * Servlet implementation class update
 */
@WebServlet("/updateinvoice")
public class update extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private InvoiceDaoImpl handler;

    public update() {
    	handler = new InvoiceDaoImpl();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
			}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 response.setHeader("Access-Control-Allow-Origin", "*");
         response.setHeader("Access-Control-Allow-Methods", "*");
		response.setContentType("reply/html");
		int si = Integer.parseInt(request.getParameter("id"));
	    String distributionChannel = request.getParameter("distributionChannel");
	    int companyCode = Integer.parseInt(request.getParameter("companyCode"));
	    String orderCurrency = request.getParameter("orderCurrency");
	    
		int status = handler.updateInvoice(si,distributionChannel,companyCode,orderCurrency);
		PrintWriter out;
		try {
			out = response.getWriter();
			if(status==1)
			{
				out.println("Updation of Invoice Successful.");
			}
			else {
				out.println("Updation of Invoice Failed");

			}
			out.close();
		} catch (IOException ex) {
			// TODO Auto-generated catch block
			ex.printStackTrace();
		}
	}

}