package metjekindnaarbuiten;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import metjekindnaarbuiten.playground.Playground;
import metjekindnaarbuiten.playground.PlaygroundRepository;

@SpringBootApplication
@RestController
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:8100");
			}
		};
	}

	@RequestMapping("/")
	public String home() {
		return "REST API of the metjekindnaarbuiten solution";
	}

	@Bean
	public CommandLineRunner demo(PlaygroundRepository repository) {
		return (args) -> {

			Playground playground1 = new Playground();
			playground1.setId(1);
			playground1.setAddress("Shup, Hooglanderveen");
			playground1.setLatitude("52.1838884");
			playground1.setLongitude("5.4287558");
			playground1.setDescription(
					"Houten speelrekje met glijbaan sdfsdf sdfsdsdf asdfdsa dfsdasdf asdfsdfa asdfasd asdfasdfa 12233445543322");
			playground1.setPrimaryPicture("images/1_1_400px.jpg");
			playground1.setPrimaryPictureThumb("images/1_1_100px.jpg");
			repository.save(playground1);

			Playground playground2 = new Playground();
			playground2.setId(2);
			playground2.setAddress("Dirk van Weelaan, Hooglanderveen");
			playground2.setLatitude("52.1848192");
			playground2.setLongitude("5.4299501");
			playground2.setDescription("Groot speeltuintje met glijbaan, wipwap kip en klimnet, etc.");
			playground2.setPrimaryPicture("images/2_1_400px.jpg");
			playground2.setPrimaryPictureThumb("images/2_1_100px.jpg");
			repository.save(playground2);
		};
	}
}