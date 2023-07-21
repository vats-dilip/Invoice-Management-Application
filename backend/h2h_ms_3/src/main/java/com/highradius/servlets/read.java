package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.Invoice;

/**
 * Servlet implementation class read
 */
@WebServlet("/readinvoice")
public class read extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private InvoiceDaoImpl handler;

    public read() {
    	handler = new InvoiceDaoImpl();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 response.setHeader("Access-Control-Allow-Origin", "*");
		    response.setHeader("Access-Control-Allow-Methods", "GET");
		ArrayList<Invoice> data=handler.getInvoice();
		
        // Convert the invoice data to JSON using Gson library
		Gson gson = new Gson();
        String json = gson.toJson(data);
        
     // Set the response content type to JSON
        response.setContentType("application/json");
        
     // Get the response writer
        PrintWriter out;
		try {
			out = response.getWriter();
	        // Write the JSON response
			out.append(json);
	        out.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		}

}
