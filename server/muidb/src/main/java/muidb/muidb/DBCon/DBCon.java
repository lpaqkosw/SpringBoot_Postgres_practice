package muidb.muidb.DBCon;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DBCon {
    private static DBCon instance = new DBCon();
    public static DBCon getInstance() {
        return instance;
    }

    public Connection getConnection(){
        Connection con = null;
        try {
            con = DriverManager.getConnection("jdbc:postgresql://localhost/postgres", "postgres", "1234");
        } catch (Exception e) {
            //TODO: handle exception
            e.printStackTrace();
        }
        return con;
    }

    public void close(Connection con, PreparedStatement ps, ResultSet rs){
        if(rs!=null){
            try {
                rs.close();
            } catch (Exception e) {
                e.printStackTrace();
                //TODO: handle exception
            }
        }
        if(ps!=null){
            try {
                ps.close();
            } catch (Exception e) {
                e.printStackTrace();
                //TODO: handle exception
            }
        }
        if(con!=null){
            try {
                con.close();
            } catch (Exception e) {
                e.printStackTrace();
                //TODO: handle exception
            }
        }
    }
}