package muidb.muidb;

import java.util.List;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import muidb.muidb.DBCon.DAO;
import muidb.muidb.jwt.JwtUtil;
import muidb.muidb.model.TodoModel;
import muidb.muidb.model.TodoRequestModel;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TODOController {

	@Autowired
	private JwtUtil util;
	
	@ResponseBody
	@RequestMapping(value = "/gettodo", method = RequestMethod.POST)
	public TodoModel gettodo(@RequestBody TodoModel model) {
		System.out.println("get token:  ============"+ model.getToken());
		String name = util.getUsernameFromToken(model.getToken());
		DAO dao = new DAO();
		List<String> list = dao.selectTodo(name);
		
		return new TodoModel(list.get(0), list.get(1), list.get(2));
	}

	
	@RequestMapping(value = "/savetodo", method = RequestMethod.POST)
	public int posttodo(@RequestBody TodoModel data) {
		// System.out.println(data.getItem1());
		String token = data.getToken();
		String item1 = data.getItem1();
		String item2 = data.getItem2();
		String item3 = data.getItem3();
		String name=util.getUsernameFromToken(token.substring(6));
		// String name = util.getUsernameFromToken(token);
		// System.out.println(name);
		System.out.println("item1: ====="+ item1);
		System.out.println("item2: ====="+ item2);
		System.out.println("item3: ====="+ item3);
		System.out.println("token: ====="+ token);
		System.out.println(name);
		DAO dao = new DAO();
		int row = dao.insertTodo(name, item1, item2, item3);
		
		
		return row;
	}

	
}