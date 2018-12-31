package com.yhtiyar.contactapp.dao;

import com.yhtiyar.contactapp.models.Contact;
import com.yhtiyar.contactapp.rowMapper.ContactRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
/**
 * Created by user on 12.07.2017.
 */





@Repository
public class ContactDaoImpl implements ContactDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    List<Contact> contacts = new ArrayList<Contact>();
    private int id=1;

/*
    @Override
  public List<Contact> getAll() {
        return contacts;
    }


*/

    @Override
    public List<Contact> getAll() {
        String sqlQuery = "SELECT * FROM contacts";
        List<Contact> contactList = jdbcTemplate.query(sqlQuery,  new ContactRowMapper());
        return contactList ;



    }

    @Override
    public void update(Contact contact) {
        String sqlQuery ="UPDATE contacts SET Name=?, EmailAdress=? , PhoneNumber=?  WHERE Id="+contact.getId();
        try {
            jdbcTemplate.update(sqlQuery, getPreparedStatementSetter(contact));
        }
        catch (Exception e){
            System.out.println(e);
        }
        System.out.println(contact);
    }

    @Override
    public void delete(Contact contact) {
        String sqlQuery = "DELETE FROM contacts WHERE contacts.Id="+contact.getId();
        try {
            jdbcTemplate.update(sqlQuery);
        }
        catch (Exception e){
            System.out.println(e);
        }
        System.out.println("deleted");

    }
    private  void  deleteById(Contact contact) {
        System.out.println("delete final");

        for (Contact con : contacts) {
            if (con.getId()==contact.getId()) {
                contacts.remove(con);
                return;
            }
        }



    }


    private void updateById(Contact contact) {
        System.out.println("update final");
        for (Contact con : contacts) {
            if (con.getId()==contact.getId()) {
                contacts.set(contacts.indexOf(con),contact);
                return;
            }
        }
    }

    @Override
    public void addNew(Contact contact) {
        final String sql = "insert into contacts(Name, EmailAdress,PhoneNumber) values(?,?,?)";
        KeyHolder holder = new GeneratedKeyHolder();

        jdbcTemplate.update(new PreparedStatementCreator() {

            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                int i = 0;
                ps.setString(++i, contact.getName());
                ps.setString(++i, contact.getEmailAdress());
                ps.setString(++i,contact.getPhoneNumber());
                return ps;
            }
        }, holder );

        Long productId = holder.getKey().longValue();

    }

    @Override
    public void reset() {
        contacts=new ArrayList<Contact>();
    }

    private PreparedStatementSetter getPreparedStatementSetter(final Contact contact ){

        return new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {

                int i = 0;

                ps.setString(++i, contact.getName());
                ps.setString(++i,contact.getEmailAdress());
                ps.setString(++i,contact.getPhoneNumber());
            }
        };

    }
}
