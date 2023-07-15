package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.implementation.InvoiceDaoImpl;

/**
 * Servlet implementation class delete
 */
@WebServlet("/deleteinvoice")
public class delete extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private InvoiceDaoImpl handler;
    public delete() {
    	handler = new InvoiceDaoImpl();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "*");
        response.setContentType("text/html");
        response.setContentType("reply/html");
		int id=Integer.parseInt(request.getParameter("Sl_no"));
		int status=handler.deleteInvoice(id);
			PrintWriter out;
			try {
				out = response.getWriter();
				if(status==1)
				{
					out.println("Deletion of Invoice Successful.");
				}
				else {
					out.println("Deletion of Invoice Failed");

				}
				out.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

	}

}
