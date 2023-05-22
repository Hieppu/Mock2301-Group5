
package com.example.mobileworld.configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition
public class SwaggerConfiguration {
    /**
     * Creates an OpenAPI bean that provides documentation for the API using the OpenAPI specification.
     * Sets the title and version of the API in the OpenAPI object's Info instance.
     * @return an OpenAPI bean that can be used to generate API documentation
     */
    @Bean
    public OpenAPI api(){
        return new OpenAPI().info(new Info().title("API ExTrade")
                .version("V1"));
    }

}

