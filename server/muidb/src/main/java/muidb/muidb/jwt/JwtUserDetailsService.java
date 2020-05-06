package muidb.muidb.jwt;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import muidb.muidb.DBCon.DAO;
import java.util.ArrayList;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        DAO dao = new DAO();
        List<JwtRequest> list = dao.searchLoginID(username);
        if(list.size()>=1){
            return new User(list.get(0).getUsername(), list.get(0).getPassword(), new ArrayList<>());
        }
         else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}
}