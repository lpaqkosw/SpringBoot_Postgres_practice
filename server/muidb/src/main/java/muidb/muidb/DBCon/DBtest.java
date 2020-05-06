package muidb.muidb.DBCon;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.postgresql.util.PGobject;

public class DBtest {
    DBCon db = DBCon.getInstance();
    Connection con = null;
    PreparedStatement ps = null;
    ResultSet rs = null;

    public void test(){
        String sql = "insert into todo(id,pw) values(?,?)";
        int row = 0;
        try {
            con = db.getConnection();
            ps = con.prepareStatement(sql);
            ps.setString(1, "test");
            ps.setString(2, "test");
            row = ps.executeUpdate();
        } catch (Exception e) {
            //TODO: handle exception
            e.printStackTrace();
        }
        db.close(con, ps, rs);
        System.out.println(row);
    }
    
    public int updateItems(String id, String pw, String json1, String json2, String json3){
        String sql = "update todo set item1=?,item2=?,item3=? where id=? and pw=?";
        int row = 0;

        try {
            PGobject item1 = new PGobject();
            item1.setType("json[]");
            item1.setValue(json1);
            PGobject item2 = new PGobject();
            item2.setType("json[]");
            item2.setValue(json2);
            PGobject item3 = new PGobject();
            item3.setType("json[]");
            item3.setValue(json3);
            con =db.getConnection();
            ps = con.prepareStatement(sql);
            ps.setObject(1, item1);
            ps.setObject(2, item2);
            ps.setObject(3, item3);
            ps.setString(4, id);
            ps.setString(5, pw);
            row = ps.executeUpdate();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        db.close(con, ps, rs);
        return row;
    }

    public int searchLoginID(String id){
        String sql = "select * from todo where id=?";
        int row = 0;
        try {
            con = db.getConnection();
            ps = con.prepareStatement(sql);
            ps.setString(1,id);
            rs = ps.executeQuery();
            if(rs.next()){
                row = 1;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        db.close(con, ps, rs);
        return row;
    }
        
        

    
}