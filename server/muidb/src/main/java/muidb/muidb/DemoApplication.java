package muidb.muidb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		System.setProperty("aws.accessKeyId", "AKIAU5757V3AIOV2TBOD");
		System.setProperty("aws.secretKey", "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");
		SpringApplication.run(DemoApplication.class, args);
	}

}
 