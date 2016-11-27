package metjekindnaarbuiten.playground;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlaygroundRESTController {

    @Autowired
    PlaygroundRepository playgroundRepository;
    
	@GetMapping("/playground")
	public Iterable<Playground> findAll() {
		
		Iterable<Playground> playgrounds = playgroundRepository.findAll();
		return playgrounds;
	}
}
