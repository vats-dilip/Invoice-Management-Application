package com.highradius.model;

public class Invoice {
	 int id;
     String customerOrderId;
     String salesOrg;
     String distributionChannel;
     String companyCode;
     String orderCreationDate;
     String orderCurrency;
     String customerNumber;
     double amountInUSD;
     double orderAmount;
	public Invoice(int id, String customerOrderId, String salesOrg, String distributionChannel, String companyCode,
			String orderCreationDate, String orderCurrency, String customerNumber, double amountInUSD,
			double orderAmount) {
		super();
		this.id = id;
		this.customerOrderId = customerOrderId;
		this.salesOrg = salesOrg;
		this.distributionChannel = distributionChannel;
		this.companyCode = companyCode;
		this.orderCreationDate = orderCreationDate;
		this.orderCurrency = orderCurrency;
		this.customerNumber = customerNumber;
		this.amountInUSD = amountInUSD;
		this.orderAmount = orderAmount;
	}
	public int getSi() {
		return id;
	}
	public void setSi(int id) {
		this.id = id;
	}
	public String getCustomerOrderId() {
		return customerOrderId;
	}
	public void setCustomerOrderId(String customerOrderId) {
		this.customerOrderId = customerOrderId;
	}
	public String getSalesOrg() {
		return salesOrg;
	}
	public void setSalesOrg(String salesOrg) {
		this.salesOrg = salesOrg;
	}
	public String getDistributionChannel() {
		return distributionChannel;
	}
	public void setDistributionChannel(String distributionChannel) {
		this.distributionChannel = distributionChannel;
	}
	public String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}
	public String getOrderCreationDate() {
		return orderCreationDate;
	}
	public void setOrderCreationDate(String orderCreationDate) {
		this.orderCreationDate = orderCreationDate;
	}
	public String getOrderCurrency() {
		return orderCurrency;
	}
	public void setOrderCurrency(String orderCurrency) {
		this.orderCurrency = orderCurrency;
	}
	public String getCustomerNumber() {
		return customerNumber;
	}
	public void setCustomerNumber(String customerNumber) {
		this.customerNumber = customerNumber;
	}
	public double getAmountInUSD() {
		return amountInUSD;
	}
	public void setAmountInUSD(double amountInUSD) {
		this.amountInUSD = amountInUSD;
	}
	public double getOrderAmount() {
		return orderAmount;
	}
	public void setOrderAmount(double orderAmount) {
		this.orderAmount = orderAmount;
	}
    

   }
