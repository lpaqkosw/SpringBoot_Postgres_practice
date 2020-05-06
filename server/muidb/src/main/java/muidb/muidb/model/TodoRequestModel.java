package muidb.muidb.model;

import java.io.Serializable;

public class TodoRequestModel implements Serializable {
    private String token;
    
    //need default constructor for JSON Parsing
    public TodoRequestModel(){
    }

    public TodoRequestModel( String token) {
        this.setToken(token);
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}