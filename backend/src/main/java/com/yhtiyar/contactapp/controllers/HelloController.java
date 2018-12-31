package com.yhtiyar.contactapp.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by user on 12.07.2017.
 */


@RestController
public class HelloController {

    @RequestMapping(value = "/hello")
    public  String getHello(){
        return  "Hello, app works!";
    }
}
