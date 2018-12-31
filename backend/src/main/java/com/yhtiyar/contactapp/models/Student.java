package com.yhtiyar.contactapp.models;

import com.yhtiyar.contactapp.dao.StudentDaoImpl;
import com.yhtiyar.contactapp.services.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by user on 23.10.2017.
 */
public class Student {
    int id;
    String name;
    String surname;
    String login;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    String password;
    int userTypeId = 3;
    int CountryId;
    int grade;
    int teacherId;
    public int raiting = 1500;

    public  Student(String _login, String _password, String _name, String _surname, int _grade, int _CountryId) {
        this.login = _login;
        this.password = _password;
        this.name = _name;
        this.surname = _surname;
        this.grade = _grade;
        this.CountryId = _CountryId;

    }

    public Student(){

    }

    public int getId() {return id;}

    public void setId(int id) {this.id = id;}

    public String getLogin() {return login;}

    public void setLogin(String login) {this.login = login;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getSurname(){ return surname;}

    public void setSurname(String surname) {this.surname = surname;}

    public int getUserTypeId() {return userTypeId;}

    public void setUserTypeId(int userTypeId) {this.userTypeId = userTypeId;}

    public int getCountryId() {return CountryId;}

    public void setCountryId(int countryId) {CountryId = countryId;}

    public int getGrade() {return grade;}

    public void setGrade(int grade) {this.grade = grade;}

    public int getTeacherId() {return teacherId;}

    public void setTeacherId(int teacherId) {this.teacherId = teacherId;}

    public int getRaiting() {return raiting;}

    public void setRaiting(int raiting) {this.raiting = raiting;}

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", userTypeId=" + userTypeId +
                ", CountryId=" + CountryId +
                ", grade=" + grade +
                ", teacherId=" + teacherId +
                ", raiting=" + raiting +
                '}';
    }


}
