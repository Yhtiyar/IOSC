package com.yhtiyar.contactapp.services;

import com.yhtiyar.contactapp.dao.StudentDaoImpl;
import com.yhtiyar.contactapp.models.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by user on 09.02.2018.
 */
@Service
    public class StudentServiceImpl implements  StudentService{
    @Autowired
    StudentDaoImpl studentDao;
    @Override
    public List<Student> getAll() {
       return studentDao.getAll();
    }

    @Override
    public Student getStudentByLogin(String login) {
        return  studentDao.getStudentByLogin(login);
    }

    @Override
    public Student addNew(Student student) {
        return studentDao.addNew(student);
    }

    @Override
    public void reset() {

    }

    @Override
    public Student update(Student student) {
       return studentDao.update(student);
    }

    @Override
    public void delete(Student student) {
       studentDao.delete(student);
    }

    @Override
    public Student getStudentById(int id) {
        return studentDao.getStudentById(id);
    }
}
