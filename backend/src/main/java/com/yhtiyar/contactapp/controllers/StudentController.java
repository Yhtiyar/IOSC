package com.yhtiyar.contactapp.controllers;

import com.yhtiyar.contactapp.models.Student;
import com.yhtiyar.contactapp.services.StudentService;
import com.yhtiyar.contactapp.services.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import javax.validation.Valid;

/**
 * Created by user on 09.02.2018.
 */
@RestController
@CrossOrigin
public class StudentController {
    @Autowired
    StudentServiceImpl studentService;

    @RequestMapping( value = "/student/getAll", method = RequestMethod.GET)
    @ResponseBody
    public  ResponseEntity getAll(){
        System.out.println("getAll");
        return  new ResponseEntity<>(studentService.getAll(),HttpStatus.OK);
    }

    @RequestMapping( value = "/student/get/{id}", method = RequestMethod.GET)
    @ResponseBody
    public  ResponseEntity getById(@PathVariable final int id){
        Student s;
        try {
            s=studentService.getStudentById(id);
        }
        catch (Exception e) {
            s=null;
            System.out.println(s);
            return  new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return  new ResponseEntity<>(s,HttpStatus.OK);
    }

    @RequestMapping( value = "/student/getByLogin/{login}/{ending}", method = RequestMethod.GET)
    @ResponseBody
    public  ResponseEntity getByLogin(@PathVariable final String login, @PathVariable final String ending){
        Student s;
        System.out.println("ending: "+ending);
      //  System.out.println(login);
        try {
            s=studentService.getStudentByLogin(login);
        }
        catch (Exception e) {
            s=null;

            return  new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return  new ResponseEntity<>(s,HttpStatus.OK);
    }


    @RequestMapping( value = "/student/addNew", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity create(@RequestBody @Valid final Student student){
      //  System.out.println(student.getLogin());
          try{
              studentService.addNew(student);
          }
          catch (Exception ex) {
              return  new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
          }
        return new ResponseEntity<>(student,HttpStatus.OK);
    }

    @RequestMapping( value = "/student/Update", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity update(@RequestBody @Valid final Student student){

        Student s;
        System.out.println(student);
        try{
            s = studentService.update(student);
        }
        catch (Exception ex) {
            return  new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        System.out.println(s);
        return new ResponseEntity<>(s,HttpStatus.OK);
    }
}
