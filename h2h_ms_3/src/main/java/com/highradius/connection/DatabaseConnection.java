package com.highradius.connection;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class DatabaseConnection {
	// connection url jdbc:mysql://ipAddress:portnumber/databasename
		private static String URL = "jdbc:mysql://localhost:3306/sys";
		// Database username
		private static String USER = "root";
		// Database password
		private static String PASS = "Dilip@9880";

		public Connection connect() throws SQLException {
			Connection con=null;
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
				 con = DriverManager.getConnection(URL, USER, PASS);
				if (con == null) {
					System.out.println("Connection cannot be established");
				}
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
			return con;

}
}
