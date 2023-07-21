package com.highradius.implementation;
import  com.highradius.connection.DatabaseConnection;
import com.highradius.model.*;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.PreparedStatement;

import java.util.*;

public class InvoiceDaoImpl{
	DatabaseConnection DatabaseConnection=new DatabaseConnection();
	public int insertInvoice(int customerOrderId,int salesOrg, String distributionChannel,int customerNumber,int companyCode, String orderCurrency,Double amountInUSD,String orderCreationDate) {
		 int status=0;
		 try (Connection connection = DatabaseConnection.connect()) {
	         // Create a statement
	         Statement statement = connection.createStatement();
	         
	         // Execute a query
	         PreparedStatement ps = connection.prepareStatement("insert into h2h_oap(customer_Order_Id,sales_Org, distribution_Channel,company_Code,order_Creation_Date, order_Currency,customer_Number,amount_In_USD) values(?,?,?,?,?,?,?,?) ");
				ps.setInt(1, customerOrderId);
				ps.setInt(2, salesOrg);
				ps.setString(3, distributionChannel);
				ps.setInt(4, companyCode);
				ps.setString(5, orderCreationDate);
				ps.setString(6, orderCurrency);
				ps.setInt(7, customerNumber);
				ps.setDouble(8, amountInUSD);
				status = ps.executeUpdate();
	         // Close the result set and statement
	         ps.close();
	         statement.close();
	         connection.close();
	         
	     } catch (SQLException ex) {
	         ex.printStackTrace();
	     }
		 return status;
	}
	
	public ArrayList<Invoice> getInvoice(){
		ArrayList<Invoice> invoice=new ArrayList<Invoice>(); 
		try (Connection connection = DatabaseConnection.connect()) {
	         // Create a statement
	         Statement statement = connection.createStatement();

	         // Execute a query
	         String query = "SELECT sl_no,customer_Order_Id,sales_Org, distribution_Channel,company_Code,order_Creation_Date, order_Currency,customer_Number,amount_In_USD,order_Amount FROM h2h_oap LIMIT 1000";
	         ResultSet resultSet = statement.executeQuery(query);

	         // Process the result set
	         while (resultSet.next()) {
	             // Retrieve data from the result set
	             int id=resultSet.getInt(1);
	             String customerOrderId=resultSet.getString(2);
	             String salesOrg=resultSet.getString(3);
	             String distributionChannel=resultSet.getString(4);
	             String companyCode=resultSet.getString(5);
	             String orderCreationDate=resultSet.getString(6);
	             String orderCurrency=resultSet.getString(7);
	             String customerNumber=resultSet.getString(8);
	             double amountInUSD=resultSet.getDouble(9);
	             double orderAmount=resultSet.getDouble(10);
	             Invoice temp=new Invoice(id, customerOrderId, salesOrg, distributionChannel, companyCode,
	            		    orderCreationDate, orderCurrency, customerNumber, amountInUSD, orderAmount);
	             invoice.add(temp);
	         }

	         // Close the result set and statement
	         resultSet.close();
	         statement.close();
             connection.close();
	     } catch (SQLException e) {
	         e.printStackTrace();
	     }
		return invoice;
	}
	
	public int deleteInvoice(int Sl_no)
	{
		 int status=0;
		 try (Connection connection = DatabaseConnection.connect()) {
	         // Create a statement
	         Statement statement = connection.createStatement();
	         
	         // Execute a query
	         PreparedStatement ps = connection.prepareStatement("delete from h2h_oap where Sl_no=?");
	         	ps.setInt(1, Sl_no);
				status = ps.executeUpdate();

	         // Close the result set and statement
	         ps.close();
	         statement.close();
	         connection.close();
	         
	     } catch (SQLException e) {
	         e.printStackTrace();
	     }
		 return status;
	}
	public int updateInvoice(int id,String distributionChannel,int companyCode,String orderCurrency)
	{
		 int status=0;
		 try (Connection connection = DatabaseConnection.connect()) {
	         // Create a statement
	         Statement statement = connection.createStatement();
	         
	         // Execute a query
	         PreparedStatement ps = connection.prepareStatement("update h2h_oap  distribution_Channel=?,company_Code=?,order_Currency=? where Sl_no=?");
	            ps.setString(1,distributionChannel);
				ps.setInt(2, companyCode);
				ps.setString(3, orderCurrency);
				ps.setInt(4, id);
				status = ps.executeUpdate();

	         // Close the result set and statement
	         ps.close();
	         statement.close();
	         connection.close();
	         
	     } catch (SQLException ex) {
	         ex.printStackTrace();
	     }
		 return status;
		//Instructed to leave blank
	}
	
}
