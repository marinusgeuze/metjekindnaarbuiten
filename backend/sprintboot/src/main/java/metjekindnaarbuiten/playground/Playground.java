package metjekindnaarbuiten.playground;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Playground {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String address;
	private String latitude;
	private String longitude;
	private String description;
	private String primaryPicture;
	private String primaryPictureThumb;

	public Playground() {
	}

	@Override
	public String toString() {
		return "Playground [id=" + id + ", address=" + address + ", description=" + description + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrimaryPicture() {
		return primaryPicture;
	}

	public void setPrimaryPicture(String primaryPicture) {
		this.primaryPicture = primaryPicture;
	}

	public String getPrimaryPictureThumb() {
		return primaryPictureThumb;
	}

	public void setPrimaryPictureThumb(String primaryPictureThumb) {
		this.primaryPictureThumb = primaryPictureThumb;
	}
}
