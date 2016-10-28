package metjekindnaarbuiten.playground;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlaygroundRESTController {

	@GetMapping("/playground")
	public List<Playground> findAll() {
		
		List<Playground> playgrounds = new ArrayList<>();
		
		Playground playground1 = new Playground();
		playground1.setId(1);
		playground1.setAddress("Shup, Hooglanderveen");
		playground1.setLatitude("52.1838884");
		playground1.setLongitude("5.4287558");
		playground1.setDescription("Houten speelrekje met glijbaan sdfsdf sdfsdsdf asdfdsa dfsdasdf asdfsdfa asdfasd asdfasdfa 12233445543322");
		playground1.setPrimaryPicture("images/1_1_400px.jpg");
		playground1.setPrimaryPictureThumb("images/1_1_100px.jpg");
		playgrounds.add(playground1);
		
		Playground playground2 = new Playground();
		playground2.setId(2);
		playground2.setAddress("Dirk van Weelaan, Hooglanderveen");
		playground2.setLatitude("52.1848192");
		playground2.setLongitude("5.4299501");
		playground2.setDescription("Groot speeltuintje met glijbaan, wipwap kip en klimnet, etc.");
		playground2.setPrimaryPicture("images/2_1_400px.jpg");
		playground2.setPrimaryPictureThumb("images/2_1_100px.jpg");
		playgrounds.add(playground2);
			  
		return playgrounds;
	}
}
