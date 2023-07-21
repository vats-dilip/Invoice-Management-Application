package com.highradius.implementation;
import com.highradius.model.*;
import java.util.*;
public interface InvoiceDao {
	public ArrayList<Invoice> getInvoice();
	public int insertInvoice(String customerOrderId,String salesOrg,String distributionChannel,String companyCode,String orderCreationDate,String orderCurrency,String customerNumber, Double amountInUSD, Double orderAmount);
	public int updateInvoice(int id,Invoice invoice);
	public int deleteInvoice(int id);
}
