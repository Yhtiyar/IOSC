package com.yhtiyar.contactapp.dao;

import com.yhtiyar.contactapp.models.Student;
import java.util.List;
/**
 * Created by user on 09.02.2018.
 */
public interface StudentDao {
    List<Student> getAll();
    Student addNew(Student student);
    void reset();
    Student update(Student student);
    void delete(Student student);
    Student getStudentById(int id);
    Student getStudentByLogin(String login);

}
