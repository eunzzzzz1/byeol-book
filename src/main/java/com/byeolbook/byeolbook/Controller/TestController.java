package com.byeolbook.byeolbook.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RestController = @Controller + @ResponseBody
public class TestController {

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
}
