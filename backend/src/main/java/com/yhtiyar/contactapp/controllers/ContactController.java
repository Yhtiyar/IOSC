package com.yhtiyar.contactapp.controllers;

import com.yhtiyar.contactapp.models.Contact;
import com.yhtiyar.contactapp.services.ContactServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.net.*;
import java.util.*;

/**
 * Created by user on 12.07.2017.
 */

@RestController
@CrossOrigin
public class ContactController {

    @Autowired
    ContactServiceImpl contactService;

   /* @RequestMapping( value = "/contact/getAll", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity getAll(){
        System.out.println("getAll");
        List<Contact> contacts = contactService.findAll();
      return  new ResponseEntity<> (contacts, HttpStatus.OK);

    }*/

    @RequestMapping(value="/contact/add",method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity create(@RequestBody @Valid final  Contact contact){
     Contact newContact;

        try {
            contactService.add(contact);
        } catch (Exception ex) {
            return  new ResponseEntity<>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @RequestMapping(value="/contact/update",method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity update(@RequestBody @Valid final  Contact contact){
        System.out.println("update");
        try {
            contactService.update(contact);
        } catch (Exception ex) {
            return  new ResponseEntity<>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @RequestMapping(value="/contact/delete",method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity delete(@RequestBody @Valid final  Contact contact){

        try {
            contactService.delete(contact);
        } catch (Exception ex) {
            return  new ResponseEntity<>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }




}
