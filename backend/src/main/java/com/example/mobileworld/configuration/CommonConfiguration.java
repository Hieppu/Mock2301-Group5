package com.example.mobileworld.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CommonConfiguration implements WebMvcConfigurer {
    /**
     * Creates a message source bean that loads messages from a properties file located in the classpath.
     * @return a message source bean that can be used to retrieve localized messages
     */
    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:messages");
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }
    /**
     *Creates a ModelMapper bean that can be used for mapping objects between different classes.
     *@return a ModelMapper bean that can be used for object mapping
     */

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
