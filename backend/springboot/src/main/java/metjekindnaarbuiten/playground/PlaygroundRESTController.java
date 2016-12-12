package metjekindnaarbuiten.playground;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/playground")
public class PlaygroundRESTController {

	@Autowired
	PlaygroundRepository playgroundRepository;

	@GetMapping()
	public Iterable<Playground> findAll() {

		Iterable<Playground> playgrounds = playgroundRepository.findAll();
		return playgrounds;
	}

	@PostMapping()
	ResponseEntity<?> add(@RequestBody Playground playground) {

		// TODO: validate input

		Playground result = this.playgroundRepository.save(playground);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(result.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
}
