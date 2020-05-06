package muidb.muidb.DBCon;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONObject;
import org.postgresql.util.PGobject;

import muidb.muidb.jwt.JwtRequest;

public class DAO {
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

    public List<JwtRequest> searchLoginID(String id){
        String sql = "select * from todo where id=?";
        List<JwtRequest> list = new ArrayList<JwtRequest>();
        try {
            con = db.getConnection();
            ps = con.prepareStatement(sql);
            ps.setString(1,id);
            rs = ps.executeQuery();
            if(rs.next()){
                JwtRequest idpw = new JwtRequest(rs.getString("id"), rs.getString("pw"));
                list.add(idpw);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        db.close(con, ps, rs);
        return list;
    }
    
    public List<String> selectTodo(String name){
        String sql = "select * from todo where id=?";
        List<String> res = new ArrayList<String>();
        try {
            con = db.getConnection();
            ps=con.prepareStatement(sql);
            ps.setString(1, "lpaqkosw");
            rs=ps.executeQuery();
            while(rs.next()){
                res.add(rs.getObject("item1").toString());
                res.add(rs.getObject("item2").toString());
                res.add(rs.getObject("item3").toString());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        db.close(con, ps, rs);
        return  res;
    }

    public int insertTodo(String name, String item1, String item2, String item3){
        String sql = "update todo set item1=(?::jsonb), item2=(?::jsonb), item3=(?::jsonb) where id=?";
        int row = 0;
        try {
            con = db.getConnection();
            ps=con.prepareStatement(sql);
            ps.setString(1, item1);
            ps.setString(2, item2);
            ps.setString(3, item3);
            ps.setString(4, name);
            row = ps.executeUpdate();
            
        } catch (Exception e) {
            //TODO: handle exception
            e.printStackTrace();
        }
        db.close(con, ps, rs);
        return row;
    }
        
}