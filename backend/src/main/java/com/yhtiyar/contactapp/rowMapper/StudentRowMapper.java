package com.yhtiyar.contactapp.rowMapper;

import com.yhtiyar.contactapp.models.Student;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by user on 09.02.2018.
 */
public class StudentRowMapper implements RowMapper<Student> {
    @Override
    public Student mapRow(ResultSet resultSet, int i) throws SQLException {
        Student s = new Student();
        s.setId(resultSet.getInt("student_Id"));
        s.setName(resultSet.getString("student_Name"));
        s.setGrade(resultSet.getInt("student_Grade"));
        s.setCountryId(resultSet.getInt("student_Country_Id"));
        s.setRaiting(resultSet.getInt("student_Raiting"));
        s.setLogin(resultSet.getString("student_Login"));
        s.setSurname(resultSet.getString("student_Surname"));
        s.setTeacherId(resultSet.getInt("student_Teacher_Id"));
        s.setPassword(resultSet.getString("student_Password"));
        return s;
    }
}
