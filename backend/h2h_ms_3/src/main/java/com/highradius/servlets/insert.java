package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.implementation.InvoiceDaoImpl;

@WebServlet("/insertinvoice")
public class insert extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private InvoiceDaoImpl handler;

    public insert() {
        handler = new InvoiceDaoImpl();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    	 response.setHeader("Access-Control-Allow-Origin", "*");
         response.setHeader("Access-Control-Allow-Methods", "*");
         response.setContentType("text/html");
        PrintWriter out = response.getWriter();
       
        int customerOrderId = Integer.parseInt(request.getParameter("customerOrderId"));
        int salesOrg = Integer.parseInt(request.getParameter("salesOrg"));
        String distributionChannel = request.getParameter("distributionChannel");
        int companyCode = Integer.parseInt(request.getParameter("companyCode"));
        String orderCreationDate = request.getParameter("orderCreationDate");
        String orderCurrency = request.getParameter("orderCurrency");
        int customerNumber = Integer.parseInt(request.getParameter("customerNumber"));
        Double amountInUSD = Double.parseDouble(request.getParameter("amountInUSD"));
       
        int status = handler.insertInvoice(customerOrderId, salesOrg, distributionChannel, customerNumber, companyCode,
                orderCurrency, amountInUSD, orderCreationDate);

        if (status == 1) {
            out.println("Insertion of Invoice Successful");
        } else {
            out.println("Insertion of Invoice Failed");
        }
        out.close();

    }
}
