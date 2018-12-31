package com.yhtiyar.contactapp.dao;

import com.yhtiyar.contactapp.models.Student;
import com.yhtiyar.contactapp.rowMapper.StudentRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by user on 09.02.2018.
 */
@Repository
public class StudentDaoImpl implements  StudentDao{

    @Autowired
    private JdbcTemplate jdbcTemplate ;

    List<Student> students = new ArrayList<>();
    public StudentDaoImpl(){

    }


    @Override
    public List<Student> getAll() {

       String sqlQuerry = "SELECT * FROM students";
        students=jdbcTemplate.query(sqlQuerry, new StudentRowMapper());
        return this.students;
    }

   /* @Override
    public List<Student> getStudentById() {

        String sqlQuerry = "SELECT * FROM students";
        students=jdbcTemplate.query(sqlQuerry, new StudentRowMapper());
        return this.students;
    }*/

    @Override
    public Student addNew(Student student) {
       String sql="INSERT INTO students ( student_Login, student_Password, student_Name, student_Surname, student_Grade, student_Raiting, student_Teacher_Id, student_UserTypeId, student_Country_Id) values(?,?,?,?,?,?,?,?,?)";
        KeyHolder holder = new GeneratedKeyHolder();
        try {
            jdbcTemplate.update(new PreparedStatementCreator() {
                @Override
                public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                    PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                    int i = 0;
                    ps.setString(++i, student.getLogin());
                    ps.setString(++i, student.getPassword());
                    ps.setString(++i, student.getName());
                    ps.setString(++i, student.getSurname());
                    ps.setInt(++i, student.getGrade());
                    ps.setInt(++i, student.getRaiting());
                    ps.setInt(++i, student.getTeacherId());
                    ps.setInt(++i, student.getUserTypeId());
                    ps.setInt(++i, student.getCountryId());
                    return ps;
                }
            }, holder);
            int id = holder.getKey().intValue();
            student.setId(id);
        }
        catch (Exception e){
            System.out.println(e);
        }
        return student;
        }


    @Override
    public void reset() {
       this.students = new ArrayList<>();
    }

    @Override
    public Student update(Student student) {
      String sqlQuerry = "UPDATE students SET student_Login=?, student_Password=?, student_Name=?, student_Surname=?, student_Grade=?, student_Raiting=?, student_Teacher_Id=?, student_UserTypeId=?, student_Country_Id=? WHERE student_Id="+student.getId();
        try{
            jdbcTemplate.update(sqlQuerry,getPreparedStatementSetter(student));
        }
        catch (Exception e){
            System.out.println(e);
        }
        return  student;
    }

    @Override
    public void delete(Student student) {
        for(int i=0; i<students.size(); i++){
            if (students.get(i).getId() == student.getId()){
                students.remove(i);
                return;
            }
        }
    }

    @Override
    public Student getStudentById(int id) {
        String sql = "SELECT * FROM students where student_Id="+id;
        List<Student>s;
         s=jdbcTemplate.query(sql, new StudentRowMapper());
        return s.get(0);
    }

    @Override
    public Student getStudentByLogin(String login) {

        String sql = "SELECT * FROM students where student_Login='"+login+"'";
            System.out.println(sql);
            List<Student>s=new ArrayList<>();
            try{
            s=jdbcTemplate.query(sql, new StudentRowMapper());
        }
        catch (Exception e){
            System.out.println(e);
        }
        return s.get(0);
    }

    private PreparedStatementSetter getPreparedStatementSetter(final Student student ){

        return new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {

                int i = 0;

                ps.setString(++i, student.getLogin());
                ps.setString(++i,student.getPassword());
                ps.setString(++i,student.getName());
                ps.setString(++i,student.getSurname());
                ps.setInt(++i,student.getGrade());
                ps.setInt(++i,student.getRaiting());
                ps.setInt(++i,student.getTeacherId());
                ps.setInt(++i,student.getUserTypeId());
                ps.setInt(++i,student.getCountryId());
            }
        };

    }

}
